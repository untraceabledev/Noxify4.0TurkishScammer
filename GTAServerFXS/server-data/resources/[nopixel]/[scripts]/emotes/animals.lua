local function loadAnimDict(dict)
    while not HasAnimDictLoaded(dict) do
        RequestAnimDict(dict)
        Wait(0)
    end
end

local animsDog = {
    ["dogsit"] = function(ped)
        TaskStartScenarioInPlace(ped, "WORLD_DOG_SITTING_ROTTWEILER", -1, true)
    end,

    ["bark"] = function(ped)
        local animDict = "creatures@rottweiler@amb@world_dog_barking@idle_a"
        local animation = "idle_a"

        loadAnimDict(animDict)
        local animLength = GetAnimDuration(animDict, animation)
        TaskPlayAnim(ped, animDict, animation, 1.0, 1.0, animLength, 0, 0, false, false, false)
    end,

    ["bark2"] = function(ped)
        local animDict = "creatures@rottweiler@melee@streamed_taunts@"
        local animation = "taunt_02"

        loadAnimDict(animDict)
        local animLength = GetAnimDuration(animDict, animation)
        TaskPlayAnim(ped, animDict, animation, 1.0, 1.0, animLength, 0, 0, false, false, false)
    end,

    ["bark3"] = function(ped)
        local animDict = "creatures@rottweiler@melee@streamed_taunts@"
        local animation = "taunt_01"

        loadAnimDict(animDict)
        local animLength = GetAnimDuration(animDict, animation)
        TaskPlayAnim(ped, animDict, animation, 1.0, 1.0, animLength, 0, 0, false, false, false)
    end,

    ["bark4"] = function(ped)
        TaskStartScenarioInPlace(ped, "WORLD_DOG_BARKING_SHEPHERD", -1, true)
    end,

    ["bark5"] = function(ped)
        local animDict = "creatures@rottweiler@melee@streamed_taunts@"
        local animation = "taunt_01"

        loadAnimDict(animDict)
        local animLength = GetAnimDuration(animDict, animation)
        TaskPlayAnim(ped, animDict, animation, 1.0, 1.0, animLength, 48, 0, false, false, false)
    end,

    ["beg"] = function(ped)
        local animDict = "creatures@rottweiler@tricks@"

        loadAnimDict(animDict)
        local sequenceId = OpenSequenceTask()
        TaskPlayAnim(0, animDict, "beg_enter", 8.0, -8.0, -1, 4096, 0, false, false, false)
        TaskPlayAnim(0, animDict, "beg_loop", 8.0, -8.0, -1, 4096, 0, false, false, false)
        TaskPlayAnim(0, animDict, "beg_loop", 8.0, -8.0, -1, 4096, 0, false, false, false)
        TaskPlayAnim(0, animDict, "beg_exit", 8.0, -8.0, -1, 4096, 0, false, false, false)
        CloseSequenceTask(sequenceId)
        TaskPerformSequence(ped, sequenceId)
        ClearSequenceTask()
    end,

    ["paw"] = function(ped)
        local animDict = "creatures@rottweiler@tricks@"

        loadAnimDict(animDict)
        local sequenceId = OpenSequenceTask()
        TaskPlayAnim(0, animDict, "sit_enter", 8.0, -8.0, -1, 4096, 0, false, false, false)
        TaskPlayAnim(0, animDict, "paw_right_enter", 8.0, -8.0, -1, 4096, 0, false, false, false)
        TaskPlayAnim(0, animDict, "paw_right_loop", 8.0, -8.0, -1, 4096, 0, false, false, false)
        TaskPlayAnim(0, animDict, "paw_right_loop", 8.0, -8.0, -1, 4096, 0, false, false, false)
        TaskPlayAnim(0, animDict, "paw_right_exit", 8.0, -8.0, -1, 4096, 0, false, false, false)
        TaskPlayAnim(0, animDict, "sit_exit", 8.0, -8.0, -1, 4096, 0, false, false, false)
        CloseSequenceTask(sequenceId)
        TaskPerformSequence(ped, sequenceId)
        ClearSequenceTask()
    end,

    ["pet"] = function(ped)
        local animDict = "creatures@rottweiler@tricks@"
        local animation = "petting_chop"

        if IsEntityPlayingAnim(ped, animDict, animation, 3) then
            ClearPedSecondaryTask(ped)
        else
            loadAnimDict(animDict)
            local animLength = GetAnimDuration(animDict, animation)
            TaskPlayAnim(ped, animDict, animation, 1.0, 4.0, animLength, 0, 0, false, false, false)
        end
    end,

    ["dump"] = function(ped)
        local animDict = "creatures@rottweiler@move"

        loadAnimDict(animDict)
        local sequenceId = OpenSequenceTask()
        TaskPlayAnim(0, animDict, "dump_enter", 8.0, -8.0, -1, 4096, 0, false, false, false)
        TaskPlayAnim(0, animDict, "dump_loop", 8.0, -8.0, -1, 4096, 0, false, false, false)
        TaskPlayAnim(0, animDict, "dump_exit", 8.0, -8.0, -1, 4096, 0, false, false, false)
        CloseSequenceTask(sequenceId)
        TaskPerformSequence(ped, sequenceId)
        ClearSequenceTask()
    end,

    ["pee"] = function(ped)
        local animDict = "creatures@rottweiler@move"

        loadAnimDict(animDict)
        local sequenceId = OpenSequenceTask()
        TaskPlayAnim(0, animDict, "pee_right_enter", 8.0, -8.0, -1, 4096, 0, false, false, false)
        TaskPlayAnim(0, animDict, "pee_right_idle", 8.0, -8.0, -1, 4096, 0, false, false, false)
        TaskPlayAnim(0, animDict, "pee_right_exit", 8.0, -8.0, -1, 4096, 0, false, false, false)
        CloseSequenceTask(sequenceId)
        TaskPerformSequence(ped, sequenceId)
        ClearSequenceTask()
    end,

    ["indicateahead"] = function(ped)
        local animDict = "creatures@rottweiler@indication@"
        local animation = "indicate_ahead"

        if IsEntityPlayingAnim(ped, animDict, animation, 3) then
            ClearPedSecondaryTask(ped)
        else
            loadAnimDict(animDict)
            local animLength = GetAnimDuration(animDict, animation)
            TaskPlayAnim(ped, animDict, animation, 1.0, 4.0, animLength, 0, 0, false, false, false)
        end
    end,

    ["kennel"] = function(ped)
        local animDict = "creatures@rottweiler@amb@sleep_in_kennel@"

        loadAnimDict(animDict)
        TaskPlayAnim(ped, animDict, "sleep_in_kennel", 1000.0, -8.0, -1, 1, 0, false, false, false)
        --[[ Citizen.CreateThread(function()
            while playing_emote do
                if IsControlJustReleased(0, 38) then
                    TaskPlayAnim(ped, animDict, "exit_kennel", 8.0, -8.0, -1, 0, 0, false, false, false)
                    Wait(8000)
                    endanims(lastanimplayed)
                end
                Wait(0)
            end
        end) ]]
    end,

    ["laydown"] = function(ped)
        local animDict = "creatures@rottweiler@move"
        local animation = "dying"

        if IsEntityPlayingAnim(ped, animDict, animation, 3) then
            ClearPedSecondaryTask(ped)
        else
            loadAnimDict(animDict)
            TaskPlayAnim(ped, animDict, animation, 1.0, -1, -1, 2, 0, false, false, false)
        end
    end,

    ["carsit"] = function(ped)
        local animDict = "creatures@rottweiler@in_vehicle@std_car"
        local playerVeh = GetVehiclePedIsIn(PlayerPedId(), false)
        if playerVeh == 0 then return end

        local vehLayout = GetVehicleLayoutHash(playerVeh);
        if vehLayout == -1965057835 or vehLayout == 919485892 or vehLayout == -1838563680 or vehLayout == 1768419516
            or vehLayout == 1576485197 or vehLayout == 929009548 or vehLayout == -497732145
            or vehLayout == -1659990386 or vehLayout == -662028469 or vehLayout == 1939145032 then
            animDict = "creatures@rottweiler@in_vehicle@van"
        end
        if vehLayout == -2066252141 or vehLayout == 1105669833 or vehLayout == 542797648 or vehLayout == 68566729
            or vehLayout == -1887744178 or vehLayout == -782720499 or vehLayout == -1150063973 or vehLayout == 1630950849
            or vehLayout == -463340997 or vehLayout == 2033852426 then
            animDict = "creatures@rottweiler@in_vehicle@low_car"
        end
        if vehLayout == 434478421 or vehLayout == 1816176348 or vehLayout == 1710903184 or vehLayout == 1663892749 then
            animDict = "creatures@rottweiler@in_vehicle@4x4"
        end

        loadAnimDict(animDict)
        TaskPlayAnim(ped, animDict, "sit", 1000.0, -1000.0, -1, 33, 0, false, false, false)
    end,

    ["carenter"] = function(ped)
        local animDict = "creatures@rottweiler@in_vehicle@std_car"
        local currentTarget = exports['np-target']:GetCurrentEntity()
        local playerVeh = IsModelAVehicle(GetEntityModel(currentTarget)) and currentTarget or 0
        if playerVeh == 0 then return end

        local vehLayout = GetVehicleLayoutHash(playerVeh)
        if vehLayout == -1965057835 or vehLayout == 919485892 or vehLayout == -1838563680 or vehLayout == 1768419516
            or vehLayout == 1576485197 or vehLayout == 929009548 or vehLayout == -497732145
            or vehLayout == -1659990386 or vehLayout == -662028469 or vehLayout == 1939145032 then
            animDict = "creatures@rottweiler@in_vehicle@van"
        end
        if vehLayout == -2066252141 or vehLayout == 1105669833 or vehLayout == 542797648 or vehLayout == 68566729
            or vehLayout == -1887744178 or vehLayout == -782720499 or vehLayout == -1150063973 or vehLayout == 1630950849
            or vehLayout == -463340997 or vehLayout == 2033852426 then
            animDict = "creatures@rottweiler@in_vehicle@low_car"
        end
        if vehLayout == 434478421 or vehLayout == 1816176348 or vehLayout == 1710903184 or vehLayout == 1663892749 then
            animDict = "creatures@rottweiler@in_vehicle@4x4"
        end

        loadAnimDict(animDict)

        local seatBone, doorIndex, seatIndex, zRot = nil, nil, nil, 0.0
        local currentTargetCoords = exports['np-target']:GetCurrentTargetCoords()
        local frontPassengerSideDist = #(currentTargetCoords - GetWorldPositionOfEntityBone(playerVeh, GetEntityBoneIndexByName(playerVeh, "seat_pside_f")))
        local rearPassengerSideDist = #(currentTargetCoords - GetWorldPositionOfEntityBone(playerVeh, GetEntityBoneIndexByName(playerVeh, "seat_pside_r")))
        local rearDriverSideDist = #(currentTargetCoords - GetWorldPositionOfEntityBone(playerVeh, GetEntityBoneIndexByName(playerVeh, "seat_dside_r")))

        if frontPassengerSideDist < rearPassengerSideDist and frontPassengerSideDist < rearDriverSideDist then
            seatBone = "seat_pside_f"
            doorIndex = 1
            seatIndex = 0
        elseif rearPassengerSideDist < rearDriverSideDist then
            seatBone = "seat_pside_r"
            doorIndex = 3
            -- If vehicle doesn't have a seat 3, default to the seat closest to that door.
            seatIndex = IsVehicleSeatFree(playerVeh, 3) and 3 or 2
        else
            seatBone = "seat_dside_r"
            doorIndex = 2
            -- If vehicle doesn't have a seat 3, default to the seat closest to that door.
            seatIndex = IsVehicleSeatFree(playerVeh, 3) and 3 or 1
            zRot = 200.0
        end

        if GetPedInVehicleSeat(playerVeh, seatIndex) ~= 0 then return end

        Sync.SetVehicleDoorOpen(playerVeh, doorIndex, false, false)
        SetPedCanRagdoll(ped, false)
        Wait(300)
        local netScene = NetworkCreateSynchronisedScene(0, 0, 0, 0, 0, zRot, 2, false, false, 1065353216, 0, 1.3)
        NetworkAttachSynchronisedSceneToEntity(netScene, playerVeh, GetEntityBoneIndexByName(playerVeh, seatBone))
        NetworkAddPedToSynchronisedScene(ped, netScene, animDict, "get_in", 1000.0, -8.0, 4.0, 0, 1000.0, 0)
        NetworkStartSynchronisedScene(netScene)
        Wait(2000)
        TaskWarpPedIntoVehicle(ped, playerVeh, seatIndex)
        Wait(100)
        ForcePedAiAndAnimationUpdate(ped, true, true)
        TaskPlayAnim(ped, animDict, "sit", 8.0, -8.0, -1, 1, 0, false, false, false)
        Sync.SetVehicleDoorShut(playerVeh, doorIndex, false)
        Wait(1000)
        SetPedCanRagdoll(ped, true)
    end,

    ["carleave"] = function(ped)
        local animDict = "creatures@rottweiler@in_vehicle@std_car"
        local playerVeh = GetVehiclePedIsIn(PlayerPedId(), false)
        if playerVeh == 0 then return end

        local vehLayout = GetVehicleLayoutHash(playerVeh)
        if vehLayout == -1965057835 or vehLayout == 919485892 or vehLayout == -1838563680 or vehLayout == 1768419516
            or vehLayout == 1576485197 or vehLayout == 929009548 or vehLayout == -497732145
            or vehLayout == -1659990386 or vehLayout == -662028469 or vehLayout == 1939145032 then
            animDict = "creatures@rottweiler@in_vehicle@van"
        end
        if vehLayout == -2066252141 or vehLayout == 1105669833 or vehLayout == 542797648 or vehLayout == 68566729
            or vehLayout == -1887744178 or vehLayout == -782720499 or vehLayout == -1150063973 or vehLayout == 1630950849
            or vehLayout == -463340997 or vehLayout == 2033852426 then
            animDict = "creatures@rottweiler@in_vehicle@low_car"
        end
        if vehLayout == 434478421 or vehLayout == 1816176348 or vehLayout == 1710903184 or vehLayout == 1663892749 then
            animDict = "creatures@rottweiler@in_vehicle@4x4"
        end

        loadAnimDict(animDict)

        local seatBone, doorIndex, zRot = nil, nil, 0.0
        local frontPassengerSidePed = GetPedInVehicleSeat(playerVeh, 0)
        local rearPassengerSidePed = GetPedInVehicleSeat(playerVeh, 2)
        local rearMiddlePed = GetPedInVehicleSeat(playerVeh, 3)

        if frontPassengerSidePed == ped then
            seatBone = "seat_pside_f"
            doorIndex = 1
        elseif rearPassengerSidePed == ped or (rearMiddlePed == ped and rearPassengerSidePed == 0) then
            seatBone = "seat_pside_r"
            doorIndex = 3
        else
            seatBone = "seat_dside_r"
            doorIndex = 2
            zRot = 200.0
        end

        SetPedCanRagdoll(ped, false)
        Sync.SetVehicleDoorOpen(playerVeh, doorIndex, false, false)
        local netScene = NetworkCreateSynchronisedScene(0, 0, 0, 0, 0, zRot, 2, false, false, 1065353216, 0, 1.3)
        NetworkAttachSynchronisedSceneToEntity(netScene, playerVeh, GetEntityBoneIndexByName(playerVeh, seatBone))
        NetworkAddPedToSynchronisedScene(ped, netScene, animDict, "get_out", 1000.0, -8.0, 4.0, 0, 1000.0, 0)
        NetworkStartSynchronisedScene(netScene)
        TaskLeaveVehicle(ped, playerVeh, 16)
        ForcePedAiAndAnimationUpdate(ped, true, true)
        Wait(1500)
        ForcePedAiAndAnimationUpdate(ped, true, true)
        Sync.SetVehicleDoorShut(playerVeh, doorIndex, false)
        ClearPedTasks(ped)
        Wait(4000)
        SetPedCanRagdoll(ped, true)
    end,
}

