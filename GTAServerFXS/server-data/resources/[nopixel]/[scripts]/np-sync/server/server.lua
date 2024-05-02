local readyPlayers = {}

RegisterServerEvent("np:sync:player:ready")
AddEventHandler("np:sync:player:ready",function()
    local src = source

    readyPlayers[src] = true
end)

RegisterServerEvent("sync:request")
AddEventHandler("sync:request", function(native, playerid, entityid, args)
    local src = source

    if readyPlayers[playerid] then
        TriggerClientEvent("sync:execut", playerid, native, entityid, args)
    end
end)

RegisterServerEvent("np-sync:executeSyncNative")
AddEventHandler("np-sync:executeSyncNative", function(native, netEntity, options, args)
    local src = source

    TriggerClientEvent("np-sync:clientExecuteSyncNative", -1, native, netEntity, options, args)
end)