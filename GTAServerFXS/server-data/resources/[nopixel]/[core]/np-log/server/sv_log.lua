function AddLog(lType, user, log, data, date)
    if not lType then lType = "None" else lType = tostring(lType) end
    
    if lType == "Exploiter" then
        exports["np-base"]:getModule("Admin"):ExploitAlertDiscord(user, log)
    end

    local steamId = (user and type(user) ~= "string") and user["steamid"] or (user and user or "Unknown")

    local cid = nil

    if type(user) ~= "string" then
        local char = user:getCurrentCharacter()
        cid = char and char.id or 0
    end

    log = log and tostring(log) or "None"
    data = data and json.encode(data) or "None"

    local q = [[INSERT INTO logs (type, log, data, cid, steamid) VALUES (@type, @log, @data, @cid, @steamid);]]

    local v = {
        ["type"] = lType,
        ["log"] = log,
        ["data"] = data,
        ["cid"] = cid,
        ["steamid"] = steamId
    }

    exports["np-db"]:execute(q, v)
end

function getPlayerLogs(data)
    local queryData = ""

    if data.cid then
        queryData = string.lower("%" .. data.cid .. "%")
    elseif data.steamid then
        queryData = string.lower("%" .. data.steamid .. "%")
    elseif data.type then
        queryData = string.lower("%" .. data.type .. "%")
    else
        queryData = string.lower("%" .. data.cid .. "%")
    end

    local search = Await(SQL.execute([[
        SELECT * 
        FROM logs c
        WHERE LOWER(c.type) LIKE @query OR LOWER(c.cid) LIKE @query OR LOWER(c.steamid) LIKE @query
    ]], { ['query'] = queryData }))

    return search
end

exports("AddLog", AddLog)
exports("getPlayerLogs", getPlayerLogs)
