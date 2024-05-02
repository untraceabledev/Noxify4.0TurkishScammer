local PedEntries = MenuEntries['peds']

PedEntries[#PedEntries + 1] = {
    data = {
        id = "peds-escort",
        title = _L("menu-players-escort", "Escort"),
        icon = "#general-escort",
        event = "np-police:drag:attempt"
    },
    isEnabled = function(pEntity, pContext)
        return not IsDisabled() and not isEscorting and pEntity and pContext.flags['isPlayer']
    end
}

PedEntries[#PedEntries + 1] = {
    data = {
        id = "peds-cuff",
        title = _L("menu-players-cuff", "Cuff"),
        icon = "#cuffs-cuff",
        event = "np-police:cuffs:attempt"
    },
    isEnabled = function(pEntity, pContext)
        return not IsDisabled() and pEntity and pContext.flags['isPlayer'] and not pContext.flags['isCuffed'] and ((exports["inventory"]:HasItem("cuffs", { quality = 1, quantity = 1 }) or (isPolice or isDoc))) and pContext.distance <= 2.0
    end
}

PedEntries[#PedEntries + 1] = {
    data = {
        id = "peds-ucuff",
        title = _L("menu-players-uncuff", "Uncuff"),
        icon = "#cuffs-uncuff",
        event = "np-police:cuffs:uncuff"
    },
    isEnabled = function(pEntity, pContext)
        return not IsDisabled() and pEntity and pContext.flags['isPlayer'] and pContext.flags['isCuffed'] and ((exports["inventory"]:HasItem("cuffs", { quality = 1, quantity = 1 }) or (isPolice or isDoc)))
    end
}

PedEntries[#PedEntries + 1] = {
    data = {
        id = "peds-unblindfold",
        title = _L("menu-players-remove-bolindfold", "Remove Blindfold"),
        icon = "#blindfold",
        event = "np-captive:captive",
        parameters = { 'isBlindfolded', false }
    },
    isEnabled = function(pEntity, pContext)
        return not IsDisabled() and pEntity and pContext.flags['isPlayer'] and pContext.flags['isBlindfolded']
    end
}

PedEntries[#PedEntries + 1] = {
    data = {
        id = "cuffs:gag",
        title = _L("menu-players-remove-gag", "Remove gag"),
        icon = "#gag",
        event = "np-captive:captive",
        parameters = { 'isGagged', false }
    },
    isEnabled = function(pEntity, pContext)
        return not IsDisabled() and pEntity and pContext.flags['isPlayer'] and pContext.flags['isGagged']
    end
}

PedEntries[#PedEntries + 1] = {
    data = {
        id = "cuffs:jammer",
        title = _L("menu-players-jammer", "Remove GPS Jam"),
        icon = "#gpsjam",
        event = "np-captive:captive",
        parameters = { 'isBlipDisabled', false }
    },
    isEnabled = function(pEntity, pContext)
        return not IsDisabled() and pEntity and pContext.flags['isCuffed'] and pContext.flags['isPlayer'] and
            pContext.flags['isBlipDisabled']
    end
}


PedEntries[#PedEntries + 1] = {
    data = {
        id = "cuffs:deafen",
        title = _L("menu-players-remove-deafener", "Remove deafener"),
        icon = "#deafen",
        event = "np-captive:captive",
        parameters = { 'isDeafened', false }
    },
    isEnabled = function(pEntity, pContext)
        return not IsDisabled() and pEntity and pContext.flags['isPlayer'] and pContext.flags['isDeafened']
    end
}

PedEntries[#PedEntries + 1] = {
    data = {
        id = "peds-cuffActions",
        title = _L("menu-players-cuff-actions", "Cuff Actions"),
        icon = "#cuffs",
    },
    subMenus = { "cuffs:remmask", "cuffs:blindfold", "cuffs:gag", "cuffs:jammer", "cuffs:deafen" },
    isEnabled = function(pEntity, pContext)
        return not IsDisabled() and pEntity and pContext.flags['isPlayer'] and pContext.flags['isCuffed'] and ((exports["inventory"]:HasItem("cuffs", { quality = 1, quantity = 1 }) or (isPolice or isDoc)))
    end
}

PedEntries[#PedEntries + 1] = {
    data = {
        id = "peds-medicActions",
        title = _L("menu-players-medical-actions", "Medical Actions"),
        icon = "#medic",
    },
    subMenus = { "medic:inspect", "medic:revive" },
    isEnabled = function(pEntity, pContext)
        return not IsDisabled() and pEntity and pContext.flags['isPlayer'] and (isMedic or isDoctor)
    end
}

