--[[

    Variables

]]

Races = {}
PendingRaces = {}
ActiveRaces = {}
FinishedRaces = {}

--[[

    Functions

]]

function formatRace(race)
    local id = tostring(race.id)

    local checkpoints = race.checkpoints
    if type(checkpoints) == "string" then
        checkpoints = json.decode(checkpoints)
    end

    local index = 0
    local start = {}
    if race.type == "Lap" then
        index = #checkpoints
        start = checkpoints[index]
    else
        index = 1
        start = checkpoints[index]
    end

    Races[id] = {
        id = id,
        name = race.name,
        creator = race.creator,
        distance = race.distance,
        type = race.type,
        thumbnail = race.thumbnail,
        start = start,
        checkpoints = checkpoints,
        fastest_time = race.fastest_time,
        fastest_name = race.fastest_name,
        races = race.races,
    }
end

--[[

    RPCs

]]

RPC.register("mkr_racing:getAllRaces", function(pSrc)
    local src = pSrc
    
    local allRaces = {
        races = Races,
        pendingRaces = PendingRaces,
        activeRaces = ActiveRaces,
        finishedRaces = FinishedRaces,
    }
    -- print("HELLO",json.encode(allRaces))
    return allRaces
end)

RegisterNetEvent('mkr_racing:allRaces')
AddEventHandler('mkr_racing:allRaces', function()
    local allRaces = {
        races = Races,
        pendingRaces = PendingRaces,
        activeRaces = ActiveRaces,
        finishedRaces = FinishedRaces,
    }
    TriggerEvent('np-phone:allRaces', allRaces) 
end)

--[[

    Threads

]]

RPC.register("mkr_racing:awardPlayer", function(pSrc, pAmt)
    local user = exports['np-base']:getModule("Player"):GetUser(pSrc)
    local char = user:getCurrentCharacter()
    local nos = Await(SQL.execute([[
        SELECT * FROM boosting_users WHERE identifier = ?
    ]], {char.id}))

    print(pAmt)

    if nos[1] then
        local newGNE = tonumber(nos[1].gne) + pAmt

        local nitrous = Await(SQL.execute([[
            UPDATE boosting_users SET gne = ? WHERE identifier = ?
        ]], {newGNE, char.id}))
    end
end)

Citizen.CreateThread(function()
    local races = Await(SQL.execute([[
        SELECT *
        FROM racing_races
    ]]))
    for i, v in ipairs(races) do
        formatRace(v)
    end
    Wait(100)
    TriggerEvent('mkr_racing:allRaces')
end)

RPC.register('mkr_racing:setAlias', function(src, usedItemIds, usedItemSlots, usedItemMetadatas, aliass)
    local user = exports["np-base"]:getModule("Player"):GetUser(src)
    local char = user:getCurrentCharacter()
    local name = "ply-"..char.id
    local usedItemId = usedItemIds
    local usedItemSlot =usedItemSlots
    local usedItemMetadata = usedItemMetadatas
    local alias = aliass
    print(usedItemId,usedItemSlot,usedItemMetadata,alias,usedItemMetadata.Alias)
    local aliasQ = Await(SQL.execute([[
        SELECT *
        FROM user_inventory2
        WHERE item_id = ? 
        AND slot = ?
        AND name = ?
    ]], {usedItemId, usedItemSlot, name}))
    
    if usedItemMetadata.Alias ~= alias then
        local newAlias = '{'..'"Alias":"'..alias..'","characterId":"'..char.id..'"}'
        Await(SQL.execute([[
            UPDATE user_inventory2
            SET information = ?
            WHERE slot = ?
            AND name = ?
        ]],
        { newAlias, usedItemSlot, name }))
        Await(SQL.execute([[
            UPDATE characters
            SET alias = ?
            WHERE id = ?
        ]],
        { alias, char.id}))
        TriggerClientEvent('updateAlias', src, alias)
        return true
    else
        return false
    end
end)

RPC.register('mkr_racing:giveRacingUSB', function(pSource)
    local user = exports['np-base']:getModule("Player"):GetUser(pSource)
    information = {
        ["characterId"] = user:getCurrentCharacter().id,
      }
      TriggerClientEvent("player:receiveItem",pSource,"racingusb2",1,true,information)

end)



function getAlias(cid)
    local alias = Await(SQL.execute([[
        SELECT alias
        FROM characters
        WHERE id = ?
    ]],{cid}))
    print("GET ALIAS",alias)
    return alias
end

exports("getAlias", getAlias)