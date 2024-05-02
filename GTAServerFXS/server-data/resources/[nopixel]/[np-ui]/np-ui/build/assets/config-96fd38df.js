import { j as _0x1aaef8, f as _0x16438c, r as _0x53a44f, A as _0x43bced, x as _0x335b0a, R as _0x1b3853 } from "./vendor-6c45b22f.js";
import { t as _0x4cc272 } from "./notifications-c44d34f0.js";
import { c as _0x165507 } from "./lib-fc905d4c.js";
import _0x1c1be1 from "./store-8da1623c.js";
import { n as _0x255fd2, f as _0x478c1d, u as _0x1dab99 } from "./index-d5aaa08b.js";
import { d as _0x1cedaf } from "./dev-data-afd59de4.js";
import { I as _0x17d42a } from "./icon-7f5cdae2.js";
import { u as _0x36f969 } from "./useOutsideClick-e98795c9.js";
import "./commonjsHelpers-c5dac66b.js";
import "./tooltip-cb871d8a.js";
import "./translations-7705db3f.js";
import "./format-10690d6f.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
const events = _0x427cbd => {
  _0x427cbd("crypto-receive", ({
    data: _0x5d660b,
    state: _0x5c14eb
  }) => {
    _0x4cc272({
      apps: ["crypto"],
      appName: "crypto",
      icon: icon,
      state: _0x5c14eb,
      title: _0x165507(_0x5d660b.number, _0x5c14eb).name,
      text: _0x5d660b.message
    });
    return _0x5c14eb;
  });
};
const fetchCrypto = async () => {
  const _0x48c0bf = await _0x255fd2("stock-market:getStocks", {}, {
    returnData: _0x1cedaf.getCrypto()
  });
  const _0x49b83c = _0x48c0bf?.data ?? [];
  return _0x478c1d(_0x4976a9 => ({
    ..._0x4976a9,
    [_0x1c1be1.key]: {
      ..._0x4976a9[_0x1c1be1.key],
      stocks: _0x49b83c,
      selectedStock: _0x49b83c.length > 0 ? _0x49b83c[0] : null
    }
  }))();
};
const fetchTransactions = async _0x129a36 => {
  const _0x3d8663 = [{
    id: "1",
    character_id: 69,
    ticker: "NPC",
    amount: 121.878,
    price: 5000,
    created_at: 1700980645
  }, {
    id: "2",
    character_id: 69,
    ticker: "NPC",
    amount: 121.878,
    price: 39,
    created_at: 1700980645
  }, {
    id: "3",
    character_id: 69,
    ticker: "NPC",
    amount: 121.878,
    price: 20000,
    created_at: 1700980645
  }];
  const _0x3333f6 = await _0x255fd2("stock-market:getTransactions", {
    ticker: _0x129a36
  }, {
    returnData: _0x3d8663
  });
  return _0x3333f6.data ?? [];
};
const container$b = "_container_3vki3_1";
const left$1 = "_left_3vki3_16";
const icon$4 = "_icon_3vki3_21";
const label$2 = "_label_3vki3_32";
const ticker = "_ticker_3vki3_43";
const right = "_right_3vki3_48";
const price$1 = "_price_3vki3_48";
const down$1 = "_down_3vki3_63";
const styles$b = {
  container: container$b,
  left: left$1,
  icon: icon$4,
  label: label$2,
  ticker: ticker,
  right: right,
  price: price$1,
  down: down$1
};
const StockItem = _0x1acb41 => {
  const [_0x35442d, _0x3aeef6] = _0x1dab99(_0x1c1be1.key);
  return _0x1aaef8.jsxs("div", {
    className: styles$b.container,
    onClick: () => _0x3aeef6({
      selectedStock: _0x1acb41.info,
      view: "portfolio"
    }),
    children: [_0x1aaef8.jsxs("div", {
      className: styles$b.left,
      children: [_0x1aaef8.jsx("div", {
        className: styles$b.icon,
        children: _0x1aaef8.jsx(_0x17d42a, {
          icon: _0x1acb41.info.icon
        })
      }), _0x1aaef8.jsxs("h1", {
        className: styles$b.label,
        children: [_0x1acb41.info.name, " ", _0x1aaef8.jsx("p", {
          className: styles$b.ticker,
          children: _0x1acb41.info.ticker
        })]
      })]
    }), _0x1aaef8.jsx("div", {
      className: styles$b.right,
      children: _0x1aaef8.jsxs("h1", {
        className: styles$b.price,
        children: ["$", _0x1acb41.info.price.toLocaleString(), _0x1aaef8.jsxs("span", {
          className: _0x16438c({
            [styles$b.down]: _0x1acb41.info.daily_percentage < 0
          }),
          children: [_0x1acb41.info.daily_percentage.toFixed(3), "% (", _0x1acb41.info.market_percentage.toFixed(3), "%)"]
        })]
      })
    })]
  });
};
const container$a = "_container_1lgxn_1";
const search_container = "_search_container_1lgxn_8";
const filter_options = "_filter_options_1lgxn_39";
const filter_item = "_filter_item_1lgxn_45";
const active$1 = "_active_1lgxn_64";
const list$2 = "_list_1lgxn_69";
const styles$a = {
  container: container$a,
  search_container: search_container,
  filter_options: filter_options,
  filter_item: filter_item,
  active: active$1,
  list: list$2
};
const FILTERS = ["Commercial", "Crypto", "ESG"];
const MarketView = () => {
  const [_0x530331] = _0x1dab99(_0x1c1be1.key);
  const [_0x2f8b59, _0x3ab021] = _0x53a44f.useState(null);
  const [_0x4a6b9d, _0x18e9e1] = _0x53a44f.useState("");
  const _0x3239c6 = _0x1fb17d => {
    _0x3ab021(_0x52854d => _0x1fb17d === _0x52854d ? null : _0x1fb17d);
  };
  return _0x1aaef8.jsxs("div", {
    className: styles$a.container,
    children: [_0x1aaef8.jsxs("div", {
      className: styles$a.search_container,
      children: [_0x1aaef8.jsx(_0x17d42a, {
        icon: "search"
      }), _0x1aaef8.jsx("input", {
        placeholder: "Search...",
        value: _0x4a6b9d,
        onChange: _0x3450e4 => _0x18e9e1(_0x3450e4.target.value)
      })]
    }), _0x1aaef8.jsx("div", {
      className: styles$a.filter_options,
      children: FILTERS.map(_0x4421ba => _0x1aaef8.jsx("button", {
        className: _0x16438c(styles$a.filter_item, {
          [styles$a.active]: _0x2f8b59 === _0x4421ba
        }),
        onClick: () => _0x3239c6(_0x4421ba),
        children: _0x4421ba
      }, _0x4421ba))
    }), _0x1aaef8.jsx("div", {
      className: styles$a.list,
      children: _0x530331.stocks.filter(_0x507ab4 => !_0x2f8b59 || _0x507ab4.categories.includes(_0x2f8b59.toLowerCase())).filter(_0x2dcefe => _0x2dcefe.name.toLocaleLowerCase().includes(_0x4a6b9d.toLocaleLowerCase())).map(_0x12905d => _0x1aaef8.jsx(StockItem, {
        info: _0x12905d
      }))
    })]
  });
};
const container$9 = "_container_rygmb_1";
const information$2 = "_information_rygmb_8";
const amount$1 = "_amount_rygmb_18";
const details$2 = "_details_rygmb_29";
const detail_text$2 = "_detail_text_rygmb_34";
const numbers$3 = "_numbers_rygmb_43";
const number$1 = "_number_rygmb_43";
const btn$4 = "_btn_rygmb_75";
const styles$9 = {
  container: container$9,
  information: information$2,
  amount: amount$1,
  details: details$2,
  detail_text: detail_text$2,
  numbers: numbers$3,
  number: number$1,
  btn: btn$4
};
const container$8 = "_container_1tgok_1";
const left = "_left_1tgok_13";
const label$1 = "_label_1tgok_19";
const price = "_price_1tgok_26";
const down = "_down_1tgok_37";
const icon$3 = "_icon_1tgok_40";
const styles$8 = {
  container: container$8,
  left: left,
  label: label$1,
  price: price,
  down: down,
  icon: icon$3
};
const StockDropdownItem = ({
  info: _0x2e7e97,
  onClick: _0x2db17e
}) => {
  const _0x38d091 = _0x2e7e97?.daily_percentage ?? 0;
  return _0x1aaef8.jsxs("div", {
    className: styles$8.container,
    onClick: () => _0x2db17e(_0x2e7e97),
    children: [_0x1aaef8.jsxs("div", {
      className: styles$8.left,
      children: [_0x1aaef8.jsx("h1", {
        className: styles$8.label,
        children: _0x2e7e97?.name ?? "N/A"
      }), _0x1aaef8.jsxs("p", {
        className: styles$8.price,
        children: ["$", _0x2e7e97?.price.toLocaleString() ?? "NA", _0x1aaef8.jsxs("span", {
          className: _0x16438c({
            [styles$8.down]: _0x38d091 < 0
          }),
          children: [_0x38d091, "%"]
        })]
      })]
    }), _0x1aaef8.jsx("div", {
      className: styles$8.icon,
      children: _0x1aaef8.jsx(_0x17d42a, {
        icon: _0x2e7e97?.icon
      })
    })]
  });
};
const container$7 = "_container_1iic2_1";
const dropdown = "_dropdown_1iic2_4";
const styles$7 = {
  container: container$7,
  dropdown: dropdown
};
const StockOptions = _0x372129 => {
  const [_0x5d8f05, _0x2ae079] = _0x1dab99(_0x1c1be1.key);
  const [_0x777852, _0x4905bb] = _0x53a44f.useState(false);
  const _0x4b89d2 = _0x36f969(() => _0x4905bb(false));
  const _0x470166 = {
    opacity: 1
  };
  const _0xcd21c7 = {
    opacity: 0
  };
  return _0x1aaef8.jsx(_0x43bced, {
    children: _0x1aaef8.jsxs("div", {
      className: styles$7.container,
      children: [_0x1aaef8.jsx(StockDropdownItem, {
        info: _0x5d8f05.selectedStock,
        onClick: _0x4888b1 => {
          _0x4905bb(_0x19f540 => !_0x19f540);
        }
      }), _0x777852 && _0x1aaef8.jsx(_0x335b0a.div, {
        className: styles$7.dropdown,
        initial: _0xcd21c7,
        animate: _0x470166,
        exit: _0xcd21c7,
        ref: _0x4b89d2,
        children: _0x5d8f05.stocks.map((_0x39d7ac, _0x347905) => _0x1aaef8.jsx(StockDropdownItem, {
          info: _0x39d7ac,
          onClick: () => {
            if (typeof _0x372129.onChange === "function") {
              _0x372129.onChange(_0x39d7ac);
            }
            _0x2ae079({
              selectedStock: _0x39d7ac
            });
            _0x4905bb(false);
          }
        }, _0x347905))
      })]
    })
  });
};
const numbers$2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0"];
const PurchaseView = () => {
  const [_0xbeec2a] = _0x1dab99(_0x1c1be1.key);
  const [_0x1dbef4, _0x5b10d0] = _0x53a44f.useState("0");
  const [_0x2550b2, _0x146c1e] = _0x53a44f.useState(false);
  const _0x3d5079 = _0x48f7aa => {
    _0x5b10d0(_0x466f67 => {
      if (_0x466f67.includes(".") && _0x48f7aa === ".") {
        return _0x466f67;
      }
      if (_0x1dbef4 === "0" && _0x48f7aa !== ".") {
        return _0x48f7aa;
      } else {
        return _0x466f67 + _0x48f7aa;
      }
    });
  };
  const _0x23553d = () => {
    _0x5b10d0(_0x14af3d => {
      if (_0x14af3d.length === 1) {
        return "0";
      }
      return _0x14af3d.slice(0, -1);
    });
  };
  const _0xd2872f = async () => {
    if (_0x2550b2 || !_0xbeec2a.selectedStock) {
      return;
    }
    _0x146c1e(true);
    const _0x160083 = await _0x255fd2("stock-market:purchaseStock", {
      ticker: _0xbeec2a.selectedStock.ticker,
      amount: parseFloat(_0x1dbef4)
    });
    if (_0x160083.data) {
      fetchCrypto();
    }
    _0x146c1e(false);
  };
  const _0x16a5ff = _0x53a44f.useCallback(() => {
    if (!_0xbeec2a.selectedStock) {
      return "N/A";
    }
    return (parseFloat(_0x1dbef4) / _0xbeec2a.selectedStock.price).toPrecision(6);
  }, [_0xbeec2a.selectedStock, _0x1dbef4]);
  const _0x56da84 = _0x53a44f.useCallback(() => {
    if (!_0xbeec2a.selectedStock) {
      return 0;
    }
    const _0x154ed8 = parseFloat(_0x1dbef4);
    return _0xbeec2a.selectedStock.fee * _0x154ed8;
  }, [_0xbeec2a.selectedStock, _0x1dbef4]);
  const _0x11b430 = _0x53a44f.useMemo(() => {
    if (!_0xbeec2a.selectedStock) {
      return 0;
    }
    return parseFloat(_0x1dbef4) + _0x56da84();
  }, [_0x1dbef4, _0xbeec2a.selectedStock]);
  const _0x31fda7 = _0xbeec2a.selectedStock ? _0xbeec2a.selectedStock.ticker : "N/A";
  return _0x1aaef8.jsxs("div", {
    className: styles$9.container,
    children: [_0x1aaef8.jsxs("div", {
      className: styles$9.information,
      children: [_0x1aaef8.jsx(StockOptions, {}), _0x1aaef8.jsxs("h1", {
        className: styles$9.amount,
        children: ["$", parseFloat(_0x1dbef4).toLocaleString()]
      }), _0x1aaef8.jsxs("div", {
        className: styles$9.details,
        children: [_0x1aaef8.jsxs("p", {
          className: styles$9.detail_text,
          children: ["Fee: ", _0x1aaef8.jsxs("span", {
            children: ["$", _0x56da84()]
          })]
        }), _0x1aaef8.jsxs("p", {
          className: styles$9.detail_text,
          children: ["Total: ", _0x1aaef8.jsxs("span", {
            children: ["$", _0x11b430.toLocaleString()]
          })]
        }), _0x1aaef8.jsxs("p", {
          className: styles$9.detail_text,
          children: ["You'll get:", _0x1aaef8.jsxs("span", {
            children: [_0x16a5ff(), " ", _0x31fda7]
          })]
        })]
      })]
    }), _0x1aaef8.jsxs("div", {
      className: styles$9.numbers,
      children: [numbers$2.map(_0x2c306c => _0x1aaef8.jsx("button", {
        className: styles$9.number,
        onClick: () => _0x3d5079(_0x2c306c),
        children: _0x2c306c
      }, _0x2c306c)), _0x1aaef8.jsx("button", {
        className: styles$9.number,
        onClick: _0x23553d,
        children: _0x1aaef8.jsx(_0x17d42a, {
          icon: "backspace"
        })
      })]
    }), _0x1aaef8.jsx("button", {
      className: styles$9.btn,
      onClick: _0xd2872f,
      children: _0x2550b2 ? "Purchasing..." : "Complete Purchase"
    })]
  });
};
const SvgBuyIcon = _0x1dc4c2 => _0x53a44f.createElement("svg", {
  fill: "#FFFFFF",
  width: "800px",
  height: "800px",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  ..._0x1dc4c2
}, _0x53a44f.createElement("path", {
  d: "M379.141 472.367H215.035c-16.962 0-30.72-13.758-30.72-30.72V71.676c0-16.962 13.758-30.72 30.72-30.72h591.8c16.962 0 30.72 13.758 30.72 30.72v364.851c0 16.962-13.758 30.72-30.72 30.72h-96.768v40.96h96.768c39.583 0 71.68-32.097 71.68-71.68V71.676c0-39.583-32.097-71.68-71.68-71.68h-591.8c-39.583 0-71.68 32.097-71.68 71.68v369.971c0 39.583 32.097 71.68 71.68 71.68h164.106v-40.96z"
}), _0x53a44f.createElement("path", {
  d: "M550.66 165.528c0-23.331-18.909-42.24-42.24-42.24s-42.24 18.909-42.24 42.24c0 23.331 18.909 42.24 42.24 42.24s42.24-18.909 42.24-42.24zm40.96 0c0 45.953-37.247 83.2-83.2 83.2s-83.2-37.247-83.2-83.2 37.247-83.2 83.2-83.2 83.2 37.247 83.2 83.2zm-318.72 160h474.88c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48H272.9c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48zm0 92.16h252.672c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48H272.9c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48zm324.825 95.581c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48H330.942c-11.311 0-20.48 9.169-20.48 20.48v106.26a61.445 61.445 0 006.638 27.787l61.112 120.504a40.922 40.922 0 014.431 18.528v237.189c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V765.868a81.856 81.856 0 00-8.865-37.063L353.63 608.309a20.48 20.48 0 01-2.209-9.261v-85.78h246.303zm40.918 489.788V783.87a51.175 51.175 0 0116.723-37.846l46.466-42.328a81.887 81.887 0 0026.759-60.565V537.772c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48v105.359a40.934 40.934 0 01-13.377 30.28l-46.464 42.327a92.126 92.126 0 00-30.107 68.132v219.187c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48z"
}), _0x53a44f.createElement("path", {
  d: "M625.769 545.158V426.036c0-16.968 13.754-30.72 30.72-30.72 17.396 0 31.15 13.752 31.15 30.72v139.602c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V426.036c0-39.591-32.094-71.68-71.68-71.68-40.016 0-72.11 32.089-72.11 71.68v119.122c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48z"
}));
const PurchaseIcon = "" + new URL("buy-icon-a122abbc.svg", import.meta.url).href + "";
const SvgSellIcon = _0x179233 => _0x53a44f.createElement("svg", {
  fill: "#FFFFFF",
  width: "800px",
  height: "800px",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  ..._0x179233
}, _0x53a44f.createElement("path", {
  d: "M379.141 467.247H225.275c-16.962 0-30.72-13.758-30.72-30.72V71.676c0-16.962 13.758-30.72 30.72-30.72h592.824c16.962 0 30.72 13.758 30.72 30.72v364.851c0 16.962-13.758 30.72-30.72 30.72h-76.288v40.96h76.288c39.583 0 71.68-32.097 71.68-71.68V71.676c0-39.583-32.097-71.68-71.68-71.68H225.275c-39.583 0-71.68 32.097-71.68 71.68v364.851c0 39.583 32.097 71.68 71.68 71.68h153.866v-40.96z"
}), _0x53a44f.createElement("path", {
  d: "M560.9 155.288c0-23.331-18.909-42.24-42.24-42.24s-42.24 18.909-42.24 42.24c0 23.331 18.909 42.24 42.24 42.24s42.24-18.909 42.24-42.24zm40.96 0c0 45.953-37.247 83.2-83.2 83.2s-83.2-37.247-83.2-83.2 37.247-83.2 83.2-83.2 83.2 37.247 83.2 83.2zm-318.72 160h474.88c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48H283.14c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48zm386.123 687.36V874.341a40.952 40.952 0 0117.858-33.817l36.384-24.853a81.929 81.929 0 0035.706-67.64v-79.596c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48v79.596a40.964 40.964 0 01-17.853 33.82l-36.379 24.85a81.908 81.908 0 00-35.716 67.64v128.307c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48zM341.081 654.171v91.423c0 28.832 15.164 55.54 39.919 70.328l43.023 25.685a40.98 40.98 0 0119.96 35.172v125.87c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48v-125.87a81.942 81.942 0 00-39.919-70.338l-43.023-25.685a40.963 40.963 0 01-19.96-35.162v-91.423c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z"
}), _0x53a44f.createElement("path", {
  d: "M759.113 709.211V495.533c0-36.757-29.803-66.56-66.56-66.56h-2.222c-36.757 0-66.56 29.803-66.56 66.56v126.638c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V495.533c0-14.136 11.464-25.6 25.6-25.6h2.222c14.136 0 25.6 11.464 25.6 25.6v213.678c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48z"
}), _0x53a44f.createElement("path", {
  d: "M664.734 576.049V449.411c0-36.757-29.803-66.56-66.56-66.56h-2.222c-36.757 0-66.56 29.803-66.56 66.56v165.55c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48v-165.55c0-14.136 11.464-25.6 25.6-25.6h2.222c14.136 0 25.6 11.464 25.6 25.6v126.638c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48z"
}), _0x53a44f.createElement("path", {
  d: "M570.921 616.966V403.288c0-36.757-29.803-66.56-66.56-66.56h-2.222c-36.757 0-66.56 29.803-66.56 66.56V566.79c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V403.288c0-14.136 11.464-25.6 25.6-25.6h2.222c14.136 0 25.6 11.464 25.6 25.6v213.678c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48z"
}), _0x53a44f.createElement("path", {
  d: "M476.489 612.913V449.411c0-36.757-29.803-66.56-66.56-66.56h-2.222c-36.757 0-66.56 29.803-66.56 66.56v213.678c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V449.411c0-14.136 11.464-25.6 25.6-25.6h2.222c14.136 0 25.6 11.464 25.6 25.6v163.502c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48z"
}));
const SellIcon = "" + new URL("sell-icon-e5a4c384.svg", import.meta.url).href + "";
const SvgExchangeIcon = _0x1099c8 => _0x53a44f.createElement("svg", {
  fill: "#FFFFFF",
  width: "800px",
  height: "800px",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  ..._0x1099c8
}, _0x53a44f.createElement("path", {
  d: "M75.249 184.32h92.805c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48H75.249c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48z"
}), _0x53a44f.createElement("path", {
  d: "M188.534 256.645V163.84c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48v92.805c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48z"
}), _0x53a44f.createElement("path", {
  d: "M178.331 844.362c-87.4-87.4-137.372-205.543-137.372-331.641 0-119.519 44.857-231.97 124.29-318.029 7.672-8.312 7.153-21.268-1.159-28.94s-21.268-7.153-28.94 1.159C48.801 260.463-.001 382.804-.001 512.721c0 137.072 54.364 265.599 149.369 360.604 7.998 7.998 20.965 7.998 28.963 0s7.998-20.965 0-28.963zm769.796-5.999h-92.805c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48h92.805c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48z"
}), _0x53a44f.createElement("path", {
  d: "M834.842 766.038v92.805c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48v-92.805c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z"
}), _0x53a44f.createElement("path", {
  d: "M845.045 178.322c87.4 87.4 137.372 205.543 137.372 331.641 0 119.519-44.857 231.97-124.29 318.029-7.672 8.312-7.153 21.268 1.159 28.94s21.268 7.153 28.94-1.159c86.349-93.552 135.151-215.893 135.151-345.81 0-137.072-54.364-265.599-149.369-360.604-7.998-7.998-20.965-7.998-28.963 0s-7.998 20.965 0 28.963zm-87.918 495.217c16.962 0 30.72-13.758 30.72-30.72V379.047c0-16.968-13.754-30.72-30.72-30.72H268.351c-16.966 0-30.72 13.752-30.72 30.72v263.772c0 16.962 13.758 30.72 30.72 30.72h488.776zm0 40.96H268.351c-39.583 0-71.68-32.097-71.68-71.68V379.047c0-39.591 32.094-71.68 71.68-71.68h488.776c39.586 0 71.68 32.089 71.68 71.68v263.772c0 39.583-32.097 71.68-71.68 71.68z"
}), _0x53a44f.createElement("path", {
  d: "M586.34 510.932c0-40.651-32.952-73.605-73.605-73.605-40.644 0-73.595 32.956-73.595 73.605s32.951 73.605 73.595 73.605c40.653 0 73.605-32.954 73.605-73.605zm40.96 0c0 63.272-51.29 114.565-114.565 114.565-63.267 0-114.555-51.295-114.555-114.565s51.288-114.565 114.555-114.565c63.276 0 114.565 51.293 114.565 114.565z"
}));
const ExchangeIcon = "" + new URL("exchange-icon-7b628d7e.svg", import.meta.url).href + "";
const container$6 = "_container_mwv9p_1";
const actions$1 = "_actions_mwv9p_8";
const action_item = "_action_item_mwv9p_14";
const icon_container = "_icon_container_mwv9p_22";
const icon$2 = "_icon_mwv9p_22";
const label = "_label_mwv9p_35";
const trend_container = "_trend_container_mwv9p_51";
const title$2 = "_title_mwv9p_57";
const list$1 = "_list_mwv9p_74";
const styles$6 = {
  container: container$6,
  actions: actions$1,
  action_item: action_item,
  icon_container: icon_container,
  icon: icon$2,
  label: label,
  trend_container: trend_container,
  title: title$2,
  list: list$1
};
const HomepageView = () => {
  const [_0x59816c, _0x32bcf8] = _0x1dab99(_0x1c1be1.key);
  return _0x1aaef8.jsxs("div", {
    className: styles$6.container,
    children: [_0x1aaef8.jsxs("div", {
      className: styles$6.actions,
      children: [_0x1aaef8.jsx(ActionItem, {
        label: "Purchase",
        icon: PurchaseIcon,
        onClick: () => _0x32bcf8({
          view: "purchase"
        })
      }), _0x1aaef8.jsx(ActionItem, {
        label: "Withdraw",
        icon: SellIcon,
        onClick: () => _0x32bcf8({
          view: "withdraw"
        })
      }), _0x1aaef8.jsx(ActionItem, {
        label: "Transfer",
        icon: ExchangeIcon,
        onClick: () => _0x32bcf8({
          view: "transfer"
        })
      })]
    }), _0x1aaef8.jsxs("div", {
      className: styles$6.trend_container,
      children: [_0x1aaef8.jsxs("h1", {
        className: styles$6.title,
        children: ["Trending ", _0x1aaef8.jsx("span", {
          onClick: () => _0x32bcf8({
            view: "market"
          }),
          children: "View all"
        })]
      }), _0x1aaef8.jsx("div", {
        className: styles$6.list,
        children: _0x59816c.stocks && _0x59816c.stocks.slice(0, 6).map((_0x39c314, _0x123bfd) => _0x1aaef8.jsx(StockItem, {
          info: _0x39c314
        }, _0x123bfd))
      })]
    })]
  });
};
const ActionItem = _0x333dd5 => {
  return _0x1aaef8.jsxs("div", {
    className: styles$6.action_item,
    onClick: _0x333dd5.onClick,
    children: [_0x1aaef8.jsx("div", {
      className: styles$6.icon_container,
      children: _0x1aaef8.jsx("img", {
        src: _0x333dd5.icon,
        className: styles$6.icon
      })
    }), _0x1aaef8.jsx("h1", {
      className: styles$6.label,
      children: _0x333dd5.label
    })]
  });
};
const container$5 = "_container_rygmb_1";
const information$1 = "_information_rygmb_8";
const amount = "_amount_rygmb_18";
const details$1 = "_details_rygmb_29";
const detail_text$1 = "_detail_text_rygmb_34";
const numbers$1 = "_numbers_rygmb_43";
const number = "_number_rygmb_43";
const btn$3 = "_btn_rygmb_75";
const styles$5 = {
  container: container$5,
  information: information$1,
  amount: amount,
  details: details$1,
  detail_text: detail_text$1,
  numbers: numbers$1,
  number: number,
  btn: btn$3
};
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0"];
const WithdrawView = () => {
  const [_0x316ec0] = _0x1dab99(_0x1c1be1.key);
  const [_0x300f0d, _0x524b3b] = _0x53a44f.useState("0");
  const [_0x3fa464, _0x1140a9] = _0x53a44f.useState(false);
  const _0x4d1533 = _0x26d24b => {
    _0x524b3b(_0x7bf6bb => {
      if (_0x7bf6bb.includes(".") && _0x26d24b === ".") {
        return _0x7bf6bb;
      }
      if (_0x300f0d === "0" && _0x26d24b !== ".") {
        return _0x26d24b;
      } else {
        return _0x7bf6bb + _0x26d24b;
      }
    });
  };
  const _0x5b6a02 = () => {
    _0x524b3b(_0xbb2d7f => {
      if (_0xbb2d7f.length === 1) {
        return "0";
      }
      return _0xbb2d7f.slice(0, -1);
    });
  };
  const _0x4e395a = async () => {
    if (_0x3fa464 || !_0x316ec0.selectedStock) {
      return;
    }
    _0x1140a9(true);
    const _0x2211b0 = await _0x255fd2("stock-market:withdrawStock", {
      ticker: _0x316ec0.selectedStock.ticker,
      amount: parseFloat(_0x300f0d)
    });
    if (_0x2211b0.data) {
      fetchCrypto();
    }
    _0x1140a9(false);
  };
  const _0x38a4cc = _0x53a44f.useCallback(() => {
    if (!_0x316ec0.selectedStock) {
      return 0;
    }
    const _0x203e4c = parseFloat(_0x300f0d);
    return _0x316ec0.selectedStock.fee * _0x203e4c;
  }, [_0x316ec0.selectedStock, _0x300f0d]);
  const _0x5cd9a4 = _0x53a44f.useMemo(() => {
    return parseFloat(_0x300f0d) - _0x38a4cc();
  }, [_0x300f0d, _0x38a4cc]);
  const _0x3d5dd6 = _0x316ec0?.selectedStock?.quantity ?? 0;
  const _0x572100 = _0x316ec0?.selectedStock?.price ?? 0;
  return _0x1aaef8.jsxs("div", {
    className: styles$5.container,
    children: [_0x1aaef8.jsxs("div", {
      className: styles$5.information,
      children: [_0x1aaef8.jsx(StockOptions, {}), _0x1aaef8.jsx("h1", {
        className: styles$5.amount,
        children: _0x300f0d
      }), _0x1aaef8.jsxs("div", {
        className: styles$5.details,
        children: [_0x1aaef8.jsxs("p", {
          className: styles$5.detail_text,
          children: ["Available Balance: ", _0x1aaef8.jsxs("span", {
            children: ["$", (_0x3d5dd6 * _0x572100).toLocaleString()]
          })]
        }), _0x1aaef8.jsxs("p", {
          className: styles$5.detail_text,
          children: ["Fee: ", _0x1aaef8.jsxs("span", {
            children: ["$", _0x38a4cc()]
          })]
        }), _0x1aaef8.jsxs("p", {
          className: styles$5.detail_text,
          children: ["You'll get:", _0x1aaef8.jsxs("span", {
            children: ["$", _0x5cd9a4]
          })]
        })]
      })]
    }), _0x1aaef8.jsxs("div", {
      className: styles$5.numbers,
      children: [numbers.map(_0xe45578 => _0x1aaef8.jsx("button", {
        className: styles$5.number,
        onClick: () => _0x4d1533(_0xe45578),
        children: _0xe45578
      }, _0xe45578)), _0x1aaef8.jsx("button", {
        className: styles$5.number,
        onClick: _0x5b6a02,
        children: _0x1aaef8.jsx(_0x17d42a, {
          icon: "backspace"
        })
      })]
    }), _0x1aaef8.jsx("button", {
      className: styles$5.btn,
      onClick: _0x4e395a,
      children: _0x3fa464 ? "Withdrawing..." : "Request Withdraw"
    })]
  });
};
const container$4 = "_container_2z90u_1";
const information = "_information_2z90u_8";
const details = "_details_2z90u_18";
const detail_text = "_detail_text_2z90u_23";
const btn$2 = "_btn_2z90u_32";
const input_container = "_input_container_2z90u_51";
const error = "_error_2z90u_84";
const styles$4 = {
  container: container$4,
  information: information,
  details: details,
  detail_text: detail_text,
  btn: btn$2,
  input_container: input_container,
  error: error
};
const ExchangeView = () => {
  const [_0x5f4788] = _0x1dab99(_0x1c1be1.key);
  const [_0xde7abe, _0x22f9ef] = _0x53a44f.useState(0);
  const [_0x1d1dc6, _0x488a79] = _0x53a44f.useState(0);
  const [_0x13c350, _0x323a07] = _0x53a44f.useState(false);
  const [_0x5b5977, _0x170b88] = _0x53a44f.useState(null);
  const _0x2f1990 = async () => {
    if (_0x13c350 || !_0x5f4788.selectedStock) {
      return;
    }
    if (isNaN(_0x1d1dc6) || isNaN(_0xde7abe) || _0xde7abe < 0 || _0x1d1dc6 < 0) {
      return _0x170b88("Invalid target or stock amount...");
    }
    _0x170b88(null);
    _0x323a07(true);
    const _0x5ca502 = await _0x255fd2("stock-market:transferStock", {
      ticker: _0x5f4788.selectedStock.ticker,
      amount: _0xde7abe,
      target: _0x1d1dc6
    });
    if (_0x5ca502.data) {
      fetchCrypto();
    }
    _0x323a07(false);
  };
  const _0x237e90 = _0x5f4788?.selectedStock?.quantity ?? 0;
  return _0x1aaef8.jsxs("div", {
    className: styles$4.container,
    children: [_0x1aaef8.jsxs("div", {
      className: styles$4.information,
      children: [_0x1aaef8.jsx(StockOptions, {}), _0x1aaef8.jsxs("div", {
        className: styles$4.input_container,
        children: [_0x1aaef8.jsx("label", {
          children: "Stock Amount"
        }), _0x1aaef8.jsx("input", {
          placeholder: "Enter amount..",
          type: "number",
          value: _0xde7abe,
          onChange: _0x4b202d => _0x22f9ef(parseFloat(_0x4b202d.target.value))
        })]
      }), _0x1aaef8.jsxs("div", {
        className: styles$4.input_container,
        children: [_0x1aaef8.jsx("label", {
          children: "Target (State Id)"
        }), _0x1aaef8.jsx("input", {
          placeholder: "Enter target..",
          type: "number",
          value: _0x1d1dc6,
          onChange: _0x23879d => _0x488a79(parseFloat(_0x23879d.target.value))
        })]
      }), _0x1aaef8.jsxs("div", {
        className: styles$4.details,
        children: [_0x1aaef8.jsxs("p", {
          className: styles$4.detail_text,
          children: ["Available Balance: ", _0x1aaef8.jsx("span", {
            children: _0x237e90.toPrecision(6)
          })]
        }), _0x1aaef8.jsxs("p", {
          className: styles$4.detail_text,
          children: ["Total: ", _0x1aaef8.jsx("span", {
            children: _0xde7abe.toPrecision(6)
          })]
        })]
      }), _0x5b5977 && _0x1aaef8.jsx("p", {
        className: styles$4.error,
        children: _0x5b5977
      })]
    }), _0x1aaef8.jsx("button", {
      className: styles$4.btn,
      onClick: _0x2f1990,
      children: _0x13c350 ? "Transfering..." : "Finalize Transfer"
    })]
  });
};
const container$3 = "_container_1kipn_1";
const overview = "_overview_1kipn_8";
const type = "_type_1kipn_19";
const balance = "_balance_1kipn_27";
const actions = "_actions_1kipn_34";
const btn$1 = "_btn_1kipn_39";
const transactions_container = "_transactions_container_1kipn_65";
const title$1 = "_title_1kipn_71";
const list = "_list_1kipn_88";
const transaction_item = "_transaction_item_1kipn_93";
const styles$3 = {
  container: container$3,
  overview: overview,
  type: type,
  balance: balance,
  actions: actions,
  btn: btn$1,
  transactions_container: transactions_container,
  title: title$1,
  list: list,
  transaction_item: transaction_item
};
const PortfolioView = () => {
  const [_0x21d1fb, _0x5dc6dc] = _0x1dab99(_0x1c1be1.key);
  const [_0x3564c7, _0x1a9255] = _0x53a44f.useState([]);
  const _0x4a09c1 = _0x53a44f.useCallback(async () => {
    if (!_0x21d1fb.selectedStock) {
      return [];
    }
    const _0x285633 = await fetchTransactions(_0x21d1fb.selectedStock.ticker);
    _0x1a9255(_0x285633);
  }, [_0x21d1fb.selectedStock]);
  _0x53a44f.useEffect(() => {
    _0x4a09c1();
  }, [_0x21d1fb.selectedStock]);
  return _0x1aaef8.jsxs("div", {
    className: styles$3.container,
    children: [_0x1aaef8.jsxs("div", {
      className: styles$3.overview,
      children: [_0x1aaef8.jsx(StockOptions, {}), _0x21d1fb.selectedStock && _0x1aaef8.jsxs("h1", {
        className: styles$3.balance,
        children: ["$", (_0x21d1fb.selectedStock.quantity * _0x21d1fb.selectedStock.price).toLocaleString(), _0x1aaef8.jsxs("p", {
          className: styles$3.type,
          children: [_0x21d1fb.selectedStock.quantity, " ", _0x21d1fb.selectedStock.ticker]
        })]
      }), _0x1aaef8.jsxs("div", {
        className: styles$3.actions,
        children: [_0x1aaef8.jsx("button", {
          className: styles$3.btn,
          onClick: () => _0x5dc6dc({
            view: "purchase"
          }),
          children: "Purchase"
        }), _0x1aaef8.jsx("button", {
          className: styles$3.btn,
          onClick: () => _0x5dc6dc({
            view: "withdraw"
          }),
          children: "Sell"
        })]
      })]
    }), _0x1aaef8.jsxs("div", {
      className: styles$3.transactions_container,
      children: [_0x1aaef8.jsx("h1", {
        className: styles$3.title,
        children: "Transactions"
      }), _0x1aaef8.jsxs("div", {
        className: styles$3.list,
        children: [_0x1aaef8.jsx(TransactionItem, {
          amount: "Amount",
          price: "Price",
          date: "Date"
        }), _0x3564c7.map((_0x30d629, _0x388fbc) => _0x1aaef8.jsx(TransactionItem, {
          amount: "" + _0x30d629.amount,
          price: "$" + _0x30d629.price.toLocaleString(),
          date: "" + new Date(_0x30d629.created_at * 1000).toLocaleDateString()
        }, _0x388fbc))]
      })]
    })]
  });
};
const TransactionItem = _0x18e7be => {
  return _0x1aaef8.jsxs("div", {
    className: styles$3.transaction_item,
    children: [_0x1aaef8.jsx("p", {
      children: _0x18e7be.amount
    }), _0x1aaef8.jsx("p", {
      children: _0x18e7be.price
    }), _0x1aaef8.jsx("p", {
      children: _0x18e7be.date
    })]
  });
};
const SvgLogo = _0x1ccb1f => _0x53a44f.createElement("svg", {
  width: 353,
  height: 128,
  viewBox: "0 0 353 128",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ..._0x1ccb1f
}, _0x53a44f.createElement("path", {
  d: "M0 126.297L20.6744 1.70342H54.4831L38.43 99.0418H88.7783L84.1569 126.297H0Z",
  fill: "white"
}), _0x53a44f.createElement("path", {
  d: "M222.006 48.4259H188.198C188.441 45.5463 188.279 42.9506 187.711 40.6388C187.144 38.327 186.171 36.3397 184.793 34.6768C183.414 32.9734 181.61 31.6755 179.381 30.7833C177.151 29.891 174.496 29.4449 171.415 29.4449C165.496 29.4449 160.206 30.9252 155.544 33.8859C150.883 36.8061 147.011 41.0038 143.93 46.4791C140.849 51.9138 138.66 58.403 137.363 65.9468C136.228 73.2472 136.187 79.3105 137.241 84.1369C138.336 88.9632 140.464 92.5729 143.626 94.9658C146.829 97.3587 150.984 98.5551 156.092 98.5551C159.497 98.5551 162.618 98.1496 165.456 97.3384C168.334 96.5273 170.888 95.3714 173.118 93.8707C175.388 92.3295 177.313 90.5044 178.894 88.3954C180.516 86.2459 181.752 83.8733 182.604 81.2776H216.655C215.358 86.5501 213.048 91.9442 209.723 97.4601C206.399 102.935 202.102 107.985 196.832 112.608C191.562 117.191 185.36 120.902 178.225 123.741C171.091 126.58 163.064 128 154.146 128C142.471 128 132.397 125.445 123.925 120.335C115.493 115.224 109.372 107.762 105.561 97.9468C101.791 88.1318 101.041 76.1673 103.311 62.0532C105.581 48.4259 110.061 37.0089 116.749 27.8023C123.438 18.5957 131.566 11.6603 141.133 6.9962C150.7 2.33207 160.875 0 171.658 0C179.806 0 187.103 1.07478 193.549 3.22433C200.035 5.37389 205.487 8.51711 209.906 12.654C214.365 16.7503 217.649 21.7997 219.757 27.8023C221.865 33.8048 222.615 40.6793 222.006 48.4259Z",
  fill: "white"
}), _0x53a44f.createElement("path", {
  d: "M353 1.70342L332.326 126.297H304.111L270.059 60.8365H269.33L258.384 126.297H224.576L245.25 1.70342H273.951L307.516 66.9202H308.489L319.191 1.70342H353Z",
  fill: "white"
}));
const Logo = "" + new URL("logo-20926a19.svg", import.meta.url).href + "";
const container$2 = "_container_1otez_1";
const logo = "_logo_1otez_6";
const icon$1 = "_icon_1otez_9";
const title = "_title_1otez_18";
const styles$2 = {
  container: container$2,
  logo: logo,
  icon: icon$1,
  title: title
};
const Header = () => {
  const [_0x40fa47, _0x4bd30d] = _0x1dab99(_0x1c1be1.key);
  const _0x375b89 = _0x53a44f.useMemo(() => _0x40fa47.view === "homepage", [_0x40fa47.view]);
  const _0xdd8793 = _0x53a44f.useMemo(() => APP_VIEWS.find(_0x2e2e4f => _0x2e2e4f.view === _0x40fa47.view), [_0x40fa47.view]);
  return _0x1aaef8.jsxs("div", {
    className: styles$2.container,
    children: [_0x375b89 && _0x1aaef8.jsxs(_0x1b3853.Fragment, {
      children: [_0x1aaef8.jsx("img", {
        src: Logo,
        className: styles$2.logo
      }), _0x1aaef8.jsx(_0x17d42a, {
        icon: "bell",
        className: styles$2.icon
      })]
    }), !_0x375b89 && _0x1aaef8.jsxs(_0x1b3853.Fragment, {
      children: [_0x1aaef8.jsx("div", {
        onClick: () => _0x4bd30d({
          view: "homepage"
        }),
        children: _0x1aaef8.jsx(_0x17d42a, {
          icon: "angle-left",
          className: styles$2.icon
        })
      }), _0x1aaef8.jsx("p", {
        className: styles$2.title,
        children: _0xdd8793.label
      }), _0x1aaef8.jsx(_0x17d42a, {
        icon: "bell",
        className: styles$2.icon
      })]
    })]
  });
};
const container$1 = "_container_9gl2j_1";
const btn = "_btn_9gl2j_16";
const active = "_active_9gl2j_25";
const styles$1 = {
  container: container$1,
  btn: btn,
  active: active
};
const Navigation = () => {
  const [_0x2bf421, _0x5a1fd4] = _0x1dab99(_0x1c1be1.key);
  return _0x1aaef8.jsx("div", {
    className: styles$1.container,
    children: APP_VIEWS.filter(_0x9456ff => !_0x9456ff.hidden).map((_0x3b56fa, _0x1c89c0) => _0x1aaef8.jsx("div", {
      onClick: () => _0x5a1fd4({
        view: _0x3b56fa.view
      }),
      children: _0x1aaef8.jsx(_0x17d42a, {
        icon: _0x3b56fa.icon,
        className: _0x16438c(styles$1.btn, {
          [styles$1.active]: _0x2bf421.view === _0x3b56fa.view
        })
      }, _0x3b56fa.label)
    }, "view-" + _0x3b56fa.view))
  });
};
const container = "_container_12hme_1";
const inner = "_inner_12hme_8";
const styles = {
  container: container,
  inner: inner
};
const CryptoApp = () => {
  const [_0x32ab28] = _0x1dab99(_0x1c1be1.key);
  _0x53a44f.useEffect(() => {
    fetchCrypto();
  }, []);
  return _0x1aaef8.jsxs("div", {
    className: styles.container,
    children: [_0x1aaef8.jsxs("div", {
      className: styles.inner,
      children: [_0x1aaef8.jsx(Header, {}), _0x32ab28.view === "homepage" && _0x1aaef8.jsx(HomepageView, {}), _0x32ab28.view === "market" && _0x1aaef8.jsx(MarketView, {}), _0x32ab28.view === "purchase" && _0x1aaef8.jsx(PurchaseView, {}), _0x32ab28.view === "withdraw" && _0x1aaef8.jsx(WithdrawView, {}), _0x32ab28.view === "transfer" && _0x1aaef8.jsx(ExchangeView, {}), _0x32ab28.view === "portfolio" && _0x1aaef8.jsx(PortfolioView, {})]
    }), _0x1aaef8.jsx(Navigation, {})]
  });
};
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/crypto.svg";
const icon = {
  background: "#e53935",
  color: "white",
  name: "wallet"
};
const APP_VIEWS = [{
  icon: "home",
  label: "Home",
  view: "homepage"
}, {
  icon: "chart-bar",
  label: "Portfolio",
  view: "portfolio"
}, {
  icon: "coins",
  label: "Market",
  view: "market"
}, {
  icon: "cog",
  label: "Settings",
  view: "settings",
  hidden: true
}, {
  icon: "cog",
  label: "Purchase",
  view: "purchase",
  hidden: true
}, {
  icon: "cog",
  label: "Withdraw",
  view: "withdraw",
  hidden: true
}, {
  icon: "cog",
  label: "Transfer",
  view: "transfer",
  hidden: true
}];
const config = _0x41e5fe => {
  return {
    ..._0x41e5fe,
    events: () => events,
    iconPng: myIcon,
    label: "Stocks",
    name: "crypto",
    position: 55,
    render: () => _0x1aaef8.jsx(CryptoApp, {})
  };
};
export { APP_VIEWS, config as default, icon };