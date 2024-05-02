RegisterUICallback("np-ui:getTaxOptions", function(data, cb)
    local success, message = RPC.execute("GetTaxLevels", true)
    cb({ data = message, meta = { ok = success, message = 'ok' } })
end)

RegisterUICallback("np-ui:getTaxHistory", function(data, cb)
    local success, message = RPC.execute("GetTaxHistory")
    cb({ data = message, meta = { ok = success, message = 'ok' } })
end)

RegisterUICallback("np-ui:saveTaxOptions", function(data, cb)
    local options = data.options -- { [ id: 1, level: 10 ]}
    local success, message = RPC.execute("SetTaxLevel", options)
    cb({ data = message, meta = { ok = success, message = 'ok' } })
end)