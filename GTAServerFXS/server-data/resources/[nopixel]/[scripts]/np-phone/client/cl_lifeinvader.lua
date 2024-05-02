RegisterUICallback("np-ui:li:addContact", function(data, cb)
  local success, message = RPC.execute("phone:addEmailContact", data)
  cb({ data = message, meta = { ok = success, message = (not success and message or "done") } })
end)

RegisterUICallback("np-ui:li:deleteContact", function(data, cb)
  local success, message = RPC.execute("phone:deleteEmailContact", data)
  cb({ data = message, meta = { ok = success, message = (not success and message or "done") } })
end)

RegisterUICallback("np-ui:li:getContacts", function(data, cb)
  local success, message = RPC.execute("phone:getEmailContacts")
  cb({ data = message, meta = { ok = success, message = (not success and message or "done") } })
end)

local GetRandomAdURL
Citizen.CreateThread(function()
    GetRandomAdURL = NPX.Utils.cacheableMap(function(pCtx, pName)
        local success, message = RPC.execute("phone:li:getRandomAdURL")
        return true, { success = success, message = message }
    end, {
        timeToLive = 30 * 60 * 1000
    })
end)
RegisterUICallback("np-ui:li:getAdURL", function(data, cb)
    local result = GetRandomAdURL.get()
    cb({ data = result.message, meta = { ok = result.success, message = (not result.success and result.message or "done") } })
end)

RegisterNetEvent('np-phone:showEmail', function()
  local hasEmail = RPC.execute("np-phone:getEmailAddress")
  if not hasEmail then
    TriggerEvent('DoLongHudText', 'You do not have an email address', 2)
    return
  end
  TriggerServerEvent('np-phone:showEmailAddress')
end)

RegisterUICallback("np-ui:li:sentEmail", function(data, cb)
  TriggerServerEvent("phone:li:sentEmail", data)
  cb({ data = 'done', meta = { ok = true, message = "done" } })
end)
