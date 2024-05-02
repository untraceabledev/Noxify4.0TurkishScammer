local currentJob = nil

RegisterNetEvent("jobmanager:playerBecameJob")
AddEventHandler("jobmanager:playerBecameJob", function(job, notify)
  currentJob = job
end)

function getHasRaceUsbAndAlias()
  local characterId = exports["isPed"]:isPed("cid")
  local racingCreateUsbItem = --[[ exports["np-inventory"]:GetInfoForFirstItemOfName("racingusb0") ]] nil
  local racingUsbItem = --[[ exports["np-inventory"]:GetInfoForFirstItemOfName("racingusb2") ]] nil
  local pdRacingUsbItem = --[[ exports["np-inventory"]:GetInfoForFirstItemOfName("racingusb3") ]] nil
  local has_usb_racing = racingUsbItem ~= nil and racingUsbItem.quality > 0
  local has_usb_racing_create = racingCreateUsbItem ~= nil and racingCreateUsbItem.quality > 0
  local has_usb_pd_racing = pdRacingUsbItem ~= nil and currentJob == "police"
  local usbMetadata = has_usb_racing and json.decode(racingUsbItem.information) or {}
  local usbCreateMetadata = has_usb_racing_create and json.decode(racingCreateUsbItem.information) or {}
  has_usb_racing = has_usb_racing and characterId == usbMetadata.characterId
  has_usb_racing_create = has_usb_racing_create and characterId == usbCreateMetadata.characterId
  local racingAlias = has_usb_racing and usbMetadata.Alias or nil
  return { has_usb_racing = true, has_usb_racing_create = true, has_usb_pd_racing = false, racingAlias = "Test" }
  --return { has_usb_racing = has_usb_racing, has_usb_racing_create = has_usb_racing_create, has_usb_pd_racing = has_usb_pd_racing, racingAlias = racingAlias }
end
exports("getHasRaceUsbAndAlias", getHasRaceUsbAndAlias)

function canJoinOrStartRace(expectedVehicleClass)
  local ped = PlayerPedId()
  local veh = GetVehiclePedIsIn(ped, false)
  if veh == 0 then return "Must be in vehicle" end
  local driver = GetPedInVehicleSeat(veh, -1)
  if ped ~= driver then return "Must be the driver" end
  local vehicleModel = GetEntityModel(veh)
  local vehicleClass = exports["np-boosting"]:GetVehicleClassByModel(vehicleModel)
  local vehicleClassError = isUnacceptedVehicleClass(expectedVehicleClass, vehicleClass)
  if vehicleClassError ~= nil then return vehicleClassError end
  return true
end
exports("canJoinOrStartRace", canJoinOrStartRace)
