import { j as _0x398945 } from "./vendor-6c45b22f.js";
import { I as _0x5ea225 } from "./icon-7f5cdae2.js";
const container = "_container_v98p6_1";
const icon = "_icon_v98p6_28";
const styles = {
  container: container,
  icon: icon
};
const GenericAppInput = ({
  value: _0x44cf3f,
  onChange: _0x985a75,
  icon: _0x2c661c,
  placeholder: _0x41ebe
}) => {
  return _0x398945.jsxs("div", {
    className: styles.container,
    children: [_0x398945.jsx("input", {
      placeholder: _0x41ebe,
      value: _0x44cf3f,
      onChange: _0x35b813 => _0x985a75(_0x35b813.target.value)
    }), _0x398945.jsx("div", {
      className: styles.icon,
      children: _0x398945.jsx(_0x5ea225, {
        icon: _0x2c661c,
        size: "lg"
      })
    })]
  });
};
export { GenericAppInput as G };