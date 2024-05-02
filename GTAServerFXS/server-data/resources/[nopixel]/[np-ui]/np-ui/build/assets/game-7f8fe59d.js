import { s as _0x437f2b } from "./index-d5aaa08b.js";
import _0x166cb2 from "./store-6adab5c7.js";
import { m as _0x1aca01 } from "./format-10690d6f.js";
const getLocation = () => _0x437f2b.getState().game.location;
const location = _0x3b3e6c => _0x3b3e6c.indexOf(getLocation()) !== -1;
const employedBy = _0x3883b8 => _0x437f2b.getState()[_0x166cb2.key].list.findIndex(_0x34218a => _0x34218a.code === _0x3883b8) !== -1;
const isOwner = _0x3f975d => {
  const _0x5810ad = _0x437f2b.getState()[_0x166cb2.key].list.find(_0x78d1ea => _0x78d1ea.code === _0x3f975d);
  return !!_0x5810ad && _0x5810ad.access_level === -1;
};
const isCEO = _0x41b7fb => {
  const _0x35890e = _0x437f2b.getState()[_0x166cb2.key].list.find(_0xe2f48 => _0xe2f48.code === _0x41b7fb);
  return !!_0x35890e && _0x35890e.role === "CEO";
};
const wifiConnected = (_0x5eb23b, _0xbb7f18) => {
  const _0x23b3e9 = _0x437f2b.getState().phone.wifiConnected.find(_0x1efe6a => _0x1efe6a.location === _0x5eb23b && _0x1efe6a.active === true);
  return _0x23b3e9 && _0xbb7f18.includes(_0x23b3e9.id);
};
const getCurrentVehicle = () => _0x437f2b.getState().game.vehicle ? _0x437f2b.getState().game.vehicle.hash : null;
const hasVpn = () => _0x437f2b.getState().phone.hasVpn;
const GetTaxLevel = _0x55bd12 => {
  return _0x437f2b.getState().game.taxLevels[_0x55bd12 - 1];
};
const priceWithTaxString = (_0x4acf6f, _0x382eb0) => {
  const _0x4e27be = GetTaxLevel(_0x382eb0);
  const _0x59bd85 = Math.ceil(_0x4acf6f * (1 + _0x4e27be / 100));
  return _0x1aca01(_0x59bd85) + " Incl. " + _0x4e27be + "% tax";
};
export { getCurrentVehicle as a, isCEO as b, employedBy as e, getLocation as g, hasVpn as h, isOwner as i, location as l, wifiConnected as w };