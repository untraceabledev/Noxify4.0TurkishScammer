import { j as _0x4cf7f7, f as _0x39c0f0, r as _0x1eb3ad, R as _0x4f70e3, k as _0x5c7879 } from "./vendor-6c45b22f.js";
import { d as _0x4dc180, n as _0x43f993, C as _0x338ede } from "./index-d5aaa08b.js";
import { A as _0x4d6eef } from "./ui-app-6ee97cab.js";
import { F as _0x526fff } from "./input-c6588ceb.js";
import { a as _0x8762e3, r as _0x4468ed } from "./translations-7705db3f.js";
import { u as _0x5a0c80 } from "./useOutsideClick-e98795c9.js";
import _0x4f84af, { appName } from "./store-1dfb7a2a.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
import "./text-f7ee3e03.js";
import "./icon-7f5cdae2.js";
import "./format-10690d6f.js";
import "./styles-61014012.js";
import "./index-ae383549.js";
const index$1 = "";
const Switch = _0x27972b => {
  return _0x4cf7f7.jsxs("div", {
    className: "settings-switch-wrapper",
    style: {
      justifyContent: _0x27972b?.spaceBetween ? "space-between" : ""
    },
    children: [_0x4cf7f7.jsx("input", {
      className: "np-switch",
      id: "np-switch-" + _0x27972b.id,
      type: "checkbox",
      onChange: () => _0x27972b.onChange(!_0x27972b.checked),
      checked: _0x27972b.checked
    }), _0x4cf7f7.jsx("label", {
      className: _0x39c0f0("np-switch-toggle", {
        enabled: _0x27972b.checked
      }),
      htmlFor: "np-switch-" + _0x27972b.id,
      children: _0x4cf7f7.jsx("span", {
        className: "np-switch-button"
      })
    })]
  });
};
const index = "";
const Select = _0x3637dd => {
  const [_0x43bb0f, _0x15e612] = _0x1eb3ad.useState(false);
  const _0x51e335 = () => {
    if (!_0x43bb0f) {
      return;
    }
    _0x15e612(false);
  };
  const _0x5708da = _0x5d6ca3 => {
    const _0x293ece = _0x3637dd?.options?.find(_0x40f202 => _0x40f202.value === _0x5d6ca3 || _0x40f202.id === _0x5d6ca3);
    if (!_0x293ece) {
      return _0x3637dd.value;
    }
    return _0x293ece?.label;
  };
  const _0x343b95 = _0x3d9216 => {
    _0x8762e3(true, _0x3d9216, "ui:input:select:item:" + _0x3d9216);
    return _0x4468ed(_0x3d9216, true);
  };
  const _0x4a261c = _0x5a0c80(_0x51e335);
  return _0x4cf7f7.jsxs("div", {
    className: _0x39c0f0("settings-dropdown", {
      "np-dropdow-active": _0x43bb0f || _0x3637dd.value
    }),
    onClick: () => _0x15e612(!_0x43bb0f),
    children: [_0x4cf7f7.jsx("input", {
      className: _0x39c0f0("np-text-box", {
        "input-focused": _0x43bb0f || _0x3637dd.value
      }),
      type: "text",
      readOnly: true,
      value: _0x5708da(_0x3637dd.value),
      placeholder: "Select item..."
    }), _0x4cf7f7.jsxs("div", {
      className: _0x39c0f0("optionsSelect", {
        active: _0x43bb0f
      }),
      ref: _0x4a261c,
      children: [_0x4cf7f7.jsx("div", {
        onClick: () => _0x3637dd.onChange(""),
        children: "Select item..."
      }), _0x3637dd.options && _0x3637dd.options.map((_0x52db07, _0x46f1fd) => _0x4cf7f7.jsx("div", {
        onClick: () => _0x3637dd.onChange(_0x52db07.value ?? _0x52db07.id),
        children: _0x343b95(_0x52db07.label)
      }, _0x46f1fd))]
    })]
  });
};
const TextBox = _0x8829f7 => {
  const [_0x1a3cd2, _0x33186f] = _0x4f70e3.useState({});
  const _0x44e10c = (_0x5cf1d6, _0x44fae3, _0x137043 = 0) => {
    if (_0x137043 > 0 && typeof _0x44fae3 === "string" && _0x44fae3.length > _0x137043) {
      _0x44fae3 = _0x44fae3.substring(0, _0x137043);
    }
    _0x33186f({
      ..._0x1a3cd2,
      [_0x5cf1d6]: _0x44fae3
    });
  };
  const _0x310e0f = _0x35977c => {
    if (_0x35977c.key === "Enter" && !_0x35977c.shiftKey) {
      _0x8829f7.submitValues(_0x1a3cd2);
    }
  };
  _0x1eb3ad.useEffect(() => {
    let _0x56ee72 = {};
    for (let _0x2271bf = 0; _0x2271bf < _0x8829f7.items.length; _0x2271bf++) {
      _0x56ee72[_0x8829f7.items[_0x2271bf].name] = _0x8829f7.items[_0x2271bf]._defaultValue ?? null;
    }
    _0x33186f(_0x56ee72);
  }, [_0x8829f7.items]);
  return _0x4cf7f7.jsxs("div", {
    className: "wrapperTextbox",
    onKeyDown: _0x310e0f,
    children: [_0x4cf7f7.jsx("div", {
      className: "inputsTextbox",
      children: _0x8829f7.items.map(_0x2e4e03 => {
        if (_0x2e4e03._type === "select") {
          return _0x4cf7f7.jsxs("div", {
            className: "rowTextBox",
            children: [_0x2e4e03.icon && _0x4cf7f7.jsx("div", {
              className: "iconBox",
              children: _0x4cf7f7.jsx("i", {
                className: "iconTextBox fa fa-" + _0x2e4e03.icon
              })
            }), _0x4cf7f7.jsxs("div", {
              className: "inputTextbox",
              children: [_0x4cf7f7.jsx("div", {
                className: "label",
                children: _0x2e4e03.label
              }), _0x4cf7f7.jsx(Select, {
                label: "",
                options: _0x2e4e03.options.map(_0x2c330d => ({
                  ..._0x2c330d,
                  value: _0x2c330d.name
                })),
                onChange: _0x3bfb8c => _0x44e10c(_0x2e4e03.name, _0x3bfb8c),
                value: _0x1a3cd2[_0x2e4e03.name]
              })]
            }, _0x2e4e03.name)]
          });
        }
        if (_0x2e4e03._type === "checkbox") {
          return _0x4cf7f7.jsxs("div", {
            className: "rowTextBox",
            children: [_0x2e4e03.icon && _0x4cf7f7.jsx("div", {
              className: "iconBox",
              children: _0x4cf7f7.jsx("i", {
                className: "iconTextBox fa fa-" + _0x2e4e03.icon
              })
            }), _0x4cf7f7.jsxs("div", {
              className: "inputTextbox",
              children: [_0x4cf7f7.jsx("div", {
                className: "label",
                children: _0x2e4e03.label
              }), _0x4cf7f7.jsx(Switch, {
                id: _0x2e4e03.name,
                label: _0x2e4e03.label,
                onChange: _0x4ebfbf => _0x44e10c(_0x2e4e03.name, _0x4ebfbf),
                checked: _0x1a3cd2[_0x2e4e03.name]
              })]
            }, _0x2e4e03.name)]
          });
        }
        if (_0x2e4e03.type === "password" || _0x2e4e03._type === "password") {
          return _0x4cf7f7.jsxs("div", {
            className: "rowTextBox",
            children: [_0x2e4e03.icon && _0x4cf7f7.jsx("div", {
              className: "iconBox",
              children: _0x4cf7f7.jsx("i", {
                className: "iconTextBox fa fa-" + _0x2e4e03.icon
              })
            }), _0x4cf7f7.jsxs("div", {
              className: "inputTextbox",
              children: [_0x4cf7f7.jsx("div", {
                className: "label",
                children: _0x2e4e03.label
              }), _0x4cf7f7.jsx("input", {
                className: "inputText",
                type: "password",
                placeholder: "Password",
                onChange: _0x3196ef => _0x44e10c(_0x2e4e03.name, _0x3196ef.currentTarget.value),
                value: _0x1a3cd2[_0x2e4e03.name]
              })]
            }, _0x2e4e03.name)]
          });
        }
        const _0x251584 = _0x2e4e03.maxLength ? _0x2e4e03.label + " (" + (_0x2e4e03.maxLength - (_0x1a3cd2[_0x2e4e03.name]?.length ?? 0)) + " remaining)" : _0x2e4e03.label;
        if (_0x2e4e03._type === "textarea") {
          return _0x4cf7f7.jsxs("div", {
            className: "rowTextBox",
            children: [_0x2e4e03.icon && _0x4cf7f7.jsx("div", {
              className: "iconBox",
              children: _0x4cf7f7.jsx("i", {
                className: "iconTextBox fa fa-" + _0x2e4e03.icon
              })
            }), _0x4cf7f7.jsxs("div", {
              className: "inputTextbox",
              children: [_0x4cf7f7.jsx("div", {
                className: "label",
                children: _0x251584
              }), _0x4cf7f7.jsx("textarea", {
                className: "inputText",
                placeholder: "Text",
                onChange: _0x4ab2f5 => _0x44e10c(_0x2e4e03.name, _0x4ab2f5.currentTarget.value, _0x2e4e03.maxLength),
                value: _0x1a3cd2[_0x2e4e03.name]
              })]
            }, _0x2e4e03.name)]
          });
        }
        if (_0x2e4e03._type === "color") {
          return _0x4cf7f7.jsxs("div", {
            className: "rowTextBox",
            children: [_0x2e4e03.icon && _0x4cf7f7.jsx("div", {
              className: "iconBox",
              children: _0x4cf7f7.jsx("i", {
                className: "iconTextBox fa fa-" + _0x2e4e03.icon
              })
            }), _0x4cf7f7.jsxs("div", {
              className: "inputTextbox",
              children: [_0x4cf7f7.jsx("div", {
                className: "label",
                children: _0x251584
              }), _0x4cf7f7.jsx("input", {
                className: "inputText",
                type: "color",
                name: "inputcolor",
                onChange: _0x4f93d1 => _0x44e10c(_0x2e4e03.name, _0x4f93d1.currentTarget.value),
                value: _0x1a3cd2[_0x2e4e03.name]
              })]
            }, _0x2e4e03.name)]
          });
        }
        if (_0x2e4e03._type === "imagelist") {
          return _0x4cf7f7.jsx("div", {
            className: "inputTextbox",
            children: _0x4cf7f7.jsx(_0x526fff.ImageList, {
              i18n: _0x2e4e03.i18n || _0x2e4e03.label,
              label: _0x251584,
              icon: _0x2e4e03.icon,
              minWidth: _0x2e4e03.minWidth,
              minHeight: _0x2e4e03.minHeight,
              onChange: _0x3b9725 => _0x44e10c(_0x2e4e03.name, _0x3b9725),
              value: _0x1a3cd2[_0x2e4e03.name]
            })
          }, _0x2e4e03.name);
        }
        return _0x4cf7f7.jsxs("div", {
          className: "rowTextBox",
          children: [_0x2e4e03.icon && _0x4cf7f7.jsx("div", {
            className: "iconBox",
            children: _0x4cf7f7.jsx("i", {
              className: "iconTextBox fa fa-" + _0x2e4e03.icon
            })
          }), _0x4cf7f7.jsxs("div", {
            className: "inputTextbox",
            children: [_0x4cf7f7.jsx("div", {
              className: "label",
              children: _0x251584
            }), _0x4cf7f7.jsx("input", {
              className: "inputText",
              type: "text",
              placeholder: "Text",
              onChange: _0x6c730b => _0x44e10c(_0x2e4e03.name, _0x6c730b.currentTarget.value),
              value: _0x1a3cd2[_0x2e4e03.name]
            })]
          }, _0x2e4e03.name)]
        });
      })
    }), _0x4cf7f7.jsx("div", {
      className: "buttonTextbox",
      onClick: () => _0x8829f7.submitValues(_0x1a3cd2),
      children: "Submit"
    })]
  });
};
const styles = "";
const {
  mapStateToProps,
  mapDispatchToProps
} = _0x4dc180(_0x4f84af);
const defaultState = {
  callbackUrl: "",
  key: null,
  title: "",
  items: [],
  hiddenItems: [],
  show: false
};
let lastState = defaultState;
class Container extends _0x4f70e3.Component {
  state = defaultState;
  onEvent = _0x3e4e84 => {
    if (!_0x3e4e84.show) {
      this.setState({
        ...defaultState
      });
      return;
    }
    this.setState({
      ...defaultState,
      ..._0x3e4e84
    });
  };
  onHide = () => {
    lastState = this.state;
    this.setState({
      ...defaultState
    });
  };
  submitValues = _0x5d1e0c => {
    _0x43f993(this.state.callbackUrl, {
      values: _0x5d1e0c,
      key: this.state.key,
      hiddenItems: this.state.hiddenItems
    });
  };
  onShow = _0x4accc3 => {
    this.setState({
      ...defaultState,
      ..._0x4accc3,
      show: true
    });
  };
  onEscapeData = () => {
    return {
      callbackUrl: lastState.callbackUrl,
      key: lastState.key
    };
  };
  render() {
    return _0x4cf7f7.jsx(_0x4d6eef, {
      center: true,
      store: true,
      name: appName,
      onEscape: this.onHide,
      onEscapeData: this.onEscapeData,
      onEvent: this.onEvent,
      onHide: this.onHide,
      onShow: this.onShow,
      children: this.state.show && _0x4cf7f7.jsx(TextBox, {
        ...this.state,
        submitValues: this.submitValues
      })
    });
  }
}
const Container$1 = _0x5c7879(mapStateToProps, mapDispatchToProps)(Container);
const config = () => {
  return {
    store: _0x4f84af,
    name: appName,
    render: Container$1,
    type: _0x338ede.Application
  };
};
export { config as default };