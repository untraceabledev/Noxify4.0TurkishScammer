PNP.Admin.DB = PNP.Admin.DB or {}

function PNP.Admin.DB.getAllIdentifiers(src)
    -- get the identifiers that are mentioned below
    local identifierList = {}
    local targetIdentifiers = {
        "steam",
        "license",
        "license2,",
        "xbox",
        "live",
        "discord",
        "fivem",
        "ip",
    }

    -- use the function called PNP.Admin.Util.getIdentifier to get the identifiers
    -- return the identifiers in a table
    for k, v in pairs(targetIdentifiers) do
        local identifier = PNP.Admin.Util.getIdentifier(src, v)
        if identifier then
            table.insert(identifierList, identifier)
        end
    end

    return identifierList
end

function PNP.Admin.DB.IsPlayerBanned(self, src)
    local pSteamId = PNP.Admin.Util.getIdentifier(self, src, "steam")
    local pLicense = PNP.Admin.Util.getIdentifier(self, src, "license")
    local pLicense2 = PNP.Admin.Util.getIdentifier(self, src, "license2")
    local pXbox = PNP.Admin.Util.getIdentifier(self, src, "xbl")
    local pLive = PNP.Admin.Util.getIdentifier(self, src, "live")
    local pDiscord = PNP.Admin.Util.getIdentifier(self, src, "discord")
    local pCFX = PNP.Admin.Util.getIdentifier(self, src, "fivem")
    local pIp = PNP.Admin.Util.getIdentifier(self, src, "ip")
    local pTokens = PNP.Admin.Util.getUserToken(self, src)
    local pTokenData = json.encode(pTokens)

    local result = Await(SQL.execute("SELECT * FROM _bans WHERE steam = ? OR license = ? OR license2 = ? OR xbox = ? OR live = ? OR discord = ? OR cfx = ? OR ip = ? OR token = ?", pSteamId, pLicense, pLicense2, tostring(pXbox), tostring(pLive), pDiscord, pCFX, pIp, pTokenData))
    local banData = result[1]

    if (banData == nil) then
        return false, banData
    end

    return true, banData
end

function PNP.Admin.DB.unbanUser(pBanId)
    if pBanId == nil then
        return
    end
    local banData = Await(SQL.execute("SELECT * FROM _bans WHERE ban_id = ?", pBanId))
    if (banData[1] == nil) then
        return false, "Couldn't find a ban with ID: " .. pBanId, 2
    end

    local deleteBan = Await(SQL.execute("DELETE FROM _bans WHERE ban_id = ?", pBanId))
    print(json.encode(deleteBan))
    local updateBan = Await(SQL.execute("UPDATE _ban_history SET expired = ? WHERE ban_id = ?", true, pBanId))

    if updateBan.affectedRows >= 1 then
        return true, "Successfully unbanned the player", 1
    end

    return false, "Error", 2
end

function PNP.Admin.DB.addBanHistory(pBanId)
    if pBanId == nil then
        Wait(1000)
    end

    local banData = Await(SQL.execute("SELECT * FROM _bans WHERE ban_id = ?", pBanId))
    if (banData[1] == nil) then
        return false, "Couldn't find a ban with ID: " .. pBanId
    end

    local insertBanHistory = Await(SQL.execute("INSERT INTO _ban_history (ban_id, steam, license, license2, xbox, live, discord, cfx, ip, token, banned_by, ban_date, unban_date, reason) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", banData[1].ban_id, banData[1].steam, banData[1].license, banData[1].license2, banData[1].xbox, banData[1].live, banData[1].discord, banData[1].cfx, banData[1].ip, banData[1].token, banData[1].banned_by, banData[1].ban_date, banData[1].unban_date, banData[1].reason))
    if insertBanHistory.affectedRows >= 1 then
        print(("[ADMIN] %s has been added to the ban history"):format(pBanId))
        return true, "Successfully added ban history"
    end

    return false, "Error"
end

AddEventHandler("np-base:exportsReady", function()
    exports["np-base"]:addModule("Admin", PNP.Admin)
end)
