curRace = nil
additionalTotalTime = 0
additionalLapTime = 0
handleCheckpoints = false
props = {}
checkpointObjects = {}
totalDist = 0.0
races = nil
pendingRaces = {}
activeRaces = {}
finishedRaces = {}
tournaments = nil
recordBestLap = math.maxinteger
recordCheckpointTimestamps = {}
curCheckpointTimestamps = {}
numDeltaSections = 4
curDeltaSection = 1

function initRace(race)
  recordBestLap = math.maxinteger
  recordCheckpointTimestamps = {}
  totalDist = 0.0
  curRace = race
  playerId = GetPlayerServerId(PlayerId())
  player = curRace.players[tostring(playerId)]
  recordBestLap = player.bestLapTimeForVehicle
  recordCheckpointTimestamps = player.fastestLapCheckpointTimes
  curDeltaSection = 1
  additionalTotalTime = 0
  additionalLapTime = 0
  curCheckpointTimestamps = {}
  curCheckpointTimestamps[1] = 0
  local curSectionIndex, sectionSize = getCurrentSectionIndexAndSize(1)
  local overallLapDelta, sectionDelta, sectionEndTimeStamp = calculateCheckpointDelta(1, 1, sectionSize, 0) -- Only need endTimestamp
  TriggerEvent("mkr_racing:api:currentRace", curRace)
  sectionTimes = {}
  for i=1, numDeltaSections do sectionTimes[i] = 0.0 end
  exports["racing"]:updateRacingUI({
    show = true,
    curRace = curRace,
    additionalTotalTime = 0,
    overallLapDelta=0,
    lapSection=1,
    sectionTimes=sectionTimes,
    additionalLapTime=0
  })
  if race.props then
    spawnProps()
  end
  for i=1, #curRace.checkpoints do
    curRace.checkpoints[i].pos = tableToVector3(curRace.checkpoints[i].pos)
  end
  curRace.start.pos = tableToVector3(curRace.start.pos)
  startCheckpointsHandler()
end

function hasHitCheckpoint(race, checkpointPos, checkpointRadius, checkpointHeading, lastPlyPos, plyPos)
  local distToCheckpoint = #(plyPos - checkpointPos)
  if race.lineBasedCheckpoints and checkpointHeading then
    -- Check if the line across the checkpoint intersects with the line between the player's last and current position.
    local leftCheckpointPos, rightCheckpointPos = getCheckpointObjectPositions(checkpointPos, checkpointRadius + config.checkpointBufferRadius, checkpointHeading)
    if config.debug.showCheckpointHitLine then
      DrawLine(leftCheckpointPos.x, leftCheckpointPos.y, leftCheckpointPos.z, rightCheckpointPos.x, rightCheckpointPos.y, rightCheckpointPos.z, 0, 255, 0, 255)
    end
    return areLinesIntersecting(leftCheckpointPos, rightCheckpointPos, lastPlyPos, plyPos) and (not config.vehicleOnlyCheckpoints or isInVehicle())
  else
    -- Check if the player is within 1 radius of the checkpoint.
    return distToCheckpoint < checkpointRadius + config.checkpointBufferRadius and (not config.vehicleOnlyCheckpoints or isInVehicle())
  end
end