local animsSmallDog = {
    ["dogsit"] = function(ped)
        TaskStartScenarioInPlace(ped, "WORLD_DOG_SITTING_SMALL", -1, true)
    end,

    ["bark"] = function(ped)
        local animDict = "creatures@pug@amb@world_dog_barking@idle_a"
        local animation = "idle_a"

        loadAnimDict(animDict)
        local animLength = GetAnimDuration(animDict, animation)
        TaskPlayAnim(ped, animDict, animation, 1.0, 1.0, animLength, 0, 0, false, false, false)
    end,

    ["laydown"] = function(ped)
        local animDict = "creatures@pug@move"
        local animation = "dying"

        if IsEntityPlayingAnim(ped, animDict, animation, 3) then
            ClearPedSecondaryTask(ped)
        else
            loadAnimDict(animDict)
            TaskPlayAnim(ped, animDict, animation, 1.0, -1, -1, 2, 0, false, false, false)
        end
    end,
}

local animsCat = {
    ["catsleep"] = function(ped)
        local animDict = "creatures@cat@amb@world_cat_sleeping_ground@enter"
        local animation = "enter"

        if IsPedArmed(ped, 7) then
            TriggerEvent("actionbar:setEmptyHanded")
        end

        if IsEntityPlayingAnim(ped, animDict, animation, 3) then
            ClearPedSecondaryTask(ped)
        else
            loadAnimDict(animDict)
            TaskPlayAnim(PlayerPedId(), animDict, animation, 1.0, -1, -1, 2, 0, false, false, false)
        end
    end,

    ["catsit"] = function(ped)
        local animDict = "creatures@cat@amb@world_cat_sleeping_ledge@idle_a"
        local animation = "idle_a"

        if IsPedArmed(ped, 7) then
            TriggerEvent("actionbar:setEmptyHanded")
        end

        if IsEntityPlayingAnim(ped, animDict, animation, 3) then
            ClearPedSecondaryTask(ped)
        else
            loadAnimDict(animDict)
            TaskPlayAnim(PlayerPedId(), animDict, animation, 1.0, -1, -1, 2, 0, false, false, false)
        end
    end,

    ["catstretch"] = function(ped)
        local animDict = "creatures@cat@amb@peyote@enter"
        local animation = "enter"

        if IsPedArmed(ped, 7) then
            TriggerEvent("actionbar:setEmptyHanded")
        end

        if IsEntityPlayingAnim(ped, animDict, animation, 3) then
            ClearPedSecondaryTask(ped)
        else
            loadAnimDict(animDict)
            TaskPlayAnim(PlayerPedId(), animDict, animation, 1.0, -1, -1, 2, 0, false, false, false)
        end
    end,
}

