local currentJob = nil

RegisterNetEvent("jobmanager:playerBecameJob")
AddEventHandler("jobmanager:playerBecameJob", function(job, notify)
    currentJob = job
end)

RegisterNetEvent("phone:twatter:receive")
AddEventHandler("phone:twatter:receive", function(pTwat)
  print("pTwat", json.encode(pTwat))
  local hasPhone = exports["inventory"]:HasItem("mobilephone", { quantity = 1, quality = 1 })

  if pTwat.limitedToJob then
    if currentJob ~= pTwat.limitedToJob then
        return
    end
  end

  SendUIMessage({
    source = "np-nui",
    app = "phone",
    data = {
      action = "twatter-receive",
      character = pTwat.character,
      timestamp = pTwat.timestamp,
      text = pTwat.text,
      hasPhone = hasPhone,
      isBlue = pTwat.isBlue,
    }
  })
end)

RegisterUICallback("np-ui:getBlockedTwatterUsers", function (data, cb)
  local users = RPC.execute("np-phone:getBlockedUsers")
  cb({ data = users, meta = { ok = true, message = "done" } })
end)

RegisterUICallback("np-ui:unblockTwatterUser", function (data, cb)
  local success = RPC.execute("np-phone:unblockTwatterUser", data.user)
  cb({ data = success, meta = { ok = success, message = "done" } })
end)


RegisterUICallback("np-ui:twatSend", function(data, cb)
  local character_id, first_name, last_name, text = data.character.id, data.character.first_name, data.character.last_name, data.text
  local success, message = RPC.execute("phone:addTwatterEntry", character_id, first_name, last_name, text)
  cb({ data = message, meta = { ok = success, message = (not success and message or 'done') } })
end)

RegisterUICallback("np-ui:getTwats", function(data, cb)
  local success, message = RPC.execute("phone:getTwatterEntries")
  cb({ data = message, meta = { ok = success, message = (not success and message or 'done') } })
end)

-- TODO: Iterate over online admins.
-- report a twat
RegisterUICallback("np-ui:twatReport", function(data, cb)
  -- INCOMING
  -- data.character = character data from np-ui:init
  -- data.twat = tweet content

  -- RETURN
  -- cb data = {},
  --    meta = { ok: true | false, message: string }
  cb({ data = {}, meta = { ok = true, message = '' } });

  RPC.execute("np-phone:twatReport", data.twat)
end)

RegisterUICallback('np-ui:blockTwatterUser', function (data, cb)
  local success, message = RPC.execute("np-phone:blockTwatterUser", data.cid)
  cb({ data = {}, meta = { ok = success, message = message } });
end)

RegisterUICallback("np-ui:phone:purchaseBlue", function(data, cb)
  local success, message = RPC.execute("np-phone:purchaseBlue")
  cb({ data = success, meta = { ok = success, message = (not success and message or 'done') } })
end)

RegisterUICallback("np-ui:phone:cancelBlue", function(data, cb)
  local finished = exports["np-taskbar"]:taskBar(30000, "Canceling...", true)
  if finished ~= 100 then
    cb({ data = false, meta = { ok = false, message = "Failed to cancel subscription" } })
    return
  end

  local success, message = RPC.execute("np-phone:cancelBlue")
  cb({ data = success, meta = { ok = success, message = (not success and message or 'done') } })
end)

RegisterUICallback("np-ui:phone:getTwatterBlue", function(data, cb)
  local success = RPC.execute("np-phone:getTwatterBlue")
  cb({ data = success, meta = { ok = success, message = 'done' } })
end)
