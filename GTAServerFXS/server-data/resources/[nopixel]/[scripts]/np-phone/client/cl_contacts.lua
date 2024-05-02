RegisterUICallback("np-ui:getContacts", function(data, cb)
  local phoneNumber = data.phoneNumber
  local success, message = RPC.execute("phone:getContacts", phoneNumber)
  cb({ data = message, meta = { ok = success, message = (not success and message or 'done') } })
end)

RegisterUICallback("np-ui:addContact", function(data, cb)
  local simcard_number, contact_name, contact_number = data.phoneNumber, data.name, data.number
  local success, result = RPC.execute("phone:addContact", simcard_number, contact_name, contact_number)
  cb({ data = { id = result }, meta = { ok = success, message = (not success and "Error" or 'done') } })
end)

RegisterUICallback("np-ui:deleteContact", function(data, cb)
  local contact_id = data.id
  local success, message = RPC.execute("phone:deleteContact", contact_id)
  cb({ data = {}, meta = { ok = success, message = (not success and message or 'done') } })
end)
