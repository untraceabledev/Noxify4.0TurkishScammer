local CurrentBalance = 0 
local StolenGoods = {"oxy","goldbar","rolexwatch","stolen10ctchain","stolen2ctchain","stolen5ctchain","stolen8ctchain","stolencasiowatch","stolengameboy","stoleniphone","stolennokia","stolenoakleys","stolenproblem3","stolenpsp","stolenraybans","stolens8","stolentv","stolenmusic","stolencoffee","stolenmicrowave","stolencomputer","stolenart","diamond_collar","crackpipe","methpipe","cokeline" }
local runInProgress = false
local currentDropoff = 1
local dropoffEarnings = 0
local dropoffPos = nil
local isPickedup = false
-- Dropoff locations
local dropoffLocations = {
    [1] = vector3(281.94, 67.31, 99.89),
    [2] = vector3(439.94, -1517.14, 28.77),
    [3] = vector3(-1990.139, -321.41, 43.60),
    [4] = vector3(866.04, -2347.13, 29.83),
}

RegisterServerEvent("np-business:server:pawnhub:getBalance")
AddEventHandler("np-business:server:pawnhub:getBalance", function()
    local src = source

    if CurrentBalance > 0 then
        TriggerClientEvent("DoLongHudText", src, "You're Current Balance is $" .. CurrentBalance.. ".00", 1)
    else
        TriggerClientEvent("DoLongHudText", src, "Bitch you dump ?", 2)
    end 
end)

RegisterServerEvent("np-business:server:pawnhub:startRun")
AddEventHandler("np-business:server:pawnhub:startRun", function()
    local src = source
    local user = exports["np-base"]:getModule("Player"):GetUser(src)  
    local char = user:getCurrentCharacter()

    if CurrentBalance < 1 then 
        TriggerClientEvent("DoLongHudText", source, "No balance to start a run...", 2)
        return
    end

    if runInProgress then
        TriggerClientEvent("DoLongHudText", source, "Run already in progress.", 2)
        return
    end

    if dropoffEarnings < 1 then
        dropoffEarnings = math.floor(CurrentBalance / 4)
    end

    dropoffPos = dropoffLocations[currentDropoff]
    --Spawn vehicle for player
    local vehicle = CreateVehicle(`sultan`, vector3(-711.97, -1123.44, 9.94), 5.0, true, false)
    local metaData = {
        isPawnshop = true,
        player = char.id,
        amount = dropoffEarnings
    }
    -- Start run
    runInProgress = true
    currentDropoff = 1
    runTimer = 0
    TriggerEvent("np-objects:prepareObject", "prop_cs_heist_bag_02", dropoffPos.x, dropoffPos.y, dropoffPos.z - 0.88, 5, metaData)
    TriggerClientEvent("np-business:client:pawnhub:pickupLocationMarked", source, dropoffPos)
end)

RegisterServerEvent("np-business:server:pawnhub:pickupCash")
AddEventHandler("np-business:server:pawnhub:pickupCash", function(pId)
    local src = source
    local user = exports["np-base"]:getModule("Player"):GetUser(src)  
    local char = user:getCurrentCharacter()

    if not runInProgress then
        TriggerClientEvent("DoLongHudText", source, "No run in progress.", 2)
        return
    end

    if isPickedup then
        TriggerClientEvent("DoLongHudText", source, "You already picked up the cash !", 2)
        return
    end

    if runInProgress then
        TriggerEvent("np-objects:DeleteObject", pId)

        user:addMoney(dropoffEarnings) 
        currentDropoff = currentDropoff + 1 
        CurrentBalance = CurrentBalance - dropoffEarnings
        isPickedup = true 
        dropoffPos = nil
        TriggerClientEvent("np-business:client:pawnhub:completedRun", source)

        if currentDropoff > 4 then
            TriggerEvent("np-business:server:pawnhub:endRun")
        end

        Citizen.Wait(10 * 60 * 1)
        TriggerEvent("np-business:server:pawnhub:starNewtRun", src)
    end
end)

RPC.register("np-inventory:sellStolenItems", function (src, pAccess)
    local user = exports["np-base"]:getModule("Player"):GetUser(src)  
    local inventory = exports["inventory"]:getInventory("Stolen-Goods-PH-wl")
    
    if (pAccess) then
        for amount, v in pairs(inventory) do
            for k, h in ipairs(StolenGoods) do
                if v.item_id == h then
                    local qnt = exports["inventory"]:getQuantitySvP(src, "Stolen-Goods-PH-wl", v.item_id, false, false)
                    local finalPrice = exports["inventory"]:getItemPrice(v.item_id) * qnt
                    CurrentBalance = CurrentBalance + finalPrice 
                    TriggerEvent("inv:delete", "Stolen-Goods-PH-wl")
                end
            end
        end
    end
end)

RegisterServerEvent("np-business:server:pawnhub:starNewtRun")
AddEventHandler("np-business:server:pawnhub:starNewtRun", function(src)
    local user = exports["np-base"]:getModule("Player"):GetUser(src)  
    local char = user:getCurrentCharacter()
    local z = 0

    isPickedup = false
    dropoffPos = dropoffLocations[currentDropoff]
    local metaData = {
        isPawnshop = true,
        player = char.id,
        amount = dropoffEarnings
    }

    if currentDropoff == 2 then 
        z = dropoffPos.z - 0.34
    elseif currentDropoff == 3 then
        z = dropoffPos.z - 0.34
    elseif currentDropoff == 4 then
        z = dropoffPos.z - 0.36
    end

    TriggerEvent("np-objects:prepareObject", "prop_cs_heist_bag_02", dropoffPos.x, dropoffPos.y, z, 5, metaData)
    TriggerClientEvent("np-business:client:pawnhub:pickupLocationMarked", src, dropoffPos)
end)

RegisterServerEvent("np-business:server:pawnhub:endRun")
AddEventHandler("np-business:server:pawnhub:endRun", function()
    if not runInProgress then
        TriggerClientEvent("DoLongHudText", source, "No run in progress.", 2)
        return
    end
    
    if currentDropoff <= 4 then
        TriggerClientEvent("DoLongHudText", source, "Run incomplete!", "You haven't completed all dropoff locations yet.", 2)
        return
    end

    local vehicle = GetVehiclePedIsIn(GetPlayerPed(source), false)
    SetEntityAsMissionEntity(vehicle, true, true)
    DeleteVehicle(vehicle)
    runInProgress = false
    TriggerClientEvent("np-business:client:pawnhub:completedRun", source)
end)
