local taskInProcessId = 0
local agilityReduction = 1

function openGui(sentLength, taskID, label, keepWeapon)
  if not keepWeapon then
    TriggerEvent("actionbar:setEmptyHanded", true)
  end
  guiEnabled = true
  SendNUIMessage({
    TaskBar = {
      display = true,
      duration = sentLength,
      taskID = taskID,
      label = label,
    }
  })
end

local activeTasks = {}
function closeGuiFail()
  guiEnabled = false
  SendNUIMessage({
    TaskBar = {
      display = false
    }
  })
end

function closeGui()
  guiEnabled = false
  SendNUIMessage({
    TaskBar = {
      display = false
    }
  })
  -- maybe we let the task clear the anims etc.
  --ClearPedTasks(PlayerPedId())
end

function closeNormalGui()
  guiEnabled = false
end

function taskCancel()
  closeGui()
  local taskIdentifier = taskInProcessId
  activeTasks[taskIdentifier] = 2
end

exports('taskCancel', taskCancel)

RegisterNUICallback('taskEnd', function(data, cb)
  closeNormalGui()

  local taskIdentifier = data.tasknum
  activeTasks[taskIdentifier] = 3
end)
local coffeetimer = 0

AddEventHandler('np-taskbar:client:agilityBonus', function(_agilityReduction)
  agilityReduction = _agilityReduction
end)

-- command is something we do in the loop if we want to disable more, IE a vehicle engine.
-- return true or false, if false, gives the % completed.
local taskInProcess = false

function taskBarFail(maxcount, curTime, length)
  local totaldone = math.ceil(100 - (((maxcount - curTime) / length) * 100))
  totaldone = math.min(100, totaldone)
  taskInProcess = false
  closeGuiFail()
  return totaldone
end

function taskBar(length, name, runCheck, keepWeapon, vehicle, vehCheck, cb, moveCheck, distEntity, opts)
  local playerPed = PlayerPedId()
  local firstPosition = GetEntityCoords(playerPed)
  local swappedName = name

  if taskInProcess then
    if cb then cb(0) end
    return 0
  end
  if coffeetimer > 0 then
    length = math.ceil(length * 0.66)
  end
  if agilityReduction < 1 then
    length = length * agilityReduction
  end
  local alertLevelMultiplier = 1.0 --math.min(exports["np-buffs"]:getAlertLevelMultiplier(), 1.2)
  length = length * alertLevelMultiplier
  taskInProcess = true
  local taskIdentifier = "taskid" .. math.random(1000000)
  taskInProcessId = taskIdentifier
  openGui(length, taskIdentifier, swappedName, keepWeapon)
  activeTasks[taskIdentifier] = 1

  local maxcount = GetGameTimer() + length
  local curTime
  local playerPed = PlayerPedId()
  while activeTasks[taskIdentifier] == 1 do
    Citizen.Wait(0)
    curTime = GetGameTimer()
    if curTime > maxcount or not guiEnabled then
      activeTasks[taskIdentifier] = 2
    end
    local fuck = 100 - (((maxcount - curTime) / length) * 100)
    fuck = math.min(100, fuck)

    if runCheck then
      if IsPedClimbing(playerPed)
          or IsPedJumping(playerPed)
          or IsPedSwimming(playerPed)
          or IsPedRagdoll(playerPed)
          or IsPedBeingStunned(playerPed, 0)
      then
        SetPlayerControl(PlayerId(), 0, 0)
        local totaldone = taskBarFail(maxcount, curTime, length)
        Citizen.Wait(1000)
        SetPlayerControl(PlayerId(), 1, 1)
        if cb then cb(totaldone) end
        return totaldone
      end
    end

    if moveCheck ~= nil then
      if #(firstPosition - GetEntityCoords(playerPed)) > moveCheck or (distEntity ~= nil and #(GetEntityCoords(distEntity) - GetEntityCoords(playerPed)) > moveCheck) then
        local totaldone = taskBarFail(maxcount, curTime, length)
        if cb then cb(totaldone) end
        return totaldone
      end
    end

    if vehicle ~= nil and vehicle ~= 0 then
      local driverPed = GetPedInVehicleSeat(vehicle, -1)
      if driverPed ~= playerPed and vehCheck then
        local totaldone = taskBarFail(maxcount, curTime, length)
        if cb then cb(totaldone) end
        return totaldone
      end

      local model = GetEntityModel(vehicle)
      if IsThisModelACar(model) or IsThisModelABike(model) or IsThisModelAQuadbike(model) then
        if IsEntityInAir(vehicle) then
          Wait(1000)
          if IsEntityInAir(vehicle) then
            local totaldone = taskBarFail(maxcount, curTime, length)
            if cb then cb(totaldone) end
            return totaldone
          end
        end
      end
    end
  end

  local resultTask = activeTasks[taskIdentifier]
  if resultTask == 2 then
    local totaldone = taskBarFail(maxcount, curTime, length)
    if cb then cb(totaldone) end
    return totaldone
  else
    closeGui()
    taskInProcess = false

    if cb then cb(100) end
    return 100
  end
end

function CheckCancels()
  if IsPedRagdoll(PlayerPedId()) then
    return true
  end
  return false
end

function LoadAnimationDic(dict)
  if not HasAnimDictLoaded(dict) then
    RequestAnimDict(dict)

    while not HasAnimDictLoaded(dict) do
      Citizen.Wait(0)
    end
  end
end

function handheld()
  TriggerEvent("radioGui")
end

function generalEscapeMenu()
  if guiEnabled then
    closeGuiFail()
  end
end

Citizen.CreateThread(function()
  exports["np-keybinds"]:registerKeyMapping("", "Radio", "Open", "+handheld", "-handheld", ";")
  RegisterCommand('+handheld', handheld, false)
  RegisterCommand('-handheld', function() end, false)

  exports["np-keybinds"]:registerKeyMapping("", "Player", "Escape menu", "+generalEscapeMenu", "-generalEscapeMenu",
    "ESCAPE")
  RegisterCommand('+generalEscapeMenu', generalEscapeMenu, false)
  RegisterCommand('-generalEscapeMenu', function() end, false)
end)
