import { j as _0x9e8eb5, R as _0x47f40c } from "./vendor-6c45b22f.js";
import { A as _0x3fbc9a } from "./ui-app-6ee97cab.js";
import { m as _0x42bc85 } from "./styles-61014012.js";
import { C as _0x2c6899 } from "./index-d5aaa08b.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
const pagerImagePillbox = "'https://gta-assets.nopixel.net/images/dr-pager.png'";
const pagerImageCentral = "'https://gta-assets.nopixel.net/images/dr-pager-central.png'";
const pagerImageViceroy = "'https://gta-assets.nopixel.net/images/dr-pager-viceroy.png'";
const pagerImageSandy = "'https://gta-assets.nopixel.net/images/dr-pager-sandy.png'";
const useStyles = _0x42bc85({
  "@global": {
    "@keyframes gonuts": {
      "0%": {
        transform: "rotate(-2deg)"
      },
      "50%": {
        transform: "rotate(2deg)"
      },
      "100%": {
        transform: "rotate(-2deg)"
      }
    }
  },
  wrapper: () => ({
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center"
  }),
  pager: () => ({
    width: "400px",
    height: "300px",
    backgroundSize: "cover",
    animation: "gonuts",
    animationDuration: "200ms",
    animationIterationCount: "infinite"
  }),
  pagerPillbox: () => ({
    backgroundImage: "url(" + pagerImagePillbox + ")"
  }),
  pagerViceroy: () => ({
    backgroundImage: "url(" + pagerImageViceroy + ")"
  }),
  pagerSandy: () => ({
    backgroundImage: "url(" + pagerImageSandy + ")"
  }),
  pagerCentral: () => ({
    backgroundImage: "url(" + pagerImageCentral + ")"
  })
});
const Pager = _0x29d3ea => {
  const _0x1b2752 = useStyles();
  let _0x5cd723 = "pagerPillbox";
  if (_0x29d3ea.hospital === "sandy") {
    _0x5cd723 = "pagerSandy";
  } else if (_0x29d3ea.hospital === "central") {
    _0x5cd723 = "pagerCentral";
  }
  return _0x9e8eb5.jsx("div", {
    className: _0x1b2752.wrapper,
    children: _0x9e8eb5.jsx("div", {
      className: _0x1b2752.pager + " " + _0x1b2752[_0x5cd723]
    })
  });
};
class Container extends _0x47f40c.Component {
  state = {
    mount: false,
    hospital: ""
  };
  onEvent = _0x255d70 => {
    this.setState({
      mount: true,
      hospital: _0x255d70.hospital
    });
    setTimeout(() => this.setState({
      mount: false,
      hospital: ""
    }), 10000);
  };
  render() {
    return _0x9e8eb5.jsx(_0x3fbc9a, {
      name: "drpager",
      onEvent: this.onEvent,
      children: this.state.mount && _0x9e8eb5.jsx(Pager, {
        hospital: this.state.hospital
      })
    });
  }
}
const config = () => {
  return {
    name: "drpager",
    render: Container,
    type: _0x2c6899.Application
  };
};
export { config as default };