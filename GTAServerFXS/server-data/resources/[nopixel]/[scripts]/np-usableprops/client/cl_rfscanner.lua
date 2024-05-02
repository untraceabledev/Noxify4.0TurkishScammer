local randFactor = math.random(1, 10)

AddEventHandler('np-inventory:itemUsed', function(item, info, inventoryName, slot)
  if item ~= 'rfscanner' then
    return
  end

  Citizen.CreateThread(function()
    for i = 1, 7 do
      PlaySound(-1, '5_SEC_WARNING', 'HUD_MINI_GAME_SOUNDSET', false, 0, true)
      Wait(1500)
    end
  end)
  local finished = exports['np-taskbar']:taskBar(10000, 'Scanning...')
  if finished ~= 100 then
    return
  end

  local plyCoords = GetEntityCoords(PlayerPedId())
  local result = RPC.execute('np-usableprops:getNearbyChannels', plyCoords)

  local context = {}
  context[#context + 1] = { title = 'Frequencies', icon = 'broadcast-tower' }
  for frequency, strength in pairs(result.channels) do
    local offset = result.offset[frequency] or 15
    local relative = 10 - math.min(strength, 10) + math.random(-2, 2)
    local displayFrequency = ('%.2d MHz ~ %.2d MHz'):format(math.floor(frequency - relative - offset), math.ceil(frequency + relative - offset))
    context[#context + 1] = { title = displayFrequency, icon = 'signal' }
  end
  exports['np-ui']:showContextMenu(context)
end)
