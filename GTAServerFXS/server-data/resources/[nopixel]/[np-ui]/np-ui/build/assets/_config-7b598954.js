import { R as _0x3e1ddb, j as _0x51e74e, k as _0x344add } from "./vendor-6c45b22f.js";
import { d as _0x240c38, n as _0x2f13bc, C as _0x2062a6 } from "./index-d5aaa08b.js";
import { c as _0x40958e } from "./misc-13f33aa2.js";
import { A as _0x5b2cb8 } from "./ui-app-6ee97cab.js";
import _0x26c08b from "./store-5fae3a83.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
const {
  mapStateToProps,
  mapDispatchToProps
} = _0x240c38(_0x26c08b);
class Game extends _0x3e1ddb.Component {
  onEvent = async _0x2b64f2 => {
    if (_0x2b64f2 && _0x2b64f2.getDeanWorldCsv) {
      const _0x2a4ec3 = await _0x2f13bc("financials/uploadDeanworldMoney", {}, {
        returnData: [],
        extApi: true
      });
      _0x40958e(_0x2a4ec3.data.url);
      return;
    }
    if (_0x2b64f2 && _0x2b64f2.vehicle && _0x2b64f2.vehicle === -1) {
      _0x2b64f2.vehicle = null;
    }
    this.props.updateState(_0x2b64f2);
  };
  disableDebugEvent = _0x56b5e0 => {
    return !!_0x56b5e0.time;
  };
  render() {
    return _0x51e74e.jsx(_0x5b2cb8, {
      store: true,
      name: "game",
      onEvent: this.onEvent,
      disableDebugEvent: this.disableDebugEvent
    });
  }
}
const Container = _0x344add(mapStateToProps, mapDispatchToProps)(Game);
const config = () => {
  return {
    name: "game",
    render: Container,
    type: _0x2062a6.Application
  };
};
export { config as default };