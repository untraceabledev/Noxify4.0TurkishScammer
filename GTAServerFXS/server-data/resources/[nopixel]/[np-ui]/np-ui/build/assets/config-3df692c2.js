import { R as _0xdcd9dc, j as _0x12df0c, f as _0x3b6766, x as _0x5181fa, aB as _0x3a87f6, r as _0x5c5e64, aC as _0x331f62, aD as _0x1c38c4 } from "./vendor-6c45b22f.js";
import _0xec59af, { appName } from "./store-26508309.js";
import { u as _0x5ad99e, n as _0x57e8d7 } from "./index-d5aaa08b.js";
import { B as _0x3c88a4, L as _0x505dda } from "./index-ae383549.js";
import { g as _0x730540 } from "./character-8ebc09ae.js";
import { I as _0x56de96 } from "./icon-7f5cdae2.js";
import { C as _0x4aba87 } from "./tooltip-cb871d8a.js";
import { D as _0x204e29 } from "./misc-13f33aa2.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
import "./translations-7705db3f.js";
const TaxiLogo = () => {
  const [_0x5dddc8, _0x73ed71] = _0xdcd9dc.useState(false);
  _0xdcd9dc.useEffect(() => {
    _0x73ed71(true);
  }, []);
  return _0x12df0c.jsx("svg", {
    width: "45",
    height: "62",
    viewBox: "0 0 45 62",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: _0x3b6766({
      active: _0x5dddc8
    }),
    children: _0x12df0c.jsx("path", {
      d: "M43.7118 28.0361C50.8573 43.4927 26.9227 56.0355 5.28789 61.4655C-15.5151 65.2248 31.7749 48.6329 31.7749 28.0361C31.7749 7.43936 1.33535 -0.592738 10.4885 0.0338216C16.3133 0.273042 34.8765 8.92424 43.7118 28.0361Z",
      fill: "white",
      stroke: "white",
      strokeWidth: "1",
      className: "svg-elem-1"
    })
  });
};
const index$5 = "";
const TaxiIntroOverlay = () => {
  const [_0x84125a, _0x2ba30e] = _0x5ad99e(appName);
  const _0x3bc0c2 = _0x57f42b => {
    _0x2ba30e({
      viewType: _0x57f42b
    });
  };
  const _0x332900 = {
    transform: ["translateX(200%)", "translateX(0%)"]
  };
  return _0x12df0c.jsxs("div", {
    className: "taxi-splash-screen",
    children: [_0x12df0c.jsx("section", {
      className: "splash-header",
      children: _0x12df0c.jsx(_0x5181fa.div, {
        animate: {
          opacity: [0, 1]
        },
        transition: {
          duration: 1.5
        },
        children: _0x12df0c.jsx(TaxiLogo, {})
      })
    }), _0x12df0c.jsxs("section", {
      className: "splash-hero",
      children: [_0x730540() && _0x12df0c.jsx(_0x5181fa.p, {
        className: "splash-name",
        animate: _0x332900,
        transition: {
          duration: 0.5
        },
        children: _0x730540().first_name + " " + _0x730540().last_name
      }), _0x12df0c.jsxs(_0x5181fa.h1, {
        className: "splash-welcome",
        animate: _0x332900,
        transition: {
          duration: 0.55
        },
        children: ["Welcome to ", _0x12df0c.jsx("br", {}), " Guber"]
      })]
    }), _0x12df0c.jsxs("section", {
      className: "splash-buttons",
      children: [_0x12df0c.jsx(_0x5181fa.div, {
        animate: _0x332900,
        transition: {
          duration: 0.6
        },
        children: _0x12df0c.jsx(_0x3c88a4, {
          type: "primary",
          className: "splash-btn",
          onClick: () => _0x3bc0c2("driver"),
          children: "Driver"
        })
      }), _0x12df0c.jsx(_0x5181fa.div, {
        animate: _0x332900,
        transition: {
          duration: 0.65
        },
        children: _0x12df0c.jsx(_0x3c88a4, {
          type: "primary",
          className: "splash-btn splash-btn-customer",
          onClick: () => _0x3bc0c2("customer"),
          children: "Customer"
        })
      })]
    })]
  });
};
const map = "";
const IncomingRideSound = "" + new URL("incoming-4a1e7a09.ogg", import.meta.url).href + "";
const genMapCoords = (_0x3a1b1a, _0x11f0b8) => {
  const _0x2f32f1 = _0x11f0b8.coords.y;
  const _0x41dd16 = _0x11f0b8.coords.x;
  return {
    type: _0x3a1b1a,
    latLng: [_0x2f32f1, _0x41dd16]
  };
};
const events = _0x531123 => {
  _0x531123("taxi-update-info", ({
    data: _0x2cbec6,
    state: _0x125668
  }) => {
    let _0x4b41e0 = [];
    if (_0x2cbec6?.currentJob) {
      _0x4b41e0 = [genMapCoords("pickup", _0x2cbec6?.currentJob?.pickup), genMapCoords("dropoff", _0x2cbec6?.currentJob?.dropoff)];
    }
    return {
      ..._0x125668,
      [_0xec59af.key]: {
        ..._0x125668[_0xec59af.key],
        markers: _0x4b41e0,
        rating: _0x2cbec6?.rating ?? 0,
        clockedIn: _0x2cbec6?.clockedIn,
        currentJob: _0x2cbec6?.currentJob ?? null
      }
    };
  });
  _0x531123("taxi-update-booking-info", ({
    data: _0x2479b7,
    state: _0x3c2b44
  }) => {
    return {
      ..._0x3c2b44,
      [_0xec59af.key]: {
        ..._0x3c2b44[_0xec59af.key],
        bookingInfo: _0x2479b7?.bookingInfo ?? null
      }
    };
  });
  _0x531123("guber-notification", ({
    data: _0x34cb42,
    state: _0x399d36
  }) => {
    const _0x1f632f = {
      incoming: IncomingRideSound
    };
    if (!_0x1f632f[_0x34cb42?.type]) {
      return;
    }
    const _0x4d47bb = new Audio(_0x1f632f[_0x34cb42?.type]);
    _0x4d47bb.volume = 0.05;
    _0x4d47bb.controls = false;
    _0x4d47bb.play();
    setTimeout(() => {
      _0x4d47bb.remove();
    }, 250);
    return {
      ..._0x399d36
    };
  });
};
const center_x = 117.3;
const center_y = 172.8;
const scale_x = 0.02072;
const scale_y = 0.0205;
const CUSTOM_CRS = _0x3a87f6.extend({}, _0x3a87f6.CRS.Simple, {
  projection: _0x3a87f6.Projection.LonLat,
  scale: function (_0xb1dc00) {
    return Math.pow(2, _0xb1dc00);
  },
  zoom: function (_0x274f16) {
    return Math.log(_0x274f16) / 0.6931471805599453;
  },
  distance: function (_0x298c3e, _0x5a4443) {
    var _0x35f93b = _0x5a4443.lng - _0x298c3e.lng;
    var _0x457bfc = _0x5a4443.lat - _0x298c3e.lat;
    return Math.sqrt(_0x35f93b * _0x35f93b + _0x457bfc * _0x457bfc);
  },
  transformation: new _0x3a87f6.Transformation(scale_x, center_x, -scale_y, center_y),
  infinite: true
});
const markerTypes = {
  pickup: {
    className: "map-icon map-icon-ping",
    html: "<div class=\"pulse\"></div>",
    offset: _0x3a87f6.point(0, 0)
  },
  dropoff: {
    className: "map-icon map-icon-ping orange",
    html: "<div class=\"pulse\"></div>",
    offset: _0x3a87f6.point(0, 0)
  }
};
const TaxiMap = () => {
  const [_0x2e0604, _0x4a306c] = _0x5ad99e(appName);
  const [_0x53a7e1, _0x61ddb9] = _0x5c5e64.useState(false);
  const _0x113ad9 = _0x331f62({
    click: _0x5c5e64.useCallback(async _0x401cbe => {
      if (_0x53a7e1 || _0x2e0604.viewType !== "customer") {
        return;
      }
      _0x61ddb9(true);
      const _0x5baa8b = _0x401cbe.latlng.lat;
      const _0x41dd6f = _0x401cbe.latlng.lng;
      const _0x81991d = await _0x57e8d7("guber:ui:setWaypoint", {
        x: _0x41dd6f,
        y: _0x5baa8b
      });
      if (_0x81991d.meta.ok) {
        _0x4a306c({
          preBookingInfo: _0x81991d.data,
          markers: [genMapCoords("pickup", _0x81991d.data.pickup), genMapCoords("dropoff", _0x81991d.data.dropoff)]
        });
      }
      console.log(_0x81991d, _0x2e0604);
      _0x61ddb9(false);
    }, [])
  });
  const _0xb98049 = (_0x558f51, _0x3996cd) => {
    const _0x1966b2 = markerTypes[_0x558f51];
    if (!_0x1966b2) {
      return;
    }
    const _0x5818f2 = _0x3996cd.latLng || [0, 0];
    const _0x170da7 = _0x3a87f6.divIcon({
      html: _0x1966b2.html,
      className: _0x1966b2.className
    });
    const _0x197e21 = _0x3a87f6.marker(_0x5818f2, {
      icon: _0x170da7
    }).addTo(_0x113ad9);
    return _0x197e21;
  };
  const _0x5f2a29 = _0x5c5e64.useCallback(() => {
    if (_0x113ad9) {
      _0x113ad9.eachLayer(_0x5effc3 => {
        if (_0x5effc3._url) {
          return;
        }
        _0x113ad9.removeLayer(_0x5effc3);
      });
    }
    _0x2e0604.markers.map(_0x333424 => {
      _0xb98049(_0x333424.type, {
        latLng: _0x333424.latLng
      });
    });
  }, [_0x2e0604.markers]);
  _0x5c5e64.useEffect(() => {
    _0x5f2a29();
  }, [_0x2e0604.markers, _0x5f2a29]);
  return _0x12df0c.jsx(_0x12df0c.Fragment, {});
};
const TaxiMapContainer = () => {
  const _0x2c4370 = _0x3a87f6.tileLayer("https://assets.nopixel.net/dev/images/guber/atlas/{z}/{x}/{y}.jpg", {
    minZoom: 0,
    maxZoom: 5,
    noWrap: true,
    continuousWorld: false,
    attribution: "atlas map",
    id: "atlas map"
  });
  return _0x12df0c.jsx(_0x1c38c4, {
    crs: CUSTOM_CRS,
    zoom: 3,
    center: [0, 0],
    preferCanvas: true,
    maxZoom: 5,
    minZoom: 0,
    layers: [_0x2c4370],
    doubleClickZoom: false,
    style: {
      height: "100%",
      width: "100%",
      top: 0,
      left: 0,
      zIndex: 1
    },
    children: _0x12df0c.jsx(TaxiMap, {})
  });
};
const container$2 = "_container_15elw_1";
const handle = "_handle_15elw_11";
const styles$1 = {
  container: container$2,
  handle: handle
};
const GuberSwitch = _0x51a5e8 => {
  return _0x12df0c.jsx("div", {
    className: styles$1.container,
    "data-ison": _0x51a5e8.value,
    onClick: _0x51a5e8.onClick,
    children: _0x12df0c.jsx(_0x5181fa.div, {
      className: styles$1.handle,
      layout: true,
      transition: {
        type: "spring",
        stiffness: 700,
        damping: 30
      }
    })
  });
};
const container$1 = "_container_80ncb_1";
const btn = "_btn_80ncb_14";
const status_bar = "_status_bar_80ncb_24";
const title = "_title_80ncb_33";
const styles = {
  container: container$1,
  btn: btn,
  status_bar: status_bar,
  title: title
};
const TaxiStatusBar = () => {
  const [_0x12711a, _0x23eb70] = _0x5ad99e(appName);
  const _0x3bd66c = _0xdcd9dc.useCallback(async _0xf6b6b5 => {
    const _0x2a52c0 = await _0x57e8d7("guber:ui:toggleWorkStatus", {
      clockedIn: _0xf6b6b5
    });
    if (_0x2a52c0.meta.ok) {
      _0x23eb70({
        clockedIn: _0x2a52c0.data.clockedIn
      });
    }
  }, []);
  const _0x4ce1cc = () => {
    _0x23eb70({
      viewType: null
    });
    _0x3bd66c(false);
  };
  return _0x12df0c.jsxs("div", {
    className: styles.container,
    children: [_0x12df0c.jsx(_0x4aba87, {
      title: "Go Home",
      placement: "bottom",
      children: _0x12df0c.jsx("div", {
        className: styles.btn,
        onClick: _0x4ce1cc,
        children: _0x12df0c.jsx(_0x56de96, {
          icon: "home",
          className: "icon"
        })
      })
    }), _0x12711a.viewType === "driver" && _0x12df0c.jsxs("div", {
      className: styles.status_bar,
      children: [_0x12df0c.jsxs("h1", {
        className: styles.title,
        children: ["Status: ", _0x12711a.clockedIn ? "Online" : "Offline"]
      }), _0x12df0c.jsx(GuberSwitch, {
        value: _0x12711a.clockedIn,
        onClick: () => _0x3bd66c(!_0x12711a.clockedIn)
      })]
    })]
  });
};
const indes = "";
const PaneContainer = _0x2e1a0f => {
  const [_0x5ec37a, _0x2c7146] = _0x5c5e64.useState(false);
  return _0x12df0c.jsxs("div", {
    className: "pane-container",
    children: [_0x12df0c.jsx("div", {
      className: "pane-toggler",
      onClick: () => _0x2c7146(!_0x5ec37a)
    }), _0x12df0c.jsxs("h1", {
      className: "pane-title",
      children: [_0x2e1a0f.title, " "]
    }), !_0x5ec37a && _0x12df0c.jsx("div", {
      className: _0x3b6766("pane-content", [_0x2e1a0f.className]),
      children: _0x2e1a0f.children
    })]
  });
};
const index$4 = "";
const ActiveRideBar = _0x1bc642 => {
  const [_0x52b8ed, _0x55e7ff] = _0x5c5e64.useState(false);
  const _0x3978ac = _0x5c5e64.useCallback(async () => {
    _0x55e7ff(true);
    await _0x57e8d7("guber:ui:driverCancelRide", {
      rideId: _0x1bc642.currentJob.id
    });
    await _0x204e29(500);
    _0x55e7ff(false);
  }, []);
  const _0x50b05d = _0x5c5e64.useCallback(async () => {
    await _0x57e8d7("guber:ui:completeTrip", {});
  }, []);
  const _0x592045 = _0x1bc642.currentJob?.customerInfo?.name ?? crypto.randomUUID();
  return _0x12df0c.jsxs(PaneContainer, {
    title: "Active Ride",
    className: "guber-active-ride-container",
    children: [_0x12df0c.jsxs("section", {
      className: "top-details",
      children: [_0x12df0c.jsxs("div", {
        className: "customer-info",
        children: [_0x12df0c.jsx("img", {
          className: "customer-avatar",
          src: "https://api.dicebear.com/7.x/personas/svg?backgroundType=gradientLinear,solid&mouth=smile&seed=" + _0x592045
        }), _0x12df0c.jsx("h1", {
          className: "customer-name",
          children: _0x1bc642.currentJob?.customerInfo?.name
        })]
      }), _0x12df0c.jsxs("div", {
        className: "trip-stats",
        children: [_0x12df0c.jsxs("h1", {
          className: "trip-heading",
          children: ["$", _0x1bc642.currentJob.price]
        }), _0x12df0c.jsx("p", {
          className: "trip-distance",
          children: _0x1bc642.currentJob?.distance.toFixed(2) + "mi"
        })]
      })]
    }), _0x12df0c.jsxs("section", {
      className: "trip-locations",
      children: [_0x12df0c.jsxs("div", {
        className: "trip-pickup",
        children: [_0x12df0c.jsx("p", {
          className: "trip-description",
          children: "Pickup"
        }), _0x12df0c.jsx("h1", {
          className: "trip-heading",
          children: _0x1bc642.currentJob?.pickup?.street ?? "Unknown"
        })]
      }), _0x12df0c.jsxs("div", {
        className: "trip-dropoff",
        children: [_0x12df0c.jsx("p", {
          className: "trip-description",
          children: "Dropoff"
        }), _0x12df0c.jsx("h1", {
          className: "trip-heading",
          children: _0x1bc642.currentJob?.dropoff?.street ?? "Unknown"
        })]
      })]
    }), _0x12df0c.jsxs("div", {
      className: "customer-buttons",
      children: [_0x1bc642?.currentJob?.customerInfo?.cid && _0x12df0c.jsx(_0x3c88a4, {
        type: "primary",
        className: "active-ride-btn",
        onClick: _0x50b05d,
        children: "Complete"
      }), _0x12df0c.jsx(_0x3c88a4, {
        type: "primary",
        className: "active-ride-btn",
        onClick: _0x3978ac,
        loading: _0x52b8ed,
        children: "Cancel"
      })]
    })]
  });
};
const index$3 = "";
const IncomingRideBar = ({
  currentJob: _0x166b64
}) => {
  const _0x1ece3c = async () => {
    await _0x57e8d7("guber:ui:rejectJob", {
      jobId: _0x166b64.id
    });
  };
  const _0x273553 = async () => {
    await _0x57e8d7("guber:ui:acceptJob", {
      jobId: _0x166b64.id
    });
  };
  const _0x2181b0 = _0x166b64?.customerInfo?.name ?? crypto.randomUUID();
  return _0x12df0c.jsxs(PaneContainer, {
    title: "Incoming Ride",
    className: "taxi-incoming-bar",
    children: [_0x12df0c.jsxs("section", {
      className: "top-details",
      children: [_0x12df0c.jsxs("div", {
        className: "customer-info",
        children: [_0x12df0c.jsx("img", {
          className: "customer-avatar",
          src: "https://api.dicebear.com/7.x/personas/svg?backgroundType=gradientLinear,solid&mouth=smile&seed=" + _0x2181b0
        }), _0x12df0c.jsx("h1", {
          className: "customer-name",
          children: _0x166b64?.customerInfo?.name
        })]
      }), _0x12df0c.jsxs("div", {
        className: "trip-stats",
        children: [_0x12df0c.jsxs("h1", {
          className: "trip-heading",
          children: ["$", _0x166b64?.price]
        }), _0x12df0c.jsx("p", {
          className: "trip-distance",
          children: _0x166b64?.distance.toFixed(2) + "mi"
        })]
      })]
    }), _0x12df0c.jsxs("section", {
      className: "trip-locations",
      children: [_0x12df0c.jsxs("div", {
        className: "trip-pickup",
        children: [_0x12df0c.jsx("p", {
          className: "trip-description",
          children: "Pickup"
        }), _0x12df0c.jsx("h1", {
          className: "trip-heading",
          children: _0x166b64?.pickup?.street ?? "Unknown"
        })]
      }), _0x12df0c.jsxs("div", {
        className: "trip-dropoff",
        children: [_0x12df0c.jsx("p", {
          className: "trip-description",
          children: "Dropoff"
        }), _0x12df0c.jsx("h1", {
          className: "trip-heading",
          children: _0x166b64?.dropoff?.street ?? "Unknown"
        })]
      })]
    }), _0x12df0c.jsxs("div", {
      className: "customer-buttons",
      children: [_0x12df0c.jsx(_0x3c88a4, {
        type: "secondary",
        onClick: _0x1ece3c,
        style: {
          width: "100%",
          marginRight: "0.5rem"
        },
        children: "Decline"
      }), _0x12df0c.jsx(_0x3c88a4, {
        type: "primary",
        onClick: _0x273553,
        style: {
          width: "100%",
          marginLeft: "0.5rem"
        },
        children: "Accept"
      })]
    })]
  });
};
const index$2 = "";
const SearchingRideBar = ({
  rating: _0x3cd031
}) => {
  return _0x12df0c.jsx(PaneContainer, {
    title: "Searching for rides...",
    className: "taxi-searching-bar",
    children: _0x12df0c.jsx("div", {
      className: "rating-section",
      children: _0x12df0c.jsxs("h1", {
        children: ["Current Rating: ", _0x12df0c.jsxs("span", {
          children: [_0x3cd031.toFixed(1), "/5.0"]
        })]
      })
    })
  });
};
const ConfirmRideView = ({
  preBookingInfo: _0x229644,
  onCancel: _0xae88c7,
  onConfirm: _0x22ebec,
  confirming: _0x4a9deb
}) => {
  return _0x12df0c.jsxs("div", {
    className: "customer-container confirm-view",
    children: [_0x12df0c.jsxs("h1", {
      className: "customer-warning",
      children: ["This Guber ride will cost you $", _0x229644.price?.toFixed(2), ", it will be held until the ride is completed."]
    }), _0x12df0c.jsxs("div", {
      className: "confirm-buttons",
      children: [_0x12df0c.jsx(_0x3c88a4, {
        type: "primary",
        onClick: _0x22ebec,
        loading: _0x4a9deb,
        children: "Confirm"
      }), _0x12df0c.jsx(_0x3c88a4, {
        type: "primary",
        onClick: _0xae88c7,
        children: "Cancel"
      })]
    })]
  });
};
const index$1 = "";
const TaxiCustomerView = () => {
  const [_0x4c4a7a, _0x2c3aa4] = _0x5c5e64.useState(false);
  const [_0x4e8a24, _0x38c869] = _0x5c5e64.useState(false);
  const [_0x143c86, _0x12cad3] = _0x5c5e64.useState(true);
  const [_0x4fd318, _0xd3106e] = _0x5c5e64.useState(false);
  const [_0x82ced2, _0x3ced1b] = _0x5c5e64.useState(null);
  const [_0x4077d1, _0x5503bf] = _0x5ad99e(appName);
  const _0x47d752 = _0x5c5e64.useCallback(async _0x528310 => {
    if (!_0x528310.pickup) {
      return _0x3ced1b("No pickup location found...");
    }
    if (!_0x528310.dropoff) {
      return _0x3ced1b("No dropoff location marked...");
    }
    _0x38c869(true);
    const _0x638881 = await _0x57e8d7("guber:ui:bookRide");
    await _0x204e29(500);
    _0x38c869(false);
    _0xd3106e(false);
    _0x3ced1b(!_0x638881.meta.ok ? _0x638881.meta.message : null);
  }, []);
  const _0x5d9c62 = _0x5c5e64.useCallback(async () => {
    _0x2c3aa4(true);
    await _0x57e8d7("guber:ui:customerCancelRide");
    await _0x204e29(500);
    _0x2c3aa4(false);
  }, []);
  const _0x495d29 = () => {
    if (!_0x4077d1.preBookingInfo.pickup) {
      return;
    }
    if (!_0x4077d1.preBookingInfo.dropoff) {
      return;
    }
    _0xd3106e(true);
  };
  const _0x465e05 = _0x5c5e64.useCallback(async () => {
    const _0x9295ee = await _0x57e8d7("guber:ui:fetchPrebookInfo");
    if (_0x9295ee.meta.ok) {
      let _0x3af6a0 = [];
      if (_0x9295ee.data?.pickup) {
        _0x3af6a0.push(genMapCoords("pickup", _0x9295ee.data?.pickup));
      }
      if (_0x9295ee.data?.dropoff) {
        _0x3af6a0.push(genMapCoords("dropoff", _0x9295ee.data?.dropoff));
      }
      _0x5503bf({
        preBookingInfo: _0x9295ee.data,
        markers: _0x3af6a0
      });
    }
  }, []);
  const _0x2370c9 = _0x5c5e64.useCallback(async () => {
    const _0x3f591c = await _0x57e8d7("guber:ui:fetchBookingInfo");
    if (_0x3f591c.meta.ok) {
      _0x5503bf({
        bookingInfo: _0x3f591c.data
      });
    }
  }, []);
  _0x5c5e64.useEffect(() => {
    (async () => {
      await _0x465e05();
      await _0x2370c9();
      await _0x204e29(500);
      _0x12cad3(false);
    })();
  }, [_0x465e05, _0x2370c9]);
  return _0x12df0c.jsxs(PaneContainer, {
    title: "Book Ride",
    className: "taxi-customer-screen",
    children: [_0x143c86 && _0x12df0c.jsx("div", {
      className: "loading-container",
      children: _0x12df0c.jsx(_0x505dda, {
        color: "#ffffff"
      })
    }), !_0x143c86 && _0x12df0c.jsxs(_0xdcd9dc.Fragment, {
      children: [_0x82ced2 && _0x12df0c.jsx("p", {
        className: "error",
        children: _0x82ced2
      }), _0x4fd318 && _0x4077d1.preBookingInfo && _0x12df0c.jsx(ConfirmRideView, {
        preBookingInfo: _0x4077d1.preBookingInfo,
        onConfirm: () => _0x47d752(_0x4077d1.preBookingInfo),
        onCancel: () => _0xd3106e(false),
        confirming: _0x4e8a24
      }), !_0x4fd318 && _0x4077d1.bookingInfo && _0x12df0c.jsx(ActiveRideView, {
        bookingInfo: _0x4077d1.bookingInfo
      }), !_0x4fd318 && _0x4077d1.preBookingInfo && !_0x4077d1.bookingInfo && _0x12df0c.jsx(OrderRideView, {
        preBookingInfo: _0x4077d1.preBookingInfo
      }), !_0x4fd318 && _0x12df0c.jsx("section", {
        className: "trip-buttons",
        children: _0x4077d1.bookingInfo ? _0x12df0c.jsx(_0x3c88a4, {
          type: "primary",
          className: "active-ride-btn",
          onClick: () => _0x5d9c62(),
          loading: _0x4c4a7a,
          children: "Cancel Trip"
        }) : _0x12df0c.jsx(_0x3c88a4, {
          type: "primary",
          className: "btn",
          onClick: () => _0x495d29(),
          children: "Book Ride"
        })
      })]
    })]
  });
};
const ActiveRideView = ({
  bookingInfo: _0x22934c
}) => {
  return _0x12df0c.jsxs("div", {
    className: "customer-container",
    children: [_0x12df0c.jsx("section", {
      className: "trip-status",
      children: _0x12df0c.jsxs("div", {
        className: "trip-stats",
        children: [_0x12df0c.jsx("h1", {
          className: "trip-heading",
          children: "Status"
        }), _0x12df0c.jsx("p", {
          className: "trip-subheading",
          children: _0x22934c.status ?? "Unknown"
        })]
      })
    }), _0x22934c?.driver && _0x12df0c.jsxs("section", {
      className: "top-details",
      children: [_0x12df0c.jsxs("div", {
        className: "trip-stats",
        children: [_0x12df0c.jsx("h1", {
          className: "trip-heading",
          children: "Assigned Driver"
        }), _0x12df0c.jsx("p", {
          className: "trip-subheading",
          children: _0x22934c?.driver.name
        })]
      }), _0x12df0c.jsxs("div", {
        className: "trip-stats",
        children: [_0x12df0c.jsxs("h1", {
          className: "trip-heading",
          children: ["$", _0x22934c?.price]
        }), _0x12df0c.jsx("p", {
          className: "trip-subheading",
          children: _0x22934c?.distance.toFixed(2) + "mi"
        })]
      })]
    })]
  });
};
const OrderRideView = ({
  preBookingInfo: _0x82847f
}) => {
  return _0x12df0c.jsxs("div", {
    className: "customer-container",
    children: [_0x12df0c.jsxs("div", {
      className: "form-option",
      children: [_0x12df0c.jsx("label", {
        children: "Pickup"
      }), _0x12df0c.jsx("input", {
        value: _0x82847f.pickup?.street ?? "No pickup location...",
        disabled: true
      })]
    }), _0x12df0c.jsxs("div", {
      className: "form-option",
      style: {
        marginTop: "1rem"
      },
      children: [_0x12df0c.jsxs("label", {
        children: ["Dropoff ", _0x12df0c.jsx("span", {
          children: "(Mark through GPS)"
        })]
      }), _0x12df0c.jsx("input", {
        value: _0x82847f.dropoff?.street ?? "No dropoff location...",
        disabled: true
      })]
    })]
  });
};
const index = "";
const TaxiMainScreen = () => {
  const [_0xe0fd30] = _0x5ad99e(appName);
  _0xdcd9dc.useEffect(() => {
    _0x57e8d7("guber:ui:fetchTaxiInfo");
  }, []);
  return _0x12df0c.jsxs("div", {
    className: "taxi-main-screen",
    children: [_0x12df0c.jsx(TaxiStatusBar, {}), _0xe0fd30.viewType === "driver" && _0x12df0c.jsx(TaxiDriverView, {}), _0xe0fd30.viewType === "customer" && _0x12df0c.jsx(TaxiCustomerView, {}), _0x12df0c.jsx(TaxiMapContainer, {})]
  });
};
const TaxiDriverView = () => {
  const [_0x31dcb4] = _0x5ad99e(appName);
  return _0x12df0c.jsxs(_0xdcd9dc.Fragment, {
    children: [!_0x31dcb4.currentJob && _0x31dcb4.clockedIn && _0x12df0c.jsx(SearchingRideBar, {
      rating: _0x31dcb4.rating
    }), _0x31dcb4.currentJob && _0x31dcb4.currentJob.state !== "Pending" && _0x12df0c.jsx(ActiveRideBar, {
      currentJob: _0x31dcb4.currentJob
    }), _0x31dcb4.currentJob && _0x31dcb4.currentJob.state === "Pending" && _0x12df0c.jsx(IncomingRideBar, {
      currentJob: _0x31dcb4.currentJob
    })]
  });
};
const container = "";
const Container = () => {
  const [_0x41aa8d] = _0x5ad99e(appName);
  return _0x12df0c.jsxs("div", {
    className: "app taxi-app",
    children: [_0x41aa8d.viewType && _0x12df0c.jsx(TaxiMainScreen, {}), !_0x41aa8d?.viewType && _0x12df0c.jsx(TaxiIntroOverlay, {})]
  });
};
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/guber.svg";
const config = _0x42bb1d => {
  return {
    ..._0x42bb1d,
    iconPng: myIcon,
    label: "Guber",
    name: "taxi",
    position: 100,
    events: () => events,
    render: () => _0x12df0c.jsx(Container, {})
  };
};
export { config as default };