RPC.register("getCharacterInfo", function(src, pCid)
    local user = exports["np-base"]:getModule("Player"):GetUser(src)
    local cash = user:getCash()
    local bankId = user:getBankId()
    local bank = exports["financials"]:getAccountBalance(bankId)
    local Casino = exports["financials"]:CasinoBalance(pCid)

    local data = Await(SQL.execute([[
        SELECT *
        FROM characters
        WHERE id = ? 
    ]],
    { tonumber(pCid) }))

    if not data then return false, "" end
    userlicenses = {}

    local Licenses = exports["np-gov"]:getLicenses(src, pCid)

    for k,v in pairs(Licenses) do
        local licensestatus = false
        if v == 1 then
            licensestatus = true
        end

        userlicenses[#userlicenses + 1] = {
            name = k,
            status = licensestatus
        }
    end

    return bankId or 0, data[1].phone_number or 0, cash or 0, bank or 0, Casino, userlicenses or {}
end)