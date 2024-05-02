import { j as _0x310390 } from "./vendor-6c45b22f.js";
import { m as _0x5b380f } from "./styles-61014012.js";
const useStyles = _0x5b380f({
  wrapper: () => ({
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "hidden"
  }),
  page: () => ({
    height: "100%",
    width: "100%",
    transition: "all 400ms ease",
    position: "absolute",
    top: "0",
    left: "0",
    willChange: "left"
  }),
  hide: () => ({
    visibility: "hidden",
    pointerEvents: "none"
  }),
  hideLeft: () => ({
    left: "-100%"
  }),
  hideRight: () => ({
    left: "100%"
  })
});
const oldStyles = "";
const MultiPager = _0x1d4aaa => {
  const _0x486106 = useStyles();
  if (_0x1d4aaa.landscapeOptions.split) {
    const _0x506625 = _0x1d4aaa.pages.find(_0x5a25de => _0x5a25de.index === _0x1d4aaa.landscapeOptions.indexLeft);
    const _0x4a78de = _0x1d4aaa.pages.find(_0x455f9e => _0x455f9e.index === _0x1d4aaa.landscapeOptions.indexRight);
    const _0x37773d = !!_0x1d4aaa.landscapeOptions.hideRight;
    return _0x310390.jsxs("div", {
      className: "inner-phone-app-container-multi-pager inner-phone-app-container-multi-pager-landscape",
      children: [_0x310390.jsx("div", {
        className: "page " + (_0x37773d ? "" : "page-landscape-left"),
        children: _0x506625.content
      }), _0x310390.jsx("div", {
        className: "page page-landscape-right " + (!_0x37773d ? "" : "page-landscape-right-hidden"),
        children: _0x4a78de.content
      })]
    });
  }
  return _0x310390.jsx("div", {
    className: _0x486106.wrapper,
    children: _0x1d4aaa.pages.map(_0x400247 => {
      const _0x4c6768 = [_0x486106.page];
      if (_0x400247.index < _0x1d4aaa.activeIndex) {
        _0x4c6768.push(_0x486106.hide + " " + _0x486106.hideLeft);
      } else if (_0x400247.index > _0x1d4aaa.activeIndex) {
        _0x4c6768.push(_0x486106.hide + " " + _0x486106.hideRight);
      }
      return _0x310390.jsx("div", {
        className: _0x4c6768.join(" "),
        children: _0x400247.content
      }, _0x400247.index);
    })
  });
};
export { MultiPager as M };