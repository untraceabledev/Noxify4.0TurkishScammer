import { j as _0x5643a1, R as _0x37bad9, k as _0x57731f } from "./vendor-6c45b22f.js";
import { n as _0x598f4c, i as _0x13bb22, c as _0x3fe7a4, C as _0x2b7e16 } from "./index-d5aaa08b.js";
import { A as _0x18386c } from "./ui-app-6ee97cab.js";
import { I as _0x51e3a3 } from "./icon-7f5cdae2.js";
import { T as _0x1779c4 } from "./text-f7ee3e03.js";
import { C as _0x3bf70e } from "./tooltip-cb871d8a.js";
import _0xb7e333 from "./store-40d0d83b.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
import "./translations-7705db3f.js";
const debugLogs = "";
const mapStateToProps = _0x233253 => ({
  debugLog: _0x233253[_0xb7e333.key]
});
function JsonWrap({
  children: _0x55f33b
}) {
  return _0x5643a1.jsx("div", {
    className: "debug-log-json-wrapper",
    children: _0x55f33b
  });
}
function Log({
  log: _0x1afd41
}) {
  const _0x5f0f53 = JSON.stringify(_0x1afd41.data, null, 2);
  const _0x368e33 = _0x5f0f53.split(/\n/g).length;
  const _0x190467 = JSON.stringify(_0x1afd41.result, null, 2);
  const _0x22e3b2 = _0x190467.split(/\n/g).length;
  return _0x5643a1.jsxs("div", {
    className: "debug-log-wrapper debug-log-wrapper-" + (_0x1afd41.arrow ? "red" : ""),
    children: [_0x5643a1.jsxs(_0x1779c4, {
      variant: "body1",
      style: {
        color: "black"
      },
      children: [_0x1afd41.type, ": ", _0x1afd41.action]
    }), _0x5643a1.jsxs("div", {
      className: "flex flex-row flex-space-between",
      children: [_0x5643a1.jsx(_0x1779c4, {
        variant: "body1",
        style: {
          color: "black"
        },
        children: "Body:"
      }), _0x1afd41.type === "Action" && _0x5643a1.jsx("div", {
        onClick: () => _0x598f4c(_0x1afd41.action, _0x1afd41.data),
        children: _0x5643a1.jsx(_0x3bf70e, {
          title: "Replay Request",
          children: _0x5643a1.jsx("div", {
            children: _0x5643a1.jsx(_0x51e3a3, {
              icon: "redo",
              size: "sm"
            })
          })
        })
      })]
    }), _0x5643a1.jsx(JsonWrap, {
      children: _0x5643a1.jsx("textarea", {
        tabIndex: -1,
        rows: Math.min(_0x368e33, 8),
        defaultValue: _0x5f0f53
      })
    }), _0x1afd41.type === "Action" && _0x5643a1.jsxs(_0x37bad9.Fragment, {
      children: [_0x5643a1.jsxs(_0x1779c4, {
        variant: "body1",
        style: {
          color: "black"
        },
        children: ["Response: ", !_0x1afd41.ms ? "" : "(" + _0x1afd41.ms + "ms)"]
      }), _0x5643a1.jsx(JsonWrap, {
        children: _0x5643a1.jsx("textarea", {
          tabIndex: -1,
          rows: Math.min(_0x22e3b2, 8),
          defaultValue: _0x190467
        })
      })]
    })]
  });
}
class ActionLog extends _0x37bad9.Component {
  state = {
    show: _0x13bb22()
  };
  onEvent = _0x2b85ad => {
    this.setState({
      show: _0x2b85ad.display
    });
  };
  render() {
    if (!_0x3fe7a4()) {
      return null;
    }
    const {
      debugLog: _0x18e668
    } = this.props;
    if (!_0x18e668.enabled) {
      return null;
    }
    return _0x5643a1.jsx(_0x18386c, {
      name: "debuglogs",
      onEvent: this.onEvent,
      children: this.state.show && _0x5643a1.jsx("div", {
        className: "debug-logs-wrapper",
        tabIndex: -1,
        children: _0x5643a1.jsx("div", {
          className: "inner",
          children: _0x18e668.log.map(_0x3701ec => _0x5643a1.jsx(Log, {
            log: _0x3701ec
          }, Math.random()))
        })
      })
    });
  }
}
const Container = _0x57731f(mapStateToProps, null)(ActionLog);
const config = () => {
  return {
    name: "debuglogs",
    render: Container,
    type: _0x2b7e16.Application
  };
};
export { config as default };