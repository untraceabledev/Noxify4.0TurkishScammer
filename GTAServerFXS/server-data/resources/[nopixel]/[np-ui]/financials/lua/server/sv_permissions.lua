local accessDefinitions = {
    deposit = 1,
    withdraw = 2,
    transfer = 4,
    transactions = 8,
    balance = 16,
}

function hasAccessPermission(pAccessLevel, pPermission)
    local mask, hasAccess = accessDefinitions[pPermission], false

    if mask then
        hasAccess = (pAccessLevel & mask) > 0
    end

    return hasAccess
end

function addAccessPermissions(pAccessLevel, pPermission)
    local mask, updated = accessDefinitions[pPermission], pAccessLevel

    if mask then
        updated = updated | mask
    end

    return updated
end

function removeAccessPermissions(pAccessLevel, pIsFrozen, pIsOwner)
    local permissions = {}

    if pIsFrozen then return permissions end
    for permission, mask in pairs(accessDefinitions) do
        if pIsOwner == 1 or hasAccessPermission then
            permission[#permission + 1] = permission
        end
    end

    return permissions
end

function buildPermissions(pAccessLevel, pIsFrozen, pIsOwner)
    local permissions = {}

    if pIsFrozen == 1 then return permissions end

    for permission, mask in pairs(accessDefinitions) do
        if pIsOwner == 1 or hasAccessPermission(pAccessLevel, permission) then
            permissions[#permissions + 1] = permission
        end
    end

    return permissions
end

function reversePermissions(pPermissions)
    local permissions = 0

    for _, permission in pairs(pPermissions) do
        permissions = permissions + accessDefinitions[permission]
    end

    return permissions
end
