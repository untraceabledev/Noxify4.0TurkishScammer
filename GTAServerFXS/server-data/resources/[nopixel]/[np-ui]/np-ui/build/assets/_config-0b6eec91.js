import { r as _0x18c5d2, j as _0x793eac, A as _0x261343, x as _0x335747 } from "./vendor-6c45b22f.js";
import { A as _0x1b99fe } from "./ui-app-6ee97cab.js";
import { r as _0xa37335 } from "./translations-7705db3f.js";
import { u as _0x56d253, C as _0x410d92 } from "./index-d5aaa08b.js";
import { appName } from "./store-6e4dd9d5.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
const index = "";
const InteractionPopup = () => {
  const [_0x223361] = _0x56d253(appName);
  const _0x46410b = _0x18c5d2.useMemo(() => {
    const _0x444df3 = _0xa37335(_0x223361.message, true);
    const _0x254039 = _0x444df3.match(/\[(\w+)\]/g);
    const _0x300dbf = [];
    for (const _0x2d84e9 of _0x254039 || []) {
      const _0x43827e = _0x254039?.[_0x254039.indexOf(_0x2d84e9) + 1];
      let _0x34f613 = _0x43827e ? _0x444df3.slice(_0x444df3.indexOf(_0x2d84e9) + _0x2d84e9.length, _0x444df3.indexOf(_0x43827e)) : _0x444df3.slice(_0x444df3.indexOf(_0x2d84e9) + _0x2d84e9.length);
      if (_0x254039?.indexOf(_0x2d84e9) === 0) {
        _0x34f613 = _0x444df3.slice(0, _0x444df3.indexOf(_0x2d84e9)) + _0x34f613;
      }
      _0x300dbf.push({
        keybind: _0x2d84e9.replace(/\[|\]/g, ""),
        label: _0x34f613
      });
    }
    return _0x300dbf;
  }, [_0x223361.message]);
  const _0x2a55bc = _0x18c5d2.useMemo(() => {
    const _0x51c4c6 = _0xa37335(_0x223361.message, true);
    const _0x525271 = _0x51c4c6.match(/\[(\w)\]/);
    if (_0x525271) {
      const _0x1916c5 = _0x525271.index || 0;
      return _0x51c4c6.slice(0, _0x1916c5) + _0x51c4c6.slice(_0x1916c5 + _0x525271[0].length);
    } else {
      return _0x51c4c6;
    }
  }, [_0x223361.message]);
  const _0x5635f7 = {
    transform: ["translateY(50%)", "translateY(0%)"],
    opacity: [0, 1]
  };
  const _0x319a27 = {
    transform: ["translateX(50%)", "translateX(0%)"],
    opacity: [0, 1]
  };
  const _0x1cba6c = {
    transform: "translateY(50%)",
    opacity: 0
  };
  const _0x3de5e4 = {
    transform: "translateX(50%)",
    opacity: 0
  };
  const _0xe8a39c = _0x46410b.length > 0 ? _0x3de5e4 : _0x1cba6c;
  const _0x244c0a = _0x46410b.length > 0 ? _0x319a27 : _0x5635f7;
  return _0x793eac.jsx(_0x261343, {
    children: _0x223361.show && _0x793eac.jsx("div", {
      className: "interation-wrapper",
      children: _0x46410b.length > 0 ? _0x793eac.jsx("div", {
        className: "interaction-cols",
        children: _0x46410b.map((_0x474e9d, _0x180120) => _0x793eac.jsxs("div", {
          className: "interaction-alert",
          children: [_0x793eac.jsx(_0x335747.div, {
            className: "interaction-key-container",
            initial: _0x1cba6c,
            exit: _0x1cba6c,
            animate: _0x5635f7,
            transition: {
              ease: "easeInOut",
              duration: 0.3
            },
            children: _0x793eac.jsx("h1", {
              className: "interaction-key-text",
              children: _0x474e9d.keybind
            })
          }), _0x793eac.jsx(_0x335747.h1, {
            className: "interaction-text",
            initial: _0xe8a39c,
            exit: _0xe8a39c,
            animate: _0x244c0a,
            transition: {
              ease: "easeInOut",
              duration: 0.4
            },
            children: _0x474e9d.label
          })]
        }))
      }) : _0x793eac.jsx("div", {
        className: "interaction-cols",
        children: _0x793eac.jsx("div", {
          className: "interaction-alert",
          children: _0x793eac.jsx(_0x335747.h1, {
            className: "interaction-text",
            initial: _0xe8a39c,
            exit: _0xe8a39c,
            animate: _0x244c0a,
            transition: {
              ease: "easeInOut",
              duration: 0.4
            },
            children: _0x2a55bc
          })
        })
      })
    })
  });
};
const InteractionContainer = () => {
  const [_0x1efc58, _0x468f75] = _0x56d253(appName);
  const _0x18aa0e = _0x13f996 => {
    _0x468f75({
      message: _0x13f996.message || "",
      opts: _0x13f996.opts || {},
      show: _0x13f996.show
    });
  };
  return _0x793eac.jsx(_0x1b99fe, {
    name: appName,
    onEvent: _0x18aa0e,
    children: _0x793eac.jsx(InteractionPopup, {})
  });
};
const config = () => {
  return {
    name: "interactions",
    render: InteractionContainer,
    type: _0x410d92.Application
  };
};
export { config as default };