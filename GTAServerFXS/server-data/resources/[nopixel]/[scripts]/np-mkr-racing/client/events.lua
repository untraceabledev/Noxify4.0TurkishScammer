currentlyEnabledPreview = nil

local raceCountdownActive = false
local _playerDeltas = {}

Citizen.CreateThread(function()
  -- For testing purposes when hudOnly is on
  --Wait(3000)
  --createPendingRace("985a5f8e-1a3a-43b1-adea-d6f1e41383c1", {dnfPosition=0,prizeDistribution={0.67,0.33},id="985a5f8e-1a3a-43b1-adea-d6f1e41383c1",reverse=false,buyIn=0,laps=2,countdown=3,dnfCountdown=0})
end)

RegisterNetEvent("mkr_racing:addedActiveRace")
AddEventHandler("mkr_racing:addedActiveRace", function(race)
  activeRaces[race.eventId] = race
  if not config.nui.hudOnly then SendNUIMessage({ activeRaces = activeRaces }) end
  TriggerEvent("mkr_racing:api:addedActiveRace", race, activeRaces)
  TriggerEvent("mkr_racing:api:updatedState", { activeRaces = activeRaces })
end)

RegisterNetEvent("mkr_racing:removedActiveRace")
AddEventHandler("mkr_racing:removedActiveRace", function(id)
  activeRaces[id] = nil
  if not config.nui.hudOnly then SendNUIMessage({ activeRaces = activeRaces }) end
  TriggerEvent("mkr_racing:api:removedActiveRace", activeRaces)
  TriggerEvent("mkr_racing:api:updatedState", { activeRaces = activeRaces })
end)

RegisterNetEvent("mkr_racing:updatedActiveRace")
AddEventHandler("mkr_racing:updatedActiveRace", function(race)
  if activeRaces[race.eventId] then activeRaces[race.eventId] = race end
  if not config.nui.hudOnly then SendNUIMessage({ activeRaces = activeRaces }) end
  TriggerEvent("mkr_racing:api:updatedActiveRace", activeRaces)
  TriggerEvent("mkr_racing:api:updatedState", { activeRaces = activeRaces })
end)

RegisterNetEvent("mkr_racing:leaveRace")
AddEventHandler("mkr_racing:leaveRace", function()
  leaveRace()
end)

RegisterNetEvent("mkr_racing:endRace")
AddEventHandler("mkr_racing:endRace", function(race)
  raceCountdownActive = false
  exports["racing"]:updateRacingUI({
    show = false
  })
  TriggerEvent("mkr_racing:api:raceEnded", race)
  cleanupRace()
end)

