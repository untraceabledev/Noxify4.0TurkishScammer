local Entries = {}

Entries[#Entries + 1] = {
    type = 'entity',
    group = { 2 },
    data = {
        {
            id = "vehicle_flip",
            label = _L("interact-flip-vehicle", "Flip Vehicle"),
            icon = "car-crash",
            event = "FlipVehicle",
            parameters = {}
        }
    },
    options = {
        distance = { radius = 3.0 },
        isEnabled = function(pEntity, pContext)
            return not IsVehicleOnAllWheels(pEntity)
        end
    }
}

Entries[#Entries + 1] = {
    type = 'entity',
    group = { 2 },
    data = {
        {
            id = "carry_bike",
            label = _L("interact-carry-bike", "Carry Bike"),
            icon = "spinner",
            event = "carryEntity",
            parameters = {}
        }
    },
    options = {
        distance = { radius = 3.0 },
        isEnabled = function(pEntity, pContext)
            return IsThisModelABicycle(pContext.model) and not IsEntityAttachedToAnyPed(pEntity) and
            not IsEntityAttachedToAnyPed(PlayerPedId())
        end
    }
}

Entries[#Entries + 1] = {
    type = 'entity',
    group = { 2 },
    data = {
        {
            id = "vehicle_getintrunk",
            label = _L("interact-enter-trunk", "Enter trunk"),
            icon = "user-secret",
            event = "np-police:vehicle:getInTrunk",
            parameters = {}
        }
    },
    options = {
        distance = { radius = 4.0 },
        isEnabled = function(pEntity, pContext)
            local lockStatus = GetVehicleDoorLockStatus(pEntity)
            return hasDoor(pEntity, 5) and isCloseToBoot(pEntity, PlayerPedId(), 2.0, pContext.model) and
            (lockStatus == 1 or lockStatus == 0 or lockStatus == 4) and not isEscorting
        end
    }
}

Entries[#Entries + 1] = {
    type = 'entity',
    group = { 2 },
    data = {
        {
            id = "vehicle_opentrunkinv",
            label = _L("interact-view-trunk", "View trunk"),
            icon = "truck-loading",
            event = "inventory:openTrunk",
            parameters = {}
        }
    },
    options = {
        distance = { radius = 4.0 },
        isEnabled = function(pEntity, pContext)
            local lockStatus = GetVehicleDoorLockStatus(pEntity)
            return hasDoor(pEntity, 5) and isCloseToBoot(pEntity, PlayerPedId(), 2.0, pContext.model) and
            (lockStatus == 1 or lockStatus == 0 or lockStatus == 4) and not isEscorting
        end
    }
}

Entries[#Entries + 1] = {
    type = 'entity',
    group = { 2 },
    data = {
        {
            id = "vehicle_putintrunk",
            label = _L("interact-enter-trunk", "Put in trunk"),
            icon = "user-secret",
            event = "np-police:vehicle:forceTrunkCheck",
            parameters = {}
        }
    },
    options = {
        distance = { radius = 4.0 },
        isEnabled = function(pEntity, pContext)
            local lockStatus = GetVehicleDoorLockStatus(pEntity)
            return hasDoor(pEntity, 5) and isCloseToBoot(pEntity, PlayerPedId(), 2.0, pContext.model) and
            (lockStatus == 1 or lockStatus == 0 or lockStatus == 4) and isEscorting
        end
    }
}

Entries[#Entries + 1] = {
    type = 'entity',
    group = { 2 },
    data = {
        {
            id = "vehicle_runplate",
            label = _L("interact-runplate", "Run Plate"),
            icon = "money-check",
            event = "np-police:checkPlateByEntity",
            parameters = {}
        }
    },
    options = {
        distance = { radius = 7.0 },
        isEnabled = function(pEntity, pContext)
            return isPolice and
            (isCloseToHood(pEntity, PlayerPedId(), 2.0) or isCloseToBoot(pEntity, PlayerPedId(), 2.0, pContext.model)) and
            not IsPedInAnyVehicle(PlayerPedId(), false)
        end
    }
}

