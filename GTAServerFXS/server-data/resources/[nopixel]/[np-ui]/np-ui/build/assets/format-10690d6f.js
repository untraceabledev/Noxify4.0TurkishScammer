function phoneNumber(_0x426a62 = "") {
    let _0x4c3e95 = "n/a";
    try {
      const _0x3ee9a2 = _0x426a62.toString().replace("+1", "");
      const _0xaf7da = [];
      if (_0x3ee9a2.length > 0) {
        _0xaf7da.push("(" + _0x3ee9a2.substring(0, 3) + ")");
      }
      if (_0x3ee9a2.length >= 4) {
        _0xaf7da.push(" " + _0x3ee9a2.substring(3, 6));
      }
      if (_0x3ee9a2.length >= 7) {
        _0xaf7da.push("-" + _0x3ee9a2.substring(6, 10));
      }
      _0x4c3e95 = _0xaf7da.join("");
    } catch (_0x360652) {}
    return _0x4c3e95;
  }
  function money(_0x49f32b) {
    const _0x3e5ee5 = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format;
    let _0x2a2a74 = "n/a";
    try {
      _0x2a2a74 = _0x3e5ee5(_0x49f32b);
    } catch (_0x4741c1) {}
    return _0x2a2a74;
  }
  function percent(_0x416c69) {
    let _0x170395 = "n/a%";
    try {
      _0x170395 = Number(_0x416c69).toFixed(2) + "%";
    } catch (_0x454dd7) {}
    return _0x170395;
  }
  export { money as m, phoneNumber as p };