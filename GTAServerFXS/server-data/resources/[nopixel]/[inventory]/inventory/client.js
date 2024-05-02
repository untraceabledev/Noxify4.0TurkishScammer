let usedSlots = [];
let boundItems = {};
let boundItemsInfo = {};
let ammoTable = {};
let boundItemsAmmo = {};
let canOpen = true;
let dropName = 'none';
let DroppedInventories = [];
let NearInventories = [];
let DrawInventories = [];
let MyInventory = [];
let MyItemCount = 0;
let cash = 0;
let openedInv = false;
let cid = 0;
let personalWeight = 0;
let maxPlayerWeight = 250;
let hadBrought = [];
let taxLevel = 0;

let enableBlur = true;

//0x49 = i
let objectDumps = [
    { objectID: 666561306, Description: 'Blue Dumpster' },
    { objectID: 218085040, Description: 'Light Blue Dumpster' },
    { objectID: -58485588, Description: 'Gray Dumpster' },
    { objectID: 682791951, Description: 'Big Blue Dumpster' },
    { objectID: -206690185, Description: 'Big Green Dumpster' },
    { objectID: 364445978, Description: 'Big Green Skip Bin' },
    { objectID: 143369, Description: 'Small Bin' },
];

let objectPermDumps = [
    { objectID: 344662182, Description: 'Jail Yellow Bin' },
    { objectID: 1923262137, Description: 'Jail Electrical Box' },
    { objectID: -686494084, Description: 'Jail Electrical Box 2' },
    { objectID: 1419852836, Description: 'Jail Electrical Box 3' },
    { objectID: -1149940374, Description: 'Small Bin Food Room' },
    { objectID: -41273338, Description: 'Small Bin Food Room' },
    { objectID: -686494084, Description: 'Small Bin Food Room' },
];

const blockedGloveblockVehicles = [1304664290];

// please forgive me.
const ignoreMetaKeysInComparison = ["_remove_id", "_hideKeys", "_is_poisoned", "_foodEnhancements", "potency", "interval", "duration", "nonLethal", "quality",  "foodEnhancement", "_foodEnhancement", "_crafted", "_factory"];

const isObject = (object) => object != null && typeof object === 'object';
const deepEqual = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      areObjects && !deepEqual(val1, val2) ||
      !areObjects && val1 !== val2
    ) {
      return false;
    }
  }
  return true;
}
const isMetadataEqual = (obj1, obj2) => {
  const removedKeys = ignoreMetaKeysInComparison.reduce((acc, key) => {
    acc[key] = undefined;
    return acc;
  }, {});

  if (obj1._stack_id && obj2._stack_id && obj1._stack_id === obj2._stack_id) {
    return true;
  }

  return deepEqual(
    { ...obj1, ...removedKeys },
    { ...obj2, ...removedKeys }
  );
}

function ScanContainers() {
    let player = PlayerPedId();
    let startPosition = GetOffsetFromEntityInWorldCoords(player, 0, 0.1, 0);
    let endPosition = GetOffsetFromEntityInWorldCoords(player, 0, 1.8, -0.4);

    let rayhandle = StartShapeTestRay(
        startPosition[0],
        startPosition[1],
        startPosition[2],
        endPosition[0],
        endPosition[1],
        endPosition[2],
        16,
        player,
        0,
    );

    let vehicleInfo = GetShapeTestResult(rayhandle);

    let hitData = vehicleInfo[4];

    let model = 0;
    let entity = 0;
    if (hitData) {
        model = GetEntityModel(hitData);
    }
    if (model !== 0) {
        for (let x in objectDumps) {
            if (x) {
                if (objectDumps[x].objectID == model) {
                    return GetEntityCoords(hitData);
                }
            }
        }
    }
}

function ScanJailContainers() {
    let player = PlayerPedId();
    let startPosition = GetOffsetFromEntityInWorldCoords(player, 0, 0.1, 0);
    let endPosition = GetOffsetFromEntityInWorldCoords(player, 0, 1.8, -0.4);

    let rayhandle = StartShapeTestRay(
        startPosition[0],
        startPosition[1],
        startPosition[2],
        endPosition[0],
        endPosition[1],
        endPosition[2],
        16,
        player,
        0,
    );

    let vehicleInfo = GetShapeTestResult(rayhandle);

    let hitData = vehicleInfo[4];

    let model = 0;
    let entity = 0;
    if (hitData) {
        model = GetEntityModel(hitData);
    }
    if (model !== 0) {
        for (let x in objectPermDumps) {
            if (x) {
                if (objectPermDumps[x].objectID == model) {
                    return GetEntityCoords(hitData);
                }
            }
        }
    }
}

let watch = [];

RegisterNetEvent('watch-inventory');
on('watch-inventory', (src, cash, name) => {
    watch = [src, name]
    emit('chatMessage', 'SEARCH ', 2, "Player had cash in the amount of: " + cash, 'feed', false, { i18n: ['Player had cash in the amount of'] });
});

RegisterNetEvent('np-base:playerSpawned');
on('np-base:playerSpawned', async (broughtData) => {
    emitNet('server-request-update', cid);
    SendNuiMessage(JSON.stringify({ response: 'SendItemList', list: await itemListWithTax() }));
    UpdateSettings();


});

RegisterNuiCallbackType('Weight');
on('__cfx_nui:Weight', (data, cb) => {
    personalWeight = data.weight;
    cb({});
});
RegisterNuiCallbackType('Close');
on('__cfx_nui:Close', (data, cb) => {
    CloseGui(data.isItemUsed);
    cb({});
});

RegisterNuiCallbackType('GiveItem');
on('__cfx_nui:GiveItem', (data, cb) => {
    if (!data[3]) {
        return;
    }

    let id = data[0];
    let amount = data[1];
    let generateInformation = data[2];
    let nonStacking = data[4];
    let itemdata = data[5];

    emit('hud-display-item', id, 'Received', amount);
    GiveItem(id, amount, generateInformation, nonStacking, itemdata, data[6]);
    cb({});
});

RegisterNuiCallbackType('UpdateSettings');
on('__cfx_nui:UpdateSettings', (data, cb) => {
    let holdToDrag = data.holdToDrag;
    let closeOnClick = data.closeOnClick;
    let ctrlMovesHalf = data.ctrlMovesHalf;
    let showTooltips = data.showTooltips;
    enableBlur = data.enableBlur;
    SetResourceKvpInt('inventorySettings-HoldToDrag', holdToDrag ? 0 : 1);
    SetResourceKvpInt('inventorySettings-CloseOnClick', closeOnClick ? 0 : 1);
    SetResourceKvpInt('inventorySettings-CtrlMovesHalf', ctrlMovesHalf ? 0 : 1);
    SetResourceKvpInt('inventorySettings-ShowTooltips', showTooltips ? 0 : 1);
    SetResourceKvpInt('inventorySettings-EnableBlur', enableBlur ? 0 : 1);
    cb({});
});

RegisterNetEvent('Inventory-brought-update');
on('Inventory-brought-update', (broughtData) => {
    hadBrought = JSON.parse(broughtData);
});

RegisterNetEvent('player:receiveItem');
on('player:receiveItem', async (id, amount, generateInformation, itemdata, returnData = '{}', devItem = false) => {
    if (!(id in itemList)) {
        //Try to hash the ID
        let hashed = GetHashKey(id);
        if (hashed in itemList) {
            id = hashed;
        } else {
            //If item is still not found, try to find by name
            Object.keys(itemList).forEach(function (key) {
                if (itemList[key].displayname.toLowerCase().trim().replace(' ', '') === id.toLowerCase().trim().replace(' ', '')) {
                    id = key;
                    return;
                }
            });
        }
    }

    let combined = parseFloat(itemList[id].weight) * parseFloat(amount);
    if ((parseFloat(personalWeight) > maxPlayerWeight || parseFloat(personalWeight) + combined > maxPlayerWeight) && !devItem) {
        emit('DoLongHudText', 'Items fell on the ground because you are overweight', 2);
        let droppedItem = { slot: 3, itemid: id, amount: amount, generateInformation: generateInformation, data: Object.assign({}, itemdata), returnData: returnData };
        cid = exports.isPed.isPed("cid");
        emitNet('server-inventory-open', GetEntityCoords(PlayerPedId()), cid, '42069', "Drop-Overweight", { "items": [droppedItem] });
        return;
    }
    SendNuiMessage(
        JSON.stringify({
            response: 'GiveItemChecks',
            id: id,
            amount: amount,
            generateInformation: generateInformation,
            data: Object.assign({}, itemdata),
            returnData: typeof returnData === 'string' ? returnData : JSON.stringify(returnData || {}),
        }),
    );
});

exports('itemListInfo', (item_id) => {
    return JSON.stringify(itemList[item_id]);
});

exports('getCurrentWeight', () => {
    return parseFloat(personalWeight);
});

RegisterNetEvent('hud-display-item');
on('hud-display-item', (itemid, text, amount) => {
    if (openedInv) {
        return;
    }
    SendNuiMessage(JSON.stringify({ response: 'UseBar', itemid: itemid, text: text, amount: amount }));
});

