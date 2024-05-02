import { r as _0x534ba5, j as _0x5d6740 } from "./vendor-6c45b22f.js";
import _0x4267c1 from "./store-7a63ff69.js";
import { n as _0x1b2a9c, u as _0x5e52ca } from "./index-d5aaa08b.js";
import { d as _0x238cac } from "./dev-data-afd59de4.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
const getMetroSchedule = async () => {
  const _0x45ce16 = {
    lineId: "metro"
  };
  const _0x383db6 = await _0x1b2a9c("np-ui:trains:getMetroSchedule", _0x45ce16, {
    returnData: _0x238cac.getMetroSchedule()
  });
  let _0xfbe981 = _0x383db6.data;
  if (!_0x383db6.meta.ok) {
    console.error(_0x383db6.meta.message);
    return [];
  }
  return _0xfbe981;
};
const subscribeToMetroSchedule = async () => {
  const _0x2229d9 = {
    lineId: "metro"
  };
  const _0x96a4a8 = await _0x1b2a9c("np-ui:trains:subscribeToSchedule", _0x2229d9, {
    returnData: undefined
  });
  return _0x96a4a8.meta.ok;
};
const unsubscribeFromMetroSchedule = async () => {
  const _0x559a7f = {
    lineId: "metro"
  };
  const _0x4d7aa3 = await _0x1b2a9c("np-ui:trains:unsubscribeFromSchedule", _0x559a7f, {
    returnData: undefined
  });
  return _0x4d7aa3.meta.ok;
};
const index$4 = "";
const index$3 = "";
const SvgLogo = _0x235fc8 => _0x534ba5.createElement("svg", {
  width: 30,
  height: 36,
  viewBox: "0 0 30 36",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ..._0x235fc8
}, _0x534ba5.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M8.50881 0.0765573C7.50434 0.158271 6.35031 0.465395 5.37672 0.910057C2.49647 2.22558 0.486479 4.89541 0.090428 7.93156C0.033323 8.36973 7.76918e-05 12.0711 7.76918e-05 18.0008C7.76918e-05 28.5304 -0.0208869 28.1487 0.625952 29.4158C0.914371 29.9809 1.142 30.2761 1.70209 30.8112C2.11858 31.2093 2.61901 31.5921 2.91208 31.7371L3.41181 31.9842L2.80138 32.5894C2.10901 33.2759 1.92989 33.6117 1.92989 34.2232C1.92989 35.4748 3.32594 36.351 4.54181 35.8626C4.74672 35.7803 5.50303 35.1236 6.58127 34.0917L8.29512 32.4516H15H21.7049L23.4187 34.0917C25.2324 35.8273 25.4778 35.9947 26.2033 35.9915C27.2431 35.987 28.0701 35.1846 28.0701 34.1803C28.0701 33.613 27.8789 33.2638 27.1986 32.5894L26.5882 31.9842L27.0879 31.7371C27.381 31.5921 27.8814 31.2093 28.2979 30.8112C28.858 30.2761 29.0856 29.9809 29.374 29.4158C30.0209 28.1487 29.9999 28.5304 29.9999 18.0008C29.9999 12.0711 29.9667 8.36973 29.9096 7.93156C29.6618 6.0319 28.7882 4.26699 27.3908 2.84294C26.6103 2.04756 25.8281 1.49378 24.7807 0.994976C23.6426 0.453083 22.5819 0.16915 21.3196 0.068546C20.1163 -0.0273351 9.70643 -0.0207574 8.50881 0.0765573ZM22.116 5.77335C23.092 6.21793 23.7399 6.89331 24.1099 7.85204C24.2934 8.32757 24.2982 8.44959 24.2982 12.6345C24.2982 16.8193 24.2934 16.9414 24.1099 17.4169C23.6613 18.5791 22.7614 19.3728 21.5351 19.6878C21.1894 19.7766 19.8045 19.8006 14.994 19.8013C9.63748 19.8023 8.83328 19.7857 8.41512 19.6666C7.15987 19.3088 6.33759 18.5761 5.89014 17.4169C5.70663 16.9414 5.7018 16.8193 5.7018 12.6345C5.7018 8.44959 5.70663 8.32757 5.89014 7.85204C6.3304 6.71142 7.33653 5.82201 8.48653 5.5568C8.66916 5.51463 11.6484 5.48706 15.1754 5.49481L21.5351 5.50873L22.116 5.77335ZM8.47161 23.7229C9.44266 24.27 9.65152 25.5729 8.89679 26.3761C8.49389 26.8047 8.106 26.9703 7.50434 26.9703C6.44022 26.9703 5.7018 26.26 5.7018 25.2366C5.7018 24.6805 5.85856 24.3197 6.26434 23.9415C6.85715 23.3892 7.72644 23.3031 8.47161 23.7229ZM23.0106 23.5189C23.4149 23.6268 23.965 24.086 24.1576 24.4762C24.3521 24.8702 24.3391 25.6353 24.1313 26.0249C23.8 26.6458 23.2388 26.9703 22.4957 26.9703C21.894 26.9703 21.5061 26.8047 21.1032 26.3761C19.8842 25.0789 21.2409 23.0465 23.0106 23.5189Z",
  fill: "#8F92AC",
  fillOpacity: 0.15
}));
const logo = "" + new URL("logo-9bbd501d.svg", import.meta.url).href + "";
const MetroHeader = () => {
  return _0x5d6740.jsxs("div", {
    className: "metro-header",
    children: [_0x5d6740.jsx(SvgLogo, {
      className: "logo"
    }), _0x5d6740.jsxs("div", {
      className: "title-area",
      children: [_0x5d6740.jsx("h1", {
        className: "title",
        children: "Los Santos Transit"
      }), _0x5d6740.jsx("p", {
        className: "subtitle",
        children: "Metropolitan"
      })]
    })]
  });
};
const index$2 = "";
const SvgSearch = _0x13945b => _0x534ba5.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 16,
  height: 16,
  viewBox: "0 0 16 16",
  fill: "none",
  ..._0x13945b
}, _0x534ba5.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M5.71935 0.0294615C2.4687 0.398402 0 3.16329 0 6.43504C0 9.98502 2.88393 12.8727 6.43158 12.8751C7.7731 12.876 9.15137 12.4342 10.1851 11.6719L10.3848 11.5247L12.5604 13.6975C13.7569 14.8925 14.7839 15.8944 14.8426 15.9238C15.1327 16.0693 15.5286 16.0011 15.7648 15.7647C16.0011 15.5284 16.0693 15.1325 15.9238 14.8422C15.8944 14.7835 14.8933 13.7566 13.6991 12.56L11.5278 10.3846L11.6997 10.1449C13.1494 8.12371 13.2641 5.3397 11.9873 3.16948C10.9573 1.41887 9.14971 0.254027 7.11012 0.0266478C6.78103 -0.0100556 6.05461 -0.00858619 5.71935 0.0294615ZM7.20426 1.66889C8.20649 1.82217 9.1094 2.28516 9.84747 3.02429C10.7879 3.96613 11.262 5.11707 11.2587 6.45068C11.2555 7.73567 10.7997 8.86388 9.90895 9.79162C8.09573 11.6801 5.06059 11.7593 3.14855 9.96804C1.69146 8.60304 1.214 6.52396 1.93436 4.68088C2.6064 2.96145 4.24598 1.74774 6.06314 1.62446C6.46262 1.59739 6.83016 1.61168 7.20426 1.66889Z",
  fill: "black",
  fillOpacity: 0.51
}));
const search = "" + new URL("search-56e9a8d5.svg", import.meta.url).href + "";
const MetroSearch = ({
  value: _0x1fa152,
  onChange: _0x4da6ee
}) => {
  return _0x5d6740.jsx("div", {
    className: "metro-search",
    children: _0x5d6740.jsxs("div", {
      className: "search-wrapper",
      children: [_0x5d6740.jsx("div", {
        className: "icon-wrapper",
        children: _0x5d6740.jsx(SvgSearch, {
          className: "icon"
        })
      }), _0x5d6740.jsx("input", {
        placeholder: "search",
        value: _0x1fa152,
        onChange: _0x2d9020 => _0x4da6ee(_0x2d9020.currentTarget.value)
      })]
    })
  });
};
const index$1 = "";
const index = "";
const SvgMetro = _0x5fb81b => _0x534ba5.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 16,
  height: 19,
  viewBox: "0 0 16 19",
  fill: "none",
  ..._0x5fb81b
}, _0x534ba5.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M4.53803 0.0404053C4.00231 0.0835321 3.38683 0.245625 2.86758 0.480308C1.33145 1.17461 0.259455 2.58369 0.0482283 4.1861C0.0177723 4.41736 4.14356e-05 6.37084 4.14356e-05 9.50041C4.14356e-05 15.0577 -0.0111397 14.8562 0.333841 15.525C0.487665 15.8233 0.609067 15.979 0.907779 16.2615C1.12991 16.4716 1.39681 16.6736 1.55311 16.7501L1.81963 16.8806L1.49407 17.2C1.12481 17.5623 1.02928 17.7395 1.02928 18.0622C1.02928 18.7228 1.77383 19.1853 2.4223 18.9275C2.53158 18.884 2.93495 18.5375 3.51001 17.9928L4.42407 17.1272H8H11.5759L12.49 17.9928C13.4573 18.9089 13.5881 18.9972 13.9751 18.9955C14.5296 18.9931 14.9707 18.5696 14.9707 18.0396C14.9707 17.7402 14.8687 17.5559 14.5059 17.2L14.1804 16.8806L14.4469 16.7501C14.6032 16.6736 14.8701 16.4716 15.0922 16.2615C15.3909 15.979 15.5123 15.8233 15.6662 15.525C16.0111 14.8562 16 15.0577 16 9.50041C16 6.37084 15.9822 4.41736 15.9518 4.1861C15.8196 3.1835 15.3537 2.25203 14.6084 1.50044C14.1922 1.08066 13.775 0.788382 13.2163 0.525126C12.6094 0.239127 12.0437 0.0892734 11.3705 0.0361771C10.7287 -0.0144269 5.17676 -0.0109553 4.53803 0.0404053ZM11.7952 3.04705C12.3157 3.28168 12.6613 3.63814 12.8586 4.14413C12.9565 4.3951 12.959 4.45951 12.959 6.66819C12.959 8.87687 12.9565 8.94127 12.8586 9.19224C12.6193 9.80563 12.1394 10.2245 11.4854 10.3908C11.301 10.4376 10.5624 10.4503 7.99682 10.4507C5.13999 10.4512 4.71108 10.4425 4.48807 10.3796C3.8186 10.1907 3.38005 9.80408 3.14141 9.19224C3.04353 8.94127 3.04096 8.87687 3.04096 6.66819C3.04096 4.45951 3.04353 4.3951 3.14141 4.14413C3.37621 3.54214 3.91282 3.07273 4.52615 2.93275C4.62355 2.9105 6.2125 2.89595 8.09357 2.90004L11.4854 2.90738L11.7952 3.04705ZM4.51819 12.5204C5.03609 12.8092 5.14748 13.4968 4.74495 13.9207C4.53008 14.1469 4.3232 14.2343 4.00231 14.2343C3.43478 14.2343 3.04096 13.8595 3.04096 13.3193C3.04096 13.0258 3.12456 12.8354 3.34098 12.6358C3.65715 12.3443 4.12077 12.2988 4.51819 12.5204ZM12.2723 12.4127C12.4879 12.4697 12.7813 12.712 12.884 12.918C12.9878 13.126 12.9808 13.5298 12.87 13.7354C12.6934 14.0631 12.394 14.2343 11.9977 14.2343C11.6768 14.2343 11.4699 14.1469 11.255 13.9207C10.6049 13.2361 11.3285 12.1634 12.2723 12.4127Z",
  fill: "#D5D8FB"
}));
const metro = "" + new URL("metro-e14361c9.svg", import.meta.url).href + "";
const SvgCardIcon = _0x4b9819 => _0x534ba5.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 33,
  height: 36,
  viewBox: "0 0 33 36",
  fill: "none",
  ..._0x4b9819
}, _0x534ba5.createElement("g", {
  filter: "url(#filter0_d_3798_236)"
}, _0x534ba5.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M13.7047 7.0297C13.6197 7.04419 13.4267 7.09957 13.2758 7.15274C12.4449 7.44561 11.8001 8.16181 11.5628 9.05536C11.5203 9.21548 11.4988 9.38044 11.4988 9.5461V12.9997V16.5109C11.4988 16.6372 11.527 16.7619 11.5814 16.876C11.7437 17.2163 12.051 17.4452 12.4193 17.5C12.6492 17.5342 20.3242 17.5342 20.5541 17.5C20.9224 17.4452 21.2297 17.2163 21.392 16.876C21.4464 16.7619 21.4746 16.6372 21.4746 16.5109V12.9997V9.5461C21.4746 9.38044 21.4531 9.21548 21.4106 9.05536C21.2286 8.37025 20.7719 7.74148 20.2014 7.39061C19.9474 7.23441 19.5215 7.07324 19.2406 7.02704C19.0115 6.98937 13.9269 6.9918 13.7047 7.0297ZM15.9247 11.3651C15.9247 12.1959 15.2381 12.8695 14.4072 12.8695C13.5764 12.8695 12.8898 12.1959 12.8898 11.3651C12.8898 10.5342 13.5764 9.8607 14.4072 9.8607C15.2381 9.8607 15.9247 10.5342 15.9247 11.3651ZM20.0836 11.3651C20.0836 12.1959 19.397 12.8695 18.5661 12.8695C17.7353 12.8695 17.0487 12.1959 17.0487 11.3651C17.0487 10.5342 17.7353 9.8607 18.5661 9.8607C19.397 9.8607 20.0836 10.5342 20.0836 11.3651ZM13.8418 14.5825C14.0695 14.6538 14.294 14.9818 14.2945 15.2439C14.2959 15.8935 13.542 16.233 13.1026 15.7806C12.6977 15.3638 12.8988 14.658 13.453 14.5513C13.5854 14.5257 13.6864 14.5339 13.8418 14.5825ZM19.6247 14.5805C20.0038 14.6986 20.1946 15.1833 20.0167 15.5765C19.8949 15.8459 19.5848 16.0226 19.3036 15.983C18.7209 15.9008 18.4783 15.1908 18.8839 14.7547C19.078 14.546 19.3263 14.4876 19.6247 14.5805ZM12.0025 19.6175C11.4811 20.3216 11.0353 20.9207 11.0119 20.9489C10.9712 20.9976 11.0015 20.9997 11.6551 20.9922L11.7739 20.9909C12.1311 20.9869 12.4658 20.816 12.6785 20.529C12.8909 20.2425 13.2265 20.0736 13.5832 20.0736H16.4867H19.3902C19.7468 20.0736 20.0824 20.2425 20.2948 20.529C20.5076 20.816 20.8423 20.9869 21.1995 20.9909L21.3162 20.9922L21.8635 20.9985C21.9192 20.9991 21.9514 20.9355 21.9179 20.891C21.8727 20.831 21.428 20.232 20.9297 19.5597L20.4261 18.8803C20.1729 18.5388 19.7729 18.3373 19.3477 18.3373H18.8059C18.7501 18.3373 18.7178 18.4006 18.7505 18.4458C18.7938 18.5055 18.9091 18.6619 19.0068 18.7935C19.1045 18.925 19.1844 19.0389 19.1844 19.0466C19.1844 19.0543 17.9704 19.0606 16.4867 19.0606C15.0029 19.0606 13.789 19.0543 13.789 19.0465C13.789 19.0388 13.8938 18.8923 14.022 18.7211C14.1501 18.5498 14.2647 18.3934 14.2765 18.3735C14.2936 18.345 14.1562 18.3373 13.6244 18.3373C13.2006 18.3373 12.8019 18.5382 12.5496 18.8788L12.0025 19.6175Z",
  fill: "#6486F5"
})), _0x534ba5.createElement("defs", null, _0x534ba5.createElement("filter", {
  id: "filter0_d_3798_236",
  x: 0,
  y: 0,
  width: 32.9297,
  height: 35.9985,
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, _0x534ba5.createElement("feFlood", {
  floodOpacity: 0,
  result: "BackgroundImageFix"
}), _0x534ba5.createElement("feColorMatrix", {
  in: "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
  result: "hardAlpha"
}), _0x534ba5.createElement("feOffset", {
  dy: 4
}), _0x534ba5.createElement("feGaussianBlur", {
  stdDeviation: 5.5
}), _0x534ba5.createElement("feComposite", {
  in2: "hardAlpha",
  operator: "out"
}), _0x534ba5.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0.392157 0 0 0 0 0.52549 0 0 0 0 0.960784 0 0 0 0.55 0"
}), _0x534ba5.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow_3798_236"
}), _0x534ba5.createElement("feBlend", {
  mode: "normal",
  in: "SourceGraphic",
  in2: "effect1_dropShadow_3798_236",
  result: "shape"
}))));
const cardIcon = "" + new URL("card-icon-3420eddd.svg", import.meta.url).href + "";
const MetroListElement = _0x3fe706 => {
  let _0x381554;
  let _0x6ec053;
  if (_0x3fe706.trainArrivalTime > 30) {
    _0x381554 = "in " + Math.round(_0x3fe706.trainArrivalTime / 60) + " min";
    _0x6ec053 = "transit";
  } else if (_0x3fe706.trainArrivalTime > 0) {
    _0x381554 = "Arriving";
    _0x6ec053 = "arriving";
  } else {
    _0x381554 = _0x3fe706.trainStatus.charAt(0).toUpperCase() + _0x3fe706.trainStatus.slice(1);
    _0x6ec053 = _0x3fe706.trainStatus;
  }
  return _0x5d6740.jsxs("div", {
    className: "metro-schedule-entry",
    children: [_0x5d6740.jsx("div", {
      className: "station-name",
      children: _0x5d6740.jsx("p", {
        children: _0x3fe706.stationName
      })
    }), _0x5d6740.jsxs("div", {
      className: "train-card",
      children: [_0x5d6740.jsxs("div", {
        className: "info",
        children: [_0x5d6740.jsx("div", {
          className: "icon",
          children: _0x5d6740.jsx(SvgMetro, {})
        }), _0x5d6740.jsxs("div", {
          className: "train-info",
          children: [_0x5d6740.jsx("p", {
            className: "train-name",
            children: _0x3fe706.trainName
          }), _0x5d6740.jsxs("p", {
            className: "train-passengers",
            children: [_0x3fe706.trainPassengers, " passengers"]
          })]
        }), _0x5d6740.jsx("div", {
          className: "train-status",
          children: _0x5d6740.jsx("p", {
            className: _0x6ec053,
            children: _0x381554
          })
        })]
      }), _0x5d6740.jsx("div", {
        className: "divider-wrapper",
        children: _0x5d6740.jsx("div", {
          className: "divider"
        })
      }), _0x5d6740.jsxs("div", {
        className: "destination",
        children: [_0x5d6740.jsx("div", {
          className: "destination-name",
          children: _0x5d6740.jsx("p", {
            children: _0x3fe706.stationName
          })
        }), _0x5d6740.jsx("div", {
          className: "destination-icon",
          children: _0x5d6740.jsx(SvgCardIcon, {})
        }), _0x5d6740.jsx("div", {
          className: "destination-name",
          children: _0x5d6740.jsx("p", {
            children: _0x3fe706.destinationName
          })
        })]
      })]
    })]
  });
};
const MetroSchedule = ({
  schedule: _0x2cfa99
}) => {
  if (_0x2cfa99.length === 0) {
    return _0x5d6740.jsx("div", {
      className: "metro-schedule",
      children: _0x5d6740.jsx("div", {
        className: "no-results",
        children: _0x5d6740.jsx("p", {
          children: "No results"
        })
      })
    });
  }
  return _0x5d6740.jsx("div", {
    className: "metro-schedule",
    children: _0x2cfa99.map(_0x2dcdab => {
      return _0x5d6740.jsx(MetroListElement, {
        stationName: _0x2dcdab.destinationName,
        destinationName: _0x2dcdab.nextDestinationName,
        trainName: _0x2dcdab.trainName,
        trainStatus: _0x2dcdab.trainStatus,
        trainPassengers: _0x2dcdab.trainPassengers,
        trainArrivalTime: _0x2dcdab.trainArrivalTime
      }, _0x2dcdab.destinationId + "-" + _0x2dcdab.nextDestinationId);
    })
  });
};
const MetroApp = () => {
  const [_0x2c0170, _0x38b33a] = _0x5e52ca(_0x4267c1.key);
  const [_0x27fc63, _0x288e46] = _0x534ba5.useState("");
  const _0x4fb7f5 = _0x534ba5.useMemo(() => {
    const _0x5ddbf3 = new RegExp(_0x27fc63, "i");
    return _0x2c0170.schedule.filter(_0x1b4278 => {
      return _0x5ddbf3.test(_0x1b4278.destinationName);
    });
  }, [_0x27fc63, _0x2c0170.schedule]);
  _0x534ba5.useEffect(() => {
    let _0x41f953 = false;
    getMetroSchedule().then(_0x57e3a1 => {
      if (_0x41f953 || !_0x57e3a1) {
        return;
      }
      _0x38b33a({
        schedule: _0x57e3a1
      });
    });
    subscribeToMetroSchedule();
    return () => {
      _0x41f953 = true;
      unsubscribeFromMetroSchedule();
    };
  }, []);
  return _0x5d6740.jsxs("div", {
    className: "app metro-app",
    children: [_0x5d6740.jsx(MetroHeader, {}), _0x5d6740.jsx(MetroSearch, {
      value: _0x27fc63,
      onChange: _0x288e46
    }), _0x5d6740.jsx(MetroSchedule, {
      schedule: _0x4fb7f5
    })]
  });
};
const events = _0x13328e => {
  _0x13328e("metro-schedule-update", ({
    data: _0x4b2b0e,
    state: _0x28fde5
  }) => {
    const _0x3731a2 = _0x4b2b0e.schedule;
    return {
      ..._0x28fde5,
      [_0x4267c1.key]: {
        ..._0x28fde5[_0x4267c1.key],
        schedule: _0x3731a2
      }
    };
  });
};
const icon = {
  background: "#00B0FF",
  color: "white",
  name: ["fab", "twitter"]
};
const config = _0x5cacdd => {
  return {
    ..._0x5cacdd,
    events: () => events,
    iconPng: "https://assets.nopixel.net/dev/images/phone/icons/metro.svg",
    label: "Metro",
    name: "metro",
    position: 120,
    render: () => _0x5d6740.jsx(MetroApp, {})
  };
};
export { config as default, icon };