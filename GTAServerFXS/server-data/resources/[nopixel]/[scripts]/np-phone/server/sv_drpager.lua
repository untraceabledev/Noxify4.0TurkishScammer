RegisterNetEvent("phone:triggerPager")
AddEventHandler("phone:triggerPager", function(hospital)
    TriggerClientEvent('phone:triggerPager', -1, hospital, true)
end)