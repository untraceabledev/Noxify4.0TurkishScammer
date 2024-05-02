import { j as _0x397cbd } from "./vendor-6c45b22f.js";
import { I as _0x2fa2e7 } from "./icon-7f5cdae2.js";
import { C as _0x4c8d15 } from "./tooltip-cb871d8a.js";
const index = "";
const GenericAppHeader = ({
  title: _0x4fcbda,
  action: _0xb4758d,
  onBack: _0x45d6d3
}) => {
  return _0x397cbd.jsxs("div", {
    className: "generic-app-header",
    children: [_0x397cbd.jsxs("h1", {
      className: "title",
      children: [typeof _0x45d6d3 === "function" && _0x397cbd.jsx(_0x2fa2e7, {
        className: "icon",
        icon: "angle-left",
        onClick: _0x45d6d3
      }), _0x4fcbda]
    }), _0xb4758d && _0x397cbd.jsx(_0x4c8d15, {
      title: _0xb4758d.tooltip,
      children: _0x397cbd.jsx("button", {
        className: "action-button",
        onClick: _0xb4758d.onClick,
        style: {
          ...(_0xb4758d?.color ? {
            background: _0xb4758d.color
          } : {})
        },
        children: _0x397cbd.jsx(_0x2fa2e7, {
          className: "icon",
          icon: _0xb4758d.icon
        })
      })
    })]
  });
};
export { GenericAppHeader as G };