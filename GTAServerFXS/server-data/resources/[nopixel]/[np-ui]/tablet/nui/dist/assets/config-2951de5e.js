import { c as _0x178a4f } from "./index-f70f3234.js";
import { d as _0x4d337a, i as _0x3d8fde, b as _0x5f1e93, e as _0x3d73bc, z as _0x417aff, s as _0x39a156, t as _0x392f42, o as _0x5d7154, a as _0x501077, N as _0x157b74, l as _0x5d0ebb, H as _0x41f161, f as _0x555d0a, c as _0x26acfb, h as _0x5d0b45, M as _0x15cb7f, j as _0x3c18c6, S as _0x320d46, F as _0x31f386, U as _0x1849be, J as _0x1b143e } from "./index-bc87d183.js";
import { L as _0x18b0b9 } from "./index-8134e99a.js";
const de = "_container_4v1vu_1";
const ue = {
  container: de
};
const _e = "_button_1xgin_1";
const ve = {
  button: _e
};
const fe = "_container_4dcal_1";
const he = "_small_4dcal_29";
const $e = "_input_container_4dcal_33";
const N = {
  container: fe,
  small: he,
  input_container: $e
};
const ge = _0x392f42("<div class=\"w-full flex flex-row items-center justify-center gap-[1vh]\"><div><h1></h1><p>Insert the <!> of the WiFi you want to hack.</p></div><div><input type=\"text\">");
const T = _0x3bbc7c => (() => {
  const _0x106451 = ge();
  const _0x419fbf = _0x106451.firstChild;
  const _0x5a1ba1 = _0x419fbf.firstChild;
  const _0x2f757e = _0x5a1ba1.nextSibling;
  const _0x5a5f75 = _0x2f757e.firstChild;
  const _0x1fe3a8 = _0x5a5f75.nextSibling;
  _0x1fe3a8.nextSibling;
  const _0x5b1c71 = _0x419fbf.nextSibling;
  const _0x2bc8c1 = _0x5b1c71.firstChild;
  _0x3d8fde(_0x5a1ba1, () => _0x3bbc7c.title);
  _0x3d8fde(_0x2f757e, () => _0x3bbc7c.title, _0x1fe3a8);
  _0x2bc8c1.$$input = _0x32ea86 => {
    _0x3bbc7c.setValue(_0x32ea86.currentTarget.value);
  };
  _0x5f1e93(_0x9e7c18 => {
    const _0x4981a8 = N.container;
    const _0x53c39d = {
      [N.small]: _0x3bbc7c.small
    };
    const _0x5de0c6 = N.input_container;
    const _0x1f04fe = {
      [N.small]: _0x3bbc7c.small
    };
    const _0x2c2f34 = _0x3bbc7c.title;
    const _0x27c81e = _0x3bbc7c.small;
    if (_0x4981a8 !== _0x9e7c18._v$) {
      _0x3d73bc(_0x419fbf, _0x9e7c18._v$ = _0x4981a8);
    }
    _0x9e7c18._v$2 = _0x417aff(_0x2f757e, _0x53c39d, _0x9e7c18._v$2);
    if (_0x5de0c6 !== _0x9e7c18._v$3) {
      _0x3d73bc(_0x5b1c71, _0x9e7c18._v$3 = _0x5de0c6);
    }
    _0x9e7c18._v$4 = _0x417aff(_0x5b1c71, _0x1f04fe, _0x9e7c18._v$4);
    if (_0x2c2f34 !== _0x9e7c18._v$5) {
      _0x39a156(_0x2bc8c1, "placeholder", _0x9e7c18._v$5 = _0x2c2f34);
    }
    if (_0x27c81e !== _0x9e7c18._v$6) {
      _0x2bc8c1.disabled = _0x9e7c18._v$6 = _0x27c81e;
    }
    return _0x9e7c18;
  }, {
    _v$: undefined,
    _v$2: undefined,
    _v$3: undefined,
    _v$4: undefined,
    _v$5: undefined,
    _v$6: undefined
  });
  _0x5f1e93(() => _0x2bc8c1.value = _0x3bbc7c.value());
  return _0x106451;
})();
_0x4d337a(["input"]);
const me = _0x392f42("<div><h1>Crack</h1><p>Crack the WiFi to connect");
const ye = () => {
  const {
    setHack: _0x5aabaf,
    macAddress: _0x136d62,
    setMacAddress: _0x369d30,
    ipAddress: _0x9fc818,
    setIpAddress: _0x4b7ba8
  } = V();
  _0x5d7154(() => {
    _0x5aabaf(false);
    _0x4b7ba8("");
    _0x369d30("");
  });
  return [_0x501077(T, {
    title: "MAC Address",
    value: _0x136d62,
    setValue: _0x369d30
  }), _0x501077(T, {
    title: "IP Address",
    value: _0x9fc818,
    setValue: _0x4b7ba8
  }), (() => {
    const _0x1387a3 = me();
    _0x1387a3.$$click = async () => {
      await _0x157b74.execute("salty:checkWifi", _0x136d62(), _0x9fc818());
      _0x5aabaf(true);
    };
    _0x5f1e93(() => _0x3d73bc(_0x1387a3, ve.button));
    return _0x1387a3;
  })()];
};
_0x4d337a(["click"]);
const be = "_header_15ts7_1";
const ke = "_button_15ts7_28";
const Ce = "_fail_15ts7_40";
const D = {
  header: be,
  button: ke,
  fail: Ce
};
const pe = "_keybinds_container_ji56a_1";
const we = "_keybind_container_ji56a_14";
const Ae = "_success_ji56a_25";
const xe = "_keybind_ji56a_1";
const Me = "_error_ji56a_31";
const Fe = "_progress_container_ji56a_55";
const Se = "_bar_ji56a_65";
const Ie = "_progress_ji56a_55";
const je = "_seconds_ji56a_78";
const k = {
  keybinds_container: pe,
  keybind_container: we,
  success: Ae,
  keybind: xe,
  error: Me,
  progress_container: Fe,
  bar: Se,
  progress: Ie,
  seconds: je
};
const Le = _0x392f42("<div class=\"mt-[3vh] flex flex-row items-center justify-center gap-[0.5vh]\"><div><div><div></div></div></div><div> sec left");
const He = _0x392f42("<div class=\"flex w-full flex-col items-center justify-start\"><div>");
const Ke = _0x392f42("<svg><path d=\"M36 8.5C36 13.1944 32.1944 17 27.5 17C22.8056 17 19 13.1944 19 8.5C19 3.80558 22.8056 0 27.5 0C32.1944 0 36 3.80558 36 8.5ZM20.0863 8.5C20.0863 12.5945 23.4055 15.9137 27.5 15.9137C31.5945 15.9137 34.9137 12.5945 34.9137 8.5C34.9137 4.40553 31.5945 1.0863 27.5 1.0863C23.4055 1.0863 20.0863 4.40553 20.0863 8.5Z\" fill=\"white\" fill-opacity=\"0.28\"></svg>", false, true);
const Pe = _0x392f42("<svg><rect y=\"8\" width=\"15\" height=\"1\" fill=\"white\" fill-opacity=\"0.28\"></svg>", false, true);
const We = _0x392f42("<svg><circle cx=\"27.5\" cy=\"8.5\" r=\"5.5\" fill=\"#00F8B9\" fill-opacity=\"0.25\"></svg>", false, true);
const Re = _0x392f42("<svg><path d=\"M24 9.125L25.9091 11L31 6\" stroke=\"#00F8B9\"></svg>", false, true);
const Ee = _0x392f42("<svg><path d=\"M36 8.5C36 13.1944 32.1944 17 27.5 17C22.8056 17 19 13.1944 19 8.5C19 3.80558 22.8056 0 27.5 0C32.1944 0 36 3.80558 36 8.5ZM20.0863 8.5C20.0863 12.5945 23.4055 15.9137 27.5 15.9137C31.5945 15.9137 34.9137 12.5945 34.9137 8.5C34.9137 4.40553 31.5945 1.0863 27.5 1.0863C23.4055 1.0863 20.0863 4.40553 20.0863 8.5Z\" fill=\"#00F8B9\"></svg>", false, true);
const Ne = _0x392f42("<svg><rect y=\"8\" width=\"15\" height=\"1\" fill=\"#00F8B9\"></svg>", false, true);
const Ue = _0x392f42("<svg><circle cx=\"27.5\" cy=\"8.5\" r=\"5.5\" fill=\"#F86969\" fill-opacity=\"0.25\"></svg>", false, true);
const Te = _0x392f42("<svg><path d=\"M36 8.5C36 13.1944 32.1944 17 27.5 17C22.8056 17 19 13.1944 19 8.5C19 3.80558 22.8056 0 27.5 0C32.1944 0 36 3.80558 36 8.5ZM20.0863 8.5C20.0863 12.5945 23.4055 15.9137 27.5 15.9137C31.5945 15.9137 34.9137 12.5945 34.9137 8.5C34.9137 4.40553 31.5945 1.0863 27.5 1.0863C23.4055 1.0863 20.0863 4.40553 20.0863 8.5Z\" fill=\"#F86969\"></svg>", false, true);
const Ve = _0x392f42("<svg><path d=\"M30 6L27.5 8.5M25 11L27.5 8.5M27.5 8.5L25 6L30 11\" stroke=\"#F86969\"></svg>", false, true);
const Ze = _0x392f42("<svg><rect y=\"8\" width=\"15\" height=\"1\" fill=\"#F86969\" fill-opacity=\"0.55\"></svg>", false, true);
const Be = _0x392f42("<div class=\"flex flex-col items-center justify-start\"><div><div></div></div><svg class=\"absolute mr-[2vh] mt-[5vh]\" width=\"3.33vh\" height=\"1.57vh\" viewBox=\"0 0 36 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">");
const Ye = () => {
  const {
    setHackResult: _0x53ed5c,
    setHack: _0x585e79,
    macAddress: _0x5eca6f,
    ipAddress: _0x440247
  } = V();
  const _0x2df7e5 = 5;
  const [_0x259820, _0x13b3b2] = _0x5d0ebb(_0x2df7e5);
  let _0x51efc4 = null;
  let _0x4a674d = null;
  _0x5d7154(() => {
    _0x53ed5c(null);
    _0x51efc4 = setInterval(() => {
      _0x13b3b2(_0x259820() - 1);
    }, 1000);
    _0x4a674d = setTimeout(() => {
      if (_0x51efc4) {
        _0x50a26c();
        clearInterval(_0x51efc4);
        _0x51efc4 = null;
      }
    }, _0x2df7e5 * 1000);
  });
  _0x41f161(() => {
    clearInterval(_0x51efc4);
    _0x51efc4 = null;
    clearTimeout(_0x4a674d);
    _0x4a674d = null;
  });
  const _0x23e36a = async () => {
    clearInterval(_0x51efc4);
    _0x51efc4 = null;
    if (!(await _0x157b74.execute("salty:connectWifi", _0x5eca6f(), _0x440247()))) {
      _0x50a26c();
      return;
    }
    _0x53ed5c(true);
    _0x555d0a("cracker", "Successfully connected to the WiFi.");
    setTimeout(() => {
      _0x585e79(false);
    }, 3000);
  };
  const _0x50a26c = () => {
    clearInterval(_0x51efc4);
    _0x51efc4 = null;
    _0x53ed5c(false);
    _0x555d0a("cracker", "Failed to connect to the WiFi.");
    setTimeout(() => {
      _0x585e79(false);
    }, 3000);
  };
  const _0x2f10d2 = () => {
    const _0x104439 = [..."QWERTYUIOPASDFGHJKLZXCVBNM1234567890"];
    const _0x85a046 = [];
    const _0xc17ae2 = _0x1849be.MathUtils.getRandomNumber(10, 15);
    for (let _0x400ba0 = 0; _0x400ba0 < _0xc17ae2; _0x400ba0++) {
      const _0x48a2c1 = _0x1849be.MathUtils.getRandomNumber(0, _0x104439.length - 1);
      _0x85a046.push(_0x104439[_0x48a2c1]);
      _0x104439.splice(_0x48a2c1, 1);
    }
    return _0x85a046;
  };
  const [_0x2b6b01, _0x4a626d] = _0x26acfb([]);
  const [_0x14f1ab, _0x1c798b] = _0x26acfb([]);
  const [_0x454e11, _0x53d9a9] = _0x26acfb(_0x2f10d2());
  const _0x52861f = _0x287cb6 => {
    const _0x4562c1 = _0x287cb6.key.toUpperCase();
    if (!_0x51efc4) {
      return;
    }
    if (_0x454e11[_0x2b6b01.length] === _0x4562c1) {
      _0x4a626d([..._0x2b6b01, _0x454e11.indexOf(_0x4562c1)]);
      if (_0x454e11.length === _0x2b6b01.length) {
        _0x23e36a();
      }
    } else {
      _0x1c798b([..._0x14f1ab, _0x2b6b01.length]);
      _0x50a26c();
    }
  };
  _0x5d7154(() => {
    _0x13b3b2(_0x2df7e5);
    _0x4a626d([]);
    _0x1c798b([]);
    _0x53d9a9(_0x2f10d2());
    document.addEventListener("keydown", _0x52861f);
  });
  _0x41f161(() => {
    document.removeEventListener("keydown", _0x52861f);
  });
  let _0x2bc095;
  return (() => {
    const _0x57252e = He();
    const _0x34371b = _0x57252e.firstChild;
    const _0x2cc69c = _0x2bc095;
    if (typeof _0x2cc69c == "function") {
      _0x1b143e(_0x2cc69c, _0x34371b);
    } else {
      _0x2bc095 = _0x34371b;
    }
    _0x3d8fde(_0x34371b, _0x501077(_0x31f386, {
      each: _0x454e11,
      children: (_0x5c6280, _0xe5f4dd) => (() => {
        const _0x32d6f9 = Be();
        const _0x4cb4db = _0x32d6f9.firstChild;
        const _0x2deb75 = _0x4cb4db.firstChild;
        const _0x117485 = _0x4cb4db.nextSibling;
        _0x3d8fde(_0x2deb75, _0x5c6280);
        _0x3d8fde(_0x117485, _0x501077(_0x5d0b45, {
          get children() {
            return [_0x501077(_0x15cb7f, {
              get when() {
                return _0x3c18c6(() => !_0x2b6b01.includes(_0xe5f4dd()))() && !_0x14f1ab.includes(_0xe5f4dd());
              },
              get children() {
                return [Ke(), _0x501077(_0x320d46, {
                  get when() {
                    return _0xe5f4dd() !== 0;
                  },
                  get children() {
                    return Pe();
                  }
                })];
              }
            }), _0x501077(_0x15cb7f, {
              get when() {
                return _0x2b6b01.includes(_0xe5f4dd());
              },
              get children() {
                return [We(), Re(), Ee(), _0x501077(_0x320d46, {
                  get when() {
                    return _0xe5f4dd() !== 0;
                  },
                  get children() {
                    return Ne();
                  }
                })];
              }
            }), _0x501077(_0x15cb7f, {
              get when() {
                return _0x14f1ab.includes(_0xe5f4dd());
              },
              get children() {
                return [Ue(), Te(), Ve(), _0x501077(_0x320d46, {
                  get when() {
                    return _0xe5f4dd() !== 0;
                  },
                  get children() {
                    return Ze();
                  }
                })];
              }
            })];
          }
        }));
        _0x5f1e93(_0x27a1b9 => {
          const _0x1d2be6 = k.keybind_container;
          const _0x1834cf = {
            [k.success]: _0x2b6b01.includes(_0xe5f4dd()),
            [k.error]: _0x14f1ab.includes(_0xe5f4dd())
          };
          const _0x1824cb = k.keybind;
          if (_0x1d2be6 !== _0x27a1b9._v$7) {
            _0x3d73bc(_0x4cb4db, _0x27a1b9._v$7 = _0x1d2be6);
          }
          _0x27a1b9._v$8 = _0x417aff(_0x4cb4db, _0x1834cf, _0x27a1b9._v$8);
          if (_0x1824cb !== _0x27a1b9._v$9) {
            _0x3d73bc(_0x2deb75, _0x27a1b9._v$9 = _0x1824cb);
          }
          return _0x27a1b9;
        }, {
          _v$7: undefined,
          _v$8: undefined,
          _v$9: undefined
        });
        return _0x32d6f9;
      })()
    }));
    _0x3d8fde(_0x57252e, _0x501077(_0x320d46, {
      get when() {
        return _0x2bc095 && _0x259820() < _0x2df7e5;
      },
      get children() {
        const _0x7f4d0e = Le();
        const _0x27a1b4 = _0x7f4d0e.firstChild;
        const _0x1cf44a = _0x27a1b4.firstChild;
        const _0x1573ba = _0x1cf44a.firstChild;
        const _0x5dc60c = _0x27a1b4.nextSibling;
        const _0x20275c = _0x5dc60c.firstChild;
        _0x3d8fde(_0x5dc60c, _0x259820, _0x20275c);
        _0x5f1e93(_0x3d84e9 => {
          const _0x13cd81 = _0x2bc095.clientWidth + "px";
          const _0x1bb4fd = k.progress_container;
          const _0x2c9940 = k.bar;
          const _0x53083d = k.progress;
          const _0x2babca = _0x259820() / _0x2df7e5 * 100 + "%";
          const _0x19e6c9 = k.seconds;
          if (_0x13cd81 !== _0x3d84e9._v$) {
            if ((_0x3d84e9._v$ = _0x13cd81) != null) {
              _0x7f4d0e.style.setProperty("width", _0x13cd81);
            } else {
              _0x7f4d0e.style.removeProperty("width");
            }
          }
          if (_0x1bb4fd !== _0x3d84e9._v$2) {
            _0x3d73bc(_0x27a1b4, _0x3d84e9._v$2 = _0x1bb4fd);
          }
          if (_0x2c9940 !== _0x3d84e9._v$3) {
            _0x3d73bc(_0x1cf44a, _0x3d84e9._v$3 = _0x2c9940);
          }
          if (_0x53083d !== _0x3d84e9._v$4) {
            _0x3d73bc(_0x1573ba, _0x3d84e9._v$4 = _0x53083d);
          }
          if (_0x2babca !== _0x3d84e9._v$5) {
            if ((_0x3d84e9._v$5 = _0x2babca) != null) {
              _0x1573ba.style.setProperty("width", _0x2babca);
            } else {
              _0x1573ba.style.removeProperty("width");
            }
          }
          if (_0x19e6c9 !== _0x3d84e9._v$6) {
            _0x3d73bc(_0x5dc60c, _0x3d84e9._v$6 = _0x19e6c9);
          }
          return _0x3d84e9;
        }, {
          _v$: undefined,
          _v$2: undefined,
          _v$3: undefined,
          _v$4: undefined,
          _v$5: undefined,
          _v$6: undefined
        });
        return _0x7f4d0e;
      }
    }), null);
    _0x5f1e93(() => _0x3d73bc(_0x34371b, k.keybinds_container));
    return _0x57252e;
  })();
};
const De = _0x392f42("<div class=\"flex w-full flex-row items-center justify-between gap-[1vh]\">");
const Je = _0x392f42("<div><h1>Press those buttons as fast as you can</h1><p>Hacking...");
const Oe = _0x392f42("<div><h1></h1><p>");
const Xe = _0x392f42("<div class=\"flex w-full translate-y-[-3vh] flex-col items-start justify-start gap-[1vh]\">");
const qe = () => {
  const {
    hackResult: _0x8054dd,
    ipAddress: _0x7dd376,
    setIpAddress: _0x390b99,
    macAddress: _0x3c2063,
    setMacAddress: _0x3551a7
  } = V();
  return [(() => {
    const _0x2adabf = De();
    _0x3d8fde(_0x2adabf, _0x501077(T, {
      small: true,
      title: "MAC Address",
      value: _0x3c2063,
      setValue: _0x3551a7
    }), null);
    _0x3d8fde(_0x2adabf, _0x501077(T, {
      small: true,
      title: "IP Address",
      value: _0x7dd376,
      setValue: _0x390b99
    }), null);
    return _0x2adabf;
  })(), (() => {
    const _0x1f66f9 = Je();
    _0x5f1e93(() => _0x3d73bc(_0x1f66f9, D.header));
    return _0x1f66f9;
  })(), (() => {
    const _0x55592a = Xe();
    _0x3d8fde(_0x55592a, _0x501077(Ye, {}), null);
    _0x3d8fde(_0x55592a, _0x501077(_0x320d46, {
      get when() {
        return _0x8054dd() !== null;
      },
      get children() {
        const _0x234bc4 = Oe();
        const _0xab8f04 = _0x234bc4.firstChild;
        const _0x528ee2 = _0xab8f04.nextSibling;
        _0x3d8fde(_0xab8f04, () => _0x8054dd() ? "Hacking done!" : "Hacking failed!");
        _0x3d8fde(_0x528ee2, () => _0x8054dd() ? "You successfully hacked the WiFi." : "You failed to hack the WiFi.");
        _0x5f1e93(_0x44e8c0 => {
          const _0x46d9da = D.button;
          const _0x162b0e = {
            [D.fail]: !_0x8054dd()
          };
          if (_0x46d9da !== _0x44e8c0._v$) {
            _0x3d73bc(_0x234bc4, _0x44e8c0._v$ = _0x46d9da);
          }
          _0x44e8c0._v$2 = _0x417aff(_0x234bc4, _0x162b0e, _0x44e8c0._v$2);
          return _0x44e8c0;
        }, {
          _v$: undefined,
          _v$2: undefined
        });
        return _0x234bc4;
      }
    }), null);
    return _0x55592a;
  })()];
};
const ze = _0x392f42("<div>");
const Ge = () => {
  const {
    hack: _0x4d1954
  } = V();
  return (() => {
    const _0x451f71 = ze();
    _0x3d8fde(_0x451f71, _0x501077(_0x18b0b9, {
      get name() {
        return st.name;
      }
    }), null);
    _0x3d8fde(_0x451f71, _0x501077(_0x5d0b45, {
      get children() {
        return [_0x501077(_0x15cb7f, {
          get when() {
            return !_0x4d1954();
          },
          get children() {
            return _0x501077(ye, {});
          }
        }), _0x501077(_0x15cb7f, {
          get when() {
            return _0x4d1954();
          },
          get children() {
            return _0x501077(qe, {});
          }
        })];
      }
    }), null);
    _0x5f1e93(() => _0x3d73bc(_0x451f71, ue.container));
    return _0x451f71;
  })();
};
const [Qe, et] = _0x178a4f(() => {
  const [_0x53c3d2, _0x3f55a1] = _0x5d0ebb(false);
  const [_0x254a61, _0x53dbfc] = _0x5d0ebb(null);
  const [_0x151473, _0x3f090] = _0x5d0ebb("");
  const [_0x1aaa8c, _0x251bda] = _0x5d0ebb("");
  return {
    hack: _0x53c3d2,
    setHack: _0x3f55a1,
    hackResult: _0x254a61,
    setHackResult: _0x53dbfc,
    macAddress: _0x151473,
    setMacAddress: _0x3f090,
    ipAddress: _0x1aaa8c,
    setIpAddress: _0x251bda
  };
});
const V = () => et();
const tt = () => _0x501077(Qe, {
  get children() {
    return _0x501077(Ge, {});
  }
});
const nt = "" + new URL("cracker-icon-4eb4bcce.png", import.meta.url).href;
const st = {
  icon: nt,
  enabled: true,
  onDock: false,
  name: "cracker",
  label: "SmokeCrack",
  description: "Enter details and hack specific Wi-Fi networks",
  isEnabled: true,
  isLaptop: true,
  requiresVPN: true,
  render: () => _0x501077(tt, {})
};
export { st as default };