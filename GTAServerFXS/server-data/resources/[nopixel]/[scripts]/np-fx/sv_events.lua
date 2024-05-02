RegisterNetEvent("np-fx:smoke:grenade", function(pCoords)
    local players = exports["np-infinity"]:GetNerbyPlayers(pCoords, 100)
    local ptDict, ptName = "core", "exp_grd_grenade_smoke"
    local position = {
        coords = { x = pCoords.x, y = pCoords.y, z = pCoords.z + 1 },
        rot = { x = 0.0, y = 0.0, z = 0.0 },
        scale = 1.0,
        alpha = 10.0,
    }
    TriggerParticleAtCoord(ptDict, ptName, true, position, 15000, players)
    Wait(1000)
    TriggerParticleAtCoord(ptDict, ptName, true, position, 15000, players)
end)

RegisterNetEvent("fx:ThermiteChargeEnt", function(pNetId, pCoords)
    local pEntity = NetworkGetEntityFromNetworkId(pNetId)
    local pCoords = GetEntityCoords(pEntity)
    local players = exports["np-infinity"]:GetNerbyPlayers(pCoords, 25)
    local ptDict, ptName = "scr_ornate_heist", "scr_heist_ornate_thermal_burn"
    
    local position = {
        offset = { x = 0.0, y = 2.0, z = 0.0 },
        rot = { x = 0.0, y = 0.0, z = 0.0 },
        scale = 1.0,
        alpha = 1.0,
    }
    TriggerParticleOnEntity(ptDict, ptName, true, pEntity, nil, position, 2000, players)
end)

RegisterNetEvent("fx:waterPour", function(pNetId)
    local src = source
    local ped = GetPlayerPed(src)
    local pCoords = GetEntityCoords(ped)
    local players = exports["np-infinity"]:GetNerbyPlayers(pCoords, 10)
    local ptDict, ptName = "cut_trevor3", "cs_trev5_water_pour"
    
    local position = {
        offset = { x = 0.35, y = 0.0, z = 0.23 },
        rot = { x = 0.0, y = 0.0, z = 0.0 },
        scale = 1.0,
        alpha = 1.0,
    }
    TriggerParticleOnEntity(ptDict, ptName, true, pNetId, nil, position, 4000, players)
end)

RegisterNetEvent("np-fx:graffiti:spray", function(pNetId, coords)
    local src = source
    local pCoords = GetEntityCoords(GetPlayerPed(src))
    local players = exports["np-infinity"]:GetNerbyPlayers(pCoords, 25)
    local ptDict, ptName = FX_LIST[1976].dict, FX_LIST[1976].fx

    local position = {
        offset = { x = 0.0, y = 0.0, z = 0.1 },
        rot = { x = 0.0, y = 0.0, z = 0.0 },
        color = { r = 1.0, g = 1.0, b = 1.0},
        scale = 1.0,
        alpha = 1.0,
    }

    TriggerParticleOnEntity(ptDict, ptName, true, pNetId, nil, position, 40000, players)
end)

RegisterNetEvent("np-fx:graffiti:stopSpray", function(pNetId)
    local pEntity = NetworkGetEntityFromNetworkId(pNetId)
    local pCoords = GetEntityCoords(pEntity)

    TriggerClientEvent("particle:sync:toggle:stop", -1, pEntity)
end)

RegisterNetEvent("fx:DetCord", function(pEntity, pCoords)
    local players = exports["np-infinity"]:GetNerbyPlayers(pCoords, 25)
    local ptDict, ptName = "scr_ornate_heist", "scr_heist_ornate_thermal_burn"
    local position = {
        offset = {x = 0.0, y = 2.0, z = 0.0},
        rot = {x = 0.0, y = 0.0, z = 0.0},
        scale = 2.0,
    }

    TriggerParticleOnEntity(ptDict, ptName, true, pEntity, nil, position, 2000, players)
end)

RegisterNetEvent("np-fx:chain:blingDiamonds", function(pCoords, pType, pSize, pStrengh, pScale)
    local serverId = source
    local players = exports["np-infinity"]:GetNerbyPlayers(pCoords, 25)
    local ptDict, ptName = "", ""
    if pType == "diamonds" then
        ptDict, ptName = "scr_bike_adversary", "scr_adversary_weap_glow"
    end
    if pType == "ruby" then
        ptDict, ptName = "scr_bike_adversary", "scr_adversary_foot_flames"
    end
    if pType == "tanzanite" then
        ptDict, ptName = "scr_bike_adversary", "scr_adversary_gunsmith_weap_change"
    end
    -- local scale = (math.min[0.5, math.max[0.1, 0.025 * pSize]]) * (pScale or 1.0)
    local alpha = 1.0 + (pStrengh / 10)
    local position = {
        offset = {x = -0.04, y = 0.17, z = -0.1},
        rot = {x = -386.0, y = 19.0, z = -163.0},
        scale = pScale,
        alpha = alpha
    }
    TriggerParticleOnPlayer(ptDict, ptName, true, serverId, 10706, position, 2000, players)
end)

