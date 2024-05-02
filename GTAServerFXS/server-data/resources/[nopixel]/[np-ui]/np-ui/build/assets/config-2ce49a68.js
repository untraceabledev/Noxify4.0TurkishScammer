import { r as _0x4431c2, j as _0x26d620 } from "./vendor-6c45b22f.js";
import { n as _0x2af494 } from "./index-d5aaa08b.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
const Selfie = _0x16d111 => {
  _0x4431c2.useEffect(() => {
    _0x2af494("np-ui:activateSelfieMode");
  }, []);
  return _0x26d620.jsx("div", {});
};
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/camera.svg";
const config = _0x35c82a => {
  return {
    ..._0x35c82a,
    iconPng: myIcon,
    label: "Selfie",
    position: 4,
    name: "selfie",
    render: _0xb19bb => _0x26d620.jsx(Selfie, {
      ..._0xb19bb
    }),
    favourite: true
  };
};
export { config as default };