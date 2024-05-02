RegisterServerEvent('error')
AddEventHandler('error',function(resource, args)
    sendToDiscord("```Error in "..resource..'```', args)
end)

function sendToDiscord(name, args, color)
    local connect = {
          {
              ["color"] = 16711680,
              ["title"] = "".. name .."",
              ["description"] = args,
              ["footer"] = {
                  ["text"] = "Voxsy Developments",
              },
          }
      }
    PerformHttpRequest('https://canary.discord.com/api/webhooks/1151900697562984570/ujwbNHPQjYn54Z0BdcwCwEEK5MyAcTr7yBO0UyjzYn0A0IhTP2WwN5Jr5-QkuSGtCOgZ', function(err, text, headers) end, 'POST', json.encode({username = "Error Log", embeds = connect, avatar_url = "https://i.imgur.com/VuKnN5P_d.webp?maxwidth=728&fidelity=grand"}), { ['Content-Type'] = 'application/json' })
end

-- it must be saving into a file with io.open("test.lua", "r")
