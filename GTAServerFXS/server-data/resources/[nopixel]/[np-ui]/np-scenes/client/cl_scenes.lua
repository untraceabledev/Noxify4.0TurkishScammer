local sceneStarted = false
local scenesEnabled = true
local activePos = nil
local activeOffset = nil
local activeScenes = {}
local drawnScenes = {}
local nuiDrawnScenes = {}
local drawnObjs = {}
local lastUpdate = GetGameTimer()
local playerCoords = nil
local disableLargeSceneText = false
local showOnPeek = false
local UseNUIRender = false

RegisterNetEvent("np-scenes:allScenes")
AddEventHandler("np-scenes:allScenes", function(scenes)
  activeScenes = scenes
end)

RegisterNetEvent("np-scenes:refreshScenes")
AddEventHandler("np-scenes:refreshScenes", function(sceneId, scene)
  activeScenes[sceneId] = scene
  -- a new scene has been added so lets force a recalculation. won't happen often
  calculateScenesToDraw()
end)

RegisterNetEvent("np-scenes:deleteScene")
AddEventHandler("np-scenes:deleteScene", function(removeId)
  if removeId then
    activeScenes[removeId] = nil
    drawnScenes[removeId] = nil
    DeleteObject(drawnObjs[removeId])
    drawnObjs[removeId] = nil
  end
end)

local fontSizing = {
  ["0"] = {1.0, 0.85},
  ["1"] = {1.5, 0.75},
  ["2"] = {1.75, 0.75},
  ["3"] = {1.0, 1.0},
  ["4"] = {1.0, 0.75},
  ["5"] = {1.0, 1.0},
  ["6"] = {1.4, 0.4},
  ["7"] = {1.3, 0.9},
  ["8"] = {1.5, 1.0},
  ["9"] = {1.5, 1.0},
  ["10"] = {1.5, 1.0},
  ["11"] = {1.5, 1.0},
  ["12"] = {1.5, 1.0},
}

local NUI_OPTIONS = {
  background = {
    ["white"] = {255, 255, 255, 0.75}
  }
}

function calculateScenesToDraw()
  playerCoords = GetEntityCoords(PlayerPedId())

  local isPeekActive = exports['np-interact']:IsPeeking()
  for _, scene in pairs(activeScenes) do
    local show = (scene.solid and isPeekActive) or (showOnPeek and isPeekActive) or (not scene.solid and not showOnPeek)
    if show and #(scene.coords - playerCoords) < scene.distance then
      if not scene.processed then
        local sText = scene.text
        if disableLargeSceneText then
          local _, _, foundText = sText:find('<font size=.[0-9]*.>(.*)')
          if foundText then
            local _, _, foundEnd = foundText:find('(.*)</font>')
            if foundEnd then
              sText = foundEnd
            else
              sText = foundText
            end
          end
        end
        --calculate line count
        local lineCount = 0
        local s1 = string.sub(sText, 0, 99)
        local s2 = string.sub(sText, 100, 199)
        local s3 = string.sub(sText, 200, 255)
        --Get inital line count from length of string
        if s1:len() > 0 then lineCount = lineCount + 1 end
        if s2:len() > 0 then lineCount = lineCount + 1 end
        if s3:len() > 0 then lineCount = lineCount + 1 end

        local longestLine = ""
        for _,s in ipairs(Split(s1, "~n~")) do
          if s:len() > longestLine:len() then
            longestLine = s
          end
        end
        for _,s in ipairs(Split(s2, "~n~")) do
          if s:len() > longestLine:len() then
            longestLine = s
          end
        end
        for _,s in ipairs(Split(s3, "~n~")) do
          if s:len() > longestLine:len() then
            longestLine = s
          end
        end

        --Get additional line count from newlines in string
        local _, count = sText:gsub('\n', '\n')
        lineCount = count + lineCount
        local _, count2 = sText:gsub('~n~', '~n~')
        lineCount = count2 + lineCount

        --calculate width
        SetTextScale(0.0, 1.0)
        SetTextFont(scene.font and scene.font or 4)
        SetTextCentre(true)
        local swidth = 0
        for c in longestLine:gmatch"." do
          BeginTextCommandGetWidth("STRING")
          AddTextComponentSubstringPlayerName(c)
          local cwidth = EndTextCommandGetWidth(false)
          swidth = swidth + cwidth
        end

        local font = scene.font and scene.font or 4
        local fontSize = fontSizing[tostring(font)] or {1.2, 1.2}
        local cwidth = map_range(longestLine:len(), 0, 99, fontSize[1], fontSize[2])
        local width = swidth * cwidth

        scene.pText = {
          text = sText,
          string1 = s1,
          string2 = s2,
          string3 = s3,
          maxOneLineLength = longestLine:len(),
          lineCount = lineCount,
          width = width,
        }
        scene.fade = { type = "in", fade = 0 }
        scene.processed = true
        Wait(100)
      end
      drawnScenes[scene.id] = scene
    elseif drawnScenes[scene.id] and scene.fade and scene.fade.type == "in" then
      scene.fade = { type = "out", fade = 100 }
    end
  end
