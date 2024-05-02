local debugEnabled = false
local debugMaxDistance = 300.0
local comboZone = nil
local insideZone = false
local createdZones = {}
local currentlyInsideZones = {}

local function addToComboZone(zone)
  if comboZone ~= nil then
    comboZone:AddZone(zone)
  else
    comboZone = ComboZone:Create({ zone }, { name = "np-polyzone" })
    comboZone:onPlayerInOutExhaustive(function(isPointInside, point, insideZones, enteredZones, leftZones)
      if leftZones ~= nil then
        for i = 1, #leftZones do
          local leftZone = leftZones[i]
          currentlyInsideZones[leftZone.id] = nil
          TriggerEvent("np-polyzone:exit", leftZone.name, leftZone.data)
        end
      end
      if enteredZones ~= nil then
        for i = 1, #enteredZones do
          local enteredZone = enteredZones[i]
          currentlyInsideZones[enteredZone.id] = enteredZone
          TriggerEvent("np-polyzone:enter", enteredZone.name, enteredZone.data, enteredZone.center)
        end
      end
    end, 500)
  end
end

local function doCreateZone(options)
  if options.data and options.data.id then
    local key = options.name .. "_" .. tostring(options.data.id)
    if not createdZones[key] then
      createdZones[key] = true
      return true
    else
      print('polyzone with name/id already added, skipping: ', key)
      return false
    end
  end
  return true
end

local function addZoneEvent(eventName, zoneName)
  if comboZone.events and comboZone.events[eventName] ~= nil then
    return
  end
  comboZone:addEvent(eventName, zoneName)
end

local function addZoneEvents(zone, zoneEvents)
  if zoneEvents == nil then return end

  for _, v in ipairs(zoneEvents) do
    addZoneEvent(v, zone.name)
  end
end

exports("ExpensiveIsPointInsideZone", function (coords, names)
  if not comboZone or not coords then return {} end
  coords = vector3(coords.x, coords.y, coords.z)
  local namesMap = {}
  for i=1, #names do
    namesMap[names[i]] = true
  end

  local isInside, insideZones = comboZone:isPointInsideExhaustive(coords)
  if not isInside then return false end
  for i=1, #insideZones do
    local zone = insideZones[i]
    if namesMap[zone.name] then return true end
  end
  return false
end)

exports("AddBoxZone", function(name, vectors, length, width, options)
  if not options then options = {} end
  options.name = name
  if not doCreateZone(options) then return end
  local boxCenter = type(vectors) ~= 'vector3' and vector3(vectors.x, vectors.y, vectors.z) or vectors
  local zone = BoxZone:Create(boxCenter, length, width, options)
  addToComboZone(zone)
  addZoneEvents(zone, options.zoneEvents)
end)

local function addCircleZone(name, center, radius, options)
  if not options then options = {} end
  options.name = name
  if not doCreateZone(options) then return end
  local circleCenter = type(center) ~= 'vector3' and vector3(center.x, center.y, center.z) or center
  local zone = CircleZone:Create(circleCenter, radius, options)
  addToComboZone(zone)
  addZoneEvents(zone, options.zoneEvents)
end
exports("AddCircleZone", addCircleZone)

exports("AddPolyZone", function(name, vectors, options)
  if not options then options = {} end
  options.name = name

  for k, v in ipairs(vectors) do
    vectors[k] = type(v) ~= 'vector2' and vector2(v.x, v.y) or v
  end

  if not doCreateZone(options) then return end
  local zone = PolyZone:Create(vectors, options)
  addToComboZone(zone)
  addZoneEvents(zone, options.zoneEvents)
end)

exports("AddZoneEvent", function(eventName, zoneName)
  addZoneEvent(eventName, zoneName)
end)

exports("GetZones", function(point)
  return comboZone:getZones(point)
end)

exports("GetInsideZones", function()
  return currentlyInsideZones
end)

RegisterNetEvent("np-polyzone:createCircleZone")
AddEventHandler("np-polyzone:createCircleZone", function(name, ...)
  addCircleZone(name, ...)
end)

function AlterZoneColor(zoneName, color)
  if comboZone == nil then return end

  local foundZone = nil
  for i, zone in ipairs(comboZone.zones) do
    if zone.data.id == zoneName then
      foundZone = zone
      break
    end
  end

  if not foundZone then return end

  foundZone.debugColors = {
    walls = { color[1], color[2], color[3], 128 },
    outline = { 0, 0, 0, 128 }
  }
end

exports("AlterZoneColor", AlterZoneColor)

function RemoveZone(zoneName, id)
  if comboZone == nil then return end
  local foundZone = nil

  for i, zone in ipairs(comboZone.zones) do
    if zone.name == zoneName and zone.data.id == id then
      foundZone = zone
      break
    end
  end

  if not foundZone then return end

  local key = foundZone.name .. "_" .. tostring(foundZone.data.id)

  comboZone:RemoveZone(zoneName);
  foundZone:destroy()

  foundZone = nil;
  createdZones[key] = nil
end

exports("RemoveZone", RemoveZone)

local function toggleDebug(state)
  if state == debugEnabled then return end
  debugEnabled = state
  if debugEnabled then
    while debugEnabled do
      local plyPos = GetEntityCoords(PlayerPedId()).xy
      for i, zone in ipairs(comboZone.zones) do
        if zone and not zone.destroyed and #(plyPos - zone.center.xy) < debugMaxDistance then
          zone:draw()
        end
      end
      Wait(0)
    end
  end
end

if GetConvar("sv_environment", "prod") == "debug" then
  RegisterCommand("np-polyzone:debug", function(src, args)
    toggleEntityDebug(not debugEnabled)
    toggleDebug(not debugEnabled)
  end)

  RegisterCommand("np-polyzone:insideZones", function()
    for k, zone in pairs(currentlyInsideZones) do
      local type = ""
      local str = "name: '" .. tostring(zone.name) .. "'"
      if zone.data and zone.data.id then
        str = str .. string.format(", data.id: '%s'", tostring(zone.data.id))
      end

      if zone.isEntityZone then
        type = "EntityZone"
        str = str .. string.format(", entity: %s", tostring(zone.entity))
      elseif zone.isCircleZone then
        type = "CircleZone"
        str = str .. string.format(", center: %s, radius: %s", tostring(zone.center), tostring(zone.radius))
      elseif zone.isBoxZone then
        type = "BoxZone"
        str = str ..
            string.format(", center: %s, length: %s, width: %s", tostring(zone.center), tostring(zone.length),
              tostring(zone.width))
      elseif zone.isPolyZone then
        type = "PolyZone"
        str = str .. string.format(", points: %s", json.encode(zone.points or {}))
      end

      print(string.format("%s { %s }", type, str))
    end
  end)
end
