import { s as _0xc57dac } from "./index-d5aaa08b.js";
const preferences = () => _0xc57dac.getState().preferences;
const preference = (_0x199f7d, _0x59a461 = null) => {
  const _0x281260 = _0x59a461 || _0xc57dac.getState();
  return _0x281260.preferences[_0x199f7d];
};
export { preference as p };