end

local updateTimer = 0
local processing = false
Citizen.CreateThread(function()
  while true do

    if scenesEnabled then

      local currentTime = GetGameTimer()
      -- every 200 ticks lets recalculate what we want to draw
      if currentTime - updateTimer > 500 and not processing then
        Citizen.CreateThread(function()
          processing = true
          calculateScenesToDraw()
          processing = false
        end)
        updateTimer = currentTime
      end

      local plyCoords = GetFinalRenderedCamCoord()
      -- do some drawing
      for _, scene in pairs(drawnScenes) do
        local dist = #(scene.coords - plyCoords)
        local opacity = scene.fade.fade / 100
        if scene.fade.type == "in" then
            scene.fade.fade = math.min(scene.fade.fade + 0.15 * (currentTime - lastUpdate), 100)
        elseif scene.fade.type == "out" then
            scene.fade.fade = math.max(scene.fade.fade - 0.15 * (currentTime - lastUpdate), 0)
            if math.floor(scene.fade.fade) == 0 then
              scene.fade = { type = "in", fade = 0 }
              drawnScenes[scene.id] = nil
              DeleteObject(drawnObjs[scene.id])
              drawnObjs[scene.id] = nil
            end
        end
        DrawText3D(scene.coords.x, scene.coords.y, scene.coords.z, dist, scene.pText, scene.color, scene.background, scene.font, scene.caret, opacity)
        -- DrawLine(playerCoords, scene.coords.x, scene.coords.y, scene.coords.z, 255, 0, 0, 255)
      end
      lastUpdate = currentTime
    end
    Wait(0)
  end
end)

RegisterUICallback("np-ui:scenes:input", function(data, cb)
  cb({ data = {}, meta = { ok = true, message = '' } })
  exports['np-ui']:closeApplication('textbox')
  local text = data.values.text
  local color = data.values.color or 'white'
  local distance = tonumber(data.values.distance) or 10
  local font = data.values.font or 0
  local caret = data.values.caret or false
  local solid = data.values.solid or false
  local bg = solid and {255, 255, 255} or {0, 0, 0}
  local alpha = solid and 255 or 100
  distance = distance + 0.0
  if distance < 0.1 or distance > 10 then
    distance = 10.0
  end

  if not text then
    TriggerEvent("DoLongHudText", "No text entered for scene.")
    return
  end

  TriggerServerEvent("np-scenes:addScene", {
    coords = activePos,
    offsetCoords = activeOffset,
    text = text,
    distance = distance,
    color = color,
    caret = caret,
    font = font,
    solid = solid,
    background = {
      r = bg[1],
      g = bg[2],
      b = bg[3],
      alpha = alpha
    }
  })
end)

local getFontOptions = function ()
  local defaultFont = exports['config']:GetMiscConfig("game.font") or "default"

  local customFonts = exports['fonts']:GetAvailableFonts()

  local fontOptions = {
    {
      id = 0,
      label = "Default",
      name = "Default",
    },
    {
      id = 1,
      label = "Fancy",
      name = "Fancy",
    },
    {
      id = 2,
      label = "Handwritten",
      name = "Monospace",
    },
    {
      id = 4,
      label = "Monospace",
      name = "Comprime",
    },
    {
      id = 7,
      label = "GTA",
      name = "GTA",
    }
  }

  if defaultFont ~= "default" then
    local font = customFonts[defaultFont]

    table.insert(fontOptions, 1, { id = font.id, name = font.name })
  end

  for _, font in pairs(customFonts) do
    if font.name ~= defaultFont then
      table.insert(fontOptions, { id = font.id, name = font.name })
    end
  end

  return fontOptions
