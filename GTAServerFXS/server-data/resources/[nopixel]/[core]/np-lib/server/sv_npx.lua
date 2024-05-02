function getCharacterId(serverId)
    local user = exports["np-base"]:getModule("Player"):GetUser(serverId)

    if not user then
        return false, "Couldn't find a character"
    end

    return true, user.character.id
end

function getCharacterJob(serverId)
    local serverId = source
    local user = exports["np-base"]:getModule("Player"):GetUser(serverId)

    if not user then
        return false, "Couldn't find a job or a character"
    end

    return true, user:getVar("job")
end

function getUserRank(src)
    local user = exports["np-base"]:getModule("Player"):GetUser(tonumber(src))

    if not user then
        return false, "Couldn't find a rank or a character"
    end

    local rank = user:getVar("rank")

    return rank
end

function getUserVar(src, pVar)
    local user = exports["np-base"]:getModule("Player"):GetUser(tonumber(src))

    if not user then
        return false, "Couldn't find a rank or a character"
    end

    local currentVar = user:getVar(pVar)

    return currentVar
end

exports("getUserVar", getUserVar)
exports("getUserRank", getUserRank)
exports("getCharacterJob", getCharacterJob)

function getCharacterIdByPhoneNumber(pPhoneNumber)
    if not pPhoneNumber then
        return false, "Phone Number required."
    end

    local query = [[
        SELECT cid FROM _character_phone_number WHERE phone_number = ? AND is_burner = false
    ]]

    local characterId = Await(SQL.scalardynamicparam(query,pPhoneNumber))

    return characterId ~= nil and true or false, characterId or 'No Phone Number'
end

exports('getCharacter', function(pSource)
    local user = exports["np-base"]:getModule("Player"):GetUser(tonumber(pSource))

    if not user then
        return false
    end

    return user:getCurrentCharacter()
end)

exports('getCharacterData', function(pSource, pId)
    local user = exports["np-base"]:getModule("Player"):GetUser(tonumber(pSource))

    if not user then
        return false
    end

    return user:getCharacter(pId)
end)

exports('getUserData', function(pSource)
    local user = exports["np-base"]:getModule("Player"):GetUser(tonumber(pSource))
    if not user then
        return false
    end

    return user
end)

exports('getCharacterBank', function(pSource)
    local user = exports["np-base"]:getModule("Player"):GetUser(pSource)
    local char = user:getCurrentCharacter()
    local getBankId = user:getBankId()
    local accountId = getBankId[1].account_id
    local bankAccount = exports["financials"]:getAccountBalance(accountId)   
    return bankAccount
end)


