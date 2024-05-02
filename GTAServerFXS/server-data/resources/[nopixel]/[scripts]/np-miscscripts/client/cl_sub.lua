local SUBMARINE_MODEL = `np_simone_sub`
local SUBMARINE_SPAWN_COORDS = vector3(-3720.5, -2968.0, -15.0)
local SUBMARINE_FINAL_COORDS, SUBMARINE_HEADING = vector3(SUBMARINE_SPAWN_COORDS.x, SUBMARINE_SPAWN_COORDS.y, 1.0), 358.0
local shouldSpawnSubmarine = false
local SUBMARINE_ENTITY, SUBMARINE_VISIBLE = 0, false
local hasTeleportedInside = false
local isInsideZone = false
local hasJustSpawned = true

CreateThread(function()
    exports["np-polyzone"]:AddCircleZone("np-miscscripts:submarine", vector3(-3720.5, -2968.0, 1.0), 600.35, {
        useZ=true,
        data = {
            id = "submarine_creation"
        }
    })

    exports["np-polytarget"]:AddBoxZone("np-miscscripts:submarine_teleport", vector3(-3720.5, -2938.12, 4.31), 0.4, 1.0, {
        heading=0,
        minZ=3.31,
        maxZ=5.11,
        data = {
            id = "submarine_teleport_in"
        }
    })

    exports["np-polytarget"]:AddBoxZone("np-miscscripts:submarine_teleport_exit", vector3(514.3, 4889.1, -62.59), 1.0, 0.8, {
        heading=1,
        minZ=-63.59,
        maxZ=-60.79,
        data = {
            id = "submarine_teleport_exit"
        }
    })

    exports['np-interact']:AddPeekEntryByPolyTarget('np-miscscripts:submarine_teleport', {
        {
            event = 'np-miscscripts:submarine_teleport',
            id = 'np-miscscripts:submarine_teleport',
            icon = 'water',
            label = "Enter",
            parameters = {
                type = "enter"
            }
        }
    },
    {
        distance = { radius = 1.5 },
        isEnabled = function() return SUBMARINE_VISIBLE end
    })

    exports['np-interact']:AddPeekEntryByPolyTarget('np-miscscripts:submarine_teleport_exit', {
        {
            event = 'np-miscscripts:submarine_teleport',
            id = 'np-miscscripts:submarine_teleport_exit',
            icon = 'water',
            label = "Exit",
            parameters = {
                type = "exit"
            }
        }
    },
    {
        distance = { radius = 1.5 }
    })
end)

function LoadEntityModel(modelHash)
    if not HasModelLoaded(modelHash) then
        local timeout = false

        RequestModel(modelHash)

        Citizen.SetTimeout(5000, function()
            timeout = true
        end)

        while not HasModelLoaded(modelHash) and not timeout do
            Citizen.Wait(0)
        end
    end
end

function createSubmarine()
    if shouldSpawnSubmarine and not hasTeleportedInside then
        LoadEntityModel(SUBMARINE_MODEL)
        SUBMARINE_ENTITY = CreateObjectNoOffset(SUBMARINE_MODEL, SUBMARINE_SPAWN_COORDS, false, false, false)
        SetEntityHeading(SUBMARINE_ENTITY)
        Wait(0)
        soundID = GetSoundId() -- we need a sound ID for calling the native below, otherwise we won't be able to stop the sound later
        while not LoadStream("Stop", "DLC_H4_Anims_Submarine_Fast_Travel") do
            Wait(0)
        end
        local currentSubCoords = GetEntityCoords(SUBMARINE_ENTITY, false)
        PlayStreamFromPosition(currentSubCoords)
        local waterFx = exports["np-fx"]:StartParticleAtCoord(
            "np_submarine",
            "scr_xm_submarine_surface_splashes",
            true,
            SUBMARINE_FINAL_COORDS,
            { x = 0.0, y = 0.0, z = 0.0 },
            9.5,
            10.0,
            nil,
            0
        )
        while #(currentSubCoords - SUBMARINE_FINAL_COORDS) >= 0.5 and DoesEntityExist(SUBMARINE_ENTITY) do
            SetEntityCoords(SUBMARINE_ENTITY, currentSubCoords.x, currentSubCoords.y, currentSubCoords.z + 0.05)
            currentSubCoords = GetEntityCoords(SUBMARINE_ENTITY, false)
            Wait(0)
        end
        StopStream()
        exports["np-fx"]:StopParticle(waterFx)
        FreezeEntityPosition(SUBMARINE_ENTITY, true)
        SUBMARINE_VISIBLE = true
    end
end

AddEventHandler('np-miscscripts:submarine_teleport', function (pData)
    if (pData.type == "enter") then
        SetEntityCoords(PlayerPedId(), 514.3, 4888.08, -62.58)
        SetEntityHeading(PlayerPedId(), 176.94)
        hasTeleportedInside = true
    elseif (pData.type == "exit") then
        SetEntityCoords(PlayerPedId(), -3720.5, -2937.08, 4.3)
        SetEntityHeading(PlayerPedId(), 359.97)
        Citizen.SetTimeout(5000, function()
            hasTeleportedInside = false
        end)
    end
end)

AddEventHandler('np-polyzone:enter', function (pName)
    if pName ~= 'np-miscscripts:submarine' then return end
    isInsideZone = true
    if hasJustSpawned then
        shouldSpawnSubmarine = NPX.Procedures.execute('np-miscscripts:submarine:getState')
        hasJustSpawned = false
    end
    createSubmarine()
end)

AddEventHandler('np-polyzone:exit', function (pName)
    if pName ~= 'np-miscscripts:submarine' then return end
    if SUBMARINE_ENTITY then
        StopStream()
    end
    if SUBMARINE_ENTITY and not hasTeleportedInside then
        DeleteEntity(SUBMARINE_ENTITY)
        SUBMARINE_VISIBLE = false
    end
    isInsideZone = false
end)

AddEventHandler("np-inventory:itemUsed", function (item, info)
    if item ~= "subradio" then return end
    NPX.Procedures.execute('np-miscscripts:submarine:toggleSpawn')
end)

NPX.Events.onNet('np-miscscripts:submarine:setState', function(pState)
    shouldSpawnSubmarine = pState
    if isInsideZone and not DoesEntityExist(SUBMARINE_ENTITY) then
        createSubmarine()
    end
end)

AddEventHandler("onResourceStop", function(pRsc)
    if pRsc == GetCurrentResourceName() then
        if SUBMARINE_ENTITY then
            DeleteEntity(SUBMARINE_ENTITY)
            SUBMARINE_VISIBLE = false
        end
    end
end)