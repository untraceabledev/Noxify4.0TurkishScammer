import { j as _0x481e3e, R as _0x71f49b, k as _0x2daf00 } from "./vendor-6c45b22f.js";
import { n as _0x29ba35, d as _0x100699, i as _0x4a2869 } from "./index-d5aaa08b.js";
import { g as _0x5e29b6, l as _0x3edf5c, a as _0x479b7f, i as _0x3f9887, b as _0x467240, e as _0x4f1239, w as _0x445aa4 } from "./game-7f8fe59d.js";
import { d as _0x5a8d26 } from "./dev-data-afd59de4.js";
import { b as _0x590f11, c as _0x23d50c, m as _0x294689, a as _0x5432de } from "./actions-c0279434.js";
import { A as _0xd8059a } from "./app-container-77eaf0ff.js";
import { F as _0x2a7dd2 } from "./input-c6588ceb.js";
import { P as _0x3bc2a4 } from "./paper-22e478e9.js";
import { S as _0x166f14 } from "./simple-form-6b6335d8.js";
import { T as _0x29709c } from "./text-f7ee3e03.js";
import { m as _0x146bea } from "./format-10690d6f.js";
import _0x1ff7ba from "./store-84c2d143.js";
import { t as _0x5987fd } from "./notifications-c44d34f0.js";
import { D as _0x5b6dfd } from "./duration-timer-2aea312f.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
import "./store-6adab5c7.js";
import "./store-779dab40.js";
import "./store-50ddf3e0.js";
import "./icon-7f5cdae2.js";
import "./tooltip-cb871d8a.js";
import "./translations-7705db3f.js";
import "./styles-61014012.js";
import "./index-ae383549.js";
const ContainerItem = ({
  model: _0x3f68bc,
  ..._0x22c684
}) => {
  const _0x5323a4 = [];
  if (_0x3f68bc.current_stock !== 0) {
    _0x5323a4.push({
      icon: "car",
      onClick: async () => {
        _0x590f11();
        const _0x469057 = await _0x29ba35("np-ui:showroomTestDrive", {
          model: _0x3f68bc.model,
          location: _0x5e29b6()
        });
        if (!_0x469057.meta.ok) {
          _0x23d50c(_0x469057.meta.message, true);
          return;
        }
        _0x294689();
      },
      title: "Test Drive"
    });
    const _0x461417 = [{
      id: "1",
      name: "1"
    }, {
      id: "2",
      name: "2"
    }, {
      id: "3",
      name: "3"
    }, {
      id: "4",
      name: "4"
    }, {
      id: "5",
      name: "5"
    }];
    if (_0x3edf5c(["pdm", "tuner"])) {
      _0x461417.push({
        id: "6",
        name: "6"
      });
      _0x461417.push({
        id: "7",
        name: "7"
      });
    }
    _0x5323a4.push({
      icon: "eye",
      onClick: () => _0x5432de(_0x481e3e.jsx(_0x166f14, {
        defaultValues: {
          idx: "1"
        },
        elements: [{
          name: "idx",
          render: ({
            onChange: _0xaeb029,
            value: _0x4859ca
          }) => _0x481e3e.jsx(_0x2a7dd2.Select, {
            i18n: true,
            items: _0x461417,
            label: "Position",
            onChange: _0xaeb029,
            value: _0x4859ca
          })
        }],
        onCancel: () => _0x294689(false),
        onSubmit: ({
          idx: _0x417479
        }) => {
          _0x294689();
          _0x29ba35("np-ui:showroomDisplayCar", {
            index: parseInt(_0x417479, 10),
            model: _0x3f68bc.model
          });
        }
      })),
      title: "Display"
    });
  } else {
    _0x5323a4.push({
      icon: "times-circle",
      onClick: () => {},
      title: "Out of Stock"
    });
  }
  return _0x481e3e.jsx(_0x3bc2a4, {
    actions: _0x5323a4,
    children: _0x481e3e.jsx(_0x3bc2a4.Details, {
      description: _0x481e3e.jsxs("div", {
        className: "flex flex-centered flex-space-between",
        children: [_0x481e3e.jsx(_0x29709c, {
          variant: "body1",
          children: _0x3f68bc.group || "Unknown"
        }), _0x481e3e.jsxs(_0x29709c, {
          variant: "body1",
          children: [_0x146bea(_0x3f68bc.retail_price), " (", _0x3f68bc.current_stock < 0 ? "99" : _0x3f68bc.current_stock, ")"]
        })]
      }),
      title: _0x481e3e.jsxs("div", {
        className: "flex flex-centered flex-space-between",
        children: [_0x481e3e.jsx(_0x29709c, {
          variant: "body1",
          children: _0x3f68bc.brand || ""
        }), _0x481e3e.jsx(_0x29709c, {
          variant: "body1",
          children: _0x3f68bc.name
        })]
      })
    })
  });
};
const Container$2 = _0x3043bb => {
  const [_0x2dd364, _0x4d2b42] = _0x71f49b.useState(_0x3043bb.cars);
  _0x71f49b.useEffect(() => {
    _0x4d2b42(_0x3043bb.cars);
  }, [_0x3043bb.cars]);
  const _0x141d3b = [];
  const _0xbaf906 = _0x479b7f();
  const _0x7b0e2d = _0x2dd364.filter(_0x25d5cc => !!_0x25d5cc.active && _0x25d5cc[_0x5e29b6()]);
  if (_0xbaf906) {
    const _0x153f58 = _0x7b0e2d.find(_0x47dacf => _0x47dacf.hash === _0xbaf906);
    _0x141d3b.push({
      icon: "car",
      title: "Return Car",
      onClick: () => _0x29ba35("np-ui:showroomTestDriveReturn")
    });
    _0x141d3b.push({
      icon: "spray-can",
      title: "Save Preset",
      onClick: async () => {
        _0x590f11();
        const _0x4c69e0 = await _0x29ba35("np-ui:showroomTestDriveSavePreset", {});
        if (!_0x4c69e0.meta.ok) {
          _0x23d50c(_0x4c69e0.meta.message);
          return;
        }
        _0x294689();
      }
    });
    _0x141d3b.push({
      icon: "dollar-sign",
      title: "Sell Car",
      onClick: () => _0x5432de(_0x481e3e.jsxs("div", {
        children: [_0x481e3e.jsxs("div", {
          style: {
            marginBottom: 16
          },
          children: [_0x481e3e.jsxs(_0x29709c, {
            i18n: "Min",
            i18nSource: "ui:text:phone-apps-showroom",
            variant: "body2",
            children: ["Min: ", _0x146bea(_0x153f58.import_price)]
          }), _0x481e3e.jsxs(_0x29709c, {
            i18n: "Retail",
            i18nSource: "ui:text:phone-apps-showroom",
            variant: "body2",
            children: ["Retail: ", _0x146bea(_0x153f58.retail_price)]
          })]
        }), _0x481e3e.jsx(_0x166f14, {
          elements: [{
            name: "cityId",
            render: ({
              onChange: _0x3ee121,
              value: _0x5cef25
            }) => _0x481e3e.jsx(_0x2a7dd2.CityID, {
              onChange: _0x3ee121,
              value: _0x5cef25
            }),
            validate: ["number", "State ID"]
          }, {
            name: "price",
            render: ({
              onChange: _0x389e24,
              value: _0xeec1ab
            }) => _0x481e3e.jsx(_0x2a7dd2.Currency, {
              onChange: _0x389e24,
              value: _0xeec1ab
            }),
            validate: {
              fn: _0x4b7c7d => _0x153f58.import_price < Number(_0x4b7c7d),
              message: "Price too low."
            }
          }],
          onCancel: () => _0x294689(false),
          onSubmit: async ({
            cityId: _0x366184,
            price: _0x1f7fda
          }) => {
            _0x590f11();
            const _0x1166bf = await _0x29ba35("np-ui:showroomSellCar", {
              state_id: Number(_0x366184),
              price: Number(_0x1f7fda)
            });
            if (!_0x1166bf.meta.ok) {
              _0x23d50c(_0x1166bf.meta.message);
              return;
            }
            _0x294689();
          }
        })]
      }))
    });
  }
  return _0x481e3e.jsx(_0xd8059a, {
    heading: "Showroom",
    primaryActions: _0x141d3b,
    search: {
      filter: ["name", "brand", "group", "model"],
      list: _0x3043bb.cars,
      onChange: _0x4d2b42
    },
    children: _0x7b0e2d.map((_0x5aad06, _0x38d43f) => _0x481e3e.jsx(ContainerItem, {
      ..._0x3043bb,
      model: _0x5aad06
    }, _0x38d43f))
  });
};
const {
  mapStateToProps,
  mapDispatchToProps
} = _0x100699(_0x1ff7ba);
class Container extends _0x71f49b.Component {
  async componentDidMount() {
    const _0xcd87ed = (await _0x29ba35("np-ui:showroomGetCarConfig", {}, {
      returnData: _0x5a8d26.showroomGetCarConfig()
    })).data;
    const _0x381eb4 = _0xcd87ed.filter(_0x228be8 => !_0x228be8.owner_only || _0x3f9887(_0x5e29b6()) || _0x467240(_0x5e29b6()));
    this.props.updateState({
      cars: _0x381eb4
    });
  }
  render() {
    if (this.props.cars.length === 0) {
      return null;
    }
    return _0x481e3e.jsx(Container$2, {
      ...this.props
    });
  }
}
const Container$1 = _0x2daf00(mapStateToProps, mapDispatchToProps)(Container);
let id = 0;
const getId = (_0x2789ef = false) => {
  if (_0x2789ef) {
    id = id + 1;
  }
  return id;
};
const events = _0x634e81 => {
  _0x634e81("vehicle-purchase", ({
    data: _0x2f2fb4,
    state: _0x1427bd
  }) => {
    _0x5987fd({
      apps: [],
      icon: {
        name: "car",
        color: "white"
      },
      id: getId(true),
      onAccept: async () => {
        setTimeout(async () => {
          const _0x219bcb = await _0x29ba35(_0x2f2fb4._data.nuiCallback ? _0x2f2fb4._data.nuiCallback : "np-ui:showroomPurchaseCurrentVehicle", {
            price: _0x2f2fb4.price,
            tax: _0x2f2fb4.tax,
            character: _0x1427bd.character,
            _data: _0x2f2fb4._data
          });
          _0x5987fd({
            apps: [],
            icon: {
              name: "car",
              color: "white"
            },
            id: getId(),
            state: _0x1427bd,
            text: _0x219bcb.meta.ok ? "Vehicle " + (_0x2f2fb4._data.title === "Sell" ? "Sold" : "Purchased") + "!" : _0x219bcb.meta.message,
            title: (_0x2f2fb4._data.title === "Sell" ? "Sell" : "Purchase") + " vehicle",
            timeout: 2500
          });
        });
      },
      onAcceptOptions: {
        onAccept: null,
        onReject: null,
        dismiss: false,
        blockDismissOnClick: true,
        id: getId(),
        text: (_0x2f2fb4._data.title === "Sell" ? "Selling" : "Purchasing") + "...",
        timeout: -1
      },
      onReject: () => {},
      state: _0x1427bd,
      timeout: 30000,
      title: (_0x2f2fb4._data.title === "Sell" ? "Sell" : "Purchase") + " vehicle",
      text: _0x481e3e.jsx(_0x5b6dfd, {
        countdown: true,
        extra: _0x146bea(_0x2f2fb4.price + _0x2f2fb4.tax) + " incl. tax",
        startTime: 30
      })
    });
    return {
      ..._0x1427bd
    };
  });
};
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/showrooms.svg";
const config = _0x113e95 => {
  return {
    ..._0x113e95,
    events: () => events,
    hidden: () => !_0x4a2869() && (!_0x3edf5c(["pdm", "tuner", "fastlane"]) || !_0x4f1239(_0x5e29b6()) || !_0x445aa4(_0x5e29b6(), [1, 2, 3])),
    iconPng: myIcon,
    label: () => "Showroom Manager",
    name: "showroom-manager",
    position: 249,
    render: () => _0x481e3e.jsx(Container$1, {})
  };
};
export { config as default };