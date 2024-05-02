local isPublic = false

-- function name should be lowercase
function getPedsWithRandomSpawnPoints()
    local peds = 0

    for i in pairs(Generic.NPCS) do
        if Generic.NPCS[i].position.random then
            peds = peds + 1
        end
    end

    return peds
end

RegisterServerEvent("np-npcs:location:fetch")
AddEventHandler("np-npcs:location:fetch", function()   
    local src = source
    -- Peds with random locations
    TriggerClientEvent("np-npcs:set:ped", src, Generic.NPCS)
end)

Citizen.CreateThread(function()
    -- if #Generic.SpawnLocations < getPedsWithRandomSpawnPoints() then print("There are more NPC's than spawnPoints...") return end
    for _, npc in ipairs(Generic.NPCS) do
        if Generic.NPCS[_].position.random then
            Generic.NPCS[_].position.coords = Generic.SpawnLocations[_].xyz
            Generic.NPCS[_].position.heading = Generic.SpawnLocations[_].w
        end
    end

    -- Peds
    GenerateShopKeepers()
    if isPublic then

    end
    GenerateWeaponShopKeepers()
    GenerateToolShopKeepers()
    GenerateLicenseVendors()
end)

function GenerateShopKeepers()
    for _, location in ipairs(Generic.ShopKeeperLocations) do
        Generic.NPCS[#Generic.NPCS + 1] = {
            id = "shop_keeper_" .. _,
            name = ("Shop Keeper %s"):format(_),
            pedType = 4,
            model = "mp_m_shopkeep_01",
            scenario = "WORLD_HUMAN_STAND_MOBILE",
            networked = false,
            distance = 25.0,
            position = {
                coords = location.xyz,
                heading = location.w,
                random = false
            },
            appearance = nil,
            settings = {
                { mode = "invincible", active = true },
                { mode = "ignore", active = true },
                { mode = "freeze", active = true },
            },
            flags = {
                ['isNPC'] = true,
                ['isShopKeeper'] = true,
            },
            blip = {
                sprite = 52,
                color = 2,
                scale = 0.7,
                short = true,
                text = "24/7 Store",
            },
        }
    end
end

function GenerateLicenseVendors()
    for _, location in ipairs(Generic.LicenseBuyLocations) do
        Generic.NPCS[#Generic.NPCS + 1] = {
            id = "npc_license_keeper_" .. _,
            name = ("vendor license keeper %s"):format(_),
            pedType = 4,
            model = "a_f_y_business_04",
            networked = false,
            distance = 25.0,
            position = {
                coords = location.xyz,
                heading = location.w,
                random = false
            },
            appearance = nil,
            settings = {
                { mode = "invincible", active = true },
                { mode = "ignore", active = true },
                { mode = "freeze", active = true },
            },
            flags = {
                ['isNPC'] = true,
            },
            scenario = "WORLD_HUMAN_CLIPBOARD",
        }
    end
end

function GenerateCasinoMembershipGiver()
    Generic.NPCS[#Generic.NPCS + 1] = {
        id = Generic.CasinoLocations[1].npcId,
        name = "Casino Membership Giver",
        pedType = 4,
        model = "s_f_y_casino_01",
        networked = false,
        distance = 25.0,
        position = {
            coords = Generic.CasinoLocations[1].coords.xyz,
            heading = Generic.CasinoLocations[1].coords[4],
            random = false
        },
        appearance = nil,
        settings = {
            { mode = "invincible", active = true },
            { mode = "ignore", active = true },
            { mode = "freeze", active = true },
        },
        flags = {
            ['isNPC'] = true,
            ['isCasinoMembershipGiver'] = true,
        },
    }
end

