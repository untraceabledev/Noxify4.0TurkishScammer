import { j as _0x54fb2f } from "./vendor-6c45b22f.js";
import { A as _0x28b6d8 } from "./ui-app-6ee97cab.js";
import { P as _0x5a33e5 } from "./index-ee9f21b8.js";
import { u as _0x4e6898, C as _0x52ef49 } from "./index-d5aaa08b.js";
import { appName } from "./store-0bcf49be.js";
import "./commonjsHelpers-c5dac66b.js";
import "./text-f7ee3e03.js";
import "./translations-7705db3f.js";
import "./styles-61014012.js";
import "./icon-7f5cdae2.js";
import "./input-c6588ceb.js";
import "./format-10690d6f.js";
import "./index-ae383549.js";
import "./button-c47bff31.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
const App = () => {
  const [_0x5da749, _0x9dd552] = _0x4e6898(appName);
  const _0x12c117 = _0x20e547 => {
    if (_0x5da749.displayTimeout) {
      clearTimeout(_0x5da749.displayTimeout);
      _0x5da749.displayTimeout = undefined;
    }
    _0x5da749.displayTimeout = setTimeout(() => {
      _0x9dd552({
        showPhoto: false
      });
    }, 5000);
    _0x9dd552({
      showPhoto: true,
      photo: _0x20e547
    });
  };
  const _0x1a61c6 = () => {
    _0x9dd552({
      showPhoto: false,
      photo: undefined
    });
  };
  return _0x54fb2f.jsx(_0x28b6d8, {
    center: true,
    name: appName,
    onError: _0x1a61c6,
    onEscape: _0x1a61c6,
    onHide: _0x1a61c6,
    onShow: _0x12c117,
    children: _0x54fb2f.jsx("div", {
      style: {
        paddingLeft: "2rem",
        width: "100%"
      },
      children: _0x5da749.showPhoto && _0x54fb2f.jsx(_0x5a33e5, {
        uuid: _0x5da749.photo?.uuid,
        data: {
          ..._0x5da749.photo,
          options: {}
        }
      })
    })
  });
};
const config = () => {
  return {
    name: "npolaroid-photo",
    render: App,
    type: _0x52ef49.Application
  };
};
export { config as default };