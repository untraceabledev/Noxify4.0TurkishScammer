CreateThread(function()


  SetScenarioTypeEnabled("WORLD_VEHICLE_STREETRACE", false)
  SetScenarioTypeEnabled("WORLD_VEHICLE_SALTON_DIRT_BIKE", false)
  SetScenarioTypeEnabled("WORLD_VEHICLE_SALTON", false)
  SetScenarioTypeEnabled("WORLD_VEHICLE_POLICE_NEXT_TO_CAR", false)
  SetScenarioTypeEnabled("WORLD_VEHICLE_POLICE_CAR", false)
  SetScenarioTypeEnabled("WORLD_VEHICLE_POLICE_BIKE", false)
  SetScenarioTypeEnabled("WORLD_VEHICLE_MILITARY_PLANES_SMALL", false)
  SetScenarioTypeEnabled("WORLD_VEHICLE_MILITARY_PLANES_BIG", false)
  SetScenarioTypeEnabled("WORLD_VEHICLE_MECHANIC", false)
  SetScenarioTypeEnabled("WORLD_VEHICLE_EMPTY", false)
  SetScenarioTypeEnabled("WORLD_VEHICLE_BUSINESSMEN", false)
  SetScenarioTypeEnabled("WORLD_VEHICLE_BIKE_OFF_ROAD_RACE", false)

  -- MRPD
  exports["np-polytarget"]:AddBoxZone("officer_sign_in", vector3(441.83, -982.05, 30.69), 0.5, 0.35, {
    heading=12,
    minZ=30.79,
    maxZ=30.84
  })

  -- Sandy PD
  exports["np-polytarget"]:AddBoxZone("officer_sign_in", vector3(1860.96, 3688.42, 34.24), 0.5, 1, {
    heading=300,
    minZ=34.04,
    maxZ=35.84
  })

  -- Paleto PD
  exports["np-polytarget"]:AddBoxZone("officer_sign_in", vector3(-447.36, 6013.06, 32.29), 0.8, 0.8, {
    heading=315,
    minZ=32.24,
    maxZ=32.84
  })

  -- Prison
  exports["np-polytarget"]:AddCircleZone("officer_sign_in", vector3(1840.39, 2578.45, 46.01), 0.55, {
    useZ = true
  })

  -- EMS Central
  exports["np-polytarget"]:AddBoxZone("ems_sign_in", vector3(348.14, -1404.13, 32.5), 0.9, 0.7, {
    heading=320,
    minZ=31.9,
    maxZ=33.1
  })

  -- EMS Sandy
  exports["np-polytarget"]:AddBoxZone("ems_sign_in", vector3(1833.45, 3672.68, 34.16), 0.5, 1, {
    heading=25,
    minZ=33.96,
    maxZ=34.76
  })
  
  -- Parsons
  exports["np-polytarget"]:AddBoxZone("ems_sign_in", vector3(-1526.14, 832.63, 181.59), 1.1, 1.3, {
    heading=0,
    minZ=181.19,
    maxZ=181.59
  })

  while not exports['config']:IsConfigReady() do
    Wait(100)
  end
  local emsEnabled = exports["config"]:GetMiscConfig("jobs.ems.enabled")
  if emsEnabled then
    local volunteerEnabled = exports["config"]:GetMiscConfig("jobs.ems.volunteer.enabled")
    -- EMS Volunteer Central

    if volunteerEnabled then
      exports["np-polytarget"]:AddBoxZone("ems_volunteer_sign_in", vector3(311.93, -1425.62, 29.89), 0.6, 0.6, {
        heading=315,
        minZ=29.29,
        maxZ=30.29
      })
    end
  end

  -- court house
  exports["np-polytarget"]:AddCircleZone("public_services_sign_in", vector3(318.75, -1639.65, 32.53), 0.7, {
    useZ=true,
  })
end)

function CreateBlipsFromConfig(blips)
  for _, item in pairs(blips) do
    if not item.enabled then goto continue end

    item.blip = AddBlipForCoord(vector3(item.coords.x, item.coords.y, item.coords.z))
    SetBlipSprite(item.blip, item.sprite)
    SetBlipScale(item.blip, 0.8)
    SetBlipColour(item.blip, 3)
    SetBlipAsShortRange(item.blip, true)
    BeginTextCommandSetBlipName("STRING")
    AddTextComponentString(item.label)
    EndTextCommandSetBlipName(item.blip)

    :: continue ::
  end
end

function findClosestSpawnPoint(pCurrentPosition)
  local closestDistance = -1
  local closestCoord = pCurrentPosition
  for _, location in ipairs(VEHICLE_SPAWN_LOCATIONS) do
    local distance = #(location - pCurrentPosition)
    if closestDistance == -1 or closestDistance > distance then
      closestDistance = distance
      closestCoord = location
    end
  end
  return closestCoord
end