let newToggle = false
RegisterNetEvent('inventory-bar');
on('inventory-bar', (toggle) => {
    newToggle = !newToggle
    SendNuiMessage(JSON.stringify({ response: 'DisplayBar', toggle: newToggle, boundItems: boundItems, boundItemsAmmo: boundItemsAmmo }));
});

RegisterNetEvent('inventory:removeItem');
on('inventory:removeItem', (id, amount) => {
    RemoveItem(id, amount);
    emit('hud-display-item', id, 'Removed', amount);
});

RegisterNetEvent('inventory:removeItemBySlot');
on('inventory:removeItemBySlot', (id, amount, slotId) => {
    RemoveItemSlot(id, amount, slotId);
    emit('hud-display-item', id, 'Removed', amount);
});

RegisterNetEvent('inventory:removeItemByMetaKV');
on('inventory:removeItemByMetaKV', (id, amount, metaKey, metaValue) => {
    console.log('inventory:removeItemByMetaKV', id, amount, metaKey, metaValue);
    RemoveItemKV(id, amount, metaKey, metaValue);
    emit('hud-display-item', id, 'Removed', amount);
});

RegisterNetEvent('inventory:removeItemByMultipleMetaKV');
on('inventory:removeItemByMultipleMetaKV', (id, amount, kvs, checkQuality = false) => {
    RemoveItemMultipleKV(id, amount, kvs, checkQuality);
    emit('hud-display-item', id, 'Removed', amount);
});

function RemoveItem(id, amount) {
    cid = exports.isPed.isPed("cid");
    emitNet('server-remove-item', cid, id, amount, openedInv);
}

function RemoveItemSlot(id, amount, slotId) {
    cid = exports.isPed.isPed("cid");
    emitNet('server-remove-item-slot', cid, id, amount, slotId);
}

function RemoveItemKV(id, amount, metaKey, metaValue) {
    cid = exports.isPed.isPed("cid");
    emitNet('server-remove-item-kv', cid, id, amount, metaKey, metaValue, false);
}

function RemoveItemMultipleKV(id, amount, kvs, checkQuality = false) {
  cid = exports.isPed.isPed("cid");
  emitNet('server-remove-item-multiple-kv', cid, id, amount, kvs, checkQuality);
}

function UpdateItem(id, slot, data) {
    cid = exports.isPed.isPed("cid");
    emitNet('server-update-item', cid, id, slot, data);
}

RegisterNetEvent('inventory:updateItem');
on('inventory:updateItem', (id, slot, data) => {
    UpdateItem(id, slot, data);
});

// this is used for giving a dropped item, not put into inventory
RegisterNetEvent('CreateCraftOption');
on('CreateCraftOption', (id, add, craft) => {
    CreateCraftOption(id, add, craft);
});

function CreateCraftOption(id, add, craft) {
    let itemArray = [{ itemid: id, amount: add }];
    if (typeof id === 'object') {
        itemArray = Object.keys(id).map((key) => { return { itemid: id[key], amount: add } });
    } else {
        itemArray = [{ itemid: id, amount: add }];
    }
    
    if (craft === true) {
        emitNet('server-inventory-open', GetEntityCoords(PlayerPedId()), cid, '7', 'Craft', JSON.stringify(itemArray));
    } else {
        emitNet('server-inventory-open', GetEntityCoords(PlayerPedId()), cid, '7', 'Shop', JSON.stringify(itemArray));
    }
}

function removeNum(numbers) {
    return numbers != sql.Inventory[i].slot;
}

// remember to refresh player inventory if we give them an item and they are already inside it because ty dady

let slotsAvailable = [...Array(41).keys()].slice(1);

function ResetCache(fullReset) {
    CacheBinds(JSON.parse(MyInventory));

    slotsAvailable = [...Array(41).keys()].slice(1);
    if (fullReset) {
        usedSlots = [];
    }
}

let hasIncorrectItems = false;

RegisterNuiCallbackType('dropIncorrectItems');
on('__cfx_nui:dropIncorrectItems', (data, cb) => {
    hasIncorrectItems = true;
    if (!canOpen) {
        return;
    }
    canOpen = false;
    emitNet('server-inventory-open', GetEntityCoords(PlayerPedId()), cid, '13', 'Drop', data.slots);
    setTimeout(() => {
        canOpen = true;
    }, 2000);
    cb({});
});

//  $.post("http://np-inventory/SlotJustUsed", JSON.stringify({target: targetSlot, origin: originSlot, itemid: itemidsent }));
let recentused = [];
RegisterNuiCallbackType('SlotJustUsed');
on('__cfx_nui:SlotJustUsed', (data, cb) => {
    let target = data.targetslot;
    if (target < 5 && data.MyInvMove) {
        Rebind(target, data.itemid);
    }
    if (data.move) {
        boundItems[data.origin] = undefined;
    }
    recentused.push(data.origin);
    recentused.push(data.targetslot);
    usedSlots = [];
    cb({});
});

RegisterNuiCallbackType('RepairSlot');
on('__cfx_nui:RepairSlot', (data, cb) => {
    const slot = data.slot;
    emitNet('np-inventory:repairSlot', slot);
    cb({});
});

function doubleCheck(slotcheck) {
    let foundshit = recentused.find((x) => x == slotcheck);
    if (foundshit) {
        return false;
    } else {
        return true;
    }
}

function findSlot(ItemIdToCheck, amount, nonStacking, itemdata) {
  let sqlInventory = JSON.parse(MyInventory);

  let itemCount = parseInt(MyItemCount);
  let foundslot = 0;

  for (let i = 0; i < itemCount; i++) {
      const item = sqlInventory[i];
      let metadata = {};
      try {
        metadata = JSON.parse(item.information);
      } catch (e) {
      }
      if (
        item.item_id == ItemIdToCheck &&
        nonStacking == false &&
        doubleCheck(item.slot) &&
        isMetadataEqual(itemdata, metadata)
      ) {
        foundslot = item.slot;
      }
      if (foundslot) {
        break;
      }
  }

  const key = `${ItemIdToCheck}|${JSON.stringify(itemdata)}`

  if (usedSlots[key] && nonStacking == false) {
      foundslot = usedSlots[key];
      slotsAvailable = slotsAvailable.filter((x) => x != foundslot);
  }

  for (let i = 0; i < itemCount; i++) {
      slotsAvailable = slotsAvailable.filter((x) => x != sqlInventory[i].slot);
  }

  if (foundslot == 0 && slotsAvailable[0] != undefined && slotsAvailable.length > 0) {
      foundslot = slotsAvailable[0];
      usedSlots[key] = foundslot;
      slotsAvailable = slotsAvailable.filter((x) => x != foundslot);
  }

  if (foundslot == 0) {
      emit('DoLongHudText', 'Failed to give item because you were full!', 2);
  }
  return foundslot;
}

let itemListWithTax = async () => {
    const [tax] = await RPC.execute("GetTaxLevel", "Goods");

    for (const key in itemList) {
        let value = itemList[key];
        value.tax = Math.ceil(value.price - value.price / (1 + tax.param / 100));
        value.priceWithTax = value.price + value.tax;
    }

    return itemList;
};

const getItemListWithTax = Cacheable(async () => [true, await itemListWithTax()], { timeToLive: 1000 * 60 * 120 });

let isCuffed = false;
RegisterNetEvent('np-police:cuffs:state');
on('np-police:cuffs:state', (pIsHandcuffed, pIsHandcuffedAndWalking) => {
    isCuffed = pIsHandcuffed || pIsHandcuffedAndWalking;
});

RegisterNetEvent('inventory:open_hidden');
on('inventory:open_hidden', (penis, vehicleFound) => {
    let vehId = exports['np-vehicles'].GetVehicleIdentifier(vehicleFound)
    emitNet('server-inventory-open', GetEntityCoords(PlayerPedId()), cid, '1', `hidden-container|${vehId}`);
    TriggerServerEvent('InteractSound_SV:PlayWithinDistance', 3.0, 'lockpick', 2.0)
    TriggerEvent('DoLongHudText', 'It rattles, it clanks, and now opens a hidden compartment.', 2);
});

RegisterNetEvent('inventory:open_hidden_fail');
on('inventory:open_hidden_fail', (penis, vehicleFound) => {
    TriggerServerEvent('InteractSound_SV:PlayWithinDistance', 3.0, 'lockpick', 2.0)
    TriggerEvent('DoLongHudText', 'It rattles, it clanks, but it just doesnt come loose. Its almost as if the rust is holding it together.', 2);
});

