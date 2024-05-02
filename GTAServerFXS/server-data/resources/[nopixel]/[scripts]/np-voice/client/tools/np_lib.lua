NP = {}
NP.isDead = false

myJob = "unemployed"
isJudge = false
isDoctor = false
isNews = false
isDoc = false
isPolice = false
isMedic = false
isDead = false
isInstructorMode = false
isCloaked = false

RegisterNetEvent('np-hud:settings', function(key, value)
    if key ~= 'np-preferences' then
        return
    end
    local newPhoneVolume = value['phone.volume'] * 10
    local newRadioVolume = value['radio.volume'] * 10

    if newPhoneVolume ~= PhoneVolume then
        SetPhoneVolume(value['phone.volume'] * 10)
    end

    if newRadioVolume ~= RadioVolume then
        SetRadioVolume(value['radio.volume'] * 10)
        SetATCRadioVolume(value['radio.volume'] * 10)
    end

    local radioBalance = value['radio.balance']

    exports['np-voice']:SetSubmixBalance('radio', radioBalance)
    exports['np-voice']:SetSubmixBalance('radio_medium_distance', radioBalance)
    exports['np-voice']:SetSubmixBalance('radio_far_distance', radioBalance)
    exports['np-voice']:SetSubmixBalance('atc', radioBalance)
    exports['np-voice']:SetSubmixBalance('drivethru', radioBalance)

    exports['np-voice']:SetSubmixBalance('phone', value['phone.balance'])
end)

AddEventHandler('wounds:changeDeathState', function(state)
    NP.isDead = state
    isDead = state
end)

RegisterNetEvent("jobmanager:playerBecameJob")
AddEventHandler("jobmanager:playerBecameJob", function(job, notify)
    myJob = job

    if not CanUseFrequency(CurrentChannel, nil, myJob) then
        return SetRadioFrequency()
    end
end)

RegisterNetEvent('np-admin:cloakStatus', function (pCloaked)
    isCloaked = pCloaked
end)

function IsEmergency(OverWrite)
    local currentJob = exports["isPed"]:isPed("myjob")
    if OverWrite ~= nil then currentJob = OverWrite end


    if currentJob == "police" then return true end
    if currentJob == "ems" then return true end
    if currentJob == "doctor" then return true end
    if currentJob == "doc" then return true end
    if currentJob == "therapist" then return true end

    return false
end

function CanUseFrequency(pFrequency, pNotify, jobOverWrite)
    if not pFrequency then return false end

    if pFrequency == 0 then return true end

    local hasPDRadio = exports["inventory"]:HasItem("radio", { quantity = 1, quality = 1 })
    local hasCivRadio = exports["inventory"]:HasItem("civradio", { quantity = 1, quality = 1 })

    local frequency = type(pFrequency) == 'table' and pFrequency.id or pFrequency
    if frequency <= 20 and (not hasPDRadio or not IsEmergency(jobOverWrite)) then
        if pNotify then TriggerEvent('DoLongHudText', 'This frequency is encrypted.', 2) end
        return false
    elseif frequency > 20 and not hasCivRadio then
        if pNotify then TriggerEvent('DoLongHudText', 'PD Walkie cannot operate in civ frequencies.', 2) end
        return false
    end

    return true
end

AddEventHandler('playerSpawned', function()
    myJob = exports["isPed"]:isPed("myjob")
    local defaultSettings = exports["np-base"]:getModule("SettingsData"):getSettingsTable() -- Load defaults first
    local initialHudSettings = exports["np-ui"]:GetPreferences()


    local stereo = initialHudSettings['radio.stereo.enabled'] and initialHudSettings['radio.stereo.enabled'] or defaultSettings['tokovoip']['stereoAudio']
    local clicksOutgoing = initialHudSettings['radio.clicks.outgoing.enabled'] and initialHudSettings['radio.clicks.outgoing.enabled'] or defaultSettings['tokovoip']['localClickOn']
    local clicksIncoming = initialHudSettings['radio.clicks.incoming.enabled'] and initialHudSettings['radio.clicks.incoming.enabled'] or defaultSettings['tokovoip']['remoteClickOn']
    local clicksVol = initialHudSettings['radio.clicks.volume'] and initialHudSettings['radio.clicks.volume'] or defaultSettings['tokovoip']['clickVolume']
    local radioVol = initialHudSettings['radio.volume'] and initialHudSettings['radio.volume'] or defaultSettings['tokovoip']['radioVolume']
    local phoneVol = initialHudSettings['phone.volume'] and initialHudSettings['phone.volume'] or defaultSettings['tokovoip']['phoneVolume']
    local radioBal = initialHudSettings['radio.balance'] and initialHudSettings['radio.balance'] or defaultSettings['tokovoip']['radioBalance']
    local phoneBal = initialHudSettings['phone.balance'] and initialHudSettings['phone.balance'] or defaultSettings['tokovoip']['phoneBalance']


    SetRadioVolume(radioVol * 10, true)
    SetATCRadioVolume(radioVol * 10, true)
    SetPhoneVolume(phoneVol * 10)
    exports['np-voice']:SetSubmixBalance('phone', phoneBal)
    exports['np-voice']:SetSubmixBalance('radio', radioBal)
    exports['np-voice']:SetSubmixBalance('radio_medium_distance', radioBal)
    exports['np-voice']:SetSubmixBalance('radio_far_distance', radioBal)
    exports['np-voice']:SetSubmixBalance('atc', radioBal)
    exports['np-voice']:SetSubmixBalance('drivethru', radioBal)

    exports["np-base"]:getModule("SettingsData"):setSettingsTableGlobal({ ["tokovoip"] = {
        ["stereoAudio"] = stereo,
        ["localClickOn"] = clicksOutgoing,
        ["localClickOff"] = clicksOutgoing,
        ["remoteClickOn"] = clicksIncoming,
        ["remoteClickOff"] = clicksIncoming,
        ["clickVolume"] = clicksVol,
        ["radioVolume"] = radioVol,
        ["phoneVolume"] = phoneVol,
        ["radioBalance"] = radioBal,
        ["phoneBalance"] = phoneBal,
        ["releaseDelay"] = 200,
    } }, true)
end)
