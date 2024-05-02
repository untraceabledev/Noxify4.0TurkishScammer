
RPC.register("np-business:dodoLogisticsPurchasePackage", function(src, pPrice)
    local user = exports["np-base"]:getModule("Player"):GetUser(src) 
    local cid = user:getCurrentCharacter().id
    local accountId = user:getBankId()
    local bank = exports["financials"]:getAccountBalance(accountId)
    local cash = user:getCash() 
    local info = {
        app = "info",
        title = "Dodo Logistics",
        body = "Purchased a Dodo package for $" .. pPrice,
        show = true,
    }

    if cash >= pPrice then
        user:removeMoney(pPrice)
        -- transfer the money to the employee or charge the player
        TriggerClientEvent("np-phone:client:sendInfo", src, info)

        return true
    elseif bank >= pPrice then
        exports["financials"]:transaction(accountId, groupBank, pPrice, comment.data, cid, 5)
        TriggerClientEvent("np-phone:client:sendInfo", src, info)

        return true
    else
        return false
    end
end)