RegisterNetEvent("mkr_racing:raceHistory")
AddEventHandler("mkr_racing:raceHistory", function(race)
  finishedRaces[#finishedRaces + 1] = race
  if race then
    if not config.nui.hudOnly then SendNUIMessage({ leaderboardData = race }) end
  end
  TriggerEvent("mkr_racing:api:raceHistory", race)
  TriggerEvent("mkr_racing:api:updatedState", { finishedRaces = finishedRaces })
end)


RegisterNetEvent("mkr_racing:startRace")
AddEventHandler("mkr_racing:startRace", function(race, countdown)
  local playerAliases = {}
  for i, player in pairs(race.players) do
    table.insert(playerAliases, {tonumber(player.id), player.alias})
  end

  exports["racing"]:updateRacingUI({
    playerAliases = playerAliases
  })

  raceCountdownActive = true
  TriggerEvent("mkr_racing:api:startingRace", countdown)
  -- Wait for race countdown
  local startTime = GetGameTimer() + countdown - 3000
  while GetGameTimer() < startTime do
    if not raceCountdownActive then return end
    Wait(0)
  end
  raceCountdownActive = false
  SendNUIMessage({ type = 'countdown', start = 3 })
  PlaySoundFrontend(-1, "Beep_Red", "DLC_HEIST_HACKING_SNAKE_SOUNDS")
  Citizen.Wait(1000)
  PlaySoundFrontend(-1, "Beep_Red", "DLC_HEIST_HACKING_SNAKE_SOUNDS")
  Citizen.Wait(1000)
  PlaySoundFrontend(-1, "Beep_Red", "DLC_HEIST_HACKING_SNAKE_SOUNDS")
  Citizen.Wait(1000)
  PlaySoundFrontend(-1, "Oneshot_Final", "MP_MISSION_COUNTDOWN_SOUNDSET")
  if not curRace then
    initRace(race)
    TriggerEvent("mkr_racing:api:raceStarted", race)
  end
end)

RegisterNetEvent("mkr_racing:updatePosition")
AddEventHandler("mkr_racing:updatePosition", function(position, playerDeltas, playerDeltaIdsToDelete)
  if #_playerDeltas <= 0 then
    _playerDeltas = playerDeltas
  end

  if (#playerDeltaIdsToDelete > 0) then
    for i = #_playerDeltas, 1, -1 do
      for j = 1, #playerDeltaIdsToDelete do
        if (playerDeltaIdsToDelete[j] == _playerDeltas[i].id) then
          table.remove(_playerDeltas, i)
          break
        end
      end
    end
  end

  playersToAdd = {}

  for i = 1, #playerDeltas do
    for j = 1, #_playerDeltas do
      if playerDeltas[i].id == _playerDeltas[j].id then
        _playerDeltas[j] = playerDeltas[i]
        break
      elseif j == #_playerDeltas then
        table.insert(playersToAdd, playerDeltas[i])
      end
    end
  end

  table.move(playersToAdd, 1, #playersToAdd, #_playerDeltas + 1, _playerDeltas)
  table.sort(_playerDeltas, function(a, b)
    return a.pos < b.pos
  end)
  --position = position,
  exports["racing"]:updateRacingUI({
    playerDeltas = _playerDeltas
  })
end)

RegisterNetEvent("mkr_racing:updatePositionList")
AddEventHandler("mkr_racing:updatePositionList", function(positionList)
  exports["racing"]:updateRacingUI({
    positionList = positionList
  })
end)

RegisterNetEvent("mkr_racing:dnfRace")
AddEventHandler("mkr_racing:dnfRace", function(race)
  if activeRaces[race.eventId] then activeRaces[race.eventId] = race end
  exports["racing"]:updateRacingUI({
    dnf = true
  })
  TriggerEvent("mkr_racing:api:dnfRace", race)
  TriggerEvent("mkr_racing:api:updatedState", { activeRaces = activeRaces })
end)

RegisterNetEvent("mkr_racing:startDNFCountdown")
AddEventHandler("mkr_racing:startDNFCountdown", function(dnfTime)
  exports["racing"]:updateRacingUI({
    dnfTime = dnfTime
  })
end)

RegisterNetEvent("mkr_racing:finishedRace")
AddEventHandler("mkr_racing:finishedRace", function(race, position, time)
  if activeRaces[race.eventId] then activeRaces[race.eventId] = race end
  exports["racing"]:updateRacingUI({
    position = position,
    finished = time
  })
  TriggerEvent("mkr_racing:api:finishedRace", race, position, time)
  TriggerEvent("mkr_racing:api:updatedState", { activeRaces = activeRaces })
end)

RegisterNetEvent("mkr_racing:joinedRace")
AddEventHandler("mkr_racing:joinedRace", function(race)
  if pendingRaces[race.eventId] then pendingRaces[race.eventId] = race end
  race.start.pos = tableToVector3(race.start.pos)
  if race.id ~= "random" then
    spawnCheckpointObjects(race.start, config.startObjectHash)
  end
  TriggerEvent("mkr_racing:api:joinedRace", race)
  TriggerEvent("mkr_racing:api:updatedState", { pendingRaces = pendingRaces })
end)

RegisterNetEvent("mkr_racing:leftRace")
AddEventHandler("mkr_racing:leftRace", function(race)
  if pendingRaces[race.eventId] then pendingRaces[race.eventId] = race end
  TriggerEvent("mkr_racing:api:leftRace", race)
  TriggerEvent("mkr_racing:api:updatedState", { pendingRaces = pendingRaces })
  cleanupProps()
end)

RegisterNetEvent("mkr_racing:playerJoinedYourRace")
AddEventHandler("mkr_racing:playerJoinedYourRace", function(characterId, name)
  if characterId == getCharacterId() then return end
  TriggerEvent("mkr_racing:api:playerJoinedYourRace", characterId, name)
end)

RegisterNetEvent("mkr_racing:playerLeftYourRace")
AddEventHandler("mkr_racing:playerLeftYourRace", function(characterId, name)
  if characterId == getCharacterId() then return end
  TriggerEvent("mkr_racing:api:playerLeftYourRace", characterId, name)
end)

RegisterNetEvent("mkr_racing:addedPendingRace")
AddEventHandler("mkr_racing:addedPendingRace", function(race)
  pendingRaces[race.eventId] = race
  if not config.nui.hudOnly then SendNUIMessage({ pendingRaces = pendingRaces }) end
  TriggerEvent("mkr_racing:api:addedPendingRace", race, pendingRaces)
  TriggerEvent("mkr_racing:api:updatedState", { pendingRaces = pendingRaces })
end)

RegisterNetEvent("mkr_racing:removedPendingRace")
AddEventHandler("mkr_racing:removedPendingRace", function(id)
  pendingRaces[id] = nil
  SendNUIMessage({ pendingRaces = pendingRaces })
  TriggerEvent("mkr_racing:api:removedPendingRace", pendingRaces)
  TriggerEvent("mkr_racing:api:updatedState", { pendingRaces = pendingRaces })
end)

RegisterNetEvent("mkr_racing:updatedPendingRace")
AddEventHandler("mkr_racing:updatedPendingRace", function(race)
  if pendingRaces[race.eventId] then pendingRaces[race.eventId] = race end
  if not config.nui.hudOnly then SendNUIMessage({ pendingRaces = pendingRaces }) end
  TriggerEvent("mkr_racing:api:updatedPendingRace", pendingRaces)
  TriggerEvent("mkr_racing:api:updatedState", { pendingRaces = pendingRaces })
end)

RegisterNetEvent("mkr_racing:startCreation")
AddEventHandler("mkr_racing:startCreation", function()
  startRaceCreation()
end)

RegisterNetEvent("mkr_racing:addedRace")
AddEventHandler("mkr_racing:addedRace", function(newRace)
  if not races then return end
  races[newRace.id] = newRace
  SendNUIMessage({ races = races })
  TriggerEvent("mkr_racing:api:addedRace")
  TriggerEvent("mkr_racing:api:updatedState", { races = races })
end)

RegisterNetEvent("mkr_racing:deletedRace")
AddEventHandler("mkr_racing:deletedRace", function(deletedRaceId)
  if not races then return end
  races[deletedRaceId] = nil
  SendNUIMessage({ races = races })
  TriggerEvent("mkr_racing:api:deletedRace")
  TriggerEvent("mkr_racing:api:updatedState", { races = races })
end)

RegisterNetEvent("mkr_racing:updatedTournament")
AddEventHandler("mkr_racing:updatedTournament", function(_tournaments)
  tournaments = _tournaments
  if not config.nui.hudOnly then SendNUIMessage({ tournaments = _tournaments }) end
  TriggerEvent("mkr_racing:api:updatedState", { tournaments = _tournaments })
end)

AddEventHandler('DamageEvents:VehicleDamaged', function(vehicle, attacker, weapon, isMelee, damageTypeFlag)
  if not curRace or curRace.hitPenalty <= 0.0 or GetEntityModel(attacker) ~= config.checkpointObjectHash or vehicle ~= GetVehiclePedIsIn(PlayerPedId(), false) then return end
  additionalTotalTime = additionalTotalTime + curRace.hitPenalty
  additionalLapTime = additionalLapTime + curRace.hitPenalty
  PlaySoundFrontend(-1, "3_2_1", "HUD_MINI_GAME_SOUNDSET")
  exports["racing"]:updateRacingUI({
    additionalTotalTime = additionalTotalTime,
    additionalLapTime = additionalLapTime
  })
end)

AddEventHandler("onResourceStop", function(resourceName)
  if resourceName ~= GetCurrentResourceName() then return end
  cleanupProps()
  clearBlips()
  ClearGpsMultiRoute()
end)
