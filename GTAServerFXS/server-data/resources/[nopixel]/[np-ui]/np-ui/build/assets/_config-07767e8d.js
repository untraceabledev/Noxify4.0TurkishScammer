import { R as _0x3236f8, j as _0x4edb37, k as _0x429102 } from "./vendor-6c45b22f.js";
import { d as _0xa79dd7, C as _0x1527a1 } from "./index-d5aaa08b.js";
import { A as _0x5c9e1a } from "./ui-app-6ee97cab.js";
import _0x4ebd5c, { appName } from "./store-37db9883.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
const {
  mapStateToProps,
  mapDispatchToProps
} = _0xa79dd7(_0x4ebd5c);
class Container extends _0x3236f8.Component {
  onEvent = (_0x235dbb = {}) => {
    if (!_0x235dbb.job && (!_0x235dbb.id || _0x235dbb.id === -1)) {
      _0x235dbb.id = null;
    }
    this.props.updateState(_0x235dbb);
  };
  render() {
    return _0x4edb37.jsx(_0x5c9e1a, {
      store: true,
      name: "character",
      onEvent: this.onEvent
    });
  }
}
const Container$1 = _0x429102(mapStateToProps, mapDispatchToProps)(Container);
const config = () => {
  return {
    name: appName,
    render: Container$1,
    type: _0x1527a1.Application
  };
};
export { config as default };