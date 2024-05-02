function getContacts(pCharacterId)
    if not pCharacterId or pCharacterId == "" then
        return false, "Invalid character ID."
    end
    print("test")
    local query = [[
        SELECT * FROM `phone_contacts`
        WHERE character_id = ? ORDER BY id DESC
    ]]

    local pResult = Await(SQL.execute(query, { pCharacterId }))
    
    if pResult then
        local contactsTable = {}

        for _, contact in ipairs(pResult) do
            local contactData = {
                id = contact.id,
                character_id = contact.character_id,
                name = contact.name,
                number = '1234567444', -- Değişiklik yapıldı
            }

            table.insert(contactsTable, contactData)
        end

        return true, contactsTable
    else
        return false, "Error fetching contacts data."
    end
end

function addContact(pCharacterId, pName, pNumber)
    if not pName then return false, "You need to specify a name" end

    local query = "INSERT INTO phone_contacts(character_id, name, number) VALUES(?, ?, ?)"

    local insertedData = Await(SQL.execute(query, {pCharacterId, pName, pNumber}))

    return insertedData and insertedData.affectedRows > 0
end

function deleteContact(pSource, pContactId)
    local user = exports["np-base"]:getModule("Player"):GetUser(pSource)
    local character = user:getCurrentCharacter()

    local query = "DELETE FROM phone_contacts WHERE id = ? and character_id = ?"

    local pResult = Await(SQL.execute(query, {pContactId, character.id}))
    if pResult then
        return true
    end

    return false, "Couldn't remove person."
end