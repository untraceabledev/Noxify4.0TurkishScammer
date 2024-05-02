local ActivePlayers = {}

function DoesSourceExist(pPlayerId)
    return ActivePlayers[pPlayerId]
end

RegisterServerEvent("np-base:spawnInitialized")
AddEventHandler("np-base:spawnInitialized", function()
    local src = source

    ActivePlayers[src] = true
   -- TriggerClientEvent("onPlayerJoining", src, src)
end)

AddEventHandler("playerDropped", function()
    local src = source
    ActivePlayers[src] = nil
    
    TriggerClientEvent("onPlayerDropped", -1, src)
end)

function GetPlayerCoords(pServerId)
    return exports['np-infinity']:GetPlayerCoords(pServerId)
end

function GetNearbyPlayers(pCoords, pRadius)
    local pData = exports["np-infinity"]:CurrentPlayers()
    local returnData = {}

    for k, v in pairs(pData) do
        if #(vector3(pCoords.x, pCoords.y, pCoords.z) - vector3(v.x, v.y, v.z)) < pRadius then
            table.insert(returnData, k)
        end
    end
    return returnData
end


AddEventHandler('playerJoining', function()
    local scr = source
   -- TriggerClientEvent("onPlayerJoining", scr)
end)