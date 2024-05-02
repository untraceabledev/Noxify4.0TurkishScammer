import { R as _0x179a75, j as _0x241863 } from "./vendor-6c45b22f.js";
import { A as _0x471cff } from "./ui-app-6ee97cab.js";
import { B as _0x3e1ace } from "./button-c47bff31.js";
import { m as _0x4ef8b2, b as _0x51a692 } from "./styles-61014012.js";
import { n as _0x1f96a0, u as _0x130a48, C as _0x47bdb0 } from "./index-d5aaa08b.js";
import "./commonjsHelpers-c5dac66b.js";
import "./translations-7705db3f.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
const useStyles = _0x4ef8b2({
  wrapper: () => ({
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center"
  }),
  container: () => ({
    width: "50vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "all"
  }),
  header: () => ({
    backgroundColor: _0x51a692.bgPrimary(),
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    height: "3vh",
    width: "50vw",
    margin: "0 auto",
    padding: _0x51a692.responsiveWidth(24)
  }),
  textarea: () => ({
    border: "1px solid #EEEEEE",
    boxShadow: "1px 1px 0 #DDDDDD",
    fontSize: "22px",
    lineHeight: "50px",
    padding: "11px 20px 0 70px",
    resize: "none",
    height: "35vh",
    width: "50vw",
    overflowY: "auto",
    backgroundImage: "-webkit-linear-gradient(top , #FFFFFF, #FFFFFF 49px,#E7EFF8 0), -webkit-radial-gradient(4% 50%, circle closest-corner, #f5f5f5, #f5f5f5 39%, #FFFFFF 0%), -webkit-radial-gradient(3.9% 46%, circle closest-corner, #cccccc, #cccccc 43.5%, #FFFFFF 0%)",
    backgroundSize: "100% 50px",
    color: "#000000"
  })
});
const Notepad = _0x12e8bc => {
  const _0x3aa545 = useStyles();
  const [_0x2c2d02, _0xf0842a] = _0x179a75.useState(_0x12e8bc.content);
  const _0x2aabd9 = async () => {
    _0x1f96a0("np-ui:createNotepadNote", {
      content: _0x2c2d02
    });
  };
  return _0x241863.jsx("div", {
    className: _0x3aa545.wrapper,
    children: _0x241863.jsxs("div", {
      className: _0x3aa545.container,
      children: [_0x12e8bc.canSave && _0x241863.jsx("div", {
        className: _0x3aa545.header,
        children: _0x241863.jsx(_0x3e1ace.Primary, {
          onClick: () => _0x2aabd9(),
          children: "Save"
        })
      }), _0x241863.jsxs("div", {
        children: [_0x12e8bc.canSave && _0x241863.jsx("textarea", {
          id: "notepad-content",
          className: _0x3aa545.textarea,
          spellCheck: "false",
          onChange: _0x2dd457 => _0xf0842a(_0x2dd457.target.value)
        }), !_0x12e8bc.canSave && _0x241863.jsx("textarea", {
          id: "notepad-content",
          readOnly: true,
          value: _0x12e8bc.content,
          className: _0x3aa545.textarea,
          spellCheck: "false"
        })]
      })]
    })
  });
};
const NotepadContainer = () => {
  const [_0x3e500e, _0x17918c] = _0x130a48(appName);
  const _0x117b45 = _0x2b10ac => {};
  const _0x16388f = _0x141af0 => {
    _0x17918c({
      show: true,
      canSave: _0x141af0.canSave,
      content: _0x141af0.content ?? ""
    });
  };
  const _0x439062 = () => {
    _0x17918c({
      show: false
    });
  };
  return _0x241863.jsx(_0x471cff, {
    center: true,
    store: true,
    name: appName,
    onEvent: _0x117b45,
    onHide: _0x439062,
    onShow: _0x16388f,
    onEscape: _0x439062,
    children: _0x3e500e.show && _0x241863.jsx(Notepad, {
      canSave: _0x3e500e.canSave,
      content: _0x3e500e.content
    })
  });
};
const appName = "notepad";
const config = () => {
  return {
    name: appName,
    render: NotepadContainer,
    type: _0x47bdb0.Application
  };
};
export { appName, config as default };