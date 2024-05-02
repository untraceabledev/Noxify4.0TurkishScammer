local function getRandomBoolean()
    return math.random() > 0.5
end

function getLiquidLibrarySets()
    return {
        {["set_bar_stool_set_1"] = getRandomBoolean(), ["set_bar_stool_set_2"] = getRandomBoolean()},
        getRandomBoolean(),
        getRandomBoolean(),
        {["set_nw_fight_cage"] = getRandomBoolean(), ["set_nw_study_desks"] = getRandomBoolean()}
    }
end

NPX.Procedures.register("np-liquidlibrary:getsets", function()
    return getLiquidLibrarySets()
end)

