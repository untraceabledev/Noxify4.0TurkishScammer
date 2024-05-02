RegisterServerEvent("np-signin:duty")
AddEventHandler("np-signin:duty", function(pJobType, pSrc)
    local src = (pSrc == nil and source or pSrc)
    local user = exports["np-base"]:getModule("Player"):GetUser(src)
    local jobs = exports["np-base"]:getModule("JobManager")
    if pJobType == nil then pJobType = "police" end
    jobs:SetJob(user, pJobType, false, function()
        if pJobType == "police" then
            TriggerClientEvent("DoLongHudText", src, "10-41 and Restocked.", 17)
            TriggerClientEvent("startSpeedo", src)
            TriggerClientEvent("nowCopGarage", src, pJobType)
        elseif pJobType == "doc" then
            TriggerClientEvent("DoLongHudText", src, "10-41 Signed in as DOC.", 17)
            TriggerClientEvent("nowCopGarage", src, pJobType)
        elseif pJobType == "ems" then
            TriggerClientEvent("DoLongHudText", src, "10-41 Signed in as EMS.", 17)
            TriggerClientEvent("hasSignedOnEms",src)
            TriggerClientEvent("police:officerOnDuty", src)
        elseif pJobType == "judge" then
            TriggerClientEvent("1sJudge",src)
            Wait(1000)
            TriggerEvent("isJudge",src)
        elseif pJobType == "doctor" then
            TriggerClientEvent("1sDoctor",src)
            Wait(1000)
            TriggerEvent("isDoctor",src)
        elseif pJobType == "therapist" then
            TriggerClientEvent("isTherapist",src)
            Wait(1000)
            TriggerEvent("isTherapist",src)
        else
            TriggerClientEvent("DoLongHudText", src, ("You are now signed in as %s"):format(pJobType), 17)
        end
    end)
end)