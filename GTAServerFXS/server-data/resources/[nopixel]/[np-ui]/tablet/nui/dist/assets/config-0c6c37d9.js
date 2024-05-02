import { t as _0x178f07, c as _0x1fe29b, l as _0x37ca19, j as _0x25cc82, a as _0x3c08b8, i as _0x40d028, b as _0x1c9046, S as _0x21491e, d as _0x17fa30, o as _0x238039, N as _0x1d49fa, z as _0x5aba94 } from "./index-bc87d183.js";
import { A as _0x8fc657 } from "./index-e954302e.js";
import { c as _0x284cd2 } from "./index-f70f3234.js";
import { T as _0x4bef87 } from "./index-a27eaa46.js";
import "./index-c0367edf.js";
const J = _0x178f07("<div class=\"contacts-header\"><div class=\"icon\"></div><div class=\"flex flex-col justify-center items-start\"><div class=\"small\">Your</div><div class=\"big\">Contacts</div></div><div class=\"description\">Contacts are people you can interact and work for to earn money, reputation and more.");
function O() {
  return J();
}
const [Q, W] = _0x284cd2(() => {
  const [_0x45d25c, _0x2d438b] = _0x1fe29b([]);
  const [_0x2a7c72, _0x4827cf] = _0x37ca19("");
  return {
    contacts: _0x45d25c,
    setContacts: _0x2d438b,
    search: _0x2a7c72,
    setSearch: _0x4827cf
  };
});
const M = () => W();
const X = _0x178f07("<div class=\"flex w-full flex-row items-center justify-between\"><div class=\"reputation\"><div class=\"flex w-full flex-col items-start justify-start\"><div class=\"title\">Most Contact Reputation</div><div class=\"description\"></div></div><div class=\"flex w-full flex-col items-start justify-start\"><div class=\"rep-title\"><span>Reputation</span> <span>/</span></div><div class=\"rep-bar-container\"><div class=\"bar\"><div class=\"bar-progress\"></div></div></div></div></div><div class=\"reputation total\"><div class=\"flex w-full flex-col items-start justify-start\"><div class=\"title\">Total Reputation</div><div class=\"description\">A total reputation assessment of an individual or organization that takes into account their interactions, associations, and feedback from a wide range of contacts and stakeholders. This comprehensive evaluation provides insights into their standing, credibility, and trustworthiness within their network and the broader community, reflecting the cumulative impact of their actions and relationships.</div></div><div class=\"flex w-full flex-col items-start justify-start\"><div class=\"rep-title\"><span>Reputation</span> <span>/</span></div><div class=\"rep-bar-container\"><div class=\"bar\"><div class=\"bar-progress\">");
function Z() {
  const {
    contacts: _0x4d5170
  } = M();
  const _0x8fab57 = _0x25cc82(() => _0x4d5170?.reduce((_0x1d3f62, _0x192236) => _0x1d3f62.progression > _0x192236.progression ? _0x1d3f62 : _0x192236, {}));
  const _0x38ec38 = _0x25cc82(() => {
    let _0x2ebf31 = 0;
    _0x4d5170?.forEach(_0xa28e24 => {
      _0x2ebf31 += _0xa28e24.progression;
    });
    return _0x2ebf31;
  });
  const _0x3441f1 = (_0x1fa95e, _0x1f19e1) => !_0x1fa95e || !_0x1f19e1 ? 0 .toFixed(2) : (_0x1fa95e = _0x1fa95e > _0x1f19e1 ? _0x1f19e1 : _0x1fa95e, (_0x1fa95e / _0x1f19e1 * 100).toFixed(2));
  return _0x3c08b8(_0x21491e, {
    get when() {
      return _0x4d5170.length > 0;
    },
    get children() {
      const _0x58b108 = X();
      const _0x286a08 = _0x58b108.firstChild;
      const _0x1ac5ee = _0x286a08.firstChild;
      const _0x4f8243 = _0x1ac5ee.firstChild;
      const _0x171330 = _0x4f8243.nextSibling;
      const _0x527649 = _0x1ac5ee.nextSibling;
      const _0x11bf0a = _0x527649.firstChild;
      const _0x367346 = _0x11bf0a.firstChild;
      const _0x4dc392 = _0x367346.nextSibling;
      const _0x50cbb1 = _0x4dc392.nextSibling;
      const _0x5106fa = _0x50cbb1.firstChild;
      const _0xb72237 = _0x11bf0a.nextSibling;
      const _0xc1d820 = _0xb72237.firstChild;
      const _0x2c0e28 = _0xc1d820.firstChild;
      const _0x303ab8 = _0x286a08.nextSibling;
      const _0xaf1925 = _0x303ab8.firstChild;
      const _0x23b04d = _0xaf1925.nextSibling;
      const _0x35b48b = _0x23b04d.firstChild;
      const _0x4c4091 = _0x35b48b.firstChild;
      const _0xe07734 = _0x4c4091.nextSibling;
      const _0x2dca03 = _0xe07734.nextSibling;
      const _0x4f8e61 = _0x2dca03.firstChild;
      const _0x4051ca = _0x35b48b.nextSibling;
      const _0x2ab73a = _0x4051ca.firstChild;
      const _0x4c540d = _0x2ab73a.firstChild;
      _0x40d028(_0x171330, () => _0x8fab57().name);
      _0x40d028(_0x50cbb1, () => _0x8fab57().progression.toFixed(2), _0x5106fa);
      _0x40d028(_0x50cbb1, () => _0x8fab57().maxProgression, null);
      _0x40d028(_0x2dca03, () => _0x38ec38().toFixed(2), _0x4f8e61);
      _0x40d028(_0x2dca03, () => _0x4d5170.length * 100, null);
      _0x1c9046(_0x4ff503 => {
        const _0x34b929 = _0x3441f1(_0x8fab57().progression, _0x8fab57().maxProgression) + "%";
        const _0x35791b = _0x38ec38() / (_0x4d5170.length * 100) * 100 + "%";
        if (_0x34b929 !== _0x4ff503._v$) {
          if ((_0x4ff503._v$ = _0x34b929) != null) {
            _0x2c0e28.style.setProperty("width", _0x34b929);
          } else {
            _0x2c0e28.style.removeProperty("width");
          }
        }
        if (_0x35791b !== _0x4ff503._v$2) {
          if ((_0x4ff503._v$2 = _0x35791b) != null) {
            _0x4c540d.style.setProperty("width", _0x35791b);
          } else {
            _0x4c540d.style.removeProperty("width");
          }
        }
        return _0x4ff503;
      }, {
        _v$: undefined,
        _v$2: undefined
      });
      return _0x58b108;
    }
  });
}
const tt = _0x178f07("<div class=\"avatar\">");
const et = _0x178f07("<div class=\"tag\">");
const st = _0x178f07("<div class=\"rep-bar-container\"><div class=\"bar\"><div class=\"bar-progress\">");
const it = _0x178f07("<div class=\"markButton\">Set mark");
const lt = _0x178f07("<div class=\"contacts-list-header\"><div class=\"flex w-full flex-row items-center justify-start gap-3\"><div class=\"icon\"></div><div class=\"flex flex-col items-start justify-center\"><div class=\"small\">List of</div><div class=\"big\">Contacts</div></div><div class=\"searchBar\"><input type=\"text\" placeholder=\"Search...\"><div class=\"searchIcon\">");
const at = _0x178f07("<div class=\"contacts-list\">");
function nt() {
  const {
    setContacts: _0x27b91d,
    search: _0x4f1c99,
    setSearch: _0x9b838b
  } = M();
  _0x238039(async () => {
    const _0x1de145 = await _0x1d49fa.execute("tablet:contacts:getContacts");
    _0x27b91d(_0x1de145);
    _0x378e5e(_0x1de145.filter(_0x1786cc => _0x1786cc.visible).map(_0x274f1d => {
      const {
        id: _0x5cdee0,
        name: _0x31d6fb,
        group: _0x2e59d8,
        progression: _0x1c8020,
        npc: _0x25fef7,
        maxProgression: _0x5641af
      } = _0x274f1d;
      const _0x29572a = (_0x5a91f4, _0x718476) => !_0x5a91f4 || !_0x718476 ? 0 .toFixed(2) : (_0x5a91f4 = _0x5a91f4 > _0x718476 ? _0x718476 : _0x5a91f4, (_0x5a91f4 / _0x718476 * 100).toFixed(2));
      return {
        avatar: (() => {
          const _0x1b85d7 = tt();
          if ("url(" + ("https://assets.nopixel.net/dev/images/contacts/" + _0x5cdee0 + ".webp") + ")" != null) {
            _0x1b85d7.style.setProperty("background-image", "url(" + ("https://assets.nopixel.net/dev/images/contacts/" + _0x5cdee0 + ".webp") + ")");
          } else {
            _0x1b85d7.style.removeProperty("background-image");
          }
          return _0x1b85d7;
        })(),
        name: _0x31d6fb,
        tag: (() => {
          const _0x12bb53 = et();
          _0x40d028(_0x12bb53, _0x2e59d8);
          _0x1c9046(_0x189b3e => _0x5aba94(_0x12bb53, {
            [_0x274f1d.color ?? ""]: true
          }, _0x189b3e));
          return _0x12bb53;
        })(),
        rep: (() => {
          const _0xc8829 = st();
          const _0x27a827 = _0xc8829.firstChild;
          const _0x5472c2 = _0x27a827.firstChild;
          _0x1c9046(_0x2522f1 => {
            const _0x2a48b0 = _0x29572a(_0x1c8020, _0x5641af ?? 100) + "%";
            const _0x5187cc = {
              [_0x274f1d.color ?? ""]: true
            };
            if (_0x2a48b0 !== _0x2522f1._v$) {
              if ((_0x2522f1._v$ = _0x2a48b0) != null) {
                _0x5472c2.style.setProperty("width", _0x2a48b0);
              } else {
                _0x5472c2.style.removeProperty("width");
              }
            }
            _0x2522f1._v$2 = _0x5aba94(_0x5472c2, _0x5187cc, _0x2522f1._v$2);
            return _0x2522f1;
          }, {
            _v$: undefined,
            _v$2: undefined
          });
          return _0xc8829;
        })(),
        gps: (() => {
          const _0x510d74 = it();
          _0x510d74.$$click = () => {
            _0x1d49fa.execute("tablet:contacts:setMark", _0x274f1d);
          };
          return _0x510d74;
        })()
      };
    }));
  });
  const [_0x5d254b, _0x378e5e] = _0x1fe29b([]);
  const _0x31b2d7 = [{
    accessorKey: "avatar",
    header: "Avatar",
    cell: _0x1b0c6a => _0x1b0c6a.getValue()
  }, {
    accessorKey: "name",
    header: "Name"
  }, {
    accessorKey: "tag",
    header: "Tag",
    cell: _0x1a654d => _0x1a654d.getValue()
  }, {
    accessorKey: "rep",
    header: "Rep",
    cell: _0x338803 => _0x338803.getValue()
  }, {
    accessorKey: "gps",
    header: "GPS",
    cell: _0x3bbe31 => _0x3bbe31.getValue()
  }];
  return [(() => {
    const _0x2363ef = lt();
    const _0x133a5f = _0x2363ef.firstChild;
    const _0x588506 = _0x133a5f.firstChild;
    const _0x3abe15 = _0x588506.nextSibling;
    const _0x5f01cc = _0x3abe15.nextSibling;
    const _0x3dc672 = _0x5f01cc.firstChild;
    _0x3dc672.$$input = _0xf2aac9 => {
      _0x9b838b(_0xf2aac9.currentTarget.value);
    };
    _0x1c9046(() => _0x3dc672.value = _0x4f1c99());
    return _0x2363ef;
  })(), (() => {
    const _0x1055a1 = at();
    _0x40d028(_0x1055a1, _0x3c08b8(_0x4bef87, {
      get rows() {
        return _0x5d254b.filter(_0x326984 => _0x326984.name.toLowerCase().includes(_0x4f1c99().toLowerCase()));
      },
      columns: _0x31b2d7
    }));
    return _0x1055a1;
  })()];
}
_0x17fa30(["click", "input"]);
const rt = _0x178f07("<div class=\"contacts-container\"><div class=\"contacts-content\"><div class=\"contacts-details\">");
const ct = () => _0x3c08b8(_0x8fc657, {
  get name() {
    return dt.name;
  },
  headerColor: "#030A10",
  get children() {
    return _0x3c08b8(Q, {
      get children() {
        const _0x44a7da = rt();
        const _0x5d2410 = _0x44a7da.firstChild;
        const _0x6bc470 = _0x5d2410.firstChild;
        _0x40d028(_0x44a7da, _0x3c08b8(O, {}), _0x5d2410);
        _0x40d028(_0x6bc470, _0x3c08b8(Z, {}), null);
        _0x40d028(_0x6bc470, _0x3c08b8(nt, {}), null);
        return _0x44a7da;
      }
    });
  }
});
const ot = "" + new URL("contacts-icon-d58beb8e.png", import.meta.url).href;
const dt = {
  icon: ot,
  enabled: true,
  onDock: false,
  name: "contacts",
  label: "Contacts",
  render: () => _0x3c08b8(ct, {})
};
export { dt as default };