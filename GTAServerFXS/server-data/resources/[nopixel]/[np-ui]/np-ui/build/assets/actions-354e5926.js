import { n as _0x4452bd, f as _0x1eb534 } from "./index-d5aaa08b.js";
import { d as _0x1c5db7 } from "./dev-data-afd59de4.js";
import _0x16555f from "./store-52c39051.js";
import { d as _0x25ecdc, b as _0x377475, m as _0x118ee6, c as _0x12d864 } from "./actions-c0279434.js";
const getCalendarEntries = async () => {
  const _0x215dde = await _0x4452bd("np-ui:calendar:getEvents", {}, {
    returnData: _0x1c5db7.getCalendarEvents()
  });
  return _0x1eb534(_0x138232 => ({
    ..._0x138232,
    [_0x16555f.key]: {
      ..._0x138232[_0x16555f.key],
      list: _0x215dde.data
    }
  }))();
};
const leaveCalendarEvent = _0x396101 => {
  _0x25ecdc(async () => {
    _0x377475();
    await _0x4452bd("np-ui:calendar:leaveEvent", {
      id: _0x396101
    });
    _0x118ee6();
    getCalendarEntries();
  });
};
const joinEvent = async _0x351850 => {
  _0x377475();
  const _0x194331 = await _0x4452bd("np-ui:calendar:joinEvent", {
    text: _0x351850
  });
  if (!_0x194331.meta.ok) {
    _0x12d864(_0x194331.meta.message, true);
    return;
  }
  _0x118ee6();
};
const showEditEventModal = _0x489cfe => {
  return _0x1eb534(_0x17aed8 => ({
    ..._0x17aed8,
    [_0x16555f.key]: {
      ..._0x17aed8[_0x16555f.key],
      editEventInfo: _0x489cfe,
      showEditEventModal: true
    }
  }))();
};
export { getCalendarEntries as g, joinEvent as j, leaveCalendarEvent as l, showEditEventModal as s };