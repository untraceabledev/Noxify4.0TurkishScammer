import { j as _0xb8841, f as _0x2218fc } from "./vendor-6c45b22f.js";
import { A as _0x497cea } from "./ui-app-6ee97cab.js";
import { T as _0x4f8bb5 } from "./text-f7ee3e03.js";
import { appName } from "./store-f085383a.js";
import { u as _0x14d776, C as _0x2f6494 } from "./index-d5aaa08b.js";
import { g as _0x928f5e } from "./character-8ebc09ae.js";
import "./commonjsHelpers-c5dac66b.js";
import "./translations-7705db3f.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
const badge = "";
const LeatherPattern = "'https://gta-assets.nopixel.net/images/dark_leather.png'";
function departmentInfo(_0x3bf337) {
  const _0x4a21f0 = {
    LSPD: {
      badge: "https://gta-assets.nopixel.net/images/badges/LSPD.png",
      name: "Los Santos PD",
      color: "#171520"
    },
    "Cyber Crime": {
      badge: "https://gta-assets.nopixel.net/images/badges/mdw-cyber1.png",
      name: "Cyber Crimes",
      color: "#162841"
    },
    SASPR: {
      badge: "https://gta-assets.nopixel.net/images/badges/SAPR.png",
      name: "Park Rangers",
      color: "#2F3823"
    },
    BCSO: {
      badge: "https://gta-assets.nopixel.net/images/badges/BCSO.png",
      name: "Blaine County Sheriff",
      color: "#A67924"
    },
    PBSO: {
      badge: "https://gta-assets.nopixel.net/images/badges/PBSO.png",
      name: "Paleto Bay Sheriff",
      color: "#A67924"
    },
    SDSO: {
      badge: "https://gta-assets.nopixel.net/images/badges/SDSO.png",
      name: "Senora Desert Sheriff",
      color: "#A67924"
    },
    SASP: {
      badge: "https://gta-assets.nopixel.net/images/badges/SASP.png",
      name: "State Troopers",
      color: "#181F2B"
    },
    CPD: {
      badge: "https://gta-assets.nopixel.net/images/badges/CPD.png",
      name: "Cerberus Police Department",
      color: "#161614"
    },
    DEFAULT: {
      badge: "https://gta-assets.nopixel.net/images/badges/Default.png",
      name: "State Official",
      color: "#161614"
    }
  };
  return _0x4a21f0[_0x3bf337] ?? _0x4a21f0.DEFAULT;
}
const Badge = () => {
  const [_0x137a28, _0x35f018] = _0x14d776(appName);
  const _0x175218 = _0x25d2bc => () => {
    _0x35f018({
      ..._0x25d2bc,
      mount: true
    });
    setTimeout(() => _0x35f018({
      mount: false
    }), 5000);
  };
  return _0xb8841.jsx(_0x497cea, {
    name: appName,
    onShow: _0x175218,
    children: _0x137a28?.mount && _0xb8841.jsx("div", {
      className: "badge-app-wrapper",
      children: _0xb8841.jsx("div", {
        className: _0x2218fc("exterior-wrapper", {
          "exterior-wrapper-ff": _0x928f5e().id === 1002
        }),
        style: {
          backgroundImage: "url(" + LeatherPattern + ")"
        },
        children: _0xb8841.jsx("div", {
          className: "interior-wrapper",
          children: _0xb8841.jsxs("div", {
            className: "row",
            children: [_0xb8841.jsx("div", {
              className: "column",
              children: _0xb8841.jsx("div", {
                className: "left-column",
                children: _0xb8841.jsx("div", {
                  className: "information-wrapper",
                  children: _0xb8841.jsxs("div", {
                    className: "information",
                    children: [_0xb8841.jsx("div", {
                      className: "profile-image-holder",
                      children: _0xb8841.jsx("img", {
                        src: _0x137a28?.image,
                        alt: "profile"
                      })
                    }), _0xb8841.jsxs("div", {
                      className: "name-info",
                      children: [_0xb8841.jsx("div", {
                        className: "banner",
                        style: {
                          backgroundColor: departmentInfo(_0x137a28?.department).color
                        },
                        children: _0xb8841.jsx(_0x4f8bb5, {
                          i18n: true,
                          i18nSource: "ui:text:badge",
                          variant: "body2",
                          style: {
                            textAlign: "center"
                          },
                          children: departmentInfo(_0x137a28?.department)?.name
                        })
                      }), _0xb8841.jsxs("div", {
                        className: "name-info-wrap",
                        children: [_0xb8841.jsx("div", {
                          className: "rank",
                          children: _0xb8841.jsx(_0x4f8bb5, {
                            i18n: true,
                            i18nSource: "ui:text:badge",
                            variant: "body1",
                            children: _0x137a28?.rank || "Chief of Police"
                          })
                        }), _0xb8841.jsx("div", {
                          className: "name",
                          children: _0xb8841.jsx(_0x4f8bb5, {
                            variant: "h6",
                            children: _0x137a28?.name || "Francis J. Francer"
                          })
                        })]
                      }), _0xb8841.jsx("div", {
                        className: "callsign",
                        children: _0xb8841.jsxs(_0x4f8bb5, {
                          variant: "body1",
                          children: ["#", _0x137a28?.badge || "499"]
                        })
                      })]
                    })]
                  })
                })
              })
            }), _0xb8841.jsx("div", {
              className: "column",
              children: _0xb8841.jsx("div", {
                className: "right-column",
                children: _0xb8841.jsx("div", {
                  className: "badge-wrapper",
                  children: _0xb8841.jsx("img", {
                    alt: "badge",
                    className: "badge",
                    src: departmentInfo(_0x137a28?.department)?.badge
                  })
                })
              })
            })]
          })
        })
      })
    })
  });
};
const config = () => {
  return {
    name: "badge",
    render: Badge,
    type: _0x2f6494.Application
  };
};
export { config as default };