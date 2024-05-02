import { j as _0x2b8b0e, R as _0x5966a5, k as _0x4f004d } from "./vendor-6c45b22f.js";
import { m as _0x637479, a as _0x508117 } from "./actions-c0279434.js";
import { s as _0x420cbd, n as _0x22bb3c } from "./index-d5aaa08b.js";
import { I as _0x286256 } from "./icon-7f5cdae2.js";
import { F as _0x2b7fc4 } from "./input-c6588ceb.js";
import { S as _0x5c44bb } from "./simple-form-6b6335d8.js";
import _0x1d90fb from "./store-1b3966b7.js";
const PhoneBattery = () => {
  return _0x2b8b0e.jsxs("svg", {
    width: "25",
    height: "12",
    viewBox: "0 0 25 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [_0x2b8b0e.jsx("path", {
      opacity: "0.35",
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2.98438 0.500122H20.2031C21.4544 0.500122 22.4688 1.61941 22.4688 3.00012V9.50012C22.4688 10.8808 21.4544 12.0001 20.2031 12.0001H2.98438C1.73311 12.0001 0.71875 10.8808 0.71875 9.50012V3.00012C0.71875 1.61941 1.73311 0.500122 2.98438 0.500122ZM2.9845 1.50001C2.23374 1.50001 1.62512 2.17159 1.62512 3.00001V9.50001C1.62512 10.3284 2.23374 11 2.9845 11H20.2032C20.954 11 21.5626 10.3284 21.5626 9.50001V3.00001C21.5626 2.17159 20.954 1.50001 20.2032 1.50001H2.9845Z",
      fill: "white"
    }), _0x2b8b0e.jsx("path", {
      opacity: "0.4",
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M23.375 3.79993C24.1819 4.2551 24.7344 5.1814 24.7344 6.25007C24.7344 7.31874 24.1819 8.24504 23.375 8.70022V3.79993Z",
      fill: "white"
    }), _0x2b8b0e.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.4375 2.50006H19.75C20.2505 2.50006 20.6563 2.94778 20.6563 3.50006V9.00006C20.6563 9.55235 20.2505 10.0001 19.75 10.0001H3.4375C2.93699 10.0001 2.53125 9.55235 2.53125 9.00006V3.50006C2.53125 2.94778 2.93699 2.50006 3.4375 2.50006Z",
      fill: "white"
    })]
  });
};
const index = "";
const mapStateToProps = _0x5a875f => ({
  character: _0x5a875f.character,
  game: _0x5a875f.game,
  phone: _0x5a875f.phone,
  top: _0x5a875f[_0x1d90fb.key]
});
const mapDispatchToProps = {
  connectToWifi: _0x4e612b => {
    const _0x37feb6 = _0x26671b => {
      const _0x585b28 = [..._0x26671b.phone.wifiConnected].filter(_0x73dbe8 => _0x73dbe8.id !== _0x4e612b.id).map(_0x2a20af => ({
        ..._0x2a20af,
        active: false
      }));
      _0x585b28.push({
        ..._0x4e612b,
        active: true
      });
      return {
        ..._0x26671b,
        phone: {
          ..._0x26671b.phone,
          wifiConnected: _0x585b28
        }
      };
    };
    return {
      cb: _0x37feb6,
      type: "np-ui-action"
    };
  }
};
const wifis = [{
  id: 1,
  name: "PDM Employees",
  location: "pdm",
  password: "pdm123"
}, {
  id: 2,
  name: "Fastlane Employees",
  location: "fastlane",
  password: "fastlane123"
}, {
  id: 3,
  name: "Tuner Shop Employees",
  location: "tuner",
  password: "tunershop123"
}, {
  id: 4,
  name: "Public Hotspot",
  location: "heist_wifi_spot_1",
  password: ""
}, {
  id: 5,
  name: "Public Hotspot",
  location: "heist_wifi_spot_2",
  password: "",
  check: () => _0x420cbd.getState().phone.hasUsbPaleto
}, {
  id: 6,
  name: "Public Hotspot",
  location: "heist_wifi_spot_3",
  password: "",
  check: () => _0x420cbd.getState().phone.hasUsbUpper
}, {
  id: 7,
  name: "Public Hotspot",
  location: "heist_wifi_spot_4",
  password: "",
  check: () => _0x420cbd.getState().phone.hasUsbLower
}, {
  id: 8,
  name: "Public Hotspot",
  location: "imports_shop_wifi",
  password: ""
}, {
  id: 9,
  name: "Public Hotspot",
  location: "heist_wifi_spot_5",
  password: "",
  check: () => _0x420cbd.getState().phone.hasUsbLower
}];
const WifiForm = ({
  location: _0x36d168,
  ..._0x2041cf
}) => {
  const _0x215a14 = wifis.filter(_0x399f36 => _0x399f36.location === _0x36d168);
  return _0x2b8b0e.jsx(_0x5c44bb, {
    defaultValues: {
      network: _0x215a14[0].id
    },
    elements: [{
      name: "network",
      render: ({
        onChange: _0x161efa,
        value: _0xf3652b
      }) => _0x2b8b0e.jsx(_0x2b7fc4.Select, {
        i18n: true,
        label: "Network",
        items: _0x215a14,
        onChange: _0x161efa,
        value: _0xf3652b
      })
    }, {
      name: "password",
      render: ({
        onChange: _0x46e57c,
        value: _0x3a97f3
      }) => _0x2b8b0e.jsx(_0x2b7fc4.Password, {
        onChange: _0x46e57c,
        value: _0x3a97f3
      }),
      validate: {
        fn: (_0x368dd7, {
          network: _0x4f2c8a
        }) => {
          try {
            const _0x4f2f43 = _0x215a14.find(_0x27cf84 => _0x27cf84.id === _0x4f2c8a);
            return !_0x4f2f43.password || _0x368dd7 === _0x4f2f43.password;
          } catch (_0x1f12fa) {
            return false;
          }
        },
        message: "Password incorrect"
      }
    }],
    onCancel: () => _0x637479(false),
    onSubmit: ({
      network: _0xc95273
    }) => {
      _0x637479();
      const _0x6cd8d5 = _0x215a14.find(_0x1731af => _0x1731af.id === _0xc95273);
      _0x2041cf.connectToWifi(_0x6cd8d5);
    }
  });
};
const ContentTop = _0x2ad192 => {
  const _0x3d47a3 = _0x2ad192.game.location;
  const _0x108289 = wifis.find(_0x13165a => _0x13165a.location === _0x3d47a3);
  const _0x54bed7 = !!_0x108289 && (_0x108289.check ? _0x108289.check() : true);
  const _0x2b7835 = _0x2ad192.phone.wifiConnected.filter(_0x2b9453 => _0x2b9453.location === _0x3d47a3 && _0x2b9453.active === true).length > 0;
  const [_0x3a6486, _0x5be2d4] = _0x5966a5.useState(true);
  const _0x3c4705 = () => {
    _0x5be2d4(!_0x3a6486);
    _0x22bb3c("np-ui:togglePhoneNotificationSounds", {
      status: _0x3a6486 ? "off" : "on"
    });
  };
  return _0x2b8b0e.jsxs("div", {
    className: "header-wrap",
    children: [_0x2b8b0e.jsxs("div", {
      className: "header-left",
      children: [_0x2b8b0e.jsx("h1", {
        children: _0x2ad192.game.time
      }), _0x2ad192.phone.appsWithNotifications.includes("call-history") && _0x2b8b0e.jsx(_0x286256, {
        icon: "phone-missed",
        size: "sm"
      }), _0x2ad192.phone.appsWithNotifications.includes("conversations") && _0x2b8b0e.jsx(_0x286256, {
        icon: "comment-alt",
        size: "sm"
      })]
    }), _0x2b8b0e.jsx("div", {
      className: "header-notch"
    }), _0x2b8b0e.jsxs("div", {
      className: "header-right",
      children: [_0x2b8b0e.jsx(_0x286256, {
        onClick: _0x3c4705,
        icon: _0x3a6486 ? "bell" : "bell-slash",
        size: "sm"
      }), _0x2ad192.phone.hasVpn ? _0x2b8b0e.jsx(_0x286256, {
        icon: "user-secret",
        size: "sm"
      }) : _0x2b8b0e.jsxs(_0x2b8b0e.Fragment, {
        children: [!_0x54bed7 && _0x2b8b0e.jsx(_0x286256, {
          icon: "wifi",
          size: "sm",
          style: {
            color: "#607D8B"
          }
        }), _0x54bed7 && _0x2b8b0e.jsx("span", {
          onClick: () => _0x508117(_0x2b8b0e.jsx(WifiForm, {
            location: _0x2ad192.game.location,
            ..._0x2ad192
          })),
          children: _0x2b8b0e.jsx(_0x286256, {
            icon: "wifi",
            size: "sm",
            style: _0x2b7835 ? {} : {
              color: "#607D8B"
            }
          })
        })]
      }), _0x2b8b0e.jsx(PhoneBattery, {})]
    })]
  });
};
const Container = _0x4f004d(mapStateToProps, mapDispatchToProps)(ContentTop);
export { Container as C };