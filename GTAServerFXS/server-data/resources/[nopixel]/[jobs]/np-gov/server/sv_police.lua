RPC.register("np-gov:police:showBadge", function(src, info)
    local ped = GetPlayerPed(src)
    local playerCoords = GetEntityCoords(ped)
    local players = exports["np-infinity"]:GetNerbyPlayers(playerCoords, 5)
    for k,v in pairs(players) do
        TriggerClientEvent("np-gov:police:showBadge", v, src, info)
    end
end)

RPC.register("np-gov:police:getBadge", function(src, url, callsign)
    local user = exports["np-base"]:getModule("Player"):GetUser(src)
    local char = user:getCurrentCharacter()
    local name = char.first_name .. " " .. char.last_name

    local getJobInfo = Await(SQL.execute([[
        SELECT * FROM jobs_whitelist
        WHERE cid = ?
    ]],
    { char.id }))

	local getProfileInfo = Await(SQL.execute([[
		SELECT profilepic
		FROM characters
		WHERE id = ?
	]],
	{ char.id }))

    if not url then return false end
    if not callsign then return false end
    -- job check here

    local rank = getJobInfo[1].rank
    local department = getJobInfo[1].department
    local label = ""

    if getJobInfo[1].job == "police" then
        joblabel = {}
        joblabel[1] = "Cadet"
        joblabel[2] = "Trooper"
        joblabel[3] = "Corporal"
        joblabel[4] = "Sergeant"
        joblabel[5] = "Staff Sergeant"
        joblabel[6] = "Inspector"
        joblabel[7] = "Lieutenant"
        joblabel[8] = "Captain"
        joblabel[9] = "Major"
        joblabel[10] = "Commander"
        joblabel[11] = "Lieutenant Colonel"
        joblabel[12] = "Assistant Chief"
        joblabel[13] = "Chief of Polic"
        label = joblabel[rank]
    end

    local metaData = {
        name = name,
        badge = string.upper(department),
        rank = joblabel[rank],
        department = string.upper(department),
        image = url,
        callsign = callsign,
        _hideKeys = { "image", "callsign", "badge" }
    }

    TriggerClientEvent("player:receiveItem", src, "pdbadge", 1, false, {}, metaData)
end)
