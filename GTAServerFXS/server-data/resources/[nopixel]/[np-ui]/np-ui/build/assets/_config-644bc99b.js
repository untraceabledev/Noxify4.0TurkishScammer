import { j as _0x1adf64, M as _0x1dc9c3, R as _0x1cf76e, S as _0x31062d, k as _0x35c514 } from "./vendor-6c45b22f.js";
import { d as _0x134d90, C as _0x4ecb6a } from "./index-d5aaa08b.js";
import _0x1fe35a from "./store-77e28808.js";
import { A as _0x331db9 } from "./ui-app-6ee97cab.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
function Alert(_0x476dd3) {
  return _0x1adf64.jsx(_0x1dc9c3, {
    elevation: 6,
    variant: "filled",
    ..._0x476dd3
  });
}
const {
  mapStateToProps,
  mapDispatchToProps
} = _0x134d90(_0x1fe35a);
const snackbarMessage = (_0x4dd767, _0x3bd2d2 = "success", _0x423f82 = 5000) => ({
  [_0x1fe35a.key]: {
    message: _0x4dd767,
    timeout: _0x423f82,
    type: _0x3bd2d2,
    open: true
  }
});
class Snackybar extends _0x1cf76e.Component {
  render() {
    return _0x1adf64.jsx(_0x331db9, {
      name: "snackbar",
      children: _0x1adf64.jsx(_0x31062d, {
        open: this.props.open,
        autoHideDuration: this.props.timeout,
        onClose: () => this.props.updateState({
          open: false
        }),
        children: _0x1adf64.jsx(Alert, {
          onClose: () => this.props.updateState({
            open: false
          }),
          severity: this.props.type,
          children: this.props.message
        })
      })
    });
  }
}
const Container = _0x35c514(mapStateToProps, mapDispatchToProps)(Snackybar);
const config = () => {
  return {
    name: "snackbar",
    render: Container,
    type: _0x4ecb6a.Application
  };
};
export { config as default };