
RPC.register("MetalDetectorItems", function(src, state, phone)
    local user = exports["np-base"]:getModule("Player"):GetUser(src) 
    local cid = user:getCurrentCharacter().id
    if not cid then return end

    local name = "ply-" .. cid
    local court = "court-" .. cid
    if state then
        Await(SQL.execute([[
            UPDATE inventory
            SET name = ?
            WHERE name = ?
        ]],
        { court, name }))
    else
        local name = "ply-" .. cid
        local court = "court-" .. cid
        Await(SQL.execute([[
            UPDATE inventory
            SET name = ?
            WHERE name = ?
        ]],
        { name, court }))
    end
end)

RPC.register("np-gov:getDOJData", function(pSource)
    local user = exports["np-base"]:getModule("Player"):GetUser(pSource)
    local cid = user:getCurrentCharacter().id
    local list = Await(SQL.execute([[
        SELECT *
        FROM doj_duty
    ]], { }))

    local myData = Await(SQL.execute([[
        SELECT status
        FROM doj_duty
        WHERE cid = ?
    ]], { cid }))
    
    return list, myData
end)

RPC.register("np-gov:dojApp:setStatus", function(src, pJob, pStatus)
    local user = exports["np-base"]:getModule("Player"):GetUser(src)
    local cid = user:getCurrentCharacter().id

    local update = Await(SQL.execute([[
        UPDATE doj_duty
        SET status = ? 
        WHERE cid = ?
    ]],
    { tostring(pStatus), tonumber(cid) }))
    
    if not update then return end

    local myData = Await(SQL.execute([[
        SELECT status
        FROM doj_duty
        WHERE cid = ?
    ]], { tonumber(cid) }))

    return myData
end)

function getDOJData(pCid)
    local myData = Await(SQL.execute([[
        SELECT status
        FROM doj_duty
        WHERE cid = ?
    ]], { tonumber(pCid) }))

    if myData ~= nil then
        return true
    end

    return false
end

function setDOJData(src, pJob)
    local user = exports["np-base"]:getModule("Player"):GetUser(src)
    local char = user:getCurrentCharacter()
    local name = char.first_name .. " " .. char.last_name
    if not getDOJData(char.id) then
        local insert = Await(SQL.execute([[
            INSERT INTO doj_duty (src, cid, status, name, job, phone)
            VALUES (?, ?, ?, ?, ?, ?)
        ]],
        { src, char.id, "Available", name, pJob, char.phone_number }))
    end
end

function updateDOJData(pCid)
    local data = Await(SQL.execute([[
        DELETE FROM doj_duty
        WHERE cid = ?
    ]],
    { tonumber(pCid) }))

    if not data then return false end

    return true
end

Citizen.CreateThread(function()
    local data = Await(SQL.execute([[
        DELETE FROM doj_duty
    ]],{ }))
end)

exports("setDOJData", setDOJData)
exports("updateDOJData", updateDOJData)