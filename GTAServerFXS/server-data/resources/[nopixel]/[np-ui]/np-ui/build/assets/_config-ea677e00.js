import { j as _0x358296, R as _0x4c5c74, k as _0x99573 } from "./vendor-6c45b22f.js";
import { d as _0x310647, C as _0x54851b } from "./index-d5aaa08b.js";
import { A as _0x557610 } from "./ui-app-6ee97cab.js";
import _0x483280, { appName } from "./store-b854a9b8.js";
import { T as _0x3e3511 } from "./text-f7ee3e03.js";
import { m as _0x5a7784 } from "./styles-61014012.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
import "./translations-7705db3f.js";
const useStyles$1 = _0x5a7784({
  container: () => ({
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    pointerEvents: "all",
    position: "relative"
  }),
  bb: () => ({
    height: "5vh",
    width: "100vw",
    backgroundColor: "black"
  }),
  bbMiddle: _0x1350b9 => ({
    flex: 1,
    backgroundColor: "unset"
  }),
  video: () => ({
    height: "100vh",
    width: "100vw",
    position: "absolute",
    top: "-3vh",
    margin: "0",
    objectFit: "cover"
  }),
  overlayText: () => ({
    position: "absolute",
    bottom: "7.5vw",
    left: "7.5vw",
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: "3em",
    textShadow: "2px 0 4px #575657",
    fontStyle: "italic"
  })
});
const videoUrl = "https://gta-assets.nopixel.net/videos/LSBN.webm";
const LSBNOverlay = _0x18f0ac => {
  const _0x3bf3ea = useStyles$1(_0x18f0ac);
  return _0x358296.jsxs("div", {
    className: _0x3bf3ea.container,
    children: [_0x358296.jsx("video", {
      className: _0x3bf3ea.video,
      autoPlay: true,
      loop: true,
      src: videoUrl
    }), _0x358296.jsx("div", {
      className: _0x3bf3ea.bb
    }), _0x358296.jsx("div", {
      className: _0x3bf3ea.bbMiddle,
      children: _0x18f0ac.overlayText && _0x358296.jsx(_0x3e3511, {
        variant: "body1",
        children: _0x358296.jsx("div", {
          className: _0x3bf3ea.overlayText,
          children: _0x18f0ac.overlayText
        })
      })
    }), _0x358296.jsx("div", {
      className: _0x3bf3ea.bb
    })]
  });
};
const useStyles = _0x5a7784({
  "@global": {
    "@keyframes blink": {
      "50%": {
        opacity: "0"
      }
    }
  },
  container: () => ({
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    pointerEvents: "none"
  }),
  recordingOverlay: () => ({
    height: "5vh",
    width: "5vh",
    borderRadius: "5vh",
    top: "10vh",
    right: "10vh",
    zIndex: "10",
    position: "absolute",
    backgroundColor: "red",
    animation: "blink",
    animationDuration: "5s",
    animationIterationCount: "infinite"
  })
});
const Recording = _0x11ec2b => {
  const _0x5247f9 = useStyles(_0x11ec2b);
  return _0x358296.jsx("div", {
    className: _0x5247f9.container,
    children: _0x358296.jsx("div", {
      className: _0x5247f9.recordingOverlay
    })
  });
};
const {
  mapStateToProps,
  mapDispatchToProps
} = _0x310647(_0x483280);
class Container extends _0x4c5c74.Component {
  onEvent = _0x350d60 => {
    this.props.updateState(_0x350d60);
  };
  onShow = (_0x4cbf31 = {}) => {
    this.props.updateState({
      ..._0x4cbf31,
      show: true
    });
  };
  onHide = () => {
    this.props.updateState({
      show: false
    });
  };
  render() {
    return _0x358296.jsxs(_0x557610, {
      center: true,
      store: true,
      name: appName,
      onEvent: this.onEvent,
      onHide: this.onHide,
      onShow: this.onShow,
      children: [this.props.show && _0x358296.jsx(LSBNOverlay, {
        overlayText: this.props.text
      }), this.props.recording && _0x358296.jsx(Recording, {})]
    });
  }
}
const Container$1 = _0x99573(mapStateToProps, mapDispatchToProps)(Container);
const config = () => {
  return {
    name: appName,
    render: Container$1,
    type: _0x54851b.Application
  };
};
export { config as default };