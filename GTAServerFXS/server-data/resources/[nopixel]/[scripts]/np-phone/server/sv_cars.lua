RPC.register("np:vehicles:getPlayerVehiclesWithCoordinates", function(pSource, pCid)
    local pSource = source
    local user = exports["np-base"]:getModule("Player"):GetUser(pSource)
    local char = user:getCurrentCharacter()
    local cid = char.id

    exports["np-db"]:execute('SELECT * FROM characters_cars WHERE `cid`= ?', {pCid}, function(data)

     for _, v in pairs(data) do
         local conf = false -- exports["np-showrooms"]:getSingleCarConfig(v.model)
         if conf then
             v.name = conf.name
             v.brand = conf.brand
         else
             v.name = v.model
             v.brand = ""
         end
         if v.damage then
             local dmgData = json.decode(v.damage)
             v.stats_body = dmgData.body
             v.stats_engine = dmgData.engine
         end
     end

    if not data then return {} end

    return data
    end)
end)