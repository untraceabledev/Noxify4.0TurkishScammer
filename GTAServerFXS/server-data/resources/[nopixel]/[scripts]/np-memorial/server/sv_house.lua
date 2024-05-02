RegisterServerEvent("memorial:house:hug:completed")
AddEventHandler("memorial:house:hug:completed", function()
    local pSource = source
    TriggerClientEvent("memorial:house:boe:hug", pSource)
end)

RegisterServerEvent("memorial:house:hug:request")
AddEventHandler("memorial:house:hug:request", function()
    local pSource = source
    TriggerClientEvent("memorial:house:hug:granted", pSource)
end)

local pStatus = true

RPC.register("np-memorial:getChainStatus", function(pSource)

    TriggerClientEvent("memorial:house:chain", pSource, pStatus)

    return pStatus
end)