function GenerateCasinoRestRoom()
    Generic.NPCS[#Generic.NPCS + 1] = {
        id = "casino_rest_room_1",
        name = "Casino Rest Room",
        pedType = 4,
        model = "s_f_y_casino_01",
        networked = false,
        distance = 25.0,
        position = {
            coords = Generic.CasinoLocations[2].coords.xyz,
            heading = Generic.CasinoLocations[2].coords[4],
            random = false
        },
        appearance = nil,
        settings = {
            { mode = "invincible", active = true },
            { mode = "ignore", active = true },
            { mode = "freeze", active = true },
        },
        flags = {
            ['isNPC'] = true,
        },
    }
end

function GenerateTacoshop()
    Generic.NPCS[#Generic.NPCS + 1] = {
        id = "tacoshop",
        name = "Taco Shop",
        pedType = 4,
        model = "a_m_y_eastsa_01",
        networked = false,
        distance = 25.0,
        position = {
            coords = vector3(180.06, -1637.66, 28.29),
            heading = 212.855,
            random = false
        },
        appearance = nil,
        settings = {
            {mode = "invincible", active = true},
            {mode = "ignore", active = true},
            {mode = "freeze", active = true},
        },
        flags = {
            ['isNPC'] = true,
        },
        job = "tacoshop",
    }
end


function GenerateCasinoRestRoom2()
        Generic.NPCS[#Generic.NPCS + 1] = {
            id = "casino_rest_room_2",
            name = "Casino Rest Room 2",
            pedType = 4,
            model = "s_f_y_casino_01",
            networked = false,
            distance = 25.0,
            position = {
                coords = Generic.CasinoLocations[3].coords.xyz,
                heading = Generic.CasinoLocations[3].coords[4],
                random = false
            },
            appearance = nil,
            settings = {
                { mode = "invincible", active = true },
                { mode = "ignore", active = true },
                { mode = "freeze", active = true },
            },
            flags = {
                ['isNPC'] = true,
            },
        }
end

function GenerateCasinoJewelStore()
    Generic.NPCS[#Generic.NPCS + 1] = {
        id = "casino_jewel_store",
        name = "Casino Jewel Store",
        pedType = 4,
        model = "s_m_y_casino_01",
        scenario = "WORLD_HUMAN_GUARD_STAND",
        networked = false,
        distance = 25.0,
        position = {
            coords = Generic.CasinoLocations[4].coords.xyz,
            heading = Generic.CasinoLocations[4].coords[4],
            random = false
        },
        appearance = '{ "face":{"params":[0,2,0,2],"mode":"component"}, "hair":{"params":[2,2,0,1],"mode":"component"}, "haircolor":{"params":[1,0],"mode":"haircolor"}, "torso":{"params":[11,1,0,1],"mode":"component"}, "undershirt":{"params":[8,1,0,1],"mode":"component"}, "accesory":{"params":[7,2,2,1],"mode":"component"} }',
        settings = {
            { mode = "invincible", active = true },
            { mode = "ignore", active = true },
            { mode = "freeze", active = true },
        },
        flags = {
            ['isNPC'] = true,
        },
    }
end

function GenerateCasinoChipSeller()
    Generic.NPCS[#Generic.NPCS + 1] = {
        id = Generic.CasinoLocations[5].npcId,
        name = "Casino Chip Seller",
        pedType = 4,
        model = "s_f_y_casino_01",
        scenario = "WORLD_HUMAN_STAND_IMPATIENT",
        networked = false,
        distance = 25.0,
        position = {
            coords = Generic.CasinoLocations[5].coords.xyz,
            heading = Generic.CasinoLocations[5].coords[4],
            random = false
        },
        appearance = '{ "face":{"params":[0,2,0,2],"mode":"component"}, "hair":{"params":[2,1,0,1],"mode":"component"}, "haircolor":{"params":[1,0],"mode":"haircolor"}, "accesory":{"params":[7,2,2,1],"mode":"component"} }',
        settings = {
            { mode = "invincible", active = true },
            { mode = "ignore", active = true },
            { mode = "freeze", active = true },
        },
        flags = {
            ['isNPC'] = true,
            ['isCasinoChipSeller'] = true,
        },
    }
