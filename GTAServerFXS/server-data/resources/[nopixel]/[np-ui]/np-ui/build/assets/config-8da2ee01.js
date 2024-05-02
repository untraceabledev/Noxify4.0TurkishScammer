import { j as _0x3a5a05, x as _0x25f75f, l as _0x598e43, r as _0x3b1e96, f as _0x15ec13 } from "./vendor-6c45b22f.js";
import { G as _0x308512 } from "./index-eac3b5ce.js";
import { I as _0x546d7a } from "./icon-7f5cdae2.js";
import { g as _0x1b9655, a as _0xe093d6, P as _0x340af3 } from "./actions-6c142f68.js";
import { s as _0x549753 } from "./actions-d7dccfad.js";
import "./commonjsHelpers-c5dac66b.js";
import "./tooltip-cb871d8a.js";
import "./translations-7705db3f.js";
import "./index-d5aaa08b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
import "./store-75fb65a1.js";
const setting_item = "_setting_item_78tar_1";
const info = "_info_78tar_14";
const title = "_title_78tar_19";
const icon_container = "_icon_container_78tar_27";
const icon = "_icon_78tar_27";
const cta_icon = "_cta_icon_78tar_40";
const styles$4 = {
  setting_item: setting_item,
  info: info,
  title: title,
  icon_container: icon_container,
  icon: icon,
  cta_icon: cta_icon
};
const SettingsItem = _0x5d402e => {
  return _0x3a5a05.jsxs("div", {
    className: styles$4.setting_item,
    onClick: () => _0x5d402e.onClick(_0x5d402e.category),
    children: [_0x3a5a05.jsxs("div", {
      className: styles$4.info,
      children: [_0x3a5a05.jsx("div", {
        className: styles$4.icon_container,
        children: _0x3a5a05.jsx(_0x546d7a, {
          icon: _0x5d402e.icon,
          className: styles$4.icon
        })
      }), _0x3a5a05.jsx("h1", {
        className: styles$4.title,
        children: _0x5d402e.category
      })]
    }), _0x3a5a05.jsx("div", {
      className: styles$4.cta_icon,
      children: _0x3a5a05.jsx(_0x546d7a, {
        icon: "chevron-right",
        className: styles$4.icon
      })
    })]
  });
};
const container$2 = "_container_pjk9m_1";
const list = "_list_pjk9m_10";
const styles$3 = {
  container: container$2,
  list: list
};
const handle = "_handle_chbz4_12";
const styles$2 = {
  switch: "_switch_chbz4_1",
  handle: handle
};
const SettingsSwitch = _0x353c0d => {
  return _0x3a5a05.jsx("div", {
    className: styles$2.switch,
    "data-ison": _0x353c0d.value,
    onClick: _0x353c0d.onClick,
    children: _0x3a5a05.jsx(_0x25f75f.div, {
      className: styles$2.handle,
      layout: true,
      transition: {
        type: "spring",
        stiffness: 700,
        damping: 30
      }
    })
  });
};
const container$1 = "_container_m975k_1";
const thumb = "_thumb_m975k_13";
const track = "_track_m975k_23";
const rail = "_rail_m975k_28";
const root = "_root_m975k_33";
const styles$1 = {
  container: container$1,
  thumb: thumb,
  track: track,
  rail: rail,
  root: root
};
const Slider = _0x11076e => {
  return _0x3a5a05.jsx("div", {
    className: styles$1.container,
    children: _0x3a5a05.jsx(_0x598e43, {
      min: _0x11076e.minSteps ?? 0,
      max: _0x11076e.maxSteps ?? 1,
      step: _0x11076e.steps ?? 0.1,
      defaultValue: _0x11076e?.defaultValue ?? undefined,
      value: _0x11076e.value,
      valueLabelDisplay: "auto",
      onChange: (_0x4735eb, _0x307970) => _0x11076e.onChange(Number(_0x307970)),
      classes: {
        root: styles$1.root,
        rail: styles$1.rail,
        track: styles$1.track,
        thumb: styles$1.thumb
      }
    })
  });
};
const container = "_container_1vgaa_1";
const inline = "_inline_1vgaa_6";
const label = "_label_1vgaa_11";
const text_input = "_text_input_1vgaa_19";
const styles = {
  container: container,
  inline: inline,
  label: label,
  text_input: text_input
};
const SettingsInput = ({
  info: _0x429267
}) => {
  const [_0x4d2c58, _0x3ec232] = _0x3b1e96.useState(_0x1b9655(_0x429267.key));
  function _0x2d36c7(_0x274fab, _0x3e28e5) {
    const _0x40c836 = _0xe093d6();
    _0x40c836[_0x274fab] = _0x3e28e5;
    localStorage.setItem("phone-settings", JSON.stringify(_0x40c836));
    _0x3ec232(_0x3e28e5);
  }
  const _0x1962db = typeof _0x429267.label === "function" ? _0x429267.label(_0x4d2c58) : _0x429267.label;
  return _0x3a5a05.jsxs("div", {
    className: _0x15ec13(styles.container, {
      [styles.inline]: _0x429267.type === "switch"
    }),
    children: [_0x3a5a05.jsx("label", {
      className: styles.label,
      children: _0x1962db
    }), _0x429267.type === "text" && _0x3a5a05.jsx("input", {
      className: styles.text_input,
      type: "text",
      placeholder: "Enter your " + (typeof _0x429267.label === "string" ? _0x429267.label.toLocaleLowerCase() : "") + "..",
      value: _0x4d2c58,
      onChange: _0x3ede81 => {
        _0x2d36c7(_0x429267.key, _0x3ede81.target.value);
      }
    }), _0x429267.type === "switch" && _0x3a5a05.jsx(SettingsSwitch, {
      value: _0x4d2c58,
      onClick: () => _0x2d36c7(_0x429267.key, !_0x4d2c58)
    }), _0x429267.type === "slider" && _0x3a5a05.jsx(Slider, {
      minSteps: 0,
      maxSteps: 2,
      steps: 0.1,
      defaultValue: _0x429267?.default ?? 1,
      value: _0x4d2c58 ?? 1,
      label: _0x1962db,
      onChange: _0xc47006 => _0x2d36c7(_0x429267.key, _0xc47006)
    })]
  });
};
const SettingsApp = () => {
  const [_0x378525, _0x45d5f6] = _0x3b1e96.useState(null);
  const _0xab67b = _0x327de8 => {
    _0x45d5f6(_0x327de8);
  };
  _0x3b1e96.useEffect(() => {
    return () => {
      _0x549753({
        ["phone.volume"]: _0x1b9655("phone_volume"),
        ["phone.balance"]: _0x1b9655("phone_balance")
      });
    };
  }, []);
  return _0x3a5a05.jsxs("div", {
    className: _0x15ec13("app", styles$3.container),
    children: [_0x3a5a05.jsx(_0x308512, {
      title: "Settings",
      action: _0x378525 ? {
        color: "#F86969",
        icon: "undo",
        tooltip: "Go Back",
        onClick: () => _0x45d5f6(null)
      } : undefined
    }), !_0x378525 && _0x3a5a05.jsx("div", {
      className: styles$3.list,
      children: Object.keys(_0x340af3).map(_0x5e336b => _0x3a5a05.jsx(SettingsItem, {
        category: _0x5e336b,
        onClick: _0xab67b,
        icon: _0x340af3[_0x5e336b]?.icon
      }, _0x5e336b))
    }), _0x378525 && _0x3a5a05.jsx("div", {
      className: styles$3.list,
      children: _0x340af3[_0x378525].items.map(_0x450844 => _0x3a5a05.jsx(SettingsInput, {
        info: _0x450844
      }, _0x450844.key))
    })]
  });
};
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/settings.svg";
const config = _0x2146e1 => {
  return {
    ..._0x2146e1,
    iconPng: myIcon,
    label: "Settings",
    position: 250,
    name: "settings",
    render: _0x522fc2 => _0x3a5a05.jsx(SettingsApp, {
      ..._0x522fc2
    })
  };
};
export { config as default };