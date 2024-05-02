local pings = {}
local blipMarker = nil

RegisterNetEvent("phone:ping:receive")
AddEventHandler("phone:ping:receive", function(pCoords, pSrc, pCharacterName, pPingId)
  if pings[pPingId] then return end

  pings[pPingId] = {
    coords = pCoords,
    senderId = pSrc,
    senderName = pCharacterName
  }

  PlaySound(-1, "Click_Fail", "WEB_NAVIGATION_SOUNDS_PHONE", 0, 0, 1)

  SendUIMessage({
    source = "np-nui",
    app = "phone",
    data = {
      action = "ping-receive",
      name = pCharacterName,
      pingId = pPingId
    }
  })

end)

RegisterNetEvent("phone:ping:receiveItemCheck")
AddEventHandler("phone:ping:receiveItemCheck", function(pCoords, pSrc, pCharacterName, pPingId, pItemCheck)
  local hasItem = exports["inventory"]:hasEnoughOfItem(pItemCheck, 1, false, true)
  if not hasItem then return end

  TriggerEvent("phone:ping:receive", pCoords, pSrc, pCharacterName, pPingId)
end)

RegisterUICallback("np-ui:pingSend", function(data, cb)
  local targetId, is_anon, coords = data.number, data.anonymous, GetEntityCoords(PlayerPedId())

  if tonumber(targetId) > 0 then
    TriggerServerEvent("phone:ping:request", targetId, coords, is_anon)
  end

  cb({ data = {}, meta = { ok = true, message = '' } })
end)

RegisterUICallback("np-ui:pingAccept", function(data, cb)
  local pingId = data.pingId
  if not pingId then return end

  local ping = pings[pingId]
  if not ping then return end

  if DoesBlipExist(blipMarker) then
    RemoveBlip(blipMarker)
  end

  blipMarker = AddBlipForCoord(ping.coords.x + 0.0, ping.coords.y + 0.0, ping.coords.z + 0.0)

  SetBlipSprite(blipMarker, 280)
  SetBlipAsShortRange(blipMarker, false)
  BeginTextCommandSetBlipName("STRING")
  SetBlipColour(blipMarker, 4)
  SetBlipScale(blipMarker, 1.2)
  AddTextComponentString("Accepted GPS Marker")
  EndTextCommandSetBlipName(blipMarker)
  TriggerEvent("DoLongHudText", "Their GPS ping has been marked on the map")
  TriggerServerEvent("phone:ping:accepted", ping.senderId)

  cb({ data = {}, meta = { ok = true, message = '' } })

  SetTimeout(60000, function()
    if DoesBlipExist(blipMarker) then
      RemoveBlip(blipMarker)
    end
  end)
end)

RegisterUICallback("np-ui:pingReject", function(data, cb)
  local pingId = data.pingId
  if not pingId then return end

  local ping = pings[pingId]
  if not ping then return end

  TriggerServerEvent("phone:ping:rejected", ping.senderId)
  cb({ data = {}, meta = { ok = true, message = '' } })
end)