end

function GenerateLaptopVendor()
    Generic.NPCS[#Generic.NPCS + 1] = {
        id = "laptop_1",
        name = "Laptop Vendor",
        pedType = 4,
        model = "a_m_y_vinewood_04",
        networked = false,
        distance = 50.0,
        position = {
            coords = vector3(-1358.93, -759.38, 21.32),
            heading = 346.47,
            random = false
        },
        appearance = nil,
        settings = {
            {mode = "invincible", active = true},
            {mode = "ignore", active = true},
            {mode = "freeze", active = true},
        },
        flags = {
            ['isNPC'] = true,
        }
    }
end

function GenerateCasinoWheelSpinNpc()
    Generic.NPCS[#Generic.NPCS + 1] = {
        id = Generic.CasinoLocations[6].npcId,
        name = "Casino Wheel Spin Npc",
        pedType = 4,
        model = "s_f_y_casino_01",
        scenario = "WORLD_HUMAN_STAND_IMPATIENT",
        networked = false,
        distance = 25.0,
        position = {
            coords = Generic.CasinoLocations[6].coords.xyz,
            heading = Generic.CasinoLocations[6].coords[4],
            random = false
        },
        appearance = '{ "face":{"params":[0,2,0,2],"mode":"component"}, "hair":{"params":[2,2,0,1],"mode":"component"}, "haircolor":{"params":[1,0],"mode":"haircolor"}, "undershirt":{"params":[8,2,0,1],"mode":"component"}, "accesory":{"params":[7,0,2,1],"mode":"component"} }',
        settings = {
            { mode = "invincible", active = true },
            { mode = "ignore", active = true },
            { mode = "freeze", active = true },
        },
        flags = {
            ['isNPC'] = true,
        },
    }
end

function GenerateCasinoDrinkGiver()
    Generic.NPCS[#Generic.NPCS + 1] = {
        id = Generic.CasinoLocations[7].npcId,
        name = "Casino Drink Giver",
        pedType = 4,
        model = "s_f_y_casino_01",
        scenario = "WORLD_HUMAN_STAND_IMPATIENT_UPRIGHT",
        networked = false,
        distance = 25.0,
        position = {
            coords = Generic.CasinoLocations[7].coords.xyz,
            heading = Generic.CasinoLocations[7].coords[4],
            random = false
        },
        appearance = '{ "undershirt":{"params":[8,1,0,1],"mode":"component"}, "accesory":{"params":[7,2,2,1],"mode":"component"} }',
        settings = {
            { mode = "invincible", active = true },
            { mode = "ignore", active = true },
            { mode = "freeze", active = true },
        },
        flags = {
            ['isNPC'] = true,
            ['isCasinoDrinkGiver'] = true,
        },
    }
end

function GenerateWeaponShopKeepers()
    for _, location in ipairs(Generic.WeaponShopLocations) do
        Generic.NPCS[#Generic.NPCS + 1] = {
            id = "weaponShopKeeper_" .. _,
            name = ("Weapon Shop Keeper %s"):format(_),
            pedType = 4,
            model = "s_m_y_ammucity_01",
            networked = false,
            distance = 25.0,
            position = {
                coords = location.xyz,
                heading = location.w,
                random = false
            },
            appearance = nil,
            settings = {
                { mode = "invincible", active = true },
                { mode = "ignore", active = true },
                { mode = "freeze", active = true },
            },
            flags = {
                ['isNPC'] = true,
                ['isWeaponShopKeeper'] = true
            },
            blip = {
                sprite = 110,
                color = 1,
                scale = 0.7,
                short = true,
                text = "Gun Store",
            },
        }
    end
end

