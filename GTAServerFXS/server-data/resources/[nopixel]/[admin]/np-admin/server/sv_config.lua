PNP = PNP or {}
PNP.Admin = PNP.Admin or {}

PNP.Admin.Ranks = {"user", "mod", "admin", "special", "dev", "owner"}

function getRank(pRank)
    for idx, rank in ipairs(PNP.Admin.Ranks) do
        if rank == pRank then
            return idx
        end
    end
    return getRank("user")
end

exports("getRank", getRank)

PNP.Admin.Commands = {{
    name = "attach",
    rank = getRank("dev"),
    log = " Attached to ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        local target = pData.target.source or nil
        local targetPed = GetPlayerPed(target)
        local targetCoords = GetEntityCoords(targetPed)
        local targetData = {
            target = {
                source = target
            }
        }

        if not target then
            return
        elseif (target == pSource) then
            TriggerClientEvent("DoLongHudText", pSource, "You can't attach to yourself.", 2)
            return
        end

        TriggerClientEvent("np-admin:attachClient", pSource, targetCoords, targetData)
    end,
    adminMenu = {
        command = {
            title = "Attach",
            cat = "Player",
            child = {
                inputs = {"Target"}
            }
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}, {
    name = "bring",
    rank = getRank("admin"),
    log = " Brought ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        local target = tonumber(pData.target.source)
        local sourcePed = GetPlayerPed(pSource)
        local coordsToBring = GetEntityCoords(sourcePed)
        local bringCoords = {coordsToBring.x, coordsToBring.y, coordsToBring.z}

        if (target == pSource) then
            TriggerClientEvent("DoLongHudText", pSource, "You can't bring yourself.", 2)
            return
        end

        TriggerClientEvent("np-admin:bringClient", target, bringCoords)
    end,
    adminMenu = {
        command = {
            title = "Bring",
            cat = "User",
            child = {
                inputs = {"Target"}
            }
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}, {
    name = "clothing",
    rank = getRank("admin"),
    log = " Opened clothing menu ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        local target = pData.target.source ~= "" and pData.target.source or pSource
        TriggerClientEvent("np-clothing:openClothing", target, false)
        TriggerClientEvent("np-admin:closeMenu", target)
    end,
    adminMenu = {
        command = {
            title = "Clothing",
            cat = "User",
            child = {
                inputs = {"TargetNot"}
            }
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}, {
    name = "cSay",
    rank = getRank("admin"),
    log = " Used cSay ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        print("pData", json.encode(pData))
        local message = pData["Text"] or nil
        -- for i = 1, 3 do
        TriggerClientEvent("chatMessage", -1, "Admin", {255, 0, 0}, message)
        -- end
        -- return pData.Job .. ")";
    end,
    adminMenu = {
        command = {
            title = "cSay",
            cat = "Utility",
            child = {
                inputs = {"Text"}
            }
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}, {
    name = "Give License",
    rank = getRank("admin"),
    log = " Gave License ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        if (pData["License"] == "Select") then
            return
        end
        local target = pData.target.source or nil
        local license = pData["License"] or nil
        local user = exports["np-base"]:getModule("Player"):GetUser(target)
        local char = user:getCurrentCharacter()
        local success, message, data = exports["np-gov"]:addLicenseToCharacter(char.id, license, 1)
        TriggerClientEvent("DoLongHudText", pSource, "License successfully granted!")
    end,
    adminMenu = {
        command = {
            title = "Give License",
            cat = "Player",
            child = {
                inputs = {"Target", "License"}
            }
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}, {
    name = "Hunger / Thirst Max",
    rank = getRank("admin"),
    log = " Maxed Hunger / Thirst ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        local target = pData.target.source ~= "" and pData.target.source or pSource

        TriggerClientEvent("np:admin:maxstats", target)
    end,
    adminMenu = {
        command = {
            title = "Hunger / Thirst Max",
            cat = "Player",
            child = {
                inputs = {"TargetNot"}
            }
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}, {
    name = "Kick",
    rank = getRank("admin"),
    log = " Kick ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        if (pData.target.source == nil) then
            return
        end
        local amount = tonumber(pData["Amount"]) or nil
        local target = pData.target.source or nil
        local reason = pData["Reason"] ~= nil and pData["Reason"] or "Kicked by " .. GetPlayerName(pSource)

        exports["np-admin"]:kickPlayer(target, reason, pSource)
    end,
    adminMenu = {
        command = {
            title = "Kick",
            cat = "Utility",
            child = {
                inputs = {"Target", "Reason"}
            }
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}, {
    name = "Clear Maintenance Fees",
    rank = getRank("admin"),
    log = " Cleared fees ",
    isClientCommand = true,
    adminMenu = {
        command = {
            title = "Clear Maintenance Fees",
            cat = "Player",
            child = {
                inputs = {"State ID"}
            }
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}, {
    name = "Outfits",
    rank = getRank("admin"),
    log = " Opened Outfits menu ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        local target = pData.target.source ~= "" and pData.target.source or pSource
        TriggerClientEvent("np-clothing:outfits", target, 4)
        TriggerClientEvent("np-admin:closeMenu", target)
    end,
    adminMenu = {
        command = {
            title = "Outfits",
            cat = "User",
            child = {
                inputs = {"TargetNot"}
            }
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}, {
    name = "giveJob",
    rank = getRank("admin"),
    log = "Give Job Whitelist (",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        local target = pData.target.source ~= "" and pData.target.source or pSource
        local job = pData.Job
        local rank = pData.Rank
        local user = exports["np-base"]:getModule("Player"):GetUser(target)
        local jobs = exports["np-base"]:getModule("JobManager")
        local message, success = jobs:AddWhiteList(user, job, rank)

        if success == true then
            TriggerClientEvent("DoLongHudText", pSource, message, 1)
        elseif success == false then
            TriggerClientEvent("DoLongHudText", pSource, message, 2)
            return
        else
            TriggerClientEvent("DoLongHudText", pSource, message, success)
            return
        end

        return pData.Job .. ")";
    end,
    adminMenu = {
        command = {
            title = "Give Job Whitelist",
            cat = "Utility",
            child = {
                inputs = {"TargetNot", "Job", "Rank"}
            }
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}, {
    name = "Request Job",
    rank = getRank("admin"),
    log = " Request Job ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        if (pData.target.source == nil) then
            return
        end
        local target = pData.target.source or nil
        TriggerEvent("jobmanager:playerBecameJob", target, pData.Job);
        TriggerClientEvent("jobmanager:playerBecameJob", target, pData.Job);
    end,
    adminMenu = {
        command = {
            title = "Request Job",
            cat = "Player",
            child = {
                inputs = {"Target", "Job"}
            }
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}, {
    name = "giveItem",
    rank = getRank("admin"),
    log = "Spawned Item (",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        local target = pData.target.source ~= "" and pData.target.source or pSource
        local amount = pData["Amount"] ~= "" and tonumber(pData["Amount"]) or 1
        local itemData = pData["Json"] ~= "" and json.decode(pData["Json"]) or nil
        TriggerClientEvent("player:receiveItem", target, pData.Item, amount, false, itemData);
        return pData.Item .. ")";
    end,
    adminMenu = {
        command = {
            title = "Spawn Item",
            cat = "Utility",
            child = {
                inputs = {"TargetNot", "Item", "Amount", "Json"}
            }
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}, {
    name = "superJump",
    rank = getRank("dev"),
    log = "SuperJummped (",
    isClientCommand = true,
    adminMenu = {
        command = {
            title = "SuperJump",
            cat = "Player",
            child = false
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}, {
    name = "unban",
    rank = getRank("admin"),
    log = " Unbanned ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        local target = pData["Ban ID"] or nil

        local success, message, data = PNP.Admin.DB.unbanUser(target)
        TriggerClientEvent("DoLongHudText", pSource, message, data)
    end,
    adminMenu = {
        command = {
            title = "Remove Temp Ban",
            cat = "Utility",
            child = {
                inputs = {"Ban ID"}
            }
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}, {
    name = "revive",
    rank = getRank("admin"),
    log = " Revived ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        local target = pData.target.source ~= "" and pData.target.source or pSource
        TriggerClientEvent("wounds:revive", target)
        -- TriggerEvent("wounds:revive", target)
        -- return pData.Job .. ")";
    end,
    adminMenu = {
        command = {
            title = "Revive",
            cat = "Player",
            child = {
                inputs = {"TargetNot"}
            }
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}, {
    name = "Revive in Radius",
    rank = getRank("admin"),
    log = " Revive in Radius ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        local target = pSource
        local ped = GetPlayerPed(target)
        local playerCoords = GetEntityCoords(ped)
        local nearbyPlayers = exports["np-infinity"]:GetNearbyPlayers(playerCoords, 50)

        for k, v in ipairs(nearbyPlayers) do
            TriggerClientEvent("reviveFunction", v)
            TriggerEvent("ems:healplayer", v)
        end
    end,
    adminMenu = {
        command = {
            title = "Revive in Radius",
            cat = "Player",
            child = nil
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}, {
    name = "Sound",
    rank = getRank("admin"),
    log = " Made a sound to ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        local target = pData.target.source ~= "" and pData.target.source or pSource
        local sound = pData["Sound"] or nil

        if (sound ~= nil) then
            TriggerClientEvent("playSound", target, sound)
        end
    end,
    adminMenu = {
        command = {
            title = "Play Sound",
            cat = "Utility",
            child = {
                inputs = {"TargetNot", "Sound"}
            }
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}, {
    name = "ban",
    rank = getRank("admin"),
    log = " Banned ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        local target = pData.target.source ~= "" and pData.target.source or pSource
        local reason = pData.Reason ~= "" and pData.Reason or "No reason given."
        local banLength = pData["Ban Length"] ~= "" and pData["Ban Length"] or 0

        PNP.Admin.DB.banUser(pSource, target, tonumber(banLength), reason)
    end,
    adminMenu = {
        command = {
            title = "Temp Ban",
            cat = "User",
            child = {
                inputs = {"Target", "Reason", "Ban Length"}
            }
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}, {
    name = "rockstarEditor",
    rank = getRank("dev"),
    log = " Toggle Rockstar Editor ",
    isClientCommand = true,
    adminMenu = {
        command = {
            title = "Rockstar Editor",
            cat = "Utility",
            child = false
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}, {
    name = "autoRefuel",
    rank = getRank("dev"),
    log = " set Auto Refuel ( ",
    isClientCommand = true,
    adminMenu = {
        command = {
            title = "Auto Refuel",
            cat = "Player",
            child = false
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    },
    selection = {
        title = "Set Fuel",
        child = nil,
        action = "autoRefuel",
        entityType = -1
    }
}, {
    name = "startRecording",
    rank = getRank("dev"),
    log = " Started recording ",
    isClientCommand = true,
    adminMenu = {
        command = {
            title = "Start recording",
            cat = "Utility",
            child = false
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}, {
    name = "bennys",
    rank = getRank("admin"),
    log = " Opened bennys menu ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        local target = pData.target.source ~= "" and pData.target.source or pSource
        TriggerClientEvent("np-admin:bennys", target)
        TriggerClientEvent("np-admin:closeMenu", target)
    end,
    adminMenu = {
        command = {
            title = "Bennys",
            cat = "Utility",
            child = {
                inputs = {"TargetNot"}
            }
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}, {
    name = "Give Car",
    rank = getRank("admin"),
    log = " Gave Car ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        local target = pData.target.source ~= "" and pData.target.source or nil
        if (target == nil) then
            return
        end

        local user = exports["np-base"]:getModule("Player"):GetUser(target)
        local char = user:getCurrentCharacter()
        local pVehicle = pData["Vehicle"] or nil
        local pPlate = pData["Plate"] ~= "" and pData["Plate"] or nil

        if (pVehicle ~= nil) then
            TriggerEvent("np:vehicles:giveVehicle", target, pVehicle, char.id, 'SCRIPT', 'menu', pPlate)
            return
        end

        TriggerClientEvent("DoLongHudText", pSource, "Invalid Car")
    end,
    adminMenu = {
        command = {
            title = "Give Car",
            cat = "Utility",
            child = {
                inputs = {"Target", "Vehicle", "Plate"}
            }
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}, {
    name = "engine_sound",
    rank = getRank("admin"),
    log = " Engine Sound Changed to ",
    isClientCommand = true,
    adminMenu = {
        command = {
            title = "Engine Sound",
            cat = "Utility",
            child = {
                inputs = {"Sound Name"}
            }
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}, {
    name = "Sound",
    rank = getRank("admin"),
    log = " Made a sound to ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        local target = pData.target.source ~= "" and pData.target.source or pSource
        local sound = pData["Sound"] or nil

        if (sound ~= nil) then
            TriggerClientEvent("playSound", target, sound)
        end
    end,
    adminMenu = {
        command = {
            title = "Play Sound",
            cat = "Utility",
            child = {
                inputs = {"TargetNot", "Sound"}
            }
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}, {
    name = "stopRecording",
    rank = getRank("dev"),
    log = " Stopped recording ",
    isClientCommand = true,
    adminMenu = {
        command = {
            title = "Stop recording",
            cat = "Utility",
            child = false
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}, {
    name = "spawnVehicle",
    rank = getRank("admin"),
    log = "Spawned Car (",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        local target = pData.target.source ~= "" and pData.target.source or pSource
        local addMods = pData.Mods
        local vin = pData.Vin ~= "" and pData.Vin or nil
        local vehicle = pData.Vehicle ~= "" and pData.Vehicle or nil or pData["Vehicle Overwrite"]
        exports["np-vehicles"]:BasicSpawn(target, vehicle, nil, nil, 'menu', nil, vin, addMods)
        return pData.Vehicle .. ")";
    end,
    adminMenu = {
        command = {
            title = "Vehicle Menu",
            cat = "Utility",
            child = {
                inputs = {"TargetNot", "Vehicle", "Vin", "Vehicle Overwrite"},
                checkBox = {"Mods"}
            }
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}, {
    name = "addSyncedObjects",
    rank = getRank("dev"),
    log = " Added Synced Object ",
    isClientCommand = true,
    adminMenu = {
        command = {
            title = "Add Synced Object",
            cat = "Utility",
            child = {
                inputs = {"Model", "JsonText"}
            }
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}, {
    name = "adminMode",
    rank = getRank("dev"),
    log = " Admin Mode ",
    isClientCommand = true,
    adminMenu = {
        command = {
            title = "Admin Mode",
            cat = "Player",
            child = nil
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}, {
    name = "blips",
    rank = getRank("admin"),
    log = "Toggled Blips",
    isClientCommand = true,
    adminMenu = {
        command = {
            title = "Player Blips",
            cat = "Player",
            child = false
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}, {
    name = "cloak",
    rank = getRank("admin"),
    log = "Toggled Cloaked (",
    isClientCommand = true,
    adminMenu = {
        command = {
            title = "Cloak",
            cat = "Player",
            child = false
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}, {
    name = "deleteEntity",
    rank = getRank("dev"),
    log = " Deleted Entity ",
    isClientCommand = true,
    adminMenu = {
        command = {
            title = "Delete Entity",
            cat = "Utility",
            child = nil
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    },
    selection = {
        title = "Delete Entity",
        child = nil,
        action = "deleteEntity",
        entityType = -1
    }
}, {
    name = "god",
    rank = getRank("dev"),
    log = "set into god mode (",
    isClientCommand = true,
    adminMenu = {
        command = {
            title = "God",
            cat = "Player",
            child = false
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}, {
    name = "noclip",
    rank = getRank("dev"),
    log = "Nocliped (",
    isClientCommand = true,
    adminMenu = {
        command = {
            title = "Noclip",
            cat = "Player",
            child = nil
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}, {
    name = "sprint",
    rank = getRank("dev"),
    log = " set unlimited sprint ( ",
    isClientCommand = true,
    adminMenu = {
        command = {
            title = "Unlimited Sprint",
            cat = "Player",
            child = false
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}, {
    name = "teleport",
    rank = getRank("admin"),
    log = "Teleported to ",
    isClientCommand = true,
    adminMenu = {
        command = {
            title = "Teleport",
            cat = "Player",
            child = {
                inputs = {"Target"}
            }
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}, {
    name = "teleportCoords",
    rank = getRank("admin"),
    log = "Teleported to Coord ",
    isClientCommand = true,
    adminMenu = {
        command = {
            title = "Teleport Coords",
            cat = "Player",
            child = {
                inputs = {"Coords"}
            }
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}, {
    name = "teleportMarker",
    rank = getRank("admin"),
    log = "Teleported to Marker. ",
    isClientCommand = true,
    adminMenu = {
        command = {
            title = "Teleport Marker",
            cat = "Player",
            child = nil
        },
        options = {
            bindKey = {
                value = nil,
                options = {}
            }
        }
    }
}}

RegisterCommand('setJobs', function(source, args, RawCommand)
    local src = source

    TriggerEvent("jobmanager:playerBecameJob", src, "police");
    TriggerClientEvent("jobmanager:playerBecameJob", src, "police");
end)
