RegisterNetEvent("np-gov:police:showBadge")
AddEventHandler("np-gov:police:showBadge", function(pSource, pInventoryData)
    local veh = GetVehiclePedIsIn(PlayerPedId(), false)
    local isInCar = veh ~= 0 and veh ~= nil
    if GetPlayerServerId(PlayerId()) ~= pSource then
      Citizen.CreateThread(function()
        Citizen.Wait(isInCar and 1000 or 4500)
        exports["np-ui"]:openApplication("badge", {
            show = true,
            name = pInventoryData.name,
            badge = pInventoryData.badge,
            rank = pInventoryData.rank,
            department = pInventoryData.department,
            image = pInventoryData.image,
            callsign = pInventoryData.callsign,
        }, false)
      end)
    else
        if isInCar then return end 

        TriggerEvent("attachItem", "police_badge")

        local animation = AnimationTask:new(PlayerPedId(), 'normal', nil, 9500, 'paper_1_rcm_alt1-7', 'player_one_dual-7', 63)

        local result = Citizen.Await(animation:start(function(self)
            local vehicle = GetVehiclePedIsIn(self.ped, false)

            if not IsDead and vehicle ~= 0 then
              TaskLeaveVehicle(self.ped, vehicle, 1)
            elseif IsDead and vehicle ~= 0 then
              ClearPedTasksImmediately(self.ped)
              self:abort()
            elseif IsDead or IsPedRagdoll(self.ped) then
              self:abort()
            end
        end))

        TriggerEvent("destroyProp")
    end
end)

RegisterNetEvent("NoPixel-callsignveh", function()
  setVehicleCallsign()
end)


function setVehicleCallsign(pCallsign1, pCallsign2, pCallsign3)
  local plyVeh = GetVehiclePedIsIn(PlayerPedId(),false)

  local elements = {
      { name = 'cso', label = 'Callsign', icon = 'time', _type = 'number' },
      { name = 'ppo', label = 'Division (0 = patrol)', icon = 'time', _type = 'number' },
      { name = 'tto', label = 'Rank', icon = 'time', _type = 'number' },
    }

  local prompt = exports['np-ui']:OpenInputMenu(elements)
 
  if not prompt then 
      ClearPedTasks(PlayerPedId())
      return
  end

  local cso = tonumber(prompt.cso) or 0
  if cso >= 999 then
      return TriggerEvent('DoLongHudText', 'Three Digits Only', 2)
  end

  local ppo = tonumber(prompt.ppo) or 0
  if ppo >= 10 then
      return TriggerEvent('DoLongHudText', 'One Digits Only', 2)
  end

  local tto = tonumber(prompt.tto) or 0
  if tto >= 10 then
      return TriggerEvent('DoLongHudText', 'One Digits Only', 2)
  end

  local progress = exports['np-taskbar']:taskBar(2500, 'Call sign being set...', true)

  if progress == 100 then 
      local str = "".. cso ..""
      local fields = { str:match( (str:gsub(".", "(.)")) ) }

      SetVehicleMod(plyVeh, 42, tonumber(fields[1]))
      SetVehicleMod(plyVeh, 44, tonumber(fields[2]))
      SetVehicleMod(plyVeh, 45, tonumber(fields[3]))

      SetVehicleMod(plyVeh, 8, tonumber(ppo))
      SetVehicleMod(plyVeh, 9, tonumber(tto))


  end
end