function GenerateToolShopKeepers()
    for _, location in ipairs(Generic.ToolShopLocations) do
        Generic.NPCS[#Generic.NPCS + 1] = {
            id = "toolsShopKeeper_" .. _,
            name = ("Tool Shop %s"):format(_),
            pedType = 4,
            model = "s_m_m_lathandy_01",
            scenario = "WORLD_HUMAN_CLIPBOARD",
            networked = false,
            distance = 25.0,
            position = {
                coords = location.xyz,
                heading = location.w,
                random = false
            },
            appearance = nil,
            settings = {
                { mode = "invincible", active = true },
                { mode = "ignore", active = true },
                { mode = "freeze", active = true },
            },
            flags = {
                ['isNPC'] = true,
                ['isToolShopKeeper'] = true
            },
            blip = {
                sprite = 52,
                color = 2,
                scale = 0.7,
                short = true,
                text = "Tool Shop",
            },
        }
    end
end



function GenerateBennysNPC()
    for _, location in ipairs({vector4(-227.08, -1326.74, 30.89 - 1, 240.83)}) do
        Generic.NPCS[#Generic.NPCS + 1] = {
            id = "bennysnpc",
            name = "Bennys NPC",
            pedType = 4,
            model = "a_f_y_hipster_01",
            scenario = "WORLD_HUMAN_STAND_MOBILE_UPRIGHT",
            networked = false,
            distance = 25.0,
            position = {
                coords = location.xyz,
                heading = location.w,
                random = false
            },
            appearance = nil,
            settings = {
                { mode = "invincible", active = true },
                { mode = "ignore", active = true },
                { mode = "freeze", active = true },
            },
            flags = {
                ['isNPC'] = true,
            },
        }
    end
end

--rentals 
function GenerateVehicleShopKeepersDataBike()
    Generic.NPCS[#Generic.NPCS + 1] = {
        id = Generic.VehicleShopKeepersData[1].id,
        name = "Public License Keepers",
        pedType = 4,
        model = Generic.VehicleShopKeepersData[1].model,
        networked = false,
        distance = 25.0,
        position = {
            coords = Generic.VehicleShopKeepersData[1].location.xyz,
            heading = Generic.VehicleShopKeepersData[1].location[4],
            random = false
        },
        appearance = nil,
        settings = {
            { mode = "invincible", active = true },
            { mode = "ignore", active = true },
            { mode = "freeze", active = true },
        },
        flags = {
            ['isNPC'] = true,
        },
    }
end

function GenerateVehicleShopKeepersDataVeh()
    Generic.NPCS[#Generic.NPCS + 1] = {
        id = Generic.VehicleShopKeepersData[2].id,
        name = "Public License Keepers",
        pedType = 4,
        model = Generic.VehicleShopKeepersData[2].model,
        networked = false,
        distance = 25.0,
        position = {
            coords = Generic.VehicleShopKeepersData[2].location.xyz,
            heading = Generic.VehicleShopKeepersData[2].location[4],
            random = false
        },
        appearance = nil,
        settings = {
            { mode = "invincible", active = true },
            { mode = "ignore", active = true },
            { mode = "freeze", active = true },
        },
        flags = {
            ['isNPC'] = true,
        },
    }
end

function GenerateVehicleShopKeepersDataVeh2()
    Generic.NPCS[#Generic.NPCS + 1] = {
        id = Generic.VehicleShopKeepersData[3].id,
        name = "Public License Keepers",
        pedType = 4,
        model = Generic.VehicleShopKeepersData[3].model,
        networked = false,
        distance = 25.0,
        position = {
            coords = Generic.VehicleShopKeepersData[3].location.xyz,
            heading = Generic.VehicleShopKeepersData[3].location[4],
            random = false
        },
        appearance = nil,
        settings = {
            { mode = "invincible", active = true },
            { mode = "ignore", active = true },
            { mode = "freeze", active = true },
        },
        flags = {
            ['isNPC'] = true,
        },
    }
end