Entries[#Entries + 1] = {
    type = 'entity',
    group = { 2 },
    data = {
        {
            id = "vehicle_inspectvin",
            label = _L("interact-checkvin", "Check VIN"),
            icon = "sim-card",
            event = "vehicle:checkVIN",
            parameters = {}
        }
    },
    options = {
        distance = { radius = 3.0 },
        isEnabled = function(pEntity, pContext)
            return isCloseToHood(pEntity, PlayerPedId(), 2.0) and (isPolice or isMedic) and
            not IsPedInAnyVehicle(PlayerPedId(), false)
        end
    }
}

Entries[#Entries + 1] = {
    type = 'entity',
    group = { 2 },
    data = {
        {
            id = "vehicle_remove_fakeplate",
            label = _L("interact-remove-fakeplate", "Remove Fakeplate"),
            icon = "ban",
            event = "vehicle:removeFakePlate",
            parameters = {}
        }
    },
    options = {
        distance = { radius = 3.0 },
        isEnabled = function(pEntity, pContext)
            return (isCloseToBoot(pEntity, PlayerPedId(), 1.8, pContext.model) or pContext.model == `esv`) and
                not IsPedInAnyVehicle(PlayerPedId(), false)
                and exports["np-vehicles"]:HasVehicleKey(pEntity) and
                exports["np-vehicles"]:GetVehicleMetadata(pEntity, 'fakePlate')
        end
    }
}

Entries[#Entries + 1] = {
    type = 'entity',
    group = { 2 },
    data = {
        {
            id = "vehicle_examine",
            label = _L("interact-examine-veh", "Examine Vehicle"),
            icon = "wrench",
            event = "np:vehicles:examineVehicle",
            parameters = {}
        }
    },
    options = {
        distance = { radius = 3.0, boneId = "engine" },
        isEnabled = function(pEntity, pContext)
            return isCloseToEngine(pEntity, PlayerPedId(), 3.0, pContext.model) and
            not bypassedNetVehicles[VehToNet(pEntity)]
        end
    }
}

Entries[#Entries + 1] = {
    type = 'entity',
    group = { 2 },
    data = {
        {
            id = "vehicle_purchase_s2",
            label = _L("interact-purchase-s2", "Purchase Contract (50 XTF)"),
            icon = "money-bill",
            NPXEvent = "np-boosting:s2:purchaseVehicle",
            parameters = {}
        }
    },
    options = {
        distance = { radius = 3.0, boneId = "engine" },
        isEnabled = function(pEntity, pContext)
            return DecorGetBool(pEntity, "IsS2Vehicle")
        end
    }
}

Entries[#Entries + 1] = {
    type = 'entity',
    group = { 2 },
    data = {
        {
            id = "vehicle_refuel_station",
            label = _L("interact-refuel-veh", "Refuel Vehicle"),
            icon = "gas-pump",
            event = "vehicle:refuel:showMenu",
            parameters = {}
        }
    },
    options = {
        isEnabled = function(pEntity, pContext)
            return polyChecks.gasStation.isInside and canRefuelHere(pEntity, polyChecks.gasStation.polyData) and
            not bypassedNetVehicles[VehToNet(pEntity)]
        end
    }
}

Entries[#Entries + 1] = {
    type = 'entity',
    group = { 2 },
    data = {
        {
            id = "vehicle_refuel_station_plane",
            label = _L("interact-refuel-veh", "Refuel Vehicle"),
            icon = "gas-pump",
            event = "vehicle:refuel:showMenu",
            parameters = {}
        }
    },
    options = {
        distance = { radius = 2.0 },
        isEnabled = function(pEntity, pContext)
            local vehicleClass = GetVehicleClass(pEntity)
            if vehicleClass ~= 16 then return false end
            return polyChecks.gasStation.isInside
        end
    }
}

Entries[#Entries + 1] = {
    type = 'entity',
    group = { 2 },
    data = {
        {
            id = "vehicle_refuel_station_boat",
            label = _L("interact-refuel-veh", "Refuel Vehicle"),
            icon = "gas-pump",
            event = "vehicle:refuel:showMenu",
            parameters = {}
        }
    },
    options = {
        distance = { radius = 5.0 },
        isEnabled = function(pEntity, pContext)
            local vehicleClass = GetVehicleClass(pEntity)
            if vehicleClass ~= 14 then return false end
            return polyChecks.gasStation.isInside
        end
    }
}

