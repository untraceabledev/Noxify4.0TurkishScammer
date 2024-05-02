local Entries = {}

--[[ Entries[#Entries + 1] = {
    type = 'flag',
    group = { 'isYogaMat' },
    data = {
        {
            id = 'yoga',
            label = _L("interact-yoga", "Yoga"),
            icon = "circle",
            event = "np-healthcare:yoga",
            parameters = {}
        }
    },
    options = {
        distance = { radius = 1.5 },
        isEnabled = function(pEntity, pContext)
            return IsEntityTouchingEntity(PlayerPedId(), pEntity)
        end
    }
}

Entries[#Entries + 1] = {
    type = 'flag',
    group = { 'isExercise' },
    data = {
        {
            id = 'weights',
            label = _L("interact-weights", "Weights"),
            icon = "circle",
            event = "np-healthcare:exercise",
            parameters = {}
        }
    },
    options = {
        distance = { radius = 1.2 },
    }
} ]]

-- Entries[#Entries + 1] = {
--     type = 'flag',
--     group = { 'isSmokeMachineTrigger' },
--     data = {
--         {
--             id = 'smoke_machine',
--             label = "Smoke Machine",
--             icon = "circle",
--             event = "np-stripclub:smokemachine",
--             parameters = {}
--         }
--     },
--     options = {
--         distance = { radius = 1.2 },
--     }
-- }

Entries[#Entries + 1] = {
    type = 'flag',
    group = { 'isFuelPump' },
    data = {
        {
            id = 'jerrycan_refill',
            label = _L("interact-jerrycan-refill", "Refill Can"),
            icon = "circle",
            event = "vehicle:refuel:showMenu",
            parameters = { isJerryCan = true }
        }
    },
    options = {
        distance = { radius = 1.5 },
        isEnabled = function(pEntity, pContext)
            return HasWeaponEquipped(GetHashKey('WEAPON_PetrolCan'))
        end
    }
}

Entries[#Entries + 1] = {
    type = 'flag',
    group = { 'isVendingMachine' },
    data = {
        {
            id = 'vending_machine',
            label = _L("interact-vending-browse", "Browse"),
            icon = "shopping-basket",
            event = "shops:vendingMachine",
            parameters = {}
        }
    },
    options = {
        distance = { radius = 1.5 }
    }
}

Entries[#Entries + 1] = {
    type = 'flag',
    group = { 'isATM' },
    data = {
        {
            id = 'use_atm',
            label = _L("interact-atm", "Use ATM"),
            icon = "credit-card",
            event = "financial:openUI",
            parameters = {}
        }
    },
    options = {
        distance = { radius = 1.5 }
    }
}

Entries[#Entries + 1] = {
  type = 'model',
  group = { `np_prop_ch_cash_trolly_01c` },
  data = {
      {
          id = 'trolleygrab',
          label = _L("interact-trolley-grab", "Grab it!"),
          icon = "hand-holding",
          event = "np-heists:grabFromTrolley",
          parameters = { type = "cash" }
      }
  },
  options = {
      distance = { radius = 1.5 }
  }
}

Entries[#Entries + 1] = {
    type = 'model',
    group = { `V_Club_Roc_MicStd` },
    data = {
        {
            id = 'microcboost',
            label = _L("interact-use-microphone", "Use Microphone"),
            icon = "circle",
            event = "np-audio:useMicrophone",
            parameters = {},
        }
    },
    options = {
        distance = { radius = 1.5 }
    }
}

Entries[#Entries + 1] = {
  type = 'model',
  group = { `np_prop_gold_trolly_01c` },
  data = {
      {
          id = 'trolleygrabgold',
          label = _L("interact-trolley-grab", "Grab it!"),
          icon = "hand-holding",
          event = "np-heists:grabFromTrolley",
          parameters = { type = "gold" }
      }
  },
  options = {
      distance = { radius = 1.5 }
  }
}

local benchCids = {
    [11670] = GetConvar('sv_serverType', 'whitelisted') == "whitelisted",
    [1633] = GetConvar('sv_serverType', 'whitelisted') == "public",
}
Entries[#Entries + 1] = {
    type = 'model',
    group = {
        `prop_bench_01a`,
        `prop_bench_01b`,
        `prop_bench_01c`,
        `prop_bench_02`,
        `prop_bench_03`,
        `prop_bench_04`,
        `prop_bench_05`,
        `prop_bench_06`,
        `prop_bench_07`,
        `prop_bench_08`,
        `prop_bench_09`,
        `prop_bench_10`,
        `prop_bench_11`,
    },
    data = {
        {
            id = 'benchdismantle',
            label = _L("interact-trolley-grab", "Dismantle bench!"),
            icon = "circle",
            event = "np-business:bench:dismantle",
            parameters = {},
        }
    },
    options = {
        distance = { radius = 1.5 },
        isEnabled = function()
            local cid = exports["isPed"]:isPed('cid')
            return benchCids[cid]
        end,
    }
}
Entries[#Entries + 1] = {
    type = 'model',
    group = {
        666561306,
        218085040,
        -58485588,
        682791951,
        -206690185,
        364445978,
        143369,
    },
    data = {
        {
            id = 'opendumpster',
            label = _L("interact-open-dumpster", "Open Stash"),
            icon = "box",
            event = "inventory:openDumpster",
            parameters = {},
        }
    },
    options = {
        distance = { radius = 1.5 },
        isEnabled = function()
            return true
        end,
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
