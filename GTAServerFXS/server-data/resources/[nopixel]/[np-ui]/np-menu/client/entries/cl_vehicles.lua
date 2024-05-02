local VehicleEntries = MenuEntries['vehicles']

VehicleEntries[#VehicleEntries + 1] = {
  data = {
    id = "vehicle-parkvehicle",
    title = _L("menu-vehicles-parkvehicle", "Park Vehicle"),
    icon = "#vehicle-parkvehicle",
    event = "vehicle:storeVehicle"
  },
  isEnabled = function(pEntity, pContext)
    return not IsDisabled() and exports['np-vehicles']:HasVehicleKey(pEntity) and
        exports['np-vehicles']:IsOnParkingSpot(pEntity, false) and not IsPedInAnyVehicle(PlayerPedId(), false)
  end
}

VehicleEntries[#VehicleEntries + 1] = {
  data = {
    id = "impound-vehicle",
    title = _L("menu-vehicles-impoundrequest", "Impound Request"),
    icon = "#vehicle-impound",
    event = "np-jobs:impound:openImpoundRequestMenu",
    parameters = {}
  },
  isEnabled = function(pEntity, pContext)
    return not IsDisabled() and pContext.distance <= 2.5 and not IsPedInAnyVehicle(PlayerPedId(), false)
  end
}

VehicleEntries[#VehicleEntries + 1] = {
  data = {
    id = "prepare-boat-trailer",
    title = _L("menu-vehicles-prepformount", "Prep for Mount"),
    icon = "#vehicle-plate-remove",
    event = "vehicle:primeTrailerForMounting"
  },
  isEnabled = function(pEntity, pContext)
    local model = GetEntityModel(pEntity)
    return not IsDisabled() and (model == `boattrailer` or model == `trailersmall`)
  end
}

VehicleEntries[#VehicleEntries + 1] = {
  data = {
    id = "showrooms-testdrive-return",
    title = "Return Vehicle",
    icon = "#vehicle-parkvehicle",
    event = "showrooms:testDrive:returnVehicle"
  },
  isEnabled = function(pEntity, pContext)
    return not IsDisabled() and pContext.distance <= 2.5 and exports["showrooms"]:canReturnVehicle(pEntity)
  end
}