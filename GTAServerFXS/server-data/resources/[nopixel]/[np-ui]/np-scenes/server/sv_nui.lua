NPX.Procedures.register("np-scenes:nui:fetchActiveEntries", function()
    local fetchActiveEntries = {
        { uid = 1, type = "static", text = "Static Entry 1", x = 100, y = 200, z = 10, options = { distance = 50 }, resource = "exampleResource" },
        { uid = 2, type = "player", text = "Player Entry 1", serverId = 123, options = { distance = 30 }, resource = "exampleResource" },
    }
    return fetchActiveEntries
end)