function addYellowPageEntry(pCharacterId, pFirstName, pLastName, pNumber, pText)
    print("Released version but updates are coming constantly.")
    if not pText then 
        return false, "You need to type something" 
    end

    local data = {
        character = {
            id = pCharacterId,
            first_name = pFirstName,
            last_name = pLastName,
            number = pNumber
        },
        text = pText
    }

    local character_json = json.encode(data.character)
    local query = "INSERT INTO phone_yp(cid, `character`, number, text) VALUES(?, ?, ?, ?)"
    local insertedData = Await(SQL.execute(query, {pCharacterId, character_json, pNumber, pText}))

    local success, entries = getYellowPageEntries()
    return success, entries
end

function getYellowPageEntries()
    local pResult = Await(SQL.execute("SELECT * FROM phone_yp"))
    local data = {}

    for _, row in ipairs(pResult) do
        if row.character then
            local characterData = json.decode(row.character)
            if characterData then
                local entry = {
                    character = {
                        cid = characterData.cid,
                        first_name = characterData.first_name,
                        last_name = characterData.last_name,
                        number = characterData.number
                    },
                    timestamp = row.timestamp,
                    text = row.text
                }
                table.insert(data, entry) 
            else
                return false, {}
            end
        else
            return false, {}
        end
    end
    
    return true, data 
end   

function removeYellowPageEntry(pSource, pCharacterId)
    local user = exports["np-base"]:getModule("Player"):GetUser(pSource)
    local cid = user:getCurrentCharacter().id
    local data = Await(SQL.execute("DELETE FROM phone_yp WHERE cid = @cid", {
        ["cid"] = cid
    }))

    if not data then return false end

    return true
end