RegisterNetEvent('inventory-open-request');
on('inventory-open-request', async () => {
    if (isCuffed || !canOpen) {
        return;
    }
    setImmediate(async () => {
        SendNuiMessage(JSON.stringify({ response: 'SendItemList', list: await getItemListWithTax() }));
    });

    let player = PlayerPedId();
    let startPosition = GetOffsetFromEntityInWorldCoords(player, 0, 0.5, 0);
    let endPosition = GetOffsetFromEntityInWorldCoords(player, 0, 2.0, -0.4);

    let nearDrop = false;
    let nearSales = false;
    let nearTarget = false;
    let BinFound = ScanContainers();
    let JailBinFound = ScanJailContainers();
    let targetid = 0;
    cid = exports.isPed.isPed("cid");

    OpenGui();
    emit('actionbar:setEmptyHanded', true);

    const currentTarget = exports['np-target'].GetCurrentEntity()

    let vehicleFound = IsModelAVehicle(GetEntityModel(currentTarget)) ? currentTarget : 0

    let jailDst = GetDistanceBetweenCoords(startPosition[0], startPosition[1], startPosition[2], 1700.2, 2536.8, 45.5);

    let tacoShopDst = GetDistanceBetweenCoords(startPosition[0], startPosition[1], startPosition[2], 15.47, -1598.78, 29.38);
    let tacoStorage = GetDistanceBetweenCoords(startPosition[0], startPosition[1], startPosition[2], 11.23, -1599.01, 29.38);

    let isInVehicle = IsPedInAnyVehicle(PlayerPedId(), false);
    if (isInVehicle) {
        vehicleFound = GetVehiclePedIsIn(PlayerPedId(), false);
        const vehicleModel = GetEntityModel(vehicleFound);
        
        if (!IsThisModelABicycle(vehicleModel) && !IsThisModelABike(vehicleModel)) {
          if (blockedGloveblockVehicles.includes(vehicleModel)) {
            // Any vehicles tha dont have a glovebox just show ground (IE only wheelchair currently is in this list)
            GroundInventoryScan();
          } else {
            const vehId = exports['np-vehicles'].GetVehicleIdentifier(vehicleFound)
            if (!vehId) {
              TriggerEvent('DoLongHudText', 'The glovebox is locked.', 2);
              GroundInventoryScan();
              return;
            }
  
            const gloveboxName = "Glovebox-" + vehId
            emitNet('server-inventory-open', startPosition, cid, '1', gloveboxName);
          }

        } else {
            GroundInventoryScan();
        }
    } else if (tacoShopDst < 2.0) {
        TriggerEvent('server-inventory-open', '18', 'Craft');
    } else if (tacoStorage < 1.0) {
        emitNet('server-inventory-open', startPosition, cid, '1', `hidden-container|${10}|${1599}`);
    } else if (JailBinFound && jailDst < 80.0) {
        let x = parseInt(JailBinFound[0]);
        let y = parseInt(JailBinFound[1]);
        let container = 'jail-container|' + x + '|' + y;
        emit('inventory-jail', startPosition, cid, container);
    } else if (BinFound) {
        let x = parseInt(BinFound[0]);
        let y = parseInt(BinFound[1]);
        let serverCode = exports["config"].GetServerCode();
        let container = 'hidden-container|' + x + '|' + y + '|' + serverCode;
        emitNet('server-inventory-open', startPosition, cid, '1', container);
    } else if (vehicleFound != 0) {
        const success = openTrunk(vehicleFound);
        if (!success) {
            GroundInventoryScan();
        }
    } else {
        GroundInventoryScan();
    }
});

function GroundInventoryScan() {
    let row = DroppedInventories.find(ScanClose);
    if (row) {
        emitNet('server-inventory-open', GetEntityCoords(PlayerPedId()), cid, '1', row.name);
    } else {
        emitNet('server-inventory-open', GetEntityCoords(PlayerPedId()), cid, '3', 'create');
    }
}

function ScanClose(row) {
    let playerPos = GetEntityCoords(PlayerPedId());
    let targetPos = row.position;
    let distancec = GetDistanceBetweenCoords(playerPos[0], playerPos[1], playerPos[2], targetPos.x, targetPos.y, targetPos.z);
    return distancec < 1.5;
}

function openDumpster(pEntity) {
    const coords = GetEntityCoords(pEntity);
    const player = PlayerPedId();
    const startPosition = GetOffsetFromEntityInWorldCoords(player, 0, 0.5, 0);
    let x = parseInt(coords[0]);
    let y = parseInt(coords[1]);
    let serverCode = exports["config"].GetServerCode();
    let container = 'hidden-container|' + x + '|' + y + '|' + serverCode;
    emitNet('server-inventory-open', startPosition, cid, '1', container);
}

function openTrunk(pEntity) {
    const [trunkCoords, front] = GetEnginePosition(pEntity);
    const player = PlayerPedId();
    const startPosition = GetOffsetFromEntityInWorldCoords(player, 0, 0.5, 0);
    const vehModel = GetEntityModel(pEntity);
    const licensePlate = GetVehicleNumberPlateText(pEntity);
    const distanceRear = GetDistanceBetweenCoords(
        startPosition[0],
        startPosition[1],
        startPosition[2],
        trunkCoords[0],
        trunkCoords[1],
        trunkCoords[2],
    );

    if (distanceRear > 1.5) {
        return false;
    }

    const lockStatus = GetVehicleDoorLockStatus(pEntity)
    if (lockStatus != 1 && lockStatus != 0 && lockStatus != 4 && distanceRear < 1.5) {
        TriggerEvent('DoLongHudText', 'The vehicle is locked.', 2);
        CloseGui();
        return false;
    }

    if (!licensePlate) return false;
    if (vehModel === GetHashKey('npwheelchair')) {
        TriggerEvent('DoLongHudText', 'This is a wheelchair, dummy.', 2);
        return false;
    }
    if (IsThisModelABicycle(vehModel) || vehModel === GetHashKey('trash2')) {
        return false;
    }
    const vehId = exports['np-vehicles'].GetVehicleIdentifier(pEntity)
    if (!vehId) {
        CloseGui();
        TriggerEvent('DoLongHudText', 'The trunk is locked.', 2);
        return false;
    }
    const carInvName = "Trunk-" + vehId

    const vehClass = GetVehicleClass(pEntity);

    //Vehicle weight calculations
    const [[minX, minY, minZ], [maxX, maxY, maxZ]] = GetModelDimensions(vehModel);
    const vehVolume = (maxX - minX) * (maxY - minY) * (maxZ - minZ);

    const seats = GetVehicleModelNumberOfSeats(vehModel);

    const classModifier = VehicleWeightModifiers[vehClass][0];
    const classBaseWeight = VehicleWeightModifiers[vehClass][1];
    const classMaxWeight = VehicleWeightModifiers[vehClass][2];

    if (classBaseWeight === 0) {
        //do something
        return;
    }

    //Calculate seats / 3 (2 seats = 66% of base weight, 4 seats = 133% base weight)
    let vehSeatMod = (classBaseWeight * seats) / 3;

    //Calculate based on volume, then add the seat modifier
    let vehWeightCalc = vehVolume * classModifier + vehSeatMod;

    //Round to nearest 50
    vehWeightCalc = Math.round(vehWeightCalc / 50) * 50;

    //console.log("veh weight calc: " + vehWeightCalc);

    if (vehWeightCalc > classMaxWeight) {
        //Max weight
        vehWeightCalc = classMaxWeight;
    }

    Object.keys(VehicleWeightOverrides).forEach((modelName) => {
        if (vehModel === GetHashKey(modelName)) {
            vehWeightCalc = VehicleWeightOverrides[modelName];
        }
    });

    emitNet('server-inventory-open', startPosition, cid, '1', carInvName, [], null, vehWeightCalc);
    SetVehicleDoorOpen(pEntity, front ? 4 : 5, 0, 0);
    TaskTurnPedToFaceEntity(player, pEntity, 1.0);
    emit('toggle-animation', true);
    return true;
}

on('inventory:openDumpster', (pParams, pEntity, pContext) => {
    openDumpster(pEntity);
});

on('inventory:openTrunk', (pParams, pEntity, pContext) => {
    openTrunk(pEntity);
});

let debug = true;

function ClearCache(sentIndexName) {
    let foundIndex = -1;
    let i = 0;
    for (let Row in DroppedInventories) {
        if (DroppedInventories[Row].name == sentIndexName) {
            foundIndex = i;
            break;
        }
        i++;
    }
    if (foundIndex > -1) {
        DroppedInventories.splice(foundIndex, 1);
    }

    foundIndex = -1;
    i = 0;
    for (let Row in DrawInventories) {
        if (DrawInventories[Row].name == sentIndexName) {
            foundIndex = i;
            break;
        }
        i++;
    }
    if (foundIndex > -1) {
        DrawInventories.splice(foundIndex, 1);
    }

    foundIndex = -1;
    i = 0;
    for (let Row in NearInventories) {
        if (NearInventories[Row].name == sentIndexName) {
            foundIndex = i;
            break;
        }
        i++;
    }

    if (foundIndex > -1) {
        NearInventories.splice(foundIndex, 1);
    }
}

class Vector3 {
    constructor(x, y, z) {
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
    }

    add(otherVector) {
        return new Vector3(this.x + otherVector.x, this.y + otherVector.y, this.z + otherVector.z);
    }

    subtract(otherVector) {
        return new Vector3(this.x - otherVector.x, this.y - otherVector.y, this.z - otherVector.z);
    }

