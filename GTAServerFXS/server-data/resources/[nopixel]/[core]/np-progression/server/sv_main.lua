
RPC.register("np:progression:character:init", function(src)
    local user = exports["np-base"]:getModule("Player"):GetUser(src) 
    local cid = user:getCurrentCharacter().id
    return GetProg(src, cid)
end)

RPC.register("np:progression:character:illegalRep", function(src, amount, _type)
    local user = exports["np-base"]:getModule("Player"):GetUser(src)
    local cid = user:getCurrentCharacter().id
    
    local data = Await(SQL.execute([[
        SELECT *
        FROM progression
        WHERE cid = ?
    ]], { cid }))

    if not data then return print(" table is empty.. no data in db") end

    local tempRep = json.decode(data[1].rep)
    local currentVal = tempRep[_type]
    tempRep[_type] = currentVal + amount

    local affectedRows = Await(SQL.execute([[
        UPDATE progression
        SET rep = ?
        WHERE cid = ?
    ]],
    { json.encode(tempRep), cid }))
end)

RPC.register("np-progression:CheckRep", function (src, pRep)
    local RepPoints = GetIllegalRep(src, pRep)
    local title, icon = GetMenuInfo(pRep)
    local elements = {
        {
            title = title,
            description = ('Current Reputation Points: %s.'):format(RepPoints),
            icon = icon,
        },
    }
    return elements
end)

function GetProg(src, cid)
    local TempProg = {}

    local progression = Await(SQL.execute([[
        SELECT * FROM progression
        WHERE cid = ?
    ]], { cid }))

    if not progression[1] then return GetNewPrgo(src, cid), print("np-progression | error fetching progression data") end

    local rep = json.decode(progression[1].rep)
    local buffs = json.decode(progression[1].buffs)
    local skills = json.decode(progression[1].skills)

    for key, value in pairs(rep) do 
        TempProg[key] = value
    end

    return TempProg
end

function GetNewPrgo(src, cid)
    local insertId = Await(SQL.execute([[
        INSERT INTO progression (cid)
        VALUES (?)
    ]],
    { cid }))

    if not insertId or insertId < 1 then
        return false, "Database insert eror"
    end

    return GetProg(src, cid)
end

function GetIllegalRep(src, _type)
    local user = exports["np-base"]:getModule("Player"):GetUser(src)
    local cid = user:getCurrentCharacter().id
    
    local data = Await(SQL.execute([[
        SELECT *
        FROM progression
        WHERE cid = ?
    ]], { cid }))

    if not data then return print(" table is empty.. no data in db") end

    local tempRep = json.decode(data[1].rep)
    local currentVal = tempRep[_type]
    
    return currentVal
end

function addIllegalRep(src, amount, _type)
    local user = exports["np-base"]:getModule("Player"):GetUser(src)
    local cid = user:getCurrentCharacter().id
    
    local data = Await(SQL.execute([[
        SELECT *
        FROM progression
        WHERE cid = ?
    ]], { cid }))

    if not data then return print(" table is empty.. no data in db") end

    local tempRep = json.decode(data[1].rep)
    local currentVal = tempRep[_type]
    tempRep[_type] = currentVal + amount

    local affectedRows = Await(SQL.execute([[
        UPDATE progression
        SET rep = ?
        WHERE cid = ?
    ]],
    { json.encode(tempRep), cid }))
end

function GetMenuInfo(pRep)
    if pRep == "weedPlanting" then
        return 'Weep Planting', 'cannabis'
    elseif pRep == "hackexp" then
        return 'Hacking Experience', 'user-secret'
    elseif pRep == "streetrep" then
        return 'Street Reputation', 'skull-crossbones'
    elseif pRep == "craftingrep" then
        return 'Crafting Reputation', 'compass-drafting"'
    elseif pRep == "boosting" then
        return 'Boosting Reputation'
    elseif pRep == "crafting:guns" then
        return 'Weapon Smithing Reputation'
    end
end


exports("GetProg", GetProg)
exports("GetIllegalRep", GetIllegalRep)
exports("addIllegalRep", addIllegalRep)