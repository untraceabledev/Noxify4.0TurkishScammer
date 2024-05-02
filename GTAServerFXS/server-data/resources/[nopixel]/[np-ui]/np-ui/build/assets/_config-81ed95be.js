import { _ as _0xcf43bc } from "./vite-a4975f27.js";
import { r as _0x32779f, j as _0x11c2fa } from "./vendor-6c45b22f.js";
import { A as _0x2dc0ac } from "./ui-app-6ee97cab.js";
import { C as _0x22b4b9 } from "./index-d5aaa08b.js";
import "./commonjsHelpers-c5dac66b.js";
import "./bundle-e94787e2.js";
const availableSounds = {};
const soundCache = {};
const SoundsApplication = () => {
  const _0x2fc263 = _0x32779f.useCallback(() => {
    const _0x189923 = Object.assign({
      "../../assets/sounds/cap-tick-tock.ogg": () => _0xcf43bc(() => import("./cap-tick-tock-d5a07c6d.js"), true ? [] : undefined, import.meta.url),
      "../../assets/sounds/qteclick.ogg": () => _0xcf43bc(() => import("./qteclick-1c0d7ff5.js"), true ? [] : undefined, import.meta.url),
      "../../assets/sounds/short_beep_success.ogg": () => _0xcf43bc(() => import("./short_beep_success-be77a37f.js"), true ? [] : undefined, import.meta.url),
      "../../assets/sounds/short_double_beep.ogg": () => _0xcf43bc(() => import("./short_double_beep-8f64d251.js"), true ? [] : undefined, import.meta.url)
    });
    for (const _0xd1cfd7 in _0x189923) {
      _0x189923[_0xd1cfd7]().then(_0x28c66b => {
        const _0x188bb1 = _0xd1cfd7.split("/");
        const _0x499990 = _0x188bb1.pop();
        const _0x263572 = _0x499990?.split(".ogg")[0];
        if (!_0x263572) {
          return;
        }
        availableSounds[_0x263572] = _0x28c66b.default;
      });
    }
  }, []);
  const _0x5438e0 = _0x163d13 => {
    const {
      action: _0x3f1aa8,
      id: _0x57e1af,
      name: _0x22a530
    } = _0x163d13;
    switch (_0x3f1aa8) {
      case "play":
        if (soundCache[_0x57e1af]) {
          soundCache[_0x57e1af].pause();
          delete soundCache[_0x57e1af];
        }
        const _0x5027e4 = new Audio(availableSounds[_0x22a530]);
        _0x5027e4.autoplay = true;
        _0x5027e4.controls = false;
        _0x5027e4.volume = _0x163d13.volume;
        _0x5027e4.loop = _0x163d13.loop;
        _0x5027e4.play();
        console.log("playing - " + _0x22a530);
        soundCache[_0x57e1af] = _0x5027e4;
        break;
      case "stop":
        if (soundCache[_0x57e1af]) {
          soundCache[_0x57e1af].pause();
          delete soundCache[_0x57e1af];
        }
        break;
      case "volume":
        if (soundCache[_0x57e1af]) {
          soundCache[_0x57e1af].volume = _0x163d13.volume;
        }
        break;
    }
  };
  _0x32779f.useEffect(() => {
    _0x2fc263();
  }, [_0x2fc263]);
  return _0x11c2fa.jsx(_0x2dc0ac, {
    name: "sounds",
    onEvent: _0x5438e0
  });
};
const config = () => {
  return {
    name: "sounds",
    render: SoundsApplication,
    type: _0x22b4b9.Application
  };
};
export { config as default };