    multiplyScalar(scalar) {
        return new Vector3(this.x * scalar, this.y * scalar, this.z * scalar);
    }

    magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    normalize() {
        const mag = this.magnitude();
        if (mag === 0) {
            return new Vector3(); // sıfır vektörü döndürür
        } else {
            return new Vector3(this.x / mag, this.y / mag, this.z / mag);
        }
    }

    dot(otherVector) {
        return this.x * otherVector.x + this.y * otherVector.y + this.z * otherVector.z;
    }

    cross(otherVector) {
        return new Vector3(
            this.y * otherVector.z - this.z * otherVector.y,
            this.z * otherVector.x - this.x * otherVector.z,
            this.x * otherVector.y - this.y * otherVector.x
        );
    }

    toString() {
        return `(${this.x}, ${this.y}, ${this.z})`;
    }
}

var _0x58eca3 = (_0x150795, _0x1ecb56, _0x1b7ac1, _0x62b9b) => {
    var _0x30b5ac = {
      id: _0x150795,
      coords: [_0x1ecb56.x, _0x1ecb56.y, _0x1ecb56.z],
      options: _0x1b7ac1,
      context: _0x62b9b
    };
    const _0x2740e5 = _0x30b5ac;
    globalThis.exports.interactions.AddInteraction(_0x2740e5);
  };

  var _0x45bf4a = (_0x9a4f9e, _0x2de914, _0x4d3699, _0x58eb65) => {
    var _0xdcaa07 = {
      id: _0x9a4f9e,
      options: _0x4d3699,
      context: _0x58eb65
    };
    const _0x5e84f9 = _0xdcaa07;
    globalThis.exports.interactions.AddInteractionByModel(_0x2de914, _0x5e84f9);
  };

  var _0x5f3de6 = _0x500010 => {
    globalThis.exports.interactions.RemoveInteraction(_0x500010);
  };

var _0x507f70 = {
    addInteraction: _0x58eca3,
    addInteractionByModel: _0x45bf4a,
    RemoveInteraction: _0x5f3de6
  };
  var _0x1a8fdf = _0x507f70;

let DrawBags = {};

function drawMarkersUI() {
    for (let Row in DrawBags) {
        if (!DrawInventories[DrawBags[Row].Red]) {
            DeleteObject(DrawBags[Row].Ent);
            _0x1a8fdf.RemoveInteraction("inventory_drop")
            delete DrawBags[Row];
        }

    }

    for (let Row in DrawInventories) {

        let stvoren = false;

        for (let ime in DrawBags) {
            if ( DrawInventories[Row].name == ime){
                stvoren = true;
            }
        }

        if (!stvoren) {
            const Entity = CreateObject(910205311,DrawInventories[Row].position.x, DrawInventories[Row].position.y, DrawInventories[Row].position.z - 1.0, false , true );
            PlaceObjectOnGroundProperly(Entity);
            FreezeEntityPosition(Entity, true);
            SetEntityCollision(Entity,false,true);
            DrawBags[DrawInventories[Row].name] = { Ent: Entity , Red: Row};

            var settings = {
                distance: {
                  draw: 3,
                  use: 3
                },
                skipLos: true,
                isEnabled: function () {
                  return true;
                }
              };

              var coords = {
                x: DrawInventories[Row].position.x,
                y: DrawInventories[Row].position.y,
                z: DrawInventories[Row].position.z - 0.9
              }
        
              _0x1a8fdf.addInteraction("inventory_drop", coords, [{
                id: "inventory_drop",
                label: "Pick Up",
                eventSDK: "inventory-open-request",
                parameters: {}
              }], settings);

        }
    }
}

setTick(drawMarkersUI);

function CacheInventories() {
	DrawInventories = NearInventories.filter(DrawMarkers);
}

setInterval(CacheInventories, 1000);

function GetCloseInventories() {
    NearInventories = DroppedInventories.filter(Scan);
}
setInterval(GetCloseInventories, 15000);

function DrawMarkers(row) {
	let playerPos = GetEntityCoords(PlayerPedId());
	let targetPos = row.position;
	let distanceb = GetDistanceBetweenCoords(playerPos[0], playerPos[1], playerPos[2], targetPos.x, targetPos.y, targetPos.z);
	let checkDistance = 12
	if (IsPedInAnyVehicle(PlayerPedId(), false)) {
		checkDistance = 25;
	}

	return distanceb < checkDistance;
}

function Scan(row) {
    let playerPos = GetEntityCoords(PlayerPedId());
    let targetPos = row.position;
    let distancea = GetDistanceBetweenCoords(playerPos[0], playerPos[1], playerPos[2], targetPos.x, targetPos.y, targetPos.z);

    let checkDistance = 300;
    if (IsPedInAnyVehicle(PlayerPedId(), false)) {
        checkDistance = 700;
    }

    return distancea < checkDistance;
}

RegisterNetEvent('np-items:SetAmmo');
on('np-items:SetAmmo', (sentammoTable) => {
    if (sentammoTable) {
        ammoTable = sentammoTable;
    }
    if (MyInventory) {
        CacheBinds(typeof MyInventory === 'object' ? MyInventory : JSON.parse(MyInventory));
    }
});

function CacheBinds(sqlInventory) {
    boundItems = {};
    boundItemsInfo = {};
    itemCount = Number(MyItemCount)
    for (let i = 0; i < itemCount; i++) {
        if (typeof sqlInventory[i] === "undefined") continue; //Temp fix? 

        let slot = sqlInventory[i].slot;
        if (slot < 5) {
            boundItems[slot] = sqlInventory[i].item_id;
            boundItemsInfo[slot] = sqlInventory[i].information;
            if (!isNaN(boundItems[slot])) {
                let ammoType = Citizen.invokeNative(
                    '0x7FEAD38B326B9F74',
                    PlayerPedId(),
                    parseInt(boundItems[slot]),
                    Citizen.returnResultAnyway(),
                    Citizen.resultAsInteger(),
                );

                if (ammoTable['' + ammoType + '']) {
                    boundItemsAmmo[slot] = ammoTable['' + ammoType + ''].ammo;
                } else {
                    boundItemsAmmo[slot] = 0;
                }
            } else {
                boundItemsAmmo[slot] = undefined;
            }
        }
    }
}

function Rebind(slot, itemid) {
    boundItems[slot] = itemid;
    if (!isNaN(boundItems[slot])) {
        let ammoType = Citizen.invokeNative(
            '0x7FEAD38B326B9F74',
            PlayerPedId(),
            parseInt(boundItems[slot]),
            Citizen.returnResultAnyway(),
            Citizen.resultAsInteger(),
        );

        if (ammoTable['' + ammoType + '']) {
            boundItemsAmmo[slot] = ammoTable['' + ammoType + ''].ammo;
        } else {
            boundItemsAmmo[slot] = 0;
        }
    } else {
        boundItemsAmmo[slot] = undefined;
    }
}

RegisterNetEvent('nui-toggle');
on('nui-toggle', (toggle) => {
    SetCustomNuiFocus(toggle, toggle);
});

RegisterNetEvent('inventory-bind');
on('inventory-bind', (slot) => {
    if (exports.isPed.isPed('dead')) {
        return;
    }
    let cid = exports.isPed.isPed("cid");
    let inventoryUsedName = 'ply-' + cid;
    let itemid = boundItems[slot];
    let isWeapon = true;
    if (isNaN(itemid)) {
        isWeapon = false;
    }
    emit('RunUseItem', itemid, slot, inventoryUsedName, isWeapon, boundItemsInfo[slot]);
});

RegisterNetEvent('OpenInv');
on('OpenInv', () => {
    emit('inventory-open-request');
    //closegui
});

RegisterNetEvent('inventory:qualityUpdate');
on('inventory:qualityUpdate', (originSlot, originInventory, creationDate) => {
    SendNuiMessage(JSON.stringify({ response: 'updateQuality', slot: originSlot, inventory: originInventory, creationDate: creationDate }));
});

RegisterNetEvent('closeInventoryGui');
on('closeInventoryGui', () => {
    CloseGui();
    //closegui
});

RegisterNuiCallbackType('ServerCloseInventory');

on('__cfx_nui:ServerCloseInventory', (data, cb) => {
    let cid = exports.isPed.isPed("cid");
    if (data.name != 'none') {
        emitNet('server-inventory-close', cid, data.name);
        emit('np-inventory:closed', data.name);
    }
    cb({});
});

RegisterNuiCallbackType('removeCraftItems');
on('__cfx_nui:removeCraftItems', (data, cb) => {
    let requirements = data[0];
    let amountCrafted = data[1];

    for (let xx = 0; xx < requirements.length; xx++) {
        RemoveItem(requirements[xx].itemid, Math.ceil(requirements[xx].amount * amountCrafted));
    }
    //emitNet("server-inventory-removeCraftItems", cid, data, GetEntityCoords(PlayerPedId()),openedInv)
    cb({});
});

RegisterNuiCallbackType('craftProgression');
on('__cfx_nui:craftProgression', (data, cb) => {
    cb("ok");
    emit("np-inventory:craftProgression", data);
    emitNet("np-inventory:craftProgression", data);
});

