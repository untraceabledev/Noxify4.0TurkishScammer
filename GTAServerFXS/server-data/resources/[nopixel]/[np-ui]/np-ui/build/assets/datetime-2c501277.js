import { j as _0x1558da } from "./vendor-6c45b22f.js";
import { p as _0x30a983 } from "./preferences-c03a2c0b.js";
import { c as _0x4ea98b, f as _0x41af42 } from "./date-1e39c206.js";
import { T as _0x4c1294 } from "./text-f7ee3e03.js";
import { C as _0x702ebc } from "./tooltip-cb871d8a.js";
const DateTime = ({
  placement = "top",
  timestamp: _0x472c3d,
  typeface = "body1",
  textStyle = {},
  timezone: _0x4b219e
} = {}) => {
  const _0x771419 = _0x4b219e || _0x30a983("date.timezone");
  return _0x1558da.jsx(_0x702ebc, {
    i18n: false,
    title: _0x4ea98b(_0x472c3d, _0x771419).format(_0x30a983("date.format")),
    placement: placement,
    children: _0x1558da.jsx("div", {
      children: _0x1558da.jsx(_0x4c1294, {
        variant: typeface,
        style: textStyle,
        children: _0x41af42(_0x472c3d, _0x771419)
      })
    })
  });
};
export { DateTime as D };