PedEntries[#PedEntries + 1] = {
    data = {
        id = "police-action",
        title = _L("menu-players-police-actions", "Police Actions"),
        icon = "#police-action",
    },
    subMenus = { "police:cufflog", "police:search", "police:fingerprint", "police:checkBank", "police:gsr", "police:seizeItems", "medic:inspect", "medic:revive" },
    isEnabled = function(pEntity, pContext)
        return not IsDisabled() and pEntity and pContext.flags['isPlayer'] and (isPolice or isDoc) and
            pContext.distance <= 2.0
    end
}

-- PedEntries[#PedEntries + 1] = {
--     data = {
--         id = "steal-shoes",
--         title = _L("menu-players-steal-shoes", "Steal shoes"),
--         icon = "#shoes",
--         event = "shoes:steal"
--     },
--     isEnabled = function(pEntity, pContext)
--         return not IsDisabled() and not (isPolice or isDoc) and pEntity and pContext.flags['isPlayer'] and
--             (pContext.flags['isCuffed'] or pContext.flags['isDead'] or isPersonBeingHeldUp(pEntity))
--     end
-- }

PedEntries[#PedEntries + 1] = {
    data = {
        id = "rob-player",
        title = "Steal",
        icon = "#steal",
        event = "inventory:robPlayer"
    },
    isEnabled = function(pEntity, pContext)
        return not IsDisabled() and not (isPolice or isDoc) and pEntity and pContext.flags['isPlayer'] and
            (pContext.flags['isCuffed'] or pContext.flags['isDead'] or isPersonBeingHeldUp(pEntity))
    end
}

PedEntries[#PedEntries + 1] = {
    data = {
        id = "prison-action",
        title = _L("menu-players-prison-actions", "Prison Actions"),
        icon = "#prison-action",
    },
    subMenus = { "prison:attachCollar", "prison:currentInfo", "prison:assignTask", "prison:assignGroup", "prison:getCell" },
    isEnabled = function(pEntity, pContext)
        return not IsDisabled() and pEntity and pContext.flags['isPlayer'] and (isPolice or isDoc) and
            pContext.distance <= 2.0 and polyChecks.prison.isInside
    end
}

MenuItems['medic:inspect'] = {
    data = {
        id = "medic-inspect",
        title = _L("menu-players-inspect", "Inspect"),
        icon = "#medic-stomachpump",
        event = "wounds:inspection:open",
        parameters = {},
    }
}

MenuItems['medic:revive'] = {
    data = {
        id = "medic-revive",
        title = _L("menu-players-revive", "Revive"),
        icon = "#medic-revive",
        event = "wounds:medic:revive",
        parameters = {},
    }
}

MenuItems['police:search'] = {
    data = {
        id = "peds-search",
        title = _L("menu-players-search", "Search"),
        icon = "#cuffs-check-inventory",
        event = "police:checkInventory"
    }
}

MenuItems['police:cufflog'] = {
    data = {
        id = "peds-cuff-log",
        title = "Recent Cuff Actions",
        icon = "#cuffs-cuff",
        event = "np-police:openRecentCuffsMenu",
        parameters = {}
    }
}

MenuItems['cuffs:remmask'] = {
    data = {
        id = "cuffs:remmask",
        title = _L("menu-players-remove-mask", "Remove Mask Hat"),
        icon = "#cuffs-remove-mask",
        event = "police:remmask"
    }
}

MenuItems['police:seizeItems'] = {
    data = {
        id = "police:seizeItems",
        title = _L("menu-players-seize-possessions", "Seize Possessions"),
        icon = "#steal",
        event = "np-police:client:seizeItems"
    },
    isEnabled = function(pEntity, pContext)
        return polyChecks.police.isInside
    end
}

MenuItems['cuffs:blindfold'] = {
    data = {
        id = "cuffs:blindfold",
        title = _L("menu-players-blindfold", "Blindfold"),
        icon = "#blindfold",
        event = "np-captive:captive",
        parameters = { 'isBlindfolded', true }
    },
    isEnabled = function(pEntity, pContext)
        return not IsDisabled() and pEntity and pContext.flags['isCuffed'] and pContext.flags['isPlayer'] and not pContext.flags['isBlindfolded'] and ((exports["inventory"]:HasItem("blindfold", { quality = 1, quantity = 1 })))
    end
}