RegisterNuiCallbackType('weaponCrafted');
on('__cfx_nui:weaponCrafted', (data, cb) => {
    cb("ok");
    emitNet('np-inventory:weaponCrafted', data.item);
});

RegisterNuiCallbackType('stack');
on('__cfx_nui:stack', (data, cb) => {
    emitNet('server-inventory-stack', cid, data, GetEntityCoords(PlayerPedId()));
    cb({});
});

RegisterNuiCallbackType('move');
on('__cfx_nui:move', (data, cb) => {
    emitNet('server-inventory-move', cid, data, GetEntityCoords(PlayerPedId()));
    cb({});
});

RegisterNuiCallbackType('swap');
on('__cfx_nui:swap', (data, cb) => {
    emitNet('server-inventory-swap', cid, data, GetEntityCoords(PlayerPedId()));
    cb({});
});

RegisterNuiCallbackType('insert-item')
on('__cfx_nui:insert-item', (data, cb) => {
    const {
        originInventory, targetInventory,
        originSlot, targetSlot,
        originItemId, targetItemId,
        originItemInfo, targetItemInfo,
    } = data
    if (
        (itemList[originItemId].insertTo && itemList[originItemId].insertTo.includes(targetItemId))
        ||
        (itemList[targetItemId].insertFrom && itemList[targetItemId].insertFrom.includes(originItemId))
    ) {
        emit(`${targetItemId}:insert`, originInventory, targetInventory, originSlot, targetSlot, originItemId, targetItemId, originItemInfo, targetItemInfo)
    }
    cb({});
});


RegisterNetEvent('inventory-player-shop-information');
on('inventory-player-shop-information', (shopinformation, shopid, shopValidItems) => {
    SendNuiMessage(JSON.stringify(
        {
            response: 'UpdateShopPrices',
            shopid: shopid,
            shopinformation: shopinformation,
            shopValidItems: shopValidItems,
        })
    );
});


RegisterNetEvent('server-inventory-open');
on('server-inventory-open', (target, name, targetWeight, targetSlots) => {
    cid = exports.isPed.isPed("cid");
    emitNet('server-inventory-open', GetEntityCoords(PlayerPedId()), cid, target, name, null, null, targetWeight, targetSlots);
});

RegisterNetEvent('client-inventory-remove-any');
on('client-inventory-remove-any', (itemidsent, amount) => {
    emitNet('server-inventory-remove-any', itemidsent, amount);
});

RegisterNetEvent('client-inventory-remove-slot');
on('client-inventory-remove-slot', (itemidsent, amount, slot) => {
    emitNet('server-inventory-remove-slot', itemidsent, amount, slot);
});

RegisterNetEvent('Inventory-Dropped-Remove');
on('Inventory-Dropped-Remove', (sentIndexName) => {
    ClearCache(sentIndexName);
});

RegisterNetEvent('Inventory-Dropped-Addition');
on('Inventory-Dropped-Addition', (object) => {
    try {
        const [success, groundZ] = GetGroundZFor_3dCoord(object.position.x, object.position.y, object.position.z);
        if (success) object.groundZ = groundZ;
    } catch (err) {
        console.error(`Error: GetGroundZFor_3dCoord failed for dropped item (position=${JSON.stringify(object?.position)})`);
    }

    DroppedInventories.push(object);
    NearInventories.push(object);
    DrawInventories.push(object);
});

RegisterNetEvent('requested-dropped-items');
on('requested-dropped-items', (object) => {
    DroppedInventories = [];
    object2 = JSON.parse(object);
    for (let key in object2) {
        DroppedInventories.push(object2[key]);
    }

    //DroppedInventories = object;
    //no idea why no work

    // i am tired and retarded
});

RegisterNetEvent('inventory-update-player');
on('inventory-update-player', (information) => {
    let returnInv = BuildInventory(information[0]);
    let playerinventory = returnInv[0];
    let itemCount = returnInv[1];
    let invName = information[2];

    MyInventory = playerinventory;
    MyItemCount = itemCount;

    ResetCache(false);
    PopulateGuiSingle(playerinventory, itemCount, invName);
    if (openedInv) {
        SendNuiMessage(JSON.stringify({ response: 'EnableMouse' }));
    }
    emit('current-items', JSON.parse(MyInventory));
    //misc.UpdateInventory(playerinventory, itemCount, "inv update player");
});

let storageNames = ['storage', 'stash', 'office', 'housing', 'warehouse', 'hidden', 'paynless', 'hotel', 'craft'];
let inStashOrStorage = false;

RegisterNetEvent('inventory-open-target');
on('inventory-open-target', async (information) => {
    //misc.UpdateInventory(playerinventory, itemCount, "inv target player");

    let returnInv = BuildInventory(information[0]);

    let playerinventory = returnInv[0];

    let invName = information[2];
    let targetinventory;
    let targetitemCount;

    let itemCount2 = 0;

    if (information[7] == true) {
        let returnInv2 = BuildInventory(information[3]);
        targetinventory = returnInv2[0];
        targetitemCount = returnInv2[1];
    } else {
        targetinventory = information[3];
        targetitemCount = information[4];
    }
    let targetinvName = information[5];

    if (canOpen === true) {
        MyInventory = playerinventory;
        MyItemCount = information[0].length;
        if (!openedInv) OpenGui();
        if (targetinvName.indexOf("Shop") > -1) {
            const [fetchCash] = await RPC.execute("GetCurrentCash");
            cash = fetchCash.param;
            setImmediate(async () => {
                const [hasWeaponsLicense] = await getWeaponsLicense(cid);
                const [hasClass2WeaponsLicense] = await getClass2WeaponsLicense(cid);
                let brought = hadBrought[cid];
                let cop = false;
                if (exports.isPed.isPed('myjob') == 'police' || exports.isPed.isPed('myjob') == 'doc') {
                    cop = true;
                }
                await Delay(250);

                SendNuiMessage(JSON.stringify({ response: 'cashUpdate', amount: cash, weaponlicence: hasWeaponsLicense, class2license: hasClass2WeaponsLicense, brought: brought, cop: cop }));
            })
        }

        let targetInvWeight = information[8];
        if (!targetInvWeight) targetInvWeight = 0;
        let targetInvSlots = information[9];
        if (!targetInvSlots) targetInvSlots = 40;

        setImmediate(async () => {
            if (storageNames.some(v => targetinvName.toLowerCase().includes(v)) && !IsPedInAnyVehicle(PlayerPedId(), false) && !targetinvName.toLowerCase().includes('apartments') && !targetinvName.toLowerCase().includes('traphouse-storage')) {
                inStashOrStorage = true;
                const animDict = 'amb@prop_human_bum_bin@idle_a';
                const anim = 'idle_a'
                ClearPedTasksImmediately(PlayerPedId());
                TriggerEvent('animation:load', animDict);
                TaskPlayAnim(PlayerPedId(), animDict, anim, 1.0, 1.0, -1, 1, 0, false, false, false);
                // TaskStartScenarioInPlace(PlayerPedId(), 'PROP_HUMAN_BUM_BIN', 0, true)
            }
        });

        PopulateGui(playerinventory, returnInv[1], invName, targetinventory, targetitemCount, targetinvName, cash, targetInvWeight, targetInvSlots);
        SendNuiMessage(JSON.stringify({ response: 'EnableMouse' }));
        ResetCache(true);
    }
});

let timer = 0;
let timeFunction = false;

function GiveItem(itemid, amount, generateInformation, nonStacking, itemdata, returnData = '{}') {
    if (amount > 10000) {
        const newAmount = amount - 10000;
        GiveItem(itemid, 10000, generateInformation, nonStacking, itemdata, returnData);
        setTimeout(() => {
            GiveItem(itemid, newAmount, generateInformation, nonStacking, itemdata, returnData);
        }, 100);
        return;
    }
    const metadata = JSON.stringify(itemdata) !== "{}" ? itemdata : JSON.parse(returnData);
    let slot = findSlot(itemid, amount, nonStacking, metadata);
    if (!isNaN(itemid)) {
        generateInformation = true;
    }
    if (slot != 0) {
        cid = exports.isPed.isPed("cid");
        emitNet(
            'server-inventory-give',
            cid,
            itemid,
            slot,
            amount,
            generateInformation,
            Object.assign({}, itemdata),
            openedInv,
            returnData,
        );
        SendNuiMessage(JSON.stringify({ response: 'DisableMouse' }));
    }
}

async function CloseGui(pIsItemUsed = false) {
    if (watch[0] !== undefined) {
        emitNet("inventory-update-other", watch)
        watch = []
    }

    if (!pIsItemUsed) {
        emit('randPickupAnim');
    }

    SendNuiMessage(JSON.stringify({ response: 'closeGui' }));
    SetCustomNuiFocus(false, false);

    openedInv = false;
    recentused = [];

    if (IsScreenblurFadeRunning()) {
        await Delay(500);
    }
    //Remove blur
    const forcedBlurred = false //exports['np-miscscripts'].IsCurrentlyBlurred()
    if (!forcedBlurred) {
      TriggerScreenblurFadeOut(400);
    }

    if (inStashOrStorage) {
        ClearPedTasks(PlayerPedId());
        inStashOrStorage = false
    }

    emit('inventory:wepDropCheck')
}

