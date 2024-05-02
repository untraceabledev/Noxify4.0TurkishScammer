local InputRequests, InputCount = {}, 0

RegisterNUICallback('np-ui:applicationClosed', function(data, cb)
    if (data.name ~= 'textbox' or data.callbackUrl ~= 'np-ui:inputResponse') then return end

    local request = InputRequests[data.key]

    if (not request) then return end

    request.response:resolve(nil)

    InputRequests[data.key] = nil
end)

RegisterNUICallback('np-ui:inputResponse', function(data, cb)
    cb({ data = {}, meta = { ok = true, message = "done" } })

    local request = InputRequests[data.key]

    if (not request) then return end

    local success = request.validation == nil and true or request.validation(data.values)

    if (not success) then return end

    request.response:resolve(data.values)

    InputRequests[data.key] = nil

    exports['np-ui']:closeApplication('textbox')
end)

function OpenInputMenu(pEntries, pValidation)
    local inputId = InputCount + 1

    InputCount = inputId

    local response = promise:new()

    InputRequests[inputId] = { response = response, validation = pValidation}

    exports['np-ui']:openApplication('textbox', {
        callbackUrl = 'np-ui:inputResponse',
        key = inputId,
        items = pEntries,
        show = true,
    })

    return Citizen.Await(response)
end

exports('OpenInputMenu', OpenInputMenu)

--

local ContextRequests, ContextCount = {}, 0

RegisterNUICallback('np-ui:applicationClosed', function(data, cb)
    if (data.name ~= 'contextmenu') then return end

    local request = ContextRequests[ContextCount]

    if (not request) then return end

    request.response:resolve(nil)

    ContextRequests[ContextCount] = nil
end)

RegisterNUICallback('np-ui:contextResponse', function(data, cb)
    cb({ data = {}, meta = { ok = true, message = "done" } })

    local request = ContextRequests[data.key.inputId]

    if (not request) then return end

    local success = request.validation == nil and true or request.validation(data.values)

    if (not success) then return end

    request.response:resolve(data.key.key)

    ContextRequests[data.key] = nil

    exports['np-ui']:hideContextMenu()
end)

function OpenContextMenu(pEntries, pValidation)
    local inputId = ContextCount + 1

    ContextCount = inputId

    local response = promise:new()

    ContextRequests[inputId] = { response = response, validation = pValidation}

    local entries = {}
    function addEntryAction(newEntry)
        if newEntry.children then
            for _, newEntryInner in pairs(newEntry.children) do
                addEntryAction(newEntryInner)
            end
        else
            newEntry.action = 'np-ui:contextResponse'
            newEntry.key = { inputId = inputId, key = newEntry.key }
        end
    end
    for _, entry in pairs(pEntries) do
        local newEntry = entry;
        addEntryAction(newEntry)
        entries[#entries + 1] = newEntry
    end
    exports['np-ui']:showContextMenu(entries)

    return Citizen.Await(response)
end

exports('OpenContextMenu', OpenContextMenu)