MenuItems['cuffs:gag'] = {
  data = {
      id = "cuffs:gag",
      title = _L("menu-players-gag", "Gag"),
      icon = "#gag",
      event = "np-captive:captive",
      parameters = { 'isGagged', true }
  },
  isEnabled = function(pEntity, pContext)
      return not IsDisabled() and pEntity and pContext.flags['isCuffed'] and pContext.flags['isPlayer'] and not pContext.flags['isGagged'] and ((exports["inventory"]:HasItem("gag_sock", { quality = 1, quantity = 1 })))
  end
}

MenuItems['cuffs:jammer'] = {
    data = {
        id = "cuffs:jammer",
        title = _L("menu-players-jammer", "GPS Jam"),
        icon = "#gpsjam",
        event = "np-captive:captive",
        parameters = { 'isBlipDisabled', true }
    },
    isEnabled = function(pEntity, pContext)
        return not IsDisabled() and pEntity and pContext.flags['isCuffed'] and pContext.flags['isPlayer'] and not pContext.flags['isBlipDisabled'] and ((exports["inventory"]:HasItem("gpsjammer", { quality = 1, quantity = 1 })))
    end
}

MenuItems['cuffs:deafen'] = {
    data = {
        id = "cuffs:deafen",
        title = _L("menu-players-deafen", "Deafen"),
        icon = "#deafen",
        event = "np-captive:captive",
        parameters = { 'isDeafened', true }
    },
    isEnabled = function(pEntity, pContext)
        return not IsDisabled() and pEntity and pContext.flags['isCuffed'] and pContext.flags['isPlayer'] and not pContext.flags['isDeafened'] and ((exports["inventory"]:HasItem("deafener", { quality = 1, quantity = 1 })))
    end
}

MenuItems['police:fingerprint'] = {
    data = {
        id = "police:fingerprint",
        icon = "#police-action-fingerprint",
        title = _L("menu-players-check-fingerprint", "Check Fingerprint"),
        event = "np-police:client:fingerPrint"
    },
    isEnabled = function(pEntity, pContext)
        return not isDead and pContext.flags and isPolice or isDoc
    end
}

MenuItems['police:checkBank'] = {
    data = {
        id = "police:checkBank",
        icon = "#police-check-bank",
        title = _L("menu-players-check-bank", "Check Bank"),
        event = "police:checkBank"
    },
    isEnabled = function(pEntity, pContext)
        return not isDead and pContext.flags and isPolice
    end
}

MenuItems['police:gsr'] = {
    data = {
        id = "police:gsr",
        icon = "#police-action-gsr",
        title = _L("menu-players-check-gsr", "Check GSR"),
        event = "police:gsr"
    },
    isEnabled = function(pEntity, pContext)
        return not isDead and pContext.flags and isPolice
    end
}

MenuItems['prison:attachCollar'] = {
    data = {
        id = "prison:attachCollar",
        title = _L("menu-players-attach-gps-collar", "Attach GPS Collar"),
        icon = "#prisoner-collar",
        event = "np-jail:attachCollar"
    }
}

MenuItems['prison:currentInfo'] = {
    data = {
        id = "prison:currentInfo",
        title = _L("menu-players-get-prisoner-info", "Get Prisoner Info"),
        icon = "#prisoner-info",
        event = "np-jail:showPrisonerInfo"
    }
}

MenuItems['prison:assignTask'] = {
    data = {
        id = "prison:assignTask",
        title = _L("menu-players-assign-group-task", "Assign Group Task"),
        icon = "#prisoner-task",
        event = "np-jail:assignTask"
    }
}

MenuItems['prison:assignGroup'] = {
    data = {
        id = "prison:assignGroup",
        title = _L("menu-players-assign-group", "Assign Group"),
        icon = "#prisoner-group",
        event = "np-jail:assignGroup"
    }
}

MenuItems['prison:getCell'] = {
    data = {
        id = "prison:getCell",
        title = _L("menu-players-view-cell", "View Assigned Cell"),
        icon = "#prisoner-info",
        event = "np-jail:getOthersCell"
    }
}

PedEntries[#PedEntries + 1] = {
    data = {
        id = "peds-biteplayer",
        title = "Bite",
        icon = "#general-bite",
        event = "np-vampire:bitePlayer"
    },
    isEnabled = function(pEntity, pContext)
        return not IsDisabled() and pEntity and pContext.flags['isPlayer'] and isVampire
    end
}

PedEntries[#PedEntries + 1] = {
    data = {
        id = "peds-biteplayer2",
        title = "Mega Bite",
        icon = "#general-bite",
        event = "np-vampire:megaBitePlayer"
    },
    isEnabled = function(pEntity, pContext)
        return not IsDisabled() and pEntity and pContext.flags['isPlayer'] and isVampire
    end
}
