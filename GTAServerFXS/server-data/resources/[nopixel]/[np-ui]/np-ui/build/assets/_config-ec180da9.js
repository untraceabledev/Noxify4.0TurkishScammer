import { j as _0x257778, R as _0x14b411, k as _0x1b1096 } from "./vendor-6c45b22f.js";
import { d as _0x4abad2, C as _0x29a384 } from "./index-d5aaa08b.js";
import { A as _0x20f440 } from "./ui-app-6ee97cab.js";
import { m as _0x23fcf7 } from "./styles-61014012.js";
import _0x30504a, { appName } from "./store-90d66427.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
const useStyles = _0x23fcf7({
  container: _0x22d4d4 => ({
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: _0x22d4d4.show ? 1 : 0
  }),
  scope: () => ({
    width: "100vw",
    height: "100vh"
  })
});
const scope = "https://gta-assets.nopixel.net/images/sniper-scope1.png";
const SniperScope = _0x2c5ba1 => {
  const _0xfd8dac = useStyles(_0x2c5ba1);
  return _0x257778.jsx("div", {
    className: _0xfd8dac.container,
    children: _0x257778.jsx("img", {
      className: _0xfd8dac.scope,
      src: scope,
      alt: "scope"
    })
  });
};
const {
  mapStateToProps,
  mapDispatchToProps
} = _0x4abad2(_0x30504a);
class Container extends _0x14b411.Component {
  state = {
    show: false
  };
  onEvent = async _0x20ff51 => {
    this.setState({
      show: _0x20ff51.show
    });
  };
  render() {
    return _0x257778.jsx(_0x20f440, {
      center: true,
      closeOnError: true,
      store: true,
      name: appName,
      onEvent: this.onEvent,
      children: _0x257778.jsx(SniperScope, {
        show: this.state.show
      })
    });
  }
}
const Container$1 = _0x1b1096(mapStateToProps, mapDispatchToProps)(Container);
const config = () => {
  return {
    store: _0x30504a,
    name: appName,
    render: Container$1,
    type: _0x29a384.Application
  };
};
export { config as default };