-- FiveM Heli Cam by mraes
-- Version 1.3 2017-06-12
-- config
local fov_max = 80.0
local fov_min = 10.0  -- max zoom level (smaller fov is more zoom)
local zoomspeed = 5.0 -- camera zoom speed
local speed_lr = 3.0  -- speed by which the camera pans left-right
local speed_ud = 3.0  -- speed by which the camera pans up-down

-- Script starts here
local helicam = false
local polmav_hash = `polmav`
local newsmav_hash = `newsmav`
local fov = (fov_max + fov_min) * 0.5
local vision_state = 0 -- 0 is normal, 1 is nightmode, 2 is thermal vision

local cam = nil
local locked_on_vehicle = nil


local CurrentOverlayText = ""
local CurrentOverlay = true

RegisterUICallback('heli:setOverlayText', function(data, cb)
    cb({
        data = {},
        meta = {
            ok = true,
            message = ''
        }
    })
    Wait(1)
    local elements = { {
        name = "overlayText",
        label = "Text",
        icon = "pencil-alt"
    } }

    local prompt = exports['np-ui']:OpenInputMenu(elements, function(values)
        local textString = tostring(values.overlayText)
        if not textString then
            textString = ''
        end
        return textString:len() >= 0 and textString:len() < 255
    end)
    if not prompt then
        return
    end

    if not prompt.overlayText then
        prompt.overlayText = ''
    end

    CurrentOverlayText = prompt.overlayText
    exports["np-ui"]:sendAppEvent("newscam", {
        text = CurrentOverlayText
    })
end)

RegisterUICallback('heli:toggleOverlay', function(data, cb)
    cb({
        data = {},
        meta = {
            ok = true,
            message = ''
        }
    })
    CurrentOverlay = not CurrentOverlay
    exports["np-ui"]:sendAppEvent("newscam", {
        show = CurrentOverlay
    })
    exports['hud']:sendAppEvent({
        display = not CurrentOverlay
    })
end)

function heliCam()
    local lPed = PlayerPedId()
    local heli = GetVehiclePedIsIn(lPed)
    if IsPlayerInPolmav() or IsPlayerInNewsMav() then
        if GetPedInVehicleSeat(heli, -1) ~= lPed then
            PlaySoundFrontend(-1, "SELECT", "HUD_FRONTEND_DEFAULT_SOUNDSET", false)
            helicam = not helicam
            HelicamThread()
            if IsPlayerInNewsMav() then
                exports["np-ui"]:sendAppEvent("newscam", {
                    show = CurrentOverlay
                })
                exports['hud']:sendAppEvent({
                    display = not CurrentOverlay
                })
            end
        end
    end
end

function heliVision()
    local lPed = PlayerPedId()
    local heli = GetVehiclePedIsIn(lPed)

    if helicam and not IsEntityDead(lPed) and (GetVehiclePedIsIn(lPed) == heli) and IsHeliHighEnough(heli) and
        IsPlayerInPolmav() then
        PlaySoundFrontend(-1, "SELECT", "HUD_FRONTEND_DEFAULT_SOUNDSET", false)
        ChangeVision()
    end
end

function heliSpot()
    local lPed = PlayerPedId()
    local heli = GetVehiclePedIsIn(lPed)

    if GetPedInVehicleSeat(heli, -1) == lPed then
        PlaySoundFrontend(-1, "SELECT", "HUD_FRONTEND_DEFAULT_SOUNDSET", false)
    end
end

function heliLock()
    if helicam and IsPlayerInPolmav() then
        if locked_on_vehicle then
            if DoesEntityExist(locked_on_vehicle) then
                PlaySoundFrontend(-1, "SELECT", "HUD_FRONTEND_DEFAULT_SOUNDSET", false)
                locked_on_vehicle = nil
                StopCamPointing(cam)
            end
        else
            local zoomvalue = (1.0 / (fov_max - fov_min)) * (fov - fov_min)
            CheckInputRotation(cam, zoomvalue)
            local vehicle_detected = GetVehicleInView(cam)
            if DoesEntityExist(vehicle_detected) then
                PlaySoundFrontend(-1, "SELECT", "HUD_FRONTEND_DEFAULT_SOUNDSET", false)
                locked_on_vehicle = vehicle_detected
            end
        end
    end
