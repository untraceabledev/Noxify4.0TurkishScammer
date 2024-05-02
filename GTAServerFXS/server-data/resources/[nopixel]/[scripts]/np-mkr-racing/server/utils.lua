function isPlayerInRace(cid)
    for k, v in pairs(PendingRaces) do
        for k2, v2 in pairs(v["players"]) do
            if v2.characterId == cid then
                return true, k
            end
        end
    end
    return false
end