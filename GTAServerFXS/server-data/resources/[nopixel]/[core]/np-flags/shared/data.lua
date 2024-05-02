Flags = {}

local curVehicleFlag = 1
local function prevVehicleFlag()
    curVehicleFlag = curVehicleFlag * 2
    return curVehicleFlag / 2
end

Flags["VehicleFlags"] = {
    isPlayerVehicle = 2,
    isStolenVehicle = 4,
    isScrapVehicle = 8,
    isHotwiredVehicle = 16,
    isTowingVehicle = 32,
    isBoostingContractVehicle = 64,
    isRentalVehicle = 128,
    isCarShopVehicle = prevVehicleFlag(),
}

local curPedFlag = 1
local function prevPedFlag()
  curPedFlag = curPedFlag * 2
  return curPedFlag / 2
end
Flags["PedFlags"] = { --!DO NOT ADD ANY MORE FLAGS, INT EXCEEDS FIVEM LIMIT!
  isDead = prevPedFlag(),
  isCuffed = prevPedFlag(),
  isRobbing = prevPedFlag(),
  isEscorting = prevPedFlag(),
  isEscorted = prevPedFlag(),
  isBlindfolded = prevPedFlag(),
  isInTrunk = prevPedFlag(),
  isInBeatMode = prevPedFlag(),
  isInsideVanillaUnicorn = prevPedFlag(),
  isNPC = prevPedFlag(),
  isJobEmployer = prevPedFlag(),
  isSittingOnChair = prevPedFlag(),
  isPoledancing = prevPedFlag(),
  isPawnBuyer = prevPedFlag(),
  isRecycleExchange = prevPedFlag(),
  isCommonJobProvider = prevPedFlag(),
  isVehicleSpawner = prevPedFlag(),
  isBoatRenter = prevPedFlag(),
  isMethDude = prevPedFlag(),
  isBankAccountManager = prevPedFlag(),
  isShopKeeper = prevPedFlag(),
  isWeaponShopKeeper = prevPedFlag(),
  isToolShopKeeper = prevPedFlag(),
  isSportShopKeeper = prevPedFlag(),
  isWeedShopKeeper = prevPedFlag(),
  isJobVehShopKeeper = prevPedFlag(),
  isWineryShopKeeper = prevPedFlag(),
  isGagged = prevPedFlag(),
  isPetshopSeller = prevPedFlag(),
}


Flags["ObjectFlags"] = {}