local animsBigCat = {
    ["bigcatpace"] = function(ped)
        local animDict = "anim@scripted@island@hs4_scope_cctv_p1@panther@"
        local animation = "pace_v2"

        if IsPedArmed(ped, 7) then
            TriggerEvent("actionbar:setEmptyHanded")
        end

        if IsEntityPlayingAnim(ped, animDict, animation, 3) then
            ClearPedSecondaryTask(ped)
        else
            loadAnimDict(animDict)
            TaskPlayAnim(PlayerPedId(), animDict, animation, 1.0, -1, -1, 2, 0, false, false, false)
        end
    end,

    ["bigcatrest"] = function(ped)
        TaskStartScenarioInPlace(ped, "WORLD_MOUNTAIN_LION_REST", -1, true)
    end,

    ["bigcatrest2"] = function(ped)
        local animDict = "anim@scripted@island@hs4_scope_cctv_p1@panther@"
        local animation = "rest_base"

        if IsPedArmed(ped, 7) then
            TriggerEvent("actionbar:setEmptyHanded")
        end

        if IsEntityPlayingAnim(ped, animDict, animation, 3) then
            ClearPedSecondaryTask(ped)
        else
            loadAnimDict(animDict)
            TaskPlayAnim(PlayerPedId(), animDict, animation, 1.0, -1, -1, 2, 0, false, false, false)
        end
    end,

    ["bigcatrest3"] = function(ped)
        local animDict = "anim@scripted@island@hs4_scope_cctv_p1@panther@"
        local animation = "rest_front"

        if IsPedArmed(ped, 7) then
            TriggerEvent("actionbar:setEmptyHanded")
        end

        if IsEntityPlayingAnim(ped, animDict, animation, 3) then
            ClearPedSecondaryTask(ped)
        else
            loadAnimDict(animDict)
            TaskPlayAnim(PlayerPedId(), animDict, animation, 1.0, -1, -1, 2, 0, false, false, false)
        end
    end,

    ["bigcatrest4"] = function(ped)
        local animDict = "anim@scripted@island@hs4_scope_cctv_p1@panther@"
        local animation = "rest_left"

        if IsPedArmed(ped, 7) then
            TriggerEvent("actionbar:setEmptyHanded")
        end

        if IsEntityPlayingAnim(ped, animDict, animation, 3) then
            ClearPedSecondaryTask(ped)
        else
            loadAnimDict(animDict)
            TaskPlayAnim(PlayerPedId(), animDict, animation, 1.0, -1, -1, 2, 0, false, false, false)
        end
    end,

    ["bigcatrest5"] = function(ped)
        local animDict = "creatures@cougar@amb@world_cougar_rest@idle_a"
        local animation = "idle_a"

        if IsPedArmed(ped, 7) then
            TriggerEvent("actionbar:setEmptyHanded")
        end

        if IsEntityPlayingAnim(ped, animDict, animation, 3) then
            ClearPedSecondaryTask(ped)
        else
            loadAnimDict(animDict)
            TaskPlayAnim(PlayerPedId(), animDict, animation, 1.0, -1, -1, 2, 0, false, false, false)
        end
    end,

    ["bigcatvehicle"] = function(ped)
        local animDict = "creatures@retriever@amb@world_dog_sitting@idle_a"
        local animation = "idle_a"

        if IsPedArmed(ped, 7) then
            TriggerEvent("actionbar:setEmptyHanded")
        end

        if IsEntityPlayingAnim(ped, animDict, animation, 3) then
            ClearPedSecondaryTask(ped)
        else
            loadAnimDict(animDict)
            TaskPlayAnim(PlayerPedId(), animDict, animation, 1.0, -1, -1, 2, 0, false, false, false)
        end
    end,

    ["bigcatattack"] = function(ped)
        local animDict = "creatures@cougar@melee@streamed_core@"
        local animation = "ground_attack_0"

        if IsPedArmed(ped, 7) then
            TriggerEvent("actionbar:setEmptyHanded")
        end

        if IsEntityPlayingAnim(ped, animDict, animation, 3) then
            ClearPedSecondaryTask(ped)
        else
            loadAnimDict(animDict)
            TaskPlayAnim(PlayerPedId(), animDict, animation, 1.0, -1, -1, 2, 0, false, false, false)
            Wait(2800)
            ClearPedTasks(ped)
        end
    end,

    ["bigcatdead"] = function(ped)
        local animDict = "creatures@cougar@move"
        local animation = "dead_right"

        if IsPedArmed(ped, 7) then
            TriggerEvent("actionbar:setEmptyHanded")
        end

        if IsEntityPlayingAnim(ped, animDict, animation, 3) then
            ClearPedSecondaryTask(ped)
        else
            loadAnimDict(animDict)
            TaskPlayAnim(PlayerPedId(), animDict, animation, 1.0, -1, -1, 2, 0, false, false, false)
        end
    end,

    ["laydown"] = function(ped)
        local animDict = "creatures@cougar@move"
        local animation = "dying"

        if IsEntityPlayingAnim(ped, animDict, animation, 3) then
            ClearPedSecondaryTask(ped)
        else
            loadAnimDict(animDict)
            TaskPlayAnim(ped, animDict, animation, 1.0, -1, -1, 2, 0, false, false, false)
        end
    end,
}