function getCurrentSectionIndexAndSize(curCheckpointIndex)
  local sectionSize = math.floor(#curRace.checkpoints / numDeltaSections)
  local curSectionIndex = math.min(math.floor(curCheckpointIndex / sectionSize) + 1, numDeltaSections)
  return curSectionIndex, sectionSize
end

function calculateCheckpointDelta(curCheckpointIndex, curSectionIndex, sectionSize, startLapTime)
  local curCheckpointTimestamp = curCheckpointTimestamps[curCheckpointIndex]
  if not recordCheckpointTimestamps[curCheckpointIndex] then
    recordCheckpointTimestamps[curCheckpointIndex] = curCheckpointTimestamp
  end

  local bestCheckpointTimestamp = recordCheckpointTimestamps[curCheckpointIndex]
  local overallLapDelta = curCheckpointTimestamp - bestCheckpointTimestamp
  local sectionEndTimeStamp = 0
  local sectionDelta = 0
  local sectionFirstCheckpoint = 1
  local recordSectionDelta = 0
  local curSectionDelta = 0
  local first = false
  for i = 1, #recordCheckpointTimestamps do
    local sectionIndex = math.min(math.floor(i / sectionSize) + 1, numDeltaSections)
    if (sectionIndex == curSectionIndex) then
      if (not first) then
        first = true
        sectionFirstCheckpoint = i
      end
    elseif (sectionIndex > curSectionIndex) then
      sectionEndTimeStamp = recordCheckpointTimestamps[i-1]
    elseif (curSectionIndex == numDeltaSections) then
      sectionEndTimeStamp = recordCheckpointTimestamps[#recordCheckpointTimestamps]
    end
  end

  if #curCheckpointTimestamps > 0 then
    recordSectionDelta = recordCheckpointTimestamps[curCheckpointIndex] - recordCheckpointTimestamps[sectionFirstCheckpoint]
    curSectionDelta = curCheckpointTimestamps[curCheckpointIndex] - curCheckpointTimestamps[sectionFirstCheckpoint]
  end

  sectionDelta = curSectionDelta - recordSectionDelta

  return overallLapDelta, sectionDelta, sectionEndTimeStamp
end

function startCheckpointsHandler()
  Citizen.CreateThread(function()
    handleCheckpoints = true
    local startLapTime = GetGameTimer()
    local bestLapTime = recordBestLap
    local curLap = 1
    local checkpoints = curRace.checkpoints
    local numOfCheckpoints = #checkpoints
    local curCheckpointIndex = 1
    local curCheckpoint = checkpoints[curCheckpointIndex]
    local heading = numOfCheckpoints > 1 and getHeadingToNextCheckpoint(curCheckpoint.pos, checkpoints[curCheckpointIndex + 1].pos) or 0
    local straightDistToCheckpoint = #(checkpoints[#checkpoints].pos - checkpoints[1].pos)
    local checkpointPropLookahead = math.min(config.checkpointPropLookahead, numOfCheckpoints - (curRace.type == "Lap" and 2 or 1))
    local checkpointObjectLimit = 2 + checkpointPropLookahead
    local isRandomRace = curRace.id == "random"
    local lastPlyPos = GetEntityCoords(PlayerPedId())
    local sectionTimes = {0,0,0,0}

    if (bestLapTime < math.maxinteger) then
      exports["racing"]:updateRacingUI({
        bestLapTime=bestLapTime
      })
    end
    TriggerServerEvent("mkr_racing:updatePositionInfo", curRace.eventId, totalDist, straightDistToCheckpoint, curCheckpointIndex, curCheckpointTimestamps[curCheckpointIndex], curLap)
    addWaypointAndBlip(checkpoints, curCheckpointIndex, config.checkpointBlipLookahead, curLap >= curRace.laps)

    -- Spawn initial props (checkpointObjectHash)
    if not isRandomRace then
      spawnCheckpointObjects(curCheckpoint, config.checkpointObjectHash, checkpointObjectLimit)
      for i=1, checkpointPropLookahead do
        spawnCheckpointObjects(checkpoints[curCheckpointIndex + i], config.checkpointObjectHash, checkpointObjectLimit)
      end
    end
    
    while curRace and handleCheckpoints do
      local plyPed = PlayerPedId()
      local plyPos = GetEntityCoords(plyPed)

      -- Check if the player has hit the checkpoint
      local checkpointRadius = curCheckpoint.rad or config.checkpointRadius
      if hasHitCheckpoint(curRace, curCheckpoint.pos, checkpointRadius, curCheckpoint.hdg, lastPlyPos, plyPos) then
        local pastCheckpointIndex = curCheckpointIndex
        curCheckpointIndex = curCheckpointIndex + 1
        curCheckpointTimestamps[curCheckpointIndex] = GetGameTimer() - startLapTime - additionalLapTime
        local curSectionIndex, sectionSize = getCurrentSectionIndexAndSize(curCheckpointIndex)
        local overallLapDelta, sectionDelta, sectionEndTimeStamp = calculateCheckpointDelta(curCheckpointIndex, curSectionIndex, sectionSize, startLapTime)
        sectionTimes[curSectionIndex] = sectionDelta

        -- overwrite the checkpoint timestamp if fastest lap
        if curCheckpointIndex > numOfCheckpoints then -- If finish checkpoint is hit
          curCheckpointIndex = 1
          curLap = curLap + 1
          
          local time = GetGameTimer() - startLapTime + additionalLapTime
          if time < bestLapTime then
            bestLapTime = time
            recordCheckpointTimestamps = table.clone(curCheckpointTimestamps)
          end
          exports["racing"]:updateRacingUI({
            lap = math.min(curLap, curRace.laps),
            bestLapTime=bestLapTime
          })
          if curLap > curRace.laps then -- race finished
            RPC.execute("mkr_racing:finishedRace", curRace.eventId, additionalTotalTime, bestLapTime, recordCheckpointTimestamps)
            break
          end
          startLapTime = GetGameTimer()
          additionalLapTime = 0
          exports["racing"]:updateRacingUI({
            additionalLapTime=additionalLapTime
          })
        end

        exports["racing"]:updateRacingUI({
          checkpoint=curCheckpointIndex, overallLapDelta=overallLapDelta, sectionEndTimeStamp=sectionEndTimeStamp, lapSection=curSectionIndex, sectionTimes=sectionTimes
        })

        totalDist = totalDist + straightDistToCheckpoint
        straightDistToCheckpoint = #(checkpoints[pastCheckpointIndex].pos - checkpoints[curCheckpointIndex].pos)
        if curRace.showPosition or (curRace.showPosition == nil and config.nui.hud.showPosition) then 
          TriggerServerEvent("mkr_racing:updatePositionInfo", curRace.eventId, totalDist, straightDistToCheckpoint, curCheckpointIndex, GetGameTimer() - startLapTime, curLap)
        end
        curCheckpoint = checkpoints[curCheckpointIndex]
        heading = getHeadingToNextCheckpoint(curCheckpoint.pos, checkpoints[curCheckpointIndex % #checkpoints + 1].pos)
        addWaypointAndBlip(checkpoints, curCheckpointIndex, config.checkpointBlipLookahead, curLap >= curRace.laps)

        if not isRandomRace then
          local nextCheckpointToSpawnProp = curCheckpointIndex + checkpointPropLookahead
          if nextCheckpointToSpawnProp > numOfCheckpoints and curLap < curRace.laps then
            spawnCheckpointObjects(checkpoints[nextCheckpointToSpawnProp - numOfCheckpoints], config.checkpointObjectHash, checkpointObjectLimit)
          elseif nextCheckpointToSpawnProp <= numOfCheckpoints then
            spawnCheckpointObjects(checkpoints[nextCheckpointToSpawnProp], config.checkpointObjectHash, checkpointObjectLimit)
          else
            deleteFirstCheckpointObjects()
          end
        end
      end

      if config.drawCheckpointMarkers then
        -- Current checkpoint is the finish line and you're on the final lap
        local isFinish = curCheckpointIndex == numOfCheckpoints and curLap >= curRace.laps
        drawCheckpointMarkers(curCheckpoint.pos, checkpointRadius, heading, isFinish)
      end

      if curRace.forcePerspective and isInVehicleAndDriver() then
          DisableControlAction(0, 79, true)
          if GetFollowPedCamViewMode() ~= 0 or GetFollowVehicleCamViewMode() == 0 then
            SetFollowPedCamViewMode(4)
        		SetFollowVehicleCamViewMode(4)
          else
            SetFollowPedCamViewMode(0)
        		SetFollowVehicleCamViewMode(0)
          end
      end

      lastPlyPos = plyPos
      Citizen.Wait(0)
    end
    SetWaypointOff()
    cleanupRace()
  end)
end

function drawCheckpointMarkers(checkpointPos, checkpointRadius, heading, isFinish)
  local checkpointDiameter = checkpointRadius * 2.0
  local x, y, z = checkpointPos.x, checkpointPos.y, checkpointPos.z
  if isFinish then
    DrawMarker(4, x, y, z + 4.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 6.0, 6.0, 6.0, 255, 255, 255, 200, false, true, 2, nil, nil, false)
    DrawMarker(1, x, y, z, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, checkpointDiameter, checkpointDiameter, 3.0, 245, 255, 142, 100, false, false, 2, nil, nil, false)
  else
    DrawMarker(21, x, y, z + 4.0, 0.0, 0.0, 0.0, heading, 270.0, 0.0, 6.0, 3.0, 7.0, 255, 128, 0, 130, false, false, 2, nil, nil, false)
    DrawMarker(1, x, y, z, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, checkpointDiameter, checkpointDiameter, 3.0, 245, 255, 142, 100, false, false, 2, nil, nil, false)
  end
end

function cleanupProps()
  for i=1, #props do
    DeleteObject(props[i])
  end
  props = {}
  for i=1, #checkpointObjects do
    DeleteObject(checkpointObjects[i])
  end
  checkpointObjects = {}
end

function cleanupRace()
  handleCheckpoints = false
  if curRace ~= nil then
    curRace = nil
    exports["racing"]:updateRacingUI({
      curRace=curRace
    })
  end
  TriggerEvent("mkr_racing:api:currentRace", curRace)
  cleanupProps()
  SetWaypointOff()
  ClearGpsMultiRoute()
  clearBlips()
end

function spawnProps()
  Citizen.CreateThread(function()
    local models = curRace.props.models
    local positions = curRace.props.positions
    local headings = curRace.props.headings
    local vrots = curRace.props.vrots
    for i=1, #models do
      local prophash = models[i]
      local proppos = positions[i]
      local propheading = headings[i]
      
      RequestModelAndLoad(prophash)
      local prop = CreateObjectNoOffset(prophash, proppos.x + 0.0, proppos.y + 0.0, proppos.z + 0.0, false, false, false)
      while not DoesEntityExist(prop) do
        Citizen.Wait(0)
      end
      props[#props + 1] = prop

      SetEntityRotation(prop, vrots[i].x + 0.0, vrots[i].y + 0.0, vrots[i].z + 0.0, 2, true)
      SetModelAsNoLongerNeeded(prophash)
    end
  end)
end

function deleteFirstCheckpointObjects()
  DeleteObject(table.remove(checkpointObjects, 1))
  DeleteObject(table.remove(checkpointObjects, 1))
end

function spawnCheckpointObjects(checkpoint, objectHash, checkpointObjectLimit)
  if checkpointObjectLimit == nil then checkpointObjectLimit = 2 + config.checkpointPropLookahead end
  if checkpoint.rad == nil or checkpoint.hdg == nil then return end
  if #checkpointObjects >= checkpointObjectLimit * 2 then
    deleteFirstCheckpointObjects()
  end
  RequestModelAndLoad(objectHash)
  local leftPos, rightPos = getCheckpointObjectPositions(checkpoint.pos, checkpoint.rad, checkpoint.hdg)
  leftObject = CreateObjectNoOffset(objectHash, leftPos, false, false, false)
  rightObject = CreateObjectNoOffset(objectHash, rightPos, false, false, false)
  checkpointObjects[#checkpointObjects + 1] = leftObject
  checkpointObjects[#checkpointObjects + 1] = rightObject
  PlaceObjectOnGroundProperly(leftObject)
  PlaceObjectOnGroundProperly(rightObject)
  SetEntityHeading(leftObject, checkpoint.hdg)
  SetEntityHeading(rightObject, checkpoint.hdg + 180.0)
  if objectHash == config.startObjectHash then
    SetEntityCollision(leftObject, false)
    SetEntityCollision(rightObject, false)
  end
  SetModelAsNoLongerNeeded(objectHash)
end
