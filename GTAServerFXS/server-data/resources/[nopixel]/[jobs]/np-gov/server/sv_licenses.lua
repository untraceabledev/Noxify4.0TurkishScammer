function getLicenses(src, cid, names)
    if not src then return {} end

    local user = exports["np-base"]:getModule("Player"):GetUser(src) 

    if not cid then
        cid = user:getCurrentCharacter().id
    end

    if not cid then return {} end

    local licenses = Await(SQL.execute("SELECT licenses FROM characters WHERE id = @id", {
        ["id"] = tonumber(cid)
    }))

    local newLicense = false
    for k, v in pairs(LICENSES) do
        if not licenses[k] and not v["hidden"] then
            licenses[k] = v["default"]
            newLicense = true
        end
    end
    if newLicense then
        local affectedRows = Await(SQL.execute("UPDATE characters SET licenses = @licenses WHERE id = @id", {
            ["id"] = tonumber(cid),
            ["licenses"] = json.encode(licenses)
        }))        
    end

    if names then
        local tempLicenses = {}

        for k, v in pairs(licenses) do
            tempLicenses[licenseName(k)] = v
        end

        licenses = tempLicenses
    end

    return licenses
end



function hasLicense(src, license, cid)
    if not src then return false end

    local user = exports["np-base"]:getModule("Player"):GetUser(src) 

    if not cid then
        local cid = user:getCurrentCharacter().id
    end

    if not cid then return false end

    local licenses = getLicenses(src, cid, false)

    local hasLicense = false
    for k, v in pairs(licenses) do
        if k == license then
            hasLicense = (v == 1)
            break
        end
    end

    return hasLicense
end

function updateLicense(src, license, status, cid)
    if not src then return false end
    
    local user = exports["np-base"]:getModule("Player"):GetUser(src) 

    if not cid then
        local cid = user:getCurrentCharacter().id
    end

    if not cid then return false end
    local licenses = getLicenses(src, cid)

    for k, v in pairs(licenses) do
        if k == license then
            licenses[license] = status
            break
        end
    end

    Await(SQL.execute([[
        UPDATE characters
        SET licenses = ?
        WHERE id = ?
    ]],
    { licenses, cid }))

    return true
end

exports("getLicenses", getLicenses)
exports("hasLicense", hasLicense)
exports("updateLicense", updateLicense)

RPC.register("np-licenses:getLicenses", function(src, cid, names)
    return getLicenses(src, cid, names)
end)

RPC.register("GetLicenses", function(src, cid, names)
    return getLicenses(src, cid, names)
end)

RPC.register("np-licenses:hasLicense", function(src, license, cid)
    return hasLicense(src, license, cid)
end)

RPC.register("np-licenses:updateLicense", function(src, license, status, cid)
    return updateLicense(src, license, status, cid)
end)

RPC.register("np-gov:purchaseLicense", function(src, type, cost)
    local user = exports["np-base"]:getModule("Player"):GetUser(src) 
    local cid = user:getCurrentCharacter().id
    local license = "none"
    local licenseName = "none"
    local accountId = user:getBankId()

    if type == 2 then
        license = "weapon"
        licenseName = LICENSES["weapon"]["name"]
    elseif type == 7 then
        license = "hunting"
        licenseName = LICENSES["hunting"]["name"]
    elseif type == 8 then
        license = "fishing"
        licenseName = LICENSES["fishing"]["name"]
    end

    local CheckLicense = hasLicense(src, license, cid)
    if CheckLicense then
        return false, TriggerClientEvent("DoLongHudText", src, "You Already own this license", 2)
    end

    local bank = exports["financials"]:getAccountBalance(accountId) 
    if bank < cost then
        return false, TriggerClientEvent("DoLongHudText", src, "You do not have $" .. cost .. "in your bank account.", 2)
    end

    local comment = "Bought a " .. licenseName
    exports["financials"]:transaction(accountId, groupBank, cost, comment, cid, 5)
    TriggerClientEvent("DoLongHudText", src, "You have  Purchased a ".. licenseName.. " for $" .. cost .. ".")
    updateLicense(src, license, 1, cid)
end)
