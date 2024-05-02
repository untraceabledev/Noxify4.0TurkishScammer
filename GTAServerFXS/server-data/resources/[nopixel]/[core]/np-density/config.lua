Config = {}

-- Default Values
Config.populationDensity = 1.0

Config.antiGhostDebug = false
Config.antiGhostYeetVehicles = true
Config.antiGhostScaleX = 10.0
Config.antiGhostScaleY = 5.0

Citizen.CreateThread(function ()
    while not NetworkIsSessionStarted() do Citizen.Wait(0) end

    local resourceConfig = exports['config']:GetModuleConfig('np-density')

    if resourceConfig == nil then return end

    Config = resourceConfig
end)

AddEventHandler('np-config:configLoaded', function (pId, pConfig)
    if (pId ~= 'np-density') then return end

    Config = pConfig
end)

Citizen.CreateThread(function ()
    while not NetworkIsSessionStarted() do Citizen.Wait(0) end

    local resourceConfig = exports['config']:GetModuleConfig('np-vehicles:fuel')
    print("fuel:",json.encode(resourceConfig))
end)