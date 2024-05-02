import { j as _0x57e2b4, A as _0x3e3036, x as _0xff64f0, ag as _0x4d23a2 } from "./vendor-6c45b22f.js";
import { I as _0x5a7f12 } from "./icon-7f5cdae2.js";
const index = "";
const GenericAppModal = ({
  show: _0x4e6106,
  title: _0x32cfce,
  onSubmit: _0x945e68,
  onCancel: _0x3130f6,
  children: _0x45112e,
  loading: _0x5aab0b,
  error: _0x80eb5e,
  ..._0x180663
}) => {
  const _0x4fbf8b = {
    transform: "translateY(0%)"
  };
  const _0x333d94 = {
    transform: "translateY(200%)"
  };
  return _0x57e2b4.jsx(_0x3e3036, {
    children: _0x4e6106 && _0x57e2b4.jsxs(_0xff64f0.div, {
      className: "generic-app-modal",
      initial: _0x333d94,
      animate: _0x4fbf8b,
      exit: _0x333d94,
      children: [_0x57e2b4.jsx("h1", {
        children: _0x32cfce
      }), _0x5aab0b && _0x57e2b4.jsx("div", {
        className: "loading-container",
        children: _0x57e2b4.jsx(_0x4d23a2, {
          size: 60,
          style: {
            color: "#4dc3a5"
          }
        })
      }), !_0x5aab0b && _0x57e2b4.jsxs(_0x57e2b4.Fragment, {
        children: [_0x80eb5e && _0x57e2b4.jsx("p", {
          className: "error",
          children: _0x80eb5e
        }), _0x57e2b4.jsx("div", {
          className: "content-container",
          ..._0x180663,
          children: _0x45112e
        }), _0x57e2b4.jsxs("div", {
          className: "actions-container",
          children: [_0x57e2b4.jsxs("button", {
            className: "btn add-btn",
            onClick: _0x945e68,
            children: ["Submit ", _0x57e2b4.jsx(_0x5a7f12, {
              icon: "fas fa-angle-right"
            })]
          }), _0x57e2b4.jsxs("button", {
            className: "btn cancel-btn",
            onClick: _0x3130f6,
            children: ["Cancel ", _0x57e2b4.jsx(_0x5a7f12, {
              icon: "fas fa-times"
            })]
          })]
        })]
      })]
    })
  });
};
export { GenericAppModal as G };