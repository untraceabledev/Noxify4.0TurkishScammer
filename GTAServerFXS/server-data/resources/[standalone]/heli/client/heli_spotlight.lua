local activeSpotlightPlayers = {}
local spotlightThreadActive = false

RegisterNetEvent('onPlayerDropped')
AddEventHandler('onPlayerDropped', function(player)
    if player == PlayerId() then
        return
    end

    for i, v in ipairs(activeSpotlightPlayers) do
        if v.player == player then
            table.remove(activeSpotlightPlayers, i)
            break
        end
    end
    SpotlightThread()
end)

local lastSyncTime = 0
function SyncSpotlightPosition(pCamRotation)
    local currentTime = GetGameTimer()
    if currentTime - lastSyncTime < 1000 then
        return
    end
    lastSyncTime = currentTime

    LocalPlayer.state:set('helicamrot', pCamRotation, true)
end

CreateThread(function()
    AddStateBagChangeHandler("helispotlight", nil, function(bagName, key, value)
        local player = GetPlayerFromStateBagName(bagName)

        if player == 0 or player == PlayerId() then
            return
        end

        local plyServerId = GetPlayerServerId(player)

        if value == true then
            activeSpotlightPlayers[#activeSpotlightPlayers + 1] = { player = plyServerId, rotation = vector3(0.0, 0.0, 0.0) }
        else
            for i, v in ipairs(activeSpotlightPlayers) do
                if v.player == plyServerId then
                    table.remove(activeSpotlightPlayers, i)
                    break
                end
            end
        end

        if #activeSpotlightPlayers == 1 then
            spotlightThreadActive = true
            SpotlightThread()
        end

        if #activeSpotlightPlayers <= 0 then
            spotlightThreadActive = false
        end
    end)

    AddStateBagChangeHandler("helicamrot", nil, function(bagName, key, value)
        local player = GetPlayerFromStateBagName(bagName)

        if player == 0 or player == PlayerId() then
            return
        end

        local plyServerId = GetPlayerServerId(player)

        for i, v in ipairs(activeSpotlightPlayers) do
            if v.player == plyServerId then
                v.rotation = value
                break
            end
        end
    end)
end)

function SpotlightThread()
    if #activeSpotlightPlayers <= 0 then
        spotlightThreadActive = false
        return
    end

    if #activeSpotlightPlayers > 1 then
        return
    end

    CreateThread(function()
        local oldRotations = {}
        local alpha = 0.04
        while spotlightThreadActive do
            for i, spotlightData in ipairs(activeSpotlightPlayers) do
                local player = GetPlayerFromServerId(spotlightData.player)
                local ped = GetPlayerPed(player)
                local vehicle = GetVehiclePedIsIn(ped, false)

                local coords = GetOffsetFromEntityInWorldCoords(vehicle, 0.0, 0.0, -1.5)

                local newRotation = spotlightData.rotation

                if not oldRotations[spotlightData.player] then
                    oldRotations[spotlightData.player] = vector3(0.0, 0.0, 0.0)
                end

                local oldRotation = oldRotations[spotlightData.player]

                local oldX = oldRotation.x + alpha * (newRotation.x - oldRotation.x)
                local oldY = oldRotation.y + alpha * (newRotation.y - oldRotation.y)
                local oldZ = oldRotation.z + alpha * (newRotation.z - oldRotation.z)
                oldRotation = vector3(oldX, oldY, oldZ)
                oldRotations[spotlightData.player] = oldRotation

                local lerpedRotation = oldRotation

                DrawSpotLightWithShadow(coords, lerpedRotation, 200, 200, 205, 300.0, 15.0, 0.0, 8.0, 1.0, 0)
            end
            Wait(0)
        end
    end)
end
