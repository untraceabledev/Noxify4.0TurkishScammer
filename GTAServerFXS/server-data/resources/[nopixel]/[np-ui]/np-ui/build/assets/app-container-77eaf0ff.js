import { R as _0x5da4d9, j as _0x5de3a5, y as _0x386e41, D as _0x4bb886, E as _0x116918, aA as _0x54a8a9 } from "./vendor-6c45b22f.js";
import { I as _0x5c42a2 } from "./icon-7f5cdae2.js";
import { F as _0x18b0b4 } from "./input-c6588ceb.js";
import { T as _0x59474b } from "./text-f7ee3e03.js";
import { C as _0x1e68f3 } from "./tooltip-cb871d8a.js";
import { m as _0x4fa8bb, b as _0x2c08a6 } from "./styles-61014012.js";
const useStyles = _0x4fa8bb({
  wrapper: _0x3ea60d => ({
    position: "relative",
    overflow: "hidden",
    background: _0x2c08a6.bgPrimary(),
    paddingTop: _0x2c08a6.responsiveHeight(10),
    width: "100%",
    height: "100%",
    boxShadow: "none",
    opacity: 1,
    animation: _0x3ea60d.fadeIn === false ? "unset" : "fadeinpls",
    animationIterationCount: 1,
    animationDuration: "800ms"
  }),
  container: _0x676e3 => ({
    maxHeight: _0x676e3.search ? "calc(100% - " + _0x2c08a6.responsiveHeight(72) + ")" : "100%",
    minHeight: _0x676e3.search ? "calc(100% - " + _0x2c08a6.responsiveHeight(72) + ")" : "100%",
    height: _0x676e3.search ? "calc(100% - " + _0x2c08a6.responsiveHeight(72) + ")" : "100%",
    width: "100%",
    overflow: "hidden",
    overflowY: "scroll",
    padding: _0x676e3.removePadding ? 0 : "0 " + _0x2c08a6.responsiveWidth(16)
  }),
  actions: () => ({
    position: "absolute",
    top: _0x2c08a6.responsiveHeight(32),
    right: _0x2c08a6.responsiveWidth(16),
    display: "flex",
    justifyContent: "flex-end",
    zIndex: 1
  }),
  action: () => ({
    color: "white",
    marginLeft: _0x2c08a6.responsiveWidth(16)
  }),
  searchContainer: _0x5919c0 => ({
    padding: _0x5919c0.removePadding ? 0 : _0x2c08a6.responsiveHeight(8) + " " + _0x2c08a6.responsiveWidth(16),
    marginBottom: _0x2c08a6.responsiveHeight(8),
    position: "relative",
    height: _0x2c08a6.responsiveHeight(64),
    width: "100%",
    display: "flex"
  }),
  search: () => ({
    width: "100%",
    position: "relative"
  }),
  backButton: () => ({
    display: "flex",
    width: _0x2c08a6.responsiveWidth(40),
    alignItems: "center"
  })
});
const AppContainer = _0x33e195 => {
  const [_0xc2ea65, _0x481df2] = _0x5da4d9.useState("");
  const _0x3c2707 = _0x481130 => {
    _0x481df2(_0x481130);
    if (!_0x481130) {
      _0x33e195.search.onChange(_0x33e195.search.list);
      return;
    }
    const _0x2bbcfb = _0x33e195.search.list.filter(_0x113a53 => {
      for (const _0x5ceec2 of _0x33e195.search.filter) {
        const _0x5ee686 = typeof _0x5ceec2 === "function" ? _0x5ceec2(_0x113a53) : _0x113a53[_0x5ceec2];
        if (_0x5ee686 && _0x5ee686.toString().toLowerCase().indexOf(_0x481130.toLowerCase()) !== -1) {
          return true;
        }
      }
      return false;
    });
    _0x33e195.search.onChange(_0x2bbcfb, _0x481130);
  };
  const [_0x30562e, _0x52f85e] = _0x5da4d9.useState(null);
  const _0x42b6ee = Boolean(_0x30562e);
  const _0x5db23b = _0x5601ad => {
    _0x52f85e(_0x5601ad.currentTarget);
  };
  const _0x385981 = () => {
    _0x52f85e(null);
  };
  const _0x3a3a59 = useStyles(_0x33e195);
  const _0x566e5f = _0x33e195.style ? _0x33e195.style : {};
  if (_0x33e195.background) {
    _0x566e5f.background = _0x33e195.background;
  }
  return _0x5de3a5.jsxs("div", {
    className: "app " + (_0x33e195.hasTabs ? "hasTabs" : "") + " " + (_0x33e195.fadeIn === false ? "" : "app-fadein") + " " + (_0x33e195.onClickBack ? "app-hasClickback" : ""),
    style: _0x566e5f,
    children: [_0x5de3a5.jsxs("div", {
      className: "app-header " + (!!_0x33e195.hideSearch ? "search-hidden" : ""),
      children: [(_0x33e195.heading || _0x33e195.subheading && !_0x33e195.titularInput) && _0x5de3a5.jsxs("div", {
        className: "heading " + (_0x33e195.subheading ? "heading-sub" : ""),
        children: [_0x33e195.onClickBack && _0x5de3a5.jsx(_0x1e68f3, {
          title: "Go Back",
          placement: "right",
          children: _0x5de3a5.jsx("div", {
            className: "back-button",
            onClick: _0x33e195.onClickBack,
            children: _0x5de3a5.jsx(_0x5c42a2, {
              icon: "chevron-left",
              size: "lg",
              style: {
                color: "white"
              }
            })
          })
        }), _0x5de3a5.jsxs("div", {
          children: [_0x33e195.heading && _0x5de3a5.jsx(_0x1e68f3, {
            title: _0x33e195.heading,
            placement: "top",
            children: _0x5de3a5.jsx("h1", {
              className: _0x33e195.heading.length > 11 ? "long" : "",
              children: _0x33e195.heading
            })
          }), _0x33e195.subheading && _0x5de3a5.jsx("p", {
            children: _0x33e195.subheading
          })]
        })]
      }), _0x33e195.titularInput && _0x5de3a5.jsxs("div", {
        className: "heading " + _0x3a3a59.search,
        children: [_0x33e195.onClickBack && _0x5de3a5.jsx(_0x1e68f3, {
          title: "Go Back",
          placement: "right",
          children: _0x5de3a5.jsx("div", {
            className: "back-button",
            onClick: _0x33e195.onClickBack,
            children: _0x5de3a5.jsx(_0x5c42a2, {
              icon: "chevron-left",
              size: "lg",
              style: {
                color: "white"
              }
            })
          })
        }), _0x33e195.titularInput]
      }), (_0x33e195.primaryActions || _0x33e195.auxActions) && _0x5de3a5.jsxs("div", {
        className: "primary-actions",
        children: [_0x33e195.primaryActions && _0x33e195.primaryActions.map(_0x1a9d58 => _0x5de3a5.jsx(_0x1e68f3, {
          title: _0x1a9d58.title,
          placement: "left",
          children: _0x5de3a5.jsx("div", {
            className: "button button-icon button-" + _0x1a9d58.color,
            onClick: _0x1a9d58.onClick ? _0x1a9d58.onClick : () => {},
            children: _0x5de3a5.jsx(_0x5c42a2, {
              icon: _0x1a9d58.icon,
              size: "lg"
            })
          })
        }, "" + _0x1a9d58.title + _0x1a9d58.icon)), _0x33e195.auxActions && _0x33e195.auxActions.length > 0 && _0x5de3a5.jsxs(_0x5da4d9.Fragment, {
          children: [_0x5de3a5.jsx("div", {
            className: " " + _0x3a3a59.action + " ",
            "aria-haspopup": "true",
            onClick: _0x5db23b,
            style: {
              marginLeft: 0
            },
            children: _0x5de3a5.jsx(_0x5c42a2, {
              icon: "ellipsis-v",
              size: "lg",
              style: {
                color: "white"
              }
            })
          }), _0x5de3a5.jsx(_0x386e41, {
            anchorEl: _0x30562e,
            anchorOrigin: {
              vertical: "top",
              horizontal: "right"
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "right"
            },
            keepMounted: true,
            open: _0x42b6ee,
            onClose: _0x385981,
            TransitionComponent: _0x4bb886,
            children: _0x33e195.auxActions.map(_0x22b302 => _0x5de3a5.jsxs(_0x116918, {
              onClick: () => {
                _0x385981();
                _0x22b302.onClick();
              },
              children: [_0x5de3a5.jsx(_0x54a8a9, {
                style: {
                  minWidth: 32
                },
                children: _0x5de3a5.jsx(_0x5c42a2, {
                  icon: _0x22b302.icon
                })
              }), _0x5de3a5.jsx(_0x59474b, {
                i18n: true,
                i18nSource: "ui:phone:app-container-menu-item",
                variant: "body2",
                children: _0x22b302.title
              })]
            }, _0x22b302.title))
          })]
        })]
      }), (_0x33e195.onClickBack || _0x33e195.search && !!!_0x33e195.hideSearch) && _0x5de3a5.jsx("div", {
        className: "search-container",
        children: _0x33e195.search && _0x5de3a5.jsx(_0x18b0b4.Search, {
          onChange: _0x3c2707,
          value: _0xc2ea65
        })
      })]
    }), _0x5de3a5.jsxs("div", {
      className: "app-content",
      style: _0x33e195.containerStyle || {},
      onScroll: _0x33e195.onScroll,
      children: [!!_0x33e195.emptyMessage && _0x5de3a5.jsx("div", {
        className: "flex-centered",
        style: {
          padding: 32,
          flexDirection: "column",
          textAlign: "center"
        },
        children: _0x5de3a5.jsx(_0x59474b, {
          i18n: true,
          i18nSource: "ui:text:phone-app-container",
          variant: "h6",
          children: _0x33e195.emptyMessageText
        })
      }), _0x33e195.children]
    })]
  });
};
export { AppContainer as A };