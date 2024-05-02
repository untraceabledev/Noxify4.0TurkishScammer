import { r as _0x524446, j as _0x2bd555, R as _0x1ce3f7, k as _0x83f666 } from "./vendor-6c45b22f.js";
import { s as _0x49beb9 } from "./index-d5aaa08b.js";
import { I as _0x461a48 } from "./icon-7f5cdae2.js";
import { C as _0x79c130 } from "./tooltip-cb871d8a.js";
const index = "";
const PhoneNotification = ({
  notification: _0x3fd716,
  process: _0x2d8e7b
}) => {
  const [_0x139fa1, _0x49ecea] = _0x524446.useState("notification-container");
  _0x524446.useEffect(() => {
    let _0x5b1a08;
    if (_0x3fd716.timeout > 0) {
      _0x5b1a08 = setTimeout(() => {
        _0x49ecea("notification-container notification-container-fade-out");
      }, _0x3fd716.timeout - 500);
    }
    return () => clearTimeout(_0x5b1a08);
  }, [_0x3fd716.timeout]);
  const _0x279b9b = (_0xefe96f = null, _0x1331e7 = null) => _0x197e58 => {
    _0x197e58.preventDefault();
    _0x197e58.stopPropagation();
    if (_0x139fa1.includes("notification-minimize", 0)) {
      _0x49ecea("notification-container");
    } else {
      "";
    }
    if (_0x3fd716.timeout === -1 && !_0x1331e7) {}
    if (!_0xefe96f && (_0x3fd716.onAccept || _0x3fd716.onReject)) {
      return;
    }
    if (_0x3fd716.blockDismissOnClick) {
      if (_0x139fa1.includes("notification-minimize", 0)) {
        _0x49ecea("notification-container");
      } else {
        _0x49ecea("notification-container notification-minimize");
      }
      return;
    }
    if (_0x1331e7 && _0x1331e7.timeout > 0) {
      setTimeout(() => {
        if (_0x139fa1.includes("notification-minimize", 0)) {
          _0x49ecea("notification-container notification-minimize notification-container-fade-out");
        } else {
          _0x49ecea("notification-container notification-container-fade-out");
        }
      }, _0x1331e7.timeout - 500);
    }
    _0x2d8e7b(_0x3fd716.id, _0xefe96f, _0x1331e7 ? _0x1331e7 : {
      timeout: 500
    });
  };
  const _0x318fed = () => _0x4bf561 => {
    _0x4bf561.preventDefault();
    _0x4bf561.stopPropagation();
    if (_0x139fa1.includes("notification-minimize", 0)) {
      _0x49ecea("notification-container");
    } else {
      _0x49ecea("notification-container notification-minimize");
    }
    return;
  };
  return _0x2bd555.jsxs("div", {
    className: _0x139fa1,
    onClick: _0x279b9b(),
    children: [_0x2bd555.jsx("div", {
      className: "icon-container",
      style: {
        background: _0x3fd716.icon.background
      },
      children: _0x2bd555.jsx(_0x461a48, {
        className: "icon",
        icon: _0x3fd716.icon.name,
        style: {
          color: _0x3fd716.icon.color
        }
      })
    }), _0x2bd555.jsxs("div", {
      className: "notification-info",
      children: [_0x2bd555.jsx("div", {
        className: "subject",
        children: _0x3fd716.title
      }), _0x2bd555.jsx("div", {
        className: "description",
        children: _0x3fd716.text
      })]
    }), _0x2bd555.jsxs("div", {
      className: "actions",
      children: [_0x3fd716.minimize && _0x2bd555.jsx("div", {
        className: "action action-minimize",
        onClick: _0x318fed(),
        children: _0x2bd555.jsx(_0x461a48, {
          icon: "chevron-up"
        })
      }), _0x3fd716.onReject && _0x2bd555.jsx(_0x79c130, {
        title: _0x3fd716.onRejectText,
        children: _0x2bd555.jsx("div", {
          className: "action action-reject",
          onClick: _0x279b9b(_0x3fd716.onReject, _0x3fd716.onRejectOptions),
          children: _0x2bd555.jsx(_0x461a48, {
            icon: "times"
          })
        })
      }), _0x3fd716.onAccept && _0x2bd555.jsx(_0x79c130, {
        title: _0x3fd716.onAcceptText,
        children: _0x2bd555.jsx("div", {
          className: "action action-accept",
          onClick: _0x279b9b(_0x3fd716.onAccept, _0x3fd716.onAcceptOptions),
          children: _0x2bd555.jsx(_0x461a48, {
            icon: "check"
          })
        })
      })]
    })]
  });
};
const notifications = "";
const key = "phone.notifications";
const initialState = {
  notifications: []
};
const triggerNotification = _0x23383b => {
  if (_0x23383b.apps.includes(_0x23383b.state.phone.activeApp)) {
    return;
  }
  setTimeout(() => {
    const _0xbb2633 = _0x49beb9.getState();
    if (!_0xbb2633.phone.hasPhone) {
      return;
    }
    window.dispatchEvent(new CustomEvent("notification-listener", {
      detail: {
        appName: "",
        id: Math.random(),
        onAccept: null,
        onAcceptOptions: null,
        onAcceptText: "Accept",
        onReject: null,
        onRejectOptions: null,
        onRejectText: "Dismiss",
        timeout: 5000,
        minimize: false,
        type: "",
        ..._0x23383b
      }
    }));
  }, 32);
};
const mapStateToProps = _0x4910eb => ({
  ...(_0x4910eb[key] ? _0x4910eb[key] : initialState)
});
const updateNotifications = (_0x1bee8, _0x125312) => {
  const _0x332b7a = _0xb25147 => {
    const _0x4c0a11 = [..._0xb25147.phone.appsWithNotifications];
    if (!_0x1bee8.includes(_0xb25147.phone.activeApp)) {
      _0x1bee8.forEach(_0x28de45 => _0x4c0a11.push(_0x28de45));
    }
    if (_0x125312 && _0x125312 !== _0xb25147.phone.activeApp) {
      _0x4c0a11.push(_0x125312);
    }
    function _0x136456(_0x40a992, _0x19ec35, _0x4f8a23) {
      return _0x4f8a23.indexOf(_0x40a992) === _0x19ec35;
    }
    const _0x381135 = _0x4c0a11.filter(_0x136456);
    return {
      ..._0xb25147,
      phone: {
        ..._0xb25147.phone,
        appsWithNotifications: _0x381135,
        hasNotification: true
      }
    };
  };
  return {
    cb: _0x332b7a,
    type: "np-ui-action"
  };
};
const removeHasNotifications = () => {
  const _0x53bb9a = _0x19e350 => {
    return {
      ..._0x19e350,
      phone: {
        ..._0x19e350.phone,
        hasNotification: false
      }
    };
  };
  return {
    cb: _0x53bb9a,
    type: "np-ui-action"
  };
};
const mapDispatchToProps = {
  removeHasNotifications: removeHasNotifications,
  updateNotifications: updateNotifications
};
class Notifications extends _0x1ce3f7.Component {
  state = {
    notifications: {}
  };
  incomingNotification = _0x55349b => {
    const _0x1f2f6f = _0x55349b.detail;
    this.setState(_0x182ed4 => ({
      notifications: {
        ..._0x182ed4.notifications,
        [_0x1f2f6f.id]: _0x1f2f6f
      }
    }));
    if (_0x1f2f6f.timeout > 0) {
      setTimeout(() => {
        this.process(_0x1f2f6f.id);
      }, _0x1f2f6f.timeout);
    }
    setTimeout(() => {
      this.props.updateNotifications(_0x1f2f6f.apps, _0x1f2f6f.appName);
    }, 0);
  };
  process = (_0x211a7d, _0x473b74 = null, _0x1df45e = null) => {
    if (_0x473b74) {
      _0x473b74();
    }
    if (_0x1df45e && !_0x1df45e.dismiss) {
      this.setState(_0x2b5fce => {
        const _0x3d4ccf = {
          ..._0x2b5fce.notifications
        };
        _0x3d4ccf[_0x211a7d] &&= {
          ..._0x3d4ccf[_0x211a7d],
          ..._0x1df45e
        };
        return {
          notifications: _0x3d4ccf
        };
      });
      if (_0x1df45e.timeout > 0) {
        setTimeout(() => {
          this.process(_0x211a7d);
        }, _0x1df45e.timeout);
      }
    }
    if (!_0x1df45e || _0x1df45e.dismiss) {
      this.setState(_0x4cef1a => {
        const _0x2a4796 = {
          ..._0x4cef1a.notifications
        };
        if (_0x2a4796[_0x211a7d]) {
          delete _0x2a4796[_0x211a7d];
        }
        if (Object.keys(_0x2a4796).length === 0) {
          this.props.removeHasNotifications();
        }
        return {
          notifications: _0x2a4796
        };
      });
    }
  };
  componentDidMount() {
    window.addEventListener("notification-listener", this.incomingNotification);
  }
  componentWillUnmount() {
    window.removeEventListener("notification-listener", this.incomingNotification);
  }
  render() {
    const _0x3d6967 = Object.keys(this.state.notifications);
    const _0x37b91f = this.state.notifications;
    const _0x1c14f5 = _0x3d6967.length > 0 ? "mounted" : "not-mounted";
    return _0x2bd555.jsxs("div", {
      className: "top-notifications-wrapper top-notifications-wrapper-" + _0x1c14f5,
      style: {
        maxHeight: 12 + _0x3d6967.length * 68
      },
      children: [_0x37b91f.length === 0 && _0x2bd555.jsx("div", {
        className: "notification-container"
      }), _0x3d6967.map(_0x5868a9 => _0x2bd555.jsx(PhoneNotification, {
        notification: _0x37b91f[_0x5868a9],
        process: this.process
      }, _0x5868a9))]
    });
  }
}
const Notifications$1 = _0x83f666(mapStateToProps, mapDispatchToProps)(Notifications);
export { Notifications$1 as N, triggerNotification as t };