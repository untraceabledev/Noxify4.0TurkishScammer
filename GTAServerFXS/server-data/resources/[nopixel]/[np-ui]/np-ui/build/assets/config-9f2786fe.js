import { ax as _0xa80a7c, r as _0x90e14e, ay as _0x535d80, j as _0x45639c, f as _0x3df0e6 } from "./vendor-6c45b22f.js";
import { u as _0x92ac26, n as _0x5849ff } from "./index-d5aaa08b.js";
import { d as _0x34c237 } from "./dev-data-afd59de4.js";
import { g as _0x4da3d3 } from "./character-8ebc09ae.js";
import { p as _0x309c72, m as _0x1e4f8f } from "./format-10690d6f.js";
import { T as _0x152093 } from "./text-f7ee3e03.js";
import { S as _0x244c97 } from "./spinner-1649f31d.js";
import { G as _0x29024a } from "./index-eac3b5ce.js";
import { g as _0x114885 } from "./lib-fc905d4c.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
import "./translations-7705db3f.js";
import "./icon-7f5cdae2.js";
import "./tooltip-cb871d8a.js";
const store = {
  key: "phone.apps.details",
  initialState: {
    bank: 0,
    cash: 0,
    casino: 0,
    jobs: {
      primary: "Unemployed",
      secondary: "None"
    },
    licenses: []
  }
};
const details = "";
const DetailsApp = () => {
  const [_0x5d6942, _0xad171f] = _0xa80a7c();
  const [_0x163d4d, _0x533298] = _0xa80a7c();
  const [_0x55d129, _0x2962b6] = _0x90e14e.useState(true);
  const [_0x3ae917, _0xbdae52] = _0x92ac26(store.key);
  const _0x12ede0 = _0x90e14e.useCallback(async () => {
    const _0x38a30d = _0x4da3d3();
    const _0x12ba3e = await _0x5849ff("np-ui:getCharacterDetails", {
      id: _0x38a30d?.id,
      character: _0x38a30d
    }, {
      returnData: _0x34c237.getDetails()
    });
    _0xbdae52({
      ..._0x12ba3e.data
    });
    _0x2962b6(false);
  }, []);
  const _0x2350d6 = async () => {
    await _0xad171f("li", {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)"
    }, {
      delay: _0x535d80(0.03)
    });
    await _0x533298("li", {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)"
    }, {
      delay: _0x535d80(0.03)
    });
  };
  _0x90e14e.useEffect(() => {
    _0x12ede0();
  }, [_0x12ede0]);
  _0x90e14e.useEffect(() => {
    if (!_0x55d129) {
      _0x2350d6();
    }
  }, [_0x55d129]);
  const _0x1cb10d = () => {
    const _0xb230ac = _0x114885();
    if (_0xb230ac) {
      return _0x309c72(_0xb230ac.areaCode + _0xb230ac.number);
    } else {
      return "No SIM Card";
    }
  };
  return _0x45639c.jsxs("div", {
    className: "app details-app",
    children: [_0x45639c.jsx(_0x29024a, {
      title: "Details"
    }), _0x55d129 ? _0x45639c.jsx("div", {
      className: "loading-container",
      children: _0x45639c.jsx(_0x244c97, {})
    }) : _0x45639c.jsxs("div", {
      className: "stats-container",
      children: [_0x45639c.jsxs("div", {
        className: "stats-section",
        children: [_0x45639c.jsx(_0x152093, {
          className: "stats-heading",
          children: "Info"
        }), _0x45639c.jsxs("ul", {
          className: "list",
          ref: _0x5d6942,
          children: [_0x45639c.jsx(DetailItem, {
            label: "Apartment",
            value: _0x3ae917?.apartmentNumber ?? "Unknown"
          }), _0x45639c.jsx(DetailItem, {
            label: "State Id",
            value: _0x4da3d3()?.id ?? "Unknown"
          }), _0x45639c.jsx(DetailItem, {
            label: "Bank Account ID",
            value: _0x4da3d3()?.bank_account_id ?? "Unknown"
          }), _0x45639c.jsx(DetailItem, {
            label: "Phone Number",
            value: _0x1cb10d()
          }), _0x45639c.jsx(DetailItem, {
            label: "Bank Balance",
            value: _0x1e4f8f(_0x3ae917?.bank)
          })]
        })]
      }), _0x45639c.jsxs("div", {
        className: "stats-section",
        children: [_0x45639c.jsx(_0x152093, {
          className: "stats-heading",
          children: "Licenses"
        }), _0x45639c.jsx("ul", {
          className: "list",
          ref: _0x163d4d,
          children: _0x3ae917?.licenses && _0x3ae917?.licenses.map(_0x4bbb85 => _0x45639c.jsx(DetailItem, {
            label: _0x4bbb85.name,
            value: _0x4bbb85.status ? "Valid" : "Expired"
          }, _0x4bbb85.name))
        })]
      })]
    })]
  });
};
const DetailItem = _0x41b541 => {
  const _0x3c8ac8 = _0x3df0e6({
    "license-active": _0x41b541.value === "Valid",
    "license-expired": _0x41b541.value === "Expired"
  });
  return _0x45639c.jsxs("li", {
    className: "stats-item",
    children: [_0x41b541.label, " ", _0x45639c.jsx("span", {
      className: _0x3c8ac8,
      children: _0x41b541.value
    })]
  });
};
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/info.svg";
const config = _0x1a2eff => {
  return {
    ..._0x1a2eff,
    iconPng: myIcon,
    label: "Details",
    position: 1,
    name: "details",
    render: _0x4f6110 => _0x45639c.jsx(DetailsApp, {
      ..._0x4f6110
    })
  };
};
export { config as default };