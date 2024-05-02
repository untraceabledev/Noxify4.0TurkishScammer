import { r as _0x2efe8a, t as _0x2085c0 } from "./vendor-6c45b22f.js";
function copyText(_0x36c5b3) {
  try {
    var _0x5df3b9 = document.createElement("input");
    _0x5df3b9.setAttribute("value", _0x36c5b3);
    document.body.appendChild(_0x5df3b9);
    _0x5df3b9.select();
    var _0x1d75ad = document.execCommand("copy");
    document.body.removeChild(_0x5df3b9);
    return _0x1d75ad;
  } catch (_0x5f5166) {
    console.error("could not copy to clipboard: ", _0x5f5166);
  }
}
const Delay = _0x3ebf42 => {
  return new Promise(_0x4ca0b8 => setTimeout(_0x4ca0b8, _0x3ebf42));
};
const useDebounce = (_0x68c121, _0x48fc71) => {
  const _0xa27a1a = _0x2efe8a.useRef({
    cb: _0x68c121,
    delay: _0x48fc71
  });
  _0x2efe8a.useEffect(() => {
    _0xa27a1a.current = {
      cb: _0x68c121,
      delay: _0x48fc71
    };
  });
  return _0x2efe8a.useCallback(_0x2085c0((..._0x5f2812) => {
    if (_0xa27a1a.current.delay === _0x48fc71) {
      _0xa27a1a.current.cb(..._0x5f2812);
    }
  }, _0x48fc71), [_0x48fc71, _0x2085c0]);
};
const useUpdateEffect = (_0x3aec79, _0x266eb4) => {
  const _0x1235cf = _0x2efe8a.useRef(false);
  _0x2efe8a.useEffect(() => {
    if (_0x1235cf.current) {
      return _0x3aec79();
    }
    _0x1235cf.current = true;
  }, _0x266eb4);
};
const getScrollOffsetFromTop = _0xbbf7fe => {
  return _0xbbf7fe.scrollTop;
};
const getMaximumScrollAmount = _0x5992dd => {
  return _0x5992dd.scrollHeight - _0x5992dd.offsetHeight;
};
export { Delay as D, getMaximumScrollAmount as a, copyText as c, getScrollOffsetFromTop as g, useUpdateEffect as u };