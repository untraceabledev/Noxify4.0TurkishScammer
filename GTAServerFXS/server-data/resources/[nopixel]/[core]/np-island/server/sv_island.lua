local success = true

RegisterServerEvent("np-island:checkIslandSwapping")
AddEventHandler("np-island:checkIslandSwapping", function()
  local pSrc = source
  TriggerClientEvent("np-island:enableSwapping", pSrc, success)
end)

NPX.Procedures.register("np-island:server:isCayoWeatherEnabled", function(pSrc)
  return success
end)