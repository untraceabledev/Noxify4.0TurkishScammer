(() => {
    'use strict';
  
    var _0x1e7bad = {};
    (() => {
      _0x1e7bad.g = function () {
        if (typeof globalThis === "object") {
          return globalThis;
        }
        try {
          return this || new Function("return this")();
        } catch (_0x51158e) {
          if (typeof window === "object") {
            return window;
          }
        }
      }();
    })();
    var _0x48dbdc = {};
    ;
    let _0x833a22;
    const _0x28c527 = new Map();
    const _0x4e73f7 = GetCurrentResourceName();
    async function _0x19888e() {
      while (!globalThis.exports.config.IsConfigReady()) {
        await new Promise(_0x3dd66d => setTimeout(_0x3dd66d, 100));
      }
      _0x833a22 = globalThis.exports.config.GetModuleConfig("main");
    }
    on("np-config:configLoaded", (_0x2221f7, _0x4d06a7) => {
      if (_0x2221f7 === "main") {
        _0x833a22 = _0x4d06a7;
      } else if (_0x28c527.has(_0x2221f7)) {
        _0x28c527.set(_0x2221f7, _0x4d06a7);
      }
    });
    function _0x4b1aec(_0x3adbae) {
      return _0x833a22[_0x3adbae];
    }
    function _0x3231ff(_0x3e0d65, _0x5a1c63) {
      if (!_0x28c527.has(_0x3e0d65)) {
        const _0x1133f9 = _0x1e7bad.g.exports.config.GetModuleConfig(_0x3e0d65);
        if (_0x1133f9 === undefined) {
          return;
        }
        _0x28c527.set(_0x3e0d65, _0x1133f9);
      }
      const _0x4447b6 = _0x28c527.get(_0x3e0d65);
      if (_0x5a1c63) {
        return _0x4447b6?.[_0x5a1c63];
      } else {
        return _0x4447b6;
      }
    }
    function _0xc4c650(_0x5b3586) {
      return _0x3231ff(_0x4e73f7, _0x5b3586);
    }
    ;
    const _0x5029fa = globalThis.NPX;
    const _0x2f861e = _0x5029fa.Hud;
    const _0x400f90 = _0x5029fa.Utils;
    const _0x3ae804 = _0x5029fa.Zones;
    const _0x47725d = _0x5029fa.Events;
    const _0x2b861b = _0x5029fa.Streaming;
    const _0x385238 = _0x5029fa.Procedures;
    const _0x500b0b = _0x5029fa.Interface;
    const _0x4010a1 = null && _0x5029fa;
    ;
    async function _0xd0681b(_0x9a6048) {
      return new Promise(_0x589ab => setTimeout(() => _0x589ab(), _0x9a6048));
    }
    function _0x4670a8(_0x32e034 = 0) {
      return "" + new Intl.NumberFormat().format(_0x32e034);
    }
    function _0x1cfdc4(_0x49141c) {
      if (typeof _0x49141c !== "string") {
        return;
      }
      return _0x49141c.toLowerCase().replace(/^\w|\s\w/g, function (_0xc69c0) {
        return _0xc69c0.toUpperCase();
      });
    }
    const _0x51168c = _0x4deaf6 => {
      if (_0x4deaf6 === 0) {
        return 0;
      }
      const _0x432071 = _0xc4c650("speedRange");
      const _0x5439af = _0x4deaf6 / 100;
      const _0x14ed21 = _0x5439af * _0x432071[1];
      return _0x14ed21 + _0x432071[0];
    };
    const _0xf3b793 = _0x1ffcfa => {
      if (_0x1ffcfa === 0) {
        return 0;
      }
      const _0x3a1617 = _0xc4c650("mpgRange");
      const _0x443ec2 = _0x1ffcfa / 100;
      const _0x4af22d = _0x443ec2 * _0x3a1617[1];
      const _0x29e1d7 = _0x4af22d < _0x3a1617[0] ? _0x4af22d + _0x3a1617[0] : _0x4af22d;
      return Math.floor(_0x29e1d7);
    };
    const _0xc0c42e = _0x607d08 => {
      const _0x4258fe = Math.floor((Date.now() - _0x607d08) / 1000);
      let _0x97391b = _0x4258fe / 31536000;
      _0x97391b = _0x4258fe / 2592000;
      if (_0x97391b > 1) {
        return Math.floor(_0x97391b) + " Months";
      }
      _0x97391b = _0x4258fe / 86400;
      if (_0x97391b > 1) {
        return Math.floor(_0x97391b) + " Days";
      }
      _0x97391b = _0x4258fe / 3600;
      if (_0x97391b > 1) {
        return Math.floor(_0x97391b) + " Hours";
      }
      _0x97391b = _0x4258fe / 60;
      if (_0x97391b > 1) {
        return Math.floor(_0x97391b) + " Minutes";
      }
      return Math.floor(_0x4258fe) + " Seconds";
    };
    const _0x2b1cf2 = (_0x9cc50c, _0x4818ef) => {
      return Math.floor(_0x4818ef ? Math.random() * (_0x4818ef - _0x9cc50c) + _0x9cc50c : Math.random() * _0x9cc50c);
    };
    const _0x623935 = _0x5eeebd => {
      const _0x12c136 = Number((Math.abs(_0x5eeebd) * 100).toPrecision(15));
      return Math.round(_0x12c136) / 100 * Math.sign(_0x5eeebd);
    };
    const _0x4231ac = (_0x2201fe, _0x26ab2e) => {
      return Number(_0x2201fe.toFixed(_0x26ab2e));
    };
    const _0x30624e = () => {
      const _0x4626b1 = new Date();
      const _0x310794 = new Date(_0x4626b1.getFullYear(), 0, 1);
      const _0x5ac63c = Math.floor((_0x4626b1.getTime() - _0x310794.getTime()) / 86400000);
      return Math.ceil((_0x4626b1.getDay() + 1 + _0x5ac63c) / 7);
    };
    const _0x4a5184 = (_0x3e222c, _0x45abcd) => {
      for (let _0x4d69d9 = _0x45abcd.length - 1; _0x4d69d9 > 0; _0x4d69d9--) {
        const _0x2a9a49 = Math.floor(_0x3e222c() * (_0x4d69d9 + 1));
        [_0x45abcd[_0x4d69d9], _0x45abcd[_0x2a9a49]] = [_0x45abcd[_0x2a9a49], _0x45abcd[_0x4d69d9]];
      }
      return _0x45abcd;
    };
    const _0x2aeef5 = (_0x2fff4f, _0x337010) => {
      let _0x5e8176 = 0;
      let _0x20cc07 = [];
      for (let _0x52a0c0 = 0; _0x52a0c0 < _0x337010 - 1; _0x52a0c0++) {
        const _0x316b3c = _0x2fff4f() * (1 - _0x5e8176);
        _0x20cc07.push(_0x316b3c);
        _0x5e8176 += _0x316b3c;
      }
      _0x20cc07 = _0x20cc07.map(_0x59152f => _0x4231ac(_0x59152f, 2));
      _0x5e8176 = _0x20cc07.reduce((_0x4b125a, _0x40ab47) => _0x4b125a + _0x40ab47, 0);
      _0x20cc07.push(_0x4231ac(1 - _0x5e8176, 2));
      return _0x4a5184(_0x2fff4f, _0x20cc07);
    };
    const _0x1aebc1 = (_0x2fc1ae, _0x25393a) => {
      const _0x3cf6c5 = [];
      const _0x1d42b7 = _0x2fc1ae / _0x25393a;
      for (let _0x113dfb = 0; _0x113dfb < _0x25393a; _0x113dfb++) {
        _0x3cf6c5.push(_0x1d42b7);
      }
      for (let _0x4b6288 = 0; _0x4b6288 < _0x25393a; _0x4b6288++) {
        const _0x207bfb = Math.round(Math.random() * _0x1d42b7);
        const _0x53d028 = Math.round(Math.random() * _0x25393a) - 1;
        _0x3cf6c5[_0x4b6288] += _0x207bfb;
        _0x3cf6c5[_0x53d028] -= _0x207bfb;
      }
      return _0x3cf6c5;
    };
    ;
    const _0x3f4191 = _0x400f90.cacheableMap(async (_0x3c1093, _0x3aeb37) => {
      const _0x55f55f = exports["np-business"].IsEmployedAt(_0x3aeb37);
      return [true, _0x55f55f];
    }, {
      timeToLive: 60000
    });
    const _0xdb4cbf = _0x400f90.cacheableMap(async (_0x5c6dd9, _0x373132, _0x4d8441, _0x4a855b) => {
      const _0x39f1b3 = exports["np-business"].HasPermission(_0x4d8441, _0x4a855b);
      return [true, _0x39f1b3];
    }, {
      timeToLive: 60000
    });
    const _0x56de13 = _0x400f90.cacheableMap(async (_0x5df270, _0x50bdb0) => {
      const _0x15937f = await _0x385238.execute("GetTaxLevel", _0x50bdb0);
      if (isNaN(_0x15937f)) {
        return [false, undefined];
      }
      return [true, _0x15937f];
    }, {
      timeToLive: 60000
    });
    function _0x354315(_0x471e67, _0x5c48ba, _0xe02f9c = false) {
      return new Promise(_0x46bd24 => {
        if (_0x5c48ba) {
          exports["np-taskbar"].taskBar(_0x471e67, _0x5c48ba, _0xe02f9c, true, null, false, _0x46bd24);
        } else {
          setTimeout(() => _0x46bd24(100), _0x471e67);
        }
      });
    }
    function _0x517630(_0x29d27c, _0x531349) {
      return new Promise(_0x563046 => {
        exports.skillchecks.taskBarSkill(_0x29d27c, _0x531349, _0x563046);
      });
    }
    const _0x3b0004 = async _0x2912de => {
      let _0x45da25 = false;
      setTimeout(() => _0x45da25 = true, 10000);
      while (!RequestScriptAudioBank("DLC_NIKEZ_GENERAL/GENERAL_GENERAL", false) && !_0x45da25) {
        await _0xd0681b(0);
      }
      const _0xd7bfa2 = GetSoundId();
      PlaySoundFromCoord(_0xd7bfa2, "klaxon", _0x2912de[0], _0x2912de[1], _0x2912de[2], "DLC_NIKEZ_GENERAL", false, 1, false);
      setTimeout(() => {
        StopSound(_0xd7bfa2);
        ReleaseSoundId(_0xd7bfa2);
      }, 30000);
    };
    const _0x8e3fe6 = (_0x344956, _0x134be4, _0xc1a52b, _0x2382dd, _0x56c7f7) => {
      const _0xe146be = AddBlipForCoord(_0x134be4[0], _0x134be4[1], _0x134be4[2]);
      SetBlipScale(_0xe146be, 0.65);
      if (_0xc1a52b) {
        SetBlipSprite(_0xe146be, _0xc1a52b);
      }
      if (_0x2382dd) {
        SetBlipColour(_0xe146be, _0x2382dd);
      }
      if (_0x56c7f7) {
        SetBlipAsShortRange(_0xe146be, _0x56c7f7);
      }
      BeginTextCommandSetBlipName("STRING");
      AddTextComponentString(_0x344956);
      EndTextCommandSetBlipName(_0xe146be);
      return _0xe146be;
    };
    const _0x22b866 = _0x400f90.cacheableMap(async (_0x262778, _0x401cc5) => {
      const _0x2d7949 = exports["np-vehicles"].IsVehicleElectric(_0x401cc5);
      return [true, _0x2d7949];
    }, {
      timeToLive: 60000
    });
    ;
    const _0x325f25 = GetCurrentResourceName();
    const _0x1494b0 = new Map();
    let _0x4dbb47 = 0;
    RegisterUICallback("np-ui:menu:confirmation", ({
      key: _0x260d54
    }, _0x42cd6d) => {
      const _0x4ea6fb = _0x325f25 + ":" + _0x260d54?.id;
      if (!_0x1494b0.has(_0x4ea6fb)) {
        return;
      }
      _0x1494b0.get(_0x4ea6fb)(_0x260d54.accept);
      _0x1494b0.delete(_0x4ea6fb);
      _0x42cd6d({
        data: {},
        meta: {
          ok: true,
          message: ""
        }
      });
    });
    function _0x1b0004(_0x526a51, _0x3162bd) {
      const _0x53ca6f = ++_0x4dbb47;
      const _0x539323 = {
        title: _0x526a51,
        description: _0x3162bd
      };
      const _0x25e350 = {
        id: _0x53ca6f,
        accept: true
      };
      const _0x5d2f04 = {
        title: "Accept",
        action: "np-ui:menu:confirmation",
        key: _0x25e350
      };
      const _0x151316 = {
        id: _0x53ca6f,
        accept: false
      };
      const _0xc29369 = {
        title: "Decline",
        action: "np-ui:menu:confirmation",
        key: _0x151316
      };
      const _0x4f0bea = [_0x539323, _0x5d2f04, _0xc29369];
      const _0x505949 = new Promise(_0x28f9c3 => {
        _0x1494b0.set(_0x325f25 + ":" + _0x53ca6f, _0x28f9c3);
        setTimeout(() => _0x28f9c3(false), 30000);
      });
      exports["np-ui"].showContextMenu(_0x4f0bea);
      return _0x505949;
    }
    let _0x2268cb = 0;
    const _0x2f2247 = new Map();
    RegisterUICallback("np-ui:applicationClosed", (_0x54c4fd, _0x34d8b2) => {
      if (_0x54c4fd.name !== "textbox" || _0x54c4fd?.callbackUrl !== "np-ui:menu:input") {
        return;
      }
      const _0x3cbc13 = _0x2f2247.get(_0x54c4fd.key);
      if (!_0x3cbc13) {
        return;
      }
      _0x3cbc13.resolve(null);
      _0x2f2247.delete(_0x54c4fd.key);
    });
    RegisterUICallback("np-ui:menu:input", (_0x545ea1, _0x25467d) => {
      _0x25467d({
        data: {},
        meta: {
          ok: true,
          message: ""
        }
      });
      const _0x3f4c85 = _0x2f2247.get(_0x545ea1.key);
      if (!_0x3f4c85) {
        return;
      }
      const _0x3ccdce = _0x3f4c85.validation ? _0x3f4c85.validation(_0x545ea1?.values) : true;
      if (!_0x3ccdce) {
        return;
      }
      _0x3f4c85.resolve(_0x545ea1?.values);
      _0x2f2247.delete(_0x545ea1.key);
      exports["np-ui"].closeApplication("textbox");
    });
    function _0x214e83(_0xff3efc, _0x38ce18) {
      const _0x1d4abd = ++_0x2268cb;
      const _0x310187 = new Promise(_0xa2579b => {
        const _0x12e577 = {
          resolve: _0xa2579b,
          validation: _0x38ce18
        };
        _0x2f2247.set(_0x1d4abd, _0x12e577);
      });
      const _0x41b45d = {
        callbackUrl: "np-ui:menu:input",
        key: _0x1d4abd,
        items: _0xff3efc,
        show: true
      };
      exports["np-ui"].openApplication("textbox", _0x41b45d);
      return _0x310187;
    }
    function _0x5a73e6(_0x304e3c, _0x2f6244, _0x14f802) {
      return new Promise(_0x1e87b8 => {
        exports["np-phone"].DoPhoneConfirmation(_0x304e3c, _0x2f6244, _0x14f802, _0x1e87b8);
      });
    }
    ;
    RegisterUICallback("np-oilers:storage:withdrawOil", async (_0x4dad7d, _0x1a8af) => {
      _0x1a8af({
        data: {},
        meta: {
          ok: true,
          message: ""
        }
      });
      const _0x21d0ba = _0x4dad7d.key.method;
      const _0x3635e9 = _0x4dad7d.key.meta;
      const _0x522dfa = _0x4dad7d.key.capacity;
      const _0x9b8bbe = _0x4dad7d.key.available;
      await _0xd0681b(500);
      emit("DoLongHudText", _0x4670a8(_0x9b8bbe) + " Available", 1, 12000, {
        i18n: ["Available"]
      });
      const _0x5e72c5 = await _0x214e83([{
        name: "quantity",
        label: "Quantity to Withdraw",
        icon: "minus-circle"
      }], _0x1456ca => {
        if (!_0x1456ca.quantity || _0x1456ca.quantity.length === 0) {
          return false;
        }
        _0x1456ca.quantity = Number(_0x1456ca?.quantity);
        return !isNaN(_0x1456ca?.quantity);
      });
      let _0x21215e = _0x5e72c5?.quantity;
      if (!_0x21215e || _0x21215e <= 0) {
        return emit("DoLongHudText", "Invalid Quantity", 2);
      }
      if (_0x21215e > _0x9b8bbe) {
        _0x21215e = _0x9b8bbe;
      }
      if (_0x21215e > _0x522dfa) {
        _0x21215e = _0x522dfa;
      }
      if (_0x21d0ba === "tanker" && IsAnyVehicleNearPoint(1736.7, -1538.03, 114.53, 10)) {
        return emit("DoLongHudText", "A vehicle is blocking the cargo area", 2);
      }
      const _0x3c2674 = await _0x385238.execute("np-oilers:storage:withdrawOil", _0x21d0ba, _0x3635e9, _0x21215e);
      emit("DoLongHudText", _0x3c2674 ? _0x21d0ba + " ready to be collected" : "Unable to prepare " + _0x21d0ba, _0x3c2674 ? 1 : 2);
    });
    on("np-oilers:storage:showBarrelInv", async (_0x3ff627, _0x162633, _0x492c98) => {
      const _0x358a6a = exports.isPed.isPed("cid");
      emit("server-inventory-open", "1", "container-" + _0x358a6a + "-barrels-barrelpile", 750, 5);
    });
    on("np-oilers:storage:returnBarrel", async () => {
      const _0x383364 = exports["inventory"].getItemsOfType("barrel_fuel", 1, true);
      const _0x548147 = _0x383364[0];
      const _0x15248c = _0x548147 ? JSON.parse(_0x548147.information) : undefined;
      if (_0x383364.length === 0 || _0x15248c?.type === undefined) {
        return emit("DoLongHudText", "You need an oil barrel", 2);
      }
      const _0x5d7eac = await _0x385238.execute("np-oilers:storage:returnBarrel", _0x15248c);
      emit("DoLongHudText", _0x5d7eac ? "Returned Barrel Successfully" : "Failed to return barrel", _0x5d7eac ? 1 : 2);
    });
    on("np-oilers:storage:returnTanker", async (_0x16e3c0, _0x1ab2dc, _0x4eadb5) => {
      const _0x4d6a31 = NetworkGetNetworkIdFromEntity(_0x1ab2dc);
      const _0x55b8aa = await _0x385238.execute("np-oilers:storage:returnTanker", _0x4d6a31);
      emit("DoLongHudText", _0x55b8aa ? "Returned Tanker Successfully" : "Failed to Return Tanker", _0x55b8aa ? 1 : 2);
    });
    on("np-oilers:storage:openTankerInfoMenu", (_0x26ef18, _0xb7f934, _0x2120e3) => {
      const _0x2b2932 = _0x2120e3?.meta?.oil;
      _0x4a6a67(_0x2b2932);
    });
    ;
    const _0x197c70 = (_0x5b4ce2, _0x609500 = 0) => {
      const _0x30cced = {
        barrel: 5000,
        tanker: 100000
      };
      const _0xa2b6e2 = {
        barrel: 3000,
        tanker: 5000
      };
      const _0x3c1aa9 = {
        title: "Withdraw from Storage",
        description: "",
        icon: "minus-circle",
        children: [{
          title: "Store in Barrel",
          description: "Deposit: $" + _0x4670a8(_0xa2b6e2.barrel) + " | Capacity: " + _0x4670a8(_0x30cced.barrel) + " gallons",
          icon: "dolly-flatbed",
          key: {
            method: "barrel",
            meta: _0x5b4ce2,
            available: _0x609500,
            capacity: _0x30cced.barrel,
            deposit: _0xa2b6e2.barrel
          },
          action: "np-oilers:storage:withdrawOil"
        }, {
          title: "Load into Tanker",
          description: "Deposit: $" + _0x4670a8(_0xa2b6e2.tanker) + " | Capacity: " + _0x4670a8(_0x30cced.tanker) + " gallons",
          icon: "truck-moving",
          key: {
            method: "tanker",
            meta: _0x5b4ce2,
            available: _0x609500,
            capacity: _0x30cced.tanker,
            deposit: _0xa2b6e2.tanker
          },
          action: "np-oilers:storage:withdrawOil"
        }]
      };
      return _0x3c1aa9;
    };
    const _0x145591 = (_0x24363f, _0x5f0278) => {
      const _0x511b8c = [{
        title: "Storage Actions",
        description: "",
        icon: "info-circle",
        children: []
      }];
      _0x511b8c.push(_0x197c70(_0x24363f, _0x5f0278));
      return _0x511b8c;
    };
    const _0x2f7189 = async () => {
      const _0x4cffd5 = exports.isPed.isPed("cid");
      const _0x463417 = await _0x385238.execute("np-oilers:getStorageInfo", _0x4cffd5);
      const _0x446975 = [{
        icon: "info-circle",
        title: "Ron Oil Storage",
        description: "",
        action: "",
        key: {}
      }, {
        icon: "oil-can",
        title: "Crude Oil",
        description: (_0x463417 === null || _0x463417 === undefined ? undefined : _0x463417.crudeOil.toFixed(2)) + " Gallons",
        action: "",
        key: {},
        children: _0x145591({
          type: "crudeOil"
        }, _0x463417?.crudeOil)
      }, {
        icon: "burn",
        title: "Gasoline (Regular)",
        description: (_0x463417 === null || _0x463417 === undefined ? undefined : _0x463417.regularGas.toFixed(2)) + " Gallons",
        action: "",
        key: {},
        children: _0x145591({
          type: "regular",
          octane: 87,
          grade: 4
        }, _0x463417?.regularGas)
      }];
      _0x1e7bad.g.exports["np-ui"].showContextMenu(_0x446975);
    };
    const _0x4a6a67 = _0x5f5893 => {
      let _0x49183f = "";
      for (const [_0x4d69fc, _0x3d9c0a] of Object.entries(_0x5f5893)) {
        if (_0x4d69fc === "type" || _0x4d69fc === "owner") {
          continue;
        }
        _0x49183f += _0x1cfdc4(_0x4d69fc) + ": " + _0x3d9c0a + " | ";
      }
      _0x49183f = _0x49183f.slice(0, -2);
      const _0x299e2b = [{
        icon: "info-circle",
        title: "Tanker Information",
        description: "",
        action: "",
        key: {}
      }, {
        icon: "info-circle",
        title: "Stored Oil: " + _0x1cfdc4(_0x5f5893.type),
        description: _0x49183f,
        action: "",
        key: {}
      }];
      _0x1e7bad.g.exports["np-ui"].showContextMenu(_0x299e2b);
    };
    ;
    async function _0x270a9a() {
      await _0x385238.execute("np-datagrid:subscribe", "oilers");
      _0x47725d.on("np-oilers:openCrafting", () => {
        emit("server-inventory-open", "42128", "Craft");
      });
      _0x47725d.on("np-oilers:viewStorage", () => {
        return _0x2f7189();
      });
      onNet("np-oilers:playMachineAlarm", async _0x42f69c => {
        return _0x3b0004(_0x42f69c);
      });
    }
    ;
    const _0x152c3f = () => {
      exports["np-interact"].AddPeekEntryByModel([GetHashKey("p_oil_pjack_03_s")], [{
        NPXEvent: "np-oilers:viewPumpInfo",
        id: "view_pump_info",
        icon: "search",
        label: "View Pump Info",
        parameters: {}
      }, {
        NPXEvent: "np-oilers:updatePumpSettings",
        id: "update_pump_settings",
        icon: "wrench",
        label: "Modify Pump Settings",
        parameters: {}
      }, {
        NPXEvent: "np-oilers:openPartsInventory",
        id: "open_parts_inventory",
        icon: "hammer",
        label: "Manage Parts",
        parameters: {}
      }], {
        distance: {
          radius: 4
        },
        isEnabled: _0x48e1ca => {
          const _0x231bb3 = exports["np-objects"].GetObjectByEntity(_0x48e1ca);
          const _0x278be8 = IsPedInAnyVehicle(PlayerPedId(), false);
          return _0x231bb3 && _0x231bb3.data.metadata && _0x231bb3.data.metadata.pumpId && !_0x278be8;
        }
      });
    };
    ;
    const _0x49c412 = {
      distance: {
        radius: 2.5
      },
      meta: {
        oilers: true
      },
      isEnabled: async () => {
        return true;
      }
    };
    const _0x147d84 = {
      type: "model",
      group: [-28420472],
      data: [{
        id: "oilers:storage:barrelInvMenu",
        label: "barrel inventory",
        icon: "boxes",
        event: "np-oilers:storage:showBarrelInv",
        parameters: {}
      }, {
        id: "oilers:storage:returnBarrel",
        label: "return barrel",
        icon: "exchange-alt",
        event: "np-oilers:storage:returnBarrel",
        parameters: {}
      }],
      options: _0x49c412
    };
    const _0x27eb73 = {
      distance: {
        radius: 8
      },
      isEnabled: (_0x2f77b0, _0x3085cf) => {
        return _0x3085cf?.meta?.oil !== undefined;
      }
    };
    const _0x562467 = {
      type: "model",
      group: [-1320147046],
      data: [{
        id: "oilers:storage:tankerInfo",
        label: "tanker information",
        icon: "info-circle",
        event: "np-oilers:storage:openTankerInfoMenu",
        parameters: {}
      }],
      options: _0x27eb73
    };
    const _0x1a0c89 = [_0x147d84, {
      type: "model",
      group: [-1320147046],
      data: [{
        id: "oilers:storage:returnTanker",
        label: "return tanker",
        icon: "exchange-alt",
        event: "np-oilers:storage:returnTanker",
        parameters: {}
      }],
      options: {
        isEnabled: async () => {
          return _0x3ae804.isActive("oilers_tanker_dropoff");
        }
      }
    }, _0x562467];
    function _0x5ead71() {
      _0x1a0c89.forEach(_0x4ae08f => {
        if (_0x4ae08f.type === "entity") {
          exports["np-interact"].AddPeekEntryByEntityType(_0x4ae08f.group, _0x4ae08f.data, _0x4ae08f.options);
        } else if (_0x4ae08f.type === "polytarget") {
          exports["np-interact"].AddPeekEntryByPolyTarget(_0x4ae08f.group, _0x4ae08f.data, _0x4ae08f.options);
        } else if (_0x4ae08f.type === "model") {
          exports["np-interact"].AddPeekEntryByModel(_0x4ae08f.group, _0x4ae08f.data, _0x4ae08f.options);
        }
      });
      const _0x5d6129 = {
        x: 1737.37,
        y: -1538.27,
        z: 112.62
      };
      _0x3ae804.addBoxZone("tanker_01", "oilers_tanker_dropoff", _0x5d6129, 20.4, 16.6, {
        heading: 341,
        minZ: 111.12,
        maxZ: 116.32
      });
    }
    ;
    on("np-inventory:itemUsed", async (_0x2d6d12, _0xc5af86) => {
      if (_0x2d6d12 !== "oilpump") {
        return;
      }
      const _0x48e3f7 = await exports["np-business"].HasPermission("ron_oil", "craft_access");
      if (!_0x48e3f7) {
        return;
      }
      const _0x1ff2f4 = [{
        name: "pumpId",
        label: "Pump Name",
        icon: "signature",
        _type: "string",
        _defaultValue: ""
      }];
      const _0x28d751 = await exports["np-ui"].OpenInputMenu(_0x1ff2f4);
      if (!_0x28d751) {
        return;
      }
      if (!_0x28d751?.pumpId || (_0x28d751 === null || _0x28d751 === undefined ? undefined : _0x28d751.pumpId.length) < 3) {
        return emit("DoLongHudText", "Invalid pump id", 2);
      }
      const _0x33efc4 = {
        createdAt: Date.now(),
        speed: 1,
        oilStorage: 0,
        belt: 0,
        clutch: 0,
        polishedRod: 0,
        pumpId: _0x28d751?.pumpId
      };
      const _0x4dafa7 = () => true;
      const _0x381f0 = await exports["np-objects"].PlaceAndSaveObject("p_oil_pjack_03_s", _0x33efc4, {
        collision: false,
        groundSnap: false,
        forceGroundSnap: false,
        useModelOffset: false,
        adjustZ: true
      }, _0x4dafa7, "oilers");
      const [_0x187b71, _0x88c974] = await _0x385238.execute("np-oilers:createPump", _0x381f0);
      if (!_0x187b71) {
        await exports["np-objects"].DeleteObject(_0x381f0);
      } else {
        emit("inventory:removeItem", "oilpump", 1);
      }
      return emit("DoLongHudText", _0x88c974, _0x187b71 ? 1 : 2);
    });
    ;
    _0x47725d.on("np-oilers:viewPumpInfo", (_0x247524, _0x4f0703, _0x752506) => {
      return _0x2c55ff(_0x752506.meta.data.metadata.pumpId);
    });
    _0x47725d.on("np-oilers:updatePumpSettings", (_0x51de4c, _0xa76622, _0x4c51af) => {
      const _0x1a8c0e = _0x4c51af.meta.data?.metadata?.assignedTo;
      const _0x5de600 = exports.isPed.isPed("cid");
      if (!_0x1a8c0e || _0x1a8c0e.id !== _0x5de600) {
        return emit("DoLongHudText", "Seems like I cant do this...", 2);
      }
      return _0x281cdc(_0x4c51af.meta.data.metadata.pumpId);
    });
    RegisterUICallback("np-oilers:pumpOilToStorage", async (_0x21822c, _0x3da2c9) => {
      _0x3da2c9({
        data: [],
        meta: {
          ok: false,
          message: ""
        }
      });
      const _0x230c7c = _0x21822c.key?.pumpId;
      if (!_0x230c7c) {
        return emit("DoLongHudText", "Unkown pump", 2);
      }
      const [_0x23f36f, _0x5317a8] = await _0x385238.execute("np-oilers:pumpToStorage", _0x230c7c);
      emit("DoLongHudText", _0x5317a8, _0x23f36f ? 1 : 2);
    });
    RegisterUICallback("np-oilers:assignPump", async (_0x20c056, _0x580b87) => {
      _0x580b87({
        data: [],
        meta: {
          ok: false,
          message: ""
        }
      });
      await _0xd0681b(200);
      const _0x1932f0 = _0x20c056.key?.pumpId;
      if (!_0x1932f0) {
        return emit("DoLongHudText", "Unkown pump", 2);
      }
      const _0x156a18 = [{
        name: "cid",
        label: "State ID",
        icon: "id-card",
        _type: "number"
      }];
      const _0x434a75 = await exports["np-ui"].OpenInputMenu(_0x156a18);
      if (!_0x434a75) {
        return;
      }
      const [_0x4dbeb9, _0x54c831] = await _0x385238.execute("np-oilers:assignPump", _0x1932f0, Number(_0x434a75.cid));
      emit("DoLongHudText", _0x54c831, _0x4dbeb9 ? 1 : 2);
    });
    RegisterUICallback("np-oilers:viewWeeklyReport", async (_0x3ae253, _0x2d3b0d) => {
      _0x2d3b0d({
        data: [],
        meta: {
          ok: false,
          message: ""
        }
      });
      const _0x4a3886 = _0x3ae253.key?.pumpId;
      if (!_0x4a3886) {
        return emit("DoLongHudText", "Unkown pump", 2);
      }
      const [_0x204f86, _0x2862bd, _0x5dfce6] = await _0x385238.execute("np-oilers:viewWeeklyReport", _0x4a3886);
      emit("DoLongHudText", _0x2862bd, _0x204f86 ? 1 : 2, 12000, _0x5dfce6);
    });
    ;
    _0x47725d.on("np-oilers:openPartsInventory", (_0x16e41b, _0x20dce5) => {
      const _0x1c5989 = exports["np-objects"].GetObjectByEntity(_0x20dce5);
      const _0x42eb44 = _0x1c5989?.data?.metadata?.pumpId;
      if (!_0x42eb44) {
        return;
      }
      const _0x1766e8 = _0x1c5989.data?.metadata?.assignedTo;
      const _0x4dc669 = exports.isPed.isPed("cid");
      if (!_0x1766e8 || _0x1766e8.id !== _0x4dc669) {
        return emit("DoLongHudText", "Seems like I cant do this...", 2);
      }
      return emit("inventory-open-container", "container_" + _0x42eb44 + "_Oil-pumpinventory", 5, 30);
    });
    on("np-inventory:closed", async _0xca702f => {
      if (!_0xca702f.endsWith("_Oil-pumpinventory")) {
        return;
      }
      const _0x49fa26 = _0xca702f.split("_")[1];
      if (!_0x49fa26) {
        return;
      }
      const [_0x1577d3, _0x2fc921] = await _0x385238.execute("np-oilers:applyPumpParts", _0x49fa26);
      emit("DoLongHudText", _0x2fc921, _0x1577d3 ? 1 : 2);
    });
    ;
    const _0x34280a = new Map();
    on("np-objects:objectCreated", async (_0x42d856, _0x2cfc5d) => {
      if (_0x42d856.ns !== "oilers") {
        return;
      }
      _0xf5503(_0x42d856.data.metadata, _0x2cfc5d);
      _0x34280a.set(_0x42d856.id, _0x2cfc5d);
    });
    on("np-objects:objectUpdated", async _0x465d41 => {
      if (_0x465d41.ns !== "oilers") {
        return;
      }
      _0xf5503(_0x465d41.data.metadata, _0x34280a.get(_0x465d41.id));
    });
    on("np-objects:objectDeleted", async _0x2d157b => {
      if (_0x2d157b.ns !== "oilers") {
        return;
      }
      DeleteEntity(_0x34280a.get(_0x2d157b.id));
      _0x34280a.delete(_0x2d157b.id);
    });
    const _0x2c55ff = async _0x4c2fd8 => {
      if (!_0x4c2fd8) {
        return;
      }
      const _0x5bb605 = await _0x385238.execute("np-oilers:getPumpInfo", _0x4c2fd8);
      const _0x535105 = await exports["np-objects"].GetObject(_0x5bb605.objUUID);
      const _0x345e24 = [{
        icon: "hard-hat",
        title: _0x4c2fd8.split("-").join(" ") + " Information",
        action: "",
        key: {}
      }, {
        icon: "tachometer-alt",
        title: "Speed",
        description: _0xf3b793(_0x5bb605?.settings?.speed) + " MPH",
        action: "",
        key: {}
      }, {
        icon: "clock",
        title: "Duration",
        description: _0xc0c42e(_0x535105?.data?.metadata?.createdAt),
        action: "",
        key: {}
      }, {
        icon: "thermometer-three-quarters",
        title: "Tempature",
        description: _0x5bb605?.tempature + " °C",
        action: "",
        key: {}
      }, {
        icon: "oil-can",
        title: "Oil Storage",
        description: (_0x5bb605?.oilStorage).toFixed(2) + " Gallons (1000 Gallons Max)",
        action: "",
        key: {}
      }, {
        icon: "oil-can",
        title: "Part Information",
        description: _0x5bb605.partInformation,
        action: "",
        key: {}
      }];
      const _0x23a18a = await exports["np-business"].HasPermission("ron_oil", "craft_access");
      if (_0x23a18a) {
        const _0xf31c20 = {
          pumpId: _0x4c2fd8
        };
        const _0x490ef6 = {
          icon: "user",
          title: "Assign Pump",
          description: "",
          action: "np-oilers:assignPump",
          key: _0xf31c20
        };
        _0x345e24.push(_0x490ef6);
        const _0x3fbb46 = {
          pumpId: _0x4c2fd8
        };
        const _0x76aba7 = {
          icon: "info",
          title: "View Weekly Report",
          description: "",
          action: "np-oilers:viewWeeklyReport",
          key: _0x3fbb46
        };
        _0x345e24.push(_0x76aba7);
      }
      const _0x4bfd61 = exports.isPed.isPed("cid");
      if (_0x5bb605.assignedTo && _0x5bb605.assignedTo.id === Number(_0x4bfd61) || _0x23a18a) {
        const _0x5eb70c = {
          pumpId: _0x4c2fd8
        };
        const _0x1fec04 = {
          icon: "oil-can",
          title: "Pump Oil To Storage",
          description: "",
          action: "np-oilers:pumpOilToStorage",
          key: _0x5eb70c
        };
        _0x345e24.push(_0x1fec04);
      }
      exports["np-ui"].showContextMenu(_0x345e24);
    };
    const _0xf5503 = async (_0x4c69d5, _0x18117f) => {
      const _0xb2907 = _0x4c69d5?.speed;
      SetEntityAnimSpeed(_0x18117f, "p_v_lev_des_skin", "p_oil_pjack_03_s", _0x51168c(_0xb2907));
    };
    const _0x281cdc = async _0x446c05 => {
      if (!_0x446c05) {
        return;
      }
      const _0x5688aa = await _0x385238.execute("np-oilers:getPumpInfo", _0x446c05);
      if (!_0x5688aa) {
        return;
      }
      const _0x2100f9 = {
        name: "pumpSpeed",
        label: "Pump Speed (0-100%)",
        icon: "time",
        _type: "number",
        _defaultValue: _0x5688aa.settings.speed
      };
      const _0x48f56b = [_0x2100f9];
      const _0x1c1ecd = await exports["np-ui"].OpenInputMenu(_0x48f56b);
      if (!_0x1c1ecd) {
        return;
      }
      if (!_0x1c1ecd.pumpSpeed || isNaN(_0x1c1ecd.pumpSpeed) || _0x1c1ecd.pumpSpeed < 0 || _0x1c1ecd.pumpSpeed > 100) {
        return emit("DoLongHudText", "Please enter a valid pump speed.", 2);
      }
      const _0x39ade8 = parseInt(_0x1c1ecd.pumpSpeed);
      const _0xb7f612 = {
        speed: _0x39ade8
      };
      const _0x1a200c = await _0x385238.execute("np-oiler:updatePumpInfo", _0x446c05, _0xb7f612);
      if (_0x1a200c) {
        emit("DoLongHudText", "Pump has successfully updated", 1);
      }
    };
    ;
    RegisterUICallback("np-oilers:startBlending", (_0x4d7f54, _0x109d19) => {
      _0x32380a();
      return _0x109d19({
        data: [],
        meta: {
          ok: false,
          message: ""
        }
      });
    });
    _0x47725d.on("np-oilers:viewBlendingPool", () => {
      return _0x26e400();
    });
    ;
    const _0x32380a = async () => {
      const _0x591932 = exports.isPed.isPed("cid");
      const _0x2e979a = await _0x385238.execute("np-oilers:getBlenderInfo", _0x591932);
      if (_0x2e979a.active) {
        return emit("DoLongHudText", _L("oilers-blender-active", "Blending pool is already running"), 2);
      }
      const _0x15e2b5 = [{
        name: "heavyNaphtha",
        label: "Heavy Naphtha (0-100%)",
        icon: "burn",
        _type: "number"
      }, {
        name: "lightNaphtha",
        label: "Light Naphtha (0-100%)",
        icon: "burn",
        _type: "number"
      }, {
        name: "gas",
        label: "Other Gases (0-100%)",
        icon: "burn",
        _type: "number"
      }, {
        name: "amount",
        label: "Output Amount (gallons)",
        icon: "burn",
        _type: "number"
      }];
      const _0x14aedd = await exports["np-ui"].OpenInputMenu(_0x15e2b5);
      if (!_0x14aedd) {
        return;
      }
      const _0x5ba9ea = Number(_0x14aedd.gas);
      const _0x2c7001 = Number(_0x14aedd.heavyNaphtha);
      const _0x670266 = Number(_0x14aedd.lightNaphtha);
      const _0x379e57 = _0x14aedd.amount;
      const _0xc6c6fd = _0x5ba9ea + _0x2c7001 + _0x670266;
      if (_0xc6c6fd !== 100) {
        return emit("DoLongHudText", _L("oilers-blender-invalid-total", "Total between all amounts must be 100%"), 2);
      }
      if (_0x379e57 < 100) {
        return emit("DoLongHudText", _L("oilers-blender-invalid-amount", "Amount must be at least 100 gallons"), 2);
      }
      const _0x7bbbf9 = {
        gas: _0x5ba9ea,
        heavyNaphtha: _0x2c7001,
        lightNaphtha: _0x670266,
        amount: _0x379e57
      };
      const [_0x1fd115, _0x30fa7e] = await _0x385238.execute("np-oilers:startBlending", _0x591932, _0x7bbbf9);
      emit("DoLongHudText", _0x30fa7e, _0x1fd115 ? 1 : 2);
    };
    const _0x26e400 = async () => {
      const _0x5cfb27 = exports.isPed.isPed("cid");
      const _0x552d64 = await _0x385238.execute("np-oilers:getBlenderInfo", _0x5cfb27);
      if (!_0x552d64) {
        return emit("DoLongHudText", _L("oilers-blender-active", "Seems like you dont have a blending pool currently..."), 2);
      }
      const _0x5c085a = {
        icon: "info-circle",
        title: "Blending Pool Info (" + (_0x552d64.active ? "Active" : "Inactive") + ")",
        description: "",
        action: "",
        key: {}
      };
      const _0x14bdf8 = {
        icon: "circle",
        title: "Heavy Naphtha",
        description: "Current Level: " + _0x552d64.heavyNaphthaLevel + " Gallons",
        action: "",
        key: {}
      };
      const _0x21a9ea = {
        icon: "circle",
        title: "Light Naphtha",
        description: "Current Level: " + _0x552d64.lightNaphthaLevel + " Gallons",
        action: "",
        key: {}
      };
      const _0x45d6a2 = {
        icon: "circle",
        title: "Other Gases",
        description: "Current Level: " + _0x552d64.otherGasLevel + " Gallons",
        action: "",
        key: {}
      };
      const _0x4e8683 = {
        icon: "sync",
        title: "Start Blending",
        description: "",
        disabled: _0x552d64.active,
        action: "np-oilers:startBlending",
        key: {}
      };
      const _0x465ce3 = [_0x5c085a, _0x14bdf8, _0x21a9ea, _0x45d6a2, _0x4e8683];
      _0x1e7bad.g.exports["np-ui"].showContextMenu(_0x465ce3);
    };
    ;
    _0x47725d.on("np-oilers:viewDistillation", () => {
      return _0x32f30b();
    });
    RegisterUICallback("np-oilers:pumpDistillation", async (_0xbb047c, _0xb497ec) => {
      _0x4da400();
      _0xb497ec({
        data: [],
        meta: {
          ok: false,
          message: ""
        }
      });
    });
    RegisterUICallback("np-oilers:forceStopPumping", async (_0x1b1957, _0x7e4de6) => {
      const _0x488702 = exports.isPed.isPed("cid");
      _0x47725d.emitNet("np-oilers:forceStopPump", _0x488702);
      _0x7e4de6({
        data: [],
        meta: {
          ok: false,
          message: ""
        }
      });
    });
    RegisterUICallback("np-oilers:changeDistillationTemp", async (_0x40592b, _0x3eddbf) => {
      _0x53bdd1();
      _0x3eddbf({
        data: [],
        meta: {
          ok: false,
          message: ""
        }
      });
    });
    RegisterUICallback("np-oilers:toggleDistillation", async (_0x59c482, _0x482e44) => {
      const _0x22ebae = exports.isPed.isPed("cid");
      _0x47725d.emitNet("np-oilers:toggleDistillation", _0x22ebae);
      _0x482e44({
        data: [],
        meta: {
          ok: false,
          message: ""
        }
      });
    });
    ;
    const _0x32f30b = async () => {
      const _0x3597f3 = exports.isPed.isPed("cid");
      const _0x127298 = await _0x385238.execute("np-oilers:getDistillationInfo", _0x3597f3);
      if (!_0x127298) {
        return emit("DoLongHudText", "Seems like you dont have a distillation machine.", 2);
      }
      const _0x5959a7 = {
        icon: "info-circle",
        title: "Atmospheric Distillation (" + (_0x127298.active ? "Active" : "Inactive") + ")",
        description: "",
        action: "",
        key: {}
      };
      const _0x599ca2 = {
        icon: "thermometer-three-quarters",
        title: "Tempature",
        description: _0x127298?.tempature + " °C",
        action: "",
        key: {}
      };
      const _0x2e46ce = {
        icon: "oil-can",
        title: "Crude Oil",
        description: _0x127298?.crudeOil + " Gallons",
        action: "",
        key: {}
      };
      const _0x136843 = [_0x5959a7, _0x599ca2, _0x2e46ce, {
        icon: "sync",
        title: "Pump Crude Oil",
        description: "",
        action: "np-oilers:pumpDistillation",
        key: {}
      }, {
        icon: "thermometer-three-quarters",
        title: "Change Tempature",
        description: "",
        action: "np-oilers:changeDistillationTemp",
        key: {}
      }, {
        icon: "sync",
        title: "Toggle Distillation",
        description: "",
        action: "np-oilers:toggleDistillation",
        key: {}
      }, {
        icon: "exclamation-circle",
        title: "Force Stop Pumping",
        description: "",
        action: "np-oilers:forceStopPumping",
        key: {}
      }];
      _0x1e7bad.g.exports["np-ui"].showContextMenu(_0x136843);
    };
    const _0x4da400 = async () => {
      await _0xd0681b(200);
      const _0x1510c1 = [{
        name: "amount",
        label: "Amount of gallons to pump",
        icon: "time",
        _type: "number",
        _defaultValue: 0
      }];
      const _0x16cdb3 = await exports["np-ui"].OpenInputMenu(_0x1510c1);
      if (!_0x16cdb3) {
        return;
      }
      const _0x431be0 = exports.isPed.isPed("cid");
      _0x47725d.emitNet("np-oilers:pumpOilToDistillation", _0x431be0, Number(_0x16cdb3.amount));
    };
    const _0x53bdd1 = async () => {
      await _0xd0681b(200);
      const _0x5e0727 = exports.isPed.isPed("cid");
      const _0x578abd = await _0x385238.execute("np-oilers:getDistillationInfo", _0x5e0727);
      if (!_0x578abd) {
        return emit("DoLongHudText", "Seems like you have a distillation machine.", 2);
      }
      const _0x277ca4 = {
        name: "temperature",
        label: "Temperature °C",
        icon: "thermometer-three-quarters",
        _type: "number",
        _defaultValue: _0x578abd.tempature
      };
      const _0x2d7705 = [_0x277ca4];
      const _0x4d2d8f = await exports["np-ui"].OpenInputMenu(_0x2d7705);
      if (!_0x4d2d8f) {
        return;
      }
      _0x47725d.emitNet("np-oilers:changeDistillationTemp", _0x5e0727, Math.round(Number(_0x4d2d8f.temperature)));
    };
    ;
    RegisterCommand("np-oilers:updatePump", async (_0x5ce15d, _0x34b1ca) => {
      const _0x4fc2db = await _0x3f4191.get("ron_corp");
      if (!_0x4fc2db) {
        return console.log("not employed");
      }
      if (!_0x34b1ca[0]) {
        return console.log("No model passed");
      }
      const {
        selectedEntity: _0x1a37aa
      } = _0x1e7bad.g.exports["np-selector"].getCurrentSelection();
      _0x1e7bad.g.exports["np-selector"].deselect();
      if (!_0x1a37aa) {
        return console.log("No entity selected");
      }
      const _0x395f0c = _0x1e7bad.g.exports["np-objects"].GetObjectByEntity(_0x1a37aa);
      if (!_0x395f0c) {
        return console.log("No object found");
      }
      if (_0x395f0c.data.metadata.type !== "pump") {
        return console.log("Not a pump");
      }
      const _0x47fda0 = await _0x1e7bad.g.exports["np-objects"].UpdateObject(_0x395f0c.id, {}, _0x34b1ca[0]);
      console.log(_0x47fda0, _0x395f0c.id);
    }, false);
    RegisterCommand("np-oilers:selectEntity", async () => {
      const _0x39ad3d = await _0x3f4191.get("ron_corp");
      if (!_0x39ad3d) {
        return console.log("not employed");
      }
      _0x1e7bad.g.exports["np-selector"].startSelecting(-1, PlayerPedId(), () => true);
    }, false);
    ;
    const _0x3125c8 = () => {
      const _0x520830 = {
        x: 1682.71,
        y: -1699.85,
        z: 112.54
      };
      _0x1e7bad.g.exports["np-polytarget"].AddBoxZone("roncorp_blender", _0x520830, 1.6, 1, {
        heading: 12,
        minZ: 111.39,
        maxZ: 112.99,
        data: {
          id: "roncorp_blender"
        }
      });
      _0x1e7bad.g.exports["np-interact"].AddPeekEntryByPolyTarget("roncorp_blender", [{
        NPXEvent: "np-oilers:viewBlendingPool",
        id: "roncorp_blending_view",
        icon: "sync",
        label: "View Blending Pool"
      }], {
        distance: {
          radius: 3.5
        },
        isEnabled: async () => {
          return true;
        }
      });
      const _0x2a1087 = {
        x: 1673.36,
        y: -1649.92,
        z: 111.35
      };
      _0x1e7bad.g.exports["np-polytarget"].AddBoxZone("roncorp_distillation", _0x2a1087, 0.8, 1.6, {
        heading: 10,
        minZ: 110.35,
        maxZ: 111.75,
        data: {
          id: "roncorp_distillation"
        }
      });
      const _0x48a5cd = {
        distance: {
          radius: 3.5
        },
        isEnabled: async () => {
          return true;
        }
      };
      _0x1e7bad.g.exports["np-interact"].AddPeekEntryByPolyTarget("roncorp_distillation", [{
        NPXEvent: "np-oilers:viewDistillation",
        id: "roncorp_distillation_view",
        icon: "sync",
        label: "View Distillation"
      }], _0x48a5cd);
      const _0xe33b80 = {
        x: 1750.57,
        y: -1610.64,
        z: 112.63
      };
      _0x1e7bad.g.exports["np-polytarget"].AddBoxZone("roncorp_crafting", _0xe33b80, 4, 1.4, {
        heading: 11,
        minZ: 111.63,
        maxZ: 113.83,
        data: {
          id: "roncorp_crafting"
        }
      });
      _0x1e7bad.g.exports["np-interact"].AddPeekEntryByPolyTarget("roncorp_crafting", [{
        NPXEvent: "np-oilers:openCrafting",
        id: "roncorp_craft",
        icon: "hammer",
        label: "Open Workstation"
      }], {
        distance: {
          radius: 3.5
        },
        isEnabled: async () => {
          const _0x58868d = await exports["np-business"].HasPermission("ron_oil", "craft_access");
          return _0x58868d;
        }
      });
      const _0x292e75 = {
        x: 1699.17,
        y: -1611.33,
        z: 112.47
      };
      _0x1e7bad.g.exports["np-polytarget"].AddBoxZone("roncorp_storage", _0x292e75, 0.8, 1.65, {
        heading: 10,
        minZ: 111.47,
        maxZ: 113.27,
        data: {
          id: "roncorp_storage"
        }
      });
      _0x1e7bad.g.exports["np-interact"].AddPeekEntryByPolyTarget("roncorp_storage", [{
        NPXEvent: "np-oilers:viewStorage",
        id: "roncorp_storage",
        icon: "info",
        label: "View Storage"
      }], {
        distance: {
          radius: 3.5
        },
        isEnabled: async () => {
          return true;
        }
      });
    };
    ;
    const _0x5e26e7 = _0x23f08c => {
      if (!_0x23f08c) {
        return;
      }
      return _0x23f08c.includes("electric-station");
    };
    ;
    const _0xfb3cde = new Set();
    const _0x49f08f = () => {
      const _0x127e47 = _0x3231ff("np-oilers:gasStationSeed", "stations");
      for (const _0x3e44a3 of _0x127e47) {
        if (_0x5e26e7(_0x3e44a3.id)) {
          continue;
        }
        const _0x42aef7 = _0x8e3fe6("Gas Station", [_0x3e44a3.tank.vectors.x, _0x3e44a3.tank.vectors.y, _0x3e44a3.tank.vectors.z], 361, 59, true);
        _0xfb3cde.add(_0x42aef7);
      }
    };
    function _0x43f740(_0x386f47, _0x410bf8) {
      if (_0x410bf8) {
        SetBlipAlpha(_0x386f47, 0);
        SetBlipHiddenOnLegend(_0x386f47, true);
      } else {
        SetBlipAlpha(_0x386f47, 255);
        SetBlipHiddenOnLegend(_0x386f47, false);
      }
    }
    on("np-island:hideBlips", async _0x39be44 => {
      for (const _0x38e780 of _0xfb3cde) {
        _0x43f740(_0x38e780, _0x39be44);
      }
    });
    ;
    async function _0x9f2f7() {
      await _0x19888e();
      await _0x270a9a();
      _0x152c3f();
      _0x5ead71();
      _0x3125c8();
      _0x49f08f();
    }
    ;
    const _0x430f80 = new Map();
    function _0x134ec2(_0x37eb34) {
      const _0x4e8c0f = _0x37eb34 ? _0x37eb34 : _0x3231ff("np-oilers:gasStations");
      const _0xe60a34 = _0x4e8c0f.upgrades;
      for (const [_0x5bdadf, _0x34d5e1] of Object.entries(_0xe60a34)) {
        _0x430f80.set(_0x5bdadf, _0x34d5e1);
      }
    }
    function _0x23b9c8(_0x22b1d1, _0x2fc31b) {
      const _0x54ee75 = _0x430f80.get(_0x22b1d1);
      if (_0x54ee75 === undefined || _0x54ee75[_0x2fc31b] === undefined) {
        return;
      }
      return _0x54ee75[_0x2fc31b];
    }
    function _0x37d935(_0x5f34e5, _0x42d2a9, _0x5ae2cf) {
      const _0x2fc427 = _0x23b9c8(_0x5f34e5, _0x42d2a9);
      if (_0x2fc427 === undefined) {
        return;
      }
      return _0x2fc427.find(_0x106fac => _0x106fac.tier === _0x5ae2cf[_0x5f34e5][_0x42d2a9])?.value;
    }
    on("np-config:configLoaded", (_0x5da177, _0x32e230) => {
      if (_0x5da177 !== "np-oilers:gasStations") {
        return;
      }
      _0x134ec2(_0x32e230);
    });
    ;
    const _0x1e6b72 = new Map();
    const _0x39fb0c = new Map();
    const _0x3b61ab = new WeakMap();
    const _0x9e8b57 = new WeakMap();
    const _0xf80db4 = new Set();
    async function _0x9dc10b() {}
    function _0x13e6f7(_0x177504) {
      const _0x24c575 = _0x1e6b72.get(_0x177504);
      if (_0x24c575 === undefined) {
        return true;
      }
      RemoveBlip(_0x24c575);
      return _0x1e6b72.delete(_0x177504);
    }
    function _0x4e219f() {
      _0x1e6b72.forEach(_0x1c3769 => RemoveBlip(_0x1c3769));
      _0x1e6b72.clear();
    }
    const _0x149f05 = _0x400f90.cacheableMap(async (_0x966bc9, _0x2d3f97, _0x5e7527) => {
      const _0x547bb6 = await _0x385238.execute("np-oilers:getStationBusiness", _0x2d3f97);
      if (typeof _0x547bb6?.id !== "string") {
        return [false, undefined];
      }
      return [true, _0x547bb6];
    }, {
      timeToLive: 900000
    });
    function _0x40bc7a(_0x763f46) {
      const _0x10c6a2 = [..._0x39fb0c.values()].find(_0x4bc99c => _0x4bc99c.type === "panel" && _0x4bc99c.station === _0x763f46);
      return _0x10c6a2?.upgrades;
    }
    function _0x3f65ef(_0x39619e, _0x3e7e2f, _0x22e5d) {
      const _0x3df0b8 = _0x40bc7a(_0x39619e);
      if (_0x3df0b8 === undefined) {
        return;
      }
      return _0x37d935(_0x3e7e2f, _0x22e5d, _0x3df0b8);
    }
    function _0x1f3489(_0xad5038, _0x4a2011, _0x22797e) {
      if (_0xf80db4.has(_0xad5038)) {
        return;
      }
      const _0x50da6b = GetEntityModel(_0x4a2011);
      const _0x1693a6 = GetEntityHeading(_0x4a2011);
      const [_0x4caef1, _0x345d2f, _0x33cf53] = GetEntityCoords(_0x4a2011, false);
      const [_0x38f78b, _0x4fe5f3] = GetModelDimensions(_0x50da6b);
      const [_0x3de693, _0x36f97d, _0x2e97d3] = _0x4fe5f3;
      const _0x37af56 = {
        station: _0x22797e.station
      };
      const _0x325982 = _0x37af56;
      const _0x44e2f8 = {
        heading: _0x1693a6,
        minZ: _0x33cf53 - _0x2e97d3,
        maxZ: _0x33cf53 + _0x2e97d3
      };
      const _0x3ac8ad = _0x44e2f8;
      const _0x4e4d68 = {
        x: _0x4caef1,
        y: _0x345d2f,
        z: _0x33cf53
      };
      _0x3ae804.addBoxTarget(_0xad5038, "gas_station_tank", _0x4e4d68, _0x36f97d * 2, _0x3de693 * 2, _0x3ac8ad, _0x325982);
      _0xf80db4.add(_0xad5038);
    }
    function _0x19575f(_0x59952a, _0x16d116, _0x4c2cee) {
      _0x39fb0c.set(_0x59952a, _0x4c2cee);
      _0x3b61ab.set(_0x4c2cee, _0x59952a);
      if (_0x16d116 === undefined) {
        return;
      }
      _0x9e8b57.set(_0x4c2cee, _0x16d116);
      if (_0x4c2cee.type === "tank" && DoesEntityExist(_0x16d116)) {
        _0x1f3489(_0x59952a, _0x16d116, _0x4c2cee);
      }
    }
    function _0x4bc4c2(_0xeebd1) {
      return _0x39fb0c.get(_0xeebd1);
    }
    function _0x1c1564(_0x4aa6c1) {
      return _0x9e8b57.get(_0x39fb0c.get(_0x4aa6c1));
    }
    function _0x13954c(_0x103eb5) {
      return _0x3b61ab.get(_0x103eb5);
    }
    function _0x57e9ea(_0x3a7aa6) {
      return _0x39fb0c.delete(_0x3a7aa6);
    }
    function _0x4a8dec(_0x4bbaf8, _0x205b62) {
      return [..._0x39fb0c.values()].filter(_0x2bfc2a => _0x2bfc2a.station === _0x4bbaf8 && _0x2bfc2a.type === _0x205b62);
    }
    ;
    const _0x1d6c52 = 15;
    const _0x482a7e = {
      hose: "gas_pump_hose",
      knozzle: "gas_pump_knozzle",
      filter: "gas_pump_filter"
    };
    function _0x836256() {}
    _0x47725d.on("np-oilers:stations:repairMenu", (_0x41135e, _0x411b31, _0x9c5ad1) => {
      const _0x4aaa2d = _0x9c5ad1.meta?.id;
      const _0x286246 = _0x9c5ad1?.meta?.data?.metadata;
      const _0x11455d = _0x286246?.hoseWear ?? 80;
      const _0x5688b4 = _0x286246?.filterWear ?? 80;
      const _0xe52917 = _0x286246?.knozzleWear ?? 80;
      const _0x5b1de3 = {
        type: "knozzle",
        entity: _0x411b31,
        objectId: _0x4aaa2d
      };
      const _0x40ac67 = {
        type: "hose",
        entity: _0x411b31,
        objectId: _0x4aaa2d
      };
      const _0x5f207b = {
        type: "filter",
        entity: _0x411b31,
        objectId: _0x4aaa2d
      };
      const _0x25a445 = [{
        icon: "info-circle",
        title: "Repair Options",
        action: ""
      }, {
        icon: "caret-right",
        title: "Knozzle Wear",
        titleRight: _0xe52917.toFixed(2) + "%",
        action: "np-oilers:stations:repairPump",
        key: _0x5b1de3
      }, {
        icon: "caret-right",
        title: "Hose Wear",
        titleRight: _0x11455d.toFixed(2) + "%",
        action: "np-oilers:stations:repairPump",
        key: _0x40ac67
      }, {
        icon: "caret-right",
        title: "Filter Wear",
        titleRight: _0x5688b4.toFixed(2) + "%",
        action: "np-oilers:stations:repairPump",
        key: _0x5f207b
      }];
      exports["np-ui"].showContextMenu(_0x25a445);
    });
    RegisterUICallback("np-oilers:stations:repairPump", async (_0xad239f, _0x49155e) => {
      _0x49155e({
        data: null,
        meta: {
          ok: true,
          message: ""
        }
      });
      await _0xd0681b(200);
      const _0x591d2b = _0xad239f.key?.type;
      const _0x4cefc9 = _0xad239f.key?.entity;
      const _0x34e0ac = _0xad239f.key?.objectId;
      if (!_0x591d2b || !_0x482a7e[_0x591d2b]) {
        return emit("DoLongHudText", "Invalid part type", 2);
      }
      const _0x46991f = await exports["np-business"].IsEmployedAt("ron_oil");
      if (!_0x46991f) {
        return emit("DoLongHudText", "Hmm, idk what this does", 2);
      }
      const _0x460ebe = _0x482a7e[_0x591d2b];
      const _0x1aa7c4 = await _0x1e7bad.g.exports["np-ui"].OpenInputMenu([{
        label: "Quantity",
        name: "amount",
        type: "text"
      }], _0x301f90 => {
        return _0x301f90 && _0x301f90.amount;
      });
      if (!_0x1aa7c4 || !_0x1aa7c4.amount) {
        return emit("DoLongHudText", "Invalid quantity", 2);
      }
      const _0x58d9e9 = _0x1aa7c4.amount;
      let _0x11d429 = exports["inventory"].hasEnoughOfItem(_0x460ebe, _0x58d9e9, true);
      if (!_0x11d429) {
        const _0x20d986 = JSON.parse(exports["inventory"].itemListInfo(_0x460ebe));
        return emit("DoLongHudText", "Don't have enough " + _0x20d986.displayname + "s", 2);
      }
      const _0x38f8e3 = PlayerPedId();
      const [, _0x3e6591] = await Promise.all([(async () => {
        TaskTurnPedToFaceEntity(_0x38f8e3, _0x4cefc9, 0);
        TaskStartScenarioInPlace(_0x38f8e3, "WORLD_HUMAN_WELDING", 0, true);
        await new Promise(_0x1a1195 => setTimeout(_0x1a1195, 1000));
      })(), new Promise(_0x54045c => _0x1e7bad.g.exports["np-taskbar"].taskBar(_0x58d9e9 * 5000, "Repairing...", false, true, null, false, _0x54045c))]);
      if (_0x3e6591 !== 100) {
        return;
      }
      ClearPedTasks(_0x38f8e3);
      _0x11d429 = exports["inventory"].hasEnoughOfItem(_0x460ebe, _0x58d9e9, true);
      if (!_0x11d429) {
        const _0x4a9990 = JSON.parse(exports["inventory"].itemListInfo(_0x460ebe));
        return emit("DoLongHudText", "Don't have enough " + _0x4a9990.displayname + "s", 2);
      }
      const _0x589d9a = await _0x385238.execute("np-oilers:stations:repairPump", _0x34e0ac, _0x591d2b, _0x58d9e9);
      if (!_0x589d9a) {
        return emit("DoLongHudText", "Hmm, looks like I couldnt repair this", 2);
      }
      emit("inventory:removeItem", _0x460ebe, _0x58d9e9);
      emit("DoLongHudText", "Repaired part!", 1);
    });
    const _0x221b69 = (_0x1ff76a, _0x2644f2, _0x2c3f79) => {
      const _0x2dcd46 = _0xc4c650("degradeGasStationPumps");
      if (!_0x2dcd46) {
        return;
      }
      let _0x174ad1 = false;
      let _0x1f7fd2 = false;
      for (const _0x160238 in _0x482a7e) {
        const _0x3555d8 = _0x160238 + "Wear";
        if (!_0x2c3f79[_0x3555d8]) {
          _0x1f7fd2 = true;
          continue;
        }
        if (_0x2c3f79[_0x3555d8] < _0x1d6c52) {
          _0x174ad1 = true;
        }
      }
      if (_0x1f7fd2) {
        return;
      }
      if (!_0x174ad1) {
        return _0x1db564(_0x1ff76a);
      }
      const [_0x29b3e2, _0x584167, _0x4bee84] = GetOffsetFromEntityInWorldCoords(_0x2644f2, -0.35, 0.25, 0.87);
      const _0xbfdcfc = {
        x: _0x29b3e2,
        y: _0x584167,
        z: _0x4bee84
      };
      const _0x5c6e84 = {
        coords: [_0xbfdcfc],
        rot: {
          x: 0.01,
          y: 55.01,
          z: 0
        },
        scale: 3.51,
        alpha: 10.1,
        color: {
          r: 165.01,
          g: 42.01,
          b: 42.01
        }
      };
      const _0x96f501 = _0x5c6e84;
      emit("particle:sync:coord", "core", "veh_oil_slick", true, _0x96f501, null, _0x1ff76a + "_oil_leak");
      emit("particle:sync:coord", "core", "trail_splash_oil", true, _0x96f501, null, _0x1ff76a + "_oil_stream");
    };
    const _0x1db564 = _0x5af61f => {
      emit("particle:sync:toggle:stop", _0x5af61f + "_oil_leak");
      emit("particle:sync:toggle:stop", _0x5af61f + "_oil_stream");
    };
    const _0x395341 = _0x4acf9e => {
      let _0x5434fe = false;
      let _0x5c460c = false;
      const _0x158775 = exports["np-objects"].GetObject(_0x4acf9e);
      const _0x1a1ae2 = _0x158775.data?.metadata;
      for (const _0x2f3183 in _0x482a7e) {
        const _0x2ca227 = _0x2f3183 + "Wear";
        if (!_0x1a1ae2[_0x2ca227]) {
          _0x5434fe = true;
          continue;
        }
        if (_0x1a1ae2[_0x2ca227] < _0x1d6c52) {
          _0x5c460c = true;
        }
      }
      if (_0x5434fe) {
        return false;
      }
      return _0x5c460c;
    };
    ;
    function _0x29a482() {
      _0x385238.execute("np-datagrid:subscribe", "gas_stations");
      const _0x283236 = exports["np-objects"].GetObjectsByNamespace("gas_stations");
      _0x283236.forEach(_0x6f28f => {
        const _0x2db9f7 = exports["np-objects"].GetEntityByObjectId(_0x6f28f.id);
        _0x19575f(_0x6f28f.id, _0x2db9f7, _0x6f28f.data.metadata);
      });
    }
    on("np-spawn:characterSpawned", async () => {
      await _0x9dc10b();
    });
    on("np-oilers:hotreload", async () => {
      await _0x9dc10b();
    });
    on("np-config:configLoaded", async _0x47a44d => {
      if (_0x47a44d !== "np-oilers:gasStations") {
        return;
      }
      await _0x9dc10b();
    });
    on("np-objects:objectCreated", (_0x4743cc, _0x3021b4) => {
      if (_0x4743cc.ns !== "gas_stations") {
        return;
      }
      const _0x4be67b = _0x4743cc.data.metadata;
      _0x19575f(_0x4743cc.id, _0x3021b4, _0x4be67b);
      _0x221b69(_0x4743cc.id, _0x3021b4, _0x4be67b);
    });
    on("np-objects:objectDeleted", (_0x421da6, _0x427794) => {
      if (_0x421da6.ns !== "gas_stations") {
        return;
      }
      _0x57e9ea(_0x421da6.id);
      _0x1db564(_0x421da6.id);
    });
    on("np-objects:objectUpdated", (_0x11c6bd, _0x534a77) => {
      if (_0x11c6bd.ns !== "gas_stations") {
        return;
      }
      const _0x417946 = _0x11c6bd.data.metadata;
      _0x19575f(_0x11c6bd.id, _0x534a77, _0x417946);
      _0x221b69(_0x11c6bd.id, _0x534a77, _0x417946);
    });
    ;
    class _0x554a22 {
      constructor(_0x3e8f4d, _0x1221a0, _0x18c97c, _0x15c7bc, _0x5d18cb, _0x5a325a, _0x46200b = 1) {
        this.ped = _0x3e8f4d;
        this.type = _0x1221a0;
        this.flag = _0x46200b;
        this.text = _0x18c97c;
        this.active = false;
        this.duration = _0x15c7bc;
        this.dictionary = _0x5d18cb;
        this.animation = _0x5a325a;
      }
      start(_0x30e57d) {
        if (this.active) {
          return;
        }
        this.active = true;
        if (_0x30e57d) {
          _0x30e57d(this);
        }
        this.tickId = setTick(async () => {
          if (this.animation && !IsEntityPlayingAnim(this.ped, this.dictionary, this.animation, 3)) {
            await _0x2b861b.loadAnim(this.dictionary);
            TaskPlayAnim(this.ped, this.dictionary, this.animation, -8, -8, -1, this.flag, 0, false, false, false);
          } else if (!this.animation && !IsPedUsingScenario(this.ped, this.dictionary)) {
            TaskStartScenarioInPlace(this.ped, this.dictionary, 0, true);
          }
          await Wait(100);
        });
        let _0x338b30;
        if (this.type === "skill" && this.duration instanceof Array) {
          _0x338b30 = new Promise(async _0x285c7b => {
            const _0x55b892 = this.duration;
            for (const _0x560ff4 of _0x55b892) {
              const _0x12a86a = await _0x517630(_0x560ff4.difficulty, _0x560ff4.gap);
              if (_0x12a86a !== 100) {
                return _0x285c7b(0);
              }
            }
            _0x285c7b(100);
          });
        } else if (this.type === "normal" && typeof this.duration === "number") {
          _0x338b30 = _0x354315(this.duration, this.text);
        }
        _0x338b30.then(() => {
          this.stop();
        });
        return _0x338b30;
      }
      stop() {
        if (!this.active) {
          return;
        }
        this.active = false;
        clearTick(this.tickId);
        if (!this.animation && IsPedUsingScenario(this.ped, this.dictionary)) {
          ClearPedTasks(this.ped);
        } else {
          StopAnimTask(this.ped, this.dictionary, this.animation, 3);
        }
      }
      abort() {
        if (this.active) {
          exports["np-taskbar"].taskCancel();
          this.stop();
        }
      }
    }
    ;
    function _0x498bff() {}
    _0x47725d.onNet("np-oilers:stations:billRequest", async (_0x407e1e, _0xa544d3) => {
      const _0x899c71 = await _0x56de13.get("Gas");
      const _0x3b450e = _0xa544d3 + _0xa544d3 * _0x899c71 / 100;
      const _0x362632 = await _0x5a73e6("Gas Station", "$" + _0x4670a8(_0x3b450e) + " tax included.", "gas-pump");
      _0x385238.execute("np-oilers:stations:completeBill", _0x407e1e, _0x362632);
    });
    async function _0x21106d(_0x3215ae, _0x2023f2) {
      const _0x4ef9f9 = NetworkGetNetworkIdFromEntity(_0x2023f2);
      const _0x54d1d9 = await _0x385238.execute("np-oilers:stations:getPurchasedFuel", _0x3215ae, _0x4ef9f9);
      if (typeof _0x54d1d9 === "number") {
        return _0x54d1d9;
      } else {
        return 0;
      }
    }
    ;
    class _0x5b26ad {
      static async tankFuelList(_0x372d19, _0x4817f8) {
        const _0x2cad8e = _0x3f65ef(_0x372d19.station, "tank", "tanks");
        const _0x2399e2 = [];
        for (let _0xc0250a = 0; _0xc0250a < _0x2cad8e; _0xc0250a += 1) {
          const _0x513695 = _0x372d19.fuel[_0xc0250a];
          _0x2399e2.push(await this.tankFuelEntry(_0x372d19, _0x4817f8, _0xc0250a + 1, _0x513695));
        }
        return _0x2399e2;
      }
      static async tankFuelEntry(_0x9671b0, _0x1302cd, _0x5b4406, _0x55865d) {
        const _0x2903f5 = await _0xdb4cbf.get(_0x1302cd.id + ":craft_access", _0x1302cd.id, "craft_access");
        const _0x27ca78 = _0x55865d?.type ? _0x55865d : {
          quantity: 0,
          price: 0,
          type: "empty",
          octane: "N/A",
          grade: "N/A"
        };
        const _0x12d38c = _0x4670a8(_0x3f65ef(_0x9671b0.station, "tank", "capacity"));
        const _0x1fb9b9 = _0x4670a8(_0x27ca78.quantity >= 0 ? _0x27ca78.quantity : 0);
        return {
          title: _L("tank-mgmt-fuel-entry-title", "Fuel Tank | #{0}", _0x5b4406),
          icon: "gas-pump",
          children: [{
            title: _L("tank-mgmt-fuel-readings-title", "Tank Readings"),
            description: _L("tank-mgmt-fuel-readings-dec", "Available: {0}/{1}", _0x1fb9b9, _0x12d38c),
            icon: "info-circle"
          }, {
            title: _L("tank-mgmt-fuel-entry-title", "Fuel Information"),
            description: _L("tank-mgmt-fuel-entry-dec", "Type: {type} | Octane: {octane} | Grade: {grade}", _0x27ca78),
            icon: "gas-pump"
          }, {
            title: _L("tank-mgmt-fuel-entry-title", "Refill Tank"),
            icon: "fill-drip",
            disabled: _0x1fb9b9 === _0x12d38c,
            action: "np-oilers:stations:refillFuelTank",
            key: {
              fuel: _0x27ca78,
              business: _0x1302cd,
              tank: _0x9671b0
            }
          }, {
            title: _L("tank-mgmt-fuel-purge-tank", "Purge Tank"),
            icon: "minus-circle",
            action: "np-oilers:stations:purgeFuelTank",
            disabled: !_0x2903f5 || _0x27ca78.type === "empty",
            key: {
              fuel: _0x27ca78,
              tank: _0x9671b0
            }
          }]
        };
      }
      static pumpFuelList(_0x2470ce, _0x1e15f9, _0x490546, _0x1a3055) {
        const _0x2a6b8f = [];
        const _0x5b60e8 = _0x3f65ef(_0x1e15f9.station, "tank", "tanks");
        for (let _0x2d4294 = 0; _0x2d4294 < _0x5b60e8; _0x2d4294 += 1) {
          const _0x3b727b = _0x490546.fuel[_0x2d4294];
          _0x2a6b8f.push(_0x5b26ad.pumpFuel(_0x2470ce, _0x1e15f9, _0x490546, _0x3b727b, _0x1a3055));
        }
        return _0x2a6b8f;
      }
      static pumpFuel(_0x18258c, _0xd589ce, _0x4eb857, _0x316ff0, _0x1d8813) {
        const _0x3068a5 = _0x316ff0?.type ? _0x316ff0 : {
          quantity: 0,
          price: 0,
          type: "empty",
          octane: "N/A",
          grade: "N/A"
        };
        const _0x2322aa = _0x4670a8(_0x3068a5.price);
        const _0x52b09f = _0x5e26e7(_0xd589ce.station);
        const _0x465ed8 = _0x52b09f ? "Electric" : _0x1cfdc4(_0x3068a5.type);
        return {
          title: _L("tank-mgmt-fuel-entry-title", "{0}", _0x465ed8),
          description: _L("tank-mgmt-fuel-entry-desc", (_0x52b09f ? "Type: Lithium" : "Octane: {0}") + " | Price: ${1}", _0x3068a5.octane, _0x2322aa),
          icon: "gas-pump",
          disabled: _0x3068a5.type === "empty",
          action: "np-oilers:stations:pickUpHose",
          key: {
            id: _0x18258c,
            fuel: _0x3068a5,
            business: _0x1d8813,
            pump: _0xd589ce,
            tank: _0x4eb857
          }
        };
      }
      static async panelTanksList(_0x35c994, _0x26ae38) {
        const _0x107b68 = true;
        const _0x47d8ae = _0x3f65ef(_0x35c994.station, "tank", "tanks");
        const _0x4d4b7d = {
          title: _L("tank-upgrade-list", "Station Tanks"),
          icon: "burn",
          disabled: !_0x107b68,
          children: [{
            title: _L("tank-mgmt-fuel-list-title", "Fuel Tanks"),
            description: _L("tank-mgmt-fuel-list-desc", "List of fuel tanks installed in the station"),
            icon: "info-circle"
          }]
        };
        for (let _0x5d0805 = 0; _0x5d0805 < _0x47d8ae; _0x5d0805 += 1) {
          const _0x56f5e8 = _0x35c994.fuel[_0x5d0805];
          _0x4d4b7d.children.push(await this.panelTankEntry(_0x35c994, _0x5d0805 + 1, _0x56f5e8, _0x26ae38));
        }
        return _0x4d4b7d;
      }
      static async panelTankEntry(_0x69bb3c, _0x5d5c6d, _0x4d92fc, _0x3ba77d) {
        const _0x79284e = await _0xdb4cbf.get(_0x3ba77d.id + ":craft_access", _0x3ba77d.id, "craft_access");
        const _0x527dc2 = _0x4d92fc?.type ? _0x4d92fc : {
          quantity: 0,
          price: 0,
          type: "empty",
          octane: "N/A",
          grade: "N/A"
        };
        const _0xab3691 = _0x4670a8(_0x527dc2.price);
        const _0x23c13e = _0x4670a8(_0x3f65ef(_0x69bb3c.station, "tank", "capacity"));
        const _0x4c7109 = _0x4670a8(_0x527dc2.quantity >= 0 ? _0x527dc2.quantity : 0);
        return {
          title: _L("tank-mgmt-fuel-entry-title", "Fuel Tank | #{0}", _0x5d5c6d),
          icon: "gas-pump",
          children: [{
            title: _L("tank-mgmt-fuel-readings-title", "Tank Readings"),
            description: _L("tank-mgmt-fuel-readings-dec", "Price: ${0} | Available: {1}/{2}", _0xab3691, _0x4c7109, _0x23c13e),
            icon: "info-circle"
          }, {
            title: _L("tank-mgmt-fuel-entry-title", "Fuel Information"),
            description: _L("tank-mgmt-fuel-entry-dec", "Type: {type} | Octane: {octane} | Grade: {grade}", _0x527dc2),
            icon: "gas-pump"
          }, {
            title: _L("tank-mgmt-fuel-change-price", "Change Fuel Price"),
            icon: "money-check-alt",
            action: "np-oilers:stations:changeFuelPrice",
            disabled: !_0x79284e || _0x527dc2.type === "empty",
            key: {
              fuel: _0x527dc2,
              business: _0x3ba77d,
              tank: _0x69bb3c
            }
          }]
        };
      }
      static async panelPumpsList(_0x4da7a1, _0x26e670) {
        const _0x3c8420 = true;
        const _0x4ccf25 = {
          title: _L("panel-pump-list", "Station Pumps"),
          icon: "gas-pump",
          disabled: !_0x3c8420,
          children: [{
            title: _L("panel-pump-list-title", "Fuel Pumps"),
            description: _L("panel-pump-list-desc", "List of fuel pumps installed in the station"),
            icon: "info-circle"
          }]
        };
        for (let _0x61bbf4 = 0; _0x61bbf4 < _0x4da7a1.length; _0x61bbf4 += 1) {
          const _0x37b492 = _0x4da7a1[_0x61bbf4];
          const _0x3450ac = _0x13954c(_0x37b492);
          _0x4ccf25.children.push(await this.panelPumpEntry(_0x3450ac, _0x37b492, _0x61bbf4 + 1, _0x26e670));
        }
        return _0x4ccf25;
      }
      static async panelPumpEntry(_0x5201a5, _0x279f70, _0x2beb61, _0x135692) {
        const _0x3b917c = await _0xdb4cbf.get(_0x135692.id + ":craft_access", _0x135692.id, "craft_access");
        return {
          title: _L("tank-mgmt-fuel-entry-title", "Fuel Pump | #{0}", _0x2beb61),
          icon: "gas-pump",
          children: [{
            title: _L("panel-pump-info-title", "Pump Information"),
            description: _L("panel-pump-info-dec", "Access: {0} | Condition: {1}", _0x279f70.access, _0x279f70.health > 0 ? "Good" : "Bad"),
            icon: "info-circle"
          }, {
            title: _L("panel-pump-change-access", "Change Access"),
            icon: "lock",
            disabled: !_0x3b917c,
            children: [{
              title: _L("panel-pump-change-access-public", "Public Access"),
              icon: "lock-open",
              key: {
                id: _0x5201a5,
                station: _0x279f70.station,
                access: "public"
              },
              action: "np-oilers:stations:setPumpAccess"
            }, {
              title: _L("panel-pump-change-access-employee", "Restricted Access"),
              icon: "lock",
              key: {
                id: _0x5201a5,
                station: _0x279f70.station,
                access: "employee"
              },
              action: "np-oilers:stations:setPumpAccess"
            }]
          }]
        };
      }
      static panelUpgradeList(_0x4447a7) {
        const _0x429ce9 = _0x40bc7a(_0x4447a7);
        const _0x422be8 = {
          title: _L("tank-upgrade-list", "Station Upgrades"),
          icon: "plus-circle",
          children: [{
            title: _L("panel-upgrade-list-title", "Station Upgrades"),
            description: _L("panel-upgrade-list-desc", "List of currently installed upgrades"),
            icon: "info-circle"
          }]
        };
        _0x422be8.children.push(this.panelTankUpgradeStatus(_0x4447a7, _0x429ce9));
        _0x422be8.children.push(this.panelPumpUpgradeStatus(_0x4447a7, _0x429ce9));
        return _0x422be8;
      }
      static panelTankUpgradeStatus(_0x5309d8, _0xba1300) {
        const _0x312824 = {
          tier: _0xba1300.tank.tanks,
          value: _0x4670a8(_0x37d935("tank", "tanks", _0xba1300))
        };
        const _0x50f366 = {
          tier: _0xba1300.tank.capacity,
          value: _0x4670a8(_0x37d935("tank", "capacity", _0xba1300))
        };
        const _0xb8f9bf = {
          title: _L("tank-upgrade-status-titlte", "Tank Upgrades"),
          icon: "burn",
          children: [{
            title: _L("tank-upgrade-installed-titlte", "Installed Tanks"),
            description: _L("tank-upgrade-status-desc", "Tier: {0} | Installed: {1} unit/s", _0x312824.tier, _0x312824.value),
            icon: "plus-circle",
            children: []
          }, {
            title: _L("tank-upgrade-capacity-titlte", "Tank Capacity"),
            description: _L("tank-upgrade-status-desc", "Tier: {0} | Capacity: {1} gallons", _0x50f366.tier, _0x50f366.value),
            icon: "plus-circle",
            children: []
          }]
        };
        return _0xb8f9bf;
      }
      static panelPumpUpgradeStatus(_0x342421, _0x4b35f1) {
        const _0x6fc672 = {
          tier: _0x4b35f1.pump.safety,
          value: _0x4670a8(_0x37d935("pump", "safety", _0x4b35f1))
        };
        const _0x224012 = {
          tier: _0x4b35f1.pump.speed,
          value: _0x4670a8(_0x37d935("pump", "speed", _0x4b35f1))
        };
        const _0x2e6c87 = {
          title: _L("pump-upgrade-status-titlte", "Pump Upgrades"),
          icon: "gas-pump",
          children: [{
            title: _L("pump-upgrade-installed-titlte", "Safety Features"),
            description: _L("pump-upgrade-status-desc", "Tier: {0} | Features: {1}", _0x6fc672.tier, _0x6fc672.value),
            icon: "plus-circle",
            children: []
          }, {
            title: _L("pump-upgrade-capacity-titlte", "Pump Speed"),
            description: _L("pump-upgrade-status-desc", "Tier: {0} | Speed: {1}x", _0x224012.tier, _0x224012.value),
            icon: "plus-circle",
            children: []
          }]
        };
        return _0x2e6c87;
      }
    }
    class _0xae83c9 {
      static async management(_0x1823a0, _0x2558ef) {
        const _0x11a87 = [{
          title: _L("tank-mgmt-fuel-list-title", "Fuel Tanks"),
          description: _L("tank-mgmt-fuel-list-desc", "List of fuel tanks installed in the station"),
          icon: "info-circle"
        }];
        _0x11a87.push(...(await _0x5b26ad.tankFuelList(_0x1823a0, _0x2558ef)));
        return _0x11a87;
      }
    }
    class _0x3c9477 {
      static async usePump(_0x7fddcb, _0x35e642, _0x367d68, _0x1f10a3) {
        const _0x267706 = await _0x3f4191.get(_0x1f10a3.id);
        const _0x1bbaf3 = _0x35e642.access === "employee";
        const _0x3d57c7 = _0x5e26e7(_0x35e642.station);
        const _0xcb16ac = [{
          title: _L("pump-use-title", _0x3d57c7 ? "Charge Station" : "Gas Pump"),
          description: _L("pump-use--desc", "Select the kind of " + (_0x3d57c7 ? "charge" : "fuel") + " you want to use"),
          icon: "info-circle"
        }];
        if (_0x1bbaf3 && !_0x267706) {
          return [{
            title: _L("pump-use-unauthorized-title", "Unauthorized Access"),
            description: _L("pump-use-unauthorized-desc", "This Pump can only be operated by employees."),
            icon: "ban"
          }];
        }
        _0xcb16ac.push(..._0x5b26ad.pumpFuelList(_0x7fddcb, _0x35e642, _0x367d68, _0x1f10a3));
        return _0xcb16ac;
      }
      static async refuelVehicle(_0x11a792, _0x52a4f4, _0x9e1a86, _0x472594, _0xb8c3e4, _0x8ab424) {
        const _0x3fb0dc = _0x5e26e7(_0x52a4f4.station);
        const _0x25926f = [{
          title: _L("pump-hoze-refuel-title", (_0x3fb0dc ? "Charge" : "Refuel") + " Vehicle"),
          icon: "info-circle",
          description: _L("pump-hoze-refuel-desc", (_0x3fb0dc ? "Amount: {0}%" : "Fuel Amount: {0}") + " | Total Cost: ${1}", _0x9e1a86, _0x472594)
        }, {
          title: _L("pump-hoze-refuel-start", "Start " + (_0x3fb0dc ? "Charging" : "Refueling")),
          icon: _0x3fb0dc ? "charging-station" : "gas-pump",
          action: "np-oilers:stations:refuelVehicle",
          disabled: _0xb8c3e4 <= 0,
          key: {
            pumpId: _0x8ab424,
            vehicle: _0x11a792,
            pump: _0x52a4f4,
            amount: _0x9e1a86,
            purchased: _0xb8c3e4
          }
        }, {
          title: _L("pump-hoze-refuel-send-bill-title", "Pay By Bank"),
          icon: "credit-card",
          action: "np-oilers:stations:sendRefuelBill",
          key: {
            pumpId: _0x8ab424,
            vehicle: _0x11a792,
            pump: _0x52a4f4,
            amount: _0x9e1a86,
            type: "bank"
          }
        }, {
          title: _L("pump-hoze-refuel-send-bill-title", "Pay By Cash"),
          icon: "money-bill",
          action: "np-oilers:stations:sendRefuelBill",
          key: {
            pumpId: _0x8ab424,
            vehicle: _0x11a792,
            pump: _0x52a4f4,
            amount: _0x9e1a86,
            type: "cash"
          }
        }, {
          title: _L("pump-hoze-refuel-self-serve", "Self Serve"),
          icon: "portrait",
          action: "np-oilers:stations:selfServe",
          disabled: _0xb8c3e4 > 0,
          key: {
            pumpId: _0x8ab424,
            vehicle: _0x11a792,
            pump: _0x52a4f4,
            amount: _0x9e1a86,
            type: "bank"
          }
        }];
        return _0x25926f;
      }
    }
    class _0x2b1da5 {
      static async usePanel(_0xbdae70, _0x35b3a7, _0x1a9979) {
        const _0x166b6a = await _0x3f4191.get(_0x1a9979.id);
        const _0x1b4cb2 = [{
          title: _L("station-mgmt-title", "Gas Station Management"),
          description: _L("station-mgmt-desc", "Business: {0}", _0x1a9979.name),
          icon: "info-circle"
        }];
        if (!_0x166b6a) {
          return [{
            title: _L("pump-use-unauthorized-title", "Unauthorized Access"),
            description: _L("pump-use-unauthorized-desc", "This Panel can only be accessed by employees."),
            icon: "ban"
          }];
        }
        _0x1b4cb2.push(await _0x5b26ad.panelTanksList(_0xbdae70, _0x1a9979));
        _0x1b4cb2.push(await _0x5b26ad.panelPumpsList(_0x35b3a7, _0x1a9979));
        _0x1b4cb2.push(await _0x5b26ad.panelUpgradeList(_0xbdae70.station));
        return _0x1b4cb2;
      }
    }
    const _0x1a1e70 = {
      Pump: _0x3c9477,
      Tank: _0xae83c9,
      Panel: _0x2b1da5
    };
    const _0x3e1988 = _0x1a1e70;
    ;
    let _0x485d4c;
    let _0x1e2e45;
    let _0x43251d;
    let _0x8461d8;
    let _0xb65ae6;
    let _0x523243;
    let _0x5751cd;
    function _0x420a07() {}
    on("np-oilers:stations:showPumpMenu", async (_0x7b2f24, _0x55dd37, _0x3ec6d7) => {
      const _0x374d68 = _0x3ec6d7?.meta;
      if (_0x374d68 === undefined) {
        return;
      }
      const _0x527a99 = _0x374d68.data.metadata;
      const _0x5ee90c = await _0x149f05.get(_0x527a99.station);
      const _0x399452 = _0x4a8dec(_0x527a99.station, "tank");
      if (_0xc4c650("infiniteGasStationFuel") || _0x5e26e7(_0x527a99.station)) {
        _0x399452.forEach(_0x47b9d6 => _0x47b9d6.fuel.forEach(_0x59f77e => _0x59f77e.quantity = 10000));
      }
      const _0x237ccc = await _0x3e1988.Pump.usePump(_0x374d68.id, _0x527a99, _0x399452[0], _0x5ee90c);
      exports["np-ui"].showContextMenu(_0x237ccc);
    });
    RegisterUICallback("np-oilers:stations:pickUpHose", async (_0x27c18c, _0xc12e20) => {
      _0xc12e20({
        data: {},
        meta: {
          ok: true,
          message: ""
        }
      });
      const _0x593a4f = _0x27c18c.key.id;
      const _0x257eb4 = _0x1c1564(_0x593a4f);
      const _0x16ef59 = _0x27c18c.key.fuel;
      const _0x151144 = _0x27c18c.key.pump;
      const _0x42fc6f = GetEntityCoords(_0x257eb4, false);
      if (_0x5751cd) {
        return;
      }
      _0x5751cd = true;
      _0x1e2e45 = _0x151144;
      _0x8461d8 = _0x257eb4;
      _0x43251d = _0x593a4f;
      _0xb65ae6 = _0x16ef59;
      if (_0x523243 && DoesEntityExist(_0x523243)) {
        DeleteEntity(_0x523243);
      }
      const _0x2ed212 = _0x5e26e7(_0x151144.station);
      const _0x3ae558 = GetHashKey(_0x2ed212 ? "np_prop_echarger_handle" : "prop_cs_fuel_nozle");
      await _0x2b861b.loadModel(_0x3ae558);
      const [_0x439d02, _0x1c3e54, _0x1676c2] = GetEntityCoords(PlayerPedId(), false);
      const _0x346c48 = PlayerPedId();
      const _0x30c129 = GetPedBoneIndex(_0x346c48, 57005);
      const _0x57546 = CreateObject(_0x3ae558, _0x439d02, _0x1c3e54, _0x1676c2, true, false, false);
      _0x523243 = _0x57546;
      if (_0x2ed212) {
        AttachEntityToEntity(_0x57546, _0x346c48, _0x30c129, 0.199, 0.009, -0.014, -85.77, 17.73, 0.166, true, true, false, true, 5, true);
      } else {
        AttachEntityToEntity(_0x57546, _0x346c48, _0x30c129, 0.09, 0.05, -0.01, -93, -84, 1, true, true, false, true, 0, true);
      }
      const _0x5015cc = setTick(async () => {
        const _0x7cbc0a = GetEntityCoords(PlayerPedId(), false);
        const _0x6ea7c7 = _0x400f90.getDistance(_0x7cbc0a, _0x42fc6f);
        if (_0x6ea7c7 > 8) {
          emit("np-oilers:stations:returnHose");
        }
        if (!_0x5751cd) {
          clearTick(_0x5015cc);
        }
      });
    });
    on("np-oilers:stations:returnHose", (_0x470bb3, _0x58216d, _0x2610b5) => {
      _0x5751cd = false;
      DeleteEntity(_0x523243);
      _0x523243 = undefined;
      _0x1e2e45 = undefined;
      _0xb65ae6 = undefined;
      _0x43251d = undefined;
    });
    on("np-oilers:stations:showRefuelMenu", async (_0x241039, _0x7d6fcb, _0x14bc2c) => {
      const _0x2441ca = 100;
      const _0x35d6bb = exports["np-vehicles"].GetVehicleFuel(_0x7d6fcb);
      const _0x5ab813 = await _0x21106d(_0x1e2e45.station, _0x7d6fcb);
      const _0xeabc7b = _0xb65ae6.quantity > 0 ? _0xb65ae6.quantity : 0;
      const _0xd55f5b = +(_0x2441ca - _0x35d6bb).toFixed(0);
      const _0x30ba9b = Math.round(_0xd55f5b > _0xeabc7b ? _0xeabc7b : _0xd55f5b > 0 ? _0xd55f5b : 0);
      const _0x4a36eb = await _0x56de13.get("Gas");
      const _0x344b77 = +(_0xb65ae6.price * _0x30ba9b + _0xb65ae6.price * _0x30ba9b * _0x4a36eb / 100).toFixed(0);
      const _0x8ad11a = await _0x3e1988.Pump.refuelVehicle(_0x7d6fcb, _0x1e2e45, _0xd55f5b, _0x344b77, _0x5ab813, _0x43251d);
      exports["np-ui"].showContextMenu(_0x8ad11a);
    });
    RegisterUICallback("np-oilers:stations:sendRefuelBill", async (_0x4bcd68, _0x461f98) => {
      _0x461f98({
        data: {},
        meta: {
          ok: true,
          message: ""
        }
      });
      const _0xebc5d = _0x4bcd68.key;
      const _0xca2376 = _0xebc5d.pump;
      const _0x3542f7 = _0xb65ae6;
      const _0x2e80c8 = _0xebc5d.vehicle;
      const _0x15f695 = _0xebc5d.amount;
      const _0x5083fc = _0xebc5d.type;
      const _0x43945e = NetworkGetNetworkIdFromEntity(_0x2e80c8);
      await _0xd0681b(500);
      if (_0x5083fc === "bank") {
        const _0x17cdaf = await _0x214e83([{
          name: "stateId",
          label: "State ID",
          icon: "id-card"
        }], _0x42c626 => {
          if (!_0x42c626.stateId || _0x42c626.stateId.length === 0) {
            return false;
          }
          _0x42c626.stateId = Number(_0x42c626?.stateId);
          return !isNaN(_0x42c626?.stateId);
        });
        const _0x312fcf = _0x17cdaf?.stateId;
        if (!_0x312fcf) {
          return emit("DoLongHudText", "Invalid State ID", 2);
        }
        _0x385238.execute("np-oilers:stations:sendBill", _0xca2376.station, _0x3542f7.id, _0x312fcf, _0x15f695, _0x43945e, "bank");
      }
      if (_0x5083fc === "cash") {
        const _0x5d1f64 = exports.isPed.isPed("cid");
        _0x385238.execute("np-oilers:stations:sendBill", _0xca2376.station, _0x3542f7.id, _0x5d1f64, _0x15f695, _0x43945e, "cash");
      }
    });
    RegisterUICallback("np-oilers:stations:selfServe", async (_0x1905c3, _0x375cd1) => {
      _0x375cd1({
        data: {},
        meta: {
          ok: true,
          message: ""
        }
      });
      const _0x2c2278 = _0x1905c3.key;
      const _0x41af5a = _0x2c2278.pump;
      const _0x3fed0b = _0xb65ae6;
      const _0x2bf592 = _0x2c2278.pumpId;
      const _0x59b408 = _0x2c2278.vehicle;
      const _0x17fc42 = _0x2c2278.amount;
      const _0x217ea4 = _0x2c2278.type;
      const _0x45502d = NetworkGetNetworkIdFromEntity(_0x59b408);
      if (_0x395341(_0x2bf592)) {
        emit("DoLongHudText", "Pump seems to be damaged, contact gas station worker", 2);
        return;
      }
      const _0x57e96c = exports.isPed.isPed("cid");
      const _0x3a2f89 = await _0x385238.execute("np-oilers:stations:sendBill", _0x41af5a.station, _0x3fed0b.id, _0x57e96c, _0x17fc42, _0x45502d, _0x217ea4, true);
      if (_0x217ea4 === "bank") {
        await _0x385238.execute("np-oilers:stations:completeBill", _0x3a2f89, true);
      }
      await _0xd0681b(137);
      emit("np-oilers:stations:showRefuelMenu", null, _0x59b408);
    });
    RegisterUICallback("np-oilers:stations:refuelVehicle", async (_0xd89899, _0x4baa9e) => {
      _0x4baa9e({
        data: {},
        meta: {
          ok: true,
          message: ""
        }
      });
      const _0x4534fe = _0xd89899.key;
      const _0x1a3376 = _0x4534fe.pump;
      const _0x8121e2 = _0x4534fe.vehicle;
      const _0xde3415 = _0x4534fe.amount;
      const _0x22d666 = _0x4534fe.purchased;
      const _0x340d7b = _0x4534fe.pumpId;
      if (_0x395341(_0x340d7b)) {
        emit("DoLongHudText", "Pump seems to be damaged, contact gas station worker", 2);
        return;
      }
      const _0x3f972e = await _0x22b866.get(_0x8121e2);
      if (!_0x8121e2) {
        return;
      }
      const _0x2a9a1a = NetworkGetNetworkIdFromEntity(_0x8121e2);
      const _0x39d209 = _0x22d666 * 500;
      const _0x9e84f0 = _0x22d666 >= 80 ? 2 : 1;
      const _0x46e83e = _0x39d209 * _0x9e84f0;
      const _0x55a007 = _0x46e83e * 2;
      const _0x2c1db7 = new _0x554a22(PlayerPedId(), "normal", (_0x3f972e ? "Charging" : "Refueling") + " Vehicle", _0x3f972e ? _0x55a007 : _0x46e83e, "anim@heists@keycard@", "idle_a");
      _0x485d4c = true;
      const _0x850b2f = await _0x2c1db7.start(_0x5db753 => {
        const _0x246b38 = setInterval(() => {
          if (!_0x5db753.active) {
            clearInterval(_0x246b38);
          }
          if (IsVehicleEngineOn(_0x8121e2) && _0x400f90.getRandomNumber(100) > 98) {
            exports["np-sync"].SyncedExecution("NetworkExplodeVehicle", _0x8121e2, 1, 0, 0);
            _0x5db753.abort();
          }
        }, 2000);
      });
      _0x485d4c = false;
      const _0x315b39 = _0x850b2f * _0xde3415 / 100;
      await _0x385238.execute("np-oilers:stations:completeRefueling", _0x1a3376.station, _0x2a9a1a, _0x315b39, _0x340d7b);
    });
    RegisterUICallback("np-oilers:stations:setPumpAccess", async (_0x26539d, _0x1d5152) => {
      _0x1d5152({
        data: {},
        meta: {
          ok: true,
          message: ""
        }
      });
      const _0x207649 = _0x26539d.key;
      const _0x7223cf = _0x207649.id;
      const _0x2b8398 = _0x207649.access;
      const _0x4ae5b1 = _0x207649.station;
      const _0x346e42 = await _0x385238.execute("np-oilers:stations:setPumpAccess", _0x4ae5b1, _0x7223cf, _0x2b8398);
      emit("DoLongHudText", _0x346e42 ? "Pump Access Updated" : "Failed to Update Pump Access", _0x346e42 ? 1 : 2);
    });
    on("onResourceStop", _0x356bac => {
      if (_0x356bac !== GetCurrentResourceName()) {
        return;
      }
      DeleteEntity(_0x523243);
    });
    ;
    let _0x28c57d;
    let _0x333f86 = false;
    let _0x427800;
    let _0x32f8b4;
    let _0x18e889;
    function _0x2241b0() {}
    on("np-oilers:stations:pickUpTankerHose", async (_0x1d0834, _0x541c1c, _0x1f3ea5) => {
      const _0x5bb75a = _0x1f3ea5.meta.oil;
      if (_0x333f86) {
        return;
      }
      _0x333f86 = true;
      _0x427800 = _0x541c1c;
      _0x32f8b4 = _0x5bb75a;
      if (_0x18e889 && DoesEntityExist(_0x18e889)) {
        DeleteEntity(_0x18e889);
      }
      const _0x386dee = GetHashKey("prop_hose_nozzle");
      await _0x2b861b.loadModel(_0x386dee);
      const [_0x1ae127, _0x909678, _0x3d0c14] = GetEntityCoords(PlayerPedId(), false);
      const _0x46c5cb = PlayerPedId();
      const _0xac3c71 = GetPedBoneIndex(_0x46c5cb, 57005);
      const _0x552c11 = CreateObject(_0x386dee, _0x1ae127, _0x909678, _0x3d0c14, true, false, false);
      _0x18e889 = _0x552c11;
      AttachEntityToEntity(_0x552c11, _0x46c5cb, _0xac3c71, 0.09, 0.05, -0.01, -93, -84, 1, true, true, false, true, 0, true);
      const _0x231eaf = setTick(async () => {
        const _0x161506 = GetEntityCoords(_0x541c1c, false);
        const _0x1c2209 = GetEntityCoords(PlayerPedId(), false);
        const _0x517bca = _0x400f90.getDistance(_0x1c2209, _0x161506);
        if (_0x517bca > 20) {
          emit("np-oilers:stations:returnTankerHose");
        }
        if (!_0x333f86) {
          clearTick(_0x231eaf);
        }
      });
    });
    on("np-oilers:stations:returnTankerHose", (_0x1b91c8, _0x46f9d8, _0x1bb331) => {
      _0x333f86 = false;
      DeleteEntity(_0x18e889);
      _0x18e889 = undefined;
      _0x427800 = undefined;
      _0x32f8b4 = undefined;
    });
    on("onResourceStop", _0x5e4ea8 => {
      if (_0x5e4ea8 !== GetCurrentResourceName()) {
        return;
      }
      DeleteEntity(_0x18e889);
    });
    ;
    const _0xcb1003 = {
      distance: {
        radius: 2.5
      },
      isEnabled: () => true
    };
    const _0x319a9c = {
      type: "polytarget",
      group: ["gas_station_tank"],
      data: [{
        id: "oilers:stations:tankMenu",
        label: "Manage gas tank",
        icon: "gas-pump",
        event: "np-oilers:stations:showTankMenu",
        parameters: {}
      }],
      options: _0xcb1003
    };
    const _0x47132e = [_0x319a9c, {
      type: "entity",
      group: [3],
      data: [{
        id: "oilers:stations:pumpMenu",
        label: "Use gas pump",
        icon: "gas-pump",
        event: "np-oilers:stations:showPumpMenu",
        parameters: {}
      }],
      options: {
        distance: {
          radius: 1.5
        },
        ns: "gas_stations",
        meta: {
          type: "pump"
        },
        isEnabled: (_0x571ae5, _0x2ec989) => {
          const _0x162cc4 = _0x5e26e7(_0x2ec989.meta?.data?.metadata?.station);
          return !_0x5751cd && !_0x485d4c && !_0x162cc4;
        }
      }
    }, {
      type: "entity",
      group: [3],
      data: [{
        id: "oilers:stations:pumpMenu:charge",
        label: "Use charge station",
        icon: "charging-station",
        event: "np-oilers:stations:showPumpMenu",
        parameters: {}
      }],
      options: {
        distance: {
          radius: 1.5
        },
        ns: "gas_stations",
        meta: {
          type: "pump"
        },
        isEnabled: (_0x5e32b8, _0x4b433c) => {
          const _0xdec250 = _0x5e26e7(_0x4b433c.meta?.data?.metadata?.station);
          return !_0x5751cd && !_0x485d4c && _0xdec250;
        }
      }
    }, {
      type: "entity",
      group: [3],
      data: [{
        id: "oilers:stations:repairMenu",
        label: "Repair Pump",
        icon: "wrench",
        NPXEvent: "np-oilers:stations:repairMenu",
        parameters: {}
      }],
      options: {
        distance: {
          radius: 1.5
        },
        ns: "gas_stations",
        meta: {
          type: "pump"
        },
        isEnabled: async (_0x503ac7, _0xa09611) => {
          const _0x3b7344 = await _0x1e7bad.g.exports["np-business"].IsEmployedAt("ron_oil");
          return _0x3b7344;
        }
      }
    }, {
      type: "entity",
      group: [3],
      data: [{
        id: "oilers:stations:returnHose",
        label: "Return Hose",
        icon: "hand-holding",
        event: "np-oilers:stations:returnHose",
        parameters: {}
      }],
      options: {
        distance: {
          radius: 1.5
        },
        ns: "gas_stations",
        meta: {
          type: "pump"
        },
        isEnabled: (_0x1249d3, _0x228b53) => {
          return _0x5751cd && !_0x485d4c && _0x8461d8 === _0x1249d3;
        }
      }
    }, {
      type: "entity",
      group: [2],
      data: [{
        id: "vehicle_refuel_pump",
        label: "Refuel Vehicle",
        icon: "gas-pump",
        event: "np-oilers:stations:showRefuelMenu",
        parameters: {}
      }],
      options: {
        isEnabled: async _0x48b6e7 => {
          const _0x55a62b = await _0x22b866.get(_0x48b6e7);
          return _0x5751cd && !_0x485d4c && !_0x55a62b && !_0x5e26e7(_0x1e2e45.station);
        }
      }
    }, {
      type: "entity",
      group: [2],
      data: [{
        id: "vehicle_charge_pump",
        label: "Charge Vehicle",
        icon: "charging-station",
        event: "np-oilers:stations:showRefuelMenu",
        parameters: {}
      }],
      options: {
        isEnabled: async _0x440d8c => {
          const _0x37627e = await _0x22b866.get(_0x440d8c);
          return _0x5751cd && !_0x485d4c && _0x37627e && _0x5e26e7(_0x1e2e45.station);
        }
      }
    }, {
      type: "entity",
      group: [3],
      data: [{
        id: "oilers:stations:pumpManagementMenu",
        label: "manage gas station",
        icon: "tablet-alt",
        event: "np-oilers:stations:showManagementMenu",
        parameters: {}
      }],
      options: {
        distance: {
          radius: 1.5
        },
        ns: "gas_stations",
        meta: {
          type: "panel"
        }
      }
    }, {
      type: "model",
      group: [-1320147046],
      data: [{
        id: "oilers:stations:pickUpTankerHose",
        label: "tanker hose",
        icon: "burn",
        event: "np-oilers:stations:pickUpTankerHose",
        parameters: {}
      }],
      options: {
        distance: {
          radius: 8
        },
        isEnabled: (_0x5f9080, _0x4a1631) => {
          return _0x4a1631?.meta?.oil !== undefined && !_0x333f86 && !_0x28c57d;
        }
      }
    }, {
      type: "model",
      group: [-1320147046],
      data: [{
        id: "oilers:stations:returnTankerHose",
        label: "Return Hose",
        icon: "hand-holding",
        event: "np-oilers:stations:returnTankerHose",
        parameters: {}
      }],
      options: {
        distance: {
          radius: 8
        },
        isEnabled: (_0x36e9d9, _0x1d5549) => {
          return _0x333f86 && !_0x485d4c && _0x427800 === _0x36e9d9;
        }
      }
    }];
    async function _0x1a565d() {
      _0x47132e.forEach(_0x56cfa6 => {
        if (_0x56cfa6.type === "entity") {
          exports["np-interact"].AddPeekEntryByEntityType(_0x56cfa6.group, _0x56cfa6.data, _0x56cfa6.options);
        } else if (_0x56cfa6.type === "polytarget") {
          exports["np-interact"].AddPeekEntryByPolyTarget(_0x56cfa6.group, _0x56cfa6.data, _0x56cfa6.options);
        } else if (_0x56cfa6.type === "model") {
          exports["np-interact"].AddPeekEntryByModel(_0x56cfa6.group, _0x56cfa6.data, _0x56cfa6.options);
        }
      });
    }
    ;
    function _0x2d7525() {}
    on("np-oilers:stations:showTankMenu", async (_0x1039aa, _0x1818ed, _0xa07d40) => {
      const _0x35dab0 = _0xa07d40?.zones?.gas_station_tank;
      if (_0x35dab0?.id === undefined) {
        return;
      }
      const _0x1742b4 = _0x4bc4c2(_0x35dab0.id);
      const _0x37f4d6 = await _0x149f05.get(_0x1742b4.station);
      const _0x41ac88 = await _0x3e1988.Tank.management(_0x1742b4, _0x37f4d6);
      exports["np-ui"].showContextMenu(_0x41ac88);
    });
    RegisterUICallback("np-oilers:stations:changeFuelPrice", async (_0x5c6699, _0x30d325) => {
      _0x30d325({
        data: {},
        meta: {
          ok: true,
          message: ""
        }
      });
      await _0xd0681b(500);
      const _0x363c0d = _0x5c6699.key.fuel;
      const _0x2c2b05 = _0x5c6699.key.tank;
      const _0x5abaab = _0x5c6699.key.business;
      const _0x46ca68 = await _0xdb4cbf.get(_0x5abaab.id + ":craft_access", _0x5abaab.id, "craft_access");
      if (!_0x46ca68) {
        return emit("DoLongHudText", "fuel-pump-no-permission", 2);
      }
      await Wait(500);
      const _0x3bc64a = await _0x214e83([{
        name: "price",
        label: "Fuel Price",
        icon: "dollar-sign"
      }], _0x5d100e => {
        if (!_0x5d100e.price || _0x5d100e.price.length === 0) {
          return false;
        }
        _0x5d100e.price = Number(_0x5d100e?.price);
        return !isNaN(_0x5d100e?.price);
      });
      const _0x435764 = _0x3bc64a?.price;
      if (!_0x435764) {
        return emit("DoLongHudText", "fuel-pump-invalid-price", 2);
      }
      const [_0x510e57, _0x2cf404] = await _0x385238.execute("np-oilers:stations:changeFuelPrice", _0x2c2b05.station, _0x363c0d.id, _0x435764);
      emit("DoLongHudText", _0x2cf404, _0x510e57 ? 1 : 2);
    });
    RegisterUICallback("np-oilers:stations:purgeFuelTank", async (_0x146aa2, _0x1c1682) => {
      _0x1c1682({
        data: {},
        meta: {
          ok: true,
          message: ""
        }
      });
      const _0x2dd8f8 = _0x146aa2.key.tank;
      const _0x432c6d = _0x146aa2.key.fuel;
      const _0x8535b8 = new _0x554a22(PlayerPedId(), "normal", "Purging Fuel Tank", 10000, "mp_car_bomb", "car_bomb_mechanic", 17);
      const _0x1a4aa5 = await _0x8535b8.start();
      if (_0x1a4aa5 !== 100) {
        return;
      }
      const [_0x578d1b, _0x204802] = await _0x385238.execute("np-oilers:stations:purgeTank", _0x2dd8f8.station, _0x432c6d.id);
      emit("DoLongHudText", _0x204802, _0x578d1b ? 1 : 2);
    });
    RegisterUICallback("np-oilers:stations:refillFuelTank", async (_0x3835e8, _0x409f5f) => {
      _0x409f5f({
        data: {},
        meta: {
          ok: true,
          message: ""
        }
      });
      const _0x8910d = _0x3835e8.key.fuel;
      const _0x2fd680 = _0x3835e8.key.tank;
      const _0x238e68 = _0x8910d.id;
      let _0x464dcd;
      let _0x23065f;
      if (_0x333f86) {
        const _0x135706 = NetworkGetNetworkIdFromEntity(_0x427800);
        _0x464dcd = _0x32f8b4;
        if (_0x464dcd?.type === undefined) {
          return emit("DoLongHudText", "The tanker must contain enough fuel", 2);
        }
        _0x23065f = _0x3cc3bc => {
          _0x464dcd.quantity -= _0x3cc3bc;
          _0x385238.execute("np-oilers:stations:updateTankerFuel", _0x135706, _0x464dcd);
        };
      } else {
        const _0xed237 = exports["inventory"].getItemsOfType("barrel_fuel", 1, true);
        const _0x59c9fb = _0xed237[0];
        _0x464dcd = _0x59c9fb ? JSON.parse(_0x59c9fb.information) : undefined;
        if (_0xed237.length === 0 || _0x464dcd?.type === undefined || _0x464dcd?.quantity <= 0) {
          return emit("DoLongHudText", "You need a barrel with enough fuel", 2);
        }
        _0x23065f = _0x17c83f => {
          _0x464dcd.quantity -= _0x17c83f;
          emit("inventory:updateItem", "barrel_fuel", _0x59c9fb.slot, JSON.stringify(_0x464dcd));
        };
      }
      if (_0x8910d.type !== "empty" && (_0x8910d.type !== _0x464dcd.type || _0x8910d.octane !== _0x464dcd.octane || _0x8910d.grade !== _0x464dcd.grade)) {
        return emit("DoLongHudText", "Cannot mix and match different fuels", 2);
      }
      const _0x8f7f70 = {
        type: _0x464dcd.type,
        octane: _0x464dcd.octane,
        grade: _0x464dcd.grade
      };
      const _0x5e151e = _0x8f7f70;
      const _0x4d38da = _0x3f65ef(_0x2fd680.station, "tank", "capacity");
      const _0x12f8eb = _0x8910d.quantity;
      const _0x24b6bd = _0x464dcd.quantity + _0x12f8eb > _0x4d38da ? _0x4d38da - _0x12f8eb : _0x464dcd.quantity;
      const _0x4e870a = _0x24b6bd * 50;
      const _0x3df1f0 = new _0x554a22(PlayerPedId(), "normal", "Refilling Fuel Tank", _0x4e870a, "anim@heists@keycard@", "idle_a");
      const _0x1131f6 = await _0x3df1f0.start();
      const _0x4f7c3a = _0x24b6bd * _0x1131f6 / 100;
      const [_0x46f1c3, _0x5292a4] = await _0x385238.execute("np-oilers:stations:refillTank", _0x2fd680.station, _0x238e68, _0x5e151e, _0x4f7c3a);
      if (_0x46f1c3) {
        _0x23065f(_0x4f7c3a);
      }
      emit("DoLongHudText", _0x5292a4, _0x46f1c3 ? 1 : 2);
    });
    ;
    async function _0xe82cba() {}
    on("np-oilers:stations:showManagementMenu", async (_0x260e61, _0x40f8de, _0x5d4880) => {
      const _0x35fe67 = _0x5d4880?.meta;
      if (_0x35fe67 === undefined) {
        return;
      }
      const _0x526464 = _0x35fe67.data.metadata;
      const _0x294f75 = _0x4a8dec(_0x526464.station, "tank");
      const _0x1abde4 = _0x4a8dec(_0x526464.station, "pump");
      const _0x3e2874 = await _0x149f05.get(_0x526464.station);
      const _0x1aa446 = await _0x3e1988.Panel.usePanel(_0x294f75[0], _0x1abde4, _0x3e2874);
      exports["np-ui"].showContextMenu(_0x1aa446);
    });
    ;
    async function _0x447ef9() {
      await _0x134ec2();
      await _0x29a482();
      await _0x1a565d();
      await _0xe82cba();
      await _0x2d7525();
      await _0x420a07();
      await _0x2241b0();
      await _0x498bff();
      await _0x836256();
    }
    const _0x377e19 = _0x447ef9;
    ;
    async function _0x5d47e8() {
      await _0x19888e();
      await _0x377e19();
    }
    ;
    (async () => {
      await _0x9f2f7();
      await _0x5d47e8();
    })();
  })();