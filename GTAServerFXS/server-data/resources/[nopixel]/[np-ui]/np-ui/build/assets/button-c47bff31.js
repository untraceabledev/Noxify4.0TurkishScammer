import { R as _0x77fdf6, j as _0x3e25af, B as _0x17d807 } from "./vendor-6c45b22f.js";
import { a as _0x1de65b, r as _0x58bc74 } from "./translations-7705db3f.js";
const stopKeyPress = (_0x224794, _0x46d1c8) => _0x3321b1 => {
  if (_0x3321b1.key === "Enter") {
    _0x3321b1.preventDefault();
    _0x3321b1.stopPropagation();
    if (_0x46d1c8) {
      _0x224794(_0x3321b1);
    }
  }
};
class Primary extends _0x77fdf6.Component {
  render() {
    const _0x12e9e2 = this.props;
    let _0x19a583 = _0x12e9e2.children;
    if (_0x12e9e2.i18n) {
      _0x1de65b(_0x12e9e2.i18n, _0x12e9e2.children, "ui:button:primary");
      _0x19a583 = _0x58bc74(_0x12e9e2.children, _0x12e9e2.i18n);
    } else {
      _0x1de65b(typeof _0x12e9e2.children === "string", _0x12e9e2.children, "ui:button:primary");
      _0x19a583 = _0x58bc74(_0x12e9e2.children, typeof _0x12e9e2.children === "string");
    }
    return _0x3e25af.jsx("div", {
      children: _0x3e25af.jsx(_0x17d807, {
        variant: "contained",
        size: _0x12e9e2.size ?? "small",
        color: "primary",
        ..._0x12e9e2,
        onKeyDown: stopKeyPress(_0x12e9e2.onClick, false),
        onKeyUp: stopKeyPress(_0x12e9e2.onClick, false),
        onKeyPress: stopKeyPress(_0x12e9e2.onClick, true),
        children: _0x19a583
      })
    });
  }
}
class Secondary extends _0x77fdf6.Component {
  render() {
    const _0x14d543 = this.props;
    let _0x46412e = _0x14d543.children;
    if (_0x14d543.i18n) {
      _0x1de65b(_0x14d543.i18n, _0x14d543.children, "ui:button:secondary");
      _0x46412e = _0x58bc74(_0x14d543.children, _0x14d543.i18n);
    } else {
      _0x1de65b(typeof _0x14d543.children === "string", _0x14d543.children, "ui:button:secondary");
      _0x46412e = _0x58bc74(_0x14d543.children, typeof _0x14d543.children === "string");
    }
    return _0x3e25af.jsx("div", {
      children: _0x3e25af.jsx(_0x17d807, {
        variant: "contained",
        size: _0x14d543.size ?? "small",
        color: "secondary",
        ..._0x14d543,
        onKeyDown: stopKeyPress(_0x14d543.onClick, false),
        onKeyUp: stopKeyPress(_0x14d543.onClick, false),
        onKeyPress: stopKeyPress(_0x14d543.onClick, true),
        children: _0x46412e
      })
    });
  }
}
class Tertiary extends _0x77fdf6.Component {
  render() {
    const _0x2a794d = this.props;
    let _0xa2d02d = _0x2a794d.children;
    if (_0x2a794d.i18n) {
      _0x1de65b(_0x2a794d.i18n, _0x2a794d.children, "ui:button:tertiary");
      _0xa2d02d = _0x58bc74(_0x2a794d.children, _0x2a794d.i18n);
    } else {
      _0x1de65b(typeof _0x2a794d.children === "string", _0x2a794d.children, "ui:button:tertiary");
      _0xa2d02d = _0x58bc74(_0x2a794d.children, typeof _0x2a794d.children === "string");
    }
    return _0x3e25af.jsx("div", {
      children: _0x3e25af.jsx(_0x17d807, {
        variant: "contained",
        size: _0x2a794d.size ?? "small",
        color: "default",
        ..._0x2a794d,
        onKeyDown: stopKeyPress(_0x2a794d.onClick, false),
        onKeyUp: stopKeyPress(_0x2a794d.onClick, false),
        onKeyPress: stopKeyPress(_0x2a794d.onClick, true),
        children: _0xa2d02d
      })
    });
  }
}
const Button = {
  Primary: Primary,
  Secondary: Secondary,
  Tertiary: Tertiary
};
export { Button as B };