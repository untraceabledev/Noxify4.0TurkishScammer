local insideGarageEntrance = false
local insideGarage = false
local exitSpawnCoords = vector4(-858.66,-243.67,39.16,58.33)
local entranceSpawnCoords = vector4(-1072.59,-65.81,-99.32,180.53)


local function attemptGarageAction(pAction)
  if pAction == 'enter' then
    if insideGarage then return end
    
    if not exports['np-business']:IsEmployedAt('ron_corp') then return end
  end

  local vehicle = GetVehiclePedIsIn(PlayerPedId(), false)
  local netId = vehicle ~= 0 and NetworkGetNetworkIdFromEntity(vehicle) or nil

  NPX.Procedures.execute('np-miscscripts:rgarage:attemptGarage', netId, pAction)
end

local function exitGarage(pIsDriver)
  local pos = vector3(entranceSpawnCoords.x, entranceSpawnCoords.y, entranceSpawnCoords.z)
  local distance = #(GetEntityCoords(PlayerPedId()) - pos)
  if distance > 2 then return end

  DoScreenFadeOut(500)

  Citizen.Wait(1000)

  if pIsDriver then
    RequestCollisionAtCoord(exitSpawnCoords.x, exitSpawnCoords.y, exitSpawnCoords.z)
  
    SetPedCoordsKeepVehicle(PlayerPedId(), exitSpawnCoords.x, exitSpawnCoords.y, exitSpawnCoords.z)
  
    FreezeEntityPosition(PlayerPedId(), true)
    SetPlayerInvincible(PlayerPedId(), true)
    local collisionTimer = GetGameTimer()
  
    while not HasCollisionLoadedAroundEntity(PlayerPedId()) do
      if GetGameTimer() - collisionTimer > 5000 then
        break
      end
      Wait(0)
    end
  
    FreezeEntityPosition(PlayerPedId(), false)
    SetPlayerInvincible(PlayerPedId(), false)
  
    SetEntityHeading(PlayerPedId(), exitSpawnCoords.w)
  end
  
  Citizen.Wait(1000)

  DoScreenFadeIn(500)

  insideGarage = false
end

local function startGarageExitListener()
  Citizen.CreateThread(function()
    while insideGarage do
      if IsControlJustReleased(0, 38) then
        attemptGarageAction('exit')
      end
      Wait(0)
    end
  end)
end

local function enterGarage(pIsDriver)
  DoScreenFadeOut(500)

  Citizen.Wait(1000)

  RequestCollisionAtCoord(entranceSpawnCoords.x, entranceSpawnCoords.y, entranceSpawnCoords.z)

  if pIsDriver then
    SetPedCoordsKeepVehicle(PlayerPedId(), entranceSpawnCoords.x, entranceSpawnCoords.y, entranceSpawnCoords.z)
  
    FreezeEntityPosition(PlayerPedId(), true)
    SetPlayerInvincible(PlayerPedId(), true)
    local collisionTimer = GetGameTimer()
  
    while not HasCollisionLoadedAroundEntity(PlayerPedId()) do
      if GetGameTimer() - collisionTimer > 5000 then
        break
      end
      Wait(0)
    end
  
    FreezeEntityPosition(PlayerPedId(), false)
    SetPlayerInvincible(PlayerPedId(), false)
  
    SetEntityHeading(PlayerPedId(), entranceSpawnCoords.w)
  end
  
  Citizen.Wait(1000)

  DoScreenFadeIn(500)
end

NPX.Events.onNet('np-miscscripts:rgarage:enterGarage', function(pIsDriver)
  enterGarage(pIsDriver)
end)

NPX.Events.onNet('np-miscscripts:rgarage:exitGarage', function(pIsDriver)
  exitGarage(pIsDriver)
end)

Citizen.CreateThread(function()
  exports['np-polyzone']:AddBoxZone('ron_garage_entrance', vector3(-856.79, -243.91, 39.15), 6.6, 4.4, {
    heading=26,
    minZ = 38.15,
    maxZ = 42.15,
    data = { id = 'ron_garage_entrance' }
  })
end)
