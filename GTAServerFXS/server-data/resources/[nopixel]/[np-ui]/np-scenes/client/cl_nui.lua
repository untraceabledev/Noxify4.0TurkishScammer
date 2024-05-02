local ActiveEntries = {}

local ResultionX, ResultionY = GetScreenResolution()

local isNUIRenderEnabled, isPeeking = false, false

function AddStaticDrawEntry(pUID, pText, pX, pY, pZ, pOptions, pResource)
    if not pUID or not pText or not pX or not pY or not pZ then return end

    local options = pOptions or {}

    local entry = {
        uid = pUID,
        type = "static",
        text = pText,
        options = options,
        resource = pResource,
    }

    SendNUIMessage({ type = "add", data = entry })

    entry.x = pX
    entry.y = pY
    entry.z = pZ

    ActiveEntries[pUID] = entry
end

NPX.Events.onNet("np-scenes:nui:addStaticEntry", AddStaticDrawEntry)

exports("AddStaticDrawEntry", function (pText, pX, pY, pZ, pOptions)
    local uid = uuidv4()

    local resource = GetInvokingResource()

    AddStaticDrawEntry(uid, pText, pX, pY, pZ, pOptions, resource)

    return uid
end)

function GetPlayerDrawCount(pServerId)
    local count = 0

    for _, entry in pairs(ActiveEntries) do
        if entry.type == "player" and entry.serverId == pServerId then
            count = count + 1
        end
    end

    return count
end

function AddPlayerDrawEntry(pUID, pText, pServerId, pOptions, pResource)
    if not pUID or not pText or not pServerId then return end

    local options = pOptions or {}

    local entry = {
        uid = pUID,
        type = "player",
        text = pText,
        serverId = pServerId,
        options = options,
        count = GetPlayerDrawCount(pServerId),
        resource = pResource,
    }

    SendNUIMessage({ type = "add", data = entry })

    ActiveEntries[pUID] = entry
end

NPX.Events.onNet("np-scenes:nui:addPlayerEntry", AddPlayerDrawEntry)

exports("AddPlayerDrawEntry", function (pText, pServerId, pOptions)
    local uid = uuidv4()

    local resource = GetInvokingResource()

    AddPlayerDrawEntry(uid, pText, pServerId, pOptions, resource)

    return uid
end)

function RemoveDrawEntry(pUID)
    if not ActiveEntries[pUID] then return end

    ActiveEntries[pUID] = nil

    SendNUIMessage({ type = "remove", data = { uid = pUID } })
end

NPX.Events.onNet("np-scenes:nui:removeEntry", RemoveDrawEntry)

exports("RemoveDrawEntry", RemoveDrawEntry)

