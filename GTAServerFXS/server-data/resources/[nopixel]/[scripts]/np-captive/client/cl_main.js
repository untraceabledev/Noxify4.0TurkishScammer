(() => {
    'use strict';
  
    var _0x500386 = {};
    (() => {
      _0x500386.g = function () {
        if (typeof globalThis === "object") {
          return globalThis;
        }
        try {
          return this || new Function("return this")();
        } catch (_0x41801a) {
          if (typeof window === "object") {
            return window;
          }
        }
      }();
    })();
    var _0x52b625 = {};
    ;
    let _0x508c9d;
    const _0x2a4107 = new Map();
    const _0x1c1c02 = GetCurrentResourceName();
    async function _0x127cd6() {
      while (!globalThis.exports.config.IsConfigReady()) {
        await new Promise(_0x4ccd8f => setTimeout(_0x4ccd8f, 100));
      }
      _0x508c9d = globalThis.exports.config.GetModuleConfig("main");
    }
    on("np-config:configLoaded", (_0x5b34fc, _0x2f64cc) => {
      if (_0x5b34fc === "main") {
        _0x508c9d = _0x2f64cc;
      } else if (_0x2a4107.has(_0x5b34fc)) {
        _0x2a4107.set(_0x5b34fc, _0x2f64cc);
      }
    });
    function _0x348185(_0x550f48) {
      return _0x508c9d[_0x550f48];
    }
    function _0x15d7af(_0x1e9119, _0x1d4276) {
      if (!_0x2a4107.has(_0x1e9119)) {
        const _0x4f188e = _0x500386.g.exports.config.GetModuleConfig(_0x1e9119);
        if (_0x4f188e === undefined) {
          return;
        }
        _0x2a4107.set(_0x1e9119, _0x4f188e);
      }
      const _0x4cb5ea = _0x2a4107.get(_0x1e9119);
      if (_0x1d4276) {
        return _0x4cb5ea?.[_0x1d4276];
      } else {
        return _0x4cb5ea;
      }
    }
    function _0x1c87a8(_0x42a144) {
      return _0x15d7af(_0x1c1c02, _0x42a144);
    }
    ;
    const _0x138d44 = globalThis.NPX;
    const _0x59f1bb = _0x138d44.Hud;
    const _0x5e3ac2 = _0x138d44.Utils;
    const _0x34afa6 = _0x138d44.Zones;
    const _0x519c0f = _0x138d44.Events;
    const _0x1a15ae = _0x138d44.Streaming;
    const _0x193137 = _0x138d44.Procedures;
    const _0x264af1 = _0x138d44.Interface;
    const _0x21ace5 = null && _0x138d44;
    ;
    const _0x412ce0 = globalThis;
    class _0x2a4909 {
      constructor(_0x490a64, _0x2c5891, _0x4e0f33 = "interval") {
        this.callback = _0x490a64;
        this.delay = _0x2c5891;
        this.mode = _0x4e0f33;
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
        const _0x1662d9 = this.hooks.get("preStart");
        try {
          for (const _0x315ef4 of _0x1662d9) {
            if (!this.aborted) {
              await _0x315ef4.call(this);
            }
          }
        } catch (_0x445cb0) {
          this.aborted = true;
          console.log("Error while calling pre-start hook", _0x445cb0.message);
        }
        if (this.aborted) {
          try {
            const _0x231267 = this.hooks.get("startAborted");
            for (const _0x4450df of _0x231267) {
              await _0x4450df.call(this);
            }
          } catch (_0x54dcd7) {
            console.log("Error while calling start-aborted hook", _0x54dcd7.message);
          }
          return;
        }
        this.active = true;
        const _0x45aac3 = this.hooks.get("active");
        switch (this.mode) {
          case "tick":
            {
              this.threadId = _0x412ce0.setTick(async () => {
                this.tick += 1;
                try {
                  await this.callback.call(this);
                  for (const _0x189b2c of _0x45aac3) {
                    await _0x189b2c.call(this);
                  }
                } catch (_0x2a8650) {
                  console.log("Error while calling active hook", _0x2a8650.message);
                }
                if (this.delay > 0) {
                  await new Promise(_0x21482f => _0x412ce0.setTimeout(_0x21482f, this.delay));
                }
              });
              break;
            }
          case "interval":
            {
              this.threadId = _0x412ce0.setInterval(async () => {
                this.tick += 1;
                try {
                  await this.callback.call(this);
                  for (const _0x1364f6 of _0x45aac3) {
                    await _0x1364f6.call(this);
                  }
                } catch (_0x1ed8cd) {
                  console.log("Error while calling active hook", _0x1ed8cd.message);
                }
              }, this.delay);
              break;
            }
          case "timeout":
            {
              const _0xb34b1d = () => {
                if (this.active) {
                  this.threadId = _0x412ce0.setTimeout(async () => {
                    this.tick += 1;
                    try {
                      await this.callback.call(this);
                      for (const _0x137c6c of _0x45aac3) {
                        await _0x137c6c.call(this);
                      }
                    } catch (_0x4fe23b) {
                      console.log("Error while calling active hook", _0x4fe23b.message);
                    }
                    return _0xb34b1d();
                  }, this.delay);
                }
              };
              _0xb34b1d();
              break;
            }
        }
        const _0x127c7f = this.hooks.get("afterStart");
        try {
          for (const _0x373353 of _0x127c7f) {
            await _0x373353.call(this);
          }
        } catch (_0x43e434) {
          console.log("Error while calling after-start hook", _0x43e434.message);
        }
      }
      async stop() {
        if (!this.active) {
          return;
        }
        const _0x5bdcc0 = this.hooks.get("preStop");
        try {
          for (const _0x33d2df of _0x5bdcc0) {
            if (!this.aborted) {
              await _0x33d2df.call(this);
            }
          }
        } catch (_0x4015c4) {
          this.aborted = true;
          console.log("Error while calling pre-stop hook", _0x4015c4.message);
        }
        this.active = false;
        switch (this.mode) {
          case "tick":
            {
              _0x412ce0.clearTick(this.threadId);
              break;
            }
          case "interval":
            {
              _0x412ce0.clearInterval(this.threadId);
              break;
            }
          case "timeout":
            {
              _0x412ce0.clearTimeout(this.threadId);
              break;
            }
        }
        if (this.aborted) {
          try {
            const _0x873e63 = this.hooks.get("stopAborted");
            for (const _0x350124 of _0x873e63) {
              await _0x350124.call(this);
            }
          } catch (_0x43b798) {
            console.log("Error while calling stop-aborted hook", _0x43b798.message);
          }
          return;
        }
        const _0x27633a = this.hooks.get("afterStop");
        try {
          for (const _0x5bff20 of _0x27633a) {
            await _0x5bff20.call(this);
          }
        } catch (_0x4ae0f1) {
          console.log("Error while calling after-stop hook", _0x4ae0f1.message);
        }
      }
      abort() {
        this.aborted = true;
      }
      addHook(_0x29b30f, _0x252ee7) {
        var _0x4bafe4;
        if ((_0x4bafe4 = this.hooks.get(_0x29b30f)) === null || _0x4bafe4 === undefined) {
          undefined;
        } else {
          _0x4bafe4.push(_0x252ee7);
        }
      }
      setNextTick(_0x4e5c1a, _0x5df744) {
        this.scheduled[_0x4e5c1a] = this.tick + _0x5df744;
      }
      canTick(_0x5da089) {
        return this.scheduled[_0x5da089] === undefined || this.tick >= this.scheduled[_0x5da089];
      }
    }
    ;
    function _0x3cfd63(_0x51f006) {
      return new Promise(_0x1dde54 => setTimeout(_0x1dde54, _0x51f006));
    }
    ;
    async function _0x483d06(_0x40cf38) {
      if (!HasAnimDictLoaded(_0x40cf38)) {
        RequestAnimDict(_0x40cf38);
        let _0x438b31 = false;
        setTimeout(() => _0x438b31 = true, 60000);
        while (!HasAnimDictLoaded(_0x40cf38) && !_0x438b31) {
          await _0x3cfd63(10);
        }
      }
    }
    function _0x569a96(_0xe98c41, _0x1a99dd, _0x2bc666 = false) {
      return new Promise(_0x3f0dac => {
        if (_0x1a99dd) {
          exports["np-taskbar"].taskBar(_0xe98c41, _0x1a99dd, _0x2bc666, true, null, false, _0x3f0dac);
        } else {
          setTimeout(() => _0x3f0dac(100), _0xe98c41);
        }
      });
    }
    function _0x2152bd(_0x5ea761, _0x3cd3a6) {
      return new Promise(_0x99b360 => {
        exports.skillchecks.taskBarSkill(_0x5ea761, _0x3cd3a6, _0x99b360);
      });
    }
    const _0x3a0020 = (_0x57cd86, _0x5cebf7) => {
      return exports["np-flags"].HasPedFlag(_0x57cd86, _0x5cebf7);
    };
    const _0x3dd60f = (_0x1f10a9, _0x3fcfda, _0x3fe8a4) => {
      exports["np-flags"].SetPedFlag(_0x1f10a9, _0x3fcfda, _0x3fe8a4);
    };
    ;
    class _0x56426c {
      constructor(_0x20c3c8, _0x1bf294, _0x572da0, _0x179e63, _0x248b71, _0x5863f1, _0x44d579 = 1) {
        this.ped = _0x20c3c8;
        this.type = _0x1bf294;
        this.flag = _0x44d579;
        this.text = _0x572da0;
        this.active = false;
        this.duration = _0x179e63;
        this.dictionary = _0x248b71;
        this.animation = _0x5863f1;
      }
      start(_0x31136c) {
        if (this.active) {
          return;
        }
        this.active = true;
        if (_0x31136c) {
          _0x31136c(this);
        }
        this.tickId = setTick(async () => {
          if (this.animation && !IsEntityPlayingAnim(this.ped, this.dictionary, this.animation, 3)) {
            await _0x483d06(this.dictionary);
            TaskPlayAnim(this.ped, this.dictionary, this.animation, -8, -8, -1, this.flag, 0, false, false, false);
          } else if (!this.animation && !IsPedUsingScenario(this.ped, this.dictionary)) {
            TaskStartScenarioInPlace(this.ped, this.dictionary, 0, true);
          }
          await _0x3cfd63(100);
        });
        let _0x2c9ed1;
        if (this.type === "skill" && this.duration instanceof Array) {
          _0x2c9ed1 = new Promise(async _0x42a2a9 => {
            const _0x2c1787 = this.duration;
            for (const _0x1a5cba of _0x2c1787) {
              const _0x283b2d = await _0x2152bd(_0x1a5cba.difficulty, _0x1a5cba.gap);
              if (_0x283b2d !== 100) {
                return _0x42a2a9(0);
              }
            }
            _0x42a2a9(100);
          });
        } else if (this.type === "normal" && typeof this.duration === "number") {
          _0x2c9ed1 = _0x569a96(this.duration, this.text);
        }
        _0x2c9ed1.then(() => {
          this.stop();
        });
        return _0x2c9ed1;
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
    const _0x39b6ed = new Map();
    const _0x49a69d = new _0x2a4909(() => {}, 0);
    const _0x4ea3cf = {
      xPos: -0.01,
      yPos: 0.045,
      zPos: 1.9081958235745e-16,
      xRot: 223,
      yRot: -94,
      zRot: -52
    };
    const _0x2ba2d9 = {
      xPos: 0.07,
      yPos: 0.02,
      zPos: 0.01,
      xRot: -16,
      yRot: 5,
      zRot: 132
    };
    const _0x38c54a = {
      xPos: -0.04,
      yPos: 0.165,
      zPos: 0,
      xRot: -180,
      yRot: 90,
      zRot: -5
    };
    const _0x24a053 = {
      isBlindfolded: {
        model: GetHashKey("np_blindfold_hood"),
        bone: 12844,
        position: _0x4ea3cf
      },
      isGagged: {
        model: GetHashKey("prop_rolled_sock_01"),
        bone: 47495,
        position: _0x2ba2d9
      },
      isBlipDisabled: {
        model: GetHashKey("np_prop_jammer"),
        bone: 11816,
        position: _0x38c54a
      },
      isDeafened: {
        model: GetHashKey("prop_ear_defenders_01"),
        bone: 31086,
        position: {
          xPos: 0.1,
          yPos: 0.01,
          zPos: 0,
          xRot: 14,
          yRot: 90,
          zRot: 3
        }
      }
    };
    async function _0x30ed6d() {}
    async function _0x1c6adf(_0x1b8f96, _0x477ec1, _0x2547fb) {
      const _0x15eaa7 = new _0x56426c(PlayerPedId(), "normal", _0x2547fb ? _L("captive-applying", "Applying") : _L("captive-removing", "Removing"), _0x2547fb ? 10000 : 1000, "amb@prop_human_parking_meter@female@base", "base_female");
      const _0x2a309f = await _0x15eaa7.start();
      if (_0x2a309f === 100) {
        const _0x13bcfd = GetPlayerServerId(NetworkGetPlayerIndexFromPed(_0x1b8f96));
        emitNet("np-captive:captive", _0x13bcfd, _0x477ec1, _0x2547fb);
      }
    }
    const _0xa82860 = async _0x2a4aff => {
      const _0x240eef = _0x24a053[_0x2a4aff];
      if (_0x240eef) {
        if (!(await _0x1a15ae.loadModel(_0x240eef.model))) {
          return 0;
        }
        const _0x5b263c = GetEntityCoords(PlayerPedId(), false);
        const _0x145174 = CreateObjectNoOffset(_0x240eef.model, _0x5b263c[0], _0x5b263c[1], _0x5b263c[2], true, true, false);
        const _0x394ebe = await _0x5e3ac2.waitForCondition(() => DoesEntityExist(_0x145174), 30000);
        if (_0x394ebe) {
          return 0;
        }
        if (_0x145174) {
          AttachEntityToEntity(_0x145174, PlayerPedId(), GetPedBoneIndex(PlayerPedId(), _0x240eef.bone), _0x240eef.position.xPos, _0x240eef.position.yPos, _0x240eef.position.zPos, _0x240eef.position.xRot, _0x240eef.position.yRot, _0x240eef.position.zRot, false, false, false, true, 0, true);
          return _0x145174;
        }
      }
      return 0;
    };
    async function _0x508606(_0x1ffc69, _0x55b818, _0x1a9416) {
      if (_0x1ffc69 !== GetPlayerServerId(PlayerId())) {
        console.log("[NP-CAPTIVE] Player target is not itself.");
        return;
      }
      _0x3dd60f(PlayerPedId(), _0x55b818, _0x1a9416);
      const _0x332ec8 = _0x39b6ed.get(_0x55b818);
      if (_0x332ec8) {
        if (_0x1a9416) {
          console.log("[NP-CAPTIVE] Deleted existing object, this is not good.");
        }
        DeleteObject(_0x332ec8);
        _0x39b6ed.delete(_0x55b818);
      }
      if (_0x1a9416) {
        const _0x298383 = await _0xa82860(_0x55b818);
        if (_0x298383 && _0x298383 != 0) {
          _0x39b6ed.set(_0x55b818, _0x298383);
          _0x49a69d.data.hoodObject = _0x298383;
        }
      }
      if (_0x55b818 == "isBlindfolded") {
        const _0x34e1a2 = {
          blind: _0x1a9416
        };
        SendNUIMessage(_0x34e1a2);
        if (_0x1a9416) {
          _0x49a69d.start();
        } else {
          _0x49a69d.stop();
        }
      } else if (_0x55b818 == "isGagged") {
        const _0x5ba455 = [{
          mode: 1,
          range: 0.5,
          priority: 2
        }, {
          mode: 2,
          range: 0.75,
          priority: 2
        }, {
          mode: 3,
          range: 1,
          priority: 2
        }];
        if (_0x1a9416) {
          emit("np:voice:proximity:override", "gag", _0x5ba455);
          emitNet("np:voice:transmission:state", -1, "gag", true, "gag");
        } else {
          emit("np:voice:proximity:override", "gag", _0x5ba455, -1, -1);
          emitNet("np:voice:transmission:state", -1, "gag", false, "gag");
        }
      } else if (_0x55b818 == "isBlipDisabled") {
        const _0x4f05fd = GetPlayerPed(GetPlayerFromServerId(_0x1ffc69));
        const _0x5601f5 = DecorGetInt(_0x4f05fd, "EmergencyType");
        if (_0x5601f5 > 0 && _0x5601f5 <= 3) {
          emitNet("e-blips:updateBlips", null, _0x1a9416);
        }
      } else if (_0x55b818 == "isDeafened") {
        if (_0x1a9416) {
          SetAudioSubmixOutputVolumes(1, 0, 0, 0, 0, 0, 0, 0);
        } else {
          SetAudioSubmixOutputVolumes(1, 0, 1, 1, 1, 1, 1, 1);
        }
      }
    }
    _0x49a69d.addHook("preStart", () => {
      SetFollowPedCamViewMode(4);
    });
    _0x49a69d.addHook("active", function () {
      if (this.data?.hoodObject) {}
      DisableControlAction(0, 0, true);
    });
    _0x49a69d.addHook("afterStop", function () {
      this.data.hoodObject = null;
    });
    ;
    async function _0x5a1580() {}
    on("np-captive:captive", async (_0x84b39e, _0x4d3335) => {
      const [_0x2adfc8, _0x4603ce] = _0x84b39e;
      if (!_0x2adfc8 || !_0x4d3335) {
        return;
      }
      _0x1c6adf(_0x4d3335, _0x2adfc8, _0x4603ce);
    });
    onNet("np-captive:setState", (_0x1d1ad1, _0x221887, _0x42a180) => _0x508606(_0x1d1ad1, _0x221887, _0x42a180));
    ;
    async function _0x33842a() {
      await _0x127cd6();
      await _0x5a1580();
      await _0x30ed6d();
    }
    ;
    (async () => {
      await _0x33842a();
    })();
  })();