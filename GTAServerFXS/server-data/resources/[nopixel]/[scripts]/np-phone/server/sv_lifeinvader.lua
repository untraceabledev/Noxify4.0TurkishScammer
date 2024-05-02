RPC.register("np-phone:getEmailAddress", function(pSource)
    local responseData = {}
    local data = "berke@gmail.com"
        email = 
    -- }

    -- Veriyi responseData tablosuna ekle
    table.insert(responseData, data)

    return true, responseData
end)

function getEmailContacts(pSource)
    local user = exports["np-base"]:getModule("Player"):GetUser(pSource)
    local pCharacterId = user:getCurrentCharacter().id

    if not pCharacterId then return false, "Error while fetching data." end

    local query = [[
        SELECT * FROM `phone_email_contacts`
        WHERE character_id = ? ORDER BY id DESC
    ]]

    local pResult = Await(SQL.execute(query, { pCharacterId }))
    
    -- pResult check edited
    if pResult and #pResult > 0 then
        local emailContactsTable = {}

        for i, emailContact in ipairs(pResult) do
            -- Add data from each row to emailContactsTable
            emailContactsTable[i] = {
                id = emailContact.id,
                character_id = emailContact.character_id,
                name = emailContact.name,
                email = emailContact.email,
            }
        end

        return true, emailContactsTable
    else
        return false, {}
    end
end

RPC.register("phone:getEmailContacts", function(pSource)
    return getEmailContacts(pSource)
end)

RPC.register("np-phone:calendar:getUpcomingEvents", function()
    return false
end)

RPC.register("phone:li:getRandomAdURL", function(pSource)
    return "berketeadas@gmail.com"
end)