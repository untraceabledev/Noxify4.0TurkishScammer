local isInside = false
local barEntitySets = {
    ["set_bar_stool_set_1"] = false,
    ["set_bar_stool_set_2"] = false,
    ["set_bar_stool_set_3"] = false,
    ["set_bar_milky_mountains"] = false,
    ["set_bar_hog_lager"] = false,
    ["set_bar_fathers_fire"] = false,
    ["set_bar_yom_drink"] = false,
    ["set_bar_headpop"] = false,
    ["set_bar_tankard"] = false,
    ["set_bar_green_beer"] = false,
    ["set_bar_pale_ale"] = false,
    ["set_bar_pilsner"] = false,
    ["set_bar_whiteclam"] = false,
    ["set_bar_whisky"] = false
}
local barDescriptions = {
    ["set_bar_stool_set_1"] = "Stool Set 1",
    ["set_bar_stool_set_2"] = "Stool Set 2",
    ["set_bar_stool_set_3"] = "Stool Set 3",
    ["set_bar_milky_mountains"] = "Milky Mountains",
    ["set_bar_hog_lager"] = "Hog Lager",
    ["set_bar_fathers_fire"] = "Father's Fire",
    ["set_bar_yom_drink"] = "Yom Drink",
    ["set_bar_headpop"] = "Headpop",
    ["set_bar_tankard"] = "Tankard",
    ["set_bar_green_beer"] = "Green Beer",
    ["set_bar_pale_ale"] = "Pale Ale",
    ["set_bar_pilsner"] = "Pilsner",
    ["set_bar_whiteclam"] = "Whiteclam",
    ["set_bar_whisky"] = "Whisky"
}

local northWingEntitySets = {
    ["set_nw_fight_cage"] = false,
    ["set_nw_study_desks"] = false,
    ["set_nw_fire_on"] = false,
    ["set_nw_fire_screen"] = false,
    ["set_nw_bingo"] = false,
    ["set_nw_mic"] = false,
    ["set_nw_lectern"] = false,
    ["set_nw_cozy_chairs"] = false,
    ["set_nw_dnd_chairs"] = false,
    ["set_nw_banquet_table"] = false,
    ["set_nw_dining"] = false,
    ["set_nw_lounge"] = false,
    ["set_nw_bingo_cards"] = false
}

local northWingDescriptions = {
    ["set_nw_fight_cage"] = "Fight Cage",
    ["set_nw_study_desks"] = "Study Desks",
    ["set_nw_fire_on"] = "Fire On",
    ["set_nw_fire_screen"] = "Fire Screen",
    ["set_nw_bingo"] = "Bingo",
    ["set_nw_mic"] = "Mic",
    ["set_nw_lectern"] = "Lectern",
    ["set_nw_cozy_chairs"] = "Cozy Chairs",
    ["set_nw_dnd_chairs"] = "DND Chairs",
    ["set_nw_banquet_table"] = "Banquet Table",
    ["set_nw_dining"] = "Dining",
    ["set_nw_lounge"] = "Lounge",
    ["set_nw_bingo_cards"] = "Bingo Cards"
}

local ladyGemEntitySetEnabled = false
local stageLightEntitySetEnabled = false

CreateThread(function ()
    exports["np-polyzone"]:AddPolyZone("liquidlibrary:main", {
        vector2(1168.99,-428.3),
        vector2(1155.8,-424.0),
        vector2(1157.81,-416.82),
        vector2(1148.08,-414.13),
        vector2(1157.9, -374.51),
        vector2(1186.93, -382.35),
    }, {
        minZ = 56.48,
        maxZ = 75.66,
    })

    exports["np-interact"]:AddPeekEntryByPolyTarget("ll_sliders", {
        {
            event = "np-liquidlibrary:ll:sets:toggleBar",
            id = "ll_togglebar",
            icon = "chair",
            label = "Change bar layout",
        },
    }, { distance = { radius = 3.5 }  })

    exports["np-interact"]:AddPeekEntryByPolyTarget("ll_sliders_nw", {
        {
            event = "np-liquidlibrary:ll:sets:toggleNorth",
            id = "ll_togglenw",
            icon = "chair",
            label = "Change North Wing Layout",
        },
    }, { distance = { radius = 3.5 }  })
end)

