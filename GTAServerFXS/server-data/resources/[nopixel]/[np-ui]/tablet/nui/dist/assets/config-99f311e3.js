import { c as _0x226223 } from "./index-f70f3234.js";
import { l as _0x1e54d6, o as _0x132ebf, N as _0x3db7b2, i as _0x37da3f, b as _0x15e776, e as _0x3d5171, t as _0x57a6b8, d as _0x195be4, a as _0x317b5a, f as _0x4eabcb, z as _0x41a6ad, S as _0x43c5df, c as _0x5b5952 } from "./index-bc87d183.js";
import { L as _0x11c872 } from "./index-8134e99a.js";
const L = "" + new URL("miner-icon-83a462ff.png", import.meta.url).href;
const M = "_container_1iugw_1";
const A = {
  container: M
};
const E = "_container_mqlrq_1";
const j = "_content_mqlrq_12";
const z = "_line_mqlrq_25";
const v = {
  container: E,
  content: j,
  line: z
};
const F = _0x57a6b8("<div><div><div>///</div><div class=\"flex flex-col items-center justify-center\"><h1> BUTCOIN</h1><p> BUTc / 24 Hours</p></div><div>///");
const H = () => {
  const [_0x4e5b13, _0x11a748] = _0x1e54d6();
  _0x132ebf(async () => {
    const _0x3cadca = await _0x3db7b2.execute("miner:getInfo");
    _0x11a748(_0x3cadca);
  });
  const {
    data: _0x3de9e1
  } = B();
  return (() => {
    const _0x861ffc = F();
    const _0x4d4498 = _0x861ffc.firstChild;
    const _0x205c5a = _0x4d4498.firstChild;
    const _0x2d1cd2 = _0x205c5a.nextSibling;
    const _0x125718 = _0x2d1cd2.firstChild;
    const _0x56f7de = _0x125718.firstChild;
    const _0x35c803 = _0x125718.nextSibling;
    const _0xbd9a6e = _0x35c803.firstChild;
    const _0x38bd5e = _0x2d1cd2.nextSibling;
    _0x37da3f(_0x125718, () => _0x3de9e1?.pending?.toFixed(5), _0x56f7de);
    _0x37da3f(_0x35c803, () => _0x4e5b13()?.cryptoPerDay, _0xbd9a6e);
    _0x15e776(_0x4b597e => {
      const _0x34fa21 = v.container;
      const _0x30530c = v.content;
      const _0x3b348a = v.line;
      const _0x3a860f = v.line;
      if (_0x34fa21 !== _0x4b597e._v$) {
        _0x3d5171(_0x861ffc, _0x4b597e._v$ = _0x34fa21);
      }
      if (_0x30530c !== _0x4b597e._v$2) {
        _0x3d5171(_0x4d4498, _0x4b597e._v$2 = _0x30530c);
      }
      if (_0x3b348a !== _0x4b597e._v$3) {
        _0x3d5171(_0x205c5a, _0x4b597e._v$3 = _0x3b348a);
      }
      if (_0x3a860f !== _0x4b597e._v$4) {
        _0x3d5171(_0x38bd5e, _0x4b597e._v$4 = _0x3a860f);
      }
      return _0x4b597e;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined
    });
    return _0x861ffc;
  })();
};
const R = "_container_oug0l_1";
const Y = "_textBox_oug0l_30";
const O = "_stash_oug0l_47";
const $ = {
  container: R,
  textBox: Y,
  stash: O
};
const V = _0x57a6b8("<div>Wallet BUTc");
const W = _0x57a6b8("<div><h1></h1><p></p><div class=\"w-full flex flex-row justify-between items-center mt-auto\"><div>");
const x = _0x4de75d => (() => {
  const _0x113971 = W();
  const _0x3432ab = _0x113971.firstChild;
  const _0x1fddba = _0x3432ab.nextSibling;
  const _0x305d4f = _0x1fddba.nextSibling;
  const _0x59fb2d = _0x305d4f.firstChild;
  _0x37da3f(_0x3432ab, () => _0x4de75d.title);
  _0x37da3f(_0x1fddba, () => _0x4de75d.description);
  _0x37da3f(_0x59fb2d, () => _0x4de75d.text);
  _0x37da3f(_0x305d4f, _0x317b5a(_0x43c5df, {
    get when() {
      return _0x4de75d.wallet;
    },
    get children() {
      const _0x485a34 = V();
      _0x485a34.$$click = async () => {
        const _0x3b7e48 = (await _0x3db7b2.execute("miner:stash")) ? "Stashed successfully!" : "You have no BUTc to stash!";
        _0x4eabcb("miner", _0x3b7e48);
        if (_0x4de75d.fetchData) {
          _0x4de75d.fetchData();
        }
      };
      _0x15e776(_0x4d4023 => {
        const _0x6bba4e = $.textBox;
        const _0x1eb269 = {
          [$.stash]: true
        };
        if (_0x6bba4e !== _0x4d4023._v$) {
          _0x3d5171(_0x485a34, _0x4d4023._v$ = _0x6bba4e);
        }
        _0x4d4023._v$2 = _0x41a6ad(_0x485a34, _0x1eb269, _0x4d4023._v$2);
        return _0x4d4023;
      }, {
        _v$: undefined,
        _v$2: undefined
      });
      return _0x485a34;
    }
  }), null);
  _0x15e776(_0x196254 => {
    const _0x1730df = $.container;
    const _0x5bfe00 = $.textBox;
    if (_0x1730df !== _0x196254._v$3) {
      _0x3d5171(_0x113971, _0x196254._v$3 = _0x1730df);
    }
    if (_0x5bfe00 !== _0x196254._v$4) {
      _0x3d5171(_0x59fb2d, _0x196254._v$4 = _0x5bfe00);
    }
    return _0x196254;
  }, {
    _v$3: undefined,
    _v$4: undefined
  });
  return _0x113971;
})();
_0x195be4(["click"]);
const J = _0x57a6b8("<div><div class=\"flex w-full flex-row items-center justify-between\">");
const K = () => {
  const {
    data: _0x179e28,
    setData: _0xecf16f
  } = B();
  const _0x10abdc = async () => {
    const _0x244a6b = await _0x3db7b2.execute("miner:getData");
    _0xecf16f(_0x244a6b);
  };
  _0x132ebf(async () => {
    await _0x10abdc();
  });
  return (() => {
    const _0x2b1e1e = J();
    const _0x1df132 = _0x2b1e1e.firstChild;
    _0x37da3f(_0x2b1e1e, _0x317b5a(_0x11c872, {
      get name() {
        return ee.name;
      }
    }), _0x1df132);
    _0x37da3f(_0x2b1e1e, _0x317b5a(H, {}), _0x1df132);
    _0x37da3f(_0x1df132, _0x317b5a(x, {
      title: "Current GPU",
      description: "Your current GPU is 2.4 Ghz",
      text: "2.4 Ghz"
    }), null);
    _0x37da3f(_0x1df132, _0x317b5a(x, {
      title: "Estimated time",
      description: "In order to mine 1 BUTC, it will take approximately 24 hours.",
      text: "1 BUTC / 24 Hours"
    }), null);
    _0x37da3f(_0x1df132, _0x317b5a(x, {
      title: "Total Balance",
      description: "This is your total balance, remember to put mined BUTc into your wallet!",
      get text() {
        return _0x179e28?.balance?.toFixed(5) + " BUTc";
      },
      wallet: true,
      fetchData: _0x10abdc
    }), null);
    _0x15e776(() => _0x3d5171(_0x2b1e1e, A.container));
    return _0x2b1e1e;
  })();
};
const [Q, X] = _0x226223(() => {
  const [_0x5a4b01, _0x5c4aa8] = _0x5b5952({});
  return {
    data: _0x5a4b01,
    setData: _0x5c4aa8
  };
});
const B = () => X();
const Z = () => _0x317b5a(Q, {
  get children() {
    return _0x317b5a(K, {});
  }
});
const ee = {
  icon: L,
  enabled: true,
  onDock: false,
  name: "miner",
  label: "Miner",
  description: "Mines 1 crypto daily; upgrade with GPU rack for faster mining.",
  isEnabled: true,
  isLaptop: true,
  requiresVPN: true,
  render: () => _0x317b5a(Z, {})
};
export { ee as default };