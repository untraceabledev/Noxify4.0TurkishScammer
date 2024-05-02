import { r as _0x4e9749, R as _0x1b11dc, j as _0x2d9933, k as _0x566155, f as _0x202dea } from "./vendor-6c45b22f.js";
import { d as _0x5b2afe, u as _0xdceaca, n as _0x5df8f3, g as _0x4dffaa, s as _0x11a67d, i as _0x4cc5a9, C as _0x99fc2d } from "./index-d5aaa08b.js";
import { A as _0x43cabc } from "./ui-app-6ee97cab.js";
import { p as _0x10be66 } from "./preferences-c03a2c0b.js";
import { I as _0x74d32e } from "./icon-7f5cdae2.js";
import { C as _0x22c8a1 } from "./tooltip-cb871d8a.js";
import { m as _0x456f4a, b as _0x2acfad } from "./styles-61014012.js";
import { g as _0x470fe1, m as _0x32eb26 } from "./actions-c0279434.js";
import _0x5f279f from "./store-cf7996ad.js";
import { C as _0x1e0dd0 } from "./index-191f7df1.js";
import { S as _0x49ee8b } from "./spinner-1649f31d.js";
import { C as _0xdfbe68 } from "./checkmark-036a14b0.js";
import _0x2ccff2 from "./store-779dab40.js";
import { N as _0x4065b3 } from "./notifications-c44d34f0.js";
import { g as _0x6f9a29 } from "./actions-6c142f68.js";
import _0x46622b from "./store-1436e66f.js";
import { s as _0x12113a } from "./actions-a6d0bfed.js";
import { F as _0xdd7741 } from "./input-c6588ceb.js";
import { G as _0x501aec } from "./index-e9ff94e9.js";
import _0x492b9d, { appName } from "./store-50ddf3e0.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
import "./translations-7705db3f.js";
import "./simple-form-6b6335d8.js";
import "./text-f7ee3e03.js";
import "./store-1b3966b7.js";
import "./actions-d7dccfad.js";
import "./store-75fb65a1.js";
import "./store-bdd3f58b.js";
import "./lib-fc905d4c.js";
import "./format-10690d6f.js";
import "./dev-data-afd59de4.js";
import "./index-ae383549.js";
const useStyles = _0x456f4a({
  "@global": {
    "@keyframes pulseheart": {
      "0%": {
        transform: "scale(1)"
      },
      "100%": {
        transform: "scale(1.25)"
      }
    }
  },
  wrapper: () => ({
    position: "absolute",
    bottom: 8,
    left: 0,
    zIndex: 100,
    userSelect: "none",
    width: "100%",
    minHeight: 40,
    height: _0x2acfad.responsiveHeight(40),
    "& div": {
      margin: 0,
      marginLeft: _0x2acfad.responsiveWidth(16),
      marginRight: _0x2acfad.responsiveWidth(16),
      display: "flex",
      alignItems: "center"
    },
    borderTop: "1px solid rgba(1, 1, 1, 0.5)",
    backgroundColor: "rgba(1, 1, 1, 0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white"
  }),
  pulse: () => ({
    animation: "pulseheart",
    animationDuration: "1s",
    animationIterationCount: "infinite"
  })
});
const {
  mapStateToProps: mapStateToProps$2,
  mapDispatchToProps: mapDispatchToProps$2
} = _0x5b2afe(_0x5f279f);
const BottomBar = _0x33e250 => {
  const [_0x206790, _0x26f24c] = _0x4e9749.useState(false);
  let _0x2313df;
  const _0x252844 = _0x1bc069 => {
    if (_0x1bc069) {
      _0x2313df = setTimeout(() => {
        _0x26f24c(true);
      }, 1000);
    } else {
      _0x26f24c(false);
      clearTimeout(_0x2313df);
    }
  };
  _0x1b11dc.useEffect(() => {
    return () => {
      clearTimeout(_0x2313df);
    };
  }, [_0x2313df]);
  const _0x5c6c44 = useStyles();
  return _0x2d9933.jsx("div", {
    className: "footer-wrap",
    children: _0x2d9933.jsx(_0x22c8a1, {
      title: "Home",
      children: _0x2d9933.jsxs("div", {
        onClick: _0x470fe1,
        onMouseEnter: () => _0x252844(true),
        onMouseLeave: () => _0x252844(false),
        children: [!_0x206790 && _0x2d9933.jsx(_0x74d32e, {
          icon: ["far", "circle"],
          size: "lg"
        }), _0x206790 && _0x2d9933.jsx(_0x74d32e, {
          icon: "heart",
          size: "lg",
          style: {
            color: "#1E88E5"
          },
          className: _0x5c6c44.pulse
        })]
      })
    })
  });
};
const ContentBottom = _0x566155(mapStateToProps$2, mapDispatchToProps$2)(BottomBar);
const wrapper = "_wrapper_121jg_1";
const container = "_container_121jg_14";
const confirm_container = "_confirm_container_121jg_28";
const header = "_header_121jg_35";
const actions = "_actions_121jg_42";
const error_container = "_error_container_121jg_47";
const text = "_text_121jg_54";
const btn = "_btn_121jg_62";
const red = "_red_121jg_74";
const green = "_green_121jg_81";
const styles = {
  wrapper: wrapper,
  container: container,
  confirm_container: confirm_container,
  header: header,
  actions: actions,
  error_container: error_container,
  text: text,
  btn: btn,
  red: red,
  green: green
};
const Modal$1 = _0x563bf5 => {
  return _0x2d9933.jsx("div", {
    className: styles.wrapper,
    children: _0x2d9933.jsxs("div", {
      className: styles.container,
      children: [_0x563bf5.loading && _0x2d9933.jsx(_0x49ee8b, {}), !_0x563bf5.loading && _0x563bf5.slowHide && _0x2d9933.jsx(_0xdfbe68, {}), _0x563bf5.isConfirm && _0x2d9933.jsxs("div", {
        className: styles.confirm_container,
        children: [_0x2d9933.jsx("h1", {
          className: styles.header,
          children: "Confirmation"
        }), _0x2d9933.jsx("p", {
          className: styles.text,
          children: _0x563bf5.confirmText
        }), _0x2d9933.jsxs("div", {
          className: styles.actions,
          children: [_0x2d9933.jsx("button", {
            className: _0x202dea(styles.btn, styles.red),
            onClick: () => _0x563bf5.updateState({
              show: false,
              slowHide: false
            }),
            children: "Cancel"
          }), _0x2d9933.jsx("button", {
            className: _0x202dea(styles.btn, styles.green),
            onClick: () => _0x563bf5.onConfirm(),
            children: "Confirm"
          })]
        })]
      }), _0x563bf5.error && _0x2d9933.jsxs("div", {
        className: styles.error_container,
        children: [_0x2d9933.jsx(_0x74d32e, {
          icon: "exclamation",
          size: "2x",
          style: {
            color: "#853c3c"
          }
        }), _0x2d9933.jsx("p", {
          className: styles.text,
          children: _0x563bf5.error
        }), _0x2d9933.jsx("button", {
          className: _0x202dea(styles.btn, styles.red),
          onClick: () => {
            if (_0x563bf5.closeOnErrorOkay) {
              _0x563bf5.updateState({
                show: false,
                loading: false
              });
            } else if (_0x563bf5.hideOnOkay) {
              _0x563bf5.updateState({
                error: null,
                loading: false
              });
            }
          },
          children: "Okay"
        })]
      }), !_0x563bf5.isConfirm && _0x2d9933.jsx("div", {
        className: styles.content_container,
        children: _0x563bf5.content
      })]
    })
  });
};
const {
  mapStateToProps: mapStateToProps$1,
  mapDispatchToProps: mapDispatchToProps$1
} = _0x5b2afe(_0x2ccff2);
let Container$2 = class Container extends _0x1b11dc.Component {
  componentDidUpdate(_0x132c25) {
    if (!_0x132c25.slowHide && this.props.slowHide) {
      setTimeout(() => {
        this.props.updateState({
          show: false,
          slowHide: false
        });
      }, 1500);
    }
  }
  render() {
    if (!this.props.show && !this.props.slowHide) {
      return null;
    }
    return _0x2d9933.jsx(Modal$1, {
      ...this.props
    });
  }
};
const Modal = _0x566155(mapStateToProps$1, mapDispatchToProps$1)(Container$2);
const PhoneFrame = "" + new URL("shell-02ad97dc.png", import.meta.url).href + "";
const index$2 = "";
const PhoneShell = ({
  activeApp: _0x537114,
  showNotifications: _0x524d91,
  status: _0x35349f,
  children: _0x3a876a
}) => {
  const _0x1b1dcd = _0x6f9a29("phone_wallpaper");
  const _0x4b7c04 = _0x1b1dcd?.length > 0 ? _0x1b1dcd : "https://i.imgur.com/ExsiY1r.png";
  const _0x3690f7 = _0x202dea(["phone-wrap", "phone-" + _0x35349f], {
    "notification-show": _0x524d91
  });
  return _0x2d9933.jsxs("div", {
    className: _0x3690f7,
    children: [_0x2d9933.jsx("img", {
      className: "phone-frame",
      src: PhoneFrame
    }), _0x2d9933.jsx("div", {
      className: _0x202dea(["phone-container", "app-" + _0x537114]),
      style: {
        background: "url(" + _0x4b7c04 + ")"
      },
      children: _0x3a876a
    })]
  });
};
const index$1 = "";
const SendMessageModal = () => {
  const [_0x144858, _0x148936] = _0xdceaca(_0x46622b.key);
  const [_0x4f9e75, _0x1317a8] = _0x4e9749.useState(false);
  const [_0x5c2792, _0xacec7d] = _0x4e9749.useState("");
  const _0x5f6143 = async () => {
    const _0x2a7d35 = _0x144858.number;
    const _0x1371d9 = _0x144858.message;
    if (_0x1371d9.length <= 0 || _0x2a7d35.length <= 0) {
      return;
    }
    _0x1317a8(true);
    const [_0x46f144, _0x4626b4] = await _0x12113a(_0x2a7d35, _0x1371d9);
    _0x1317a8(false);
    if (!_0x46f144) {
      return _0xacec7d(_0x4626b4);
    }
    _0x148936({
      show: false
    });
  };
  return _0x2d9933.jsxs(_0x501aec, {
    loading: _0x4f9e75,
    title: "New Message",
    error: _0x5c2792,
    className: "conversation-modal",
    show: _0x144858.show,
    onCancel: () => _0x148936({
      show: false
    }),
    onSubmit: _0x5f6143,
    children: [_0x2d9933.jsx(_0xdd7741.Phone, {
      onChange: _0x3067dc => _0x148936({
        number: _0x3067dc
      }),
      value: _0x144858.number
    }), _0x2d9933.jsx(_0xdd7741.TextArea, {
      i18n: true,
      icon: "comment",
      onChange: _0x2950fe => _0x148936({
        message: _0x2950fe
      }),
      value: _0x144858.message,
      placeholder: "meme",
      autoFocus: false
    })]
  });
};
const getTop = _0x5bfee2 => {
  return getBottom(_0x5bfee2, true) + _0x2acfad.responsiveHeight(652, true);
};
const getBottom = (_0x4685ac, _0x40755a = false) => {
  if (_0x4685ac.status === "show") {
    if (_0x4685ac.dev || _0x4685ac.landscape) {
      return 0;
    } else {
      return _0x2acfad.responsiveHeight(_0x4685ac.shell === "ios" ? 18 : 12, _0x40755a);
    }
  } else if (_0x4685ac.hasNotification) {
    return _0x2acfad.responsiveHeight(-540, _0x40755a);
  }
  return _0x2acfad.responsiveHeight(-1000, _0x40755a);
};
const getPosition = _0x58711f => {
  return {
    position: "absolute",
    bottom: getBottom(_0x58711f),
    left: _0x58711f.status === "show" && (_0x58711f.dev || _0x58711f.landscape) ? 0 : "unset",
    right: _0x58711f.dev || _0x58711f.landscape ? 0 : _0x2acfad.responsiveWidth(_0x58711f.shell === "ios" ? 18 : 16),
    top: _0x58711f.status === "show" && (_0x58711f.dev || _0x58711f.landscape) ? 0 : "unset",
    margin: _0x58711f.status === "show" && (_0x58711f.dev || _0x58711f.landscape) ? "auto" : "unset"
  };
};
const phone_styles = _0x456f4a({
  "@global": {
    "@keyframes fadeinpls": {
      "0%": {
        opacity: 0
      },
      "100%": {
        opacity: 1
      }
    },
    "@keyframes fadeoutpls": {
      "0%": {
        opacity: 1
      },
      "100%": {
        opacity: 0
      }
    },
    "@keyframes rotateportrait": {
      "0%": {
        transform: "rotate(-90deg) scale(1.5)"
      },
      "100%": {
        transform: "rotate(0deg) scale(1)"
      }
    },
    "@keyframes rotatelandscape": {
      "0%": {
        transform: "rotate(0) scale(1)"
      },
      "100%": {
        transform: "rotate(-90deg) scale(1.5)"
      }
    }
  },
  wrapper: _0x26e4f7 => ({
    position: _0x26e4f7.landscape ? "relative" : "absolute",
    right: _0x2acfad.responsiveWidth(16),
    bottom: getBottom(_0x26e4f7),
    display: "flex",
    flexWrap: "wrap",
    height: _0x2acfad.responsiveHeight(652),
    width: _0x2acfad.responsiveWidth(300, true)
  }),
  rotateWrapper: _0x23525a => ({
    ...getPosition(_0x23525a),
    minHeight: 652,
    minWidth: 280,
    height: _0x2acfad.responsiveHeight(652),
    width: _0x2acfad.responsiveWidth(280),
    animation: "500ms ease 0s 1 normal none running " + (!_0x23525a.landscape ? "rotateportrait" : "rotatelandscape"),
    transition: _0x23525a.hasNotification ? "none" : "bottom 800ms ease",
    transform: !_0x23525a.landscape ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(1.5)",
    transformStyle: "preserve-3d"
  }),
  innerWrap: _0x196452 => ({
    ...getPosition(_0x196452),
    pointerEvents: "all",
    background: "url('" + _0x196452.wallpaper + "')",
    backgroundSize: "contain",
    backgroundRepeat: "repeat",
    minHeight: _0x196452.landscape && !_0x196452.isChanging ? _0x2acfad.responsiveHeight(420) : _0x2acfad.responsiveHeight(652),
    minWidth: _0x196452.landscape && !_0x196452.isChanging ? _0x2acfad.responsiveWidth(978) : _0x2acfad.responsiveWidth(280),
    height: _0x196452.landscape && !_0x196452.isChanging ? _0x2acfad.responsiveHeight(420) : _0x2acfad.responsiveHeight(652),
    width: _0x196452.landscape && !_0x196452.isChanging ? _0x2acfad.responsiveWidth(978) : _0x2acfad.responsiveWidth(280),
    borderRadius: _0x2acfad.responsiveHeight(_0x196452.shell === "ios" ? 16 : 6),
    overflow: "hidden",
    zIndex: 20,
    animation: "500ms ease 0s 1 normal none running " + (!_0x196452.landscape ? "rotateportrait" : "rotatelandscape"),
    transition: _0x196452.hasNotification ? "none" : "bottom 800ms ease"
  })
});
const index = "";
let lastHasNotification;
async function handleHasNotification(_0x3a61ca, _0x2eba86) {
  if (_0x3a61ca !== lastHasNotification) {
    const _0x45e0ec = lastHasNotification;
    lastHasNotification = _0x3a61ca;
    await _0x5df8f3("np-ui:phone:hasNotificationChanged", {
      lastValue: _0x45e0ec,
      value: _0x3a61ca,
      topOfPhone: _0x2eba86
    });
  }
}
const PhoneContainer = () => {
  const [_0x2c43f0] = _0xdceaca("phone");
  _0x4e9749.useEffect(() => {
    const _0x31d92e = document.documentElement;
    _0x31d92e?.style.setProperty("--phone-scale", "" + _0x10be66("phone.scale"));
  }, []);
  _0x4e9749.useEffect(() => {
    handleHasNotification(_0x2c43f0.hasNotification, getTop({
      hasNotification: true
    }));
  }, [_0x2c43f0.hasNotification]);
  const _0x522571 = _0x2c43f0.phoneConfig.find(_0x593e9c => _0x593e9c.name === _0x2c43f0.activeApp);
  return _0x2d9933.jsxs(PhoneShell, {
    activeApp: _0x522571?.name,
    showNotifications: _0x2c43f0.hasNotification,
    status: _0x2c43f0.status,
    children: [_0x2d9933.jsx(Modal, {}), _0x2d9933.jsx(_0x4065b3, {}), _0x2d9933.jsx(_0x1e0dd0, {}), _0x522571 && _0x522571.render(), _0x2d9933.jsx(ContentBottom, {}), _0x2d9933.jsx(SendMessageModal, {})]
  });
};
const registerStates = (_0x38601f, _0x5ae53c = {}) => {
  const _0x5b4b82 = _0x4cc211 => ({
    ..._0x4cc211,
    ..._0x38601f,
    phone: {
      ..._0x4cc211.phone,
      ..._0x5ae53c,
      initialized: true
    }
  });
  return {
    cb: _0x5b4b82,
    type: "np-ui-action"
  };
};
const {
  mapStateToProps,
  mapDispatchToProps
} = _0x5b2afe(_0x492b9d, {
  mapDispatchToProps: {
    registerStates: registerStates
  }
});
class Container extends _0x1b11dc.Component {
  hideTimeout;
  state = {
    show: true
  };
  displayStatus = (_0x5d35ba, _0x529d1f = {}) => {
    this.props.updateState({
      status: _0x5d35ba,
      activeApp: "home-screen",
      simcard: _0x529d1f.simcard,
      hasEmergencyJob: !!_0x529d1f.has_emergency_job,
      hasVpn: !!_0x529d1f.has_vpn,
      hasUsbFleeca: !!_0x529d1f.has_usb_fleeca,
      hasUsbPaleto: !!_0x529d1f.has_usb_paleto,
      hasUsbUpper: !!_0x529d1f.has_usb_upper,
      hasUsbLower: !!_0x529d1f.has_usb_lower,
      hasUsbRacing: !!(_0x529d1f.has_usb_racing ?? this.props.hasUsbRacing),
      hasUsbPDRacing: !!(_0x529d1f.has_usb_pd_racing ?? this.props.hasUsbPDRacing),
      racingAlias: _0x529d1f.racing_alias ?? this.props.racingAlias,
      hasUsbRacingCreate: !!(_0x529d1f.has_usb_racing_create ?? this.props.hasUsbRacingCreate),
      identifiers: _0x529d1f.identifiers
    });
    if (_0x5d35ba === "hide") {
      this.hideTimeout = setTimeout(() => {
        this.props.updateState({
          activeApp: "home-screen",
          hasVpn: !!_0x529d1f.has_vpn
        });
        _0x32eb26(false);
      }, 800);
    } else {
      _0x32eb26(false);
      clearTimeout(this.hideTimeout);
    }
  };
  _init = async (_0x4e225e = {}) => {
    const {
      phoneConfig: _0x544824,
      registerStates: _0x3ad906,
      devOverride: _0x9cb749,
      activeApp: _0x2983bd
    } = this.props;
    const _0x2cbb21 = [];
    for (const _0x5961a8 of _0x544824) {
      if (_0x5961a8.init) {
        _0x2cbb21.push(_0x5961a8.init());
      }
    }
    const _0xf84e6e = await Promise.all(_0x2cbb21);
    const _0x1fff4d = {};
    _0xf84e6e.forEach(_0x1386d7 => {
      _0x1fff4d[_0x1386d7.key] = _0x1386d7.data;
    });
    const _0x40ca11 = {
      ..._0x4dffaa(),
      ..._0x1fff4d
    };
    const _0x393a20 = _0x9cb749 ? _0x2983bd : "home-screen";
    const _0x2c256c = {
      ..._0x4e225e,
      activeApp: _0x393a20
    };
    _0x3ad906(_0x40ca11, _0x2c256c);
  };
  componentDidUpdate(_0x16079a) {
    if (!!this.props.character.id && this.props.character.id !== _0x16079a.character.id) {
      this._init();
    }
  }
  onShow = (_0x3f2169 = {}) => {
    this.displayStatus("show", _0x3f2169);
  };
  onHide = () => {
    this.displayStatus("hide");
  };
  onError = () => {
    this._init({
      show: false
    });
  };
  onEvent = _0x345c75 => {
    if (!_0x345c75.action) {
      return;
    }
    const _0x1d266a = this.props.phoneEvents[_0x345c75.action];
    const _0x4a2014 = _0x60fc66 => {
      _0x11a67d.dispatch({
        cb: _0x17f7c9 => _0x60fc66({
          data: _0x345c75,
          state: _0x17f7c9
        }),
        type: "np-ui-action"
      });
    };
    _0x1d266a.forEach(_0x5283b7 => _0x4a2014(_0x5283b7));
  };
  render() {
    if (!this.props.initialized || !this.props.character.id) {
      return null;
    }
    return _0x2d9933.jsx(_0x43cabc, {
      closeOnError: true,
      store: true,
      center: _0x4cc5a9(),
      name: appName,
      onError: this.onError,
      onEscape: this.onHide,
      onEvent: this.onEvent,
      onHide: this.onHide,
      onShow: this.onShow,
      children: _0x2d9933.jsx(PhoneContainer, {
        ...this.props
      })
    });
  }
}
const Container$1 = _0x566155(mapStateToProps, mapDispatchToProps)(Container);
const config = () => {
  return {
    store: _0x492b9d,
    name: "phone",
    render: Container$1,
    type: _0x99fc2d.Application
  };
};
export { config as default };