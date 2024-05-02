import { d as _0xa24e58, g as _0x146081, c as _0x42ea29, o as _0x19b09d, a, i as _0x1ed5ad, F as _0x29bef9, b as _0x30104f, e as _0x35bf9b, S as _0xf3a700, t as _0x3d45ee, s as _0x262342, M as _0x280d02, N as _0x371667, f as _0x20b4a1, h as _0x5bf362, j as _0x2a5ee2 } from "./index-bc87d183.js";
import { L as _0x58eb11 } from "./index-8134e99a.js";
const M = "_container_xacd3_1";
const P = "_banner_xacd3_11";
const k = "_apps_xacd3_16";
const F = "_app_xacd3_16";
const U = "_box_xacd3_36";
const R = "_install_xacd3_71";
const B = "_price_xacd3_93";
const H = "_installed_xacd3_116";
const T = "_notAvailable_xacd3_134";
const c = {
  container: M,
  banner: P,
  apps: k,
  app: F,
  box: U,
  install: R,
  price: B,
  installed: H,
  notAvailable: T
};
const Y = _0x3d45ee("<span>BUTC");
const q = _0x3d45ee("<div class=\"flex flex-row items-center justify-between gap-[0.2vh]\"><div>Install</div><div>");
const z = _0x3d45ee("<div>Installed");
const G = _0x3d45ee("<div>Not Available");
const J = _0x3d45ee("<div><div class=\"flex h-full w-full flex-row items-start justify-between\"><div><img></div><div class=\"items-between flex h-full flex-col justify-between\"><h1></h1><p>");
const K = _0x3d45ee("<div><div>Apps</div><div class=\"grid w-full grid-cols-4 grid-rows-4 gap-[1vh]\">");
const O = _0x37d1cd => (() => {
  const _0x26f402 = J();
  const _0x148c8b = _0x26f402.firstChild;
  const _0x2ccdbf = _0x148c8b.firstChild;
  const _0xb0ed66 = _0x2ccdbf.firstChild;
  const _0x447a30 = _0x2ccdbf.nextSibling;
  const _0x256638 = _0x447a30.firstChild;
  const _0x5556e1 = _0x256638.nextSibling;
  _0x262342(_0xb0ed66, "draggable", false);
  _0x1ed5ad(_0x256638, () => _0x37d1cd.app.label);
  _0x1ed5ad(_0x5556e1, () => _0x37d1cd.app.description);
  _0x1ed5ad(_0x447a30, a(_0x5bf362, {
    get children() {
      return [a(_0x280d02, {
        get when() {
          return _0x37d1cd.app.isEnabled;
        },
        get children() {
          return [a(_0xf3a700, {
            get when() {
              return !_0x37d1cd.installed && !_0x37d1cd.app.isPreInstalled;
            },
            get children() {
              const _0x851029 = q();
              const _0x5a933c = _0x851029.firstChild;
              const _0x363d11 = _0x5a933c.nextSibling;
              _0x5a933c.$$click = async () => {
                if (await _0x371667.execute("appstore:buyApp", _0x37d1cd.app.name)) {
                  _0x20b4a1("appstore", "App Installed successfully");
                  _0x37d1cd.fetchData();
                } else {
                  _0x20b4a1("appstore", "You do not have enough crypto to buy this app");
                }
              };
              _0x1ed5ad(_0x363d11, a(_0x5bf362, {
                get children() {
                  return [a(_0x280d02, {
                    get when() {
                      return _0x37d1cd.price;
                    },
                    get children() {
                      return [_0x2a5ee2(() => _0x37d1cd.price), " ", Y()];
                    }
                  }), a(_0x280d02, {
                    get when() {
                      return !_0x37d1cd.price;
                    },
                    children: "Free"
                  })];
                }
              }));
              _0x30104f(_0x42fa07 => {
                const _0x160d9f = c.install;
                const _0x29922d = c.price;
                if (_0x160d9f !== _0x42fa07._v$) {
                  _0x35bf9b(_0x5a933c, _0x42fa07._v$ = _0x160d9f);
                }
                if (_0x29922d !== _0x42fa07._v$2) {
                  _0x35bf9b(_0x363d11, _0x42fa07._v$2 = _0x29922d);
                }
                return _0x42fa07;
              }, {
                _v$: undefined,
                _v$2: undefined
              });
              return _0x851029;
            }
          }), a(_0xf3a700, {
            get when() {
              return _0x37d1cd.installed || _0x37d1cd.app.isPreInstalled;
            },
            get children() {
              const _0x46e3f7 = z();
              _0x30104f(() => _0x35bf9b(_0x46e3f7, c.installed));
              return _0x46e3f7;
            }
          })];
        }
      }), a(_0x280d02, {
        get when() {
          return !_0x37d1cd.app.isEnabled;
        },
        get children() {
          const _0x3813a5 = G();
          _0x30104f(() => _0x35bf9b(_0x3813a5, c.notAvailable));
          return _0x3813a5;
        }
      })];
    }
  }), null);
  _0x30104f(_0x11db29 => {
    const _0x3bf9b4 = c.app;
    const _0x535293 = c.box;
    const _0x50adff = _0x37d1cd.app.icon;
    const _0x65c941 = _0x37d1cd.app.name;
    if (_0x3bf9b4 !== _0x11db29._v$3) {
      _0x35bf9b(_0x26f402, _0x11db29._v$3 = _0x3bf9b4);
    }
    if (_0x535293 !== _0x11db29._v$4) {
      _0x35bf9b(_0x2ccdbf, _0x11db29._v$4 = _0x535293);
    }
    if (_0x50adff !== _0x11db29._v$5) {
      _0x262342(_0xb0ed66, "src", _0x11db29._v$5 = _0x50adff);
    }
    if (_0x65c941 !== _0x11db29._v$6) {
      _0x262342(_0xb0ed66, "alt", _0x11db29._v$6 = _0x65c941);
    }
    return _0x11db29;
  }, {
    _v$3: undefined,
    _v$4: undefined,
    _v$5: undefined,
    _v$6: undefined
  });
  return _0x26f402;
})();
const Q = () => {
  const _0x5bae70 = _0x146081();
  const [_0x575e4b, _0x26d097] = _0x42ea29({});
  const [_0x399d1f, _0x38957b] = _0x42ea29({});
  const _0x3ff329 = async () => {
    const _0x415a20 = await _0x371667.execute("appstore:getData");
    _0x26d097(_0x415a20);
    const _0x47fd8f = await _0x371667.execute("appstore:getPrices");
    _0x38957b(_0x47fd8f);
  };
  _0x19b09d(async () => {
    await _0x3ff329();
  });
  return a(_0xf3a700, {
    get when() {
      return _0x575e4b.apps !== undefined;
    },
    get children() {
      const _0x1f79ff = K();
      const _0x1bb99d = _0x1f79ff.firstChild;
      const _0x15cf58 = _0x1bb99d.nextSibling;
      _0x1ed5ad(_0x1f79ff, a(_0x58eb11, {
        get name() {
          return W.name;
        }
      }), _0x1bb99d);
      _0x1ed5ad(_0x15cf58, a(_0x29bef9, {
        get each() {
          return _0x5bae70.filter(_0x5af503 => _0x5af503.name !== "appstore").sort(_0x53d61b => _0x53d61b.isEnabled ? -1 : 1);
        },
        children: _0x3fd2bd => a(O, {
          app: _0x3fd2bd,
          get price() {
            return _0x399d1f[_0x3fd2bd.name];
          },
          get installed() {
            return _0x575e4b.apps.includes(_0x3fd2bd.name);
          },
          fetchData: _0x3ff329
        })
      }));
      _0x30104f(_0x467a0f => {
        const _0x396b10 = c.container;
        const _0x1dba09 = c.apps;
        if (_0x396b10 !== _0x467a0f._v$7) {
          _0x35bf9b(_0x1f79ff, _0x467a0f._v$7 = _0x396b10);
        }
        if (_0x1dba09 !== _0x467a0f._v$8) {
          _0x35bf9b(_0x1bb99d, _0x467a0f._v$8 = _0x1dba09);
        }
        return _0x467a0f;
      }, {
        _v$7: undefined,
        _v$8: undefined
      });
      return _0x1f79ff;
    }
  });
};
_0xa24e58(["click"]);
const V = "" + new URL("appstore-icon-6e46b5b6.png", import.meta.url).href;
const W = {
  icon: V,
  enabled: true,
  onDock: false,
  name: "appstore",
  label: "App Store",
  description: "Download and install applications",
  isEnabled: true,
  isLaptop: true,
  render: () => a(Q, {})
};
export { W as default };