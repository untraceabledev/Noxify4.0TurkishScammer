(function () {
    const _0x65297a = document.createElement("link").relList;
    if (_0x65297a && _0x65297a.supports && _0x65297a.supports("modulepreload")) {
      return;
    }
    for (const _0x35487b of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
      _0x43f7e4(_0x35487b);
    }
    new MutationObserver(_0x4fc610 => {
      for (const _0x358c62 of _0x4fc610) {
        if (_0x358c62.type === "childList") {
          for (const _0x58cfae of _0x358c62.addedNodes) {
            if (_0x58cfae.tagName === "LINK" && _0x58cfae.rel === "modulepreload") {
              _0x43f7e4(_0x58cfae);
            }
          }
        }
      }
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function _0x556354(_0x2fa25e) {
      const _0x521060 = {};
      if (_0x2fa25e.integrity) {
        _0x521060.integrity = _0x2fa25e.integrity;
      }
      if (_0x2fa25e.referrerPolicy) {
        _0x521060.referrerPolicy = _0x2fa25e.referrerPolicy;
      }
      if (_0x2fa25e.crossOrigin === "use-credentials") {
        _0x521060.credentials = "include";
      } else if (_0x2fa25e.crossOrigin === "anonymous") {
        _0x521060.credentials = "omit";
      } else {
        _0x521060.credentials = "same-origin";
      }
      return _0x521060;
    }
    function _0x43f7e4(_0x3806e4) {
      if (_0x3806e4.ep) {
        return;
      }
      _0x3806e4.ep = true;
      const _0x1ad819 = _0x556354(_0x3806e4);
      fetch(_0x3806e4.href, _0x1ad819);
    }
  })();
  const xe = (_0x3c605a, _0x3cc599) => _0x3c605a === _0x3cc599;
  const Ae = Symbol("solid-track");
  const W = {
    equals: xe
  };
  let ge = _e;
  const P = 1;
  const X = 2;
  const pe = {
    owned: null,
    cleanups: null,
    context: null,
    owner: null
  };
  var m = null;
  let te = null;
  let p = null;
  let _ = null;
  let E = null;
  let z = 0;
  function H(_0x46ca7b, _0x29928f) {
    const _0x1ffc23 = p;
    const _0x23286a = m;
    const _0x41d267 = _0x46ca7b.length === 0;
    const _0x6e6666 = _0x41d267 ? pe : {
      owned: null,
      cleanups: null,
      context: null,
      owner: _0x29928f === undefined ? _0x23286a : _0x29928f
    };
    const _0x8feca5 = _0x41d267 ? _0x46ca7b : () => _0x46ca7b(() => N(() => ee(_0x6e6666)));
    m = _0x6e6666;
    p = null;
    try {
      return R(_0x8feca5, true);
    } finally {
      p = _0x1ffc23;
      m = _0x23286a;
    }
  }
  function Q(_0x566f78, _0x34e111) {
    _0x34e111 = _0x34e111 ? Object.assign({}, W, _0x34e111) : W;
    const _0x3a8caa = {
      value: _0x566f78,
      observers: null,
      observerSlots: null,
      comparator: _0x34e111.equals || undefined
    };
    const _0x55606e = _0x377f32 => {
      if (typeof _0x377f32 == "function") {
        _0x377f32 = _0x377f32(_0x3a8caa.value);
      }
      return me(_0x3a8caa, _0x377f32);
    };
    return [ve.bind(_0x3a8caa), _0x55606e];
  }
  function I(_0x4e918f, _0xcbef74, _0x196bfb) {
    const _0x5aef67 = oe(_0x4e918f, _0xcbef74, false, P);
    D(_0x5aef67);
  }
  function Se(_0x83ca00, _0x1dc5f9, _0xe61d36) {
    ge = Te;
    const _0x3c59aa = oe(_0x83ca00, _0x1dc5f9, false, P);
    if (!_0xe61d36 || !_0xe61d36.render) {
      _0x3c59aa.user = true;
    }
    if (E) {
      E.push(_0x3c59aa);
    } else {
      D(_0x3c59aa);
    }
  }
  function Ce(_0x146be7, _0x29a4b4, _0x51190a) {
    _0x51190a = _0x51190a ? Object.assign({}, W, _0x51190a) : W;
    const _0x4a2f43 = oe(_0x146be7, _0x29a4b4, true, 0);
    _0x4a2f43.observers = null;
    _0x4a2f43.observerSlots = null;
    _0x4a2f43.comparator = _0x51190a.equals || undefined;
    D(_0x4a2f43);
    return ve.bind(_0x4a2f43);
  }
  function N(_0x5cc2a1) {
    if (p === null) {
      return _0x5cc2a1();
    }
    const _0x3d1522 = p;
    p = null;
    try {
      return _0x5cc2a1();
    } finally {
      p = _0x3d1522;
    }
  }
  function fe(_0xd2602) {
    Se(() => N(_0xd2602));
  }
  function Ee(_0xa55e72) {
    if (m !== null) {
      if (m.cleanups === null) {
        m.cleanups = [_0xa55e72];
      } else {
        m.cleanups.push(_0xa55e72);
      }
    }
    return _0xa55e72;
  }
  function ve() {
    if (this.sources && this.state) {
      if (this.state === P) {
        D(this);
      } else {
        const _0x2ac3ae = _;
        _ = null;
        R(() => Y(this), false);
        _ = _0x2ac3ae;
      }
    }
    if (p) {
      const _0x45649a = this.observers ? this.observers.length : 0;
      if (p.sources) {
        p.sources.push(this);
        p.sourceSlots.push(_0x45649a);
      } else {
        p.sources = [this];
        p.sourceSlots = [_0x45649a];
      }
      if (this.observers) {
        this.observers.push(p);
        this.observerSlots.push(p.sources.length - 1);
      } else {
        this.observers = [p];
        this.observerSlots = [p.sources.length - 1];
      }
    }
    return this.value;
  }
  function me(_0x73bfef, _0xa519ac, _0x2f2f4b) {
    let _0x3db395 = _0x73bfef.value;
    if (!_0x73bfef.comparator || !_0x73bfef.comparator(_0x3db395, _0xa519ac)) {
      _0x73bfef.value = _0xa519ac;
      if (_0x73bfef.observers && _0x73bfef.observers.length) {
        R(() => {
          for (let _0x372727 = 0; _0x372727 < _0x73bfef.observers.length; _0x372727 += 1) {
            const _0x54c816 = _0x73bfef.observers[_0x372727];
            const _0x47efbd = te && te.running;
            if (_0x47efbd) {
              te.disposed.has(_0x54c816);
            }
            if (_0x47efbd ? !_0x54c816.tState : !_0x54c816.state) {
              if (_0x54c816.pure) {
                _.push(_0x54c816);
              } else {
                E.push(_0x54c816);
              }
              if (_0x54c816.observers) {
                we(_0x54c816);
              }
            }
            if (!_0x47efbd) {
              _0x54c816.state = P;
            }
          }
          if (_.length > 1000000) {
            _ = [];
            throw new Error();
          }
        }, false);
      }
    }
    return _0xa519ac;
  }
  function D(_0x2eedd2) {
    if (!_0x2eedd2.fn) {
      return;
    }
    ee(_0x2eedd2);
    const _0xdb987d = m;
    const _0x58d7b8 = p;
    const _0x2b28a1 = z;
    p = m = _0x2eedd2;
    Le(_0x2eedd2, _0x2eedd2.value, _0x2b28a1);
    p = _0x58d7b8;
    m = _0xdb987d;
  }
  function Le(_0x170468, _0x2f9864, _0xf55513) {
    let _0x500c3a;
    try {
      _0x500c3a = _0x170468.fn(_0x2f9864);
    } catch (_0xe7b443) {
      if (_0x170468.pure) {
        _0x170468.state = P;
        if (_0x170468.owned) {
          _0x170468.owned.forEach(ee);
        }
        _0x170468.owned = null;
      }
      _0x170468.updatedAt = _0xf55513 + 1;
      return ye(_0xe7b443);
    }
    if (!_0x170468.updatedAt || _0x170468.updatedAt <= _0xf55513) {
      if (_0x170468.updatedAt != null && "observers" in _0x170468) {
        me(_0x170468, _0x500c3a);
      } else {
        _0x170468.value = _0x500c3a;
      }
      _0x170468.updatedAt = _0xf55513;
    }
  }
  function oe(_0x2fdffe, _0xe9007c, _0x50290d, _0x239710 = P, _0x2c649e) {
    const _0x1465d0 = {
      fn: _0x2fdffe,
      state: _0x239710,
      updatedAt: null,
      owned: null,
      sources: null,
      sourceSlots: null,
      cleanups: null,
      value: _0xe9007c,
      owner: m,
      context: null,
      pure: _0x50290d
    };
    if (m !== null) {
      if (m !== pe) {
        if (m.owned) {
          m.owned.push(_0x1465d0);
        } else {
          m.owned = [_0x1465d0];
        }
      }
    }
    return _0x1465d0;
  }
  function J(_0x10aa1f) {
    if (_0x10aa1f.state === 0) {
      return;
    }
    if (_0x10aa1f.state === X) {
      return Y(_0x10aa1f);
    }
    if (_0x10aa1f.suspense && N(_0x10aa1f.suspense.inFallback)) {
      return _0x10aa1f.suspense.effects.push(_0x10aa1f);
    }
    const _0x1935cb = [_0x10aa1f];
    while ((_0x10aa1f = _0x10aa1f.owner) && (!_0x10aa1f.updatedAt || _0x10aa1f.updatedAt < z)) {
      if (_0x10aa1f.state) {
        _0x1935cb.push(_0x10aa1f);
      }
    }
    for (let _0xa2b321 = _0x1935cb.length - 1; _0xa2b321 >= 0; _0xa2b321--) {
      _0x10aa1f = _0x1935cb[_0xa2b321];
      if (_0x10aa1f.state === P) {
        D(_0x10aa1f);
      } else if (_0x10aa1f.state === X) {
        const _0x5bd4e5 = _;
        _ = null;
        R(() => Y(_0x10aa1f, _0x1935cb[0]), false);
        _ = _0x5bd4e5;
      }
    }
  }
  function R(_0xc55daa, _0x5b7c9a) {
    if (_) {
      return _0xc55daa();
    }
    let _0x144bed = false;
    if (!_0x5b7c9a) {
      _ = [];
    }
    if (E) {
      _0x144bed = true;
    } else {
      E = [];
    }
    z++;
    try {
      const _0xa8d56b = _0xc55daa();
      Pe(_0x144bed);
      return _0xa8d56b;
    } catch (_0x10367d) {
      if (!_0x144bed) {
        E = null;
      }
      _ = null;
      ye(_0x10367d);
    }
  }
  function Pe(_0x54871a) {
    if (_) {
      _e(_);
      _ = null;
    }
    if (_0x54871a) {
      return;
    }
    const _0x41ef11 = E;
    E = null;
    if (_0x41ef11.length) {
      R(() => ge(_0x41ef11), false);
    }
  }
  function _e(_0x4a41a9) {
    for (let _0x596e9c = 0; _0x596e9c < _0x4a41a9.length; _0x596e9c++) {
      J(_0x4a41a9[_0x596e9c]);
    }
  }
  function Te(_0x3ffcaa) {
    let _0x45655e;
    let _0x38d0cd = 0;
    for (_0x45655e = 0; _0x45655e < _0x3ffcaa.length; _0x45655e++) {
      const _0x4dab68 = _0x3ffcaa[_0x45655e];
      if (_0x4dab68.user) {
        _0x3ffcaa[_0x38d0cd++] = _0x4dab68;
      } else {
        J(_0x4dab68);
      }
    }
    for (_0x45655e = 0; _0x45655e < _0x38d0cd; _0x45655e++) {
      J(_0x3ffcaa[_0x45655e]);
    }
  }
  function Y(_0x5cd7a7, _0x11d4d2) {
    _0x5cd7a7.state = 0;
    for (let _0x32926c = 0; _0x32926c < _0x5cd7a7.sources.length; _0x32926c += 1) {
      const _0x5ba62b = _0x5cd7a7.sources[_0x32926c];
      if (_0x5ba62b.sources) {
        const _0xe44059 = _0x5ba62b.state;
        if (_0xe44059 === P) {
          if (_0x5ba62b !== _0x11d4d2 && (!_0x5ba62b.updatedAt || _0x5ba62b.updatedAt < z)) {
            J(_0x5ba62b);
          }
        } else if (_0xe44059 === X) {
          Y(_0x5ba62b, _0x11d4d2);
        }
      }
    }
  }
  function we(_0x584867) {
    for (let _0x3ba6b1 = 0; _0x3ba6b1 < _0x584867.observers.length; _0x3ba6b1 += 1) {
      const _0x451c42 = _0x584867.observers[_0x3ba6b1];
      if (!_0x451c42.state) {
        _0x451c42.state = X;
        if (_0x451c42.pure) {
          _.push(_0x451c42);
        } else {
          E.push(_0x451c42);
        }
        if (_0x451c42.observers) {
          we(_0x451c42);
        }
      }
    }
  }
  function ee(_0x2e4aae) {
    let _0x2e21bf;
    if (_0x2e4aae.sources) {
      while (_0x2e4aae.sources.length) {
        const _0xc99cff = _0x2e4aae.sources.pop();
        const _0x197480 = _0x2e4aae.sourceSlots.pop();
        const _0x59d5d7 = _0xc99cff.observers;
        if (_0x59d5d7 && _0x59d5d7.length) {
          const _0x85ed18 = _0x59d5d7.pop();
          const _0x3c8bdf = _0xc99cff.observerSlots.pop();
          if (_0x197480 < _0x59d5d7.length) {
            _0x85ed18.sourceSlots[_0x3c8bdf] = _0x197480;
            _0x59d5d7[_0x197480] = _0x85ed18;
            _0xc99cff.observerSlots[_0x197480] = _0x3c8bdf;
          }
        }
      }
    }
    if (_0x2e4aae.owned) {
      for (_0x2e21bf = _0x2e4aae.owned.length - 1; _0x2e21bf >= 0; _0x2e21bf--) {
        ee(_0x2e4aae.owned[_0x2e21bf]);
      }
      _0x2e4aae.owned = null;
    }
    if (_0x2e4aae.cleanups) {
      for (_0x2e21bf = _0x2e4aae.cleanups.length - 1; _0x2e21bf >= 0; _0x2e21bf--) {
        _0x2e4aae.cleanups[_0x2e21bf]();
      }
      _0x2e4aae.cleanups = null;
    }
    _0x2e4aae.state = 0;
    _0x2e4aae.context = null;
  }
  function ye(_0x14560a) {
    throw _0x14560a;
  }
  const Ne = Symbol("fallback");
  function ce(_0x578d60) {
    for (let _0x41fe43 = 0; _0x41fe43 < _0x578d60.length; _0x41fe43++) {
      _0x578d60[_0x41fe43]();
    }
  }
  function ke(_0x3c287a, _0xeeb23, _0x295232 = {}) {
    let _0x19c896 = [];
    let _0xa7cc88 = [];
    let _0x1e638c = [];
    let _0x2f5f5d = 0;
    let _0x15b534 = _0xeeb23.length > 1 ? [] : null;
    Ee(() => ce(_0x1e638c));
    return () => {
      let _0x3a67cd = _0x3c287a() || [];
      let _0x5e3d72;
      let _0x213ce8;
      _0x3a67cd[Ae];
      return N(() => {
        let _0x292211 = _0x3a67cd.length;
        let _0x1f881d;
        let _0x4e5014;
        let _0x8f26d3;
        let _0x26c40a;
        let _0x1fadfb;
        let _0x43472d;
        let _0x428f83;
        let _0x67bf40;
        let _0x394b5d;
        if (_0x292211 === 0) {
          if (_0x2f5f5d !== 0) {
            ce(_0x1e638c);
            _0x1e638c = [];
            _0x19c896 = [];
            _0xa7cc88 = [];
            _0x2f5f5d = 0;
            _0x15b534 &&= [];
          }
          if (_0x295232.fallback) {
            _0x19c896 = [Ne];
            _0xa7cc88[0] = H(_0x30d553 => {
              _0x1e638c[0] = _0x30d553;
              return _0x295232.fallback();
            });
            _0x2f5f5d = 1;
          }
        } else if (_0x2f5f5d === 0) {
          _0xa7cc88 = new Array(_0x292211);
          _0x213ce8 = 0;
          for (; _0x213ce8 < _0x292211; _0x213ce8++) {
            _0x19c896[_0x213ce8] = _0x3a67cd[_0x213ce8];
            _0xa7cc88[_0x213ce8] = H(_0x58c607);
          }
          _0x2f5f5d = _0x292211;
        } else {
          _0x8f26d3 = new Array(_0x292211);
          _0x26c40a = new Array(_0x292211);
          if (_0x15b534) {
            _0x1fadfb = new Array(_0x292211);
          }
          _0x43472d = 0;
          _0x428f83 = Math.min(_0x2f5f5d, _0x292211);
          for (; _0x43472d < _0x428f83 && _0x19c896[_0x43472d] === _0x3a67cd[_0x43472d]; _0x43472d++);
          _0x428f83 = _0x2f5f5d - 1;
          _0x67bf40 = _0x292211 - 1;
          for (; _0x428f83 >= _0x43472d && _0x67bf40 >= _0x43472d && _0x19c896[_0x428f83] === _0x3a67cd[_0x67bf40]; _0x428f83--, _0x67bf40--) {
            _0x8f26d3[_0x67bf40] = _0xa7cc88[_0x428f83];
            _0x26c40a[_0x67bf40] = _0x1e638c[_0x428f83];
            if (_0x15b534) {
              _0x1fadfb[_0x67bf40] = _0x15b534[_0x428f83];
            }
          }
          _0x1f881d = new Map();
          _0x4e5014 = new Array(_0x67bf40 + 1);
          _0x213ce8 = _0x67bf40;
          for (; _0x213ce8 >= _0x43472d; _0x213ce8--) {
            _0x394b5d = _0x3a67cd[_0x213ce8];
            _0x5e3d72 = _0x1f881d.get(_0x394b5d);
            _0x4e5014[_0x213ce8] = _0x5e3d72 === undefined ? -1 : _0x5e3d72;
            _0x1f881d.set(_0x394b5d, _0x213ce8);
          }
          for (_0x5e3d72 = _0x43472d; _0x5e3d72 <= _0x428f83; _0x5e3d72++) {
            _0x394b5d = _0x19c896[_0x5e3d72];
            _0x213ce8 = _0x1f881d.get(_0x394b5d);
            if (_0x213ce8 !== undefined && _0x213ce8 !== -1) {
              _0x8f26d3[_0x213ce8] = _0xa7cc88[_0x5e3d72];
              _0x26c40a[_0x213ce8] = _0x1e638c[_0x5e3d72];
              if (_0x15b534) {
                _0x1fadfb[_0x213ce8] = _0x15b534[_0x5e3d72];
              }
              _0x213ce8 = _0x4e5014[_0x213ce8];
              _0x1f881d.set(_0x394b5d, _0x213ce8);
            } else {
              _0x1e638c[_0x5e3d72]();
            }
          }
          for (_0x213ce8 = _0x43472d; _0x213ce8 < _0x292211; _0x213ce8++) {
            if (_0x213ce8 in _0x8f26d3) {
              _0xa7cc88[_0x213ce8] = _0x8f26d3[_0x213ce8];
              _0x1e638c[_0x213ce8] = _0x26c40a[_0x213ce8];
              if (_0x15b534) {
                _0x15b534[_0x213ce8] = _0x1fadfb[_0x213ce8];
                _0x15b534[_0x213ce8](_0x213ce8);
              }
            } else {
              _0xa7cc88[_0x213ce8] = H(_0x58c607);
            }
          }
          _0xa7cc88 = _0xa7cc88.slice(0, _0x2f5f5d = _0x292211);
          _0x19c896 = _0x3a67cd.slice(0);
        }
        return _0xa7cc88;
      });
      function _0x58c607(_0x56eae8) {
        _0x1e638c[_0x213ce8] = _0x56eae8;
        if (_0x15b534) {
          const [_0x20f350, _0x510941] = Q(_0x213ce8);
          _0x15b534[_0x213ce8] = _0x510941;
          return _0xeeb23(_0x3a67cd[_0x213ce8], _0x20f350);
        }
        return _0xeeb23(_0x3a67cd[_0x213ce8]);
      }
    };
  }
  function M(_0x3cc60e, _0x3585b) {
    return N(() => _0x3cc60e(_0x3585b || {}));
  }
  function Oe(_0x4495ab) {
    const _0x32b18d = "fallback" in _0x4495ab && {
      fallback: () => _0x4495ab.fallback
    };
    return Ce(ke(() => _0x4495ab.each, _0x4495ab.children, _0x32b18d || undefined));
  }
  function Be(_0x28abe2, _0x5211a4, _0x2550b3) {
    let _0x37c8bf = _0x2550b3.length;
    let _0x36d2bb = _0x5211a4.length;
    let _0xfe87d1 = _0x37c8bf;
    let _0x596930 = 0;
    let _0x3bf768 = 0;
    let _0x237315 = _0x5211a4[_0x36d2bb - 1].nextSibling;
    let _0x327faf = null;
    while (_0x596930 < _0x36d2bb || _0x3bf768 < _0xfe87d1) {
      if (_0x5211a4[_0x596930] === _0x2550b3[_0x3bf768]) {
        _0x596930++;
        _0x3bf768++;
        continue;
      }
      while (_0x5211a4[_0x36d2bb - 1] === _0x2550b3[_0xfe87d1 - 1]) {
        _0x36d2bb--;
        _0xfe87d1--;
      }
      if (_0x36d2bb === _0x596930) {
        const _0x33e54f = _0xfe87d1 < _0x37c8bf ? _0x3bf768 ? _0x2550b3[_0x3bf768 - 1].nextSibling : _0x2550b3[_0xfe87d1 - _0x3bf768] : _0x237315;
        while (_0x3bf768 < _0xfe87d1) {
          _0x28abe2.insertBefore(_0x2550b3[_0x3bf768++], _0x33e54f);
        }
      } else if (_0xfe87d1 === _0x3bf768) {
        while (_0x596930 < _0x36d2bb) {
          if (!_0x327faf || !_0x327faf.has(_0x5211a4[_0x596930])) {
            _0x5211a4[_0x596930].remove();
          }
          _0x596930++;
        }
      } else if (_0x5211a4[_0x596930] === _0x2550b3[_0xfe87d1 - 1] && _0x2550b3[_0x3bf768] === _0x5211a4[_0x36d2bb - 1]) {
        const _0x3798a9 = _0x5211a4[--_0x36d2bb].nextSibling;
        _0x28abe2.insertBefore(_0x2550b3[_0x3bf768++], _0x5211a4[_0x596930++].nextSibling);
        _0x28abe2.insertBefore(_0x2550b3[--_0xfe87d1], _0x3798a9);
        _0x5211a4[_0x36d2bb] = _0x2550b3[_0xfe87d1];
      } else {
        if (!_0x327faf) {
          _0x327faf = new Map();
          let _0x3e6246 = _0x3bf768;
          while (_0x3e6246 < _0xfe87d1) {
            _0x327faf.set(_0x2550b3[_0x3e6246], _0x3e6246++);
          }
        }
        const _0x4b707c = _0x327faf.get(_0x5211a4[_0x596930]);
        if (_0x4b707c != null) {
          if (_0x3bf768 < _0x4b707c && _0x4b707c < _0xfe87d1) {
            let _0x5c2aa5 = _0x596930;
            let _0x5ea40e = 1;
            let _0x108cfa;
            while (++_0x5c2aa5 < _0x36d2bb && _0x5c2aa5 < _0xfe87d1 && (_0x108cfa = _0x327faf.get(_0x5211a4[_0x5c2aa5])) != null && _0x108cfa === _0x4b707c + _0x5ea40e) {
              _0x5ea40e++;
            }
            if (_0x5ea40e > _0x4b707c - _0x3bf768) {
              const _0x3ac843 = _0x5211a4[_0x596930];
              while (_0x3bf768 < _0x4b707c) {
                _0x28abe2.insertBefore(_0x2550b3[_0x3bf768++], _0x3ac843);
              }
            } else {
              _0x28abe2.replaceChild(_0x2550b3[_0x3bf768++], _0x5211a4[_0x596930++]);
            }
          } else {
            _0x596930++;
          }
        } else {
          _0x5211a4[_0x596930++].remove();
        }
      }
    }
  }
  const ue = "_$DX_DELEGATE";
  function je(_0x4751a6, _0x2c87e0, _0x2437c8, _0x527e69 = {}) {
    let _0x2c7689;
    H(_0x18f0b0 => {
      _0x2c7689 = _0x18f0b0;
      if (_0x2c87e0 === document) {
        _0x4751a6();
      } else {
        U(_0x2c87e0, _0x4751a6(), _0x2c87e0.firstChild ? null : undefined, _0x2437c8);
      }
    }, _0x527e69.owner);
    return () => {
      _0x2c7689();
      _0x2c87e0.textContent = "";
    };
  }
  function re(_0x2b6648, _0x42666e, _0x58c9f5) {
    let _0x188f68;
    const _0xbf75f0 = () => {
      const _0x42a6f4 = document.createElement("template");
      _0x42a6f4.innerHTML = _0x2b6648;
      if (_0x58c9f5) {
        return _0x42a6f4.content.firstChild.firstChild;
      } else {
        return _0x42a6f4.content.firstChild;
      }
    };
    const _0xec68a = _0x42666e ? () => N(() => document.importNode(_0x188f68 ||= _0xbf75f0(), true)) : () => (_0x188f68 ||= _0xbf75f0()).cloneNode(true);
    _0xec68a.cloneNode = _0xec68a;
    return _0xec68a;
  }
  function be(_0x4faa41, _0x3eeee4 = window.document) {
    const _0x1f360d = _0x3eeee4[ue] ||= new Set();
    for (let _0xb9da3e = 0, _0x2661de = _0x4faa41.length; _0xb9da3e < _0x2661de; _0xb9da3e++) {
      const _0x3dbfa8 = _0x4faa41[_0xb9da3e];
      if (!_0x1f360d.has(_0x3dbfa8)) {
        _0x1f360d.add(_0x3dbfa8);
        _0x3eeee4.addEventListener(_0x3dbfa8, Ue);
      }
    }
  }
  function le(_0x280725, _0x520685, _0x25e407) {
    if (_0x25e407 == null) {
      _0x280725.removeAttribute(_0x520685);
    } else {
      _0x280725.setAttribute(_0x520685, _0x25e407);
    }
  }
  function C(_0x568b83, _0x4718ba) {
    if (_0x4718ba == null) {
      _0x568b83.removeAttribute("class");
    } else {
      _0x568b83.className = _0x4718ba;
    }
  }
  function ne(_0x173615, _0x1affa2, _0x7e9cf4 = {}) {
    const _0x42646c = Object.keys(_0x1affa2 || {});
    const _0x1b11c1 = Object.keys(_0x7e9cf4);
    let _0x293d08;
    let _0x28124f;
    _0x293d08 = 0;
    _0x28124f = _0x1b11c1.length;
    for (; _0x293d08 < _0x28124f; _0x293d08++) {
      const _0x2d4625 = _0x1b11c1[_0x293d08];
      if (!!_0x2d4625 && _0x2d4625 !== "undefined" && !_0x1affa2[_0x2d4625]) {
        ae(_0x173615, _0x2d4625, false);
        delete _0x7e9cf4[_0x2d4625];
      }
    }
    _0x293d08 = 0;
    _0x28124f = _0x42646c.length;
    for (; _0x293d08 < _0x28124f; _0x293d08++) {
      const _0x30b5e5 = _0x42646c[_0x293d08];
      const _0x1550fc = !!_0x1affa2[_0x30b5e5];
      if (!!_0x30b5e5 && _0x30b5e5 !== "undefined" && _0x7e9cf4[_0x30b5e5] !== _0x1550fc && !!_0x1550fc) {
        ae(_0x173615, _0x30b5e5, true);
        _0x7e9cf4[_0x30b5e5] = _0x1550fc;
      }
    }
    return _0x7e9cf4;
  }
  function Me(_0x2caac5, _0x530ce8, _0xeae16c) {
    return N(() => _0x2caac5(_0x530ce8, _0xeae16c));
  }
  function U(_0x464ab7, _0x2d726f, _0x529d2b, _0x104e04) {
    if (_0x529d2b !== undefined && !_0x104e04) {
      _0x104e04 = [];
    }
    if (typeof _0x2d726f != "function") {
      return Z(_0x464ab7, _0x2d726f, _0x104e04, _0x529d2b);
    }
    I(_0x40af55 => Z(_0x464ab7, _0x2d726f(), _0x40af55, _0x529d2b), _0x104e04);
  }
  function ae(_0x5870da, _0x5baad1, _0x5c985f) {
    const _0x11b226 = _0x5baad1.trim().split(/\s+/);
    for (let _0x529953 = 0, _0x22403e = _0x11b226.length; _0x529953 < _0x22403e; _0x529953++) {
      _0x5870da.classList.toggle(_0x11b226[_0x529953], _0x5c985f);
    }
  }
  function Ue(_0x5c800a) {
    const _0x5c1f46 = "$$" + _0x5c800a.type;
    let _0x8bc573 = _0x5c800a.composedPath && _0x5c800a.composedPath()[0] || _0x5c800a.target;
    if (_0x5c800a.target !== _0x8bc573) {
      Object.defineProperty(_0x5c800a, "target", {
        configurable: true,
        value: _0x8bc573
      });
    }
    Object.defineProperty(_0x5c800a, "currentTarget", {
      configurable: true,
      get() {
        return _0x8bc573 || document;
      }
    });
    while (_0x8bc573) {
      const _0x126d99 = _0x8bc573[_0x5c1f46];
      if (_0x126d99 && !_0x8bc573.disabled) {
        const _0x8ab61f = _0x8bc573[_0x5c1f46 + "Data"];
        if (_0x8ab61f !== undefined) {
          _0x126d99.call(_0x8bc573, _0x8ab61f, _0x5c800a);
        } else {
          _0x126d99.call(_0x8bc573, _0x5c800a);
        }
        if (_0x5c800a.cancelBubble) {
          return;
        }
      }
      _0x8bc573 = _0x8bc573._$host || _0x8bc573.parentNode || _0x8bc573.host;
    }
  }
  function Z(_0x2e3729, _0x36a94b, _0x3eb3d9, _0x3a76ce, _0x21e867) {
    while (typeof _0x3eb3d9 == "function") {
      _0x3eb3d9 = _0x3eb3d9();
    }
    if (_0x36a94b === _0x3eb3d9) {
      return _0x3eb3d9;
    }
    const _0x59751f = typeof _0x36a94b;
    const _0x59ad1a = _0x3a76ce !== undefined;
    _0x2e3729 = _0x59ad1a && _0x3eb3d9[0] && _0x3eb3d9[0].parentNode || _0x2e3729;
    if (_0x59751f === "string" || _0x59751f === "number") {
      if (_0x59751f === "number") {
        _0x36a94b = _0x36a94b.toString();
      }
      if (_0x59ad1a) {
        let _0x1de81d = _0x3eb3d9[0];
        if (_0x1de81d && _0x1de81d.nodeType === 3) {
          _0x1de81d.data = _0x36a94b;
        } else {
          _0x1de81d = document.createTextNode(_0x36a94b);
        }
        _0x3eb3d9 = j(_0x2e3729, _0x3eb3d9, _0x3a76ce, _0x1de81d);
      } else if (_0x3eb3d9 !== "" && typeof _0x3eb3d9 == "string") {
        _0x3eb3d9 = _0x2e3729.firstChild.data = _0x36a94b;
      } else {
        _0x3eb3d9 = _0x2e3729.textContent = _0x36a94b;
      }
    } else if (_0x36a94b == null || _0x59751f === "boolean") {
      _0x3eb3d9 = j(_0x2e3729, _0x3eb3d9, _0x3a76ce);
    } else {
      if (_0x59751f === "function") {
        I(() => {
          let _0x2f5f4c = _0x36a94b();
          while (typeof _0x2f5f4c == "function") {
            _0x2f5f4c = _0x2f5f4c();
          }
          _0x3eb3d9 = Z(_0x2e3729, _0x2f5f4c, _0x3eb3d9, _0x3a76ce);
        });
        return () => _0x3eb3d9;
      }
      if (Array.isArray(_0x36a94b)) {
        const _0x4cc83d = [];
        const _0x2f7b76 = _0x3eb3d9 && Array.isArray(_0x3eb3d9);
        if (ie(_0x4cc83d, _0x36a94b, _0x3eb3d9, _0x21e867)) {
          I(() => _0x3eb3d9 = Z(_0x2e3729, _0x4cc83d, _0x3eb3d9, _0x3a76ce, true));
          return () => _0x3eb3d9;
        }
        if (_0x4cc83d.length === 0) {
          _0x3eb3d9 = j(_0x2e3729, _0x3eb3d9, _0x3a76ce);
          if (_0x59ad1a) {
            return _0x3eb3d9;
          }
        } else if (_0x2f7b76) {
          if (_0x3eb3d9.length === 0) {
            de(_0x2e3729, _0x4cc83d, _0x3a76ce);
          } else {
            Be(_0x2e3729, _0x3eb3d9, _0x4cc83d);
          }
        } else {
          if (_0x3eb3d9) {
            j(_0x2e3729);
          }
          de(_0x2e3729, _0x4cc83d);
        }
        _0x3eb3d9 = _0x4cc83d;
      } else if (_0x36a94b.nodeType) {
        if (Array.isArray(_0x3eb3d9)) {
          if (_0x59ad1a) {
            return _0x3eb3d9 = j(_0x2e3729, _0x3eb3d9, _0x3a76ce, _0x36a94b);
          }
          j(_0x2e3729, _0x3eb3d9, null, _0x36a94b);
        } else if (_0x3eb3d9 == null || _0x3eb3d9 === "" || !_0x2e3729.firstChild) {
          _0x2e3729.appendChild(_0x36a94b);
        } else {
          _0x2e3729.replaceChild(_0x36a94b, _0x2e3729.firstChild);
        }
        _0x3eb3d9 = _0x36a94b;
      } else {
        console.warn("Unrecognized value. Skipped inserting", _0x36a94b);
      }
    }
    return _0x3eb3d9;
  }
  function ie(_0x160ee0, _0x55ba21, _0x5d9613, _0x478754) {
    let _0xcad73c = false;
    for (let _0x7b2181 = 0, _0xeeab35 = _0x55ba21.length; _0x7b2181 < _0xeeab35; _0x7b2181++) {
      let _0x537d68 = _0x55ba21[_0x7b2181];
      let _0x42774b = _0x5d9613 && _0x5d9613[_0x7b2181];
      let _0x14c8de;
      if (_0x537d68 != null && _0x537d68 !== true && _0x537d68 !== false) {
        if ((_0x14c8de = typeof _0x537d68) == "object" && _0x537d68.nodeType) {
          _0x160ee0.push(_0x537d68);
        } else if (Array.isArray(_0x537d68)) {
          _0xcad73c = ie(_0x160ee0, _0x537d68, _0x42774b) || _0xcad73c;
        } else if (_0x14c8de === "function") {
          if (_0x478754) {
            while (typeof _0x537d68 == "function") {
              _0x537d68 = _0x537d68();
            }
            _0xcad73c = ie(_0x160ee0, Array.isArray(_0x537d68) ? _0x537d68 : [_0x537d68], Array.isArray(_0x42774b) ? _0x42774b : [_0x42774b]) || _0xcad73c;
          } else {
            _0x160ee0.push(_0x537d68);
            _0xcad73c = true;
          }
        } else {
          const _0x2902d = String(_0x537d68);
          if (_0x42774b && _0x42774b.nodeType === 3 && _0x42774b.data === _0x2902d) {
            _0x160ee0.push(_0x42774b);
          } else {
            _0x160ee0.push(document.createTextNode(_0x2902d));
          }
        }
      }
    }
    return _0xcad73c;
  }
  function de(_0x1f46db, _0xf2defe, _0x5e003d = null) {
    for (let _0x565706 = 0, _0x2338e6 = _0xf2defe.length; _0x565706 < _0x2338e6; _0x565706++) {
      _0x1f46db.insertBefore(_0xf2defe[_0x565706], _0x5e003d);
    }
  }
  function j(_0x58f29f, _0x3b05d4, _0x2c028d, _0x2add59) {
    if (_0x2c028d === undefined) {
      return _0x58f29f.textContent = "";
    }
    const _0x54c49e = _0x2add59 || document.createTextNode("");
    if (_0x3b05d4.length) {
      let _0x52537b = false;
      for (let _0x48f4c9 = _0x3b05d4.length - 1; _0x48f4c9 >= 0; _0x48f4c9--) {
        const _0x2a0fbf = _0x3b05d4[_0x48f4c9];
        if (_0x54c49e !== _0x2a0fbf) {
          const _0x183592 = _0x2a0fbf.parentNode === _0x58f29f;
          if (!_0x52537b && !_0x48f4c9) {
            if (_0x183592) {
              _0x58f29f.replaceChild(_0x54c49e, _0x2a0fbf);
            } else {
              _0x58f29f.insertBefore(_0x54c49e, _0x2c028d);
            }
          } else if (_0x183592) {
            _0x2a0fbf.remove();
          }
        } else {
          _0x52537b = true;
        }
      }
    } else {
      _0x58f29f.insertBefore(_0x54c49e, _0x2c028d);
    }
    return [_0x54c49e];
  }
  const Ie = "_App_1wmf6_1";
  const Ve = "_button_1wmf6_15";
  const De = "_top_1wmf6_33";
  const Re = "_bottom_1wmf6_39";
  const Ke = "_active_1wmf6_45";
  const qe = "_progressBar_1wmf6_48";
  const Fe = "_box_1wmf6_62";
  const Ge = "_logo_1wmf6_71";
  const He = "_logoProgress_1wmf6_89";
  const Qe = "_videoStyle_1wmf6_99";
  const We = "_fadeIn_1wmf6_109";
  const Xe = "_fadeOut_1wmf6_113";
  const b = {
    App: Ie,
    button: Ve,
    top: De,
    bottom: Re,
    active: Ke,
    progressBar: qe,
    box: Fe,
    logo: Ge,
    logoProgress: He,
    videoStyle: Qe,
    fadeIn: We,
    fadeOut: Xe
  };
  const Je = "_social_1yjhx_1";
  const Ye = "_title_1yjhx_20";
  const Ze = {
    social: Je,
    title: Ye
  };
  const ze = re("<div><img>");
  function G(_0x48f76e) {
    return (() => {
      const _0x3ffdef = ze();
      const _0x30881d = _0x3ffdef.firstChild;
      _0x30881d.$$mousedown = _0xb63bdd => _0xb63bdd.preventDefault();
      _0x30881d.$$click = () => {
        window.invokeNative("openUrl", _0x48f76e.link);
      };
      I(_0x40943e => {
        const _0x3c6fdc = Ze.social;
        const _0x58fa4a = _0x48f76e.icon;
        if (_0x3c6fdc !== _0x40943e._v$) {
          C(_0x3ffdef, _0x40943e._v$ = _0x3c6fdc);
        }
        if (_0x58fa4a !== _0x40943e._v$2) {
          le(_0x30881d, "src", _0x40943e._v$2 = _0x58fa4a);
        }
        return _0x40943e;
      }, {
        _v$: undefined,
        _v$2: undefined
      });
      return _0x3ffdef;
    })();
  }
  be(["click", "mousedown"]);
  const et = "" + new URL("twitter-05c1dceb.svg", import.meta.url).href;
  const tt = "" + new URL("youtube-7a39316a.svg", import.meta.url).href;
  const nt = "" + new URL("store-d7be97ee.png", import.meta.url).href;
  const he = "" + new URL("logo-187456c5.png", import.meta.url).href;
  function st(_0x11221d) {
    for (var _0x951a29 = _0x11221d.length, _0x175acd, _0x463615; _0x951a29 !== 0;) {
      _0x463615 = Math.floor(Math.random() * _0x951a29);
      _0x951a29 -= 1;
      _0x175acd = _0x11221d[_0x951a29];
      _0x11221d[_0x951a29] = _0x11221d[_0x463615];
      _0x11221d[_0x463615] = _0x175acd;
    }
    return _0x11221d;
  }
  const lt = re("<div><div class=\"h-full flex flex-col justify-end items-center gap-[2vh]\"><div class=\"w-full flex flex-row justify-start items-center pl-[0.8vh] gap-[0.8vh]\"></div><div class=\"flex flex-row justify-start items-center\"><div><img><div></div></div><div class=\"flex flex-col justify-center items-center gap-[0.6vh]\"><div>nopixel</div><div></div><div>4.0");
  const it = re("<div><div>");
  const se = st(["loadingscreen_overlay_cow.webm", "loadingscreen_overlay_deer.webm", "loadingscreen_overlay_rabbit.webm", "loadingscreen_overlay_raccoon.webm", "loadingscreen_overlay_rat.webm", "loadingscreen_overlay_bird.webm", "loadingscreen_overlay_cat.webm"]);
  const ot = "https://assets.nopixel.net/dev/images/loadingscreen/";
  function rt() {
    function _0x3b1510(_0x59fb6f) {
      const _0x298899 = 100 - _0x33dc43();
      const _0x1b29ef = 100 / 14;
      const _0xa62d30 = (13 - _0x59fb6f) * _0x1b29ef;
      const _0x10c58c = (14 - _0x59fb6f) * _0x1b29ef;
      return "inset(0% " + Math.min(Math.max((_0x298899 - _0xa62d30) / (_0x10c58c - _0xa62d30), 0), 1) * 100 + "% 0% 0%)";
    }
    fe(async () => {
      window.addEventListener("message", _0x5711c5 => {
        if (_0x5711c5.data.eventName === "loadProgress") {
          _0x1c06b9(Math.round(_0x5711c5.data.loadFraction * 100));
        }
      });
    });
    const [_0x33dc43, _0x1c06b9] = Q(0);
    const [_0x3e2c94, _0x268f19] = Q("faq");
    let _0x17f457;
    const [_0x5440de, _0x35ed3e] = Q([]);
    const _0x15967c = async () => {
      const _0x3b59d4 = [];
      for (let _0x4d21f4 = 0; _0x4d21f4 < se.length; _0x4d21f4++) {
        const _0x4d55f5 = document.createElement("video");
        _0x4d55f5.src = "" + ot + se[_0x4d21f4];
        _0x4d55f5.muted = true;
        await new Promise(_0x518b22 => {
          _0x4d55f5.addEventListener("canplaythrough", () => {
            _0x518b22(true);
          });
        });
        _0x3b59d4.push(_0x4d55f5);
      }
      _0x35ed3e(_0x3b59d4);
    };
    const _0x16fba4 = (_0x3015fa, _0xa57026) => {
      let _0x3df7a3 = _0x5440de()[_0x3015fa];
      _0x17f457.appendChild(_0x3df7a3);
      if (!_0xa57026) {
        _0x3df7a3.classList.add(b.fadeIn);
      }
      _0x3df7a3.classList.add(b.videoStyle);
      _0x3df7a3.play();
      let _0x1c7313 = false;
      _0x3df7a3.addEventListener("timeupdate", () => {
        if (_0x3df7a3.currentTime >= _0x3df7a3.duration - 5) {
          if (_0x1c7313) {
            return;
          }
          _0x1c7313 = true;
          setTimeout(() => {
            _0x3df7a3.classList.add(b.fadeOut);
            setTimeout(() => {
              const _0x182644 = _0x17f457.querySelector("video");
              if (_0x182644) {
                _0x17f457.removeChild(_0x182644);
              }
            }, 1000);
          }, 1000);
          _0x3015fa++;
          if (_0x3015fa >= se.length) {
            _0x3015fa = 0;
          }
          _0x16fba4(_0x3015fa);
        }
      });
    };
    fe(() => {
      _0x15967c().then(() => {
        _0x16fba4(0, true);
      });
    });
    return (() => {
      const _0x53af05 = lt();
      const _0x3027c3 = _0x53af05.firstChild;
      const _0x347fb8 = _0x3027c3.firstChild;
      const _0x2927b0 = _0x347fb8.nextSibling;
      const _0x4c16b8 = _0x2927b0.firstChild;
      const _0x395092 = _0x4c16b8.firstChild;
      const _0x40fd46 = _0x395092.nextSibling;
      const _0x1e9892 = _0x4c16b8.nextSibling;
      const _0x350fc9 = _0x1e9892.firstChild;
      const _0xfffa4e = _0x350fc9.nextSibling;
      const _0x2420c8 = _0xfffa4e.nextSibling;
      const _0x28d8d7 = _0x17f457;
      if (typeof _0x28d8d7 == "function") {
        Me(_0x28d8d7, _0x53af05);
      } else {
        _0x17f457 = _0x53af05;
      }
      U(_0x347fb8, M(G, {
        icon: et,
        link: "https://twitter.com/nopixeltweets"
      }), null);
      U(_0x347fb8, M(G, {
        icon: tt,
        link: "https://www.youtube.com/@nopixelofficial"
      }), null);
      U(_0x347fb8, M(G, {
        icon: nt,
        link: "https://store.nopixel.net/"
      }), null);
      U(_0x347fb8, M(G, {
        icon: he,
        link: "https://nopixel.net/"
      }), null);
      le(_0x395092, "src", he);
      le(_0x395092, "draggable", false);
      _0x350fc9.$$click = () => {
        _0x268f19("faq");
      };
      U(_0xfffa4e, M(Oe, {
        get each() {
          return Array(13);
        },
        children: (_0x118a45, _0xa8d191) => (() => {
          const _0x75fe36 = it();
          const _0x1000e5 = _0x75fe36.firstChild;
          I(_0x130327 => {
            const _0x32bc3b = b.box;
            const _0x3634ea = b.box;
            const _0x574e91 = {
              [b.active]: true
            };
            const _0xb35bfc = _0x3b1510(_0xa8d191());
            if (_0x32bc3b !== _0x130327._v$10) {
              C(_0x75fe36, _0x130327._v$10 = _0x32bc3b);
            }
            if (_0x3634ea !== _0x130327._v$11) {
              C(_0x1000e5, _0x130327._v$11 = _0x3634ea);
            }
            _0x130327._v$12 = ne(_0x1000e5, _0x574e91, _0x130327._v$12);
            if (_0xb35bfc !== _0x130327._v$13) {
              if ((_0x130327._v$13 = _0xb35bfc) != null) {
                _0x1000e5.style.setProperty("clip-path", _0xb35bfc);
              } else {
                _0x1000e5.style.removeProperty("clip-path");
              }
            }
            return _0x130327;
          }, {
            _v$10: undefined,
            _v$11: undefined,
            _v$12: undefined,
            _v$13: undefined
          });
          return _0x75fe36;
        })()
      }));
      _0x2420c8.$$click = () => {
        _0x268f19("tutorials");
      };
      I(_0x5a1786 => {
        const _0x138b52 = b.App;
        const _0x86ba24 = b.logo;
        const _0x5a0cfa = b.logoProgress;
        const _0x4c538a = "inset(" + (100 - _0x33dc43()) + "% 0% 0% 0%)";
        const _0x3aebd2 = b.button;
        const _0x2a9666 = {
          [b.top]: true
        };
        const _0x3b35b2 = b.progressBar;
        const _0x2093d0 = b.button;
        const _0x44e61d = {
          [b.bottom]: true
        };
        if (_0x138b52 !== _0x5a1786._v$) {
          C(_0x53af05, _0x5a1786._v$ = _0x138b52);
        }
        if (_0x86ba24 !== _0x5a1786._v$2) {
          C(_0x4c16b8, _0x5a1786._v$2 = _0x86ba24);
        }
        if (_0x5a0cfa !== _0x5a1786._v$3) {
          C(_0x40fd46, _0x5a1786._v$3 = _0x5a0cfa);
        }
        if (_0x4c538a !== _0x5a1786._v$4) {
          if ((_0x5a1786._v$4 = _0x4c538a) != null) {
            _0x40fd46.style.setProperty("clip-path", _0x4c538a);
          } else {
            _0x40fd46.style.removeProperty("clip-path");
          }
        }
        if (_0x3aebd2 !== _0x5a1786._v$5) {
          C(_0x350fc9, _0x5a1786._v$5 = _0x3aebd2);
        }
        _0x5a1786._v$6 = ne(_0x350fc9, _0x2a9666, _0x5a1786._v$6);
        if (_0x3b35b2 !== _0x5a1786._v$7) {
          C(_0xfffa4e, _0x5a1786._v$7 = _0x3b35b2);
        }
        if (_0x2093d0 !== _0x5a1786._v$8) {
          C(_0x2420c8, _0x5a1786._v$8 = _0x2093d0);
        }
        _0x5a1786._v$9 = ne(_0x2420c8, _0x44e61d, _0x5a1786._v$9);
        return _0x5a1786;
      }, {
        _v$: undefined,
        _v$2: undefined,
        _v$3: undefined,
        _v$4: undefined,
        _v$5: undefined,
        _v$6: undefined,
        _v$7: undefined,
        _v$8: undefined,
        _v$9: undefined
      });
      return _0x53af05;
    })();
  }
  be(["click"]);
  je(() => M(rt, {}), document.getElementById("root"));