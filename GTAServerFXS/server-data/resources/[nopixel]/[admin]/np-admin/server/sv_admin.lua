--[[

    Functions

]] local licenses = {
    ["Drivers License"] = {
        ["name"] = "",
        ["default"] = 0
    },
    ["Weapons License"] = {
        ["name"] = "",
        ["default"] = 0
    },
    ["Bar License"] = {
        ["name"] = "",
        ["default"] = 0
    },
    ["Business License"] = {
        ["name"] = "",
        ["default"] = 0
    },
    ["Pilot License"] = {
        ["name"] = "",
        ["default"] = 0
    }
}

function getCommand(pName)
    for idx, command in ipairs(PNP.Admin.Commands) do
        if command.name == pName then
            return command
        end
    end
    return nil
end

function getCommandUI(pSource)
    local user = exports["np-base"]:getModule("Player"):GetUser(pSource)
    local userRank = user:getVar("rank")
    local userPower = getRank(userRank)

    local commands = {}
    for idx, command in ipairs(PNP.Admin.Commands) do
        if (userPower >= command.rank) then
            command.adminMenu.command.action = command.name
            table.insert(commands, command)
        end
    end

    return commands
end

function getPrioType(pSource)
	local pSrc = pSource
	local user = exports['np-base']:getModule("Player"):GetUser(pSource)
	return "Normal :) ~ NoPixel"
end

function getCurrentPlayers()
    local _players = {}

    local players = GetPlayers()
    for idx, player in ipairs(players) do
        local player = tonumber(player)
        local ids = GetIds(player)
        local user = exports["np-base"]:getModule("Player"):GetUser(player)
        if user then 
			char = user:getCurrentCharacter() 
			cash = user:getCash()
            cid = char.id
			bank = char.bank
			fullname = char.first_name .. ' ' .. char.last_name
			firstname = char.first_name
			lastname = char.last_name
		end

        local charID = char.id or -1
        local charName = charID ~= -1 and (char.first_name .. " " .. char.last_name) or "None"

        table.insert(_players, {
            name = GetPlayerName(player),
            serverID = player,
            SteamID = ids.steamid,
            charID = charID,
            charName = charName,
            charFirstname = firstname,
            charSurname = lastname,
            charCash = cash,
            charBank = bank,
            queueType = getPrioType(player),
        })
    end

    return _players
end

function getDefinedNames(pDefinedNames)
    local _players = {}

    for idx, player in ipairs(pDefinedNames) do
        local player = tonumber(player)
        local ids = GetIds(player)
        local user = exports["np-base"]:getModule("Player"):GetUser(player)
        local char = user:getCurrentCharacter()
        local charID = char.id or -1
        local charName = charID ~= -1 and (char.first_name .. " " .. char.last_name) or "None"

        table.insert(_players, {
            source = player,
            data = {
                name = GetPlayerName(player),
                serverID = player,
                SteamID = ids.steamid,
                charID = charID,
                charName = charName,
                queueType = "Regular"
            }
        })
    end

    return _players
end

function runCommandFromClient(pSource, pAction, pData)
    local command = getCommand(pAction)
    local time = os.date("%Y-%m-%d %H:%M:%S")
    if not command then
        return
    end

    if (pData == nil) then
        goto continue
    elseif (pData["Target"]) then
        pData.target = {}
        pData.target.source = tonumber(pData["Target"])
        pData.target.name = GetPlayerName(pData["Target"])
        pData["Target"] = nil
    elseif (pData["TargetNot"]) then
        pData.target = {}
        pData.target.source = tonumber(pData["TargetNot"])
        pData.target.name = GetPlayerName(pData["TargetNot"])
        pData["TargetNot"] = nil
    end

    ::continue::

    Wait(100)

    print(("%s Admin %s %s %s"):format(time, pAction, GetPlayerName(pSource), json.encode(pData)))
    if command.isClientCommand then
        TriggerClientEvent("np-admin:runClientCommand", pSource, pAction, pSource, pData, command.log)
    else
        local responseLog = command.executedFuntion(pSource, pData);
        -- doLog(command.log, responseLog)
    end
end

function getValidLicenses()
    return licenses
end

function kickPlayer(pTarget, pReason, pAdmin)
    local adminName
    if (type(pAdmin) == "string") then
        adminName = pAdmin
    else
        adminName = GetPlayerName(pAdmin)
    end

    DropPlayer(pTarget, ("You were kicked | Reason: %s - %s"):format(pReason, adminName))
end

--[[

    Exports

]]

exports("getCommandUI", getCommandUI)
exports("getCurrentPlayers", getCurrentPlayers)
exports("getDefinedNames", getDefinedNames)
exports("runCommandFromClient", runCommandFromClient)
exports("getPlayerLogs", getPlayerLogs)
exports("getValidLicenses", getValidLicenses)
exports("kickPlayer", kickPlayer)


-- horse

local pOn = {}

RegisterServerEvent("np-admin:shorseon")
AddEventHandler("np-admin:shorseon", function()
    pOn = true
    TriggerClientEvent("np-admin:horse", -1, pOn)
end)

RegisterServerEvent("np-admin:shorseoff")
AddEventHandler("np-admin:shorseoff", function()
    pOn = false
    TriggerClientEvent("np-admin:horse", -1, pOn)
end)