const getWeaponsLicense = Cacheable(async (ctx, cid) => [true, await RPC.execute("CheckLicenseForCharacter", cid, 2)], { timeToLive: 300000 * 12 })
const getClass2WeaponsLicense = Cacheable(async (ctx, cid) => [true, await RPC.execute("CheckLicenseForCharacter", cid, 12)], { timeToLive: 300000 * 12 })

on("np-spawn:characterSpawned", function() {
    cash = exports.isPed.isPed("mycash")
    let skelly = exports.wounds.getState()
    weaponsLicence = exports.isPed.isPed("weaponsLicence")
    let cop = false
    if (exports.isPed.isPed("myjob") == "police") {
        cop = true
    }
    let cid = exports.isPed.isPed("cid");
    let charName = exports.isPed.isPed("firstname") + " " + exports.isPed.isPed("lastname");
    let phoneNumber = exports.isPed.isPed("phone_number");
    let formattedPhoneNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
    setTimeout(() => {
        SendNuiMessage(JSON.stringify({ response: "cashUpdate", amount: cash, weaponlicence: weaponsLicence, cop: cop ,skelly: skelly, personalVehickle: "N/A", charCid: cid, charName: charName, charPhoneNumber: formattedPhoneNumber, charHome: "Little Seoul Apartments - " + cid, charJob: "Unemployed" }))
    }, 250)
});

function OpenGui() {
	if (openedInv === true) {
		emit("randPickupAnim")
	}
	openedInv = true
	SendNuiMessage(JSON.stringify({ response: "openGui" }))
	SetNuiFocus(true, true)
	cash = exports.isPed.isPed("mycash")
	let skelly = exports.wounds.getState()
	weaponsLicence = exports.isPed.isPed("weaponsLicence")
	let cop = false
	if (exports.isPed.isPed("myjob") == "police") {
		cop = true
	}
    let cid = exports.isPed.isPed("cid");
    let charName = exports.isPed.isPed("firstname") + " " + exports.isPed.isPed("lastname");
    let phoneNumber = exports.isPed.isPed("phone_number");
    let formattedPhoneNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
	setTimeout(() => {
		SendNuiMessage(JSON.stringify({ response: "cashUpdate", amount: cash, weaponlicence: weaponsLicence, cop: cop ,skelly: skelly, personalVehickle: "N/A", charCid: cid, charName: charName, charPhoneNumber: formattedPhoneNumber, charHome: "Little Seoul Apartments - " + cid, charJob: "Unemployed" }))
	}, 250)
};

function hasPermissionInProperty(){
        return false 
}

function isPropertyLockdownAndIsCop(){
        return false 
}

function PopulateGuiSingle(playerinventory, itemCount, invName) {
    SendNuiMessage(
        JSON.stringify({ response: 'PopulateSingle', playerinventory: playerinventory, itemCount: itemCount, invName: invName }),
    );
}

let TrapOwner = false;
function PopulateGui(playerinventory, itemCount, invName, targetinventory, targetitemCount, targetinvName, cash, targetInvWeight, targetInvSlots) {
    let cid = exports.isPed.isPed("cid");
    let StoreOwner = false;

    if (targetinvName.indexOf('PlayerStore') > -1) {
        if (targetinvName.indexOf('TrapHouse') > -1) {
            SendNuiMessage(
                JSON.stringify({
                    response: 'Populate',
                    playerinventory: playerinventory,
                    itemCount: itemCount,
                    invName: invName,
                    targetinventory: targetinventory,
                    targetitemCount: targetitemCount,
                    targetinvName: targetinvName,
                    cash: cash,
                    StoreOwner: TrapOwner,
                    targetInvWeight: targetInvWeight,
                    targetInvSlots: targetInvSlots,
                }),
            );
        } else {
            let targetCid = targetinvName.split('|');
            targetCid = targetCid[0].split('-');

            if (targetCid[1] == cid) {
                StoreOwner = true;
            }
            setTimeout(() => {
                SendNuiMessage(
                    JSON.stringify({
                        response: 'Populate',
                        playerinventory: playerinventory,
                        itemCount: itemCount,
                        invName: invName,
                        targetinventory: targetinventory,
                        targetitemCount: targetitemCount,
                        targetinvName: targetinvName,
                        cash: cash,
                        StoreOwner: StoreOwner,
                        targetInvWeight: targetInvWeight,
                        targetInvSlots: targetInvSlots,
                    }),
                );
            }, 250);
        }
    } else {
        SendNuiMessage(
            JSON.stringify({
                response: 'Populate',
                playerinventory: playerinventory,
                itemCount: itemCount,
                invName: invName,
                targetinventory: targetinventory,
                targetitemCount: targetitemCount,
                targetinvName: targetinvName,
                cash: cash,
                StoreOwner: StoreOwner,
                targetInvWeight: targetInvWeight,
                targetInvSlots: targetInvSlots,
                isPropertyOwner: hasPermissionInProperty(),
                isCopAndLockdown: isPropertyLockdownAndIsCop()
            }),
        );
    }
}

RegisterNetEvent('inventory-open-trap');
on('inventory-open-trap', (Owner) => {
    TrapOwner = Owner;
});

RegisterNetEvent('inventory-open-target-NoInject');
on('inventory-open-target-NoInject', (playerinventory, itemCount, invName) => {
    //misc.UpdateInventory(playerinventory, itemCount, "inv target player");
    if (canOpen === true) {
        let returnInv = BuildInventory(information[0]);
        playerinventory = returnInv[0];
        itemCount = returnInv[1];

        MyInventory = playerinventory;
        MyItemCount = itemCount;
        emitNet('server-inventory-close', cid, invName);
    }
});

RegisterNetEvent('inventory-util-canOpen');
on('inventory-util-canOpen', (openStatus) => {
    canOpen = openStatus;
});

function BuildInventory(Inventory) {
    let buildInv = Inventory;
    let invArray = {};
    let weight = 0.0;
    itemCount = 0;
    for (let i = 0; i < buildInv.length; i++) {
        if (itemList[buildInv[i].item_id] !== undefined) {
            let quality = ConvertQuality(buildInv[i].item_id, buildInv[i].creationDate);
            weight = weight + itemList[buildInv[i].item_id].weight * buildInv[i].amount;
            invArray[itemCount] = {
                quality: quality,
                creationDate: buildInv[i].creationDate,
                amount: buildInv[i].amount,
                item_id: buildInv[i].item_id,
                id: buildInv[i].id,
                name: buildInv[i].name,
                information: buildInv[i].information,
                slot: buildInv[i].slot,
            };
            itemCount = itemCount + 1;
        }
    }
    personalWeight = weight;
    return [JSON.stringify(invArray), itemCount];
}

const TimeAllowed = 1000 * 60 * 40320; // 28 days,
function ConvertQuality(itemID, creationDate) {
    let StartDate = new Date(creationDate).getTime();
    let DecayRate = itemList[itemID].decayrate;
    let TimeExtra = TimeAllowed * DecayRate;
    let percentDone = 100 - Math.ceil(((Date.now() - StartDate) / TimeExtra) * 100);

    if (DecayRate == 0.0) {
        percentDone = 100;
    }
    if (percentDone < 0) {
        percentDone = 0;
    }
    return percentDone;
}


RegisterNuiCallbackType('invSetPrice');
on('__cfx_nui:invSetPrice', (data, cb) => {
    cid = exports.isPed.isPed("cid");
    emitNet('server-inventory-setPrice', cid, data);
    cb({});
});

RegisterNuiCallbackType('invuse');
on('__cfx_nui:invuse', (data, cb) => {
    let inventoryUsedName = data[0];
    let itemid = data[1];
    let slotusing = data[2];
    let isWeapon = data[3];
    let iteminfo = data[4];

    emit('RunUseItem', itemid, slotusing, inventoryUsedName, isWeapon, iteminfo);
    cb({});
});

RegisterNetEvent('toggle-animation');
on('toggle-animation', (toggleAnimation) => {
    let lPed = PlayerPedId();
    if (toggleAnimation) {
        TriggerEvent('animation:load');
        if (!IsEntityPlayingAnim(lPed, 'mini@repair', 'fixing_a_player', 3))
            TaskPlayAnim(lPed, 'mini@repair', 'fixing_a_player', 8.0, -8, -1, 16, 0, 0, 0, 0);
    } else {
        StopAnimTask(lPed, 'mini@repair', 'fixing_a_player', -4.0);
    }
});

RegisterNetEvent('inventory-open-container');
on('inventory-open-container', async (inventoryId, slots, weight) => {
    const playerPos = GetEntityCoords(PlayerPedId());
    const cid = exports.isPed.isPed("cid");
    emitNet('server-inventory-open', playerPos, cid, '1', inventoryId, [], null, weight, slots);
});

