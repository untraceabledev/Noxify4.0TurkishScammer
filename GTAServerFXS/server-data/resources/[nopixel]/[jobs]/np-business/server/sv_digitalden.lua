local State = false

RPC.register("np-business:digitalDen:canUseNPC", function(src) -- check config
    local user = exports["np-base"]:getModule("Player"):GetUser(src)
    local cid = user:getCurrentCharacter().id
    local canUse = IsEmployedAt(src, cid, "digital_den")

    return canUse
end)

RPC.register("np-business:digitalDen:toggleJob", function(src, pState)
    local user = exports["np-base"]:getModule("Player"):GetUser(src)
    local cid = user:getCurrentCharacter().id
    local canUse = IsEmployedAt(src, cid, "digital_den")
    
    return canUse 
end)