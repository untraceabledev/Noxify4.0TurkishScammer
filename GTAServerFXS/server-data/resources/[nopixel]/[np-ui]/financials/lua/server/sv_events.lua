RPC.register("GetTransactionLogs", function(src, pSourceAccountId, pTransactionType, pStartDate, pEndDate)
    return getTransactionLogs(pSourceAccountId, pTransactionType, pStartDate, pEndDate)
end)

RPC.register("GetAccounts", function(src, pAccountId, pCharacterId, pAccountName)
    local validJob, jobResponse = getCharacterJob(src)

    if not validJob then print("Error", jobResponse) else  end

    if not pAccountId or not pCharacterId or not pAccountName then
        local validCharacter, response = getCharacterId(src)

        if validCharacter then
            return getAccounts(pAccountId, response, pAccountName, validJob and jobResponse or nil)
        else
            return validCharacter, response
        end
    else
        return getAccounts(pAccountId, pCharacterId, pAccountName,  validJob and jobResponse or nil)
    end
end)

RegisterNetEvent("np-spawn:characterSpawnedServer")
AddEventHandler("np-spawn:characterSpawnedServer", function()

    print("np-spawn:characterSpawnedServer | financials")

    local user = exports["np-base"]:getModule("Player"):GetUser(source)
    local cid = user:getCurrentCharacter().id

    if not cid then return end

    local account = user:getBankId()

    if not next(account) then -- account boş bir tabloya eşitse
        local created = createNewAccount(cid, "Personal Account", 1, 5000, 31, 0, 0, 1)
        if created then
            local affectedRows = Await(SQL.execute([[
                UPDATE characters
                SET bankid = ?
                WHERE id = ?
            ]],
            { accountId, cid }))
        end
    else
        if account == 0 then
            local accountId = getAccountId(cid)
            local affectedRows = Await(SQL.execute([[
                UPDATE characters
                SET bankid = ?
                WHERE id = ?
            ]],
            { accountId, cid }))
        end
    end
end)


RPC.register("GetDefaultBankAccount", function(src, pCharacterId, pIgnoreFrozenCheck)
    return getDefaultBankAccount(pCharacterId, false, pIgnoreFrozenCheck)
end)

RPC.register("GetCharactersWithAccess", function(src, pAccountId)
    return GetCharactersWithAccess(pAccountId)
end)

RPC.register("GetAccountTypes", function(src)
    return getAccountTypes()
end)

RPC.register("GetTaxLevel", function(src, pType)
    if (type(pType) == "string") then
        return getTaxLevelByName(pType)
    elseif (type(pType) == "number") then
        return getTaxLevelById(pType)
    end

    return false, "Invalid type"
end)

RPC.register("PriceWithTaxString", function(src, pPrice, pTaxLevel)
    return priceWithTaxString(pPrice, pTaxLevel)
end)

RPC.register("GetTaxLevels", function(src, pOnlyEditable)
    return getTaxLevels(pOnlyEditable)
end)

RPC.register("GetTaxHistory", function(src)
    return getTaxHistory()
end)

RPC.register("SetTaxLevel", function(src, pNewTaxLevels)
    return setTaxLevel(pNewTaxLevels)
end)

RPC.register("GetAssetTaxes", function(src, pCharacterId)
    return getAssetTaxes(pCharacterId)
end)

RPC.register("PayAssetTaxes", function(src, pCharacterId, pSourceAccountId, pAssetTaxId, pAssetName)
    return payAssetTaxes(pCharacterId, pSourceAccountId, pAssetTaxId, pAssetName)
end)

RPC.register("CalculateTax", function(src, pSalePrice, pTaxLevel)
    return calculateTax(pSalePrice, pTaxLevel)
end)

RPC.register("GetCurrentBank", function(src, pAccountId)
    return getAccountBalance(pAccountId)
end)

RPC.register("doStateForfeiture", function(src, pAmount)
    return doStateForfeiture(src, pAmount)
end)
