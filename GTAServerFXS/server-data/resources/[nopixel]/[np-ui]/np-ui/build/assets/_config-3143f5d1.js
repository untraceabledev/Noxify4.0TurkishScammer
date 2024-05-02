import { j as _0x5cbce3, w as _0x476a45, s as _0xccdb51, R as _0x309290, k as _0x175539 } from "./vendor-6c45b22f.js";
import { d as _0x1c7c53, n as _0xdf6468, C as _0x2c8235 } from "./index-d5aaa08b.js";
import { A as _0xd12711 } from "./ui-app-6ee97cab.js";
import { I as _0x47067b } from "./icon-7f5cdae2.js";
import { T as _0x592394 } from "./text-f7ee3e03.js";
import _0x4f1186, { appName } from "./store-ff8c219b.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
import "./translations-7705db3f.js";
const ContextMenu = _0x565be4 => {
  const _0xb47659 = () => {
    const {
      Component: _0x1b2eee
    } = _0x565be4.menus.find(({
      idx: _0x4b9515,
      level: _0x13c46f
    }) => _0x4b9515 === _0x565be4.activeIndex && _0x13c46f === _0x565be4.activeLevel);
    return _0x5cbce3.jsx(_0x1b2eee, {});
  };
  const _0x27bc38 = _0x565be4.title && _0x565be4.title.length > 0;
  return _0x5cbce3.jsx("div", {
    className: "wrapperContextMenu",
    children: _0x5cbce3.jsxs("div", {
      className: "col " + (_0x565be4.position === "left" ? "colLeft" : "colRight"),
      children: [_0x27bc38 && _0x5cbce3.jsxs(_0x5cbce3.Fragment, {
        children: [_0x5cbce3.jsx("div", {
          className: "textCol",
          children: _0x5cbce3.jsx("div", {
            className: "contextTitle",
            children: _0x565be4?.title
          })
        }), _0x5cbce3.jsx("div", {
          className: "divider",
          children: _0x5cbce3.jsx("div", {
            className: "line"
          })
        })]
      }), _0x5cbce3.jsx(_0xb47659, {})]
    })
  });
};
const HtmlTooltip = _0x476a45(_0x4e1b39 => ({
  tooltip: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: "none",
    fontSize: _0x4e1b39.typography.pxToRem(12),
    position: "relative"
  }
}))(_0xccdb51);
const MenuItem = ({
  description: _0xb7c162,
  recipe: _0x345e3d,
  disabled = false,
  hasChildren: _0x20369b,
  i18nDescription = false,
  i18nTitle = false,
  image = false,
  isBackButton = false,
  onClick: _0x19f18e,
  title: _0x31c468,
  icon: _0x2486e4,
  titleRight = "",
  type = "default",
  isChecked = () => false
}) => {
  const [_0x2cef31, _0x57c8e4] = _0x309290.useState(false);
  const _0x579411 = ["menuItem"];
  if (_0x20369b) {
    _0x579411.push("menuItemHasChildren");
  }
  if (isBackButton) {
    _0x579411.push("menuItemIsGoBack");
  }
  if (disabled) {
    _0x579411.push("menuDisabled");
  }
  return _0x5cbce3.jsx(_0x5cbce3.Fragment, {
    children: _0x5cbce3.jsxs("div", {
      className: _0x579411.join(" "),
      onClick: _0x19f18e,
      children: [!!image && _0x5cbce3.jsx("div", {
        style: {
          position: "absolute",
          top: -10000,
          opacity: 0
        },
        children: _0x5cbce3.jsx("img", {
          src: image,
          alt: "w"
        })
      }), !!_0x2486e4 && _0x5cbce3.jsx("div", {
        className: "iconContainer",
        children: _0x5cbce3.jsx(_0x47067b, {
          className: "icon",
          icon: _0x2486e4
        })
      }), type === "checkbox" && _0x5cbce3.jsx("div", {
        className: "iconContainer",
        children: _0x5cbce3.jsx(_0x47067b, {
          className: "icon",
          icon: isChecked() ? "check-circle" : "times"
        })
      }), _0x5cbce3.jsx(HtmlTooltip, {
        disableFocusListener: true,
        disableTouchListener: true,
        disableHoverListener: !image,
        title: _0x5cbce3.jsx(_0x309290.Fragment, {
          children: _0x5cbce3.jsx("div", {
            onClick: () => _0x57c8e4(false),
            children: _0x5cbce3.jsx("img", {
              src: !image ? "" : image,
              alt: "w",
              style: {
                maxHeight: 512,
                maxWidth: 512
              }
            })
          })
        }),
        placement: "left",
        open: _0x2cef31,
        onOpen: () => _0x57c8e4(true),
        onClose: () => _0x57c8e4(false),
        children: _0x5cbce3.jsxs("div", {
          className: "titleContextMenu",
          children: [isBackButton && _0x5cbce3.jsx("div", {
            className: "childrenArrow",
            style: {
              transform: "scaleX(-1)"
            },
            children: _0x5cbce3.jsxs("svg", {
              width: "5.09vh",
              height: "5.46vh",
              viewBox: "0 0 55 59",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [_0x5cbce3.jsx("g", {
                filter: "url(#filter0_d_0_1)",
                children: _0x5cbce3.jsx("path", {
                  d: "M25 22L32 29L25 36",
                  stroke: "#00F8B9",
                  "stroke-width": "2"
                })
              }), _0x5cbce3.jsx("path", {
                d: "M5 -18L52 29L5 76",
                stroke: "white",
                "stroke-opacity": "0.05",
                "stroke-width": "13"
              }), _0x5cbce3.jsx("path", {
                d: "M9 10L28 29L9 48",
                stroke: "white",
                "stroke-opacity": "0.05",
                "stroke-width": "13"
              }), _0x5cbce3.jsx("defs", {
                children: _0x5cbce3.jsxs("filter", {
                  id: "filter0_d_0_1",
                  x: "12.2891",
                  y: "9.29291",
                  width: "33.125",
                  height: "39.4142",
                  filterUnits: "userSpaceOnUse",
                  "color-interpolation-filters": "sRGB",
                  children: [_0x5cbce3.jsx("feFlood", {
                    "flood-opacity": "0",
                    result: "BackgroundImageFix"
                  }), _0x5cbce3.jsx("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha"
                  }), _0x5cbce3.jsx("feOffset", {}), _0x5cbce3.jsx("feGaussianBlur", {
                    stdDeviation: "6"
                  }), _0x5cbce3.jsx("feComposite", {
                    in2: "hardAlpha",
                    operator: "out"
                  }), _0x5cbce3.jsx("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0.972549 0 0 0 0 0.72549 0 0 0 1 0"
                  }), _0x5cbce3.jsx("feBlend", {
                    mode: "normal",
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_0_1"
                  }), _0x5cbce3.jsx("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "effect1_dropShadow_0_1",
                    result: "shape"
                  })]
                })
              })]
            })
          }), _0x5cbce3.jsxs("div", {
            style: {
              width: "100%"
            },
            children: [_0x5cbce3.jsxs("div", {
              style: {
                display: "flex",
                justifyContent: "space-between"
              },
              children: [_0x5cbce3.jsx(_0x592394, {
                i18n: i18nTitle,
                i18nSource: "ui:contextmenu:title",
                variant: "body1",
                style: {
                  display: "inline"
                },
                children: _0x31c468
              }), _0x5cbce3.jsx(_0x592394, {
                style: {
                  textAlign: "right",
                  display: "inline"
                },
                children: titleRight
              })]
            }), _0x5cbce3.jsx(_0x592394, {
              i18n: i18nDescription,
              i18nSource: "ui:contextmenu:desc",
              variant: "body2",
              children: _0xb7c162
            }), _0x345e3d && _0x5cbce3.jsx(_0x592394, {
              style: {
                fontSize: "1vh"
              },
              i18n: i18nDescription,
              i18nSource: "ui:contextmenu:desc",
              variant: "body2",
              children: _0x345e3d
            })]
          })]
        })
      }), _0x20369b && _0x5cbce3.jsx("div", {
        className: "childrenArrow",
        children: _0x5cbce3.jsxs("svg", {
          width: "5.09vh",
          height: "5.46vh",
          viewBox: "0 0 55 59",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [_0x5cbce3.jsx("g", {
            filter: "url(#filter0_d_0_1)",
            children: _0x5cbce3.jsx("path", {
              d: "M25 22L32 29L25 36",
              stroke: "#00F8B9",
              "stroke-width": "2"
            })
          }), _0x5cbce3.jsx("path", {
            d: "M5 -18L52 29L5 76",
            stroke: "white",
            "stroke-opacity": "0.05",
            "stroke-width": "13"
          }), _0x5cbce3.jsx("path", {
            d: "M9 10L28 29L9 48",
            stroke: "white",
            "stroke-opacity": "0.05",
            "stroke-width": "13"
          }), _0x5cbce3.jsx("defs", {
            children: _0x5cbce3.jsxs("filter", {
              id: "filter0_d_0_1",
              x: "12.2891",
              y: "9.29291",
              width: "33.125",
              height: "39.4142",
              filterUnits: "userSpaceOnUse",
              "color-interpolation-filters": "sRGB",
              children: [_0x5cbce3.jsx("feFlood", {
                "flood-opacity": "0",
                result: "BackgroundImageFix"
              }), _0x5cbce3.jsx("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha"
              }), _0x5cbce3.jsx("feOffset", {}), _0x5cbce3.jsx("feGaussianBlur", {
                stdDeviation: "6"
              }), _0x5cbce3.jsx("feComposite", {
                in2: "hardAlpha",
                operator: "out"
              }), _0x5cbce3.jsx("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0.972549 0 0 0 0 0.72549 0 0 0 1 0"
              }), _0x5cbce3.jsx("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_0_1"
              }), _0x5cbce3.jsx("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_0_1",
                result: "shape"
              })]
            })
          })]
        })
      })]
    })
  });
};
const styles = "";
const {
  mapStateToProps,
  mapDispatchToProps
} = _0x1c7c53(_0x4f1186);
class Container extends _0x309290.Component {
  state = {
    show: false
  };
  onShow = _0x433e91 => {
    const _0x52f97c = [];
    const _0x2c882a = {};
    const _0x4093b0 = (_0xf4ed77, _0x675d70 = 0, _0x21ee30 = 0) => {
      const _0x289f52 = [];
      const _0x3c405c = _0xf4ed77.children.filter(_0x3f3577 => _0x3f3577.type === "checkbox");
      const _0x52976b = _0x3c405c.length > 0;
      if (_0x21ee30 > 0) {
        _0x289f52.push(_0x5cbce3.jsx(MenuItem, {
          i18nTitle: true,
          description: "",
          hasChildren: false,
          isBackButton: true,
          onClick: () => {
            _0xdf6468("np-ui:context:update", {
              activeIndex: 0,
              activeLevel: 0
            });
            this.props.updateState({
              activeIndex: 0,
              activeLevel: 0,
              checkedKeys: {}
            });
          },
          title: "Go Back"
        }, -1));
      }
      const _0xcfca10 = () => {
        return _0x5cbce3.jsx("div", {
          className: "menuItems",
          children: _0x289f52
        });
      };
      _0xf4ed77.children.forEach(_0x51c4a7 => {
        if (!_0x2c882a[_0x21ee30]) {
          _0x2c882a[_0x21ee30] = 0;
        }
        const _0x56ad1a = _0x2c882a[_0x21ee30];
        _0x2c882a[_0x21ee30] += 1;
        const _0x474b50 = Array.isArray(_0x51c4a7.children) && _0x51c4a7.children.length > 0;
        if (_0x474b50) {
          _0x4093b0({
            children: _0x51c4a7.children
          }, _0x56ad1a, _0x21ee30 + 1);
        }
        const _0x866c9f = _0x2c6bca => () => {
          const _0x55af2e = typeof _0x2c6bca.action === "string" && _0x2c6bca.action.length > 0;
          if (_0x55af2e) {
            const _0x38b137 = {};
            if (_0x52976b) {
              _0x38b137.checkboxes = this.props.checkedKeys;
              for (const _0x4793e1 of _0x3c405c) {
                if (_0x38b137.checkboxes[_0x4793e1.key] === undefined) {
                  _0x38b137.checkboxes[_0x4793e1.key] = _0x4793e1.isChecked;
                }
              }
            }
            _0xdf6468(_0x2c6bca.action, {
              key: _0x2c6bca.key,
              data: _0x38b137
            });
          }
          if (_0x2c6bca.type === "checkbox") {
            this.props.updateState({
              checkedKeys: {
                ...this.props.checkedKeys,
                [_0x2c6bca.key]: !(this.props.checkedKeys[_0x2c6bca.key] ?? _0x51c4a7.isChecked)
              }
            });
            return;
          }
          if (_0x474b50) {
            _0xdf6468("np-ui:context:update", {
              activeIndex: _0x56ad1a,
              activeLevel: _0x21ee30 + 1
            });
            this.props.updateState({
              activeIndex: _0x56ad1a,
              activeLevel: _0x21ee30 + 1,
              checkedKeys: {}
            });
          } else if (_0x55af2e) {
            _0xdf6468("np-ui:closeApp");
            this.setState({
              show: false
            }, this.props.resetState);
          }
        };
        const _0x158325 = () => {
          return this.props.checkedKeys[_0x51c4a7.key] ?? _0x51c4a7.isChecked;
        };
        _0x289f52.push(_0x5cbce3.jsx(MenuItem, {
          i18nDescription: _0x51c4a7.i18nDescription || false,
          description: _0x51c4a7.description,
          recipe: _0x51c4a7.recipe,
          isBackButton: false,
          hasChildren: _0x474b50,
          image: _0x51c4a7.image || false,
          onClick: _0x866c9f(_0x51c4a7),
          i18nTitle: _0x51c4a7.i18nTitle || false,
          title: _0x51c4a7.title,
          disabled: _0x51c4a7.disabled,
          icon: _0x51c4a7.icon,
          titleRight: _0x51c4a7.titleRight,
          type: _0x51c4a7.type,
          isChecked: _0x158325
        }, _0x56ad1a));
      });
      _0x52f97c.push({
        Component: _0xcfca10,
        idx: _0x675d70,
        level: _0x21ee30
      });
    };
    _0x4093b0({
      children: _0x433e91.options
    });
    this.props.updateState({
      menus: _0x52f97c,
      position: _0x433e91.position,
      title: _0x433e91.title
    });
    this.setState({
      show: true
    });
  };
  onHide = () => {
    this.setState({
      show: false
    }, this.props.resetState);
  };
  render() {
    return _0x5cbce3.jsx(_0xd12711, {
      closeOnError: true,
      name: appName,
      onError: this.onHide,
      onEscape: this.onHide,
      onHide: this.onHide,
      onShow: this.onShow,
      style: {
        zIndex: 1000
      },
      children: this.state.show && _0x5cbce3.jsx(ContextMenu, {
        ...this.props
      })
    });
  }
}
const Container$1 = _0x175539(mapStateToProps, mapDispatchToProps)(Container);
const config = () => {
  return {
    name: "contextmenu",
    render: Container$1,
    type: _0x2c8235.Application,
    wrapperClassname: "app-wrapper flex-centered"
  };
};
export { config as default };