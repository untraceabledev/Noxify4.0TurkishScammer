import { n as _0xdaa4d3, s as _0x2e7beb } from "./index-d5aaa08b.js";
import _0x5596d4 from "./store-bdd3f58b.js";
import { g as _0xc44545 } from "./lib-fc905d4c.js";
import { d as _0x177d61 } from "./dev-data-afd59de4.js";
const createConversations = (_0x536e65, _0x1fc179) => {
  const _0x32eb9a = [];
  const _0x22504c = {};
  const _0x2bf326 = [..._0x1fc179];
  _0x2bf326.sort((_0x857c2f, _0x4d87f0) => {
    if (_0x857c2f.timestamp > _0x4d87f0.timestamp) {
      return -1;
    } else if (_0x857c2f.timestamp < _0x4d87f0.timestamp) {
      return 1;
    }
    return 0;
  });
  _0x2bf326.forEach(_0x32ad81 => {
    const [_0x43d8f2, _0x1e11e9] = _0x32ad81.number_from === _0x536e65 ? ["out", _0x32ad81.number_to] : ["in", _0x32ad81.number_from];
    if (!_0x32eb9a.includes(_0x1e11e9)) {
      _0x32eb9a.push(_0x1e11e9);
    }
    if (!_0x22504c[_0x1e11e9]) {
      _0x22504c[_0x1e11e9] = {
        messages: []
      };
    }
    _0x22504c[_0x1e11e9].messages.push({
      direction: _0x43d8f2,
      message: _0x32ad81.message,
      timestamp: _0x32ad81.timestamp
    });
  });
  return {
    conversations: _0x22504c,
    order: _0x32eb9a
  };
};
const addMessageToConversation = ({
  activeConversation = -1,
  conversations: _0x4dba3,
  direction: _0x4be092,
  message: _0x55412d,
  notifications: _0xf44d23,
  number: _0x21f9cb,
  order: _0x2d470b
}) => {
  const _0x33794d = [..._0x2d470b];
  const _0x5365c7 = _0x33794d.indexOf(_0x21f9cb);
  if (_0x5365c7 !== -1) {
    _0x33794d.splice(_0x5365c7, 1);
  }
  _0x33794d.unshift(_0x21f9cb);
  const _0x1418da = {
    ..._0x4dba3
  };
  if (_0x5365c7 === -1) {
    _0x1418da[_0x21f9cb] = {
      messages: []
    };
  }
  const _0x13e843 = [..._0xf44d23];
  if (_0x4be092 === "in" && activeConversation !== _0x21f9cb && !_0x13e843.includes(_0x21f9cb)) {
    _0x13e843.push(_0x21f9cb);
  }
  _0x1418da[_0x21f9cb].messages.unshift({
    direction: _0x4be092,
    message: _0x55412d,
    timestamp: new Date().toISOString()
  });
  return {
    conversations: _0x1418da,
    notifications: _0x13e843,
    order: _0x33794d
  };
};
const getConversations = async () => {
  const _0x3a3c9a = _0xc44545();
  if (!_0x3a3c9a) {
    return [];
  }
  const _0x2f5ab5 = await _0xdaa4d3("phone/getConversations", {
    phoneNumber: _0x3a3c9a.areaCode + _0x3a3c9a.number
  }, {
    returnData: _0x177d61.getConversations(),
    extApi: true
  });
  return _0x2f5ab5.data;
};
const getMessages = async _0x3e8da5 => {
  const _0x2ca15e = _0xc44545();
  if (!_0x2ca15e) {
    return [];
  }
  const _0x1d9542 = await _0xdaa4d3("phone/getMessages", {
    ..._0x3e8da5,
    phoneNumber: _0x2ca15e.areaCode + _0x2ca15e.number
  }, {
    returnData: _0x177d61.getMessages(),
    extApi: true
  });
  return _0x1d9542.data;
};
const sendMessage = async (_0x3ceeb8, _0x30435a) => {
  const _0x380064 = _0xc44545();
  if (!_0x380064) {
    return [false, "SIM Card not found"];
  }
  const _0x2a3c51 = {
    message: _0x30435a,
    number: _0x3ceeb8,
    sender_number: _0x380064.areaCode + _0x380064.number
  };
  const _0x195e33 = await _0xdaa4d3("np-ui:smsSend", _0x2a3c51);
  if (!_0x195e33.meta.ok) {
    return [false, "Failed to send message"];
  }
  const _0x20131c = _0x5a2250 => ({
    ..._0x5a2250,
    [_0x5596d4.key]: {
      ..._0x5a2250[_0x5596d4.key],
      ...addMessageToConversation({
        number: _0x3ceeb8,
        message: _0x30435a,
        conversations: _0x5a2250[_0x5596d4.key].conversations,
        direction: "out",
        notifications: _0x5a2250[_0x5596d4.key].notifications,
        order: _0x5a2250[_0x5596d4.key].order
      })
    }
  });
  _0x2e7beb.dispatch({
    cb: _0x20131c,
    type: "np-ui-action"
  });
  return [true, null];
};
export { getConversations as a, addMessageToConversation as b, createConversations as c, getMessages as g, sendMessage as s };