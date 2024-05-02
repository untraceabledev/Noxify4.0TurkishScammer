local sleep =  1000 * 60 * 60

-- -- Usage: clearAreaOf everything 50.0
RegisterCommand('clearAreaOf', function(src, args)
    local user = exports["np-base"]:getModule("Player"):GetUser(src)
	local rank = user:getRank()
    local clearType = args[1]
    local radius = args[2] and tonumber(args[2]) or 50.0

    local vectors

    if rank ~= "dev" then return false end

    if not args[3] or not args[4] or not args[5] then
        if src == 0 then return print('Invalid Coords') end

        local playerPed = GetPlayerPed(src)

        vectors = GetEntityCoords(playerPed)
    else
        vectors = vector3(tonumber(args[3]), tonumber(args[4]), tonumber(args[5]))
    end

    if not vectors then return print('Invalid Coords') end
    
    if not radius then return print('Invalid Radius') end

    if clearType == nil or clearType == 'everything' then
        TriggerClientEvent('np-cleanup:clearAreaOfEverything', -1, vectors, radius + 0.0)
    elseif clearType == 'objects' then
        TriggerClientEvent('np-cleanup:clearAreaOfObjects', -1, vectors, radius + 0.0)
    elseif clearType == 'vehicles' then
        TriggerClientEvent('np-cleanup:clearAreaOfVehicles', -1, vectors, radius + 0.0)
    elseif clearType == 'peds' then
        TriggerClientEvent('np-cleanup:clearAreaOfPeds', -1, vectors, radius + 0.0)
    end
end)

--Disabled due to it deleting peoples vehicles.

--[[ Citizen.CreateThread(function()
    while true do
        Citizen.Wait(1000)
        local players = GetPlayers()
        local coords = nil
        for idx, player in ipairs(players) do
            local ped = GetPlayerPed(player)
            coords = GetEntityCoords(ped)
        end
        Citizen.Wait(1000)
        if not coords then return end  
        TriggerClientEvent('np-cleanup:clearAreaOfEverything', -1, coords, 250000 + 0.0)
       Citizen.Wait(sleep) 
    end
 end) ]]