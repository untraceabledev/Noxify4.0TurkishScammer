RegisterNetEvent("tow:attachVehicle")
AddEventHandler("tow:attachVehicle", function(serverId, pContext, tow, vehicle)
    TriggerClientEvent("tow:attachVehicle", serverId, pContext, tow, vehicle)
end)