local ActiveParticles = {}
local BlacklistedParticles = {}

TriggerEvent("particles:player:ready")

RegisterNetEvent("particle:sync:entity")
TriggerClientEvent("particle:sync:entity", function(serverID, targetID, ptDict, ptName, looped, target, bone, position, duration, ptID)
AddEventHandler("particle:sync:entity", TriggerParticalOnEntity)
    local entity = NetworkGetEntityFromNetworkId(target)

    if IsParticleBlacklisted(ptDict, ptName) then return end

    if type(bone) == "table" then
        local particles = {}

        for _, boneName in ipairs(bone) do
            local particle = promise:new()

            Citizen.CreateThread(function()
                local particleHandle = StartParticleOnEntity(ptDict, ptName, looped, entity, boneName, position.offset, position.rot, position.scale, position.alpha, position.color, position.evolution, duration)
                particle:resolve(particleHandle)
            end)

            particles[#particles + 1] = particle
        end

        if not duration and ptID then
            ActiveParticles[ptID] = particles
        end
    else
        local particleHandle = StartParticleOnEntity(ptDict, ptName, looped, entity, bone, position.offset, position.rot, position.scale, position.alpha, position.color, position.evolution, duration)

        if not duration and ptID then
            ActiveParticles[ptID] = particleHandle
        end
    end
end)

function GetRandomString(lenght)
    local chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    local randomString, stringLenght = '', lenght or 10
    local charTable = {}

    for char in chars:gmatch"." do
        table.insert(charTable, char)
    end

    for i = 1, stringLenght do
        randomString = randomString .. charTable[math.random(1, #charTable)]
    end

    return randomString
end

function TriggerParticleAtCoord(pDict, pName, pLooped, pPosition, pDuration, pPlayers)
    for i, v in ipairs(pPlayers) do
        TriggerClientEvent("particle:sync:coord", v, pDict, pName, pLooped, pPosition, pDuration, nil)
    end
end

function TriggerParticleOnEntity(pDict, pName, pLooped, pTarget, pBone, pPosition, pDuration, pPlayers)
    for i, v in ipairs(pPlayers) do
        TriggerClientEvent("particle:sync:entity", v, pDict, pName, pLooped, pTarget, pBone, pPosition, pDuration, nil)
    end
end

function TriggerParticleOnPlayer(pDict, pName, pLooped, pTarget, pBone, pPosition, pDuration, pPlayers)
    for i, v in ipairs(pPlayers) do
        TriggerClientEvent("particle:sync:player", v, pDict, pName, pLooped, pTarget, pBone, pPosition, pDuration, nil)
    end
end