local animsCoyote = {
    ["coyoterest"] = function(ped)
        TaskStartScenarioInPlace(ped, "WORLD_COYOTE_REST", -1, true)
    end,

    ["coyotehowl"] = function(ped)
        TaskStartScenarioInPlace(ped, "WORLD_COYOTE_HOWL", -1, true)
    end,

    ["laydown"] = function(ped)
        local animDict = "creatures@coyote@move"
        local animation = "dying"

        if IsEntityPlayingAnim(ped, animDict, animation, 3) then
            ClearPedSecondaryTask(ped)
        else
            loadAnimDict(animDict)
            TaskPlayAnim(ped, animDict, animation, 1.0, -1, -1, 2, 0, false, false, false)
        end
    end,
}

local animsDeer = {
    ["deergraze"] = function(ped)
        TaskStartScenarioInPlace(ped, "WORLD_DEER_GRAZING", -1, true)
    end,
    ["laydown"] = function(ped)
        local animDict = "creatures@deer@move"
        local animation = "dying"

        if IsEntityPlayingAnim(ped, animDict, animation, 3) then
            ClearPedSecondaryTask(ped)
        else
            loadAnimDict(animDict)
            TaskPlayAnim(ped, animDict, animation, 1.0, -1, -1, 2, 0, false, false, false)
        end
    end,
}

