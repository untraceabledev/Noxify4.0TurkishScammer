import { j as _0x4cbbc5, r as _0x464ca5, A as _0x4260c5, x as _0x13e75e, ag as _0x5adc8c } from "./vendor-6c45b22f.js";
import _0x7c34ab from "./store-e4284424.js";
import { n as _0x3d1fc1, f as _0x4a12a6, u as _0x362862 } from "./index-d5aaa08b.js";
import { d as _0x2cdcee } from "./dev-data-afd59de4.js";
import { I as _0x16f016 } from "./icon-7f5cdae2.js";
import { c as _0x1e354c } from "./misc-13f33aa2.js";
import { p as _0x1ccc52 } from "./format-10690d6f.js";
import { c as _0x1b5324 } from "./config-4d8e163f.js";
import { C as _0x73fcfa } from "./tooltip-cb871d8a.js";
import { g as _0x479cb6 } from "./lib-fc905d4c.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
import "./store-df6117ab.js";
import "./date-1e39c206.js";
import "./translations-7705db3f.js";
import "./notifications-c44d34f0.js";
import "./duration-timer-2aea312f.js";
import "./actions-c0279434.js";
import "./store-779dab40.js";
import "./store-50ddf3e0.js";
import "./store-1436e66f.js";
import "./store-7ddff63f.js";
import "./input-c6588ceb.js";
import "./text-f7ee3e03.js";
import "./styles-61014012.js";
import "./index-ae383549.js";
import "./simple-form-6b6335d8.js";
import "./index-c0da55ad.js";
import "./index-eac3b5ce.js";
import "./index-984d77ed.js";
const fetchYellowPageListings = async () => {
  const _0x566d7a = await _0x3d1fc1("np-ui:getYellowPages", {}, {
    returnData: _0x2cdcee.getYellowPages()
  });
  if (!_0x566d7a.meta.ok) {
    return;
  }
  return _0x4a12a6(_0x2fe6e6 => ({
    ..._0x2fe6e6,
    [_0x7c34ab.key]: {
      ..._0x2fe6e6[_0x7c34ab.key],
      listings: _0x566d7a.data
    }
  }))();
};
const index$5 = "";
const YellowPageInput = _0x5dfe30 => {
  return _0x4cbbc5.jsxs("div", {
    className: "yellow-page-input",
    children: [_0x4cbbc5.jsx("input", {
      placeholder: "Search",
      value: _0x5dfe30.value,
      onChange: _0x30ad3c => _0x5dfe30.onChange(_0x30ad3c.target.value)
    }), _0x4cbbc5.jsx("div", {
      className: "icon",
      children: _0x4cbbc5.jsx(_0x16f016, {
        icon: "search",
        size: "lg"
      })
    })]
  });
};
const SvgSuitcase = _0xe9ae14 => _0x464ca5.createElement("svg", {
  width: 60,
  height: 49,
  viewBox: "0 0 60 49",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ..._0xe9ae14
}, _0x464ca5.createElement("g", {
  id: "Frame 128"
}, _0x464ca5.createElement("path", {
  id: "image 173 (Traced)",
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M24.0361 0.110478C22.557 0.394249 21.1229 1.47207 20.5036 2.76519C20.0531 3.70594 19.9219 4.43861 19.9219 6.01423V7.31559H13.1787C5.61972 7.31559 5.32944 7.33953 3.75011 8.09465C2.59922 8.64489 1.38458 9.80746 0.795244 10.9228C0.060013 12.3142 0.000130451 12.7295 0.000130451 16.4364V19.7413L14.8541 24.5792C23.0237 27.2401 29.8395 29.4172 30 29.4172C30.1605 29.4172 36.9763 27.2401 45.146 24.5792L59.9999 19.7413V16.4364C59.9999 12.7295 59.94 12.3142 59.2048 10.9228C58.6154 9.80746 57.4008 8.64489 56.2499 8.09465C54.6706 7.33953 54.3803 7.31559 46.8213 7.31559H40.0781V6.01423C40.0781 4.43861 39.947 3.70594 39.4964 2.76519C38.8576 1.43119 37.4471 0.395394 35.8721 0.103493C35.1053 -0.0386218 24.7814 -0.0325523 24.0361 0.110478ZM34.9219 6.17043V7.31559H30H25.0781V6.17043V5.02527H30H34.9219V6.17043ZM0.000130451 33.3801C0.000130451 44.2764 -0.0292835 43.8318 0.795244 45.3922C1.38458 46.5075 2.59922 47.6701 3.75011 48.2204C5.48519 49.0499 3.78468 48.9994 30 48.9994C56.2153 48.9994 54.5148 49.0499 56.2499 48.2204C57.4008 47.6701 58.6154 46.5075 59.2048 45.3922C60.0293 43.8318 59.9999 44.2764 59.9999 33.3801C59.9999 27.9884 59.96 23.5769 59.9114 23.5769C59.8628 23.5769 53.4161 25.6725 45.5853 28.2338L31.3477 32.8908H30H28.6524L14.4147 28.2338C6.58393 25.6725 0.137239 23.5769 0.0886066 23.5769C0.039974 23.5769 0.000130451 27.9884 0.000130451 33.3801Z",
  fill: "black",
  fillOpacity: 0.79
})));
const suitcase = "" + new URL("suitcase-d09cb60a.svg", import.meta.url).href + "";
const SvgBg = _0x3c86f8 => _0x464ca5.createElement("svg", {
  width: 337,
  height: 212,
  viewBox: "0 0 337 212",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ..._0x3c86f8
}, _0x464ca5.createElement("path", {
  d: "M-53.0283 23.3103C-53.0283 11.2766 -41.9834 2.27399 -30.1969 4.70065L194.516 50.9656C197.495 51.579 200.579 51.4681 203.506 50.642L358.841 6.81624C370.964 3.39566 383 12.5053 383 25.1024V154.664C383 165.972 373.183 174.777 361.942 173.552L83.7391 143.24C81.5248 142.999 79.2853 143.149 77.1229 143.683L-29.4701 170.025C-41.4493 172.985 -53.0283 163.919 -53.0283 151.58V23.3103Z",
  fill: "#D9BC56"
}), _0x464ca5.createElement("path", {
  d: "M-62 59.1975C-62 47.1638 -50.9551 38.1612 -39.1685 40.5879L185.544 86.8528C188.524 87.4662 191.607 87.3553 194.535 86.5292L349.869 42.7034C361.993 39.2829 374.028 48.3925 374.028 60.9896V190.551C374.028 201.859 364.212 210.664 352.97 209.44L74.7675 179.127C72.5531 178.886 70.3136 179.036 68.1512 179.571L-38.4418 205.912C-50.421 208.873 -62 199.807 -62 187.467V59.1975Z",
  fill: "#CBAF4D"
}), _0x464ca5.createElement("path", {
  d: "M-53.0283 42.1512C-53.0283 30.1174 -41.9834 21.1148 -30.1969 23.5415L194.516 69.8064C197.495 70.4199 200.579 70.3089 203.506 69.4829L358.841 25.6571C370.964 22.2365 383 31.3461 383 43.9432V173.505C383 184.813 373.183 193.618 361.942 192.393L83.7391 162.081C81.5248 161.84 79.2853 161.99 77.1229 162.524L-29.4701 188.866C-41.4493 191.826 -53.0283 182.76 -53.0283 170.421V42.1512Z",
  fill: "url(#paint0_linear_22_10)"
}), _0x464ca5.createElement("defs", null, _0x464ca5.createElement("linearGradient", {
  id: "paint0_linear_22_10",
  x1: 164.986,
  y1: 18.8408,
  x2: 164.986,
  y2: 194.688,
  gradientUnits: "userSpaceOnUse"
}, _0x464ca5.createElement("stop", {
  stopColor: "#F5D76A"
}), _0x464ca5.createElement("stop", {
  offset: 1,
  stopColor: "#D9BC56"
}))));
const bg = "" + new URL("bg-f122e11b.svg", import.meta.url).href + "";
const index$4 = "";
const YellowPagesHeader = () => {
  return _0x4cbbc5.jsxs("div", {
    className: "yellow-pages-header",
    children: [_0x4cbbc5.jsx(SvgSuitcase, {
      className: "icon"
    }), _0x4cbbc5.jsxs("div", {
      className: "info",
      children: [_0x4cbbc5.jsx("h1", {
        children: "Yellow Pages"
      }), _0x4cbbc5.jsx("p", {
        children: "Local services at your fingertips"
      })]
    }), _0x4cbbc5.jsx(SvgBg, {
      className: "header-background"
    })]
  });
};
const index$3 = "";
const YellowPagesItem = ({
  item: _0x46ad9b,
  isMyPost = false
}) => {
  const [_0x3d7c7c, _0x1c1e1f] = _0x464ca5.useState(false);
  const _0x3f7cba = _0x464ca5.useCallback(async () => {
    _0x1c1e1f(true);
    await _0x3d1fc1("np-ui:deleteYellowPagesEntry");
    _0x1c1e1f(false);
    await fetchYellowPageListings();
  }, []);
  return _0x4cbbc5.jsxs("div", {
    className: "item-container",
    children: [_0x4cbbc5.jsx("div", {
      className: "item-main",
      children: _0x4cbbc5.jsxs("div", {
        className: "info",
        children: [_0x4cbbc5.jsxs("h1", {
          children: [_0x46ad9b.character.first_name, " ", _0x46ad9b.character.last_name]
        }), _0x4cbbc5.jsx("p", {
          children: _0x46ad9b.text
        })]
      })
    }), _0x4cbbc5.jsxs("div", {
      className: "item-subinfo",
      children: [_0x4cbbc5.jsx(_0x73fcfa, {
        title: "Call",
        placement: "bottom",
        children: _0x4cbbc5.jsx("button", {
          className: "phone-btn",
          onClick: () => _0x1b5324({
            number: _0x46ad9b.character.number
          }),
          children: _0x4cbbc5.jsx(_0x16f016, {
            icon: "fa fa-phone"
          })
        })
      }), _0x4cbbc5.jsx(_0x73fcfa, {
        title: "Copy number",
        placement: "bottom",
        children: _0x4cbbc5.jsx("div", {
          className: "number",
          onClick: () => _0x1e354c(_0x46ad9b.character.number),
          children: _0x1ccc52(_0x46ad9b.character.number)
        })
      }), isMyPost && _0x4cbbc5.jsx(_0x73fcfa, {
        title: "Delete",
        placement: "bottom",
        children: _0x4cbbc5.jsx("button", {
          className: "delete-btn",
          onClick: _0x3f7cba,
          disabled: _0x3d7c7c,
          children: _0x4cbbc5.jsx(_0x16f016, {
            icon: "fa fa-trash"
          })
        })
      })]
    })]
  });
};
const index$2 = "";
const YellowPageListings = ({
  search: _0x16514a,
  listings: _0x595219
}) => {
  const [_0x5c28ff] = _0x362862("character");
  const _0x54ca14 = _0x317731 => {
    return _0x317731.filter(_0x5a2b6d => {
      const _0x4f672f = _0x5a2b6d.character.first_name + " " + _0x5a2b6d.character.last_name;
      const _0x109393 = _0x4f672f.toLocaleLowerCase().includes(_0x16514a.toLocaleLowerCase());
      const _0x363aec = _0x5a2b6d.text.toLocaleLowerCase().includes(_0x16514a.toLocaleLowerCase());
      return _0x109393 || _0x363aec;
    });
  };
  const _0x4ef8c4 = _0x464ca5.useMemo(() => {
    return _0x595219.filter(_0x154081 => _0x154081.character.number !== _0x5c28ff.number);
  }, [_0x595219, _0x5c28ff]);
  const _0x247369 = _0x464ca5.useMemo(() => {
    return _0x595219.find(_0x471fc9 => _0x471fc9.character.number === _0x5c28ff.number);
  }, [_0x595219, _0x5c28ff]);
  return _0x4cbbc5.jsxs("div", {
    className: "listings",
    children: [_0x247369 && _0x4cbbc5.jsx(YellowPagesItem, {
      item: _0x247369,
      isMyPost: true
    }), _0x54ca14(_0x4ef8c4).map((_0x149470, _0x155809) => _0x4cbbc5.jsx(YellowPagesItem, {
      item: _0x149470
    }, _0x155809))]
  });
};
const index$1 = "";
const YellowPagesNewListing = () => {
  const [_0x3853c0, _0x4ae869] = _0x464ca5.useState("");
  const [_0xfe965e, _0x22e4ea] = _0x464ca5.useState(false);
  const [_0x14db62, _0x33d97e] = _0x362862(_0x7c34ab.key);
  const _0x306103 = () => {
    _0x33d97e({
      showNewAdModal: false
    });
  };
  const _0x5d03a2 = async () => {
    _0x22e4ea(true);
    const _0x2475c3 = _0x479cb6();
    const _0x50fda6 = _0x2475c3 ? _0x2475c3.areaCode + _0x2475c3.number : null;
    if (!_0x50fda6) {
      _0x22e4ea(false);
      return _0x306103();
    }
    await _0x3d1fc1("np-ui:addYellowPagesEntry", {
      phoneNumber: _0x50fda6,
      text: _0x3853c0
    });
    _0x306103();
    await fetchYellowPageListings();
    _0x22e4ea(false);
    _0x4ae869("");
  };
  const _0x117179 = {
    transform: "translateY(0%)"
  };
  const _0x3f5432 = {
    transform: "translateY(200%)"
  };
  return _0x4cbbc5.jsx(_0x4260c5, {
    children: _0x14db62.showNewAdModal && _0x4cbbc5.jsxs(_0x13e75e.div, {
      className: "new-listing",
      initial: _0x3f5432,
      animate: _0x117179,
      exit: _0x3f5432,
      children: [_0x4cbbc5.jsx("h1", {
        children: "New Post"
      }), _0xfe965e ? _0x4cbbc5.jsx("div", {
        className: "loading-container",
        children: _0x4cbbc5.jsx(_0x5adc8c, {
          size: 60,
          style: {
            color: "#B990ED"
          }
        })
      }) : _0x4cbbc5.jsxs(_0x4cbbc5.Fragment, {
        children: [_0x4cbbc5.jsx("textarea", {
          id: "new-listing-content",
          spellCheck: "false",
          value: _0x3853c0,
          onChange: _0x4578b2 => _0x4ae869(_0x4578b2.target.value)
        }), _0x4cbbc5.jsxs("div", {
          className: "new-listing-buttons",
          children: [_0x4cbbc5.jsxs("button", {
            className: "btn add-btn",
            onClick: _0x5d03a2,
            children: ["Submit ", _0x4cbbc5.jsx(_0x16f016, {
              icon: "fas fa-angle-right"
            })]
          }), _0x4cbbc5.jsxs("button", {
            className: "btn cancel-btn",
            onClick: _0x306103,
            children: ["Cancel ", _0x4cbbc5.jsx(_0x16f016, {
              icon: "fas fa-times"
            })]
          })]
        })]
      })]
    })
  });
};
const index = "";
const YellowPages = () => {
  const [_0x1795e9, _0x167845] = _0x362862(_0x7c34ab.key);
  const [_0x354576, _0x28e814] = _0x464ca5.useState("");
  const _0x561906 = () => {
    _0x167845({
      showNewAdModal: !_0x1795e9.showNewAdModal
    });
  };
  _0x464ca5.useEffect(() => {
    fetchYellowPageListings();
  }, []);
  return _0x4cbbc5.jsx("div", {
    className: "app yellow-page-app",
    children: _0x4cbbc5.jsxs(_0x464ca5.Suspense, {
      fallback: _0x4cbbc5.jsx("h1", {
        children: "Loading..."
      }),
      children: [_0x4cbbc5.jsx(YellowPagesHeader, {}), _0x4cbbc5.jsx(YellowPagesNewListing, {}), _0x4cbbc5.jsxs("div", {
        className: "container",
        children: [_0x4cbbc5.jsxs("div", {
          className: "top-section",
          children: [_0x4cbbc5.jsx(YellowPageInput, {
            value: _0x354576,
            onChange: _0x5031fd => _0x28e814(_0x5031fd)
          }), _0x4cbbc5.jsx("button", {
            className: "add-btn",
            onClick: _0x561906,
            children: "+"
          })]
        }), _0x4cbbc5.jsx(YellowPageListings, {
          listings: _0x1795e9.listings,
          search: _0x354576
        })]
      })]
    })
  });
};
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/yellowpages.svg";
const config = _0x1dc945 => {
  return {
    ..._0x1dc945,
    iconPng: myIcon,
    label: "Yellow Pages",
    name: "yellow-pages",
    position: 20,
    render: () => _0x4cbbc5.jsx(YellowPages, {})
  };
};
export { config as default };