end

Citizen.CreateThread(function()
    exports["np-keybinds"]:registerKeyMapping("", "Heli", "Cam", "+heliCam", "-heliCam")
    RegisterCommand('+heliCam', heliCam, false)
    RegisterCommand('-heliCam', function()
    end, false)

    exports["np-keybinds"]:registerKeyMapping("", "Heli", "Vision", "+heliVision", "-heliVision")
    RegisterCommand('+heliVision', heliVision, false)
    RegisterCommand('-heliVision', function()
    end, false)

    exports["np-keybinds"]:registerKeyMapping("", "Heli", "Rappel", "+heliRappel", "-heliRappel")
    RegisterCommand('+heliRappel', heliRappel, false)
    RegisterCommand('-heliRappel', function()
    end, false)

    exports["np-keybinds"]:registerKeyMapping("", "Heli", "Spotlight", "+heliSpot", "-heliSpot")
    RegisterCommand('+heliSpot', heliSpot, false)
    RegisterCommand('-heliSpot', function()
    end, false)

    exports["np-keybinds"]:registerKeyMapping("", "Heli", "Lock On", "+heliLock", "-heliLock")
    RegisterCommand('+heliLock', heliLock, false)
    RegisterCommand('-heliLock', function()
    end, false)
end)

local curAnim = "none"
function endanimation()
    ClearPedSecondaryTask(PlayerPedId())
    curAnim = "none"
end

function loadAnimDict(dict)
    while (not HasAnimDictLoaded(dict)) do
        RequestAnimDict(dict)
        Citizen.Wait(5)
    end
end

function getSeatNumber(vehicle)
    myseat = -1
    for i = -1, 10 do
        if GetPedInVehicleSeat(vehicle, -1) == PlayerPedId() then
            myseat = i
        end
    end
    return myseat
end

function isSwat()
    if `s_m_y_swat_01` == GetEntityModel(PlayerPedId()) then
        return true
    else
        return false
    end
end

job = "None"

-- local myJob = exports["isPed"]:isPed("myJob")
RegisterNetEvent("jobmanager:playerBecameJob")
AddEventHandler("jobmanager:playerBecameJob", function(jobpassed)
    job = jobpassed
    if not job then
        job = "None"
    end
end)

function heliRappel()
    local inveh = IsPedInVehicle(PlayerPedId(), currentVehicle, false)
    if isSwat() and not inveh then
        if rappeling then
            helirappel()
        else
            standardrappel()
        end
    end
end

Citizen.CreateThread(function()
    ClearTimecycleModifier()
    RenderScriptCams(false, false, 0, 1, 0)
    SetNightvision(false)
    SetSeethrough(false)
    RopeLoadTextures()

    while not RopeAreTexturesLoaded() do
        Citizen.Wait(1)
    end

    while true do
        Citizen.Wait(1)
        local lPed = PlayerPedId()
        local heli = GetVehiclePedIsIn(lPed)
        if not IsThisModelAHeli(heli) then
            Wait(1000)
        end
        if IsPlayerInPolmav() then
            if IsHeliHighEnough(heli) and isSwat() then
                if IsControlJustReleased(0, toggle_rappel) and GetPedInVehicleSeat(heli, -1) ~= lPed then -- Initiate rappel
                    Citizen.Trace("try to rappel")
                    PlaySoundFrontend(-1, "SELECT", "HUD_FRONTEND_DEFAULT_SOUNDSET", false)
                    TriggerEvent("rappelHeli")
                    TaskRappelFromHeli(PlayerPedId(), 0)
                end
            end
        end
    end
end)

