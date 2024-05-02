local spawnLocations = {
    ["cas_1"] = {["pos"] = vector4(922.19, -54.26, 21.0, 0), ['info'] = 'Casino Room 501'},
    ["cas_2"] = {["pos"] = vector4(924.78, -49.77, 21.0, 0), ['info'] = 'Casino Room 502'},
    ["cas_3"] = {["pos"] = vector4(927.65, -45.49, 21.0, 0), ['info'] = 'Casino Room 503'},
    ["cas_4"] = {["pos"] = vector4(926.56, -35.78, 21.0, 0), ['info'] = 'Casino Room 504'},
    ["cas_5"] = {["pos"] = vector4(922.1, -33.25, 21.0, 0), ['info'] = 'Casino Room 505'},
    ["cas_6"] = {["pos"] = vector4(917.8, -30.2, 21.0, 0), ['info'] = 'Casino Room 506'},
    ["cas_7"] = {["pos"] = vector4(908.21, -31.65, 21.0, 0), ['info'] = 'Casino Room 507'},
    ["cas_8"] = {["pos"] = vector4(905.34, -36.05, 21.0, 0), ['info'] = 'Casino Room 508'},
    ["cas_9"] = {["pos"] = vector4(902.54, -40.41, 21.0, 0), ['info'] = 'Casino Room 509'},
    ["cas_10"] = {["pos"] = vector4(880.99, -45.54, 21.0, 0), ['info'] = 'Casino Room 510'},
    ["cas_11"] = {["pos"] = vector4(878.26, -50.07, 21.0, 0), ['info'] = 'Casino Room 511'},
    ["cas_12"] = {["pos"] = vector4(875.21, -54.57, 21.0, 0), ['info'] = 'Casino Room 512'},
    ["cas_13"] = {["pos"] = vector4(872.59, -59.06, 21.0, 0), ['info'] = 'Casino Room 513'},
    ["cas_14"] = {["pos"] = vector4(870.03, -63.16, 21.0, 0), ['info'] = 'Casino Room 514'},
    ["cas_15"] = {["pos"] = vector4(871.02, -72.97, 21.0, 0), ['info'] = 'Casino Room 515'},
    ["cas_16"] = {["pos"] = vector4(875.82, -75.95, 21.0, 0), ['info'] = 'Casino Room 516'},
    ["cas_17"] = {["pos"] = vector4(880.26, -78.73, 21.0, 0), ['info'] = 'Casino Room 517'},
    ["cas_18"] = {["pos"] = vector4(884.62, -81.41, 21.0, 0), ['info'] = 'Casino Room 518'},
    ["cas_19"] = {["pos"] = vector4(888.94, -84.09, 21.0, 0), ['info'] = 'Casino Room 519'},
    ["cas_20"] = {["pos"] = vector4(893.21, -86.8, 21.0, 0), ['info'] = 'Casino Room 520'},
    ["cas_21"] = {["pos"] = vector4(902.98, -85.68, 21.0, 0), ['info'] = 'Casino Room 521'},
    ["cas_22"] = {["pos"] = vector4(905.96, -80.95, 21.0, 0), ['info'] = 'Casino Room 522'},
    ["cas_23"] = {["pos"] = vector4(908.7, -76.54, 21.0, 0), ['info'] = 'Casino Room 523'},
    ["cas_24"] = {["pos"] = vector4(911.32, -72.32, 21.0, 0), ['info'] = 'Casino Room 524'},
}

RPC.register("np-business:hotel:rpc:getRooms", function(src, cid)
    local roomIds
    local SendSpawn
    exports["np-db"]:execute("SELECT * FROM hotels", function(result)
        if result[1] ~= nil then
            local tenants = json.encode(result[1].tenants)
            for i=1, #tenants do
                if (tenants[i] == cid) then
                    roomIds = result[1].room
                end
            end
            if result[1].owner == cid then
                roomIds = result[1].room
            end
        end
    end)


    for k,v in pairs(spawnLocations) do 
        if spawnLocations[k] == roomIds then
            SendSpawn = v
        end
    end

    Citizen.Wait(500)
    return SendSpawn
end)

RPC.register("np-business:hotel:rpc:addTenant", function(src, room, cid, main)
    local success

    exports["np-db"]:execute("SELECT * FROM hotels", function(result)
        if result[1] ~= nil then
            if result[1].owner ~= cid then
                local tenants = json.decode(result[1].tenants)
                if tenants ~= "{}" then
                    for i=1, #tenants do
                        if (tenants[i] == cid) then
                            success = false
                            return
                        end
                    end

                    table.insert(tenants, cid)
                    exports["np-db"]:execute("UPDATE hotels SET `tenants` = @tenants WHERE `room` = @room", {
                        ['@tenants'] = json.encode(tenants),
                        ['@room'] = room
                    })
                    success = true 
                else
                    local tenants = json.decode(result[1].tenants)
                    table.insert(tenants, cid)
                    exports["np-db"]:execute("UPDATE hotels SET `tenants` = @tenants WHERE `room` = @room", {
                        ['@given_atenantsccess'] = json.encode(tenants),
                        ['@room'] = room
                    })
                    success = true 
                end
            else
                success = false 
            end
        else 
            exports["np-db"]:execute('INSERT INTO hotels (room, owner, main) VALUES (@room, @owner, @main)', {
                ['room'] = room,
                ['owner'] = cid,
                ['main'] = main,
            })
            success = true 
        end
    end)

    
    Citizen.Wait(100)
    return success
end)

RPC.register("np-business:hotel:rpc:removeTenant", function(src, room, cid)
    local success
    exports["np-db"]:execute("SELECT * FROM hotels WHERE room = @room", {['room'] = room}, function(result)
        if result[1] ~= nil then
            local tenants = json.decode(result[1].tenants)
            local index = {}

            for k,v in pairs(tenants) do
                index[v]=k
            end

            if index[cid] == nil then
                TriggerClientEvent("DoLongHudText", src, "CID: " .. cid .. " is not a Tenants", 2)
                return 
            end

            table.remove(tenants, index[cid])
            exports["np-db"]:execute("UPDATE hotels SET `tenants` = @tenants WHERE `room` = @room", {
                ['@tenants'] = json.encode(tenants),
                ['@room'] = room
            })
            success = true
        else
            success = false
        end
    end)

    Citizen.Wait(100)
    return success
end)

RPC.register("np-business:hotel:rpc:getTenants", function(src, room)
    local tenants

   exports["np-db"]:execute("SELECT * FROM hotels WHERE room = @room", {['room'] = room}, function(result)
        if result[1] ~= nil then
            tenants = result[1].tenants
        end
    end)

    Citizen.Wait(100)
    if tenants ~= nil then
        return json.decode(tenants)
    else
        return #tenants
    end
end)

RPC.register("np-business:hotel:rpc:clearTenants", function(src, room)
    exports["np-db"]:execute("DELETE FROM hotels WHERE room = @room", {['@room'] = room})
end)


