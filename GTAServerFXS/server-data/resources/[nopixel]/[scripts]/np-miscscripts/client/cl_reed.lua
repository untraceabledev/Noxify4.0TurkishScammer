local isHooked = false
local isInsideHookZone = false
local hookPosition = vector3(1001.484, -2116.676, 33.09605)
local animDict = "nikez@hook"

CreateThread(function ()
    exports["np-polyzone"]:AddBoxZone("reed_pickup", vector3(1001.51, -2116.59, 30.48), 3.5, 3.5, {
        heading=357,
        minZ=29.48,
        maxZ=35.00,
        data = {
            id = "reed_pickup"
        }
    })

    exports['np-interact']:AddPeekEntryByEntityType(
        { 1 },
        {
          {
            id = 'reed_pickup',
            label = "Attach",
            icon = 'dizzy',
            event = 'np-miscscripts:reedHook',
            parameters = {},
          },
        },
        {
          distance = { radius = 2.5 },
          isEnabled = function(pEntity, pContext)
            return isInsideHookZone and IsAnEntity(pEntity) and IsPedAPlayer(pEntity)
          end,
        }
    )

end)

AddEventHandler("np-polyzone:enter", function(pName, pData)
    if pName ~= "reed_pickup" then return end
    isInsideHookZone = true
end)

AddEventHandler("np-polyzone:exit", function(pName, pData)
    if pName ~= "reed_pickup" then return end
    isInsideHookZone = false
end)

AddEventHandler("np-miscscripts:reedHook", function(pParameters, pEntity, pContext)
    local hookedTargetServerId = GetPlayerServerId(NetworkGetPlayerIndexFromPed(pEntity))
    if hookedTargetServerId ~= 0 then
        NPX.Events.emitNet('np-miscscripts:reedSetHook', hookedTargetServerId)
    end
end)

local function DisableInput(pPed)
    DisableInputGroup(0)
    DisableInputGroup(1)
    DisableInputGroup(2)
    DisableControlAction(1, 19, true)
    DisableControlAction(0, 34, true)
    DisableControlAction(0, 9, true)
    DisableControlAction(0, 32, true)
    DisableControlAction(0, 8, true)
    DisableControlAction(2, 31, true)
    DisableControlAction(2, 32, true)
    DisableControlAction(1, 33, true)
    DisableControlAction(1, 34, true)
    DisableControlAction(1, 35, true)
    DisableControlAction(1, 21, true)  -- space
    DisableControlAction(1, 22, true)  -- space
    DisableControlAction(1, 23, true)  -- F
    DisableControlAction(1, 24, true)  -- F
    DisableControlAction(1, 25, true)  -- F
    DisableControlAction(1, 106, true) -- VehicleMouseControlOverride
    DisableControlAction(1, 140, true) --Disables Melee Actions
    DisableControlAction(1, 141, true) --Disables Melee Actions
    DisableControlAction(1, 142, true) --Disables Melee Actions 
    DisableControlAction(1, 37, true) --Disables INPUT_SELECT_WEAPON (tab) Actions
    DisablePlayerFiring(pPed, true) -- Disable weapon firing
    SetPedCanRagdoll(pPed, false)
end

local function playHook()
    isHooked = true
    local ped = PlayerPedId()
    Citizen.CreateThread(function()
        while isHooked do
            DisableInput(ped)
            Wait(0)
        end
    end)
end

NPX.Events.onNet('np-miscscripts:reedSetHooked', function(pTarget, pState)
    print(pTarget, pState)
    if pState and not isHooked then
        NPX.Streaming.loadAnim(animDict)
        isHooked = true
        exports['inventory']:SetInventoryDisabled(true)
        exports['inventory']:SetActionBarDisabled(true)
        TriggerServerEvent("fx:blood", "bloodfxreed", pTarget)
        TaskPlayAnimAdvanced(PlayerPedId(), animDict, 'hook', hookPosition.x, hookPosition.y, hookPosition.z - 1.35, 0.0001, 0.0001, 260.0, 8.0, -8.0, -1, 1026, 0, true, false)
        playHook()
    elseif not pState and isHooked then
        isHooked = false
        StopAnimTask(PlayerPedId(), animDict, 'hook', 1.0)
        exports['inventory']:SetInventoryDisabled(false)
        exports['inventory']:SetActionBarDisabled(false)
        TriggerServerEvent("fx:stopToggle", "bloodfxreed", "blood")
    end
end)

RegisterCommand("-unhook", function()
    if isHooked or isInsideHookZone then
        NPX.Events.emitNet('np-miscscripts:reedSetHook')
    end
end, false)