function HelicamThread()
    if not helicam then
        return
    end
    CreateThread(function()
        SetTimecycleModifier("heliGunCam")
        SetTimecycleModifierStrength(0.3)
        local scaleform = RequestScaleformMovie("HELI_CAM")
        while not HasScaleformMovieLoaded(scaleform) do
            Citizen.Wait(0)
        end

        local lPed = PlayerPedId()
        local heli = GetVehiclePedIsIn(lPed)
        cam = CreateCam("DEFAULT_SCRIPTED_FLY_CAMERA", true)
        AttachCamToEntity(cam, heli, 0.0, 0.0, -1.5, true)
        SetCamRot(cam, -45.0, 0.0, GetEntityHeading(heli))
        SetCamFov(cam, fov)
        RenderScriptCams(true, false, 0, 1, 0)
        PushScaleformMovieFunction(scaleform, "SET_CAM_LOGO")
        PushScaleformMovieFunctionParameterInt(IsPlayerInPolmav() and 1 or 0) -- 0 for nothing, 1 for LSPD logo
        PopScaleformMovieFunctionVoid()
        LocalPlayer.state:set('helispotlight', true, true)
        locked_on_vehicle = nil
        while helicam and not IsEntityDead(lPed) and (GetVehiclePedIsIn(lPed) == heli) do
            if IsPlayerInNewsMav() and IsDisabledControlJustReleased(0, 24) then
                SetCursorLocation(0.5, 0.5)
                local context = {}
                context[#context + 1] = {
                    title = "Toggle Overlay",
                    description = "Enabled: " .. tostring(CurrentOverlay),
                    action = "heli:toggleOverlay"
                }
                context[#context + 1] = {
                    title = "Set Overlay Text",
                    description = "Current Text: " .. CurrentOverlayText,
                    action = "heli:setOverlayText"
                }
                exports['np-ui']:showContextMenu(context)
            end

            local camcoords = GetCamCoord(cam)
            local forward_vector = RotAnglesToVec(GetCamRot(cam, 2))
            DrawSpotLightWithShadow(camcoords, forward_vector, 200, 200, 205, 300.0, 15.0, 0.0, 8.0, 1.0, 0)

            SyncSpotlightPosition(forward_vector)

            if locked_on_vehicle and IsPlayerInPolmav() then
                if DoesEntityExist(locked_on_vehicle) then
                    PointCamAtEntity(cam, locked_on_vehicle, 0.0, 0.0, 0.0, true)
                    RenderVehicleInfo(locked_on_vehicle)
                else
                    locked_on_vehicle = nil -- Cam will auto unlock when entity doesn't exist anyway
                    StopCamPointing(cam)
                end
            else
                local zoomvalue = (1.0 / (fov_max - fov_min)) * (fov - fov_min)
                CheckInputRotation(cam, zoomvalue)
                local vehicle_detected = GetVehicleInView(cam)
                if DoesEntityExist(vehicle_detected) and IsPlayerInPolmav() then
                    RenderVehicleInfo(vehicle_detected)
                end
            end
            HandleZoom(cam)
            HideHUDThisFrame()
            PushScaleformMovieFunction(scaleform, "SET_ALT_FOV_HEADING")
            PushScaleformMovieFunctionParameterFloat(GetEntityCoords(heli).z)
            PushScaleformMovieFunctionParameterFloat(zoomvalue)
            PushScaleformMovieFunctionParameterFloat(GetCamRot(cam, 2).z)
            PopScaleformMovieFunctionVoid()
            if IsPlayerInPolmav() then
                DrawScaleformMovieFullscreen(scaleform, 255, 255, 255, 255, 0)
            end
            Citizen.Wait(0)
        end
        helicam = false
        exports["np-ui"]:sendAppEvent("newscam", {
            show = false
        })
        exports['hud']:sendAppEvent({
            display = true
        })
        ClearTimecycleModifier()
        fov = (fov_max + fov_min) * 0.5              -- reset to starting zoom level
        RenderScriptCams(false, false, 0, 1, 0)      -- Return to gameplay camera
        SetScaleformMovieAsNoLongerNeeded(scaleform) -- Cleanly release the scaleform
        StopCamPointing(cam)
        DestroyCam(cam, false)
        SetNightvision(false)
        SetSeethrough(false)
        LocalPlayer.state:set('helispotlight', false, true)
    end)
end

RegisterNetEvent('heli:spotlight')
AddEventHandler('heli:spotlight', function(serverID, state)
    if DoesPlayerExist(serverID) then
        local heli = GetVehiclePedIsIn(GetPlayerPed(GetPlayerFromServerId(serverID)), false)
        SetVehicleSearchlight(heli, state, false)
    end
end)

