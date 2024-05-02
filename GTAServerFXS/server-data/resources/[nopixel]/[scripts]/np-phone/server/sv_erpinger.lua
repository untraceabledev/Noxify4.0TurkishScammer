RegisterNetEvent('phone:ping:rejected')
AddEventHandler('phone:ping:rejected', function (pPingerId)
    TriggerClientEvent("DoLongHudText", tonumber(pPinger), "Your ping has been Declined", 2)
end)

RegisterNetEvent('phone:ping:request')
AddEventHandler('phone:ping:request', function (pTarget, pCoords, pAnon)
local isAnon = pAnon
local src = source
local itemcheck = "mobilephone"
--if tonumber(src) == tonumber(pTarget) then
--    return TriggerClientEvent("DoLongHudText", src, "You can't ping your self... smh", 2)
--end
local user = exports["np-base"]:getModule("Player"):GetUser(src)
local char = user:getCurrentCharacter()
local name = char.first_name
local last = char.last_name
local name = name .. " " .. last

if isAnon then
    name = "Anonymous"
end

local target = pTarget
local coords = exports["np-infinity"]:GetPlayerCoords(tonumber(target))
TriggerClientEvent("phone:ping:receiveItemCheck", source, coords, src, name, target, itemcheck) 
end)

RegisterNetEvent('phone:ping:accepted')
AddEventHandler('phone:ping:accepted', function (pTarget, pCoords, pAnon)
    TriggerClientEvent("DoLongHudText", tonumber(pPinger), "Your ping has been accepted!", 1)
end)