end

RegisterCommand("+startScene", function()
  if not scenesEnabled then
    TriggerEvent("DoLongHudText", "Cannot place a scene when scenes are disabled", 2)
    return
  end
  if sceneStarted then -- end
    local fontOptions = getFontOptions()

    sceneStarted = false
    exports['np-ui']:openApplication('textbox', {
      callbackUrl = 'np-ui:scenes:input',
      key = 1,
      items = {
        {
          icon = "pencil-alt",
          label = "Text",
          maxLength = 255,
          name = "text",
        },
        {
          _type = "select",
          options = {
            {
              id = "white",
              label = "White",
            },
            {
              id = "red",
              label = "Red",
            },
            {
              id = "green",
              label = "Green",
            },
            {
              id = "yellow",
              label = "Yellow",
            },
            {
              id = "blue",
              label = "Blue",
            },
            {
              id = "purple",
              label = "Purple",
            },
            {
              id = "black",
              label = "Black",
            }
          },
          label = "Color",
          name = "color",
        },
        {
          icon = "people-arrows",
          label = "Distance (0.1 - 10)",
          name = "distance",
        },
        {
          _type = "select",
          options = fontOptions,
          label = "Font",
          name = "font",
        },
        {
          _type = "checkbox",
          label = "Caret",
          name = "caret",
        },
        {
          _type = "checkbox",
          label = "White BG (Peek Only)",
          name = "solid",
        },
      },
      show = true,
    })
    return
  end
  sceneStarted = true
  Citizen.CreateThread(function()
    while sceneStarted do
      local hit, pos, _, surfaceNormal = RayCastGamePlayCamera(10.0)
      if hit then
        DrawSphere(pos, 0.2, 255, 0, 0, 255)
        activePos = pos
        activeOffset = pos + surfaceNormal * 0.03
        -- print(activePos, activeOffset)
      end
      Wait(0)
    end
  end)
end, false)

RegisterCommand("-startScene", function() end, false)

RegisterCommand("+enableScene", function()
  scenesEnabled = not scenesEnabled
  TriggerEvent('DoLongHudText', not scenesEnabled and 'Scenes Disabled' or 'Scenes Enabled')
end, false)
RegisterCommand("-enableScene", function() end, false)

RegisterCommand("+deleteScene", function()
  if not scenesEnabled then
    TriggerEvent("DoLongHudText", "Cannot delete a scene when scenes are disabled", 2)
    return
  end
  TriggerServerEvent("np-scenes:deleteScene", GetEntityCoords(PlayerPedId()))
end, false)
RegisterCommand("-deleteScene", function() end, false)

Citizen.CreateThread(function()
  exports["np-keybinds"]:registerKeyMapping("", "Scenes", "Start / Place Scene", "+startScene", "-startScene")
  exports["np-keybinds"]:registerKeyMapping("", "Scenes", "Enable / Disable", "+enableScene", "-enableScene")
  exports["np-keybinds"]:registerKeyMapping("", "Scenes", "Delete Closest Scene", "+deleteScene", "-deleteScene")
  RequestStreamedTextureDict('commonmenu', true)
  Wait(5000)
  TriggerServerEvent("np-scenes:getScenes")
end)

AddEventHandler("np-preferences:setPreferences", function(data)
  disableLargeSceneText = data["scenes.disableLargeText"]
  showOnPeek = data["scenes.showOnPeek"]
  for _, scene in pairs(activeScenes) do
    scene.processed = false
  end
end)

AddEventHandler("np-config:configLoaded", function(configId, config)
  if (configId ~= "misc") then return end

  UseNUIRender  = config["3dtext.nui.render"]
end)

AddEventHandler("onClientResourceStart", function (resourceName)
  if (GetCurrentResourceName() ~= resourceName) then return end

  local config = exports["config"]:GetModuleConfig("misc")

  if not config then return end

  UseNUIRender  = config["3dtext.nui.render"]
end)