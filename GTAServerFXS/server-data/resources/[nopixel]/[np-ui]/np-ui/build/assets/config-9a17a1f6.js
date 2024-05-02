import { r as _0x3f72b6, j as _0x154bdc, R as _0x35b868, k as _0x93743a } from "./vendor-6c45b22f.js";
import { u as _0x32bccf, c as _0x2280c7, i as _0x40873a, d as _0x3ced5a, n as _0x3314ad } from "./index-d5aaa08b.js";
import { s as _0x2a27f5 } from "./actions-c0279434.js";
import { I as _0x4932ee } from "./icon-7f5cdae2.js";
import { C as _0x3491b2 } from "./tooltip-cb871d8a.js";
import { A as _0x4e87dc } from "./app-container-77eaf0ff.js";
import _0x19333f from "./store-8ea8dcbb.js";
import { t as _0x57435f } from "./notifications-c44d34f0.js";
import { D as _0x4bdb41 } from "./duration-timer-2aea312f.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
import "./store-779dab40.js";
import "./store-50ddf3e0.js";
import "./translations-7705db3f.js";
import "./input-c6588ceb.js";
import "./text-f7ee3e03.js";
import "./format-10690d6f.js";
import "./styles-61014012.js";
import "./index-ae383549.js";
const index = "";
const HomeClock = () => {
  const [_0x42cc8c] = _0x32bccf("game");
  const _0x2386ed = _0x3f72b6.useMemo(() => {
    const _0x4356a3 = new Date();
    return _0x4356a3.toLocaleDateString("en-US");
  }, []);
  return _0x154bdc.jsxs("section", {
    className: "home-clock",
    children: [_0x154bdc.jsx("h1", {
      children: _0x42cc8c.time
    }), _0x154bdc.jsx("p", {
      children: _0x2386ed
    })]
  });
};
const showExtra = () => _0x2280c7() || _0x40873a();
const HomeScreen = _0x3dcbd9 => {
  const [_0x30e832] = _0x32bccf("phone");
  return _0x154bdc.jsxs(_0x4e87dc, {
    background: "rgba(0, 0, 0, 0)",
    removePadding: true,
    children: [_0x154bdc.jsx(HomeClock, {}), _0x154bdc.jsx("ul", {
      className: "apps",
      children: _0x30e832.phoneConfig.filter(_0x108b63 => !_0x108b63.hidden(_0x3dcbd9) && !_0x108b63.favourite).map(_0x2cee73 => {
        const _0xb097a = _0x3dcbd9.phone.appsWithNotifications.includes(_0x2cee73.name);
        const _0x277b9e = typeof _0x2cee73.label === "function" ? _0x2cee73.label() : _0x2cee73.label;
        const _0x5ceebf = !_0x2cee73.icon ? {
          background: "url(" + (typeof _0x2cee73.iconPng === "function" ? _0x2cee73.iconPng() : _0x2cee73.iconPng) + ")",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        } : {
          backgroundColor: typeof _0x2cee73.icon.background === "function" ? _0x2cee73.icon.background() : _0x2cee73.icon.background,
          color: _0x2cee73.icon.color
        };
        return _0x154bdc.jsx(_0x3491b2, {
          title: "" + _0x277b9e + (!showExtra() ? "" : " [name:" + _0x2cee73.name + "]"),
          children: _0x154bdc.jsxs("li", {
            onClick: () => _0x2a27f5(_0x2cee73),
            children: [_0xb097a && _0x154bdc.jsx("div", {
              className: "app-notification"
            }), _0x154bdc.jsx("span", {
              className: "app-icon",
              style: _0x5ceebf,
              children: !!_0x2cee73.icon && _0x154bdc.jsx(_0x4932ee, {
                icon: _0x2cee73.icon.name
              })
            })]
          }, _0x2cee73.name)
        }, _0x2cee73.name);
      })
    }), _0x154bdc.jsx("ul", {
      className: "apps phone-app-footer",
      children: _0x30e832.phoneConfig.filter(_0x761c61 => !_0x761c61.hidden(_0x3dcbd9) && _0x761c61.favourite).map((_0xcc0df5, _0x5a44da) => {
        const _0x121376 = _0x3dcbd9.phone.appsWithNotifications.includes(_0xcc0df5.name);
        const _0x51920b = typeof _0xcc0df5.label === "function" ? _0xcc0df5.label() : _0xcc0df5.label;
        const _0x42fe82 = !_0xcc0df5.icon ? {
          background: "url(" + (typeof _0xcc0df5.iconPng === "function" ? _0xcc0df5.iconPng() : _0xcc0df5.iconPng) + ")",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        } : {
          backgroundColor: typeof _0xcc0df5.icon.background === "function" ? _0xcc0df5.icon.background() : _0xcc0df5.icon.background,
          color: _0xcc0df5.icon.color
        };
        return _0x154bdc.jsxs("li", {
          onClick: () => _0x2a27f5(_0xcc0df5),
          children: [_0x121376 && _0x154bdc.jsx("div", {
            className: "app-notification"
          }), _0x154bdc.jsx("span", {
            className: "app-icon",
            style: _0x42fe82,
            children: !!_0xcc0df5.icon && _0x154bdc.jsx(_0x4932ee, {
              icon: _0xcc0df5.icon.name
            })
          })]
        }, _0x5a44da);
      })
    })]
  });
};
const {
  mapStateToProps
} = _0x3ced5a(_0x19333f, {
  mapStateToProps: _0x5f0803 => ({
    character: _0x5f0803.character,
    phone: _0x5f0803.phone
  })
});
class Container extends _0x35b868.Component {
  render() {
    return _0x154bdc.jsx(HomeScreen, {
      ...this.props
    });
  }
}
const Container$1 = _0x93743a(mapStateToProps)(Container);
let id = 0;
const getId = (_0x26d1df = false) => {
  if (_0x26d1df) {
    id = id + 1;
  }
  return id;
};
const events = (_0x18fcd7, {
  config: _0x1f3d5e
}) => {
  _0x18fcd7("notification", ({
    data: _0x454022,
    state: _0x38aa80
  }) => {
    const _0x39ce95 = _0x454022.target_app;
    const _0x2ba555 = _0x1f3d5e.find(_0x17aafc => _0x17aafc.name === _0x39ce95);
    if (!_0x2ba555) {
      return _0x38aa80;
    }
    const _0x323ee2 = !!_0x454022.show_even_if_app_active;
    _0x57435f({
      apps: [_0x323ee2 ? "" : _0x39ce95],
      appName: _0x39ce95,
      icon: _0x454022.icon || {
        background: "#263238",
        color: "white",
        name: "home"
      },
      state: _0x38aa80,
      title: _0x454022.title,
      text: _0x454022.body
    });
    return _0x38aa80;
  });
  _0x18fcd7("phone-state-update", ({
    data: _0x42b8c4,
    state: _0x3ec310
  }) => {
    return {
      ..._0x3ec310,
      phone: {
        ..._0x3ec310.phone,
        ..._0x42b8c4
      }
    };
  });
  _0x18fcd7("generic-confirmation", ({
    data: _0xdbd54c,
    state: _0x2be5d8
  }) => {
    _0x57435f({
      apps: [],
      appName: _0xdbd54c.appName,
      icon: _0xdbd54c.icon,
      id: getId(true),
      onAccept: async () => {
        const _0x21ddaa = _0xdbd54c.onAccept;
        if (!_0x21ddaa?.targetEvent) {
          return;
        }
        const _0x436e2f = _0x3314ad(_0x21ddaa.targetEvent, {
          action: "accept",
          _data: _0xdbd54c._data
        });
        if (!_0x21ddaa.hasResponse) {
          return _0x436e2f;
        }
        const _0x23a2af = await _0x436e2f;
        if (!_0x23a2af.data.text || !_0x23a2af.data.title) {
          return;
        }
        setTimeout(() => {
          _0x57435f({
            apps: [],
            appName: _0xdbd54c.appName,
            icon: _0xdbd54c.icon,
            id: getId(),
            state: _0x2be5d8,
            text: _0x23a2af.data.text,
            title: _0x23a2af.data.title,
            timeout: 2500
          });
        });
      },
      onAcceptOptions: !_0xdbd54c.onAccept.hasResponse ? undefined : {
        onAccept: null,
        onReject: null,
        dismiss: false,
        blockDismissOnClick: true,
        id: getId(),
        text: _0xdbd54c.waitingText,
        timeout: -1
      },
      onReject: () => {
        const _0x204cf5 = _0xdbd54c.onAccept;
        if (!_0x204cf5?.targetEvent) {
          return;
        }
        return _0x3314ad(_0x204cf5.targetEvent, {
          action: "reject",
          _data: _0xdbd54c._data
        });
      },
      state: _0x2be5d8,
      timeout: _0xdbd54c.timeout,
      title: _0xdbd54c.title,
      text: _0xdbd54c.timeout !== -1 && !_0xdbd54c.title.includes("Job Offer") ? _0x154bdc.jsx(_0x4bdb41, {
        countdown: true,
        extra: _0xdbd54c.text,
        startTime: 30
      }) : _0xdbd54c.text
    });
    return _0x2be5d8;
  });
};
const icon = {
  background: "#009688",
  color: "white",
  name: "home"
};
const config = _0x15a045 => {
  return {
    ..._0x15a045,
    background: "rgba(0, 0, 0, 0)",
    events: () => events,
    hidden: () => true,
    icon: icon,
    label: "",
    name: "home-screen",
    render: () => _0x154bdc.jsx(Container$1, {})
  };
};
export { config as default, icon };