function StartDrawCheckThread()
    Citizen.CreateThread(function()
        while isNUIRenderEnabled do
            local playerPed = PlayerPedId()
            local playerCoords = GetEntityCoords(playerPed)

            ResultionX, ResultionY = GetActiveScreenResolution()

            isPeeking = exports['np-interact']:IsPeeking()

            local update = {}

            for uid, entry in pairs(ActiveEntries) do
                if not entry then goto continue end

                local options = entry.options or {}

                local entryCoords = nil

                if entry.type == "player" then
                    local ped = nil

                    if entry.ped then
                        local exist = DoesEntityExist(entry.ped)

                        if not exist then
                            entry.ped = nil
                        else
                            ped = entry.ped
                        end
                    else
                        local playerId = GetPlayerFromServerId(entry.serverId)

                        local handle = playerId ~= -1 and GetPlayerPed(playerId) or nil

                        ped = (handle and DoesEntityExist(handle)) and handle or nil
                    end

                    if not ped then goto continue end

                    entry.ped = ped

                    entryCoords = GetEntityCoords(ped)
                elseif entry.type == "static" then
                    entryCoords = vector3(entry.x, entry.y, entry.z)
                end

                local distance = entryCoords and #(playerCoords - entryCoords) or 9999.0

                local inDistance = distance <= (options.distance or 5.0)

                if inDistance and not entry.drawing then
                    entry.drawing = true
                    update[#update+1] = { uid = uid, drawing = true }
                elseif not inDistance and entry.drawing then
                    entry.drawing = false
                    update[#update+1] = { uid = uid, drawing = false }
                end

                :: continue ::
            end

            if #update > 0 then
                SendNUIMessage({ type = "draw", data = update })
            end

            Citizen.Wait(250)
        end
    end)
end

function StartDrawingThread()
    Citizen.CreateThread(function()
        while true do
            local idle = 100

            local camFOV =  (1 / GetGameplayCamFov()) * 100

            local camCoords = GetGameplayCamCoord()

            local update = {}

            for uid, entry in pairs(ActiveEntries) do
                if not entry or not entry.drawing then goto continue end

                local options = entry.options or {}

                local entryCoords = nil

                if entry.type == "player" and entry.ped then
                    local coords = GetEntityCoords(entry.ped)

                    entryCoords = vector3(coords.x, coords.y, coords.z + (entry.count * 0.25))
                elseif entry.type == "static" then
                    entryCoords = vector3(entry.x, entry.y, entry.z)
                end

                if not entryCoords then goto continue end

                local onScreen, screenX, screenY = GetScreenCoordFromWorldCoord(entryCoords.x, entryCoords.y, entryCoords.z)

                if options.peekOnly and not isPeeking then
                    onScreen = false
                end

                if onScreen then
                    local drawX = (screenX * ResultionX)

                    local drawY = (screenY * ResultionY)

                    local camDist = #(camCoords - entryCoords)

                    local scale = (3 / camDist) * camFOV

                    entry.onScreen = true

                    update[#update+1] = { uid = uid, x = drawX, y = drawY, scale = scale, onScreen = onScreen }
                elseif not onScreen and entry.onScreen then
                    entry.onScreen = false

                    update[#update+1] = { uid = uid, onScreen = false }
                end

                :: continue ::
            end

            if #update > 0 then
                idle = 0

                SendNUIMessage({ type = "update", data = update })
            end

            Citizen.Wait(idle)
        end
    end)
end

AddEventHandler("onClientResourceStart", function (resourceName)
    if resourceName ~= GetCurrentResourceName() then return end

    local enabled = exports["config"]:GetMiscConfig("3dtext.nui.render")

    isNUIRenderEnabled = enabled

    if not enabled then return end

    local entries = Await(NPX.Procedures.execute("np-scenes:nui:fetchActiveEntries"))

    for _, entry in pairs(entries) do
        if entry.type == "static" then
            AddStaticDrawEntry(entry.uid, entry.text, entry.x, entry.y, entry.z, entry.options, entry.resource)
        elseif entry.type == "player" then
            AddPlayerDrawEntry(entry.uid, entry.text, entry.serverId, entry.options, entry.resource)
        end
    end

    StartDrawCheckThread()

    StartDrawingThread()
end)

AddEventHandler("np-config:configLoaded", function (configId, config)
    if configId ~= "misc" then return end

    local enabled = config["3dtext.nui.render"]

    if isNUIRenderEnabled == enabled then return end

    isNUIRenderEnabled = enabled

    ActiveEntries = {}

    SendNUIMessage({ type = "clear" })

    if not enabled then return end

    local entries = Await(NPX.Procedures.execute("np-scenes:nui:fetchActiveEntries"))

    for _, entry in pairs(entries) do
        if entry.type == "static" then
            AddStaticDrawEntry(entry.uid, entry.text, entry.x, entry.y, entry.z, entry.options, entry.resource)
        elseif entry.type == "player" then
            AddPlayerDrawEntry(entry.uid, entry.text, entry.serverId, entry.options, entry.resource)
        end
    end

    StartDrawCheckThread()

    StartDrawingThread()
end)

AddEventHandler("onClientResourceStop", function (resourceName)
    for uid, entry in pairs(ActiveEntries) do
        if entry.resource == resourceName then
            RemoveDrawEntry(uid)
        end
    end
end)

