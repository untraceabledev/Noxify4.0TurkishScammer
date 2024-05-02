import { r as _0x552e4f, j as _0x50dfb5, f as _0x5c334a, R as _0x18e12c } from "./vendor-6c45b22f.js";
import { a as _0x29d474, r as _0x16d038 } from "./translations-7705db3f.js";
const index$1 = "";
const Loading = _0x1dd2e1 => {
  const _0x32d96d = 5;
  const _0x4c3f46 = _0x552e4f.useMemo(() => {
    const _0x1970e8 = [];
    for (let _0x4d016b = 0; _0x4d016b < _0x32d96d; _0x4d016b++) {
      _0x1970e8.push(_0x4d016b);
    }
    return _0x1970e8.map(_0xd8f8dd => _0x50dfb5.jsx("span", {
      style: {
        backgroundColor: _0x1dd2e1.color
      }
    }, _0xd8f8dd));
  }, [_0x32d96d]);
  return _0x50dfb5.jsx("div", {
    className: "loading",
    children: _0x4c3f46
  });
};
const index = "";
const Button = _0x255163 => {
  const _0x50aef9 = _0x5c334a("np-button", {
    primary: _0x255163.type === "primary",
    secondary: _0x255163.type === "secondary"
  }, _0x255163?.className);
  const _0x27c590 = _0x255163?.style || {};
  const _0x398d97 = _0x30901b => {
    _0x29d474(true, _0x30901b, "ui:button:primary");
    return _0x16d038(_0x30901b, true);
  };
  const _0x435d51 = () => {
    if (!_0x255163.onClick || typeof _0x255163.onClick !== "function") {
      return;
    }
    _0x255163.onClick();
  };
  return _0x50dfb5.jsx("button", {
    className: _0x50aef9,
    style: _0x27c590,
    onClick: _0x435d51,
    children: _0x255163.loading ? _0x50dfb5.jsx(Loading, {}) : _0x50dfb5.jsx(_0x18e12c.Fragment, {
      children: typeof _0x255163.children === "string" ? _0x398d97(_0x255163.children) : _0x255163.children
    })
  });
};
export { Button as B, Loading as L };