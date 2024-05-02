RegisterNetEvent('stores:pay')
AddEventHandler('stores:pay', function(data)
    local src = source
    local user = exports["np-base"]:getModule("Player"):GetUser(src)
    local usercash = user:getCash()

    local getBankId = user:getBankId()
    local accountId = getBankId[1].account_id
    local bankAccount = exports["financials"]:getAccountBalance(accountId) 

    if data.payType == "cash" then
        
        if tonumber(usercash) >= data.price then
            user:removeMoney(data.price)
                for k,v in pairs(data.cartArr) do
                    TriggerClientEvent('player:receiveItem', src, v.itemname, tonumber(v.count))
                    TriggerClientEvent('stores:close', src)
                end
            else
                TriggerClientEvent('DoLongHudText', src, "You don't have enough cash", 2)
            end
        else        
            if tonumber(bankAccount) >= data.price then
                local success, message = exports["financials"]:adjustAccountBalance(accountId, "remove", data.price, src, "24/7 Store")
                if not success then
                    TriggerClientEvent("DoLongHudText", src, message)
                    return
                end
                for k,v in pairs(data.cartArr) do
                    TriggerClientEvent('player:receiveItem', src, v.itemname, tonumber(v.count))
                    TriggerClientEvent('stores:close', src)
                end
            else
                TriggerClientEvent('DoLongHudText', src, "You don't have enough bank", 2)
            end
        end

end)