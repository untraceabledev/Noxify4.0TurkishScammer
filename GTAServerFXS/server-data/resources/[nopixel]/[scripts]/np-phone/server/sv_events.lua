RPC.register("phone:getContacts", function(pSource, pCharacterId)
    return getContacts(pCharacterId)
end)

RPC.register("phone:addContact", function(pSource, pCharacterId, pName, pNumber)
    return addContact(pCharacterId, pName, pNumber)
end)

RPC.register("phone:deleteContact", function(pSource, pContactId)
    return deleteContact(pSource, pContactId)
end)

-- RPC.register("phone:callStart", function(pSource, pCaller, pTarget)
--     return startPhoneCall(pSource, pCaller, pTarget)
-- end)

RPC.register("phone:sendMessage", function(pSource, pSourceNumber, pTargetNumber, pMessage)
    return sendMessage(pSource, pSourceNumber, pTargetNumber, pMessage)
end)

RPC.register("phone:getConversations", function(pSource, pSourceNumber, pCid)
    return getConversations(pSourceNumber, pCid)
end)

RPC.register("phone:getMessages", function(pSource, pSourceNumber, pTargetNumber)
    return getMessages(pSource, pSourceNumber, pTargetNumber)
end)

RPC.register("np-phone:getTwatterBlue", function(pSource)
    return false--hasTwatterBlue(pSource)
end)

RPC.register("np-phone:cancelBlue", function(pSource)
    return cancelTwatterBlue(pSource)
end)

RPC.register("np-phone:blockTwatterUser", function(pSource)
    return {}
end)

RPC.register("np-phone:purchaseBlue", function(pSource)
    return purchaseTwatterBlue(pSource)
end)

RPC.register("np-phone:getBlockedUsers", function(pSource)
    return false -- Deneme Kodu
end)

RPC.register("phone:checkCryptoAmount", function(pSource, pCryptoId, pAmount)
    local user = exports["np-base"]:getModule('Players'):GetUser(pSource)
    local character = user:getCurrentCharacter()
    local pCharacterId = character.id
    local success, message = getCrypto(pCharacterId)
    if not success then
        return false, message
    end

    local found = nil
    for _, v in pairs(message) do
        if v.id == pCryptoId then
            found = v
        end
    end
    if found == nil then
        return false, "Wallet not found"
    end
    if found.amount < pAmount then
        return false, "Not enough " .. found.name .. "! (" .. tostring(pAmount) .. ")"
    end
    return found, ''
end)

RPC.register("phone:getCrypto", function(pSource, pId)
    local data = {
        {
            id = pId,
            icon = "caret-square-up",
            ticker = "SHUNG",
            name = "Shungite",
            amount = 310,
            show_price = true,
            can_purchase = true,
            can_sell = false,
            can_exchange = true
        },
    }
    return true, data
end)

RPC.register("phone:droppedDocumentDestroy", function(pSource, pDocumentId)
    droppedDocumentDestroy(pDocumentId)
end)

RPC.register("phone:getServerIdByPhoneNumber", function(pSource, pNumber)
    if (ActiveNumbers[pNumber]) then
        return true, ActiveNumbers[pNumber].data.source
    end
    return false, nil
end)

RPC.register("phone:addYellowPageEntry", function(pSource, pCharacterId, pFirstName, pLastName, pNumber, pText)
    print("aq keli")
    return addYellowPageEntry(pCharacterId, pFirstName, pLastName, pNumber, pText)
end)

RPC.register("phone:getYellowPageEntries", function(pSource)
    return getYellowPageEntries()
end)

RPC.register("phone:removeYellowPageEntry", function(pSource, pCharacterId)
    return removeYellowPageEntry(pSource, pCharacterId)
end)

RPC.register("phone:addTwatterEntry", function(pSource, pCharacterId, first_name, last_name, text)
    return addTwatterEntry(pSource, pCharacterId, first_name, last_name, text)
end)

RPC.register("phone:getTwatterEntries", function(pSource)
    return getTwatterEntries()
end)

RPC.register("phone:getDocumentTypes", function(pSource)
    return getDocumentTypes()
end)

RPC.register("phone:getDocumentContent", function(pSource, pDocumentId)
    return getDocumentContent(pSource, pDocumentId)
end)

RPC.register("phone:createDocument", function(pSrc, pCharacterId, pDocumentContent, pDocumentTitle, pDocumentTypeId)
    return createDocument(pSrc, pCharacterId, pDocumentContent, pDocumentTitle, pDocumentTypeId)
end)

RPC.register("phone:getArticles", function(pSource, pArticleTypeId)
    return getArticles(pArticleTypeId)
end)

RPC.register("phone:getMusicCharts", function(pSource, pArticleTypeId)
    return getMusicCharts(pArticleTypeId)
end)

RPC.register("phone:getArticleContent", function(pSource, pArticleTypeId)
    return getArticleContent(pArticleTypeId)
end)

RPC.register("phone:createArticle", function(pSource, pCharacterId, pArticleBody, pArticleTitle, pArticleTypeId, pArticleImages)
    return createArticle(pCharacterId, pArticleTitle, pArticleTypeId, pArticleImages)
end)

RPC.register("phone:editArticle", function(pSource, pArticleId, pArticleBody, pArticleTitle, pArticleImages)
    return editArticle(pArticleId, pArticleBody, pArticleTitle, pArticleImages)
end)

RPC.register("phone:updateArticleState", function(pSource, pArticleId, pPublishState)
    return editArticle(pArticleId, pPublishState)
end)

RPC.register("phone:deleteArticle", function(pSource, pArticleId, pCharacterId)
    return deleteArticle(pArticleId, pCharacterId)
end)

RPC.register("phone:articleUnlock", function(pSource, pData)
    return articleUnlock(pData)
end)

RPC.register("phone:getMyPhoneNumber", function(pSource, pCid)
    return getMyPhoneNumber(pCid)
end)

RPC.register("phone:getCars", function(pSource, pCid)
    return getCars(pCid)
end)

RPC.register("np-phone:calendar:getEvents", function(pSource, pCid)
    return getCalendarEvents(pSource, pCid)
end)