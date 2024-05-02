PNP.Admin.Util = PNP.Admin.Util or {}
function GetIds(src)
    local ids = {}

    for k,v in pairs(GetPlayerIdentifiers(src)) do
        if string.sub(v, 1, string.len("steam:")) == "steam:" then
            ids["hex"] = v
        elseif string.sub(v, 1, string.len("license:")) == "license:" then
            ids["license"] = v
        elseif string.sub(v, 1, string.len("xbl:")) == "xbl:" then
            ids["xbl"] = v
        elseif string.sub(v, 1, string.len("ip:")) == "ip:" then
            ids["ip"] = v
        elseif string.sub(v, 1, string.len("discord:")) == "discord:" then
            ids["discord"] = v
        elseif string.sub(v, 1, string.len("live:")) == "live:" then
            ids["live"] = v
        end
    end

    if not ids["ip"] then
        ids["ip"] = GetPlayerEndpoint(src)
    end

    if not ids["steamid"] and ids["hex"] then
        ids["steamid"] = HexIdToSteamId(ids["hex"])
    end

    return ids
end

function GetBanTime(Expires)
    local Time = os.time()
    local Expiring = nil
    local ExpD = nil
    if Expires == '1hr' then
        Expiring = os.date("*t", Time + 3600)
        ExpD = tonumber(Time + 3600)
    elseif Expires == '6hrs' then
        Expiring = os.date("*t", Time + 21600)
        ExpD = tonumber(Time + 21600)
    elseif Expires == '12hrs' then
        Expiring = os.date("*t", Time + 43200)
        ExpD = tonumber(Time + 43200)
    elseif Expires == '1day' then
        Expiring = os.date("*t", Time + 86400)
        ExpD = tonumber(Time + 86400)
    elseif Expires == '3days' then
        Expiring = os.date("*t", Time + 259200)
        ExpD = tonumber(Time + 259200)
    elseif Expires == '1week' then
        Expiring = os.date("*t", Time + 604800)
        ExpD = tonumber(Time + 604800)
    elseif Expires == 'perm' then
        Expiring = os.date("*t", Time + 315360000) -- 10 Years
        ExpD = tonumber(Time + 315360000)
    end
    return Expiring, ExpD
end

function HexIdToSteamId(hexid)
    local cid = HexIdToComId(hexid)
    local steam64 = math.floor(tonumber(string.sub( cid, 2)))
	local a = steam64 % 2 == 0 and 0 or 1
	local b = math.floor(math.abs(6561197960265728 - steam64 - a) / 2)
	local sid = "STEAM_0:"..a..":"..(a == 1 and b -1 or b)
    return sid
end

function HexIdToComId(hexid)
    return math.floor(tonumber(string.sub(hexid, 7), 16))
end

function IsSteamId(id)
    id = tostring(id)
    if not id then return false end
    if string.match(id, "^STEAM_[01]:[01]:%d+$") then return true else return false end
end

function stringsplit(string, split)
	local t = {}
	local i = 0
	local f = string.find(string, split, 1, true)
	while f do
		i = i + 1
		t[i] = string.sub(string, 1, f-1)
		string = string.sub(string, f+1)
		f = string.find(string, split, 1, true)
	end
	i = i + 1
	t[i] = string
	return t
end

function PNP.Admin.Util.getIdentifier(self, src, identifier)
	local ids = GetPlayerIdentifiers(src)
	for k, v in ipairs(ids) do
		for _, id in ipairs(stringsplit(v, ":")) do
			if id == identifier then
				return v
			end
		end
	end
	return false
end

function getUserToken(self, src)
    local tokens = {}
    for i = 0, GetNumPlayerTokens(src) do
        table.insert(tokens, GetPlayerToken(src, i))
    end

    Wait(100)

    if (#tokens > 0) then
        return tokens
    else
        return nil
    end
end

function getDate2(sec)
    local date = os.date("!*t", sec)
    return date["day"]-1, date["hour"], date["min"], date["sec"]
end

function generateUniqueBanId()
    math.randomseed(GetGameTimer())
    local template ='xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    return string.gsub(template, '[xy]', function (c)
        local v = (c == 'x') and math.random(0, 0xf) or math.random(8, 0xb)
        return string.format('%x', v)
    end)
end

AddEventHandler("playerConnecting", function(playerName, setKickReason, deferrals)
    local player = source
    local steamIdentifier
    local steamid  = false
    local license  = false
    local discord  = false
    local xbl      = false
    local liveid   = false
    local ip       = false
    for k,v in pairs(GetPlayerIdentifiers(player))do
        if string.sub(v, 1, string.len("steam:")) == "steam:" then
            steamid = v
        elseif string.sub(v, 1, string.len("license:")) == "license:" then
            license = v
        elseif string.sub(v, 1, string.len("xbl:")) == "xbl:" then
            xbl  = v
        elseif string.sub(v, 1, string.len("ip:")) == "ip:" then
            ip = v
        elseif string.sub(v, 1, string.len("discord:")) == "discord:" then
            discord = v
        elseif string.sub(v, 1, string.len("live:")) == "live:" then
            liveid = v
        end
    end
    deferrals.defer()
    deferrals.update(string.format("Hello %s. Checking ban status with Riddle Community!", playerName))

    exports["np-db"]:execute("SELECT * FROM bans WHERE token = @token OR steam = @steam OR ip = @ip OR license = @rockstar", {
        -- ['@token'] = '"'..GetPlayerToken(source)..'"',
        ['@steam'] = steamid,
        ['@ip'] = ip,
        ['@rockstar'] = license
    }, function(data)
        if data ~= nil then
            if(data[1] == nil) then
                deferrals.done()
            else
                if data[1].expire == "Permenent" then
                    deferrals.done('\n You are banned, you may appeal it at https://discord.gg/xF7TmrT3g4 | Ban ID: ' .. data[1].banid .. ' | Reason: '..data[1].reason..' | Ban is Permenent.')
                elseif(os.time() > math.floor(tonumber(data[1].expire))) then
                    deferrals.done()
                    exports["np-db"]:execute('DELETE FROM bans WHERE steam = @steam', {['@steam'] = steamid})
                else
                    print(disp_time(tonumber(data[1].expire)).hours)
                    if disp_time(tonumber(data[1].expire)).hours < 24 then
                        deferrals.done('\n You are banned, you may appeal it at https://discord.gg/xF7TmrT3g4 | Ban ID: ' .. data[1].banid .. ' | Reason: '..data[1].reason..' | Ban expires in '..disp_time(tonumber(data[1].expire)).hours..' hours and '..disp_time(tonumber(data[1].expire)).minutes ..' minutes!')
                    else
                        deferrals.done('\n You are banned, you may appeal it at https://discord.gg/xF7TmrT3g4 | Ban ID: ' .. data[1].banid .. ' | Reason: '..data[1].reason..' | Ban expires in '..disp_time(tonumber(data[1].expire)).days..' days, '..disp_time(tonumber(data[1].expire)).hours..' hours and '..disp_time(tonumber(data[1].expire)).minutes ..' minutes!')
                    end
                end
            end
        end
    end)
end)


function disp_time(time)
    local t = (os.difftime(time, os.time()))
    local d = math.floor(t / 86400)
    local h = math.floor((t % 86400) / 3600)
    local m = math.floor((t % 3600) / 60)
    local s = math.floor((t % 60))
    return {days = d , hours = h , minutes = m, seconds = s}
end