RPC.register("iconic-winery:washmoney", function(src)
    local user = exports["np-base"]:getModule("Player"):GetUser(src)
    user:addMoney(300)
end)