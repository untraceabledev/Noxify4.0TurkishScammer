local lastPay = {}

RegisterNetEvent("cash:roll")
AddEventHandler("cash:roll", function(src, pAmount)
    local user = exports["np-base"]:getModule("Player"):GetUser(src)
    local amount = tonumber(pAmount)
    if amount <= 0 or amount == nil then return end
    if user:getCash() >= amount then
        user:removeMoney(amount)
        TriggerClientEvent("player:receiveItem", src, "571920712", 1, false,
                           {amount = amount})
        TriggerClientEvent('np:setAmount', amount)
        return
    end

    return
end)

RegisterNetEvent("np-financials:cash:get")
AddEventHandler("np-financials:cash:get", function(src)
    TriggerClientEvent("np-financials:cash", src, getCurrentCash(src), false)
end)

RegisterNetEvent("np-financials:cash:give")
AddEventHandler("np-financials:cash:give", function(src, pTargetId, pAmount)
    if pAmount <= 0 then return end

    local user = exports["np-base"]:getModule("Player"):GetUser(tonumber(src))
    if not user then return end

    local recipient = exports["np-base"]:getModule("Player"):GetUser(tonumber(
                                                                         pTargetId))
    if not recipient then return end

    if #(GetEntityCoords(GetPlayerPed(src)) -
        GetEntityCoords(GetPlayerPed(pTargetId))) > 3.0 then
        TriggerClientEvent("DoLongHudText", src,
                           "You're too far to hand over any money.")
        return
    end

    if user == recipient then return end

    if getCurrentCash(src) - pAmount > 0 then
        TriggerClientEvent("doAnim", src, "id")
        user:removeMoney(pAmount)
        recipient:addMoney(pAmount)
        TriggerClientEvent("banking:addCash", src, getCurrentCash(src))
        TriggerEvent("np-log:server:CreateLog", "giveCash", "Give Cash", "red",
                     'Cash Given: $' .. pAmount .. ' Player: ' ..
                         GetPlayerName(src) .. ' Target: ' ..
                         GetPlayerName(pTargetId))
    else
        TriggerClientEvent("DoLongHudText", src, "You don't have enough money.")
        return
    end
end)

RPC.register("GetCurrentCash", function(src) return getCurrentCash(src) end)

function getCurrentCash(pSource)
    local user = exports["np-base"]:getModule("Player"):GetUser(pSource)
    local char = user:getCurrentCharacter()
    local currentCash = user:getCash()
    return currentCash
end

local lastPay = {}
function doAddCashToUser(pSource, pAmount)
    local user = exports["np-base"]:getModule("Player"):GetUser(pSource)
    if not user then return end

    if pAmount == 0 then return end

    local curTime = os.time()
    local _lastPay = lastPay[pSource]

    if _lastPay then
        if curTime - _lastPay.time <= 1 then
            _lastPay.count = lastPay.count + 1
        else
            _lastPay.count = 0
        end

        if _lastPay.count >= 4 then
            exports["np-log"]:AddLog("Exploiter", user,
                                     "User attempted to give themself money continually in less than 4 seconds",
                                     {money_to_give = total})
            DropPlayer(pSource, "[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]")
            return false
        end
    else
        lastPay[pSource] = {time = curTime, count = 1}
    end

    return true
end

exports("DoAddCashToUser", doAddCashToUser)

local cashAmount = 0
local pSrc = {}

RegisterServerEvent("inventory:source")
AddEventHandler("inventory:source", function(pData) 
  pSrc = pData 
end)

RegisterServerEvent("inventory:checkMoney")
AddEventHandler("inventory:checkMoney", function(pAmount) 
  local user = exports["np-base"]:getModule("Player"):GetUser(pSrc)
  local cid = user:getCurrentCharacter().id
  exports["np-db"]:execute("UPDATE characters SET `cash` = ? WHERE `id` = ?", {pAmount, cid})
  cashAmount = pAmount 
end)

function inventoryMoneyCheck()
    return cashAmount
end

exports('getItemCash', function()
    TriggerClientEvent("inventory:checkMoney", pSrc)
    return inventoryMoneyCheck()
end)

RegisterServerEvent("inventory:cashAmount")
AddEventHandler("inventory:cashAmount", function(pAmount)
    local user = exports["np-base"]:getModule("Player"):GetUser(source)
end)
