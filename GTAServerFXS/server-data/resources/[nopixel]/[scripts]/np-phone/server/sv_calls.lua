ActiveCalls = {}

function FindPlayerIdById(id)
    local users = exports["np-base"]:FetchPlayerData()
    for user, vars in pairs(users) do
        if vars.character then
            if vars.character.id == id then
                return user
            end
        end
    end
end

RPC.register("phone:callStart", function(pSource, pCallNumber, pTargetNumber)
    local user = exports["np-base"]:getModule("Player"):GetUser(pSource)
    local pCallNumber = user:getCurrentCharacter().phone_number
    local pCid = user:getCurrentCharacter().id
    startPhoneCall(pSource, pCid, pCallNumber, pTargetNumber, false)

     local insertId = Await(SQL.execute([[
         INSERT INTO phone_calls (citizenid, number, date, state)
         VALUES (?, ?, ?, ?)
     ]],
     { pCid, pTargetNumber, "test", "isPayphone" }))

    -- if not insertId or insertId < 1 then
    --     return false
    -- end
end)

function PromiseTimeout(time)
    local timeout = promise:new()
    Citizen.SetTimeout(time or 1000, function ()
        timeout:resolve(false)
    end)
    return timeout
end

function startPhoneCall(pSource, pCid, pCallNumber, pTargetNumber, isPayphone)
    local call = {}
    local targetCid = GetCidByPhoneNumber(pTargetNumber)
    local targetId = FindPlayerIdById(targetCid)
    -- make sure to check if receiver is in a call
    print(pSource, pCid, pCallNumber, pTargetNumber, isPayphone)
    -- make sure they are in-city
    if not targetId then
       
       TriggerClientEvent('np-phone:SendNotify', pSource, 'This phone is off :(', 'calls')  
       return
    end

    if tonumber(pCallNumber) == tonumber(pTargetNumber) then
        TriggerClientEvent("phone:call:inactive", pSource, pTargetNumber, nil, true)
        return
    end

    local item = exports["inventory"]:hasEnoughOfItemSv(targetId, 'mobilephone', 1, false, false)
    --local itemData = exports["inventory"]:GetItemsByItemMetaKVsv(targetId, "mobilephone", "undefined", targetCid)
    if not item then 
        print("They dont have a phone dumbass.")
        TriggerClientEvent("phone:call:inactive", pSource, pTargetNumber, nil, true) 
        return
    end

    -- loop thru ActiveCalls, and see if the person
    -- they are calling is in a call. 
    -- if they are
    -- it should say disconnected
    -- just call inactive event
    -- before
    if ActiveCalls then
        for k,v in pairs(ActiveCalls) do
            if tonumber(pTargetNumber) == tonumber(v.caller.number) then
                TriggerClientEvent("phone:call:inactive", pSource, pTargetNumber, nil, true)
                return
            end

            if tonumber(pTargetNumber) == tonumber(v.target.number) then
                TriggerClientEvent("phone:call:inactive", pSource, pTargetNumber, nil, true)
                return
            end
        end
    end

    -- call state [ completed = 0, establishing = 1, active = 2 ]
    call.state = 1

    --call participants
    call.caller = { id = pSource, number = pCallNumber }
    call.target = { id = targetId, number = pTargetNumber }

    --promises for handling connection and disconnection
    call.establish = promise:new()
    call.completed = promise:new()

    local callId = registerCallData(call)

    -- do call receive logic here
    if targetId ~= nil then -- check payphone
        TriggerClientEvent("phone:call:receive", call.target.id, call.caller.number, callId, isPayphone)
    end

    if pSource ~= nil then
        TriggerClientEvent("phone:call:dialing", call.caller.id, call.target.number, callId)
    end

    -- play sound for caller/receiver
    call.target.soundId = exports["np-fx"]:triggerAudio(call.target.id, 1, 2.0, 'ringing', 'DLC_NIKEZ_GENERAL', 'np-fx:sound:PlaySound')
    call.caller.soundId = exports["np-fx"]:triggerAudio(call.caller.id, 1, 0.2, 'dialing', 'DLC_NIKEZ_GENERAL', 'np-fx:sound:PlaySound')
    -- Time before automatically ending if no one answers or hangups
    local timeout = 30000 --PromiseTimeout(30, 1000)
    -- Race between the Promises and then we proceed to establish or complete the call depending of the winner
    promise.first({ call.establish, call.completed }):next(function (establish)
        exports["np-infinity"]:CancelActiveAreaEvent(call.target.id, 'ringing', 'DLC_NIKEZ_GENERAL')
        exports["np-infinity"]:CancelActiveAreaEvent(call.caller.id, 'dialing', 'DLC_NIKEZ_GENERAL')
        if establish then
            establishPhoneCall(callId, isPayphone)
        else
            completePhoneCall(callId)
        end
    end)

    --call.completed:resolve(false)
