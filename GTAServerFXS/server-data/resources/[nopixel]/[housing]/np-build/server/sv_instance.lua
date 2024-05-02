local instances = {}

RegisterServerEvent("Instance:addToInstance")
AddEventHandler("Instance:addToInstance",function(genID)
    local src = source
    instances[src] = true
    exports["np-infinity"]:setWorld(src, genID)
    TriggerClientEvent("Instance:setCurrentInstance", -1, genID, instances)
end)

RegisterServerEvent("Instance:removeFromInstance")
AddEventHandler("Instance:removeFromInstance", function(genID)
    local src = source
    instances[src] = false
    exports["np-infinity"]:setWorld(src, "default")
    TriggerClientEvent("Instance:setCurrentInstance", -1, genID, instances)
end)