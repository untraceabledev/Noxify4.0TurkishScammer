local plyCarryingObjects = {}

RegisterNetEvent("propattach:carryingItem")
AddEventHandler("propattach:carryingItem", function(pIsCarrying)
    local src = source
    -- print(src, pIsCarrying)
    plyCarryingObjects[src] = pIsCarrying
end)

RPC.register("isPlayerCarryingObjects", function(pSource, pPlyServerId)
    local isPlyCarrying = plyCarryingObjects[pPlyServerId]

    print(pPlyServerId, isPlyCarrying)

    if isPlyCarrying then
        return true
    else
        return false
    end
end)