import { j as _0x1199e4, C as _0x5c51bf, l as _0x2ce6bd, R as _0x1c0759, k as _0x5d51fe } from "./vendor-6c45b22f.js";
import { d as _0x263c7a, n as _0x1cfc9a, C as _0xf02d0b } from "./index-d5aaa08b.js";
import { A as _0x1ded30 } from "./ui-app-6ee97cab.js";
import { I as _0x12f3d4 } from "./icon-7f5cdae2.js";
import { C as _0x35c19e } from "./tooltip-cb871d8a.js";
import { m as _0x1431cf, b as _0x1f45fa } from "./styles-61014012.js";
import { T as _0x7acb40 } from "./text-f7ee3e03.js";
import _0x4a19fb, { appName } from "./store-839cab78.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
import "./translations-7705db3f.js";
const useStyles$1 = _0x1431cf({
  container: () => ({
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    pointerEvents: "all"
  }),
  innerContainer: () => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  }),
  statusBox: () => ({
    backgroundColor: _0x1f45fa.bgPrimary(),
    paddingTop: _0x1f45fa.responsiveHeight(8),
    paddingBottom: _0x1f45fa.responsiveHeight(8),
    paddingLeft: _0x1f45fa.responsiveHeight(32),
    paddingRight: _0x1f45fa.responsiveHeight(32),
    border: "1px solid black",
    width: _0x1f45fa.responsiveWidth(480)
  }),
  textContainer: () => ({
    marginBottom: _0x1f45fa.responsiveHeight(4)
  }),
  textContainerCenter: () => ({
    width: "100%",
    textAlign: "center"
  }),
  fullWidth: () => ({
    width: "100%"
  }),
  iconColor: () => ({
    color: "#fff"
  }),
  icon: () => ({})
});
const useStyles = _0x1431cf({
  wrapper: _0x22d18d => ({
    "& .MuiChip-deleteIcon": {
      color: _0x22d18d.textColor
    },
    "& .MuiChip-label": {
      fontSize: "110%",
      overflow: "visible"
    }
  }),
  chipNoLabel: _0x12384c => ({})
});
const Container$2 = _0x5e6f26 => {
  const _0x1f9d3b = useStyles(_0x5e6f26);
  const _0x33bb9b = {
    ..._0x5e6f26
  };
  delete _0x33bb9b.textColor;
  delete _0x33bb9b.bgColor;
  delete _0x33bb9b.noLabel;
  if (_0x5e6f26.noLabel) {
    return _0x1199e4.jsx("div", {
      className: _0x1f9d3b.chipNoLabel,
      onClick: () => !!_0x5e6f26.onClick && _0x5e6f26.onClick(),
      children: _0x1199e4.jsx(_0x12f3d4, {
        size: _0x5e6f26.iconSize || "sm",
        icon: _0x5e6f26.icon,
        style: {
          color: _0x5e6f26.textColor
        }
      })
    });
  }
  return _0x1199e4.jsx(_0x5c51bf, {
    ..._0x33bb9b,
    className: _0x1f9d3b.wrapper,
    icon: !_0x5e6f26.icon ? null : _0x1199e4.jsx(_0x12f3d4, {
      size: "sm",
      icon: _0x5e6f26.icon,
      style: {
        color: _0x5e6f26.textColor
      }
    }),
    style: {
      backgroundColor: _0x5e6f26.bgColor,
      color: _0x5e6f26.textColor,
      ...(_0x5e6f26.style || {})
    }
  });
};
const CinemaControl = _0x3c19eb => {
  const _0x29533f = useStyles$1();
  return _0x1199e4.jsx("div", {
    className: _0x29533f.container,
    children: _0x1199e4.jsxs("div", {
      className: _0x29533f.innerContainer,
      children: [_0x3c19eb.mode === "youtube" && _0x1199e4.jsx("div", {
        className: _0x29533f.statusBox,
        children: _0x1199e4.jsx("div", {
          style: {
            display: "flex",
            alignItems: "center"
          },
          children: _0x1199e4.jsx(_0x2ce6bd, {
            value: _0x3c19eb.percentage,
            min: 0,
            max: 100,
            "aria-labelledby": "discrete-slider",
            step: 0.01,
            disabled: true
          })
        })
      }), _0x3c19eb.mode === "youtube" && _0x1199e4.jsx("div", {
        className: _0x29533f.statusBox,
        children: _0x1199e4.jsxs("div", {
          style: {
            display: "flex"
          },
          children: [_0x3c19eb.isAllowed && _0x1199e4.jsxs(_0x1c0759.Fragment, {
            children: [_0x3c19eb.paused && _0x1199e4.jsx("div", {
              children: _0x1199e4.jsx(_0x12f3d4, {
                icon: "play",
                size: "2x",
                alt: "Play",
                className: _0x29533f.iconColor,
                onClick: () => _0x3c19eb.play()
              })
            }), !_0x3c19eb.paused && _0x1199e4.jsx("div", {
              children: _0x1199e4.jsx(_0x12f3d4, {
                icon: "pause",
                size: "2x",
                alt: "Pause",
                className: _0x29533f.iconColor,
                onClick: () => _0x3c19eb.pause()
              })
            }), _0x1199e4.jsx("div", {
              children: _0x1199e4.jsx(_0x12f3d4, {
                icon: "angle-double-right",
                size: "2x",
                alt: "Next",
                className: _0x29533f.iconColor,
                onClick: () => _0x3c19eb.next()
              })
            }), _0x1199e4.jsx("div", {
              children: _0x1199e4.jsx(_0x12f3d4, {
                icon: "chevron-left",
                size: "2x",
                alt: "-10s",
                className: _0x29533f.iconColor,
                onClick: () => _0x3c19eb.advance(-10)
              })
            }), _0x1199e4.jsx("div", {
              children: _0x1199e4.jsx(_0x12f3d4, {
                icon: "chevron-right",
                size: "2x",
                alt: "+10s",
                className: _0x29533f.iconColor,
                onClick: () => _0x3c19eb.advance(10)
              })
            }), _0x1199e4.jsx("div", {
              children: _0x1199e4.jsx(_0x12f3d4, {
                icon: "history",
                size: "2x",
                alt: "Seek",
                className: _0x29533f.iconColor,
                onClick: () => _0x3c19eb.seek()
              })
            }), _0x1199e4.jsx("div", {
              children: _0x1199e4.jsx(_0x35c19e, {
                title: "Add to queue",
                children: _0x1199e4.jsx(_0x12f3d4, {
                  icon: "plus",
                  size: "2x",
                  alt: "Add to queue",
                  className: _0x29533f.iconColor,
                  onClick: () => _0x3c19eb.add()
                })
              })
            })]
          }), _0x1199e4.jsx("div", {
            children: _0x1199e4.jsx(_0x12f3d4, {
              icon: "list",
              size: "2x",
              alt: "Seek",
              className: _0x29533f.iconColor,
              onClick: () => _0x3c19eb.viewPlaylist()
            })
          }), _0x1199e4.jsx("div", {
            children: _0x1199e4.jsx(_0x12f3d4, {
              icon: "camera",
              size: "2x",
              alt: "Camera",
              className: _0x29533f.iconColor,
              onClick: () => _0x3c19eb.camera()
            })
          }), _0x3c19eb.canMap && _0x1199e4.jsx("div", {
            children: _0x1199e4.jsx(_0x12f3d4, {
              icon: "pencil-alt",
              size: "2x",
              alt: "Map",
              className: _0x29533f.iconColor,
              onClick: () => _0x3c19eb.map()
            })
          }), _0x1199e4.jsx("div", {
            style: {
              width: !_0x3c19eb.isAllowed ? "80%" : "50%",
              marginLeft: "1rem"
            },
            children: _0x1199e4.jsx(_0x2ce6bd, {
              value: _0x3c19eb.volume,
              min: 0,
              step: 1,
              max: 100,
              onChange: (_0x384b5e, _0x368811) => _0x3c19eb.changeVolume(+_0x368811),
              "aria-labelledby": "continuous-slider"
            })
          })]
        })
      }), _0x3c19eb.showPlaylist && _0x1199e4.jsx("div", {
        className: _0x29533f.statusBox,
        children: _0x1199e4.jsx("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            width: "100%"
          },
          children: _0x3c19eb.playlist && _0x3c19eb.playlist.length > 0 && _0x3c19eb.playlist.map(_0x3d57ff => _0x1199e4.jsxs("div", {
            style: {
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: "1rem"
            },
            children: [_0x1199e4.jsx("div", {
              style: {
                width: "80%"
              },
              children: _0x1199e4.jsx(_0x7acb40, {
                children: _0x3d57ff.title
              })
            }), _0x3c19eb.isAllowed && _0x1199e4.jsxs(_0x1c0759.Fragment, {
              children: [_0x3d57ff.video !== _0x3c19eb.currentVideo && _0x1199e4.jsx("div", {
                children: _0x1199e4.jsx(_0x12f3d4, {
                  icon: "trash",
                  size: "2x",
                  alt: "Remove",
                  style: {
                    marginRight: "0.5rem"
                  },
                  className: _0x29533f.iconColor,
                  onClick: () => _0x3c19eb.removeVideo(_0x3d57ff.video)
                })
              }), _0x3d57ff.video === _0x3c19eb.currentVideo && _0x1199e4.jsx("div", {
                children: _0x1199e4.jsx(Container$2, {
                  label: "Playing",
                  color: "primary"
                })
              })]
            })]
          }))
        })
      })]
    })
  });
};
const {
  mapStateToProps,
  mapDispatchToProps
} = _0x263c7a(_0x4a19fb);
class Container extends _0x1c0759.Component {
  onEvent = _0x1ea8a9 => {
    this.props.updateState(_0x1ea8a9);
  };
  changeVolume = _0x28bd3d => {
    this.props.updateState({
      volume: _0x28bd3d
    });
    _0x1cfc9a("np-cinema:changeVolume", {
      volume: _0x28bd3d
    });
  };
  play = () => {
    this.props.updateState({
      paused: false
    });
    _0x1cfc9a("np-cinema:play");
  };
  pause = () => {
    this.props.updateState({
      paused: true
    });
    _0x1cfc9a("np-cinema:pause");
  };
  next = () => {
    _0x1cfc9a("np-cinema:next");
  };
  advance = _0xa65e05 => {
    _0x1cfc9a("np-cinema:advance", {
      seconds: _0xa65e05
    });
  };
  seek = () => {
    _0x1cfc9a("np-cinema:seek");
  };
  add = () => {
    _0x1cfc9a("np-cinema:add");
  };
  map = () => {
    _0x1cfc9a("np-cinema:map");
  };
  viewPlaylist = async () => {
    if (this.props.showPlaylist) {
      this.props.updateState({
        showPlaylist: false,
        playlist: null
      });
      return;
    }
    const {
      data: _0x1c6c7e
    } = await _0x1cfc9a("np-cinema:viewPlaylist", {});
    this.props.updateState({
      playlist: _0x1c6c7e.playlist ?? [],
      currentVideo: _0x1c6c7e.currentVideo,
      showPlaylist: true
    });
  };
  playVideo = _0x54ef5a => {
    _0x1cfc9a("np-cinema:playVideo", {
      video: _0x54ef5a
    });
  };
  removeVideo = _0x5ef1e2 => {
    _0x1cfc9a("np-cinema:removeVideo", {
      video: _0x5ef1e2
    });
  };
  camera = () => {
    _0x1cfc9a("np-cinema:camera");
  };
  render() {
    return _0x1199e4.jsx(_0x1ded30, {
      center: true,
      store: true,
      name: appName,
      onEvent: this.onEvent,
      children: this.props.show && _0x1199e4.jsx(CinemaControl, {
        ...this.props,
        ...this.state,
        changeVolume: this.changeVolume,
        play: this.play,
        pause: this.pause,
        next: this.next,
        advance: this.advance,
        seek: this.seek,
        add: this.add,
        viewPlaylist: this.viewPlaylist,
        playVideo: this.playVideo,
        removeVideo: this.removeVideo,
        camera: this.camera,
        map: this.map
      })
    });
  }
}
const Container$1 = _0x5d51fe(mapStateToProps, mapDispatchToProps)(Container);
const config = () => {
  return {
    store: _0x4a19fb,
    name: appName,
    render: Container$1,
    type: _0xf02d0b.Application
  };
};
export { config as default };