function GenerateVehicleShopKeepersDataBoat()
    Generic.NPCS[#Generic.NPCS + 1] = {
        id = Generic.VehicleShopKeepersData[4].id,
        name = "Public License Keepers",
        pedType = 4,
        model = Generic.VehicleShopKeepersData[4].model,
        networked = false,
        distance = 25.0,
        position = {
            coords = Generic.VehicleShopKeepersData[4].location.xyz,
            heading = Generic.VehicleShopKeepersData[4].location[4],
            random = false
        },
        appearance = nil,
        settings = {
            { mode = "invincible", active = true },
            { mode = "ignore", active = true },
            { mode = "freeze", active = true },
        },
        flags = {
            ['isNPC'] = true,
        },
    }
end

function GenerateVehicleShopKeepersDataAir()
    Generic.NPCS[#Generic.NPCS + 1] = {
        id = Generic.VehicleShopKeepersData[5].id,
        name = "Public License Keepers",
        pedType = 4,
        model = Generic.VehicleShopKeepersData[5].model,
        networked = false,
        distance = 25.0,
        position = {
            coords = Generic.VehicleShopKeepersData[5].location.xyz,
            heading = Generic.VehicleShopKeepersData[5].location[4],
            random = false
        },
        appearance = nil,
        settings = {
            { mode = "invincible", active = true },
            { mode = "ignore", active = true },
            { mode = "freeze", active = true },
        },
        flags = {
            ['isNPC'] = true,
        },
    }
end



function GenerateRHLPrimeWorker()
    Generic.NPCS[#Generic.NPCS + 1] = {
        id = "rhl_prime_worker",
        name = "RHL Prime Worker",
        pedType = 4,
        model = "a_m_y_eastsa_01",
        networked = false,
        distance = 25.0,
        position = {
            coords = vector3(-432.95, -2786.08, 5.01),
            heading = 46.97,
            random = false
        },
        appearance = nil,
        settings = {
            {mode = "invincible", active = true},
            {mode = "ignore", active = true},
            {mode = "freeze", active = true},
        },
        flags = {
            ['isNPC'] = true,
            ['isJobEmployer'] = true,
        },
    }
end

RPC.register("np-npcs:weedShopOpen", function(src)
    local time = GetGameTimer()
    if time >= 12 and time <= 6 then
        result = true
    else
        result = false
        message = "shop is closed"
    end

    return result, message
end)

RPC.register("np-npcs:purchaseDriversLicense", function(src, pType)
    local user = exports["np-base"]:getModule("Player"):GetUser(src) 
    local char = user:getCurrentCharacter()
    local cash = user:getCash()
    local bankId = user:getBankId()
    local balance = exports["financials"]:getAccountBalance(bankId)
    local gender = "Male"

    if char.gender ~= 0 then
        gender = "Female"
    end

    local tmep = {
        Identifier = char.id,
        Name = char.first_name,
        Surname = char.last_name,
        Sex = gender,
        DOB = char.dob
    }

    if pType == "cash" then
        if cash >= 1000 then
            user:removeMoney(1000)
        else
            return false
        end
    else
        if balance >= 500 then
            local comment = "License Renewal fees $500."
            exports["financials"]:adjustAccountBalance(bankId, "remove", 500)
        else
            return false
        end
    end

    TriggerClientEvent('player:receiveItem', src, "idcard", 1, false, {}, tmep)
end)


local NPCS = {}

NPCS[#NPCS + 1] = {
  id = "recycle_employer",
  position = {
    coords = vector3(-352.52, -1545.68, 27.72 - 1),
    heading = 272.8,
    random = false
  },
  pedType = 4,
  model = "s_m_y_dockwork_01",
  networked = false,
  distance = 50.0,
  appearance = nil,
  settings = {
      { mode = "invincible", active = true },
      { mode = "ignore", active = true },
      { mode = "freeze", active = true },
  },
  flags = {
    isNPC = true,
    isJobEmployer = true,
  },
  job = "garbage",
}

