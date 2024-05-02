import { j as _0x5e6bff, R as _0x404fff, k as _0x5bc962 } from "./vendor-6c45b22f.js";
import { d as _0x6f95ee, C as _0x3e34f1 } from "./index-d5aaa08b.js";
import { c as _0x32d1b4 } from "./misc-13f33aa2.js";
import { A as _0x45432a } from "./ui-app-6ee97cab.js";
import { I as _0x1d1d6a } from "./icon-7f5cdae2.js";
import { T as _0x5703c2 } from "./text-f7ee3e03.js";
import { m as _0x2b42e5, b as _0x546528 } from "./styles-61014012.js";
import _0x333529, { appName } from "./store-282cdf20.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
import "./translations-7705db3f.js";
const useStyles = _0x2b42e5({
  wrapper: _0x401a87 => ({
    backgroundColor: _0x546528.bgPrimary(),
    padding: 32,
    display: "inline-block",
    pointerEvents: "all",
    opacity: _0x401a87.copied ? 0 : 1,
    transition: "opacity 5s ease",
    "&:hover": {
      opacity: 1,
      transition: "opacity 0s ease"
    }
  })
});
const VoiceURL = _0x5a9de0 => {
  const _0x348137 = useStyles(_0x5a9de0);
  return _0x5e6bff.jsxs("div", {
    className: _0x348137.wrapper,
    onClick: _0x5a9de0.copy,
    children: [!_0x5a9de0.copied && _0x5e6bff.jsxs(_0x5703c2, {
      variant: "body1",
      children: ["Your Voice URL:", _0x5e6bff.jsx(_0x1d1d6a, {
        icon: "copy",
        size: "lg"
      })]
    }), _0x5a9de0.copied && _0x5e6bff.jsx(_0x5703c2, {
      variant: "body1",
      children: "Copied!"
    })]
  });
};
const {
  mapStateToProps,
  mapDispatchToProps
} = _0x6f95ee(_0x333529);
class Container extends _0x404fff.Component {
  onEvent = _0xe4c09d => {
    this.props.updateState(_0xe4c09d);
  };
  copy = () => {
    _0x32d1b4(this.props.url);
    this.props.updateState({
      copied: true
    });
  };
  render() {
    return _0x5e6bff.jsx(_0x45432a, {
      name: appName,
      onEvent: this.onEvent,
      children: this.props.show && _0x5e6bff.jsx(VoiceURL, {
        ...this.props,
        copy: this.copy
      })
    });
  }
}
const Container$1 = _0x5bc962(mapStateToProps, mapDispatchToProps)(Container);
const config = () => {
  return {
    name: "voice-url",
    render: Container$1,
    type: _0x3e34f1.Application
  };
};
export { config as default };