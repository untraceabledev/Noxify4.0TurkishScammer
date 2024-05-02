RPC.register("np-ui:nlts:fetchDrivers", function(pSource)
    local user = exports["np-base"]:getModule("Player"):GetUser(pSource)
    local cid = user:getCurrentCharacter().id
    local list = Await(SQL.execute([[
        SELECT *
        FROM nlts_duty
    ]], { }))

    local myData = Await(SQL.execute([[
        SELECT status
        FROM nlts_duty
        WHERE cid = ?
    ]], { cid }))
    
    return true, list
end)

RPC.register("np-ui:nlts:dojApp:setStatus", function(src, pJob, pStatus)
    local user = exports["np-base"]:getModule("Player"):GetUser(src)
    local cid = user:getCurrentCharacter().id

    local update = Await(SQL.execute([[
        UPDATE nlts_duty
        SET status = ? 
        WHERE cid = ?
    ]],
    { tostring(pStatus), tonumber(cid) }))
    
    if not update then return end

    local myData = Await(SQL.execute([[
        SELECT status
        FROM nlts_duty
        WHERE cid = ?
    ]], { tonumber(cid) }))

    return myData
end)

function getNLTSData(pCid)
    local myData = Await(SQL.execute([[
        SELECT status
        FROM nlts_duty
        WHERE cid = ?
    ]], { tonumber(pCid) }))

    if myData ~= nil then
        return true
    end

    return false
end

function setNLTSData(src, pJob)
    local user = exports["np-base"]:getModule("Player"):GetUser(src)
    local char = user:getCurrentCharacter()
    local name = char.first_name .. " " .. char.last_name
    if not getNLTSData(char.id) then
        local insert = Await(SQL.execute([[
            INSERT INTO nlts_duty (src, cid, status, name, job, phone)
            VALUES (?, ?, ?, ?, ?, ?)
        ]],
        { src, char.id, "Available", name, pJob, char.phone_number }))
    end
end

function updateNLTSData(pCid)
    local data = Await(SQL.execute([[
        DELETE FROM nlts_duty
        WHERE cid = ?
    ]],
    { tonumber(pCid) }))

    if not data then return false end

    return true
end

 Citizen.CreateThread(function()
     local data = Await(SQL.execute([[
         DELETE FROM nlts_duty
     ]],{ }))
 end)

exports("setNLTSData", setNLTSData)
exports("updateNLTSData", updateNLTSData)