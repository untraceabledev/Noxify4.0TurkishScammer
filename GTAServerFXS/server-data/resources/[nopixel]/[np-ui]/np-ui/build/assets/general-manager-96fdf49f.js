import { j as _0x4369d9, R as _0x482e5e } from "./vendor-6c45b22f.js";
import { T as _0x414404 } from "./text-f7ee3e03.js";
import { b as _0x393bab, m as _0x48623d } from "./styles-61014012.js";
const containerHeight = _0x393bab.responsiveHeight(600);
const useStyles = _0x48623d({
  container: () => ({
    pointerEvents: "all",
    userSelect: "unset",
    width: _0x393bab.responsiveWidth(800),
    height: containerHeight,
    backgroundColor: _0x393bab.bgSecondary(),
    display: "flex",
    color: _0x393bab.textColor(),
    position: "relative"
  }),
  left: () => ({
    width: "25%"
  }),
  right: () => ({
    flex: 1,
    backgroundColor: _0x393bab.bgPrimary(),
    maxHeight: containerHeight,
    overflowY: "scroll"
  }),
  menuItem: () => ({
    ..._0x393bab.flexCenter,
    height: 56,
    width: "100%",
    cursor: "pointer",
    "& p": {
      width: "100%",
      textAlign: "left",
      padding: 16
    }
  }),
  menuItemActive: () => ({
    backgroundColor: _0x393bab.bgPrimary()
  })
});
const Container = _0x2e16c2 => {
  const _0x1222af = useStyles(_0x2e16c2);
  return _0x4369d9.jsxs("div", {
    className: _0x1222af.container,
    children: [_0x4369d9.jsx("div", {
      className: _0x1222af.left,
      children: _0x2e16c2.items.map(_0x2785fb => _0x4369d9.jsx("div", {
        className: _0x1222af.menuItem + " " + (_0x2e16c2.activeItem === _0x2785fb.id ? _0x1222af.menuItemActive : null),
        onClick: () => _0x2e16c2.onMenuItemClick(_0x2785fb),
        children: _0x4369d9.jsx(_0x414404, {
          i18n: true,
          i18nSource: "ui:text:general-manaer",
          variant: "body1",
          children: _0x2785fb.label
        })
      }, _0x2785fb.id))
    }), _0x4369d9.jsx("div", {
      className: _0x1222af.right,
      children: _0x2e16c2.children
    })]
  });
};
class GeneralManager extends _0x482e5e.Component {
  render() {
    return _0x4369d9.jsx(Container, {
      ...this.props
    });
  }
}
export { GeneralManager as G };