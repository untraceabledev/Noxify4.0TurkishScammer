function addTwatterEntry(pSource, pCharacterId, first_name, last_name, pText)
    if not pText then 
        return false, "You need to type something" 
    end

    local character = {id = pCharacterId, first_name = first_name, last_name = last_name}
    local character_json = json.encode(character)

    local query = "INSERT INTO phone_tweets(cid, `character`, text) VALUES(?, ?, ?)"

    local insertedData = exports["np-db"]:execute(query, {pCharacterId, character_json, pText})

    local data = { character = { cid = pCharacterId, first_name = first_name, last_name = last_name }, timestamp = os.time() * 1000, text = pText }
    TriggerClientEvent("phone:twatter:receive", -1, data)

    local success, tweets = getTwatterEntries()

    return success, tweets
end

function getTwatterEntries()
    local pResult = Await(SQL.execute("SELECT * FROM phone_tweets"))
    local json = require("json") 
    local data = {}
    for _, row in ipairs(pResult) do
        if row.character then
            local characterData = json.decode(row.character)
            if characterData then
                local entry = {
                    character = {
                        id = characterData.id,
                        first_name = characterData.first_name,
                        last_name = characterData.last_name 
                    },
                    timestamp = row.timestamp,
                    text = row.text
                }
                table.insert(data, entry)
            else
                print("JSON decode failed:  " .. row.character)
            end
        else
            print("character table nil or empty")
        end
    end
    return true, data 
end    

function hasTwatterBlue(pSource)
    local src = source
    local user = exports["np-base"]:getModule("Player"):GetUser(src)
    local char = user:getCurrentCharacter()

    local data = Await(SQL.execute("SELECT * FROM phone_tweets WHERE cid = @cid", {
        ["cid"] = tonumber(char.id)
    }))

    -- if not data[1].isBlue then return false end  
    return true
end

function cancelTwatterBlue(pSource)
    local src = source
    local user = exports["np-base"]:getModule("Player"):GetUser(src)
    local char = user:getCurrentCharacter()

    Await(SQL.execute("UPDATE phone_tweets SET isBlue = @isBlue WHERE cid = @cid", {
        ["cid"] = char.id,
        ["isBlue"] = "0"
    }))
    return true
end

function purchaseTwatterBlue(pSource)
    local src = source
    local user = exports["np-base"]:getModule("Player"):GetUser(src)
    local char = user:getCurrentCharacter()
    local accountId = user:getBankId()
    local bankAccount = exports["financials"]:getAccountBalance(accountId)   -- get player balance in bnak
    local TWATTER_BLUE_PRICE = 8000

    if tonumber(bankAccount) < TWATTER_BLUE_PRICE then
        return false, "You don't have enough money"
    end

    local success, message = exports["financials"]:adjustAccountBalance(accountId, "remove", TWATTER_BLUE_PRICE, src, "TWATTER BLUE SUBSCRIPTION")
    if not success then
        TriggerClientEvent("DoLongHudText", src, message)
        return
    end

    Await(SQL.execute("UPDATE phone_tweets SET isBlue = @isBlue WHERE cid = @cid", {
        ["cid"] = char.id,
        ["isBlue"] = "1"
    }))
    return true
end

function blockTwatterUser(pSource)
    local src = source
    local user = exports["np-base"]:getModule("Player"):GetUser(src)
    local char = user:getCurrentCharacter()
    local accountId = user:getBankId()
    local bankAccount = exports["financials"]:getAccountBalance(accountId)   -- get player balance in bnak
    local TWATTER_BLUE_PRICE = 8000

    if tonumber(bankAccount) < TWATTER_BLUE_PRICE then
        return false, "You don't have enough money"
    end

    local success, message = exports["financials"]:adjustAccountBalance(accountId, "remove", TWATTER_BLUE_PRICE, src, "TWATTER BLUE SUBSCRIPTION")
    if not success then
        TriggerClientEvent("DoLongHudText", src, message)
        return
    end

    Await(SQL.execute("UPDATE phone_tweets SET isBlue = @isBlue WHERE cid = @cid", {
        ["cid"] = char.id,
        ["isBlue"] = "1"
    }))
    return true
end