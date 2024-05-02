import { j as _0x1e4987, r as _0x725edb, f as _0x136dba, A as _0x2102f7, x as _0x227750 } from "./vendor-6c45b22f.js";
import _0x131899 from "./store-df6117ab.js";
import { n as _0x28ca83, s as _0x94846, f as _0x5b50a1, u as _0x35adc7 } from "./index-d5aaa08b.js";
import { b as _0x4c5da6 } from "./date-1e39c206.js";
import { t as _0x56b92d } from "./notifications-c44d34f0.js";
import { c as _0x218177, g as _0x492ee7 } from "./lib-fc905d4c.js";
import { D as _0x40cccc } from "./duration-timer-2aea312f.js";
import { m as _0x19826f, b as _0x31d7a3, c as _0x4b45e3, a as _0x5659c2 } from "./actions-c0279434.js";
import { r as _0x2c7374 } from "./translations-7705db3f.js";
import { I as _0x5a0131 } from "./icon-7f5cdae2.js";
import { C as _0x4ee9dc } from "./tooltip-cb871d8a.js";
import _0x5ef53a from "./store-1436e66f.js";
import { a as _0x222b4c, L as _0x59dd92 } from "./bundle-e94787e2.js";
import _0x1f3d3d from "./store-7ddff63f.js";
import { F as _0x2a7bf1 } from "./input-c6588ceb.js";
import { S as _0x513d53 } from "./simple-form-6b6335d8.js";
import { G as _0x4a851f } from "./index-c0da55ad.js";
import { G as _0x235712 } from "./index-eac3b5ce.js";
import { G as _0x416eb1 } from "./index-984d77ed.js";
import { p as _0x782978 } from "./format-10690d6f.js";
let callMetaB = {};
let NOTIFICATION_ID = 0;
const getId = (_0x1bf857 = false) => {
  if (_0x1bf857) {
    NOTIFICATION_ID += 1;
  }
  return "CALLS_" + NOTIFICATION_ID;
};
const activeCallState = (_0x3100de, _0x1d31ec, _0x42ce6a = {}) => {
  callMetaB = _0x42ce6a;
  return {
    ..._0x3100de,
    phone: {
      ..._0x3100de.phone,
      callActive: _0x1d31ec,
      callMeta: _0x42ce6a
    }
  };
};
const inCall = _0x260a86 => {
  return _0x260a86.phone.callActive;
};
const onReject = (_0x3f7c8d, _0x54cd3a = true) => () => {
  _0x28ca83("np-ui:callEnd", {
    character: _0x3f7c8d.character,
    meta: callMetaB
  });
  if (_0x54cd3a) {
    const _0x303112 = _0x315946 => activeCallState(_0x315946, false);
    _0x94846.dispatch({
      cb: _0x303112,
      type: "np-ui-action"
    });
  }
};
const callReceiving = ({
  data: _0x2a1e7a,
  state: _0x578149
}) => {
  if (inCall(_0x578149)) {
    return _0x578149;
  }
  _0x56b92d({
    apps: [],
    icon: icon,
    id: getId(true),
    onAccept: () => _0x28ca83("np-ui:callAccept", {
      character: _0x578149.character,
      meta: callMetaB
    }),
    onAcceptOptions: {
      onAccept: null,
      onReject: null,
      dismiss: false,
      blockDismissOnClick: true,
      id: getId(),
      title: "Connecting...",
      timeout: -1
    },
    onAcceptText: "Answer",
    onReject: onReject(_0x578149),
    onRejectText: "Hang Up",
    state: _0x578149,
    text: _0x218177(_0x2a1e7a.number, _0x578149).name,
    title: "Incoming Call",
    timeout: -1,
    i18nText: true,
    i18nTitle: false,
    type: "call"
  });
  return activeCallState(_0x578149, true, _0x2a1e7a);
};
const callDialing = ({
  data: _0xc37f45,
  state: _0x496722
}) => {
  _0x56b92d({
    apps: [],
    icon: icon,
    id: getId(!inCall(_0x496722)),
    onReject: onReject(_0x496722),
    onRejectText: "Hang Up",
    state: _0x496722,
    text: _0x218177(_0xc37f45.number, _0x496722).name,
    title: "Dialing...",
    timeout: -1,
    i18nText: true,
    i18nTitle: false
  });
  return activeCallState(_0x496722, true, _0xc37f45);
};
const callStart = ({
  number: _0x343913
}) => {
  const _0x46cfa = _0x2e2a30 => {
    if (inCall(_0x2e2a30)) {
      return _0x2e2a30;
    }
    const _0xb75f69 = "np-ui:callStart";
    const _0x46da70 = _0x492ee7(_0x2e2a30);
    setTimeout(() => _0x28ca83(_0xb75f69, {
      simcard: _0x46da70?.id ?? null,
      number: _0x343913.toString()
    }), 0);
    _0x56b92d({
      apps: [],
      icon: icon,
      id: getId(true),
      onReject: onReject(_0x2e2a30),
      onRejectText: "Hang Up",
      state: _0x2e2a30,
      text: _0x218177(_0x343913, _0x2e2a30).name,
      title: "Connecting...",
      timeout: -1,
      i18nText: true,
      i18nTitle: false
    });
    return activeCallState(_0x2e2a30, true);
  };
  _0x94846.dispatch({
    cb: _0x46cfa,
    type: "np-ui-action"
  });
};
const callActive = ({
  data: _0x1b847e,
  state: _0x5a61ba
}) => {
  _0x56b92d({
    apps: [],
    icon: icon,
    id: getId(),
    onReject: onReject(_0x5a61ba, false),
    onRejectOptions: {
      onReject: null,
      dismiss: false,
      blockDismissOnClick: true,
      id: getId(),
      text: "Disconnecting...",
      timeout: -1
    },
    onRejectText: "Hang Up",
    state: _0x5a61ba,
    text: _0x218177(_0x1b847e.number, _0x5a61ba).name,
    title: _0x1e4987.jsx(_0x40cccc, {}),
    timeout: -1,
    minimize: true,
    type: "call"
  });
  return activeCallState(_0x5a61ba, true, _0x1b847e);
};
const callInactive = ({
  data: _0x3b3857,
  state: _0x1ae2eb
}) => {
  _0x56b92d({
    apps: [],
    icon: icon,
    id: getId(),
    state: _0x1ae2eb,
    text: _0x218177(_0x3b3857.number, _0x1ae2eb).name,
    title: "Disconnected! " + (_0x3b3857.message || ""),
    timeout: 3000,
    i18nText: true,
    i18nTitle: false
  });
  return activeCallState(_0x1ae2eb, false);
};
const callHistoryEvent = _0x1edbd4 => ({
  data: _0x13c966,
  state: _0x44bc09
}) => {
  const _0x3a1c71 = [{
    number: _0x13c966.number,
    direction: _0x1edbd4,
    timestamp: Math.round(Date.now() / 1000)
  }, ..._0x44bc09[_0x131899.key].list];
  return {
    ..._0x44bc09,
    [_0x131899.key]: {
      list: _0x3a1c71
    }
  };
};
const events = _0x3ac4ad => {
  _0x3ac4ad("call-receiving", callReceiving);
  _0x3ac4ad("call-dialing", callDialing);
  _0x3ac4ad("call-in-progress", callActive);
  _0x3ac4ad("call-inactive", callInactive);
  _0x3ac4ad("call-receiving", callHistoryEvent("in"));
  _0x3ac4ad("call-dialing", callHistoryEvent("out"));
};
const OpenSendMessageModal = (_0x21a9ca = "") => {
  return _0x5b50a1(_0x3c93df => ({
    ..._0x3c93df,
    [_0x5ef53a.key]: {
      ..._0x3c93df[_0x5ef53a.key],
      show: true,
      number: _0x21a9ca
    }
  }))();
};
const CloseSendMessageModal = () => {
  return _0x5b50a1(_0x165371 => ({
    ..._0x165371,
    [_0x5ef53a.key]: {
      ..._0x165371[_0x5ef53a.key],
      show: false,
      number: ""
    }
  }))();
};
async function getContacts() {
  const _0x160ae6 = _0x492ee7();
  let _0x2fc4a7 = [];
  if (_0x160ae6) {
    const [_0x21847e, _0x465431] = await _0x222b4c.Game.get("/phone/" + _0x160ae6.numberId + "/contacts", undefined, {
      mockupData: []
    });
    if (!_0x21847e) {
      _0x59dd92.error("Failed to get contacts", _0x465431.message);
      return [];
    }
    _0x2fc4a7 = _0x465431.data.map(_0x4a0551 => ({
      id: _0x4a0551.id,
      name: _0x4a0551.name,
      number: "" + _0x4a0551.areaCode + _0x4a0551.number
    }));
  }
  _0x5b50a1(_0x2219fd => ({
    ..._0x2219fd,
    [_0x1f3d3d.key]: {
      ...[_0x1f3d3d.key],
      list: _0x2fc4a7
    }
  }))();
  return _0x2fc4a7;
}
const addContact = async _0x4fdb01 => {
  const _0xdebaa5 = _0x492ee7();
  const _0x1b743b = _0x2c53e6 => {
    const _0x28a4b8 = _0x2c53e6.match(/\d/g)?.join("");
    if (_0x28a4b8?.length === 10 && !isNaN(Number(_0x28a4b8))) {
      return _0x28a4b8;
    }
    return "";
  };
  const _0x3d1c48 = _0x1b743b(_0x4fdb01.number);
  if (!_0xdebaa5) {
    return [false, "SIM Card not found"];
  }
  if (_0x3d1c48 === "") {
    return [false, "Invalid phone number"];
  }
  const _0x294908 = {
    name: _0x4fdb01.name,
    areaCode: _0x3d1c48.slice(0, 3),
    number: _0x3d1c48.slice(3),
    blocked: _0x4fdb01.blocked
  };
  const [_0xbdd469, _0x1228ae] = await _0x222b4c.Game.post("/phone/" + _0xdebaa5.numberId + "/contacts", _0x294908);
  if (!_0xbdd469) {
    _0x59dd92.error("Failed to add contact", _0x1228ae.message);
    return [false, "Failed to add contact"];
  }
  const _0x2998c6 = {
    id: _0x1228ae.data.id,
    name: _0x1228ae.data.name,
    number: "" + _0x1228ae.data.areaCode + _0x1228ae.data.number
  };
  _0x5b50a1(_0x55c635 => ({
    ..._0x55c635,
    [_0x1f3d3d.key]: {
      ...[_0x1f3d3d.key],
      list: [..._0x55c635[_0x1f3d3d.key].list, _0x2998c6]
    }
  }))();
  return [true, _0x2998c6];
};
const deleteContact = async _0x2d2fa5 => {
  const _0x5882d9 = _0x492ee7();
  if (!_0x5882d9) {
    return [false, "SIM Card not found"];
  }
  const [_0x164a23, _0x4d3512] = await _0x222b4c.Game.delete("/phone/" + _0x5882d9.numberId + "/contacts/" + _0x2d2fa5);
  if (!_0x164a23) {
    _0x59dd92.error("Failed to delete contact", _0x4d3512.message);
    return [false, "Failed to delete contact"];
  }
  _0x5b50a1(_0x30d38d => ({
    ..._0x30d38d,
    [_0x1f3d3d.key]: {
      ...[_0x1f3d3d.key],
      list: _0x30d38d[_0x1f3d3d.key].list.filter(_0x3c9cde => _0x3c9cde.id !== _0x2d2fa5)
    }
  }))();
  return [true, null];
};
const FormAddContact = _0x3d32e8 => {
  return _0x1e4987.jsx(_0x513d53, {
    defaultValues: {
      name: _0x3d32e8.name || "",
      number: _0x3d32e8.number || ""
    },
    elements: [{
      name: "name",
      render: ({
        onChange: _0x1c937f,
        value: _0x14dea2
      }) => _0x1e4987.jsx(_0x2a7bf1.Name, {
        onChange: _0x1c937f,
        value: _0x14dea2
      }),
      validate: ["text", "Name"]
    }, {
      name: "number",
      render: ({
        onChange: _0x4189f6,
        value: _0x19f3e8
      }) => _0x1e4987.jsx(_0x2a7bf1.Phone, {
        onChange: _0x4189f6,
        value: _0x19f3e8,
        useNormalInput: true
      }),
      validate: ["phone", "Phone Number"]
    }],
    onCancel: () => _0x19826f(false),
    onSubmit: async _0x1978e5 => {
      _0x31d7a3();
      const [_0x280c10, _0x24e459] = await addContact({
        name: _0x1978e5.name,
        number: _0x1978e5.number
      });
      if (!_0x280c10) {
        _0x4b45e3(_0x24e459);
        return;
      }
      _0x19826f();
    }
  });
};
const SvgIncomingCallIcon = _0x454087 => _0x725edb.createElement("svg", {
  width: 16,
  height: 16,
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ..._0x454087
}, _0x725edb.createElement("g", {
  id: "Frame 117"
}, _0x725edb.createElement("path", {
  id: "image 162 (Traced)",
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M2.92774 0.0739318C1.51859 0.487519 0.490787 1.55694 0.0801487 3.03682C-0.025933 3.41904 -0.0269346 4.52764 0.0784794 4.916C0.797848 7.5672 2.18797 9.97167 4.11058 11.8903C6.03203 13.8078 8.30035 15.1333 10.9526 15.8884C11.3184 15.9926 11.4126 16.0022 12.0416 15.9997C12.6667 15.9972 12.7648 15.9864 13.1057 15.8832C13.8347 15.6626 14.3058 15.386 14.8516 14.8579C15.721 14.0167 16.1984 12.7414 15.9212 12.0001C15.7756 11.6107 15.5929 11.4648 14.2472 10.6633C12.5979 9.68107 12.6351 9.69748 12.0625 9.69748C11.633 9.69748 11.5853 9.70608 11.3228 9.83048C10.9047 10.0287 10.6721 10.2771 10.0888 11.1484C9.80039 11.5792 9.53932 11.9316 9.50856 11.9316C9.40569 11.9316 8.35322 11.3686 7.91488 11.079C6.86779 10.3873 5.854 9.41259 5.15058 8.42122C4.74399 7.8482 4.07086 6.62698 4.07086 6.46232C4.07086 6.43927 4.43233 6.1786 4.87419 5.88307C5.68236 5.34258 5.95654 5.10296 6.1089 4.80404C6.3701 4.29178 6.39234 3.67223 6.16691 3.19016C5.92678 2.67668 4.58228 0.46572 4.42741 0.329667C4.15615 0.0913453 3.95997 0.0164286 3.57008 0.00235559C3.30675 -0.00716561 3.14124 0.0112923 2.92774 0.0739318ZM14.8167 0.265692C14.7479 0.301563 13.9357 1.08527 13.0118 2.00732L11.3321 3.68372V2.91626C11.3321 2.21545 11.3247 2.13682 11.2466 2.01028C10.9951 1.60313 10.3886 1.57665 10.1148 1.96088L10.0176 2.09723V3.85113C10.0176 5.59852 10.0179 5.60554 10.1107 5.73562C10.2989 5.99966 10.3149 6.00175 12.1459 6.00175C14.005 6.00175 14.0021 6.00217 14.1993 5.70401C14.4063 5.39102 14.3074 4.95016 13.9855 4.75105C13.8591 4.67288 13.7805 4.66544 13.0802 4.66544H12.3132L13.9887 2.98462C14.9102 2.06014 15.6962 1.23961 15.7355 1.16114C15.8902 0.851412 15.7175 0.389467 15.3968 0.255377C15.2156 0.179625 14.9738 0.183926 14.8167 0.265692Z",
  fill: "black",
  fillOpacity: 0.58
})));
const incomingCallIcon = "" + new URL("incoming-call-icon-6912cb83.svg", import.meta.url).href + "";
const SvgValidCallIcon = _0x280434 => _0x725edb.createElement("svg", {
  width: 16,
  height: 16,
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ..._0x280434
}, _0x725edb.createElement("g", {
  id: "Frame 118"
}, _0x725edb.createElement("path", {
  id: "image 163 (Traced)",
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M8.2355 0.0650617C8.227 0.103776 8.19109 0.346509 8.15572 0.604502C8.12034 0.862495 8.08409 1.11067 8.07515 1.15601C8.05903 1.2376 8.06184 1.23898 8.34966 1.29061C10.666 1.70621 12.6554 3.11035 13.8419 5.16723C14.1974 5.78344 14.5422 6.6867 14.6878 7.38269C14.7265 7.5676 14.7739 7.71926 14.7931 7.71973C14.8123 7.7202 15.0918 7.67548 15.414 7.62035C15.833 7.54868 16 7.50818 16 7.47822C16 7.39444 15.867 6.8196 15.7735 6.49925C15.3353 4.99764 14.5385 3.6628 13.4172 2.55152C12.1101 1.25611 10.4523 0.384629 8.67323 0.0575252C8.24966 -0.0203418 8.25431 -0.0204357 8.2355 0.0650617ZM2.34165 1.57083C2.04445 1.68457 1.92695 1.78014 1.20805 2.49295C0.394375 3.29976 0.225464 3.51429 0.101241 3.89853C0.00514502 4.19583 -0.030231 4.87224 0.0288332 5.2835C0.199838 6.47424 0.876576 8.06388 1.82057 9.49223C3.53524 12.0867 5.96872 14.1676 8.69101 15.3672C9.63032 15.7811 10.3622 15.9676 11.1561 15.9953C11.7429 16.0158 11.9856 15.9736 12.3749 15.7837C12.6278 15.6602 12.6788 15.6157 13.4404 14.8527C14.1474 14.1444 14.2526 14.0261 14.3467 13.8332C14.4424 13.6368 14.4531 13.5881 14.4531 13.3478C14.4531 13.108 14.4422 13.0583 14.3473 12.8624C14.2511 12.6642 14.1393 12.5419 13.1285 11.5305C12.1381 10.5395 11.9926 10.4057 11.8079 10.316C11.4582 10.1463 11.0758 10.1599 10.7499 10.3537C10.6897 10.3894 10.3161 10.74 9.91955 11.1327C9.33766 11.7091 9.1824 11.8467 9.11437 11.8467C8.98952 11.8467 8.3421 11.5106 7.91802 11.2256C6.48648 10.2635 5.00125 8.65833 4.33292 7.35091C4.22448 7.13873 4.15592 6.96505 4.15592 6.90244C4.15592 6.8111 4.23158 6.72379 4.86928 6.07905C5.64277 5.29704 5.75449 5.14296 5.79743 4.799C5.82265 4.59699 5.75618 4.30935 5.63521 4.0971C5.58533 4.00954 5.11063 3.50788 4.45536 2.8502C3.44424 1.83533 3.34202 1.7418 3.14026 1.6467C2.96292 1.56314 2.87713 1.54216 2.68713 1.53597C2.54647 1.53137 2.40834 1.54532 2.34165 1.57083ZM8.08031 3.22077C8.055 3.29989 7.90593 4.41436 7.91887 4.42733C7.92602 4.43446 8.05612 4.46743 8.208 4.50057C9.45122 4.77176 10.5109 5.5747 11.0875 6.68229C11.2543 7.00264 11.4482 7.5428 11.4849 7.78922C11.497 7.8709 11.5226 7.93776 11.5417 7.93776C11.5846 7.93776 12.6892 7.75029 12.739 7.73456C12.7645 7.72652 12.7531 7.6308 12.7001 7.40617C12.2246 5.39282 10.6755 3.80377 8.70686 3.30983C8.21525 3.1865 8.09665 3.16964 8.08031 3.22077Z",
  fill: "black",
  fillOpacity: 0.58
})));
const validCallIcon = "" + new URL("valid-call-icon-be8402c7.svg", import.meta.url).href + "";
const index$1 = "";
const CallHistoryItem = _0x142435 => {
  const [_0x1b93bd, _0x2f2baf] = _0x725edb.useState(false);
  const _0x50f14f = _0x136dba("inner", {
    "inner-talk": _0x142435.type === "in",
    "inner-incoming": _0x142435.type === "out"
  });
  const {
    hasName: _0x2063a0,
    name: _0x480cbe
  } = _0x218177(_0x142435.number);
  const _0x48207b = _0x2c7374(_0x480cbe, ["Unknown Number"]);
  const _0x1eef05 = _0x4d74ea => {
    callStart({
      number: _0x4d74ea
    });
  };
  const _0x2e0652 = _0x49dc69 => {
    OpenSendMessageModal(_0x49dc69);
  };
  const _0x5d1221 = _0x23db1e => {
    _0x5659c2(_0x1e4987.jsx(FormAddContact, {
      number: _0x23db1e
    }));
  };
  const _0x5e90f2 = () => {
    _0x2f2baf(true);
  };
  const _0xeaff7c = () => {
    _0x2f2baf(false);
  };
  return _0x1e4987.jsx(_0x2102f7, {
    children: _0x1e4987.jsxs("div", {
      className: "call-history-item",
      onMouseEnter: _0x5e90f2,
      onMouseLeave: _0xeaff7c,
      children: [_0x1b93bd && _0x1e4987.jsxs(_0x227750.div, {
        className: "hover-actions",
        animate: {
          opacity: [0, 1]
        },
        transition: {
          duration: 0.2
        },
        children: [_0x1e4987.jsx(_0x4ee9dc, {
          title: "Call",
          children: _0x1e4987.jsx("button", {
            className: "btn",
            onClick: () => _0x1eef05(_0x142435.number),
            children: _0x1e4987.jsx(_0x5a0131, {
              className: "icon",
              icon: "phone"
            })
          })
        }), _0x1e4987.jsx(_0x4ee9dc, {
          title: "Text",
          children: _0x1e4987.jsx("button", {
            className: "btn",
            onClick: () => _0x2e0652(_0x142435.number),
            children: _0x1e4987.jsx(_0x5a0131, {
              className: "icon",
              icon: "comment"
            })
          })
        }), !_0x2063a0 && _0x1e4987.jsx(_0x4ee9dc, {
          title: "Add Contact",
          children: _0x1e4987.jsx("button", {
            className: "btn",
            onClick: () => _0x5d1221(_0x142435.number),
            children: _0x1e4987.jsx(_0x5a0131, {
              className: "icon",
              icon: "user-plus"
            })
          })
        })]
      }), _0x1e4987.jsx("div", {
        className: "call-icon",
        children: _0x1e4987.jsx("div", {
          className: "inner-container",
          children: _0x1e4987.jsxs("div", {
            className: _0x50f14f,
            children: [_0x142435.type === "in" && _0x1e4987.jsx(SvgIncomingCallIcon, {}), _0x142435.type === "out" && _0x1e4987.jsx(SvgValidCallIcon, {})]
          })
        })
      }), _0x1e4987.jsxs("div", {
        className: "call-information",
        children: [_0x1e4987.jsx("h1", {
          className: "call-number",
          children: _0x48207b
        }), _0x1e4987.jsx("p", {
          className: "call-type",
          children: _0x4c5da6(_0x142435.timestamp)
        })]
      })]
    })
  });
};
const index = "";
const CallHistoryList = _0x1fcfd9 => {
  const _0x518497 = _0x725edb.useMemo(() => {
    if (!_0x1fcfd9.search) {
      return _0x1fcfd9.list;
    }
    return _0x1fcfd9.list.filter(_0x257415 => {
      const _0x102db3 = String(_0x257415.number);
      const _0x1061f9 = _0x102db3.toLocaleLowerCase().includes(_0x1fcfd9.search.toLocaleLowerCase());
      return _0x1061f9;
    });
  }, [_0x1fcfd9.search, _0x1fcfd9.list]);
  return _0x1e4987.jsx("div", {
    className: "history-list",
    children: _0x518497 && _0x518497.map((_0x24c57f, _0x240a5d) => _0x1e4987.jsx(CallHistoryItem, {
      type: _0x24c57f.direction,
      timestamp: _0x24c57f.timestamp,
      number: _0x24c57f.number
    }, _0x240a5d))
  });
};
const container$1 = "_container_m6upk_1";
const styles$1 = {
  container: container$1
};
const feedbackSound = "data:audio/ogg;base64,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";
const container = "_container_nyai8_1";
const content = "_content_nyai8_13";
const input_container = "_input_container_nyai8_19";
const text = "_text_nyai8_25";
const numbers$1 = "_numbers_nyai8_36";
const number = "_number_nyai8_36";
const action_btn = "_action_btn_nyai8_70";
const call = "_call_nyai8_79";
const back = "_back_nyai8_83";
const icon$1 = "_icon_nyai8_87";
const styles = {
  container: container,
  content: content,
  input_container: input_container,
  text: text,
  numbers: numbers$1,
  number: number,
  action_btn: action_btn,
  call: call,
  back: back,
  icon: icon$1
};
const numbers = [{
  number: "1"
}, {
  number: "2",
  letters: "abc"
}, {
  number: "3",
  letters: "def"
}, {
  number: "4",
  letters: "ghi"
}, {
  number: "5",
  letters: "jkl"
}, {
  number: "6",
  letters: "mno"
}, {
  number: "7",
  letters: "pqrs"
}, {
  number: "8",
  letters: "tuv"
}, {
  number: "9",
  letters: "wxyz"
}, {
  number: "*"
}, {
  number: "0"
}, {
  number: "#"
}];
const CallNumpad = _0x4744f7 => {
  const [_0x18c3fa, _0x3d43da] = _0x725edb.useState("");
  const _0x562b81 = () => {
    const _0x8b8a57 = new Audio(feedbackSound);
    _0x8b8a57.volume = 0.05;
    _0x8b8a57.controls = false;
    _0x8b8a57.play();
    setTimeout(() => {
      _0x8b8a57.remove();
    }, 250);
  };
  const _0x2cf554 = _0xcd2156 => {
    if (_0x18c3fa.length >= 10) {
      return;
    }
    _0x562b81();
    _0x3d43da(_0x55ea15 => _0x55ea15 += _0xcd2156);
  };
  const _0x5c5004 = () => {
    _0x562b81();
    _0x3d43da(_0xc3d16d => _0xc3d16d.slice(0, -1));
  };
  const _0x4e7d85 = _0x725edb.useCallback(_0x341cee => {
    if (_0x341cee.keyCode === 8) {
      _0x5c5004();
    } else {
      const _0x5d5436 = /^[0-9\b]+$/.test(_0x341cee.key);
      if (!_0x5d5436) {
        return;
      }
      _0x2cf554(_0x341cee.key);
    }
  }, [_0x18c3fa]);
  const _0x4a8408 = _0x591f5c => {
    const _0xe95af2 = _0x591f5c.clipboardData?.getData("text");
    if (!_0xe95af2) {
      return;
    }
    const _0x4a1db2 = /^[0-9\b]+$/.test(_0xe95af2);
    if (!_0x4a1db2) {
      return;
    }
    _0x3d43da(_0xe95af2);
  };
  _0x725edb.useEffect(() => {
    document.addEventListener("keydown", _0x4e7d85);
    document.addEventListener("paste", _0x4a8408);
    return () => {
      document.removeEventListener("keydown", _0x4e7d85);
      document.removeEventListener("paste", _0x4a8408);
    };
  }, [_0x4e7d85]);
  return _0x1e4987.jsxs("div", {
    className: styles.container,
    children: [_0x1e4987.jsx(_0x235712, {
      title: "Make Call",
      action: {
        onClick: () => _0x4744f7.onClose(),
        tooltip: "Back to history",
        icon: "times-circle"
      }
    }), _0x1e4987.jsxs("div", {
      className: styles.content,
      children: [_0x1e4987.jsx("div", {
        className: styles.input_container,
        children: _0x1e4987.jsx("h1", {
          className: styles.text,
          children: _0x782978(_0x18c3fa)
        })
      }), _0x1e4987.jsxs("div", {
        className: styles.numbers,
        children: [numbers.map(_0x37da35 => _0x1e4987.jsxs("button", {
          className: styles.number,
          onClick: () => _0x2cf554(_0x37da35.number),
          children: [_0x37da35.number, " ", _0x37da35.letters && _0x1e4987.jsx("span", {
            children: _0x37da35.letters
          })]
        }, _0x37da35.number)), _0x1e4987.jsx("button", {
          className: _0x136dba(styles.action_btn, styles.call),
          onClick: () => callStart({
            number: _0x18c3fa
          }),
          children: _0x1e4987.jsx(_0x5a0131, {
            icon: "phone",
            className: styles.icon
          })
        }), _0x1e4987.jsx("button", {
          className: _0x136dba(styles.action_btn, styles.back),
          onClick: () => _0x5c5004(),
          children: _0x1e4987.jsx(_0x5a0131, {
            icon: "backspace",
            className: styles.icon
          })
        })]
      })]
    })]
  });
};
const CallHistoryApp = () => {
  const [_0x53c1fb, _0x588a70] = _0x725edb.useState(false);
  const [_0x1027aa, _0x68c319] = _0x35adc7(_0x131899.key);
  return _0x1e4987.jsxs("div", {
    className: _0x136dba("app", styles$1.container),
    children: [_0x53c1fb && _0x1e4987.jsx(CallNumpad, {
      onClose: () => _0x588a70(false)
    }), _0x1e4987.jsx(_0x235712, {
      title: "Call History",
      action: {
        onClick: () => _0x588a70(true),
        tooltip: "Make a call",
        icon: "phone"
      }
    }), _0x1e4987.jsx(_0x4a851f, {
      value: _0x1027aa.filterText,
      icon: "search",
      placeholder: "Search",
      onChange: _0x449e59 => _0x68c319({
        filterText: _0x449e59
      })
    }), _0x1027aa.list.length > 0 ? _0x1e4987.jsx(CallHistoryList, {
      list: _0x1027aa.list,
      search: _0x1027aa.filterText
    }) : _0x1e4987.jsx(_0x416eb1, {
      text: "No Call History"
    })]
  });
};
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/phone-app.svg";
const icon = {
  background: "#41B06A",
  color: "#ebecff",
  name: "phone"
};
const config = _0x185b27 => {
  return {
    ..._0x185b27,
    events: () => events,
    iconPng: myIcon,
    label: "Calls",
    name: "call-history",
    position: 1,
    render: () => _0x1e4987.jsx(CallHistoryApp, {}),
    favourite: true
  };
};
const config$1 = Object.freeze(Object.defineProperty({
  "__proto__": null,
  default: config,
  icon: icon
}, Symbol.toStringTag, {
  value: "Module"
}));
export { FormAddContact as F, OpenSendMessageModal as O, addContact as a, config$1 as b, callStart as c, deleteContact as d, getContacts as g };