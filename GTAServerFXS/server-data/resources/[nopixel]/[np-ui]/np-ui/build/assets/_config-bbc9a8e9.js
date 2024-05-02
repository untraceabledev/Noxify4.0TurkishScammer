import { j as _0xf223e2, R as _0xc49329, k as _0x385135 } from "./vendor-6c45b22f.js";
import { d as _0x526c1e, C as _0x8345cf } from "./index-d5aaa08b.js";
import { A as _0x220dbe } from "./ui-app-6ee97cab.js";
import { m as _0x586c21, b as _0x509467 } from "./styles-61014012.js";
import { B as _0x478cc0 } from "./button-c47bff31.js";
import _0x3fee94, { appName } from "./store-00dec3e1.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
import "./translations-7705db3f.js";
const useStyles = _0x586c21({
  wrapper: () => ({
    minWidth: _0x509467.responsiveWidth(256),
    maxWidth: _0x509467.responsiveWidth(720),
    padding: _0x509467.responsiveWidth(16),
    backgroundColor: _0x509467.bgPrimary(),
    pointerEvents: "all"
  }),
  inputs: () => ({
    minWidth: _0x509467.responsiveWidth(256),
    maxWidth: _0x509467.responsiveWidth(720),
    display: "block",
    overflow: "auto",
    backgroundColor: _0x509467.bgPrimary()
  }),
  text: () => ({
    color: _0x509467.textColor(),
    fontFamily: "Arial, Helvetica, sans-serif",
    marginBottom: 16
  }),
  button: () => ({
    padding: _0x509467.responsiveWidth(16),
    paddingTop: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  })
});
const TextPopup = _0x290be7 => {
  const _0x29a20b = useStyles();
  return _0xf223e2.jsxs("div", {
    className: _0x29a20b.wrapper,
    children: [_0xf223e2.jsx("div", {
      className: _0x29a20b.inputs,
      children: _0xf223e2.jsx("pre", {
        className: _0x29a20b.text,
        children: _0x290be7.text
      })
    }), _0xf223e2.jsx("div", {
      className: _0x29a20b.button,
      children: _0xf223e2.jsx(_0x478cc0.Primary, {
        onClick: () => _0x290be7.copyToClipboard(),
        children: "Copy"
      })
    })]
  });
};
const {
  mapStateToProps,
  mapDispatchToProps
} = _0x526c1e(_0x3fee94);
class Container extends _0xc49329.Component {
  onEvent = _0x17f440 => {
    this.props.updateState(_0x17f440);
  };
  onShow = (_0x2042a9 = {}) => {
    this.props.updateState({
      ..._0x2042a9,
      show: true
    });
  };
  onHide = () => {
    this.props.updateState({
      show: false
    });
  };
  copyToClipboard = () => {
    const _0x4ad210 = document.createElement("textarea");
    _0x4ad210.innerHTML = this.props.text;
    document.body.appendChild(_0x4ad210);
    _0x4ad210.select();
    document.execCommand("copy");
    _0x4ad210.remove();
  };
  render() {
    return _0xf223e2.jsx(_0x220dbe, {
      center: true,
      store: true,
      name: appName,
      onEvent: this.onEvent,
      onHide: this.onHide,
      onShow: this.onShow,
      onEscape: this.onHide,
      children: this.props.show && _0xf223e2.jsx(TextPopup, {
        text: this.props.text,
        copyToClipboard: this.copyToClipboard
      })
    });
  }
}
const Container$1 = _0x385135(mapStateToProps, mapDispatchToProps)(Container);
const config = () => {
  return {
    name: appName,
    render: Container$1,
    type: _0x8345cf.Application
  };
};
export { config as default };