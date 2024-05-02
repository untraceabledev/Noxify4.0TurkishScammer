import { R as _0x10d66a, j as _0x28e640, k as _0x197b99 } from "./vendor-6c45b22f.js";
import { n as _0x2d931a, d as _0x531fda } from "./index-d5aaa08b.js";
import { d as _0x5b6b9e } from "./dev-data-afd59de4.js";
import { c as _0xf6d75a } from "./config-4d8e163f.js";
import { A as _0x4eca0f } from "./app-container-77eaf0ff.js";
import { I as _0x4476c2 } from "./icon-7f5cdae2.js";
import { T as _0x4c7907 } from "./text-f7ee3e03.js";
import { F as _0x40b464 } from "./input-c6588ceb.js";
import { m as _0x212e75, b as _0x3d9d75 } from "./styles-61014012.js";
import { i as _0x5a4f58 } from "./character-8ebc09ae.js";
import _0x28b970 from "./store-dc12fbaf.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
import "./store-df6117ab.js";
import "./date-1e39c206.js";
import "./translations-7705db3f.js";
import "./notifications-c44d34f0.js";
import "./tooltip-cb871d8a.js";
import "./lib-fc905d4c.js";
import "./format-10690d6f.js";
import "./duration-timer-2aea312f.js";
import "./actions-c0279434.js";
import "./store-779dab40.js";
import "./store-50ddf3e0.js";
import "./store-1436e66f.js";
import "./store-7ddff63f.js";
import "./simple-form-6b6335d8.js";
import "./index-c0da55ad.js";
import "./index-eac3b5ce.js";
import "./index-984d77ed.js";
import "./index-ae383549.js";
const useStyles = _0x212e75({
  nameWrapper: () => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "space-between",
    flexDirection: "row",
    marginBottom: _0x3d9d75.responsiveHeight(8)
  })
});
const DOJ = _0x2e82ab => {
  const [_0x2dd47a, _0x25c706] = _0x10d66a.useState(_0x2e82ab.list);
  const [_0x190498, _0x21f611] = _0x10d66a.useState(_0x2e82ab.status);
  _0x10d66a.useEffect(() => {
    _0x25c706(_0x2e82ab.list);
  }, [_0x2e82ab.list]);
  const _0x4da461 = useStyles();
  const _0x2bfbe0 = [];
  const _0x2ce9c4 = async _0x299a20 => {
    await _0x2d931a("np-ui:setDOJStatus", {
      status: _0x299a20
    });
    _0x21f611(_0x299a20);
    _0x2e82ab.getEntries();
  };
  const _0x1b3a10 = {
    Lawyer: _0x2dd47a.filter(_0x53e224 => _0x53e224.job === "defender"),
    Judge: _0x2dd47a.filter(_0x226d23 => _0x226d23.job === "judge"),
    Clerk: _0x2dd47a.filter(_0x39d35a => _0x39d35a.job === "county_clerk"),
    Mayor: _0x2dd47a.filter(_0x80f3ff => _0x80f3ff.job === "mayor"),
    "Deputy Mayor": _0x2dd47a.filter(_0x520ddc => _0x520ddc.job === "deputy_mayor"),
    "Legal Aid": _0x2dd47a.filter(_0x58edb3 => _0x58edb3.job === "legal_aid")
  };
  return _0x28e640.jsxs(_0x4eca0f, {
    emptyMessage: _0x2dd47a.length === 0,
    primaryActions: _0x2bfbe0,
    search: {
      filter: ["name"],
      list: _0x2e82ab.list,
      onChange: _0x25c706
    },
    children: [_0x5a4f58(["defender", "judge", "county_clerk", "mayor", "deputy_mayor"]) && _0x28e640.jsx("div", {
      children: _0x28e640.jsx("div", {
        style: {
          textAlign: "left",
          marginBottom: 16
        },
        children: _0x28e640.jsx(_0x40b464.Select, {
          i18n: true,
          i18nChildren: true,
          label: "Status",
          value: _0x190498,
          onChange: _0x1830cf => _0x2ce9c4(_0x1830cf),
          items: [{
            id: "Available",
            name: "Available"
          }, {
            id: "In Trial",
            name: "In Trial"
          }, {
            id: "Busy",
            name: "Busy"
          }]
        })
      })
    }), Object.keys(_0x1b3a10).filter(_0x886ee1 => !!_0x1b3a10[_0x886ee1].length).map(_0x305594 => _0x28e640.jsxs("div", {
      style: {
        marginBottom: 8,
        paddingBottom: 8,
        borderBottom: "1px solid white"
      },
      children: [_0x28e640.jsxs(_0x4c7907, {
        i18n: true,
        i18nSource: "phone:doj",
        variant: "body1",
        style: {
          marginBottom: 8
        },
        children: [_0x305594, "(s)"]
      }), _0x1b3a10[_0x305594].map((_0x312c8c, _0x540de4) => _0x28e640.jsxs("div", {
        className: _0x4da461.nameWrapper,
        children: [_0x28e640.jsx(_0x4c7907, {
          variant: "body2",
          children: _0x312c8c.name
        }), _0x28e640.jsx(_0x4c7907, {
          i18n: true,
          i18nSource: "phone:doj:status",
          variant: "body2",
          children: _0x312c8c.status
        }), _0x28e640.jsx("div", {
          onClick: () => _0xf6d75a({
            number: _0x312c8c.phone
          }),
          children: _0x28e640.jsx(_0x4476c2, {
            color: "white",
            size: "lg",
            icon: "phone"
          })
        })]
      }, _0x540de4))]
    }, _0x305594))]
  });
};
const {
  mapStateToProps,
  mapDispatchToProps
} = _0x531fda(_0x28b970);
class Container extends _0x10d66a.Component {
  getEntries = async () => {
    const _0x40022c = await _0x2d931a("np-ui:getDOJData", {}, {
      returnData: _0x5b6b9e.getDOJData()
    });
    this.props.updateState({
      list: _0x40022c.data.list,
      status: _0x40022c.data.status
    });
  };
  componentDidMount() {
    this.getEntries();
  }
  render() {
    return _0x28e640.jsx(DOJ, {
      ...this.props,
      getEntries: this.getEntries
    });
  }
}
const Container$1 = _0x197b99(mapStateToProps, mapDispatchToProps)(Container);
const icon = {
  background: "#4154B6",
  color: "#E0DA14",
  name: "gavel"
};
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/doj.svg";
const config = _0xaeaf08 => {
  return {
    ..._0xaeaf08,
    iconPng: myIcon,
    label: "Department of Justice",
    name: "doj",
    position: 250,
    hidden: () => true,
    render: () => _0x28e640.jsx(Container$1, {})
  };
};
export { config as default, icon };