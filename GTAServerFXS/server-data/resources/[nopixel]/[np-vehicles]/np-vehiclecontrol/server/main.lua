RegisterServerEvent("np:vehicle:request:control")
AddEventHandler("np:vehicle:request:control", function(pServerId, pNetId)
	local pSrc = source
	TriggerClientEvent("np:vehicle:recover:control", pSrc, pServerId, pNetId)
end)

RegisterServerEvent("np:vehicle:restore:control")
AddEventHandler("np:vehicle:restore:control", function(pServerId, pNetId)
	local pSrc = source
	TriggerClientEvent("np:vehicle:transfer:control", pSrc, pServerId, pNetId)
end)