function IsPlayerInPolmav()
    local lPed = PlayerPedId()
    local vehicle = GetVehiclePedIsIn(lPed)
    return IsVehicleModel(vehicle, polmav_hash)
end

function IsPlayerInNewsMav()
    local lPed = PlayerPedId()
    local vehicle = GetVehiclePedIsIn(lPed)
    return IsVehicleModel(vehicle, newsmav_hash)
end

function IsHeliHighEnough(heli)
    return GetEntityHeightAboveGround(heli) > 5.5
end

function ChangeVision()
    if vision_state == 0 then
        SetNightvision(true)
        vision_state = 1
    elseif vision_state == 1 then
        SetNightvision(false)
        SetSeethrough(true)
        SeethroughSetMaxThickness(1.0)
        vision_state = 2
    else
        SetSeethrough(false)
        vision_state = 0
    end
end

function HideHUDThisFrame()
    HideHelpTextThisFrame()
    HideHudAndRadarThisFrame()
end

function CheckInputRotation(cam, zoomvalue)
    local rightAxisX = GetDisabledControlNormal(0, 220)
    local rightAxisY = GetDisabledControlNormal(0, 221)
    local rotation = GetCamRot(cam, 2)
    if rightAxisX ~= 0.0 or rightAxisY ~= 0.0 then
        new_z = rotation.z + rightAxisX * -1.0 * (speed_ud) * (zoomvalue + 0.1)
        new_x = math.max(math.min(20.0, rotation.x + rightAxisY * -1.0 * (speed_lr) * (zoomvalue + 0.1)), -89.5) -- Clamping at top (cant see top of heli) and at bottom (doesn't glitch out in -90deg)
        SetCamRot(cam, new_x, 0.0, new_z, 2)
    end
end

function HandleZoom(cam)
    if IsControlJustPressed(0, 241) then -- Scrollup
        fov = math.max(fov - zoomspeed, fov_min)
    end
    if IsControlJustPressed(0, 242) then
        fov = math.min(fov + zoomspeed, fov_max) -- ScrollDown
    end
    local current_fov = GetCamFov(cam)
    if math.abs(fov - current_fov) < 0.1 then -- the difference is too small, just set the value directly to avoid unneeded updates to FOV of order 10^-5
        fov = current_fov
    end
    SetCamFov(cam, current_fov + (fov - current_fov) * 0.05) -- Smoothing of camera zoom
end

function GetVehicleInView(cam)
    local coords = GetCamCoord(cam)
    local forward_vector = RotAnglesToVec(GetCamRot(cam, 2))
    -- DrawLine(coords, coords+(forward_vector*100.0), 255,0,0,255) -- debug line to show LOS of cam
    local rayhandle = CastRayPointToPoint(coords, coords + (forward_vector * 200.0), 10,
        GetVehiclePedIsIn(PlayerPedId()), 0)
    local _, _, _, _, entityHit = GetRaycastResult(rayhandle)
    if entityHit > 0 and IsEntityAVehicle(entityHit) then
        return entityHit
    else
        return nil
    end
end

function RenderVehicleInfo(vehicle)
    local model = GetEntityModel(vehicle)
    local vehname = GetLabelText(GetDisplayNameFromVehicleModel(model))
    local licenseplate = GetVehicleNumberPlateText(vehicle)
    SetTextFont(0)
    SetTextProportional(1)
    SetTextScale(0.0, 0.55)
    SetTextColour(255, 255, 255, 255)
    SetTextDropshadow(0, 0, 0, 0, 255)
    SetTextEdge(1, 0, 0, 0, 255)
    SetTextDropShadow()
    SetTextOutline()
    SetTextEntry("STRING")
    AddTextComponentString("Model: " .. vehname .. "\nPlate: " .. licenseplate)
    DrawText(0.45, 0.9)
end

function RotAnglesToVec(rot) -- input vector3
    local z = math.rad(rot.z)
    local x = math.rad(rot.x)
    local num = math.abs(math.cos(x))
    return vector3(-math.sin(z) * num, math.cos(z) * num, math.sin(x))
end
