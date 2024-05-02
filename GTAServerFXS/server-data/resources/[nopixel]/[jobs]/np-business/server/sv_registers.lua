RECEIVED_RECEIPTS = {}
ACTIVE_PURCHASES = {}


RPC.register("np-business:startPurchase", function(src, data)
    local pRegisterId = data.registerId
    local pCost = data.cost
    local pComment = data.comment
    local pBusiness = data.business
    ACTIVE_PURCHASES[pRegisterId] = {}
    ACTIVE_PURCHASES[pRegisterId].registerId = pRegisterId
    ACTIVE_PURCHASES[pRegisterId].cost = pCost
    ACTIVE_PURCHASES[pRegisterId].comment = pComment
    ACTIVE_PURCHASES[pRegisterId].charger = src
    ACTIVE_PURCHASES[pRegisterId].biz = pBusiness
    Wait(100)

    TriggerClientEvent("np-business:activePurchase", -1, ACTIVE_PURCHASES[pRegisterId])
end)

RPC.register("np-business:completePurchase", function(src, data)
    -- here we need to grab tax amount, and add to state account
    local purchase = ACTIVE_PURCHASES[data.registerId]
    if not purchase then return end
    local user = exports["np-base"]:getModule("Player"):GetUser(src)
    local char = user:getCurrentCharacter()
    local cash = user:getCash()
    local BizAccountId = exports["np-business"]:GetBizBank(purchase.biz)
    local AccountId = user:getBankId()
    local success
    local shouldGiveReceipt = true
    local message = "$" .. tostring(purchase.cost) .. " was withdrawn from your account."

    if (data.cash) then
        success = exports["financials"]:DoCashTransaction(src, BizAccountId, "Services", purchase.cost, purchase.comment, "purchase")
        if not success then
            TriggerClientEvent("DoLongHudText", src, "You don't have enough money.", 2)
            TriggerEvent("DoLongHudText", purchase.charger, "The purchase at register ".. purchase.registerId .." has been failed. (Not enough cash)", 2)
            return false
        end
    else
        success = exports["financials"]:DoBusinessTransaction(src, AccountId, BizAccountId, purchase.cost, "Services", purchase.comment, char.id, purchase.charger, "purchase")
        print("success", success)
        if not success then
            TriggerClientEvent("DoLongHudText", src, "You don't have enough money.", 2)
            TriggerEvent("DoLongHudText", purchase.charger, "The purchase at register ".. purchase.registerId .." has been failed. (Not enough cash)", 2)
            return false
        end
        TriggerClientEvent("np-phone:SendNotify", src, message, "charge", GetBizName(purchase.biz))
    end

    TriggerClientEvent("np-business:closePurchase", -1, purchase.registerId)
    ACTIVE_PURCHASES[purchase.registerId] = nil
    return true
end)