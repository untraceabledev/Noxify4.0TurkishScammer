local isOcclusionDisabled = false

local ExplosionZones = {
    vector3(-1394.91,-492.78,61.67),
    vector3(-1349.02,-489.87,60.3),
    vector3(-1356.26,-475.68,60.63),
    vector3(-1368.93,-459.4,59.49),
    vector3(-1393.08,-463.38,58.88),
    vector3(-1414.21,-467.34,59.0),
    vector3(-1404.93,-479.81,58.12),
    vector3(-1396.29,-492.4,87.86),
    vector3(-1373.99,-464.91,86.79),
    vector3(-1351.35,-486.86,85.6),
}

RegisterNetEvent('np-miscscripts:ausieEvent:explosionByStander', function ()
    RequestScriptAudioBank("Vault_Door", false)

    Citizen.CreateThread(function ()
        for _, zone in pairs(ExplosionZones) do
            PlaySoundFromCoord(-1, "VAULT_DOOR_CLOSE", zone.x, zone.y, zone.z, 0, 0, 0, 0)

            Citizen.Wait(50)
        end
    end)

    Citizen.CreateThread(function ()
        local amount = 0

        local delay = 0

        SetTimecycleModifier("trevorspliff")

        while amount < 1 do
            SetTimecycleModifierStrength(amount)

            amount = amount + 0.01

            Citizen.Wait(delay)
        end

        while amount > 0 do
            SetTimecycleModifierStrength(amount)

            amount = amount - 0.01

            Citizen.Wait(delay)
        end

        ClearTimecycleModifier()
    end)

    local playerPed = PlayerPedId()
    local originCoords = vector3(-1381.78, -484.02, 63.74)
    local playerCoords = GetEntityCoords(playerPed)

    local distance = #(playerCoords - originCoords)

    if distance > 150 then return end

    local dirX = (playerCoords.x - originCoords.x) / distance
    local dirY = (playerCoords.y - originCoords.y) / distance

    local maxForce = 2000

    local force = (1 - distance / 300) * maxForce

    if force <= 0 then return end

    SetPedToRagdoll(playerPed, 3000, 1000, 0, false, false, false)

    ApplyForceToEntity(playerPed, 0, dirX * force, dirY * force, force * 0.35, 0, 0, 0, 0, 1, 1, 1, 0, 1)

    Citizen.CreateThread(function ()
        local timer = GetGameTimer()

        while GetGameTimer() - timer < 5000 do
            SetPedToRagdoll(playerPed, 3000, 1000, 0, false, false, false)

            Citizen.Wait(0)
        end
    end)
end)

RegisterNetEvent('np-miscscripts:ausieEvent:explosionOrigin', function ()
    local coords = vector3(-1381.78, -484.02, 63.74)

    for _, zone in pairs(ExplosionZones) do
        AddExplosion(zone, 82, 1.0, true, false, 1.0)

        Citizen.Wait(50)
    end

    AddExplosion(coords, 47, 1.0, true, false, 1.0)
end)

Citizen.CreateThread(function()
    exports["np-polyzone"]:AddCircleZone("np-miscscripts:explosionArea", vector3(-1381.78, -484.02, 63.74), 100.0, {
        useZ=true,
        data = {
          id = "delperro",
        },
    })
end)

NPX.Zones.onEnter("np-miscscripts:explosionArea", function(zone)
    isOcclusionDisabled = true

    Citizen.CreateThread(function ()
        while isOcclusionDisabled do
            DisableOcclusionThisFrame()

            Citizen.Wait(0)
        end
    end)
end)

NPX.Zones.onExit("np-miscscripts:explosionArea", function(zone)
    isOcclusionDisabled = false
end)

AddEventHandler("np-inventory:itemUsed", function(item)
    if item ~= "remotedet" then return end

    TriggerServerEvent("np-miscscripts:aussie:boom")
end)