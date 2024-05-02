RPC.register("np-usableprops:payParkingMeter", function(pSrc, pPrice)
    local user = exports["np-base"]:getModule("Player"):GetUser(pSrc)
    local cash = user:getCash()
    if cash >= pPrice then
        user:removeMoney(tonumber(pPrice))
        return true
    end
end)

RPC.register("np-usableprops:placeLetterbox", function(pSrc, pCoords, pRotation, pMailType, pFoundInfo, pName)
    print("Place Letter Box", pCoords, pRotation, pMailType, pFoundInfo, pName)
    return true
end)

RPC.register("np-usableprops:placeClock", function(pSrc, pCoords, pRotation, pMailType, pFoundInfo, pName)
    print("Place Letter Box", pCoords, pRotation, pMailType, pFoundInfo, pName)
    return true
end)

RegisterServerEvent("np-usableprops:deleteLocalEntity")
AddEventHandler("np-usableprops:deleteLocalEntity", function(pModel, pCoords)
    local pSrc = source
    TriggerClientEvent("np-usableprops:deleteEntity", pSrc, pModel, pCoords)
end)

RPC.register("np-usableprops:plantPhoneBombProp", function(pSrc, meta, prop, pCoords, pRotation)
    print("plantPhoneBombProp")
    print("plantPhoneBombProp", meta, prop, pCoords, pRotation)
end)

RPC.register("np-usableprops:plantPhoneBomb", function(pSrc, pTarget, pMeta)
    print("plantPhoneBomb")
    print("plantPhoneBomb", pTarget, pMeta)
end)

RPC.register("np-usableprops:placeMovementSensor", function(pSrc, pProp, pCoords, pRotation, pPromptname, pLength)
    print("placeMovementSensor")
    print("placeMovementSensor", pProp, pCoords, pRotation, pPromptname, pLength)
end)