RegisterNuiCallbackType('openJewelry');
on('__cfx_nui:openJewelry', async (data, cb) => {
    await CloseGui(false);
    OpenJewelryInventory();
    cb({});
});

function OpenJewelryInventory() {
    const cid = exports.isPed.isPed("cid");
    const inventory = `container-jewelry:${cid}-Jewelry-jewelry`;
    emit("inventory-open-container", inventory, 5, 30.0);
}

RegisterNuiCallbackType('openProtectedInventory');
on('__cfx_nui:openProtectedInventory', async (data, cb) => {
    await CloseGui(false);
    OpenProtectedInventory();
    cb({});
});

function OpenProtectedInventory() {
    const cid = exports.isPed.isPed("cid");
    const inventory = `container-protected:${cid}-Protected-protected`;
    emit("inventory-open-container", inventory, 5, 70.0);
}


function UpdateSettings() {
    let holdInt = GetResourceKvpInt('inventorySettings-HoldToDrag');
    let closeInt = GetResourceKvpInt('inventorySettings-CloseOnClick');
    let ctrlInt = GetResourceKvpInt('inventorySettings-CtrlMovesHalf');
    let tooltipsInt = GetResourceKvpInt('inventorySettings-ShowTooltips');
    let blurInt = GetResourceKvpInt('inventorySettings-EnableBlur');
    let holdToDrag = holdInt === 1 ? false : true; //default true
    let closeOnClick = closeInt === 1 ? false : true;
    let ctrlMovesHalf = ctrlInt === 1 ? false : true; //default false
    let showTooltips = tooltipsInt === 1 ? false : true;
    enableBlur = blurInt === 1 ? false : true;
    SendNuiMessage(
        JSON.stringify({
            response: 'UpdateSettings',
            holdToDrag: false,
            closeOnClick: false,
            ctrlMovesHalf: ctrlMovesHalf,
            showTooltips: showTooltips,
            enableBlur: enableBlur,
        }),
    );
}

function GetEnginePosition(pVehicle) {
    const [minDim, maxDim] = GetModelDimensions(GetEntityModel(pVehicle));

    const frontCoords = GetOffsetFromEntityInWorldCoords(pVehicle, maxDim[0] / 2, maxDim[1], 0.0);
    const engineCoords = GetWorldPositionOfEntityBone(pVehicle, GetEntityBoneIndexByName(pVehicle, 'engine'));
    const overheatCoords = GetWorldPositionOfEntityBone(pVehicle, GetEntityBoneIndexByName(pVehicle, 'overheat'));

    const frontDist = distanceBetweenCoords(frontCoords, engineCoords);
    const overHeatDist = distanceBetweenCoords(frontCoords, overheatCoords);

    const halfCar = Math.abs(maxDim[1] - minDim[1]) / 2;
    if (frontDist <= halfCar || overHeatDist <= halfCar) {
        return [GetOffsetFromEntityInWorldCoords(pVehicle, 0.0, minDim[1] - 0.5, 0.0), false];
    }

    return [GetOffsetFromEntityInWorldCoords(pVehicle, 0.0, maxDim[1] + 0.5, 0.0), true];
}

function distanceBetweenCoords(coords1, coords2) {
    return Math.sqrt(Math.pow(coords1[0] - coords2[0], 2) + Math.pow(coords1[1] - coords2[1], 2) + Math.pow(coords1[2] - coords2[2], 2));
}

let HasNuiFocus = false;
let EndingFocus = false;
let ControlThread;

function SetCustomNuiFocus(hasKeyboard, hasMouse) {
    // HasNuiFocus = hasKeyboard || hasMouse;

    SetNuiFocus(hasKeyboard, hasMouse);
    // SetNuiFocusKeepInput(HasNuiFocus);

    //   if (HasNuiFocus === true) {
    //   	emit("np-voice:focus:set", HasNuiFocus, hasKeyboard, hasMouse);
    //   } else {
    // 	  setTimeout(() => {if (HasNuiFocus !== true) emit("np-voice:focus:set", false, false, false);}, 1000)
    //   }
}

//like Citizen.Wait, usage: await Delay(<amount>);
const Delay = (ms) => new Promise((res) => setTimeout(res, ms));

exports('setPlayerWeight', (cid, weight) => {
    maxPlayerWeight = weight;
    emitNet('np-inventory:server:weightChange', cid, weight);
    SendNuiMessage(JSON.stringify({ response: 'playerWeight', personalMaxWeight: weight }));
});

exports('getPlayerMaxWeight', () => {
    return maxPlayerWeight
});


exports('getItemListNames', () => {
    let itemListSend = []
    for (const key in itemList) {
        const item = itemList[key];
        itemListSend.push({ id: key, name: item.displayname })
    }

    return itemListSend
});

exports('getFullItemList', () => {
    return itemList;
});

let doTranslationsFirstRun = true;
const doTranslations = async () => {
    let isReady = exports['np-i18n'].IsReady();
    while (!isReady) {
        await Delay(1000);
        isReady = exports['np-i18n'].IsReady();
    }
    for (const key of Object.keys(itemList)) {
        if (doTranslationsFirstRun) {
            itemList[key].__og_displayname = itemList[key].displayname;
            itemList[key].__og_information = itemList[key].information;
            if (itemList[key].foodCategory) {
                itemList[key].__og_food_cats = [...itemList[key].foodCategory];
            }
        }
        itemList[key].displayname = 
            exports['np-i18n'].GetStringSwap(itemList[key].__og_displayname || itemList[key].displayname);
        itemList[key].information = 
            exports['np-i18n'].GetStringSwap(itemList[key].__og_information || itemList[key].information);
        if (itemList[key].foodCategory) {
            itemList[key].foodCategory = (itemList[key].__og_food_cats || itemList[key].foodCategory)
                .map(c => exports['np-i18n'].GetStringSwap(c));
        }
    }
    doTranslationsFirstRun = false;
}

setTimeout(doTranslations, 10000);

on('np-i18n:languageChanged', doTranslations);

setTimeout(async () => {
    for (const item of Object.values(itemList)) {
        emit('i18n:translate', item.displayname || '', 'inv:item:name');
        await Delay(500);
        emit('i18n:translate', item.information || '', 'inv:item:desc');
        await Delay(500);
        if (item.foodCategory) {
            item.foodCategory.forEach((cat) => {
                emit('i18n:translate', cat || '', 'inv:item:food-cat');
            });
        }
    }
}, 60000 * 5);

const matsToTrade = [
    'aluminium',
    'copper',
    'glass',
    'plastic',
    'rubber',
    'scrapmetal',
    'steel',
    'electronics',
];
setTimeout(() => {
    for (const key of Object.keys(itemList)) {
        const item = itemList[key];
        if (!item.craft || !item.craft[0] || !item.craft[0][0]) {
            continue;
        }

        item.craft.forEach((c) => {
            const newCraft = [];
            const newCraft2 = [];
            let shouldPush = false;
            c.forEach((mat) => {
                const idx = matsToTrade.indexOf(mat.itemid);
                if (idx === -1 || mat.itemid === 'electronics') {
                    newCraft.push({
                        itemid: mat.itemid,
                        amount: mat.amount,
                    });
                    newCraft2.push({
                        itemid: mat.itemid,
                        amount: mat.amount,
                    });
                    return;
                }
                shouldPush = true;
                newCraft.push({
                    itemid: `refined${mat.itemid}a`,
                    amount: Math.max(Math.floor(mat.amount / 5.5), 1),
                });
                newCraft2.push({
                    itemid: `refined${mat.itemid}s`,
                    amount: Math.max(Math.floor(mat.amount / 18.75), 1),
                });
            });
            if (!shouldPush) {
                return;
            }
            item.craft.push(newCraft);
            item.craft.push(newCraft2);
        });
    }
}, 5000);

let tradingIn = false;
on('np-inventory:sionisReceipt', async ([pClass]) => {
    if (tradingIn) {
        return;
    }
    tradingIn = true;
    const [hasCraftAccess] = await RPC.execute('np-business:hasPermission', 'sionis', 'craft_access');
    if (!hasCraftAccess) {
        tradingIn = false;
        return;
    }
    emit('doAnim', 'cokecut');
    const finished = await new Promise((r) => exports['np-taskbar'].taskBar(10000, 'Gathering materials...', true, true, null, false, r));
    ClearPedTasks(PlayerPedId());
    if (finished !== 100) {
        return;
    }
    canOpen = false;
    const tradeUpAmount = pClass === 's' ? 15 : 5;
    const taxedMats = {};
    const receiptMats = {};
    const receiptMatsNice = {};
    const hideKeys = [];
    let activeTimeouts = 0;
    const timeoutRemove = (mat, amount, delay) => {
        activeTimeouts += 1;
        setTimeout(() => {
            activeTimeouts -= 1;
            TriggerEvent('inventory:removeItem', mat, amount);
        }, Math.max(1, delay * 500));
    };
    matsToTrade.forEach((mat, k) => {
        if (mat === 'electronics') {
            return;
        }
        const qty = Math.min(exports["inventory"].getQuantity(mat, true), 50000);
        if (qty < tradeUpAmount) {
            return;
        }
        const newMaterials = Math.floor(qty / tradeUpAmount);
        if (newMaterials <= 0) {
            return;
        }
        taxedMats[mat] = (newMaterials * tradeUpAmount) * 0.4;
        const key = `refined${mat}${pClass}`;
        hideKeys.push(key);
        receiptMats[key] = newMaterials;
        receiptMatsNice[itemList[key].displayname] = newMaterials;
        timeoutRemove(mat, newMaterials * tradeUpAmount, k);
    });
    if (hideKeys.length === 0) {
        canOpen = true;
        tradingIn = false;
        return;
    }
    const meta = {
        _hideKeys: hideKeys,
        ...receiptMats,
        ...receiptMatsNice,
    };
    while (activeTimeouts > 0) {
        await new Promise(r => setTimeout(r, 500));
    }
    TriggerEvent('player:receiveItem', 'refinedmaterialreceipt', 1, false, meta, meta);
    TriggerServerEvent('np-inventory:sionisTaxedMats', taxedMats);
    canOpen = true;
    tradingIn = false;
});