local animsBear = {
    ["sit"] = function(ped)
        local dictName = 'bear@animation'
        local animName = 'bearsquat'

        if IsEntityPlayingAnim(ped, dictName, animName, 3) then
            ClearPedSecondaryTask(ped)
        else
            loadAnimDict(dictName)
            TaskPlayAnim(PlayerPedId(), dictName, animName, 2.0, 2.0, -1, 2, 0.0, false, false, false)
        end
    end,
    ["salute"] = function(ped)
        local dictName = "bear@animation"
        local animName = "bearsalute"

        if IsEntityPlayingAnim(ped, dictName, animName, 3) then
            ClearPedSecondaryTask(ped)
        else
            loadAnimDict(dictName)
            TaskPlayAnim(PlayerPedId(), dictName, animName, 2.0, 2.0, -1, 2, 0.0, false, false, false)
        end
    end,
    ["dance"] = function(ped)
        local dictName = "bear@animation"
        local animName = "beardance"

        if IsEntityPlayingAnim(ped, dictName, animName, 3) then
            ClearPedSecondaryTask(ped)
        else
            loadAnimDict(dictName)
            TaskPlayAnim(PlayerPedId(), dictName, animName, 2.0, 2.0, -1, 1, 0.0, false, false, false)
        end
    end,
    ["yes"] = function(ped)
        local dictName = "bear@animation"
        local animName = "bearnod"

        if IsEntityPlayingAnim(ped, dictName, animName, 3) then
            ClearPedSecondaryTask(ped)
        else
            loadAnimDict(dictName)
            TaskPlayAnim(PlayerPedId(), dictName, animName, 2.0, 2.0, -1, 1, 0.0, false, false, false)
        end
    end,
    ["no"] = function(ped)
        local dictName = "bear@animation"
        local animName = "bearnopers"

        if IsEntityPlayingAnim(ped, dictName, animName, 3) then
            ClearPedSecondaryTask(ped)
        else
            loadAnimDict(dictName)
            TaskPlayAnim(PlayerPedId(), dictName, animName, 2.0, 2.0, -1, 1, 0.0, false, false, false)
        end
    end,
    ["wave"] = function(ped)
        local dictName = "bear@animation"
        local animName = "bearwave"

        if IsEntityPlayingAnim(ped, dictName, animName, 3) then
            ClearPedSecondaryTask(ped)
        else
            loadAnimDict(dictName)
            TaskPlayAnim(PlayerPedId(), dictName, animName, 2.0, 2.0, -1, 0, 0.0, false, false, false)
        end
    end,
    ["fall"] = function(ped)
        local dictName = "bear@animation"
        local animName = "bearfalling"

        if IsEntityPlayingAnim(ped, dictName, animName, 3) then
            ClearPedSecondaryTask(ped)
        else
            loadAnimDict(dictName)
            TaskPlayAnim(PlayerPedId(), dictName, animName, 2.0, 2.0, -1, 2, 0.0, false, false, false)
        end
    end,
    ["getup"] = function(ped)
        local dictName = "creatures@deer@getup"
        local animName = "getup_l"

        if IsEntityPlayingAnim(ped, dictName, animName, 3) then
            ClearPedSecondaryTask(ped)
        else
            loadAnimDict(dictName)
            TaskPlayAnim(PlayerPedId(), dictName, animName, 2.0, 2.0, -1, 0, 0.0, false, false, false)
        end
    end,
}

