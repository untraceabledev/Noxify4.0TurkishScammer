import { j as _0x472447, f as _0x3d7ed5, l as _0x549497, r as _0x5095d6, R as _0x3531b0, ah as _0x414606 } from "./vendor-6c45b22f.js";
import _0x53a0e6, { appName } from "./store-75fb65a1.js";
import { A as _0x3f7faa } from "./ui-app-6ee97cab.js";
import { b as _0x1fff68, c as _0x25538a, s as _0x55d7ef } from "./actions-d7dccfad.js";
import { u as _0x4d4a89, n as _0xd42226, C as _0x5388d3 } from "./index-d5aaa08b.js";
import { B as _0x1759e3 } from "./index-ae383549.js";
import { a as _0x248c47, r as _0x5ac1bb } from "./translations-7705db3f.js";
import { u as _0x39e274 } from "./useOutsideClick-e98795c9.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
const TABS = [{
  title: "Radio",
  description: "Settings",
  icon: "audio",
  tab_header: "Radio Options",
  options: [{
    label: "Radio Clicks (Outgoing)",
    description: "This is the sound you hear when you press your PTT button",
    type: "switch",
    key: "radio.clicks.outgoing.enabled"
  }, {
    label: "Radio Clicks (Incoming)",
    description: "This is the sound you hear when someone else presses their PTT button",
    type: "switch",
    key: "radio.clicks.incoming.enabled"
  }, {
    label: "Radio Volume",
    description: "This is the volume of the radio itself",
    type: "slider",
    key: "radio.volume",
    swtichOptions: {
      minSteps: 0,
      maxSteps: 1,
      steps: 0.1
    }
  }, {
    label: "Radio Clicks",
    description: "This is the volume of the radio clicks",
    type: "slider",
    key: "radio.clicks.volume",
    swtichOptions: {
      minSteps: 0,
      maxSteps: 1,
      steps: 0.1
    }
  }, {
    label: _0x59a4e8 => "Radio Balance (" + _0x1fff68(_0x59a4e8) + ")",
    type: "slider",
    key: "radio.balance",
    description: "This is the balance of the radio",
    swtichOptions: {
      minSteps: 0,
      maxSteps: 2,
      steps: 0.1,
      defaultValue: 1
    }
  }, {
    label: "Radio Channel Visibility",
    type: "select",
    description: "This is the visibility of the radio channel",
    key: "hud.status.radio.channel",
    selectOptions: {
      options: [{
        value: 0,
        label: "Never"
      }, {
        value: 1,
        label: "Always"
      }, {
        value: 2,
        label: "Relevant"
      }]
    }
  }]
}, {
  title: "Gameplay",
  description: "Settings",
  icon: "audio",
  tab_header: "Gameplay Options",
  options: [{
    label: "Crosshair",
    type: "switch",
    description: "Toggle the crosshair",
    key: "hud.crosshair.enabled"
  }, {
    label: "Persistent Character (Wounds)",
    type: "switch",
    description: "Toggle persistent character wounds",
    key: "wounds.character.enabled"
  }, {
    label: "Golf Ball Camera",
    type: "switch",
    description: "Toggle the golf ball camera",
    key: "hud.golfballcam.enable"
  }, {
    label: "Disable Large Scene Text",
    type: "switch",
    description: "Toggle the large scene text",
    key: "scenes.disableLargeText"
  }, {
    label: "Only Show Scenes While Peeking",
    type: "switch",
    description: "Toggle the large scene text",
    key: "scenes.showOnPeek"
  }, {
    label: "Enable /outfits Preview",
    type: "switch",
    description: "Toggle the /outfits preview",
    key: "hud.outfits.preview.enabled"
  }, {
    label: "Enable /outfits Camera",
    type: "switch",
    description: "Toggle the /outfits camera",
    key: "hud.outfits.camera.enabled"
  }, {
    label: "Disable Interact Prompts",
    type: "switch",
    description: "Toggle the interact prompts",
    key: "interact.disablePrompts",
    tooltip: "Improves performance"
  }, {
    label: "Enable localized weather zones",
    type: "switch",
    description: "Toggle the localized weather zones",
    key: "hud.weather.allowlocal"
  }]
}, {
  title: "Hud",
  description: "Settings",
  icon: "hud",
  tab_header: "Hud Options",
  options: [{
    label: _0x419e8c => "Select Preset (Currently: " + (_0x419e8c ? _0x419e8c : "Nothing") + ")",
    type: "select",
    description: "Save settings for the selected preset, and then use /hud [:number]",
    key: "hud.presetSelected",
    onChange: _0x4615b5 => _0x25538a(_0x4615b5),
    selectOptions: {
      options: _0x5d7e21 => {
        const _0x5805b8 = [];
        for (let _0x332c10 = 0; _0x332c10 < _0x5d7e21["hud.presets"].length; _0x332c10 += 1) {
          _0x5805b8.push({
            value: String(_0x332c10 + 1),
            label: "" + (_0x332c10 + 1)
          });
        }
        _0x5805b8.push({
          value: String(_0x5d7e21["hud.presets"].length + 1),
          label: "" + (_0x5d7e21["hud.presets"].length + 1)
        });
        return _0x5805b8;
      }
    }
  }, {
    label: "Show Oxygen when relevant",
    description: "Toggle the oxygen bar",
    type: "switch",
    key: "hud.status.oxygen.enabled"
  }, {
    label: "Always Use Large Icons",
    description: "Toggle the large icons",
    type: "switch",
    key: "hud.icons.large"
  }, {
    label: "Hide Enhancements",
    description: "Toggle the enhancements",
    type: "switch",
    key: "hud.status.buffs.disabled"
  }, {
    label: "Minimap Enabled",
    description: "Toggle the minimap",
    type: "switch",
    key: "hud.vehicle.minimap.enabled"
  }, {
    label: "Show Harness durability",
    description: "Toggle the harness durability",
    type: "switch",
    key: "hud.vehicle.harness.enabled"
  }, {
    label: "Show Nitrous levels",
    description: "Toggle the nitrous levels",
    type: "switch",
    key: "hud.vehicle.nitrous.enabled"
  }, {
    label: "Show Nitrous trail",
    description: "Toggle the nitrous trail",
    type: "switch",
    key: "hud.vehicle.nitrous.arcadetrail"
  }, {
    label: "Show Black Bars",
    description: "Toggle the black bars",
    type: "switch",
    key: "hud.blackbars.enabled"
  }, {
    label: "Black Bar Size",
    description: "Percentage of screen taken - ex 5%",
    type: "text",
    tooltip: "Percentage of screen taken - ex 5%",
    key: "hud.blackbars.size"
  }, {
    label: "Minimap Style",
    description: "Choose the minimap style",
    type: "select",
    key: "hud.minimap.style",
    selectOptions: {
      options: [{
        value: "atlas",
        label: "Atlas w/ Roads"
      }, {
        value: "default",
        label: "Normal w/ Roads"
      }]
    }
  }, {
    label: "Speedometer FPS",
    type: "select",
    key: "hud.vehicle.speedometer.fps",
    description: "The higher the FPS, the more demanding this is on your machine",
    selectOptions: {
      options: [{
        value: 16,
        label: "60"
      }, {
        value: 24,
        label: "45"
      }, {
        value: 32,
        label: "30"
      }, {
        value: 64,
        label: "15"
      }]
    }
  }, {
    label: "Health Icon",
    description: "Hide when more than...",
    type: "switch",
    key: "hud.status.health.enabled",
    subOption: {
      label: "100 = Never Hide",
      type: "text",
      key: "hud.status.health.hide"
    }
  }, {
    label: "Armor Icon",
    description: "Hide when more than...",
    type: "switch",
    key: "hud.status.armor.enabled",
    subOption: {
      label: "100 = Never Hide",
      type: "text",
      key: "hud.status.armor.hide"
    }
  }, {
    label: "Food Icon",
    description: "Hide when more than...",
    type: "switch",
    key: "hud.status.food.enabled",
    subOption: {
      label: "100 = Never Hide",
      type: "text",
      key: "hud.status.food.hide"
    }
  }, {
    label: "Water Icon",
    description: "Hide when more than...",
    type: "switch",
    key: "hud.status.water.enabled",
    subOption: {
      label: "100 = Never Hide",
      type: "text",
      key: "hud.status.water.hide"
    }
  }, {
    label: "Body Health",
    description: "Hide when more than...",
    type: "switch",
    key: "hud.status.hardcore.enabled",
    tooltip: "This setting is only applied to hardcore character/server",
    subOption: {
      label: "100 = Never Hide",
      type: "text",
      key: "hud.status.hardcore.hide"
    }
  }]
}, {
  title: "Help Guides",
  description: "Settings",
  icon: "help",
  tab_header: "Help Guides",
  options: [{
    label: "Finding your Windows Communication Device",
    type: "content-block",
    description: "https://www.nopixel.net/upload/index.php?threads/proper-mic-settings-for-nopixel-3-0-radio-phone.158075/",
    key: "content-block-comms"
  }, {
    label: "FPS Capping for UI lag:",
    type: "content-block",
    description: "https://www.nopixel.net/upload/index.php?threads/fps-capping-for-improved-ui-performance.158070/",
    key: "content-block-fps-cap"
  }]
}];
const container = "_container_1hwi9_2";
const header = "_header_1hwi9_16";
const row = "_row_1hwi9_27";
const icon = "_icon_1hwi9_34";
const column = "_column_1hwi9_37";
const title = "_title_1hwi9_44";
const description = "_description_1hwi9_53";
const saveButton = "_saveButton_1hwi9_61";
const divider = "_divider_1hwi9_83";
const bottomContainer = "_bottomContainer_1hwi9_89";
const tabs = "_tabs_1hwi9_98";
const tab = "_tab_1hwi9_98";
const bottom = "_bottom_1hwi9_89";
const line = "_line_1hwi9_169";
const active = "_active_1hwi9_175";
const options = "_options_1hwi9_191";
const option = "_option_1hwi9_191";
const texts = "_texts_1hwi9_215";
const styles = {
  container: container,
  header: header,
  row: row,
  icon: icon,
  column: column,
  title: title,
  description: description,
  saveButton: saveButton,
  divider: divider,
  bottomContainer: bottomContainer,
  tabs: tabs,
  tab: tab,
  bottom: bottom,
  line: line,
  active: active,
  options: options,
  option: option,
  texts: texts
};
const index$3 = "";
const Switch = _0x52847d => {
  return _0x472447.jsxs("div", {
    className: "settings-switch-wrapper",
    style: {
      justifyContent: _0x52847d?.spaceBetween ? "space-between" : ""
    },
    children: [_0x472447.jsx("input", {
      className: "np-switch",
      id: "np-switch-" + _0x52847d.id,
      type: "checkbox",
      onChange: () => _0x52847d.onChange(!_0x52847d.checked),
      checked: _0x52847d.checked
    }), _0x472447.jsx("label", {
      className: _0x3d7ed5("np-switch-toggle", {
        enabled: _0x52847d.checked
      }),
      htmlFor: "np-switch-" + _0x52847d.id,
      children: _0x472447.jsx("span", {
        className: "np-switch-button"
      })
    })]
  });
};
const index$2 = "";
const Slider = _0x114a40 => {
  return _0x472447.jsx("div", {
    className: "settings-slider-wrapper",
    children: _0x472447.jsx(_0x549497, {
      min: _0x114a40.minSteps ?? 0,
      max: _0x114a40.maxSteps ?? 1,
      step: _0x114a40.steps ?? 0.1,
      defaultValue: _0x114a40?.defaultValue ?? undefined,
      value: _0x114a40.value,
      valueLabelDisplay: "auto",
      onChange: (_0xcd3d50, _0x5bbf8b) => _0x114a40.onChange(Number(_0x5bbf8b)),
      classes: {
        root: "np-slider-root",
        rail: "np-slider-rail",
        track: "np-slider-track",
        thumb: "np-slider-thumb"
      }
    })
  });
};
const index$1 = "";
const Select = _0x575b40 => {
  const [_0x55add8, _0x206321] = _0x5095d6.useState(false);
  const _0x4384e2 = () => {
    if (!_0x55add8) {
      return;
    }
    _0x206321(false);
  };
  const _0x22f3da = _0x52e2b2 => {
    const _0x3bb199 = _0x575b40?.options?.find(_0xa7ed26 => _0xa7ed26.value === _0x52e2b2);
    if (!_0x3bb199) {
      return _0x575b40.value;
    }
    return _0x3bb199?.label;
  };
  const _0x450432 = _0x4d1e1f => {
    _0x248c47(true, _0x4d1e1f, "ui:input:select:item:" + _0x4d1e1f);
    return _0x5ac1bb(_0x4d1e1f, true);
  };
  const _0xff731a = _0x39e274(_0x4384e2);
  return _0x472447.jsxs("div", {
    className: _0x3d7ed5("settings-dropdown", {
      "np-dropdow-active": _0x55add8 || _0x575b40.value
    }),
    onClick: () => _0x206321(!_0x55add8),
    children: [_0x472447.jsx("input", {
      className: _0x3d7ed5("np-text-box", {
        "input-focused": _0x55add8 || _0x575b40.value
      }),
      type: "text",
      readOnly: true,
      value: _0x22f3da(_0x575b40.value),
      placeholder: "Select item..."
    }), _0x472447.jsxs("div", {
      className: _0x3d7ed5("options", {
        active: _0x55add8
      }),
      ref: _0xff731a,
      children: [_0x472447.jsx("div", {
        onClick: () => _0x575b40.onChange(""),
        children: "Select item..."
      }), _0x575b40.options && _0x575b40.options.map((_0x2a4b55, _0x4f5bb0) => _0x472447.jsx("div", {
        onClick: () => _0x575b40.onChange(_0x2a4b55.value),
        children: _0x450432(_0x2a4b55.label)
      }, _0x4f5bb0))]
    })]
  });
};
const index = "";
const TextInput = _0x55a640 => {
  const [_0x4b4fea, _0x48939] = _0x5095d6.useState(true);
  const _0x5c1113 = _0x55d9db => {
    _0x55d9db.preventDefault();
    _0x55a640.onChange(_0x55d9db.target.value);
  };
  const _0x316d77 = _0x3c1853 => {
    _0x48939(false);
  };
  const _0x544369 = _0x4a277c => {
    _0x48939(true);
  };
  const _0x41571d = _0x4806bb => {
    _0x248c47(true, _0x4806bb, "ui:input");
    return _0x5ac1bb(_0x4806bb, true);
  };
  _0x5095d6.useEffect(() => {
    if (_0x55a640.value.length <= 0) {
      _0x48939(false);
    }
  }, []);
  return _0x472447.jsxs("div", {
    className: _0x3d7ed5("settings-input-container", {
      "input-focused": _0x4b4fea || _0x55a640.value.length > 0
    }),
    onFocus: _0x194bbf => _0x544369(_0x194bbf),
    onBlur: _0x4d704f => _0x316d77(_0x4d704f),
    children: [_0x472447.jsx("label", {
      className: _0x3d7ed5("np-input-label", {
        focused: _0x4b4fea || _0x55a640.value.length > 0
      }),
      children: _0x41571d(_0x55a640.label)
    }), _0x472447.jsx("input", {
      onChange: _0x1a0812 => _0x5c1113(_0x1a0812),
      value: _0x55a640.value
    })]
  });
};
const Preferences = () => {
  const [_0x3b51cb, _0x239128] = _0x4d4a89(appName);
  const [_0x37c859, _0x147040] = _0x3531b0.useState(false);
  const [_0xf77a24, _0x33adb4] = _0x3531b0.useState(TABS[0]);
  const _0x4556ee = (_0x431738, _0x3656d6) => {
    if (_0x3656d6) {
      return;
    }
    if (_0x431738.changeHud) {
      _0x25538a(_0x431738.changeHud, true);
      _0x55d7ef(_0x3b51cb);
      return;
    }
    _0x239128({
      ..._0x431738
    });
  };
  const _0x334ca1 = () => {
    _0x147040(false);
  };
  const _0x2f0eb8 = () => {
    _0x147040(true);
  };
  const _0x215838 = _0x3531b0.useCallback(async () => {
    const _0x54c8f5 = await _0xd42226("np-ui:getKVPValue", {
      key: "np-preferences"
    });
    let _0x1bfeba = _0x54c8f5.data.value;
    if (!_0x1bfeba || !_0x1bfeba["hud.presetSelected"]) {
      _0x1bfeba = {
        ..._0x53a0e6.initialState
      };
    }
    _0x239128(_0x1bfeba);
    _0xd42226("np-ui:hudSetPreferences", _0x1bfeba);
  }, []);
  const _0xac11de = _0x4f9989 => {
    return _0x4f9989.map(_0x4dec5d => {
      const _0x4f5da7 = typeof _0x4dec5d.label === "function" ? _0x4dec5d.label(_0x3b51cb[_0x4dec5d.key]) : _0x4dec5d.label;
      const _0x44a1fd = typeof _0x4dec5d.subOption?.label === "function" ? _0x4dec5d.subOption.label(_0x3b51cb[_0x4dec5d.subOption.key]) : _0x4dec5d.subOption?.label;
      return _0x472447.jsxs("div", {
        className: styles.option,
        children: [_0x472447.jsxs("div", {
          className: styles.texts,
          children: [_0x472447.jsx("div", {
            className: styles.title,
            children: _0x4f5da7
          }), _0x472447.jsx("div", {
            className: styles.description,
            children: _0x4dec5d.description || "Small description about setting thing"
          })]
        }), _0x4dec5d.subOption && _0x472447.jsx(TextInput, {
          label: _0x44a1fd,
          onChange: _0x379d1a => _0x239128({
            [_0x4dec5d.subOption.key]: _0x379d1a
          }),
          value: _0x3b51cb[_0x4dec5d.subOption.key],
          tooltip: _0x4dec5d?.tooltip
        }), _0x4dec5d.type === "button" && _0x472447.jsx(_0x1759e3, {
          onClick: () => _0x55d7ef(_0x3b51cb),
          type: "secondary",
          children: _0x4f5da7
        }), _0x4dec5d.type === "switch" && _0x472447.jsx(Switch, {
          label: _0x4f5da7,
          id: _0x4dec5d.key,
          spaceBetween: true,
          checked: _0x3b51cb[_0x4dec5d.key],
          onChange: _0xfac8c9 => _0x239128({
            [_0x4dec5d.key]: _0xfac8c9
          }),
          tooltip: _0x4dec5d?.tooltip
        }), _0x4dec5d.type === "slider" && _0x472447.jsx(Slider, {
          minSteps: _0x4dec5d?.swtichOptions?.minSteps,
          maxSteps: _0x4dec5d?.swtichOptions?.maxSteps,
          steps: _0x4dec5d?.swtichOptions?.steps,
          defaultValue: _0x4dec5d?.swtichOptions?.defaultValue,
          value: _0x3b51cb[_0x4dec5d.key],
          label: _0x4f5da7,
          onChange: _0x1723cd => _0x239128({
            [_0x4dec5d.key]: _0x1723cd
          })
        }), _0x4dec5d.type === "text" && _0x472447.jsx(TextInput, {
          label: _0x4f5da7,
          onChange: _0x4f440e => _0x239128({
            [_0x4dec5d.key]: _0x4f440e
          }),
          value: _0x3b51cb[_0x4dec5d.key],
          tooltip: _0x4dec5d?.tooltip
        }), _0x4dec5d.type === "select" && _0x472447.jsx(Select, {
          label: _0x4f5da7,
          value: _0x3b51cb[_0x4dec5d.key],
          options: typeof _0x4dec5d.selectOptions?.options === "function" ? _0x4dec5d.selectOptions.options(_0x3b51cb) : _0x4dec5d.selectOptions?.options,
          tooltip: _0x4dec5d?.tooltip,
          onChange: _0x11f394 => _0x4dec5d.onChange ? _0x4dec5d.onChange(_0x11f394) : _0x239128({
            [_0x4dec5d.key]: _0x11f394
          })
        })]
      }, _0x4dec5d.key);
    });
  };
  _0x3531b0.useEffect(() => {
    _0x215838();
  }, []);
  const _0x405a93 = 350;
  const _0x2324de = {
    transition: _0x405a93 + "ms ease-in-out",
    height: 0
  };
  const _0x4f594d = {
    entering: {
      height: "max(500px, 76.57vh)"
    },
    entered: {
      height: "max(500px, 76.57vh)"
    },
    exiting: {
      height: 0
    },
    exited: {
      height: 0
    }
  };
  const _0x37d25d = _0x42cd0f => {
    _0x248c47(true, _0x42cd0f, "ui:Preferencess:tab:" + _0x42cd0f);
    return _0x5ac1bb(_0x42cd0f, true);
  };
  const _0x1ff75e = (_0x36a689, _0x168949) => {
    if (_0x36a689 === "audio") {
      return _0x472447.jsxs("svg", {
        width: "4.629vh",
        height: "4.35vh",
        viewBox: "0 0 50 47",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [_0x472447.jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M27.5687 0.187784C27.3961 0.293522 23.6213 3.30318 19.1802 6.87596L11.1056 13.3718H7.2095C3.17467 13.3718 2.474 13.4247 1.7788 13.7812C1.18534 14.0856 0.56743 14.7183 0.270997 15.3251L0 15.8801V23.5031V31.1261L0.270997 31.681C0.56743 32.2878 1.18534 32.9205 1.7788 33.2249C2.474 33.5815 3.17467 33.6343 7.2095 33.6343H11.1056L19.2005 40.1481C23.6526 43.7306 27.4478 46.7404 27.634 46.8366C28.3194 47.1904 29.2473 46.9506 29.7085 46.3006L29.9368 45.9786V23.5031V1.02749L29.7085 0.705558C29.2388 0.0434878 28.2101 -0.205465 27.5687 0.187784ZM41.2674 6.5793C40.4484 6.95327 40.0779 8.03289 40.494 8.83364C40.5885 9.01551 40.9859 9.5084 41.3771 9.9289C46.0396 14.9415 47.769 22.0558 45.968 28.8146C45.1719 31.8025 43.5228 34.7704 41.3771 37.0772C40.512 38.0072 40.3204 38.3549 40.328 38.9809C40.3399 39.9648 41.258 40.7255 42.2524 40.5756C42.802 40.4927 43.4793 39.9017 44.6783 38.4587C47.3736 35.2147 49.1536 31.2257 49.8157 26.9457C50.0614 25.3571 50.0614 21.649 49.8157 20.0604C49.0796 15.3019 47.0022 10.979 43.8176 7.57846C42.6726 6.35602 42.1797 6.16294 41.2674 6.5793ZM36.5715 11.3006C36.1269 11.5037 35.72 12.0355 35.6141 12.5521C35.4965 13.1258 35.7139 13.5954 36.501 14.4682C38.1728 16.322 39.3061 18.5772 39.7806 20.9948C39.9622 21.9197 39.9622 25.0864 39.7806 26.0113C39.3061 28.4289 38.1728 30.6841 36.501 32.5379C35.4768 33.6735 35.3478 34.2519 35.9201 35.1421C36.1801 35.5465 36.7899 35.8908 37.253 35.8944C37.924 35.8997 38.4535 35.5093 39.5175 34.2244C41.6385 31.663 42.9166 28.619 43.2845 25.2528C43.7706 20.804 42.3919 16.237 39.5198 12.7817C38.699 11.7943 38.3234 11.4443 37.8889 11.2621C37.4126 11.0623 37.0717 11.0723 36.5715 11.3006Z",
          fill: "url(#paint0_radial_291_777_" + _0x168949 + ")"
        }), _0x472447.jsx("defs", {
          children: _0x472447.jsxs("radialGradient", {
            id: "paint0_radial_291_777_" + _0x168949,
            cx: "0",
            cy: "0",
            r: "1",
            gradientUnits: "userSpaceOnUse",
            gradientTransform: "translate(25 23.5) rotate(90) scale(41.8594 44.5312)",
            children: [_0x472447.jsx("stop", {
              stopColor: "white"
            }), _0x472447.jsx("stop", {
              offset: "1",
              stopColor: "white",
              stopOpacity: "0"
            })]
          })
        })]
      });
    } else if (_0x36a689 === "phone") {
      return _0x472447.jsxs("svg", {
        width: "3.33vh",
        height: "5.9259vh",
        viewBox: "0 0 36 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [_0x472447.jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M5.28086 0.209482C2.78585 0.84627 0.834504 2.75826 0.19552 5.19197C0.023828 5.846 0 9.10564 0 31.9953C0 54.8849 0.023828 58.1445 0.19552 58.7986C0.837467 61.2435 2.81946 63.166 5.34011 63.7887C6.4876 64.0721 29.4018 64.0696 30.6428 63.7859C32.9785 63.252 34.9449 61.4137 35.7156 59.0434L36 58.1689V31.9953V5.82163L35.7143 4.9471C34.9306 2.54762 33.0018 0.743949 30.6428 0.20461C29.4365 -0.0712442 6.36318 -0.0667466 5.28086 0.209482ZM23.1114 6.00591C23.2931 6.07288 23.5607 6.31187 23.7062 6.53688C24.2871 7.43565 23.6847 8.52757 22.5162 8.69411C22.2106 8.73771 19.9583 8.7557 17.5111 8.73422C13.4587 8.69861 13.0294 8.67475 12.7024 8.46673C11.8408 7.91877 11.8184 6.62721 12.6617 6.12847C13.0504 5.89859 13.3433 5.88497 17.9272 5.8846C20.77 5.88435 22.9179 5.93457 23.1114 6.00591ZM18.9706 52.5571C20.3408 53.0099 21.1853 54.4592 20.8715 55.8194C20.5637 57.1538 19.5311 57.9966 18.0992 58.0821C15.3345 58.247 13.9702 54.844 16.0941 53.0807C16.9339 52.3835 17.9084 52.2061 18.9706 52.5571Z",
          fill: "url(#paint0_radial_291_768)"
        }), _0x472447.jsx("defs", {
          children: _0x472447.jsxs("radialGradient", {
            id: "paint0_radial_291_768",
            cx: "0",
            cy: "0",
            r: "1",
            gradientUnits: "userSpaceOnUse",
            gradientTransform: "translate(18 32) rotate(90) scale(57 32.0625)",
            children: [_0x472447.jsx("stop", {
              stopColor: "white"
            }), _0x472447.jsx("stop", {
              offset: "1",
              stopColor: "white",
              stopOpacity: "0"
            })]
          })
        })]
      });
    } else if (_0x36a689 === "help") {
      return _0x472447.jsxs("svg", {
        width: "4.44vh",
        height: "4.35vh",
        viewBox: "0 0 48 47",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [_0x472447.jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M21.8054 0.0535655C13.4051 0.3821 6.34795 3.06933 3.64381 6.96953C1.86689 9.53223 0.654637 13.7648 0.135436 19.2194C-0.0433695 21.0984 -0.0456201 26.0057 0.13161 27.8157C0.774929 34.3879 2.30181 38.9141 4.67073 41.2715C7.62615 44.2127 12.7781 46.1509 19.4423 46.8287C21.6878 47.0571 26.3115 47.0571 28.557 46.8287C35.1639 46.1568 40.3036 44.2433 43.2558 41.3567C45.66 39.006 47.2422 34.3566 47.8635 27.8157C48.0455 25.9012 48.0455 21.134 47.8635 19.2194C47.3447 13.7575 46.1331 9.53322 44.3464 6.95631C43.4019 5.59412 41.7812 4.27062 39.7535 3.20566C36.4463 1.46887 31.3864 0.257232 26.7566 0.0935714C25.8901 0.0629332 24.8774 0.0235886 24.506 0.00606526C24.1347 -0.0113478 22.9194 0.0100328 21.8054 0.0535655ZM26.1939 11.2884C28.1114 11.8625 29.856 13.3049 30.7211 15.0315C32.518 18.6175 30.726 23.1195 26.841 24.7795L26.3627 24.9838L26.3603 26.262C26.3583 27.2703 26.3138 27.6333 26.1494 27.9811C25.4181 29.5283 23.374 29.8257 22.2315 28.5513C21.6855 27.9423 21.6077 27.5303 21.6528 25.4904C21.6924 23.6996 21.6973 23.669 22.0625 22.9426C22.6164 21.8411 23.2338 21.2854 24.5965 20.6622C26.2054 19.9264 26.7174 19.2756 26.7137 17.9711C26.7071 15.5514 23.7241 14.3981 22.008 16.1514C21.5555 16.6138 21.3435 17.1099 21.2387 17.952C21.1302 18.8233 21.049 19.0138 20.5587 19.5452C19.5185 20.6727 17.6276 20.4642 16.8291 19.1338C16.567 18.6972 16.5191 18.4977 16.5318 17.8969C16.5987 14.7347 19.1945 11.7958 22.5249 11.112C23.5273 10.9061 25.1827 10.9857 26.1939 11.2884ZM24.8753 31.9544C25.7573 32.3153 26.3578 33.1834 26.3578 34.0977C26.3578 35.3442 25.2696 36.4121 23.9997 36.4121C22.3606 36.4121 21.1851 34.7082 21.8113 33.24C22.3133 32.0631 23.7093 31.4773 24.8753 31.9544Z",
          fill: "url(#paint0_radial_291_787)"
        }), _0x472447.jsx("defs", {
          children: _0x472447.jsxs("radialGradient", {
            id: "paint0_radial_291_787",
            cx: "0",
            cy: "0",
            r: "1",
            gradientUnits: "userSpaceOnUse",
            gradientTransform: "translate(24 23.5) rotate(90) scale(41.8594 42.75)",
            children: [_0x472447.jsx("stop", {
              stopColor: "white"
            }), _0x472447.jsx("stop", {
              offset: "1",
              stopColor: "white",
              stopOpacity: "0"
            })]
          })
        })]
      });
    } else if (_0x36a689 === "hud") {
      return _0x472447.jsxs("svg", {
        width: "3.98vh",
        height: "3.98vh",
        viewBox: "0 0 43 43",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [_0x472447.jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M2.17442 0.106347C1.61467 0.279446 0.921903 0.800595 0.557145 1.32292C0.00168361 2.11819 -0.0205988 2.28969 0.00773767 5.5435L0.0328789 8.43059L0.280087 8.93416C0.594899 9.57559 1.15852 10.1394 1.79974 10.4543L2.30316 10.7016H21.5164H40.7297L41.2331 10.4543C41.8744 10.1394 42.438 9.57559 42.7528 8.93416L43 8.43059V5.36056V2.29053L42.7528 1.78696C42.438 1.14553 41.8744 0.581739 41.2331 0.26683L40.7297 0.0195447L21.6426 0.00398427C5.47953 -0.00913697 2.49706 0.00650757 2.17442 0.106347ZM2.60754 14.3693C1.62746 14.536 0.694959 15.2606 0.256543 16.1961L0.0328789 16.6734V28.7012V40.729L0.280087 41.2326C0.594899 41.874 1.15852 42.4378 1.79974 42.7527L2.30316 43H9.87075H17.4383L17.9008 42.7633C18.5428 42.4348 19.1847 41.7788 19.4714 41.1584L19.7086 40.6449V28.7433C19.7086 17.2439 19.7032 16.8274 19.5485 16.4211C19.2034 15.515 18.5773 14.8809 17.6614 14.5105L17.1861 14.3183L10.123 14.3054C6.17003 14.2981 2.86072 14.3262 2.60754 14.3693ZM26.0029 14.3606C24.6986 14.5517 23.6433 15.555 23.3608 16.8727C23.3061 17.128 23.2831 18.6181 23.299 20.8872L23.3243 24.4957L23.587 25.0424C23.9074 25.7088 24.4192 26.2346 25.09 26.5863L25.5945 26.8508H33.1621H40.7297L41.2331 26.6035C41.8744 26.2886 42.438 25.7248 42.7528 25.0834L43 24.5798V20.6248V16.6699L42.7241 16.1094C42.2534 15.1529 41.4136 14.5387 40.3376 14.364C39.7193 14.2637 26.6862 14.2605 26.0029 14.3606ZM26.0029 30.5098C24.6986 30.7009 23.6433 31.7042 23.3608 33.0219C23.3061 33.2772 23.2831 34.7674 23.299 37.0364L23.3243 40.6449L23.587 41.1916C23.9074 41.858 24.4192 42.3838 25.09 42.7355L25.5945 43H33.1621H40.7297L41.2331 42.7527C41.8744 42.4378 42.438 41.874 42.7528 41.2326L43 40.729V36.7741V32.8191L42.7241 32.2586C42.2534 31.3021 41.4136 30.6879 40.3376 30.5132C39.7193 30.4129 26.6862 30.4098 26.0029 30.5098Z",
          fill: "url(#paint0_radial_291_760)"
        }), _0x472447.jsx("defs", {
          children: _0x472447.jsxs("radialGradient", {
            id: "paint0_radial_291_760",
            cx: "0",
            cy: "0",
            r: "1",
            gradientUnits: "userSpaceOnUse",
            gradientTransform: "translate(21.5 21.5) rotate(90) scale(38.2969)",
            children: [_0x472447.jsx("stop", {
              stopColor: "white"
            }), _0x472447.jsx("stop", {
              offset: "1",
              stopColor: "white",
              stopOpacity: "0"
            })]
          })
        })]
      });
    }
  };
  return _0x472447.jsx(_0x3f7faa, {
    center: true,
    name: appName,
    onEscape: _0x334ca1,
    onEvent: _0x4556ee,
    onHide: _0x334ca1,
    onShow: _0x2f0eb8,
    children: _0x472447.jsx(_0x414606, {
      in: _0x37c859,
      timeout: _0x405a93,
      children: _0x5c7dbf => _0x472447.jsxs("div", {
        className: styles.container,
        style: {
          pointerEvents: "all",
          ..._0x2324de,
          ..._0x4f594d[_0x5c7dbf]
        },
        children: [_0x472447.jsxs("div", {
          className: styles.header,
          children: [_0x472447.jsxs("div", {
            className: styles.row,
            children: [_0x472447.jsx("svg", {
              className: styles.icon,
              width: "2.5vh",
              height: "2.68vh",
              viewBox: "0 0 27 29",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: _0x472447.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.6005 0.125616C10.6701 0.393673 9.86309 1.15662 9.52028 2.09223C9.45893 2.25953 9.40083 2.73338 9.37145 3.30574C9.31626 4.38023 9.22632 4.66402 8.79142 5.13593C8.41173 5.54792 7.87331 5.77572 7.2795 5.77572C6.83936 5.77572 6.77835 5.75585 5.97385 5.35014C5.0602 4.88936 4.75653 4.79675 4.15929 4.79675C3.65536 4.79675 3.28776 4.88457 2.78273 5.12564C2.11321 5.44521 1.72491 5.89014 0.96416 7.20939C0.0323889 8.82524 -0.119477 9.3468 0.0731541 10.2697C0.278079 11.2515 0.80537 11.9473 1.78515 12.5287C2.77218 13.1144 3.1194 13.6277 3.1194 14.5011C3.1194 15.3745 2.77218 15.8879 1.78515 16.4735C0.808347 17.0532 0.27782 17.7512 0.0751599 18.7236C-0.0321879 19.2384 0.00508303 19.7808 0.183737 20.3028C0.295032 20.628 1.2853 22.3902 1.67554 22.9575C2.18517 23.6983 3.22681 24.2117 4.21099 24.2071C4.75634 24.2045 5.08149 24.1021 5.97385 23.6521C6.77835 23.2464 6.83936 23.2265 7.2795 23.2265C7.87331 23.2265 8.41173 23.4543 8.79142 23.8663C9.22632 24.3382 9.31626 24.622 9.37145 25.6965C9.40083 26.2688 9.45893 26.7427 9.52028 26.91C9.87189 27.8696 10.7173 28.6488 11.6745 28.8953C12.1436 29.0161 14.7693 29.0397 15.2564 28.9275C15.966 28.764 16.7808 28.183 17.1739 27.5603C17.5131 27.0229 17.5991 26.6852 17.6485 25.6965C17.7023 24.6218 17.7917 24.3389 18.2273 23.8663C18.607 23.4543 19.1454 23.2265 19.7392 23.2265C20.1793 23.2265 20.2404 23.2464 21.0449 23.6521C21.5091 23.8862 22.0199 24.1065 22.18 24.1416C23.1735 24.3596 24.2877 24.0345 25.0174 23.3139C25.2908 23.0439 25.5649 22.642 26.0531 21.7953C26.782 20.5312 26.8849 20.2959 26.9738 19.6897C27.1021 18.8146 26.7496 17.7676 26.1132 17.1334C25.9251 16.946 25.5202 16.6414 25.2134 16.4566C24.9066 16.2717 24.5607 16.0255 24.4449 15.9094C23.7126 15.1761 23.7126 13.8261 24.4449 13.0928C24.5607 12.9767 24.9066 12.7305 25.2134 12.5456C25.5202 12.3608 25.9251 12.0562 26.1132 11.8688C26.7496 11.2346 27.1021 10.1877 26.9738 9.31256C26.8849 8.7063 26.782 8.47099 26.0531 7.20687C25.2939 5.89027 24.9052 5.44508 24.236 5.12564C23.7309 4.88457 23.3633 4.79675 22.8594 4.79675C22.2622 4.79675 21.9585 4.88936 21.0449 5.35014C20.2404 5.75585 20.1793 5.77572 19.7392 5.77572C19.1454 5.77572 18.607 5.54792 18.2273 5.13593C17.7924 4.66402 17.7025 4.38023 17.6473 3.30574C17.6179 2.73338 17.5598 2.25953 17.4984 2.09223C17.1495 1.13992 16.2971 0.350119 15.3525 0.104065C14.7791 -0.0453013 12.1412 -0.0301576 11.6005 0.125616ZM14.8301 9.51642C15.1018 9.58599 15.5928 9.78073 15.9212 9.94925C16.4104 10.2003 16.6297 10.3673 17.1361 10.8737C17.6425 11.3802 17.8094 11.5996 18.0605 12.0889C18.4954 12.9364 18.6357 13.5131 18.6399 14.4688C18.6441 15.4473 18.5301 15.9367 18.09 16.8309C17.7951 17.4302 17.6826 17.5831 17.1369 18.1254C16.0783 19.1776 15.0081 19.6262 13.5417 19.6324C12.6451 19.6363 12.1238 19.5308 11.4102 19.201C10.3328 18.7031 9.49045 17.9154 8.96277 16.9123C8.5194 16.0695 8.38112 15.4964 8.38112 14.5011C8.38112 13.5117 8.5148 12.9531 8.95824 12.0889C9.2093 11.5996 9.37617 11.3802 9.88257 10.8737C10.3852 10.371 10.6092 10.2001 11.0829 9.95747C12.0251 9.47494 12.7551 9.31127 13.7448 9.36058C14.07 9.37683 14.5584 9.44692 14.8301 9.51642Z",
                fill: "#00F8B9"
              })
            }), _0x472447.jsxs("div", {
              className: styles.column,
              children: [_0x472447.jsx("div", {
                className: styles.title,
                children: "Settings menu"
              }), _0x472447.jsx("div", {
                className: styles.description,
                children: "Change your settings"
              })]
            })]
          }), _0x472447.jsx("div", {
            className: styles.saveButton,
            onClick: () => {
              _0x55d7ef(_0x3b51cb);
            },
            children: "Save"
          })]
        }), _0x472447.jsx("div", {
          className: styles.divider
        }), _0x472447.jsxs("div", {
          className: styles.bottomContainer,
          children: [_0x472447.jsx("div", {
            className: styles.tabs,
            children: TABS.map((_0x267627, _0x45d087) => {
              return _0x472447.jsxs("div", {
                className: styles.tab + " " + (_0x267627.title === _0xf77a24.title && styles.active),
                onClick: () => {
                  _0x33adb4(_0x267627);
                },
                children: [_0x472447.jsx("div", {
                  className: styles.icon,
                  children: _0x1ff75e(_0x267627.icon, _0x45d087)
                }), _0x472447.jsxs("div", {
                  className: styles.bottom,
                  children: [_0x472447.jsx("div", {
                    className: styles.title,
                    children: _0x37d25d(_0x267627.title)
                  }), _0x472447.jsx("div", {
                    className: styles.description,
                    children: _0x267627.description || ""
                  }), _0x472447.jsx("div", {
                    className: styles.line
                  })]
                })]
              }, _0x267627.tab_header);
            })
          }), _0x472447.jsx("div", {
            className: styles.options,
            children: _0xac11de(_0xf77a24.options)
          })]
        })]
      })
    })
  });
};
const config = () => {
  return {
    name: appName,
    render: Preferences,
    type: _0x5388d3.Application
  };
};
export { config as default };