NPCS[#NPCS + 1] = {
  id = "trucker_employer",
  position = {
    coords = vector3(919.9, -1256.54, 25.53 - 1),
    heading = 38.96,
    random = false
  },
  pedType = 4,
  model = "cs_floyd",
  networked = false,
  distance = 50.0,
  appearance = nil,
  settings = {
      { mode = "invincible", active = true },
      { mode = "ignore", active = true },
      { mode = "freeze", active = true },
  },
  flags = {
    isNPC = true,
    isJobEmployer = true,
  },
  scenario = "WORLD_HUMAN_CLIPBOARD",
  job = "trucker",
}

NPCS[#NPCS + 1] = {
  id = "postop_employer",
  position = {
    coords = vector3(-417.233, -2792.829, 6.0007 - 1),
    heading = 227.363,
    random = false
  },
  pedType = 4,
  model = "cs_floyd",
  networked = false,
  distance = 50.0, 
  appearance = nil,
  settings = {
      { mode = "invincible", active = true },
      { mode = "ignore", active = true },
      { mode = "freeze", active = true },
  },
  flags = {
    isNPC = true,
    isJobEmployer = true,
  },
  scenario = "WORLD_HUMAN_CLIPBOARD",
  job = "postop",
}

NPCS[#NPCS + 1] = {
  id = "fish_employer",
  position = {
    coords = vector3(-335.48, 6105.53, 31.45 - 1),
    heading = 234.58,
    random = false
  },
  pedType = 4,
  model = "mp_m_weed_01",
  networked = false,
  distance = 50.0,
  appearance = nil,
  settings = {
      { mode = "invincible", active = true },
      { mode = "ignore", active = true },
      { mode = "freeze", active = true },
  },
  flags = {
    isNPC = true,
    isJobEmployer = true,
  },
  scenario = "WORLD_HUMAN_CLIPBOARD",
  job = "fishing",
}

NPCS[#NPCS + 1] = { -- dodo job
  id = "dodo_logestics", 
  position = {
    coords = vector3(-432.95, -2786.08, 6.01 - 1),
    heading = 46.97,
    random = false
  },
  pedType = 4,
  model = "mp_m_weapexp_01",
  networked = false,
  distance = 50.0,
  appearance = nil,
  settings = {
      { mode = "invincible", active = true },
      { mode = "ignore", active = true },
      { mode = "freeze", active = true },
  },
  flags = {
    isNPC = true,
    isJobEmployer = true,
  },
}

NPCS[#NPCS + 1] = {
  id = "waterandpower_employer",
  position = {
    coords = vector3(443.0755, -1969.359, 24.40176 - 1),
    heading = 222.57,
    random = false
  },
  pedType = 4,
  model = "s_m_m_gaffer_01",
  networked = false,
  distance = 50.0,
  appearance = nil,
  settings = {
      { mode = "invincible", active = true },
      { mode = "ignore", active = true },
      { mode = "freeze", active = true },
  },
  flags = {
    isNPC = true,
    isJobEmployer = true,
  },
  scenario = "WORLD_HUMAN_CLIPBOARD",
  job = "waterandpower",
}

NPCS[#NPCS + 1] = { --stores
  id = "darkmarket_stores",
  pedType = 4,
  model = "s_m_y_ammucity_01",
  networked = false,
  distance = 25.0,
  position = {
      coords = vector3(-1282.51, -189.90, 50.54),
      heading =  174.21,
      random = false
  },
  appearance = nil,
  settings = {
      {mode = "invincible", active = true},
      {mode = "ignore", active = true},
      {mode = "freeze", active = true},
  },
  flags = {
    isNPC = true,
    isJobEmployer = true,
  },
}

