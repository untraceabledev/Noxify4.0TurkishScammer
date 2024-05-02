/******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
            /******/
        }
        /******/ 		// Create a new module (and put it into the cache)
        /******/ 		var module = installedModules[moduleId] = {
        /******/ 			i: moduleId,
        /******/ 			l: false,
        /******/ 			exports: {}
            /******/
        };
        /******/
        /******/ 		// Execute the module function
        /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ 		// Flag the module as loaded
        /******/ 		module.l = true;
        /******/
        /******/ 		// Return the exports of the module
        /******/ 		return module.exports;
        /******/
    }
        /******/
        /******/
        /******/ 	// expose the modules object (__webpack_modules__)
        /******/ 	__webpack_require__.m = modules;
        /******/
        /******/ 	// expose the module cache
        /******/ 	__webpack_require__.c = installedModules;
        /******/
        /******/ 	// define getter function for harmony exports
        /******/ 	__webpack_require__.d = function (exports, name, getter) {
        /******/ 		if (!__webpack_require__.o(exports, name)) {
        /******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
            /******/
        }
        /******/
    };
        /******/
        /******/ 	// define __esModule on exports
        /******/ 	__webpack_require__.r = function (exports) {
        /******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            /******/
        }
        /******/ 		Object.defineProperty(exports, '__esModule', { value: true });
        /******/
    };
        /******/
        /******/ 	// create a fake namespace object
        /******/ 	// mode & 1: value is a module id, require it
        /******/ 	// mode & 2: merge all properties of value into the ns
        /******/ 	// mode & 4: return value when already ns object
        /******/ 	// mode & 8|1: behave like require
        /******/ 	__webpack_require__.t = function (value, mode) {
        /******/ 		if (mode & 1) value = __webpack_require__(value);
        /******/ 		if (mode & 8) return value;
        /******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        /******/ 		var ns = Object.create(null);
        /******/ 		__webpack_require__.r(ns);
        /******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
        /******/ 		if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
        /******/ 		return ns;
        /******/
    };
        /******/
        /******/ 	// getDefaultExport function for compatibility with non-harmony modules
        /******/ 	__webpack_require__.n = function (module) {
        /******/ 		var getter = module && module.__esModule ?
        /******/ 			function getDefault() { return module['default']; } :
        /******/ 			function getModuleExports() { return module; };
        /******/ 		__webpack_require__.d(getter, 'a', getter);
        /******/ 		return getter;
        /******/
    };
        /******/
        /******/ 	// Object.prototype.hasOwnProperty.call
        /******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
        /******/
        /******/ 	// __webpack_public_path__
        /******/ 	__webpack_require__.p = "";
        /******/
        /******/
        /******/ 	// Load entry module and return exports
        /******/ 	return __webpack_require__(__webpack_require__.s = 1);
    /******/
})
        /************************************************************************/
        /******/([
        /* 0 */
        /***/ (function (module, exports) {

        module.exports = require("fs");

        /***/
    }),
            /* 1 */
            /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        // ESM COMPAT FLAG
        __webpack_require__.r(__webpack_exports__);


        function LoadJSONFile(pPath) {
            return JSON.parse(LoadResourceFile(GetCurrentResourceName(), pPath));
        }

        const fs = require('fs');

        async function LoadJSONFiles(pPath) {
            return new Promise((resolve) => {
                setImmediate(() => {
                    const path = GetResourcePath(GetCurrentResourceName()) + pPath;
                    const files = [];
                    if (fs.existsSync(path)) {
                        const dirFiles = fs.readdirSync(path);
                        for (const file of dirFiles) {
                            const data = LoadJSONFile(`${pPath}${file}`);
                            if (data) {
                                files.push(data);
                            }
                        }
                        resolve(files);
                    }
                });
            });
        }

        NPX.Procedures.register('np-vehicles:admin:getTraffic', async () => {
            return false
        });

        NPX.Procedures.register('np:vehicles:getGarages', async () => {
            const garages = [];
            const files = await LoadJSONFiles('/seeding/garages/');

            files.forEach((result) => {
                const garage = {
                    garage_id: result.garage_id,
                    type: result.type,
                    name: result.name,
                    location: result.location,
                    parkingSpots: result.parkingSpots,
                    parkingLimit: result.parkingLimit,
                    vehicleTypes: result.vehicleTypes,
                };

                garages.push(garage);
            });

            return garages;
        });



        // np-vehicles-admin/getRemovedVehicles.js

        NPX.Procedures.register('np-vehicles:admin:getRemovedVehicles', async () => {
            const vehicles = [];
            const getRemovedVehicles = {
                "model": ["asea", "sultanrs", "baller"],
                "name": ["Asea", "Sultan RS", "Baller"],
                "vin": ["31", "12", "56"],
                "claimed": ["false", "false", "false"],
                "notified": ["false", "false", "false"]
            };

            for (let i = 0; i < getRemovedVehicles.model.length; i++) {
                const vehicleList = {
                    model: getRemovedVehicles.model[i],
                    name: getRemovedVehicles.name[i],
                    vin: getRemovedVehicles.vin[i],
                    claimed: getRemovedVehicles.claimed[i],
                    notified: getRemovedVehicles.notified[i]
                };

                vehicles.push(vehicleList);
            }

            return vehicles;
        });


        ; (() => {
            'use strict'
            var _0x370f39 = {
                420: (_0x147506, _0x486d55) => {
                    Object.defineProperty(_0x486d55, '__esModule', { value: true })
                    _0x486d55.Repository = void 0
                    _0x486d55.Repository = class {
                        static async ['doesPlateExist'](_0x10fa1f) {
                            return true
                        }
                    }
                },
                558: (_0x26745d, _0x36236b, _0x491527) => {
                    Object.defineProperty(_0x36236b, '__esModule', { value: true })
                    _0x36236b.InitEvents = void 0
                    const _0x5e2697 = _0x491527(804),
                        _0xdfced7 = _0x491527(405),
                        _0x50099c = _0x491527(905),
                        _0x241375 = _0x491527(237),
                        _0x43690a = _0x491527(827),
                        _0x3e1d26 = _0x491527(130),
                        _0x47a545 = _0x491527(917),
                        _0x13b062 = _0x491527(912),
                        _0x917faf = _0x491527(104),
                        _0x109f31 = _0x491527(694),
                        _0x49230c = _0x491527(203),
                        _0x5a0ab9 = _0x491527(662)
                    _0x36236b.InitEvents = async function () { }
                    RPC.register('np:vehicles:giveKey', (_0x5ceeb5, _0x21199b) => {
                        emitNet('np:vehicles:addKey', Number(_0x21199b), _0x5ceeb5)
                        emitNet('DoLongHudText', Number(_0x21199b), 'You just received keys to a vehicle!')
                    }
                    )
                    RPC.register('np:vehicles:sellPhone', async (_0x692882, _0x135d4d, _0x4b7fc2, _0x75dd77, _0x1e096b) => {
                        emitNet(
                            'np:vehicles:sellNotify',
                            -1,
                            Number(_0x4b7fc2),
                            Number(_0x135d4d),
                            _0x75dd77,
                            Number(_0x1e096b),
                            _0x692882
                        )
                    }
                    )
                    RPC.register('np:vehicles:sell:vehicle', async (_0x196694, _0x16903a, _0x424495, _0x467ccb, _0x20b4f8) => {

                    })
                    NPX.Procedures.register("np:vehicles:getVehicles", function(){
                        return [
                            {
                                model: "ninef2",
                                plate: "AF6K2RSS",
                                name: "9F Cabrio",
                                state: "stored",
                                garage: "garage_num_3",
                                damage: {
                                    engine: 100,
                                    body: 100,
                                    fuel: 100
                                },
                                type: "land",
                                size: "compact",
                                vin: "1PDCO61PNP23898719",
                                claimed: false,
                                notified: false
                            },
                            {
                                model: "asea",
                                plate: "E0UB6RWE",
                                name: "Asea",
                                state: "locked",
                                garage: "garage_num_3",
                                damage: {
                                    engine: 70,
                                    body: 80,
                                    fuel: 100
                                },
                                type: "land",
                                size: "compact",
                                vin: "1GVCO61NOX23898719",
                                claimed: false,
                                notified: false
                            },
                            {
                                model: "buffalo",
                                plate: "A1GYMQPT",
                                name: "Buffalo",
                                state: "stored",
                                garage: "garage_num_3",
                                damage: {
                                    engine: 60,
                                    body: 56,
                                    fuel: 100
                                },
                                type: "land",
                                size: "compact",
                                vin: "1PDCO28GHP23898719",
                                claimed: false,
                                notified: false
                            }
                        ]
                    
                    })
                    RPC.register('np:vehicles:getSharedVehicles', async (pGarage, pCurrentGarage) => {
                        if (!Array.isArray(pGarage)) {
                            return (
                                (await exports["np-db"].execute('SELECT * FROM characters_cars WHERE shared_job = @shared_job AND garage = @garage AND NOT state = @state',
                                    {
                                        shared_job: pGarage,
                                        garage: pCurrentGarage,
                                        state: 'Out',
                                    }
                                )) || []
                            )
                        }
                        {
                            let isJob = false
                            for (let index = 0; index < pGarage.length; index++) {
                                'police' === pGarage[index] && (isJob = true)
                                'state' === pGarage[index] && (isJob = true)
                            }
                            if (isJob) {
                                return (
                                    (await exports["np-db"].execute('SELECT * FROM characters_cars WHERE shared_job = @shared_job AND garage = @garage AND NOT state = @state',
                                        {
                                            shared_job: 'police',
                                            garage: pCurrentGarage,
                                            state: 'Out',
                                        }
                                    )) || []
                                )
                            }
                        }
                        return []
                    }
                    )
                    RPC.register('np:vehicles:degradation:requestRepair', async (_0xa9bc28, _0x3d3daf, _0x4a44b5) => {
                        const _0x4394f2 = NetworkGetEntityFromNetworkId(_0xa9bc28)
                        return !!(await (0, _0x13b062.CanRepairDegradation)(_0x4394f2, _0x3d3daf, _0x4a44b5))
                    }
                    )
                    RPC.register('np:vehicles:degradation:doRepair', (_0x3f9799, _0x2d8a13, _0x386c94, _0x2c954a) => {
                        if (_0x2c954a) {
                            const _0x55d98f = NetworkGetEntityFromNetworkId(_0x3f9799)
                                ; (0, _0x13b062.FixVehicleDegredation)(_0x55d98f, _0x2d8a13, _0x386c94)
                        }
                    }
                    )
                    RPC.register('np:vehicles:addDegradation', async (_0xda185b, _0x585be2) => {
                        const _0x42431c = NetworkGetEntityFromNetworkId(_0xda185b)
                        return !!(await (0, _0x13b062.SetVehicleDegradation)(_0x42431c, _0x585be2))
                    }
                    )
                    RPC.register('np:vehicles:spawnGarageVehicle', async (_0x9011bb, _0x363b0d, _0x543f40) => {
                        let src = _0x491527.g.source
                        const _0x6281ce = await (0, _0x50099c.SpawnPlayerVehicle)(src, _0x9011bb, [_0x543f40.x, _0x543f40.y, _0x543f40.z], Number(_0x543f40.h), true)
                        if (_0x6281ce.success) {
                            if (
                                !(await exports["np-db"].execute('UPDATE characters_cars SET state = @state WHERE vin = @vin',
                                    {
                                        state: 'out',
                                        vin: _0x9011bb,
                                    }
                                ))
                            ) {
                                return false
                            }
                            const _0x2dcdfe = _0x5e2697.Base.getModule('Player').GetUser(src)
                            if (!_0x2dcdfe) {
                                return
                            }
                            const _0x1419ab = NetworkGetEntityFromNetworkId(_0x6281ce.netId),
                                _0x18e13c = await (0, _0x50099c.GetSpawnInfo)(_0x1419ab)
                            RPC.execute("RestoreVehicleDamage", src, _0x6281ce.netId, _0x18e13c.damage)
                            return !(
                                _0x18e13c.vin &&
                                !(await exports["np-db"].execute('INSERT INTO parking_logs (vin, cid, action, engine, body, fuel, timestamp, garage) VALUES (@vin, @cid, @action, @engine, @body, @fuel, @timestamp, @garage)',
                                    {
                                        vin: _0x9011bb,
                                        cid: _0x2dcdfe.character.id,
                                        action: 'out',
                                        engine: _0x18e13c.damage.engine,
                                        body: _0x18e13c.damage.body,
                                        fuel: _0x18e13c.metadata.fuel,
                                        timestamp: Date.now(),
                                        garage: _0x363b0d,
                                    }
                                ))
                            )
                        }
                        return false
                    }
                    )
                    RPC.register('np:vehicles:fetchParkingLogs', async (_0xacf134, _0x5db31f) => {
                        const _0x254830 = await exports["np-db"].execute('SELECT * FROM parking_logs WHERE vin = @vin AND garage = @garage ORDER BY id DESC',
                            {
                                vin: _0xacf134,
                                garage: _0x5db31f,
                            }
                        )
                        return _0x254830
                            ? _0x254830.map((_0x70e279) => ({
                                cid: _0x70e279.cid,
                                action: _0x70e279.action,
                                timestamp: Number(_0x70e279.timestamp),
                                data: {
                                    engine: _0x70e279.engine,
                                    body: _0x70e279.body,
                                    fuel: _0x70e279.fuel,
                                },
                            }))
                            : []
                    }
                    )
                    RPC.register('np:vehicles:generateVehicleInformation', async (pVeh, pModel) => {
                        const src = _0x491527.g.source,
                            netId = NetworkGetEntityFromNetworkId(pVeh)
                        if (await (0, _0x3e1d26.GenerateVehicleInformation)(src, netId, pModel)) {
                            return true
                        }
                    }
                    )
                    RPC.register('np:vehicles:storeVehicle', async (_0x4852cf, _0x52a9eb) => {
                        const _0x5603e3 = NetworkGetEntityFromNetworkId(_0x4852cf)
                        let src = _0x491527.g.source
                        return !!(await (0, _0x241375.StoreVehicleInGarage)(src, _0x5603e3, _0x52a9eb))
                    }
                    )
                    RPC.register('np-vehicles:damage:saveDamage', (_0xa07cad) => {
                        const _0x407867 = NetworkGetEntityFromNetworkId(_0xa07cad)
                            ; (0, _0x13b062.SaveVehicleDamage)(_0x407867)
                    }
                    )
                    RPC.register('np:vehicles:getFuelPrice', (_0x566069) => ({
                        taxLevel: 15,
                        fuelPrice: 3,
                    }))
                    RPC.register('np:vehicles:GetVehicleWheelFitment', (netId) => {
                        let veh = NetworkGetEntityFromNetworkId(netId)
                        const vehData = Entity(Number(veh))
                        if (vehData) {
                            const metadata = vehData.state.data;
                            if (metadata && metadata.wheelFitment) {
                                return metadata.wheelFitment;
                            } else {
                                console.error("Metadata or wheelFitment information is missing or invalid.");
                                return null; // or you can return another value.
                            }
                        } else {
                            console.error("Vehicle data not found.");
                            return null; // or you can return another value.
                        }
                    });

                    RPC.register('np:vehicles:GetVehicleAfterMarket', async (netId, pType) => {
                        let veh = NetworkGetEntityFromNetworkId(netId)
                        let vehData = Entity(Number(veh))
                        if (vehData) {
                            const metadata = vehData.state.data;
                            if (metadata && metadata.afterMarkets) {
                                if (pType === 'engineSound') {
                                    return metadata.afterMarkets.engineSound;
                                } else {
                                    return metadata.afterMarkets;
                                }
                            } else {
                                console.error("Metadata or afterMarkets information is missing or invalid.");
                                return null; // or you can return another value.
                            }
                        } else {
                            console.error("Vehicle data not found.");
                            return null; // or you can return another value.
                        }
                    });

                    RPC.register('np:vehicles:addFuel', (_0x40234e, _0x475373, _0x410e8b, _0x47d67b, _0x4356d9, _0x3527e5) => {
                        const _0x18add5 = NetworkGetEntityFromNetworkId(_0x40234e)
                            ; (0, _0x917faf.AddVehicleFuel)(_0x18add5, _0x475373)
                    }
                    )
                    RPC.register('np:vehicles:setFakeLicensePlate', async (_0x26eb8d, _0x4e101f) => {
                        let src = _0x491527.g.source
                        await (0, _0xdfced7.SetVehicleFakeLicensePlate)(src, _0x26eb8d, _0x4e101f)
                    })
                    RPC.register('np:vehicles:getLicensePlate', async (_0x52f9f6) =>
                        await (0, _0xdfced7.GetLicensePlate)(_0x52f9f6)
                    )
                    RPC.register('np-vehicles:chargeForNOSRefill', async (_0x4dc379) => {

                    })
                    RPC.register('np-vehicles:chargeForFuelRefill', async (_0x2a7e28) => {
                        let src = _0x491527.g.source
                        const _0x16d558 = _0x5e2697.Base.getModule('Player').GetUser(src)
                        if (_0x16d558) {
                            return _0x16d558.removeMoney(_0x2a7e28)
                        }
                    }
                    )
                    RPC.register('np:vehicles:respawnVehicle', async (_0x3b614b, _0x4d0676, _0x5e7d81, _0x37badb, _0x4834d8) => {
                        !!(
                            await (0, _0x50099c.SpawnPlayerVehicle)(
                                _0x3b614b,
                                _0x4d0676,
                                [_0x5e7d81.x, _0x5e7d81.y, _0x5e7d81.z],
                                Number(_0x37badb),
                                _0x4834d8
                            )
                        ).success
                    })
                    _0x5e2697.Procedures.register('np:vehicles:respawnVehicle', async (_0x3b614b, _0x4d0676, _0x5e7d81, _0x37badb, _0x4834d8) =>
                        !!(
                            await (0, _0x50099c.SpawnPlayerVehicle)(
                                _0x3b614b,
                                _0x4d0676,
                                [_0x5e7d81.x, _0x5e7d81.y, _0x5e7d81.z],
                                Number(_0x37badb),
                                _0x4834d8
                            )
                        ).success
                    )
                    _0x5e2697.Procedures.register('np:vehicles:basicSpawn', async (
                        _0x338fc8,
                        _0x153c96,
                        _0x34012d,
                        _0x4c263b,
                        _0x204ce0 = 'menu',
                        _0x32eece,
                        _0x19f632,
                        _0x422f75
                    ) => {
                        const _0x2d40e9 = await (0, _0x50099c.BasicSpawn)(
                            _0x338fc8,
                            _0x153c96,
                            _0x34012d,
                            _0x4c263b,
                            _0x204ce0,
                            _0x32eece,
                            _0x19f632,
                            _0x422f75
                        )
                        return !!_0x2d40e9.netId && _0x2d40e9.netId
                    }
                    )
                    onNet("np:vehicles:InsertVehicleData", (src, data) => {
                        const info = exports["np-db"].execute('INSERT INTO characters_cars (vin, cid, model, state, plate, garage, name, type, size, degradation, metadata, damage, mods, appearance, vinScratched) VALUES (@vin, @cid, @model, @state, @plate, @garage, @name, @type, @size, @degradation, @metadata, @damage, @mods, @appearance, @vinScratched)',
                            {
                                vin: data.vin,
                                cid: data.cid,
                                model: data.model,
                                state: data.state,
                                plate: data.plate,
                                garage: data.garage,
                                name: data.name,
                                type: data.type,
                                size: data.size,
                                degradation: JSON.stringify(data.degradation),
                                metadata: JSON.stringify(data.metadata),
                                damage: JSON.stringify(data.damage),
                                mods: JSON.stringify(data.mods),
                                appearance: JSON.stringify(data.appearance),
                                records: [],
                                vinScratched: data.vinScratched,
                            })
                    })
                    onNet('np:vehicles:addCarBomb', (
                        _0x142b0a,
                        _0xe758b4,
                        _0x207d32,
                        _0x57e474,
                        _0x496cd7,
                        _0x4c011a,
                        _0x1f72fc
                    ) => {
                        ; (0, _0x3e1d26.AddCarBomb)(
                            _0x142b0a,
                            _0xe758b4,
                            _0x207d32,
                            _0x57e474,
                            _0x496cd7,
                            _0x4c011a,
                            _0x1f72fc
                        )
                    }
                    )
                    onNet('np-vehicles:updateVehicle', async (_0x579a8a, _0x44c07d, _0x5784e4) => {
                        _0x579a8a &&
                            (await exports["np-db"].execute('UPDATE characters_cars SET appearance = @appearance, mods = @mods WHERE plate = @plate',
                                {
                                    appearance: JSON.stringify(_0x44c07d) || null,
                                    mods: JSON.stringify(_0x5784e4) || null,
                                    plate: _0x579a8a,
                                }
                            ))
                    }
                    )
                    onNet('np:vehicles:DoHarnessDamage', (_0x12fe1d, _0x3d5486) => {
                        ; (0, _0x109f31.DoHarnessDamage)(_0x12fe1d, _0x3d5486)
                    })
                    onNet('np:vehicles:UpdateGarage', (src, pVin, pGarage) => {
                        const update = exports["np-db"].execute('UPDATE characters_cars SET garage = @garage WHERE vin = @vin',
                            {
                                garage: pGarage,
                                vin: pVin,
                            }
                        )
                    })
                    onNet('np:vehicles:reduceFuel', (_0x2a51ce, _0x4a0ac1) => {
                        ; (0, _0x917faf.SetVehicleFuel)(_0x2a51ce, _0x4a0ac1)
                    })
                    onNet("np:vehicles:basicSpawn", (_0x214949, _0x3c0262, _0xb79c83, _0x215c94 = 'menu', _0x164777, _0x2a1d85, _0x1f3457) => {
                        let src = _0x491527.g.source
                        // const spawn = await (0, _0x50099c.BasicSpawn)(src, _0x214949, _0x3c0262, _0xb79c83, _0x215c94, _0x164777, _0x2a1d85, _0x1f3457)
                    })
                    onNet('np:vehicles:addMileage', (_0x5ca865, _0x5bc213) => {
                        const _0x3f9cc6 = NetworkGetEntityFromNetworkId(_0x5ca865)
                            ; (0, _0x49230c.AddVehicleMileage)(_0x3f9cc6, _0x5bc213)
                    })
                    onNet('np:vehicles:addNitro', (_0x9f97cd, _0x11b22a) => {
                        const _0x4fde1f = NetworkGetEntityFromNetworkId(_0x9f97cd)
                            ; (0, _0x5a0ab9.AddVehicleNitrous)(_0x4fde1f, _0x11b22a)
                    })
                    onNet('np:vehicles:addHarness', (_0x1cbe14, _0x3473f0) => {
                        const _0x45ce1d = NetworkGetEntityFromNetworkId(_0x1cbe14)
                            ; (0, _0x109f31.AddVehicleHarness)(_0x45ce1d, _0x3473f0)
                    })
                    onNet('np:vehicles:addCarPolish', (_0x296f7d, _0x46291f) => {
                        const _0x5e6003 = NetworkGetEntityFromNetworkId(_0x296f7d)
                            ; (0, _0x47a545.AddVehicleCarPolish)(_0x5e6003, _0x46291f)
                    })
                    onNet('np:vehicles:removeCarPolish', (_0x1fc66d) => {
                        const _0x4489a7 = NetworkGetEntityFromNetworkId(_0x1fc66d)
                            ; (0, _0x47a545.RemoveVehicleCarPolish)(_0x4489a7)
                    })
                    onNet('np:vehicles:nitroUsed', (_0x1d3d9f, _0x381cc3) => {
                        const _0x4bf2d6 = NetworkGetEntityFromNetworkId(_0x1d3d9f)
                            ; (0, _0x5a0ab9.NitroUsed)(_0x4bf2d6, _0x381cc3)
                    })
                    onNet('np:vehicles:gotKeys', async (_0x1fb496, _0x18aec8) => {
                        const _0x24e018 = _0x491527.g.source,
                            _0x1ceebc = NetworkGetEntityFromNetworkId(_0x1fb496),
                            _0x344f48 = Entity(Number(_0x1ceebc))
                        if (_0x344f48.state.vin) {
                            ; (0, _0x43690a.AddKey)(_0x24e018, _0x344f48.state.vin)
                        } else {
                            const _0xccb4a8 = await (0, _0x3e1d26.GenerateVehicleInformation)(_0x24e018, _0x1ceebc, _0x18aec8)
                            _0xccb4a8 && (0, _0x43690a.AddKey)(_0x24e018, _0xccb4a8.vin)
                        }
                    })
                    onNet('np:vehicles:generateMetadata', (_0x12f116) => {
                        ; (0, _0x3e1d26.GenerateMetadata)(_0x12f116)
                    })
                },
                937: (_0x2c04fa, _0x2826e6, _0x44d0cb) => {
                    Object.defineProperty(_0x2826e6, '__esModule', { value: true })
                    _0x2826e6.InitExports = void 0
                    const _0x4ef6a7 = _0x44d0cb(905)
                    _0x2826e6.InitExports = async function () { }
                    _0x44d0cb.g.exports('BasicSpawn', _0x4ef6a7.BasicSpawn)
                    _0x44d0cb.g.exports('SpawnPlayerVehicle', _0x4ef6a7.SpawnPlayerVehicle)
                    _0x44d0cb.g.exports('GenerateVehicleInfo', _0x4ef6a7.GenerateVehicleInfo)
                    _0x44d0cb.g.exports('InsertVehicleData', _0x4ef6a7.InsertVehicleData)
                    _0x44d0cb.g.exports('GetVehicleAppearance', _0x4ef6a7.GetVehicleAppearance)
                    _0x44d0cb.g.exports('GetVehicleMods', _0x4ef6a7.GetVehicleMods)
                    _0x44d0cb.g.exports('GetSpawnInfo', _0x4ef6a7.GetSpawnInfo)
                },
                741: (_0x176f33, _0x1c1f73, _0x1edd4a) => {
                    _0x1edd4a(558)
                    _0x1edd4a(937)
                    _0x1edd4a(905)
                    _0x1edd4a(104)
                    setImmediate(async () => {
                        await exports["np-db"].execute('UPDATE characters_cars SET state = @state WHERE state = "out"', {
                            state: 'stored',
                        })
                    })
                },
                405: (_0x492ff6, _0x245dfa, _0x4ac7ef) => {
                    Object.defineProperty(_0x245dfa, '__esModule', { value: true })
                    _0x245dfa.GetLicensePlate = _0x245dfa.SetVehicleFakeLicensePlate =
                        void 0
                    const _0x324ecf = _0x4ac7ef(905),
                        _0x50a6d8 = _0x4ac7ef(130)
                    _0x245dfa.SetVehicleFakeLicensePlate = async function (_0x119774, _0x36a94d, _0x4bc356) {
                        const _0xe807be = NetworkGetEntityFromNetworkId(_0x36a94d),
                            _0x264c25 = Entity(Number(_0xe807be))
                        if (_0x264c25) {
                            const _0x64e98b = _0x264c25.state.data
                            if (_0x64e98b) {
                                if (_0x4bc356) {
                                    const _0x1786ee = (0, _0x324ecf.GeneratePlateNumber)()
                                    return (
                                        (_0x64e98b.fakePlate = _0x1786ee),
                                        (_0x264c25.state.data = {
                                            fuel: _0x64e98b.fuel,
                                            mileage: _0x64e98b.mileage,
                                            harness: _0x64e98b.harness,
                                            nitro: _0x64e98b.nitro,
                                            carPolish: _0x64e98b.carPolish,
                                            fakePlate: _0x1786ee,
                                            neonDisabled: _0x64e98b.neonDisabled,
                                            handling: _0x64e98b.handling,
                                            afterMarkets: _0x64e98b.afterMarkets,
                                            wheelFitment: _0x64e98b.wheelFitment,
                                        }),
                                        !!_0x264c25.state.vin &&
                                        (await exports["np-db"].execute('UPDATE characters_cars SET metadata = @metadata WHERE vin = @vin',
                                            {
                                                metadata: JSON.stringify(_0x64e98b),
                                                vin: _0x264c25.state.vin,
                                            }
                                        ),
                                            await RPC.execute('SetVehicleNumberPlateText', _0x119774, _0x36a94d, _0x1786ee), true)
                                    )
                                }
                                if (
                                    ((_0x64e98b.fakePlate = false),
                                        (_0x264c25.state.data = {
                                            fuel: _0x64e98b.fuel,
                                            mileage: _0x64e98b.mileage,
                                            harness: _0x64e98b.harness,
                                            nitro: _0x64e98b.nitro,
                                            carPolish: _0x64e98b.carPolish,
                                            fakePlate: false,
                                            neonDisabled: _0x64e98b.neonDisabled,
                                            handling: _0x64e98b.handling,
                                            afterMarkets: _0x64e98b.afterMarkets,
                                            wheelFitment: _0x64e98b.wheelFitment,
                                        }),
                                        _0x264c25.state.vin)
                                ) {
                                    await exports["np-db"].execute('UPDATE characters_cars SET metadata = @metadata WHERE vin = @vin',
                                        {
                                            metadata: JSON.stringify(_0x64e98b),
                                            vin: _0x264c25.state.vin,
                                        }
                                    )
                                    const _0x521159 = await (0, _0x50a6d8.FetchVehicleInfo)(
                                        _0x264c25.state.vin
                                    )
                                    return (
                                        !!_0x521159 &&
                                        !!_0x521159.plate &&
                                        (await RPC.execute('SetVehicleNumberPlateText', _0x119774, _0x36a94d, _0x521159.plate), true)
                                    )
                                }
                                return false
                            }
                        }
                    }
                    _0x245dfa.GetLicensePlate = async function (_0x385982) {
                        const _0x383ed6 = await (0, _0x50a6d8.FetchVehicleInfo)(_0x385982)
                        return _0x383ed6
                            ? {
                                hasVehicleInfo: true,
                                licensePlate: _0x383ed6.plate,
                            }
                            : {
                                hasVehicleInfo: false,
                                licensePlate: null,
                            }
                    }
                },
                905: (_0x1751da, _0x4aba12, _0x1454d3) => {
                    Object.defineProperty(_0x4aba12, '__esModule', { value: true })
                    _0x4aba12.RemoveGlobalVehicle =
                        _0x4aba12.AddGlobalVehicle =
                        _0x4aba12.SpawnPlayerVehicle =
                        _0x4aba12.SpawnVehicleByInfo =
                        _0x4aba12.BasicSpawn =
                        _0x4aba12.InsertVehicleData =
                        _0x4aba12.SpawnVehicle =
                        _0x4aba12.SetVehicleInfo =
                        _0x4aba12.GetSpawnInfo =
                        _0x4aba12.GetVehicleMods =
                        _0x4aba12.GetVehicleAppearance =
                        _0x4aba12.GenerateVehicleInfo =
                        _0x4aba12.CreateLicensePlate =
                        _0x4aba12.DoesPlateExist =
                        _0x4aba12.GeneratePlateNumber =
                        _0x4aba12.GetDefaultDamage =
                        _0x4aba12.GetDefaultDegradation =
                        _0x4aba12.GetDefaultSpawnData =
                        _0x4aba12.GetVehicleType =
                        _0x4aba12.GetVehicleClass =
                        _0x4aba12.GlobalVehicles =
                        _0x4aba12.InitSpawn =
                        void 0
                    const _0x2e5605 = _0x1454d3(674),
                        _0x3f94ff = _0x1454d3(981),
                        _0x14cd84 = _0x1454d3(420),
                        _0x3b4e99 = _0x1454d3(130),
                        _0x15c5a1 = _0x1454d3(827)
                    async function _0x22ff6b(_0x26ff14, _0x56adc9) {
                        return await RPC.execute('GetVehicleClassFromName', _0x26ff14, _0x56adc9)
                    }
                    function _0x5b9c89(_0x11c5ce) {
                        switch (_0x11c5ce) {
                            case 14:
                                return 'boats'
                            case 15:
                                return 'helicopters'
                            case 16:
                                return 'planes'
                            default:
                                return 'land'
                        }
                    }
                    function _0xe0c834() {
                        return {
                            fuel: (0, _0x3f94ff.GetRandom)(35, 100),
                            mileage: 0,
                            harness: 0,
                            nitro: 0,
                            carPolish: 0,
                            fakePlate: false,
                            neonDisabled: false,
                            handling: {},
                            afterMarkets: {},
                            wheelFitment: {},
                            carBombData: {},
                        }
                    }
                    function _0x4cee60() {
                        let _0x556799 = ''
                        for (let _0x7edfa9 = 0; _0x7edfa9 < 8; _0x7edfa9 += 1) {
                            _0x556799 +=
                                (0, _0x3f94ff.GetRandom)(50) >= 25
                                    ? String.fromCharCode((0, _0x3f94ff.GetRandom)(65, 90))
                                    : (0, _0x3f94ff.GetRandom)(0, 9)
                        }
                        return _0x556799.toUpperCase()
                    }
                    async function _0x1034a5(_0x1b8b12) {
                        return _0x14cd84.Repository.doesPlateExist(_0x1b8b12)
                    }
                    async function _0x47f131(_0x4f8e64, _0x1f4774) {
                        let _0x14d2f0 = Entity(Number(_0x4f8e64))
                        let src = NetworkGetEntityOwner(Number(_0x4f8e64))
                        let netId = NetworkGetNetworkIdFromEntity(Number(_0x4f8e64))
                        console.log(_0x1f4774.damage)
                        return emitNet("np-vehicles:spawnedVehicle", src, netId), (_0x1f4774.damage && (await RPC.execute('RestoreVehicleDamage', src, netId, _0x1f4774.damage)),
                            _0x1f4774.appearance &&
                            (await RPC.execute('SetVehicleAppearance', src, netId, _0x1f4774.appearance)),
                            _0x1f4774.mods &&
                            (await RPC.execute('SetVehicleMods', src, netId, _0x1f4774.mods)),
                            (_0x1f4774.plate || _0x1f4774.metadata?.fakePlate) &&
                            (await RPC.execute('SetVehicleNumberPlateText', src, netId, _0x1f4774.metadata?.fakePlate
                                ? _0x1f4774.metadata.fakePlate
                                : _0x1f4774.plate
                            )),
                            _0x1f4774.metadata?.wheelFitment && emitNet('np-wheelfitment_cl:applySavedWheelFitment', src, _0x1f4774.metadata?.wheelFitment, netId),
                            (_0x14d2f0.state.vin = _0x1f4774.vin),
                            (_0x14d2f0.state.vinScratched = _0x1f4774.vinScratched || 0),
                            (_0x14d2f0.state.data = _0x1f4774.metadata || _0xe0c834()),
                            (_0x14d2f0.state.degradation = _0x1f4774.degradation || {
                                axle: 100,
                                brakes: 100,
                                clutch: 100,
                                electronics: 100,
                                injector: 100,
                                radiator: 100,
                                tyres: 100,
                                engine: 100,
                                body: 100,
                                transmission: 100,
                            }),
                        {
                            vehicle: _0x4f8e64,
                            stateBag: _0x14d2f0,
                            owner: src,
                            netId: netId,
                        }
                        )
                    }
                    async function _0x711612(_0x41c7b9, _0x2fc86e, _0x10205d, _0x31b602 = 0, _0x176e78, _0xa71608, _0x3aa394, _0x49a5bf, _0x306c32, _0x50b3e9, _0x456dd3, _0x3a74d4 = true) {
                        const _0x166892 = 'number' != typeof _0x2fc86e ? GetHashKey(_0x2fc86e) : _0x2fc86e,
                            // [_0x56d521] = await RPC.execute('np:vehicles:getWaterHeight', _0x41c7b9),
                            // _0x27b3f3 = _0x56d521 ? _0x10205d[2] : _0x10205d[2] - 25,
                            _0x270cda = CreateVehicle(
                                _0x166892,
                                _0x10205d[0],
                                _0x10205d[1],
                                _0x10205d[2],
                                // _0x27b3f3,
                                _0x31b602,
                                _0x3a74d4,
                                false
                            )
                        TriggerEvent('np-supression:bypass', _0x270cda)
                        const _0x13977b = {
                            vin: _0x176e78,
                            model: _0x2fc86e,
                            plate: _0xa71608,
                            metadata: _0x306c32,
                            mods: _0x49a5bf,
                            damage: _0x50b3e9,
                            appearance: _0x3aa394,
                            degradation: _0x456dd3,
                            vinScratched: false,
                        }
                        let _0x5b89c4 = false
                        for (let _0x3bdbb2 = 0; _0x3bdbb2 < 50; _0x3bdbb2++) {
                            if (DoesEntityExist(_0x270cda)) {
                                _0x5b89c4 = true
                                break
                            }
                            await (0, _0x3f94ff.Delay)(100)
                        }
                        if (!_0x5b89c4) {
                            return
                        }
                        const _0x4ff375 = await _0x47f131(_0x270cda, _0x13977b)
                        return (SetEntityCoords(_0x270cda, _0x10205d[0], _0x10205d[1], _0x10205d[2], false, false, false, false), (0, _0x15c5a1.AddKey)(_0x41c7b9, _0x176e78), _0x4ff375)
                    }
                    _0x4aba12.InitSpawn = function () { }
                    _0x4aba12.GlobalVehicles = new Map()
                    _0x4aba12.GetVehicleClass = _0x22ff6b
                    _0x4aba12.GetVehicleType = _0x5b9c89
                    _0x4aba12.GetDefaultSpawnData = _0xe0c834
                    _0x4aba12.GetDefaultDegradation = function () {
                        return {
                            axle: 100,
                            brakes: 100,
                            clutch: 100,
                            electronics: 100,
                            injector: 100,
                            radiator: 100,
                            tyres: 100,
                            engine: 100,
                            body: 100,
                            transmission: 100,
                        }
                    }
                    _0x4aba12.GetDefaultDamage = function () {
                        return {
                            body: 1000,
                            engine: 1000,
                            dirt: 5,
                            doors: [],
                            wheels: [],
                            windows: [],
                        }
                    }
                    _0x4aba12.GeneratePlateNumber = _0x4cee60
                    _0x4aba12.DoesPlateExist = _0x1034a5
                    _0x4aba12.CreateLicensePlate = async function () {
                        let _0x2e1632 = _0x4cee60()
                        for (; await _0x1034a5(_0x2e1632);) {
                            _0x2e1632 = _0x4cee60()
                            await (0, _0x3f94ff.Delay)(10)
                        }
                        return _0x2e1632
                    }
                    _0x4aba12.GenerateVehicleInfo = async function (src, pCid, pModel, _0x380a79 = 'script', _0x1630ef = 'menu', pVin, pName, pSize, pData, pPlate) {
                        const _0xc4c625 = GetHashKey(pModel),
                            _0x1fcca7 = await _0x22ff6b(src, pModel),
                            _0xf0241d = pCid,
                            _0x592db6 = pVin || (0, _0x2e5605.GenerateIdentificationNumber)(_0x380a79, _0x1630ef, _0x1fcca7, _0xc4c625),
                            _0x255ffc = pModel,
                            _0x17b7b6 = (function (_0x149152) {
                                switch (_0x149152) {
                                    case 14:
                                        return 'boats_a'
                                    case 15:
                                    case 16:
                                        return 'air_a'
                                    default:
                                        return 'garage_alta'
                                }
                            })(_0x1fcca7),
                            _0x466ce6 = pPlate || _0x4cee60(),
                            _0x3119e7 = pName,
                            _0x184863 = _0x5b9c89(_0x1fcca7),
                            _0x4b4302 = pSize || 2,
                            _0x25c60d = pData?.degradation
                                ? pData.degradation
                                : {
                                    axle: 100,
                                    brakes: 100,
                                    clutch: 100,
                                    electronics: 100,
                                    injector: 100,
                                    radiator: 100,
                                    tyres: 100,
                                    engine: 100,
                                    body: 100,
                                    transmission: 100,
                                },
                            _0x4fa4d = pData?.metadata ? pData.metadata : _0xe0c834(),
                            _0x3c14db = pData?.damage
                                ? pData.damage
                                : {
                                    body: 1000,
                                    engine: 1000,
                                    dirt: 5,
                                    doors: [],
                                    wheels: [],
                                    windows: [],
                                },
                            _0xe2187d = pData?.mods ? pData.mods : {},
                            _0x1508b4 = pData?.appearance
                                ? pData.appearance
                                : {
                                    colors: {
                                        primary: 0,
                                        secondary: 0,
                                        pearlescent: 0,
                                    },
                                }
                        return {
                            cid: _0xf0241d,
                            vin: _0x592db6,
                            model: _0x255ffc,
                            state: 'stored',
                            garage: _0x17b7b6,
                            plate: _0x466ce6.padEnd(8),
                            name: _0x3119e7,
                            type: _0x184863,
                            size: _0x4b4302,
                            degradation: _0x25c60d,
                            metadata: _0x4fa4d,
                            damage: _0x3c14db,
                            mods: _0xe2187d,
                            appearance: _0x1508b4,
                            records: [],
                            vinScratched: false,
                        }
                    }
                    _0x4aba12.GetVehicleAppearance = async function (_0x1c6bb8, _0x4dcbaa) {
                        const _0x182155 =
                            _0x4dcbaa || NetworkGetEntityFromNetworkId(_0x1c6bb8),
                            _0x328711 = NetworkGetEntityOwner(_0x182155)
                        if (_0x182155 && _0x328711) {
                            return RPC.execute('GetVehicleAppearance', _0x328711, _0x1c6bb8)
                        }
                    }
                    _0x4aba12.GetVehicleMods = async function (_0x241840, _0x4b5946) {
                        const _0x4f736c =
                            _0x4b5946 || NetworkGetEntityFromNetworkId(_0x241840),
                            _0x130ccc = NetworkGetEntityOwner(_0x4f736c)
                        if (_0x4f736c && _0x130ccc) {
                            return RPC.execute('GetVehicleMods', _0x130ccc, _0x241840)
                        }
                    }
                    _0x4aba12.GetSpawnInfo = async function (_0x2acc00, _0xfc2390) {
                        const _0x532103 = Entity(Number(_0x2acc00)),
                            _0x2363f8 = _0xfc2390 || NetworkGetEntityOwner(_0x2acc00),
                            _0x4806be = NetworkGetNetworkIdFromEntity(_0x2acc00),
                            _0x1215ea = RPC.execute('GetVehicleMods', _0x2363f8, _0x4806be),
                            _0x5d1674 = RPC.execute('FetchVehicleDamage', _0x2363f8, _0x4806be),
                            _0xffea7f = RPC.execute('GetVehicleAppearance', _0x2363f8, _0x4806be),
                            [_0x17968c, _0x4b8b3d, _0x4bccfb] = await Promise.all([
                                _0x1215ea,
                                _0x5d1674,
                                _0xffea7f,
                            ])
                        let _0x8c3c06 = _0x532103.state.vin,
                            _0x2612fc = _0x532103.state.data
                        _0x2612fc || (_0x2612fc = _0xe0c834())
                        let _0x105efc = _0x532103.state.degradation
                        return (
                            _0x105efc ||
                            (_0x105efc = {
                                axle: 100,
                                brakes: 100,
                                clutch: 100,
                                electronics: 100,
                                injector: 100,
                                radiator: 100,
                                tyres: 100,
                                engine: 100,
                                body: 100,
                                transmission: 100,
                            }),
                            {
                                vin: _0x8c3c06,
                                appearance: _0x4bccfb,
                                mods: _0x17968c,
                                damage: _0x4b8b3d,
                                metadata: _0x2612fc,
                                degradation: _0x105efc,
                            }
                        )
                    }
                    _0x4aba12.SetVehicleInfo = _0x47f131
                    _0x4aba12.SpawnVehicle = _0x711612
                    _0x4aba12.BasicSpawn = async function (src, pModel, pCoords, pHeading, _0xa81a6e = 'menu', _0x459df4, _0x5545ae, _0x3cf0ce) {
                        const _0x297283 = 'string' == typeof pModel ? GetHashKey(pModel) : pModel,
                            _0x151312 = _0x5545ae || {
                                colors: {},
                                tint: 0,
                            },
                            _0xb8b801 = _0x3cf0ce || {
                                Engine: 1,
                                Brakes: 1,
                                Transmission: 1,
                                Suspension: 1,
                                Armor: 1,
                            }
                        'police' === pModel &&
                            ((_0x151312.colors.primary = 0),
                                (_0x151312.colors.pearlescent = 0),
                                (_0x151312.wheelType = 2),
                                (_0xb8b801.FrontWheels = 10))
                        _0x459df4 && (_0x151312.livery = _0x459df4)
                        const _0x5ac3ee = GetPlayerPed(src.toString()),
                            _0x34a7f6 = pCoords
                                ? [pCoords.x, pCoords.y, pCoords.z]
                                : GetEntityCoords(_0x5ac3ee),
                            _0x2e1949 = pHeading || GetEntityHeading(_0x5ac3ee),
                            _0x54bd05 = await _0x22ff6b(src, _0x297283),
                            _0x4d0bd6 = await (0, _0x2e5605.GenerateIdentificationNumber)('', _0xa81a6e, _0x54bd05, _0x297283)
                        return await _0x711612(
                            src,
                            pModel,
                            _0x34a7f6,
                            _0x2e1949,
                            _0x4d0bd6,
                            void 0,
                            _0x151312,
                            _0xb8b801
                        )
                    }
                    _0x4aba12.SpawnVehicleByInfo = async function (_0x3f01be, _0x47f2cc, _0x3c6d4b, _0x2bba60) {
                        const { x: _0x2dda3f, y: _0x5de8f9, z: _0x3263b1 } = _0x3c6d4b
                        return _0x711612(
                            _0x3f01be,
                            _0x47f2cc.model,
                            [_0x2dda3f, _0x5de8f9, _0x3263b1],
                            _0x2bba60,
                            _0x47f2cc.vin,
                            _0x47f2cc.plate,
                            _0x47f2cc.appearance,
                            _0x47f2cc.mods,
                            _0x47f2cc.metadata,
                            _0x47f2cc.damage,
                            _0x47f2cc.degradation
                        )
                    }
                    _0x4aba12.SpawnPlayerVehicle = async function (_0x33aa0f, _0x426570, _0x1c0bcd, _0x6d5e06, _0x3836db) {
                        const _0x7a246f = await (0, _0x3b4e99.FetchVehicleInfo)(_0x426570, true)
                        if (!_0x7a246f || (_0x3836db && 'out' === _0x7a246f.state)) {
                            return false
                        }
                        const _0x505cf1 = await _0x711612(
                            _0x33aa0f,
                            _0x7a246f.model,
                            _0x1c0bcd,
                            _0x6d5e06,
                            _0x7a246f.vin,
                            _0x7a246f.plate,
                            _0x7a246f.appearance,
                            _0x7a246f.mods,
                            _0x7a246f.metadata,
                            _0x7a246f.damage,
                            _0x7a246f.degradation
                        )
                        return (
                            _0x3836db && (_0x7a246f.state = 'out'),
                            {
                                success: 0 !== _0x505cf1?.netId,
                                netId: _0x505cf1.netId,
                            }
                        )
                    }
                    _0x4aba12.InsertVehicleData = async function (src, data) {
                        const info = exports["np-db"].execute('INSERT INTO characters_cars (vin, cid, model, state, plate, garage, name, type, size, degradation, metadata, damage, mods, appearance, records, vinScratched) VALUES (?, ? , ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                            {
                                vin: data.vin,
                                cid: data.cid,
                                model: data.model,
                                state: data.state,
                                plate: data.plate,
                                garage: data.garage,
                                name: data.name,
                                type: data.type,
                                size: data.size,
                                degradation: JSON.p(data.degradation),
                                metadata: JSON.stringify(data.metadata),
                                damage: JSON.stringify(data.damage),
                                mods: JSON.stringify(data.mods),
                                appearance: JSON.stringify(data.appearance),
                                records: {},
                                vinScratched: data.vinScratched,
                            }
                        )
                    }
                    _0x4aba12.AddGlobalVehicle = function (_0x2e6098, _0x28b8e2) {
                        const _0x214654 = NetworkGetEntityFromNetworkId(_0x2e6098)
                        _0x214654 &&
                            (_0x4aba12.GlobalVehicles.has(_0x2e6098) ||
                                (_0x4aba12.GlobalVehicles.set(_0x2e6098, new Set()),
                                    SetEntityDistanceCullingRadius(_0x214654, 6969)),
                                _0x28b8e2 &&
                                (_0x4aba12.GlobalVehicles.get(_0x2e6098)?.add(_0x28b8e2),
                                    SetEntityDistanceCullingRadius(_0x214654, 6969)))
                    }
                    _0x4aba12.RemoveGlobalVehicle = function (_0x305936, _0x51a5d2) {
                        const _0x44ee89 = NetworkGetEntityFromNetworkId(_0x305936)
                        if (!_0x44ee89 || !_0x4aba12.GlobalVehicles.has(_0x305936)) {
                            return
                        }
                        const _0x34ffe1 = _0x4aba12.GlobalVehicles.get(_0x305936)
                        _0x51a5d2 &&
                            (_0x34ffe1?.delete(_0x51a5d2),
                                SetEntityDistanceCullingRadius(
                                    GetPlayerPed(_0x51a5d2.toString()),
                                    420
                                ))
                        0 === _0x34ffe1?.size &&
                            (_0x4aba12.GlobalVehicles.delete(_0x305936),
                                SetEntityDistanceCullingRadius(_0x44ee89, 420))
                    }
                },
                237: (_0x555701, _0x418384, _0x545cd9) => {
                    Object.defineProperty(_0x418384, '__esModule', { value: true })
                    _0x418384.StoreVehicleInGarage = void 0
                    const _0x11593e = _0x545cd9(804),
                        _0x5c6e1f = _0x545cd9(905)
                    _0x418384.StoreVehicleInGarage = async function (_0x551809, _0x99b1cc, _0x370a34) {
                        const _0x257a8e = await (0, _0x5c6e1f.GetSpawnInfo)(_0x99b1cc)
                        if (_0x257a8e && _0x257a8e.vin) {
                            if (
                                !(await exports["np-db"].execute('UPDATE characters_cars SET state = @state, degradation = @degradation, metadata = @metadata, damage = @damage, mods = @mods, appearance = @appearance, garage = @garage WHERE vin = @vin',
                                    {
                                        state: 'stored',
                                        degradation: JSON.stringify(_0x257a8e.degradation),
                                        metadata: JSON.stringify(_0x257a8e.metadata),
                                        damage: JSON.stringify(_0x257a8e.damage),
                                        mods: JSON.stringify(_0x257a8e.mods),
                                        appearance: JSON.stringify(_0x257a8e.appearance),
                                        garage: _0x370a34,
                                        vin: _0x257a8e.vin,
                                    }
                                ))
                            ) {
                                return
                            }
                            const _0x5cae97 = _0x11593e.Base.getModule('Player').GetUser(_0x551809)
                            if (!_0x5cae97) {
                                return
                            }
                            if (
                                !(await exports["np-db"].execute('INSERT INTO parking_logs (vin, cid, action, engine, body, fuel, timestamp, garage) VALUES (@vin, @cid, @action, @engine, @body, @fuel, @timestamp, @garage)',
                                    {
                                        vin: _0x257a8e.vin,
                                        cid: _0x5cae97.character.id,
                                        action: 'stored',
                                        engine: _0x257a8e.damage.engine,
                                        body: _0x257a8e.damage.body,
                                        fuel: _0x257a8e.metadata.fuel,
                                        timestamp: Date.now(),
                                        garage: _0x370a34,
                                    }
                                ))
                            ) {
                                return
                            }
                            return DeleteEntity(_0x99b1cc), true
                        }
                    }
                    RPC.register('np:vehicles:getPlayerVehicles', async (_0x43bd32, _0x5155be) =>
                        (await exports["np-db"].execute('SELECT * FROM characters_cars WHERE cid = @cid AND garage = @garage AND NOT state = @state',
                            {
                                cid: _0x43bd32,
                                garage: _0x5155be,
                                state: 'out',
                            }
                        )) || []
                    )
                    RPC.register('np:vehicles:getAllPlayerVehicles', async (_0x188351) =>
                        (await exports["np-db"].execute('SELECT * FROM characters_cars WHERE cid = @cid',
                            { cid: _0x188351 }
                        )) || []
                    )
                    RPC.register('np:vehicles:getPlayerVehiclesByCharacterId', async (_0x4a5794) =>
                        (await exports["np-db"].execute('SELECT * FROM characters_cars WHERE cid = @cid',
                            { cid: _0x4a5794 }
                        )) || []
                    )
                },
                827: (_0xdf067b, _0xb0f2a2) => {
                    Object.defineProperty(_0xb0f2a2, '__esModule', { value: true })
                    _0xb0f2a2.AddKey = void 0
                    _0xb0f2a2.AddKey = function (_0x31830b, _0x544c12) {
                        emitNet('np:vehicles:addKey', _0x31830b, _0x544c12)
                    }
                },
                130: (_0x4b5582, _0x211f5c, _0x880c8e) => {
                    Object.defineProperty(_0x211f5c, '__esModule', { value: true })
                    _0x211f5c.FetchVehicleInfo =
                        _0x211f5c.AddCarBomb =
                        _0x211f5c.GenerateVehicleInformation =
                        _0x211f5c.GenerateMetadata =
                        _0x211f5c.InitVehicle =
                        void 0
                    const _0x318753 = _0x880c8e(905),
                        _0x14f087 = _0x880c8e(674)
                    function _0x145fa7(_0x1e799c) {
                        Entity(NetworkGetEntityFromNetworkId(Number(_0x1e799c))).state.data =
                            (0, _0x318753.GetDefaultSpawnData)()
                    }
                    _0x211f5c.InitVehicle = async function () { }
                    _0x211f5c.GenerateMetadata = _0x145fa7
                    _0x211f5c.GenerateVehicleInformation = async function (_0xd756a8, _0x17b4c2, _0x4410fc) {
                        const _0x5637c5 = Entity(Number(_0x17b4c2))
                        if (_0x5637c5) {
                            if (!_0x5637c5.state.vin) {
                                const _0x57dadd = await (0, _0x318753.GetVehicleClass)(_0xd756a8, _0x4410fc)
                                _0x5637c5.state.vin = (0, _0x14f087.GenerateIdentificationNumber)('world', 'pdm', _0x57dadd, _0x4410fc)
                            }
                            return (
                                _0x5637c5.state.vinScratched ||
                                (_0x5637c5.state.vinScratched = false),
                                _0x5637c5.state.data ||
                                (_0x5637c5.state.data = (0, _0x318753.GetDefaultSpawnData)()),
                                _0x5637c5.state.degradation ||
                                (_0x5637c5.state.degradation = (0,
                                    _0x318753.GetDefaultDegradation)()),
                                _0x5637c5.state.damage ||
                                (_0x5637c5.state.damage = (0, _0x318753.GetDefaultDamage)()),
                                { vin: _0x5637c5.state.vin }
                            )
                        }
                    }
                    _0x211f5c.AddCarBomb = function (
                        _0x27a64b,
                        _0x5b5da8,
                        _0x3e249e,
                        _0x185d03,
                        _0x3aca59,
                        _0x30eee4,
                        _0x157215
                    ) {
                        console.log(
                            'AddCarBomb',
                            _0x27a64b,
                            _0x5b5da8,
                            _0x3e249e,
                            _0x185d03,
                            _0x3aca59,
                            _0x30eee4,
                            _0x157215
                        )
                        console.log('NetId', _0x27a64b)
                        console.log('Entity', NetworkGetEntityFromNetworkId(Number(_0x27a64b)))
                        const _0x266f40 = Entity(NetworkGetEntityFromNetworkId(Number(_0x27a64b)))
                        if ((console.log('ent', _0x266f40), _0x266f40)) {
                            if ((console.log('HUH????'), _0x266f40.state.data)) {
                                console.log('metadata found', _0x266f40)
                                const _0x107167 = _0x266f40.state.data
                                return (
                                    (_0x107167.carBombData = {
                                        minSpeed: _0x5b5da8,
                                        ticksBeforeExplode: _0x3e249e,
                                        ticksForRemoval: _0x185d03,
                                        gridSize: _0x3aca59,
                                        coloredSquares: _0x30eee4,
                                        timeToComplete: _0x157215,
                                    }),
                                    (_0x266f40.state.data = {
                                        fuel: _0x107167.fuel,
                                        mileage: _0x107167.mileage,
                                        harness: _0x107167.harness,
                                        nitro: _0x107167.nitro,
                                        neonDisabled: _0x107167.neonDisabled,
                                        handling: _0x107167.handling,
                                        afterMarkets: _0x107167.afterMarkets,
                                        carBombData: {
                                            minSpeed: _0x5b5da8,
                                            ticksBeforeExplode: _0x3e249e,
                                            ticksForRemoval: _0x185d03,
                                            gridSize: _0x3aca59,
                                            coloredSquares: _0x30eee4,
                                            timeToComplete: _0x157215,
                                        },
                                    }),
                                    true
                                )
                            }
                            {
                                console.log('no metadata found', _0x266f40)
                                _0x145fa7(_0x27a64b)
                                const _0x55f725 = Entity(
                                    NetworkGetEntityFromNetworkId(Number(_0x27a64b))
                                ).state.data
                                return (
                                    (_0x55f725.carBombData = {
                                        minSpeed: _0x5b5da8,
                                        ticksBeforeExplode: _0x3e249e,
                                        ticksForRemoval: _0x185d03,
                                        gridSize: _0x3aca59,
                                        coloredSquares: _0x30eee4,
                                        timeToComplete: _0x157215,
                                    }),
                                    (_0x266f40.state.data = {
                                        fuel: _0x55f725.fuel,
                                        mileage: _0x55f725.mileage,
                                        harness: _0x55f725.harness,
                                        nitro: _0x55f725.nitro,
                                        neonDisabled: _0x55f725.neonDisabled,
                                        handling: _0x55f725.handling,
                                        afterMarkets: _0x55f725.afterMarkets,
                                        carBombData: {
                                            minSpeed: _0x5b5da8,
                                            ticksBeforeExplode: _0x3e249e,
                                            ticksForRemoval: _0x185d03,
                                            gridSize: _0x3aca59,
                                            coloredSquares: _0x30eee4,
                                            timeToComplete: _0x157215,
                                        },
                                    }),
                                    true
                                )
                            }
                        }
                    }
                    _0x211f5c.FetchVehicleInfo = async function (_0x25c1ba, _0x28ed84) {
                        const _0x4570af = await exports["np-db"].execute('SELECT * FROM characters_cars WHERE vin = @vin',
                            { vin: _0x25c1ba }
                        )
                        return (
                            !!_0x4570af[0] &&
                            (console.log('VEH VALID'),
                            {
                                vin: _0x4570af[0].vin,
                                model: _0x4570af[0].model,
                                plate: _0x4570af[0].plate,
                                degradation: JSON.parse(_0x4570af[0].degradation),
                                metadata: JSON.parse(_0x4570af[0].metadata),
                                damage: JSON.parse(_0x4570af[0].damage),
                                mods: JSON.parse(_0x4570af[0].mods),
                                appearance: JSON.parse(_0x4570af[0].appearance),
                            })
                        )
                    }
                },
                917: (_0x2bf5f8, _0x331f47) => {
                    Object.defineProperty(_0x331f47, '__esModule', { value: true })
                    _0x331f47.RemoveVehicleCarPolish = _0x331f47.AddVehicleCarPolish =
                        void 0
                    _0x331f47.AddVehicleCarPolish = async function (_0x1c0c6b, _0x1d5537) {
                        const _0xb2a708 = Entity(Number(_0x1c0c6b))
                        if (_0xb2a708) {
                            const _0x518c4e = _0xb2a708.state.data,
                                _0x1c50a5 = Math.floor(Date.now() / 1000) + 86400 * _0x1d5537
                            _0x518c4e &&
                                ((_0x518c4e.carPolish = _0x1c50a5),
                                    (_0xb2a708.state.data = {
                                        fuel: _0x518c4e.fuel,
                                        mileage: _0x518c4e.mileage,
                                        harness: _0x518c4e.harness,
                                        nitro: _0x518c4e.nitro,
                                        carPolish: _0x1c50a5,
                                        fakePlate: _0x518c4e.fakePlate,
                                        neonDisabled: _0x518c4e.neonDisabled,
                                        handling: _0x518c4e.handling,
                                        afterMarkets: _0x518c4e.afterMarkets,
                                        wheelFitment: _0x518c4e.wheelFitment,
                                    }),
                                    _0xb2a708.state.vin &&
                                    (await exports["np-db"].execute('UPDATE characters_cars SET metadata = @metadata WHERE vin = @vin',
                                        {
                                            metadata: JSON.stringify(_0x518c4e),
                                            vin: _0xb2a708.state.vin,
                                        }
                                    )))
                        }
                    }
                    _0x331f47.RemoveVehicleCarPolish = async function (_0x166bc1) {
                        const _0x9825c5 = Entity(Number(_0x166bc1))
                        if (_0x9825c5) {
                            const _0x4f410d = _0x9825c5.state.data
                            _0x4f410d &&
                                ((_0x4f410d.carPolish = 0),
                                    (_0x9825c5.state.data = {
                                        fuel: _0x4f410d.fuel,
                                        mileage: _0x4f410d.mileage,
                                        harness: _0x4f410d.harness,
                                        nitro: _0x4f410d.nitro,
                                        carPolish: 0,
                                        fakePlate: _0x4f410d.fakePlate,
                                        neonDisabled: _0x4f410d.neonDisabled,
                                        handling: _0x4f410d.handling,
                                        afterMarkets: _0x4f410d.afterMarkets,
                                        wheelFitment: _0x4f410d.wheelFitment,
                                    }),
                                    _0x9825c5.state.vin &&
                                    (await exports["np-db"].execute('UPDATE characters_cars SET metadata = @metadata WHERE vin = @vin',
                                        {
                                            metadata: JSON.stringify(_0x4f410d),
                                            vin: _0x9825c5.state.vin,
                                        }
                                    )))
                        }
                    }
                },
                912: (_0xaefc6b, _0xb4f0fc, _0x595722) => {
                    Object.defineProperty(_0xb4f0fc, '__esModule', { value: true })
                    _0xb4f0fc.SaveVehicleDamage =
                        _0xb4f0fc.CanRepairDegradation =
                        _0xb4f0fc.FixVehicleDegredation =
                        _0xb4f0fc.AddVehicleDegredation =
                        _0xb4f0fc.ReduceVehicleDegradation =
                        _0xb4f0fc.SetVehicleDegradation =
                        _0xb4f0fc.GetVehicleDegradation =
                        void 0
                    const _0x16f144 = _0x595722(77),
                        _0x1ba487 = _0x595722(905)
                    function _0x5d5705(_0x128b1e) {
                        const _0x168cb4 = Entity(Number(_0x128b1e))
                        return _0x168cb4.state?.degradation
                            ? _0x168cb4.state?.degradation
                            : (0, _0x1ba487.GetDefaultDegradation)()
                    }
                    _0xb4f0fc.GetVehicleDegradation = _0x5d5705
                    _0xb4f0fc.SetVehicleDegradation = async function (
                        _0x44858d,
                        _0xf90a55
                    ) {
                        const _0x24e281 = Entity(Number(_0x44858d))
                        return (
                            !!_0x24e281 &&
                            ((_0x24e281.state.degradation = _0xf90a55),
                                _0x24e281.state.vin &&
                                (await exports["np-db"].execute('UPDATE characters_cars SET degradation = @degradation WHERE vin = @vin',
                                    {
                                        degradation: JSON.stringify(_0xf90a55),
                                        vin: _0x24e281.state.vin,
                                    }
                                )),
                                true)
                        )
                    }
                    _0xb4f0fc.ReduceVehicleDegradation = function (_0x332940, _0x1c87fe) {
                        const _0x495a98 = (0, _0x16f144.GetStateBag)(_0x332940)
                        if (_0x495a98) {
                            const _0xab069d = _0x5d5705(_0x332940)
                            if (_0xab069d) {
                                for (const [_0x1d7ff4] of Object.entries(_0xab069d))
                                    _0xab069d[_0x1d7ff4] + _0x1c87fe[_0x1d7ff4] <= 100 &&
                                        (_0xab069d[_0x1d7ff4] += _0x1c87fe[_0x1d7ff4])
                                return (_0x495a98.state.degradation = _0xab069d), true
                            }
                        }
                    }
                    _0xb4f0fc.AddVehicleDegredation = function (_0x1c2aad, _0x292d95) {
                        const _0x1ab64c = Entity(Number(_0x1c2aad))
                        if (_0x1ab64c) {
                            const _0x13f161 = _0x5d5705(_0x1c2aad)
                            if (_0x13f161) {
                                for (const [_0x841aaa] of Object.entries(_0x13f161))
                                    _0x13f161[_0x841aaa] - _0x292d95[_0x841aaa] >= 0 &&
                                        (_0x13f161[_0x841aaa] -= _0x292d95[_0x841aaa])
                                return (_0x1ab64c.state.degradation = _0x13f161), true
                            }
                        }
                    }
                    _0xb4f0fc.FixVehicleDegredation = async function (_0x419f98, _0x46ec99, _0x13b49c) {
                        const _0x150845 = Entity(Number(_0x419f98))
                        if (_0x150845) {
                            const _0x510247 = _0x150845.state.degradation
                                (_0x510247[_0x46ec99] += _0x13b49c) >= 100
                                ? (_0x510247[_0x46ec99] = 100)
                                : (_0x510247[_0x46ec99] += _0x13b49c)
                            _0x150845.state.degradation = _0x510247
                            _0x150845.state.vin &&
                                (await exports["np-db"].execute('UPDATE characters_cars SET degradation = @degradation WHERE vin = @vin',
                                    {
                                        degradation: JSON.stringify(_0x510247),
                                        vin: _0x150845.state.vin,
                                    }
                                ))
                        }
                    }
                    _0xb4f0fc.CanRepairDegradation = async function (_0x1e62f9, _0x545ac2, _0x4bc85d) {
                        const _0x20d19c = Entity(Number(_0x1e62f9))
                        return !!_0x20d19c && (_0x20d19c.state.degradation, true)
                    }
                    _0xb4f0fc.SaveVehicleDamage = async function (_0x23eab5) {
                        const _0x16aff8 = await (0, _0x1ba487.GetSpawnInfo)(_0x23eab5)
                        _0x16aff8 &&
                            _0x16aff8.vin &&
                            _0x16aff8.damage &&
                            (await exports["np-db"].execute('UPDATE characters_cars SET damage = @damage WHERE vin = @vin',
                                {
                                    damage: JSON.stringify(_0x16aff8.damage),
                                    vin: _0x16aff8.vin,
                                }
                            ))
                    }

                    _0x595722.g.exports('FixVehicleDegredation', _0xb4f0fc.FixVehicleDegredation)

                },
                104: (_0x3cc51f, _0x45161b) => {
                    Object.defineProperty(_0x45161b, '__esModule', { value: true })
                    _0x45161b.AddVehicleFuel =
                        _0x45161b.SetVehicleFuel =
                        _0x45161b.InitFuel =
                        void 0
                    _0x45161b.InitFuel = async function () { }
                    _0x45161b.SetVehicleFuel = function (_0x33d4a7, _0x5a1c90) {
                        const _0x104f28 = Entity(NetworkGetEntityFromNetworkId(Number(_0x33d4a7)))
                        if (!_0x104f28) {
                            return
                        }
                        const _0x399dcb = _0x104f28.state.data
                        _0x399dcb &&
                            (_0x5a1c90 < 0
                                ? ((_0x399dcb.fuel = 0),
                                    (_0x104f28.state.data = {
                                        fuel: _0x5a1c90,
                                        mileage: _0x399dcb.mileage,
                                        harness: _0x399dcb.harness,
                                        nitro: _0x399dcb.nitro,
                                        carPolish: _0x399dcb.carPolish,
                                        fakePlate: _0x399dcb.fakePlate,
                                        neonDisabled: _0x399dcb.neonDisabled,
                                        handling: _0x399dcb.handling,
                                        afterMarkets: _0x399dcb.afterMarkets,
                                        wheelFitment: _0x399dcb.wheelFitment,
                                    }))
                                : ((_0x399dcb.fuel = _0x5a1c90),
                                    (_0x104f28.state.data = {
                                        fuel: _0x5a1c90,
                                        mileage: _0x399dcb.mileage,
                                        harness: _0x399dcb.harness,
                                        nitro: _0x399dcb.nitro,
                                        carPolish: _0x399dcb.carPolish,
                                        fakePlate: _0x399dcb.fakePlate,
                                        neonDisabled: _0x399dcb.neonDisabled,
                                        handling: _0x399dcb.handling,
                                        afterMarkets: _0x399dcb.afterMarkets,
                                        wheelFitment: _0x399dcb.wheelFitment,
                                    })))
                    }
                    _0x45161b.AddVehicleFuel = async function (_0x3d89f7, _0x53250a) {
                        const _0x12a8c3 = Entity(_0x3d89f7)
                        if (!_0x12a8c3) {
                            return
                        }
                        const _0x48e642 = _0x12a8c3.state.data
                        _0x48e642 &&
                            ((_0x48e642.fuel += _0x53250a),
                                (_0x12a8c3.state.data = {
                                    fuel: _0x48e642.fuel,
                                    mileage: _0x48e642.mileage,
                                    harness: _0x48e642.harness,
                                    nitro: _0x48e642.nitro,
                                    carPolish: _0x48e642.carPolish,
                                    fakePlate: _0x48e642.fakePlate,
                                    neonDisabled: _0x48e642.neonDisabled,
                                    handling: _0x48e642.handling,
                                    afterMarkets: _0x48e642.afterMarkets,
                                }),
                                _0x12a8c3.state.vin &&
                                (await exports["np-db"].execute('UPDATE characters_cars SET metadata = @metadata WHERE vin = @vin',
                                    {
                                        metadata: JSON.stringify(_0x48e642),
                                        vin: _0x12a8c3.state.vin,
                                    }
                                )))
                    }
                },
                694: (_0x16a6ba, _0x1d0255) => {
                    Object.defineProperty(_0x1d0255, '__esModule', { value: true })
                    _0x1d0255.DoHarnessDamage = _0x1d0255.AddVehicleHarness = void 0
                    _0x1d0255.AddVehicleHarness = async function (_0x890b58, _0x53a667) {
                        const _0x31f3c3 = Entity(Number(_0x890b58))
                        if (_0x31f3c3) {
                            const _0x21a256 = _0x31f3c3.state.data
                            _0x21a256 &&
                                ((_0x21a256.harness = 3),
                                    (_0x31f3c3.state.data = {
                                        fuel: _0x21a256.fuel,
                                        mileage: _0x21a256.mileage,
                                        harness: 3,
                                        nitro: _0x21a256.nitro,
                                        carPolish: _0x21a256.carPolish,
                                        fakePlate: _0x21a256.fakePlate,
                                        neonDisabled: _0x21a256.neonDisabled,
                                        handling: _0x21a256.handling,
                                        afterMarkets: _0x21a256.afterMarkets,
                                        wheelFitment: _0x21a256.wheelFitment,
                                    }),
                                    _0x31f3c3.state.vin &&
                                    (await exports["np-db"].execute('UPDATE characters_cars SET metadata = @metadata WHERE vin = @vin',
                                        {
                                            metadata: JSON.stringify(_0x21a256),
                                            vin: _0x31f3c3.state.vin,
                                        }
                                    )))
                        }
                    }
                    _0x1d0255.DoHarnessDamage = async function (_0x5306d2, _0x2c336d) {
                        const _0x4a3ee8 = Entity(NetworkGetEntityFromNetworkId(Number(_0x5306d2)))
                        if (!_0x4a3ee8) {
                            return
                        }
                        const _0x5291ba = _0x4a3ee8.state.data
                        if (_0x5291ba) {
                            const _0x40280c = _0x5291ba.harness - _0x2c336d
                            _0x40280c < 0
                                ? ((_0x5291ba.harness = 0),
                                    (_0x4a3ee8.state.data = {
                                        fuel: _0x5291ba.fuel,
                                        mileage: _0x5291ba.mileage,
                                        harness: 0,
                                        nitro: _0x5291ba.nitro,
                                        carPolish: _0x5291ba.carPolish,
                                        fakePlate: _0x5291ba.fakePlate,
                                        neonDisabled: _0x5291ba.neonDisabled,
                                        handling: _0x5291ba.handling,
                                        afterMarkets: _0x5291ba.afterMarkets,
                                        wheelFitment: _0x5291ba.wheelFitment,
                                    }),
                                    _0x4a3ee8.state.vin &&
                                    (await exports["np-db"].execute('UPDATE characters_cars SET metadata = @metadata WHERE vin = @vin',
                                        {
                                            metadata: JSON.stringify(_0x5291ba),
                                            vin: _0x4a3ee8.state.vin,
                                        }
                                    )))
                                : ((_0x5291ba.harness = _0x40280c),
                                    (_0x4a3ee8.state.data = {
                                        fuel: _0x5291ba.fuel,
                                        mileage: _0x5291ba.mileage,
                                        harness: _0x40280c,
                                        nitro: _0x5291ba.nitro,
                                        carPolish: _0x5291ba.carPolish,
                                        fakePlate: _0x5291ba.fakePlate,
                                        neonDisabled: _0x5291ba.neonDisabled,
                                        handling: _0x5291ba.handling,
                                        afterMarkets: _0x5291ba.afterMarkets,
                                        wheelFitment: _0x5291ba.wheelFitment,
                                    }),
                                    _0x4a3ee8.state.vin &&
                                    (await exports["np-db"].execute('UPDATE characters_cars SET metadata = @metadata WHERE vin = @vin',
                                        {
                                            metadata: JSON.stringify(_0x5291ba),
                                            vin: _0x4a3ee8.state.vin,
                                        }
                                    )))
                        }
                    }
                },
                203: (_0x5b9385, _0x41cde5, _0xf5c03c) => {
                    Object.defineProperty(_0x41cde5, '__esModule', { value: true })
                    _0x41cde5.AddVehicleMileage = _0x41cde5.GetVehicleMileage = void 0
                    const _0x217126 = _0xf5c03c(905)
                    function _0xa5c0e4(_0x1a7771) {
                        const _0x4fed95 = Entity(Number(_0x1a7771))
                        return _0x4fed95.state?.data?.mileage
                            ? _0x4fed95.state?.data?.mileage
                            : 0
                    }
                    _0x41cde5.GetVehicleMileage = _0xa5c0e4
                    _0x41cde5.AddVehicleMileage = async function (_0x36a4bc, _0x9ba426) {
                        const _0x42fa8b = Entity(Number(_0x36a4bc))
                        if (_0x42fa8b) {
                            let _0x15db96 = _0xa5c0e4(_0x36a4bc)
                            const _0x198a12 = _0x42fa8b.state.data
                            if (_0x198a12) {
                                const _0x2cb5d1 = (_0x15db96 += _0x9ba426)
                                _0x42fa8b.state.data = {
                                    fuel: _0x198a12.fuel,
                                    mileage: _0x2cb5d1,
                                    harness: _0x198a12.harness,
                                    nitro: _0x198a12.nitro,
                                    carPolish: _0x198a12.carPolish,
                                    fakePlate: _0x198a12.fakePlate,
                                    neonDisabled: _0x198a12.neonDisabled,
                                    handling: _0x198a12.handling,
                                    afterMarkets: _0x198a12.afterMarkets,
                                    wheelFitment: _0x198a12.wheelFitment,
                                }
                                _0x42fa8b.state.vin &&
                                    (await exports["np-db"].execute('UPDATE characters_cars SET metadata = @metadata WHERE vin = @vin',
                                        {
                                            metadata: JSON.stringify(_0x198a12),
                                            vin: _0x42fa8b.state.vin,
                                        }
                                    ))
                            } else {
                                _0x42fa8b.state.data = (0, _0x217126.GetDefaultSpawnData)()
                            }
                        }
                    }
                },
                662: (_0x3b9437, _0x44040a) => {
                    Object.defineProperty(_0x44040a, '__esModule', { value: true })
                    _0x44040a.NitroUsed = _0x44040a.AddVehicleNitrous = void 0
                    _0x44040a.AddVehicleNitrous = async function (_0x28e1e5, _0x4ea857) {
                        const _0x3b4199 = Entity(Number(_0x28e1e5))
                        if (_0x3b4199) {
                            const _0x33ddbc = _0x3b4199.state.data
                            _0x33ddbc &&
                                ((_0x33ddbc.nitro = 100),
                                    (_0x3b4199.state.data = {
                                        fuel: _0x33ddbc.fuel,
                                        mileage: _0x33ddbc.mileage,
                                        harness: _0x33ddbc.harness,
                                        nitro: 100,
                                        carPolish: _0x33ddbc.carPolish,
                                        fakePlate: _0x33ddbc.fakePlate,
                                        neonDisabled: _0x33ddbc.neonDisabled,
                                        handling: _0x33ddbc.handling,
                                        afterMarkets: _0x33ddbc.afterMarkets,
                                        wheelFitment: _0x33ddbc.wheelFitment,
                                    }),
                                    _0x3b4199.state.vin &&
                                    (await exports["np-db"].execute('UPDATE characters_cars SET metadata = @metadata WHERE vin = @vin',
                                        {
                                            metadata: JSON.stringify(_0x33ddbc),
                                            vin: _0x3b4199.state.vin,
                                        }
                                    )))
                        }
                    }
                    _0x44040a.NitroUsed = async function (_0x31d626, _0x746447) {
                        const _0x2b8ac7 = Entity(Number(_0x31d626))
                        if (_0x2b8ac7) {
                            const _0x57c90c = _0x2b8ac7.state.data
                            _0x57c90c &&
                                ((_0x57c90c.nitro = _0x746447),
                                    (_0x2b8ac7.state.data = {
                                        fuel: _0x57c90c.fuel,
                                        mileage: _0x57c90c.mileage,
                                        harness: _0x57c90c.harness,
                                        nitro: _0x746447,
                                        carPolish: _0x57c90c.carPolish,
                                        fakePlate: _0x57c90c.fakePlate,
                                        neonDisabled: _0x57c90c.neonDisabled,
                                        handling: _0x57c90c.handling,
                                        afterMarkets: _0x57c90c.afterMarkets,
                                        wheelFitment: _0x57c90c.wheelFitment,
                                    }),
                                    _0x2b8ac7.state.vin &&
                                    (await exports["np-db"].execute('UPDATE characters_cars SET metadata = @metadata WHERE vin = @vin',
                                        {
                                            metadata: JSON.stringify(_0x57c90c),
                                            vin: _0x2b8ac7.state.vin,
                                        }
                                    )))
                        }
                    }
                },
                674: (_0x267f77, _0x5e6997) => {
                    Object.defineProperty(_0x5e6997, '__esModule', { value: true })
                    _0x5e6997.GetDecryptedVIN = _0x5e6997.GenerateIdentificationNumber =
                        void 0
                    _0x5e6997.GenerateIdentificationNumber = function (pType, _0x42f12a, _0x1248a9, _0x5c3941) {
                        const _0x1edc96 = new Date().getFullYear().toString().slice(-2),
                            _0x5482a2 = new Date().getMonth() + 1,
                            _0x386576 = Math.floor(100000 * Math.random())
                        let _0x4b60b6 = 1
                        'owned' === pType
                            ? (_0x4b60b6 = 3)
                            : 'script' === pType
                                ? (_0x4b60b6 = 2)
                                : 'world' === pType && (_0x4b60b6 = 1)
                        let _0x5f213b = 'MN'
                        return (
                            'menu' === _0x42f12a
                                ? (_0x5f213b = 'MN')
                                : 'rental' === _0x42f12a
                                    ? (_0x5f213b = 'RN')
                                    : 'pdm' === _0x42f12a
                                        ? (_0x5f213b = 'PM')
                                        : 'pd' === _0x42f12a && (_0x5f213b = 'PD'),
                            '' +
                            _0x4b60b6 +
                            _0x5f213b +
                            ('CO') + _0x5c3941.toString().slice(-2) +
                            'AT' +
                            _0x1edc96 +
                            _0x5482a2 +
                            _0x386576
                        )
                    }
                    _0x5e6997.GetDecryptedVIN = function (_0x5918b2) {
                        return _0x5918b2
                            .replace(/[A-Z]/g, function (_0x36ff3d) {
                                return String.fromCharCode(_0x36ff3d.charCodeAt(0) + 32)
                            })
                            .toUpperCase()
                    }
                },
                804: function (_0x924d6c, _0x10a4b6, _0x1ecf3f) {
                    Object.defineProperty(_0x10a4b6, '__esModule', { value: true })
                    _0x10a4b6.Base =
                        _0x10a4b6.Hud =
                        _0x10a4b6.Interface =
                        _0x10a4b6.Utils =
                        _0x10a4b6.Streaming =
                        _0x10a4b6.Zones =
                        _0x10a4b6.Procedures =
                        _0x10a4b6.Events =
                        void 0
                    _0x10a4b6.Events = {
                        on: (_0x312200, _0xf85918) => NPX.Events.on(_0x312200, _0xf85918),
                        onNet: (_0x466dba, _0x554869) =>
                            NPX.Events.onNet(_0x466dba, _0x554869),
                        emit: (_0x2a7311, ..._0x42cc1a) =>
                            NPX.Events.emit(_0x2a7311, ..._0x42cc1a),
                        emitNet: (_0x2c40bc, ..._0x1d6340) =>
                            NPX.Events.emitNet(_0x2c40bc, ..._0x1d6340),
                        remove: (_0x3199e9, _0x5c8af6) =>
                            NPX.Events.remove(_0x3199e9, _0x5c8af6),
                    }
                    _0x10a4b6.Procedures = {
                        register: (_0x34294c, _0x5ce5f3) =>
                            NPX.Procedures.register(_0x34294c, _0x5ce5f3),
                        execute: (_0x56c083, ..._0x290590) =>
                            NPX.Procedures.execute(_0x56c083, ..._0x290590),
                    }
                    _0x10a4b6.Zones = {
                        isActive: (_0x36c89b, _0x2290e2) =>
                            NPX.Zones.isActive(_0x36c89b, _0x2290e2),
                        onEnter: (_0xfd1ad2, _0x45b67c) =>
                            NPX.Zones.onEnter(_0xfd1ad2, _0x45b67c),
                        onExit: (_0x498c71, _0x5bb987) =>
                            NPX.Zones.onExit(_0x498c71, _0x5bb987),
                        addBoxZone: (
                            _0x514f21,
                            _0x5de599,
                            _0x5dbb0e,
                            _0x1113a6,
                            _0x4c38e8,
                            _0x24d642,
                            _0x350752 = {}
                        ) =>
                            NPX.Zones.addBoxZone(
                                _0x514f21,
                                _0x5de599,
                                _0x5dbb0e,
                                _0x1113a6,
                                _0x4c38e8,
                                _0x24d642,
                                _0x350752
                            ),
                        addBoxTarget: (
                            _0x1b4311,
                            _0x2b95ee,
                            _0x1fb86f,
                            _0x588c6d,
                            _0x4be555,
                            _0x8b44a3,
                            _0x2efbc8 = {}
                        ) =>
                            NPX.Zones.addBoxTarget(
                                _0x1b4311,
                                _0x2b95ee,
                                _0x1fb86f,
                                _0x588c6d,
                                _0x4be555,
                                _0x8b44a3,
                                _0x2efbc8
                            ),
                    }
                    _0x10a4b6.Streaming = {
                        loadModel: (_0x390da7) => NPX.Streaming.loadModel(_0x390da7),
                        loadTexture: (_0x20939b) => NPX.Streaming.loadTexture(_0x20939b),
                        loadAnim: (_0x420149) => NPX.Streaming.loadAnim(_0x420149),
                        loadClipSet: (_0x4354a9) => NPX.Streaming.loadClipSet(_0x4354a9),
                        loadWeaponAsset: (_0x35b240, _0x3bce6e, _0x57e084) =>
                            NPX.Streaming.loadWeaponAsset(_0x35b240),
                        loadNamedPtfxAsset: (_0x1c9622) =>
                            NPX.Streaming.loadNamedPtfxAsset(_0x1c9622),
                    }
                    _0x10a4b6.Utils = {
                        cache: (_0x2851ca, _0x1e4ebe) =>
                            NPX.Utils.cache(_0x2851ca, _0x1e4ebe),
                        cacheableMap: (_0x51037f, _0x3010cb) =>
                            NPX.Utils.cacheableMap(_0x51037f, _0x3010cb),
                        waitForCondition: (_0x1b4537, _0x5b0a28) =>
                            NPX.Utils.waitForCondition(_0x1b4537, _0x5b0a28),
                        getMapRange: (_0x32e478, _0x2c7a15, _0x28da7f) =>
                            NPX.Utils.getMapRange(_0x32e478, _0x2c7a15, _0x28da7f),
                        getDistance: (
                            [_0x220eaa, _0x2e08e6, _0x57fee1],
                            [_0x255a4a, _0x3180f0, _0x551a17]
                        ) =>
                            NPX.Utils.getDistance(
                                [_0x220eaa, _0x2e08e6, _0x57fee1],
                                [_0x255a4a, _0x3180f0, _0x551a17]
                            ),
                        getRandomNumber: (_0x3aec10, _0x2c98f2) =>
                            NPX.Utils.getRandomNumber(_0x3aec10, _0x2c98f2),
                    }
                    _0x10a4b6.Interface = {
                        addPeekEntryByModel: (_0x287efb, _0x31b661, _0x5a9107) =>
                            NPX.Interface.addPeekEntryByModel(_0x287efb, _0x31b661, _0x5a9107),
                        addPeekEntryByTarget: (_0x63a41, _0x21c9cf, _0x3ab08a) =>
                            NPX.Interface.addPeekEntryByTarget(_0x63a41, _0x21c9cf, _0x3ab08a),
                        addPeekEntryByFlag: (_0x48d7cd, _0x30f292, _0x124110) =>
                            NPX.Interface.addPeekEntryByFlag(_0x48d7cd, _0x30f292, _0x124110),
                        taskbar: (
                            _0xb9a6cd,
                            _0x6d6600,
                            _0x2ed474 = false,
                            _0x2bfcc7 = null
                        ) =>
                            NPX.Interface.taskbar(_0xb9a6cd, _0x6d6600, _0x2ed474, _0x2bfcc7),
                        phoneConfirmation: (
                            _0x298b0c,
                            _0x1bd45d,
                            _0xb47af8 = 30,
                            _0xdf0fb2
                        ) =>
                            NPX.Interface.phoneConfirmation(
                                _0xb47af8,
                                _0x298b0c,
                                _0x1bd45d,
                                'home'
                            ),
                        phoneNotification: (
                            _0x328727,
                            _0x3683b2,
                            _0xd6a392,
                            _0x1eafad = true
                        ) =>
                            NPX.Interface.phoneNotification(
                                _0x328727,
                                _0x3683b2,
                                _0xd6a392,
                                _0x1eafad
                            ),
                    }
                    _0x10a4b6.Hud = {
                        createBlip: (_0x551b48, ..._0x40445a) =>
                            NPX.Hud.createBlip(_0x551b48, ..._0x40445a),
                        applyBlipSettings: (
                            _0x51448b,
                            _0x3181d9,
                            _0xdb5c,
                            _0xe4afd9,
                            _0x2d8b53,
                            _0x412516,
                            _0x3ffb87,
                            _0x4a1bb2
                        ) =>
                            NPX.Hud.applyBlipSettings(
                                _0x51448b,
                                _0x3181d9,
                                _0xdb5c,
                                _0xe4afd9,
                                _0x2d8b53,
                                _0x412516,
                                _0x3ffb87,
                                _0x4a1bb2
                            ),
                    }
                    _0x10a4b6.Base = {
                        getModule: (_0x2178c2) => {
                            if ('Player' === _0x2178c2) {
                                return {
                                    GetUser: (_0x355699) => {
                                        const _0x193329 = _0x1ecf3f.g.exports['np-base']
                                            .getModule(_0x2178c2)
                                            .GetUser(this, _0x355699)
                                        return (
                                            !!_0x193329 && {
                                                source: _0x193329.source,
                                                name: _0x193329.name,
                                                comid: _0x193329.comid,
                                                steamid: _0x193329.steamid,
                                                hexid: _0x193329.hexid,
                                                license: _0x193329.license,
                                                ip: _0x193329.ip,
                                                job: _0x193329.job,
                                                rank: _0x193329.rank,
                                                character: _0x193329.character,
                                                characters: _0x193329.characters,
                                                characterLoaded: _0x193329.characterLoaded,
                                                charactersLoaded: _0x193329.charactersLoaded,
                                                getVar: (_0x463a77) =>
                                                    _0x193329.getVar(_0x193329, _0x463a77),
                                                setVar: (_0x18293a, _0x107b65) =>
                                                    _0x193329.setVar(_0x193329, _0x18293a, _0x107b65),
                                                networkVar: (_0xd4562a, _0x3446ff) =>
                                                    _0x193329.networkVar(_0x193329, _0xd4562a, _0x3446ff),
                                                getRank: () => _0x193329.getRank(_0x193329),
                                                setRank: (_0x67bfed) =>
                                                    _0x193329.setRank(_0x193329, _0x67bfed),
                                                setCharacter: (_0x29b11d) =>
                                                    _0x193329.setCharacter(_0x193329, _0x29b11d),
                                                setCharacters: (_0x589823) =>
                                                    _0x193329.setCharacters(_0x193329, _0x589823),
                                                getCash: () => _0x193329.getCash(_0x193329),
                                                getBalance: () => _0x193329.getBalance(_0x193329),
                                                getDirtyMoney: () => _0x193329.getDirtyMoney(_0x193329),
                                                getGangType: () => _0x193329.getGangType(_0x193329),
                                                getStressLevel: () => _0x193329.getStressLevel(_0x193329),
                                                getJudgeType: () => _0x193329.getJudgeType(_0x193329),
                                                alterDirtyMoney: (_0x30b512) =>
                                                    _0x193329.alterDirtyMoney(_0x193329, _0x30b512),
                                                alterStressLevel: (_0x5d46f6) =>
                                                    _0x193329.alterStressLevel(_0x193329, _0x5d46f6),
                                                resetDirtyMoney: () =>
                                                    _0x193329.resetDirtyMoney(_0x193329),
                                                addMoney: (_0x4494d5) => {
                                                    const _0x4819e3 = _0x193329.getCash(_0x193329)
                                                    _0x193329.addMoney(_0x193329, _0x4494d5)
                                                    const _0x816101 = _0x1ecf3f.g.exports['np-base']
                                                        .getModule(_0x2178c2)
                                                        .GetUser(this, _0x355699)
                                                    return _0x816101.getCash(_0x816101) >= _0x4819e3
                                                },
                                                removeMoney: (_0x14138a) => {
                                                    const _0x188770 = _0x193329.character.cash
                                                    _0x193329.removeMoney(_0x193329, _0x14138a)
                                                    const _0x194ce3 = _0x1ecf3f.g.exports['np-base']
                                                        .getModule(_0x2178c2)
                                                        .GetUser(this, _0x355699)
                                                    return _0x194ce3.getCash(_0x194ce3) <= _0x188770
                                                },
                                                addBank: (_0x451b92) => {
                                                    const _0x30bc43 = _0x193329.getBalance(_0x193329)
                                                    _0x193329.addBank(_0x193329, _0x451b92)
                                                    const _0x38593c = _0x1ecf3f.g.exports['np-base']
                                                        .getModule(_0x2178c2)
                                                        .GetUser(this, _0x355699)
                                                    return _0x38593c.getBalance(_0x38593c) >= _0x30bc43
                                                },
                                                removeBank: (_0x2ebaad) => {
                                                    const _0x112353 = _0x193329.getBalance(_0x193329)
                                                    _0x193329.removeBank(_0x193329, _0x2ebaad)
                                                    const _0x22ef5e = _0x1ecf3f.g.exports['np-base']
                                                        .getModule(_0x2178c2)
                                                        .GetUser(this, _0x355699)
                                                    return _0x22ef5e.getBalance(_0x22ef5e) <= _0x112353
                                                },
                                                getNumCharacters: () =>
                                                    _0x193329.getNumCharacters(_0x193329),
                                                ownsCharacter: (_0x5732f0) =>
                                                    _0x193329.ownsCharacter(_0x193329, _0x5732f0),
                                                getGender: () => _0x193329.getGender(_0x193329),
                                                getCharacter: (_0x170bac) =>
                                                    _0x193329.getCharacter(_0x193329, _0x170bac),
                                                getCharacters: () => _0x193329.getCharacters(_0x193329),
                                                getCurrentCharacter: () =>
                                                    _0x193329.getCurrentCharacter(_0x193329),
                                            }
                                        )
                                    },
                                }
                            }
                        },
                        findPlayerByCid: async function (_0x2b09d7) {
                            for (const _0x3641c3 of getPlayers())
                                if (
                                    (
                                        await _0x10a4b6.Base.getModule('Player').GetUser(
                                            Number(_0x3641c3)
                                        )
                                    ).character.id === _0x2b09d7
                                ) {
                                    return Number(_0x3641c3)
                                }
                        },
                    }
                },
                981: (_0x2807b2, _0x15b101) => {
                    Object.defineProperty(_0x15b101, '__esModule', { value: true })
                    _0x15b101.GetRandom = _0x15b101.Delay = void 0
                    _0x15b101.Delay = (_0x4ae8b5) =>
                        new Promise((_0x5e6721) => setTimeout(_0x5e6721, _0x4ae8b5))
                    _0x15b101.GetRandom = function (_0x1e4404, _0x3f7e1e) {
                        const _0x533de5 = _0x3f7e1e
                            ? Math.random() * (_0x3f7e1e - _0x1e4404) + _0x1e4404
                            : Math.random() * _0x1e4404
                        return Number.isInteger(_0x1e4404) ? Math.round(_0x533de5) : _0x533de5
                    }
                },
                77: (_0x1ba4eb, _0x373961) => {
                    Object.defineProperty(_0x373961, '__esModule', { value: true })
                    _0x373961.GetStateBag = _0x373961.SetStateBag = void 0
                    _0xbd1d8a('global')
                    const _0x2a1ca0 = new Map()
                    function _0xbd1d8a(_0x569f87) {
                        const _0x5e484d = IsDuplicityVersion()
                        return new Proxy(
                            {},
                            {
                                get: (_0x528f50, _0x48fa79) =>
                                    'set' === _0x48fa79
                                        ? (_0x37109c, _0x2b1c15, _0x20c612) => {
                                            const _0x450840 = msgpack_pack(_0x2b1c15)
                                            SetStateBagValue(
                                                _0x569f87,
                                                _0x37109c,
                                                _0x450840,
                                                _0x450840.length,
                                                _0x20c612
                                            )
                                        }
                                        : (console.log('get', _0x569f87, _0x48fa79),
                                            console.log('GetStateBagValue', GetStateBagValue(_0x569f87, 'state')),
                                            GetStateBagValue(_0x569f87, 'state')),
                                set(_0x25af3e, _0x3d010d, _0x5ed83b) {
                                    console.log('set', _0x569f87, _0x3d010d, _0x5ed83b)
                                    const _0x1a147b = msgpack_pack(_0x5ed83b)
                                    return (
                                        SetStateBagValue(
                                            _0x569f87,
                                            _0x3d010d,
                                            _0x1a147b,
                                            _0x1a147b.length,
                                            _0x5e484d
                                        ),
                                        true
                                    )
                                },
                            }
                        )
                    }
                    _0x373961.SetStateBag = _0xbd1d8a
                    _0x373961.GetStateBag = function (_0x2a21ef) {
                        if (!_0x2a1ca0.has(_0x2a21ef)) {
                            const _0x317f79 =
                                'number' == typeof (_0x2ea607 = _0x2a21ef)
                                    ? new Proxy({ __data: _0x2ea607 }, _0x313a10)
                                    : _0x2ea607
                            return (
                                setTimeout(() => _0x2a1ca0.delete(_0x2a21ef), 30000), _0x317f79
                            )
                        }
                        var _0x2ea607
                        return _0x2a1ca0.get(_0x2a21ef)
                    }
                    const _0x313a10 = {
                        get(_0x524d76, _0x5c5dde) {
                            if ('state' === _0x5c5dde) {
                                const _0x234c7d =
                                    'entity:' + NetworkGetNetworkIdFromEntity(_0x524d76['__data'])
                                return (
                                    IsDuplicityVersion() &&
                                    EnsureEntityStateBag(_0x524d76['__data']),
                                    _0xbd1d8a(_0x234c7d)
                                )
                            }
                            return null
                        },
                        set() {
                            throw new Error('Not allowed at this time.')
                        },
                        __ext: 41,
                    }
                },
            },
                _0x131c85 = {}
            function _0xd7fa91(_0x10ab42) {
                var _0xd151dc = _0x131c85[_0x10ab42]
                if (void 0 !== _0xd151dc) {
                    return _0xd151dc.exports
                }
                var _0x25e9a7 = (_0x131c85[_0x10ab42] = { exports: {} })
                return (
                    _0x370f39[_0x10ab42].call(
                        _0x25e9a7.exports,
                        _0x25e9a7,
                        _0x25e9a7.exports,
                        _0xd7fa91
                    ),
                    _0x25e9a7.exports
                )
            }
            _0xd7fa91.g = (function () {
                if ('object' == typeof globalThis) {
                    return globalThis
                }
                try {
                    return this || new Function('return this')()
                } catch (_0x3189d2) {
                    if ('object' == typeof window) {
                        return window
                    }
                }
            })()
            _0xd7fa91(741)
            _0xd7fa91(237)
            _0xd7fa91(558)
        })()


        /***/
    })
        /******/]);