AddEventHandler("np-polyzone:enter", function (zone)
    if zone == "liquidlibrary:main" then
        isInside = true
        result = NPX.Procedures.execute("np-liquidlibrary:getsets")

        local equal = isTableEqual(barEntitySets, result[1]) and ladyGemEntitySetEnabled == result[2] and stageLightEntitySetEnabled == result[3] and isTableEqual(northWingEntitySets, result[4])
        if equal then return end

        for k, v in pairs(result[1]) do
            barEntitySets[tostring(k)] = v
        end
        ladyGemEntitySetEnabled = result[2]
        stageLightEntitySetEnabled = result[3]
        for k, v in pairs(result[4]) do
            northWingEntitySets[tostring(k)] = v
        end

        reloadSets()
    end
end)

AddEventHandler("np-polyzone:exit", function (zone)
    if zone == "liquidlibrary:main" then
        isInside = false
    end
end)

function reloadSets()
    local INTERIOR_ID = GetInteriorAtCoords(GetEntityCoords(PlayerPedId()))

    for k, v in pairs(barEntitySets) do
        if v then
            ActivateInteriorEntitySet(INTERIOR_ID, k)
        else
            DeactivateInteriorEntitySet(INTERIOR_ID, k)
        end
    end

    for k, v in pairs(northWingEntitySets) do
        if v then
            ActivateInteriorEntitySet(INTERIOR_ID, k)
        else
            DeactivateInteriorEntitySet(INTERIOR_ID, k)
        end
    end

    if ladyGemEntitySetEnabled then
        ActivateInteriorEntitySet(INTERIOR_ID, "set_lady_gem")
    else
        DeactivateInteriorEntitySet(INTERIOR_ID, "set_lady_gem")
    end

    if stageLightEntitySetEnabled then
        ActivateInteriorEntitySet(INTERIOR_ID, "set_stagelight")
    else
        DeactivateInteriorEntitySet(INTERIOR_ID, "set_stagelight")
    end

    RefreshInterior(INTERIOR_ID)
end

RegisterNetEvent("np-liquidlibrary:reloadsets")
AddEventHandler("np-liquidlibrary:reloadsets", function (barSets, gemSet, lightSet, northWingSets)
    if not isInside then return end

    local equal = isTableEqual(barEntitySets, barSets) and ladyGemEntitySetEnabled == gemSet and stageLightEntitySetEnabled == lightSet and isTableEqual(northWingEntitySets, northWingSets)
    if equal then return end

    for k, v in pairs(barSets) do
        barEntitySets[tostring(k)] = v
    end

    for k, v in pairs(northWingSets) do
        northWingEntitySets[tostring(k)] = v
    end

    ladyGemEntitySetEnabled = gemSet
    stageLightEntitySetEnabled = lightSet

    reloadSets()
end)

AddEventHandler("np-liquidlibrary:ll:sets:toggleBar", function ()
    if not isInside then return end

    local context = {}

    for k, v in pairs(barEntitySets) do
        local label = "Enabled"
        if not v then
            label = "Disabled"
        end

        table.insert(context, {
            action = "np-liquidlibrary:ll:sets:toggleBarSet",
            icon = "chair",
            title = barDescriptions[k],
            description = label,
            key = k,
        })
    end

    local result = exports["np-ui"]:OpenContextMenu(context)

    TriggerServerEvent("np-liquidlibrary:ll:sets:toggleBar", result)
end)

AddEventHandler("np-liquidlibrary:ll:sets:toggleNorth", function ()
    if not isInside then return end

    local context = {}

    for k, v in pairs(northWingEntitySets) do
        local label = "Enabled"
        if not v then
            label = "Disabled"
        end

        table.insert(context, {
            action = "np-liquidlibrary:ll:sets:toggleNorthSet",
            icon = "chair",
            title = northWingDescriptions[k],
            description = label,
            key = k,
        })
    end

    local result = exports["np-ui"]:OpenContextMenu(context)

    TriggerServerEvent("np-liquidlibrary:ll:sets:toggleNorth", result)
end)

function isTableEqual(t1, t2)
    local keySet = {}

    for k, _ in pairs(t1) do
        keySet[k] = true
    end

    for k, _ in pairs(t2) do
        keySet[k] = true
    end

    for k, _ in pairs(keySet) do
        if t1[k] ~= t2[k] then
            return false
        end
    end

    return true
end
