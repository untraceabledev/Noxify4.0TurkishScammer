import { R as _0x3d9c57, j as _0x22b20d, l as _0x403e6e, k as _0x29d2f2 } from "./vendor-6c45b22f.js";
import { d as _0x3b44b5, n as _0x71076d, C as _0x2e6a97 } from "./index-d5aaa08b.js";
import { A as _0x2f10bc } from "./ui-app-6ee97cab.js";
import { B as _0x1dc45b } from "./button-c47bff31.js";
import { m as _0x308173, b as _0x2ba1c1 } from "./styles-61014012.js";
import _0x28d5c1, { appName } from "./store-2cc7018c.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
import "./translations-7705db3f.js";
const useStyles = _0x308173({
  wrapper: () => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh"
  }),
  container: () => ({
    backgroundColor: _0x2ba1c1.bgPrimary(),
    pointerEvents: "all",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "30vh",
    padding: _0x2ba1c1.responsiveWidth(32)
  }),
  sliders: () => ({
    flex: 1
  }),
  button: () => ({
    marginTop: _0x2ba1c1.responsiveWidth(32)
  })
});
const RangePicker = _0x4fef4b => {
  const _0x18febd = useStyles();
  const [_0x12e5c1, _0x375395] = _0x3d9c57.useState([1, 1, 1]);
  const _0x33abdf = (_0x382fb8, _0x11f3bc) => {
    const _0x22678f = [..._0x12e5c1];
    _0x22678f[_0x382fb8] = _0x11f3bc;
    _0x375395(_0x22678f);
  };
  return _0x22b20d.jsx("div", {
    className: _0x18febd.wrapper,
    children: _0x22b20d.jsxs("div", {
      className: _0x18febd.container,
      children: [_0x22b20d.jsx("div", {
        className: _0x18febd.sliders,
        children: [...Array(_0x4fef4b.sliders)].map((_0x2582c0, _0x496d1e) => {
          return _0x22b20d.jsx(_0x403e6e, {
            orientation: "vertical",
            defaultValue: 1,
            "aria-labelledby": "vertical-slider",
            min: 1,
            step: 1,
            max: 100,
            onChange: (_0x30470b, _0x2f14c4) => _0x33abdf(_0x496d1e, _0x2f14c4)
          });
        })
      }), _0x22b20d.jsx("div", {
        className: _0x18febd.button,
        children: _0x22b20d.jsx(_0x1dc45b.Primary, {
          onClick: () => _0x4fef4b.submitValues(_0x12e5c1),
          children: "Submit"
        })
      })]
    })
  });
};
const {
  mapStateToProps,
  mapDispatchToProps
} = _0x3b44b5(_0x28d5c1);
class Container extends _0x3d9c57.Component {
  state = {
    show: false,
    sliders: 3
  };
  onEvent = _0x239ef8 => {
    this.props.updateState(_0x239ef8);
  };
  onShow = (_0x5ee852 = {}) => {
    this.setState({
      ..._0x5ee852,
      submitUrl: _0x5ee852.submitUrl ?? "np-ui:submitRangeValues",
      show: true,
      sliders: _0x5ee852.sliders ?? 3
    });
  };
  onHide = () => {
    this.setState({
      show: false
    });
  };
  submitValues = _0x1d3c78 => {
    _0x71076d(this.props.submitUrl ?? "np-ui:submitRangeValues", {
      ranges: _0x1d3c78
    });
  };
  render() {
    return _0x22b20d.jsx(_0x2f10bc, {
      name: appName,
      onEvent: this.onEvent,
      onHide: this.onHide,
      onShow: this.onShow,
      onEscape: this.onHide,
      children: this.state.show && _0x22b20d.jsx(RangePicker, {
        sliders: this.state.sliders,
        ...this.props,
        submitValues: this.submitValues
      })
    });
  }
}
const Container$1 = _0x29d2f2(mapStateToProps, mapDispatchToProps)(Container);
const config = () => {
  return {
    name: "range-picker",
    render: Container$1,
    type: _0x2e6a97.Application
  };
};
export { config as default };