(() => {
    'use strict';
  
    var _0x431394 = {};
    ;
    const _0x124d5d = globalThis.NPX;
    const _0x1350a2 = _0x124d5d.Hud;
    const _0x1dcda4 = _0x124d5d.Utils;
    const _0x2ea2ff = _0x124d5d.Zones;
    const _0x5b54f1 = _0x124d5d.Events;
    const _0x5bcedd = _0x124d5d.Streaming;
    const _0x29bdf3 = _0x124d5d.Procedures;
    const _0x13208c = _0x124d5d.Interface;
    const _0x44f969 = null && _0x124d5d;
    ;
    const _0x187f06 = globalThis;
    async function _0x13c0b5(_0x56f95f) {
      return new Promise(_0xd736e3 => setTimeout(() => _0xd736e3(), _0x56f95f));
    }
    function _0x46a4a4(_0x9fb2d, _0x237c00) {
      return Math.floor(_0x237c00 ? Math.random() * (_0x237c00 - _0x9fb2d) + _0x9fb2d : Math.random() * _0x9fb2d);
    }
    ;
    let _0x5a3dc4 = false;
    async function _0x530d9f() {}
    _0x187f06.on("np-admin:currentDevmode", async _0x2424fb => {
      const _0x13ea2b = await _0x29bdf3.execute("np-fiber:verify:userRank", "dev");
      if (_0x13ea2b !== true) {
        return;
      }
      _0x5a3dc4 = _0x2424fb;
    });
    ;
    function _0x376e3c(_0x13e237, _0x27f1a7) {
      _0x187f06.RegisterNuiCallbackType(_0x13e237);
      _0x187f06.on("__cfx_nui:" + _0x13e237, _0x27f1a7);
    }
    function _0x40f0fa(_0x3c83fa) {
      _0x187f06.SendNuiMessage(JSON.stringify(_0x3c83fa));
    }
    function _0x3f60c8() {
      return {
        serverId: CFX.GetPlayerServerId(CFX.PlayerId()),
        characterId: exports.isPed.isPed("cid"),
        firstName: exports.isPed.isPed("firstname"),
        lastName: exports.isPed.isPed("lastname"),
        phoneNumber: exports.isPed.isPed("phone_number")
      };
    }
    async function _0x44f00b(_0x127649) {
      const _0x2eb239 = typeof _0x127649 === "number" ? _0x127649 : CFX.GetHashKey(_0x127649);
      if (CFX.HasModelLoaded(_0x2eb239)) {
        return true;
      } else if (!CFX.IsModelInCdimage(_0x2eb239)) {
        return false;
      }
      CFX.RequestModel(_0x2eb239);
      let _0x1e70f7 = false;
      const _0x4cc3b0 = CFX.setTimeout(() => _0x1e70f7 = true, 60000);
      while (!CFX.HasModelLoaded(_0x2eb239) && !_0x1e70f7) {
        await Wait(10);
      }
      CFX.clearTimeout(_0x4cc3b0);
      return _0x1e70f7 === false;
    }
    async function _0x4393c2() {
      return new Promise(async _0x2deeeb => {
        while (!_0x187f06.NetworkIsSessionStarted()) {
          await _0x13c0b5(100);
        }
        _0x2deeeb();
      });
    }
    ;
    let _0x417167 = false;
    async function _0x163aee() {}
    _0x376e3c("np:fiber:api:setState", (_0x2bc4e5, _0x5322f0) => {
      _0x417167 = _0x2bc4e5.active;
      const _0x5b63ef = {
        voipStatus: _0x417167
      };
      exports.hud.sendAppEvent(_0x5b63ef);
      _0x5322f0({
        body: {},
        meta: {
          success: true,
          message: ""
        }
      });
    });
    _0x187f06.RegisterCommand("fiberToggleDebug", () => {
      if (!_0x5a3dc4) {
        return;
      }
      _0x40f0fa({
        type: "debug",
        payload: {}
      });
    }, false);
    ;
    const _0x277d35 = {
      token: undefined,
      rest_api: undefined,
      socket_api: undefined,
      server_hash: undefined
    };
    const _0x366677 = _0x277d35;
    async function _0x260350() {
      try {
        const _0x49c33f = await _0x29bdf3.execute("np:fiber:player:init");
        if (!_0x49c33f) {
          throw new Error("Received no details from fiber for player.");
        }
        _0x244c0c(_0x49c33f.token, _0x49c33f.rest_api, _0x49c33f.socket_api, _0x49c33f.server_hash);
        const _0x29bda6 = {
          token: _0x49c33f.token,
          endpoint: _0x49c33f.rest_api
        };
        exports["np-ui"].sendAppEvent("game", _0x29bda6);
        _0x40f0fa({
          type: "init",
          payload: {
            token: _0x49c33f.token,
            endpoint: _0x49c33f.socket_api,
            serverHash: _0x49c33f.server_hash,
            serverId: GetPlayerServerId(PlayerId())
          }
        });
      } catch (_0x590d12) {
        console.error("Unable to retrieve API details from server. Trying again...");
        setTimeout(() => _0x260350(), 10000);
      }
    }
    function _0x244c0c(_0x178b66, _0x4e76b3, _0x2f1405, _0x2dedc8) {
      _0x366677.token = _0x178b66;
      _0x366677.rest_api = _0x4e76b3;
      _0x366677.socket_api = _0x2f1405;
      _0x366677.server_hash = _0x2dedc8;
    }
    function _0xbe8eaf() {
      const _0x9f9dd4 = {
        token: _0x366677.token,
        endpoint: _0x366677.rest_api
      };
      return _0x9f9dd4;
    }
    exports("GetGameDetails", _0xbe8eaf);
    function _0x3d7caf() {
      const _0x1be6d8 = {
        token: _0x366677.token,
        endpoint: _0x366677.socket_api
      };
      return _0x1be6d8;
    }
    ;
    async function _0x497e39() {
      await _0x163aee();
      await _0x260350();
    }
    ;
    async function _0x4d7e11() {}
    _0x376e3c("np:fiber:datagrid:message", (_0x40c5fd, _0x198ab1) => {
      if (!_0x40c5fd.event) {
        return;
      }
      _0x5b54f1.emit(_0x40c5fd.event, _0x40c5fd.data);
      _0x198ab1({
        body: {},
        meta: {
          success: true,
          message: ""
        }
      });
    });
    ;
    async function _0x3b0b4c() {
      await _0x4d7e11();
    }
    ;
    class _0x389f54 {
      constructor(_0x3defd7, _0x5d076c, _0xd19625 = "interval") {
        this.callback = _0x3defd7;
        this.delay = _0x5d076c;
        this.mode = _0xd19625;
        this.scheduled = {};
        this.tick = 0;
        this.data = {};
        this.hooks = new Map([["active", []], ["preStop", []], ["preStart", []], ["afterStop", []], ["afterStart", []], ["stopAborted", []], ["startAborted", []]]);
      }
      get isActive() {
        return this.active;
      }
      async start() {
        if (this.active) {
          return;
        }
        this.aborted = false;
        this.scheduled = {};
        const _0x2e828e = this.hooks.get("preStart");
        try {
          for (const _0x11bbdd of _0x2e828e) {
            if (!this.aborted) {
              await _0x11bbdd.call(this);
            }
          }
        } catch (_0x54b28c) {
          this.aborted = true;
          console.log("Error while calling pre-start hook", _0x54b28c.message);
        }
        if (this.aborted) {
          try {
            const _0x4f3740 = this.hooks.get("startAborted");
            for (const _0x5c53a1 of _0x4f3740) {
              await _0x5c53a1.call(this);
            }
          } catch (_0x55b562) {
            console.log("Error while calling start-aborted hook", _0x55b562.message);
          }
          return;
        }
        this.active = true;
        const _0x41a6e9 = this.hooks.get("active");
        switch (this.mode) {
          case "tick":
            {
              this.threadId = _0x187f06.setTick(async () => {
                this.tick += 1;
                try {
                  await this.callback.call(this);
                  for (const _0x61dcc8 of _0x41a6e9) {
                    await _0x61dcc8.call(this);
                  }
                } catch (_0x38d9e9) {
                  console.log("Error while calling active hook", _0x38d9e9.message);
                }
                if (this.delay > 0) {
                  await new Promise(_0x379625 => _0x187f06.setTimeout(_0x379625, this.delay));
                }
              });
              break;
            }
          case "interval":
            {
              this.threadId = _0x187f06.setInterval(async () => {
                this.tick += 1;
                try {
                  await this.callback.call(this);
                  for (const _0x6eace5 of _0x41a6e9) {
                    await _0x6eace5.call(this);
                  }
                } catch (_0x175d26) {
                  console.log("Error while calling active hook", _0x175d26.message);
                }
              }, this.delay);
              break;
            }
          case "timeout":
            {
              const _0x1a2ef6 = () => {
                if (this.active) {
                  this.threadId = _0x187f06.setTimeout(async () => {
                    this.tick += 1;
                    try {
                      await this.callback.call(this);
                      for (const _0x59bfca of _0x41a6e9) {
                        await _0x59bfca.call(this);
                      }
                    } catch (_0x5a8641) {
                      console.log("Error while calling active hook", _0x5a8641.message);
                    }
                    return _0x1a2ef6();
                  }, this.delay);
                }
              };
              _0x1a2ef6();
              break;
            }
        }
        const _0x56801a = this.hooks.get("afterStart");
        try {
          for (const _0x66a448 of _0x56801a) {
            await _0x66a448.call(this);
          }
        } catch (_0x5c67d7) {
          console.log("Error while calling after-start hook", _0x5c67d7.message);
        }
      }
      async stop() {
        if (!this.active) {
          return;
        }
        const _0x272927 = this.hooks.get("preStop");
        try {
          for (const _0x2f012c of _0x272927) {
            if (!this.aborted) {
              await _0x2f012c.call(this);
            }
          }
        } catch (_0x2f41f3) {
          this.aborted = true;
          console.log("Error while calling pre-stop hook", _0x2f41f3.message);
        }
        this.active = false;
        switch (this.mode) {
          case "tick":
            {
              _0x187f06.clearTick(this.threadId);
              break;
            }
          case "interval":
            {
              _0x187f06.clearInterval(this.threadId);
              break;
            }
          case "timeout":
            {
              _0x187f06.clearTimeout(this.threadId);
              break;
            }
        }
        if (this.aborted) {
          try {
            const _0x2c2092 = this.hooks.get("stopAborted");
            for (const _0x20dc4a of _0x2c2092) {
              await _0x20dc4a.call(this);
            }
          } catch (_0x33b9da) {
            console.log("Error while calling stop-aborted hook", _0x33b9da.message);
          }
          return;
        }
        const _0x4eaf49 = this.hooks.get("afterStop");
        try {
          for (const _0x4ff726 of _0x4eaf49) {
            await _0x4ff726.call(this);
          }
        } catch (_0x32f386) {
          console.log("Error while calling after-stop hook", _0x32f386.message);
        }
      }
      abort() {
        this.aborted = true;
      }
      addHook(_0x118bdb, _0x462b63) {
        var _0x2e80e4;
        if ((_0x2e80e4 = this.hooks.get(_0x118bdb)) === null || _0x2e80e4 === undefined) {
          undefined;
        } else {
          _0x2e80e4.push(_0x462b63);
        }
      }
      setNextTick(_0x17fa5f, _0x2121df) {
        this.scheduled[_0x17fa5f] = this.tick + _0x2121df;
      }
      canTick(_0x3f16f2) {
        return this.scheduled[_0x3f16f2] === undefined || this.tick >= this.scheduled[_0x3f16f2];
      }
    }
    ;
    const _0x2fb341 = new _0x389f54(function () {}, 1000, "tick");
    _0x2fb341.addHook("preStart", function () {
      this.data.checks = {};
    });
    _0x2fb341.addHook("active", function () {
      if (this.canTick("mainThread")) {
        this.setNextTick("mainThread", 5);
        this.data.playerId = _0x187f06.PlayerId();
        this.data.playerPed = _0x187f06.PlayerPedId();
        this.data.playerModel = _0x187f06.GetEntityModel(this.data.playerPed);
        this.data.playerCoords = _0x187f06.GetEntityCoords(this.data.playerPed, false);
      }
      this.delay = _0x46a4a4(700, 1400);
    });
    async function _0x294807() {
      await _0x4393c2();
      await _0x2fb341.start();
    }
    ;
    async function _0x5977dd() {}
    ;
    const _0x1af4fb = {};
    async function _0x293a1c() {
      _0x187f06.emitNet("np-fiber:phoneAPIReady");
    }
    _0x187f06.on("np-base:spawnInitialized", () => {
      const _0x5a85d8 = _0x187f06.GetEntityCoords(_0x187f06.PlayerPedId(), false);
      const _0x1e4736 = _0x187f06.GetDistanceBetweenCoords(-682, -1092, 200, _0x5a85d8[0], _0x5a85d8[1], _0x5a85d8[2], true);
      if (_0x1e4736 > 100) {
        return;
      }
      _0x1af4fb.hasSpawned = false;
    });
    _0x187f06.on("np-spawn:characterSpawned", () => {
      _0x187f06.setTimeout(() => {
        _0x1af4fb.hasSpawned = true;
      }, 5000);
    });
    _0x187f06.on("wounds:changeDeathState", _0x2a3e31 => {
      _0x1af4fb.isDead = _0x2a3e31;
    });
    _0x187f06.onNet("np-editor:loadEditor", () => {
      _0x1af4fb.onEditor = true;
    });
    _0x187f06.onNet("np-editor:closeEditor", () => {
      _0x1af4fb.onEditor = false;
    });
    _0x187f06.on("np-fiber:hotreload", _0x48b76f => {
      if (_0x48b76f === undefined || _0x48b76f === 0) {
        return;
      }
      _0x1af4fb.hasSpawned = true;
      _0x1af4fb.isDead = _0x187f06.exports.isPed.isPed("dead");
    });
    ;
    async function _0x2cc1f1() {}
    _0x2fb341.addHook("active", async function () {
      if (_0x1af4fb.hasSpawned && this.canTick("playerChecks")) {
        this.setNextTick("playerChecks", _0x46a4a4(4, 8));
        this.data.checks.invisible = await _0x58c5c4(this.data.playerPed);
        this.data.checks.invincible = await _0x18ec3a(this.data.playerId);
        this.data.checks.spectating = await _0x246a6b(this.data.playerId);
        this.data.checks.noclip = this.data.checks.invisible && this.data.checks.invincible;
        this.data.checks.infiniteHealth = await _0x450f70(this.data.playerPed, this.data.playerModel);
        _0x36128c(this.data.checks);
      }
    });
    async function _0x58c5c4(_0x22af94) {
      if (!!_0x187f06.IsEntityVisible(_0x22af94)) {
        return false;
      }
      if (_0x1af4fb.onEditor) {
        return false;
      }
      return true;
    }
    async function _0x18ec3a(_0x3b8161) {
      if (!_0x187f06.GetPlayerInvincible_2(_0x3b8161)) {
        return false;
      }
      if (_0x1af4fb.isDead) {
        return false;
      }
      return true;
    }
    async function _0x246a6b(_0x49bf74) {
      return !!_0x187f06.NetworkIsInSpectatorMode();
    }
    async function _0x450f70(_0x478068, _0x3a7be1) {
      const _0x4f5c31 = _0x187f06.GetEntityHealth(_0x478068);
      if (_0x4f5c31 > 200) {
        return true;
      }
      _0x187f06.SetEntityHealth(_0x478068, _0x4f5c31 - 2);
      await _0x13c0b5(25);
      const _0x4285ff = _0x187f06.GetEntityHealth(_0x478068);
      _0x187f06.SetEntityHealth(_0x478068, _0x4285ff + 2);
      return _0x4f5c31 === _0x4285ff && _0x4f5c31 !== 0 && _0x4285ff !== 0;
    }
    async function _0x2395da(_0x107199) {
      const _0x2aaa40 = CFX.GetPedArmour(_0x107199);
      if (_0x2aaa40 > 100) {
        return true;
      }
      CFX.SetPedArmour(_0x107199, _0x2aaa40 - 2);
      await Delay(25);
      const _0xd8692c = CFX.GetPedArmour(_0x107199);
      CFX.SetPedArmour(_0x107199, _0xd8692c + 2);
      return _0x2aaa40 === _0xd8692c && _0x2aaa40 !== 0 && _0xd8692c !== 0;
    }
    function _0x36128c(_0x402916) {
      let _0x5ee743 = false;
      const _0x4d4638 = ["invisible", "invincible", "noclip", "infiniteArmor", "infiniteHealth"];
      for (const [_0xd3d6a8, _0x3ab3fc] of Object.entries(_0x402916)) {
        if (_0x3ab3fc && !_0x4d4638.includes(_0xd3d6a8)) {
          _0x5ee743 = true;
          break;
        }
      }
      if (_0x5ee743 !== true) {
        return;
      }
      _0x187f06.emitNet("np-fiber:updatePhoneStatus", "playerChecks", _0x402916);
    }
    ;
    async function _0x5edb78() {
      await _0x5977dd();
      await _0x2cc1f1();
    }
    ;
    async function _0x53249d() {
      await _0x293a1c();
      await _0x5edb78();
      await _0x294807();
    }
    ;
    async function _0x5b8b78() {
      await _0x53249d();
      await _0x530d9f();
      await _0x497e39();
      await _0x3b0b4c();
    }
    _0x187f06.on("onClientResourceStop", _0x5c747b => {
      _0x187f06.emitNet("baseevents:hotreload", _0x5c747b);
    });
    ;
    const _0x2aa066 = _0x187f06.GetCurrentResourceName();
    _0x187f06.on("onClientResourceStart", async _0x34932c => {
      if (_0x34932c !== _0x2aa066) {
        return;
      }
      await _0x5b8b78();
    });
  })();