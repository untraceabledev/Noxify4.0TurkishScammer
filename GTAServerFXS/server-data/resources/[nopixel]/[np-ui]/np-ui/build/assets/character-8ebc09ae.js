import { s as _0x573ee6, i as _0x449f9f } from "./index-d5aaa08b.js";
const getCharacter = () => _0x573ee6.getState().character;
const getServerId = () => 1;
const hasVPN = () => _0x573ee6.getState().phone.hasVpn;
const isJob = (_0x59a46d, _0xc3ac48 = false) => _0xc3ac48 || _0x449f9f() || !!_0x573ee6.getState().character.job && _0x59a46d.includes(_0x573ee6.getState().character.job);
export { getCharacter as g, hasVPN as h, isJob as i };