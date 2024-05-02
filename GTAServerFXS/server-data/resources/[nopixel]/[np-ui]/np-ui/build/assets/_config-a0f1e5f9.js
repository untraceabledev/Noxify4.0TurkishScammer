import { R as _0x26f3fc, j as _0x4ad4f2, k as _0x3d2e70 } from "./vendor-6c45b22f.js";
import { d as _0x10d30e, C as _0x501d95 } from "./index-d5aaa08b.js";
import { A as _0x139861 } from "./ui-app-6ee97cab.js";
import _0x337ef2, { appName } from "./store-933fe49f.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
const {
  mapStateToProps,
  mapDispatchToProps
} = _0x10d30e(_0x337ef2);
class Container extends _0x26f3fc.Component {
  onEvent = _0x59eb41 => {
    this.props.updateState(_0x59eb41);
  };
  render() {
    return _0x4ad4f2.jsx(_0x139861, {
      store: true,
      name: appName,
      onEvent: this.onEvent
    });
  }
}
const Container$1 = _0x3d2e70(mapStateToProps, mapDispatchToProps)(Container);
const config = () => {
  return {
    name: appName,
    render: Container$1,
    type: _0x501d95.Application
  };
};
export { config as default };