Entries[#Entries + 1] = {
    type = 'entity',
    group = { 2 },
    data = {
        {
            id = "vehicle_refuel_station_chopter",
            label = _L("interact-refuel-veh", "Refuel Vehicle"),
            icon = "gas-pump",
            event = "vehicle:refuel:showMenu",
            parameters = {}
        }
    },
    options = {
        distance = { radius = 5.0 },
        isEnabled = function(pEntity, pContext)
            local vehicleClass = GetVehicleClass(pEntity)
            if vehicleClass ~= 15 then return false end
            return polyChecks.gasStation.isInside
        end
    }
}

Entries[#Entries + 1] = {
    type = 'entity',
    group = { 2 },
    data = {
        {
            id = "vehicle_refuel_jerrycan",
            label = _L("interact-refuel-veh", "Refuel Vehicle"),
            icon = "gas-pump",
            event = "vehicle:refuel:jerryCan",
            parameters = {}
        }
    },
    options = {
        distance = { radius = 1.2, boneId = 'wheel_lr' },
        isEnabled = function(pEntity, pContext)
            return HasWeaponEquipped(883325847) and
            exports['np-business']:HasPermission('sanguine_isle', 'property_keys')                                         -- WEAPON_PetrolCan
        end
    }
}

Entries[#Entries + 1] = {
    type = 'entity',
    group = { 2 },
    data = {
        {
            id = "vehicle_putinvehicle",
            label = _L("interact-vehicle-seatin", "Seat in vehicle"),
            icon = "chevron-circle-left",
            event = "np-police:vehicle:seat",
            parameters = {}
        },
        {
            id = "vehicle_unseatnearest",
            label = _L("interact-vehicle-unseat", "Unseat from vehicle"),
            icon = "chevron-circle-right",
            event = "np-police:vehicle:unseat",
            parameters = {}
        }
    },
    options = {
        distance = { radius = 4.0 },
        isEnabled = function(pEntity, pContext)
            return (not (isCloseToHood(pEntity, PlayerPedId()) or isCloseToBoot(pEntity, PlayerPedId(), 2.0, pContext.model))
                    or pContext.model == GetHashKey("ambulance") or pContext.model == GetHashKey("flatbedm2"))
                and not IsPedInAnyVehicle(PlayerPedId(), false)
                and NetworkGetEntityIsNetworked(pEntity)
                and not bypassedNetVehicles[VehToNet(pEntity)]
        end
    }
}

Entries[#Entries + 1] = {
    type = 'entity',
    group = { 2 },
    data = {
        {
            id = "vehicle_keysgive",
            label = _L("interact-givekey", "give key"),
            icon = "key",
            event = "vehicle:giveKey",
            parameters = {}
        }
    },
    options = {
        distance = { radius = 1.8 },
        isEnabled = function(pEntity, pContext)
            return hasKeys(pEntity) and not bypassedNetVehicles[VehToNet(pEntity)]
        end
    }
}

Entries[#Entries + 1] = {
    type = 'entity',
    group = { 2 },
    data = {
        {
            id = "vehicle_vinscratch",
            label = _L("interact-scratchvin", "scratch vin"),
            icon = "eye-slash",
            event = "np-boosting:scratchVehicleVin",
            parameters = {}
        }
    },
    options = {
        distance = { radius = 4 },
        isEnabled = function(pEntity, pContext)
            return pContext.meta ~= nil and pContext.meta.boostingInfo ~= nil and pContext.meta.boostingInfo.vinScratch
        end
    }
}

Entries[#Entries + 1] = {
    type = 'flag',
    group = { 'isWheelchair' },
    data = {
        {
            id = "wheelchair",
            label = _L("interact-toggle-wheelchair", "toggle wheelchair"),
            icon = "wheelchair",
            event = "np:vehicle:wheelchair:control",
            parameters = {}
        }
    },
    options = {
        distance = { radius = 0.9, boneId = 'misc_a' }
    }
}


