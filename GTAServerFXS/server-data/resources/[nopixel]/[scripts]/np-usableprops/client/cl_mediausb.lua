AddEventHandler("np-inventory:itemUsed", function(item, info, inventoryName, slot)
  if item ~= "mediausb" then
    return
  end
  local meta = json.decode(info)

  local results = meta._media
  if not results then
    results = {}
  end

  local context = {}

  if #results < 10 then
    context[#context + 1] = {
      title = "Add New Entry",
      action = "np-usableprops:addUSBEntry",
      icon = "plus",
      key = { item = item, meta = meta, slot = slot },
    }
  end

  for _, entry in pairs(results) do
    local url = (entry.type == "clip" and ("https://clips.twitch.tv/%s"):format(entry.url)) or
    (entry.type == "vod" and ("https://player.twitch.tv/?video=%s&volume=0.5&parent=twitch.tv"):format(entry.url)) or
    (entry.type == "streamable" and ("https://streamable.com/%s"):format(entry.url)) or
    (entry.type == "youtube" and ("https://youtu.be/%s"):format(entry.url)) or
    (entry.type == "imgur" and ("https://i.imgur.com/%s"):format(entry.url))
    context[#context + 1] = {
      title = entry.title,
      icon = GetEntryIcon(entry.type),
      children = {
        { title = "View (opens in browser)", icon = "eye", description = url, action = "np-usableprops:viewUSBEntry", key = url },
        {
          title = "Delete",
          icon = "trash",
          children = {
            {
              title = "Are you sure?",
              icon = "check-square",
              action = "np-usableprops:deleteUSBEntry",
              key = { id = entry.id, item = item, meta = meta, slot = slot },
            },
          },
        },
      },
    }
  end

  exports["np-ui"]:showContextMenu(context)
end)

RegisterUICallback("np-usableprops:addUSBEntry", function(pData, pCb)
  pCb({ data = {}, meta = { ok = true, message = "done" } })
  local data = pData.key

  Wait(1)
  -- open input menu
  local prompt = exports["np-ui"]:OpenInputMenu({
    { name = "title", label = "Title", icon = "pencil-alt" },
    { name = "url", label = "URL (twitch clip/vod, streamable, youtube, imgur)", icon = "link", maxLength = 255 },
  }, function(values)
    if not values.title or not values.url then
      return false
    end

    if values.title:len() > 50 then
      TriggerEvent("DoLongHudText", "Title too long")
      return false
    end

    if values.url:len() > 255 then
      TriggerEvent("DoLongHudText", "URL too long")
      return false
    end

    local checkClip = values.url:match("clips%.twitch%.tv/(.*)$")
    local checkVod = values.url:match("twitch%.tv/videos/(%d*)?")
    local checkStreamable = values.url:match("streamable%.com/(.*)$")
    local checkYoutube = values.url:match("youtube%.com/watch%?v=(.*)$") or values.url:match("youtu%.be/(.*)$")
    local checkImgur = values.url:match("i%.imgur%.com/(.*)$")

    if not checkClip and not checkVod and not checkStreamable and not checkYoutube and not checkImgur then
      TriggerEvent("DoLongHudText", "Invalid URL")
      return false
    end
    return values
  end)

  if not prompt then
    return
  end

  local clipTag = prompt.url:match("clips%.twitch%.tv/(.*)$")
  local vodTag = prompt.url:match("twitch%.tv/videos/(.*)")
  local streamableTag = prompt.url:match("streamable%.com/(.*)$")
  local youtubeTag = prompt.url:match("youtube%.com/watch%?v=(.*)$") or prompt.url:match("youtu%.be/(.*)$")
  local imgurTag = prompt.url:match("i%.imgur%.com/(.*)$")

  if not clipTag and not vodTag and not streamableTag and not youtubeTag and not imgurTag then
      TriggerEvent("DoLongHudText", "not matched :( - " .. prompt.url)
      return
  end

  if vodTag then
      vodTag = vodTag:gsub("%?", "&")
  end

  if not data.meta._hideKeys then
    data.meta._hideKeys = { "_media" }
    data.meta._media = {}
  end

  data.meta._media[#data.meta._media + 1] = {
    id = #data.meta._media + 1,
    title = prompt.title,
    url = clipTag or vodTag or streamableTag or youtubeTag or imgurTag,
    type = (clipTag and "clip") or (vodTag and "vod") or (streamableTag and "streamable") or (youtubeTag and "youtube") or (imgurTag and "imgur")
  }

  RPC.execute("np-usableprops:saveUSB", data.meta.id, prompt.title, prompt.url)
  TriggerEvent("inventory:updateItem", data.item, data.slot, json.encode(data.meta));
end)

RegisterUICallback("np-usableprops:viewUSBEntry", function(pData, pCb)
  pCb({ data = {}, meta = { ok = true, message = "done" } })
  local url = pData.key
  TriggerEvent("np-ui:openUrl", url)
end)

RegisterUICallback("np-usableprops:deleteUSBEntry", function(pData, pCb)
  pCb({ data = {}, meta = { ok = true, message = "done" } })
  local data = pData.key

  for i, entry in pairs(data.meta._media) do
    if entry.id == data.id then
      table.remove(data.meta._media, i)
      break
    end
  end

  TriggerEvent("inventory:updateItem", data.item, data.slot, json.encode(data.meta));
end)

function GetEntryIcon(pType)
  if pType == "clip" then
    return "cut"
  end
  if pType == "vod" then
    return "file-video"
  end
  if pType == "streamable" then
    return "film"
  end
  if pType == "youtube" then
    return "play"
  end
  if pType == "imgur" then
    return "image"
  end
  return "file"
end
