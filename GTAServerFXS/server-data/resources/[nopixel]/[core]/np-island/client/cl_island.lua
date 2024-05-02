local isIslandEnabled = false
local isIslandSwappingEnabled = true

Citizen.CreateThread(function()
  exports["np-polyzone"]:AddPolyZone("np-island:zone", {
    vector2(2282.2163085938, -4201.361328125),
    vector2(2533.8444824219, -3866.7492675781),
    vector2(3123.6162109375, -3569.1062011719),
    vector2(3603.9738769531, -3109.8999023438),
    vector2(4441.3403320312, -2414.0302734375),
    vector2(5666.4028320312, -1364.9494628906),
    vector2(7562.2001953125, 196.69323730469),
    vector2(8518.3203125, -3301.33203125),
    vector2(7882.99609375, -5392.6967773438),
    vector2(7869.94140625, -6690.03125),
    vector2(7456.5810546875, -7855.9633789062),
    vector2(5325.2099609375, -7929.9111328125),
    vector2(3814.41796875, -6461.791015625)
  }, {
    zoneEvents = { "np-island:updateZoneWeather" }
  })
end)

AddEventHandler("np-polyzone:enter", function(zone, data)
  if zone == "np-island:zone" then
    if not isIslandEnabled and isIslandSwappingEnabled and (exports["inventory"]:hasEnoughOfItem("boarding_pass_cayo", 1, false, true) or 
    exports["inventory"]:hasEnoughOfItem("sanguine_isle_passport", 1, false, true) or exports['np-business']:HasPermission('sanguine_isle', 'property_keys'))
      then
        toggleIsland(true)
        
        local isWeatherEnabled = NPX.Procedures.execute('np-island:server:isCayoWeatherEnabled')
        TriggerEvent('np-island:updateZoneWeather', isWeatherEnabled)  
    end
  end
end)

AddEventHandler("np-polyzone:exit", function(zone, data)
  if zone == "np-island:zone" then
    if isIslandEnabled then
      toggleIsland(false)
      if exports["inventory"]:hasEnoughOfItem("boarding_pass_cayo", 1, false, true) then
	      TriggerEvent('inventory:removeItem', 'boarding_pass_cayo', 1)
      end
      TriggerEvent('np-island:updateZoneWeather', false)
    end
  end
end)


function toggleIsland(pState)
  isIslandEnabled = pState
  if pState then
    SetIslandHopperEnabled("HeistIsland", true)
    SetScenarioGroupEnabled("Heist_Island_Peds", true)
    SetAudioFlag('PlayerOnDLCHeist4Island', true)
    SetAmbientZoneListStatePersistent('AZL_DLC_Hei4_Island_Zones', true, true)
    SetAmbientZoneListStatePersistent('AZL_DLC_Hei4_Island_Disabled_Zones', false, true)
    SetAiGlobalPathNodesType(1)
    LoadGlobalWaterType(1)
    SetWindSpeed(0.0)
    exports['np-weathersync']:FreezeWeather(true, 'Very Sunny')
    SetToggleMinimapHeistIsland(true)
    TriggerEvent('np-island:onIsland', true)
    TriggerEvent('np-island:hideBlips', true)
    Wait(0)
    RemoveIpl("h4_islandx_sea_mines")
    RemoveIpl("h4_aa_guns_lod")
    RemoveIpl("h4_aa_guns")
    return
  end
  SetIslandHopperEnabled("HeistIsland", false)
  SetScenarioGroupEnabled("Heist_Island_Peds", false)
  SetAudioFlag('PlayerOnDLCHeist4Island', false)
  SetAmbientZoneListStatePersistent('AZL_DLC_Hei4_Island_Zones', false, true)
  SetAmbientZoneListStatePersistent('AZL_DLC_Hei4_Island_Disabled_Zones', true, true)
  SetAiGlobalPathNodesType(0)
  LoadGlobalWaterType(0)
  SetWindSpeed(1.0)
  SetToggleMinimapHeistIsland(false)
  TriggerEvent('np-island:onIsland', false)
  TriggerEvent('np-island:hideBlips', false)
  exports['np-weathersync']:FreezeWeather(false, 'Very Sunny')
end

RegisterNetEvent("np-island:enableSwapping", function(pEnabled)
  isIslandSwappingEnabled = pEnabled
end)

exports('hideBlips', function(pState)
  TriggerEvent('np-island:hideBlips', pState)
end)

-- Fetch initial state
Citizen.CreateThread(function()
  Citizen.Wait(5000)
  TriggerServerEvent("np-island:checkIslandSwapping")
end)

NPX.Events.on('np-island:client:toggleWeather', function ()
  NPX.Procedures.execute('np-island:server:toggleWeather')
end)

RegisterNetEvent('np-island:updateZoneWeather')
AddEventHandler('np-island:updateZoneWeather', function (pEnabled)

  if pEnabled then
    exports['np-weathersync']:FreezeWeather(true, 'Cayo Weather')
  else
    TriggerEvent('np-weathersync:unfreezeWeatherLocally')
  end
  
end)
