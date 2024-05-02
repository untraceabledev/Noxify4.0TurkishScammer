import { j as _0x1b7c68, f as _0x35c5fa } from "./vendor-6c45b22f.js";
import { appName } from "./store-af4a36bf.js";
import { A as _0x53dcc } from "./ui-app-6ee97cab.js";
import { u as _0x533277, C as _0x199d2b } from "./index-d5aaa08b.js";
import { I as _0x8763e2 } from "./icon-7f5cdae2.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
const container = "";
const TowTruckControlsApp = () => {
  const [_0x10a81e, _0x4fd53b] = _0x533277(appName);
  const _0x20fdf3 = _0x12be56 => {
    _0x4fd53b({
      isLowered: _0x12be56?.isLowered
    });
  };
  const _0x39e63d = () => {
    _0x4fd53b({
      show: false
    });
  };
  const _0x33de0f = _0x53cdc5 => {
    _0x4fd53b({
      show: true,
      isLowered: _0x53cdc5.isLowered
    });
  };
  return _0x1b7c68.jsx(_0x53dcc, {
    store: true,
    name: appName,
    onEvent: _0x20fdf3,
    onHide: _0x39e63d,
    onShow: _0x33de0f,
    children: _0x10a81e.show && _0x1b7c68.jsx("div", {
      className: "towtruck-wrapper",
      children: _0x1b7c68.jsxs("div", {
        className: "towtruck-controls",
        children: [_0x1b7c68.jsx("h1", {
          className: "plate",
          children: "Bed State"
        }), _0x1b7c68.jsxs("div", {
          className: "buttons",
          children: [_0x1b7c68.jsx("button", {
            children: _0x1b7c68.jsx(_0x8763e2, {
              icon: "play",
              style: {
                transform: "rotate(-90deg)"
              },
              className: _0x35c5fa("button-icon", {
                active: _0x10a81e.isLowered === false
              })
            })
          }), _0x1b7c68.jsx("button", {
            children: _0x1b7c68.jsx(_0x8763e2, {
              icon: "play",
              style: {
                transform: "rotate(90deg)"
              },
              className: _0x35c5fa("button-icon", {
                active: _0x10a81e.isLowered === true
              })
            })
          })]
        })]
      })
    })
  });
};
const config = () => {
  return {
    name: appName,
    render: TowTruckControlsApp,
    type: _0x199d2b.Application
  };
};
export { config as default };