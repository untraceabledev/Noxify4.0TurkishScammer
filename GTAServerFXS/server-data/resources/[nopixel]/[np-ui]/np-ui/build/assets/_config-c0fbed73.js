import { R as _0x588215, j as _0x48b950, k as _0x3c173c } from "./vendor-6c45b22f.js";
import { d as _0x12753c, C as _0x5184b6 } from "./index-d5aaa08b.js";
import { A as _0x3ef214 } from "./ui-app-6ee97cab.js";
import _0xdc01a7, { appName } from "./store-133bfa2e.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
const {
  mapStateToProps,
  mapDispatchToProps
} = _0x12753c(_0xdc01a7, {
  mapStateToProps: _0x3e0f8e => ({
    preferences: _0x3e0f8e.preferences
  })
});
class Container extends _0x588215.Component {
  render() {
    return _0x48b950.jsx(_0x3ef214, {
      name: appName,
      style: {
        zIndex: 1000000
      },
      children: this.props.preferences["hud.blackbars.enabled"] && _0x48b950.jsxs("div", {
        style: {
          display: "flex",
          width: "100vw",
          height: "100vh",
          position: "absolute",
          left: 0,
          top: 0,
          flexDirection: "column"
        },
        children: [_0x48b950.jsx("div", {
          style: {
            backgroundColor: "black",
            height: Math.min(25, Number(this.props.preferences["hud.blackbars.size"])) + "vh",
            width: "100vw"
          }
        }), _0x48b950.jsx("div", {
          style: {
            flex: 1,
            width: "100vw",
            height: "100%"
          }
        }), _0x48b950.jsx("div", {
          style: {
            backgroundColor: "black",
            height: Math.min(25, Number(this.props.preferences["hud.blackbars.size"])) + "vh",
            width: "100vw"
          }
        })]
      })
    });
  }
}
const Container$1 = _0x3c173c(mapStateToProps, mapDispatchToProps)(Container);
const config = () => {
  return {
    name: "blackbars",
    render: Container$1,
    type: _0x5184b6.Application
  };
};
export { config as default };