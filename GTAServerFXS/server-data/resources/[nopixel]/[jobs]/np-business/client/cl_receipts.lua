
local businessZones = {}

local clockedIn = nil

function ClockIn(pBusiness, pOverwrite, pOverwriteMax)
  if clockedIn ~= nil then
    TriggerEvent("DoLongHudText", "You are already clocked in.", 2)
    return
  end
  local success = NPX.Procedures.execute('np-business:receipts:clockIn', pBusiness, pOverwrite, pOverwriteMax)
  if success then
    clockedIn = pBusiness
  end
end

function ClockOut(pBusiness, pOverwrite)
  local success = NPX.Procedures.execute('np-business:receipts:clockOut', pBusiness, pOverwrite)
  if success then
    clockedIn = nil
  end
end

Citizen.CreateThread(function()
  for business, zone in pairs(businessZones) do
    exports['np-polyzone']:AddBoxZone('business_receipts_workzones', zone.coords, zone.length, zone.width, {
      data = { id = 'business_workzone_' .. business, business = business },
      heading = zone.heading,
      minZ = zone.minZ,
      maxZ = zone.maxZ,
    })
  end
end)

AddEventHandler('np-polyzone:exit', function(pZone, pData)
  if pZone ~= 'business_receipts_workzones' then return end
  if not pData.business then return end
  if not clockedIn then return end

  local success = NPX.Procedures.execute('np-business:receipts:clockOut', pData.business)
  if success then
    clockedIn = nil
  end
end)

AddEventHandler('np-business:receipts:clockOut', function(pParameters, pEntity, pContext)
  ClockOut(pParameters.business)
end)

AddEventHandler('np-business:receipts:clockIn', function(pParameters, pEntity, pContext)
  ClockIn(pParameters.business)
end)

AddEventHandler('np-business:receipts:clockInAlt', function(pBusiness, pMaxEmployees)
  ClockIn(pBusiness, true, pMaxEmployees)
end)

AddEventHandler('np-business:receipts:clockOutAlt', function(pBusiness, pMaxEmployees)
  ClockOut(pBusiness, true)
end)

exports('isClockedIn', function()
  return clockedIn ~= nil
end)