NPCS[#NPCS + 1] = { -- bobcat
  id = "darkmarket_bcat",
  pedType = 4,
  model = "s_m_y_ammucity_01",
  networked = false,
  distance = 25.0,
  position = {
      coords = vector3(-1262.97, -1142.34, 6.54), 
      heading =  199.32,
      random = false
  },
  appearance = nil,
  settings = {
      {mode = "invincible", active = true},
      {mode = "ignore", active = true},
      {mode = "freeze", active = true},
  },
  flags = {
    isNPC = true,
    isJobEmployer = true,
  },
}

NPCS[#NPCS + 1] = { -- jewel
  id = "darkmarket_jewel",
  pedType = 4,
  model = "s_m_y_ammucity_01",
  networked = false,
  distance = 25.0,
  position = {
      coords = vector3(957.45, -1514.54, 30.29), 
      heading =  15.30,
      random = false
  },
  appearance = nil,
  settings = {
      {mode = "invincible", active = true},
      {mode = "ignore", active = true},
      {mode = "freeze", active = true},
  },
  flags = {
    isNPC = true,
    isJobEmployer = true,
  },
}

NPCS[#NPCS + 1] = { -- banks
  id = "darkmarket_banks",
  pedType = 4,
  model = "s_m_y_ammucity_01",
  networked = false,
  distance = 25.0,
  position = {
      coords = vector3(-1191.26, -511.40, 34.65), 
      heading = 340.48,
      random = false
  },
  appearance = nil,
  settings = {
      {mode = "invincible", active = true},
      {mode = "ignore", active = true},
      {mode = "freeze", active = true},
  },
  flags = {
    isNPC = true,
    isJobEmployer = true,
  },
}

 NPCS[#NPCS + 1] = { -- hosuing
   id = "darkmarket_hosuing",
   pedType = 4,
   model = "s_m_y_ammucity_01",
   networked = false,
   distance = 25.0,
   position = {
       coords = vector3(212.1603, -1856.4039, 26.1927), 
       heading = 150.4375,
       random = false
   },
   appearance = nil,
   settings = {
       {mode = "invincible", active = true},
       {mode = "ignore", active = true},
       {mode = "freeze", active = true},
   },
   flags = {
     isNPC = true,
     isJobEmployer = true,
   },
 }

-- NPCS[#NPCS + 1] = { -- runs
--   id = "darkmarket_runs",
--   pedType = 4,
--   model = "s_m_y_ammucity_01",
--   networked = false,
--   distance = 25.0,
--   position = {
--       coords = vector3(329.26, -1001.15, 28.28), 
--       heading = 4.18,
--       random = false
--   },
--   appearance = nil,
--   settings = {
--       {mode = "invincible", active = true},
--       {mode = "ignore", active = true},
--       {mode = "freeze", active = true},
--   },
--   flags = {
--     isNPC = true,
--     isJobEmployer = true,
--   },
-- }

-- NPCS[#NPCS + 1] = { -- chop chop
--   id = "darkmarket_chopchop",
--   pedType = 4,
--   model = "s_m_y_ammucity_01",
--   networked = false,
--   distance = 25.0,
--   position = {
--       coords = vector3(328.41, -994.33, 28.32), 
--       heading = 181.48,
--       random = false
--   },
--   appearance = nil,
--   settings = {
--       {mode = "invincible", active = true},
--       {mode = "ignore", active = true},
--       {mode = "freeze", active = true},
--   },
--   flags = {
--     isNPC = true,
--     isJobEmployer = true,
--   },
-- }

NPCS[#NPCS + 1] = { -- bennys
  id = "bennys",
  pedType = 4,
  model = "ig_benny",
  networked = false,
  distance = 25.0,
  position = {
      coords = vector3(122.56, -3026.71, 7.04 - 1), 
      heading = 308.19,
      random = false
  },
  appearance = nil,
  settings = {
      {mode = "invincible", active = true},
      {mode = "ignore", active = true},
      {mode = "freeze", active = true},
  },
  flags = {
    isNPC = true,
  },
}

RPC.register("np-jobs:npc:getNPCs", function(src)
  return NPCS
end)