end

function establishPhoneCall(callId, isPayphone)
    local call = ActiveCalls[callId]
    if call then
        call.state = 2
        if call.target.id ~= nil then
            TriggerClientEvent("phone:call:in-progress", call.target.id, call.caller.number, callId, isPayphone)
        end

        if call.caller.id ~= nil then
            TriggerClientEvent("phone:call:in-progress", call.caller.id, call.target.number, callId, isPayphone)
        end
 
        TriggerEvent("at:voice:phone:server:call:start", tonumber(call.caller.id), tonumber(call.target.id), callId)

        call.completed:next(function()
            completePhoneCall(callId)
        end)
    end
end

function completePhoneCall(callId)
    local call = ActiveCalls[callId]

    if call then 
        --set the call state to completed
        call.state = 0
        --notify the completion to the participants
        if call.target.id ~= nil then
            TriggerClientEvent("phone:call:inactive", call.target.id, call.caller.number, callId)
        end
        --- this has to update the body text instead of making new noti
        if call.caller.id ~= nil then
            TriggerClientEvent("phone:call:inactive", call.caller.id, call.target.number, callId)
        end

        --stop the mumble call 
        TriggerEvent("at:voice:phone:server:call:end", tonumber(call.caller.id), tonumber(call.target.id), callId)
        -- we clear the call data 
        
        clearCallData(callId)
    end
end

RPC.register("phone:callAccept", function(pSource, pCallId)
    return acceptPhoneCall(pCallId)
end)

RPC.register("phone:callEnd", function(pSource, pCallId)
    return endPhoneCall(pCallId)
end)

function acceptPhoneCall(pCallId)
    local call = ActiveCalls[pCallId]
    if call and call.state == 1 then
        call.establish:resolve(true)
    elseif call and call.state == 0 then
        return false, 'Caller Hung up'
    elseif not call then
        return false, 'Invalid Call ID'
    end
    return true, 'Call Established'
end

function endPhoneCall(pCallId)
    local call = ActiveCalls[pCallId]
    if call and call.state == 1 then
        call.completed:resolve(false)
    elseif call and call.state == 2 then
        call.completed:resolve(true)
    elseif not call then
        return false, 'Invalid Call ID'
    end
    return true, 'Call Completed'
end

function registerCallData(callData)
    local callId = #ActiveCalls +1
        ActiveCalls[callId] = callData 
    return callId
end

function clearCallData(callId)
    ActiveCalls[callId] = nil
end

RPC.register("getCharacterCalls", function(pSource, pCid)
    local data = Await(SQL.execute([[
        SELECT *
        FROM phone_calls
        WHERE citizenid = ?
        ORDER BY id DESC
    ]],
    { pCid }))

    if not data then return false, "" end

    return data
end)

function getMyPhoneNumber(pCid)
    if not pCid then return false, "Error while fetching data." end

    local query = [[
        SELECT * FROM `characters` a
        WHERE id = ?
    ]]

    local pResult = Await(SQL.execute(query, {pCid}))
    return pResult[1].phone_number
end

RPC.register("getMyPhoneNumber", function(pSource, pCid)
    local number = GetPhoneNumberByCid(pCid)
    return number
end)

RPC.register("deleteCalls", function(pSource, pCid)
    local deleteCalls = Await(SQL.execute([[
        DELETE FROM phone_calls
        WHERE citizenid = ?
    ]],
    { pCid }))
end)