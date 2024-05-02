(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) {
    return;
  }
  for (const i of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
    n(i);
  }
  new MutationObserver(i => {
    for (const a of i) {
      if (a.type === "childList") {
        for (const o of a.addedNodes) {
          if (o.tagName === "LINK" && o.rel === "modulepreload") {
            n(o);
          }
        }
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function t(i) {
    const a = {};
    if (i.integrity) {
      a.integrity = i.integrity;
    }
    if (i.referrerPolicy) {
      a.referrerPolicy = i.referrerPolicy;
    }
    if (i.crossOrigin === "use-credentials") {
      a.credentials = "include";
    } else if (i.crossOrigin === "anonymous") {
      a.credentials = "omit";
    } else {
      a.credentials = "same-origin";
    }
    return a;
  }
  function n(i) {
    if (i.ep) {
      return;
    }
    i.ep = true;
    const a = t(i);
    fetch(i.href, a);
  }
})();
const Ol = (e, r) => e === r;
const ut = Symbol("solid-proxy");
const gi = Symbol("solid-track");
const Nl = Symbol("solid-dev-component");
const mi = {
  equals: Ol
};
let Lo = Wo;
const $t = 1;
const yi = 2;
const Po = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var ze = null;
let ia = null;
let Ie = null;
let He = null;
let It = null;
let Vi = 0;
const [Fl, wv] = Ke(false);
function $r(e, r) {
  const t = Ie;
  const n = ze;
  const i = e.length === 0;
  const a = i ? Po : {
    owned: null,
    cleanups: null,
    context: null,
    owner: r === undefined ? n : r
  };
  const o = i ? e : () => e(() => Se(() => Ki(a)));
  ze = a;
  Ie = null;
  try {
    return gr(o, true);
  } finally {
    Ie = t;
    ze = n;
  }
}
function Ke(e, r) {
  r = r ? Object.assign({}, mi, r) : mi;
  const t = {
    value: e,
    observers: null,
    observerSlots: null,
    comparator: r.equals || undefined
  };
  const n = i => {
    if (typeof i == "function") {
      i = i(t.value);
    }
    return Ho(t, i);
  };
  return [Zo.bind(t), n];
}
function or(e, r, t) {
  const n = qi(e, r, true, $t);
  qr(n);
}
function Oe(e, r, t) {
  const n = qi(e, r, false, $t);
  qr(n);
}
function mt(e, r, t) {
  Lo = jl;
  const n = qi(e, r, false, $t);
  if (!t || !t.render) {
    n.user = true;
  }
  if (It) {
    It.push(n);
  } else {
    qr(n);
  }
}
function $e(e, r, t) {
  t = t ? Object.assign({}, mi, t) : mi;
  const n = qi(e, r, true, 0);
  n.observers = null;
  n.observerSlots = null;
  n.comparator = t.equals || undefined;
  qr(n);
  return Zo.bind(n);
}
function nt(e) {
  return gr(e, false);
}
function Se(e) {
  if (Ie === null) {
    return e();
  }
  const r = Ie;
  Ie = null;
  try {
    return e();
  } finally {
    Ie = r;
  }
}
function Kn(e) {
  mt(() => Se(e));
}
function Kt(e) {
  if (ze !== null) {
    if (ze.cleanups === null) {
      ze.cleanups = [e];
    } else {
      ze.cleanups.push(e);
    }
  }
  return e;
}
function Mo() {
  return Ie;
}
function Ul(e) {
  const r = Ie;
  const t = ze;
  return Promise.resolve().then(() => {
    Ie = r;
    ze = t;
    let n;
    gr(e, false);
    Ie = ze = null;
    if (n) {
      return n.done;
    } else {
      return undefined;
    }
  });
}
function Ll() {
  return [Fl, Ul];
}
function es(e, r) {
  const t = Symbol("context");
  return {
    id: t,
    Provider: Zl(t),
    defaultValue: e
  };
}
function ts(e) {
  let r;
  if ((r = Ko(ze, e.id)) !== undefined) {
    return r;
  } else {
    return e.defaultValue;
  }
}
function jo(e) {
  const r = $e(e);
  const t = $e(() => Ta(r()));
  t.toArray = () => {
    const n = t();
    if (Array.isArray(n)) {
      return n;
    } else if (n != null) {
      return [n];
    } else {
      return [];
    }
  };
  return t;
}
function Zo() {
  if (this.sources && this.state) {
    if (this.state === $t) {
      qr(this);
    } else {
      const e = He;
      He = null;
      gr(() => bi(this), false);
      He = e;
    }
  }
  if (Ie) {
    const e = this.observers ? this.observers.length : 0;
    if (Ie.sources) {
      Ie.sources.push(this);
      Ie.sourceSlots.push(e);
    } else {
      Ie.sources = [this];
      Ie.sourceSlots = [e];
    }
    if (this.observers) {
      this.observers.push(Ie);
      this.observerSlots.push(Ie.sources.length - 1);
    } else {
      this.observers = [Ie];
      this.observerSlots = [Ie.sources.length - 1];
    }
  }
  return this.value;
}
function Ho(e, r, t) {
  let n = e.value;
  if (!e.comparator || !e.comparator(n, r)) {
    e.value = r;
    if (e.observers && e.observers.length) {
      gr(() => {
        for (let i = 0; i < e.observers.length; i += 1) {
          const a = e.observers[i];
          const o = ia && ia.running;
          if (o) {
            ia.disposed.has(a);
          }
          if (o ? !a.tState : !a.state) {
            if (a.pure) {
              He.push(a);
            } else {
              It.push(a);
            }
            if (a.observers) {
              Vo(a);
            }
          }
          if (!o) {
            a.state = $t;
          }
        }
        if (He.length > 1000000) {
          He = [];
          throw new Error();
        }
      }, false);
    }
  }
  return r;
}
function qr(e) {
  if (!e.fn) {
    return;
  }
  Ki(e);
  const r = ze;
  const t = Ie;
  const n = Vi;
  Ie = ze = e;
  Pl(e, e.value, n);
  Ie = t;
  ze = r;
}
function Pl(e, r, t) {
  let n;
  try {
    n = e.fn(r);
  } catch (i) {
    if (e.pure) {
      e.state = $t;
      if (e.owned) {
        e.owned.forEach(Ki);
      }
      e.owned = null;
    }
    e.updatedAt = t + 1;
    return qo(i);
  }
  if (!e.updatedAt || e.updatedAt <= t) {
    if (e.updatedAt != null && "observers" in e) {
      Ho(e, n);
    } else {
      e.value = n;
    }
    e.updatedAt = t;
  }
}
function qi(e, r, t, n = $t, i) {
  const a = {
    fn: e,
    state: n,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: r,
    owner: ze,
    context: null,
    pure: t
  };
  if (ze !== null) {
    if (ze !== Po) {
      if (ze.owned) {
        ze.owned.push(a);
      } else {
        ze.owned = [a];
      }
    }
  }
  return a;
}
function wi(e) {
  if (e.state === 0) {
    return;
  }
  if (e.state === yi) {
    return bi(e);
  }
  if (e.suspense && Se(e.suspense.inFallback)) {
    return e.suspense.effects.push(e);
  }
  const r = [e];
  while ((e = e.owner) && (!e.updatedAt || e.updatedAt < Vi)) {
    if (e.state) {
      r.push(e);
    }
  }
  for (let t = r.length - 1; t >= 0; t--) {
    e = r[t];
    if (e.state === $t) {
      qr(e);
    } else if (e.state === yi) {
      const n = He;
      He = null;
      gr(() => bi(e, r[0]), false);
      He = n;
    }
  }
}
function gr(e, r) {
  if (He) {
    return e();
  }
  let t = false;
  if (!r) {
    He = [];
  }
  if (It) {
    t = true;
  } else {
    It = [];
  }
  Vi++;
  try {
    const n = e();
    Ml(t);
    return n;
  } catch (n) {
    if (!t) {
      It = null;
    }
    He = null;
    qo(n);
  }
}
function Ml(e) {
  if (He) {
    Wo(He);
    He = null;
  }
  if (e) {
    return;
  }
  const r = It;
  It = null;
  if (r.length) {
    gr(() => Lo(r), false);
  }
}
function Wo(e) {
  for (let r = 0; r < e.length; r++) {
    wi(e[r]);
  }
}
function jl(e) {
  let r;
  let t = 0;
  for (r = 0; r < e.length; r++) {
    const n = e[r];
    if (n.user) {
      e[t++] = n;
    } else {
      wi(n);
    }
  }
  for (r = 0; r < t; r++) {
    wi(e[r]);
  }
}
function bi(e, r) {
  e.state = 0;
  for (let t = 0; t < e.sources.length; t += 1) {
    const n = e.sources[t];
    if (n.sources) {
      const i = n.state;
      if (i === $t) {
        if (n !== r && (!n.updatedAt || n.updatedAt < Vi)) {
          wi(n);
        }
      } else if (i === yi) {
        bi(n, r);
      }
    }
  }
}
function Vo(e) {
  for (let r = 0; r < e.observers.length; r += 1) {
    const t = e.observers[r];
    if (!t.state) {
      t.state = yi;
      if (t.pure) {
        He.push(t);
      } else {
        It.push(t);
      }
      if (t.observers) {
        Vo(t);
      }
    }
  }
}
function Ki(e) {
  let r;
  if (e.sources) {
    while (e.sources.length) {
      const t = e.sources.pop();
      const n = e.sourceSlots.pop();
      const i = t.observers;
      if (i && i.length) {
        const a = i.pop();
        const o = t.observerSlots.pop();
        if (n < i.length) {
          a.sourceSlots[o] = n;
          i[n] = a;
          t.observerSlots[n] = o;
        }
      }
    }
  }
  if (e.owned) {
    for (r = e.owned.length - 1; r >= 0; r--) {
      Ki(e.owned[r]);
    }
    e.owned = null;
  }
  if (e.cleanups) {
    for (r = e.cleanups.length - 1; r >= 0; r--) {
      e.cleanups[r]();
    }
    e.cleanups = null;
  }
  e.state = 0;
  e.context = null;
}
function qo(e) {
  throw e;
}
function Ko(e, r) {
  if (e) {
    if (e.context && e.context[r] !== undefined) {
      return e.context[r];
    } else {
      return Ko(e.owner, r);
    }
  } else {
    return undefined;
  }
}
function Ta(e) {
  if (typeof e == "function" && !e.length) {
    return Ta(e());
  }
  if (Array.isArray(e)) {
    const r = [];
    for (let t = 0; t < e.length; t++) {
      const n = Ta(e[t]);
      if (Array.isArray(n)) {
        r.push.apply(r, n);
      } else {
        r.push(n);
      }
    }
    return r;
  }
  return e;
}
function Zl(e, r) {
  return function (n) {
    let i;
    Oe(() => i = Se(() => {
      ze.context = {
        [e]: n.value
      };
      return jo(() => n.children);
    }), undefined);
    return i;
  };
}
const Ia = Symbol("fallback");
function xi(e) {
  for (let r = 0; r < e.length; r++) {
    e[r]();
  }
}
function Hl(e, r, t = {}) {
  let n = [];
  let i = [];
  let a = [];
  let o = 0;
  let s = r.length > 1 ? [] : null;
  Kt(() => xi(a));
  return () => {
    let d = e() || [];
    let c;
    let l;
    d[gi];
    return Se(() => {
      let h = d.length;
      let v;
      let _;
      let y;
      let g;
      let E;
      let A;
      let I;
      let b;
      let T;
      if (h === 0) {
        if (o !== 0) {
          xi(a);
          a = [];
          n = [];
          i = [];
          o = 0;
          s &&= [];
        }
        if (t.fallback) {
          n = [Ia];
          i[0] = $r(R => {
            a[0] = R;
            return t.fallback();
          });
          o = 1;
        }
      } else if (o === 0) {
        i = new Array(h);
        l = 0;
        for (; l < h; l++) {
          n[l] = d[l];
          i[l] = $r(m);
        }
        o = h;
      } else {
        y = new Array(h);
        g = new Array(h);
        if (s) {
          E = new Array(h);
        }
        A = 0;
        I = Math.min(o, h);
        for (; A < I && n[A] === d[A]; A++);
        I = o - 1;
        b = h - 1;
        for (; I >= A && b >= A && n[I] === d[b]; I--, b--) {
          y[b] = i[I];
          g[b] = a[I];
          if (s) {
            E[b] = s[I];
          }
        }
        v = new Map();
        _ = new Array(b + 1);
        l = b;
        for (; l >= A; l--) {
          T = d[l];
          c = v.get(T);
          _[l] = c === undefined ? -1 : c;
          v.set(T, l);
        }
        for (c = A; c <= I; c++) {
          T = n[c];
          l = v.get(T);
          if (l !== undefined && l !== -1) {
            y[l] = i[c];
            g[l] = a[c];
            if (s) {
              E[l] = s[c];
            }
            l = _[l];
            v.set(T, l);
          } else {
            a[c]();
          }
        }
        for (l = A; l < h; l++) {
          if (l in y) {
            i[l] = y[l];
            a[l] = g[l];
            if (s) {
              s[l] = E[l];
              s[l](l);
            }
          } else {
            i[l] = $r(m);
          }
        }
        i = i.slice(0, o = h);
        n = d.slice(0);
      }
      return i;
    });
    function m(h) {
      a[l] = h;
      if (s) {
        const [v, _] = Ke(l);
        s[l] = _;
        return r(d[l], v);
      }
      return r(d[l]);
    }
  };
}
function Wl(e, r, t = {}) {
  let n = [];
  let i = [];
  let a = [];
  let o = [];
  let s = 0;
  let d;
  Kt(() => xi(a));
  return () => {
    const c = e() || [];
    c[gi];
    return Se(() => {
      if (c.length === 0) {
        if (s !== 0) {
          xi(a);
          a = [];
          n = [];
          i = [];
          s = 0;
          o = [];
        }
        if (t.fallback) {
          n = [Ia];
          i[0] = $r(m => {
            a[0] = m;
            return t.fallback();
          });
          s = 1;
        }
        return i;
      }
      if (n[0] === Ia) {
        a[0]();
        a = [];
        n = [];
        i = [];
        s = 0;
      }
      d = 0;
      for (; d < c.length; d++) {
        if (d < n.length && n[d] !== c[d]) {
          o[d](() => c[d]);
        } else if (d >= n.length) {
          i[d] = $r(l);
        }
      }
      for (; d < n.length; d++) {
        a[d]();
      }
      s = o.length = a.length = c.length;
      n = c.slice(0);
      return i = i.slice(0, s);
    });
    function l(m) {
      a[d] = m;
      const [h, v] = Ke(c[d]);
      o[d] = v;
      return r(h, d);
    }
  };
}
function Ae(e, r) {
  return Se(() => e(r || {}));
}
function ri() {
  return true;
}
const Ba = {
  get(e, r, t) {
    if (r === ut) {
      return t;
    } else {
      return e.get(r);
    }
  },
  has(e, r) {
    if (r === ut) {
      return true;
    } else {
      return e.has(r);
    }
  },
  set: ri,
  deleteProperty: ri,
  getOwnPropertyDescriptor(e, r) {
    return {
      configurable: true,
      enumerable: true,
      get() {
        return e.get(r);
      },
      set: ri,
      deleteProperty: ri
    };
  },
  ownKeys(e) {
    return e.keys();
  }
};
function aa(e) {
  if (e = typeof e == "function" ? e() : e) {
    return e;
  } else {
    return {};
  }
}
function Vl() {
  for (let e = 0, r = this.length; e < r; ++e) {
    const t = this[e]();
    if (t !== undefined) {
      return t;
    }
  }
}
function Gi(...e) {
  let r = false;
  for (let a = 0; a < e.length; a++) {
    const o = e[a];
    r = r || !!o && ut in o;
    e[a] = typeof o == "function" ? (r = true, $e(o)) : o;
  }
  if (r) {
    return new Proxy({
      get(a) {
        for (let o = e.length - 1; o >= 0; o--) {
          const s = aa(e[o])[a];
          if (s !== undefined) {
            return s;
          }
        }
      },
      has(a) {
        for (let o = e.length - 1; o >= 0; o--) {
          if (a in aa(e[o])) {
            return true;
          }
        }
        return false;
      },
      keys() {
        const a = [];
        for (let o = 0; o < e.length; o++) {
          a.push(...Object.keys(aa(e[o])));
        }
        return [...new Set(a)];
      }
    }, Ba);
  }
  const t = {};
  const n = {};
  let i = false;
  for (let a = e.length - 1; a >= 0; a--) {
    const o = e[a];
    if (!o) {
      continue;
    }
    const s = Object.getOwnPropertyNames(o);
    i = i || a !== 0 && !!s.length;
    for (let d = 0, c = s.length; d < c; d++) {
      const l = s[d];
      if (l !== "__proto__" && l !== "constructor") {
        if (l in t) {
          const m = n[l];
          const h = Object.getOwnPropertyDescriptor(o, l);
          if (m) {
            if (h.get) {
              m.push(h.get.bind(o));
            } else if (h.value !== undefined) {
              m.push(() => h.value);
            }
          } else if (t[l] === undefined) {
            t[l] = h.value;
          }
        } else {
          const m = Object.getOwnPropertyDescriptor(o, l);
          if (m.get) {
            Object.defineProperty(t, l, {
              enumerable: true,
              configurable: true,
              get: Vl.bind(n[l] = [m.get.bind(o)])
            });
          } else {
            t[l] = m.value;
          }
        }
      }
    }
  }
  return t;
}
function ql(e, ...r) {
  if (ut in e) {
    const i = new Set(r.length > 1 ? r.flat() : r[0]);
    const a = r.map(o => new Proxy({
      get(s) {
        if (o.includes(s)) {
          return e[s];
        } else {
          return undefined;
        }
      },
      has(s) {
        return o.includes(s) && s in e;
      },
      keys() {
        return o.filter(s => s in e);
      }
    }, Ba));
    a.push(new Proxy({
      get(o) {
        if (i.has(o)) {
          return undefined;
        } else {
          return e[o];
        }
      },
      has(o) {
        if (i.has(o)) {
          return false;
        } else {
          return o in e;
        }
      },
      keys() {
        return Object.keys(e).filter(o => !i.has(o));
      }
    }, Ba));
    return a;
  }
  const t = {};
  const n = r.map(() => ({}));
  for (const i of Object.getOwnPropertyNames(e)) {
    const a = Object.getOwnPropertyDescriptor(e, i);
    const o = !a.get && !a.set && a.enumerable && a.writable && a.configurable;
    let s = false;
    let d = 0;
    for (const c of r) {
      if (c.includes(i)) {
        s = true;
        if (o) {
          n[d][i] = a.value;
        } else {
          Object.defineProperty(n[d], i, a);
        }
      }
      ++d;
    }
    if (!s) {
      if (o) {
        t[i] = a.value;
      } else {
        Object.defineProperty(t, i, a);
      }
    }
  }
  return [...n, t];
}
const Kl = e => `Stale read from <${e}>.`;
function rs(e) {
  const r = "fallback" in e && {
    fallback: () => e.fallback
  };
  return $e(Hl(() => e.each, e.children, r || undefined));
}
function Ls(e) {
  const r = "fallback" in e && {
    fallback: () => e.fallback
  };
  return $e(Wl(() => e.each, e.children, r || undefined));
}
function Lr(e) {
  const r = e.keyed;
  const t = $e(() => e.when, undefined, {
    equals: (n, i) => r ? n === i : !n == !i
  });
  return $e(() => {
    const n = t();
    if (n) {
      const i = e.children;
      if (typeof i == "function" && i.length > 0) {
        return Se(() => i(r ? n : () => {
          if (!Se(t)) {
            throw Kl("Show");
          }
          return e.when;
        }));
      } else {
        return i;
      }
    }
    return e.fallback;
  }, undefined, undefined);
}
const Gl = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"];
const Xl = new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...Gl]);
const Yl = new Set(["innerHTML", "textContent", "innerText", "children"]);
const Jl = Object.assign(Object.create(null), {
  className: "class",
  htmlFor: "for"
});
const Ql = Object.assign(Object.create(null), {
  class: "className",
  formnovalidate: {
    $: "formNoValidate",
    BUTTON: 1,
    INPUT: 1
  },
  ismap: {
    $: "isMap",
    IMG: 1
  },
  nomodule: {
    $: "noModule",
    SCRIPT: 1
  },
  playsinline: {
    $: "playsInline",
    VIDEO: 1
  },
  readonly: {
    $: "readOnly",
    INPUT: 1,
    TEXTAREA: 1
  }
});
function eu(e, r) {
  const t = Ql[e];
  if (typeof t == "object") {
    if (t[r]) {
      return t.$;
    } else {
      return undefined;
    }
  } else {
    return t;
  }
}
const tu = new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]);
const ru = new Set(["altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "linearGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "set", "stop", "svg", "switch", "symbol", "text", "textPath", "tref", "tspan", "use", "view", "vkern"]);
const nu = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};
function iu(e, r, t) {
  let n = t.length;
  let i = r.length;
  let a = n;
  let o = 0;
  let s = 0;
  let d = r[i - 1].nextSibling;
  let c = null;
  while (o < i || s < a) {
    if (r[o] === t[s]) {
      o++;
      s++;
      continue;
    }
    while (r[i - 1] === t[a - 1]) {
      i--;
      a--;
    }
    if (i === o) {
      const l = a < n ? s ? t[s - 1].nextSibling : t[a - s] : d;
      while (s < a) {
        e.insertBefore(t[s++], l);
      }
    } else if (a === s) {
      while (o < i) {
        if (!c || !c.has(r[o])) {
          r[o].remove();
        }
        o++;
      }
    } else if (r[o] === t[a - 1] && t[s] === r[i - 1]) {
      const l = r[--i].nextSibling;
      e.insertBefore(t[s++], r[o++].nextSibling);
      e.insertBefore(t[--a], l);
      r[i] = t[a];
    } else {
      if (!c) {
        c = new Map();
        let m = s;
        while (m < a) {
          c.set(t[m], m++);
        }
      }
      const l = c.get(r[o]);
      if (l != null) {
        if (s < l && l < a) {
          let m = o;
          let h = 1;
          let v;
          while (++m < i && m < a && (v = c.get(r[m])) != null && v === l + h) {
            h++;
          }
          if (h > l - s) {
            const _ = r[o];
            while (s < l) {
              e.insertBefore(t[s++], _);
            }
          } else {
            e.replaceChild(t[s++], r[o++]);
          }
        } else {
          o++;
        }
      } else {
        r[o++].remove();
      }
    }
  }
}
const Ps = "_$DX_DELEGATE";
function au(e, r, t, n = {}) {
  let i;
  $r(a => {
    i = a;
    if (r === document) {
      e();
    } else {
      Fe(r, e(), r.firstChild ? null : undefined, t);
    }
  }, n.owner);
  return () => {
    i();
    r.textContent = "";
  };
}
function tt(e, r, t) {
  let n;
  const i = () => {
    const o = document.createElement("template");
    o.innerHTML = e;
    if (t) {
      return o.content.firstChild.firstChild;
    } else {
      return o.content.firstChild;
    }
  };
  const a = r ? () => Se(() => document.importNode(n ||= i(), true)) : () => (n ||= i()).cloneNode(true);
  a.cloneNode = a;
  return a;
}
function Gn(e, r = window.document) {
  const t = r[Ps] ||= new Set();
  for (let n = 0, i = e.length; n < i; n++) {
    const a = e[n];
    if (!t.has(a)) {
      t.add(a);
      r.addEventListener(a, uu);
    }
  }
}
function Pr(e, r, t) {
  if (t == null) {
    e.removeAttribute(r);
  } else {
    e.setAttribute(r, t);
  }
}
function su(e, r, t, n) {
  if (n == null) {
    e.removeAttributeNS(r, t);
  } else {
    e.setAttributeNS(r, t, n);
  }
}
function ke(e, r) {
  if (r == null) {
    e.removeAttribute("class");
  } else {
    e.className = r;
  }
}
function ou(e, r, t, n) {
  if (n) {
    if (Array.isArray(t)) {
      e[`$$${r}`] = t[0];
      e[`$$${r}Data`] = t[1];
    } else {
      e[`$$${r}`] = t;
    }
  } else if (Array.isArray(t)) {
    const i = t[0];
    e.addEventListener(r, t[0] = a => i.call(e, t[1], a));
  } else {
    e.addEventListener(r, t);
  }
}
function ns(e, r, t = {}) {
  const n = Object.keys(r || {});
  const i = Object.keys(t);
  let a;
  let o;
  a = 0;
  o = i.length;
  for (; a < o; a++) {
    const s = i[a];
    if (!!s && s !== "undefined" && !r[s]) {
      Ms(e, s, false);
      delete t[s];
    }
  }
  a = 0;
  o = n.length;
  for (; a < o; a++) {
    const s = n[a];
    const d = !!r[s];
    if (!!s && s !== "undefined" && t[s] !== d && !!d) {
      Ms(e, s, true);
      t[s] = d;
    }
  }
  return t;
}
function Go(e, r, t) {
  if (!r) {
    if (t) {
      return Pr(e, "style");
    } else {
      return r;
    }
  }
  const n = e.style;
  if (typeof r == "string") {
    return n.cssText = r;
  }
  if (typeof t == "string") {
    n.cssText = t = undefined;
  }
  t ||= {};
  r ||= {};
  let i;
  let a;
  for (a in t) {
    if (r[a] == null) {
      n.removeProperty(a);
    }
    delete t[a];
  }
  for (a in r) {
    i = r[a];
    if (i !== t[a]) {
      n.setProperty(a, i);
      t[a] = i;
    }
  }
  return t;
}
function is(e, r = {}, t, n) {
  const i = {};
  if (!n) {
    Oe(() => i.children = Mr(e, r.children, i.children));
  }
  Oe(() => r.ref && r.ref(e));
  Oe(() => cu(e, r, t, true, i, true));
  return i;
}
function wn(e, r, t) {
  return Se(() => e(r, t));
}
function Fe(e, r, t, n) {
  if (t !== undefined && !n) {
    n = [];
  }
  if (typeof r != "function") {
    return Mr(e, r, n, t);
  }
  Oe(i => Mr(e, r(), i, t), n);
}
function cu(e, r, t, n, i = {}, a = false) {
  r ||= {};
  for (const o in i) {
    if (!(o in r)) {
      if (o === "children") {
        continue;
      }
      i[o] = js(e, o, null, i[o], t, a);
    }
  }
  for (const o in r) {
    if (o === "children") {
      if (!n) {
        Mr(e, r.children);
      }
      continue;
    }
    const s = r[o];
    i[o] = js(e, o, s, i[o], t, a);
  }
}
function lu(e) {
  return e.toLowerCase().replace(/-([a-z])/g, (r, t) => t.toUpperCase());
}
function Ms(e, r, t) {
  const n = r.trim().split(/\s+/);
  for (let i = 0, a = n.length; i < a; i++) {
    e.classList.toggle(n[i], t);
  }
}
function js(e, r, t, n, i, a) {
  let o;
  let s;
  let d;
  let c;
  let l;
  if (r === "style") {
    return Go(e, t, n);
  }
  if (r === "classList") {
    return ns(e, t, n);
  }
  if (t === n) {
    return n;
  }
  if (r === "ref") {
    if (!a) {
      t(e);
    }
  } else if (r.slice(0, 3) === "on:") {
    const m = r.slice(3);
    if (n) {
      e.removeEventListener(m, n);
    }
    if (t) {
      e.addEventListener(m, t);
    }
  } else if (r.slice(0, 10) === "oncapture:") {
    const m = r.slice(10);
    if (n) {
      e.removeEventListener(m, n, true);
    }
    if (t) {
      e.addEventListener(m, t, true);
    }
  } else if (r.slice(0, 2) === "on") {
    const m = r.slice(2).toLowerCase();
    const h = tu.has(m);
    if (!h && n) {
      const v = Array.isArray(n) ? n[0] : n;
      e.removeEventListener(m, v);
    }
    if (h || t) {
      ou(e, m, t, h);
      if (h) {
        Gn([m]);
      }
    }
  } else if (r.slice(0, 5) === "attr:") {
    Pr(e, r.slice(5), t);
  } else if ((l = r.slice(0, 5) === "prop:") || (d = Yl.has(r)) || !i && ((c = eu(r, e.tagName)) || (s = Xl.has(r))) || (o = e.nodeName.includes("-"))) {
    if (l) {
      r = r.slice(5);
      s = true;
    }
    if (r === "class" || r === "className") {
      ke(e, t);
    } else if (o && !s && !d) {
      e[lu(r)] = t;
    } else {
      e[c || r] = t;
    }
  } else {
    const m = i && r.indexOf(":") > -1 && nu[r.split(":")[0]];
    if (m) {
      su(e, m, r, t);
    } else {
      Pr(e, Jl[r] || r, t);
    }
  }
  return t;
}
function uu(e) {
  const r = `$$${e.type}`;
  let t = e.composedPath && e.composedPath()[0] || e.target;
  if (e.target !== t) {
    Object.defineProperty(e, "target", {
      configurable: true,
      value: t
    });
  }
  Object.defineProperty(e, "currentTarget", {
    configurable: true,
    get() {
      return t || document;
    }
  });
  while (t) {
    const n = t[r];
    if (n && !t.disabled) {
      const i = t[`${r}Data`];
      if (i !== undefined) {
        n.call(t, i, e);
      } else {
        n.call(t, e);
      }
      if (e.cancelBubble) {
        return;
      }
    }
    t = t._$host || t.parentNode || t.host;
  }
}
function Mr(e, r, t, n, i) {
  while (typeof t == "function") {
    t = t();
  }
  if (r === t) {
    return t;
  }
  const a = typeof r;
  const o = n !== undefined;
  e = o && t[0] && t[0].parentNode || e;
  if (a === "string" || a === "number") {
    if (a === "number") {
      r = r.toString();
    }
    if (o) {
      let s = t[0];
      if (s && s.nodeType === 3) {
        s.data = r;
      } else {
        s = document.createTextNode(r);
      }
      t = xr(e, t, n, s);
    } else if (t !== "" && typeof t == "string") {
      t = e.firstChild.data = r;
    } else {
      t = e.textContent = r;
    }
  } else if (r == null || a === "boolean") {
    t = xr(e, t, n);
  } else {
    if (a === "function") {
      Oe(() => {
        let s = r();
        while (typeof s == "function") {
          s = s();
        }
        t = Mr(e, s, t, n);
      });
      return () => t;
    }
    if (Array.isArray(r)) {
      const s = [];
      const d = t && Array.isArray(t);
      if (Da(s, r, t, i)) {
        Oe(() => t = Mr(e, s, t, n, true));
        return () => t;
      }
      if (s.length === 0) {
        t = xr(e, t, n);
        if (o) {
          return t;
        }
      } else if (d) {
        if (t.length === 0) {
          Zs(e, s, n);
        } else {
          iu(e, t, s);
        }
      } else {
        if (t) {
          xr(e);
        }
        Zs(e, s);
      }
      t = s;
    } else if (r.nodeType) {
      if (Array.isArray(t)) {
        if (o) {
          return t = xr(e, t, n, r);
        }
        xr(e, t, null, r);
      } else if (t == null || t === "" || !e.firstChild) {
        e.appendChild(r);
      } else {
        e.replaceChild(r, e.firstChild);
      }
      t = r;
    } else {
      console.warn("Unrecognized value. Skipped inserting", r);
    }
  }
  return t;
}
function Da(e, r, t, n) {
  let i = false;
  for (let a = 0, o = r.length; a < o; a++) {
    let s = r[a];
    let d = t && t[a];
    let c;
    if (s != null && s !== true && s !== false) {
      if ((c = typeof s) == "object" && s.nodeType) {
        e.push(s);
      } else if (Array.isArray(s)) {
        i = Da(e, s, d) || i;
      } else if (c === "function") {
        if (n) {
          while (typeof s == "function") {
            s = s();
          }
          i = Da(e, Array.isArray(s) ? s : [s], Array.isArray(d) ? d : [d]) || i;
        } else {
          e.push(s);
          i = true;
        }
      } else {
        const l = String(s);
        if (d && d.nodeType === 3 && d.data === l) {
          e.push(d);
        } else {
          e.push(document.createTextNode(l));
        }
      }
    }
  }
  return i;
}
function Zs(e, r, t = null) {
  for (let n = 0, i = r.length; n < i; n++) {
    e.insertBefore(r[n], t);
  }
}
function xr(e, r, t, n) {
  if (t === undefined) {
    return e.textContent = "";
  }
  const i = n || document.createTextNode("");
  if (r.length) {
    let a = false;
    for (let o = r.length - 1; o >= 0; o--) {
      const s = r[o];
      if (i !== s) {
        const d = s.parentNode === e;
        if (!a && !o) {
          if (d) {
            e.replaceChild(i, s);
          } else {
            e.insertBefore(i, t);
          }
        } else if (d) {
          s.remove();
        }
      } else {
        a = true;
      }
    }
  } else {
    e.insertBefore(i, t);
  }
  return [i];
}
const fu = "http://www.w3.org/2000/svg";
function du(e, r = false) {
  if (r) {
    return document.createElementNS(fu, e);
  } else {
    return document.createElement(e);
  }
}
function hu(e) {
  const [r, t] = ql(e, ["component"]);
  const n = $e(() => r.component);
  return $e(() => {
    const i = n();
    switch (typeof i) {
      case "function":
        Object.assign(i, {
          [Nl]: true
        });
        return Se(() => i(t));
      case "string":
        const a = ru.has(i);
        const o = du(i, a);
        is(o, t, a);
        return o;
    }
  });
}
var vu = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function pu(e) {
  if (e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")) {
    return e.default;
  } else {
    return e;
  }
}
var Ra = {};
var Xi = {
  byteLength: mu,
  toByteArray: wu,
  fromByteArray: ku
};
var _t = [];
var rt = [];
var _u = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var sa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var kr = 0, gu = sa.length; kr < gu; ++kr) {
  _t[kr] = sa[kr];
  rt[sa.charCodeAt(kr)] = kr;
}
rt["-".charCodeAt(0)] = 62;
rt["_".charCodeAt(0)] = 63;
function Xo(e) {
  var r = e.length;
  if (r % 4 > 0) {
    throw new Error("Invalid string. Length must be a multiple of 4");
  }
  var t = e.indexOf("=");
  if (t === -1) {
    t = r;
  }
  var n = t === r ? 0 : 4 - t % 4;
  return [t, n];
}
function mu(e) {
  var r = Xo(e);
  var t = r[0];
  var n = r[1];
  return (t + n) * 3 / 4 - n;
}
function yu(e, r, t) {
  return (r + t) * 3 / 4 - t;
}
function wu(e) {
  var r;
  var t = Xo(e);
  var n = t[0];
  var i = t[1];
  var a = new _u(yu(e, n, i));
  var o = 0;
  var s = i > 0 ? n - 4 : n;
  var d;
  for (d = 0; d < s; d += 4) {
    r = rt[e.charCodeAt(d)] << 18 | rt[e.charCodeAt(d + 1)] << 12 | rt[e.charCodeAt(d + 2)] << 6 | rt[e.charCodeAt(d + 3)];
    a[o++] = r >> 16 & 255;
    a[o++] = r >> 8 & 255;
    a[o++] = r & 255;
  }
  if (i === 2) {
    r = rt[e.charCodeAt(d)] << 2 | rt[e.charCodeAt(d + 1)] >> 4;
    a[o++] = r & 255;
  }
  if (i === 1) {
    r = rt[e.charCodeAt(d)] << 10 | rt[e.charCodeAt(d + 1)] << 4 | rt[e.charCodeAt(d + 2)] >> 2;
    a[o++] = r >> 8 & 255;
    a[o++] = r & 255;
  }
  return a;
}
function bu(e) {
  return _t[e >> 18 & 63] + _t[e >> 12 & 63] + _t[e >> 6 & 63] + _t[e & 63];
}
function xu(e, r, t) {
  for (var n, i = [], a = r; a < t; a += 3) {
    n = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (e[a + 2] & 255);
    i.push(bu(n));
  }
  return i.join("");
}
function ku(e) {
  for (var r, t = e.length, n = t % 3, i = [], a = 16383, o = 0, s = t - n; o < s; o += a) {
    i.push(xu(e, o, o + a > s ? s : o + a));
  }
  if (n === 1) {
    r = e[t - 1];
    i.push(_t[r >> 2] + _t[r << 4 & 63] + "==");
  } else if (n === 2) {
    r = (e[t - 2] << 8) + e[t - 1];
    i.push(_t[r >> 10] + _t[r >> 4 & 63] + _t[r << 2 & 63] + "=");
  }
  return i.join("");
}
var as = {}; /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
as.read = function (e, r, t, n, i) {
  var a;
  var o;
  var s = i * 8 - n - 1;
  var d = (1 << s) - 1;
  var c = d >> 1;
  var l = -7;
  var m = t ? i - 1 : 0;
  var h = t ? -1 : 1;
  var v = e[r + m];
  m += h;
  a = v & (1 << -l) - 1;
  v >>= -l;
  l += s;
  for (; l > 0; l -= 8) {
    a = a * 256 + e[r + m];
    m += h;
  }
  o = a & (1 << -l) - 1;
  a >>= -l;
  l += n;
  for (; l > 0; l -= 8) {
    o = o * 256 + e[r + m];
    m += h;
  }
  if (a === 0) {
    a = 1 - c;
  } else {
    if (a === d) {
      if (o) {
        return NaN;
      } else {
        return (v ? -1 : 1) * Infinity;
      }
    }
    o = o + Math.pow(2, n);
    a = a - c;
  }
  return (v ? -1 : 1) * o * Math.pow(2, a - n);
};
as.write = function (e, r, t, n, i, a) {
  var o;
  var s;
  var d;
  var c = a * 8 - i - 1;
  var l = (1 << c) - 1;
  var m = l >> 1;
  var h = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var v = n ? 0 : a - 1;
  var _ = n ? 1 : -1;
  var y = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
  r = Math.abs(r);
  if (isNaN(r) || r === Infinity) {
    s = isNaN(r) ? 1 : 0;
    o = l;
  } else {
    o = Math.floor(Math.log(r) / Math.LN2);
    if (r * (d = Math.pow(2, -o)) < 1) {
      o--;
      d *= 2;
    }
    if (o + m >= 1) {
      r += h / d;
    } else {
      r += h * Math.pow(2, 1 - m);
    }
    if (r * d >= 2) {
      o++;
      d /= 2;
    }
    if (o + m >= l) {
      s = 0;
      o = l;
    } else if (o + m >= 1) {
      s = (r * d - 1) * Math.pow(2, i);
      o = o + m;
    } else {
      s = r * Math.pow(2, m - 1) * Math.pow(2, i);
      o = 0;
    }
  }
  for (; i >= 8; i -= 8) {
    e[t + v] = s & 255;
    v += _;
    s /= 256;
  }
  o = o << i | s;
  c += i;
  for (; c > 0; c -= 8) {
    e[t + v] = o & 255;
    v += _;
    o /= 256;
  }
  e[t + v - _] |= y * 128;
}; /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */
(function (e) {
  var r = Xi;
  var t = as;
  var n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = s;
  e.SlowBuffer = A;
  e.INSPECT_MAX_BYTES = 50;
  var i = 2147483647;
  e.kMaxLength = i;
  s.TYPED_ARRAY_SUPPORT = a();
  if (!s.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error == "function") {
    console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
  }
  function a() {
    try {
      var w = new Uint8Array(1);
      var u = {
        foo: function () {
          return 42;
        }
      };
      Object.setPrototypeOf(u, Uint8Array.prototype);
      Object.setPrototypeOf(w, u);
      return w.foo() === 42;
    } catch {
      return false;
    }
  }
  Object.defineProperty(s.prototype, "parent", {
    enumerable: true,
    get: function () {
      if (s.isBuffer(this)) {
        return this.buffer;
      }
    }
  });
  Object.defineProperty(s.prototype, "offset", {
    enumerable: true,
    get: function () {
      if (s.isBuffer(this)) {
        return this.byteOffset;
      }
    }
  });
  function o(w) {
    if (w > i) {
      throw new RangeError("The value \"" + w + "\" is invalid for option \"size\"");
    }
    var u = new Uint8Array(w);
    Object.setPrototypeOf(u, s.prototype);
    return u;
  }
  function s(w, u, f) {
    if (typeof w == "number") {
      if (typeof u == "string") {
        throw new TypeError("The \"string\" argument must be of type string. Received type number");
      }
      return m(w);
    }
    return d(w, u, f);
  }
  s.poolSize = 8192;
  function d(w, u, f) {
    if (typeof w == "string") {
      return h(w, u);
    }
    if (ArrayBuffer.isView(w)) {
      return _(w);
    }
    if (w == null) {
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof w);
    }
    if (Y(w, ArrayBuffer) || w && Y(w.buffer, ArrayBuffer) || typeof SharedArrayBuffer !== "undefined" && (Y(w, SharedArrayBuffer) || w && Y(w.buffer, SharedArrayBuffer))) {
      return y(w, u, f);
    }
    if (typeof w == "number") {
      throw new TypeError("The \"value\" argument must not be of type number. Received type number");
    }
    var k = w.valueOf && w.valueOf();
    if (k != null && k !== w) {
      return s.from(k, u, f);
    }
    var $ = g(w);
    if ($) {
      return $;
    }
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof w[Symbol.toPrimitive] == "function") {
      return s.from(w[Symbol.toPrimitive]("string"), u, f);
    }
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof w);
  }
  s.from = function (w, u, f) {
    return d(w, u, f);
  };
  Object.setPrototypeOf(s.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(s, Uint8Array);
  function c(w) {
    if (typeof w != "number") {
      throw new TypeError("\"size\" argument must be of type number");
    }
    if (w < 0) {
      throw new RangeError("The value \"" + w + "\" is invalid for option \"size\"");
    }
  }
  function l(w, u, f) {
    c(w);
    if (w <= 0) {
      return o(w);
    } else if (u !== undefined) {
      if (typeof f == "string") {
        return o(w).fill(u, f);
      } else {
        return o(w).fill(u);
      }
    } else {
      return o(w);
    }
  }
  s.alloc = function (w, u, f) {
    return l(w, u, f);
  };
  function m(w) {
    c(w);
    return o(w < 0 ? 0 : E(w) | 0);
  }
  s.allocUnsafe = function (w) {
    return m(w);
  };
  s.allocUnsafeSlow = function (w) {
    return m(w);
  };
  function h(w, u) {
    if (typeof u != "string" || u === "") {
      u = "utf8";
    }
    if (!s.isEncoding(u)) {
      throw new TypeError("Unknown encoding: " + u);
    }
    var f = I(w, u) | 0;
    var k = o(f);
    var $ = k.write(w, u);
    if ($ !== f) {
      k = k.slice(0, $);
    }
    return k;
  }
  function v(w) {
    for (var u = w.length < 0 ? 0 : E(w.length) | 0, f = o(u), k = 0; k < u; k += 1) {
      f[k] = w[k] & 255;
    }
    return f;
  }
  function _(w) {
    if (Y(w, Uint8Array)) {
      var u = new Uint8Array(w);
      return y(u.buffer, u.byteOffset, u.byteLength);
    }
    return v(w);
  }
  function y(w, u, f) {
    if (u < 0 || w.byteLength < u) {
      throw new RangeError("\"offset\" is outside of buffer bounds");
    }
    if (w.byteLength < u + (f || 0)) {
      throw new RangeError("\"length\" is outside of buffer bounds");
    }
    var k;
    if (u === undefined && f === undefined) {
      k = new Uint8Array(w);
    } else if (f === undefined) {
      k = new Uint8Array(w, u);
    } else {
      k = new Uint8Array(w, u, f);
    }
    Object.setPrototypeOf(k, s.prototype);
    return k;
  }
  function g(w) {
    if (s.isBuffer(w)) {
      var u = E(w.length) | 0;
      var f = o(u);
      if (f.length !== 0) {
        w.copy(f, 0, 0, u);
      }
      return f;
    }
    if (w.length !== undefined) {
      if (typeof w.length != "number" || Be(w.length)) {
        return o(0);
      } else {
        return v(w);
      }
    }
    if (w.type === "Buffer" && Array.isArray(w.data)) {
      return v(w.data);
    }
  }
  function E(w) {
    if (w >= i) {
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    }
    return w | 0;
  }
  function A(w) {
    if (+w != w) {
      w = 0;
    }
    return s.alloc(+w);
  }
  s.isBuffer = function (u) {
    return u != null && u._isBuffer === true && u !== s.prototype;
  };
  s.compare = function (u, f) {
    if (Y(u, Uint8Array)) {
      u = s.from(u, u.offset, u.byteLength);
    }
    if (Y(f, Uint8Array)) {
      f = s.from(f, f.offset, f.byteLength);
    }
    if (!s.isBuffer(u) || !s.isBuffer(f)) {
      throw new TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
    }
    if (u === f) {
      return 0;
    }
    for (var k = u.length, $ = f.length, L = 0, V = Math.min(k, $); L < V; ++L) {
      if (u[L] !== f[L]) {
        k = u[L];
        $ = f[L];
        break;
      }
    }
    if (k < $) {
      return -1;
    } else if ($ < k) {
      return 1;
    } else {
      return 0;
    }
  };
  s.isEncoding = function (u) {
    switch (String(u).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return true;
      default:
        return false;
    }
  };
  s.concat = function (u, f) {
    if (!Array.isArray(u)) {
      throw new TypeError("\"list\" argument must be an Array of Buffers");
    }
    if (u.length === 0) {
      return s.alloc(0);
    }
    var k;
    if (f === undefined) {
      f = 0;
      k = 0;
      f = 0;
      k = 0;
      for (; k < u.length; ++k) {
        f += u[k].length;
      }
    }
    var $ = s.allocUnsafe(f);
    var L = 0;
    for (k = 0; k < u.length; ++k) {
      var V = u[k];
      if (Y(V, Uint8Array)) {
        if (L + V.length > $.length) {
          s.from(V).copy($, L);
        } else {
          Uint8Array.prototype.set.call($, V, L);
        }
      } else if (s.isBuffer(V)) {
        V.copy($, L);
      } else {
        throw new TypeError("\"list\" argument must be an Array of Buffers");
      }
      L += V.length;
    }
    return $;
  };
  function I(w, u) {
    if (s.isBuffer(w)) {
      return w.length;
    }
    if (ArrayBuffer.isView(w) || Y(w, ArrayBuffer)) {
      return w.byteLength;
    }
    if (typeof w != "string") {
      throw new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof w);
    }
    var f = w.length;
    var k = arguments.length > 2 && arguments[2] === true;
    if (!k && f === 0) {
      return 0;
    }
    for (var $ = false;;) {
      switch (u) {
        case "ascii":
        case "latin1":
        case "binary":
          return f;
        case "utf8":
        case "utf-8":
          return X(w).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return f * 2;
        case "hex":
          return f >>> 1;
        case "base64":
          return W(w).length;
        default:
          if ($) {
            if (k) {
              return -1;
            } else {
              return X(w).length;
            }
          }
          u = ("" + u).toLowerCase();
          $ = true;
      }
    }
  }
  s.byteLength = I;
  function b(w, u, f) {
    var k = false;
    if (u === undefined || u < 0) {
      u = 0;
    }
    if (u > this.length || ((f === undefined || f > this.length) && (f = this.length), f <= 0) || (f >>>= 0, u >>>= 0, f <= u)) {
      return "";
    }
    for (w ||= "utf8";;) {
      switch (w) {
        case "hex":
          return ne(this, u, f);
        case "utf8":
        case "utf-8":
          return U(this, u, f);
        case "ascii":
          return le(this, u, f);
        case "latin1":
        case "binary":
          return re(this, u, f);
        case "base64":
          return H(this, u, f);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ae(this, u, f);
        default:
          if (k) {
            throw new TypeError("Unknown encoding: " + w);
          }
          w = (w + "").toLowerCase();
          k = true;
      }
    }
  }
  s.prototype._isBuffer = true;
  function T(w, u, f) {
    var k = w[u];
    w[u] = w[f];
    w[f] = k;
  }
  s.prototype.swap16 = function () {
    var u = this.length;
    if (u % 2 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    }
    for (var f = 0; f < u; f += 2) {
      T(this, f, f + 1);
    }
    return this;
  };
  s.prototype.swap32 = function () {
    var u = this.length;
    if (u % 4 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    }
    for (var f = 0; f < u; f += 4) {
      T(this, f, f + 3);
      T(this, f + 1, f + 2);
    }
    return this;
  };
  s.prototype.swap64 = function () {
    var u = this.length;
    if (u % 8 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    }
    for (var f = 0; f < u; f += 8) {
      T(this, f, f + 7);
      T(this, f + 1, f + 6);
      T(this, f + 2, f + 5);
      T(this, f + 3, f + 4);
    }
    return this;
  };
  s.prototype.toString = function () {
    var u = this.length;
    if (u === 0) {
      return "";
    } else if (arguments.length === 0) {
      return U(this, 0, u);
    } else {
      return b.apply(this, arguments);
    }
  };
  s.prototype.toLocaleString = s.prototype.toString;
  s.prototype.equals = function (u) {
    if (!s.isBuffer(u)) {
      throw new TypeError("Argument must be a Buffer");
    }
    if (this === u) {
      return true;
    } else {
      return s.compare(this, u) === 0;
    }
  };
  s.prototype.inspect = function () {
    var u = "";
    var f = e.INSPECT_MAX_BYTES;
    u = this.toString("hex", 0, f).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > f) {
      u += " ... ";
    }
    return "<Buffer " + u + ">";
  };
  if (n) {
    s.prototype[n] = s.prototype.inspect;
  }
  s.prototype.compare = function (u, f, k, $, L) {
    if (Y(u, Uint8Array)) {
      u = s.from(u, u.offset, u.byteLength);
    }
    if (!s.isBuffer(u)) {
      throw new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof u);
    }
    if (f === undefined) {
      f = 0;
    }
    if (k === undefined) {
      k = u ? u.length : 0;
    }
    if ($ === undefined) {
      $ = 0;
    }
    if (L === undefined) {
      L = this.length;
    }
    if (f < 0 || k > u.length || $ < 0 || L > this.length) {
      throw new RangeError("out of range index");
    }
    if ($ >= L && f >= k) {
      return 0;
    }
    if ($ >= L) {
      return -1;
    }
    if (f >= k) {
      return 1;
    }
    f >>>= 0;
    k >>>= 0;
    $ >>>= 0;
    L >>>= 0;
    if (this === u) {
      return 0;
    }
    for (var V = L - $, se = k - f, ue = Math.min(V, se), Ce = this.slice($, L), De = u.slice(f, k), Ee = 0; Ee < ue; ++Ee) {
      if (Ce[Ee] !== De[Ee]) {
        V = Ce[Ee];
        se = De[Ee];
        break;
      }
    }
    if (V < se) {
      return -1;
    } else if (se < V) {
      return 1;
    } else {
      return 0;
    }
  };
  function R(w, u, f, k, $) {
    if (w.length === 0) {
      return -1;
    }
    if (typeof f == "string") {
      k = f;
      f = 0;
    } else if (f > 2147483647) {
      f = 2147483647;
    } else if (f < -2147483648) {
      f = -2147483648;
    }
    f = +f;
    if (Be(f)) {
      f = $ ? 0 : w.length - 1;
    }
    if (f < 0) {
      f = w.length + f;
    }
    if (f >= w.length) {
      if ($) {
        return -1;
      }
      f = w.length - 1;
    } else if (f < 0) {
      if ($) {
        f = 0;
      } else {
        return -1;
      }
    }
    if (typeof u == "string") {
      u = s.from(u, k);
    }
    if (s.isBuffer(u)) {
      if (u.length === 0) {
        return -1;
      } else {
        return B(w, u, f, k, $);
      }
    }
    if (typeof u == "number") {
      u = u & 255;
      if (typeof Uint8Array.prototype.indexOf == "function") {
        if ($) {
          return Uint8Array.prototype.indexOf.call(w, u, f);
        } else {
          return Uint8Array.prototype.lastIndexOf.call(w, u, f);
        }
      } else {
        return B(w, [u], f, k, $);
      }
    }
    throw new TypeError("val must be string, number or Buffer");
  }
  function B(w, u, f, k, $) {
    var L = 1;
    var V = w.length;
    var se = u.length;
    if (k !== undefined && (k = String(k).toLowerCase(), k === "ucs2" || k === "ucs-2" || k === "utf16le" || k === "utf-16le")) {
      if (w.length < 2 || u.length < 2) {
        return -1;
      }
      L = 2;
      V /= 2;
      se /= 2;
      f /= 2;
    }
    function ue(tn, rn) {
      if (L === 1) {
        return tn[rn];
      } else {
        return tn.readUInt16BE(rn * L);
      }
    }
    var Ce;
    if ($) {
      var De = -1;
      for (Ce = f; Ce < V; Ce++) {
        if (ue(w, Ce) === ue(u, De === -1 ? 0 : Ce - De)) {
          if (De === -1) {
            De = Ce;
          }
          if (Ce - De + 1 === se) {
            return De * L;
          }
        } else {
          if (De !== -1) {
            Ce -= Ce - De;
          }
          De = -1;
        }
      }
    } else {
      if (f + se > V) {
        f = V - se;
      }
      Ce = f;
      if (f + se > V) {
        f = V - se;
      }
      Ce = f;
      for (; Ce >= 0; Ce--) {
        for (var Ee = true, wr = 0; wr < se; wr++) {
          if (ue(w, Ce + wr) !== ue(u, wr)) {
            Ee = false;
            break;
          }
        }
        if (Ee) {
          return Ce;
        }
      }
    }
    return -1;
  }
  s.prototype.includes = function (u, f, k) {
    return this.indexOf(u, f, k) !== -1;
  };
  s.prototype.indexOf = function (u, f, k) {
    return R(this, u, f, k, true);
  };
  s.prototype.lastIndexOf = function (u, f, k) {
    return R(this, u, f, k, false);
  };
  function z(w, u, f, k) {
    f = Number(f) || 0;
    var $ = w.length - f;
    if (k) {
      k = Number(k);
      if (k > $) {
        k = $;
      }
    } else {
      k = $;
    }
    var L = u.length;
    if (k > L / 2) {
      k = L / 2;
    }
    for (var V = 0; V < k; ++V) {
      var se = parseInt(u.substr(V * 2, 2), 16);
      if (Be(se)) {
        return V;
      }
      w[f + V] = se;
    }
    return V;
  }
  function N(w, u, f, k) {
    return j(X(u, w.length - f), w, f, k);
  }
  function S(w, u, f, k) {
    return j(M(u), w, f, k);
  }
  function D(w, u, f, k) {
    return j(W(u), w, f, k);
  }
  function P(w, u, f, k) {
    return j(Z(u, w.length - f), w, f, k);
  }
  s.prototype.write = function (u, f, k, $) {
    if (f === undefined) {
      $ = "utf8";
      k = this.length;
      f = 0;
    } else if (k === undefined && typeof f == "string") {
      $ = f;
      k = this.length;
      f = 0;
    } else if (isFinite(f)) {
      f = f >>> 0;
      if (isFinite(k)) {
        k = k >>> 0;
        if ($ === undefined) {
          $ = "utf8";
        }
      } else {
        $ = k;
        k = undefined;
      }
    } else {
      throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    }
    var L = this.length - f;
    if (k === undefined || k > L) {
      k = L;
    }
    if (u.length > 0 && (k < 0 || f < 0) || f > this.length) {
      throw new RangeError("Attempt to write outside buffer bounds");
    }
    $ ||= "utf8";
    for (var V = false;;) {
      switch ($) {
        case "hex":
          return z(this, u, f, k);
        case "utf8":
        case "utf-8":
          return N(this, u, f, k);
        case "ascii":
        case "latin1":
        case "binary":
          return S(this, u, f, k);
        case "base64":
          return D(this, u, f, k);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return P(this, u, f, k);
        default:
          if (V) {
            throw new TypeError("Unknown encoding: " + $);
          }
          $ = ("" + $).toLowerCase();
          V = true;
      }
    }
  };
  s.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function H(w, u, f) {
    if (u === 0 && f === w.length) {
      return r.fromByteArray(w);
    } else {
      return r.fromByteArray(w.slice(u, f));
    }
  }
  function U(w, u, f) {
    f = Math.min(w.length, f);
    for (var k = [], $ = u; $ < f;) {
      var L = w[$];
      var V = null;
      var se = L > 239 ? 4 : L > 223 ? 3 : L > 191 ? 2 : 1;
      if ($ + se <= f) {
        var ue;
        var Ce;
        var De;
        var Ee;
        switch (se) {
          case 1:
            if (L < 128) {
              V = L;
            }
            break;
          case 2:
            ue = w[$ + 1];
            if ((ue & 192) === 128) {
              Ee = (L & 31) << 6 | ue & 63;
              if (Ee > 127) {
                V = Ee;
              }
            }
            break;
          case 3:
            ue = w[$ + 1];
            Ce = w[$ + 2];
            if ((ue & 192) === 128 && (Ce & 192) === 128) {
              Ee = (L & 15) << 12 | (ue & 63) << 6 | Ce & 63;
              if (Ee > 2047 && (Ee < 55296 || Ee > 57343)) {
                V = Ee;
              }
            }
            break;
          case 4:
            ue = w[$ + 1];
            Ce = w[$ + 2];
            De = w[$ + 3];
            if ((ue & 192) === 128 && (Ce & 192) === 128 && (De & 192) === 128) {
              Ee = (L & 15) << 18 | (ue & 63) << 12 | (Ce & 63) << 6 | De & 63;
              if (Ee > 65535 && Ee < 1114112) {
                V = Ee;
              }
            }
        }
      }
      if (V === null) {
        V = 65533;
        se = 1;
      } else if (V > 65535) {
        V -= 65536;
        k.push(V >>> 10 & 1023 | 55296);
        V = V & 1023 | 56320;
      }
      k.push(V);
      $ += se;
    }
    return Q(k);
  }
  var K = 4096;
  function Q(w) {
    var u = w.length;
    if (u <= K) {
      return String.fromCharCode.apply(String, w);
    }
    for (var f = "", k = 0; k < u;) {
      f += String.fromCharCode.apply(String, w.slice(k, k += K));
    }
    return f;
  }
  function le(w, u, f) {
    var k = "";
    f = Math.min(w.length, f);
    for (var $ = u; $ < f; ++$) {
      k += String.fromCharCode(w[$] & 127);
    }
    return k;
  }
  function re(w, u, f) {
    var k = "";
    f = Math.min(w.length, f);
    for (var $ = u; $ < f; ++$) {
      k += String.fromCharCode(w[$]);
    }
    return k;
  }
  function ne(w, u, f) {
    var k = w.length;
    if (!u || u < 0) {
      u = 0;
    }
    if (!f || f < 0 || f > k) {
      f = k;
    }
    for (var $ = "", L = u; L < f; ++L) {
      $ += dt[w[L]];
    }
    return $;
  }
  function ae(w, u, f) {
    for (var k = w.slice(u, f), $ = "", L = 0; L < k.length - 1; L += 2) {
      $ += String.fromCharCode(k[L] + k[L + 1] * 256);
    }
    return $;
  }
  s.prototype.slice = function (u, f) {
    var k = this.length;
    u = ~~u;
    f = f === undefined ? k : ~~f;
    if (u < 0) {
      u += k;
      if (u < 0) {
        u = 0;
      }
    } else if (u > k) {
      u = k;
    }
    if (f < 0) {
      f += k;
      if (f < 0) {
        f = 0;
      }
    } else if (f > k) {
      f = k;
    }
    if (f < u) {
      f = u;
    }
    var $ = this.subarray(u, f);
    Object.setPrototypeOf($, s.prototype);
    return $;
  };
  function O(w, u, f) {
    if (w % 1 !== 0 || w < 0) {
      throw new RangeError("offset is not uint");
    }
    if (w + u > f) {
      throw new RangeError("Trying to access beyond buffer length");
    }
  }
  s.prototype.readUintLE = s.prototype.readUIntLE = function (u, f, k) {
    u = u >>> 0;
    f = f >>> 0;
    if (!k) {
      O(u, f, this.length);
    }
    for (var $ = this[u], L = 1, V = 0; ++V < f && (L *= 256);) {
      $ += this[u + V] * L;
    }
    return $;
  };
  s.prototype.readUintBE = s.prototype.readUIntBE = function (u, f, k) {
    u = u >>> 0;
    f = f >>> 0;
    if (!k) {
      O(u, f, this.length);
    }
    for (var $ = this[u + --f], L = 1; f > 0 && (L *= 256);) {
      $ += this[u + --f] * L;
    }
    return $;
  };
  s.prototype.readUint8 = s.prototype.readUInt8 = function (u, f) {
    u = u >>> 0;
    if (!f) {
      O(u, 1, this.length);
    }
    return this[u];
  };
  s.prototype.readUint16LE = s.prototype.readUInt16LE = function (u, f) {
    u = u >>> 0;
    if (!f) {
      O(u, 2, this.length);
    }
    return this[u] | this[u + 1] << 8;
  };
  s.prototype.readUint16BE = s.prototype.readUInt16BE = function (u, f) {
    u = u >>> 0;
    if (!f) {
      O(u, 2, this.length);
    }
    return this[u] << 8 | this[u + 1];
  };
  s.prototype.readUint32LE = s.prototype.readUInt32LE = function (u, f) {
    u = u >>> 0;
    if (!f) {
      O(u, 4, this.length);
    }
    return (this[u] | this[u + 1] << 8 | this[u + 2] << 16) + this[u + 3] * 16777216;
  };
  s.prototype.readUint32BE = s.prototype.readUInt32BE = function (u, f) {
    u = u >>> 0;
    if (!f) {
      O(u, 4, this.length);
    }
    return this[u] * 16777216 + (this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3]);
  };
  s.prototype.readIntLE = function (u, f, k) {
    u = u >>> 0;
    f = f >>> 0;
    if (!k) {
      O(u, f, this.length);
    }
    for (var $ = this[u], L = 1, V = 0; ++V < f && (L *= 256);) {
      $ += this[u + V] * L;
    }
    L *= 128;
    if ($ >= L) {
      $ -= Math.pow(2, f * 8);
    }
    return $;
  };
  s.prototype.readIntBE = function (u, f, k) {
    u = u >>> 0;
    f = f >>> 0;
    if (!k) {
      O(u, f, this.length);
    }
    for (var $ = f, L = 1, V = this[u + --$]; $ > 0 && (L *= 256);) {
      V += this[u + --$] * L;
    }
    L *= 128;
    if (V >= L) {
      V -= Math.pow(2, f * 8);
    }
    return V;
  };
  s.prototype.readInt8 = function (u, f) {
    u = u >>> 0;
    if (!f) {
      O(u, 1, this.length);
    }
    if (this[u] & 128) {
      return (255 - this[u] + 1) * -1;
    } else {
      return this[u];
    }
  };
  s.prototype.readInt16LE = function (u, f) {
    u = u >>> 0;
    if (!f) {
      O(u, 2, this.length);
    }
    var k = this[u] | this[u + 1] << 8;
    if (k & 32768) {
      return k | 4294901760;
    } else {
      return k;
    }
  };
  s.prototype.readInt16BE = function (u, f) {
    u = u >>> 0;
    if (!f) {
      O(u, 2, this.length);
    }
    var k = this[u + 1] | this[u] << 8;
    if (k & 32768) {
      return k | 4294901760;
    } else {
      return k;
    }
  };
  s.prototype.readInt32LE = function (u, f) {
    u = u >>> 0;
    if (!f) {
      O(u, 4, this.length);
    }
    return this[u] | this[u + 1] << 8 | this[u + 2] << 16 | this[u + 3] << 24;
  };
  s.prototype.readInt32BE = function (u, f) {
    u = u >>> 0;
    if (!f) {
      O(u, 4, this.length);
    }
    return this[u] << 24 | this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3];
  };
  s.prototype.readFloatLE = function (u, f) {
    u = u >>> 0;
    if (!f) {
      O(u, 4, this.length);
    }
    return t.read(this, u, true, 23, 4);
  };
  s.prototype.readFloatBE = function (u, f) {
    u = u >>> 0;
    if (!f) {
      O(u, 4, this.length);
    }
    return t.read(this, u, false, 23, 4);
  };
  s.prototype.readDoubleLE = function (u, f) {
    u = u >>> 0;
    if (!f) {
      O(u, 8, this.length);
    }
    return t.read(this, u, true, 52, 8);
  };
  s.prototype.readDoubleBE = function (u, f) {
    u = u >>> 0;
    if (!f) {
      O(u, 8, this.length);
    }
    return t.read(this, u, false, 52, 8);
  };
  function p(w, u, f, k, $, L) {
    if (!s.isBuffer(w)) {
      throw new TypeError("\"buffer\" argument must be a Buffer instance");
    }
    if (u > $ || u < L) {
      throw new RangeError("\"value\" argument is out of bounds");
    }
    if (f + k > w.length) {
      throw new RangeError("Index out of range");
    }
  }
  s.prototype.writeUintLE = s.prototype.writeUIntLE = function (u, f, k, $) {
    u = +u;
    f = f >>> 0;
    k = k >>> 0;
    if (!$) {
      var L = Math.pow(2, k * 8) - 1;
      p(this, u, f, k, L, 0);
    }
    var V = 1;
    var se = 0;
    for (this[f] = u & 255; ++se < k && (V *= 256);) {
      this[f + se] = u / V & 255;
    }
    return f + k;
  };
  s.prototype.writeUintBE = s.prototype.writeUIntBE = function (u, f, k, $) {
    u = +u;
    f = f >>> 0;
    k = k >>> 0;
    if (!$) {
      var L = Math.pow(2, k * 8) - 1;
      p(this, u, f, k, L, 0);
    }
    var V = k - 1;
    var se = 1;
    for (this[f + V] = u & 255; --V >= 0 && (se *= 256);) {
      this[f + V] = u / se & 255;
    }
    return f + k;
  };
  s.prototype.writeUint8 = s.prototype.writeUInt8 = function (u, f, k) {
    u = +u;
    f = f >>> 0;
    if (!k) {
      p(this, u, f, 1, 255, 0);
    }
    this[f] = u & 255;
    return f + 1;
  };
  s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function (u, f, k) {
    u = +u;
    f = f >>> 0;
    if (!k) {
      p(this, u, f, 2, 65535, 0);
    }
    this[f] = u & 255;
    this[f + 1] = u >>> 8;
    return f + 2;
  };
  s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function (u, f, k) {
    u = +u;
    f = f >>> 0;
    if (!k) {
      p(this, u, f, 2, 65535, 0);
    }
    this[f] = u >>> 8;
    this[f + 1] = u & 255;
    return f + 2;
  };
  s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function (u, f, k) {
    u = +u;
    f = f >>> 0;
    if (!k) {
      p(this, u, f, 4, 4294967295, 0);
    }
    this[f + 3] = u >>> 24;
    this[f + 2] = u >>> 16;
    this[f + 1] = u >>> 8;
    this[f] = u & 255;
    return f + 4;
  };
  s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function (u, f, k) {
    u = +u;
    f = f >>> 0;
    if (!k) {
      p(this, u, f, 4, 4294967295, 0);
    }
    this[f] = u >>> 24;
    this[f + 1] = u >>> 16;
    this[f + 2] = u >>> 8;
    this[f + 3] = u & 255;
    return f + 4;
  };
  s.prototype.writeIntLE = function (u, f, k, $) {
    u = +u;
    f = f >>> 0;
    if (!$) {
      var L = Math.pow(2, k * 8 - 1);
      p(this, u, f, k, L - 1, -L);
    }
    var V = 0;
    var se = 1;
    var ue = 0;
    for (this[f] = u & 255; ++V < k && (se *= 256);) {
      if (u < 0 && ue === 0 && this[f + V - 1] !== 0) {
        ue = 1;
      }
      this[f + V] = (u / se >> 0) - ue & 255;
    }
    return f + k;
  };
  s.prototype.writeIntBE = function (u, f, k, $) {
    u = +u;
    f = f >>> 0;
    if (!$) {
      var L = Math.pow(2, k * 8 - 1);
      p(this, u, f, k, L - 1, -L);
    }
    var V = k - 1;
    var se = 1;
    var ue = 0;
    for (this[f + V] = u & 255; --V >= 0 && (se *= 256);) {
      if (u < 0 && ue === 0 && this[f + V + 1] !== 0) {
        ue = 1;
      }
      this[f + V] = (u / se >> 0) - ue & 255;
    }
    return f + k;
  };
  s.prototype.writeInt8 = function (u, f, k) {
    u = +u;
    f = f >>> 0;
    if (!k) {
      p(this, u, f, 1, 127, -128);
    }
    if (u < 0) {
      u = 255 + u + 1;
    }
    this[f] = u & 255;
    return f + 1;
  };
  s.prototype.writeInt16LE = function (u, f, k) {
    u = +u;
    f = f >>> 0;
    if (!k) {
      p(this, u, f, 2, 32767, -32768);
    }
    this[f] = u & 255;
    this[f + 1] = u >>> 8;
    return f + 2;
  };
  s.prototype.writeInt16BE = function (u, f, k) {
    u = +u;
    f = f >>> 0;
    if (!k) {
      p(this, u, f, 2, 32767, -32768);
    }
    this[f] = u >>> 8;
    this[f + 1] = u & 255;
    return f + 2;
  };
  s.prototype.writeInt32LE = function (u, f, k) {
    u = +u;
    f = f >>> 0;
    if (!k) {
      p(this, u, f, 4, 2147483647, -2147483648);
    }
    this[f] = u & 255;
    this[f + 1] = u >>> 8;
    this[f + 2] = u >>> 16;
    this[f + 3] = u >>> 24;
    return f + 4;
  };
  s.prototype.writeInt32BE = function (u, f, k) {
    u = +u;
    f = f >>> 0;
    if (!k) {
      p(this, u, f, 4, 2147483647, -2147483648);
    }
    if (u < 0) {
      u = 4294967295 + u + 1;
    }
    this[f] = u >>> 24;
    this[f + 1] = u >>> 16;
    this[f + 2] = u >>> 8;
    this[f + 3] = u & 255;
    return f + 4;
  };
  function C(w, u, f, k, $, L) {
    if (f + k > w.length) {
      throw new RangeError("Index out of range");
    }
    if (f < 0) {
      throw new RangeError("Index out of range");
    }
  }
  function x(w, u, f, k, $) {
    u = +u;
    f = f >>> 0;
    if (!$) {
      C(w, u, f, 4);
    }
    t.write(w, u, f, k, 23, 4);
    return f + 4;
  }
  s.prototype.writeFloatLE = function (u, f, k) {
    return x(this, u, f, true, k);
  };
  s.prototype.writeFloatBE = function (u, f, k) {
    return x(this, u, f, false, k);
  };
  function F(w, u, f, k, $) {
    u = +u;
    f = f >>> 0;
    if (!$) {
      C(w, u, f, 8);
    }
    t.write(w, u, f, k, 52, 8);
    return f + 8;
  }
  s.prototype.writeDoubleLE = function (u, f, k) {
    return F(this, u, f, true, k);
  };
  s.prototype.writeDoubleBE = function (u, f, k) {
    return F(this, u, f, false, k);
  };
  s.prototype.copy = function (u, f, k, $) {
    if (!s.isBuffer(u)) {
      throw new TypeError("argument should be a Buffer");
    }
    k ||= 0;
    if (!$ && $ !== 0) {
      $ = this.length;
    }
    if (f >= u.length) {
      f = u.length;
    }
    f ||= 0;
    if ($ > 0 && $ < k) {
      $ = k;
    }
    if ($ === k || u.length === 0 || this.length === 0) {
      return 0;
    }
    if (f < 0) {
      throw new RangeError("targetStart out of bounds");
    }
    if (k < 0 || k >= this.length) {
      throw new RangeError("Index out of range");
    }
    if ($ < 0) {
      throw new RangeError("sourceEnd out of bounds");
    }
    if ($ > this.length) {
      $ = this.length;
    }
    if (u.length - f < $ - k) {
      $ = u.length - f + k;
    }
    var L = $ - k;
    if (this === u && typeof Uint8Array.prototype.copyWithin == "function") {
      this.copyWithin(f, k, $);
    } else {
      Uint8Array.prototype.set.call(u, this.subarray(k, $), f);
    }
    return L;
  };
  s.prototype.fill = function (u, f, k, $) {
    if (typeof u == "string") {
      if (typeof f == "string") {
        $ = f;
        f = 0;
        k = this.length;
      } else if (typeof k == "string") {
        $ = k;
        k = this.length;
      }
      if ($ !== undefined && typeof $ != "string") {
        throw new TypeError("encoding must be a string");
      }
      if (typeof $ == "string" && !s.isEncoding($)) {
        throw new TypeError("Unknown encoding: " + $);
      }
      if (u.length === 1) {
        var L = u.charCodeAt(0);
        if ($ === "utf8" && L < 128 || $ === "latin1") {
          u = L;
        }
      }
    } else if (typeof u == "number") {
      u = u & 255;
    } else if (typeof u == "boolean") {
      u = Number(u);
    }
    if (f < 0 || this.length < f || this.length < k) {
      throw new RangeError("Out of range index");
    }
    if (k <= f) {
      return this;
    }
    f = f >>> 0;
    k = k === undefined ? this.length : k >>> 0;
    u ||= 0;
    var V;
    if (typeof u == "number") {
      for (V = f; V < k; ++V) {
        this[V] = u;
      }
    } else {
      var se = s.isBuffer(u) ? u : s.from(u, $);
      var ue = se.length;
      if (ue === 0) {
        throw new TypeError("The value \"" + u + "\" is invalid for argument \"value\"");
      }
      for (V = 0; V < k - f; ++V) {
        this[V + f] = se[V % ue];
      }
    }
    return this;
  };
  var G = /[^+/0-9A-Za-z-_]/g;
  function q(w) {
    w = w.split("=")[0];
    w = w.trim().replace(G, "");
    if (w.length < 2) {
      return "";
    }
    while (w.length % 4 !== 0) {
      w = w + "=";
    }
    return w;
  }
  function X(w, u) {
    u = u || Infinity;
    for (var f, k = w.length, $ = null, L = [], V = 0; V < k; ++V) {
      f = w.charCodeAt(V);
      if (f > 55295 && f < 57344) {
        if (!$) {
          if (f > 56319) {
            if ((u -= 3) > -1) {
              L.push(239, 191, 189);
            }
            continue;
          } else if (V + 1 === k) {
            if ((u -= 3) > -1) {
              L.push(239, 191, 189);
            }
            continue;
          }
          $ = f;
          continue;
        }
        if (f < 56320) {
          if ((u -= 3) > -1) {
            L.push(239, 191, 189);
          }
          $ = f;
          continue;
        }
        f = ($ - 55296 << 10 | f - 56320) + 65536;
      } else if ($ && (u -= 3) > -1) {
        L.push(239, 191, 189);
      }
      $ = null;
      if (f < 128) {
        if ((u -= 1) < 0) {
          break;
        }
        L.push(f);
      } else if (f < 2048) {
        if ((u -= 2) < 0) {
          break;
        }
        L.push(f >> 6 | 192, f & 63 | 128);
      } else if (f < 65536) {
        if ((u -= 3) < 0) {
          break;
        }
        L.push(f >> 12 | 224, f >> 6 & 63 | 128, f & 63 | 128);
      } else if (f < 1114112) {
        if ((u -= 4) < 0) {
          break;
        }
        L.push(f >> 18 | 240, f >> 12 & 63 | 128, f >> 6 & 63 | 128, f & 63 | 128);
      } else {
        throw new Error("Invalid code point");
      }
    }
    return L;
  }
  function M(w) {
    for (var u = [], f = 0; f < w.length; ++f) {
      u.push(w.charCodeAt(f) & 255);
    }
    return u;
  }
  function Z(w, u) {
    for (var f, k, $, L = [], V = 0; V < w.length && (u -= 2) >= 0; ++V) {
      f = w.charCodeAt(V);
      k = f >> 8;
      $ = f % 256;
      L.push($);
      L.push(k);
    }
    return L;
  }
  function W(w) {
    return r.toByteArray(q(w));
  }
  function j(w, u, f, k) {
    for (var $ = 0; $ < k && $ + f < u.length && $ < w.length; ++$) {
      u[$ + f] = w[$];
    }
    return $;
  }
  function Y(w, u) {
    return w instanceof u || w != null && w.constructor != null && w.constructor.name != null && w.constructor.name === u.name;
  }
  function Be(w) {
    return w !== w;
  }
  var dt = function () {
    for (var w = "0123456789abcdef", u = new Array(256), f = 0; f < 16; ++f) {
      for (var k = f * 16, $ = 0; $ < 16; ++$) {
        u[k + $] = w[f] + w[$];
      }
    }
    return u;
  }();
})(Ra);
var Ne = {};
var vt;
var pt;
function $a() {
  throw new Error("setTimeout has not been defined");
}
function za() {
  throw new Error("clearTimeout has not been defined");
}
(function () {
  try {
    if (typeof setTimeout == "function") {
      vt = setTimeout;
    } else {
      vt = $a;
    }
  } catch {
    vt = $a;
  }
  try {
    if (typeof clearTimeout == "function") {
      pt = clearTimeout;
    } else {
      pt = za;
    }
  } catch {
    pt = za;
  }
})();
function Yo(e) {
  if (vt === setTimeout) {
    return setTimeout(e, 0);
  }
  if ((vt === $a || !vt) && setTimeout) {
    vt = setTimeout;
    return setTimeout(e, 0);
  }
  try {
    return vt(e, 0);
  } catch {
    try {
      return vt.call(null, e, 0);
    } catch {
      return vt.call(this, e, 0);
    }
  }
}
function Eu(e) {
  if (pt === clearTimeout) {
    return clearTimeout(e);
  }
  if ((pt === za || !pt) && clearTimeout) {
    pt = clearTimeout;
    return clearTimeout(e);
  }
  try {
    return pt(e);
  } catch {
    try {
      return pt.call(null, e);
    } catch {
      return pt.call(this, e);
    }
  }
}
var Ct = [];
var zr = false;
var rr;
var fi = -1;
function Su() {
  if (!!zr && !!rr) {
    zr = false;
    if (rr.length) {
      Ct = rr.concat(Ct);
    } else {
      fi = -1;
    }
    if (Ct.length) {
      Jo();
    }
  }
}
function Jo() {
  if (!zr) {
    var e = Yo(Su);
    zr = true;
    for (var r = Ct.length; r;) {
      rr = Ct;
      Ct = [];
      while (++fi < r) {
        if (rr) {
          rr[fi].run();
        }
      }
      fi = -1;
      r = Ct.length;
    }
    rr = null;
    zr = false;
    Eu(e);
  }
}
Ne.nextTick = function (e) {
  var r = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var t = 1; t < arguments.length; t++) {
      r[t - 1] = arguments[t];
    }
  }
  Ct.push(new Qo(e, r));
  if (Ct.length === 1 && !zr) {
    Yo(Jo);
  }
};
function Qo(e, r) {
  this.fun = e;
  this.array = r;
}
Qo.prototype.run = function () {
  this.fun.apply(null, this.array);
};
Ne.title = "browser";
Ne.browser = true;
Ne.env = {};
Ne.argv = [];
Ne.version = "";
Ne.versions = {};
function zt() {}
Ne.on = zt;
Ne.addListener = zt;
Ne.once = zt;
Ne.off = zt;
Ne.removeListener = zt;
Ne.removeAllListeners = zt;
Ne.emit = zt;
Ne.prependListener = zt;
Ne.prependOnceListener = zt;
Ne.listeners = function (e) {
  return [];
};
Ne.binding = function (e) {
  throw new Error("process.binding is not supported");
};
Ne.cwd = function () {
  return "/";
};
Ne.chdir = function (e) {
  throw new Error("process.chdir is not supported");
};
Ne.umask = function () {
  return 0;
};
var Au = function (e) {
  function r() {
    var n = this || self;
    delete e.prototype.__magic__;
    return n;
  }
  if (typeof globalThis == "object") {
    return globalThis;
  }
  if (this) {
    return r();
  }
  e.defineProperty(e.prototype, "__magic__", {
    configurable: true,
    get: r
  });
  var t = __magic__;
  return t;
}(Object);
var Cu = Au;
var be;
(function (e) {
  e.assertEqual = i => i;
  function r(i) {}
  e.assertIs = r;
  function t(i) {
    throw new Error();
  }
  e.assertNever = t;
  e.arrayToEnum = i => {
    const a = {};
    for (const o of i) {
      a[o] = o;
    }
    return a;
  };
  e.getValidEnumValues = i => {
    const a = e.objectKeys(i).filter(s => typeof i[i[s]] != "number");
    const o = {};
    for (const s of a) {
      o[s] = i[s];
    }
    return e.objectValues(o);
  };
  e.objectValues = i => e.objectKeys(i).map(function (a) {
    return i[a];
  });
  e.objectKeys = typeof Object.keys == "function" ? i => Object.keys(i) : i => {
    const a = [];
    for (const o in i) {
      if (Object.prototype.hasOwnProperty.call(i, o)) {
        a.push(o);
      }
    }
    return a;
  };
  e.find = (i, a) => {
    for (const o of i) {
      if (a(o)) {
        return o;
      }
    }
  };
  e.isInteger = typeof Number.isInteger == "function" ? i => Number.isInteger(i) : i => typeof i == "number" && isFinite(i) && Math.floor(i) === i;
  function n(i, a = " | ") {
    return i.map(o => typeof o == "string" ? `'${o}'` : o).join(a);
  }
  e.joinValues = n;
  e.jsonStringifyReplacer = (i, a) => typeof a == "bigint" ? a.toString() : a;
})(be ||= {});
var Oa;
(function (e) {
  e.mergeShapes = (r, t) => ({
    ...r,
    ...t
  });
})(Oa ||= {});
const te = be.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
const Pt = e => {
  switch (typeof e) {
    case "undefined":
      return te.undefined;
    case "string":
      return te.string;
    case "number":
      if (isNaN(e)) {
        return te.nan;
      } else {
        return te.number;
      }
    case "boolean":
      return te.boolean;
    case "function":
      return te.function;
    case "bigint":
      return te.bigint;
    case "symbol":
      return te.symbol;
    case "object":
      if (Array.isArray(e)) {
        return te.array;
      } else if (e === null) {
        return te.null;
      } else if (e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function") {
        return te.promise;
      } else if (typeof Map !== "undefined" && e instanceof Map) {
        return te.map;
      } else if (typeof Set !== "undefined" && e instanceof Set) {
        return te.set;
      } else if (typeof Date !== "undefined" && e instanceof Date) {
        return te.date;
      } else {
        return te.object;
      }
    default:
      return te.unknown;
  }
};
const J = be.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
const Tu = e => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class ct extends Error {
  constructor(r) {
    super();
    this.issues = [];
    this.addIssue = n => {
      this.issues = [...this.issues, n];
    };
    this.addIssues = (n = []) => {
      this.issues = [...this.issues, ...n];
    };
    const t = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, t);
    } else {
      this.__proto__ = t;
    }
    this.name = "ZodError";
    this.issues = r;
  }
  get errors() {
    return this.issues;
  }
  format(r) {
    const t = r || function (a) {
      return a.message;
    };
    const n = {
      _errors: []
    };
    const i = a => {
      for (const o of a.issues) {
        if (o.code === "invalid_union") {
          o.unionErrors.map(i);
        } else if (o.code === "invalid_return_type") {
          i(o.returnTypeError);
        } else if (o.code === "invalid_arguments") {
          i(o.argumentsError);
        } else if (o.path.length === 0) {
          n._errors.push(t(o));
        } else {
          let s = n;
          let d = 0;
          while (d < o.path.length) {
            const c = o.path[d];
            if (d === o.path.length - 1) {
              s[c] = s[c] || {
                _errors: []
              };
              s[c]._errors.push(t(o));
            } else {
              s[c] = s[c] || {
                _errors: []
              };
            }
            s = s[c];
            d++;
          }
        }
      }
    };
    i(this);
    return n;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, be.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(r = t => t.message) {
    const t = {};
    const n = [];
    for (const i of this.issues) {
      if (i.path.length > 0) {
        t[i.path[0]] = t[i.path[0]] || [];
        t[i.path[0]].push(r(i));
      } else {
        n.push(r(i));
      }
    }
    return {
      formErrors: n,
      fieldErrors: t
    };
  }
  get formErrors() {
    return this.flatten();
  }
}
ct.create = e => new ct(e);
const bn = (e, r) => {
  let t;
  switch (e.code) {
    case J.invalid_type:
      if (e.received === te.undefined) {
        t = "Required";
      } else {
        t = `Expected ${e.expected}, received ${e.received}`;
      }
      break;
    case J.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(e.expected, be.jsonStringifyReplacer)}`;
      break;
    case J.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${be.joinValues(e.keys, ", ")}`;
      break;
    case J.invalid_union:
      t = "Invalid input";
      break;
    case J.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${be.joinValues(e.options)}`;
      break;
    case J.invalid_enum_value:
      t = `Invalid enum value. Expected ${be.joinValues(e.options)}, received '${e.received}'`;
      break;
    case J.invalid_arguments:
      t = "Invalid function arguments";
      break;
    case J.invalid_return_type:
      t = "Invalid function return type";
      break;
    case J.invalid_date:
      t = "Invalid date";
      break;
    case J.invalid_string:
      if (typeof e.validation == "object") {
        if ("includes" in e.validation) {
          t = `Invalid input: must include "${e.validation.includes}"`;
          if (typeof e.validation.position == "number") {
            t = `${t} at one or more positions greater than or equal to ${e.validation.position}`;
          }
        } else if ("startsWith" in e.validation) {
          t = `Invalid input: must start with "${e.validation.startsWith}"`;
        } else if ("endsWith" in e.validation) {
          t = `Invalid input: must end with "${e.validation.endsWith}"`;
        } else {
          be.assertNever(e.validation);
        }
      } else if (e.validation !== "regex") {
        t = `Invalid ${e.validation}`;
      } else {
        t = "Invalid";
      }
      break;
    case J.too_small:
      if (e.type === "array") {
        t = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)`;
      } else if (e.type === "string") {
        t = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)`;
      } else if (e.type === "number") {
        t = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}`;
      } else if (e.type === "date") {
        t = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}`;
      } else {
        t = "Invalid input";
      }
      break;
    case J.too_big:
      if (e.type === "array") {
        t = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)`;
      } else if (e.type === "string") {
        t = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)`;
      } else if (e.type === "number") {
        t = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}`;
      } else if (e.type === "bigint") {
        t = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}`;
      } else if (e.type === "date") {
        t = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}`;
      } else {
        t = "Invalid input";
      }
      break;
    case J.custom:
      t = "Invalid input";
      break;
    case J.invalid_intersection_types:
      t = "Intersection results could not be merged";
      break;
    case J.not_multiple_of:
      t = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case J.not_finite:
      t = "Number must be finite";
      break;
    default:
      t = r.defaultError;
      be.assertNever(e);
  }
  return {
    message: t
  };
};
let ec = bn;
function Iu(e) {
  ec = e;
}
function ki() {
  return ec;
}
const Ei = e => {
  const {
    data: r,
    path: t,
    errorMaps: n,
    issueData: i
  } = e;
  const a = [...t, ...(i.path || [])];
  const o = {
    ...i,
    path: a
  };
  let s = "";
  const d = n.filter(c => !!c).slice().reverse();
  for (const c of d) {
    s = c(o, {
      data: r,
      defaultError: s
    }).message;
  }
  return {
    ...i,
    path: a,
    message: i.message || s
  };
};
const Bu = [];
function ie(e, r) {
  const t = Ei({
    issueData: r,
    data: e.data,
    path: e.path,
    errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, ki(), bn].filter(n => !!n)
  });
  e.common.issues.push(t);
}
class We {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid") {
      this.value = "dirty";
    }
  }
  abort() {
    if (this.value !== "aborted") {
      this.value = "aborted";
    }
  }
  static mergeArray(r, t) {
    const n = [];
    for (const i of t) {
      if (i.status === "aborted") {
        return de;
      }
      if (i.status === "dirty") {
        r.dirty();
      }
      n.push(i.value);
    }
    return {
      status: r.value,
      value: n
    };
  }
  static async mergeObjectAsync(r, t) {
    const n = [];
    for (const i of t) {
      n.push({
        key: await i.key,
        value: await i.value
      });
    }
    return We.mergeObjectSync(r, n);
  }
  static mergeObjectSync(r, t) {
    const n = {};
    for (const i of t) {
      const {
        key: a,
        value: o
      } = i;
      if (a.status === "aborted" || o.status === "aborted") {
        return de;
      }
      if (a.status === "dirty") {
        r.dirty();
      }
      if (o.status === "dirty") {
        r.dirty();
      }
      if (typeof o.value !== "undefined" || i.alwaysSet) {
        n[a.value] = o.value;
      }
    }
    return {
      status: r.value,
      value: n
    };
  }
}
const de = Object.freeze({
  status: "aborted"
});
const tc = e => ({
  status: "dirty",
  value: e
});
const qe = e => ({
  status: "valid",
  value: e
});
const Na = e => e.status === "aborted";
const Fa = e => e.status === "dirty";
const Si = e => e.status === "valid";
const Ai = e => typeof Promise !== "undefined" && e instanceof Promise;
var oe;
(function (e) {
  e.errToObj = r => typeof r == "string" ? {
    message: r
  } : r || {};
  e.toString = r => typeof r == "string" ? r : r?.message;
})(oe ||= {});
class bt {
  constructor(r, t, n, i) {
    this._cachedPath = [];
    this.parent = r;
    this.data = t;
    this._path = n;
    this._key = i;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (this._key instanceof Array) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
}
const Hs = (e, r) => {
  if (Si(r)) {
    return {
      success: true,
      data: r.value
    };
  }
  if (!e.common.issues.length) {
    throw new Error("Validation failed but no issues detected.");
  }
  return {
    success: false,
    get error() {
      if (this._error) {
        return this._error;
      }
      const t = new ct(e.common.issues);
      this._error = t;
      return this._error;
    }
  };
};
function ve(e) {
  if (!e) {
    return {};
  }
  const {
    errorMap: r,
    invalid_type_error: t,
    required_error: n,
    description: i
  } = e;
  if (r && (t || n)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (r) {
    return {
      errorMap: r,
      description: i
    };
  } else {
    return {
      errorMap: (o, s) => o.code !== "invalid_type" ? {
        message: s.defaultError
      } : typeof s.data === "undefined" ? {
        message: n ?? s.defaultError
      } : {
        message: t ?? s.defaultError
      },
      description: i
    };
  }
}
class pe {
  constructor(r) {
    this.spa = this.safeParseAsync;
    this._def = r;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(r) {
    return Pt(r.data);
  }
  _getOrReturnCtx(r, t) {
    return t || {
      common: r.parent.common,
      data: r.data,
      parsedType: Pt(r.data),
      schemaErrorMap: this._def.errorMap,
      path: r.path,
      parent: r.parent
    };
  }
  _processInputParams(r) {
    return {
      status: new We(),
      ctx: {
        common: r.parent.common,
        data: r.data,
        parsedType: Pt(r.data),
        schemaErrorMap: this._def.errorMap,
        path: r.path,
        parent: r.parent
      }
    };
  }
  _parseSync(r) {
    const t = this._parse(r);
    if (Ai(t)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return t;
  }
  _parseAsync(r) {
    const t = this._parse(r);
    return Promise.resolve(t);
  }
  parse(r, t) {
    const n = this.safeParse(r, t);
    if (n.success) {
      return n.data;
    }
    throw n.error;
  }
  safeParse(r, t) {
    const i = {
      common: {
        issues: [],
        async: t?.async ?? false,
        contextualErrorMap: t?.errorMap
      },
      path: t?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: r,
      parsedType: Pt(r)
    };
    const a = this._parseSync({
      data: r,
      path: i.path,
      parent: i
    });
    return Hs(i, a);
  }
  async parseAsync(r, t) {
    const n = await this.safeParseAsync(r, t);
    if (n.success) {
      return n.data;
    }
    throw n.error;
  }
  async safeParseAsync(r, t) {
    const n = {
      common: {
        issues: [],
        contextualErrorMap: t?.errorMap,
        async: true
      },
      path: t?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: r,
      parsedType: Pt(r)
    };
    const i = this._parse({
      data: r,
      path: n.path,
      parent: n
    });
    const a = await (Ai(i) ? i : Promise.resolve(i));
    return Hs(n, a);
  }
  refine(r, t) {
    const n = i => typeof t == "string" || typeof t === "undefined" ? {
      message: t
    } : typeof t == "function" ? t(i) : t;
    return this._refinement((i, a) => {
      const o = r(i);
      const s = () => a.addIssue({
        code: J.custom,
        ...n(i)
      });
      if (typeof Promise !== "undefined" && o instanceof Promise) {
        return o.then(d => d ? true : (s(), false));
      } else if (o) {
        return true;
      } else {
        s();
        return false;
      }
    });
  }
  refinement(r, t) {
    return this._refinement((n, i) => r(n) ? true : (i.addIssue(typeof t == "function" ? t(n, i) : t), false));
  }
  _refinement(r) {
    return new ft({
      schema: this,
      typeName: ce.ZodEffects,
      effect: {
        type: "refinement",
        refinement: r
      }
    });
  }
  superRefine(r) {
    return this._refinement(r);
  }
  optional() {
    return Bt.create(this, this._def);
  }
  nullable() {
    return dr.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return lt.create(this, this._def);
  }
  promise() {
    return Zr.create(this, this._def);
  }
  or(r) {
    return Sn.create([this, r], this._def);
  }
  and(r) {
    return An.create(this, r, this._def);
  }
  transform(r) {
    return new ft({
      ...ve(this._def),
      schema: this,
      typeName: ce.ZodEffects,
      effect: {
        type: "transform",
        transform: r
      }
    });
  }
  default(r) {
    const t = typeof r == "function" ? r : () => r;
    return new Dn({
      ...ve(this._def),
      innerType: this,
      defaultValue: t,
      typeName: ce.ZodDefault
    });
  }
  brand() {
    return new nc({
      typeName: ce.ZodBranded,
      type: this,
      ...ve(this._def)
    });
  }
  catch(r) {
    const t = typeof r == "function" ? r : () => r;
    return new Bi({
      ...ve(this._def),
      innerType: this,
      catchValue: t,
      typeName: ce.ZodCatch
    });
  }
  describe(r) {
    const t = this.constructor;
    return new t({
      ...this._def,
      description: r
    });
  }
  pipe(r) {
    return Xn.create(this, r);
  }
  isOptional() {
    return this.safeParse(undefined).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Du = /^c[^\s-]{8,}$/i;
const Ru = /^[a-z][a-z0-9]*$/;
const $u = /[0-9A-HJKMNP-TV-Z]{26}/;
const zu = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
const Ou = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/;
const Nu = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u;
const Fu = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/;
const Uu = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
const Lu = e => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function Pu(e, r) {
  return (r === "v4" || !!!r) && !!Fu.test(e) || (r === "v6" || !!!r) && !!Uu.test(e);
}
class ot extends pe {
  constructor() {
    super(...arguments);
    this._regex = (r, t, n) => this.refinement(i => r.test(i), {
      validation: t,
      code: J.invalid_string,
      ...oe.errToObj(n)
    });
    this.nonempty = r => this.min(1, oe.errToObj(r));
    this.trim = () => new ot({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "trim"
      }]
    });
    this.toLowerCase = () => new ot({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "toLowerCase"
      }]
    });
    this.toUpperCase = () => new ot({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "toUpperCase"
      }]
    });
  }
  _parse(r) {
    if (this._def.coerce) {
      r.data = String(r.data);
    }
    if (this._getType(r) !== te.string) {
      const a = this._getOrReturnCtx(r);
      ie(a, {
        code: J.invalid_type,
        expected: te.string,
        received: a.parsedType
      });
      return de;
    }
    const n = new We();
    let i;
    for (const a of this._def.checks) {
      if (a.kind === "min") {
        if (r.data.length < a.value) {
          i = this._getOrReturnCtx(r, i);
          ie(i, {
            code: J.too_small,
            minimum: a.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: a.message
          });
          n.dirty();
        }
      } else if (a.kind === "max") {
        if (r.data.length > a.value) {
          i = this._getOrReturnCtx(r, i);
          ie(i, {
            code: J.too_big,
            maximum: a.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: a.message
          });
          n.dirty();
        }
      } else if (a.kind === "length") {
        const o = r.data.length > a.value;
        const s = r.data.length < a.value;
        if (o || s) {
          i = this._getOrReturnCtx(r, i);
          if (o) {
            ie(i, {
              code: J.too_big,
              maximum: a.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: a.message
            });
          } else if (s) {
            ie(i, {
              code: J.too_small,
              minimum: a.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: a.message
            });
          }
          n.dirty();
        }
      } else if (a.kind === "email") {
        if (!Ou.test(r.data)) {
          i = this._getOrReturnCtx(r, i);
          ie(i, {
            validation: "email",
            code: J.invalid_string,
            message: a.message
          });
          n.dirty();
        }
      } else if (a.kind === "emoji") {
        if (!Nu.test(r.data)) {
          i = this._getOrReturnCtx(r, i);
          ie(i, {
            validation: "emoji",
            code: J.invalid_string,
            message: a.message
          });
          n.dirty();
        }
      } else if (a.kind === "uuid") {
        if (!zu.test(r.data)) {
          i = this._getOrReturnCtx(r, i);
          ie(i, {
            validation: "uuid",
            code: J.invalid_string,
            message: a.message
          });
          n.dirty();
        }
      } else if (a.kind === "cuid") {
        if (!Du.test(r.data)) {
          i = this._getOrReturnCtx(r, i);
          ie(i, {
            validation: "cuid",
            code: J.invalid_string,
            message: a.message
          });
          n.dirty();
        }
      } else if (a.kind === "cuid2") {
        if (!Ru.test(r.data)) {
          i = this._getOrReturnCtx(r, i);
          ie(i, {
            validation: "cuid2",
            code: J.invalid_string,
            message: a.message
          });
          n.dirty();
        }
      } else if (a.kind === "ulid") {
        if (!$u.test(r.data)) {
          i = this._getOrReturnCtx(r, i);
          ie(i, {
            validation: "ulid",
            code: J.invalid_string,
            message: a.message
          });
          n.dirty();
        }
      } else if (a.kind === "url") {
        try {
          new URL(r.data);
        } catch {
          i = this._getOrReturnCtx(r, i);
          ie(i, {
            validation: "url",
            code: J.invalid_string,
            message: a.message
          });
          n.dirty();
        }
      } else if (a.kind === "regex") {
        a.regex.lastIndex = 0;
        if (!a.regex.test(r.data)) {
          i = this._getOrReturnCtx(r, i);
          ie(i, {
            validation: "regex",
            code: J.invalid_string,
            message: a.message
          });
          n.dirty();
        }
      } else if (a.kind === "trim") {
        r.data = r.data.trim();
      } else if (a.kind === "includes") {
        if (!r.data.includes(a.value, a.position)) {
          i = this._getOrReturnCtx(r, i);
          ie(i, {
            code: J.invalid_string,
            validation: {
              includes: a.value,
              position: a.position
            },
            message: a.message
          });
          n.dirty();
        }
      } else if (a.kind === "toLowerCase") {
        r.data = r.data.toLowerCase();
      } else if (a.kind === "toUpperCase") {
        r.data = r.data.toUpperCase();
      } else if (a.kind === "startsWith") {
        if (!r.data.startsWith(a.value)) {
          i = this._getOrReturnCtx(r, i);
          ie(i, {
            code: J.invalid_string,
            validation: {
              startsWith: a.value
            },
            message: a.message
          });
          n.dirty();
        }
      } else if (a.kind === "endsWith") {
        if (!r.data.endsWith(a.value)) {
          i = this._getOrReturnCtx(r, i);
          ie(i, {
            code: J.invalid_string,
            validation: {
              endsWith: a.value
            },
            message: a.message
          });
          n.dirty();
        }
      } else if (a.kind === "datetime") {
        if (!Lu(a).test(r.data)) {
          i = this._getOrReturnCtx(r, i);
          ie(i, {
            code: J.invalid_string,
            validation: "datetime",
            message: a.message
          });
          n.dirty();
        }
      } else if (a.kind === "ip") {
        if (!Pu(r.data, a.version)) {
          i = this._getOrReturnCtx(r, i);
          ie(i, {
            validation: "ip",
            code: J.invalid_string,
            message: a.message
          });
          n.dirty();
        }
      } else {
        be.assertNever(a);
      }
    }
    return {
      status: n.value,
      value: r.data
    };
  }
  _addCheck(r) {
    return new ot({
      ...this._def,
      checks: [...this._def.checks, r]
    });
  }
  email(r) {
    return this._addCheck({
      kind: "email",
      ...oe.errToObj(r)
    });
  }
  url(r) {
    return this._addCheck({
      kind: "url",
      ...oe.errToObj(r)
    });
  }
  emoji(r) {
    return this._addCheck({
      kind: "emoji",
      ...oe.errToObj(r)
    });
  }
  uuid(r) {
    return this._addCheck({
      kind: "uuid",
      ...oe.errToObj(r)
    });
  }
  cuid(r) {
    return this._addCheck({
      kind: "cuid",
      ...oe.errToObj(r)
    });
  }
  cuid2(r) {
    return this._addCheck({
      kind: "cuid2",
      ...oe.errToObj(r)
    });
  }
  ulid(r) {
    return this._addCheck({
      kind: "ulid",
      ...oe.errToObj(r)
    });
  }
  ip(r) {
    return this._addCheck({
      kind: "ip",
      ...oe.errToObj(r)
    });
  }
  datetime(r) {
    if (typeof r == "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        message: r
      });
    } else {
      return this._addCheck({
        kind: "datetime",
        precision: typeof r?.precision === "undefined" ? null : r?.precision,
        offset: r?.offset ?? false,
        ...oe.errToObj(r?.message)
      });
    }
  }
  regex(r, t) {
    return this._addCheck({
      kind: "regex",
      regex: r,
      ...oe.errToObj(t)
    });
  }
  includes(r, t) {
    return this._addCheck({
      kind: "includes",
      value: r,
      position: t?.position,
      ...oe.errToObj(t?.message)
    });
  }
  startsWith(r, t) {
    return this._addCheck({
      kind: "startsWith",
      value: r,
      ...oe.errToObj(t)
    });
  }
  endsWith(r, t) {
    return this._addCheck({
      kind: "endsWith",
      value: r,
      ...oe.errToObj(t)
    });
  }
  min(r, t) {
    return this._addCheck({
      kind: "min",
      value: r,
      ...oe.errToObj(t)
    });
  }
  max(r, t) {
    return this._addCheck({
      kind: "max",
      value: r,
      ...oe.errToObj(t)
    });
  }
  length(r, t) {
    return this._addCheck({
      kind: "length",
      value: r,
      ...oe.errToObj(t)
    });
  }
  get isDatetime() {
    return !!this._def.checks.find(r => r.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find(r => r.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find(r => r.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find(r => r.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find(r => r.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find(r => r.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find(r => r.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find(r => r.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find(r => r.kind === "ip");
  }
  get minLength() {
    let r = null;
    for (const t of this._def.checks) {
      if (t.kind === "min" && (r === null || t.value > r)) {
        r = t.value;
      }
    }
    return r;
  }
  get maxLength() {
    let r = null;
    for (const t of this._def.checks) {
      if (t.kind === "max" && (r === null || t.value < r)) {
        r = t.value;
      }
    }
    return r;
  }
}
ot.create = e => {
  return new ot({
    checks: [],
    typeName: ce.ZodString,
    coerce: e?.coerce ?? false,
    ...ve(e)
  });
};
function Mu(e, r) {
  const t = (e.toString().split(".")[1] || "").length;
  const n = (r.toString().split(".")[1] || "").length;
  const i = t > n ? t : n;
  const a = parseInt(e.toFixed(i).replace(".", ""));
  const o = parseInt(r.toFixed(i).replace(".", ""));
  return a % o / Math.pow(10, i);
}
class Gt extends pe {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(r) {
    if (this._def.coerce) {
      r.data = Number(r.data);
    }
    if (this._getType(r) !== te.number) {
      const a = this._getOrReturnCtx(r);
      ie(a, {
        code: J.invalid_type,
        expected: te.number,
        received: a.parsedType
      });
      return de;
    }
    let n;
    const i = new We();
    for (const a of this._def.checks) {
      if (a.kind === "int") {
        if (!be.isInteger(r.data)) {
          n = this._getOrReturnCtx(r, n);
          ie(n, {
            code: J.invalid_type,
            expected: "integer",
            received: "float",
            message: a.message
          });
          i.dirty();
        }
      } else if (a.kind === "min") {
        if (a.inclusive ? r.data < a.value : r.data <= a.value) {
          n = this._getOrReturnCtx(r, n);
          ie(n, {
            code: J.too_small,
            minimum: a.value,
            type: "number",
            inclusive: a.inclusive,
            exact: false,
            message: a.message
          });
          i.dirty();
        }
      } else if (a.kind === "max") {
        if (a.inclusive ? r.data > a.value : r.data >= a.value) {
          n = this._getOrReturnCtx(r, n);
          ie(n, {
            code: J.too_big,
            maximum: a.value,
            type: "number",
            inclusive: a.inclusive,
            exact: false,
            message: a.message
          });
          i.dirty();
        }
      } else if (a.kind === "multipleOf") {
        if (Mu(r.data, a.value) !== 0) {
          n = this._getOrReturnCtx(r, n);
          ie(n, {
            code: J.not_multiple_of,
            multipleOf: a.value,
            message: a.message
          });
          i.dirty();
        }
      } else if (a.kind === "finite") {
        if (!Number.isFinite(r.data)) {
          n = this._getOrReturnCtx(r, n);
          ie(n, {
            code: J.not_finite,
            message: a.message
          });
          i.dirty();
        }
      } else {
        be.assertNever(a);
      }
    }
    return {
      status: i.value,
      value: r.data
    };
  }
  gte(r, t) {
    return this.setLimit("min", r, true, oe.toString(t));
  }
  gt(r, t) {
    return this.setLimit("min", r, false, oe.toString(t));
  }
  lte(r, t) {
    return this.setLimit("max", r, true, oe.toString(t));
  }
  lt(r, t) {
    return this.setLimit("max", r, false, oe.toString(t));
  }
  setLimit(r, t, n, i) {
    return new Gt({
      ...this._def,
      checks: [...this._def.checks, {
        kind: r,
        value: t,
        inclusive: n,
        message: oe.toString(i)
      }]
    });
  }
  _addCheck(r) {
    return new Gt({
      ...this._def,
      checks: [...this._def.checks, r]
    });
  }
  int(r) {
    return this._addCheck({
      kind: "int",
      message: oe.toString(r)
    });
  }
  positive(r) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: oe.toString(r)
    });
  }
  negative(r) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: oe.toString(r)
    });
  }
  nonpositive(r) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: oe.toString(r)
    });
  }
  nonnegative(r) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: oe.toString(r)
    });
  }
  multipleOf(r, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: r,
      message: oe.toString(t)
    });
  }
  finite(r) {
    return this._addCheck({
      kind: "finite",
      message: oe.toString(r)
    });
  }
  safe(r) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: oe.toString(r)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: oe.toString(r)
    });
  }
  get minValue() {
    let r = null;
    for (const t of this._def.checks) {
      if (t.kind === "min" && (r === null || t.value > r)) {
        r = t.value;
      }
    }
    return r;
  }
  get maxValue() {
    let r = null;
    for (const t of this._def.checks) {
      if (t.kind === "max" && (r === null || t.value < r)) {
        r = t.value;
      }
    }
    return r;
  }
  get isInt() {
    return !!this._def.checks.find(r => r.kind === "int" || r.kind === "multipleOf" && be.isInteger(r.value));
  }
  get isFinite() {
    let r = null;
    let t = null;
    for (const n of this._def.checks) {
      if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf") {
        return true;
      }
      if (n.kind === "min") {
        if (t === null || n.value > t) {
          t = n.value;
        }
      } else if (n.kind === "max" && (r === null || n.value < r)) {
        r = n.value;
      }
    }
    return Number.isFinite(t) && Number.isFinite(r);
  }
}
Gt.create = e => new Gt({
  checks: [],
  typeName: ce.ZodNumber,
  coerce: e?.coerce || false,
  ...ve(e)
});
class Xt extends pe {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(r) {
    if (this._def.coerce) {
      r.data = BigInt(r.data);
    }
    if (this._getType(r) !== te.bigint) {
      const a = this._getOrReturnCtx(r);
      ie(a, {
        code: J.invalid_type,
        expected: te.bigint,
        received: a.parsedType
      });
      return de;
    }
    let n;
    const i = new We();
    for (const a of this._def.checks) {
      if (a.kind === "min") {
        if (a.inclusive ? r.data < a.value : r.data <= a.value) {
          n = this._getOrReturnCtx(r, n);
          ie(n, {
            code: J.too_small,
            type: "bigint",
            minimum: a.value,
            inclusive: a.inclusive,
            message: a.message
          });
          i.dirty();
        }
      } else if (a.kind === "max") {
        if (a.inclusive ? r.data > a.value : r.data >= a.value) {
          n = this._getOrReturnCtx(r, n);
          ie(n, {
            code: J.too_big,
            type: "bigint",
            maximum: a.value,
            inclusive: a.inclusive,
            message: a.message
          });
          i.dirty();
        }
      } else if (a.kind === "multipleOf") {
        if (r.data % a.value !== BigInt(0)) {
          n = this._getOrReturnCtx(r, n);
          ie(n, {
            code: J.not_multiple_of,
            multipleOf: a.value,
            message: a.message
          });
          i.dirty();
        }
      } else {
        be.assertNever(a);
      }
    }
    return {
      status: i.value,
      value: r.data
    };
  }
  gte(r, t) {
    return this.setLimit("min", r, true, oe.toString(t));
  }
  gt(r, t) {
    return this.setLimit("min", r, false, oe.toString(t));
  }
  lte(r, t) {
    return this.setLimit("max", r, true, oe.toString(t));
  }
  lt(r, t) {
    return this.setLimit("max", r, false, oe.toString(t));
  }
  setLimit(r, t, n, i) {
    return new Xt({
      ...this._def,
      checks: [...this._def.checks, {
        kind: r,
        value: t,
        inclusive: n,
        message: oe.toString(i)
      }]
    });
  }
  _addCheck(r) {
    return new Xt({
      ...this._def,
      checks: [...this._def.checks, r]
    });
  }
  positive(r) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: oe.toString(r)
    });
  }
  negative(r) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: oe.toString(r)
    });
  }
  nonpositive(r) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: oe.toString(r)
    });
  }
  nonnegative(r) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: oe.toString(r)
    });
  }
  multipleOf(r, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: r,
      message: oe.toString(t)
    });
  }
  get minValue() {
    let r = null;
    for (const t of this._def.checks) {
      if (t.kind === "min" && (r === null || t.value > r)) {
        r = t.value;
      }
    }
    return r;
  }
  get maxValue() {
    let r = null;
    for (const t of this._def.checks) {
      if (t.kind === "max" && (r === null || t.value < r)) {
        r = t.value;
      }
    }
    return r;
  }
}
Xt.create = e => {
  return new Xt({
    checks: [],
    typeName: ce.ZodBigInt,
    coerce: e?.coerce ?? false,
    ...ve(e)
  });
};
class xn extends pe {
  _parse(r) {
    if (this._def.coerce) {
      r.data = !!r.data;
    }
    if (this._getType(r) !== te.boolean) {
      const n = this._getOrReturnCtx(r);
      ie(n, {
        code: J.invalid_type,
        expected: te.boolean,
        received: n.parsedType
      });
      return de;
    }
    return qe(r.data);
  }
}
xn.create = e => new xn({
  typeName: ce.ZodBoolean,
  coerce: e?.coerce || false,
  ...ve(e)
});
class ur extends pe {
  _parse(r) {
    if (this._def.coerce) {
      r.data = new Date(r.data);
    }
    if (this._getType(r) !== te.date) {
      const a = this._getOrReturnCtx(r);
      ie(a, {
        code: J.invalid_type,
        expected: te.date,
        received: a.parsedType
      });
      return de;
    }
    if (isNaN(r.data.getTime())) {
      const a = this._getOrReturnCtx(r);
      ie(a, {
        code: J.invalid_date
      });
      return de;
    }
    const n = new We();
    let i;
    for (const a of this._def.checks) {
      if (a.kind === "min") {
        if (r.data.getTime() < a.value) {
          i = this._getOrReturnCtx(r, i);
          ie(i, {
            code: J.too_small,
            message: a.message,
            inclusive: true,
            exact: false,
            minimum: a.value,
            type: "date"
          });
          n.dirty();
        }
      } else if (a.kind === "max") {
        if (r.data.getTime() > a.value) {
          i = this._getOrReturnCtx(r, i);
          ie(i, {
            code: J.too_big,
            message: a.message,
            inclusive: true,
            exact: false,
            maximum: a.value,
            type: "date"
          });
          n.dirty();
        }
      } else {
        be.assertNever(a);
      }
    }
    return {
      status: n.value,
      value: new Date(r.data.getTime())
    };
  }
  _addCheck(r) {
    return new ur({
      ...this._def,
      checks: [...this._def.checks, r]
    });
  }
  min(r, t) {
    return this._addCheck({
      kind: "min",
      value: r.getTime(),
      message: oe.toString(t)
    });
  }
  max(r, t) {
    return this._addCheck({
      kind: "max",
      value: r.getTime(),
      message: oe.toString(t)
    });
  }
  get minDate() {
    let r = null;
    for (const t of this._def.checks) {
      if (t.kind === "min" && (r === null || t.value > r)) {
        r = t.value;
      }
    }
    if (r != null) {
      return new Date(r);
    } else {
      return null;
    }
  }
  get maxDate() {
    let r = null;
    for (const t of this._def.checks) {
      if (t.kind === "max" && (r === null || t.value < r)) {
        r = t.value;
      }
    }
    if (r != null) {
      return new Date(r);
    } else {
      return null;
    }
  }
}
ur.create = e => new ur({
  checks: [],
  coerce: e?.coerce || false,
  typeName: ce.ZodDate,
  ...ve(e)
});
class Ci extends pe {
  _parse(r) {
    if (this._getType(r) !== te.symbol) {
      const n = this._getOrReturnCtx(r);
      ie(n, {
        code: J.invalid_type,
        expected: te.symbol,
        received: n.parsedType
      });
      return de;
    }
    return qe(r.data);
  }
}
Ci.create = e => new Ci({
  typeName: ce.ZodSymbol,
  ...ve(e)
});
class kn extends pe {
  _parse(r) {
    if (this._getType(r) !== te.undefined) {
      const n = this._getOrReturnCtx(r);
      ie(n, {
        code: J.invalid_type,
        expected: te.undefined,
        received: n.parsedType
      });
      return de;
    }
    return qe(r.data);
  }
}
kn.create = e => new kn({
  typeName: ce.ZodUndefined,
  ...ve(e)
});
class En extends pe {
  _parse(r) {
    if (this._getType(r) !== te.null) {
      const n = this._getOrReturnCtx(r);
      ie(n, {
        code: J.invalid_type,
        expected: te.null,
        received: n.parsedType
      });
      return de;
    }
    return qe(r.data);
  }
}
En.create = e => new En({
  typeName: ce.ZodNull,
  ...ve(e)
});
class jr extends pe {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(r) {
    return qe(r.data);
  }
}
jr.create = e => new jr({
  typeName: ce.ZodAny,
  ...ve(e)
});
class cr extends pe {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(r) {
    return qe(r.data);
  }
}
cr.create = e => new cr({
  typeName: ce.ZodUnknown,
  ...ve(e)
});
class Dt extends pe {
  _parse(r) {
    const t = this._getOrReturnCtx(r);
    ie(t, {
      code: J.invalid_type,
      expected: te.never,
      received: t.parsedType
    });
    return de;
  }
}
Dt.create = e => new Dt({
  typeName: ce.ZodNever,
  ...ve(e)
});
class Ti extends pe {
  _parse(r) {
    if (this._getType(r) !== te.undefined) {
      const n = this._getOrReturnCtx(r);
      ie(n, {
        code: J.invalid_type,
        expected: te.void,
        received: n.parsedType
      });
      return de;
    }
    return qe(r.data);
  }
}
Ti.create = e => new Ti({
  typeName: ce.ZodVoid,
  ...ve(e)
});
class lt extends pe {
  _parse(r) {
    const {
      ctx: t,
      status: n
    } = this._processInputParams(r);
    const i = this._def;
    if (t.parsedType !== te.array) {
      ie(t, {
        code: J.invalid_type,
        expected: te.array,
        received: t.parsedType
      });
      return de;
    }
    if (i.exactLength !== null) {
      const o = t.data.length > i.exactLength.value;
      const s = t.data.length < i.exactLength.value;
      if (o || s) {
        ie(t, {
          code: o ? J.too_big : J.too_small,
          minimum: s ? i.exactLength.value : undefined,
          maximum: o ? i.exactLength.value : undefined,
          type: "array",
          inclusive: true,
          exact: true,
          message: i.exactLength.message
        });
        n.dirty();
      }
    }
    if (i.minLength !== null && t.data.length < i.minLength.value) {
      ie(t, {
        code: J.too_small,
        minimum: i.minLength.value,
        type: "array",
        inclusive: true,
        exact: false,
        message: i.minLength.message
      });
      n.dirty();
    }
    if (i.maxLength !== null && t.data.length > i.maxLength.value) {
      ie(t, {
        code: J.too_big,
        maximum: i.maxLength.value,
        type: "array",
        inclusive: true,
        exact: false,
        message: i.maxLength.message
      });
      n.dirty();
    }
    if (t.common.async) {
      return Promise.all([...t.data].map((o, s) => i.type._parseAsync(new bt(t, o, t.path, s)))).then(o => We.mergeArray(n, o));
    }
    const a = [...t.data].map((o, s) => i.type._parseSync(new bt(t, o, t.path, s)));
    return We.mergeArray(n, a);
  }
  get element() {
    return this._def.type;
  }
  min(r, t) {
    return new lt({
      ...this._def,
      minLength: {
        value: r,
        message: oe.toString(t)
      }
    });
  }
  max(r, t) {
    return new lt({
      ...this._def,
      maxLength: {
        value: r,
        message: oe.toString(t)
      }
    });
  }
  length(r, t) {
    return new lt({
      ...this._def,
      exactLength: {
        value: r,
        message: oe.toString(t)
      }
    });
  }
  nonempty(r) {
    return this.min(1, r);
  }
}
lt.create = (e, r) => new lt({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: ce.ZodArray,
  ...ve(r)
});
function Cr(e) {
  if (e instanceof Re) {
    const r = {};
    for (const t in e.shape) {
      const n = e.shape[t];
      r[t] = Bt.create(Cr(n));
    }
    return new Re({
      ...e._def,
      shape: () => r
    });
  } else if (e instanceof lt) {
    return new lt({
      ...e._def,
      type: Cr(e.element)
    });
  } else if (e instanceof Bt) {
    return Bt.create(Cr(e.unwrap()));
  } else if (e instanceof dr) {
    return dr.create(Cr(e.unwrap()));
  } else if (e instanceof xt) {
    return xt.create(e.items.map(r => Cr(r)));
  } else {
    return e;
  }
}
class Re extends pe {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null) {
      return this._cached;
    }
    const r = this._def.shape();
    const t = be.objectKeys(r);
    return this._cached = {
      shape: r,
      keys: t
    };
  }
  _parse(r) {
    if (this._getType(r) !== te.object) {
      const c = this._getOrReturnCtx(r);
      ie(c, {
        code: J.invalid_type,
        expected: te.object,
        received: c.parsedType
      });
      return de;
    }
    const {
      status: n,
      ctx: i
    } = this._processInputParams(r);
    const {
      shape: a,
      keys: o
    } = this._getCached();
    const s = [];
    if (!(this._def.catchall instanceof Dt) || this._def.unknownKeys !== "strip") {
      for (const c in i.data) {
        if (!o.includes(c)) {
          s.push(c);
        }
      }
    }
    const d = [];
    for (const c of o) {
      const l = a[c];
      const m = i.data[c];
      d.push({
        key: {
          status: "valid",
          value: c
        },
        value: l._parse(new bt(i, m, i.path, c)),
        alwaysSet: c in i.data
      });
    }
    if (this._def.catchall instanceof Dt) {
      const c = this._def.unknownKeys;
      if (c === "passthrough") {
        for (const l of s) {
          d.push({
            key: {
              status: "valid",
              value: l
            },
            value: {
              status: "valid",
              value: i.data[l]
            }
          });
        }
      } else if (c === "strict") {
        if (s.length > 0) {
          ie(i, {
            code: J.unrecognized_keys,
            keys: s
          });
          n.dirty();
        }
      } else if (c !== "strip") {
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
      }
    } else {
      const c = this._def.catchall;
      for (const l of s) {
        const m = i.data[l];
        d.push({
          key: {
            status: "valid",
            value: l
          },
          value: c._parse(new bt(i, m, i.path, l)),
          alwaysSet: l in i.data
        });
      }
    }
    if (i.common.async) {
      return Promise.resolve().then(async () => {
        const c = [];
        for (const l of d) {
          const m = await l.key;
          c.push({
            key: m,
            value: await l.value,
            alwaysSet: l.alwaysSet
          });
        }
        return c;
      }).then(c => We.mergeObjectSync(n, c));
    } else {
      return We.mergeObjectSync(n, d);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(r) {
    oe.errToObj;
    return new Re({
      ...this._def,
      unknownKeys: "strict",
      ...(r !== undefined ? {
        errorMap: (t, n) => {
          var i;
          var a;
          const d = ((a = (i = this._def).errorMap) === null || a === undefined ? undefined : a.call(i, t, n).message) ?? n.defaultError;
          if (t.code === "unrecognized_keys") {
            return {
              message: oe.errToObj(r).message ?? d
            };
          } else {
            return {
              message: d
            };
          }
        }
      } : {})
    });
  }
  strip() {
    return new Re({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new Re({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  extend(r) {
    return new Re({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...r
      })
    });
  }
  merge(r) {
    return new Re({
      unknownKeys: r._def.unknownKeys,
      catchall: r._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...r._def.shape()
      }),
      typeName: ce.ZodObject
    });
  }
  setKey(r, t) {
    return this.augment({
      [r]: t
    });
  }
  catchall(r) {
    return new Re({
      ...this._def,
      catchall: r
    });
  }
  pick(r) {
    const t = {};
    be.objectKeys(r).forEach(n => {
      if (r[n] && this.shape[n]) {
        t[n] = this.shape[n];
      }
    });
    return new Re({
      ...this._def,
      shape: () => t
    });
  }
  omit(r) {
    const t = {};
    be.objectKeys(this.shape).forEach(n => {
      if (!r[n]) {
        t[n] = this.shape[n];
      }
    });
    return new Re({
      ...this._def,
      shape: () => t
    });
  }
  deepPartial() {
    return Cr(this);
  }
  partial(r) {
    const t = {};
    be.objectKeys(this.shape).forEach(n => {
      const i = this.shape[n];
      if (r && !r[n]) {
        t[n] = i;
      } else {
        t[n] = i.optional();
      }
    });
    return new Re({
      ...this._def,
      shape: () => t
    });
  }
  required(r) {
    const t = {};
    be.objectKeys(this.shape).forEach(n => {
      if (r && !r[n]) {
        t[n] = this.shape[n];
      } else {
        let a = this.shape[n];
        while (a instanceof Bt) {
          a = a._def.innerType;
        }
        t[n] = a;
      }
    });
    return new Re({
      ...this._def,
      shape: () => t
    });
  }
  keyof() {
    return rc(be.objectKeys(this.shape));
  }
}
Re.create = (e, r) => new Re({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Dt.create(),
  typeName: ce.ZodObject,
  ...ve(r)
});
Re.strictCreate = (e, r) => new Re({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Dt.create(),
  typeName: ce.ZodObject,
  ...ve(r)
});
Re.lazycreate = (e, r) => new Re({
  shape: e,
  unknownKeys: "strip",
  catchall: Dt.create(),
  typeName: ce.ZodObject,
  ...ve(r)
});
class Sn extends pe {
  _parse(r) {
    const {
      ctx: t
    } = this._processInputParams(r);
    const n = this._def.options;
    function i(a) {
      for (const s of a) {
        if (s.result.status === "valid") {
          return s.result;
        }
      }
      for (const s of a) {
        if (s.result.status === "dirty") {
          t.common.issues.push(...s.ctx.common.issues);
          return s.result;
        }
      }
      const o = a.map(s => new ct(s.ctx.common.issues));
      ie(t, {
        code: J.invalid_union,
        unionErrors: o
      });
      return de;
    }
    if (t.common.async) {
      return Promise.all(n.map(async a => {
        const o = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await a._parseAsync({
            data: t.data,
            path: t.path,
            parent: o
          }),
          ctx: o
        };
      })).then(i);
    }
    {
      let a;
      const o = [];
      for (const d of n) {
        const c = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        };
        const l = d._parseSync({
          data: t.data,
          path: t.path,
          parent: c
        });
        if (l.status === "valid") {
          return l;
        }
        if (l.status === "dirty" && !a) {
          a = {
            result: l,
            ctx: c
          };
        }
        if (c.common.issues.length) {
          o.push(c.common.issues);
        }
      }
      if (a) {
        t.common.issues.push(...a.ctx.common.issues);
        return a.result;
      }
      const s = o.map(d => new ct(d));
      ie(t, {
        code: J.invalid_union,
        unionErrors: s
      });
      return de;
    }
  }
  get options() {
    return this._def.options;
  }
}
Sn.create = (e, r) => new Sn({
  options: e,
  typeName: ce.ZodUnion,
  ...ve(r)
});
const di = e => e instanceof Tn ? di(e.schema) : e instanceof ft ? di(e.innerType()) : e instanceof In ? [e.value] : e instanceof Yt ? e.options : e instanceof Bn ? Object.keys(e.enum) : e instanceof Dn ? di(e._def.innerType) : e instanceof kn ? [undefined] : e instanceof En ? [null] : null;
class Yi extends pe {
  _parse(r) {
    const {
      ctx: t
    } = this._processInputParams(r);
    if (t.parsedType !== te.object) {
      ie(t, {
        code: J.invalid_type,
        expected: te.object,
        received: t.parsedType
      });
      return de;
    }
    const n = this.discriminator;
    const i = t.data[n];
    const a = this.optionsMap.get(i);
    if (a) {
      if (t.common.async) {
        return a._parseAsync({
          data: t.data,
          path: t.path,
          parent: t
        });
      } else {
        return a._parseSync({
          data: t.data,
          path: t.path,
          parent: t
        });
      }
    } else {
      ie(t, {
        code: J.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [n]
      });
      return de;
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(r, t, n) {
    const i = new Map();
    for (const a of t) {
      const o = di(a.shape[r]);
      if (!o) {
        throw new Error(`A discriminator value for key \`${r}\` could not be extracted from all schema options`);
      }
      for (const s of o) {
        if (i.has(s)) {
          throw new Error(`Discriminator property ${String(r)} has duplicate value ${String(s)}`);
        }
        i.set(s, a);
      }
    }
    return new Yi({
      typeName: ce.ZodDiscriminatedUnion,
      discriminator: r,
      options: t,
      optionsMap: i,
      ...ve(n)
    });
  }
}
function Ua(e, r) {
  const t = Pt(e);
  const n = Pt(r);
  if (e === r) {
    return {
      valid: true,
      data: e
    };
  }
  if (t === te.object && n === te.object) {
    const i = be.objectKeys(r);
    const a = be.objectKeys(e).filter(s => i.indexOf(s) !== -1);
    const o = {
      ...e,
      ...r
    };
    for (const s of a) {
      const d = Ua(e[s], r[s]);
      if (!d.valid) {
        return {
          valid: false
        };
      }
      o[s] = d.data;
    }
    return {
      valid: true,
      data: o
    };
  } else if (t === te.array && n === te.array) {
    if (e.length !== r.length) {
      return {
        valid: false
      };
    }
    const i = [];
    for (let a = 0; a < e.length; a++) {
      const o = e[a];
      const s = r[a];
      const d = Ua(o, s);
      if (!d.valid) {
        return {
          valid: false
        };
      }
      i.push(d.data);
    }
    return {
      valid: true,
      data: i
    };
  } else if (t === te.date && n === te.date && +e == +r) {
    return {
      valid: true,
      data: e
    };
  } else {
    return {
      valid: false
    };
  }
}
class An extends pe {
  _parse(r) {
    const {
      status: t,
      ctx: n
    } = this._processInputParams(r);
    const i = (a, o) => {
      if (Na(a) || Na(o)) {
        return de;
      }
      const s = Ua(a.value, o.value);
      if (s.valid) {
        if (Fa(a) || Fa(o)) {
          t.dirty();
        }
        return {
          status: t.value,
          value: s.data
        };
      } else {
        ie(n, {
          code: J.invalid_intersection_types
        });
        return de;
      }
    };
    if (n.common.async) {
      return Promise.all([this._def.left._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      }), this._def.right._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      })]).then(([a, o]) => i(a, o));
    } else {
      return i(this._def.left._parseSync({
        data: n.data,
        path: n.path,
        parent: n
      }), this._def.right._parseSync({
        data: n.data,
        path: n.path,
        parent: n
      }));
    }
  }
}
An.create = (e, r, t) => new An({
  left: e,
  right: r,
  typeName: ce.ZodIntersection,
  ...ve(t)
});
class xt extends pe {
  _parse(r) {
    const {
      status: t,
      ctx: n
    } = this._processInputParams(r);
    if (n.parsedType !== te.array) {
      ie(n, {
        code: J.invalid_type,
        expected: te.array,
        received: n.parsedType
      });
      return de;
    }
    if (n.data.length < this._def.items.length) {
      ie(n, {
        code: J.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return de;
    }
    if (!this._def.rest && n.data.length > this._def.items.length) {
      ie(n, {
        code: J.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      t.dirty();
    }
    const a = [...n.data].map((o, s) => {
      const d = this._def.items[s] || this._def.rest;
      if (d) {
        return d._parse(new bt(n, o, n.path, s));
      } else {
        return null;
      }
    }).filter(o => !!o);
    if (n.common.async) {
      return Promise.all(a).then(o => We.mergeArray(t, o));
    } else {
      return We.mergeArray(t, a);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(r) {
    return new xt({
      ...this._def,
      rest: r
    });
  }
}
xt.create = (e, r) => {
  if (!Array.isArray(e)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new xt({
    items: e,
    typeName: ce.ZodTuple,
    rest: null,
    ...ve(r)
  });
};
class Cn extends pe {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(r) {
    const {
      status: t,
      ctx: n
    } = this._processInputParams(r);
    if (n.parsedType !== te.object) {
      ie(n, {
        code: J.invalid_type,
        expected: te.object,
        received: n.parsedType
      });
      return de;
    }
    const i = [];
    const a = this._def.keyType;
    const o = this._def.valueType;
    for (const s in n.data) {
      i.push({
        key: a._parse(new bt(n, s, n.path, s)),
        value: o._parse(new bt(n, n.data[s], n.path, s))
      });
    }
    if (n.common.async) {
      return We.mergeObjectAsync(t, i);
    } else {
      return We.mergeObjectSync(t, i);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(r, t, n) {
    if (t instanceof pe) {
      return new Cn({
        keyType: r,
        valueType: t,
        typeName: ce.ZodRecord,
        ...ve(n)
      });
    } else {
      return new Cn({
        keyType: ot.create(),
        valueType: r,
        typeName: ce.ZodRecord,
        ...ve(t)
      });
    }
  }
}
class Ii extends pe {
  _parse(r) {
    const {
      status: t,
      ctx: n
    } = this._processInputParams(r);
    if (n.parsedType !== te.map) {
      ie(n, {
        code: J.invalid_type,
        expected: te.map,
        received: n.parsedType
      });
      return de;
    }
    const i = this._def.keyType;
    const a = this._def.valueType;
    const o = [...n.data.entries()].map(([s, d], c) => ({
      key: i._parse(new bt(n, s, n.path, [c, "key"])),
      value: a._parse(new bt(n, d, n.path, [c, "value"]))
    }));
    if (n.common.async) {
      const s = new Map();
      return Promise.resolve().then(async () => {
        for (const d of o) {
          const c = await d.key;
          const l = await d.value;
          if (c.status === "aborted" || l.status === "aborted") {
            return de;
          }
          if (c.status === "dirty" || l.status === "dirty") {
            t.dirty();
          }
          s.set(c.value, l.value);
        }
        return {
          status: t.value,
          value: s
        };
      });
    } else {
      const s = new Map();
      for (const d of o) {
        const c = d.key;
        const l = d.value;
        if (c.status === "aborted" || l.status === "aborted") {
          return de;
        }
        if (c.status === "dirty" || l.status === "dirty") {
          t.dirty();
        }
        s.set(c.value, l.value);
      }
      return {
        status: t.value,
        value: s
      };
    }
  }
}
Ii.create = (e, r, t) => new Ii({
  valueType: r,
  keyType: e,
  typeName: ce.ZodMap,
  ...ve(t)
});
class fr extends pe {
  _parse(r) {
    const {
      status: t,
      ctx: n
    } = this._processInputParams(r);
    if (n.parsedType !== te.set) {
      ie(n, {
        code: J.invalid_type,
        expected: te.set,
        received: n.parsedType
      });
      return de;
    }
    const i = this._def;
    if (i.minSize !== null && n.data.size < i.minSize.value) {
      ie(n, {
        code: J.too_small,
        minimum: i.minSize.value,
        type: "set",
        inclusive: true,
        exact: false,
        message: i.minSize.message
      });
      t.dirty();
    }
    if (i.maxSize !== null && n.data.size > i.maxSize.value) {
      ie(n, {
        code: J.too_big,
        maximum: i.maxSize.value,
        type: "set",
        inclusive: true,
        exact: false,
        message: i.maxSize.message
      });
      t.dirty();
    }
    const a = this._def.valueType;
    function o(d) {
      const c = new Set();
      for (const l of d) {
        if (l.status === "aborted") {
          return de;
        }
        if (l.status === "dirty") {
          t.dirty();
        }
        c.add(l.value);
      }
      return {
        status: t.value,
        value: c
      };
    }
    const s = [...n.data.values()].map((d, c) => a._parse(new bt(n, d, n.path, c)));
    if (n.common.async) {
      return Promise.all(s).then(d => o(d));
    } else {
      return o(s);
    }
  }
  min(r, t) {
    return new fr({
      ...this._def,
      minSize: {
        value: r,
        message: oe.toString(t)
      }
    });
  }
  max(r, t) {
    return new fr({
      ...this._def,
      maxSize: {
        value: r,
        message: oe.toString(t)
      }
    });
  }
  size(r, t) {
    return this.min(r, t).max(r, t);
  }
  nonempty(r) {
    return this.min(1, r);
  }
}
fr.create = (e, r) => new fr({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: ce.ZodSet,
  ...ve(r)
});
class Or extends pe {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(r) {
    const {
      ctx: t
    } = this._processInputParams(r);
    if (t.parsedType !== te.function) {
      ie(t, {
        code: J.invalid_type,
        expected: te.function,
        received: t.parsedType
      });
      return de;
    }
    function n(s, d) {
      return Ei({
        data: s,
        path: t.path,
        errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, ki(), bn].filter(c => !!c),
        issueData: {
          code: J.invalid_arguments,
          argumentsError: d
        }
      });
    }
    function i(s, d) {
      return Ei({
        data: s,
        path: t.path,
        errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, ki(), bn].filter(c => !!c),
        issueData: {
          code: J.invalid_return_type,
          returnTypeError: d
        }
      });
    }
    const a = {
      errorMap: t.common.contextualErrorMap
    };
    const o = t.data;
    if (this._def.returns instanceof Zr) {
      return qe(async (...s) => {
        const d = new ct([]);
        const c = await this._def.args.parseAsync(s, a).catch(h => {
          d.addIssue(n(s, h));
          throw d;
        });
        const l = await o(...c);
        return await this._def.returns._def.type.parseAsync(l, a).catch(h => {
          d.addIssue(i(l, h));
          throw d;
        });
      });
    } else {
      return qe((...s) => {
        const d = this._def.args.safeParse(s, a);
        if (!d.success) {
          throw new ct([n(s, d.error)]);
        }
        const c = o(...d.data);
        const l = this._def.returns.safeParse(c, a);
        if (!l.success) {
          throw new ct([i(c, l.error)]);
        }
        return l.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...r) {
    return new Or({
      ...this._def,
      args: xt.create(r).rest(cr.create())
    });
  }
  returns(r) {
    return new Or({
      ...this._def,
      returns: r
    });
  }
  implement(r) {
    return this.parse(r);
  }
  strictImplement(r) {
    return this.parse(r);
  }
  static create(r, t, n) {
    return new Or({
      args: r || xt.create([]).rest(cr.create()),
      returns: t || cr.create(),
      typeName: ce.ZodFunction,
      ...ve(n)
    });
  }
}
class Tn extends pe {
  get schema() {
    return this._def.getter();
  }
  _parse(r) {
    const {
      ctx: t
    } = this._processInputParams(r);
    return this._def.getter()._parse({
      data: t.data,
      path: t.path,
      parent: t
    });
  }
}
Tn.create = (e, r) => new Tn({
  getter: e,
  typeName: ce.ZodLazy,
  ...ve(r)
});
class In extends pe {
  _parse(r) {
    if (r.data !== this._def.value) {
      const t = this._getOrReturnCtx(r);
      ie(t, {
        received: t.data,
        code: J.invalid_literal,
        expected: this._def.value
      });
      return de;
    }
    return {
      status: "valid",
      value: r.data
    };
  }
  get value() {
    return this._def.value;
  }
}
In.create = (e, r) => new In({
  value: e,
  typeName: ce.ZodLiteral,
  ...ve(r)
});
function rc(e, r) {
  return new Yt({
    values: e,
    typeName: ce.ZodEnum,
    ...ve(r)
  });
}
class Yt extends pe {
  _parse(r) {
    if (typeof r.data != "string") {
      const t = this._getOrReturnCtx(r);
      const n = this._def.values;
      ie(t, {
        expected: be.joinValues(n),
        received: t.parsedType,
        code: J.invalid_type
      });
      return de;
    }
    if (this._def.values.indexOf(r.data) === -1) {
      const t = this._getOrReturnCtx(r);
      const n = this._def.values;
      ie(t, {
        received: t.data,
        code: J.invalid_enum_value,
        options: n
      });
      return de;
    }
    return qe(r.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const r = {};
    for (const t of this._def.values) {
      r[t] = t;
    }
    return r;
  }
  get Values() {
    const r = {};
    for (const t of this._def.values) {
      r[t] = t;
    }
    return r;
  }
  get Enum() {
    const r = {};
    for (const t of this._def.values) {
      r[t] = t;
    }
    return r;
  }
  extract(r) {
    return Yt.create(r);
  }
  exclude(r) {
    return Yt.create(this.options.filter(t => !r.includes(t)));
  }
}
Yt.create = rc;
class Bn extends pe {
  _parse(r) {
    const t = be.getValidEnumValues(this._def.values);
    const n = this._getOrReturnCtx(r);
    if (n.parsedType !== te.string && n.parsedType !== te.number) {
      const i = be.objectValues(t);
      ie(n, {
        expected: be.joinValues(i),
        received: n.parsedType,
        code: J.invalid_type
      });
      return de;
    }
    if (t.indexOf(r.data) === -1) {
      const i = be.objectValues(t);
      ie(n, {
        received: n.data,
        code: J.invalid_enum_value,
        options: i
      });
      return de;
    }
    return qe(r.data);
  }
  get enum() {
    return this._def.values;
  }
}
Bn.create = (e, r) => new Bn({
  values: e,
  typeName: ce.ZodNativeEnum,
  ...ve(r)
});
class Zr extends pe {
  unwrap() {
    return this._def.type;
  }
  _parse(r) {
    const {
      ctx: t
    } = this._processInputParams(r);
    if (t.parsedType !== te.promise && t.common.async === false) {
      ie(t, {
        code: J.invalid_type,
        expected: te.promise,
        received: t.parsedType
      });
      return de;
    }
    const n = t.parsedType === te.promise ? t.data : Promise.resolve(t.data);
    return qe(n.then(i => this._def.type.parseAsync(i, {
      path: t.path,
      errorMap: t.common.contextualErrorMap
    })));
  }
}
Zr.create = (e, r) => new Zr({
  type: e,
  typeName: ce.ZodPromise,
  ...ve(r)
});
class ft extends pe {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    if (this._def.schema._def.typeName === ce.ZodEffects) {
      return this._def.schema.sourceType();
    } else {
      return this._def.schema;
    }
  }
  _parse(r) {
    const {
      status: t,
      ctx: n
    } = this._processInputParams(r);
    const i = this._def.effect || null;
    if (i.type === "preprocess") {
      const o = i.transform(n.data);
      if (n.common.async) {
        return Promise.resolve(o).then(s => this._def.schema._parseAsync({
          data: s,
          path: n.path,
          parent: n
        }));
      } else {
        return this._def.schema._parseSync({
          data: o,
          path: n.path,
          parent: n
        });
      }
    }
    const a = {
      addIssue: o => {
        ie(n, o);
        if (o.fatal) {
          t.abort();
        } else {
          t.dirty();
        }
      },
      get path() {
        return n.path;
      }
    };
    a.addIssue = a.addIssue.bind(a);
    if (i.type === "refinement") {
      const o = s => {
        const d = i.refinement(s, a);
        if (n.common.async) {
          return Promise.resolve(d);
        }
        if (d instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return s;
      };
      if (n.common.async === false) {
        const s = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (s.status === "aborted") {
          return de;
        } else {
          if (s.status === "dirty") {
            t.dirty();
          }
          o(s.value);
          return {
            status: t.value,
            value: s.value
          };
        }
      } else {
        return this._def.schema._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        }).then(s => s.status === "aborted" ? de : (s.status === "dirty" && t.dirty(), o(s.value).then(() => ({
          status: t.value,
          value: s.value
        }))));
      }
    }
    if (i.type === "transform") {
      if (n.common.async === false) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!Si(o)) {
          return o;
        }
        const s = i.transform(o.value, a);
        if (s instanceof Promise) {
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return {
          status: t.value,
          value: s
        };
      } else {
        return this._def.schema._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        }).then(o => Si(o) ? Promise.resolve(i.transform(o.value, a)).then(s => ({
          status: t.value,
          value: s
        })) : o);
      }
    }
    be.assertNever(i);
  }
}
ft.create = (e, r, t) => new ft({
  schema: e,
  typeName: ce.ZodEffects,
  effect: r,
  ...ve(t)
});
ft.createWithPreprocess = (e, r, t) => new ft({
  schema: r,
  effect: {
    type: "preprocess",
    transform: e
  },
  typeName: ce.ZodEffects,
  ...ve(t)
});
class Bt extends pe {
  _parse(r) {
    if (this._getType(r) === te.undefined) {
      return qe(undefined);
    } else {
      return this._def.innerType._parse(r);
    }
  }
  unwrap() {
    return this._def.innerType;
  }
}
Bt.create = (e, r) => new Bt({
  innerType: e,
  typeName: ce.ZodOptional,
  ...ve(r)
});
class dr extends pe {
  _parse(r) {
    if (this._getType(r) === te.null) {
      return qe(null);
    } else {
      return this._def.innerType._parse(r);
    }
  }
  unwrap() {
    return this._def.innerType;
  }
}
dr.create = (e, r) => new dr({
  innerType: e,
  typeName: ce.ZodNullable,
  ...ve(r)
});
class Dn extends pe {
  _parse(r) {
    const {
      ctx: t
    } = this._processInputParams(r);
    let n = t.data;
    if (t.parsedType === te.undefined) {
      n = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data: n,
      path: t.path,
      parent: t
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Dn.create = (e, r) => new Dn({
  innerType: e,
  typeName: ce.ZodDefault,
  defaultValue: typeof r.default == "function" ? r.default : () => r.default,
  ...ve(r)
});
class Bi extends pe {
  _parse(r) {
    const {
      ctx: t
    } = this._processInputParams(r);
    const n = {
      ...t,
      common: {
        ...t.common,
        issues: []
      }
    };
    const i = this._def.innerType._parse({
      data: n.data,
      path: n.path,
      parent: {
        ...n
      }
    });
    if (Ai(i)) {
      return i.then(a => ({
        status: "valid",
        value: a.status === "valid" ? a.value : this._def.catchValue({
          get error() {
            return new ct(n.common.issues);
          },
          input: n.data
        })
      }));
    } else {
      return {
        status: "valid",
        value: i.status === "valid" ? i.value : this._def.catchValue({
          get error() {
            return new ct(n.common.issues);
          },
          input: n.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Bi.create = (e, r) => new Bi({
  innerType: e,
  typeName: ce.ZodCatch,
  catchValue: typeof r.catch == "function" ? r.catch : () => r.catch,
  ...ve(r)
});
class Di extends pe {
  _parse(r) {
    if (this._getType(r) !== te.nan) {
      const n = this._getOrReturnCtx(r);
      ie(n, {
        code: J.invalid_type,
        expected: te.nan,
        received: n.parsedType
      });
      return de;
    }
    return {
      status: "valid",
      value: r.data
    };
  }
}
Di.create = e => new Di({
  typeName: ce.ZodNaN,
  ...ve(e)
});
const ju = Symbol("zod_brand");
class nc extends pe {
  _parse(r) {
    const {
      ctx: t
    } = this._processInputParams(r);
    const n = t.data;
    return this._def.type._parse({
      data: n,
      path: t.path,
      parent: t
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class Xn extends pe {
  _parse(r) {
    const {
      status: t,
      ctx: n
    } = this._processInputParams(r);
    if (n.common.async) {
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (a.status === "aborted") {
          return de;
        } else if (a.status === "dirty") {
          t.dirty();
          return tc(a.value);
        } else {
          return this._def.out._parseAsync({
            data: a.value,
            path: n.path,
            parent: n
          });
        }
      })();
    }
    {
      const i = this._def.in._parseSync({
        data: n.data,
        path: n.path,
        parent: n
      });
      if (i.status === "aborted") {
        return de;
      } else if (i.status === "dirty") {
        t.dirty();
        return {
          status: "dirty",
          value: i.value
        };
      } else {
        return this._def.out._parseSync({
          data: i.value,
          path: n.path,
          parent: n
        });
      }
    }
  }
  static create(r, t) {
    return new Xn({
      in: r,
      out: t,
      typeName: ce.ZodPipeline
    });
  }
}
const ic = (e, r = {}, t) => e ? jr.create().superRefine((n, i) => {
  if (!e(n)) {
    const s = typeof r == "function" ? r(n) : typeof r == "string" ? {
      message: r
    } : r;
    const d = s.fatal ?? t ?? true;
    const c = typeof s == "string" ? {
      message: s
    } : s;
    i.addIssue({
      code: "custom",
      ...c,
      fatal: d
    });
  }
}) : jr.create();
const Zu = {
  object: Re.lazycreate
};
var ce;
(function (e) {
  e.ZodString = "ZodString";
  e.ZodNumber = "ZodNumber";
  e.ZodNaN = "ZodNaN";
  e.ZodBigInt = "ZodBigInt";
  e.ZodBoolean = "ZodBoolean";
  e.ZodDate = "ZodDate";
  e.ZodSymbol = "ZodSymbol";
  e.ZodUndefined = "ZodUndefined";
  e.ZodNull = "ZodNull";
  e.ZodAny = "ZodAny";
  e.ZodUnknown = "ZodUnknown";
  e.ZodNever = "ZodNever";
  e.ZodVoid = "ZodVoid";
  e.ZodArray = "ZodArray";
  e.ZodObject = "ZodObject";
  e.ZodUnion = "ZodUnion";
  e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion";
  e.ZodIntersection = "ZodIntersection";
  e.ZodTuple = "ZodTuple";
  e.ZodRecord = "ZodRecord";
  e.ZodMap = "ZodMap";
  e.ZodSet = "ZodSet";
  e.ZodFunction = "ZodFunction";
  e.ZodLazy = "ZodLazy";
  e.ZodLiteral = "ZodLiteral";
  e.ZodEnum = "ZodEnum";
  e.ZodEffects = "ZodEffects";
  e.ZodNativeEnum = "ZodNativeEnum";
  e.ZodOptional = "ZodOptional";
  e.ZodNullable = "ZodNullable";
  e.ZodDefault = "ZodDefault";
  e.ZodCatch = "ZodCatch";
  e.ZodPromise = "ZodPromise";
  e.ZodBranded = "ZodBranded";
  e.ZodPipeline = "ZodPipeline";
})(ce ||= {});
const Hu = (e, r = {
  message: `Input not instance of ${e.name}`
}) => ic(t => t instanceof e, r);
const ac = ot.create;
const sc = Gt.create;
const Wu = Di.create;
const Vu = Xt.create;
const oc = xn.create;
const qu = ur.create;
const Ku = Ci.create;
const Gu = kn.create;
const Xu = En.create;
const Yu = jr.create;
const Ju = cr.create;
const Qu = Dt.create;
const ef = Ti.create;
const tf = lt.create;
const rf = Re.create;
const nf = Re.strictCreate;
const af = Sn.create;
const sf = Yi.create;
const of = An.create;
const cf = xt.create;
const lf = Cn.create;
const uf = Ii.create;
const ff = fr.create;
const df = Or.create;
const hf = Tn.create;
const vf = In.create;
const pf = Yt.create;
const _f = Bn.create;
const gf = Zr.create;
const Ws = ft.create;
const mf = Bt.create;
const yf = dr.create;
const wf = ft.createWithPreprocess;
const bf = Xn.create;
const xf = () => ac().optional();
const kf = () => sc().optional();
const Ef = () => oc().optional();
const Sf = {
  string: e => ot.create({
    ...e,
    coerce: true
  }),
  number: e => Gt.create({
    ...e,
    coerce: true
  }),
  boolean: e => xn.create({
    ...e,
    coerce: true
  }),
  bigint: e => Xt.create({
    ...e,
    coerce: true
  }),
  date: e => ur.create({
    ...e,
    coerce: true
  })
};
const Af = de;
var _e = Object.freeze({
  __proto__: null,
  defaultErrorMap: bn,
  setErrorMap: Iu,
  getErrorMap: ki,
  makeIssue: Ei,
  EMPTY_PATH: Bu,
  addIssueToContext: ie,
  ParseStatus: We,
  INVALID: de,
  DIRTY: tc,
  OK: qe,
  isAborted: Na,
  isDirty: Fa,
  isValid: Si,
  isAsync: Ai,
  get util() {
    return be;
  },
  get objectUtil() {
    return Oa;
  },
  ZodParsedType: te,
  getParsedType: Pt,
  ZodType: pe,
  ZodString: ot,
  ZodNumber: Gt,
  ZodBigInt: Xt,
  ZodBoolean: xn,
  ZodDate: ur,
  ZodSymbol: Ci,
  ZodUndefined: kn,
  ZodNull: En,
  ZodAny: jr,
  ZodUnknown: cr,
  ZodNever: Dt,
  ZodVoid: Ti,
  ZodArray: lt,
  ZodObject: Re,
  ZodUnion: Sn,
  ZodDiscriminatedUnion: Yi,
  ZodIntersection: An,
  ZodTuple: xt,
  ZodRecord: Cn,
  ZodMap: Ii,
  ZodSet: fr,
  ZodFunction: Or,
  ZodLazy: Tn,
  ZodLiteral: In,
  ZodEnum: Yt,
  ZodNativeEnum: Bn,
  ZodPromise: Zr,
  ZodEffects: ft,
  ZodTransformer: ft,
  ZodOptional: Bt,
  ZodNullable: dr,
  ZodDefault: Dn,
  ZodCatch: Bi,
  ZodNaN: Di,
  BRAND: ju,
  ZodBranded: nc,
  ZodPipeline: Xn,
  custom: ic,
  Schema: pe,
  ZodSchema: pe,
  late: Zu,
  get ZodFirstPartyTypeKind() {
    return ce;
  },
  coerce: Sf,
  any: Yu,
  array: tf,
  bigint: Vu,
  boolean: oc,
  date: qu,
  discriminatedUnion: sf,
  effect: Ws,
  enum: pf,
  function: df,
  instanceof: Hu,
  intersection: of,
  lazy: hf,
  literal: vf,
  map: uf,
  nan: Wu,
  nativeEnum: _f,
  never: Qu,
  null: Xu,
  nullable: yf,
  number: sc,
  object: rf,
  oboolean: Ef,
  onumber: kf,
  optional: mf,
  ostring: xf,
  pipeline: bf,
  preprocess: wf,
  promise: gf,
  record: lf,
  set: ff,
  strictObject: nf,
  string: ac,
  symbol: Ku,
  transformer: Ws,
  tuple: cf,
  undefined: Gu,
  union: af,
  unknown: Ju,
  void: ef,
  NEVER: Af,
  ZodIssueCode: J,
  quotelessJson: Tu,
  ZodError: ct
});
var Cf = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
var Tf = _e.object({
  codename: _e.string(),
  version: _e.string().regex(Cf),
  permissions: _e.string().array()
});
Tf.omit({
  permissions: true
});
_e.object({
  API_URL: _e.string().url(),
  API_KEY: _e.string(),
  KEYS: _e.string().array()
});
_e.object({
  id: _e.number(),
  origin: _e.string()
});
_e.tuple([_e.boolean(), _e.any()]);
_e.object({
  resolve: _e.function().args(_e.any()).returns(_e.void()),
  reject: _e.function().args(_e.any()).returns(_e.void()),
  timeout: _e.number()
});
_e.object({
  id: _e.number(),
  resource: _e.string()
});
_e.tuple([_e.boolean(), _e.any()]);
_e.object({
  resolve: _e.function().args(_e.any()).returns(_e.void()),
  reject: _e.function().args(_e.any()).returns(_e.void()),
  timeout: _e.number()
});
let ni;
const If = new Uint8Array(16);
function Bf() {
  if (!ni && (ni = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !ni)) {
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  }
  return ni(If);
}
const Df = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function Rf(e) {
  return typeof e == "string" && Df.test(e);
}
const Pe = [];
for (let e = 0; e < 256; ++e) {
  Pe.push((e + 256).toString(16).slice(1));
}
function cc(e, r = 0) {
  return (Pe[e[r + 0]] + Pe[e[r + 1]] + Pe[e[r + 2]] + Pe[e[r + 3]] + "-" + Pe[e[r + 4]] + Pe[e[r + 5]] + "-" + Pe[e[r + 6]] + Pe[e[r + 7]] + "-" + Pe[e[r + 8]] + Pe[e[r + 9]] + "-" + Pe[e[r + 10]] + Pe[e[r + 11]] + Pe[e[r + 12]] + Pe[e[r + 13]] + Pe[e[r + 14]] + Pe[e[r + 15]]).toLowerCase();
}
function $f(e) {
  if (!Rf(e)) {
    throw TypeError("Invalid UUID");
  }
  let r;
  const t = new Uint8Array(16);
  t[0] = (r = parseInt(e.slice(0, 8), 16)) >>> 24;
  t[1] = r >>> 16 & 255;
  t[2] = r >>> 8 & 255;
  t[3] = r & 255;
  t[4] = (r = parseInt(e.slice(9, 13), 16)) >>> 8;
  t[5] = r & 255;
  t[6] = (r = parseInt(e.slice(14, 18), 16)) >>> 8;
  t[7] = r & 255;
  t[8] = (r = parseInt(e.slice(19, 23), 16)) >>> 8;
  t[9] = r & 255;
  t[10] = (r = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255;
  t[11] = r / 4294967296 & 255;
  t[12] = r >>> 24 & 255;
  t[13] = r >>> 16 & 255;
  t[14] = r >>> 8 & 255;
  t[15] = r & 255;
  return t;
}
function zf(e) {
  e = unescape(encodeURIComponent(e));
  const r = [];
  for (let t = 0; t < e.length; ++t) {
    r.push(e.charCodeAt(t));
  }
  return r;
}
const Of = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
const Nf = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function Ff(e, r, t) {
  function n(i, a, o, s) {
    if (typeof i == "string") {
      i = zf(i);
    }
    if (typeof a == "string") {
      a = $f(a);
    }
    if (a?.length !== 16) {
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    }
    let c = new Uint8Array(16 + i.length);
    c.set(a);
    c.set(i, a.length);
    c = t(c);
    c[6] = c[6] & 15 | r;
    c[8] = c[8] & 63 | 128;
    if (o) {
      s = s || 0;
      for (let l = 0; l < 16; ++l) {
        o[s + l] = c[l];
      }
      return o;
    }
    return cc(c);
  }
  try {
    n.name = e;
  } catch {}
  n.DNS = Of;
  n.URL = Nf;
  return n;
}
const Uf = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Vs = {
  randomUUID: Uf
};
function Lf(e, r, t) {
  if (Vs.randomUUID && !r && !e) {
    return Vs.randomUUID();
  }
  e = e || {};
  const n = e.random || (e.rng || Bf)();
  n[6] = n[6] & 15 | 64;
  n[8] = n[8] & 63 | 128;
  if (r) {
    t = t || 0;
    for (let i = 0; i < 16; ++i) {
      r[t + i] = n[i];
    }
    return r;
  }
  return cc(n);
}
function Pf(e, r, t, n) {
  switch (e) {
    case 0:
      return r & t ^ ~r & n;
    case 1:
      return r ^ t ^ n;
    case 2:
      return r & t ^ r & n ^ t & n;
    case 3:
      return r ^ t ^ n;
  }
}
function oa(e, r) {
  return e << r | e >>> 32 - r;
}
function Mf(e) {
  const r = [1518500249, 1859775393, 2400959708, 3395469782];
  const t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof e == "string") {
    const o = unescape(encodeURIComponent(e));
    e = [];
    for (let s = 0; s < o.length; ++s) {
      e.push(o.charCodeAt(s));
    }
  } else if (!Array.isArray(e)) {
    e = Array.prototype.slice.call(e);
  }
  e.push(128);
  const n = e.length / 4 + 2;
  const i = Math.ceil(n / 16);
  const a = new Array(i);
  for (let o = 0; o < i; ++o) {
    const s = new Uint32Array(16);
    for (let d = 0; d < 16; ++d) {
      s[d] = e[o * 64 + d * 4] << 24 | e[o * 64 + d * 4 + 1] << 16 | e[o * 64 + d * 4 + 2] << 8 | e[o * 64 + d * 4 + 3];
    }
    a[o] = s;
  }
  a[i - 1][14] = (e.length - 1) * 8 / Math.pow(2, 32);
  a[i - 1][14] = Math.floor(a[i - 1][14]);
  a[i - 1][15] = (e.length - 1) * 8 & 4294967295;
  for (let o = 0; o < i; ++o) {
    const s = new Uint32Array(80);
    for (let v = 0; v < 16; ++v) {
      s[v] = a[o][v];
    }
    for (let v = 16; v < 80; ++v) {
      s[v] = oa(s[v - 3] ^ s[v - 8] ^ s[v - 14] ^ s[v - 16], 1);
    }
    let d = t[0];
    let c = t[1];
    let l = t[2];
    let m = t[3];
    let h = t[4];
    for (let v = 0; v < 80; ++v) {
      const _ = Math.floor(v / 20);
      const y = oa(d, 5) + Pf(_, c, l, m) + h + r[_] + s[v] >>> 0;
      h = m;
      m = l;
      l = oa(c, 30) >>> 0;
      c = d;
      d = y;
    }
    t[0] = t[0] + d >>> 0;
    t[1] = t[1] + c >>> 0;
    t[2] = t[2] + l >>> 0;
    t[3] = t[3] + m >>> 0;
    t[4] = t[4] + h >>> 0;
  }
  return [t[0] >> 24 & 255, t[0] >> 16 & 255, t[0] >> 8 & 255, t[0] & 255, t[1] >> 24 & 255, t[1] >> 16 & 255, t[1] >> 8 & 255, t[1] & 255, t[2] >> 24 & 255, t[2] >> 16 & 255, t[2] >> 8 & 255, t[2] & 255, t[3] >> 24 & 255, t[3] >> 16 & 255, t[3] >> 8 & 255, t[3] & 255, t[4] >> 24 & 255, t[4] >> 16 & 255, t[4] >> 8 & 255, t[4] & 255];
}
const jf = Ff("v5", 80, Mf);
const qs = jf;
/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
const Zf = 4;
const Ks = 0;
const Gs = 1;
const Hf = 2;
function Kr(e) {
  let r = e.length;
  while (--r >= 0) {
    e[r] = 0;
  }
}
const Wf = 0;
const lc = 1;
const Vf = 2;
const qf = 3;
const Kf = 258;
const ss = 29;
const Yn = 256;
const Rn = Yn + 1 + ss;
const Nr = 30;
const os = 19;
const uc = Rn * 2 + 1;
const nr = 15;
const ca = 16;
const Gf = 7;
const cs = 256;
const fc = 16;
const dc = 17;
const hc = 18;
const La = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]);
const hi = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
const Xf = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]);
const vc = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
const Yf = 512;
const St = new Array((Rn + 2) * 2);
Kr(St);
const hn = new Array(Nr * 2);
Kr(hn);
const $n = new Array(Yf);
Kr($n);
const zn = new Array(Kf - qf + 1);
Kr(zn);
const ls = new Array(ss);
Kr(ls);
const Ri = new Array(Nr);
Kr(Ri);
function la(e, r, t, n, i) {
  this.static_tree = e;
  this.extra_bits = r;
  this.extra_base = t;
  this.elems = n;
  this.max_length = i;
  this.has_stree = e && e.length;
}
let pc;
let _c;
let gc;
function ua(e, r) {
  this.dyn_tree = e;
  this.max_code = 0;
  this.stat_desc = r;
}
const mc = e => e < 256 ? $n[e] : $n[256 + (e >>> 7)];
const On = (e, r) => {
  e.pending_buf[e.pending++] = r & 255;
  e.pending_buf[e.pending++] = r >>> 8 & 255;
};
const Xe = (e, r, t) => {
  if (e.bi_valid > ca - t) {
    e.bi_buf |= r << e.bi_valid & 65535;
    On(e, e.bi_buf);
    e.bi_buf = r >> ca - e.bi_valid;
    e.bi_valid += t - ca;
  } else {
    e.bi_buf |= r << e.bi_valid & 65535;
    e.bi_valid += t;
  }
};
const gt = (e, r, t) => {
  Xe(e, t[r * 2], t[r * 2 + 1]);
};
const yc = (e, r) => {
  let t = 0;
  do {
    t |= e & 1;
    e >>>= 1;
    t <<= 1;
  } while (--r > 0);
  return t >>> 1;
};
const Jf = e => {
  if (e.bi_valid === 16) {
    On(e, e.bi_buf);
    e.bi_buf = 0;
    e.bi_valid = 0;
  } else if (e.bi_valid >= 8) {
    e.pending_buf[e.pending++] = e.bi_buf & 255;
    e.bi_buf >>= 8;
    e.bi_valid -= 8;
  }
};
const Qf = (e, r) => {
  const t = r.dyn_tree;
  const n = r.max_code;
  const i = r.stat_desc.static_tree;
  const a = r.stat_desc.has_stree;
  const o = r.stat_desc.extra_bits;
  const s = r.stat_desc.extra_base;
  const d = r.stat_desc.max_length;
  let c;
  let l;
  let m;
  let h;
  let v;
  let _;
  let y = 0;
  for (h = 0; h <= nr; h++) {
    e.bl_count[h] = 0;
  }
  t[e.heap[e.heap_max] * 2 + 1] = 0;
  c = e.heap_max + 1;
  for (; c < uc; c++) {
    l = e.heap[c];
    h = t[t[l * 2 + 1] * 2 + 1] + 1;
    if (h > d) {
      h = d;
      y++;
    }
    t[l * 2 + 1] = h;
    if (l <= n) {
      e.bl_count[h]++;
      v = 0;
      if (l >= s) {
        v = o[l - s];
      }
      _ = t[l * 2];
      e.opt_len += _ * (h + v);
      if (a) {
        e.static_len += _ * (i[l * 2 + 1] + v);
      }
    }
  }
  if (y !== 0) {
    do {
      for (h = d - 1; e.bl_count[h] === 0;) {
        h--;
      }
      e.bl_count[h]--;
      e.bl_count[h + 1] += 2;
      e.bl_count[d]--;
      y -= 2;
    } while (y > 0);
    for (h = d; h !== 0; h--) {
      for (l = e.bl_count[h]; l !== 0;) {
        m = e.heap[--c];
        if (m <= n) {
          if (t[m * 2 + 1] !== h) {
            e.opt_len += (h - t[m * 2 + 1]) * t[m * 2];
            t[m * 2 + 1] = h;
          }
          l--;
        }
      }
    }
  }
};
const wc = (e, r, t) => {
  const n = new Array(nr + 1);
  let i = 0;
  let a;
  let o;
  for (a = 1; a <= nr; a++) {
    i = i + t[a - 1] << 1;
    n[a] = i;
  }
  for (o = 0; o <= r; o++) {
    let s = e[o * 2 + 1];
    if (s !== 0) {
      e[o * 2] = yc(n[s]++, s);
    }
  }
};
const ed = () => {
  let e;
  let r;
  let t;
  let n;
  let i;
  const a = new Array(nr + 1);
  t = 0;
  n = 0;
  for (; n < ss - 1; n++) {
    ls[n] = t;
    e = 0;
    ls[n] = t;
    e = 0;
    for (; e < 1 << La[n]; e++) {
      zn[t++] = n;
    }
  }
  zn[t - 1] = n;
  i = 0;
  n = 0;
  for (; n < 16; n++) {
    Ri[n] = i;
    e = 0;
    Ri[n] = i;
    e = 0;
    for (; e < 1 << hi[n]; e++) {
      $n[i++] = n;
    }
  }
  for (i >>= 7; n < Nr; n++) {
    Ri[n] = i << 7;
    e = 0;
    Ri[n] = i << 7;
    e = 0;
    for (; e < 1 << hi[n] - 7; e++) {
      $n[256 + i++] = n;
    }
  }
  for (r = 0; r <= nr; r++) {
    a[r] = 0;
  }
  for (e = 0; e <= 143;) {
    St[e * 2 + 1] = 8;
    e++;
    a[8]++;
  }
  while (e <= 255) {
    St[e * 2 + 1] = 9;
    e++;
    a[9]++;
  }
  while (e <= 279) {
    St[e * 2 + 1] = 7;
    e++;
    a[7]++;
  }
  while (e <= 287) {
    St[e * 2 + 1] = 8;
    e++;
    a[8]++;
  }
  wc(St, Rn + 1, a);
  e = 0;
  for (; e < Nr; e++) {
    hn[e * 2 + 1] = 5;
    hn[e * 2] = yc(e, 5);
  }
  pc = new la(St, La, Yn + 1, Rn, nr);
  _c = new la(hn, hi, 0, Nr, nr);
  gc = new la(new Array(0), Xf, 0, os, Gf);
};
const bc = e => {
  let r;
  for (r = 0; r < Rn; r++) {
    e.dyn_ltree[r * 2] = 0;
  }
  for (r = 0; r < Nr; r++) {
    e.dyn_dtree[r * 2] = 0;
  }
  for (r = 0; r < os; r++) {
    e.bl_tree[r * 2] = 0;
  }
  e.dyn_ltree[cs * 2] = 1;
  e.opt_len = e.static_len = 0;
  e.sym_next = e.matches = 0;
};
const xc = e => {
  if (e.bi_valid > 8) {
    On(e, e.bi_buf);
  } else if (e.bi_valid > 0) {
    e.pending_buf[e.pending++] = e.bi_buf;
  }
  e.bi_buf = 0;
  e.bi_valid = 0;
};
const Xs = (e, r, t, n) => {
  const i = r * 2;
  const a = t * 2;
  return e[i] < e[a] || e[i] === e[a] && n[r] <= n[t];
};
const fa = (e, r, t) => {
  const n = e.heap[t];
  let i = t << 1;
  while (i <= e.heap_len && (i < e.heap_len && Xs(r, e.heap[i + 1], e.heap[i], e.depth) && i++, !Xs(r, n, e.heap[i], e.depth))) {
    e.heap[t] = e.heap[i];
    t = i;
    i <<= 1;
  }
  e.heap[t] = n;
};
const Ys = (e, r, t) => {
  let n;
  let i;
  let a = 0;
  let o;
  let s;
  if (e.sym_next !== 0) {
    do {
      n = e.pending_buf[e.sym_buf + a++] & 255;
      n += (e.pending_buf[e.sym_buf + a++] & 255) << 8;
      i = e.pending_buf[e.sym_buf + a++];
      if (n === 0) {
        gt(e, i, r);
      } else {
        o = zn[i];
        gt(e, o + Yn + 1, r);
        s = La[o];
        if (s !== 0) {
          i -= ls[o];
          Xe(e, i, s);
        }
        n--;
        o = mc(n);
        gt(e, o, t);
        s = hi[o];
        if (s !== 0) {
          n -= Ri[o];
          Xe(e, n, s);
        }
      }
    } while (a < e.sym_next);
  }
  gt(e, cs, r);
};
const Pa = (e, r) => {
  const t = r.dyn_tree;
  const n = r.stat_desc.static_tree;
  const i = r.stat_desc.has_stree;
  const a = r.stat_desc.elems;
  let o;
  let s;
  let d = -1;
  let c;
  e.heap_len = 0;
  e.heap_max = uc;
  o = 0;
  for (; o < a; o++) {
    if (t[o * 2] !== 0) {
      e.heap[++e.heap_len] = d = o;
      e.depth[o] = 0;
    } else {
      t[o * 2 + 1] = 0;
    }
  }
  while (e.heap_len < 2) {
    c = e.heap[++e.heap_len] = d < 2 ? ++d : 0;
    t[c * 2] = 1;
    e.depth[c] = 0;
    e.opt_len--;
    if (i) {
      e.static_len -= n[c * 2 + 1];
    }
  }
  r.max_code = d;
  o = e.heap_len >> 1;
  for (; o >= 1; o--) {
    fa(e, t, o);
  }
  c = a;
  do {
    o = e.heap[1];
    e.heap[1] = e.heap[e.heap_len--];
    fa(e, t, 1);
    s = e.heap[1];
    e.heap[--e.heap_max] = o;
    e.heap[--e.heap_max] = s;
    t[c * 2] = t[o * 2] + t[s * 2];
    e.depth[c] = (e.depth[o] >= e.depth[s] ? e.depth[o] : e.depth[s]) + 1;
    t[o * 2 + 1] = t[s * 2 + 1] = c;
    e.heap[1] = c++;
    fa(e, t, 1);
  } while (e.heap_len >= 2);
  e.heap[--e.heap_max] = e.heap[1];
  Qf(e, r);
  wc(t, d, e.bl_count);
};
const Js = (e, r, t) => {
  let n;
  let i = -1;
  let a;
  let o = r[1];
  let s = 0;
  let d = 7;
  let c = 4;
  if (o === 0) {
    d = 138;
    c = 3;
  }
  r[(t + 1) * 2 + 1] = 65535;
  n = 0;
  for (; n <= t; n++) {
    a = o;
    o = r[(n + 1) * 2 + 1];
    if (++s >= d || a !== o) {
      if (s < c) {
        e.bl_tree[a * 2] += s;
      } else if (a !== 0) {
        if (a !== i) {
          e.bl_tree[a * 2]++;
        }
        e.bl_tree[fc * 2]++;
      } else if (s <= 10) {
        e.bl_tree[dc * 2]++;
      } else {
        e.bl_tree[hc * 2]++;
      }
      s = 0;
      i = a;
      if (o === 0) {
        d = 138;
        c = 3;
      } else if (a === o) {
        d = 6;
        c = 3;
      } else {
        d = 7;
        c = 4;
      }
    }
  }
};
const Qs = (e, r, t) => {
  let n;
  let i = -1;
  let a;
  let o = r[1];
  let s = 0;
  let d = 7;
  let c = 4;
  if (o === 0) {
    d = 138;
    c = 3;
  }
  n = 0;
  for (; n <= t; n++) {
    a = o;
    o = r[(n + 1) * 2 + 1];
    if (++s >= d || a !== o) {
      if (s < c) {
        do {
          gt(e, a, e.bl_tree);
        } while (--s !== 0);
      } else if (a !== 0) {
        if (a !== i) {
          gt(e, a, e.bl_tree);
          s--;
        }
        gt(e, fc, e.bl_tree);
        Xe(e, s - 3, 2);
      } else if (s <= 10) {
        gt(e, dc, e.bl_tree);
        Xe(e, s - 3, 3);
      } else {
        gt(e, hc, e.bl_tree);
        Xe(e, s - 11, 7);
      }
      s = 0;
      i = a;
      if (o === 0) {
        d = 138;
        c = 3;
      } else if (a === o) {
        d = 6;
        c = 3;
      } else {
        d = 7;
        c = 4;
      }
    }
  }
};
const td = e => {
  let r;
  Js(e, e.dyn_ltree, e.l_desc.max_code);
  Js(e, e.dyn_dtree, e.d_desc.max_code);
  Pa(e, e.bl_desc);
  r = os - 1;
  for (; r >= 3 && e.bl_tree[vc[r] * 2 + 1] === 0; r--);
  e.opt_len += (r + 1) * 3 + 5 + 5 + 4;
  return r;
};
const rd = (e, r, t, n) => {
  let i;
  Xe(e, r - 257, 5);
  Xe(e, t - 1, 5);
  Xe(e, n - 4, 4);
  i = 0;
  for (; i < n; i++) {
    Xe(e, e.bl_tree[vc[i] * 2 + 1], 3);
  }
  Qs(e, e.dyn_ltree, r - 1);
  Qs(e, e.dyn_dtree, t - 1);
};
const nd = e => {
  let r = 4093624447;
  let t;
  for (t = 0; t <= 31; t++, r >>>= 1) {
    if (r & 1 && e.dyn_ltree[t * 2] !== 0) {
      return Ks;
    }
  }
  if (e.dyn_ltree[18] !== 0 || e.dyn_ltree[20] !== 0 || e.dyn_ltree[26] !== 0) {
    return Gs;
  }
  for (t = 32; t < Yn; t++) {
    if (e.dyn_ltree[t * 2] !== 0) {
      return Gs;
    }
  }
  return Ks;
};
let eo = false;
const id = e => {
  if (!eo) {
    ed();
    eo = true;
  }
  e.l_desc = new ua(e.dyn_ltree, pc);
  e.d_desc = new ua(e.dyn_dtree, _c);
  e.bl_desc = new ua(e.bl_tree, gc);
  e.bi_buf = 0;
  e.bi_valid = 0;
  bc(e);
};
const kc = (e, r, t, n) => {
  Xe(e, (Wf << 1) + (n ? 1 : 0), 3);
  xc(e);
  On(e, t);
  On(e, ~t);
  if (t) {
    e.pending_buf.set(e.window.subarray(r, r + t), e.pending);
  }
  e.pending += t;
};
const ad = e => {
  Xe(e, lc << 1, 3);
  gt(e, cs, St);
  Jf(e);
};
const sd = (e, r, t, n) => {
  let i;
  let a;
  let o = 0;
  if (e.level > 0) {
    if (e.strm.data_type === Hf) {
      e.strm.data_type = nd(e);
    }
    Pa(e, e.l_desc);
    Pa(e, e.d_desc);
    o = td(e);
    i = e.opt_len + 3 + 7 >>> 3;
    a = e.static_len + 3 + 7 >>> 3;
    if (a <= i) {
      i = a;
    }
  } else {
    i = a = t + 5;
  }
  if (t + 4 <= i && r !== -1) {
    kc(e, r, t, n);
  } else if (e.strategy === Zf || a === i) {
    Xe(e, (lc << 1) + (n ? 1 : 0), 3);
    Ys(e, St, hn);
  } else {
    Xe(e, (Vf << 1) + (n ? 1 : 0), 3);
    rd(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, o + 1);
    Ys(e, e.dyn_ltree, e.dyn_dtree);
  }
  bc(e);
  if (n) {
    xc(e);
  }
};
const od = (e, r, t) => {
  e.pending_buf[e.sym_buf + e.sym_next++] = r;
  e.pending_buf[e.sym_buf + e.sym_next++] = r >> 8;
  e.pending_buf[e.sym_buf + e.sym_next++] = t;
  if (r === 0) {
    e.dyn_ltree[t * 2]++;
  } else {
    e.matches++;
    r--;
    e.dyn_ltree[(zn[t] + Yn + 1) * 2]++;
    e.dyn_dtree[mc(r) * 2]++;
  }
  return e.sym_next === e.sym_end;
};
var cd = id;
var ld = kc;
var ud = sd;
var fd = od;
var dd = ad;
var hd = {
  _tr_init: cd,
  _tr_stored_block: ld,
  _tr_flush_block: ud,
  _tr_tally: fd,
  _tr_align: dd
};
const vd = (e, r, t, n) => {
  let i = e & 65535 | 0;
  let a = e >>> 16 & 65535 | 0;
  let o = 0;
  while (t !== 0) {
    o = t > 2000 ? 2000 : t;
    t -= o;
    do {
      i = i + r[n++] | 0;
      a = a + i | 0;
    } while (--o);
    i %= 65521;
    a %= 65521;
  }
  return i | a << 16 | 0;
};
var Nn = vd;
const pd = () => {
  let e;
  let r = [];
  for (var t = 0; t < 256; t++) {
    e = t;
    for (var n = 0; n < 8; n++) {
      e = e & 1 ? e >>> 1 ^ 3988292384 : e >>> 1;
    }
    r[t] = e;
  }
  return r;
};
const _d = new Uint32Array(pd());
const gd = (e, r, t, n) => {
  const i = _d;
  const a = n + t;
  e ^= -1;
  for (let o = n; o < a; o++) {
    e = e >>> 8 ^ i[(e ^ r[o]) & 255];
  }
  return e ^ -1;
};
var Le = gd;
var hr = {
  2: "need dictionary",
  1: "stream end",
  0: "",
  "-1": "file error",
  "-2": "stream error",
  "-3": "data error",
  "-4": "insufficient memory",
  "-5": "buffer error",
  "-6": "incompatible version"
};
var Gr = {
  Z_NO_FLUSH: 0,
  Z_PARTIAL_FLUSH: 1,
  Z_SYNC_FLUSH: 2,
  Z_FULL_FLUSH: 3,
  Z_FINISH: 4,
  Z_BLOCK: 5,
  Z_TREES: 6,
  Z_OK: 0,
  Z_STREAM_END: 1,
  Z_NEED_DICT: 2,
  Z_ERRNO: -1,
  Z_STREAM_ERROR: -2,
  Z_DATA_ERROR: -3,
  Z_MEM_ERROR: -4,
  Z_BUF_ERROR: -5,
  Z_NO_COMPRESSION: 0,
  Z_BEST_SPEED: 1,
  Z_BEST_COMPRESSION: 9,
  Z_DEFAULT_COMPRESSION: -1,
  Z_FILTERED: 1,
  Z_HUFFMAN_ONLY: 2,
  Z_RLE: 3,
  Z_FIXED: 4,
  Z_DEFAULT_STRATEGY: 0,
  Z_BINARY: 0,
  Z_TEXT: 1,
  Z_UNKNOWN: 2,
  Z_DEFLATED: 8
};
const {
  _tr_init: md,
  _tr_stored_block: Ma,
  _tr_flush_block: yd,
  _tr_tally: Ht,
  _tr_align: wd
} = hd;
const {
  Z_NO_FLUSH: Wt,
  Z_PARTIAL_FLUSH: bd,
  Z_FULL_FLUSH: xd,
  Z_FINISH: it,
  Z_BLOCK: to,
  Z_OK: Me,
  Z_STREAM_END: ro,
  Z_STREAM_ERROR: yt,
  Z_DATA_ERROR: kd,
  Z_BUF_ERROR: da,
  Z_DEFAULT_COMPRESSION: Ed,
  Z_FILTERED: Sd,
  Z_HUFFMAN_ONLY: ii,
  Z_RLE: Ad,
  Z_FIXED: Cd,
  Z_DEFAULT_STRATEGY: Td,
  Z_UNKNOWN: Id,
  Z_DEFLATED: Ji
} = Gr;
const Bd = 9;
const Dd = 15;
const Rd = 8;
const $d = 29;
const zd = 256;
const ja = zd + 1 + $d;
const Od = 30;
const Nd = 19;
const Fd = ja * 2 + 1;
const Ud = 15;
const ge = 3;
const jt = 258;
const wt = jt + ge + 1;
const Ld = 32;
const Hr = 42;
const us = 57;
const Za = 69;
const Ha = 73;
const Wa = 91;
const Va = 103;
const ir = 113;
const on = 666;
const Ve = 1;
const Xr = 2;
const vr = 3;
const Yr = 4;
const Pd = 3;
const ar = (e, r) => {
  e.msg = hr[r];
  return r;
};
const no = e => e * 2 - (e > 4 ? 9 : 0);
const Mt = e => {
  let r = e.length;
  while (--r >= 0) {
    e[r] = 0;
  }
};
const Md = e => {
  let r;
  let t;
  let n;
  let i = e.w_size;
  r = e.hash_size;
  n = r;
  do {
    t = e.head[--n];
    e.head[n] = t >= i ? t - i : 0;
  } while (--r);
  r = i;
  n = r;
  do {
    t = e.prev[--n];
    e.prev[n] = t >= i ? t - i : 0;
  } while (--r);
};
let jd = (e, r, t) => (r << e.hash_shift ^ t) & e.hash_mask;
let Vt = jd;
const Qe = e => {
  const r = e.state;
  let t = r.pending;
  if (t > e.avail_out) {
    t = e.avail_out;
  }
  if (t !== 0) {
    e.output.set(r.pending_buf.subarray(r.pending_out, r.pending_out + t), e.next_out);
    e.next_out += t;
    r.pending_out += t;
    e.total_out += t;
    e.avail_out -= t;
    r.pending -= t;
    if (r.pending === 0) {
      r.pending_out = 0;
    }
  }
};
const et = (e, r) => {
  yd(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, r);
  e.block_start = e.strstart;
  Qe(e.strm);
};
const xe = (e, r) => {
  e.pending_buf[e.pending++] = r;
};
const an = (e, r) => {
  e.pending_buf[e.pending++] = r >>> 8 & 255;
  e.pending_buf[e.pending++] = r & 255;
};
const qa = (e, r, t, n) => {
  let i = e.avail_in;
  if (i > n) {
    i = n;
  }
  if (i === 0) {
    return 0;
  } else {
    e.avail_in -= i;
    r.set(e.input.subarray(e.next_in, e.next_in + i), t);
    if (e.state.wrap === 1) {
      e.adler = Nn(e.adler, r, i, t);
    } else if (e.state.wrap === 2) {
      e.adler = Le(e.adler, r, i, t);
    }
    e.next_in += i;
    e.total_in += i;
    return i;
  }
};
const Ec = (e, r) => {
  let t = e.max_chain_length;
  let n = e.strstart;
  let i;
  let a;
  let o = e.prev_length;
  let s = e.nice_match;
  const d = e.strstart > e.w_size - wt ? e.strstart - (e.w_size - wt) : 0;
  const c = e.window;
  const l = e.w_mask;
  const m = e.prev;
  const h = e.strstart + jt;
  let v = c[n + o - 1];
  let _ = c[n + o];
  if (e.prev_length >= e.good_match) {
    t >>= 2;
  }
  if (s > e.lookahead) {
    s = e.lookahead;
  }
  do {
    i = r;
    if (c[i + o] === _ && c[i + o - 1] === v && c[i] === c[n] && c[++i] === c[n + 1]) {
      n += 2;
      i++;
      do ; while (c[++n] === c[++i] && c[++n] === c[++i] && c[++n] === c[++i] && c[++n] === c[++i] && c[++n] === c[++i] && c[++n] === c[++i] && c[++n] === c[++i] && c[++n] === c[++i] && n < h);
      a = jt - (h - n);
      n = h - jt;
      if (a > o) {
        e.match_start = r;
        o = a;
        if (a >= s) {
          break;
        }
        v = c[n + o - 1];
        _ = c[n + o];
      }
    }
  } while ((r = m[r & l]) > d && --t !== 0);
  if (o <= e.lookahead) {
    return o;
  } else {
    return e.lookahead;
  }
};
const Wr = e => {
  const r = e.w_size;
  let t;
  let n;
  let i;
  do {
    n = e.window_size - e.lookahead - e.strstart;
    if (e.strstart >= r + (r - wt)) {
      e.window.set(e.window.subarray(r, r + r - n), 0);
      e.match_start -= r;
      e.strstart -= r;
      e.block_start -= r;
      if (e.insert > e.strstart) {
        e.insert = e.strstart;
      }
      Md(e);
      n += r;
    }
    if (e.strm.avail_in === 0) {
      break;
    }
    t = qa(e.strm, e.window, e.strstart + e.lookahead, n);
    e.lookahead += t;
    if (e.lookahead + e.insert >= ge) {
      i = e.strstart - e.insert;
      e.ins_h = e.window[i];
      e.ins_h = Vt(e, e.ins_h, e.window[i + 1]);
      i = e.strstart - e.insert;
      e.ins_h = e.window[i];
      e.ins_h = Vt(e, e.ins_h, e.window[i + 1]);
      while (e.insert && (e.ins_h = Vt(e, e.ins_h, e.window[i + ge - 1]), e.prev[i & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = i, i++, e.insert--, e.lookahead + e.insert >= ge));
    }
  } while (e.lookahead < wt && e.strm.avail_in !== 0);
};
const Sc = (e, r) => {
  let t = e.pending_buf_size - 5 > e.w_size ? e.w_size : e.pending_buf_size - 5;
  let n;
  let i;
  let a;
  let o = 0;
  let s = e.strm.avail_in;
  do {
    n = 65535;
    a = e.bi_valid + 42 >> 3;
    if (e.strm.avail_out < a || (a = e.strm.avail_out - a, i = e.strstart - e.block_start, n > i + e.strm.avail_in && (n = i + e.strm.avail_in), n > a && (n = a), n < t && (n === 0 && r !== it || r === Wt || n !== i + e.strm.avail_in))) {
      break;
    }
    o = r === it && n === i + e.strm.avail_in ? 1 : 0;
    Ma(e, 0, 0, o);
    e.pending_buf[e.pending - 4] = n;
    e.pending_buf[e.pending - 3] = n >> 8;
    e.pending_buf[e.pending - 2] = ~n;
    e.pending_buf[e.pending - 1] = ~n >> 8;
    Qe(e.strm);
    if (i) {
      if (i > n) {
        i = n;
      }
      e.strm.output.set(e.window.subarray(e.block_start, e.block_start + i), e.strm.next_out);
      e.strm.next_out += i;
      e.strm.avail_out -= i;
      e.strm.total_out += i;
      e.block_start += i;
      n -= i;
    }
    if (n) {
      qa(e.strm, e.strm.output, e.strm.next_out, n);
      e.strm.next_out += n;
      e.strm.avail_out -= n;
      e.strm.total_out += n;
    }
  } while (o === 0);
  s -= e.strm.avail_in;
  if (s) {
    if (s >= e.w_size) {
      e.matches = 2;
      e.window.set(e.strm.input.subarray(e.strm.next_in - e.w_size, e.strm.next_in), 0);
      e.strstart = e.w_size;
      e.insert = e.strstart;
    } else {
      if (e.window_size - e.strstart <= s) {
        e.strstart -= e.w_size;
        e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0);
        if (e.matches < 2) {
          e.matches++;
        }
        if (e.insert > e.strstart) {
          e.insert = e.strstart;
        }
      }
      e.window.set(e.strm.input.subarray(e.strm.next_in - s, e.strm.next_in), e.strstart);
      e.strstart += s;
      e.insert += s > e.w_size - e.insert ? e.w_size - e.insert : s;
    }
    e.block_start = e.strstart;
  }
  if (e.high_water < e.strstart) {
    e.high_water = e.strstart;
  }
  if (o) {
    return Yr;
  } else if (r !== Wt && r !== it && e.strm.avail_in === 0 && e.strstart === e.block_start) {
    return Xr;
  } else {
    a = e.window_size - e.strstart;
    if (e.strm.avail_in > a && e.block_start >= e.w_size) {
      e.block_start -= e.w_size;
      e.strstart -= e.w_size;
      e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0);
      if (e.matches < 2) {
        e.matches++;
      }
      a += e.w_size;
      if (e.insert > e.strstart) {
        e.insert = e.strstart;
      }
    }
    if (a > e.strm.avail_in) {
      a = e.strm.avail_in;
    }
    if (a) {
      qa(e.strm, e.window, e.strstart, a);
      e.strstart += a;
      e.insert += a > e.w_size - e.insert ? e.w_size - e.insert : a;
    }
    if (e.high_water < e.strstart) {
      e.high_water = e.strstart;
    }
    a = e.bi_valid + 42 >> 3;
    a = e.pending_buf_size - a > 65535 ? 65535 : e.pending_buf_size - a;
    t = a > e.w_size ? e.w_size : a;
    i = e.strstart - e.block_start;
    if (i >= t || (i || r === it) && r !== Wt && e.strm.avail_in === 0 && i <= a) {
      n = i > a ? a : i;
      o = r === it && e.strm.avail_in === 0 && n === i ? 1 : 0;
      Ma(e, e.block_start, n, o);
      e.block_start += n;
      Qe(e.strm);
    }
    if (o) {
      return vr;
    } else {
      return Ve;
    }
  }
};
const ha = (e, r) => {
  let t;
  let n;
  while (true) {
    if (e.lookahead < wt) {
      Wr(e);
      if (e.lookahead < wt && r === Wt) {
        return Ve;
      }
      if (e.lookahead === 0) {
        break;
      }
    }
    t = 0;
    if (e.lookahead >= ge) {
      e.ins_h = Vt(e, e.ins_h, e.window[e.strstart + ge - 1]);
      t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
      e.head[e.ins_h] = e.strstart;
    }
    if (t !== 0 && e.strstart - t <= e.w_size - wt) {
      e.match_length = Ec(e, t);
    }
    if (e.match_length >= ge) {
      n = Ht(e, e.strstart - e.match_start, e.match_length - ge);
      e.lookahead -= e.match_length;
      if (e.match_length <= e.max_lazy_match && e.lookahead >= ge) {
        e.match_length--;
        do {
          e.strstart++;
          e.ins_h = Vt(e, e.ins_h, e.window[e.strstart + ge - 1]);
          t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
          e.head[e.ins_h] = e.strstart;
        } while (--e.match_length !== 0);
        e.strstart++;
      } else {
        e.strstart += e.match_length;
        e.match_length = 0;
        e.ins_h = e.window[e.strstart];
        e.ins_h = Vt(e, e.ins_h, e.window[e.strstart + 1]);
      }
    } else {
      n = Ht(e, 0, e.window[e.strstart]);
      e.lookahead--;
      e.strstart++;
    }
    if (n && (et(e, false), e.strm.avail_out === 0)) {
      return Ve;
    }
  }
  e.insert = e.strstart < ge - 1 ? e.strstart : ge - 1;
  if (r === it) {
    et(e, true);
    if (e.strm.avail_out === 0) {
      return vr;
    } else {
      return Yr;
    }
  } else if (e.sym_next && (et(e, false), e.strm.avail_out === 0)) {
    return Ve;
  } else {
    return Xr;
  }
};
const Er = (e, r) => {
  let t;
  let n;
  let i;
  while (true) {
    if (e.lookahead < wt) {
      Wr(e);
      if (e.lookahead < wt && r === Wt) {
        return Ve;
      }
      if (e.lookahead === 0) {
        break;
      }
    }
    t = 0;
    if (e.lookahead >= ge) {
      e.ins_h = Vt(e, e.ins_h, e.window[e.strstart + ge - 1]);
      t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
      e.head[e.ins_h] = e.strstart;
    }
    e.prev_length = e.match_length;
    e.prev_match = e.match_start;
    e.match_length = ge - 1;
    if (t !== 0 && e.prev_length < e.max_lazy_match && e.strstart - t <= e.w_size - wt) {
      e.match_length = Ec(e, t);
      if (e.match_length <= 5 && (e.strategy === Sd || e.match_length === ge && e.strstart - e.match_start > 4096)) {
        e.match_length = ge - 1;
      }
    }
    if (e.prev_length >= ge && e.match_length <= e.prev_length) {
      i = e.strstart + e.lookahead - ge;
      n = Ht(e, e.strstart - 1 - e.prev_match, e.prev_length - ge);
      e.lookahead -= e.prev_length - 1;
      e.prev_length -= 2;
      do {
        if (++e.strstart <= i) {
          e.ins_h = Vt(e, e.ins_h, e.window[e.strstart + ge - 1]);
          t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
          e.head[e.ins_h] = e.strstart;
        }
      } while (--e.prev_length !== 0);
      e.match_available = 0;
      e.match_length = ge - 1;
      e.strstart++;
      if (n && (et(e, false), e.strm.avail_out === 0)) {
        return Ve;
      }
    } else if (e.match_available) {
      n = Ht(e, 0, e.window[e.strstart - 1]);
      if (n) {
        et(e, false);
      }
      e.strstart++;
      e.lookahead--;
      if (e.strm.avail_out === 0) {
        return Ve;
      }
    } else {
      e.match_available = 1;
      e.strstart++;
      e.lookahead--;
    }
  }
  if (e.match_available) {
    n = Ht(e, 0, e.window[e.strstart - 1]);
    e.match_available = 0;
  }
  e.insert = e.strstart < ge - 1 ? e.strstart : ge - 1;
  if (r === it) {
    et(e, true);
    if (e.strm.avail_out === 0) {
      return vr;
    } else {
      return Yr;
    }
  } else if (e.sym_next && (et(e, false), e.strm.avail_out === 0)) {
    return Ve;
  } else {
    return Xr;
  }
};
const Zd = (e, r) => {
  let t;
  let n;
  let i;
  let a;
  const o = e.window;
  while (true) {
    if (e.lookahead <= jt) {
      Wr(e);
      if (e.lookahead <= jt && r === Wt) {
        return Ve;
      }
      if (e.lookahead === 0) {
        break;
      }
    }
    e.match_length = 0;
    if (e.lookahead >= ge && e.strstart > 0 && (i = e.strstart - 1, n = o[i], n === o[++i] && n === o[++i] && n === o[++i])) {
      a = e.strstart + jt;
      do ; while (n === o[++i] && n === o[++i] && n === o[++i] && n === o[++i] && n === o[++i] && n === o[++i] && n === o[++i] && n === o[++i] && i < a);
      e.match_length = jt - (a - i);
      if (e.match_length > e.lookahead) {
        e.match_length = e.lookahead;
      }
    }
    if (e.match_length >= ge) {
      t = Ht(e, 1, e.match_length - ge);
      e.lookahead -= e.match_length;
      e.strstart += e.match_length;
      e.match_length = 0;
    } else {
      t = Ht(e, 0, e.window[e.strstart]);
      e.lookahead--;
      e.strstart++;
    }
    if (t && (et(e, false), e.strm.avail_out === 0)) {
      return Ve;
    }
  }
  e.insert = 0;
  if (r === it) {
    et(e, true);
    if (e.strm.avail_out === 0) {
      return vr;
    } else {
      return Yr;
    }
  } else if (e.sym_next && (et(e, false), e.strm.avail_out === 0)) {
    return Ve;
  } else {
    return Xr;
  }
};
const Hd = (e, r) => {
  let t;
  while (true) {
    if (e.lookahead === 0 && (Wr(e), e.lookahead === 0)) {
      if (r === Wt) {
        return Ve;
      }
      break;
    }
    e.match_length = 0;
    t = Ht(e, 0, e.window[e.strstart]);
    e.lookahead--;
    e.strstart++;
    if (t && (et(e, false), e.strm.avail_out === 0)) {
      return Ve;
    }
  }
  e.insert = 0;
  if (r === it) {
    et(e, true);
    if (e.strm.avail_out === 0) {
      return vr;
    } else {
      return Yr;
    }
  } else if (e.sym_next && (et(e, false), e.strm.avail_out === 0)) {
    return Ve;
  } else {
    return Xr;
  }
};
function ht(e, r, t, n, i) {
  this.good_length = e;
  this.max_lazy = r;
  this.nice_length = t;
  this.max_chain = n;
  this.func = i;
}
const cn = [new ht(0, 0, 0, 0, Sc), new ht(4, 4, 8, 4, ha), new ht(4, 5, 16, 8, ha), new ht(4, 6, 32, 32, ha), new ht(4, 4, 16, 16, Er), new ht(8, 16, 32, 32, Er), new ht(8, 16, 128, 128, Er), new ht(8, 32, 128, 256, Er), new ht(32, 128, 258, 1024, Er), new ht(32, 258, 258, 4096, Er)];
const Wd = e => {
  e.window_size = e.w_size * 2;
  Mt(e.head);
  e.max_lazy_match = cn[e.level].max_lazy;
  e.good_match = cn[e.level].good_length;
  e.nice_match = cn[e.level].nice_length;
  e.max_chain_length = cn[e.level].max_chain;
  e.strstart = 0;
  e.block_start = 0;
  e.lookahead = 0;
  e.insert = 0;
  e.match_length = e.prev_length = ge - 1;
  e.match_available = 0;
  e.ins_h = 0;
};
function Vd() {
  this.strm = null;
  this.status = 0;
  this.pending_buf = null;
  this.pending_buf_size = 0;
  this.pending_out = 0;
  this.pending = 0;
  this.wrap = 0;
  this.gzhead = null;
  this.gzindex = 0;
  this.method = Ji;
  this.last_flush = -1;
  this.w_size = 0;
  this.w_bits = 0;
  this.w_mask = 0;
  this.window = null;
  this.window_size = 0;
  this.prev = null;
  this.head = null;
  this.ins_h = 0;
  this.hash_size = 0;
  this.hash_bits = 0;
  this.hash_mask = 0;
  this.hash_shift = 0;
  this.block_start = 0;
  this.match_length = 0;
  this.prev_match = 0;
  this.match_available = 0;
  this.strstart = 0;
  this.match_start = 0;
  this.lookahead = 0;
  this.prev_length = 0;
  this.max_chain_length = 0;
  this.max_lazy_match = 0;
  this.level = 0;
  this.strategy = 0;
  this.good_match = 0;
  this.nice_match = 0;
  this.dyn_ltree = new Uint16Array(Fd * 2);
  this.dyn_dtree = new Uint16Array((Od * 2 + 1) * 2);
  this.bl_tree = new Uint16Array((Nd * 2 + 1) * 2);
  Mt(this.dyn_ltree);
  Mt(this.dyn_dtree);
  Mt(this.bl_tree);
  this.l_desc = null;
  this.d_desc = null;
  this.bl_desc = null;
  this.bl_count = new Uint16Array(Ud + 1);
  this.heap = new Uint16Array(ja * 2 + 1);
  Mt(this.heap);
  this.heap_len = 0;
  this.heap_max = 0;
  this.depth = new Uint16Array(ja * 2 + 1);
  Mt(this.depth);
  this.sym_buf = 0;
  this.lit_bufsize = 0;
  this.sym_next = 0;
  this.sym_end = 0;
  this.opt_len = 0;
  this.static_len = 0;
  this.matches = 0;
  this.insert = 0;
  this.bi_buf = 0;
  this.bi_valid = 0;
}
const Jn = e => {
  if (!e) {
    return 1;
  }
  const r = e.state;
  if (!r || r.strm !== e || r.status !== Hr && r.status !== us && r.status !== Za && r.status !== Ha && r.status !== Wa && r.status !== Va && r.status !== ir && r.status !== on) {
    return 1;
  } else {
    return 0;
  }
};
const Ac = e => {
  if (Jn(e)) {
    return ar(e, yt);
  }
  e.total_in = e.total_out = 0;
  e.data_type = Id;
  const r = e.state;
  r.pending = 0;
  r.pending_out = 0;
  if (r.wrap < 0) {
    r.wrap = -r.wrap;
  }
  r.status = r.wrap === 2 ? us : r.wrap ? Hr : ir;
  e.adler = r.wrap === 2 ? 0 : 1;
  r.last_flush = -2;
  md(r);
  return Me;
};
const Cc = e => {
  const r = Ac(e);
  if (r === Me) {
    Wd(e.state);
  }
  return r;
};
const qd = (e, r) => Jn(e) || e.state.wrap !== 2 ? yt : (e.state.gzhead = r, Me);
const Tc = (e, r, t, n, i, a) => {
  if (!e) {
    return yt;
  }
  let o = 1;
  if (r === Ed) {
    r = 6;
  }
  if (n < 0) {
    o = 0;
    n = -n;
  } else if (n > 15) {
    o = 2;
    n -= 16;
  }
  if (i < 1 || i > Bd || t !== Ji || n < 8 || n > 15 || r < 0 || r > 9 || a < 0 || a > Cd || n === 8 && o !== 1) {
    return ar(e, yt);
  }
  if (n === 8) {
    n = 9;
  }
  const s = new Vd();
  e.state = s;
  s.strm = e;
  s.status = Hr;
  s.wrap = o;
  s.gzhead = null;
  s.w_bits = n;
  s.w_size = 1 << s.w_bits;
  s.w_mask = s.w_size - 1;
  s.hash_bits = i + 7;
  s.hash_size = 1 << s.hash_bits;
  s.hash_mask = s.hash_size - 1;
  s.hash_shift = ~~((s.hash_bits + ge - 1) / ge);
  s.window = new Uint8Array(s.w_size * 2);
  s.head = new Uint16Array(s.hash_size);
  s.prev = new Uint16Array(s.w_size);
  s.lit_bufsize = 1 << i + 6;
  s.pending_buf_size = s.lit_bufsize * 4;
  s.pending_buf = new Uint8Array(s.pending_buf_size);
  s.sym_buf = s.lit_bufsize;
  s.sym_end = (s.lit_bufsize - 1) * 3;
  s.level = r;
  s.strategy = a;
  s.method = t;
  return Cc(e);
};
const Kd = (e, r) => Tc(e, r, Ji, Dd, Rd, Td);
const Gd = (e, r) => {
  if (Jn(e) || r > to || r < 0) {
    if (e) {
      return ar(e, yt);
    } else {
      return yt;
    }
  }
  const t = e.state;
  if (!e.output || e.avail_in !== 0 && !e.input || t.status === on && r !== it) {
    return ar(e, e.avail_out === 0 ? da : yt);
  }
  const n = t.last_flush;
  t.last_flush = r;
  if (t.pending !== 0) {
    Qe(e);
    if (e.avail_out === 0) {
      t.last_flush = -1;
      return Me;
    }
  } else if (e.avail_in === 0 && no(r) <= no(n) && r !== it) {
    return ar(e, da);
  }
  if (t.status === on && e.avail_in !== 0) {
    return ar(e, da);
  }
  if (t.status === Hr && t.wrap === 0) {
    t.status = ir;
  }
  if (t.status === Hr) {
    let i = Ji + (t.w_bits - 8 << 4) << 8;
    let a = -1;
    if (t.strategy >= ii || t.level < 2) {
      a = 0;
    } else if (t.level < 6) {
      a = 1;
    } else if (t.level === 6) {
      a = 2;
    } else {
      a = 3;
    }
    i |= a << 6;
    if (t.strstart !== 0) {
      i |= Ld;
    }
    i += 31 - i % 31;
    an(t, i);
    if (t.strstart !== 0) {
      an(t, e.adler >>> 16);
      an(t, e.adler & 65535);
    }
    e.adler = 1;
    t.status = ir;
    Qe(e);
    if (t.pending !== 0) {
      t.last_flush = -1;
      return Me;
    }
  }
  if (t.status === us) {
    e.adler = 0;
    xe(t, 31);
    xe(t, 139);
    xe(t, 8);
    if (t.gzhead) {
      xe(t, (t.gzhead.text ? 1 : 0) + (t.gzhead.hcrc ? 2 : 0) + (t.gzhead.extra ? 4 : 0) + (t.gzhead.name ? 8 : 0) + (t.gzhead.comment ? 16 : 0));
      xe(t, t.gzhead.time & 255);
      xe(t, t.gzhead.time >> 8 & 255);
      xe(t, t.gzhead.time >> 16 & 255);
      xe(t, t.gzhead.time >> 24 & 255);
      xe(t, t.level === 9 ? 2 : t.strategy >= ii || t.level < 2 ? 4 : 0);
      xe(t, t.gzhead.os & 255);
      if (t.gzhead.extra && t.gzhead.extra.length) {
        xe(t, t.gzhead.extra.length & 255);
        xe(t, t.gzhead.extra.length >> 8 & 255);
      }
      if (t.gzhead.hcrc) {
        e.adler = Le(e.adler, t.pending_buf, t.pending, 0);
      }
      t.gzindex = 0;
      t.status = Za;
    } else {
      xe(t, 0);
      xe(t, 0);
      xe(t, 0);
      xe(t, 0);
      xe(t, 0);
      xe(t, t.level === 9 ? 2 : t.strategy >= ii || t.level < 2 ? 4 : 0);
      xe(t, Pd);
      t.status = ir;
      Qe(e);
      if (t.pending !== 0) {
        t.last_flush = -1;
        return Me;
      }
    }
  }
  if (t.status === Za) {
    if (t.gzhead.extra) {
      let i = t.pending;
      let a = (t.gzhead.extra.length & 65535) - t.gzindex;
      while (t.pending + a > t.pending_buf_size) {
        let s = t.pending_buf_size - t.pending;
        t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex, t.gzindex + s), t.pending);
        t.pending = t.pending_buf_size;
        if (t.gzhead.hcrc && t.pending > i) {
          e.adler = Le(e.adler, t.pending_buf, t.pending - i, i);
        }
        t.gzindex += s;
        Qe(e);
        if (t.pending !== 0) {
          t.last_flush = -1;
          return Me;
        }
        i = 0;
        a -= s;
      }
      let o = new Uint8Array(t.gzhead.extra);
      t.pending_buf.set(o.subarray(t.gzindex, t.gzindex + a), t.pending);
      t.pending += a;
      if (t.gzhead.hcrc && t.pending > i) {
        e.adler = Le(e.adler, t.pending_buf, t.pending - i, i);
      }
      t.gzindex = 0;
    }
    t.status = Ha;
  }
  if (t.status === Ha) {
    if (t.gzhead.name) {
      let i = t.pending;
      let a;
      do {
        if (t.pending === t.pending_buf_size) {
          if (t.gzhead.hcrc && t.pending > i) {
            e.adler = Le(e.adler, t.pending_buf, t.pending - i, i);
          }
          Qe(e);
          if (t.pending !== 0) {
            t.last_flush = -1;
            return Me;
          }
          i = 0;
        }
        if (t.gzindex < t.gzhead.name.length) {
          a = t.gzhead.name.charCodeAt(t.gzindex++) & 255;
        } else {
          a = 0;
        }
        xe(t, a);
      } while (a !== 0);
      if (t.gzhead.hcrc && t.pending > i) {
        e.adler = Le(e.adler, t.pending_buf, t.pending - i, i);
      }
      t.gzindex = 0;
    }
    t.status = Wa;
  }
  if (t.status === Wa) {
    if (t.gzhead.comment) {
      let i = t.pending;
      let a;
      do {
        if (t.pending === t.pending_buf_size) {
          if (t.gzhead.hcrc && t.pending > i) {
            e.adler = Le(e.adler, t.pending_buf, t.pending - i, i);
          }
          Qe(e);
          if (t.pending !== 0) {
            t.last_flush = -1;
            return Me;
          }
          i = 0;
        }
        if (t.gzindex < t.gzhead.comment.length) {
          a = t.gzhead.comment.charCodeAt(t.gzindex++) & 255;
        } else {
          a = 0;
        }
        xe(t, a);
      } while (a !== 0);
      if (t.gzhead.hcrc && t.pending > i) {
        e.adler = Le(e.adler, t.pending_buf, t.pending - i, i);
      }
    }
    t.status = Va;
  }
  if (t.status === Va) {
    if (t.gzhead.hcrc) {
      if (t.pending + 2 > t.pending_buf_size && (Qe(e), t.pending !== 0)) {
        t.last_flush = -1;
        return Me;
      }
      xe(t, e.adler & 255);
      xe(t, e.adler >> 8 & 255);
      e.adler = 0;
    }
    t.status = ir;
    Qe(e);
    if (t.pending !== 0) {
      t.last_flush = -1;
      return Me;
    }
  }
  if (e.avail_in !== 0 || t.lookahead !== 0 || r !== Wt && t.status !== on) {
    let i = t.level === 0 ? Sc(t, r) : t.strategy === ii ? Hd(t, r) : t.strategy === Ad ? Zd(t, r) : cn[t.level].func(t, r);
    if (i === vr || i === Yr) {
      t.status = on;
    }
    if (i === Ve || i === vr) {
      if (e.avail_out === 0) {
        t.last_flush = -1;
      }
      return Me;
    }
    if (i === Xr && (r === bd ? wd(t) : r !== to && (Ma(t, 0, 0, false), r === xd && (Mt(t.head), t.lookahead === 0 && (t.strstart = 0, t.block_start = 0, t.insert = 0))), Qe(e), e.avail_out === 0)) {
      t.last_flush = -1;
      return Me;
    }
  }
  if (r !== it) {
    return Me;
  } else if (t.wrap <= 0) {
    return ro;
  } else {
    if (t.wrap === 2) {
      xe(t, e.adler & 255);
      xe(t, e.adler >> 8 & 255);
      xe(t, e.adler >> 16 & 255);
      xe(t, e.adler >> 24 & 255);
      xe(t, e.total_in & 255);
      xe(t, e.total_in >> 8 & 255);
      xe(t, e.total_in >> 16 & 255);
      xe(t, e.total_in >> 24 & 255);
    } else {
      an(t, e.adler >>> 16);
      an(t, e.adler & 65535);
    }
    Qe(e);
    if (t.wrap > 0) {
      t.wrap = -t.wrap;
    }
    if (t.pending !== 0) {
      return Me;
    } else {
      return ro;
    }
  }
};
const Xd = e => {
  if (Jn(e)) {
    return yt;
  }
  const r = e.state.status;
  e.state = null;
  if (r === ir) {
    return ar(e, kd);
  } else {
    return Me;
  }
};
const Yd = (e, r) => {
  let t = r.length;
  if (Jn(e)) {
    return yt;
  }
  const n = e.state;
  const i = n.wrap;
  if (i === 2 || i === 1 && n.status !== Hr || n.lookahead) {
    return yt;
  }
  if (i === 1) {
    e.adler = Nn(e.adler, r, t, 0);
  }
  n.wrap = 0;
  if (t >= n.w_size) {
    if (i === 0) {
      Mt(n.head);
      n.strstart = 0;
      n.block_start = 0;
      n.insert = 0;
    }
    let d = new Uint8Array(n.w_size);
    d.set(r.subarray(t - n.w_size, t), 0);
    r = d;
    t = n.w_size;
  }
  const a = e.avail_in;
  const o = e.next_in;
  const s = e.input;
  e.avail_in = t;
  e.next_in = 0;
  e.input = r;
  Wr(n);
  while (n.lookahead >= ge) {
    let d = n.strstart;
    let c = n.lookahead - (ge - 1);
    do {
      n.ins_h = Vt(n, n.ins_h, n.window[d + ge - 1]);
      n.prev[d & n.w_mask] = n.head[n.ins_h];
      n.head[n.ins_h] = d;
      d++;
    } while (--c);
    n.strstart = d;
    n.lookahead = ge - 1;
    Wr(n);
  }
  n.strstart += n.lookahead;
  n.block_start = n.strstart;
  n.insert = n.lookahead;
  n.lookahead = 0;
  n.match_length = n.prev_length = ge - 1;
  n.match_available = 0;
  e.next_in = o;
  e.input = s;
  e.avail_in = a;
  n.wrap = i;
  return Me;
};
var Jd = Kd;
var Qd = Tc;
var e0 = Cc;
var t0 = Ac;
var r0 = qd;
var n0 = Gd;
var i0 = Xd;
var a0 = Yd;
var s0 = "pako deflate (from Nodeca project)";
var vn = {
  deflateInit: Jd,
  deflateInit2: Qd,
  deflateReset: e0,
  deflateResetKeep: t0,
  deflateSetHeader: r0,
  deflate: n0,
  deflateEnd: i0,
  deflateSetDictionary: a0,
  deflateInfo: s0
};
const o0 = (e, r) => Object.prototype.hasOwnProperty.call(e, r);
function c0(e) {
  const r = Array.prototype.slice.call(arguments, 1);
  while (r.length) {
    const t = r.shift();
    if (t) {
      if (typeof t != "object") {
        throw new TypeError(t + "must be non-object");
      }
      for (const n in t) {
        if (o0(t, n)) {
          e[n] = t[n];
        }
      }
    }
  }
  return e;
}
var l0 = e => {
  let r = 0;
  for (let n = 0, i = e.length; n < i; n++) {
    r += e[n].length;
  }
  const t = new Uint8Array(r);
  for (let n = 0, i = 0, a = e.length; n < a; n++) {
    let o = e[n];
    t.set(o, i);
    i += o.length;
  }
  return t;
};
var Qi = {
  assign: c0,
  flattenChunks: l0
};
let Ic = true;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
  Ic = false;
}
const Fn = new Uint8Array(256);
for (let e = 0; e < 256; e++) {
  Fn[e] = e >= 252 ? 6 : e >= 248 ? 5 : e >= 240 ? 4 : e >= 224 ? 3 : e >= 192 ? 2 : 1;
}
Fn[254] = Fn[254] = 1;
var u0 = e => {
  if (typeof TextEncoder == "function" && TextEncoder.prototype.encode) {
    return new TextEncoder().encode(e);
  }
  let r;
  let t;
  let n;
  let i;
  let a;
  let o = e.length;
  let s = 0;
  for (i = 0; i < o; i++) {
    t = e.charCodeAt(i);
    if ((t & 64512) === 55296 && i + 1 < o) {
      n = e.charCodeAt(i + 1);
      if ((n & 64512) === 56320) {
        t = 65536 + (t - 55296 << 10) + (n - 56320);
        i++;
      }
    }
    s += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
  }
  r = new Uint8Array(s);
  a = 0;
  i = 0;
  for (; a < s; i++) {
    t = e.charCodeAt(i);
    if ((t & 64512) === 55296 && i + 1 < o) {
      n = e.charCodeAt(i + 1);
      if ((n & 64512) === 56320) {
        t = 65536 + (t - 55296 << 10) + (n - 56320);
        i++;
      }
    }
    if (t < 128) {
      r[a++] = t;
    } else if (t < 2048) {
      r[a++] = t >>> 6 | 192;
      r[a++] = t & 63 | 128;
    } else if (t < 65536) {
      r[a++] = t >>> 12 | 224;
      r[a++] = t >>> 6 & 63 | 128;
      r[a++] = t & 63 | 128;
    } else {
      r[a++] = t >>> 18 | 240;
      r[a++] = t >>> 12 & 63 | 128;
      r[a++] = t >>> 6 & 63 | 128;
      r[a++] = t & 63 | 128;
    }
  }
  return r;
};
const f0 = (e, r) => {
  if (r < 65534 && e.subarray && Ic) {
    return String.fromCharCode.apply(null, e.length === r ? e : e.subarray(0, r));
  }
  let t = "";
  for (let n = 0; n < r; n++) {
    t += String.fromCharCode(e[n]);
  }
  return t;
};
var d0 = (e, r) => {
  const t = r || e.length;
  if (typeof TextDecoder == "function" && TextDecoder.prototype.decode) {
    return new TextDecoder().decode(e.subarray(0, r));
  }
  let n;
  let i;
  const a = new Array(t * 2);
  i = 0;
  n = 0;
  while (n < t) {
    let o = e[n++];
    if (o < 128) {
      a[i++] = o;
      continue;
    }
    let s = Fn[o];
    if (s > 4) {
      a[i++] = 65533;
      n += s - 1;
      continue;
    }
    for (o &= s === 2 ? 31 : s === 3 ? 15 : 7; s > 1 && n < t;) {
      o = o << 6 | e[n++] & 63;
      s--;
    }
    if (s > 1) {
      a[i++] = 65533;
      continue;
    }
    if (o < 65536) {
      a[i++] = o;
    } else {
      o -= 65536;
      a[i++] = o >> 10 & 1023 | 55296;
      a[i++] = o & 1023 | 56320;
    }
  }
  return f0(a, i);
};
var h0 = (e, r) => {
  r = r || e.length;
  if (r > e.length) {
    r = e.length;
  }
  let t = r - 1;
  while (t >= 0 && (e[t] & 192) === 128) {
    t--;
  }
  if (t < 0 || t === 0) {
    return r;
  } else if (t + Fn[e[t]] > r) {
    return t;
  } else {
    return r;
  }
};
var Un = {
  string2buf: u0,
  buf2string: d0,
  utf8border: h0
};
function v0() {
  this.input = null;
  this.next_in = 0;
  this.avail_in = 0;
  this.total_in = 0;
  this.output = null;
  this.next_out = 0;
  this.avail_out = 0;
  this.total_out = 0;
  this.msg = "";
  this.state = null;
  this.data_type = 2;
  this.adler = 0;
}
var Bc = v0;
const Dc = Object.prototype.toString;
const {
  Z_NO_FLUSH: p0,
  Z_SYNC_FLUSH: _0,
  Z_FULL_FLUSH: g0,
  Z_FINISH: m0,
  Z_OK: $i,
  Z_STREAM_END: y0,
  Z_DEFAULT_COMPRESSION: w0,
  Z_DEFAULT_STRATEGY: b0,
  Z_DEFLATED: x0
} = Gr;
function Qn(e) {
  this.options = Qi.assign({
    level: w0,
    method: x0,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: b0
  }, e || {});
  let r = this.options;
  if (r.raw && r.windowBits > 0) {
    r.windowBits = -r.windowBits;
  } else if (r.gzip && r.windowBits > 0 && r.windowBits < 16) {
    r.windowBits += 16;
  }
  this.err = 0;
  this.msg = "";
  this.ended = false;
  this.chunks = [];
  this.strm = new Bc();
  this.strm.avail_out = 0;
  let t = vn.deflateInit2(this.strm, r.level, r.method, r.windowBits, r.memLevel, r.strategy);
  if (t !== $i) {
    throw new Error(hr[t]);
  }
  if (r.header) {
    vn.deflateSetHeader(this.strm, r.header);
  }
  if (r.dictionary) {
    let n;
    if (typeof r.dictionary == "string") {
      n = Un.string2buf(r.dictionary);
    } else if (Dc.call(r.dictionary) === "[object ArrayBuffer]") {
      n = new Uint8Array(r.dictionary);
    } else {
      n = r.dictionary;
    }
    t = vn.deflateSetDictionary(this.strm, n);
    if (t !== $i) {
      throw new Error(hr[t]);
    }
    this._dict_set = true;
  }
}
Qn.prototype.push = function (e, r) {
  const t = this.strm;
  const n = this.options.chunkSize;
  let i;
  let a;
  if (this.ended) {
    return false;
  }
  if (r === ~~r) {
    a = r;
  } else {
    a = r === true ? m0 : p0;
  }
  if (typeof e == "string") {
    t.input = Un.string2buf(e);
  } else if (Dc.call(e) === "[object ArrayBuffer]") {
    t.input = new Uint8Array(e);
  } else {
    t.input = e;
  }
  t.next_in = 0;
  t.avail_in = t.input.length;
  while (true) {
    if (t.avail_out === 0) {
      t.output = new Uint8Array(n);
      t.next_out = 0;
      t.avail_out = n;
    }
    if ((a === _0 || a === g0) && t.avail_out <= 6) {
      this.onData(t.output.subarray(0, t.next_out));
      t.avail_out = 0;
      continue;
    }
    i = vn.deflate(t, a);
    if (i === y0) {
      if (t.next_out > 0) {
        this.onData(t.output.subarray(0, t.next_out));
      }
      i = vn.deflateEnd(this.strm);
      this.onEnd(i);
      this.ended = true;
      return i === $i;
    }
    if (t.avail_out === 0) {
      this.onData(t.output);
      continue;
    }
    if (a > 0 && t.next_out > 0) {
      this.onData(t.output.subarray(0, t.next_out));
      t.avail_out = 0;
      continue;
    }
    if (t.avail_in === 0) {
      break;
    }
  }
  return true;
};
Qn.prototype.onData = function (e) {
  this.chunks.push(e);
};
Qn.prototype.onEnd = function (e) {
  if (e === $i) {
    this.result = Qi.flattenChunks(this.chunks);
  }
  this.chunks = [];
  this.err = e;
  this.msg = this.strm.msg;
};
function fs(e, r) {
  const t = new Qn(r);
  t.push(e, true);
  if (t.err) {
    throw t.msg || hr[t.err];
  }
  return t.result;
}
function k0(e, r) {
  r = r || {};
  r.raw = true;
  return fs(e, r);
}
function E0(e, r) {
  r = r || {};
  r.gzip = true;
  return fs(e, r);
}
var S0 = Qn;
var A0 = fs;
var C0 = k0;
var T0 = E0;
var I0 = Gr;
var B0 = {
  Deflate: S0,
  deflate: A0,
  deflateRaw: C0,
  gzip: T0,
  constants: I0
};
const ai = 16209;
const D0 = 16191;
function R0(r, t) {
  let n;
  let i;
  let a;
  let o;
  let s;
  let d;
  let c;
  let l;
  let m;
  let h;
  let v;
  let _;
  let y;
  let g;
  let E;
  let A;
  let I;
  let b;
  let T;
  let R;
  let B;
  let z;
  let N;
  let S;
  const D = r.state;
  n = r.next_in;
  N = r.input;
  i = n + (r.avail_in - 5);
  a = r.next_out;
  S = r.output;
  o = a - (t - r.avail_out);
  s = a + (r.avail_out - 257);
  d = D.dmax;
  c = D.wsize;
  l = D.whave;
  m = D.wnext;
  h = D.window;
  v = D.hold;
  _ = D.bits;
  y = D.lencode;
  g = D.distcode;
  E = (1 << D.lenbits) - 1;
  A = (1 << D.distbits) - 1;
  e: do {
    if (_ < 15) {
      v += N[n++] << _;
      _ += 8;
      v += N[n++] << _;
      _ += 8;
    }
    I = y[v & E];
    t: while (true) {
      b = I >>> 24;
      v >>>= b;
      _ -= b;
      b = I >>> 16 & 255;
      if (b === 0) {
        S[a++] = I & 65535;
      } else if (b & 16) {
        T = I & 65535;
        b &= 15;
        if (b) {
          if (_ < b) {
            v += N[n++] << _;
            _ += 8;
          }
          T += v & (1 << b) - 1;
          v >>>= b;
          _ -= b;
        }
        if (_ < 15) {
          v += N[n++] << _;
          _ += 8;
          v += N[n++] << _;
          _ += 8;
        }
        I = g[v & A];
        r: while (true) {
          b = I >>> 24;
          v >>>= b;
          _ -= b;
          b = I >>> 16 & 255;
          if (b & 16) {
            R = I & 65535;
            b &= 15;
            if (_ < b) {
              v += N[n++] << _;
              _ += 8;
              if (_ < b) {
                v += N[n++] << _;
                _ += 8;
              }
            }
            R += v & (1 << b) - 1;
            if (R > d) {
              r.msg = "invalid distance too far back";
              D.mode = ai;
              break e;
            }
            v >>>= b;
            _ -= b;
            b = a - o;
            if (R > b) {
              b = R - b;
              if (b > l && D.sane) {
                r.msg = "invalid distance too far back";
                D.mode = ai;
                break e;
              }
              B = 0;
              z = h;
              if (m === 0) {
                B += c - b;
                if (b < T) {
                  T -= b;
                  do {
                    S[a++] = h[B++];
                  } while (--b);
                  B = a - R;
                  z = S;
                }
              } else if (m < b) {
                B += c + m - b;
                b -= m;
                if (b < T) {
                  T -= b;
                  do {
                    S[a++] = h[B++];
                  } while (--b);
                  B = 0;
                  if (m < T) {
                    b = m;
                    T -= b;
                    do {
                      S[a++] = h[B++];
                    } while (--b);
                    B = a - R;
                    z = S;
                  }
                }
              } else {
                B += m - b;
                if (b < T) {
                  T -= b;
                  do {
                    S[a++] = h[B++];
                  } while (--b);
                  B = a - R;
                  z = S;
                }
              }
              while (T > 2) {
                S[a++] = z[B++];
                S[a++] = z[B++];
                S[a++] = z[B++];
                T -= 3;
              }
              if (T) {
                S[a++] = z[B++];
                if (T > 1) {
                  S[a++] = z[B++];
                }
              }
            } else {
              B = a - R;
              do {
                S[a++] = S[B++];
                S[a++] = S[B++];
                S[a++] = S[B++];
                T -= 3;
              } while (T > 2);
              if (T) {
                S[a++] = S[B++];
                if (T > 1) {
                  S[a++] = S[B++];
                }
              }
            }
          } else if (b & 64) {
            r.msg = "invalid distance code";
            D.mode = ai;
            break e;
          } else {
            I = g[(I & 65535) + (v & (1 << b) - 1)];
            continue r;
          }
          break;
        }
      } else if (b & 64) {
        if (b & 32) {
          D.mode = D0;
          break e;
        } else {
          r.msg = "invalid literal/length code";
          D.mode = ai;
          break e;
        }
      } else {
        I = y[(I & 65535) + (v & (1 << b) - 1)];
        continue t;
      }
      break;
    }
  } while (n < i && a < s);
  T = _ >> 3;
  n -= T;
  _ -= T << 3;
  v &= (1 << _) - 1;
  r.next_in = n;
  r.next_out = a;
  r.avail_in = n < i ? 5 + (i - n) : 5 - (n - i);
  r.avail_out = a < s ? 257 + (s - a) : 257 - (a - s);
  D.hold = v;
  D.bits = _;
}
const Sr = 15;
const io = 852;
const ao = 592;
const so = 0;
const va = 1;
const oo = 2;
const $0 = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]);
const z0 = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]);
const O0 = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]);
const N0 = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
const F0 = (e, r, t, n, i, a, o, s) => {
  const d = s.bits;
  let c = 0;
  let l = 0;
  let m = 0;
  let h = 0;
  let v = 0;
  let _ = 0;
  let y = 0;
  let g = 0;
  let E = 0;
  let A = 0;
  let I;
  let b;
  let T;
  let R;
  let B;
  let z = null;
  let N;
  const S = new Uint16Array(Sr + 1);
  const D = new Uint16Array(Sr + 1);
  let P = null;
  let H;
  let U;
  let K;
  for (c = 0; c <= Sr; c++) {
    S[c] = 0;
  }
  for (l = 0; l < n; l++) {
    S[r[t + l]]++;
  }
  v = d;
  h = Sr;
  for (; h >= 1 && S[h] === 0; h--);
  if (v > h) {
    v = h;
  }
  if (h === 0) {
    i[a++] = 1 << 24 | 64 << 16 | 0;
    i[a++] = 1 << 24 | 64 << 16 | 0;
    s.bits = 1;
    return 0;
  }
  for (m = 1; m < h && S[m] === 0; m++);
  if (v < m) {
    v = m;
  }
  g = 1;
  c = 1;
  for (; c <= Sr; c++) {
    g <<= 1;
    g -= S[c];
    if (g < 0) {
      return -1;
    }
  }
  if (g > 0 && (e === so || h !== 1)) {
    return -1;
  }
  D[1] = 0;
  c = 1;
  for (; c < Sr; c++) {
    D[c + 1] = D[c] + S[c];
  }
  for (l = 0; l < n; l++) {
    if (r[t + l] !== 0) {
      o[D[r[t + l]]++] = l;
    }
  }
  if (e === so) {
    z = P = o;
    N = 20;
  } else if (e === va) {
    z = $0;
    P = z0;
    N = 257;
  } else {
    z = O0;
    P = N0;
    N = 0;
  }
  A = 0;
  l = 0;
  c = m;
  B = a;
  _ = v;
  y = 0;
  T = -1;
  E = 1 << v;
  R = E - 1;
  if (e === va && E > io || e === oo && E > ao) {
    return 1;
  }
  while (true) {
    H = c - y;
    if (o[l] + 1 < N) {
      U = 0;
      K = o[l];
    } else if (o[l] >= N) {
      U = P[o[l] - N];
      K = z[o[l] - N];
    } else {
      U = 96;
      K = 0;
    }
    I = 1 << c - y;
    b = 1 << _;
    m = b;
    do {
      b -= I;
      i[B + (A >> y) + b] = H << 24 | U << 16 | K | 0;
    } while (b !== 0);
    for (I = 1 << c - 1; A & I;) {
      I >>= 1;
    }
    if (I !== 0) {
      A &= I - 1;
      A += I;
    } else {
      A = 0;
    }
    l++;
    if (--S[c] === 0) {
      if (c === h) {
        break;
      }
      c = r[t + o[l]];
    }
    if (c > v && (A & R) !== T) {
      if (y === 0) {
        y = v;
      }
      B += m;
      _ = c - y;
      g = 1 << _;
      while (_ + y < h && (g -= S[_ + y], g > 0)) {
        _++;
        g <<= 1;
      }
      E += 1 << _;
      if (e === va && E > io || e === oo && E > ao) {
        return 1;
      }
      T = A & R;
      i[T] = v << 24 | _ << 16 | B - a | 0;
    }
  }
  if (A !== 0) {
    i[B + A] = c - y << 24 | 64 << 16 | 0;
  }
  s.bits = v;
  return 0;
};
var pn = F0;
const U0 = 0;
const Rc = 1;
const $c = 2;
const {
  Z_FINISH: co,
  Z_BLOCK: L0,
  Z_TREES: si,
  Z_OK: pr,
  Z_STREAM_END: P0,
  Z_NEED_DICT: M0,
  Z_STREAM_ERROR: st,
  Z_DATA_ERROR: zc,
  Z_MEM_ERROR: Oc,
  Z_BUF_ERROR: j0,
  Z_DEFLATED: lo
} = Gr;
const ea = 16180;
const uo = 16181;
const fo = 16182;
const ho = 16183;
const vo = 16184;
const po = 16185;
const _o = 16186;
const go = 16187;
const mo = 16188;
const yo = 16189;
const zi = 16190;
const kt = 16191;
const pa = 16192;
const wo = 16193;
const _a = 16194;
const bo = 16195;
const xo = 16196;
const ko = 16197;
const Eo = 16198;
const oi = 16199;
const ci = 16200;
const So = 16201;
const Ao = 16202;
const Co = 16203;
const To = 16204;
const Io = 16205;
const ga = 16206;
const Bo = 16207;
const Do = 16208;
const Te = 16209;
const Nc = 16210;
const Fc = 16211;
const Z0 = 852;
const H0 = 592;
const W0 = 15;
const V0 = W0;
const Ro = e => (e >>> 24 & 255) + (e >>> 8 & 65280) + ((e & 65280) << 8) + ((e & 255) << 24);
function q0() {
  this.strm = null;
  this.mode = 0;
  this.last = false;
  this.wrap = 0;
  this.havedict = false;
  this.flags = 0;
  this.dmax = 0;
  this.check = 0;
  this.total = 0;
  this.head = null;
  this.wbits = 0;
  this.wsize = 0;
  this.whave = 0;
  this.wnext = 0;
  this.window = null;
  this.hold = 0;
  this.bits = 0;
  this.length = 0;
  this.offset = 0;
  this.extra = 0;
  this.lencode = null;
  this.distcode = null;
  this.lenbits = 0;
  this.distbits = 0;
  this.ncode = 0;
  this.nlen = 0;
  this.ndist = 0;
  this.have = 0;
  this.next = null;
  this.lens = new Uint16Array(320);
  this.work = new Uint16Array(288);
  this.lendyn = null;
  this.distdyn = null;
  this.sane = 0;
  this.back = 0;
  this.was = 0;
}
const mr = e => {
  if (!e) {
    return 1;
  }
  const r = e.state;
  if (!r || r.strm !== e || r.mode < ea || r.mode > Fc) {
    return 1;
  } else {
    return 0;
  }
};
const Uc = e => {
  if (mr(e)) {
    return st;
  }
  const r = e.state;
  e.total_in = e.total_out = r.total = 0;
  e.msg = "";
  if (r.wrap) {
    e.adler = r.wrap & 1;
  }
  r.mode = ea;
  r.last = 0;
  r.havedict = 0;
  r.flags = -1;
  r.dmax = 32768;
  r.head = null;
  r.hold = 0;
  r.bits = 0;
  r.lencode = r.lendyn = new Int32Array(Z0);
  r.distcode = r.distdyn = new Int32Array(H0);
  r.sane = 1;
  r.back = -1;
  return pr;
};
const Lc = e => {
  if (mr(e)) {
    return st;
  }
  const r = e.state;
  r.wsize = 0;
  r.whave = 0;
  r.wnext = 0;
  return Uc(e);
};
const Pc = (e, r) => {
  let t;
  if (mr(e)) {
    return st;
  }
  const n = e.state;
  if (r < 0) {
    t = 0;
    r = -r;
  } else {
    t = (r >> 4) + 5;
    if (r < 48) {
      r &= 15;
    }
  }
  if (r && (r < 8 || r > 15)) {
    return st;
  } else {
    if (n.window !== null && n.wbits !== r) {
      n.window = null;
    }
    n.wrap = t;
    n.wbits = r;
    return Lc(e);
  }
};
const Mc = (e, r) => {
  if (!e) {
    return st;
  }
  const t = new q0();
  e.state = t;
  t.strm = e;
  t.window = null;
  t.mode = ea;
  const n = Pc(e, r);
  if (n !== pr) {
    e.state = null;
  }
  return n;
};
const K0 = e => Mc(e, V0);
let $o = true;
let ma;
let ya;
const G0 = e => {
  if ($o) {
    ma = new Int32Array(512);
    ya = new Int32Array(32);
    let r = 0;
    while (r < 144) {
      e.lens[r++] = 8;
    }
    while (r < 256) {
      e.lens[r++] = 9;
    }
    while (r < 280) {
      e.lens[r++] = 7;
    }
    while (r < 288) {
      e.lens[r++] = 8;
    }
    pn(Rc, e.lens, 0, 288, ma, 0, e.work, {
      bits: 9
    });
    r = 0;
    while (r < 32) {
      e.lens[r++] = 5;
    }
    pn($c, e.lens, 0, 32, ya, 0, e.work, {
      bits: 5
    });
    $o = false;
  }
  e.lencode = ma;
  e.lenbits = 9;
  e.distcode = ya;
  e.distbits = 5;
};
const jc = (e, r, t, n) => {
  let i;
  const a = e.state;
  if (a.window === null) {
    a.wsize = 1 << a.wbits;
    a.wnext = 0;
    a.whave = 0;
    a.window = new Uint8Array(a.wsize);
  }
  if (n >= a.wsize) {
    a.window.set(r.subarray(t - a.wsize, t), 0);
    a.wnext = 0;
    a.whave = a.wsize;
  } else {
    i = a.wsize - a.wnext;
    if (i > n) {
      i = n;
    }
    a.window.set(r.subarray(t - n, t - n + i), a.wnext);
    n -= i;
    if (n) {
      a.window.set(r.subarray(t - n, t), 0);
      a.wnext = n;
      a.whave = a.wsize;
    } else {
      a.wnext += i;
      if (a.wnext === a.wsize) {
        a.wnext = 0;
      }
      if (a.whave < a.wsize) {
        a.whave += i;
      }
    }
  }
  return 0;
};
const X0 = (e, r) => {
  let t;
  let n;
  let i;
  let a;
  let o;
  let s;
  let d;
  let c;
  let l;
  let m;
  let h;
  let v;
  let _;
  let y;
  let g = 0;
  let E;
  let A;
  let I;
  let b;
  let T;
  let R;
  let B;
  let z;
  const N = new Uint8Array(4);
  let S;
  let D;
  const P = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  if (mr(e) || !e.output || !e.input && e.avail_in !== 0) {
    return st;
  }
  t = e.state;
  if (t.mode === kt) {
    t.mode = pa;
  }
  o = e.next_out;
  i = e.output;
  d = e.avail_out;
  a = e.next_in;
  n = e.input;
  s = e.avail_in;
  c = t.hold;
  l = t.bits;
  m = s;
  h = d;
  z = pr;
  e: while (true) {
    switch (t.mode) {
      case ea:
        if (t.wrap === 0) {
          t.mode = pa;
          break;
        }
        while (l < 16) {
          if (s === 0) {
            break e;
          }
          s--;
          c += n[a++] << l;
          l += 8;
        }
        if (t.wrap & 2 && c === 35615) {
          if (t.wbits === 0) {
            t.wbits = 15;
          }
          t.check = 0;
          N[0] = c & 255;
          N[1] = c >>> 8 & 255;
          t.check = Le(t.check, N, 2, 0);
          c = 0;
          l = 0;
          t.mode = uo;
          break;
        }
        if (t.head) {
          t.head.done = false;
        }
        if (!(t.wrap & 1) || (((c & 255) << 8) + (c >> 8)) % 31) {
          e.msg = "incorrect header check";
          t.mode = Te;
          break;
        }
        if ((c & 15) !== lo) {
          e.msg = "unknown compression method";
          t.mode = Te;
          break;
        }
        c >>>= 4;
        l -= 4;
        B = (c & 15) + 8;
        if (t.wbits === 0) {
          t.wbits = B;
        }
        if (B > 15 || B > t.wbits) {
          e.msg = "invalid window size";
          t.mode = Te;
          break;
        }
        t.dmax = 1 << t.wbits;
        t.flags = 0;
        e.adler = t.check = 1;
        t.mode = c & 512 ? yo : kt;
        c = 0;
        l = 0;
        break;
      case uo:
        while (l < 16) {
          if (s === 0) {
            break e;
          }
          s--;
          c += n[a++] << l;
          l += 8;
        }
        t.flags = c;
        if ((t.flags & 255) !== lo) {
          e.msg = "unknown compression method";
          t.mode = Te;
          break;
        }
        if (t.flags & 57344) {
          e.msg = "unknown header flags set";
          t.mode = Te;
          break;
        }
        if (t.head) {
          t.head.text = c >> 8 & 1;
        }
        if (t.flags & 512 && t.wrap & 4) {
          N[0] = c & 255;
          N[1] = c >>> 8 & 255;
          t.check = Le(t.check, N, 2, 0);
        }
        c = 0;
        l = 0;
        t.mode = fo;
      case fo:
        while (l < 32) {
          if (s === 0) {
            break e;
          }
          s--;
          c += n[a++] << l;
          l += 8;
        }
        if (t.head) {
          t.head.time = c;
        }
        if (t.flags & 512 && t.wrap & 4) {
          N[0] = c & 255;
          N[1] = c >>> 8 & 255;
          N[2] = c >>> 16 & 255;
          N[3] = c >>> 24 & 255;
          t.check = Le(t.check, N, 4, 0);
        }
        c = 0;
        l = 0;
        t.mode = ho;
      case ho:
        while (l < 16) {
          if (s === 0) {
            break e;
          }
          s--;
          c += n[a++] << l;
          l += 8;
        }
        if (t.head) {
          t.head.xflags = c & 255;
          t.head.os = c >> 8;
        }
        if (t.flags & 512 && t.wrap & 4) {
          N[0] = c & 255;
          N[1] = c >>> 8 & 255;
          t.check = Le(t.check, N, 2, 0);
        }
        c = 0;
        l = 0;
        t.mode = vo;
      case vo:
        if (t.flags & 1024) {
          while (l < 16) {
            if (s === 0) {
              break e;
            }
            s--;
            c += n[a++] << l;
            l += 8;
          }
          t.length = c;
          if (t.head) {
            t.head.extra_len = c;
          }
          if (t.flags & 512 && t.wrap & 4) {
            N[0] = c & 255;
            N[1] = c >>> 8 & 255;
            t.check = Le(t.check, N, 2, 0);
          }
          c = 0;
          l = 0;
        } else if (t.head) {
          t.head.extra = null;
        }
        t.mode = po;
      case po:
        if (t.flags & 1024 && (v = t.length, v > s && (v = s), v && (t.head && (B = t.head.extra_len - t.length, t.head.extra ||= new Uint8Array(t.head.extra_len), t.head.extra.set(n.subarray(a, a + v), B)), t.flags & 512 && t.wrap & 4 && (t.check = Le(t.check, n, v, a)), s -= v, a += v, t.length -= v), t.length)) {
          break e;
        }
        t.length = 0;
        t.mode = _o;
      case _o:
        if (t.flags & 2048) {
          if (s === 0) {
            break e;
          }
          v = 0;
          do {
            B = n[a + v++];
            if (t.head && B && t.length < 65536) {
              t.head.name += String.fromCharCode(B);
            }
          } while (B && v < s);
          if (t.flags & 512 && t.wrap & 4) {
            t.check = Le(t.check, n, v, a);
          }
          s -= v;
          a += v;
          if (B) {
            break e;
          }
        } else if (t.head) {
          t.head.name = null;
        }
        t.length = 0;
        t.mode = go;
      case go:
        if (t.flags & 4096) {
          if (s === 0) {
            break e;
          }
          v = 0;
          do {
            B = n[a + v++];
            if (t.head && B && t.length < 65536) {
              t.head.comment += String.fromCharCode(B);
            }
          } while (B && v < s);
          if (t.flags & 512 && t.wrap & 4) {
            t.check = Le(t.check, n, v, a);
          }
          s -= v;
          a += v;
          if (B) {
            break e;
          }
        } else if (t.head) {
          t.head.comment = null;
        }
        t.mode = mo;
      case mo:
        if (t.flags & 512) {
          while (l < 16) {
            if (s === 0) {
              break e;
            }
            s--;
            c += n[a++] << l;
            l += 8;
          }
          if (t.wrap & 4 && c !== (t.check & 65535)) {
            e.msg = "header crc mismatch";
            t.mode = Te;
            break;
          }
          c = 0;
          l = 0;
        }
        if (t.head) {
          t.head.hcrc = t.flags >> 9 & 1;
          t.head.done = true;
        }
        e.adler = t.check = 0;
        t.mode = kt;
        break;
      case yo:
        while (l < 32) {
          if (s === 0) {
            break e;
          }
          s--;
          c += n[a++] << l;
          l += 8;
        }
        e.adler = t.check = Ro(c);
        c = 0;
        l = 0;
        t.mode = zi;
      case zi:
        if (t.havedict === 0) {
          e.next_out = o;
          e.avail_out = d;
          e.next_in = a;
          e.avail_in = s;
          t.hold = c;
          t.bits = l;
          return M0;
        }
        e.adler = t.check = 1;
        t.mode = kt;
      case kt:
        if (r === L0 || r === si) {
          break e;
        }
      case pa:
        if (t.last) {
          c >>>= l & 7;
          l -= l & 7;
          t.mode = ga;
          break;
        }
        while (l < 3) {
          if (s === 0) {
            break e;
          }
          s--;
          c += n[a++] << l;
          l += 8;
        }
        t.last = c & 1;
        c >>>= 1;
        l -= 1;
        switch (c & 3) {
          case 0:
            t.mode = wo;
            break;
          case 1:
            G0(t);
            t.mode = oi;
            if (r === si) {
              c >>>= 2;
              l -= 2;
              break e;
            }
            break;
          case 2:
            t.mode = xo;
            break;
          case 3:
            e.msg = "invalid block type";
            t.mode = Te;
        }
        c >>>= 2;
        l -= 2;
        break;
      case wo:
        c >>>= l & 7;
        l -= l & 7;
        while (l < 32) {
          if (s === 0) {
            break e;
          }
          s--;
          c += n[a++] << l;
          l += 8;
        }
        if ((c & 65535) !== (c >>> 16 ^ 65535)) {
          e.msg = "invalid stored block lengths";
          t.mode = Te;
          break;
        }
        t.length = c & 65535;
        c = 0;
        l = 0;
        t.mode = _a;
        if (r === si) {
          break e;
        }
      case _a:
        t.mode = bo;
      case bo:
        v = t.length;
        if (v) {
          if (v > s) {
            v = s;
          }
          if (v > d) {
            v = d;
          }
          if (v === 0) {
            break e;
          }
          i.set(n.subarray(a, a + v), o);
          s -= v;
          a += v;
          d -= v;
          o += v;
          t.length -= v;
          break;
        }
        t.mode = kt;
        break;
      case xo:
        while (l < 14) {
          if (s === 0) {
            break e;
          }
          s--;
          c += n[a++] << l;
          l += 8;
        }
        t.nlen = (c & 31) + 257;
        c >>>= 5;
        l -= 5;
        t.ndist = (c & 31) + 1;
        c >>>= 5;
        l -= 5;
        t.ncode = (c & 15) + 4;
        c >>>= 4;
        l -= 4;
        if (t.nlen > 286 || t.ndist > 30) {
          e.msg = "too many length or distance symbols";
          t.mode = Te;
          break;
        }
        t.have = 0;
        t.mode = ko;
      case ko:
        while (t.have < t.ncode) {
          while (l < 3) {
            if (s === 0) {
              break e;
            }
            s--;
            c += n[a++] << l;
            l += 8;
          }
          t.lens[P[t.have++]] = c & 7;
          c >>>= 3;
          l -= 3;
        }
        while (t.have < 19) {
          t.lens[P[t.have++]] = 0;
        }
        t.lencode = t.lendyn;
        t.lenbits = 7;
        S = {
          bits: t.lenbits
        };
        z = pn(U0, t.lens, 0, 19, t.lencode, 0, t.work, S);
        t.lenbits = S.bits;
        if (z) {
          e.msg = "invalid code lengths set";
          t.mode = Te;
          break;
        }
        t.have = 0;
        t.mode = Eo;
      case Eo:
        while (t.have < t.nlen + t.ndist) {
          g = t.lencode[c & (1 << t.lenbits) - 1];
          E = g >>> 24;
          A = g >>> 16 & 255;
          I = g & 65535;
          while (E > l) {
            if (s === 0) {
              break e;
            }
            s--;
            c += n[a++] << l;
            l += 8;
          }
          if (I < 16) {
            c >>>= E;
            l -= E;
            t.lens[t.have++] = I;
          } else {
            if (I === 16) {
              for (D = E + 2; l < D;) {
                if (s === 0) {
                  break e;
                }
                s--;
                c += n[a++] << l;
                l += 8;
              }
              c >>>= E;
              l -= E;
              if (t.have === 0) {
                e.msg = "invalid bit length repeat";
                t.mode = Te;
                break;
              }
              B = t.lens[t.have - 1];
              v = 3 + (c & 3);
              c >>>= 2;
              l -= 2;
            } else if (I === 17) {
              for (D = E + 3; l < D;) {
                if (s === 0) {
                  break e;
                }
                s--;
                c += n[a++] << l;
                l += 8;
              }
              c >>>= E;
              l -= E;
              B = 0;
              v = 3 + (c & 7);
              c >>>= 3;
              l -= 3;
            } else {
              for (D = E + 7; l < D;) {
                if (s === 0) {
                  break e;
                }
                s--;
                c += n[a++] << l;
                l += 8;
              }
              c >>>= E;
              l -= E;
              B = 0;
              v = 11 + (c & 127);
              c >>>= 7;
              l -= 7;
            }
            if (t.have + v > t.nlen + t.ndist) {
              e.msg = "invalid bit length repeat";
              t.mode = Te;
              break;
            }
            while (v--) {
              t.lens[t.have++] = B;
            }
          }
        }
        if (t.mode === Te) {
          break;
        }
        if (t.lens[256] === 0) {
          e.msg = "invalid code -- missing end-of-block";
          t.mode = Te;
          break;
        }
        t.lenbits = 9;
        S = {
          bits: t.lenbits
        };
        z = pn(Rc, t.lens, 0, t.nlen, t.lencode, 0, t.work, S);
        t.lenbits = S.bits;
        if (z) {
          e.msg = "invalid literal/lengths set";
          t.mode = Te;
          break;
        }
        t.distbits = 6;
        t.distcode = t.distdyn;
        S = {
          bits: t.distbits
        };
        z = pn($c, t.lens, t.nlen, t.ndist, t.distcode, 0, t.work, S);
        t.distbits = S.bits;
        if (z) {
          e.msg = "invalid distances set";
          t.mode = Te;
          break;
        }
        t.mode = oi;
        if (r === si) {
          break e;
        }
      case oi:
        t.mode = ci;
      case ci:
        if (s >= 6 && d >= 258) {
          e.next_out = o;
          e.avail_out = d;
          e.next_in = a;
          e.avail_in = s;
          t.hold = c;
          t.bits = l;
          R0(e, h);
          o = e.next_out;
          i = e.output;
          d = e.avail_out;
          a = e.next_in;
          n = e.input;
          s = e.avail_in;
          c = t.hold;
          l = t.bits;
          if (t.mode === kt) {
            t.back = -1;
          }
          break;
        }
        for (t.back = 0; g = t.lencode[c & (1 << t.lenbits) - 1], E = g >>> 24, A = g >>> 16 & 255, I = g & 65535, E > l;) {
          if (s === 0) {
            break e;
          }
          s--;
          c += n[a++] << l;
          l += 8;
        }
        if (A && !(A & 240)) {
          b = E;
          T = A;
          R = I;
          g = t.lencode[R + ((c & (1 << b + T) - 1) >> b)];
          E = g >>> 24;
          A = g >>> 16 & 255;
          I = g & 65535;
          while (b + E > l) {
            if (s === 0) {
              break e;
            }
            s--;
            c += n[a++] << l;
            l += 8;
          }
          c >>>= b;
          l -= b;
          t.back += b;
        }
        c >>>= E;
        l -= E;
        t.back += E;
        t.length = I;
        if (A === 0) {
          t.mode = Io;
          break;
        }
        if (A & 32) {
          t.back = -1;
          t.mode = kt;
          break;
        }
        if (A & 64) {
          e.msg = "invalid literal/length code";
          t.mode = Te;
          break;
        }
        t.extra = A & 15;
        t.mode = So;
      case So:
        if (t.extra) {
          for (D = t.extra; l < D;) {
            if (s === 0) {
              break e;
            }
            s--;
            c += n[a++] << l;
            l += 8;
          }
          t.length += c & (1 << t.extra) - 1;
          c >>>= t.extra;
          l -= t.extra;
          t.back += t.extra;
        }
        t.was = t.length;
        t.mode = Ao;
      case Ao:
        g = t.distcode[c & (1 << t.distbits) - 1];
        E = g >>> 24;
        A = g >>> 16 & 255;
        I = g & 65535;
        while (E > l) {
          if (s === 0) {
            break e;
          }
          s--;
          c += n[a++] << l;
          l += 8;
        }
        if (!(A & 240)) {
          b = E;
          T = A;
          R = I;
          g = t.distcode[R + ((c & (1 << b + T) - 1) >> b)];
          E = g >>> 24;
          A = g >>> 16 & 255;
          I = g & 65535;
          while (b + E > l) {
            if (s === 0) {
              break e;
            }
            s--;
            c += n[a++] << l;
            l += 8;
          }
          c >>>= b;
          l -= b;
          t.back += b;
        }
        c >>>= E;
        l -= E;
        t.back += E;
        if (A & 64) {
          e.msg = "invalid distance code";
          t.mode = Te;
          break;
        }
        t.offset = I;
        t.extra = A & 15;
        t.mode = Co;
      case Co:
        if (t.extra) {
          for (D = t.extra; l < D;) {
            if (s === 0) {
              break e;
            }
            s--;
            c += n[a++] << l;
            l += 8;
          }
          t.offset += c & (1 << t.extra) - 1;
          c >>>= t.extra;
          l -= t.extra;
          t.back += t.extra;
        }
        if (t.offset > t.dmax) {
          e.msg = "invalid distance too far back";
          t.mode = Te;
          break;
        }
        t.mode = To;
      case To:
        if (d === 0) {
          break e;
        }
        v = h - d;
        if (t.offset > v) {
          v = t.offset - v;
          if (v > t.whave && t.sane) {
            e.msg = "invalid distance too far back";
            t.mode = Te;
            break;
          }
          if (v > t.wnext) {
            v -= t.wnext;
            _ = t.wsize - v;
          } else {
            _ = t.wnext - v;
          }
          if (v > t.length) {
            v = t.length;
          }
          y = t.window;
        } else {
          y = i;
          _ = o - t.offset;
          v = t.length;
        }
        if (v > d) {
          v = d;
        }
        d -= v;
        t.length -= v;
        do {
          i[o++] = y[_++];
        } while (--v);
        if (t.length === 0) {
          t.mode = ci;
        }
        break;
      case Io:
        if (d === 0) {
          break e;
        }
        i[o++] = t.length;
        d--;
        t.mode = ci;
        break;
      case ga:
        if (t.wrap) {
          while (l < 32) {
            if (s === 0) {
              break e;
            }
            s--;
            c |= n[a++] << l;
            l += 8;
          }
          h -= d;
          e.total_out += h;
          t.total += h;
          if (t.wrap & 4 && h) {
            e.adler = t.check = t.flags ? Le(t.check, i, h, o - h) : Nn(t.check, i, h, o - h);
          }
          h = d;
          if (t.wrap & 4 && (t.flags ? c : Ro(c)) !== t.check) {
            e.msg = "incorrect data check";
            t.mode = Te;
            break;
          }
          c = 0;
          l = 0;
        }
        t.mode = Bo;
      case Bo:
        if (t.wrap && t.flags) {
          while (l < 32) {
            if (s === 0) {
              break e;
            }
            s--;
            c += n[a++] << l;
            l += 8;
          }
          if (t.wrap & 4 && c !== (t.total & 4294967295)) {
            e.msg = "incorrect length check";
            t.mode = Te;
            break;
          }
          c = 0;
          l = 0;
        }
        t.mode = Do;
      case Do:
        z = P0;
        break e;
      case Te:
        z = zc;
        break e;
      case Nc:
        return Oc;
      case Fc:
      default:
        return st;
    }
  }
  e.next_out = o;
  e.avail_out = d;
  e.next_in = a;
  e.avail_in = s;
  t.hold = c;
  t.bits = l;
  if (t.wsize || h !== e.avail_out && t.mode < Te && (t.mode < ga || r !== co)) {
    jc(e, e.output, e.next_out, h - e.avail_out);
  }
  m -= e.avail_in;
  h -= e.avail_out;
  e.total_in += m;
  e.total_out += h;
  t.total += h;
  if (t.wrap & 4 && h) {
    e.adler = t.check = t.flags ? Le(t.check, i, h, e.next_out - h) : Nn(t.check, i, h, e.next_out - h);
  }
  e.data_type = t.bits + (t.last ? 64 : 0) + (t.mode === kt ? 128 : 0) + (t.mode === oi || t.mode === _a ? 256 : 0);
  if ((m === 0 && h === 0 || r === co) && z === pr) {
    z = j0;
  }
  return z;
};
const Y0 = e => {
  if (mr(e)) {
    return st;
  }
  let r = e.state;
  r.window &&= null;
  e.state = null;
  return pr;
};
const J0 = (e, r) => {
  if (mr(e)) {
    return st;
  }
  const t = e.state;
  if (t.wrap & 2) {
    t.head = r;
    r.done = false;
    return pr;
  } else {
    return st;
  }
};
const Q0 = (e, r) => {
  const t = r.length;
  let n;
  let i;
  let a;
  if (mr(e) || (n = e.state, n.wrap !== 0 && n.mode !== zi)) {
    return st;
  } else if (n.mode === zi && (i = 1, i = Nn(i, r, t, 0), i !== n.check)) {
    return zc;
  } else {
    a = jc(e, r, t, t);
    if (a) {
      n.mode = Nc;
      return Oc;
    } else {
      n.havedict = 1;
      return pr;
    }
  }
};
var eh = Lc;
var th = Pc;
var rh = Uc;
var nh = K0;
var ih = Mc;
var ah = X0;
var sh = Y0;
var oh = J0;
var ch = Q0;
var lh = "pako inflate (from Nodeca project)";
var At = {
  inflateReset: eh,
  inflateReset2: th,
  inflateResetKeep: rh,
  inflateInit: nh,
  inflateInit2: ih,
  inflate: ah,
  inflateEnd: sh,
  inflateGetHeader: oh,
  inflateSetDictionary: ch,
  inflateInfo: lh
};
function uh() {
  this.text = 0;
  this.time = 0;
  this.xflags = 0;
  this.os = 0;
  this.extra = null;
  this.extra_len = 0;
  this.name = "";
  this.comment = "";
  this.hcrc = 0;
  this.done = false;
}
var fh = uh;
const Zc = Object.prototype.toString;
const {
  Z_NO_FLUSH: dh,
  Z_FINISH: hh,
  Z_OK: Ln,
  Z_STREAM_END: wa,
  Z_NEED_DICT: ba,
  Z_STREAM_ERROR: vh,
  Z_DATA_ERROR: zo,
  Z_MEM_ERROR: ph
} = Gr;
function ei(e) {
  this.options = Qi.assign({
    chunkSize: 65536,
    windowBits: 15,
    to: ""
  }, e || {});
  const r = this.options;
  if (r.raw && r.windowBits >= 0 && r.windowBits < 16) {
    r.windowBits = -r.windowBits;
    if (r.windowBits === 0) {
      r.windowBits = -15;
    }
  }
  if (r.windowBits >= 0 && r.windowBits < 16 && (!e || !e.windowBits)) {
    r.windowBits += 32;
  }
  if (r.windowBits > 15 && r.windowBits < 48) {
    if (!(r.windowBits & 15)) {
      r.windowBits |= 15;
    }
  }
  this.err = 0;
  this.msg = "";
  this.ended = false;
  this.chunks = [];
  this.strm = new Bc();
  this.strm.avail_out = 0;
  let t = At.inflateInit2(this.strm, r.windowBits);
  if (t !== Ln) {
    throw new Error(hr[t]);
  }
  this.header = new fh();
  At.inflateGetHeader(this.strm, this.header);
  if (r.dictionary && (typeof r.dictionary == "string" ? r.dictionary = Un.string2buf(r.dictionary) : Zc.call(r.dictionary) === "[object ArrayBuffer]" && (r.dictionary = new Uint8Array(r.dictionary)), r.raw && (t = At.inflateSetDictionary(this.strm, r.dictionary), t !== Ln))) {
    throw new Error(hr[t]);
  }
}
ei.prototype.push = function (e, r) {
  const t = this.strm;
  const n = this.options.chunkSize;
  const i = this.options.dictionary;
  let a;
  let o;
  let s;
  if (this.ended) {
    return false;
  }
  if (r === ~~r) {
    o = r;
  } else {
    o = r === true ? hh : dh;
  }
  if (Zc.call(e) === "[object ArrayBuffer]") {
    t.input = new Uint8Array(e);
  } else {
    t.input = e;
  }
  t.next_in = 0;
  t.avail_in = t.input.length;
  while (true) {
    if (t.avail_out === 0) {
      t.output = new Uint8Array(n);
      t.next_out = 0;
      t.avail_out = n;
    }
    a = At.inflate(t, o);
    if (a === ba && i) {
      a = At.inflateSetDictionary(t, i);
      if (a === Ln) {
        a = At.inflate(t, o);
      } else if (a === zo) {
        a = ba;
      }
    }
    while (t.avail_in > 0 && a === wa && t.state.wrap > 0 && e[t.next_in] !== 0) {
      At.inflateReset(t);
      a = At.inflate(t, o);
    }
    switch (a) {
      case vh:
      case zo:
      case ba:
      case ph:
        this.onEnd(a);
        this.ended = true;
        return false;
    }
    s = t.avail_out;
    if (t.next_out && (t.avail_out === 0 || a === wa)) {
      if (this.options.to === "string") {
        let d = Un.utf8border(t.output, t.next_out);
        let c = t.next_out - d;
        let l = Un.buf2string(t.output, d);
        t.next_out = c;
        t.avail_out = n - c;
        if (c) {
          t.output.set(t.output.subarray(d, d + c), 0);
        }
        this.onData(l);
      } else {
        this.onData(t.output.length === t.next_out ? t.output : t.output.subarray(0, t.next_out));
      }
    }
    if (a !== Ln || s !== 0) {
      if (a === wa) {
        a = At.inflateEnd(this.strm);
        this.onEnd(a);
        this.ended = true;
        return true;
      }
      if (t.avail_in === 0) {
        break;
      }
    }
  }
  return true;
};
ei.prototype.onData = function (e) {
  this.chunks.push(e);
};
ei.prototype.onEnd = function (e) {
  if (e === Ln) {
    if (this.options.to === "string") {
      this.result = this.chunks.join("");
    } else {
      this.result = Qi.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = e;
  this.msg = this.strm.msg;
};
function ds(e, r) {
  const t = new ei(r);
  t.push(e);
  if (t.err) {
    throw t.msg || hr[t.err];
  }
  return t.result;
}
function _h(e, r) {
  r = r || {};
  r.raw = true;
  return ds(e, r);
}
var gh = ei;
var mh = ds;
var yh = _h;
var wh = ds;
var bh = Gr;
var xh = {
  Inflate: gh,
  inflate: mh,
  inflateRaw: yh,
  ungzip: wh,
  constants: bh
};
const {
  Deflate: bv,
  deflate: kh,
  deflateRaw: xv,
  gzip: kv
} = B0;
const {
  Inflate: Ev,
  inflate: Eh,
  inflateRaw: Sv,
  ungzip: Av
} = xh;
var Sh = kh;
var Ah = Eh;
var Hc = {
  exports: {}
};
(function (e) {
  (function (r, t, n) {
    e.exports = n(r);
    e.exports.default = e.exports;
  })(vu, "UUID", function () {
    function r(p, C, x, F, G, q) {
      for (var X = function (Z, W) {
          var j = Z.toString(16);
          if (j.length < 2) {
            j = "0" + j;
          }
          if (W) {
            j = j.toUpperCase();
          }
          return j;
        }, M = C; M <= x; M++) {
        G[q++] = X(p[M], F);
      }
      return G;
    }
    function t(p, C, x, F, G) {
      for (var q = C; q <= x; q += 2) {
        F[G++] = parseInt(p.substr(q, 2), 16);
      }
    }
    var n = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#".split("");
    var i = [0, 68, 0, 84, 83, 82, 72, 0, 75, 76, 70, 65, 0, 63, 62, 69, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 64, 0, 73, 66, 74, 71, 81, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 77, 0, 78, 67, 0, 0, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 79, 0, 80, 0, 0];
    function a(p, C) {
      if (C % 4 !== 0) {
        throw new Error("z85_encode: invalid input length (multiple of 4 expected)");
      }
      for (var x = "", F = 0, G = 0; F < C;) {
        G = G * 256 + p[F++];
        if (F % 4 === 0) {
          for (var q = 52200625; q >= 1;) {
            var X = Math.floor(G / q) % 85;
            x += n[X];
            q /= 85;
          }
          G = 0;
        }
      }
      return x;
    }
    function o(p, C) {
      var x = p.length;
      if (x % 5 !== 0) {
        throw new Error("z85_decode: invalid input length (multiple of 5 expected)");
      }
      if (typeof C === "undefined") {
        C = new Array(x * 4 / 5);
      }
      for (var F = 0, G = 0, q = 0; F < x;) {
        var X = p.charCodeAt(F++) - 32;
        if (X < 0 || X >= i.length) {
          break;
        }
        q = q * 85 + i[X];
        if (F % 5 === 0) {
          for (var M = 16777216; M >= 1;) {
            C[G++] = Math.trunc(q / M % 256);
            M /= 256;
          }
          q = 0;
        }
      }
      return C;
    }
    function s(p, C) {
      var x = {
        ibits: 8,
        obits: 8,
        obigendian: true
      };
      for (var F in C) {
        if (typeof x[F] !== "undefined") {
          x[F] = C[F];
        }
      }
      for (var G = [], q = 0, X, M, Z = 0, W, j = 0, Y = p.length; Z === 0 && (M = p.charCodeAt(q++)), X = M >> x.ibits - (Z + 8) & 255, Z = (Z + 8) % x.ibits, x.obigendian ? j === 0 ? W = X << x.obits - 8 : W |= X << x.obits - 8 - j : j === 0 ? W = X : W |= X << j, j = (j + 8) % x.obits, j !== 0 || !(G.push(W), q >= Y););
      return G;
    }
    function d(p, C) {
      var x = {
        ibits: 32,
        ibigendian: true
      };
      for (var F in C) {
        if (typeof x[F] !== "undefined") {
          x[F] = C[F];
        }
      }
      var G = "";
      var q = 4294967295;
      if (x.ibits < 32) {
        q = (1 << x.ibits) - 1;
      }
      for (var X = p.length, M = 0; M < X; M++) {
        for (var Z = p[M] & q, W = 0; W < x.ibits; W += 8) {
          if (x.ibigendian) {
            G += String.fromCharCode(Z >> x.ibits - 8 - W & 255);
          } else {
            G += String.fromCharCode(Z >> W & 255);
          }
        }
      }
      return G;
    }
    var c = 8;
    var l = 8;
    var m = 256;
    function h(p, C, x, F, G, q, X, M) {
      return [M, X, q, G, F, x, C, p];
    }
    function v() {
      return h(0, 0, 0, 0, 0, 0, 0, 0);
    }
    function _(p) {
      return p.slice(0);
    }
    function y(p) {
      for (var C = v(), x = 0; x < c; x++) {
        C[x] = Math.floor(p % m);
        p /= m;
      }
      return C;
    }
    function g(p) {
      for (var C = 0, x = c - 1; x >= 0; x--) {
        C *= m;
        C += p[x];
      }
      return Math.floor(C);
    }
    function E(p, C) {
      for (var x = 0, F = 0; F < c; F++) {
        x += p[F] + C[F];
        p[F] = Math.floor(x % m);
        x = Math.floor(x / m);
      }
      return x;
    }
    function A(p, C) {
      for (var x = 0, F = 0; F < c; F++) {
        x += p[F] * C;
        p[F] = Math.floor(x % m);
        x = Math.floor(x / m);
      }
      return x;
    }
    function I(p, C) {
      var x;
      var F;
      var G = new Array(c + c);
      for (x = 0; x < c + c; x++) {
        G[x] = 0;
      }
      var q;
      for (x = 0; x < c; x++) {
        q = 0;
        F = 0;
        for (; F < c; F++) {
          q += p[x] * C[F] + G[x + F];
          G[x + F] = q % m;
          q /= m;
        }
        for (; F < c + c - x; F++) {
          q += G[x + F];
          G[x + F] = q % m;
          q /= m;
        }
      }
      for (x = 0; x < c; x++) {
        p[x] = G[x];
      }
      return G.slice(c, c);
    }
    function b(p, C) {
      for (var x = 0; x < c; x++) {
        p[x] &= C[x];
      }
      return p;
    }
    function T(p, C) {
      for (var x = 0; x < c; x++) {
        p[x] |= C[x];
      }
      return p;
    }
    function R(p, C) {
      var x = v();
      if (C % l !== 0) {
        throw new Error("ui64_rorn: only bit rotations supported with a multiple of digit bits");
      }
      for (var F = Math.floor(C / l), G = 0; G < F; G++) {
        for (var q = c - 1 - 1; q >= 0; q--) {
          x[q + 1] = x[q];
        }
        x[0] = p[0];
        q = 0;
        for (; q < c - 1; q++) {
          p[q] = p[q + 1];
        }
        p[q] = 0;
      }
      return g(x);
    }
    function B(p, C) {
      if (C > c * l) {
        throw new Error("ui64_ror: invalid number of bits to shift");
      }
      var x = new Array(c + c);
      var F;
      for (F = 0; F < c; F++) {
        x[F + c] = p[F];
        x[F] = 0;
      }
      var G = Math.floor(C / l);
      var q = C % l;
      for (F = G; F < c + c - 1; F++) {
        x[F - G] = (x[F] >>> q | x[F + 1] << l - q) & (1 << l) - 1;
      }
      x[c + c - 1 - G] = x[c + c - 1] >>> q & (1 << l) - 1;
      F = c + c - 1 - G + 1;
      for (; F < c + c; F++) {
        x[F] = 0;
      }
      for (F = 0; F < c; F++) {
        p[F] = x[F + c];
      }
      return x.slice(0, c);
    }
    function z(p, C) {
      if (C > c * l) {
        throw new Error("ui64_rol: invalid number of bits to shift");
      }
      var x = new Array(c + c);
      var F;
      for (F = 0; F < c; F++) {
        x[F + c] = 0;
        x[F] = p[F];
      }
      var G = Math.floor(C / l);
      var q = C % l;
      for (F = c - 1 - G; F > 0; F--) {
        x[F + G] = (x[F] << q | x[F - 1] >>> l - q) & (1 << l) - 1;
      }
      x[0 + G] = x[0] << q & (1 << l) - 1;
      F = 0 + G - 1;
      for (; F >= 0; F--) {
        x[F] = 0;
      }
      for (F = 0; F < c; F++) {
        p[F] = x[F];
      }
      return x.slice(c, c);
    }
    function N(p, C) {
      for (var x = 0; x < c; x++) {
        p[x] ^= C[x];
      }
    }
    function S(p, C) {
      var x = (p & 65535) + (C & 65535);
      var F = (p >> 16) + (C >> 16) + (x >> 16);
      return F << 16 | x & 65535;
    }
    function D(p, C) {
      return p << C & 4294967295 | p >>> 32 - C & 4294967295;
    }
    function P(p, C) {
      function x($, L, V, se) {
        if ($ < 20) {
          return L & V | ~L & se;
        } else if ($ < 40) {
          return L ^ V ^ se;
        } else if ($ < 60) {
          return L & V | L & se | V & se;
        } else {
          return L ^ V ^ se;
        }
      }
      function F($) {
        if ($ < 20) {
          return 1518500249;
        } else if ($ < 40) {
          return 1859775393;
        } else if ($ < 60) {
          return -1894007588;
        } else {
          return -899497514;
        }
      }
      p[C >> 5] |= 128 << 24 - C % 32;
      p[(C + 64 >> 9 << 4) + 15] = C;
      for (var G = Array(80), q = 1732584193, X = -271733879, M = -1732584194, Z = 271733878, W = -1009589776, j = 0; j < p.length; j += 16) {
        for (var Y = q, Be = X, dt = M, w = Z, u = W, f = 0; f < 80; f++) {
          if (f < 16) {
            G[f] = p[j + f];
          } else {
            G[f] = D(G[f - 3] ^ G[f - 8] ^ G[f - 14] ^ G[f - 16], 1);
          }
          var k = S(S(D(q, 5), x(f, X, M, Z)), S(S(W, G[f]), F(f)));
          W = Z;
          Z = M;
          M = D(X, 30);
          X = q;
          q = k;
        }
        q = S(q, Y);
        X = S(X, Be);
        M = S(M, dt);
        Z = S(Z, w);
        W = S(W, u);
      }
      return [q, X, M, Z, W];
    }
    function H(p) {
      return d(P(s(p, {
        ibits: 8,
        obits: 32,
        obigendian: true
      }), p.length * 8), {
        ibits: 32,
        ibigendian: true
      });
    }
    function U(p, C) {
      function x(f, k, $, L, V, se) {
        return S(D(S(S(k, f), S(L, se)), V), $);
      }
      function F(f, k, $, L, V, se, ue) {
        return x(k & $ | ~k & L, f, k, V, se, ue);
      }
      function G(f, k, $, L, V, se, ue) {
        return x(k & L | $ & ~L, f, k, V, se, ue);
      }
      function q(f, k, $, L, V, se, ue) {
        return x(k ^ $ ^ L, f, k, V, se, ue);
      }
      function X(f, k, $, L, V, se, ue) {
        return x($ ^ (k | ~L), f, k, V, se, ue);
      }
      p[C >> 5] |= 128 << C % 32;
      p[(C + 64 >>> 9 << 4) + 14] = C;
      for (var M = 1732584193, Z = -271733879, W = -1732584194, j = 271733878, Y = 0; Y < p.length; Y += 16) {
        var Be = M;
        var dt = Z;
        var w = W;
        var u = j;
        M = F(M, Z, W, j, p[Y + 0], 7, -680876936);
        j = F(j, M, Z, W, p[Y + 1], 12, -389564586);
        W = F(W, j, M, Z, p[Y + 2], 17, 606105819);
        Z = F(Z, W, j, M, p[Y + 3], 22, -1044525330);
        M = F(M, Z, W, j, p[Y + 4], 7, -176418897);
        j = F(j, M, Z, W, p[Y + 5], 12, 1200080426);
        W = F(W, j, M, Z, p[Y + 6], 17, -1473231341);
        Z = F(Z, W, j, M, p[Y + 7], 22, -45705983);
        M = F(M, Z, W, j, p[Y + 8], 7, 1770035416);
        j = F(j, M, Z, W, p[Y + 9], 12, -1958414417);
        W = F(W, j, M, Z, p[Y + 10], 17, -42063);
        Z = F(Z, W, j, M, p[Y + 11], 22, -1990404162);
        M = F(M, Z, W, j, p[Y + 12], 7, 1804603682);
        j = F(j, M, Z, W, p[Y + 13], 12, -40341101);
        W = F(W, j, M, Z, p[Y + 14], 17, -1502002290);
        Z = F(Z, W, j, M, p[Y + 15], 22, 1236535329);
        M = G(M, Z, W, j, p[Y + 1], 5, -165796510);
        j = G(j, M, Z, W, p[Y + 6], 9, -1069501632);
        W = G(W, j, M, Z, p[Y + 11], 14, 643717713);
        Z = G(Z, W, j, M, p[Y + 0], 20, -373897302);
        M = G(M, Z, W, j, p[Y + 5], 5, -701558691);
        j = G(j, M, Z, W, p[Y + 10], 9, 38016083);
        W = G(W, j, M, Z, p[Y + 15], 14, -660478335);
        Z = G(Z, W, j, M, p[Y + 4], 20, -405537848);
        M = G(M, Z, W, j, p[Y + 9], 5, 568446438);
        j = G(j, M, Z, W, p[Y + 14], 9, -1019803690);
        W = G(W, j, M, Z, p[Y + 3], 14, -187363961);
        Z = G(Z, W, j, M, p[Y + 8], 20, 1163531501);
        M = G(M, Z, W, j, p[Y + 13], 5, -1444681467);
        j = G(j, M, Z, W, p[Y + 2], 9, -51403784);
        W = G(W, j, M, Z, p[Y + 7], 14, 1735328473);
        Z = G(Z, W, j, M, p[Y + 12], 20, -1926607734);
        M = q(M, Z, W, j, p[Y + 5], 4, -378558);
        j = q(j, M, Z, W, p[Y + 8], 11, -2022574463);
        W = q(W, j, M, Z, p[Y + 11], 16, 1839030562);
        Z = q(Z, W, j, M, p[Y + 14], 23, -35309556);
        M = q(M, Z, W, j, p[Y + 1], 4, -1530992060);
        j = q(j, M, Z, W, p[Y + 4], 11, 1272893353);
        W = q(W, j, M, Z, p[Y + 7], 16, -155497632);
        Z = q(Z, W, j, M, p[Y + 10], 23, -1094730640);
        M = q(M, Z, W, j, p[Y + 13], 4, 681279174);
        j = q(j, M, Z, W, p[Y + 0], 11, -358537222);
        W = q(W, j, M, Z, p[Y + 3], 16, -722521979);
        Z = q(Z, W, j, M, p[Y + 6], 23, 76029189);
        M = q(M, Z, W, j, p[Y + 9], 4, -640364487);
        j = q(j, M, Z, W, p[Y + 12], 11, -421815835);
        W = q(W, j, M, Z, p[Y + 15], 16, 530742520);
        Z = q(Z, W, j, M, p[Y + 2], 23, -995338651);
        M = X(M, Z, W, j, p[Y + 0], 6, -198630844);
        j = X(j, M, Z, W, p[Y + 7], 10, 1126891415);
        W = X(W, j, M, Z, p[Y + 14], 15, -1416354905);
        Z = X(Z, W, j, M, p[Y + 5], 21, -57434055);
        M = X(M, Z, W, j, p[Y + 12], 6, 1700485571);
        j = X(j, M, Z, W, p[Y + 3], 10, -1894986606);
        W = X(W, j, M, Z, p[Y + 10], 15, -1051523);
        Z = X(Z, W, j, M, p[Y + 1], 21, -2054922799);
        M = X(M, Z, W, j, p[Y + 8], 6, 1873313359);
        j = X(j, M, Z, W, p[Y + 15], 10, -30611744);
        W = X(W, j, M, Z, p[Y + 6], 15, -1560198380);
        Z = X(Z, W, j, M, p[Y + 13], 21, 1309151649);
        M = X(M, Z, W, j, p[Y + 4], 6, -145523070);
        j = X(j, M, Z, W, p[Y + 11], 10, -1120210379);
        W = X(W, j, M, Z, p[Y + 2], 15, 718787259);
        Z = X(Z, W, j, M, p[Y + 9], 21, -343485551);
        M = S(M, Be);
        Z = S(Z, dt);
        W = S(W, w);
        j = S(j, u);
      }
      return [M, Z, W, j];
    }
    function K(p) {
      return d(U(s(p, {
        ibits: 8,
        obits: 32,
        obigendian: false
      }), p.length * 8), {
        ibits: 32,
        ibigendian: false
      });
    }
    function Q(p) {
      this.mul = h(88, 81, 244, 45, 76, 149, 127, 45);
      this.inc = h(20, 5, 123, 126, 247, 103, 129, 79);
      this.mask = h(0, 0, 0, 0, 255, 255, 255, 255);
      this.state = _(this.inc);
      this.next();
      b(this.state, this.mask);
      var C;
      if (p !== undefined) {
        p = y(p >>> 0);
      } else if (typeof window == "object" && typeof window.crypto == "object" && typeof window.crypto.getRandomValues == "function") {
        C = new Uint32Array(2);
        window.crypto.getRandomValues(C);
        p = T(y(C[0] >>> 0), B(y(C[1] >>> 0), 32));
      } else if (typeof globalThis == "object" && typeof globalThis.crypto == "object" && typeof globalThis.crypto.getRandomValues == "function") {
        C = new Uint32Array(2);
        globalThis.crypto.getRandomValues(C);
        p = T(y(C[0] >>> 0), B(y(C[1] >>> 0), 32));
      } else {
        p = y(Math.random() * 4294967295 >>> 0);
        T(p, B(y(new Date().getTime()), 32));
      }
      T(this.state, p);
      this.next();
    }
    Q.prototype.next = function () {
      var p = _(this.state);
      I(this.state, this.mul);
      E(this.state, this.inc);
      var C = _(p);
      B(C, 18);
      N(C, p);
      B(C, 27);
      var x = _(p);
      B(x, 59);
      b(C, this.mask);
      var F = g(x);
      var G = _(C);
      z(G, 32 - F);
      B(C, F);
      N(C, G);
      return g(C);
    };
    Q.prototype.reseed = function (p) {
      if (typeof p != "string") {
        throw new Error("UUID: PCG: seed: invalid argument (string expected)");
      }
      for (var C = P(s(p, {
          ibits: 8,
          obits: 32,
          obigendian: true
        }), p.length * 8), x = 0; x < C.length; x++) {
        N(le.state, y(C[x] >>> 0));
      }
    };
    var le = new Q();
    Q.reseed = function (p) {
      le.reseed(p);
    };
    function re(p, C) {
      for (var x = [], F = 0; F < p; F++) {
        x[F] = le.next() % C;
      }
      return x;
    }
    var ne = 0;
    var ae = 0;
    function O() {
      if (arguments.length === 1 && typeof arguments[0] == "string") {
        this.parse.apply(this, arguments);
      } else if (arguments.length >= 1 && typeof arguments[0] == "number") {
        this.make.apply(this, arguments);
      } else {
        if (arguments.length >= 1) {
          throw new Error("UUID: constructor: invalid arguments");
        }
        for (var p = 0; p < 16; p++) {
          this[p] = 0;
        }
      }
    }
    if (typeof Uint8Array !== "undefined") {
      O.prototype = new Uint8Array(16);
    } else if (Ra.Buffer) {
      O.prototype = Ra.Buffer.alloc(16);
    } else {
      O.prototype = new Array(16);
    }
    O.prototype.constructor = O;
    O.prototype.make = function (p) {
      var C;
      var x = this;
      if (p === 1) {
        var F = new Date();
        var G = F.getTime();
        if (G !== ne) {
          ae = 0;
        } else {
          ae++;
        }
        ne = G;
        var q = y(G);
        A(q, 10000);
        E(q, h(1, 178, 29, 210, 19, 129, 64, 0));
        if (ae > 0) {
          E(q, y(ae));
        }
        var X;
        X = R(q, 8);
        x[3] = X & 255;
        X = R(q, 8);
        x[2] = X & 255;
        X = R(q, 8);
        x[1] = X & 255;
        X = R(q, 8);
        x[0] = X & 255;
        X = R(q, 8);
        x[5] = X & 255;
        X = R(q, 8);
        x[4] = X & 255;
        X = R(q, 8);
        x[7] = X & 255;
        X = R(q, 8);
        x[6] = X & 15;
        var M = re(2, 255);
        x[8] = M[0];
        x[9] = M[1];
        var Z = re(6, 255);
        Z[0] |= 1;
        Z[0] |= 2;
        C = 0;
        for (; C < 6; C++) {
          x[10 + C] = Z[C];
        }
      } else if (p === 4) {
        var W = re(16, 255);
        for (C = 0; C < 16; C++) {
          this[C] = W[C];
        }
      } else if (p === 3 || p === 5) {
        var j = "";
        var Y = typeof arguments[1] == "object" && arguments[1] instanceof O ? arguments[1] : new O().parse(arguments[1]);
        for (C = 0; C < 16; C++) {
          j += String.fromCharCode(Y[C]);
        }
        j += arguments[2];
        var Be = p === 3 ? K(j) : H(j);
        for (C = 0; C < 16; C++) {
          x[C] = Be.charCodeAt(C);
        }
      } else {
        throw new Error("UUID: make: invalid version");
      }
      x[6] &= 15;
      x[6] |= p << 4;
      x[8] &= 63;
      x[8] |= 128;
      return x;
    };
    O.prototype.format = function (p) {
      var C;
      var x;
      if (p === "z85") {
        C = a(this, 16);
      } else if (p === "b16") {
        x = Array(32);
        r(this, 0, 15, true, x, 0);
        C = x.join("");
      } else if (p === undefined || p === "std") {
        x = new Array(36);
        r(this, 0, 3, false, x, 0);
        x[8] = "-";
        r(this, 4, 5, false, x, 9);
        x[13] = "-";
        r(this, 6, 7, false, x, 14);
        x[18] = "-";
        r(this, 8, 9, false, x, 19);
        x[23] = "-";
        r(this, 10, 15, false, x, 24);
        C = x.join("");
      }
      return C;
    };
    O.prototype.toString = function (p) {
      return this.format(p);
    };
    O.prototype.toJSON = function () {
      return this.format("std");
    };
    O.prototype.parse = function (p, C) {
      if (typeof p != "string") {
        throw new Error("UUID: parse: invalid argument (type string expected)");
      }
      if (C === "z85") {
        o(p, this);
      } else if (C === "b16") {
        t(p, 0, 35, this, 0);
      } else if (C === undefined || C === "std") {
        var x = {
          nil: "00000000-0000-0000-0000-000000000000",
          "ns:DNS": "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
          "ns:URL": "6ba7b811-9dad-11d1-80b4-00c04fd430c8",
          "ns:OID": "6ba7b812-9dad-11d1-80b4-00c04fd430c8",
          "ns:X500": "6ba7b814-9dad-11d1-80b4-00c04fd430c8"
        };
        if (x[p] !== undefined) {
          p = x[p];
        } else if (!p.match(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)) {
          throw new Error("UUID: parse: invalid string representation (expected \"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\")");
        }
        t(p, 0, 7, this, 0);
        t(p, 9, 12, this, 4);
        t(p, 14, 17, this, 6);
        t(p, 19, 22, this, 8);
        t(p, 24, 35, this, 10);
      }
      return this;
    };
    O.prototype.export = function () {
      for (var p = Array(16), C = 0; C < 16; C++) {
        p[C] = this[C];
      }
      return p;
    };
    O.prototype.import = function (p) {
      if (typeof p != "object" || !(p instanceof Array)) {
        throw new Error("UUID: import: invalid argument (type Array expected)");
      }
      if (p.length !== 16) {
        throw new Error("UUID: import: invalid argument (Array of length 16 expected)");
      }
      for (var C = 0; C < 16; C++) {
        if (typeof p[C] != "number") {
          throw new Error("UUID: import: invalid array element #" + C + " (type Number expected)");
        }
        if (!isFinite(p[C]) || Math.floor(p[C]) !== p[C]) {
          throw new Error("UUID: import: invalid array element #" + C + " (Number with integer value expected)");
        }
        if (p[C] < 0 || p[C] > 255) {
          throw new Error("UUID: import: invalid array element #" + C + " (Number with integer value in range 0...255 expected)");
        }
        this[C] = p[C];
      }
      return this;
    };
    O.prototype.compare = function (p) {
      if (typeof p != "object") {
        throw new Error("UUID: compare: invalid argument (type UUID expected)");
      }
      if (!(p instanceof O)) {
        throw new Error("UUID: compare: invalid argument (type UUID expected)");
      }
      for (var C = 0; C < 16; C++) {
        if (this[C] < p[C]) {
          return -1;
        }
        if (this[C] > p[C]) {
          return 1;
        }
      }
      return 0;
    };
    O.prototype.equal = function (p) {
      return this.compare(p) === 0;
    };
    O.prototype.fold = function (p) {
      if (typeof p === "undefined") {
        throw new Error("UUID: fold: invalid argument (number of fold operations expected)");
      }
      if (p < 1 || p > 4) {
        throw new Error("UUID: fold: invalid argument (1-4 fold operations expected)");
      }
      for (var C = 16 / Math.pow(2, p), x = new Array(C), F = 0; F < C; F++) {
        for (var G = 0, q = 0; F + q < 16; q += C) {
          G ^= this[F + q];
        }
        x[F] = G;
      }
      return x;
    };
    O.PCG = Q;
    return O;
  });
})(Hc);
var Ch = Hc.exports;
const Th = pu(Ch);
var Ih = Object.create;
var hs = Object.defineProperty;
var Bh = Object.getOwnPropertyDescriptor;
var Wc = Object.getOwnPropertyNames;
var Dh = Object.getPrototypeOf;
var Rh = Object.prototype.hasOwnProperty;
var me = (e, r) => function () {
  if (!r) {
    (0, e[Wc(e)[0]])((r = {
      exports: {}
    }).exports, r);
  }
  return r.exports;
};
var vs = (e, r) => {
  for (var t in r) {
    hs(e, t, {
      get: r[t],
      enumerable: true
    });
  }
};
var $h = (e, r, t, n) => {
  if (r && typeof r == "object" || typeof r == "function") {
    for (let i of Wc(r)) {
      if (!Rh.call(e, i) && i !== t) {
        hs(e, i, {
          get: () => r[i],
          enumerable: !(n = Bh(r, i)) || n.enumerable
        });
      }
    }
  }
  return e;
};
var zh = (e, r, t) => {
  t = e != null ? Ih(Dh(e)) : {};
  return $h(r || !e || !e.__esModule ? hs(t, "default", {
    value: e,
    enumerable: true
  }) : t, e);
};
var ps = (e, r, t) => {
  if (!r.has(e)) {
    throw TypeError("Cannot " + t);
  }
};
var ee = (e, r, t) => {
  ps(e, r, "read from private field");
  if (t) {
    return t.call(e);
  } else {
    return r.get(e);
  }
};
var fe = (e, r, t) => {
  if (r.has(e)) {
    throw TypeError("Cannot add the same private member more than once");
  }
  if (r instanceof WeakSet) {
    r.add(e);
  } else {
    r.set(e, t);
  }
};
var ye = (e, r, t, n) => {
  ps(e, r, "write to private field");
  if (n) {
    n.call(e, t);
  } else {
    r.set(e, t);
  }
  return t;
};
var Ka = (e, r, t, n) => ({
  set _(i) {
    ye(e, r, i, t);
  },
  get _() {
    return ee(e, r, n);
  }
});
var he = (e, r, t) => {
  ps(e, r, "access private method");
  return t;
};
var we = me({
  "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/core.js"(e, r) {
    (function (t, n) {
      if (typeof e == "object") {
        r.exports = e = n();
      } else if (typeof define == "function" && define.amd) {
        define([], n);
      } else {
        t.CryptoJS = n();
      }
    })(e, function () {
      var t = t || function (n, i) {
        var a = Object.create || function () {
          function g() {}
          return function (E) {
            var A;
            g.prototype = E;
            A = new g();
            g.prototype = null;
            return A;
          };
        }();
        var o = {};
        var s = o.lib = {};
        var d = s.Base = function () {
          return {
            extend: function (g) {
              var E = a(this);
              if (g) {
                E.mixIn(g);
              }
              if (!E.hasOwnProperty("init") || this.init === E.init) {
                E.init = function () {
                  E.$super.init.apply(this, arguments);
                };
              }
              E.init.prototype = E;
              E.$super = this;
              return E;
            },
            create: function () {
              var g = this.extend();
              g.init.apply(g, arguments);
              return g;
            },
            init: function () {},
            mixIn: function (g) {
              for (var E in g) {
                if (g.hasOwnProperty(E)) {
                  this[E] = g[E];
                }
              }
              if (g.hasOwnProperty("toString")) {
                this.toString = g.toString;
              }
            },
            clone: function () {
              return this.init.prototype.extend(this);
            }
          };
        }();
        var c = s.WordArray = d.extend({
          init: function (g, E) {
            g = this.words = g || [];
            if (E != i) {
              this.sigBytes = E;
            } else {
              this.sigBytes = g.length * 4;
            }
          },
          toString: function (g) {
            return (g || m).stringify(this);
          },
          concat: function (g) {
            var E = this.words;
            var A = g.words;
            var I = this.sigBytes;
            var b = g.sigBytes;
            this.clamp();
            if (I % 4) {
              for (var T = 0; T < b; T++) {
                var R = A[T >>> 2] >>> 24 - T % 4 * 8 & 255;
                E[I + T >>> 2] |= R << 24 - (I + T) % 4 * 8;
              }
            } else {
              for (var T = 0; T < b; T += 4) {
                E[I + T >>> 2] = A[T >>> 2];
              }
            }
            this.sigBytes += b;
            return this;
          },
          clamp: function () {
            var g = this.words;
            var E = this.sigBytes;
            g[E >>> 2] &= 4294967295 << 32 - E % 4 * 8;
            g.length = n.ceil(E / 4);
          },
          clone: function () {
            var g = d.clone.call(this);
            g.words = this.words.slice(0);
            return g;
          },
          random: function (g) {
            for (var E = [], A = function (B) {
                var B = B;
                var z = 987654321;
                var N = 4294967295;
                return function () {
                  z = (z & 65535) * 36969 + (z >> 16) & N;
                  B = (B & 65535) * 18000 + (B >> 16) & N;
                  var S = (z << 16) + B & N;
                  S /= 4294967296;
                  S += 0.5;
                  return S * (n.random() > 0.5 ? 1 : -1);
                };
              }, I = 0, b; I < g; I += 4) {
              var T = A((b || n.random()) * 4294967296);
              b = T() * 987654071;
              E.push(T() * 4294967296 | 0);
            }
            return new c.init(E, g);
          }
        });
        var l = o.enc = {};
        var m = l.Hex = {
          stringify: function (g) {
            for (var E = g.words, A = g.sigBytes, I = [], b = 0; b < A; b++) {
              var T = E[b >>> 2] >>> 24 - b % 4 * 8 & 255;
              I.push((T >>> 4).toString(16));
              I.push((T & 15).toString(16));
            }
            return I.join("");
          },
          parse: function (g) {
            for (var E = g.length, A = [], I = 0; I < E; I += 2) {
              A[I >>> 3] |= parseInt(g.substr(I, 2), 16) << 24 - I % 8 * 4;
            }
            return new c.init(A, E / 2);
          }
        };
        var h = l.Latin1 = {
          stringify: function (g) {
            for (var E = g.words, A = g.sigBytes, I = [], b = 0; b < A; b++) {
              var T = E[b >>> 2] >>> 24 - b % 4 * 8 & 255;
              I.push(String.fromCharCode(T));
            }
            return I.join("");
          },
          parse: function (g) {
            for (var E = g.length, A = [], I = 0; I < E; I++) {
              A[I >>> 2] |= (g.charCodeAt(I) & 255) << 24 - I % 4 * 8;
            }
            return new c.init(A, E);
          }
        };
        var v = l.Utf8 = {
          stringify: function (g) {
            try {
              return decodeURIComponent(escape(h.stringify(g)));
            } catch {
              throw new Error("Malformed UTF-8 data");
            }
          },
          parse: function (g) {
            return h.parse(unescape(encodeURIComponent(g)));
          }
        };
        var _ = s.BufferedBlockAlgorithm = d.extend({
          reset: function () {
            this._data = new c.init();
            this._nDataBytes = 0;
          },
          _append: function (g) {
            if (typeof g == "string") {
              g = v.parse(g);
            }
            this._data.concat(g);
            this._nDataBytes += g.sigBytes;
          },
          _process: function (g) {
            var E = this._data;
            var A = E.words;
            var I = E.sigBytes;
            var b = this.blockSize;
            var T = b * 4;
            var R = I / T;
            if (g) {
              R = n.ceil(R);
            } else {
              R = n.max((R | 0) - this._minBufferSize, 0);
            }
            var B = R * b;
            var z = n.min(B * 4, I);
            if (B) {
              for (var N = 0; N < B; N += b) {
                this._doProcessBlock(A, N);
              }
              var S = A.splice(0, B);
              E.sigBytes -= z;
            }
            return new c.init(S, z);
          },
          clone: function () {
            var g = d.clone.call(this);
            g._data = this._data.clone();
            return g;
          },
          _minBufferSize: 0
        });
        s.Hasher = _.extend({
          cfg: d.extend(),
          init: function (g) {
            this.cfg = this.cfg.extend(g);
            this.reset();
          },
          reset: function () {
            _.reset.call(this);
            this._doReset();
          },
          update: function (g) {
            this._append(g);
            this._process();
            return this;
          },
          finalize: function (g) {
            if (g) {
              this._append(g);
            }
            var E = this._doFinalize();
            return E;
          },
          blockSize: 16,
          _createHelper: function (g) {
            return function (E, A) {
              return new g.init(A).finalize(E);
            };
          },
          _createHmacHelper: function (g) {
            return function (E, A) {
              return new y.HMAC.init(g, A).finalize(E);
            };
          }
        });
        var y = o.algo = {};
        return o;
      }(Math);
      return t;
    });
  }
});
var ta = me({
  "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/x64-core.js"(e, r) {
    (function (t, n) {
      if (typeof e == "object") {
        r.exports = e = n(we());
      } else if (typeof define == "function" && define.amd) {
        define(["./core"], n);
      } else {
        n(t.CryptoJS);
      }
    })(e, function (t) {
      (function (n) {
        var i = t;
        var a = i.lib;
        var o = a.Base;
        var s = a.WordArray;
        var d = i.x64 = {};
        d.Word = o.extend({
          init: function (c, l) {
            this.high = c;
            this.low = l;
          }
        });
        d.WordArray = o.extend({
          init: function (c, l) {
            c = this.words = c || [];
            if (l != n) {
              this.sigBytes = l;
            } else {
              this.sigBytes = c.length * 8;
            }
          },
          toX32: function () {
            for (var c = this.words, l = c.length, m = [], h = 0; h < l; h++) {
              var v = c[h];
              m.push(v.high);
              m.push(v.low);
            }
            return s.create(m, this.sigBytes);
          },
          clone: function () {
            for (var c = o.clone.call(this), l = c.words = this.words.slice(0), m = l.length, h = 0; h < m; h++) {
              l[h] = l[h].clone();
            }
            return c;
          }
        });
      })();
      return t;
    });
  }
});
var Oh = me({
  "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/lib-typedarrays.js"(e, r) {
    (function (t, n) {
      if (typeof e == "object") {
        r.exports = e = n(we());
      } else if (typeof define == "function" && define.amd) {
        define(["./core"], n);
      } else {
        n(t.CryptoJS);
      }
    })(e, function (t) {
      (function () {
        if (typeof ArrayBuffer == "function") {
          var n = t;
          var i = n.lib;
          var a = i.WordArray;
          var o = a.init;
          var s = a.init = function (d) {
            if (d instanceof ArrayBuffer) {
              d = new Uint8Array(d);
            }
            if (d instanceof Int8Array || typeof Uint8ClampedArray !== "undefined" && d instanceof Uint8ClampedArray || d instanceof Int16Array || d instanceof Uint16Array || d instanceof Int32Array || d instanceof Uint32Array || d instanceof Float32Array || d instanceof Float64Array) {
              d = new Uint8Array(d.buffer, d.byteOffset, d.byteLength);
            }
            if (d instanceof Uint8Array) {
              for (var c = d.byteLength, l = [], m = 0; m < c; m++) {
                l[m >>> 2] |= d[m] << 24 - m % 4 * 8;
              }
              o.call(this, l, c);
            } else {
              o.apply(this, arguments);
            }
          };
          s.prototype = a;
        }
      })();
      return t.lib.WordArray;
    });
  }
});
var Nh = me({
  "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/enc-utf16.js"(e, r) {
    (function (t, n) {
      if (typeof e == "object") {
        r.exports = e = n(we());
      } else if (typeof define == "function" && define.amd) {
        define(["./core"], n);
      } else {
        n(t.CryptoJS);
      }
    })(e, function (t) {
      (function () {
        var n = t;
        var i = n.lib;
        var a = i.WordArray;
        var o = n.enc;
        o.Utf16 = o.Utf16BE = {
          stringify: function (d) {
            for (var c = d.words, l = d.sigBytes, m = [], h = 0; h < l; h += 2) {
              var v = c[h >>> 2] >>> 16 - h % 4 * 8 & 65535;
              m.push(String.fromCharCode(v));
            }
            return m.join("");
          },
          parse: function (d) {
            for (var c = d.length, l = [], m = 0; m < c; m++) {
              l[m >>> 1] |= d.charCodeAt(m) << 16 - m % 2 * 16;
            }
            return a.create(l, c * 2);
          }
        };
        o.Utf16LE = {
          stringify: function (d) {
            for (var c = d.words, l = d.sigBytes, m = [], h = 0; h < l; h += 2) {
              var v = s(c[h >>> 2] >>> 16 - h % 4 * 8 & 65535);
              m.push(String.fromCharCode(v));
            }
            return m.join("");
          },
          parse: function (d) {
            for (var c = d.length, l = [], m = 0; m < c; m++) {
              l[m >>> 1] |= s(d.charCodeAt(m) << 16 - m % 2 * 16);
            }
            return a.create(l, c * 2);
          }
        };
        function s(d) {
          return d << 8 & 4278255360 | d >>> 8 & 16711935;
        }
      })();
      return t.enc.Utf16;
    });
  }
});
var Jr = me({
  "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/enc-base64.js"(e, r) {
    (function (t, n) {
      if (typeof e == "object") {
        r.exports = e = n(we());
      } else if (typeof define == "function" && define.amd) {
        define(["./core"], n);
      } else {
        n(t.CryptoJS);
      }
    })(e, function (t) {
      (function () {
        var n = t;
        var i = n.lib;
        var a = i.WordArray;
        var o = n.enc;
        o.Base64 = {
          stringify: function (d) {
            var c = d.words;
            var l = d.sigBytes;
            var m = this._map;
            d.clamp();
            for (var h = [], v = 0; v < l; v += 3) {
              for (var _ = c[v >>> 2] >>> 24 - v % 4 * 8 & 255, y = c[v + 1 >>> 2] >>> 24 - (v + 1) % 4 * 8 & 255, g = c[v + 2 >>> 2] >>> 24 - (v + 2) % 4 * 8 & 255, E = _ << 16 | y << 8 | g, A = 0; A < 4 && v + A * 0.75 < l; A++) {
                h.push(m.charAt(E >>> (3 - A) * 6 & 63));
              }
            }
            var I = m.charAt(64);
            if (I) {
              while (h.length % 4) {
                h.push(I);
              }
            }
            return h.join("");
          },
          parse: function (d) {
            var c = d.length;
            var l = this._map;
            var m = this._reverseMap;
            if (!m) {
              m = this._reverseMap = [];
              for (var h = 0; h < l.length; h++) {
                m[l.charCodeAt(h)] = h;
              }
            }
            var v = l.charAt(64);
            if (v) {
              var _ = d.indexOf(v);
              if (_ !== -1) {
                c = _;
              }
            }
            return s(d, c, m);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function s(d, c, l) {
          for (var m = [], h = 0, v = 0; v < c; v++) {
            if (v % 4) {
              var _ = l[d.charCodeAt(v - 1)] << v % 4 * 2;
              var y = l[d.charCodeAt(v)] >>> 6 - v % 4 * 2;
              m[h >>> 2] |= (_ | y) << 24 - h % 4 * 8;
              h++;
            }
          }
          return a.create(m, h);
        }
      })();
      return t.enc.Base64;
    });
  }
});
var Qr = me({
  "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/md5.js"(e, r) {
    (function (t, n) {
      if (typeof e == "object") {
        r.exports = e = n(we());
      } else if (typeof define == "function" && define.amd) {
        define(["./core"], n);
      } else {
        n(t.CryptoJS);
      }
    })(e, function (t) {
      (function (n) {
        var i = t;
        var a = i.lib;
        var o = a.WordArray;
        var s = a.Hasher;
        var d = i.algo;
        var c = [];
        (function () {
          for (var y = 0; y < 64; y++) {
            c[y] = n.abs(n.sin(y + 1)) * 4294967296 | 0;
          }
        })();
        var l = d.MD5 = s.extend({
          _doReset: function () {
            this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878]);
          },
          _doProcessBlock: function (y, g) {
            for (var E = 0; E < 16; E++) {
              var A = g + E;
              var I = y[A];
              y[A] = (I << 8 | I >>> 24) & 16711935 | (I << 24 | I >>> 8) & 4278255360;
            }
            var b = this._hash.words;
            var T = y[g + 0];
            var R = y[g + 1];
            var B = y[g + 2];
            var z = y[g + 3];
            var N = y[g + 4];
            var S = y[g + 5];
            var D = y[g + 6];
            var P = y[g + 7];
            var H = y[g + 8];
            var U = y[g + 9];
            var K = y[g + 10];
            var Q = y[g + 11];
            var le = y[g + 12];
            var re = y[g + 13];
            var ne = y[g + 14];
            var ae = y[g + 15];
            var O = b[0];
            var p = b[1];
            var C = b[2];
            var x = b[3];
            O = m(O, p, C, x, T, 7, c[0]);
            x = m(x, O, p, C, R, 12, c[1]);
            C = m(C, x, O, p, B, 17, c[2]);
            p = m(p, C, x, O, z, 22, c[3]);
            O = m(O, p, C, x, N, 7, c[4]);
            x = m(x, O, p, C, S, 12, c[5]);
            C = m(C, x, O, p, D, 17, c[6]);
            p = m(p, C, x, O, P, 22, c[7]);
            O = m(O, p, C, x, H, 7, c[8]);
            x = m(x, O, p, C, U, 12, c[9]);
            C = m(C, x, O, p, K, 17, c[10]);
            p = m(p, C, x, O, Q, 22, c[11]);
            O = m(O, p, C, x, le, 7, c[12]);
            x = m(x, O, p, C, re, 12, c[13]);
            C = m(C, x, O, p, ne, 17, c[14]);
            p = m(p, C, x, O, ae, 22, c[15]);
            O = h(O, p, C, x, R, 5, c[16]);
            x = h(x, O, p, C, D, 9, c[17]);
            C = h(C, x, O, p, Q, 14, c[18]);
            p = h(p, C, x, O, T, 20, c[19]);
            O = h(O, p, C, x, S, 5, c[20]);
            x = h(x, O, p, C, K, 9, c[21]);
            C = h(C, x, O, p, ae, 14, c[22]);
            p = h(p, C, x, O, N, 20, c[23]);
            O = h(O, p, C, x, U, 5, c[24]);
            x = h(x, O, p, C, ne, 9, c[25]);
            C = h(C, x, O, p, z, 14, c[26]);
            p = h(p, C, x, O, H, 20, c[27]);
            O = h(O, p, C, x, re, 5, c[28]);
            x = h(x, O, p, C, B, 9, c[29]);
            C = h(C, x, O, p, P, 14, c[30]);
            p = h(p, C, x, O, le, 20, c[31]);
            O = v(O, p, C, x, S, 4, c[32]);
            x = v(x, O, p, C, H, 11, c[33]);
            C = v(C, x, O, p, Q, 16, c[34]);
            p = v(p, C, x, O, ne, 23, c[35]);
            O = v(O, p, C, x, R, 4, c[36]);
            x = v(x, O, p, C, N, 11, c[37]);
            C = v(C, x, O, p, P, 16, c[38]);
            p = v(p, C, x, O, K, 23, c[39]);
            O = v(O, p, C, x, re, 4, c[40]);
            x = v(x, O, p, C, T, 11, c[41]);
            C = v(C, x, O, p, z, 16, c[42]);
            p = v(p, C, x, O, D, 23, c[43]);
            O = v(O, p, C, x, U, 4, c[44]);
            x = v(x, O, p, C, le, 11, c[45]);
            C = v(C, x, O, p, ae, 16, c[46]);
            p = v(p, C, x, O, B, 23, c[47]);
            O = _(O, p, C, x, T, 6, c[48]);
            x = _(x, O, p, C, P, 10, c[49]);
            C = _(C, x, O, p, ne, 15, c[50]);
            p = _(p, C, x, O, S, 21, c[51]);
            O = _(O, p, C, x, le, 6, c[52]);
            x = _(x, O, p, C, z, 10, c[53]);
            C = _(C, x, O, p, K, 15, c[54]);
            p = _(p, C, x, O, R, 21, c[55]);
            O = _(O, p, C, x, H, 6, c[56]);
            x = _(x, O, p, C, ae, 10, c[57]);
            C = _(C, x, O, p, D, 15, c[58]);
            p = _(p, C, x, O, re, 21, c[59]);
            O = _(O, p, C, x, N, 6, c[60]);
            x = _(x, O, p, C, Q, 10, c[61]);
            C = _(C, x, O, p, B, 15, c[62]);
            p = _(p, C, x, O, U, 21, c[63]);
            b[0] = b[0] + O | 0;
            b[1] = b[1] + p | 0;
            b[2] = b[2] + C | 0;
            b[3] = b[3] + x | 0;
          },
          _doFinalize: function () {
            var y = this._data;
            var g = y.words;
            var E = this._nDataBytes * 8;
            var A = y.sigBytes * 8;
            g[A >>> 5] |= 128 << 24 - A % 32;
            var I = n.floor(E / 4294967296);
            var b = E;
            g[(A + 64 >>> 9 << 4) + 15] = (I << 8 | I >>> 24) & 16711935 | (I << 24 | I >>> 8) & 4278255360;
            g[(A + 64 >>> 9 << 4) + 14] = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360;
            y.sigBytes = (g.length + 1) * 4;
            this._process();
            for (var T = this._hash, R = T.words, B = 0; B < 4; B++) {
              var z = R[B];
              R[B] = (z << 8 | z >>> 24) & 16711935 | (z << 24 | z >>> 8) & 4278255360;
            }
            return T;
          },
          clone: function () {
            var y = s.clone.call(this);
            y._hash = this._hash.clone();
            return y;
          }
        });
        function m(y, g, E, A, I, b, T) {
          var R = y + (g & E | ~g & A) + I + T;
          return (R << b | R >>> 32 - b) + g;
        }
        function h(y, g, E, A, I, b, T) {
          var R = y + (g & A | E & ~A) + I + T;
          return (R << b | R >>> 32 - b) + g;
        }
        function v(y, g, E, A, I, b, T) {
          var R = y + (g ^ E ^ A) + I + T;
          return (R << b | R >>> 32 - b) + g;
        }
        function _(y, g, E, A, I, b, T) {
          var R = y + (E ^ (g | ~A)) + I + T;
          return (R << b | R >>> 32 - b) + g;
        }
        i.MD5 = s._createHelper(l);
        i.HmacMD5 = s._createHmacHelper(l);
      })(Math);
      return t.MD5;
    });
  }
});
var _s = me({
  "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha1.js"(e, r) {
    (function (t, n) {
      if (typeof e == "object") {
        r.exports = e = n(we());
      } else if (typeof define == "function" && define.amd) {
        define(["./core"], n);
      } else {
        n(t.CryptoJS);
      }
    })(e, function (t) {
      (function () {
        var n = t;
        var i = n.lib;
        var a = i.WordArray;
        var o = i.Hasher;
        var s = n.algo;
        var d = [];
        var c = s.SHA1 = o.extend({
          _doReset: function () {
            this._hash = new a.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function (l, m) {
            for (var h = this._hash.words, v = h[0], _ = h[1], y = h[2], g = h[3], E = h[4], A = 0; A < 80; A++) {
              if (A < 16) {
                d[A] = l[m + A] | 0;
              } else {
                var I = d[A - 3] ^ d[A - 8] ^ d[A - 14] ^ d[A - 16];
                d[A] = I << 1 | I >>> 31;
              }
              var b = (v << 5 | v >>> 27) + E + d[A];
              if (A < 20) {
                b += (_ & y | ~_ & g) + 1518500249;
              } else if (A < 40) {
                b += (_ ^ y ^ g) + 1859775393;
              } else if (A < 60) {
                b += (_ & y | _ & g | y & g) - 1894007588;
              } else {
                b += (_ ^ y ^ g) - 899497514;
              }
              E = g;
              g = y;
              y = _ << 30 | _ >>> 2;
              _ = v;
              v = b;
            }
            h[0] = h[0] + v | 0;
            h[1] = h[1] + _ | 0;
            h[2] = h[2] + y | 0;
            h[3] = h[3] + g | 0;
            h[4] = h[4] + E | 0;
          },
          _doFinalize: function () {
            var l = this._data;
            var m = l.words;
            var h = this._nDataBytes * 8;
            var v = l.sigBytes * 8;
            m[v >>> 5] |= 128 << 24 - v % 32;
            m[(v + 64 >>> 9 << 4) + 14] = Math.floor(h / 4294967296);
            m[(v + 64 >>> 9 << 4) + 15] = h;
            l.sigBytes = m.length * 4;
            this._process();
            return this._hash;
          },
          clone: function () {
            var l = o.clone.call(this);
            l._hash = this._hash.clone();
            return l;
          }
        });
        n.SHA1 = o._createHelper(c);
        n.HmacSHA1 = o._createHmacHelper(c);
      })();
      return t.SHA1;
    });
  }
});
var Vc = me({
  "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha256.js"(e, r) {
    (function (t, n) {
      if (typeof e == "object") {
        r.exports = e = n(we());
      } else if (typeof define == "function" && define.amd) {
        define(["./core"], n);
      } else {
        n(t.CryptoJS);
      }
    })(e, function (t) {
      (function (n) {
        var i = t;
        var a = i.lib;
        var o = a.WordArray;
        var s = a.Hasher;
        var d = i.algo;
        var c = [];
        var l = [];
        (function () {
          function v(E) {
            for (var A = n.sqrt(E), I = 2; I <= A; I++) {
              if (!(E % I)) {
                return false;
              }
            }
            return true;
          }
          function _(E) {
            return (E - (E | 0)) * 4294967296 | 0;
          }
          for (var y = 2, g = 0; g < 64;) {
            if (v(y)) {
              if (g < 8) {
                c[g] = _(n.pow(y, 1 / 2));
              }
              l[g] = _(n.pow(y, 1 / 3));
              g++;
            }
            y++;
          }
        })();
        var m = [];
        var h = d.SHA256 = s.extend({
          _doReset: function () {
            this._hash = new o.init(c.slice(0));
          },
          _doProcessBlock: function (v, _) {
            for (var y = this._hash.words, g = y[0], E = y[1], A = y[2], I = y[3], b = y[4], T = y[5], R = y[6], B = y[7], z = 0; z < 64; z++) {
              if (z < 16) {
                m[z] = v[_ + z] | 0;
              } else {
                var N = m[z - 15];
                var S = (N << 25 | N >>> 7) ^ (N << 14 | N >>> 18) ^ N >>> 3;
                var D = m[z - 2];
                var P = (D << 15 | D >>> 17) ^ (D << 13 | D >>> 19) ^ D >>> 10;
                m[z] = S + m[z - 7] + P + m[z - 16];
              }
              var H = b & T ^ ~b & R;
              var U = g & E ^ g & A ^ E & A;
              var K = (g << 30 | g >>> 2) ^ (g << 19 | g >>> 13) ^ (g << 10 | g >>> 22);
              var Q = (b << 26 | b >>> 6) ^ (b << 21 | b >>> 11) ^ (b << 7 | b >>> 25);
              var le = B + Q + H + l[z] + m[z];
              var re = K + U;
              B = R;
              R = T;
              T = b;
              b = I + le | 0;
              I = A;
              A = E;
              E = g;
              g = le + re | 0;
            }
            y[0] = y[0] + g | 0;
            y[1] = y[1] + E | 0;
            y[2] = y[2] + A | 0;
            y[3] = y[3] + I | 0;
            y[4] = y[4] + b | 0;
            y[5] = y[5] + T | 0;
            y[6] = y[6] + R | 0;
            y[7] = y[7] + B | 0;
          },
          _doFinalize: function () {
            var v = this._data;
            var _ = v.words;
            var y = this._nDataBytes * 8;
            var g = v.sigBytes * 8;
            _[g >>> 5] |= 128 << 24 - g % 32;
            _[(g + 64 >>> 9 << 4) + 14] = n.floor(y / 4294967296);
            _[(g + 64 >>> 9 << 4) + 15] = y;
            v.sigBytes = _.length * 4;
            this._process();
            return this._hash;
          },
          clone: function () {
            var v = s.clone.call(this);
            v._hash = this._hash.clone();
            return v;
          }
        });
        i.SHA256 = s._createHelper(h);
        i.HmacSHA256 = s._createHmacHelper(h);
      })(Math);
      return t.SHA256;
    });
  }
});
var Fh = me({
  "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha224.js"(e, r) {
    (function (t, n, i) {
      if (typeof e == "object") {
        r.exports = e = n(we(), Vc());
      } else if (typeof define == "function" && define.amd) {
        define(["./core", "./sha256"], n);
      } else {
        n(t.CryptoJS);
      }
    })(e, function (t) {
      (function () {
        var n = t;
        var i = n.lib;
        var a = i.WordArray;
        var o = n.algo;
        var s = o.SHA256;
        var d = o.SHA224 = s.extend({
          _doReset: function () {
            this._hash = new a.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
          },
          _doFinalize: function () {
            var c = s._doFinalize.call(this);
            c.sigBytes -= 4;
            return c;
          }
        });
        n.SHA224 = s._createHelper(d);
        n.HmacSHA224 = s._createHmacHelper(d);
      })();
      return t.SHA224;
    });
  }
});
var qc = me({
  "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha512.js"(e, r) {
    (function (t, n, i) {
      if (typeof e == "object") {
        r.exports = e = n(we(), ta());
      } else if (typeof define == "function" && define.amd) {
        define(["./core", "./x64-core"], n);
      } else {
        n(t.CryptoJS);
      }
    })(e, function (t) {
      (function () {
        var n = t;
        var i = n.lib;
        var a = i.Hasher;
        var o = n.x64;
        var s = o.Word;
        var d = o.WordArray;
        var c = n.algo;
        function l() {
          return s.create.apply(s, arguments);
        }
        var m = [l(1116352408, 3609767458), l(1899447441, 602891725), l(3049323471, 3964484399), l(3921009573, 2173295548), l(961987163, 4081628472), l(1508970993, 3053834265), l(2453635748, 2937671579), l(2870763221, 3664609560), l(3624381080, 2734883394), l(310598401, 1164996542), l(607225278, 1323610764), l(1426881987, 3590304994), l(1925078388, 4068182383), l(2162078206, 991336113), l(2614888103, 633803317), l(3248222580, 3479774868), l(3835390401, 2666613458), l(4022224774, 944711139), l(264347078, 2341262773), l(604807628, 2007800933), l(770255983, 1495990901), l(1249150122, 1856431235), l(1555081692, 3175218132), l(1996064986, 2198950837), l(2554220882, 3999719339), l(2821834349, 766784016), l(2952996808, 2566594879), l(3210313671, 3203337956), l(3336571891, 1034457026), l(3584528711, 2466948901), l(113926993, 3758326383), l(338241895, 168717936), l(666307205, 1188179964), l(773529912, 1546045734), l(1294757372, 1522805485), l(1396182291, 2643833823), l(1695183700, 2343527390), l(1986661051, 1014477480), l(2177026350, 1206759142), l(2456956037, 344077627), l(2730485921, 1290863460), l(2820302411, 3158454273), l(3259730800, 3505952657), l(3345764771, 106217008), l(3516065817, 3606008344), l(3600352804, 1432725776), l(4094571909, 1467031594), l(275423344, 851169720), l(430227734, 3100823752), l(506948616, 1363258195), l(659060556, 3750685593), l(883997877, 3785050280), l(958139571, 3318307427), l(1322822218, 3812723403), l(1537002063, 2003034995), l(1747873779, 3602036899), l(1955562222, 1575990012), l(2024104815, 1125592928), l(2227730452, 2716904306), l(2361852424, 442776044), l(2428436474, 593698344), l(2756734187, 3733110249), l(3204031479, 2999351573), l(3329325298, 3815920427), l(3391569614, 3928383900), l(3515267271, 566280711), l(3940187606, 3454069534), l(4118630271, 4000239992), l(116418474, 1914138554), l(174292421, 2731055270), l(289380356, 3203993006), l(460393269, 320620315), l(685471733, 587496836), l(852142971, 1086792851), l(1017036298, 365543100), l(1126000580, 2618297676), l(1288033470, 3409855158), l(1501505948, 4234509866), l(1607167915, 987167468), l(1816402316, 1246189591)];
        var h = [];
        (function () {
          for (var _ = 0; _ < 80; _++) {
            h[_] = l();
          }
        })();
        var v = c.SHA512 = a.extend({
          _doReset: function () {
            this._hash = new d.init([new s.init(1779033703, 4089235720), new s.init(3144134277, 2227873595), new s.init(1013904242, 4271175723), new s.init(2773480762, 1595750129), new s.init(1359893119, 2917565137), new s.init(2600822924, 725511199), new s.init(528734635, 4215389547), new s.init(1541459225, 327033209)]);
          },
          _doProcessBlock: function (_, y) {
            for (var g = this._hash.words, E = g[0], A = g[1], I = g[2], b = g[3], T = g[4], R = g[5], B = g[6], z = g[7], N = E.high, S = E.low, D = A.high, P = A.low, H = I.high, U = I.low, K = b.high, Q = b.low, le = T.high, re = T.low, ne = R.high, ae = R.low, O = B.high, p = B.low, C = z.high, x = z.low, F = N, G = S, q = D, X = P, M = H, Z = U, W = K, j = Q, Y = le, Be = re, dt = ne, w = ae, u = O, f = p, k = C, $ = x, L = 0; L < 80; L++) {
              var V = h[L];
              if (L < 16) {
                var se = V.high = _[y + L * 2] | 0;
                var ue = V.low = _[y + L * 2 + 1] | 0;
              } else {
                var Ce = h[L - 15];
                var De = Ce.high;
                var Ee = Ce.low;
                var wr = (De >>> 1 | Ee << 31) ^ (De >>> 8 | Ee << 24) ^ De >>> 7;
                var tn = (Ee >>> 1 | De << 31) ^ (Ee >>> 8 | De << 24) ^ (Ee >>> 7 | De << 25);
                var rn = h[L - 2];
                var br = rn.high;
                var nn = rn.low;
                var kl = (br >>> 19 | nn << 13) ^ (br << 3 | nn >>> 29) ^ br >>> 6;
                var Bs = (nn >>> 19 | br << 13) ^ (nn << 3 | br >>> 29) ^ (nn >>> 6 | br << 26);
                var Ds = h[L - 7];
                var El = Ds.high;
                var Sl = Ds.low;
                var Rs = h[L - 16];
                var Al = Rs.high;
                var $s = Rs.low;
                var ue = tn + Sl;
                var se = wr + El + (ue >>> 0 < tn >>> 0 ? 1 : 0);
                var ue = ue + Bs;
                var se = se + kl + (ue >>> 0 < Bs >>> 0 ? 1 : 0);
                var ue = ue + $s;
                var se = se + Al + (ue >>> 0 < $s >>> 0 ? 1 : 0);
                V.high = se;
                V.low = ue;
              }
              var Cl = Y & dt ^ ~Y & u;
              var zs = Be & w ^ ~Be & f;
              var Tl = F & q ^ F & M ^ q & M;
              var Il = G & X ^ G & Z ^ X & Z;
              var Bl = (F >>> 28 | G << 4) ^ (F << 30 | G >>> 2) ^ (F << 25 | G >>> 7);
              var Os = (G >>> 28 | F << 4) ^ (G << 30 | F >>> 2) ^ (G << 25 | F >>> 7);
              var Dl = (Y >>> 14 | Be << 18) ^ (Y >>> 18 | Be << 14) ^ (Y << 23 | Be >>> 9);
              var Rl = (Be >>> 14 | Y << 18) ^ (Be >>> 18 | Y << 14) ^ (Be << 23 | Y >>> 9);
              var Ns = m[L];
              var $l = Ns.high;
              var Fs = Ns.low;
              var Ye = $ + Rl;
              var Ot = k + Dl + (Ye >>> 0 < $ >>> 0 ? 1 : 0);
              var Ye = Ye + zs;
              var Ot = Ot + Cl + (Ye >>> 0 < zs >>> 0 ? 1 : 0);
              var Ye = Ye + Fs;
              var Ot = Ot + $l + (Ye >>> 0 < Fs >>> 0 ? 1 : 0);
              var Ye = Ye + ue;
              var Ot = Ot + se + (Ye >>> 0 < ue >>> 0 ? 1 : 0);
              var Us = Os + Il;
              var zl = Bl + Tl + (Us >>> 0 < Os >>> 0 ? 1 : 0);
              k = u;
              $ = f;
              u = dt;
              f = w;
              dt = Y;
              w = Be;
              Be = j + Ye | 0;
              Y = W + Ot + (Be >>> 0 < j >>> 0 ? 1 : 0) | 0;
              W = M;
              j = Z;
              M = q;
              Z = X;
              q = F;
              X = G;
              G = Ye + Us | 0;
              F = Ot + zl + (G >>> 0 < Ye >>> 0 ? 1 : 0) | 0;
            }
            S = E.low = S + G;
            E.high = N + F + (S >>> 0 < G >>> 0 ? 1 : 0);
            P = A.low = P + X;
            A.high = D + q + (P >>> 0 < X >>> 0 ? 1 : 0);
            U = I.low = U + Z;
            I.high = H + M + (U >>> 0 < Z >>> 0 ? 1 : 0);
            Q = b.low = Q + j;
            b.high = K + W + (Q >>> 0 < j >>> 0 ? 1 : 0);
            re = T.low = re + Be;
            T.high = le + Y + (re >>> 0 < Be >>> 0 ? 1 : 0);
            ae = R.low = ae + w;
            R.high = ne + dt + (ae >>> 0 < w >>> 0 ? 1 : 0);
            p = B.low = p + f;
            B.high = O + u + (p >>> 0 < f >>> 0 ? 1 : 0);
            x = z.low = x + $;
            z.high = C + k + (x >>> 0 < $ >>> 0 ? 1 : 0);
          },
          _doFinalize: function () {
            var _ = this._data;
            var y = _.words;
            var g = this._nDataBytes * 8;
            var E = _.sigBytes * 8;
            y[E >>> 5] |= 128 << 24 - E % 32;
            y[(E + 128 >>> 10 << 5) + 30] = Math.floor(g / 4294967296);
            y[(E + 128 >>> 10 << 5) + 31] = g;
            _.sigBytes = y.length * 4;
            this._process();
            var A = this._hash.toX32();
            return A;
          },
          clone: function () {
            var _ = a.clone.call(this);
            _._hash = this._hash.clone();
            return _;
          },
          blockSize: 32
        });
        n.SHA512 = a._createHelper(v);
        n.HmacSHA512 = a._createHmacHelper(v);
      })();
      return t.SHA512;
    });
  }
});
var Uh = me({
  "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha384.js"(e, r) {
    (function (t, n, i) {
      if (typeof e == "object") {
        r.exports = e = n(we(), ta(), qc());
      } else if (typeof define == "function" && define.amd) {
        define(["./core", "./x64-core", "./sha512"], n);
      } else {
        n(t.CryptoJS);
      }
    })(e, function (t) {
      (function () {
        var n = t;
        var i = n.x64;
        var a = i.Word;
        var o = i.WordArray;
        var s = n.algo;
        var d = s.SHA512;
        var c = s.SHA384 = d.extend({
          _doReset: function () {
            this._hash = new o.init([new a.init(3418070365, 3238371032), new a.init(1654270250, 914150663), new a.init(2438529370, 812702999), new a.init(355462360, 4144912697), new a.init(1731405415, 4290775857), new a.init(2394180231, 1750603025), new a.init(3675008525, 1694076839), new a.init(1203062813, 3204075428)]);
          },
          _doFinalize: function () {
            var l = d._doFinalize.call(this);
            l.sigBytes -= 16;
            return l;
          }
        });
        n.SHA384 = d._createHelper(c);
        n.HmacSHA384 = d._createHmacHelper(c);
      })();
      return t.SHA384;
    });
  }
});
var Lh = me({
  "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha3.js"(e, r) {
    (function (t, n, i) {
      if (typeof e == "object") {
        r.exports = e = n(we(), ta());
      } else if (typeof define == "function" && define.amd) {
        define(["./core", "./x64-core"], n);
      } else {
        n(t.CryptoJS);
      }
    })(e, function (t) {
      (function (n) {
        var i = t;
        var a = i.lib;
        var o = a.WordArray;
        var s = a.Hasher;
        var d = i.x64;
        var c = d.Word;
        var l = i.algo;
        var m = [];
        var h = [];
        var v = [];
        (function () {
          for (var g = 1, E = 0, A = 0; A < 24; A++) {
            m[g + E * 5] = (A + 1) * (A + 2) / 2 % 64;
            var I = E % 5;
            var b = (g * 2 + E * 3) % 5;
            g = I;
            E = b;
          }
          for (var g = 0; g < 5; g++) {
            for (var E = 0; E < 5; E++) {
              h[g + E * 5] = E + (g * 2 + E * 3) % 5 * 5;
            }
          }
          for (var T = 1, R = 0; R < 24; R++) {
            for (var B = 0, z = 0, N = 0; N < 7; N++) {
              if (T & 1) {
                var S = (1 << N) - 1;
                if (S < 32) {
                  z ^= 1 << S;
                } else {
                  B ^= 1 << S - 32;
                }
              }
              if (T & 128) {
                T = T << 1 ^ 113;
              } else {
                T <<= 1;
              }
            }
            v[R] = c.create(B, z);
          }
        })();
        var _ = [];
        (function () {
          for (var g = 0; g < 25; g++) {
            _[g] = c.create();
          }
        })();
        var y = l.SHA3 = s.extend({
          cfg: s.cfg.extend({
            outputLength: 512
          }),
          _doReset: function () {
            for (var g = this._state = [], E = 0; E < 25; E++) {
              g[E] = new c.init();
            }
            this.blockSize = (1600 - this.cfg.outputLength * 2) / 32;
          },
          _doProcessBlock: function (g, E) {
            for (var A = this._state, I = this.blockSize / 2, b = 0; b < I; b++) {
              var T = g[E + b * 2];
              var R = g[E + b * 2 + 1];
              T = (T << 8 | T >>> 24) & 16711935 | (T << 24 | T >>> 8) & 4278255360;
              R = (R << 8 | R >>> 24) & 16711935 | (R << 24 | R >>> 8) & 4278255360;
              var B = A[b];
              B.high ^= R;
              B.low ^= T;
            }
            for (var z = 0; z < 24; z++) {
              for (var N = 0; N < 5; N++) {
                for (var S = 0, D = 0, P = 0; P < 5; P++) {
                  var B = A[N + P * 5];
                  S ^= B.high;
                  D ^= B.low;
                }
                var H = _[N];
                H.high = S;
                H.low = D;
              }
              for (var N = 0; N < 5; N++) {
                for (var U = _[(N + 4) % 5], K = _[(N + 1) % 5], Q = K.high, le = K.low, S = U.high ^ (Q << 1 | le >>> 31), D = U.low ^ (le << 1 | Q >>> 31), P = 0; P < 5; P++) {
                  var B = A[N + P * 5];
                  B.high ^= S;
                  B.low ^= D;
                }
              }
              for (var re = 1; re < 25; re++) {
                var B = A[re];
                var ne = B.high;
                var ae = B.low;
                var O = m[re];
                if (O < 32) {
                  var S = ne << O | ae >>> 32 - O;
                  var D = ae << O | ne >>> 32 - O;
                } else {
                  var S = ae << O - 32 | ne >>> 64 - O;
                  var D = ne << O - 32 | ae >>> 64 - O;
                }
                var p = _[h[re]];
                p.high = S;
                p.low = D;
              }
              var C = _[0];
              var x = A[0];
              C.high = x.high;
              C.low = x.low;
              for (var N = 0; N < 5; N++) {
                for (var P = 0; P < 5; P++) {
                  var re = N + P * 5;
                  var B = A[re];
                  var F = _[re];
                  var G = _[(N + 1) % 5 + P * 5];
                  var q = _[(N + 2) % 5 + P * 5];
                  B.high = F.high ^ ~G.high & q.high;
                  B.low = F.low ^ ~G.low & q.low;
                }
              }
              var B = A[0];
              var X = v[z];
              B.high ^= X.high;
              B.low ^= X.low;
            }
          },
          _doFinalize: function () {
            var g = this._data;
            var E = g.words;
            this._nDataBytes * 8;
            var A = g.sigBytes * 8;
            var I = this.blockSize * 32;
            E[A >>> 5] |= 1 << 24 - A % 32;
            E[(n.ceil((A + 1) / I) * I >>> 5) - 1] |= 128;
            g.sigBytes = E.length * 4;
            this._process();
            for (var b = this._state, T = this.cfg.outputLength / 8, R = T / 8, B = [], z = 0; z < R; z++) {
              var N = b[z];
              var S = N.high;
              var D = N.low;
              S = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360;
              D = (D << 8 | D >>> 24) & 16711935 | (D << 24 | D >>> 8) & 4278255360;
              B.push(D);
              B.push(S);
            }
            return new o.init(B, T);
          },
          clone: function () {
            for (var g = s.clone.call(this), E = g._state = this._state.slice(0), A = 0; A < 25; A++) {
              E[A] = E[A].clone();
            }
            return g;
          }
        });
        i.SHA3 = s._createHelper(y);
        i.HmacSHA3 = s._createHmacHelper(y);
      })(Math);
      return t.SHA3;
    });
  }
});
var Ph = me({
  "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/ripemd160.js"(e, r) {
    (function (t, n) {
      if (typeof e == "object") {
        r.exports = e = n(we());
      } else if (typeof define == "function" && define.amd) {
        define(["./core"], n);
      } else {
        n(t.CryptoJS);
      }
    })(e, function (t) {
      (function (n) {
        var i = t;
        var a = i.lib;
        var o = a.WordArray;
        var s = a.Hasher;
        var d = i.algo;
        var c = o.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);
        var l = o.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);
        var m = o.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);
        var h = o.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);
        var v = o.create([0, 1518500249, 1859775393, 2400959708, 2840853838]);
        var _ = o.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
        var y = d.RIPEMD160 = s.extend({
          _doReset: function () {
            this._hash = o.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function (R, B) {
            for (var z = 0; z < 16; z++) {
              var N = B + z;
              var S = R[N];
              R[N] = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360;
            }
            var D = this._hash.words;
            var P = v.words;
            var H = _.words;
            var U = c.words;
            var K = l.words;
            var Q = m.words;
            var le = h.words;
            var re;
            var ne;
            var ae;
            var O;
            var p;
            var C;
            var x;
            var F;
            var G;
            var q;
            C = re = D[0];
            x = ne = D[1];
            F = ae = D[2];
            G = O = D[3];
            q = p = D[4];
            for (var X, z = 0; z < 80; z += 1) {
              X = re + R[B + U[z]] | 0;
              if (z < 16) {
                X += g(ne, ae, O) + P[0];
              } else if (z < 32) {
                X += E(ne, ae, O) + P[1];
              } else if (z < 48) {
                X += A(ne, ae, O) + P[2];
              } else if (z < 64) {
                X += I(ne, ae, O) + P[3];
              } else {
                X += b(ne, ae, O) + P[4];
              }
              X = X | 0;
              X = T(X, Q[z]);
              X = X + p | 0;
              re = p;
              p = O;
              O = T(ae, 10);
              ae = ne;
              ne = X;
              X = C + R[B + K[z]] | 0;
              if (z < 16) {
                X += b(x, F, G) + H[0];
              } else if (z < 32) {
                X += I(x, F, G) + H[1];
              } else if (z < 48) {
                X += A(x, F, G) + H[2];
              } else if (z < 64) {
                X += E(x, F, G) + H[3];
              } else {
                X += g(x, F, G) + H[4];
              }
              X = X | 0;
              X = T(X, le[z]);
              X = X + q | 0;
              C = q;
              q = G;
              G = T(F, 10);
              F = x;
              x = X;
            }
            X = D[1] + ae + G | 0;
            D[1] = D[2] + O + q | 0;
            D[2] = D[3] + p + C | 0;
            D[3] = D[4] + re + x | 0;
            D[4] = D[0] + ne + F | 0;
            D[0] = X;
          },
          _doFinalize: function () {
            var R = this._data;
            var B = R.words;
            var z = this._nDataBytes * 8;
            var N = R.sigBytes * 8;
            B[N >>> 5] |= 128 << 24 - N % 32;
            B[(N + 64 >>> 9 << 4) + 14] = (z << 8 | z >>> 24) & 16711935 | (z << 24 | z >>> 8) & 4278255360;
            R.sigBytes = (B.length + 1) * 4;
            this._process();
            for (var S = this._hash, D = S.words, P = 0; P < 5; P++) {
              var H = D[P];
              D[P] = (H << 8 | H >>> 24) & 16711935 | (H << 24 | H >>> 8) & 4278255360;
            }
            return S;
          },
          clone: function () {
            var R = s.clone.call(this);
            R._hash = this._hash.clone();
            return R;
          }
        });
        function g(R, B, z) {
          return R ^ B ^ z;
        }
        function E(R, B, z) {
          return R & B | ~R & z;
        }
        function A(R, B, z) {
          return (R | ~B) ^ z;
        }
        function I(R, B, z) {
          return R & z | B & ~z;
        }
        function b(R, B, z) {
          return R ^ (B | ~z);
        }
        function T(R, B) {
          return R << B | R >>> 32 - B;
        }
        i.RIPEMD160 = s._createHelper(y);
        i.HmacRIPEMD160 = s._createHmacHelper(y);
      })();
      return t.RIPEMD160;
    });
  }
});
var gs = me({
  "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/hmac.js"(e, r) {
    (function (t, n) {
      if (typeof e == "object") {
        r.exports = e = n(we());
      } else if (typeof define == "function" && define.amd) {
        define(["./core"], n);
      } else {
        n(t.CryptoJS);
      }
    })(e, function (t) {
      (function () {
        var n = t;
        var i = n.lib;
        var a = i.Base;
        var o = n.enc;
        var s = o.Utf8;
        var d = n.algo;
        d.HMAC = a.extend({
          init: function (c, l) {
            c = this._hasher = new c.init();
            if (typeof l == "string") {
              l = s.parse(l);
            }
            var m = c.blockSize;
            var h = m * 4;
            if (l.sigBytes > h) {
              l = c.finalize(l);
            }
            l.clamp();
            for (var v = this._oKey = l.clone(), _ = this._iKey = l.clone(), y = v.words, g = _.words, E = 0; E < m; E++) {
              y[E] ^= 1549556828;
              g[E] ^= 909522486;
            }
            v.sigBytes = _.sigBytes = h;
            this.reset();
          },
          reset: function () {
            var c = this._hasher;
            c.reset();
            c.update(this._iKey);
          },
          update: function (c) {
            this._hasher.update(c);
            return this;
          },
          finalize: function (c) {
            var l = this._hasher;
            var m = l.finalize(c);
            l.reset();
            var h = l.finalize(this._oKey.clone().concat(m));
            return h;
          }
        });
      })();
    });
  }
});
var Mh = me({
  "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pbkdf2.js"(e, r) {
    (function (t, n, i) {
      if (typeof e == "object") {
        r.exports = e = n(we(), _s(), gs());
      } else if (typeof define == "function" && define.amd) {
        define(["./core", "./sha1", "./hmac"], n);
      } else {
        n(t.CryptoJS);
      }
    })(e, function (t) {
      (function () {
        var n = t;
        var i = n.lib;
        var a = i.Base;
        var o = i.WordArray;
        var s = n.algo;
        var d = s.SHA1;
        var c = s.HMAC;
        var l = s.PBKDF2 = a.extend({
          cfg: a.extend({
            keySize: 4,
            hasher: d,
            iterations: 1
          }),
          init: function (m) {
            this.cfg = this.cfg.extend(m);
          },
          compute: function (m, h) {
            for (var v = this.cfg, _ = c.create(v.hasher, m), y = o.create(), g = o.create([1]), E = y.words, A = g.words, I = v.keySize, b = v.iterations; E.length < I;) {
              var T = _.update(h).finalize(g);
              _.reset();
              for (var R = T.words, B = R.length, z = T, N = 1; N < b; N++) {
                z = _.finalize(z);
                _.reset();
                for (var S = z.words, D = 0; D < B; D++) {
                  R[D] ^= S[D];
                }
              }
              y.concat(T);
              A[0]++;
            }
            y.sigBytes = I * 4;
            return y;
          }
        });
        n.PBKDF2 = function (m, h, v) {
          return l.create(v).compute(m, h);
        };
      })();
      return t.PBKDF2;
    });
  }
});
var yr = me({
  "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/evpkdf.js"(e, r) {
    (function (t, n, i) {
      if (typeof e == "object") {
        r.exports = e = n(we(), _s(), gs());
      } else if (typeof define == "function" && define.amd) {
        define(["./core", "./sha1", "./hmac"], n);
      } else {
        n(t.CryptoJS);
      }
    })(e, function (t) {
      (function () {
        var n = t;
        var i = n.lib;
        var a = i.Base;
        var o = i.WordArray;
        var s = n.algo;
        var d = s.MD5;
        var c = s.EvpKDF = a.extend({
          cfg: a.extend({
            keySize: 4,
            hasher: d,
            iterations: 1
          }),
          init: function (l) {
            this.cfg = this.cfg.extend(l);
          },
          compute: function (l, m) {
            for (var h = this.cfg, v = h.hasher.create(), _ = o.create(), y = _.words, g = h.keySize, E = h.iterations; y.length < g;) {
              if (A) {
                v.update(A);
              }
              var A = v.update(l).finalize(m);
              v.reset();
              for (var I = 1; I < E; I++) {
                A = v.finalize(A);
                v.reset();
              }
              _.concat(A);
            }
            _.sigBytes = g * 4;
            return _;
          }
        });
        n.EvpKDF = function (l, m, h) {
          return c.create(h).compute(l, m);
        };
      })();
      return t.EvpKDF;
    });
  }
});
var je = me({
  "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/cipher-core.js"(e, r) {
    (function (t, n, i) {
      if (typeof e == "object") {
        r.exports = e = n(we(), yr());
      } else if (typeof define == "function" && define.amd) {
        define(["./core", "./evpkdf"], n);
      } else {
        n(t.CryptoJS);
      }
    })(e, function (t) {
      if (!t.lib.Cipher) {
        (function (n) {
          var i = t;
          var a = i.lib;
          var o = a.Base;
          var s = a.WordArray;
          var d = a.BufferedBlockAlgorithm;
          var c = i.enc;
          c.Utf8;
          var l = c.Base64;
          var m = i.algo;
          var h = m.EvpKDF;
          var v = a.Cipher = d.extend({
            cfg: o.extend(),
            createEncryptor: function (S, D) {
              return this.create(this._ENC_XFORM_MODE, S, D);
            },
            createDecryptor: function (S, D) {
              return this.create(this._DEC_XFORM_MODE, S, D);
            },
            init: function (S, D, P) {
              this.cfg = this.cfg.extend(P);
              this._xformMode = S;
              this._key = D;
              this.reset();
            },
            reset: function () {
              d.reset.call(this);
              this._doReset();
            },
            process: function (S) {
              this._append(S);
              return this._process();
            },
            finalize: function (S) {
              if (S) {
                this._append(S);
              }
              var D = this._doFinalize();
              return D;
            },
            keySize: 4,
            ivSize: 4,
            _ENC_XFORM_MODE: 1,
            _DEC_XFORM_MODE: 2,
            _createHelper: function () {
              function S(D) {
                if (typeof D == "string") {
                  return N;
                } else {
                  return R;
                }
              }
              return function (D) {
                return {
                  encrypt: function (P, H, U) {
                    return S(H).encrypt(D, P, H, U);
                  },
                  decrypt: function (P, H, U) {
                    return S(H).decrypt(D, P, H, U);
                  }
                };
              };
            }()
          });
          a.StreamCipher = v.extend({
            _doFinalize: function () {
              var S = this._process(true);
              return S;
            },
            blockSize: 1
          });
          var _ = i.mode = {};
          var y = a.BlockCipherMode = o.extend({
            createEncryptor: function (S, D) {
              return this.Encryptor.create(S, D);
            },
            createDecryptor: function (S, D) {
              return this.Decryptor.create(S, D);
            },
            init: function (S, D) {
              this._cipher = S;
              this._iv = D;
            }
          });
          var g = _.CBC = function () {
            var S = y.extend();
            S.Encryptor = S.extend({
              processBlock: function (P, H) {
                var U = this._cipher;
                var K = U.blockSize;
                D.call(this, P, H, K);
                U.encryptBlock(P, H);
                this._prevBlock = P.slice(H, H + K);
              }
            });
            S.Decryptor = S.extend({
              processBlock: function (P, H) {
                var U = this._cipher;
                var K = U.blockSize;
                var Q = P.slice(H, H + K);
                U.decryptBlock(P, H);
                D.call(this, P, H, K);
                this._prevBlock = Q;
              }
            });
            function D(P, H, U) {
              var K = this._iv;
              if (K) {
                var Q = K;
                this._iv = n;
              } else {
                var Q = this._prevBlock;
              }
              for (var le = 0; le < U; le++) {
                P[H + le] ^= Q[le];
              }
            }
            return S;
          }();
          var E = i.pad = {};
          var A = E.Pkcs7 = {
            pad: function (S, D) {
              for (var P = D * 4, H = P - S.sigBytes % P, U = H << 24 | H << 16 | H << 8 | H, K = [], Q = 0; Q < H; Q += 4) {
                K.push(U);
              }
              var le = s.create(K, H);
              S.concat(le);
            },
            unpad: function (S) {
              var D = S.words[S.sigBytes - 1 >>> 2] & 255;
              S.sigBytes -= D;
            }
          };
          a.BlockCipher = v.extend({
            cfg: v.cfg.extend({
              mode: g,
              padding: A
            }),
            reset: function () {
              v.reset.call(this);
              var S = this.cfg;
              var D = S.iv;
              var P = S.mode;
              if (this._xformMode == this._ENC_XFORM_MODE) {
                var H = P.createEncryptor;
              } else {
                var H = P.createDecryptor;
                this._minBufferSize = 1;
              }
              if (this._mode && this._mode.__creator == H) {
                this._mode.init(this, D && D.words);
              } else {
                this._mode = H.call(P, this, D && D.words);
                this._mode.__creator = H;
              }
            },
            _doProcessBlock: function (S, D) {
              this._mode.processBlock(S, D);
            },
            _doFinalize: function () {
              var S = this.cfg.padding;
              if (this._xformMode == this._ENC_XFORM_MODE) {
                S.pad(this._data, this.blockSize);
                var D = this._process(true);
              } else {
                var D = this._process(true);
                S.unpad(D);
              }
              return D;
            },
            blockSize: 4
          });
          var I = a.CipherParams = o.extend({
            init: function (S) {
              this.mixIn(S);
            },
            toString: function (S) {
              return (S || this.formatter).stringify(this);
            }
          });
          var b = i.format = {};
          var T = b.OpenSSL = {
            stringify: function (S) {
              var D = S.ciphertext;
              var P = S.salt;
              if (P) {
                var H = s.create([1398893684, 1701076831]).concat(P).concat(D);
              } else {
                var H = D;
              }
              return H.toString(l);
            },
            parse: function (S) {
              var D = l.parse(S);
              var P = D.words;
              if (P[0] == 1398893684 && P[1] == 1701076831) {
                var H = s.create(P.slice(2, 4));
                P.splice(0, 4);
                D.sigBytes -= 16;
              }
              return I.create({
                ciphertext: D,
                salt: H
              });
            }
          };
          var R = a.SerializableCipher = o.extend({
            cfg: o.extend({
              format: T
            }),
            encrypt: function (S, D, P, H) {
              H = this.cfg.extend(H);
              var U = S.createEncryptor(P, H);
              var K = U.finalize(D);
              var Q = U.cfg;
              return I.create({
                ciphertext: K,
                key: P,
                iv: Q.iv,
                algorithm: S,
                mode: Q.mode,
                padding: Q.padding,
                blockSize: S.blockSize,
                formatter: H.format
              });
            },
            decrypt: function (S, D, P, H) {
              H = this.cfg.extend(H);
              D = this._parse(D, H.format);
              var U = S.createDecryptor(P, H).finalize(D.ciphertext);
              return U;
            },
            _parse: function (S, D) {
              if (typeof S == "string") {
                return D.parse(S, this);
              } else {
                return S;
              }
            }
          });
          var B = i.kdf = {};
          var z = B.OpenSSL = {
            execute: function (S, D, P, H) {
              H ||= s.random(8);
              var U = h.create({
                keySize: D + P
              }).compute(S, H);
              var K = s.create(U.words.slice(D), P * 4);
              U.sigBytes = D * 4;
              return I.create({
                key: U,
                iv: K,
                salt: H
              });
            }
          };
          var N = a.PasswordBasedCipher = R.extend({
            cfg: R.cfg.extend({
              kdf: z
            }),
            encrypt: function (S, D, P, H) {
              H = this.cfg.extend(H);
              var U = H.kdf.execute(P, S.keySize, S.ivSize);
              H.iv = U.iv;
              var K = R.encrypt.call(this, S, D, U.key, H);
              K.mixIn(U);
              return K;
            },
            decrypt: function (S, D, P, H) {
              H = this.cfg.extend(H);
              D = this._parse(D, H.format);
              var U = H.kdf.execute(P, S.keySize, S.ivSize, D.salt);
              H.iv = U.iv;
              var K = R.decrypt.call(this, S, D, U.key, H);
              return K;
            }
          });
        })();
      }
    });
  }
});
var jh = me({
  "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-cfb.js"(e, r) {
    (function (t, n, i) {
      if (typeof e == "object") {
        r.exports = e = n(we(), je());
      } else if (typeof define == "function" && define.amd) {
        define(["./core", "./cipher-core"], n);
      } else {
        n(t.CryptoJS);
      }
    })(e, function (t) {
      t.mode.CFB = function () {
        var n = t.lib.BlockCipherMode.extend();
        n.Encryptor = n.extend({
          processBlock: function (a, o) {
            var s = this._cipher;
            var d = s.blockSize;
            i.call(this, a, o, d, s);
            this._prevBlock = a.slice(o, o + d);
          }
        });
        n.Decryptor = n.extend({
          processBlock: function (a, o) {
            var s = this._cipher;
            var d = s.blockSize;
            var c = a.slice(o, o + d);
            i.call(this, a, o, d, s);
            this._prevBlock = c;
          }
        });
        function i(a, o, s, d) {
          var c = this._iv;
          if (c) {
            var l = c.slice(0);
            this._iv = undefined;
          } else {
            var l = this._prevBlock;
          }
          d.encryptBlock(l, 0);
          for (var m = 0; m < s; m++) {
            a[o + m] ^= l[m];
          }
        }
        return n;
      }();
      return t.mode.CFB;
    });
  }
});
var Zh = me({
  "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ctr.js"(e, r) {
    (function (t, n, i) {
      if (typeof e == "object") {
        r.exports = e = n(we(), je());
      } else if (typeof define == "function" && define.amd) {
        define(["./core", "./cipher-core"], n);
      } else {
        n(t.CryptoJS);
      }
    })(e, function (t) {
      t.mode.CTR = function () {
        var n = t.lib.BlockCipherMode.extend();
        var i = n.Encryptor = n.extend({
          processBlock: function (a, o) {
            var s = this._cipher;
            var d = s.blockSize;
            var c = this._iv;
            var l = this._counter;
            if (c) {
              l = this._counter = c.slice(0);
              this._iv = undefined;
            }
            var m = l.slice(0);
            s.encryptBlock(m, 0);
            l[d - 1] = l[d - 1] + 1 | 0;
            for (var h = 0; h < d; h++) {
              a[o + h] ^= m[h];
            }
          }
        });
        n.Decryptor = i;
        return n;
      }();
      return t.mode.CTR;
    });
  }
});
var Hh = me({
  "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ctr-gladman.js"(e, r) {
    (function (t, n, i) {
      if (typeof e == "object") {
        r.exports = e = n(we(), je());
      } else if (typeof define == "function" && define.amd) {
        define(["./core", "./cipher-core"], n);
      } else {
        n(t.CryptoJS);
      }
    })(e, function (t) {
      t.mode.CTRGladman = function () {
        var n = t.lib.BlockCipherMode.extend();
        function i(s) {
          if ((s >> 24 & 255) === 255) {
            var d = s >> 16 & 255;
            var c = s >> 8 & 255;
            var l = s & 255;
            if (d === 255) {
              d = 0;
              if (c === 255) {
                c = 0;
                if (l === 255) {
                  l = 0;
                } else {
                  ++l;
                }
              } else {
                ++c;
              }
            } else {
              ++d;
            }
            s = 0;
            s += d << 16;
            s += c << 8;
            s += l;
          } else {
            s += 1 << 24;
          }
          return s;
        }
        function a(s) {
          if ((s[0] = i(s[0])) === 0) {
            s[1] = i(s[1]);
          }
          return s;
        }
        var o = n.Encryptor = n.extend({
          processBlock: function (s, d) {
            var c = this._cipher;
            var l = c.blockSize;
            var m = this._iv;
            var h = this._counter;
            if (m) {
              h = this._counter = m.slice(0);
              this._iv = undefined;
            }
            a(h);
            var v = h.slice(0);
            c.encryptBlock(v, 0);
            for (var _ = 0; _ < l; _++) {
              s[d + _] ^= v[_];
            }
          }
        });
        n.Decryptor = o;
        return n;
      }();
      return t.mode.CTRGladman;
    });
  }
});
var Wh = me({
  "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ofb.js"(e, r) {
    (function (t, n, i) {
      if (typeof e == "object") {
        r.exports = e = n(we(), je());
      } else if (typeof define == "function" && define.amd) {
        define(["./core", "./cipher-core"], n);
      } else {
        n(t.CryptoJS);
      }
    })(e, function (t) {
      t.mode.OFB = function () {
        var n = t.lib.BlockCipherMode.extend();
        var i = n.Encryptor = n.extend({
          processBlock: function (a, o) {
            var s = this._cipher;
            var d = s.blockSize;
            var c = this._iv;
            var l = this._keystream;
            if (c) {
              l = this._keystream = c.slice(0);
              this._iv = undefined;
            }
            s.encryptBlock(l, 0);
            for (var m = 0; m < d; m++) {
              a[o + m] ^= l[m];
            }
          }
        });
        n.Decryptor = i;
        return n;
      }();
      return t.mode.OFB;
    });
  }
});
var Vh = me({
  "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ecb.js"(e, r) {
    (function (t, n, i) {
      if (typeof e == "object") {
        r.exports = e = n(we(), je());
      } else if (typeof define == "function" && define.amd) {
        define(["./core", "./cipher-core"], n);
      } else {
        n(t.CryptoJS);
      }
    })(e, function (t) {
      t.mode.ECB = function () {
        var n = t.lib.BlockCipherMode.extend();
        n.Encryptor = n.extend({
          processBlock: function (i, a) {
            this._cipher.encryptBlock(i, a);
          }
        });
        n.Decryptor = n.extend({
          processBlock: function (i, a) {
            this._cipher.decryptBlock(i, a);
          }
        });
        return n;
      }();
      return t.mode.ECB;
    });
  }
});
var qh = me({
  "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-ansix923.js"(e, r) {
    (function (t, n, i) {
      if (typeof e == "object") {
        r.exports = e = n(we(), je());
      } else if (typeof define == "function" && define.amd) {
        define(["./core", "./cipher-core"], n);
      } else {
        n(t.CryptoJS);
      }
    })(e, function (t) {
      t.pad.AnsiX923 = {
        pad: function (n, i) {
          var a = n.sigBytes;
          var o = i * 4;
          var s = o - a % o;
          var d = a + s - 1;
          n.clamp();
          n.words[d >>> 2] |= s << 24 - d % 4 * 8;
          n.sigBytes += s;
        },
        unpad: function (n) {
          var i = n.words[n.sigBytes - 1 >>> 2] & 255;
          n.sigBytes -= i;
        }
      };
      return t.pad.Ansix923;
    });
  }
});
var Kh = me({
  "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-iso10126.js"(e, r) {
    (function (t, n, i) {
      if (typeof e == "object") {
        r.exports = e = n(we(), je());
      } else if (typeof define == "function" && define.amd) {
        define(["./core", "./cipher-core"], n);
      } else {
        n(t.CryptoJS);
      }
    })(e, function (t) {
      t.pad.Iso10126 = {
        pad: function (n, i) {
          var a = i * 4;
          var o = a - n.sigBytes % a;
          n.concat(t.lib.WordArray.random(o - 1)).concat(t.lib.WordArray.create([o << 24], 1));
        },
        unpad: function (n) {
          var i = n.words[n.sigBytes - 1 >>> 2] & 255;
          n.sigBytes -= i;
        }
      };
      return t.pad.Iso10126;
    });
  }
});
var Gh = me({
  "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-iso97971.js"(e, r) {
    (function (t, n, i) {
      if (typeof e == "object") {
        r.exports = e = n(we(), je());
      } else if (typeof define == "function" && define.amd) {
        define(["./core", "./cipher-core"], n);
      } else {
        n(t.CryptoJS);
      }
    })(e, function (t) {
      t.pad.Iso97971 = {
        pad: function (n, i) {
          n.concat(t.lib.WordArray.create([2147483648], 1));
          t.pad.ZeroPadding.pad(n, i);
        },
        unpad: function (n) {
          t.pad.ZeroPadding.unpad(n);
          n.sigBytes--;
        }
      };
      return t.pad.Iso97971;
    });
  }
});
var Xh = me({
  "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-zeropadding.js"(e, r) {
    (function (t, n, i) {
      if (typeof e == "object") {
        r.exports = e = n(we(), je());
      } else if (typeof define == "function" && define.amd) {
        define(["./core", "./cipher-core"], n);
      } else {
        n(t.CryptoJS);
      }
    })(e, function (t) {
      t.pad.ZeroPadding = {
        pad: function (n, i) {
          var a = i * 4;
          n.clamp();
          n.sigBytes += a - (n.sigBytes % a || a);
        },
        unpad: function (n) {
          for (var i = n.words, a = n.sigBytes - 1; !(i[a >>> 2] >>> 24 - a % 4 * 8 & 255);) {
            a--;
          }
          n.sigBytes = a + 1;
        }
      };
      return t.pad.ZeroPadding;
    });
  }
});
var Yh = me({
  "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-nopadding.js"(e, r) {
    (function (t, n, i) {
      if (typeof e == "object") {
        r.exports = e = n(we(), je());
      } else if (typeof define == "function" && define.amd) {
        define(["./core", "./cipher-core"], n);
      } else {
        n(t.CryptoJS);
      }
    })(e, function (t) {
      t.pad.NoPadding = {
        pad: function () {},
        unpad: function () {}
      };
      return t.pad.NoPadding;
    });
  }
});
var Jh = me({
  "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/format-hex.js"(e, r) {
    (function (t, n, i) {
      if (typeof e == "object") {
        r.exports = e = n(we(), je());
      } else if (typeof define == "function" && define.amd) {
        define(["./core", "./cipher-core"], n);
      } else {
        n(t.CryptoJS);
      }
    })(e, function (t) {
      (function (n) {
        var i = t;
        var a = i.lib;
        var o = a.CipherParams;
        var s = i.enc;
        var d = s.Hex;
        var c = i.format;
        c.Hex = {
          stringify: function (l) {
            return l.ciphertext.toString(d);
          },
          parse: function (l) {
            var m = d.parse(l);
            return o.create({
              ciphertext: m
            });
          }
        };
      })();
      return t.format.Hex;
    });
  }
});
var Qh = me({
  "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/aes.js"(e, r) {
    (function (t, n, i) {
      if (typeof e == "object") {
        r.exports = e = n(we(), Jr(), Qr(), yr(), je());
      } else if (typeof define == "function" && define.amd) {
        define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], n);
      } else {
        n(t.CryptoJS);
      }
    })(e, function (t) {
      (function () {
        var n = t;
        var i = n.lib;
        var a = i.BlockCipher;
        var o = n.algo;
        var s = [];
        var d = [];
        var c = [];
        var l = [];
        var m = [];
        var h = [];
        var v = [];
        var _ = [];
        var y = [];
        var g = [];
        (function () {
          for (var I = [], b = 0; b < 256; b++) {
            if (b < 128) {
              I[b] = b << 1;
            } else {
              I[b] = b << 1 ^ 283;
            }
          }
          for (var T = 0, R = 0, b = 0; b < 256; b++) {
            var B = R ^ R << 1 ^ R << 2 ^ R << 3 ^ R << 4;
            B = B >>> 8 ^ B & 255 ^ 99;
            s[T] = B;
            d[B] = T;
            var z = I[T];
            var N = I[z];
            var S = I[N];
            var D = I[B] * 257 ^ B * 16843008;
            c[T] = D << 24 | D >>> 8;
            l[T] = D << 16 | D >>> 16;
            m[T] = D << 8 | D >>> 24;
            h[T] = D;
            var D = S * 16843009 ^ N * 65537 ^ z * 257 ^ T * 16843008;
            v[B] = D << 24 | D >>> 8;
            _[B] = D << 16 | D >>> 16;
            y[B] = D << 8 | D >>> 24;
            g[B] = D;
            if (T) {
              T = z ^ I[I[I[S ^ z]]];
              R ^= I[I[R]];
            } else {
              T = R = 1;
            }
          }
        })();
        var E = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
        var A = o.AES = a.extend({
          _doReset: function () {
            if (!this._nRounds || this._keyPriorReset !== this._key) {
              for (var I = this._keyPriorReset = this._key, b = I.words, T = I.sigBytes / 4, R = this._nRounds = T + 6, B = (R + 1) * 4, z = this._keySchedule = [], N = 0; N < B; N++) {
                if (N < T) {
                  z[N] = b[N];
                } else {
                  var S = z[N - 1];
                  if (N % T) {
                    if (T > 6 && N % T == 4) {
                      S = s[S >>> 24] << 24 | s[S >>> 16 & 255] << 16 | s[S >>> 8 & 255] << 8 | s[S & 255];
                    }
                  } else {
                    S = S << 8 | S >>> 24;
                    S = s[S >>> 24] << 24 | s[S >>> 16 & 255] << 16 | s[S >>> 8 & 255] << 8 | s[S & 255];
                    S ^= E[N / T | 0] << 24;
                  }
                  z[N] = z[N - T] ^ S;
                }
              }
              for (var D = this._invKeySchedule = [], P = 0; P < B; P++) {
                var N = B - P;
                if (P % 4) {
                  var S = z[N];
                } else {
                  var S = z[N - 4];
                }
                if (P < 4 || N <= 4) {
                  D[P] = S;
                } else {
                  D[P] = v[s[S >>> 24]] ^ _[s[S >>> 16 & 255]] ^ y[s[S >>> 8 & 255]] ^ g[s[S & 255]];
                }
              }
            }
          },
          encryptBlock: function (I, b) {
            this._doCryptBlock(I, b, this._keySchedule, c, l, m, h, s);
          },
          decryptBlock: function (I, b) {
            var T = I[b + 1];
            I[b + 1] = I[b + 3];
            I[b + 3] = T;
            this._doCryptBlock(I, b, this._invKeySchedule, v, _, y, g, d);
            var T = I[b + 1];
            I[b + 1] = I[b + 3];
            I[b + 3] = T;
          },
          _doCryptBlock: function (I, b, T, R, B, z, N, S) {
            for (var D = this._nRounds, P = I[b] ^ T[0], H = I[b + 1] ^ T[1], U = I[b + 2] ^ T[2], K = I[b + 3] ^ T[3], Q = 4, le = 1; le < D; le++) {
              var re = R[P >>> 24] ^ B[H >>> 16 & 255] ^ z[U >>> 8 & 255] ^ N[K & 255] ^ T[Q++];
              var ne = R[H >>> 24] ^ B[U >>> 16 & 255] ^ z[K >>> 8 & 255] ^ N[P & 255] ^ T[Q++];
              var ae = R[U >>> 24] ^ B[K >>> 16 & 255] ^ z[P >>> 8 & 255] ^ N[H & 255] ^ T[Q++];
              var O = R[K >>> 24] ^ B[P >>> 16 & 255] ^ z[H >>> 8 & 255] ^ N[U & 255] ^ T[Q++];
              P = re;
              H = ne;
              U = ae;
              K = O;
            }
            var re = (S[P >>> 24] << 24 | S[H >>> 16 & 255] << 16 | S[U >>> 8 & 255] << 8 | S[K & 255]) ^ T[Q++];
            var ne = (S[H >>> 24] << 24 | S[U >>> 16 & 255] << 16 | S[K >>> 8 & 255] << 8 | S[P & 255]) ^ T[Q++];
            var ae = (S[U >>> 24] << 24 | S[K >>> 16 & 255] << 16 | S[P >>> 8 & 255] << 8 | S[H & 255]) ^ T[Q++];
            var O = (S[K >>> 24] << 24 | S[P >>> 16 & 255] << 16 | S[H >>> 8 & 255] << 8 | S[U & 255]) ^ T[Q++];
            I[b] = re;
            I[b + 1] = ne;
            I[b + 2] = ae;
            I[b + 3] = O;
          },
          keySize: 8
        });
        n.AES = a._createHelper(A);
      })();
      return t.AES;
    });
  }
});
var e1 = me({
  "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/tripledes.js"(e, r) {
    (function (t, n, i) {
      if (typeof e == "object") {
        r.exports = e = n(we(), Jr(), Qr(), yr(), je());
      } else if (typeof define == "function" && define.amd) {
        define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], n);
      } else {
        n(t.CryptoJS);
      }
    })(e, function (t) {
      (function () {
        var n = t;
        var i = n.lib;
        var a = i.WordArray;
        var o = i.BlockCipher;
        var s = n.algo;
        var d = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4];
        var c = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32];
        var l = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];
        var m = [{
          0: 8421888,
          268435456: 32768,
          536870912: 8421378,
          805306368: 2,
          1073741824: 512,
          1342177280: 8421890,
          1610612736: 8389122,
          1879048192: 8388608,
          2147483648: 514,
          2415919104: 8389120,
          2684354560: 33280,
          2952790016: 8421376,
          3221225472: 32770,
          3489660928: 8388610,
          3758096384: 0,
          4026531840: 33282,
          134217728: 0,
          402653184: 8421890,
          671088640: 33282,
          939524096: 32768,
          1207959552: 8421888,
          1476395008: 512,
          1744830464: 8421378,
          2013265920: 2,
          2281701376: 8389120,
          2550136832: 33280,
          2818572288: 8421376,
          3087007744: 8389122,
          3355443200: 8388610,
          3623878656: 32770,
          3892314112: 514,
          4160749568: 8388608,
          1: 32768,
          268435457: 2,
          536870913: 8421888,
          805306369: 8388608,
          1073741825: 8421378,
          1342177281: 33280,
          1610612737: 512,
          1879048193: 8389122,
          2147483649: 8421890,
          2415919105: 8421376,
          2684354561: 8388610,
          2952790017: 33282,
          3221225473: 514,
          3489660929: 8389120,
          3758096385: 32770,
          4026531841: 0,
          134217729: 8421890,
          402653185: 8421376,
          671088641: 8388608,
          939524097: 512,
          1207959553: 32768,
          1476395009: 8388610,
          1744830465: 2,
          2013265921: 33282,
          2281701377: 32770,
          2550136833: 8389122,
          2818572289: 514,
          3087007745: 8421888,
          3355443201: 8389120,
          3623878657: 0,
          3892314113: 33280,
          4160749569: 8421378
        }, {
          0: 1074282512,
          16777216: 16384,
          33554432: 524288,
          50331648: 1074266128,
          67108864: 1073741840,
          83886080: 1074282496,
          100663296: 1073758208,
          117440512: 16,
          134217728: 540672,
          150994944: 1073758224,
          167772160: 1073741824,
          184549376: 540688,
          201326592: 524304,
          218103808: 0,
          234881024: 16400,
          251658240: 1074266112,
          8388608: 1073758208,
          25165824: 540688,
          41943040: 16,
          58720256: 1073758224,
          75497472: 1074282512,
          92274688: 1073741824,
          109051904: 524288,
          125829120: 1074266128,
          142606336: 524304,
          159383552: 0,
          176160768: 16384,
          192937984: 1074266112,
          209715200: 1073741840,
          226492416: 540672,
          243269632: 1074282496,
          260046848: 16400,
          268435456: 0,
          285212672: 1074266128,
          301989888: 1073758224,
          318767104: 1074282496,
          335544320: 1074266112,
          352321536: 16,
          369098752: 540688,
          385875968: 16384,
          402653184: 16400,
          419430400: 524288,
          436207616: 524304,
          452984832: 1073741840,
          469762048: 540672,
          486539264: 1073758208,
          503316480: 1073741824,
          520093696: 1074282512,
          276824064: 540688,
          293601280: 524288,
          310378496: 1074266112,
          327155712: 16384,
          343932928: 1073758208,
          360710144: 1074282512,
          377487360: 16,
          394264576: 1073741824,
          411041792: 1074282496,
          427819008: 1073741840,
          444596224: 1073758224,
          461373440: 524304,
          478150656: 0,
          494927872: 16400,
          511705088: 1074266128,
          528482304: 540672
        }, {
          0: 260,
          1048576: 0,
          2097152: 67109120,
          3145728: 65796,
          4194304: 65540,
          5242880: 67108868,
          6291456: 67174660,
          7340032: 67174400,
          8388608: 67108864,
          9437184: 67174656,
          10485760: 65792,
          11534336: 67174404,
          12582912: 67109124,
          13631488: 65536,
          14680064: 4,
          15728640: 256,
          524288: 67174656,
          1572864: 67174404,
          2621440: 0,
          3670016: 67109120,
          4718592: 67108868,
          5767168: 65536,
          6815744: 65540,
          7864320: 260,
          8912896: 4,
          9961472: 256,
          11010048: 67174400,
          12058624: 65796,
          13107200: 65792,
          14155776: 67109124,
          15204352: 67174660,
          16252928: 67108864,
          16777216: 67174656,
          17825792: 65540,
          18874368: 65536,
          19922944: 67109120,
          20971520: 256,
          22020096: 67174660,
          23068672: 67108868,
          24117248: 0,
          25165824: 67109124,
          26214400: 67108864,
          27262976: 4,
          28311552: 65792,
          29360128: 67174400,
          30408704: 260,
          31457280: 65796,
          32505856: 67174404,
          17301504: 67108864,
          18350080: 260,
          19398656: 67174656,
          20447232: 0,
          21495808: 65540,
          22544384: 67109120,
          23592960: 256,
          24641536: 67174404,
          25690112: 65536,
          26738688: 67174660,
          27787264: 65796,
          28835840: 67108868,
          29884416: 67109124,
          30932992: 67174400,
          31981568: 4,
          33030144: 65792
        }, {
          0: 2151682048,
          65536: 2147487808,
          131072: 4198464,
          196608: 2151677952,
          262144: 0,
          327680: 4198400,
          393216: 2147483712,
          458752: 4194368,
          524288: 2147483648,
          589824: 4194304,
          655360: 64,
          720896: 2147487744,
          786432: 2151678016,
          851968: 4160,
          917504: 4096,
          983040: 2151682112,
          32768: 2147487808,
          98304: 64,
          163840: 2151678016,
          229376: 2147487744,
          294912: 4198400,
          360448: 2151682112,
          425984: 0,
          491520: 2151677952,
          557056: 4096,
          622592: 2151682048,
          688128: 4194304,
          753664: 4160,
          819200: 2147483648,
          884736: 4194368,
          950272: 4198464,
          1015808: 2147483712,
          1048576: 4194368,
          1114112: 4198400,
          1179648: 2147483712,
          1245184: 0,
          1310720: 4160,
          1376256: 2151678016,
          1441792: 2151682048,
          1507328: 2147487808,
          1572864: 2151682112,
          1638400: 2147483648,
          1703936: 2151677952,
          1769472: 4198464,
          1835008: 2147487744,
          1900544: 4194304,
          1966080: 64,
          2031616: 4096,
          1081344: 2151677952,
          1146880: 2151682112,
          1212416: 0,
          1277952: 4198400,
          1343488: 4194368,
          1409024: 2147483648,
          1474560: 2147487808,
          1540096: 64,
          1605632: 2147483712,
          1671168: 4096,
          1736704: 2147487744,
          1802240: 2151678016,
          1867776: 4160,
          1933312: 2151682048,
          1998848: 4194304,
          2064384: 4198464
        }, {
          0: 128,
          4096: 17039360,
          8192: 262144,
          12288: 536870912,
          16384: 537133184,
          20480: 16777344,
          24576: 553648256,
          28672: 262272,
          32768: 16777216,
          36864: 537133056,
          40960: 536871040,
          45056: 553910400,
          49152: 553910272,
          53248: 0,
          57344: 17039488,
          61440: 553648128,
          2048: 17039488,
          6144: 553648256,
          10240: 128,
          14336: 17039360,
          18432: 262144,
          22528: 537133184,
          26624: 553910272,
          30720: 536870912,
          34816: 537133056,
          38912: 0,
          43008: 553910400,
          47104: 16777344,
          51200: 536871040,
          55296: 553648128,
          59392: 16777216,
          63488: 262272,
          65536: 262144,
          69632: 128,
          73728: 536870912,
          77824: 553648256,
          81920: 16777344,
          86016: 553910272,
          90112: 537133184,
          94208: 16777216,
          98304: 553910400,
          102400: 553648128,
          106496: 17039360,
          110592: 537133056,
          114688: 262272,
          118784: 536871040,
          122880: 0,
          126976: 17039488,
          67584: 553648256,
          71680: 16777216,
          75776: 17039360,
          79872: 537133184,
          83968: 536870912,
          88064: 17039488,
          92160: 128,
          96256: 553910272,
          100352: 262272,
          104448: 553910400,
          108544: 0,
          112640: 553648128,
          116736: 16777344,
          120832: 262144,
          124928: 537133056,
          129024: 536871040
        }, {
          0: 268435464,
          256: 8192,
          512: 270532608,
          768: 270540808,
          1024: 268443648,
          1280: 2097152,
          1536: 2097160,
          1792: 268435456,
          2048: 0,
          2304: 268443656,
          2560: 2105344,
          2816: 8,
          3072: 270532616,
          3328: 2105352,
          3584: 8200,
          3840: 270540800,
          128: 270532608,
          384: 270540808,
          640: 8,
          896: 2097152,
          1152: 2105352,
          1408: 268435464,
          1664: 268443648,
          1920: 8200,
          2176: 2097160,
          2432: 8192,
          2688: 268443656,
          2944: 270532616,
          3200: 0,
          3456: 270540800,
          3712: 2105344,
          3968: 268435456,
          4096: 268443648,
          4352: 270532616,
          4608: 270540808,
          4864: 8200,
          5120: 2097152,
          5376: 268435456,
          5632: 268435464,
          5888: 2105344,
          6144: 2105352,
          6400: 0,
          6656: 8,
          6912: 270532608,
          7168: 8192,
          7424: 268443656,
          7680: 270540800,
          7936: 2097160,
          4224: 8,
          4480: 2105344,
          4736: 2097152,
          4992: 268435464,
          5248: 268443648,
          5504: 8200,
          5760: 270540808,
          6016: 270532608,
          6272: 270540800,
          6528: 270532616,
          6784: 8192,
          7040: 2105352,
          7296: 2097160,
          7552: 0,
          7808: 268435456,
          8064: 268443656
        }, {
          0: 1048576,
          16: 33555457,
          32: 1024,
          48: 1049601,
          64: 34604033,
          80: 0,
          96: 1,
          112: 34603009,
          128: 33555456,
          144: 1048577,
          160: 33554433,
          176: 34604032,
          192: 34603008,
          208: 1025,
          224: 1049600,
          240: 33554432,
          8: 34603009,
          24: 0,
          40: 33555457,
          56: 34604032,
          72: 1048576,
          88: 33554433,
          104: 33554432,
          120: 1025,
          136: 1049601,
          152: 33555456,
          168: 34603008,
          184: 1048577,
          200: 1024,
          216: 34604033,
          232: 1,
          248: 1049600,
          256: 33554432,
          272: 1048576,
          288: 33555457,
          304: 34603009,
          320: 1048577,
          336: 33555456,
          352: 34604032,
          368: 1049601,
          384: 1025,
          400: 34604033,
          416: 1049600,
          432: 1,
          448: 0,
          464: 34603008,
          480: 33554433,
          496: 1024,
          264: 1049600,
          280: 33555457,
          296: 34603009,
          312: 1,
          328: 33554432,
          344: 1048576,
          360: 1025,
          376: 34604032,
          392: 33554433,
          408: 34603008,
          424: 0,
          440: 34604033,
          456: 1049601,
          472: 1024,
          488: 33555456,
          504: 1048577
        }, {
          0: 134219808,
          1: 131072,
          2: 134217728,
          3: 32,
          4: 131104,
          5: 134350880,
          6: 134350848,
          7: 2048,
          8: 134348800,
          9: 134219776,
          10: 133120,
          11: 134348832,
          12: 2080,
          13: 0,
          14: 134217760,
          15: 133152,
          2147483648: 2048,
          2147483649: 134350880,
          2147483650: 134219808,
          2147483651: 134217728,
          2147483652: 134348800,
          2147483653: 133120,
          2147483654: 133152,
          2147483655: 32,
          2147483656: 134217760,
          2147483657: 2080,
          2147483658: 131104,
          2147483659: 134350848,
          2147483660: 0,
          2147483661: 134348832,
          2147483662: 134219776,
          2147483663: 131072,
          16: 133152,
          17: 134350848,
          18: 32,
          19: 2048,
          20: 134219776,
          21: 134217760,
          22: 134348832,
          23: 131072,
          24: 0,
          25: 131104,
          26: 134348800,
          27: 134219808,
          28: 134350880,
          29: 133120,
          30: 2080,
          31: 134217728,
          2147483664: 131072,
          2147483665: 2048,
          2147483666: 134348832,
          2147483667: 133152,
          2147483668: 32,
          2147483669: 134348800,
          2147483670: 134217728,
          2147483671: 134219808,
          2147483672: 134350880,
          2147483673: 134217760,
          2147483674: 134219776,
          2147483675: 0,
          2147483676: 133120,
          2147483677: 2080,
          2147483678: 131104,
          2147483679: 134350848
        }];
        var h = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679];
        var v = s.DES = o.extend({
          _doReset: function () {
            for (var E = this._key, A = E.words, I = [], b = 0; b < 56; b++) {
              var T = d[b] - 1;
              I[b] = A[T >>> 5] >>> 31 - T % 32 & 1;
            }
            for (var R = this._subKeys = [], B = 0; B < 16; B++) {
              for (var z = R[B] = [], N = l[B], b = 0; b < 24; b++) {
                z[b / 6 | 0] |= I[(c[b] - 1 + N) % 28] << 31 - b % 6;
                z[4 + (b / 6 | 0)] |= I[28 + (c[b + 24] - 1 + N) % 28] << 31 - b % 6;
              }
              z[0] = z[0] << 1 | z[0] >>> 31;
              for (var b = 1; b < 7; b++) {
                z[b] = z[b] >>> (b - 1) * 4 + 3;
              }
              z[7] = z[7] << 5 | z[7] >>> 27;
            }
            for (var S = this._invSubKeys = [], b = 0; b < 16; b++) {
              S[b] = R[15 - b];
            }
          },
          encryptBlock: function (E, A) {
            this._doCryptBlock(E, A, this._subKeys);
          },
          decryptBlock: function (E, A) {
            this._doCryptBlock(E, A, this._invSubKeys);
          },
          _doCryptBlock: function (E, A, I) {
            this._lBlock = E[A];
            this._rBlock = E[A + 1];
            _.call(this, 4, 252645135);
            _.call(this, 16, 65535);
            y.call(this, 2, 858993459);
            y.call(this, 8, 16711935);
            _.call(this, 1, 1431655765);
            for (var b = 0; b < 16; b++) {
              for (var T = I[b], R = this._lBlock, B = this._rBlock, z = 0, N = 0; N < 8; N++) {
                z |= m[N][((B ^ T[N]) & h[N]) >>> 0];
              }
              this._lBlock = B;
              this._rBlock = R ^ z;
            }
            var S = this._lBlock;
            this._lBlock = this._rBlock;
            this._rBlock = S;
            _.call(this, 1, 1431655765);
            y.call(this, 8, 16711935);
            y.call(this, 2, 858993459);
            _.call(this, 16, 65535);
            _.call(this, 4, 252645135);
            E[A] = this._lBlock;
            E[A + 1] = this._rBlock;
          },
          keySize: 2,
          ivSize: 2,
          blockSize: 2
        });
        function _(E, A) {
          var I = (this._lBlock >>> E ^ this._rBlock) & A;
          this._rBlock ^= I;
          this._lBlock ^= I << E;
        }
        function y(E, A) {
          var I = (this._rBlock >>> E ^ this._lBlock) & A;
          this._lBlock ^= I;
          this._rBlock ^= I << E;
        }
        n.DES = o._createHelper(v);
        var g = s.TripleDES = o.extend({
          _doReset: function () {
            var E = this._key;
            var A = E.words;
            this._des1 = v.createEncryptor(a.create(A.slice(0, 2)));
            this._des2 = v.createEncryptor(a.create(A.slice(2, 4)));
            this._des3 = v.createEncryptor(a.create(A.slice(4, 6)));
          },
          encryptBlock: function (E, A) {
            this._des1.encryptBlock(E, A);
            this._des2.decryptBlock(E, A);
            this._des3.encryptBlock(E, A);
          },
          decryptBlock: function (E, A) {
            this._des3.decryptBlock(E, A);
            this._des2.encryptBlock(E, A);
            this._des1.decryptBlock(E, A);
          },
          keySize: 6,
          ivSize: 2,
          blockSize: 2
        });
        n.TripleDES = o._createHelper(g);
      })();
      return t.TripleDES;
    });
  }
});
var t1 = me({
  "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/rc4.js"(e, r) {
    (function (t, n, i) {
      if (typeof e == "object") {
        r.exports = e = n(we(), Jr(), Qr(), yr(), je());
      } else if (typeof define == "function" && define.amd) {
        define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], n);
      } else {
        n(t.CryptoJS);
      }
    })(e, function (t) {
      (function () {
        var n = t;
        var i = n.lib;
        var a = i.StreamCipher;
        var o = n.algo;
        var s = o.RC4 = a.extend({
          _doReset: function () {
            for (var l = this._key, m = l.words, h = l.sigBytes, v = this._S = [], _ = 0; _ < 256; _++) {
              v[_] = _;
            }
            for (var _ = 0, y = 0; _ < 256; _++) {
              var g = _ % h;
              var E = m[g >>> 2] >>> 24 - g % 4 * 8 & 255;
              y = (y + v[_] + E) % 256;
              var A = v[_];
              v[_] = v[y];
              v[y] = A;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function (l, m) {
            l[m] ^= d.call(this);
          },
          keySize: 8,
          ivSize: 0
        });
        function d() {
          for (var l = this._S, m = this._i, h = this._j, v = 0, _ = 0; _ < 4; _++) {
            m = (m + 1) % 256;
            h = (h + l[m]) % 256;
            var y = l[m];
            l[m] = l[h];
            l[h] = y;
            v |= l[(l[m] + l[h]) % 256] << 24 - _ * 8;
          }
          this._i = m;
          this._j = h;
          return v;
        }
        n.RC4 = a._createHelper(s);
        var c = o.RC4Drop = s.extend({
          cfg: s.cfg.extend({
            drop: 192
          }),
          _doReset: function () {
            s._doReset.call(this);
            for (var l = this.cfg.drop; l > 0; l--) {
              d.call(this);
            }
          }
        });
        n.RC4Drop = a._createHelper(c);
      })();
      return t.RC4;
    });
  }
});
var r1 = me({
  "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/rabbit.js"(e, r) {
    (function (t, n, i) {
      if (typeof e == "object") {
        r.exports = e = n(we(), Jr(), Qr(), yr(), je());
      } else if (typeof define == "function" && define.amd) {
        define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], n);
      } else {
        n(t.CryptoJS);
      }
    })(e, function (t) {
      (function () {
        var n = t;
        var i = n.lib;
        var a = i.StreamCipher;
        var o = n.algo;
        var s = [];
        var d = [];
        var c = [];
        var l = o.Rabbit = a.extend({
          _doReset: function () {
            for (var h = this._key.words, v = this.cfg.iv, _ = 0; _ < 4; _++) {
              h[_] = (h[_] << 8 | h[_] >>> 24) & 16711935 | (h[_] << 24 | h[_] >>> 8) & 4278255360;
            }
            var y = this._X = [h[0], h[3] << 16 | h[2] >>> 16, h[1], h[0] << 16 | h[3] >>> 16, h[2], h[1] << 16 | h[0] >>> 16, h[3], h[2] << 16 | h[1] >>> 16];
            var g = this._C = [h[2] << 16 | h[2] >>> 16, h[0] & 4294901760 | h[1] & 65535, h[3] << 16 | h[3] >>> 16, h[1] & 4294901760 | h[2] & 65535, h[0] << 16 | h[0] >>> 16, h[2] & 4294901760 | h[3] & 65535, h[1] << 16 | h[1] >>> 16, h[3] & 4294901760 | h[0] & 65535];
            this._b = 0;
            for (var _ = 0; _ < 4; _++) {
              m.call(this);
            }
            for (var _ = 0; _ < 8; _++) {
              g[_] ^= y[_ + 4 & 7];
            }
            if (v) {
              var E = v.words;
              var A = E[0];
              var I = E[1];
              var b = (A << 8 | A >>> 24) & 16711935 | (A << 24 | A >>> 8) & 4278255360;
              var T = (I << 8 | I >>> 24) & 16711935 | (I << 24 | I >>> 8) & 4278255360;
              var R = b >>> 16 | T & 4294901760;
              var B = T << 16 | b & 65535;
              g[0] ^= b;
              g[1] ^= R;
              g[2] ^= T;
              g[3] ^= B;
              g[4] ^= b;
              g[5] ^= R;
              g[6] ^= T;
              g[7] ^= B;
              for (var _ = 0; _ < 4; _++) {
                m.call(this);
              }
            }
          },
          _doProcessBlock: function (h, v) {
            var _ = this._X;
            m.call(this);
            s[0] = _[0] ^ _[5] >>> 16 ^ _[3] << 16;
            s[1] = _[2] ^ _[7] >>> 16 ^ _[5] << 16;
            s[2] = _[4] ^ _[1] >>> 16 ^ _[7] << 16;
            s[3] = _[6] ^ _[3] >>> 16 ^ _[1] << 16;
            for (var y = 0; y < 4; y++) {
              s[y] = (s[y] << 8 | s[y] >>> 24) & 16711935 | (s[y] << 24 | s[y] >>> 8) & 4278255360;
              h[v + y] ^= s[y];
            }
          },
          blockSize: 4,
          ivSize: 2
        });
        function m() {
          for (var h = this._X, v = this._C, _ = 0; _ < 8; _++) {
            d[_] = v[_];
          }
          v[0] = v[0] + 1295307597 + this._b | 0;
          v[1] = v[1] + 3545052371 + (v[0] >>> 0 < d[0] >>> 0 ? 1 : 0) | 0;
          v[2] = v[2] + 886263092 + (v[1] >>> 0 < d[1] >>> 0 ? 1 : 0) | 0;
          v[3] = v[3] + 1295307597 + (v[2] >>> 0 < d[2] >>> 0 ? 1 : 0) | 0;
          v[4] = v[4] + 3545052371 + (v[3] >>> 0 < d[3] >>> 0 ? 1 : 0) | 0;
          v[5] = v[5] + 886263092 + (v[4] >>> 0 < d[4] >>> 0 ? 1 : 0) | 0;
          v[6] = v[6] + 1295307597 + (v[5] >>> 0 < d[5] >>> 0 ? 1 : 0) | 0;
          v[7] = v[7] + 3545052371 + (v[6] >>> 0 < d[6] >>> 0 ? 1 : 0) | 0;
          this._b = v[7] >>> 0 < d[7] >>> 0 ? 1 : 0;
          for (var _ = 0; _ < 8; _++) {
            var y = h[_] + v[_];
            var g = y & 65535;
            var E = y >>> 16;
            var A = ((g * g >>> 17) + g * E >>> 15) + E * E;
            var I = ((y & 4294901760) * y | 0) + ((y & 65535) * y | 0);
            c[_] = A ^ I;
          }
          h[0] = c[0] + (c[7] << 16 | c[7] >>> 16) + (c[6] << 16 | c[6] >>> 16) | 0;
          h[1] = c[1] + (c[0] << 8 | c[0] >>> 24) + c[7] | 0;
          h[2] = c[2] + (c[1] << 16 | c[1] >>> 16) + (c[0] << 16 | c[0] >>> 16) | 0;
          h[3] = c[3] + (c[2] << 8 | c[2] >>> 24) + c[1] | 0;
          h[4] = c[4] + (c[3] << 16 | c[3] >>> 16) + (c[2] << 16 | c[2] >>> 16) | 0;
          h[5] = c[5] + (c[4] << 8 | c[4] >>> 24) + c[3] | 0;
          h[6] = c[6] + (c[5] << 16 | c[5] >>> 16) + (c[4] << 16 | c[4] >>> 16) | 0;
          h[7] = c[7] + (c[6] << 8 | c[6] >>> 24) + c[5] | 0;
        }
        n.Rabbit = a._createHelper(l);
      })();
      return t.Rabbit;
    });
  }
});
var n1 = me({
  "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/rabbit-legacy.js"(e, r) {
    (function (t, n, i) {
      if (typeof e == "object") {
        r.exports = e = n(we(), Jr(), Qr(), yr(), je());
      } else if (typeof define == "function" && define.amd) {
        define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], n);
      } else {
        n(t.CryptoJS);
      }
    })(e, function (t) {
      (function () {
        var n = t;
        var i = n.lib;
        var a = i.StreamCipher;
        var o = n.algo;
        var s = [];
        var d = [];
        var c = [];
        var l = o.RabbitLegacy = a.extend({
          _doReset: function () {
            var h = this._key.words;
            var v = this.cfg.iv;
            var _ = this._X = [h[0], h[3] << 16 | h[2] >>> 16, h[1], h[0] << 16 | h[3] >>> 16, h[2], h[1] << 16 | h[0] >>> 16, h[3], h[2] << 16 | h[1] >>> 16];
            var y = this._C = [h[2] << 16 | h[2] >>> 16, h[0] & 4294901760 | h[1] & 65535, h[3] << 16 | h[3] >>> 16, h[1] & 4294901760 | h[2] & 65535, h[0] << 16 | h[0] >>> 16, h[2] & 4294901760 | h[3] & 65535, h[1] << 16 | h[1] >>> 16, h[3] & 4294901760 | h[0] & 65535];
            this._b = 0;
            for (var g = 0; g < 4; g++) {
              m.call(this);
            }
            for (var g = 0; g < 8; g++) {
              y[g] ^= _[g + 4 & 7];
            }
            if (v) {
              var E = v.words;
              var A = E[0];
              var I = E[1];
              var b = (A << 8 | A >>> 24) & 16711935 | (A << 24 | A >>> 8) & 4278255360;
              var T = (I << 8 | I >>> 24) & 16711935 | (I << 24 | I >>> 8) & 4278255360;
              var R = b >>> 16 | T & 4294901760;
              var B = T << 16 | b & 65535;
              y[0] ^= b;
              y[1] ^= R;
              y[2] ^= T;
              y[3] ^= B;
              y[4] ^= b;
              y[5] ^= R;
              y[6] ^= T;
              y[7] ^= B;
              for (var g = 0; g < 4; g++) {
                m.call(this);
              }
            }
          },
          _doProcessBlock: function (h, v) {
            var _ = this._X;
            m.call(this);
            s[0] = _[0] ^ _[5] >>> 16 ^ _[3] << 16;
            s[1] = _[2] ^ _[7] >>> 16 ^ _[5] << 16;
            s[2] = _[4] ^ _[1] >>> 16 ^ _[7] << 16;
            s[3] = _[6] ^ _[3] >>> 16 ^ _[1] << 16;
            for (var y = 0; y < 4; y++) {
              s[y] = (s[y] << 8 | s[y] >>> 24) & 16711935 | (s[y] << 24 | s[y] >>> 8) & 4278255360;
              h[v + y] ^= s[y];
            }
          },
          blockSize: 4,
          ivSize: 2
        });
        function m() {
          for (var h = this._X, v = this._C, _ = 0; _ < 8; _++) {
            d[_] = v[_];
          }
          v[0] = v[0] + 1295307597 + this._b | 0;
          v[1] = v[1] + 3545052371 + (v[0] >>> 0 < d[0] >>> 0 ? 1 : 0) | 0;
          v[2] = v[2] + 886263092 + (v[1] >>> 0 < d[1] >>> 0 ? 1 : 0) | 0;
          v[3] = v[3] + 1295307597 + (v[2] >>> 0 < d[2] >>> 0 ? 1 : 0) | 0;
          v[4] = v[4] + 3545052371 + (v[3] >>> 0 < d[3] >>> 0 ? 1 : 0) | 0;
          v[5] = v[5] + 886263092 + (v[4] >>> 0 < d[4] >>> 0 ? 1 : 0) | 0;
          v[6] = v[6] + 1295307597 + (v[5] >>> 0 < d[5] >>> 0 ? 1 : 0) | 0;
          v[7] = v[7] + 3545052371 + (v[6] >>> 0 < d[6] >>> 0 ? 1 : 0) | 0;
          this._b = v[7] >>> 0 < d[7] >>> 0 ? 1 : 0;
          for (var _ = 0; _ < 8; _++) {
            var y = h[_] + v[_];
            var g = y & 65535;
            var E = y >>> 16;
            var A = ((g * g >>> 17) + g * E >>> 15) + E * E;
            var I = ((y & 4294901760) * y | 0) + ((y & 65535) * y | 0);
            c[_] = A ^ I;
          }
          h[0] = c[0] + (c[7] << 16 | c[7] >>> 16) + (c[6] << 16 | c[6] >>> 16) | 0;
          h[1] = c[1] + (c[0] << 8 | c[0] >>> 24) + c[7] | 0;
          h[2] = c[2] + (c[1] << 16 | c[1] >>> 16) + (c[0] << 16 | c[0] >>> 16) | 0;
          h[3] = c[3] + (c[2] << 8 | c[2] >>> 24) + c[1] | 0;
          h[4] = c[4] + (c[3] << 16 | c[3] >>> 16) + (c[2] << 16 | c[2] >>> 16) | 0;
          h[5] = c[5] + (c[4] << 8 | c[4] >>> 24) + c[3] | 0;
          h[6] = c[6] + (c[5] << 16 | c[5] >>> 16) + (c[4] << 16 | c[4] >>> 16) | 0;
          h[7] = c[7] + (c[6] << 8 | c[6] >>> 24) + c[5] | 0;
        }
        n.RabbitLegacy = a._createHelper(l);
      })();
      return t.RabbitLegacy;
    });
  }
});
var i1 = me({
  "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/index.js"(e, r) {
    (function (t, n, i) {
      if (typeof e == "object") {
        r.exports = e = n(we(), ta(), Oh(), Nh(), Jr(), Qr(), _s(), Vc(), Fh(), qc(), Uh(), Lh(), Ph(), gs(), Mh(), yr(), je(), jh(), Zh(), Hh(), Wh(), Vh(), qh(), Kh(), Gh(), Xh(), Yh(), Jh(), Qh(), e1(), t1(), r1(), n1());
      } else if (typeof define == "function" && define.amd) {
        define(["./core", "./x64-core", "./lib-typedarrays", "./enc-utf16", "./enc-base64", "./md5", "./sha1", "./sha256", "./sha224", "./sha512", "./sha384", "./sha3", "./ripemd160", "./hmac", "./pbkdf2", "./evpkdf", "./cipher-core", "./mode-cfb", "./mode-ctr", "./mode-ctr-gladman", "./mode-ofb", "./mode-ecb", "./pad-ansix923", "./pad-iso10126", "./pad-iso97971", "./pad-zeropadding", "./pad-nopadding", "./format-hex", "./aes", "./tripledes", "./rc4", "./rabbit", "./rabbit-legacy"], n);
      } else {
        t.CryptoJS = n(t.CryptoJS);
      }
    })(e, function (t) {
      return t;
    });
  }
});
var Oi;
var Ni;
var Fi;
var er;
var Tr;
var a1 = class {
  constructor(e, r) {
    fe(this, er);
    fe(this, Oi, undefined);
    fe(this, Ni, undefined);
    fe(this, Fi, undefined);
    ye(this, Oi, e);
    ye(this, Ni, r);
    ye(this, Fi, typeof GetParentResourceName != "function");
  }
  async get(e, r, t = {}) {
    return he(this, er, Tr).call(this, e, "GET", undefined, r, t);
  }
  async post(e, r = {}, t, n = {}) {
    return he(this, er, Tr).call(this, e, "POST", r, t, n);
  }
  async delete(e, r = {}, t, n = {}) {
    return he(this, er, Tr).call(this, e, "DELETE", r, t, n);
  }
  async patch(e, r = {}, t, n = {}) {
    return he(this, er, Tr).call(this, e, "PUT", r, t, n);
  }
  async put(e, r = {}, t, n = {}) {
    return he(this, er, Tr).call(this, e, "PUT", r, t, n);
  }
};
Oi = new WeakMap();
Ni = new WeakMap();
Fi = new WeakMap();
er = new WeakSet();
Tr = async function (e, r, t, n, i = {}) {
  if (ee(this, Fi)) {
    if (i.delay) {
      await new Promise(o => setTimeout(o, i.delay));
    }
    return [true, {
      status: 200,
      data: i.mockupData ?? null
    }];
  }
  try {
    const o = await fetch(`${ee(this, Oi)}${e}`, {
      ...n,
      method: r,
      body: t ? JSON.stringify(t) : undefined,
      headers: {
        ...ee(this, Ni),
        ...(n?.headers || {})
      }
    });
    const s = await o.json();
    return [true, {
      status: o.status,
      data: s
    }];
  } catch (o) {
    return [false, {
      code: o.code,
      message: o.message
    }];
  }
};
var s1;
var Rt = zh(i1());
var _r = {
  warning: 1,
  log: 2,
  error: 3,
  debug: 4
};
var xa = typeof GetConvar == "function" ? GetConvar(`${GetCurrentResourceName()}_logLevel`, "") : "";
var Jt = typeof GetConvar == "function" ? GetConvar("sv_loglevel", "warning") : "warning";
Jt = xa?.length > 0 ? xa : Jt;
(() => {
  if (!_r[Jt]) {
    throw new Error(`Invalid log level: ${Jt}`);
  }
})();
var o1 = () => _r[Jt] >= _r.warning;
var c1 = () => _r[Jt] >= _r.log;
var l1 = () => _r[Jt] >= _r.error;
var u1 = () => Jt === "debug";
var Ze = {
  warning: (e, ...r) => {
    if (o1()) {
      console.log(`^3[WARNING] ^7${e}`, ...r, "^0");
    }
  },
  log: (e, ...r) => {
    if (c1()) {
      console.log(`^5[nopixel] ^7${e}`, ...r, "^0");
    }
  },
  debug: (e, ...r) => {
    if (u1()) {
      console.log(`^2[D] ${e}`, ...r, "^0");
    }
  },
  error: (e, ...r) => {
    if (l1()) {
      console.log(`^1[ERROR] ${e}`, ...r, "^0");
    }
  }
};
var ms = (e = 128) => Rt.lib.WordArray.random(e / 8).toString();
var f1 = (e, r) => typeof e != "string" || typeof r != "string" ? "" : Rt.AES.encrypt(e, r).toString();
var d1 = (e, r) => typeof e != "string" || typeof r != "string" ? "" : Rt.AES.decrypt(e, r).toString(Rt.enc.Utf8);
var h1 = e => typeof e != "string" ? "" : Rt.enc.Base64.stringify(Rt.enc.Utf8.parse(e));
var v1 = e => typeof e != "string" ? "" : Rt.enc.Utf8.stringify(Rt.enc.Base64.parse(e));
var p1 = (e, r) => h1((0, Rt.HmacMD5)(e, r).toString());
var ka = {};
var Kc = (e, r = ms()) => {
  if (ka[e] === undefined) {
    ka[e] = p1(e, r);
  }
  return ka[e];
};
var Gc = (e, r = ms()) => {
  try {
    return f1(JSON.stringify(e), r);
  } catch {
    Ze.error("Failed to encode payload");
  }
};
var _1 = (e, r = ms()) => {
  try {
    return JSON.parse(d1(e, r));
  } catch {
    Ze.error("Failed to decode payload");
  }
};
var Xc = {};
vs(Xc, {
  MathUtils: () => x1
});
var Et;
var Ft;
var Yc = class Jc {
  constructor(r, t, n) {
    fe(this, Et);
    const i = he(this, Et, Ft).call(this, r, t, n);
    this.x = i.x;
    this.y = i.y;
    this.z = i.z;
  }
  equals(r, t, n) {
    const i = he(this, Et, Ft).call(this, r, t, n);
    return this.x === i.x && this.y === i.y && this.z === i.z;
  }
  add(r, t, n, i) {
    let a = he(this, Et, Ft).call(this, r, t, n);
    this.x += i ? a.x * i : a.x;
    this.y += i ? a.y * i : a.y;
    this.z += i ? a.z * i : a.z;
    return this;
  }
  addScalar(r) {
    if (typeof r != "number") {
      throw new Error("Invalid scalar");
    }
    this.x += r;
    this.y += r;
    this.z += r;
    return this;
  }
  sub(r, t, n, i) {
    const a = he(this, Et, Ft).call(this, r, t, n);
    this.x -= i ? a.x * i : a.x;
    this.y -= i ? a.y * i : a.y;
    this.z -= i ? a.z * i : a.z;
    return this;
  }
  subScalar(r) {
    if (typeof r != "number") {
      throw new Error("Invalid scalar");
    }
    this.x -= r;
    this.y -= r;
    this.z -= r;
    return this;
  }
  multiply(r, t, n) {
    const i = he(this, Et, Ft).call(this, r, t, n);
    this.x *= i.x;
    this.y *= i.y;
    this.z *= i.z;
    return this;
  }
  multiplyScalar(r) {
    if (typeof r != "number") {
      throw new Error("Invalid scalar");
    }
    this.x *= r;
    this.y *= r;
    this.z *= r;
    return this;
  }
  divide(r, t, n) {
    const i = he(this, Et, Ft).call(this, r, t, n);
    this.x /= i.x;
    this.y /= i.y;
    this.z /= i.z;
    return this;
  }
  divideScalar(r) {
    if (typeof r != "number") {
      throw new Error("Invalid scalar");
    }
    this.x /= r;
    this.y /= r;
    this.z /= r;
    return this;
  }
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);
    return this;
  }
  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);
    return this;
  }
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);
    return this;
  }
  getCenter(r, t, n) {
    const i = he(this, Et, Ft).call(this, r, t, n);
    return new Jc((this.x + i.x) / 2, (this.y + i.y) / 2, (this.z + i.z) / 2);
  }
  getDistance(r, t, n) {
    const [i, a, o] = r instanceof Array ? r : typeof r == "object" ? [r.x, r.y, r.z] : [r, t, n];
    if (typeof i != "number" || typeof a != "number" || typeof o != "number") {
      throw new Error("Invalid vector coordinates");
    }
    const [s, d, c] = [this.x - i, this.y - a, this.z - o];
    return Math.sqrt(s * s + d * d + c * c);
  }
  toArray(r) {
    if (typeof r == "number") {
      return [parseFloat(this.x.toFixed(r)), parseFloat(this.y.toFixed(r)), parseFloat(this.z.toFixed(r))];
    } else {
      return [this.x, this.y, this.z];
    }
  }
  toJSON(r) {
    if (typeof r == "number") {
      return {
        x: parseFloat(this.x.toFixed(r)),
        y: parseFloat(this.y.toFixed(r)),
        z: parseFloat(this.z.toFixed(r))
      };
    } else {
      return {
        x: this.x,
        y: this.y,
        z: this.z
      };
    }
  }
  toString(r) {
    return JSON.stringify(this.toJSON(r));
  }
};
Et = new WeakSet();
Ft = function (e, r, t) {
  let n = {
    x: 0,
    y: 0,
    z: 0
  };
  if (e instanceof Yc) {
    n = e;
  } else if (e instanceof Array) {
    n = {
      x: e[0],
      y: e[1],
      z: e[2]
    };
  } else if (typeof e == "object") {
    n = e;
  } else {
    n = {
      x: e,
      y: r,
      z: t
    };
  }
  if (typeof n.x != "number" || typeof n.y != "number" || typeof n.z != "number") {
    throw new Error("Invalid vector coordinates");
  }
  return n;
};
var ln = Yc;
var g1 = (e, r, t) => Math.min(Math.max(e, r), t);
var m1 = (e, r, t) => r[0] + (t - e[0]) * (r[1] - r[0]) / (e[1] - e[0]);
var y1 = ([e, r, t], [n, i, a]) => {
  const [o, s, d] = [e - n, r - i, t - a];
  return Math.sqrt(o * o + s * s + d * d);
};
var w1 = (e, r) => Math.floor(r ? Math.random() * (r - e + 1) + e : Math.random() * e);
var b1 = (e, r, t) => {
  if (e instanceof ln) {
    return e;
  }
  if (e instanceof Array) {
    return new ln(e);
  }
  if (typeof e == "object") {
    return new ln(e);
  }
  if (typeof e != "number" || typeof r != "number" || typeof t != "number") {
    throw new Error("Invalid vector coordinates");
  }
  return new ln(e, r, t);
};
var x1 = {
  clamp: g1,
  getMapRange: m1,
  getDistance: y1,
  getRandomNumber: w1,
  parseVector3: b1
};
function k1(e, r) {
  const t = "_";
  const n = Qc((i, a, ...o) => e(i, ...o), r);
  return {
    get: function (...i) {
      return n.get(t, ...i);
    },
    reset: function () {
      n.reset(t);
    }
  };
}
function Qc(e, r) {
  const t = r.timeToLive || 60000;
  const n = {};
  async function i(a, ...o) {
    let s = n[a];
    if (!s) {
      s = {
        value: null,
        lastUpdated: 0
      };
      n[a] = s;
    }
    const d = Date.now();
    if (s.lastUpdated === 0 || d - s.lastUpdated > t) {
      const [c, l] = await e(s, a, ...o);
      if (c) {
        s.lastUpdated = d;
        s.value = l;
      }
      return l;
    }
    return await new Promise(c => setTimeout(() => c(s.value), 0));
  }
  return {
    get: async function (a, ...o) {
      return await i(a, ...o);
    },
    reset: function (a) {
      const o = n[a];
      if (o) {
        o.lastUpdated = 0;
      }
    }
  };
}
function E1() {
  if (typeof Cu.crypto == "object") {
    return Lf();
  } else {
    return new Th(4).toString();
  }
}
function S1(e) {
  return qs(e, qs.URL);
}
function A1(e, r) {
  return new Promise((t, n) => {
    const i = Date.now();
    const a = setInterval(() => {
      const o = Date.now() - i > r;
      if (e() || o) {
        clearInterval(a);
        return t(o);
      }
    }, 1);
  });
}
function el(e) {
  return new Promise(r => setTimeout(() => r(), e));
}
function C1() {
  return el(0);
}
({
  ...Xc
});
var Je;
var un;
var T1 = class {
  constructor(e) {
    fe(this, Je, undefined);
    fe(this, un, undefined);
    ye(this, un, e ?? 5);
    ye(this, Je, new Map());
  }
  setTTL(e) {
    ye(this, un, e);
  }
  set(e, r, t) {
    ee(this, Je).set(e, {
      value: r,
      expiration: Date.now() + (t ?? ee(this, un)) * 1000
    });
    return this;
  }
  get(e, r = false) {
    const t = ee(this, Je).get(e);
    const n = t ? r ? true : t.expiration > Date.now() : false;
    if (!t || !n) {
      if (t) {
        ee(this, Je).delete(e);
      }
      return;
    }
    return t.value;
  }
  has(e, r = false) {
    const t = ee(this, Je).get(e);
    const n = t ? r ? true : t.expiration > Date.now() : false;
    if (t && !n) {
      ee(this, Je).delete(e);
    }
    return n;
  }
  delete(e) {
    return ee(this, Je).delete(e);
  }
  clear() {
    ee(this, Je).clear();
  }
  values(e = false) {
    const r = [];
    const t = Date.now();
    for (const n of ee(this, Je).values()) {
      if (e || n.expiration > t) {
        r.push(n.value);
      }
    }
    return r;
  }
  keys(e = false) {
    const r = [];
    const t = Date.now();
    for (const [n, i] of ee(this, Je).entries()) {
      if (e || i.expiration > t) {
        r.push(n);
      }
    }
    return r;
  }
  entries(e = false) {
    const r = [];
    const t = Date.now();
    for (const [n, i] of ee(this, Je).entries()) {
      if (e || i.expiration > t) {
        r.push([n, i.value]);
      }
    }
    return r;
  }
};
Je = new WeakMap();
un = new WeakMap();
var Fr;
var Ir;
var ti;
var Ui;
var Pn;
var Tt;
var vi;
var lr;
var _n;
var sr;
var Li;
var ys;
var Mn;
var Pi;
var Mi;
var ws;
var Ur;
var jn;
var Ga;
var tl;
var I1 = class {
  constructor() {
    fe(this, Li);
    fe(this, Mn);
    fe(this, Mi);
    fe(this, Ur);
    fe(this, Ga);
    fe(this, Fr, undefined);
    fe(this, Ir, undefined);
    fe(this, ti, undefined);
    fe(this, Ui, undefined);
    fe(this, Pn, undefined);
    fe(this, Tt, undefined);
    fe(this, vi, undefined);
    fe(this, lr, undefined);
    fe(this, _n, undefined);
    fe(this, sr, undefined);
    ye(this, Ir, typeof GetParentResourceName != "function");
    ye(this, Fr, ee(this, Ir) ? window.crypto.randomUUID() : GetParentResourceName());
    ye(this, Tt, false);
    ye(this, vi, 0);
    ye(this, lr, []);
    ye(this, _n, new Map());
    ye(this, sr, new Map());
    he(this, Mi, ws).call(this, "__npx_sdk:init");
    he(this, Li, ys).call(this, "__npx_sdk:ready", he(this, Ga, tl).bind(this));
    window.addEventListener("message", async ({
      data: e
    }) => {
      const {
        event: r,
        args: t
      } = e;
      if (!r) {
        return;
      }
      const n = ee(this, _n).get(r);
      if (n) {
        n(...t);
      }
    });
  }
  async register(e, r) {
    he(this, Mn, Pi).call(this, `__nui_req:${e}`, async (t, n) => {
      let i;
      let a;
      const o = _1(t, ee(this, Ui));
      if (!o?.id || !o?.resource) {
        return Ze.error(`[NUI] ${e} - Invalid metadata received`);
      }
      try {
        i = await r(...n);
        a = true;
      } catch (s) {
        i = s.message;
        a = false;
      }
      he(this, Ur, jn).call(this, `__nui_res:${o.resource}`, o.id, [a, i]);
    });
  }
  async execute(e, ...r) {
    const i = {
      id: ++Ka(this, vi)._,
      resource: ee(this, Fr)
    };
    const a = r[r.length - 1];
    const o = typeof a == "object" && a?.mockupData;
    if (!ee(this, Ir) && o) {
      r.splice(r.length - 1, 1);
    } else if (ee(this, Ir) && o) {
      const d = a.delay ?? 0;
      if (d > 0) {
        await new Promise(c => setTimeout(c, d));
      }
      return a.mockupData ?? null;
    }
    const s = new Promise((d, c) => {
      let l;
      if (ee(this, Tt)) {
        l = +setTimeout(() => c(new Error(`RPC timed out | ${e}`)), 60000);
      } else {
        l = 0;
      }
      ee(this, sr).set(i.id, {
        resolve: d,
        reject: c,
        timeout: l
      });
    });
    s.finally(() => ee(this, sr).delete(i.id));
    if (ee(this, Tt)) {
      he(this, Ur, jn).call(this, `__nui_req:${e}`, Gc(i, ee(this, Pn)), r);
    } else {
      ee(this, lr).push({
        type: "execute",
        event: `__nui_req:${e}`,
        metadata: i,
        args: r
      });
    }
    return s;
  }
};
Fr = new WeakMap();
Ir = new WeakMap();
ti = new WeakMap();
Ui = new WeakMap();
Pn = new WeakMap();
Tt = new WeakMap();
vi = new WeakMap();
lr = new WeakMap();
_n = new WeakMap();
sr = new WeakMap();
Li = new WeakSet();
ys = function (e, r) {
  ee(this, _n).set(e, r);
};
Mn = new WeakSet();
Pi = function (e, r) {
  if (ee(this, Tt)) {
    const t = Kc(e, ee(this, ti));
    return he(this, Li, ys).call(this, t, r);
  }
  ee(this, lr).push({
    type: "on",
    event: e,
    callback: r
  });
};
Mi = new WeakSet();
ws = function (e, ...r) {
  fetch(`https://${ee(this, Fr)}/${e}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({
      args: r
    })
  });
};
Ur = new WeakSet();
jn = function (e, ...r) {
  if (ee(this, Tt)) {
    const t = Kc(e, ee(this, ti));
    return he(this, Mi, ws).call(this, t, ...r);
  }
  ee(this, lr).push({
    type: "emit",
    event: e,
    args: r
  });
};
Ga = new WeakSet();
tl = async function (e) {
  if (ee(this, Tt)) {
    return Ze.error("[NUI] SDK already initialized");
  }
  const r = v1(e);
  const t = r?.split(":").filter(n => n.length > 0);
  if (!t || t.length === 0) {
    return Ze.error("SDK NUI handlers failed to initialize");
  }
  ye(this, ti, t[0]);
  ye(this, Ui, t[2]);
  ye(this, Pn, t[1]);
  ye(this, Tt, true);
  he(this, Mn, Pi).call(this, `__nui_res:${ee(this, Fr)}`, (n, [i, a]) => {
    const o = ee(this, sr).get(n);
    if (!o) {
      return Ze.error("[NUI] Invalid response received");
    }
    clearTimeout(o.timeout);
    if (i) {
      o.resolve(a);
    } else {
      o.reject(a);
    }
  });
  Ze.debug("[NUI] SDK initialized");
  for (const n of ee(this, lr)) {
    if (n.type === "on") {
      he(this, Mn, Pi).call(this, n.event, n.callback);
    } else if (n.type === "emit") {
      he(this, Ur, jn).call(this, n.event, ...n.args);
    } else if (n.type === "execute") {
      const i = ee(this, sr).get(n.metadata.id);
      if (!i) {
        Ze.error(`[RPC] ${n.event} - Failed to execute queued RPC call`);
        continue;
      }
      i.timeout = +setTimeout(() => i.reject(new Error(`NUI execute timed out | ${n.event}`)), 60000);
      he(this, Ur, jn).call(this, n.event, Gc(n.metadata, ee(this, Pn)), n.args);
    }
  }
};
var Ge = new I1();
var Ue;
var tr;
var pi;
var Xa;
var B1 = class {
  constructor() {
    fe(this, pi);
    fe(this, Ue, undefined);
    fe(this, tr, undefined);
    ye(this, Ue, {});
    ye(this, tr, 10);
  }
  on(e, r) {
    ee(this, Ue)[e] ||= [];
    ee(this, Ue)[e].push(r);
    const t = ee(this, Ue)[e].length;
    if (t > ee(this, tr)) {
      he(this, pi, Xa).call(this, e, t);
    }
  }
  off(e, r) {
    const t = ee(this, Ue)[e];
    if (!t) {
      return;
    }
    const n = t.indexOf(r);
    if (n !== -1) {
      t.splice(n, 1);
    }
  }
  once(e, r) {
    const t = (...n) => {
      r(...n);
      this.off(e, t);
    };
    this.on(e, t);
  }
  emit(e, ...r) {
    const t = ee(this, Ue)[e];
    if (t) {
      for (const n of t) {
        try {
          n(...r);
        } catch (i) {
          console.error(i);
        }
      }
    }
  }
  addListener(e, r) {
    this.on(e, r);
  }
  prependListener(e, r) {
    ee(this, Ue)[e] ||= [];
    ee(this, Ue)[e].unshift(r);
    const t = ee(this, Ue)[e].length;
    if (t > ee(this, tr)) {
      he(this, pi, Xa).call(this, e, t);
    }
  }
  prependOnceListener(e, r) {
    const t = (...n) => {
      r(...n);
      this.off(e, t);
    };
    this.prependListener(e, t);
  }
  removeListener(e, r) {
    this.off(e, r);
  }
  removeAllListeners(e) {
    if (e) {
      delete ee(this, Ue)[e];
    } else {
      ye(this, Ue, {});
    }
  }
  listenerCount(e) {
    const r = ee(this, Ue)[e];
    if (r) {
      return r.length;
    } else {
      return 0;
    }
  }
  getMaxListeners() {
    return ee(this, tr);
  }
  setMaxListeners(e) {
    ye(this, tr, e);
  }
  rawListeners(e) {
    return ee(this, Ue)[e] || [];
  }
  eventNames() {
    return Object.keys(ee(this, Ue));
  }
};
Ue = new WeakMap();
tr = new WeakMap();
pi = new WeakSet();
Xa = function (e, r) {
  Ze.warning(`Possible EventEmitter memory leak detected. ${r} listeners added. Use emitter.setMaxListeners() to increase limit`);
  Ze.debug("EventEmitter", `Event name: ${e} | Listeners count: ${r}`);
};
var li = ["ACK", "HEARTBEAT"];
var Zn;
var Hn;
var at;
var Vr;
var fn;
var Br;
var Lt;
var Wn;
var Dr;
var gn;
var ji;
var bs;
var rl;
var xs;
var nl;
var ks;
var il;
var Es;
var al;
var Ss;
var sl;
var As;
var ol;
var Cs;
var cl;
var Rr;
var mn;
var Ts;
var ll;
var D1 = class {
  constructor() {
    fe(this, gn);
    fe(this, bs);
    fe(this, xs);
    fe(this, ks);
    fe(this, Es);
    fe(this, Ss);
    fe(this, As);
    fe(this, Cs);
    fe(this, Rr);
    fe(this, Ts);
    fe(this, Zn, undefined);
    fe(this, Hn, undefined);
    fe(this, at, undefined);
    fe(this, Vr, undefined);
    fe(this, fn, undefined);
    fe(this, Br, undefined);
    fe(this, Lt, undefined);
    fe(this, Wn, undefined);
    fe(this, Dr, undefined);
    ye(this, fn, 0);
    ye(this, Vr, false);
    ye(this, Br, new Map());
    ye(this, Lt, new B1());
  }
  async connect() {
    if (typeof GetParentResourceName != "function") {
      return he(this, gn, ji).call(this, "ws://localhost:5000", "dev");
    }
    const e = await Ge.execute("__npx_sdk:sockets:init");
    if (!e?.API_URL || !e?.API_KEY) {
      return false;
    } else {
      return he(this, gn, ji).call(this, e.API_URL, e.API_KEY);
    }
  }
  on(e, r) {
    if (!li.includes(e)) {
      ee(this, Lt).on(e, r);
    }
  }
  once(e, r) {
    if (!li.includes(e)) {
      ee(this, Lt).once(e, r);
    }
  }
  off(e, r) {
    if (!li.includes(e)) {
      ee(this, Lt).off(e, r);
    }
  }
  emit(e, r) {
    var t;
    if (li.includes(e)) {
      return;
    }
    const n = he(this, Rr, mn).call(this, {
      id: ++Ka(this, fn)._,
      event: e,
      data: r
    });
    if ((t = ee(this, at)) != null) {
      t.send(n);
    }
  }
  execute(e, r) {
    var t;
    const n = {
      id: ++Ka(this, fn)._,
      data: r
    };
    const i = new Promise(o => {
      const s = +setTimeout(() => o([false, `Request timed out | ${e}`]), 60000);
      ee(this, Br).set(n.id, {
        resolve: o,
        timeout: s
      });
    });
    i.finally(() => ee(this, Br).delete(n.id));
    const a = he(this, Rr, mn).call(this, {
      event: e,
      data: n
    });
    if ((t = ee(this, at)) != null) {
      t.send(a);
    }
    return i;
  }
  register(e, r) {
    ee(this, Lt).on(e, async t => {
      var n;
      let i;
      try {
        i = {
          success: true,
          data: await r(t.data)
        };
      } catch (o) {
        i = {
          success: false,
          data: o.message
        };
      }
      const a = he(this, Rr, mn).call(this, {
        id: t.id,
        event: "ACK",
        data: i
      });
      if ((n = ee(this, at)) != null) {
        n.send(a);
      }
    });
  }
  onReconnect(e) {
    ye(this, Wn, e);
  }
  get isOnline() {
    var e;
    return ((e = ee(this, at)) == null ? undefined : e.readyState) === WebSocket.OPEN;
  }
};
Zn = new WeakMap();
Hn = new WeakMap();
at = new WeakMap();
Vr = new WeakMap();
fn = new WeakMap();
Br = new WeakMap();
Lt = new WeakMap();
Wn = new WeakMap();
Dr = new WeakMap();
gn = new WeakSet();
ji = async function (e, r) {
  ye(this, Vr, false);
  ye(this, Zn, e);
  ye(this, Hn, r);
  ye(this, at, new WebSocket(`${e}?authorization=bearer%20${r}`));
  ee(this, at).onopen = he(this, xs, nl).bind(this);
  ee(this, at).onerror = he(this, ks, il).bind(this);
  ee(this, at).onclose = he(this, Es, al).bind(this);
  ee(this, at).onmessage = he(this, Ss, sl).bind(this);
  Ze.debug("[NUI] SDK Sockets initialized");
  return new Promise(t => {
    let n = 0;
    clearInterval(ee(this, Dr));
    ye(this, Dr, +setInterval(() => {
      if (++n > 100) {
        clearInterval(ee(this, Dr));
        t(false);
        Ze.error("[NUI] SDK Sockets failed to connect");
        return;
      }
      if (ee(this, Vr)) {
        clearInterval(ee(this, Dr));
        t(true);
      }
    }, 100));
  });
};
bs = new WeakSet();
rl = async function () {
  if (typeof ee(this, Zn) != "string" || typeof ee(this, Hn) != "string") {
    return;
  }
  Ze.debug("[NUI] SDK Sockets reconnecting");
  if ((await he(this, gn, ji).call(this, ee(this, Zn), ee(this, Hn))) && ee(this, Wn)) {
    ee(this, Wn).call(this);
  }
};
xs = new WeakSet();
nl = function () {
  Ze.debug("[NUI] SDK Sockets connected");
  ye(this, Vr, true);
};
ks = new WeakSet();
il = function (e) {
  Ze.error("[NUI] SDK Sockets error", e);
};
Es = new WeakSet();
al = function (e) {
  Ze.debug("[NUI] SDK Sockets closed");
  setTimeout(he(this, bs, rl).bind(this), 1500);
};
Ss = new WeakSet();
sl = function (e) {
  const {
    event: r,
    data: t
  } = he(this, Ts, ll).call(this, e.data);
  if (r) {
    if (r === "HEARTBEAT") {
      he(this, As, ol).call(this);
    } else if (r === "ACK") {
      const {
        id: n,
        data: i
      } = t;
      he(this, Cs, cl).call(this, n, i);
    } else {
      ee(this, Lt).emit(r, t);
    }
  }
};
As = new WeakSet();
ol = function () {
  var e;
  const r = he(this, Rr, mn).call(this, {
    event: "HEARTBEAT",
    data: "PONG"
  });
  if ((e = ee(this, at)) != null) {
    e.send(r);
  }
};
Cs = new WeakSet();
cl = function (e, r) {
  const t = ee(this, Br).get(e);
  if (t) {
    clearTimeout(t.timeout);
    t.resolve([r.success, r.data]);
  }
};
Rr = new WeakSet();
mn = function (e) {
  return JSON.stringify(e);
};
Ts = new WeakSet();
ll = function (e) {
  return JSON.parse(e);
};
Ge.register("__npx_sdk:sockets:register", async e => {
  ul.register(e, r => Ge.execute(`__npx_sdk:sockets:pipe:${e}`, r));
});
Ge.register("__npx_sdk:sockets:execute", async (e, r) => ul.execute(e, r));
var ul = new D1();
var R1 = {};
vs(R1, {
  CreateInstance: () => $1,
  Game: () => s1
});
function $1(e, r) {
  return new a1(e, r);
}
var z1 = {};
vs(z1, {
  Cache: () => T1,
  Vector3: () => ln
}); /*! Bundled license information:
    crypto-js/ripemd160.js:
    (** @preserve
    (c) 2012 by Cédric Mesnil. All rights reserved.
    Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    *)
    crypto-js/mode-ctr-gladman.js:
    (** @preserve
    * Counter block mode compatible with  Dr Brian Gladman fileenc.c
    * derived from CryptoJS.mode.CTR
    * Jan Hruby jhruby.web@gmail.com
    *)
    */
const O1 = "_App_kbuih_1";
const N1 = "_container_kbuih_10";
const Oo = {
  App: O1,
  container: N1
};
const Ya = Symbol("store-raw");
const Vn = Symbol("store-node");
function fl(e) {
  let r = e[ut];
  if (!r && (Object.defineProperty(e, ut, {
    value: r = new Proxy(e, L1)
  }), !Array.isArray(e))) {
    const t = Object.keys(e);
    const n = Object.getOwnPropertyDescriptors(e);
    for (let i = 0, a = t.length; i < a; i++) {
      const o = t[i];
      if (n[o].get) {
        Object.defineProperty(e, o, {
          enumerable: n[o].enumerable,
          get: n[o].get.bind(r)
        });
      }
    }
  }
  return r;
}
function Zi(e) {
  let r;
  return e != null && typeof e == "object" && (e[ut] || !(r = Object.getPrototypeOf(e)) || r === Object.prototype || Array.isArray(e));
}
function qn(e, r = new Set()) {
  let t;
  let n;
  let i;
  let a;
  if (t = e != null && e[Ya]) {
    return t;
  }
  if (!Zi(e) || r.has(e)) {
    return e;
  }
  if (Array.isArray(e)) {
    if (Object.isFrozen(e)) {
      e = e.slice(0);
    } else {
      r.add(e);
    }
    for (let o = 0, s = e.length; o < s; o++) {
      i = e[o];
      if ((n = qn(i, r)) !== i) {
        e[o] = n;
      }
    }
  } else {
    if (Object.isFrozen(e)) {
      e = Object.assign({}, e);
    } else {
      r.add(e);
    }
    const o = Object.keys(e);
    const s = Object.getOwnPropertyDescriptors(e);
    for (let d = 0, c = o.length; d < c; d++) {
      a = o[d];
      if (!s[a].get) {
        i = e[a];
        if ((n = qn(i, r)) !== i) {
          e[a] = n;
        }
      }
    }
  }
  return e;
}
function Is(e) {
  let r = e[Vn];
  if (!r) {
    Object.defineProperty(e, Vn, {
      value: r = Object.create(null)
    });
  }
  return r;
}
function Ja(e, r, t) {
  return e[r] ||= hl(t);
}
function F1(e, r) {
  const t = Reflect.getOwnPropertyDescriptor(e, r);
  if (!!t && !t.get && !!t.configurable && r !== ut && r !== Vn) {
    delete t.value;
    delete t.writable;
    t.get = () => e[ut][r];
  }
  return t;
}
function dl(e) {
  if (Mo()) {
    const r = Is(e);
    (r._ ||= hl())();
  }
}
function U1(e) {
  dl(e);
  return Reflect.ownKeys(e);
}
function hl(e) {
  const [r, t] = Ke(e, {
    equals: false,
    internal: true
  });
  r.$ = t;
  return r;
}
const L1 = {
  get(e, r, t) {
    if (r === Ya) {
      return e;
    }
    if (r === ut) {
      return t;
    }
    if (r === gi) {
      dl(e);
      return t;
    }
    const n = Is(e);
    const i = n[r];
    let a = i ? i() : e[r];
    if (r === Vn || r === "__proto__") {
      return a;
    }
    if (!i) {
      const o = Object.getOwnPropertyDescriptor(e, r);
      if (Mo() && (typeof a != "function" || e.hasOwnProperty(r)) && (!o || !o.get)) {
        a = Ja(n, r, a)();
      }
    }
    if (Zi(a)) {
      return fl(a);
    } else {
      return a;
    }
  },
  has(e, r) {
    if (r === Ya || r === ut || r === gi || r === Vn || r === "__proto__") {
      return true;
    } else {
      this.get(e, r, e);
      return r in e;
    }
  },
  set() {
    return true;
  },
  deleteProperty() {
    return true;
  },
  ownKeys: U1,
  getOwnPropertyDescriptor: F1
};
function Hi(e, r, t, n = false) {
  if (!n && e[r] === t) {
    return;
  }
  const i = e[r];
  const a = e.length;
  if (t === undefined) {
    delete e[r];
  } else {
    e[r] = t;
  }
  let o = Is(e);
  let s;
  if (s = Ja(o, r, i)) {
    s.$(() => t);
  }
  if (Array.isArray(e) && e.length !== a) {
    for (let d = e.length; d < a; d++) {
      if (s = o[d]) {
        s.$();
      }
    }
    if (s = Ja(o, "length", a)) {
      s.$(e.length);
    }
  }
  if (s = o._) {
    s.$();
  }
}
function vl(e, r) {
  const t = Object.keys(r);
  for (let n = 0; n < t.length; n += 1) {
    const i = t[n];
    Hi(e, i, r[i]);
  }
}
function P1(e, r) {
  if (typeof r == "function") {
    r = r(e);
  }
  r = qn(r);
  if (Array.isArray(r)) {
    if (e === r) {
      return;
    }
    let t = 0;
    let n = r.length;
    for (; t < n; t++) {
      const i = r[t];
      if (e[t] !== i) {
        Hi(e, t, i);
      }
    }
    Hi(e, "length", n);
  } else {
    vl(e, r);
  }
}
function dn(e, r, t = []) {
  let n;
  let i = e;
  if (r.length > 1) {
    n = r.shift();
    const o = typeof n;
    const s = Array.isArray(e);
    if (Array.isArray(n)) {
      for (let d = 0; d < n.length; d++) {
        dn(e, [n[d]].concat(r), t);
      }
      return;
    } else if (s && o === "function") {
      for (let d = 0; d < e.length; d++) {
        if (n(e[d], d)) {
          dn(e, [d].concat(r), t);
        }
      }
      return;
    } else if (s && o === "object") {
      const {
        from: d = 0,
        to: c = e.length - 1,
        by: l = 1
      } = n;
      for (let m = d; m <= c; m += l) {
        dn(e, [m].concat(r), t);
      }
      return;
    } else if (r.length > 1) {
      dn(e[n], r, [n].concat(t));
      return;
    }
    i = e[n];
    t = [n].concat(t);
  }
  let a = r[0];
  if ((typeof a != "function" || !(a = a(i, t), a === i)) && (n !== undefined || a != null)) {
    a = qn(a);
    if (n === undefined || Zi(i) && Zi(a) && !Array.isArray(a)) {
      vl(i, a);
    } else {
      Hi(e, n, a);
    }
  }
}
function qt(...[e, r]) {
  const t = qn(e || {});
  const n = Array.isArray(t);
  const i = fl(t);
  function a(...o) {
    nt(() => {
      if (n && o.length === 1) {
        P1(t, o[0]);
      } else {
        dn(t, o);
      }
    });
  }
  return [i, a];
}
function M1(e, r) {
  const t = es(r);
  return [n => Ae(t.Provider, {
    value: e(n),
    get children() {
      return n.children;
    }
  }), () => ts(t)];
}
const [j1, Z1] = M1(() => {
  const [e, r] = Ke(false);
  const [t, n] = Ke("all");
  const [i, a] = qt([]);
  const [o, s] = Ke("");
  const [d, c] = qt({});
  const [l, m] = qt([]);
  const [h, v] = Ke(false);
  const [_, y] = Ke(false);
  return {
    visible: e,
    setVisible: r,
    page: t,
    setPage: n,
    emotes: i,
    setEmotes: a,
    searchInput: o,
    setSearchInput: s,
    quickEmotes: d,
    setQuickEmotes: c,
    favorites: l,
    setFavorites: m,
    clickDisabled: h,
    setClickDisabled: v,
    hudVisible: _,
    setHudVisible: y
  };
});
const en = () => Z1();
const H1 = "_header_nwncl_1";
const W1 = "_title_nwncl_10";
const V1 = "_description_nwncl_19";
const q1 = "_searchBar_nwncl_27";
const K1 = "_keybind_nwncl_57";
const G1 = "_text_nwncl_73";
const X1 = "_button_nwncl_76";
const Qt = {
  header: H1,
  title: W1,
  description: V1,
  searchBar: q1,
  keybind: K1,
  text: G1,
  button: X1
};
const Y1 = tt("<div><div class=\"flex flex-col justify-center items-start shrink-0\"><div>ANIMATION MENU</div><div>HERE YOU CAN MANAGE ALL SERVER ANIMATIONS</div></div><div><input type=\"text\" placeholder=\"Search...\"><svg width=\"1.29vh\" height=\"1.29vh\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.08581 0.0096725C3.31982 0.220966 1.87567 1.09786 0.922297 2.5377C-0.177474 4.19864 -0.302994 6.35914 0.595733 8.15872C1.29743 9.56382 2.5573 10.6076 4.08811 11.0521C4.65082 11.2155 4.92755 11.2511 5.6325 11.2508C6.12788 11.2506 6.33428 11.2395 6.53454 11.2024C7.40016 11.042 8.1257 10.7497 8.8011 10.2895L9.0903 10.0924L10.99 11.9915C12.4502 13.4512 12.9182 13.9035 13.0128 13.946C13.1561 14.0106 13.3861 14.0182 13.539 13.9636C13.7998 13.8704 13.9671 13.6461 13.9901 13.3586C14.0178 13.0131 14.1222 13.1365 11.9994 11.0064L10.0906 9.09104L10.3028 8.77419C10.6841 8.20488 10.9386 7.63483 11.0964 6.99652C11.7774 4.24228 10.3272 1.42454 7.69053 0.37863C7.37928 0.25517 6.92009 0.126894 6.5482 0.0595272C6.31141 0.0166226 5.31233 -0.0174165 5.08581 0.0096725ZM6.56187 1.5066C7.38392 1.70284 8.02934 2.06124 8.61329 2.64581C9.49496 3.52837 9.92375 4.68 9.83896 5.93751C9.74258 7.3669 8.90801 8.65781 7.62791 9.35756C6.47473 9.98794 4.95518 10.0117 3.76983 9.41786C3.07338 9.06899 2.52177 8.5815 2.09953 7.94182C1.28986 6.7151 1.18326 5.14153 1.81963 3.81006C2.39958 2.59664 3.55886 1.71201 4.88515 1.47081C5.32269 1.39124 6.15278 1.40894 6.56187 1.5066Z\" fill=\"#00F8B9\"></path></svg></div><div><div>Exit</div><div>ESC");
function J1() {
  const {
    searchInput: e,
    setSearchInput: r
  } = en();
  return (() => {
    const t = Y1();
    const n = t.firstChild;
    const i = n.firstChild;
    const a = i.nextSibling;
    const o = n.nextSibling;
    const s = o.firstChild;
    const d = s.nextSibling;
    const c = o.nextSibling;
    const l = c.firstChild;
    const m = l.nextSibling;
    s.$$input = h => {
      r(h.currentTarget.value);
    };
    d.style.setProperty("filter", "drop-shadow(0px 0.09259vh 1vh rgba(0, 248, 185, 0.55))");
    Oe(h => {
      const v = Qt.header;
      const _ = Qt.title;
      const y = Qt.description;
      const g = Qt.searchBar;
      const E = Qt.keybind;
      const A = Qt.text;
      const I = Qt.button;
      if (v !== h._v$) {
        ke(t, h._v$ = v);
      }
      if (_ !== h._v$2) {
        ke(i, h._v$2 = _);
      }
      if (y !== h._v$3) {
        ke(a, h._v$3 = y);
      }
      if (g !== h._v$4) {
        ke(o, h._v$4 = g);
      }
      if (E !== h._v$5) {
        ke(c, h._v$5 = E);
      }
      if (A !== h._v$6) {
        ke(l, h._v$6 = A);
      }
      if (I !== h._v$7) {
        ke(m, h._v$7 = I);
      }
      return h;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined
    });
    Oe(() => s.value = e());
    return t;
  })();
}
Gn(["input"]);
const Q1 = "_nav_e1w9f_1";
const e2 = "_category_e1w9f_12";
const t2 = "_active_e1w9f_30";
const r2 = "_icon_e1w9f_48";
const n2 = "_title_e1w9f_55";
const i2 = "_description_e1w9f_64";
const Ar = {
  nav: Q1,
  category: e2,
  active: t2,
  icon: r2,
  title: n2,
  description: i2
};
const a2 = tt("<div>");
const s2 = tt("<div><div></div><div class=\"flex flex-col justify-center items-start\"><div></div><div> Animations");
const o2 = [{
  id: "all",
  label: "All"
}, {
  id: "favorites",
  label: "Favorites"
}, {
  id: "emotes",
  label: "General"
}, {
  id: "dances",
  label: "Dances"
}, {
  id: "expressions",
  label: "Expressions"
}, {
  id: "walks",
  label: "Walks"
}, {
  id: "animals",
  label: "Animals"
}, {
  id: "placed",
  label: "Placed Emotes"
}, {
  id: "synced",
  label: "Synced Emotes"
}];
function c2() {
  const {
    page: e,
    setPage: r,
    emotes: t,
    favorites: n
  } = en();
  return (() => {
    const i = a2();
    Fe(i, Ae(rs, {
      get each() {
        return o2.filter(a => (a.id === "favorites" ? n : t.filter(s => a.id === "all" ? true : s.category === a.id)).length !== 0);
      },
      children: a => (() => {
        const o = s2();
        const s = o.firstChild;
        const d = s.nextSibling;
        const c = d.firstChild;
        const l = c.nextSibling;
        const m = l.firstChild;
        o.$$click = () => {
          r("refresh");
          r(a.id);
        };
        Fe(c, () => a.label);
        Fe(l, (() => {
          const h = $e(() => a.id === "favorites");
          return () => h() ? n.length : t.filter(v => a.id === "all" ? true : v.category === a.id).length;
        })(), m);
        Oe(h => {
          const v = Ar.category;
          const _ = {
            [Ar.active]: e() === a.id
          };
          const y = Ar.icon;
          const g = `url(${a.id}.svg)`;
          const E = Ar.title;
          const A = Ar.description;
          if (v !== h._v$) {
            ke(o, h._v$ = v);
          }
          h._v$2 = ns(o, _, h._v$2);
          if (y !== h._v$3) {
            ke(s, h._v$3 = y);
          }
          if (g !== h._v$4) {
            if ((h._v$4 = g) != null) {
              s.style.setProperty("background-image", g);
            } else {
              s.style.removeProperty("background-image");
            }
          }
          if (E !== h._v$5) {
            ke(c, h._v$5 = E);
          }
          if (A !== h._v$6) {
            ke(l, h._v$6 = A);
          }
          return h;
        }, {
          _v$: undefined,
          _v$2: undefined,
          _v$3: undefined,
          _v$4: undefined,
          _v$5: undefined,
          _v$6: undefined
        });
        return o;
      })()
    }));
    Oe(() => ke(i, Ar.nav));
    return i;
  })();
}
Gn(["click"]);
const l2 = "_emotes_1jigh_1";
const u2 = "_emote_1jigh_1";
const f2 = "_icon_1jigh_34";
const d2 = "_header_1jigh_38";
const h2 = "_active_1jigh_54";
const v2 = "_command_1jigh_58";
const p2 = "_center_1jigh_74";
const _2 = "_bar_1jigh_96";
const Ut = {
  emotes: l2,
  emote: u2,
  icon: f2,
  header: d2,
  active: h2,
  command: v2,
  center: p2,
  bar: _2
};
var ra = class {
  x;
  y;
  width;
  height;
  constructor(e) {
    this.x = Math.floor(e.x);
    this.y = Math.floor(e.y);
    this.width = Math.floor(e.width);
    this.height = Math.floor(e.height);
  }
  get rect() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    };
  }
  get left() {
    return this.x;
  }
  get top() {
    return this.y;
  }
  get right() {
    return this.x + this.width;
  }
  get bottom() {
    return this.y + this.height;
  }
  get center() {
    return {
      x: this.x + this.width * 0.5,
      y: this.y + this.height * 0.5
    };
  }
  get corners() {
    return {
      topLeft: {
        x: this.left,
        y: this.top
      },
      topRight: {
        x: this.right,
        y: this.top
      },
      bottomRight: {
        x: this.left,
        y: this.bottom
      },
      bottomLeft: {
        x: this.right,
        y: this.bottom
      }
    };
  }
};
var yn = e => {
  let r = new ra(e.getBoundingClientRect());
  const {
    transform: t
  } = getComputedStyle(e);
  if (t) {
    r = g2(r, t);
  }
  return r;
};
var g2 = (e, r) => {
  let t;
  let n;
  if (r.startsWith("matrix3d(")) {
    const i = r.slice(9, -1).split(/, /);
    t = +i[12];
    n = +i[13];
  } else if (r.startsWith("matrix(")) {
    const i = r.slice(7, -1).split(/, /);
    t = +i[4];
    n = +i[5];
  } else {
    t = 0;
    n = 0;
  }
  return new ra({
    ...e,
    x: e.x - t,
    y: e.y - n
  });
};
var Zt = () => ({
  x: 0,
  y: 0
});
var pl = (e, r) => e.x === r.x && e.y === r.y;
var Ea = (e, r) => new ra({
  ...e,
  x: e.x + r.x,
  y: e.y + r.y
});
var m2 = (e, r) => {
  const t = Math.max(e.top, r.top);
  const n = Math.max(e.left, r.left);
  const i = Math.min(e.right, r.right);
  const a = Math.min(e.bottom, r.bottom);
  const o = i - n;
  const s = a - t;
  if (n < i && t < a) {
    const d = e.width * e.height;
    const c = r.width * r.height;
    const l = o * s;
    return l / (d + c - l);
  }
  return 0;
};
var Sa = (e, r) => e.x === r.x && e.y === r.y && e.width === r.width && e.height === r.height;
var y2 = (e, r, t) => {
  const n = e.transformed;
  const i = {
    ratio: 0,
    droppable: null
  };
  for (const a of r) {
    const o = m2(n, a.layout);
    if (o > i.ratio) {
      i.ratio = o;
      i.droppable = a;
    } else if (o > 0 && o === i.ratio && a.id === t.activeDroppableId) {
      i.droppable = a;
    }
  }
  return i.droppable;
};
var _l = es();
var w2 = e => {
  const r = Gi({
    collisionDetector: y2
  }, e);
  const [t, n] = qt({
    draggables: {},
    droppables: {},
    sensors: {},
    active: {
      draggableId: null,
      get draggable() {
        if (t.active.draggableId !== null) {
          return t.draggables[t.active.draggableId];
        } else {
          return null;
        }
      },
      droppableId: null,
      get droppable() {
        if (t.active.droppableId !== null) {
          return t.droppables[t.active.droppableId];
        } else {
          return null;
        }
      },
      sensorId: null,
      get sensor() {
        if (t.active.sensorId !== null) {
          return t.sensors[t.active.sensorId];
        } else {
          return null;
        }
      },
      overlay: null
    }
  });
  const i = (U, K, Q) => {
    U.substring(0, U.length - 1);
    if (Se(() => t[U][K])) {
      n(U, K, "transformers", Q.id, Q);
    }
  };
  const a = (U, K, Q) => {
    U.substring(0, U.length - 1);
    if (Se(() => t[U][K]) && Se(() => t[U][K].transformers[Q])) {
      n(U, K, "transformers", Q, undefined);
    }
  };
  const o = ({
    id: U,
    node: K,
    layout: Q,
    data: le
  }) => {
    const re = t.draggables[U];
    const ne = {
      id: U,
      node: K,
      layout: Q,
      data: le,
      _pendingCleanup: false
    };
    let ae;
    if (!re) {
      Object.defineProperties(ne, {
        transformers: {
          enumerable: true,
          configurable: true,
          writable: true,
          value: {}
        },
        transform: {
          enumerable: true,
          configurable: true,
          get: () => {
            if (t.active.overlay) {
              return Zt();
            }
            const O = Object.values(t.draggables[U].transformers);
            O.sort((p, C) => p.order - C.order);
            return O.reduce((p, C) => C.callback(p), Zt());
          }
        },
        transformed: {
          enumerable: true,
          configurable: true,
          get: () => Ea(t.draggables[U].layout, t.draggables[U].transform)
        }
      });
    } else if (t.active.draggableId === U && !t.active.overlay) {
      const O = {
        x: re.layout.x - Q.x,
        y: re.layout.y - Q.y
      };
      const p = "addDraggable-existing-offset";
      const C = re.transformers[p];
      const x = C ? C.callback(O) : O;
      ae = {
        id: p,
        order: 100,
        callback: F => ({
          x: F.x + x.x,
          y: F.y + x.y
        })
      };
      D(() => a("draggables", U, p));
    }
    nt(() => {
      n("draggables", U, ne);
      if (ae) {
        i("draggables", U, ae);
      }
    });
    if (t.active.draggable) {
      b();
    }
  };
  const s = U => {
    if (Se(() => t.draggables[U])) {
      n("draggables", U, "_pendingCleanup", true);
      queueMicrotask(() => d(U));
    }
  };
  const d = U => {
    if (t.draggables[U]?._pendingCleanup) {
      const K = t.active.draggableId === U;
      nt(() => {
        if (K) {
          n("active", "draggableId", null);
        }
        n("draggables", U, undefined);
      });
    }
  };
  const c = ({
    id: U,
    node: K,
    layout: Q,
    data: le
  }) => {
    const re = t.droppables[U];
    const ne = {
      id: U,
      node: K,
      layout: Q,
      data: le,
      _pendingCleanup: false
    };
    if (!re) {
      Object.defineProperties(ne, {
        transformers: {
          enumerable: true,
          configurable: true,
          writable: true,
          value: {}
        },
        transform: {
          enumerable: true,
          configurable: true,
          get: () => {
            const ae = Object.values(t.droppables[U].transformers);
            ae.sort((O, p) => O.order - p.order);
            return ae.reduce((O, p) => p.callback(O), Zt());
          }
        },
        transformed: {
          enumerable: true,
          configurable: true,
          get: () => Ea(t.droppables[U].layout, t.droppables[U].transform)
        }
      });
    }
    n("droppables", U, ne);
    if (t.active.draggable) {
      b();
    }
  };
  const l = U => {
    if (Se(() => t.droppables[U])) {
      n("droppables", U, "_pendingCleanup", true);
      queueMicrotask(() => m(U));
    }
  };
  const m = U => {
    if (t.droppables[U]?._pendingCleanup) {
      const K = t.active.droppableId === U;
      nt(() => {
        if (K) {
          n("active", "droppableId", null);
        }
        n("droppables", U, undefined);
      });
    }
  };
  const h = ({
    id: U,
    activators: K
  }) => {
    n("sensors", U, {
      id: U,
      activators: K,
      coordinates: {
        origin: {
          x: 0,
          y: 0
        },
        current: {
          x: 0,
          y: 0
        },
        get delta() {
          return {
            x: t.sensors[U].coordinates.current.x - t.sensors[U].coordinates.origin.x,
            y: t.sensors[U].coordinates.current.y - t.sensors[U].coordinates.origin.y
          };
        }
      }
    });
  };
  const v = U => {
    if (!Se(() => t.sensors[U])) {
      return;
    }
    const K = t.active.sensorId === U;
    nt(() => {
      if (K) {
        n("active", "sensorId", null);
      }
      n("sensors", U, undefined);
    });
  };
  const _ = ({
    node: U,
    layout: K
  }) => {
    const Q = t.active.overlay;
    const le = {
      node: U,
      layout: K
    };
    if (!Q) {
      Object.defineProperties(le, {
        id: {
          enumerable: true,
          configurable: true,
          get: () => t.active.draggable?.id
        },
        data: {
          enumerable: true,
          configurable: true,
          get: () => t.active.draggable?.data
        },
        transformers: {
          enumerable: true,
          configurable: true,
          get: () => Object.fromEntries(Object.entries(t.active.draggable ? t.active.draggable.transformers : {}).filter(([re]) => re !== "addDraggable-existing-offset"))
        },
        transform: {
          enumerable: true,
          configurable: true,
          get: () => {
            const re = Object.values(t.active.overlay ? t.active.overlay.transformers : []);
            re.sort((ne, ae) => ne.order - ae.order);
            return re.reduce((ne, ae) => ae.callback(ne), Zt());
          }
        },
        transformed: {
          enumerable: true,
          configurable: true,
          get: () => t.active.overlay ? Ea(t.active.overlay.layout, t.active.overlay.transform) : new ra({
            x: 0,
            y: 0,
            width: 0,
            height: 0
          })
        }
      });
    }
    n("active", "overlay", le);
  };
  const y = () => n("active", "overlay", null);
  const g = (U, K) => {
    nt(() => {
      n("sensors", U, "coordinates", {
        origin: {
          ...K
        },
        current: {
          ...K
        }
      });
      n("active", "sensorId", U);
    });
  };
  const E = U => {
    const K = t.active.sensorId;
    if (K) {
      n("sensors", K, "coordinates", "current", {
        ...U
      });
    }
  };
  const A = () => n("active", "sensorId", null);
  const I = (U, K) => {
    const Q = {};
    for (const re of Object.values(t.sensors)) {
      if (re) {
        for (const [ne, ae] of Object.entries(re.activators)) {
          Q[ne] ??= [];
          Q[ne].push({
            sensor: re,
            activator: ae
          });
        }
      }
    }
    const le = {};
    for (const re in Q) {
      let ne = re;
      if (K) {
        ne = `on${re}`;
      }
      le[ne] = ae => {
        for (const {
          activator: O
        } of Q[re]) {
          if (t.active.sensor) {
            break;
          }
          O(ae, U);
        }
      };
    }
    return le;
  };
  const b = () => {
    let U = false;
    const K = Object.values(t.draggables);
    const Q = Object.values(t.droppables);
    const le = t.active.overlay;
    nt(() => {
      const re = new WeakMap();
      for (const ne of K) {
        if (ne) {
          const ae = ne.layout;
          if (!re.has(ne.node)) {
            re.set(ne.node, yn(ne.node));
          }
          const O = re.get(ne.node);
          if (!Sa(ae, O)) {
            n("draggables", ne.id, "layout", O);
            U = true;
          }
        }
      }
      for (const ne of Q) {
        if (ne) {
          const ae = ne.layout;
          if (!re.has(ne.node)) {
            re.set(ne.node, yn(ne.node));
          }
          const O = re.get(ne.node);
          if (!Sa(ae, O)) {
            n("droppables", ne.id, "layout", O);
            U = true;
          }
        }
      }
      if (le) {
        const ne = le.layout;
        const ae = yn(le.node);
        if (!Sa(ne, ae)) {
          n("active", "overlay", "layout", ae);
          U = true;
        }
      }
    });
    return U;
  };
  const T = () => {
    const U = t.active.overlay ?? t.active.draggable;
    if (U) {
      const K = r.collisionDetector(U, Object.values(t.droppables), {
        activeDroppableId: t.active.droppableId
      });
      const Q = K ? K.id : null;
      if (t.active.droppableId !== Q) {
        n("active", "droppableId", Q);
      }
    }
  };
  const R = U => {
    const K = {
      id: "sensorMove",
      order: 0,
      callback: Q => t.active.sensor ? {
        x: Q.x + t.active.sensor.coordinates.delta.x,
        y: Q.y + t.active.sensor.coordinates.delta.y
      } : Q
    };
    b();
    nt(() => {
      n("active", "draggableId", U);
      i("draggables", U, K);
    });
    T();
  };
  const B = () => {
    const U = Se(() => t.active.draggableId);
    nt(() => {
      if (U !== null) {
        a("draggables", U, "sensorMove");
      }
      n("active", ["draggableId", "droppableId"], null);
    });
    b();
  };
  const z = U => {
    mt(() => {
      const K = t.active.draggable;
      if (K) {
        Se(() => U({
          draggable: K
        }));
      }
    });
  };
  const N = U => {
    mt(() => {
      const K = t.active.draggable;
      if (K) {
        const Q = Se(() => t.active.overlay);
        Object.values(Q ? Q.transform : K.transform);
        Se(() => U({
          draggable: K,
          overlay: Q
        }));
      }
    });
  };
  const S = U => {
    mt(() => {
      const K = t.active.draggable;
      const Q = t.active.droppable;
      if (K) {
        Se(() => U({
          draggable: K,
          droppable: Q,
          overlay: t.active.overlay
        }));
      }
    });
  };
  const D = U => {
    mt(({
      previousDraggable: K,
      previousDroppable: Q,
      previousOverlay: le
    }) => {
      const re = t.active.draggable;
      const ne = re ? t.active.droppable : null;
      const ae = re ? t.active.overlay : null;
      if (!re && K) {
        Se(() => U({
          draggable: K,
          droppable: Q,
          overlay: le
        }));
      }
      return {
        previousDraggable: re,
        previousDroppable: ne,
        previousOverlay: ae
      };
    }, {
      previousDraggable: null,
      previousDroppable: null,
      previousOverlay: null
    });
  };
  N(() => T());
  if (r.onDragStart) {
    z(r.onDragStart);
  }
  if (r.onDragMove) {
    N(r.onDragMove);
  }
  if (r.onDragOver) {
    S(r.onDragOver);
  }
  if (r.onDragEnd) {
    D(r.onDragEnd);
  }
  const H = [t, {
    addTransformer: i,
    removeTransformer: a,
    addDraggable: o,
    removeDraggable: s,
    addDroppable: c,
    removeDroppable: l,
    addSensor: h,
    removeSensor: v,
    setOverlay: _,
    clearOverlay: y,
    recomputeLayouts: b,
    detectCollisions: T,
    draggableActivators: I,
    sensorStart: g,
    sensorMove: E,
    sensorEnd: A,
    dragStart: R,
    dragEnd: B,
    onDragStart: z,
    onDragMove: N,
    onDragOver: S,
    onDragEnd: D
  }];
  return Ae(_l.Provider, {
    value: H,
    get children() {
      return r.children;
    }
  });
};
var na = () => ts(_l) || null;
var b2 = (e = "pointer-sensor") => {
  const [r, {
    addSensor: t,
    removeSensor: n,
    sensorStart: i,
    sensorMove: a,
    sensorEnd: o,
    dragStart: s,
    dragEnd: d
  }] = na();
  const c = 250;
  const l = 10;
  Kn(() => {
    t({
      id: e,
      activators: {
        pointerdown: y
      }
    });
  });
  Kt(() => {
    n(e);
  });
  const m = () => r.active.sensorId === e;
  const h = {
    x: 0,
    y: 0
  };
  let v = null;
  let _ = null;
  const y = (T, R) => {
    if (T.button === 0) {
      document.addEventListener("pointermove", A);
      document.addEventListener("pointerup", I);
      _ = R;
      h.x = T.clientX;
      h.y = T.clientY;
      v = window.setTimeout(E, c);
    }
  };
  const g = () => {
    if (v) {
      clearTimeout(v);
      v = null;
    }
    document.removeEventListener("pointermove", A);
    document.removeEventListener("pointerup", I);
    document.removeEventListener("selectionchange", b);
  };
  const E = () => {
    if (r.active.sensor) {
      if (!m()) {
        g();
      }
    } else {
      i(e, h);
      s(_);
      b();
      document.addEventListener("selectionchange", b);
    }
  };
  const A = T => {
    const R = {
      x: T.clientX,
      y: T.clientY
    };
    if (!r.active.sensor) {
      const B = {
        x: R.x - h.x,
        y: R.y - h.y
      };
      if (Math.sqrt(B.x ** 2 + B.y ** 2) > l) {
        E();
      }
    }
    if (m()) {
      T.preventDefault();
      a(R);
    }
  };
  const I = T => {
    g();
    if (m()) {
      T.preventDefault();
      d();
      o();
    }
  };
  const b = () => {
    window.getSelection()?.removeAllRanges();
  };
};
var x2 = e => {
  b2();
  return $e(() => e.children);
};
var gl = e => ({
  transform: `translate3d(${e.x}px, ${e.y}px, 0)`
});
var ml = (e, r = {}) => {
  const [t, {
    addDraggable: n,
    removeDraggable: i,
    draggableActivators: a
  }] = na();
  const [o, s] = Ke(null);
  Kn(() => {
    const m = o();
    if (m) {
      n({
        id: e,
        node: m,
        layout: yn(m),
        data: r
      });
    }
  });
  Kt(() => i(e));
  const d = () => t.active.draggableId === e;
  const c = () => t.draggables[e]?.transform || Zt();
  return Object.defineProperties((m, h) => {
    const v = h ? h() : {};
    mt(() => {
      const _ = o();
      const y = a(e);
      if (_) {
        for (const g in y) {
          _.addEventListener(g, y[g]);
        }
      }
      Kt(() => {
        if (_) {
          for (const g in y) {
            _.removeEventListener(g, y[g]);
          }
        }
      });
    });
    s(m);
    if (!v.skipTransform) {
      mt(() => {
        const _ = c();
        if (pl(_, Zt())) {
          m.style.removeProperty("transform");
        } else {
          const y = gl(c());
          m.style.setProperty("transform", y.transform ?? null);
        }
      });
    }
  }, {
    ref: {
      enumerable: true,
      value: s
    },
    isActiveDraggable: {
      enumerable: true,
      get: d
    },
    dragActivators: {
      enumerable: true,
      get: () => a(e, true)
    },
    transform: {
      enumerable: true,
      get: c
    }
  });
};
var k2 = (e, r = {}) => {
  const [t, {
    addDroppable: n,
    removeDroppable: i
  }] = na();
  const [a, o] = Ke(null);
  Kn(() => {
    const l = a();
    if (l) {
      n({
        id: e,
        node: l,
        layout: yn(l),
        data: r
      });
    }
  });
  Kt(() => i(e));
  const s = () => t.active.droppableId === e;
  const d = () => t.droppables[e]?.transform || Zt();
  return Object.defineProperties((l, m) => {
    const h = m ? m() : {};
    o(l);
    if (!h.skipTransform) {
      mt(() => {
        const v = d();
        if (pl(v, Zt())) {
          l.style.removeProperty("transform");
        } else {
          const _ = gl(d());
          l.style.setProperty("transform", _.transform ?? null);
        }
      });
    }
  }, {
    ref: {
      enumerable: true,
      value: o
    },
    isActiveDroppable: {
      enumerable: true,
      get: s
    },
    transform: {
      enumerable: true,
      get: d
    }
  });
};
const Wi = (e, r) => {
  const t = [];
  for (let n = 0; n < r; n += 1) {
    t.push(e + n);
  }
  return t;
};
const _i = e => Number.isFinite(e) ? e : 0;
const E2 = e => e.matches(":focus-within");
const S2 = e => e.querySelector(":focus");
const A2 = e => {
  const r = S2(e);
  if (r) {
    r.click();
    return true;
  } else {
    return false;
  }
};
const C2 = (e, r) => {
  let t = r;
  let n = 0;
  let i = 0;
  while (t && e !== t) {
    const {
      offsetTop: a,
      offsetLeft: o,
      offsetParent: s
    } = t;
    if (e.contains(s)) {
      n += a;
      i += o;
    } else {
      n += a - e.offsetTop;
      i += o - e.offsetLeft;
      break;
    }
    t = s;
  }
  return {
    offsetTop: n,
    offsetLeft: i
  };
};
const T2 = es();
const I2 = e => {
  let r = 0;
  let t = 0;
  if (e.borderBoxSize) {
    const {
      borderBoxSize: n
    } = e;
    const i = Array.isArray(n) ? n[0] : n;
    r = i.inlineSize;
    t = i.blockSize;
  } else {
    const n = e.target.getBoundingClientRect();
    r = n.width;
    t = n.height;
  }
  return {
    width: r,
    height: t
  };
};
const Aa = (e, r, t) => {
  const [n, i] = t ? [e, r] : [r, e];
  return {
    main: n,
    cross: i
  };
};
const Ca = {
  main: 0,
  cross: 0
};
const B2 = (e, r) => e.cross === r.cross;
const D2 = e => {
  const r = ts(T2);
  const [t, n] = Ke(undefined);
  const i = () => e.scrollTarget || r?.scrollTarget;
  const a = $e(() => (e.direction || "vertical") === "horizontal");
  const [o, s] = qt({
    isMeasured: false,
    mainAxisScrollValue: 0,
    target: {
      ...Ca
    },
    container: {
      ...Ca,
      offsetMain: 0,
      offsetCross: 0
    },
    itemSize: {
      ...Ca
    }
  });
  const d = h => {
    const v = h.target;
    const _ = i();
    const y = t();
    const g = a();
    const E = I2(h);
    const A = Aa(E.width, E.height, g);
    if (v === _) {
      s("target", A);
    } else if (v === y && (!B2(o.container, A) || !o.isMeasured)) {
      const I = C2(_, y);
      const b = Aa(I.offsetLeft, I.offsetTop, g);
      s("container", {
        ...A,
        offsetMain: b.main,
        offsetCross: b.cross
      });
    }
  };
  const c = () => {
    const h = i();
    if (h) {
      const v = a() ? h.scrollLeft : h.scrollTop;
      return Math.floor(v);
    }
    return 0;
  };
  const l = new ResizeObserver(h => {
    nt(() => {
      h.forEach(v => d(v));
      s({
        isMeasured: true,
        mainAxisScrollValue: c()
      });
    });
  });
  or(() => {
    if (!o.isMeasured) {
      return;
    }
    const h = a();
    const v = e.itemSize;
    let _;
    if (typeof v == "function") {
      _ = v(o.container.cross, h);
    } else {
      _ = v;
    }
    const y = Aa(_.width || 0, _.height || 0, h);
    s("itemSize", y);
  });
  const m = () => {
    s("mainAxisScrollValue", c());
  };
  mt(() => {
    const h = i();
    const v = t();
    if (!!h && !!v) {
      h.addEventListener("scroll", m);
      l.observe(h);
      l.observe(v);
      Kt(() => {
        s("isMeasured", false);
        h.removeEventListener("scroll", m);
        l.unobserve(h);
        l.unobserve(v);
      });
    }
  });
  return {
    containerEl: t,
    setContainerRefEl: n,
    isDirectionHorizontal: a,
    measurements: o
  };
};
const R2 = 1;
const $2 = e => {
  const {
    total: r,
    focusPosition: t,
    positionCount: n,
    startPosition: i,
    prevPositions: a,
    prevStartPosition: o
  } = e;
  const s = a.length;
  if (r <= n) {
    if (s === n && o === i) {
      return a;
    } else {
      return Wi(0, n);
    }
  }
  const c = i + n;
  const l = y => y < i || y >= c;
  const m = () => {
    if (l(t)) {
      return t;
    }
    let y;
    if (c < r) {
      y = c;
    } else {
      y = i - 1;
    }
    return y;
  };
  const h = n + R2;
  if (s !== h) {
    const y = Wi(i, n);
    y.push(m());
    return y;
  }
  const v = [];
  for (let y = 0; y < n; y += 1) {
    const g = i + y;
    if (!a.includes(g)) {
      v.push(g);
    }
  }
  const _ = m();
  if (!a.includes(_)) {
    v.push(_);
  }
  return a.map(y => l(y) && y !== _ ? v.pop() : y);
};
const z2 = e => Number.isInteger(e) ? e : 0;
const O2 = (e, r, t) => {
  const [n, i] = qt({
    overscan: 0,
    positionCount: 0,
    maxScrollPosition: 0,
    currentPosition: 0
  });
  or(() => {
    if (!e.isMeasured) {
      return;
    }
    const s = r.totalItemCount;
    const d = e.itemSize.main;
    const c = e.target.main;
    Se(() => {
      const m = t() ?? Math.max(Math.ceil(180 / d), 2);
      const h = _i(m);
      i("overscan", h);
      const v = Math.ceil(c / d);
      const _ = z2(Math.min(v + h * 2, s));
      i("positionCount", _);
      i("maxScrollPosition", s - _);
    });
  });
  or(() => {
    if (!e.isMeasured) {
      return;
    }
    const s = e.mainAxisScrollValue - e.container.offsetMain;
    const c = Math.floor(s / e.itemSize.main) - n.overscan;
    const l = Math.min(Math.max(0, c), n.maxScrollPosition);
    i("currentPosition", l);
  });
  let a = 0;
  return $e((s = []) => {
    if (!e.isMeasured) {
      return s;
    }
    const d = n.currentPosition;
    const c = $2({
      total: r.totalItemCount,
      focusPosition: r.focusPosition,
      positionCount: n.positionCount,
      startPosition: d,
      prevStartPosition: a,
      prevPositions: s
    });
    a = d;
    return c;
  });
};
const N2 = tt("<div>");
const F2 = Math.random().toString(36).slice(2, Infinity);
const yl = `virtual-container-${F2}`;
let sn;
const U2 = () => {
  if (!sn) {
    sn = document.createElement("style");
    sn.type = "text/css";
    sn.textContent = `
      .${yl} {
        position: relative !important;
        flex-shrink: 0 !important;
      }
    `;
    document.head.appendChild(sn);
  }
};
function L2(e) {
  U2();
  const [r, t] = qt({
    focusPosition: 0,
    mainAxis: {
      totalItemCount: 0,
      focusPosition: 0,
      scrollValue: 0
    },
    crossAxis: {
      totalItemCount: 0
    }
  });
  const {
    containerEl: n,
    setContainerRefEl: i,
    isDirectionHorizontal: a,
    measurements: o
  } = D2(e);
  const s = () => e.items && e.items.length || 0;
  or(() => {
    if (!o.isMeasured) {
      return;
    }
    const T = _i(e.crossAxisCount?.(o, s()) || 0);
    t("crossAxis", {
      totalItemCount: Math.max(1, T)
    });
  });
  or(() => {
    if (!o.isMeasured) {
      return;
    }
    const T = s();
    const R = r.crossAxis.totalItemCount;
    const B = Math.ceil(T / R);
    t("mainAxis", {
      totalItemCount: _i(B)
    });
    t("crossAxis", {
      totalItemCount: R,
      positions: Wi(0, r.crossAxis.totalItemCount)
    });
  });
  or(() => {
    const T = Math.floor(r.focusPosition / r.crossAxis.totalItemCount);
    t("mainAxis", "focusPosition", _i(T));
  });
  const d = O2(o, r.mainAxis, () => e.overscan);
  const c = () => {
    const T = r.mainAxis.totalItemCount * o.itemSize.main;
    const R = a() ? "width" : "height";
    const B = a() ? "height" : "width";
    return {
      [R]: `${T}px`,
      [B]: "100%"
    };
  };
  const l = (T, R = 0) => {
    const B = o.itemSize;
    const z = B.main * T;
    const N = B.cross * R;
    let S = N;
    let D = z;
    let P = B.cross;
    let H = B.main;
    if (a()) {
      S = z;
      D = N;
      P = B.main;
      H = B.cross;
    }
    return {
      transform: `translate(${S}px, ${D}px)`,
      width: P ? `${P}px` : "",
      height: H ? `${H}px` : ""
    };
  };
  const m = $e(() => Wi(0, r.crossAxis.totalItemCount));
  const h = $e(() => e.items || []);
  const v = (T, R) => T * r.crossAxis.totalItemCount + R;
  const _ = T => Ae(Ls, {
    get each() {
      return d();
    },
    children: R => {
      const B = $e(() => {
        const z = R();
        const N = T.crossPos;
        if (N === undefined) {
          return z;
        } else {
          return v(z, N);
        }
      });
      return Ae(Lr, {
        get when() {
          return B() < h().length;
        },
        get children() {
          return Ae(hu, {
            get component() {
              return e.children;
            },
            get items() {
              return h();
            },
            get item() {
              return h()[B()];
            },
            get index() {
              return B();
            },
            get tabIndex() {
              if (B() === r.focusPosition) {
                return 0;
              } else {
                return -1;
              }
            },
            get style() {
              return l(R(), T.crossPos);
            }
          });
        }
      });
    }
  });
  const y = jo(() => Ae(Lr, {
    get when() {
      return r.crossAxis.totalItemCount > 1;
    },
    get fallback() {
      return Ae(_, {});
    },
    get children() {
      return Ae(Ls, {
        get each() {
          return m();
        },
        children: T => Ae(_, {
          get crossPos() {
            return T();
          }
        })
      });
    }
  }));
  const g = () => {
    const T = m();
    const R = d();
    const z = y().findIndex(N => N?.matches(":focus-within, :focus"));
    if (z === -1) {
      return -1;
    }
    if (r.crossAxis.totalItemCount > 1) {
      const N = Math.floor(z / R.length);
      const S = z % R.length;
      const D = T[N];
      const P = R[S];
      return v(P, D);
    }
    return R[z];
  };
  const E = (T, R) => {
    const B = r.focusPosition;
    let z = B % r.crossAxis.totalItemCount;
    let N = Math.floor(B / r.crossAxis.totalItemCount);
    if (R) {
      N += T;
    } else {
      z += T;
    }
    const S = v(N, z);
    if (S < 0 || S >= s()) {
      return;
    }
    const D = m().indexOf(z);
    if (D === -1) {
      return;
    }
    t("focusPosition", S);
    const P = y();
    const H = d();
    const U = H.indexOf(N);
    if (U === -1) {
      return;
    }
    const K = D * H.length + U;
    const Q = P[K];
    if (Q) {
      queueMicrotask(() => {
        Q.focus();
        Q.scrollIntoView({
          block: "nearest"
        });
      });
    }
  };
  const A = T => {
    const {
      code: R
    } = T;
    const B = R === "ArrowUp";
    const z = R === "ArrowDown";
    const N = R === "ArrowLeft";
    const S = R === "ArrowRight";
    const D = B || z;
    const P = N || S;
    if (D || P) {
      E(z || S ? 1 : -1, a() ? P : D);
    } else if (R === "Enter") {
      if (!A2(n())) {
        return;
      }
    } else {
      return;
    }
    T.preventDefault();
  };
  const I = () => {
    const T = g();
    t("focusPosition", T === -1 ? 0 : T);
  };
  const b = async () => {
    queueMicrotask(() => {
      if (!E2(n())) {
        t("focusPosition", 0);
      }
    });
  };
  return (() => {
    const T = N2();
    T.$$focusout = b;
    T.$$focusin = I;
    T.$$keydown = A;
    wn(i, T);
    Fe(T, y);
    Oe(R => {
      const B = `${yl} ${e.className || ""}`;
      const z = c();
      const N = e.role || "list";
      if (B !== R._v$) {
        T.className = R._v$ = B;
      }
      R._v$2 = Go(T, z, R._v$2);
      if (N !== R._v$3) {
        Pr(T, "role", R._v$3 = N);
      }
      return R;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined
    });
    return T;
  })();
}
Gn(["keydown", "focusin", "focusout"]);
const wl = "" + new URL("whitelisted_clothing-a32a5c81.png", import.meta.url).href;
const bl = tt("<div>");
const P2 = tt("<div><div><svg width=\"15\" height=\"15\" viewBox=\"0 0 15 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.22817 0.0359793C7.04599 0.103959 6.86175 0.241361 6.76899 0.378402C6.72423 0.444579 6.28583 1.439 5.79476 2.58823C4.94367 4.58013 4.89803 4.67777 4.81758 4.67787C4.77119 4.6779 3.8239 4.74336 2.71248 4.82334C0.494882 4.98286 0.512334 4.98011 0.26804 5.21207C0.0122535 5.45492 -0.074875 5.89695 0.0697171 6.2183C0.119781 6.32964 0.512334 6.74342 1.67113 7.90632L3.20621 9.44684L2.74808 11.7248C2.25592 14.172 2.24845 14.229 2.38574 14.4983C2.48567 14.6944 2.71746 14.8913 2.91886 14.9512C3.13061 15.0142 3.25516 15.0158 3.44288 14.9583C3.52228 14.934 4.45656 14.3778 5.51906 13.7224C6.58157 13.0669 7.47361 12.5306 7.50138 12.5304C7.52914 12.5303 8.39339 13.0491 9.42197 13.6834C10.4505 14.3176 11.3505 14.867 11.4217 14.9042C11.8353 15.12 12.3945 14.9297 12.6143 14.4983C12.7515 14.229 12.7441 14.172 12.2519 11.7248L11.7938 9.44684L13.3289 7.90632C14.4877 6.74342 14.8802 6.32964 14.9303 6.2183C15.0749 5.89695 14.9877 5.45492 14.732 5.21207C14.4867 4.97922 14.5137 4.98342 12.2001 4.81639L10.0921 4.66424L9.18281 2.53926C8.20554 0.255455 8.19945 0.243917 7.89386 0.0889471C7.71116 -0.00371373 7.40069 -0.0284277 7.22817 0.0359793Z\" fill=\"white\" fill-opacity=\"0.13\"></path></svg></div><div><img></div><div>");
const No = e => e.category === "dances" ? `/dance ${e.index ?? 1}` : e.category === "emotes" ? `/e ${e.id}` : false;
const M2 = e => {
  const {
    favorites: r,
    setFavorites: t,
    clickDisabled: n,
    setClickDisabled: i
  } = en();
  const [a, o] = Ke(0);
  const s = ml(`${e.item.category}:${e.item.index}`, {
    getOffset() {
      let m = e.style.transform.match(/-?\d+\.?\d*/g);
      const [h, v] = m?.map(Number) ?? [0, 0];
      return {
        x: h,
        y: v
      };
    },
    getItem() {
      return e.item;
    }
  });
  const [d, c] = qt({
    x: 0,
    y: 0
  });
  mt(() => {
    let m = e.style.transform.match(/-?\d+\.?\d*/g);
    const [h, v] = m?.map(Number) ?? [0, 0];
    if (s.isActiveDraggable) {
      o(e.containerRef?.scrollTop ?? 0);
    }
    c({
      x: h + s.transform.x,
      y: v + s.transform.y
    });
  });
  const l = $e(() => r.find(m => m.category === e.item.category && m.index === e.item.index));
  return (() => {
    const m = P2();
    const h = m.firstChild;
    const v = h.firstChild;
    const _ = h.nextSibling;
    const y = _.firstChild;
    const g = _.nextSibling;
    const E = s.ref;
    if (typeof E == "function") {
      wn(E, m);
    } else {
      s.ref = m;
    }
    is(m, Gi({
      get class() {
        return Ut.emote;
      }
    }, () => s.dragActivators, {
      get style() {
        return {
          ...e.style,
          position: s.isActiveDraggable ? "fixed" : "absolute",
          width: "11.85vh",
          height: "13.88vh",
          transform: s.isActiveDraggable ? `translate(${s.transform.x}px, ${s.transform.y - a()}px)` : `translate(${d.x}px, ${d.y}px)`
        };
      },
      onMouseUp: () => {
        if (!n()) {
          Ge.execute("emotes:play", e.item);
        }
      }
    }), false, true);
    v.$$mouseup = () => {
      setTimeout(() => {
        i(false);
      }, 100);
    };
    v.$$mousedown = async () => {
      i(true);
      const A = {
        id: l()?.id,
        category: e.item.category ?? "",
        index: e.item.index ?? 0,
        value: e.item.value ?? "",
        type: "favorite"
      };
      const I = await Ge.execute("emotes:setFavorite", A);
      if (!l() && I) {
        t(b => [...b, {
          ...A,
          id: I
        }]);
      } else {
        t(b => b.filter(T => T.category !== A.category || T.index !== A.index));
      }
    };
    Fe(h, Ae(Lr, {
      get when() {
        return No(e.item);
      },
      get children() {
        const A = bl();
        Fe(A, () => No(e.item));
        Oe(() => ke(A, Ut.command));
        return A;
      }
    }), null);
    y.addEventListener("error", A => {
      A.currentTarget.src = wl;
    });
    Fe(_, () => e.item.label ?? e.item.index ?? 1, null);
    Oe(A => {
      const I = Ut.header;
      const b = {
        [Ut.active]: !!l()
      };
      const T = Ut.center;
      const R = Ut.icon;
      const B = `https://assets.nopixel.net/dev/images/animations/${e.item.category}/${e.item.index}.webp`;
      const z = Ut.bar;
      if (I !== A._v$) {
        ke(h, A._v$ = I);
      }
      A._v$2 = ns(v, b, A._v$2);
      if (T !== A._v$3) {
        ke(_, A._v$3 = T);
      }
      if (R !== A._v$4) {
        ke(y, A._v$4 = R);
      }
      if (B !== A._v$5) {
        Pr(y, "src", A._v$5 = B);
      }
      if (z !== A._v$6) {
        ke(g, A._v$6 = z);
      }
      return A;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined
    });
    return m;
  })();
};
function j2() {
  const {
    page: e,
    emotes: r,
    favorites: t,
    searchInput: n
  } = en();
  let i;
  const a = s => s * 0.01 * window.innerHeight;
  const o = $e(() => r.filter(s => e() === "all" ? true : e() === "favorites" ? t.some(d => d.category === s.category && d.index === s.index) : s.category === e()));
  return (() => {
    const s = bl();
    const d = i;
    if (typeof d == "function") {
      wn(d, s);
    } else {
      i = s;
    }
    Fe(s, Ae(L2, {
      get items() {
        return o().filter((c, l) => n() ? c.label?.toLowerCase().includes(n().toLowerCase()) || l + 1 === Number(n()) : true);
      },
      scrollTarget: i,
      get itemSize() {
        return {
          height: a(15),
          width: a(13.2)
        };
      },
      crossAxisCount: c => Math.floor(7),
      overscan: 0,
      children: c => Ae(M2, Gi(c, {
        containerRef: i
      }))
    }));
    Oe(() => ke(s, Ut.emotes));
    return s;
  })();
}
Gn(["mousedown", "mouseup"]);
const Z2 = "_quick_16ksr_1";
const H2 = "_title_16ksr_10";
const W2 = "_divider_16ksr_19";
const V2 = "_bar_16ksr_29";
const q2 = "_emote_16ksr_36";
const K2 = "_icon_16ksr_56";
const G2 = "_active_16ksr_61";
const X2 = "_keybind_16ksr_69";
const Nt = {
  quick: Z2,
  title: H2,
  divider: W2,
  bar: V2,
  emote: q2,
  icon: K2,
  active: G2,
  keybind: X2
};
const Y2 = tt("<div><div class=\"w-full flex flex-row justify-between items-center\"><div>Quick Animations</div><div><div></div></div></div><div class=\"w-full flex flex-row justify-between items-center\">");
const J2 = tt("<img>");
const Q2 = tt("<div>SHIFT + ");
const ev = tt("<div><div>");
function tv() {
  const {
    emotes: e,
    quickEmotes: r,
    setQuickEmotes: t,
    setClickDisabled: n
  } = en();
  const i = na();
  if (!i) {
    return null;
  }
  const [, {
    onDragStart: a,
    onDragEnd: o,
    addTransformer: s,
    removeTransformer: d
  }] = i;
  a(async l => {
    if (l.draggable?.id.toString().includes("quick:")) {
      return;
    }
    const m = l.draggable.data.getOffset();
    const h = {
      id: "custom",
      order: 100,
      callback: v => ({
        x: m.x + v.x,
        y: v.y + m.y
      })
    };
    s("draggables", l.draggable.id, h);
    n(true);
  });
  o(async l => {
    const m = l.draggable;
    const h = l.droppable;
    if (m?.id.toString().includes("quick:")) {
      const y = parseInt(l.draggable.id.toString().replace("quick:", ""));
      t(g => ({
        ...g,
        [y]: null
      }));
      await Ge.execute("emotes:setQuickEmote", y, null);
      return;
    }
    d("draggables", m.id, "custom");
    setTimeout(() => {
      n(false);
    }, 100);
    if (!h) {
      return;
    }
    const v = m.data.getItem();
    const _ = {
      category: v.category,
      index: v.index,
      value: v.value
    };
    t(y => ({
      ...y,
      [h.id]: _
    }));
    await Ge.execute("emotes:setQuickEmote", h.id, _);
  });
  Kn(async () => {
    const l = await Ge.execute("emotes:getQuickEmotes");
    t(l);
  });
  const c = (l, m) => e.find(h => h.category === l && h.index === m);
  return (() => {
    const l = Y2();
    const m = l.firstChild;
    const h = m.firstChild;
    const v = h.nextSibling;
    const _ = v.firstChild;
    const y = m.nextSibling;
    Fe(y, Ae(rs, {
      get each() {
        return Object.values(r);
      },
      children: (g, E) => {
        const A = k2(E());
        const I = ml(`quick:${E()}`);
        const b = g ? c(g.category, g.index) : null;
        return (() => {
          const T = ev();
          const R = T.firstChild;
          const B = A.ref;
          if (typeof B == "function") {
            wn(B, T);
          } else {
            A.ref = T;
          }
          const z = I.ref;
          if (typeof z == "function") {
            wn(z, R);
          } else {
            I.ref = R;
          }
          is(R, Gi(() => I.dragActivators, {
            get class() {
              return Nt.emote;
            },
            get classList() {
              return {
                [Nt.active]: A.isActiveDroppable
              };
            },
            get style() {
              return {
                transform: `translate(${I.transform.x}px, ${I.transform.y}px)`,
                "pointer-events": g ? "all" : "none"
              };
            }
          }), false, true);
          Fe(R, Ae(Lr, {
            when: g,
            get children() {
              return [(() => {
                const N = J2();
                N.addEventListener("error", S => {
                  S.currentTarget.src = wl;
                });
                Oe(S => {
                  const D = Nt.icon;
                  const P = `https://assets.nopixel.net/dev/images/animations/${g.category}/${g.index}.webp`;
                  if (D !== S._v$5) {
                    ke(N, S._v$5 = D);
                  }
                  if (P !== S._v$6) {
                    Pr(N, "src", S._v$6 = P);
                  }
                  return S;
                }, {
                  _v$5: undefined,
                  _v$6: undefined
                });
                return N;
              })(), $e(() => b?.label ?? b?.index ?? 1), (() => {
                const N = Q2();
                N.firstChild;
                Fe(N, () => E() + 1, null);
                Oe(() => ke(N, Nt.keybind));
                return N;
              })()];
            }
          }));
          return T;
        })();
      }
    }));
    Oe(g => {
      const E = Nt.quick;
      const A = Nt.title;
      const I = Nt.divider;
      const b = Nt.bar;
      if (E !== g._v$) {
        ke(l, g._v$ = E);
      }
      if (A !== g._v$2) {
        ke(h, g._v$2 = A);
      }
      if (I !== g._v$3) {
        ke(v, g._v$3 = I);
      }
      if (b !== g._v$4) {
        ke(_, g._v$4 = b);
      }
      return g;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined
    });
    return l;
  })();
}
var rv = () => {};
var Fo = (e, r) => r();
function nv(e, r) {
  const t = Se(e);
  const n = t ? [t] : [];
  const {
    onEnter: i = Fo,
    onExit: a = Fo
  } = r;
  const [o, s] = Ke(r.appear ? [] : n);
  const [d] = Ll();
  let c;
  let l = false;
  function m(_, y) {
    if (!_) {
      return y && y();
    }
    l = true;
    a(_, () => {
      nt(() => {
        l = false;
        s(g => g.filter(E => E !== _));
        if (y) {
          y();
        }
      });
    });
  }
  function h(_) {
    const y = c;
    if (!y) {
      return _ && _();
    }
    c = undefined;
    s(g => [y, ...g]);
    i(y, _ ?? rv);
  }
  const v = r.mode === "out-in" ? _ => l || m(_, h) : r.mode === "in-out" ? _ => h(() => m(_)) : _ => {
    m(_);
    h();
  };
  or(_ => {
    const y = e();
    if (Se(d)) {
      d();
      return _;
    } else {
      if (y !== _) {
        c = y;
        nt(() => Se(() => v(_)));
      }
      return y;
    }
  }, r.appear ? undefined : t);
  return o;
}
var Uo = e => e instanceof Element;
function Qa(e, r) {
  if (r(e)) {
    return e;
  }
  if (typeof e == "function" && !e.length) {
    return Qa(e(), r);
  }
  if (Array.isArray(e)) {
    for (const t of e) {
      const n = Qa(t, r);
      if (n) {
        return n;
      }
    }
  }
  return null;
}
function iv(e, r = Uo, t = Uo) {
  const n = $e(e);
  return $e(() => Qa(n(), r));
}
function av(e) {
  return $e(() => {
    const r = e.name || "s";
    return {
      enterActive: (e.enterActiveClass || r + "-enter-active").split(" "),
      enter: (e.enterClass || r + "-enter").split(" "),
      enterTo: (e.enterToClass || r + "-enter-to").split(" "),
      exitActive: (e.exitActiveClass || r + "-exit-active").split(" "),
      exit: (e.exitClass || r + "-exit").split(" "),
      exitTo: (e.exitToClass || r + "-exit-to").split(" "),
      move: (e.moveClass || r + "-move").split(" ")
    };
  });
}
function xl(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
function sv(e, r, t, n) {
  const {
    onBeforeEnter: i,
    onEnter: a,
    onAfterEnter: o
  } = r;
  i?.(t);
  t.classList.add(...e.enter);
  t.classList.add(...e.enterActive);
  queueMicrotask(() => {
    if (!t.parentNode) {
      return n?.();
    }
    a?.(t, () => s());
  });
  xl(() => {
    t.classList.remove(...e.enter);
    t.classList.add(...e.enterTo);
    if (!a || a.length < 2) {
      t.addEventListener("transitionend", s);
      t.addEventListener("animationend", s);
    }
  });
  function s(d) {
    if (!d || d.target === t) {
      n?.();
      t.removeEventListener("transitionend", s);
      t.removeEventListener("animationend", s);
      t.classList.remove(...e.enterActive);
      t.classList.remove(...e.enterTo);
      o?.(t);
    }
  }
}
function ov(e, r, t, n) {
  const {
    onBeforeExit: i,
    onExit: a,
    onAfterExit: o
  } = r;
  if (!t.parentNode) {
    return n?.();
  }
  i?.(t);
  t.classList.add(...e.exit);
  t.classList.add(...e.exitActive);
  a?.(t, () => s());
  xl(() => {
    t.classList.remove(...e.exit);
    t.classList.add(...e.exitTo);
    if (!a || a.length < 2) {
      t.addEventListener("transitionend", s);
      t.addEventListener("animationend", s);
    }
  });
  function s(d) {
    if (!d || d.target === t) {
      n?.();
      t.removeEventListener("transitionend", s);
      t.removeEventListener("animationend", s);
      t.classList.remove(...e.exitActive);
      t.classList.remove(...e.exitTo);
      o?.(t);
    }
  }
}
var cv = {
  inout: "in-out",
  outin: "out-in"
};
var lv = e => {
  const r = av(e);
  return nv(iv(() => e.children), {
    mode: cv[e.mode],
    appear: e.appear,
    onEnter(t, n) {
      sv(r(), e, t, n);
    },
    onExit(t, n) {
      ov(r(), e, t, n);
    }
  });
};
const uv = "_hud_1ofc0_1";
const fv = "_keybind_1ofc0_10";
const dv = "_text_1ofc0_26";
const hv = "_button_1ofc0_29";
const ui = {
  hud: uv,
  keybind: fv,
  text: dv,
  button: hv
};
const vv = tt("<div class=\"absolute w-full h-full flex flex-col justify-end items-end p-[3vh]\"><div>");
const pv = tt("<div><div></div><div>");
const _v = [{
  label: "Confirm",
  keybind: "E"
}, {
  label: "Cancel",
  keybind: "ESC"
}, {
  label: "Rotate",
  keybind: "Mouse Wheel"
}, {
  label: "Rotate/Height",
  keybind: "Z"
}];
function gv() {
  return (() => {
    const e = vv();
    const r = e.firstChild;
    Fe(r, Ae(rs, {
      each: _v,
      children: t => (() => {
        const n = pv();
        const i = n.firstChild;
        const a = i.nextSibling;
        Fe(i, () => t.label);
        Fe(a, () => t.keybind);
        Oe(o => {
          const s = ui.keybind;
          const d = ui.text;
          const c = ui.button;
          if (s !== o._v$) {
            ke(n, o._v$ = s);
          }
          if (d !== o._v$2) {
            ke(i, o._v$2 = d);
          }
          if (c !== o._v$3) {
            ke(a, o._v$3 = c);
          }
          return o;
        }, {
          _v$: undefined,
          _v$2: undefined,
          _v$3: undefined
        });
        return n;
      })()
    }));
    Oe(() => ke(r, ui.hud));
    return e;
  })();
}
const mv = tt("<div><div><div class=\"w-full h-full flex flex-row items-center justify-between shrink-0 gap-[2vh]\"><div class=\"w-full h-full flex flex-col justify-between items-center\">");
function yv() {
  const {
    visible: e,
    setVisible: r,
    emotes: t,
    setEmotes: n,
    setFavorites: i,
    hudVisible: a,
    setHudVisible: o
  } = en();
  const s = d => {
    if (d.key === "Escape" && e()) {
      r(false);
      Ge.execute("emotes:close");
    }
  };
  Kn(async () => {
    document.addEventListener("keydown", s);
  });
  Kt(() => {
    document.removeEventListener("keydown", s);
  });
  Ge.register("emotes:open", async () => {
    if (t.length === 0) {
      const d = await Ge.execute("emotes:getEmotes");
      const c = Object.values(d).flatMap((m, h) => m.map((v, _) => ({
        ...v,
        index: _ + 1,
        label: v.label ?? `Dance ${_ + 1}`,
        value: v.id ?? v.value
      })));
      n(c);
      const l = await Ge.execute("emotes:getFavorites");
      i(l);
    }
    r(true);
  });
  Ge.register("emotes:hud", async d => {
    o(d);
  });
  return Ae(lv, {
    name: "slide-bottom",
    get children() {
      return [Ae(Lr, {
        get when() {
          return e();
        },
        get children() {
          return Ae(w2, {
            get children() {
              return Ae(x2, {
                get children() {
                  const d = mv();
                  const c = d.firstChild;
                  const l = c.firstChild;
                  const m = l.firstChild;
                  Fe(c, Ae(J1, {}), l);
                  Fe(l, Ae(c2, {}), m);
                  Fe(m, Ae(j2, {}), null);
                  Fe(m, Ae(tv, {}), null);
                  Oe(h => {
                    const v = Oo.App;
                    const _ = Oo.container;
                    if (v !== h._v$) {
                      ke(d, h._v$ = v);
                    }
                    if (_ !== h._v$2) {
                      ke(c, h._v$2 = _);
                    }
                    return h;
                  }, {
                    _v$: undefined,
                    _v$2: undefined
                  });
                  return d;
                }
              });
            }
          });
        }
      }), Ae(Lr, {
        get when() {
          return a();
        },
        get children() {
          return Ae(gv, {});
        }
      })];
    }
  });
}
au(() => Ae(j1, {
  get children() {
    return Ae(yv, {});
  }
}), document.getElementById("root"));