RegisterNetEvent("fx:poo:start", function(PooingID)
    local serverId = source
    local coords = GetEntityCoords(GetPlayerPed(serverId))
    local players = exports["np-infinity"]:GetNerbyPlayers(pCoords, 25)

    local position = {
        offset = {x = 0.0, y = 0.0, z = -0.1},
        rot = {x = 0.0, y = 0.0, z = 0.0},
        scale = 0.85,
        alpha = 20.0
    }

    for i, v in ipairs(players) do
        TriggerClientEvent("particle:sync:player", v, "scr_amb_chop", "ent_anim_dog_poo", true, serverId, 11816, position, false, PooingID)
    end
end)

RegisterNetEvent("fx:puke", function(pTarget)
    local serverId = source
    if pTarget ~= nil then
        serverId = pTarget
    end

    local pCoords = GetEntityCoords(GetPlayerPed(serverId))
    local players = exports["np-infinity"]:GetNerbyPlayers(pCoords, 25)

    local position = {
        offset = {x = 0.0, y = 0.0, z = 0.0},
        rot = {x = 0.0, y = 0.0, z = 0.0},
        scale = 1.0,
        alpha = 10.0
    }

    TriggerParticleOnPlayer("scr_family5", "scr_trev_puke", true, serverId, 31086, position, 5000, players)
end)

local function getpos(i)
    local x = -951.59 - (5.89 * i)
    local y = -3365.78 + (3.23 * i)
    local z = 55.99
    local p = {
        coords = { { x = x, y = y, z = z } },
        rot = { x = 0.0, y = 0.0, z = 0.0 },
        scale = 0.5,
        alpha = 10.0,
    }
    return p
end

local function doFx(fx, i, offset)
    Citizen.CreateThread(function()
        local ptDict, ptName = fx.dict, fx.fx
        local position = getpos(i - offset)
        TriggerEvent("np-scenes:addSceneToClient", {
            coords = vector3(position.coords[1].x, position.coords[1].y, position.coords[1].z),
            text = "<font size='50'>" .. "(" .. i .. ") - " .. fx.dict .. " - " .. fx.fx .. "</font>",
            distance = 100,
            color = "white",
            caret = false,
            font = 0,
            solid = false,
            background = {
              r = 255,
              g = 255,
              b = 255,
              alpha = 255,
            }
        })
        while true do 
            TriggerParticleAtCoord(ptDict, ptName, true, position, 5000, players)
            Citizen.Wait(5000)
        end
    end)
end

RegisterServerEvent("np-fx:sound:playDispatch")
AddEventHandler("np-fx:sound:playDispatch", function(sound)
    local src = source
    local coords = GetEntityCoords(GetPlayerPed(src))
    local players = exports["np-infinity"]:GetNerbyPlayers(coords, 5)
    
    -- triggerAudio(src, 1, 2.0, sound, 'DLC_NIKEZ_GENERAL', 'np-fx:sound:PlaySound')
    triggerAudio(src, 1, 2.0, sound, 'DLC_NIKEZ_RINGTONES', 'np-fx:sound:PlaySound')
end)

RegisterServerEvent("fx:trident")
AddEventHandler("fx:trident", function()
    local src = source
    local coords = GetEntityCoords(GetPlayerPed(src))
    local players = exports["np-infinity"]:GetNerbyPlayers(coords, 5)

    
    for i, v in ipairs(players) do
        TriggerClientEvent("particle:sync:player", v, "scr_amb_chop", "ent_anim_dog_poo", true, serverId, 11816, position, false, PooingID)
    end
end)

RegisterServerEvent("np-fx:sound:vehicles")
AddEventHandler("np-fx:sound:vehicles", function(sound)
    local src = source
    local coords = GetEntityCoords(GetPlayerPed(src))
    local players = exports["np-infinity"]:GetNerbyPlayers(coords, 3)

    triggerAudio(src, 1, 3.0, sound, 'DLC_NIKEZ_GENERAL', 'np-fx:sound:PlaySound')
end)

RegisterServerEvent("np-fx:sound:playGateLocking")
AddEventHandler("np-fx:sound:playGateLocking", function(isLocked, isSpecial)
    local src = source
    local coords = GetEntityCoords(GetPlayerPed(src))
    local players = exports["np-infinity"]:GetNerbyPlayers(coords, 3)
    local sound = ""

    if isLocked then
        if isSpecial then
            sound = "kyle_unlock"
        else
            sound = "keyfob_unlock"
        end
    else
        if isSpecial then
            sound = "kyle_lock"
        else
            sound = "keyfob_lock"
        end
    end

    triggerAudio(src, 1, 3.0, sound, 'DLC_NIKEZ_GENERAL', 'np-fx:sound:PlaySound')
end)

function triggerAudio(pPlayerId, pType, pRadius, pSound, pRef, pEvent)
    local playerCoords = GetEntityCoords(GetPlayerPed(pPlayerId))

    local Area = {
        type = pType, -- [ 1 = coords, 2 = player, 3 = entity ]
        target = playerCoords, -- [ vector3 or net handle]
        radius = pRadius
    }

    local Event = {
        server = false, -- set to false if we don't want to trigger server events
        inEvent = pEvent,
        Parameter = {
            pSound,
            pRef,
        },
        outEvent = 'np-fx:sound:StopSound'
    }

    return exports["np-infinity"]:TriggerActiveAreaEvent(Event, Area)
end

exports("triggerAudio", triggerAudio)