function readPlayerconversations(pSource, pServerId, pPlayerId)
    local success, message
    if not success then
        return "Cannot read player conversations"
    end
end

function sendMessage(pSource, source_number, number_to, text_message)
    local targetCid = GetCidByPhoneNumber(tonumber(number_to))
    local query = [[
        INSERT INTO phone_message (number_from, number_to, message) VALUES (?, ?, ?)
    ]]
    local result = Await(SQL.execute(query, {source_number, number_to, text_message}))
    if (result.affectedRows >= 1) then
        if (targetCid ~= nil) then
            TriggerClientEvent("phone:sms:receive", -1, source_number, text_message, targetCid)
        end
        local success, getMessage = getMessages(pSource, source_number, number_to)
        return true, getMessage
    else
        return false
    end

    return false
end

function getMessages(pSource, source_number, target_number)
    local user = exports["np-base"]:getModule('Player'):GetUser(pSource);
    local character = user:getCurrentCharacter()
    local pCharacterId = character.id
    -- do gsub for numberTarget and remove ";"
    local numberSrc = tostring(source_number)
    local numberTarget = string.gsub(tostring(target_number), ";", "")
    local messages = {}
    
    -- print(("[2][Phone] Getting messages | Source Number: %s type: %s | Target Number: %s type: %s"):format(numberSrc, type(numberSrc), numberTarget, type(numberTarget)))
    -- we will fetch all the messages for the both numbers
    -- and then we will filter the messages that are not between the two numbers
    -- once we found the messages between the two numbers we will add them to a table
    local query = [[SELECT * FROM phone_message WHERE (`number_from` = ? AND `number_to` = ?) OR (`number_from` = ? AND `number_to` = ?)]]
    local pResult = Await(SQL.execute(query, numberSrc, numberTarget, numberTarget, numberSrc))
    local dataStructure = {
        id,
        number_from,
        number_to,
        message,
        timestamp,
        displayName,
    }   
    
    if (#pResult == 0) then
        return false, "No messages found"
    end

    for k, v in pairs(pResult) do
        local contactNameQuery = [[SELECT `name` FROM phone_contacts WHERE `number` = ? AND `character_id` = ?]]
        local contactNameResult = Await(SQL.execute(contactNameQuery, {numberTarget, pCharacterId}))
        local contactName = (contactNameResult[1] ~= nil and contactNameResult[1].name or nil)
        local message = {
            id = v.id,
            number_from = v.number_from,
            number_to = v.number_to,
            message = v.message,
            timestamp = v.timestamp,
            displayName = contactName,
        }

        table.insert(messages, message)
    end
    
    return true, messages
end

function getConversations(source_number, cid)

    local query = [[
        SELECT * FROM `phone_message`
        WHERE number_from = ? OR (number_to IS NOT NULL AND number_to = ?)
    ]]

    local pResult = Await(SQL.execute(query, source_number, source_number))

    if (#pResult == 0) then
        print("[Phone] No conversations found")
        return false, false
    end

    local tempData = {}
    for _, row in pairs(pResult) do
        local id = row.id
        local number_from = row.number_from
        local number_to = row.number_to
        local message = row.message
        local timestamp = row.timestamp
        local conversation = {
            id = id,
            number_from = number_from,
            number_to = number_to,
            message = message,
            timestamp = timestamp,
            received = true
        }

        if (tonumber(number_from) == tonumber(source_number)) then
            conversation.received = false
        end
        Wait(100)
        table.insert(tempData, conversation)
    end

    -- in here we must get the contact name of that number we've received message from or we've sent message to, if its saved in our contacts
    for _, conversation in pairs(tempData) do
        local number_from = conversation.number_from
        local number_to = conversation.number_to

        local query = [[
            SELECT * FROM phone_contacts WHERE number = ? AND character_id = ?
        ]]
        
        local pResult = Await(SQL.execute(query, tonumber(number_from), tonumber(cid)))
        if #pResult > 0 then
            conversation.displayName = pResult[1].name
        end
        
        local pResult = Await(SQL.execute(query, tonumber(number_to), tonumber(cid)))
        if #pResult > 0 then
            conversation.displayName = pResult[1].name
        end
    end

    Wait(100)

    -- after all we must look for the latest message of conversations for each and add only that to our data
    local data = {}
    for _, conversation in pairs(tempData) do
        local id = conversation.id
        local number_from = conversation.number_from
        local number_to = conversation.number_to
        local message = conversation.message
        local timestamp = conversation.timestamp
        local displayName = conversation.displayName
        local received = conversation.received
        local found = false
        for _, dataConversation in pairs(data) do
            if (dataConversation.number_from == number_from and dataConversation.number_to == number_to) or
                (dataConversation.number_from == number_to and dataConversation.number_to == number_from) then
                found = true
                if (tonumber(timestamp) > tonumber(dataConversation.timestamp)) then
                    dataConversation.message = message
                    dataConversation.timestamp = timestamp
                    dataConversation.displayName = displayName
                    dataConversation.received = received
                end
            end
        end
        if not found then
            local conversation = {
                id = id,
                number_from = number_from,
                number_to = number_to,
                message = message,
                timestamp = timestamp,
                displayName = displayName,
                received = received
            }
            table.insert(data, conversation)
        end
    end

    Wait(100)
    return true, data
end

function GetPhoneNumberByCid(pCid)
    local data = Await(SQL.execute([[
        SELECT phone_number
        FROM characters
        WHERE id = ? 
    ]],
    { tonumber(pCid) }))

    if not data then return print("Phone number not found.") end
    
    return data[1].phone_number
end

function GetCidByPhoneNumber(pNumber)
    local data = Await(SQL.execute([[
        SELECT id
        FROM characters
        WHERE phone_number = ? 
    ]],
    { pNumber }))

    if not data[1] or data[1] == nil then return false end  

    return data[1].id
end

exports("GetPhoneNumberByCid", GetPhoneNumberByCid)
exports("GetCidByPhoneNumber", GetCidByPhoneNumber)