RPC.register("np-phone:calendar:createEvent", function(pSrc, pData)

    local query =
        "INSERT INTO phone_calendar(cid, name, timestamp, location, shareable, description) VALUES(?, ?, ?, ?, ?, ?)"

    local insertedData = exports["np-db"]:execute(query, {pData.character.id, pData.name, pData.date, pData.location,
                                                          pData.shareable, pData.description})

    local success, calendar = getCalendarEvents(pSrc, pData.character.id)

    return success, calendar
end)

function getCalendarEvents(pSource, pCid)
    print(pSource, pCid)
    exports["np-db"]:execute("SELECT * FROM `phone_calendar` WHERE cid = ?", {pCid}, function(pResult)
        local data = {}
        print("pResult", json.encode(pResult))
        if pResult then
            local json = require("json")
            for _, calendarData in ipairs(pResult) do
                local entry = {
                    id = calendarData.id,
                    name = calendarData.name,
                    date = calendarData.timestamp,
                    location = calendarData.location,
                    shareable = calendarData.shareable,
                    description = calendarData.description
                }
                table.insert(data, entry)
            end
        else
            print("Database query returned nil.")
            return false, "Database query returned nil."
        end
        return true, data
    end)
end

