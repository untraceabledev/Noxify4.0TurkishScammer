local Zones, ZoneEvents, InsideZones, DebugEnabled = {}, {}, {}, false

local function CreateDebugLoop(zone)
    Citizen.CreateThread(function()
        while DebugEnabled and not zone.destroyed do
            UpdateOffsets(zone.entity, zone)

            zone:draw()

            Citizen.Wait(0)
        end
    end)
end

local function AddEntityZone(name, entity, options)
    if not options then options = {} end

    options.name = name

    if not Zones[entity] then
        local zone = EntityZone:Create(entity, options)

        if DebugEnabled then CreateDebugLoop(zone) end

        Zones[entity] = zone
    end

    if not ZoneEvents[entity] then ZoneEvents[entity] = {} end

    local key = options.id and ("%s-%s"):format(name, options.id) or name

    ZoneEvents[entity][key] = options
end

exports("AddEntityZone", AddEntityZone)

local function EmitInOutEvent(pHandle, pIsInside)
    local events = ZoneEvents[pHandle]

    for _, options in pairs(events) do
        local data = options and options.data or nil

        if pIsInside then
            TriggerEvent("np-polyzone:enter", options.name, data, pHandle)
        else
            TriggerEvent("np-polyzone:exit", options.name, data, pHandle)
        end
    end
end

function toggleEntityDebug(enabled)
    if enabled == DebugEnabled then return end

    DebugEnabled = enabled

    if not DebugEnabled then return end

    for _, zone in pairs(Zones) do
        CreateDebugLoop(zone)
    end
end

Citizen.CreateThread(function()
    while true do
        local playerCoords = GetEntityCoords(PlayerPedId())


        for handle, zone in pairs(Zones) do
            local exist = DoesEntityExist(handle)

            if not exist then
                if InsideZones[handle] then
                    EmitInOutEvent(handle, false)
                    InsideZones[handle] = nil
                end

                zone:destroy()

                Zones[handle] = nil

                goto continue
            end

            local isInside = zone:isPointInside(playerCoords)

            if isInside and not InsideZones[handle] then
                InsideZones[handle] = true
                EmitInOutEvent(handle, true)
            elseif not isInside and InsideZones[handle] then
                InsideZones[handle] = nil
                EmitInOutEvent(handle, false)
            end

            :: continue ::
        end

        Citizen.Wait(500)
    end
end)
