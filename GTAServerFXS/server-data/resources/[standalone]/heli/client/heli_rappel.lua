local rappeling = false
local rappelingB = false
local rappelSoundPlayed = 1001

RegisterNetEvent('rappelHeli')
AddEventHandler('rappelHeli', function(heli)
    rappeling = true

    while rappeling do
        Citizen.Wait(1)

        if GetEntityHeightAboveGround(PlayerPedId()) < 3.0 then
            ClearPedTasksImmediately(PlayerPedId())
            -- FreezeEntityPosition(PlayerPedId(),false)
            rappeling = false
        end
    end
end)

function helirappel()
    if rappeling then
        rappeling = false
    end
end

function standardrappel()
    if not rappelingB then -- Initiate rappel
        PlaySoundFrontend(-1, "SELECT", "HUD_FRONTEND_DEFAULT_SOUNDSET", false)
        TriggerEvent("rappelBuilding")
        Citizen.Wait(1000)
    end
    if rappelingB then
        ClearPedTasksImmediately(PlayerPedId())
        rappelingB = false
        Citizen.Wait(1000)
    end
end

-- anim("mp_fib_grab","rappel_jump_b",47)
local armed = false
function anim(dict, anim, key)
    if anim == curAnim then
        return
    end

    if anim == "rappel_jump_b" then
        rappelJumpSound()
    end

    curAnim = anim
    loadAnimDict(dict)
    TaskPlayAnim(PlayerPedId(), dict, anim, 1.0, 1.0, -1, key, 0, 0, 0, 0)
end

function SetrappelType()
    ClearPedTasksImmediately(PlayerPedId())
    SetCurrentPedWeapon(PlayerPedId(), `WEAPON_UNARMED`, true)
    Citizen.Wait(300)
    -- local curw = GetSelectedPedWeapon(PlayerPedId())
    -- local w = `WEAPON_CARBINERIFLE`
    -- if curw == w then
    --	TaskAimGunScripted(PlayerPedId(), `SCRIPTED_GUN_TASK_HANGING_UPSIDE_DOWN`, -1, -1);
    --	armed = true
    -- else
    anim("mp_fib_grab", "rappel_idle", 47)
    armed = false
    -- end
end

RegisterNetEvent('rappelBuilding')
AddEventHandler('rappelBuilding', function()
    local num = -1.0
    rappelingB = true

    local startCoords = GetEntityCoords(PlayerPedId())

    local curCoords = GetEntityCoords(PlayerPedId())
    local movecoords = GetOffsetFromEntityInWorldCoords(PlayerPedId(), 0.0, 2.5, 0.0)
    heliz = CreateObject(`prop_golf_ball`, movecoords, true, true, true)
    heliz2 = CreateObject(`prop_golf_ball`, movecoords, true, true, true)
    FreezeEntityPosition(heliz, true)
    FreezeEntityPosition(heliz2, true)

    helizCoords = GetEntityCoords(heliz)

    RopeLoadTextures()
    while not RopeAreTexturesLoaded() do
        Citizen.Wait(1)
    end

    Citizen.Wait(100)

    if GetEntityHeightAboveGround(heliz) < 4.0 then
        rappelingB = false
    else
        local curRope = AddRope(helizCoords, 0.0, 0.0, 0.0, GetEntityHeightAboveGround(heliz), 4,
            GetEntityHeightAboveGround(heliz), 4.0, 0.0, false, false, false, 5.0, false, 0)

        helizCoords = GetEntityCoords(heliz)

        SetEntityVisible(heliz, false, 1)
        SetEntityVisible(heliz2, false, 1)
        SetrappelType()
        -- mp_fib_grab enter_window
        while rappelingB do
            AttachRopeToEntity(curRope, heliz, helizCoords, 1)
            if GetFollowPedCamViewMode() == 4 or GetFollowVehicleCamViewMode() == 4 then
                SetFollowPedCamViewMode(0)
                SetFollowVehicleCamViewMode(0)
            end
            Citizen.Wait(1)
            curCoords = GetEntityCoords(PlayerPedId())
            rappelSoundPlayed = rappelSoundPlayed + 1

            if IsControlPressed(1, 32) and GetEntityHeightAboveGround(PlayerPedId()) > 1.0 then
                movecoords = GetOffsetFromEntityInWorldCoords(heliz2, 0.0, 0.0, -0.025)
                SetEntityCoords(heliz2, movecoords)
                rappelSound()
                if not armed then
                    anim("mp_fib_grab", "rappel_walk", 47)
                end
            elseif IsControlPressed(1, 8) and curCoords.z < startCoords.z then
                movecoords = GetOffsetFromEntityInWorldCoords(heliz2, 0.0, 0.0, 0.025)
                SetEntityCoords(heliz2, movecoords)
                rappelSound()
                if not armed then
                    anim("mp_fib_grab", "rappel_walk", 47)
                end
            elseif IsControlPressed(1, 22) and GetEntityHeightAboveGround(PlayerPedId()) > 1.0 then
                movecoords = GetOffsetFromEntityInWorldCoords(heliz2, 0.0, 0.0, -0.1)
                SetEntityCoords(heliz2, movecoords)
                rappelSound()

                if not armed then
                    anim("mp_fib_grab", "rappel_idle", 47)
                    --anim("mp_fib_grab","rappel_jump_b",47)
                end
            else
                if not armed then
                    anim("mp_fib_grab", "rappel_idle", 47)
                end
            end

            AttachEntityToEntityPhysically(PlayerPedId(), heliz2, 1, 28422, 0.0, 0.0, 0.0, 0.0, 0.4, 0.0, 0.0, 0.0,
                GetEntityHeading(PlayerPedId()) + GetGameplayCamRelativeHeading(), 0.0, false, true, true, 1, true)

            if IsPedRagdoll(PlayerPedId()) then
                DetachEntity(PlayerPedId())
                rappelingB = false
            end
        end
        DeleteEntity(heliz2)
        DeleteEntity(heliz)
        DetachEntity(PlayerPedId())
        curCoords = GetEntityCoords(PlayerPedId())
        zcheck = startCoords.z - curCoords.z
        curAnim = "none"
        if zcheck < 2 then
            SetEntityCoords(PlayerPedId(), startCoords)
            anim("mp_fib_grab", "enter_window", 47)
        else
            anim("mp_fib_grab", "enter_window", 47)
        end
        Citizen.Wait(1100)
        rappelJumpSound()

        ClearPedTasks(PlayerPedId())
    end
    DeleteEntity(heliz2)
    DeleteEntity(heliz)
    DeleteRope(curRope)
    DetachEntity(PlayerPedId())
end)

function rappelJumpSound()
    TriggerServerEvent('InteractSound_SV:PlayWithinDistance', 3.0, 'jumpland', 0.3)
end

function rappelSound()
    if rappelSoundPlayed > 340 then
        TriggerServerEvent('InteractSound_SV:PlayWithinDistance', 3.0, 'rapell', 0.2)
        rappelSoundPlayed = 0
    end
end
