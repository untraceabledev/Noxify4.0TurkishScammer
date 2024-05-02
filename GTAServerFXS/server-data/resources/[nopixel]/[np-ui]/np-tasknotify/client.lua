function OpenGui(clr, msg, time)
    SendNUIMessage({ runProgress = true, colorsent = clr, textsent = msg, fadesent = time })
end

function CloseGui()
    SendNUIMessage({ closeProgress = true })
end

RegisterNetEvent("tasknotify:guiupdate")
AddEventHandler("tasknotify:guiupdate", function(color, message, time)
    OpenGui(color, message, time)
end)

RegisterNetEvent("tasknotify:guiclose")
AddEventHandler("tasknotify:guiclose", function()
    CloseGui()
end)
