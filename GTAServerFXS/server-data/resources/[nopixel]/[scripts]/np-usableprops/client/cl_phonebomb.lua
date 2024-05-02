RegisterNetEvent('np-usableprops:detonateVehicle', function(pNetId, pExplosionSource)
    print('Detonating vehicle', pNetId, pExplosionSource)
    local vehicle = NetworkGetEntityFromNetworkId(pNetId)
    AddVehiclePhoneExplosiveDevice(vehicle)
    local planted = true
    Citizen.CreateThread(function()
        while planted do
            local soundId = GetSoundId()
            PlaySoundFromEntity(soundId, 'Landing_Tone', vehicle, 'DLC_PILOT_ENGINE_FAILURE_SOUNDS', true, 1)
            Wait(665)
            if not HasSoundFinished(soundId) then
                StopSound(soundId)
                ReleaseSoundId(soundId)
            end
        end
    end)
    Wait(5000)
    if not HasSoundFinished(soundId) then
        StopSound(soundId)
        ReleaseSoundId(soundId)
    end
    planted = false
    DetonateVehiclePhoneExplosiveDevice()
    local offsets = {
        { ["x"] = 0, ["y"] = 0 },
        { ["x"] = 4, ["y"] = 4 },
        { ["x"] = 4, ["y"] = -4 },
        { ["x"] = -4, ["y"] = 4 },
        { ["x"] = -4, ["y"] = -4 },

    }
    ApplyForceToEntityCenterOfMass(vehicle, 1, 10.00, 10.00, 10.00, true, false, false, true)
    local vehicleCoords = GetEntityCoords(vehicle)
    for index, offset in pairs(offsets) do
        AddExplosion(
            vehicleCoords.x + offset.x,
            vehicleCoords.y + offset.y,
            vehicleCoords.z,
            8,
            1.0,
            true,
            false,
            1.0,
            false
        )
    end
end)

RegisterNetEvent('np-usableprops:detonateProp', function(pPosition)
    local offsets = {
        { ["x"] = 0, ["y"] = 0 },
        { ["x"] = 4, ["y"] = 4 },
        { ["x"] = 4, ["y"] = -4 },
        { ["x"] = -4, ["y"] = 4 },
        { ["x"] = -4, ["y"] = -4 },

    }
    for index, offset in pairs(offsets) do
        AddExplosion(
            pPosition.x + offset.x,
            pPosition.y + offset.y,
            pPosition.z,
            8,
            1.0,
            true,
            false,
            1.0,
            false
        )
    end
end)
