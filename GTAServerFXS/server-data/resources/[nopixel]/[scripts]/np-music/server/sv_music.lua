RPC.register("np-music:addMusicEntry", function(src, pData, pGroup)
  MySQL.insert.await([[
      INSERT INTO musics (title, artist, url, musics.group)
      VALUES (?, ?, ?, ?)
  ]],
  { pData.title, pData.artist, pData.url, pGroup })

  TriggerClientEvent("DoLongHudText", src, "Music entry created!")

  return true
end)

RPC.register("np-music:getSongOptions", function(src, pGroup)
  local musics = MySQL.query.await([[
      SELECT *
      FROM musics
      WHERE musics.group = ?
  ]],
  { pGroup })

  return musics
end)