Entries[#Entries + 1] = {
    type = 'flag',
    group = { 'isTowTruck' },
    data = {
        {
            id = "towtruck_tow",
            label = _L("interact-tow-veh", "tow vehicle"),
            icon = "trailer",
            event = "jobs:towVehicle",
            parameters = {}
        }
    },
    options = {
        job = { 'impound', 'pd_impound' },
        distance = { radius = 2.5, boneId = 'wheel_lr' },
        isEnabled = function(pEntity, pContext)
            return not pContext.flags['isTowingVehicle']
        end
    }
}

Entries[#Entries + 1] = {
    type = 'flag',
    group = { 'isTowTruck' },
    data = {
        {
            id = "towtruck_untow",
            label = _L("interact-untow-veh", "untow vehicle"),
            icon = "trailer",
            event = "jobs:untowVehicle",
            parameters = {}
        }
    },
    options = {
        job = { 'impound', 'pd_impound' },
        distance = { radius = 2.5, boneId = 'wheel_lr' },
        isEnabled = function(pEntity, pContext)
            return pContext.flags['isTowingVehicle']
        end
    }
}

Entries[#Entries + 1] = {
    type = 'entity',
    group = { 2 },
    data = {
        {
            id = "vehicle_tamperedwith",
            label = _L("interact-check-veh-tampering", "check for tampering signs"),
            icon = "unlink",
            event = "np-vehicles:checkTampering",
            parameters = {}
        }
    },
    options = {
        distance = { radius = 1.8 },
        job = { 'police' },
        isEnabled = function(pEntity, pContext)
            return isCloseToDriverDoor(pEntity, PlayerPedId(), 1.5)
        end
    }
}

Entries[#Entries + 1] = {
    type = 'entity',
    group = { 2 },
    data = {
        {
            id = "vehicle_defusebomb",
            label = _L("interact-defusecarbomb", "Defuse Car Bomb"),
            icon = "cut",
            event = "np-miscscripts:carBombs:removeBomb",
            parameters = {}
        },
    },
    options = {
        distance = { radius = 1.8 },
        isEnabled = function(pEntity, pContext)
            return
                pContext.meta ~= nil and
                pContext.meta.carBombData ~= nil and
                pContext.meta.carBombData.found
        end
    }
}

Entries[#Entries + 1] = {
    type = 'entity',
    group = { 2 },
    data = {
        {
            id = "vehicle_pickup_rc",
            label = _L("interact-pickup-rc", "pickup"),
            icon = "people-carry",
            event = "np-rcvehicles:pickupCar",
            parameters = {}
        }
    },
    options = {
        distance = { radius = 1.8 },
        isEnabled = function(pEntity, pContext)
            return pContext.model == `rcbandito` and #GetEntityVelocity(pEntity) < 0.2 and
            bypassedNetVehicles[VehToNet(pEntity)]
        end
    }
}

-- custom car clothing
local inClothingShop = false
AddEventHandler("np-polyzone:enter", function(pName)
    if pName ~= "custom_car_clothing" then return end
    inClothingShop = true
end)
AddEventHandler("np-polyzone:exit", function(pName)
    if pName ~= "custom_car_clothing" then return end
    inClothingShop = false
end)
Entries[#Entries + 1] = {
    type = 'entity',
    group = { 2 },
    data = {
        {
            id = "vehicle_clothing_save",
            label = "Save Current Outfit",
            icon = "plus",
            event = "np-car-clothing:saveCurrentOutfit",
            parameters = {},
        },
        {
            id = "vehicle_clothing_swap",
            label = "Swap Current Outfit",
            icon = "redo",
            event = "np-car-clothing:swapCurrentOutfit",
            parameters = {},
        },
    },
    options = {
        distance = { radius = 2.5 },
        isEnabled = function(pEntity, pContext)
            return inClothingShop
        end
    }
}

Citizen.CreateThread(function()
    for _, entry in ipairs(Entries) do
        if entry.type == 'flag' then
            AddPeekEntryByFlag(entry.group, entry.data, entry.options)
        elseif entry.type == 'model' then
            AddPeekEntryByModel(entry.group, entry.data, entry.options)
        elseif entry.type == 'entity' then
            AddPeekEntryByEntityType(entry.group, entry.data, entry.options)
        elseif entry.type == 'polytarget' then
            AddPeekEntryByPolyTarget(entry.group, entry.data, entry.options)
        end
    end
end)
