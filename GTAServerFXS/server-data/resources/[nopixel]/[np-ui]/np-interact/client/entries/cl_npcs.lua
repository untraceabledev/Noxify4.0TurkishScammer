local Entries = {}

Entries[#Entries + 1] = {
    type = 'flag',
    group = { 'isNPC' },
    data = {
        {
            id = "common_job_signIn",
            label = _L("interact-sign-in", "Sign in"),
            icon = "circle",
            event = "np-npcs:ped:signInJob",
            parameters = {}
        },
        {
            id = "common_job_signOut",
            label = _L("interact-sign-out", "Sign out"),
            icon = "circle",
            event = "np-npcs:ped:signInJob",
            parameters = { "unemployed" }
        }
    },
    options = {
        npcIds = { "news_reporter" },
        distance = { radius = 2.5 }
    }
}

Entries[#Entries + 1] = {
    type = 'flag',
    group = { 'isJobEmployer' },
    data = {
        {
            id = "jobs_employer_checkIn",
            label = _L("interact-sign-in", "Sign in"),
            icon = "circle",
            event = "jobs:checkIn",
            parameters = {}
        }
    },
    options = {
        distance = { radius = 2.5 },
        isEnabled = function()
            return CurrentJob == 'unemployed'
        end
    }
}

Entries[#Entries + 1] = {
    type = 'flag',
    group = { 'isJobEmployer' },
    data = {
        {
            id = "jobs_employer_paycheck",
            label = _L("interact-get-paycheck", "Get paycheck"),
            icon = "circle",
            event = "jobs:getPaycheck",
            parameters = {}
        },
        {
            id = "jobs_employer_checkOut",
            label = _L("interact-sign-out", "Sign out"),
            icon = "circle",
            event = "jobs:checkOut",
            parameters = {}
        }
    },
    options = {
        distance = { radius = 2.5 },
        isEnabled = function(pEntity, pContext)
            return pContext.job.id == CurrentJob
        end
    }
}

Entries[#Entries + 1] = {
    type = 'flag',
    group = { 'isShopKeeper' },
    data = {
        {
            id = "shopkeeper",
            label = _L("interact-purchase-goods", "Purchase goods"),
            icon = "circle",
            event = "np-npcs:ped:keeper",
            parameters = { "247" }
        }
    },
    options = {
        distance = { radius = 2.5 }
    }
}

Entries[#Entries + 1] = {
    type = 'flag',
    group = { 'isNPC' },
    data = {
        {
            id = "laundromatkeeper",
            label = _L("interact-purchase-goods", "Purchase goods"),
            icon = "circle",
            event = "np-npcs:ped:keeper",
            parameters = { "laundromat" }
        }
    },
    options = {
        distance = { radius = 2.5 },
        npcIds = {"laundromat_1"}
    }
}

Entries[#Entries + 1] = {
    type = 'flag',
    group = { 'isNPC' },
    data = {
        {
            id = "clickloverskeeper",
            label = _L("interact-purchase-goods", "Purchase goods"),
            icon = "circle",
            event = "np-npcs:ped:keeper",
            parameters = { "electronics" }
        }
    },
    options = {
        distance = { radius = 2.5 },
        npcIds = {"clicklovers_1"}
    }
}

Entries[#Entries + 1] = {
    type = 'flag',
    group = { 'isNPC' },
    data = {
        {
            id = "locksmithkeeper",
            label = _L("interact-purchase-goods", "Purchase goods"),
            icon = "circle",
            event = "np-npcs:ped:keeper",
            parameters = { "locksmith" }
        }
    },
    options = {
        distance = { radius = 2.5 },
        npcIds = {"locksmith_1"}
    }
}

Entries[#Entries + 1] = {
    type = 'flag',
    group = { 'isNPC' },
    data = {
        {
            id = "sewerskeeper",
            label = _L("interact-purchase-goods", "Purchase goods"),
            icon = "circle",
            event = "np-npcs:ped:keeper",
            parameters = { "hobo" }
        }
    },
    options = {
        distance = { radius = 2.5 },
        npcIds = {"sewers_1"}
    }
}

Entries[#Entries + 1] = {
    type = 'flag',
    group = { 'isNPC' },
    data = {
        {
            id = "librarykeeper",
            label = _L("interact-purchase-goods", "Purchase goods"),
            icon = "circle",
            event = "np-npcs:ped:keeper",
            parameters = { "library" }
        }
    },
    options = {
        distance = { radius = 2.5 },
        npcIds = {"library_1"}
    }
}

