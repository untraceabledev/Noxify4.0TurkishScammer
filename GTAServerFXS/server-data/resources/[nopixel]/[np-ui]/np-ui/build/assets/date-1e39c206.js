import { a0 as _0x2a7934, a1 as _0x571479, a2 as _0x4c31ee, a3 as _0x4a3170 } from "./vendor-6c45b22f.js";
import { a as _0x5816ff, r as _0x33cb9f } from "./translations-7705db3f.js";
_0x2a7934.extend(_0x571479);
_0x2a7934.extend(_0x4c31ee);
_0x2a7934.extend(_0x4a3170);
const formatDate = (_0x23abb2, {
  includeTime = true
} = {}) => {
  const _0x32d618 = _0x2a7934.utc(_0x23abb2);
  if (includeTime) {
    return _0x32d618.format("DD MMM YYYY HH:mm [UTC]");
  }
  return _0x32d618.format("DD MMM YYYY");
};
const fromNow = _0x3027c4 => {
  const _0x46c627 = _0x2a7934.unix(_0x3027c4);
  let _0x33d674 = "";
  if (_0x46c627.isValid()) {
    _0x33d674 = _0x46c627.fromNow();
  } else {
    _0x33d674 = _0x2a7934(_0x3027c4).utc().fromNow();
  }
  const _0x2f9748 = ["a few", "seconds ago", "a minute ago", "minutes ago", "an hour ago", "hours ago", "a day ago", "days ago", "a month ago", "months ago", "a year ago", "years ago"];
  _0x5816ff(_0x2f9748, _0x33d674, "lib:date:fromNow");
  return _0x33cb9f(_0x33d674, _0x2f9748);
};
const diff = (_0x3586f0, _0x1584fd = _0x2a7934().utc()) => {
  const _0x3c1613 = _0x2a7934(_0x3586f0).utc();
  const _0x296af2 = _0x1584fd;
  return _0x3c1613.diff(_0x296af2);
};
const fromNowUTC = (_0x3688db, _0xf8971e = "UTC") => {
  const _0xf2f704 = _0x2a7934.unix(_0x3688db).utc();
  return _0xf2f704.tz(_0xf8971e).fromNow();
};
const convertTz = (_0x4853a0, _0x233f65, _0xc54c7c = "UTC") => {
  const _0x55b84d = _0x2a7934.unix(_0x4853a0).tz(_0xc54c7c);
  return _0x55b84d.clone().tz(_0x233f65);
};
const convertTz2 = (_0x4fa5df, _0x2802b2, _0x2961d0 = "UTC") => {
  const _0x446fd3 = _0x2a7934.unix(_0x4fa5df).tz(_0x2961d0);
  return _0x446fd3.clone().tz(_0x2802b2);
};
const formatUnixDate = (_0x5ec986, {
  includeTime = false
} = {}) => {
  const _0x1b97f7 = _0x2a7934.unix(_0x5ec986).utc();
  if (includeTime) {
    return _0x1b97f7.format("DD MMM YYYY HH:mm [UTC]");
  }
  return _0x1b97f7.format("YYYY-MM-DD");
};
const formatUTCDateFromMs = (_0x48473d, _0x688f07 = "") => {
  return _0x2a7934(_0x48473d).utc().format(_0x688f07);
};
export { formatUnixDate as a, fromNow as b, convertTz as c, diff as d, fromNowUTC as f };