(() => {
    'use strict';
  
    var _0x2d01e1 = {};
    (() => {
      _0x2d01e1.g = function () {
        if (typeof globalThis === "object") {
          return globalThis;
        }
        try {
          return this || new Function("return this")();
        } catch (_0x46b414) {
          if (typeof window === "object") {
            return window;
          }
        }
      }();
    })();
    var _0x5be8f1 = {};
    ;
    let _0x324b0f;
    let _0x7cf68d = null;
    const _0x4918a7 = new Map();
    const _0x3c4b3b = GetCurrentResourceName();
    async function _0x44fbba() {
      while (!globalThis.exports.config.IsConfigReady()) {
        await new Promise(_0x44b0d1 => setTimeout(_0x44b0d1, 100));
      }
      _0x324b0f = globalThis.exports.config.GetModuleConfig("main");
      while (_0x7cf68d == null) {
        await new Promise(_0x397ec4 => setTimeout(_0x397ec4, 100));
        _0x7cf68d = _0x59e570();
      }
      if (_0x7cf68d != null) {
        Object.keys(_0x7cf68d.modelPreset).forEach(_0x528e08 => {
          const _0x3b74f7 = _0x7cf68d.modelPreset[_0x528e08];
          _0x7cf68d.modelPreset[GetHashKey(_0x528e08)] = _0x3b74f7;
          delete _0x7cf68d.modelPreset[_0x528e08];
        });
        Object.keys(_0x7cf68d.cosmeticOverrides).forEach(_0x360a1e => {
          const _0x1be994 = _0x7cf68d.cosmeticOverrides[_0x360a1e];
          _0x7cf68d.cosmeticOverrides[GetHashKey(_0x360a1e)] = _0x1be994;
          delete _0x7cf68d.cosmeticOverrides[_0x360a1e];
        });
      }
    }
    on("np-config:configLoaded", (_0x18742d, _0x204c39) => {
      if (_0x18742d === "main") {
        _0x324b0f = _0x204c39;
      } else if (_0x4918a7.has(_0x18742d)) {
        _0x4918a7.set(_0x18742d, _0x204c39);
      }
    });
    function _0x4e51b0(_0x1075b6) {
      return _0x324b0f[_0x1075b6];
    }
    function _0x53d130(_0x36a0e3, _0x2804ae) {
      if (!_0x4918a7.has(_0x36a0e3)) {
        const _0x2643fd = _0x2d01e1.g.exports.config.GetModuleConfig(_0x36a0e3);
        if (_0x2643fd === undefined) {
          return;
        }
        _0x4918a7.set(_0x36a0e3, _0x2643fd);
      }
      const _0x5a1402 = _0x4918a7.get(_0x36a0e3);
      if (_0x2804ae) {
        return _0x5a1402?.[_0x2804ae];
      } else {
        return _0x5a1402;
      }
    }
    function _0x59e570(_0x29ac58) {
      return _0x53d130(_0x3c4b3b, _0x29ac58);
    }
    ;
    const _0x9c5cef = globalThis.NPX;
    const _0x424429 = _0x9c5cef.Hud;
    const _0x415d2e = _0x9c5cef.Utils;
    const _0x1fe6b5 = _0x9c5cef.Zones;
    const _0xc1706c = _0x9c5cef.Events;
    const _0x1c8867 = _0x9c5cef.Streaming;
    const _0x153218 = _0x9c5cef.Procedures;
    const _0x42fec8 = _0x9c5cef.Interface;
    const _0x304495 = null && _0x9c5cef;
    ;
    var _0x33cbbc;
    (function (_0x5020e1) {
      _0x5020e1[_0x5020e1.neonLights = 1] = "neonLights";
      _0x5020e1[_0x5020e1.engineSound = 2] = "engineSound";
      _0x5020e1[_0x5020e1.leftIndicator = 4] = "leftIndicator";
      _0x5020e1[_0x5020e1.rightIndicator = 8] = "rightIndicator";
      _0x5020e1[_0x5020e1.hazardIndicator = 16] = "hazardIndicator";
      _0x5020e1[_0x5020e1.wheelFitment = 32] = "wheelFitment";
    })(_0x33cbbc ||= {});
    var _0x4e4035;
    (function (_0xcb5190) {
      _0xcb5190[_0xcb5190.sirenActive = 1] = "sirenActive";
      _0xcb5190[_0xcb5190.sirenMuted = 2] = "sirenMuted";
      _0xcb5190[_0xcb5190.sirenAirhorn = 4] = "sirenAirhorn";
      _0xcb5190[_0xcb5190.sirenNormal = 8] = "sirenNormal";
      _0xcb5190[_0xcb5190.sirenAltern = 16] = "sirenAltern";
      _0xcb5190[_0xcb5190.sirenWarning = 32] = "sirenWarning";
    })(_0x4e4035 ||= {});
    var _0x230ccf;
    (function (_0x5ba950) {
      _0x5ba950[_0x5ba950.invalid1 = 24] = "invalid1";
      _0x5ba950[_0x5ba950.invalid2 = 48] = "invalid2";
      _0x5ba950[_0x5ba950.invalid3 = 40] = "invalid3";
    })(_0x230ccf ||= {});
    var _0x4f5b8a;
    (function (_0x59fdbf) {
      _0x59fdbf[_0x59fdbf.sirensAndLights = 59] = "sirensAndLights";
      _0x59fdbf[_0x59fdbf.sirens = 57] = "sirens";
      _0x59fdbf[_0x59fdbf.soundEmitting = 60] = "soundEmitting";
    })(_0x4f5b8a ||= {});
    var _0x346f2c;
    (function (_0x3bb6d9) {
      _0x3bb6d9[_0x3bb6d9.Hazards = 1] = "Hazards";
      _0x3bb6d9[_0x3bb6d9.Left = 2] = "Left";
      _0x3bb6d9[_0x3bb6d9.Right = 4] = "Right";
    })(_0x346f2c ||= {});
    ;
    const _0x4a0dc7 = new Set();
    async function _0x1db190(_0x3f36eb) {
      return new Promise(_0x358a85 => setTimeout(() => _0x358a85(), _0x3f36eb));
    }
    function _0x1a15ef(_0x21920a, _0x43721f = 500) {
      if (!_0x4a0dc7.has(_0x21920a)) {
        _0x4a0dc7.add(_0x21920a);
        setTimeout(() => _0x4a0dc7.delete(_0x21920a), _0x43721f);
        return false;
      }
      return true;
    }
    function _0x14a211(_0x947f8c) {
      return _0x4a0dc7.has(_0x947f8c);
    }
    ;
    const _0x3059ce = (_0x4cd7f5, _0x1ce7da) => {
      if (!_0x4cd7f5 || !_0x1ce7da) {
        return;
      }
      const _0x4f7df2 = _0x7cf68d.cosmeticOverrides[_0x1ce7da.toString()];
      if (_0x4f7df2) {
        for (const _0x47050f in _0x4f7df2) {
          const _0x3ee122 = GetVehicleMod(_0x4cd7f5, _0x4f7df2[_0x47050f].modId);
          if (_0x3ee122.toString()) {
            const _0x4a6895 = _0x4f7df2[_0x47050f].data[_0x3ee122.toString()];
            if (_0x4a6895) {
              return _0x4a6895;
            }
          }
        }
      }
      return;
    };
    const _0x5837cb = async (_0x903753, _0x281116) => {
      return AddStateBagChangeHandler(_0x903753, null, async (_0x382da4, _0x525d9e, _0x51cb3f, _0x2b1a08, _0xacde71) => {
        const _0x2a4330 = Number(_0x382da4.replace("entity:", ""));
        const _0x1f32f9 = await _0x415d2e.waitForCondition(() => NetworkDoesEntityExistWithNetworkId(_0x2a4330), 1500);
        if (_0x1f32f9) {
          return;
        }
        const _0x2b18f9 = NetToVeh(_0x2a4330);
        const _0xcd1ab6 = NetworkGetEntityOwner(_0x2b18f9) == PlayerId();
        if (!_0xcd1ab6 && _0xacde71 || _0xcd1ab6 && !_0xacde71) {
          return;
        }
        _0x281116(_0x2a4330, _0x51cb3f);
      });
    };
    ;
    const _0x559697 = globalThis;
    class _0x32aea7 {
      constructor(_0x4ee424, _0x502965, _0x54c860 = "interval") {
        this.callback = _0x4ee424;
        this.delay = _0x502965;
        this.mode = _0x54c860;
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
        const _0x24dc47 = this.hooks.get("preStart");
        try {
          for (const _0x13e2e0 of _0x24dc47) {
            if (!this.aborted) {
              await _0x13e2e0.call(this);
            }
          }
        } catch (_0x2c556b) {
          this.aborted = true;
          console.log("Error while calling pre-start hook", _0x2c556b.message);
        }
        if (this.aborted) {
          try {
            const _0x305159 = this.hooks.get("startAborted");
            for (const _0x1ff235 of _0x305159) {
              await _0x1ff235.call(this);
            }
          } catch (_0x481e14) {
            console.log("Error while calling start-aborted hook", _0x481e14.message);
          }
          return;
        }
        this.active = true;
        const _0x287171 = this.hooks.get("active");
        switch (this.mode) {
          case "tick":
            {
              this.threadId = _0x559697.setTick(async () => {
                this.tick += 1;
                try {
                  await this.callback.call(this);
                  for (const _0x5e7c77 of _0x287171) {
                    await _0x5e7c77.call(this);
                  }
                } catch (_0x4acedd) {
                  console.log("Error while calling active hook", _0x4acedd.message);
                }
                if (this.delay > 0) {
                  await new Promise(_0x32a915 => _0x559697.setTimeout(_0x32a915, this.delay));
                }
              });
              break;
            }
          case "interval":
            {
              this.threadId = _0x559697.setInterval(async () => {
                this.tick += 1;
                try {
                  await this.callback.call(this);
                  for (const _0x3f1648 of _0x287171) {
                    await _0x3f1648.call(this);
                  }
                } catch (_0x4f324e) {
                  console.log("Error while calling active hook", _0x4f324e.message);
                }
              }, this.delay);
              break;
            }
          case "timeout":
            {
              const _0x25f15a = () => {
                if (this.active) {
                  this.threadId = _0x559697.setTimeout(async () => {
                    this.tick += 1;
                    try {
                      await this.callback.call(this);
                      for (const _0x5a56d5 of _0x287171) {
                        await _0x5a56d5.call(this);
                      }
                    } catch (_0x29abe) {
                      console.log("Error while calling active hook", _0x29abe.message);
                    }
                    return _0x25f15a();
                  }, this.delay);
                }
              };
              _0x25f15a();
              break;
            }
        }
        const _0x57c904 = this.hooks.get("afterStart");
        try {
          for (const _0xeff334 of _0x57c904) {
            await _0xeff334.call(this);
          }
        } catch (_0x40d237) {
          console.log("Error while calling after-start hook", _0x40d237.message);
        }
      }
      async stop() {
        if (!this.active) {
          return;
        }
        const _0x4485c7 = this.hooks.get("preStop");
        try {
          for (const _0x1bf11a of _0x4485c7) {
            if (!this.aborted) {
              await _0x1bf11a.call(this);
            }
          }
        } catch (_0x2e7c2b) {
          this.aborted = true;
          console.log("Error while calling pre-stop hook", _0x2e7c2b.message);
        }
        this.active = false;
        switch (this.mode) {
          case "tick":
            {
              _0x559697.clearTick(this.threadId);
              break;
            }
          case "interval":
            {
              _0x559697.clearInterval(this.threadId);
              break;
            }
          case "timeout":
            {
              _0x559697.clearTimeout(this.threadId);
              break;
            }
        }
        if (this.aborted) {
          try {
            const _0x2eefd5 = this.hooks.get("stopAborted");
            for (const _0x26ac8c of _0x2eefd5) {
              await _0x26ac8c.call(this);
            }
          } catch (_0x2a94e9) {
            console.log("Error while calling stop-aborted hook", _0x2a94e9.message);
          }
          return;
        }
        const _0x42b998 = this.hooks.get("afterStop");
        try {
          for (const _0x3fa50b of _0x42b998) {
            await _0x3fa50b.call(this);
          }
        } catch (_0x478ab9) {
          console.log("Error while calling after-stop hook", _0x478ab9.message);
        }
      }
      abort() {
        this.aborted = true;
      }
      addHook(_0x1ce76a, _0x279fd5) {
        var _0x4e39e1;
        if ((_0x4e39e1 = this.hooks.get(_0x1ce76a)) === null || _0x4e39e1 === undefined) {
          undefined;
        } else {
          _0x4e39e1.push(_0x279fd5);
        }
      }
      setNextTick(_0xb6820a, _0x5d6b78) {
        this.scheduled[_0xb6820a] = this.tick + _0x5d6b78;
      }
      canTick(_0x200f43) {
        return this.scheduled[_0x200f43] === undefined || this.tick >= this.scheduled[_0x200f43];
      }
    }
    ;
    const _0x5c0c91 = new Map();
    async function _0x422ce5() {}
    const _0x272917 = (_0x3ce471, _0x1c234f) => {
      return _0x45bb77(_0x3ce471, _0x1c234f);
    };
    const _0x598ebf = (_0x17d1eb, _0x467e98) => {
      _0x2bbe3e(_0x17d1eb, _0x467e98);
    };
    const _0x45bb77 = async (_0x59300e, _0x243564) => {
      const _0x17c71f = GetSoundId();
      const _0x5d3d50 = _0x5c0c91.get(_0x59300e) ?? [];
      _0x5d3d50.push(_0x17c71f);
      _0x5c0c91.set(_0x59300e, _0x5d3d50);
      PlaySoundFromEntity(_0x17c71f, _0x243564, _0x59300e, "", false, 0);
      return _0x17c71f;
    };
    const _0x2bbe3e = (_0x3af81c, _0x4a9708) => {
      const _0x195dd4 = _0x5c0c91.get(_0x3af81c);
      if (_0x195dd4 === undefined) {
        return;
      }
      const _0x257bad = _0x195dd4.findIndex(_0x4c84c5 => _0x4c84c5 === _0x4a9708);
      if (_0x257bad === -1) {
        return;
      }
      StopSound(_0x4a9708);
      ReleaseSoundId(_0x4a9708);
      _0x195dd4.splice(_0x257bad, 1);
    };
    ;
    let _0x10b052 = false;
    let _0x1bd890 = false;
    let _0xcc31c4 = false;
    const _0x3d61b6 = new Map();
    const _0x1fd53f = async (_0x3a94d5, _0x5da2bc) => {
      for (const _0x234b8b in _0x5da2bc.sounds) {
        const _0x1d1e73 = _0x5da2bc.sounds[_0x234b8b];
        if (_0x1d1e73 && (_0x5da2bc.sirenFlags & Number(_0x234b8b)) > 0 && _0x5da2bc.sounds[_0x234b8b].isPlaying) {
          _0x598ebf(_0x3a94d5, _0x5da2bc.sounds[_0x234b8b].soundId);
          _0x5da2bc.sounds[_0x234b8b].isPlaying = false;
        }
      }
    };
    const _0x2a8b7c = new _0x32aea7(() => {
      _0x3d61b6.forEach((_0x54bd29, _0x184963) => {
        const _0x4c2907 = DoesEntityExist(_0x184963);
        if (!_0x4c2907) {
          _0x1fd53f(_0x184963, _0x54bd29);
          _0x3d61b6.delete(_0x184963);
        }
      });
    }, 10000, "interval");
    async function _0x34b8b5() {
      _0x2a8b7c.start();
    }
    const _0x2b2c59 = (_0x43f004, _0x32011a) => {
      if (!_0x43f004) {
        return;
      }
      const _0xbd860b = async _0xc7590b => {
        const _0x253f14 = _0x32011a.sounds[_0xc7590b];
        const _0x2fd4d6 = _0x32011a.sirenFlags & _0xc7590b;
        const _0x240f9f = _0x253f14.isPlaying;
        if (_0x2fd4d6 != 0 && !_0x10b052 && !_0x240f9f || _0x2fd4d6 != 0 && _0xcc31c4 && !_0x240f9f) {
          _0x253f14.soundId = await _0x272917(_0x43f004, _0x32011a.sirenPresets[_0x4e4035[_0xc7590b]]);
          _0x253f14.isPlaying = true;
        } else if (_0x2fd4d6 == 0 && _0x240f9f || _0xcc31c4) {
          _0x253f14.isPlaying = false;
          _0x598ebf(_0x43f004, _0x253f14.soundId);
        }
      };
      _0xbd860b(_0x4e4035.sirenNormal);
      _0xbd860b(_0x4e4035.sirenAltern);
      _0xbd860b(_0x4e4035.sirenWarning);
      _0xbd860b(_0x4e4035.sirenAirhorn);
      _0xcc31c4 = false;
      _0x1bd890 = false;
      SetVehicleSiren(_0x43f004, (_0x32011a.sirenFlags & _0x4e4035.sirenMuted) > 0);
      SetVehicleHasMutedSirens(_0x43f004, (_0x32011a.sirenFlags & _0x4e4035.sirenMuted) > 0 || _0x10b052);
    };
    const _0x378b81 = () => {
      _0x1bd890 = true;
      _0x10b052 = true;
    };
    const _0x2abd05 = () => {
      _0xcc31c4 = true;
      _0x10b052 = false;
    };
    ;
    const _0x33f49c = async (_0x1350b8, _0x301648) => {
      let _0x178e0d = _0x3d61b6.get(_0x1350b8);
      if (!_0x178e0d) {
        _0x3d61b6.set(_0x1350b8, {
          sirenPresets: _0x2cc1b6(_0x1350b8),
          sirenFlags: _0x301648,
          sounds: Object.keys(_0x4e4035).filter(_0x51ff0c => !isNaN(Number(_0x51ff0c)) && (Number(_0x51ff0c) | _0x4f5b8a.soundEmitting) == _0x4f5b8a.soundEmitting).reduce((_0x3f3c9d, _0x1e779a) => {
            const _0x16ad78 = {
              isPlaying: false,
              soundId: -1
            };
            _0x3f3c9d[_0x1e779a] = _0x16ad78;
            return _0x3f3c9d;
          }, {})
        });
        _0x178e0d = _0x3d61b6.get(_0x1350b8);
      } else {
        _0x178e0d.sirenFlags = _0x301648;
      }
      return _0x178e0d;
    };
    const _0x56aff7 = () => {
      _0x157b01(_0x4e4035.sirenActive | _0x4e4035.sirenNormal);
    };
    const _0x271149 = _0x57a2d7 => {
      _0x157b01(null, _0x57a2d7);
    };
    const _0x2524c7 = () => {
      if (_0x14a211("cycleSiren") || _0x14a211("airHorn")) {
        return;
      }
      const _0xc52721 = _0x4fe551();
      if ((_0xc52721 & _0x4e4035.sirenWarning) == _0x4e4035.sirenWarning) {
        _0x157b01(_0x4e4035.sirenNormal, _0x4e4035.sirenWarning);
      } else if ((_0xc52721 & _0x4e4035.sirenNormal) == _0x4e4035.sirenNormal) {
        _0x157b01(_0x4e4035.sirenAltern, _0x4e4035.sirenNormal);
      } else if ((_0xc52721 & _0x4e4035.sirenAltern) == _0x4e4035.sirenAltern) {
        _0x157b01(_0x4e4035.sirenWarning, _0x4e4035.sirenAltern);
      }
      _0x1a15ef("cycleSiren", 50);
      _0x50d80c(true);
    };
    const _0x39554e = () => {
      const _0x30489e = IsVehicleSirenOn(_0xdb8190.Entity);
      const _0x4a5890 = _0x25031c();
      if (!_0x30489e && !_0x4a5890) {
        return;
      }
      if (_0x30489e && !_0x4a5890) {
        _0x56aff7();
      } else if (_0x4a5890) {
        _0x271149(_0x4f5b8a.sirens);
      }
      _0x50d80c(!_0x4a5890);
    };
    const _0xd6cb83 = () => {
      const _0x406cae = IsVehicleSirenOn(_0xdb8190.Entity);
      const _0x31cf9f = _0x25031c();
      if (!_0x406cae) {
        _0x4e0f14(_0x4e4035.sirenMuted, true);
      } else {
        _0x4e0f14(_0x4e4035.sirenMuted, false);
      }
      if (_0x406cae && _0x31cf9f) {
        _0x271149(_0x4f5b8a.sirensAndLights);
      }
      _0x50d80c(!_0x406cae);
    };
    const _0xbd1a58 = _0x7b050b => {
      if (_0x7b050b && (_0x14a211("airHorn") || _0x14a211("cycleSiren"))) {
        return;
      }
      _0x1a15ef("airHorn", 50);
      _0x4e0f14(_0x4e4035.sirenAirhorn, _0x7b050b);
    };
    const _0x4fe551 = () => {
      return Entity(_0xdb8190.Entity).state.sirenFlags;
    };
    const _0x25031c = () => {
      return (Entity(_0xdb8190.Entity).state.sirenFlags & _0x4e4035.sirenActive) > 0;
    };
    const _0x4e0f14 = async (_0x1f0f60, _0x2c3a59) => {
      let _0x42894b = Entity(_0xdb8190.Entity).state.sirenFlags;
      if (_0x2c3a59) {
        _0x42894b |= _0x1f0f60;
      } else {
        _0x42894b &= ~_0x1f0f60;
      }
      _0x1e6e28(_0x42894b);
    };
    const _0x157b01 = async (_0x1ce0a7, _0x4fe74a) => {
      let _0x5eeb19 = Entity(_0xdb8190.Entity).state.sirenFlags;
      if (_0x1ce0a7) {
        _0x5eeb19 |= _0x1ce0a7;
      }
      if (_0x4fe74a) {
        _0x5eeb19 &= ~_0x4fe74a;
      }
      _0x1e6e28(_0x5eeb19);
    };
    const _0x1e6e28 = async _0x2091b5 => {
      const _0x1e866b = await _0x33f49c(_0xdb8190.Entity, _0x2091b5);
      _0x2b2c59(_0xdb8190.Entity, _0x1e866b);
      _0xc1706c.emitNet("np-vehiclesync-state:setSiren", _0xdb8190.NetworkId, _0x2091b5);
    };
    const _0x2cc1b6 = _0x3b6dea => {
      const _0xebc37b = Entity(_0x3b6dea).state.sirenPreset ?? "standard";
      return _0x7cf68d.sirenPresets[_0xebc37b];
    };
    const _0x50d80c = _0x17db9a => {
      const _0x11b2af = GetSoundId();
      PlaySoundFrontend(_0x11b2af, _0x17db9a ? "NAV_LEFT_RIGHT" : "NAV_UP_DOWN", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
      ReleaseSoundId(_0x11b2af);
    };
    ;
    const _0x121dc7 = (_0x4d2efe, _0x1cbe14) => {
      if (!_0x4d2efe) {
        return;
      }
      const _0x47d2b1 = GetVehicleClass(_0x4d2efe) == _0x3883e7.Emergency;
      const _0xf69955 = _0x4cad8e(_0x33cbbc.neonLights, _0x1cbe14, _0x4d2efe);
      const _0x17b1d0 = _0x4cad8e(_0x33cbbc.rightIndicator, _0x1cbe14, _0x4d2efe);
      const _0x12e0d3 = _0x4cad8e(_0x33cbbc.leftIndicator, _0x1cbe14, _0x4d2efe);
      const _0x498597 = _0x4cad8e(_0x33cbbc.hazardIndicator, _0x1cbe14, _0x4d2efe);
      if (!_0x47d2b1 && _0x4cad8e(_0x33cbbc.engineSound, _0x1cbe14, _0x4d2efe)) {
        _0x2b285d(_0x4d2efe);
      }
      DisableVehicleNeonLights(_0x4d2efe, !_0xf69955);
      SetVehicleIndicatorLights(_0x4d2efe, 0, _0x498597 || _0x17b1d0);
      SetVehicleIndicatorLights(_0x4d2efe, 1, _0x498597 || _0x12e0d3);
    };
    const _0x2b285d = async (_0x48a18b, _0x36aa65) => {
      const _0x903147 = GetEntityModel(_0x48a18b);
      if (GetVehicleClass(_0x48a18b) == _0x3883e7.Emergency) {
        return;
      }
      let _0x23db80 = _0x3059ce(_0x48a18b, _0x903147);
      if (_0x36aa65) {
        ForceVehicleEngineAudio(_0x48a18b, _0x23db80);
        return;
      }
      if (!_0x23db80) {
        _0x23db80 = exports["np-vehicles"].GetVehicleAfterMarket(_0x48a18b, "engineSound");
      }
      if (!_0x23db80) {
        return;
      }
      ForceVehicleEngineAudio(_0x48a18b, _0x23db80);
    };
    _0x2d01e1.g.exports("SetEngineSound", _0x2b285d);
    const _0x49c2d1 = (_0x340b77, _0x13c16b) => {
      if (!_0x340b77) {
        return;
      }
      const _0x280314 = GetEntityModel(_0x340b77);
      const _0x58de13 = _0x3059ce(_0x340b77, _0x280314);
      const _0x2e0b6c = exports["np-vehicles"].GetVehicleAfterMarket(_0x340b77);
      if (!_0x2e0b6c && !_0x58de13) {
        return;
      }
      if (_0x2e0b6c.engineSound || _0x58de13) {
        _0x41033c(_0x33cbbc.engineSound, true, _0x340b77, _0x13c16b);
      }
    };
    const _0x42d400 = _0x8fb227 => {
      for (let _0x1fa509 = 0; _0x1fa509 < 4; _0x1fa509++) {
        if (IsVehicleNeonLightEnabled(_0x8fb227, _0x1fa509)) {
          return true;
        }
      }
    };
    const _0x5d7a2d = () => {
      const _0x111081 = _0x4cad8e(_0x33cbbc.neonLights);
      _0x41033c(_0x33cbbc.neonLights, !_0x111081);
      _0x50d80c(!_0x111081);
    };
    const _0x14d449 = _0x35b780 => {
      switch (_0x35b780) {
        case _0x346f2c.Hazards:
          _0x41033c(_0x33cbbc.hazardIndicator, !_0x4cad8e(_0x33cbbc.hazardIndicator));
          break;
        case _0x346f2c.Left:
          _0x507b7c(!_0x4cad8e(_0x33cbbc.leftIndicator) ? _0x33cbbc.leftIndicator : 0, (_0x4cad8e(_0x33cbbc.leftIndicator) ? _0x33cbbc.leftIndicator : 0) | _0x33cbbc.rightIndicator | _0x33cbbc.hazardIndicator);
          break;
        case _0x346f2c.Right:
          _0x507b7c(!_0x4cad8e(_0x33cbbc.rightIndicator) ? _0x33cbbc.rightIndicator : 0, (_0x4cad8e(_0x33cbbc.rightIndicator) ? _0x33cbbc.rightIndicator : 0) | _0x33cbbc.leftIndicator | _0x33cbbc.hazardIndicator);
          break;
      }
      _0x50d80c(true);
    };
    globalThis.exports("SetLightIndicators", _0x14d449);
    const _0x430a06 = _0x249257 => {
      return Entity(_0x249257 ?? _0xdb8190.Entity).state.syncFlags;
    };
    const _0x507b7c = (_0x386d82, _0x21a402) => {
      let _0x520d8b = Entity(_0xdb8190.Entity).state.syncFlags;
      if (_0x386d82) {
        _0x520d8b |= _0x386d82;
      }
      if (_0x21a402) {
        _0x520d8b &= ~_0x21a402;
      }
      _0x121dc7(_0xdb8190.Entity, _0x520d8b);
      _0xc1706c.emitNet("np-vehiclesync-state:setSync", _0xdb8190.NetworkId, _0x520d8b);
    };
    const _0x41033c = (_0x29e857, _0x284d34, _0x1171e6, _0x4e12ea) => {
      const _0x2c8692 = _0x1171e6 ?? _0xdb8190.Entity;
      let _0x700e6e = Entity(_0x2c8692).state.syncFlags;
      if (_0x284d34) {
        _0x700e6e |= _0x29e857;
      } else {
        _0x700e6e &= ~_0x29e857;
      }
      _0x121dc7(_0x2c8692, _0x700e6e);
      _0xc1706c.emitNet("np-vehiclesync-state:setSync", _0x4e12ea ?? _0xdb8190.NetworkId, _0x700e6e);
    };
    const _0x4cad8e = (_0x1690db, _0x456f86, _0x363de8) => {
      return (Number(_0x456f86 ?? _0x430a06(_0x363de8)) & _0x1690db) == Number(_0x1690db);
    };
    const _0x1d6ca9 = async _0x36770e => {
      await _0x415d2e.waitForCondition(() => NetworkDoesNetworkIdExist(_0x36770e), 2000);
      const _0x5a880c = NetToVeh(_0x36770e);
      const _0x13347a = await _0x415d2e.waitForCondition(() => DoesEntityExist(_0x5a880c), 10000);
      if (!_0x13347a) {
        _0x49c2d1(_0x5a880c, _0x36770e);
        const _0x21113b = exports["np-vehicles"].GetVehicleWheelFitment(_0x5a880c);
        if (_0x21113b) {
          _0xc1706c.emitNet("np-vehiclesync-state:ensureWheelFitmentStateBag", _0x36770e, _0x21113b);
        }
      }
    };
    const _0x530b5a = async (_0x1f64ff, _0x24f6b9) => {
      Citizen.invokeNative("0x1683E7F0", _0x1f64ff, _0x24f6b9[0], _0x24f6b9[1], _0x24f6b9[2]);
    };
    ;
    class _0x84728c {
      constructor(_0x896d99 = 0, _0x505f5e = 0, _0x4d5175 = 0) {
        this.x = _0x896d99;
        this.y = _0x505f5e;
        this.z = _0x4d5175;
      }
      setFromArray(_0xa847a1) {
        this.x = _0xa847a1[0];
        this.y = _0xa847a1[1];
        this.z = _0xa847a1[2];
        return this;
      }
      getArray() {
        return [this.x, this.y, this.z];
      }
      add(_0x35d678) {
        this.x += _0x35d678.x;
        this.y += _0x35d678.y;
        this.z += _0x35d678.z;
        return this;
      }
      addScalar(_0x5cb59a) {
        this.x += _0x5cb59a;
        this.y += _0x5cb59a;
        this.z += _0x5cb59a;
        return this;
      }
      sub(_0x246a49) {
        this.x -= _0x246a49.x;
        this.y -= _0x246a49.y;
        this.z -= _0x246a49.z;
        return this;
      }
      equals(_0x3f8ea4) {
        return this.x === _0x3f8ea4.x && this.y === _0x3f8ea4.y && this.z === _0x3f8ea4.z;
      }
      subScalar(_0x277f57) {
        this.x -= _0x277f57;
        this.y -= _0x277f57;
        this.z -= _0x277f57;
        return this;
      }
      multiply(_0x15c6e9) {
        this.x *= _0x15c6e9.x;
        this.y *= _0x15c6e9.y;
        this.z *= _0x15c6e9.z;
        return this;
      }
      multiplyScalar(_0x203645) {
        this.x *= _0x203645;
        this.y *= _0x203645;
        this.z *= _0x203645;
        return this;
      }
      round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.z = Math.round(this.z);
        return this;
      }
      floor() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        this.z = Math.floor(this.z);
        return this;
      }
      ceil() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        this.z = Math.ceil(this.z);
        return this;
      }
      getDistance(_0x1f001b) {
        const [_0x338758, _0x36cdda, _0x5a558f] = [this.x - _0x1f001b.x, this.y - _0x1f001b.y, this.z - _0x1f001b.z];
        return Math.sqrt(_0x338758 * _0x338758 + _0x36cdda * _0x36cdda + _0x5a558f * _0x5a558f);
      }
      getDistanceFromArray(_0x1519fe) {
        const [_0x43d8c9, _0x5d1dd3, _0x56aa13] = [this.x - _0x1519fe[0], this.y - _0x1519fe[1], this.z - _0x1519fe[2]];
        return Math.sqrt(_0x43d8c9 * _0x43d8c9 + _0x5d1dd3 * _0x5d1dd3 + _0x56aa13 * _0x56aa13);
      }
      static fromArray(_0x15189f) {
        return new _0x84728c(_0x15189f[0], _0x15189f[1], _0x15189f[2]);
      }
    }
    ;
    const _0x28a0ca = new Map();
    const _0x3c2e60 = () => {
      setInterval(() => {
        const _0xb09d5 = PlayerPedId();
        const _0x585bbd = _0x84728c.fromArray(GetEntityCoords(_0xb09d5, false));
        const _0x325adb = GetGamePool("CVehicle").filter(_0x16b57e => {
          if (!NetworkGetEntityIsNetworked(_0x16b57e)) {
            return false;
          }
          const _0x1c107d = _0x84728c.fromArray(GetEntityCoords(_0x16b57e, false));
          if (_0x1c107d.getDistance(_0x585bbd) > 150) {
            return false;
          }
          return true;
        });
        for (const _0x4a01e0 of _0x325adb) {
          const _0x5d8a2b = Entity(_0x4a01e0).state;
          const _0x2b848c = _0x5d8a2b.wheelFitment || exports["np-vehicles"].GetVehicleWheelFitment(_0x4a01e0);
          if (_0x2b848c) {
            _0x28a0ca.set(_0x4a01e0, _0x2b848c);
          }
        }
      }, 2500);
    };
    const _0x3893be = () => {
      setTick(() => {
        _0x28a0ca.forEach((_0x3a234c, _0x3bc3ae) => {
          const _0x4b1843 = DoesEntityExist(_0x3bc3ae);
          if (!_0x4b1843) {
            _0x28a0ca.delete(_0x3bc3ae);
            return;
          }
          if (_0x3a234c.paused) {
            return;
          }
          _0x57dbb6(_0x3bc3ae, _0x3a234c);
        });
      });
    };
    async function _0xace234() {
      _0x3c2e60();
      _0x3893be();
    }
    const _0x57dbb6 = (_0x4b8478, _0x55958b) => {
      if (!_0x4b8478) {
        return;
      }
      if (_0x55958b.width !== undefined) {
        SetVehicleWheelWidth(_0x4b8478, _0x55958b.width);
      }
      if (_0x55958b.spacers !== undefined) {
        SetVehicleWheelXOffset(_0x4b8478, 1, _0x55958b.spacers[0]);
        SetVehicleWheelXOffset(_0x4b8478, 0, -_0x55958b.spacers[0]);
        SetVehicleWheelXOffset(_0x4b8478, 3, _0x55958b.spacers[1]);
        SetVehicleWheelXOffset(_0x4b8478, 2, -_0x55958b.spacers[1]);
      }
      if (_0x55958b.camber !== undefined) {
        SetVehicleWheelYRotation(_0x4b8478, 1, _0x55958b.camber[0]);
        SetVehicleWheelYRotation(_0x4b8478, 0, -_0x55958b.camber[0]);
        SetVehicleWheelYRotation(_0x4b8478, 3, _0x55958b.camber[1]);
        SetVehicleWheelYRotation(_0x4b8478, 2, -_0x55958b.camber[1]);
      }
      if (_0x55958b.suspension !== undefined) {
        SetVehicleSuspensionHeight(_0x4b8478, _0x55958b.suspension);
      }
    };
    ;
    let _0xdb8190 = null;
    var _0x3883e7;
    (function (_0x35a1d7) {
      _0x35a1d7[_0x35a1d7.Emergency = 18] = "Emergency";
    })(_0x3883e7 ||= {});
    const _0x35e2f1 = async _0x2da796 => {
      await _0x415d2e.waitForCondition(() => NetworkDoesNetworkIdExist(_0x2da796), 2000);
      const _0x4e6bac = NetToVeh(_0x2da796);
      await _0x415d2e.waitForCondition(() => DoesEntityExist(_0x4e6bac), 2000);
      return _0x4e6bac;
    };
    async function _0x583bd1() {
      await _0x5837cb("sirenFlags", async (_0x63acf7, _0x3e4049) => {
        const _0x4bd324 = await _0x35e2f1(_0x63acf7);
        const _0x539b15 = await _0x33f49c(_0x4bd324, _0x3e4049);
        await _0x2b2c59(_0x4bd324, _0x539b15);
      });
      _0x5837cb("xenonColors", async (_0x104fa3, _0x40cee4) => {
        if (!_0x40cee4) {
          return;
        }
        const _0x3c5eab = await _0x35e2f1(_0x104fa3);
        _0x530b5a(_0x3c5eab, _0x40cee4);
      });
      _0x5837cb("wheelFitment", async (_0x2c5e16, _0xf45db6) => {
        const _0x43968e = await _0x35e2f1(_0x2c5e16);
        _0x28a0ca.set(_0x43968e, _0xf45db6);
        const _0x4a7966 = _0x28a0ca.get(_0x43968e);
        _0x57dbb6(_0x43968e, _0x4a7966);
      });
      _0x5837cb("wheelFitmentPaused", async (_0x397951, _0x402bee) => {
        const _0x23701f = await _0x35e2f1(_0x397951);
        const _0x236553 = _0x28a0ca.get(_0x23701f);
        if (!_0x236553) {
          return;
        }
        _0x236553.paused = _0x402bee;
        _0x28a0ca.set(_0x23701f, _0x236553);
      });
      _0x5837cb("syncFlags", async (_0x1ca83e, _0xfd3234) => {
        if (!_0xfd3234) {
          return;
        }
        const _0x4aea2a = await _0x35e2f1(_0x1ca83e);
        _0x121dc7(_0x4aea2a, _0xfd3234);
      });
      await _0x5837cb("syncInitialized", async (_0x498485, _0x1fef1a) => {
        _0x1d6ca9(_0x498485);
      });
    }
    on("baseevents:enteredVehicle", (_0x2552fc, _0x464b48, _0x210555, _0x3ced67) => {
      const _0x4011ba = NetworkGetNetworkIdFromEntity(_0x2552fc);
      const _0x57068b = Entity(_0x2552fc).state;
      if (!_0x57068b.sirenInitialized) {
        _0xc1706c.emitNet("np-vehiclesync-state:ensureSirenStateBag", _0x4011ba);
      }
      _0x4084f9(_0x2552fc, _0x464b48);
    });
    on("baseevents:enteringVehicle", (_0x5d5a03, _0x2b03e2, _0x4d4d0a) => {
      if (_0x2b03e2 != -1 && _0x4d4d0a != _0x3883e7.Emergency) {
        return;
      }
      const _0x26d8ba = NetworkGetNetworkIdFromEntity(_0x5d5a03);
      const _0x712946 = Entity(_0x5d5a03).state;
      if (_0x712946?.sirenInitialized) {
        const _0x2c6f28 = _0x3d61b6.get(_0x26d8ba);
        if (_0x2c6f28) {
          const _0x2f5f21 = _0x2c6f28.sirenFlags;
          SetVehicleSiren(_0x5d5a03, (_0x2f5f21 & _0x4e4035.sirenMuted) > 0);
          SetVehicleHasMutedSirens(_0x5d5a03, (_0x2f5f21 & _0x4e4035.sirenMuted) > 0);
          _0x4084f9(_0x5d5a03, _0x2b03e2);
        }
      }
    });
    on("baseevents:leftVehicle", _0x28d5e8 => {
      _0xdb8190 = null;
      emit("np-vehiclesync-state:controls", false);
    });
    on("baseevents:vehicleChangedSeat", async (_0x42ed8a, _0x20da86) => {
      _0x4084f9(_0x42ed8a, _0x20da86);
    });
    on("baseevents:vehicleHotreload", async (_0x533d81, _0x4c331a) => {
      await _0x1db190(200);
      _0x4084f9(_0x533d81, _0x4c331a);
    });
    on("build:event:inside", _0x273270 => {
      if (_0x273270) {
        _0x378b81();
      } else {
        _0x2abd05();
      }
    });
    on("np-vehicles:spawnedVehicle", async _0x3b9006 => {
      if (!_0x3b9006) {
        return;
      }
      await _0x415d2e.waitForCondition(() => DoesEntityExist(_0x3b9006), 2000);
      const _0x3995d8 = NetworkGetNetworkIdFromEntity(_0x3b9006);
      const _0x30beeb = Entity(_0x3b9006).state;
      if (!_0x30beeb?.syncInitialized) {
        _0xc1706c.emitNet("np-vehiclesync-state:ensureSyncStateBag", _0x3995d8);
      }
    });
    on("np-vehicles:customXenonColorApplied", async (_0x1f60af, _0x1de4e9) => {
      if (!_0x1f60af) {
        return;
      }
      await _0x415d2e.waitForCondition(() => DoesEntityExist(_0x1f60af), 2000);
      const _0x1a6b80 = NetworkGetNetworkIdFromEntity(_0x1f60af);
      const _0x418136 = Entity(_0x1f60af).state;
      if (!_0x418136?.xenonInitialized) {
        _0xc1706c.emitNet("np-vehiclesync-state:ensureXenonStateBag", _0x1a6b80, _0x1de4e9);
      } else {
        _0xc1706c.emitNet("np-vehiclesync-state:setXenon", _0x1a6b80, _0x1de4e9);
      }
    });
    on("np-vehicles:wheelfitmentApplied", async (_0x467c3c, _0x9b2d31) => {
      if (!_0x467c3c) {
        return;
      }
      await _0x415d2e.waitForCondition(() => DoesEntityExist(_0x467c3c), 2000);
      const _0x180541 = NetworkGetNetworkIdFromEntity(_0x467c3c);
      const _0x38a0a4 = Entity(_0x467c3c).state;
      if (!_0x38a0a4?.wheelFitmentInitialized) {
        _0xc1706c.emitNet("np-vehiclesync-state:ensureWheelFitmentStateBag", _0x180541, _0x9b2d31);
        return;
      }
      _0xc1706c.emitNet("np-vehiclesync-state:setWheelFitment", _0x180541, _0x9b2d31);
    });
    _0xc1706c.on("np-vehiclesync-state:pauseWheelFitmentSync", async (_0x1fc9b3, _0x55effd) => {
      if (!_0x1fc9b3) {
        return;
      }
      await _0x415d2e.waitForCondition(() => DoesEntityExist(_0x1fc9b3), 2000);
      const _0x35e11a = NetworkGetNetworkIdFromEntity(_0x1fc9b3);
      const _0x523e79 = Entity(_0x1fc9b3).state;
      if (!_0x523e79?.wheelFitmentInitialized) {
        return;
      }
      _0xc1706c.emitNet("np-vehiclesync-state:pauseWheelFitment", _0x35e11a, _0x55effd);
    });
    onNet("np-vehicles:updateAfterMarkets", async _0x113744 => {
      await _0x415d2e.waitForCondition(() => NetworkDoesNetworkIdExist(_0x113744), 2000);
      const _0x1f1e34 = NetToVeh(_0x113744);
      ForceVehicleEngineAudio(_0x1f1e34, "");
      if (!_0x1f1e34) {
        return;
      }
      _0x49c2d1(_0x1f1e34, _0x113744);
    });
    const _0x4084f9 = (_0x1f07e3, _0x224725) => {
      const _0x466232 = NetworkGetNetworkIdFromEntity(_0x1f07e3);
      _0xdb8190 = {
        Entity: _0x1f07e3,
        NetworkId: _0x466232,
        Seat: _0x224725,
        IsDriving: _0x224725 == -1,
        IsDrivingEmergencyVehicle: GetVehicleClass(_0x1f07e3) == _0x3883e7.Emergency
      };
      if (_0xdb8190 == null || !_0xdb8190.IsDriving || !_0xdb8190.IsDrivingEmergencyVehicle) {
        return;
      }
      emit("np-vehiclesync-state:controls", true);
    };
    RegisterCommand("vehicleDebug", () => {
      const _0x5543ee = GetVehiclePedIsIn(PlayerPedId(), false);
      const _0x2ff421 = _0x3d61b6.get(_0x5543ee);
      console.log(_0x2ff421);
    }, false);
    ;
    async function _0xe85bbe() {
      const _0x3f887e = () => {
        if (!_0xdb8190) {
          return false;
        }
        if (!_0xdb8190.IsDriving) {
          return false;
        }
        if (!_0xdb8190.IsDrivingEmergencyVehicle) {
          return false;
        }
        return true;
      };
      exports["np-keybinds"].registerKeyMapping("", "Vehicle", "Siren Turn On/Off Lights", "+toggleSirenLights", "-toggleSirenLights", "Q");
      exports["np-keybinds"].registerKeyMapping("", "Vehicle", "Siren Turn On/Off Sound", "+toggleSiren", "-toggleSiren", "LMENU");
      exports["np-keybinds"].registerKeyMapping("", "Vehicle", "Siren Cycle Sound", "+cycleSiren", "-cycleSiren", "R");
      exports["np-keybinds"].registerKeyMapping("", "Vehicle", "Siren AirHorn", "+sirenAirHorn", "-sirenAirHorn", "E");
      exports["np-keybinds"].registerKeyMapping("", "Vehicle", "Toggle Neon Lights", "+toggleNeonLights", "-toggleNeonLights");
      exports["np-keybinds"].registerKeyMapping("", "Vehicle", "Toggle Light Indicator (Right)", "+toggleRightIndicator", "-toggleRightIndicator");
      exports["np-keybinds"].registerKeyMapping("", "Vehicle", "Toggle Light Indicator (Left)", "+toggleLeftIndicator", "-toggleLeftIndicator");
      exports["np-keybinds"].registerKeyMapping("", "Vehicle", "Toggle Light Indicator (Hazard)", "+toggleHazardLights", "-toggleHazardLights");
      RegisterCommand("+sirenAirHorn", () => {
        if (!_0x3f887e()) {
          return;
        }
        _0xbd1a58(true);
      }, false);
      RegisterCommand("-sirenAirHorn", () => {
        if (!_0x3f887e()) {
          return;
        }
        _0xbd1a58(false);
      }, false);
      RegisterCommand("+toggleSirenLights", () => {}, false);
      RegisterCommand("-toggleSirenLights", () => {
        if (!_0x3f887e()) {
          return;
        }
        _0xd6cb83();
      }, false);
      RegisterCommand("+toggleSiren", () => {}, false);
      RegisterCommand("-toggleSiren", () => {
        if (!_0x3f887e()) {
          return;
        }
        _0x39554e();
      }, false);
      RegisterCommand("+cycleSiren", () => {
        if (!_0x3f887e()) {
          return;
        }
        if (!_0x25031c()) {
          BlipSiren(_0xdb8190.Entity);
          _0x50d80c(true);
        } else {
          _0x2524c7();
        }
      }, false);
      RegisterCommand("-cycleSiren", () => {}, false);
      RegisterCommand("+toggleNeonLights", () => {}, false);
      RegisterCommand("-toggleNeonLights", () => {
        if (!_0xdb8190?.IsDriving && !_0x42d400(_0xdb8190.Entity)) {
          return;
        }
        _0x5d7a2d();
      }, false);
      RegisterCommand("+toggleHazardLights", () => {}, false);
      RegisterCommand("-toggleHazardLights", () => {
        if (!_0xdb8190?.IsDriving) {
          return;
        }
        _0x14d449(_0x346f2c.Hazards);
      }, false);
      RegisterCommand("+toggleLeftIndicator", () => {}, false);
      RegisterCommand("-toggleLeftIndicator", () => {
        if (!_0xdb8190?.IsDriving) {
          return;
        }
        _0x14d449(_0x346f2c.Left);
      }, false);
      RegisterCommand("+toggleRightIndicator", () => {}, false);
      RegisterCommand("-toggleRightIndicator", () => {
        if (!_0xdb8190?.IsDriving) {
          return;
        }
        _0x14d449(_0x346f2c.Right);
      }, false);
    }
    ;
    async function _0xe12902() {
      await _0x44fbba();
      await _0x583bd1();
      await _0x34b8b5();
      await _0xe85bbe();
      await _0x422ce5();
      await _0xace234();
    }
    ;
    (async () => {
      await _0xe12902();
    })();
  })();