Entries[#Entries + 1] = {
  type = 'flag',
  group = { 'isNPC' },
  data = {
      {
          id = "licensekeeper_bank",
          label = "Purchase License ($50.00) (Bank)",
          icon = "id-card-alt",
          NPXEvent = "np-gov:npc:purchaseDriversLicense",
          parameters = { type = "bank" },
      },
      {
        id = "licensekeeper_cash",
        label = "Purchase License ($100.00) (Cash)",
        icon = "id-card-alt",
        NPXEvent = "np-gov:npc:purchaseDriversLicense",
        parameters = { type = "cash" },
    }
  },
  options = {
      distance = { radius = 2.5 },
      npcIds = {"npc_license_keeper_1", "npc_license_keeper_2"}
  }
}

Entries[#Entries + 1] = {
    type = 'flag',
    group = { 'isWeaponShopKeeper' },
    data = {
        {
            id = "weaponshop_keeper",
            label = _L("interact-purchase-weapons", "Purchase weapons"),
            icon = "circle",
            event = "np-npcs:ped:keeper",
            parameters = { "weapons" }
        }
    },
    options = {
        distance = { radius = 2.5 }
    }
}

Entries[#Entries + 1] = {
    type = 'flag',
    group = { 'isToolShopKeeper' },
    data = {
        {
            id = "toolshop_keeper",
            label = _L("interact-purchase-tools", "Purchase tools"),
            icon = "circle",
            event = "np-npcs:ped:keeper",
            parameters = { "tools" }
        }
    },
    options = {
        distance = { radius = 2.5 }
    }
}

local validAnimalModels = {
  [`a_c_chop`] = true,
  [`a_c_husky`] = true,
  [`a_c_husky_np`] = true,
  [`a_c_panther`] = true,
  [`a_c_cat_01`] = true,
  [`a_c_poodle`] = true,
  [`a_c_pug`] = true,
  [`a_c_retriever`] = true,
  [`a_c_retriever_np`] = true,
  [`a_c_shepherd`] = true,
  [`a_c_shepherd_np`] = true,
  [`a_c_pit_np`] = true,
  [`a_c_pug_np`] = true,
  [`a_c_coyote`] = true,
  [`a_c_rottweiler`] = true,
  [`a_c_westy`] = true,
  [`a_c_westy_np`] = true,
}
Entries[#Entries + 1] = {
  type = 'entity',
  group = { 1 },
  data = {
      {
          id = "petthebaby",
          label = _L("interact-pet-animal", "Pet"),
          icon = "circle",
          event = "np-interact:doPettingAnimal",
          parameters = "petting",
      },
  },
  options = {
      distance = { radius = 2.5 },
      isEnabled = function(pEntity, pContext)
        -- -- Don't show options if this entity is dead 
        if pContext.isDead then
            return
        end

        return validAnimalModels[pContext.model]
      end,
  }
}
AddEventHandler("np-interact:doPettingAnimal", function()
  TriggerEvent("animation:runtextanim", "petting")
end)

function isCompanionOrPlayerAnimal(pEntity)
  local animalHash = GetEntityModel(pEntity)
  return (DecorGetInt(pEntity, "COMPANION_ID") ~= 0 or IsPedAPlayer(pEntity)) and (
    animalHash == `a_c_cow` or
    animalHash == `a_c_boar` or
    animalHash == `a_c_horse` or
    animalHash == `a_c_deer` or
    animalHash == `BrnBear` or
    (GetEntityModel(PlayerPedId()) == `ratboy` and animalHash == `a_c_mtlion`)
  )
end

Entries[#Entries + 1] = {
  type = 'entity',
  group = { 1 },
  data = {
      {
          id = "companion_mount",
          label = _L("interact-companions-mount", "Mount"),
          icon = "circle",
          event = "np-companions:client:mountCompanion",
          parameters = {},
      },
  },
  options = {
      distance = { radius = 2.5 },
      isEnabled = function(pEntity)
        if IsEntityAttachedToEntity(PlayerPedId(), pEntity) then
          return false
        end
        local nearbyPlayers = GetActivePlayers()
        for k, v in pairs(nearbyPlayers) do
          local playerPed = GetPlayerPed(v)
          if IsEntityAttachedToEntity(playerPed, pEntity) then
            return false
          end
        end
        return isCompanionOrPlayerAnimal(pEntity)
      end,
  }
}

Entries[#Entries + 1] = {
  type = 'entity',
  group = { 1 },
  data = {
      {
          id = "companion_unmount",
          label = _L("interact-companions-unmount", "Unmount"),
          icon = "circle",
          event = "np-companions:client:unmountCompanion",
          parameters = {},
      },
  },
  options = {
      distance = { radius = 2.5 },
      isEnabled = function(pEntity)
        return isCompanionOrPlayerAnimal(pEntity) and IsEntityAttachedToEntity(PlayerPedId(), pEntity)
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