local modelsList = {
    dogs = {
        anims = animsDog,
        models = {
            [`a_c_shepherd`] = true,
            [`a_c_retriever`] = true,
            [`a_c_rottweiler`] = true,
            [`a_c_husky`] = true,
            [`a_c_chop`] = true,
            [`a_c_shepherd_np`] = true,
            [`a_c_husky_np`] = true,
            [`a_c_chop_np`] = true,
            [`a_c_pit_np`] = true,
            [`a_c_retriever_np`] = true,
        }
    },
    smallDogs = {
        anims = animsSmallDog,
        models = {
            [`a_c_westy`] = true,
            [`a_c_westy_np`] = true,
            [`a_c_pug`] = true,
            [`a_c_pug_np`] = true,
            [`a_c_poodle`] = true,
        }
    },
    cats = {
        anims = animsCat,
        models = {
            [`a_c_cat_01`] = true,
            [`a_c_racoon_01`] = true,
        }
    },
    bigcats = {
        anims = animsBigCat,
        models = {
            [`a_c_panther`] = true,
            [`a_c_mtlion`] = true,
            [`a_c_leopard`] = true,
        }
    },
    deerlikeModels = {
        anims = animsDeer,
        models = {
            [`a_c_deer`] = true,
            [`a_c_horse`] = true
        }
    }
}

exports("GetAnimalEmotes", function()
    local ped = PlayerPedId()
    local model = GetEntityModel(ped)
    local _, isAnimalModel = pcall(function() return exports["np-character"]:isAnimalModel(model) end)
    if not isAnimalModel then return false end

    for _, list in pairs(modelsList) do
        if list.models[model] then
            local newAnims = {}
            for k, v in pairs(list.anims) do
                newAnims[#newAnims + 1] = {
                    id = k,
                    label = k,
                    category = "animals",
                    action = v,
                }
            end
            return newAnims
        end
    end

    return false
end)
