local employeesList = {}
local emoloyeeData = {}
local employeeAmount = 0 
local activePurchases = {}
local PurchasesData = {}

RegisterServerEvent('np-foodchain:orderFood')
AddEventHandler('np-foodchain:orderFood', function (data, cb)
    local startPos = GetEntityCoords(PlayerPedId())
    local cb = cb({ data = {}, meta = { ok = true, message = '' } })
    local tempContext, tempAction, tempAnimDict, tempAnim, animLoop = {}, "", "", "", false
end)

RegisterServerEvent('np-foodchain:cleanStation')
AddEventHandler('np-foodchain:cleanStation', function(data, cb)
    local tempAnimDict = "amb@world_human_maid_clean@base"
    local tempAnim = "base"
end)

RPC.register("np-foodchain:tryJoinJob", function(src, location)
    local user = exports["np-base"]:getModule("Player"):GetUser(src)
    local cid = user:getCurrentCharacter().id
    local playerName = user:getCurrentCharacter().first_name

    -- if  then
        emoloyeeData = {
            name = playerName,
            cid = cid,
            location = location
        }
        table.insert(employeesList, emoloyeeData)
        employeeAmount = employeeAmount + 1
        isSignedOn = true
        message = "you signed on"
    -- else
    --     isSignedOn = false
    --     message = "you are not an employee at bruger shot"
    -- end

    return isSignedOn, message
end)

RPC.register("np-foodchain:server:getActiveEmployees", function(src)
    return employeesList
end)

RPC.register("np-foodchain:leaveJob", function(src)
    local user = exports["np-base"]:getModule("Player"):GetUser(src)
    local cid = user:getCurrentCharacter().id
    local to_remove = tostring(cid)

    local index = {}
    
    for k,v in pairs(employeesList) do
        index[v]=k
    end
    employeeAmount = employeeAmount - 1
    table.remove(employeesList, index[to_remove])
end)

RPC.register("np-foodchain:isStationActive", function(src, stationId)
    isActive = true

    return isActive
end)

RPC.register("np-foodchain:completePurchase", function(src, key)
    local user = exports["np-base"]:getModule("Player"):GetUser(src)
    local BankBalance = user:getBalance()
    local CashBalance = user:getCash()
    local success

    local index = {}
    
    for k,v in pairs(activePurchases) do
        index[v]=k

        if CashBalance >= v.cost then
            user:removeMoney(tonumber(v.cost))
            success = true
            table.remove(activePurchases, index[key])
        else
            success = false
        end
    end
    TriggerClientEvent("np-foodchain:closePurchase", -1, key)
    return success
end)

RPC.register("np-foodchain:canUseStore", function(src) -- check config
    if employeeAmount >= 0 and employeeAmount < 1 then
        canUse = true
    else
        canUse = false
    end

    return canUse
end)

RPC.register("np-foodchain:startPurchase", function(src, data)
    local user = exports["np-base"]:getModule("Player"):GetUser(src)
    local info = user:getCurrentCharacter()
    local playerName = info.first_name .. " " .. info.last_name

    local temp = {
        cost = data.cost,
        comment = data.comment,
        registerId = data.registerId,
        charger = playerName
    }

    table.insert(activePurchases, temp)
    
    Citizen.Wait(100)
    TriggerClientEvent("np-foodchain:activePurchase", -1, activePurchases)
end)