on('np-inventory:sionisReceiptTradeIn', async () => {
    const items = exports["inventory"].getItemsOfType('refinedmaterialreceipt', 1000, true);
    if (items.length === 0) {
        return;
    }
    const [hasCraftAccess] = await RPC.execute('np-business:hasPermission', 'sionis', 'craft_access');
    if (!hasCraftAccess) {
        return;
    }
    const validKeys = [...matsToTrade.map((mat) => `refined${mat}a`), ...matsToTrade.map((mat) => `refined${mat}s`)];
    items.forEach((item) => {
        const info = JSON.parse(item.information);
        Object.keys(info).forEach((key) => {
            if (validKeys.indexOf(key) === -1) {
                return;
            }
            TriggerEvent('player:receiveItem', key, info[key]);
        });
        TriggerEvent('inventory:removeItemBySlot', 'refinedmaterialreceipt', 1, item.slot);
    });
});

on('np-inventory:sionisCollectTaxes', () => {
    const ids = exports['config'].GetMiscConfig('sionis.pickup.ids');
    const cid = exports['isPed'].isPed('cid');
    if (ids.indexOf(cid) === -1) {
        return;
    }
    TriggerServerEvent('np-inventory:sionisCollectTaxes')
});

on('np-inventory:openGoldRush', async () => {
    const [hasCraftAccess] = await RPC.execute('np-business:hasPermission', 'gold_rush', 'craft_access');
    if (!hasCraftAccess) {
        return;
    }
    TriggerEvent('server-inventory-open', '42137', 'Craft');
});

const extraMaterialsForBag = [
    'genericelectronicpart',
    'mgenericmechanicpart',
    'golddust',
];
let promptOpen = false;
on('np-inventory:itemUsed', async (pItem, pInfo, pInv, pSlot) => {
    if (pItem !== 'materialcontainer') {
        return;
    }
    if (promptOpen) {
        return;
    }
    promptOpen = true;
    const promptOptions = [
        { id: 'add', name: 'Add Materials' },
        { id: 'change_image', name: 'Change Image' },
        { id: 'minus', name: 'Withdraw All' },
    ];
    const validKeys = [
        ...matsToTrade,
        ...matsToTrade.map((mat) => `refined${mat}a`),
        ...matsToTrade.map((mat) => `refined${mat}s`),
        ...extraMaterialsForBag,
    ];
    let meta = JSON.parse(pInfo || '{}') || {};
    if (!meta.id) {
        meta.id = Math.floor(Math.random() * 1000000) + 1000000;
    } else {
        meta = await RPC.execute('np-inventory:getItemInformation', pInv, pSlot);
    }
    for (const key of Object.keys(meta)) {
        if (validKeys.indexOf(key) === -1) {
            continue;
        }
        promptOptions.push({
            id: `withdraw:${key}`,
            name: `Withdraw: ${itemList[key].displayname} - ${meta[key]}`,
        });
    }
    const prompt = await exports['np-ui'].OpenInputMenu(
        [
            {
                label: 'Action',
                name: 'action',
                _type: 'select',
                options: promptOptions,
            },
            {
                label: 'Value',
                name: 'value',
            },
        ],
        (values) => values && values.action,
    );
    setTimeout(() => promptOpen = false, 2500);
    if (!prompt) {
        return;
    }
    if (prompt.action === 'add') {
        for (const key of validKeys) {
            const qty = Math.min(exports["inventory"].getQuantity(key, true), 50000);
            if (!qty) {
                continue;
            }
            if (!meta[key]) {
                meta[key] = 0;
            }
            meta[key] += qty;
            if (!meta._hideKeys) {
                meta._hideKeys = [];
            }
            if (meta._hideKeys.indexOf(key) === -1) {
                meta._hideKeys.push(key);
            }
            meta[itemList[key].displayname] = meta[key];
            TriggerEvent('inventory:removeItem', key, qty);
        }
        emit('DoLongHudText', 'Materials added!');
        UpdateItem(pItem, pSlot, JSON.stringify(meta));
        TriggerServerEvent('np-inventory:matBagUpdate', meta.id, meta);
        return;
    }
    if (prompt.action.indexOf('withdraw:') === 0) {
        const key = prompt.action.split(':')[1];
        let qty = Number(prompt.value);
        if (isNaN(qty)) {
            qty = meta[key];
        }
        if (isNaN(qty) || !qty) {
            qty = 0;
        }
        qty = Math.min(qty, 50000);
        if (qty < 1 || qty > meta[key]) {
            return;
        }
        meta[key] -= qty;
        meta[itemList[key].displayname] -= qty;
        if (meta[key] < 1) {
            delete meta[key];
            delete meta[itemList[key].displayname];
        }
        UpdateItem(pItem, pSlot, JSON.stringify(meta));
        TriggerEvent('player:receiveItem', key, qty);
        TriggerServerEvent('np-inventory:matBagUpdate', meta.id, meta);
        return;
    }
    if (prompt.action.indexOf('minus') === 0) {
        let addItems = [];
        for (const key of Object.keys(meta)) {
            if (validKeys.indexOf(key) === -1) {
                continue;
            }
            const value = meta[key];
            let qty = Number(value);
            if (isNaN(qty)) {
                qty = meta[key];
            }
            if (isNaN(qty) || !qty) {
                qty = 0;
            }
            if (qty < 1 || qty > meta[key]) {
                continue;
            }
            meta[key] -= qty;
            meta[itemList[key].displayname] -= qty;
            if (meta[key] < 1) {
                delete meta[key];
                delete meta[itemList[key].displayname];
            }
            addItems.push({key, qty});
        }
        UpdateItem(pItem, pSlot, JSON.stringify(meta));
        for (const _item of addItems) {
            TriggerEvent('player:receiveItem', _item.key, _item.qty);
        }
        TriggerServerEvent('np-inventory:matBagUpdate', meta.id, meta);
        return;
    }
    if (prompt.action === 'change_image') {
        if (!meta._hideKeys) {
            meta._hideKeys = [];
        }
        if (meta._hideKeys.indexOf('_image_url') === -1) {
            meta._hideKeys.push('_image_url');
        }
        meta._image_url = prompt.value;
        UpdateItem(pItem, pSlot, JSON.stringify(meta));
        return;
    }
});

tradingIn = false;
on('np-cia:depositMaterials', async () => {
    if (tradingIn) return;
    tradingIn = true;
    emit('doAnim', 'cokecut');
    const finished = await new Promise((r) => exports['np-taskbar'].taskBar(10000, 'Gathering materials...', true, true, null, false, r));
    ClearPedTasks(PlayerPedId());
    tradingIn = false;
    if (finished !== 100) return;
    const qty = Math.min(exports["inventory"].getQuantity('cia_weapon_material', true), 50000);
    if (qty < 1) return;
    emit('inventory:removeItem', 'cia_weapon_material', qty);
    TriggerServerEvent('np-inventory:depositCiaMaterials', qty);
});

on('np-cia:checkMaterials', async () => {
    if (tradingIn) return;
    TriggerServerEvent('np-inventory:checkCiaMaterials');
});

on('np-cia:getGear', async () => {
    let response = 1;
    while (response) {
        await new Promise(r => setTimeout(r, 250));
        response = await exports['np-ui'].OpenContextMenu([
            {
                key: { item: '-820634585' },
                title: 'Taser',
            },
            {
                key: { item: 'taserammo' },
                title: 'Taser Ammo',
            },
            {
                key: { item: '-120179019' },
                title: 'Glock',
            },
            {
                key: { item: 'pistolammoPD' },
                title: 'Pistol Ammo',
            },
            {
                key: { item: '-1768145561' },
                title: 'SCAR (Rifle Cert Only)',
            },
            {
                key: { item: 'rifleammoPD' },
                title: 'Rifle Ammo',
            },
        ]);
        if (!response) break;
        TriggerServerEvent('np-inventory:ciaGetGear', response.item);
    }
});

// AddEventHandler("np-cia:getGear", function()
  
// end)

// AddEventHandler("np-cia:checkMaterials", function()

// end)
