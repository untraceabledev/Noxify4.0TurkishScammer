RegisterUICallback('np-ui:getCharacterDetails', function(data, cb)
  print("data", json.encode(data))
  local character_id, bank_account_id = data.character.id, data.bank_account_id
  local licenses = RPC.execute('GetLicenses', character_id)
  local bankBalance = RPC.execute('GetCurrentBank', bank_account_id)

  local primaryJob = exports['isPed']:isPed('myjob')
  local secondaryJob = exports['isPed']:isPed('secondaryjob')
  local pagerStatus = exports['isPed']:isPed('pagerstatus')

  local apartmentNumber = "Little Seoul Apartments - '" .. character_id .. "'"
  local details = {
    bank = bankBalance,
    pagerStatus = pagerStatus,
    apartmentNumber = apartmentNumber,
    bank_account_id = bank_account_id,
    licenses = {},
    jobs = {
      ['primary'] = primaryJob,
      ['secondary'] = secondaryJob
    }
  }

  cb({ data = details, meta = { ok = true, message = message or {{ name = 'drivers', status = false}} } })
end)

function telefonac()
  ExecuteCommand("openPhone")
end

Citizen.CreateThread(function()

  exports["np-keybinds"]:registerKeyMapping("", "Telefon", "Open", "+telefonac", "-telefonac", "K")
  RegisterCommand('+telefonac', telefonac, false)
  RegisterCommand('-telefonac', function() end, false)
  
end)