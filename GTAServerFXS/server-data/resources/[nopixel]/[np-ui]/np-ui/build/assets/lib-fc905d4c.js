import { s as _0x1b89f6, c as _0x46500b } from "./index-d5aaa08b.js";
import { p as _0x18ef3a } from "./format-10690d6f.js";
const hasRole = (_0x797988, _0x349778) => _0x797988.roles.includes(_0x349778);
const getSimCard = _0x497701 => {
  const _0xb0bff4 = _0x497701?.phone ?? _0x1b89f6.getState().phone;
  if (_0x46500b()) {
    return {
      id: "dev_sim_id",
      numberId: "1",
      areaCode: "420",
      number: "1231122"
    };
  }
  return _0xb0bff4.simcard;
};
const contactName = (_0x4a7a66, _0x15db36 = null) => {
  const _0x2f8905 = _0x15db36 ? _0x15db36 : _0x1b89f6.getState();
  const _0x4d4058 = _0x2f8905["phone.apps.contacts"].list;
  const _0x483e05 = _0x4d4058.find(_0x1400e6 => _0x1400e6.number.toString() === _0x4a7a66.toString());
  const _0x11b96d = !!_0x483e05;
  const _0x1eca96 = _0x11b96d ? _0x483e05.name : _0x4a7a66.toString().length === 10 ? _0x18ef3a(_0x4a7a66) : _0x4a7a66;
  return {
    hasName: _0x11b96d,
    name: _0x1eca96
  };
};
export { contactName as c, getSimCard as g };