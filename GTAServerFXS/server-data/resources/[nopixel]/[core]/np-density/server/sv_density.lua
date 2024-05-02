RegisterNetEvent("np:peds:rogue")
AddEventHandler("np:peds:rogue", function(toDelete)
    local src = source

    local coords = GetEntityCoords(GetPlayerPed(src))
    local players = exports["np-infinity"]:GetNearbyPlayers(coords, 250)

    for i, v in ipairs(players) do
        TriggerClientEvent("np:peds:rogue:delete", v, toDelete)
    end
end)