import { c as _0xcb3d2e } from "./index-f70f3234.js";
import { d as _0x4c3a6e, c as _0x4b9b68, o as _0x1d89be, H as _0x413127, i as _0x19eec2, a, b as _0x1cfc2f, e as _0xe92bd1, z as _0x83025c, F as _0x5bfab, t as _0x26193e, N as _0x79718b, M as _0x15a609, h as _0x2f11d8, j as _0xac0c0e, S as _0x472e17, f as _0x32c761, l as _0x14d79c } from "./index-bc87d183.js";
import { L as _0x36f359 } from "./index-8134e99a.js";
const de = "_container_1a7q9_1";
const ve = "_box_1a7q9_11";
const _e = "_image_1a7q9_22";
const fe = "_image2_1a7q9_32";
const he = "_image3_1a7q9_35";
const $e = "_image4_1a7q9_38";
const ge = "_image5_1a7q9_41";
const Ce = "_tag_1a7q9_44";
const me = "_button_1a7q9_81";
const xe = "_price_1a7q9_98";
const be = "_purchased_1a7q9_102";
const q = {
  container: de,
  box: ve,
  image: _e,
  image2: fe,
  image3: he,
  image4: $e,
  image5: ge,
  tag: Ce,
  button: me,
  price: xe,
  purchased: be
};
const we = "_container_1fua7_1";
const Se = "_divider_1fua7_12";
const ye = "_buttons_1fua7_39";
const qe = "_button_1fua7_39";
const Le = "_active_1fua7_62";
const Me = "_sequenceTitle_1fua7_77";
const pe = "_sequenceText_1fua7_86";
const Te = "_attemptBox_1fua7_99";
const He = "_attempts_1fua7_117";
const x = {
  container: we,
  divider: Se,
  buttons: ye,
  button: qe,
  active: Le,
  sequenceTitle: Me,
  sequenceText: pe,
  attemptBox: Te,
  attempts: He
};
const Pe = _0x26193e("<div><div class=\"flex flex-row items-center justify-between\"><div>010101010101010101010</div><div class=\"flex flex-col items-center justify-center\"><h1>Try to get access</h1><p>Enter the sequence below to get access to the plans</p></div><div>010101010101010101010</div></div><div></div><div class=\"flex w-full flex-row items-center justify-between\"><div class=\"item-start flex flex-col justify-start gap-[1vh]\"><div>// SEQUENCE REQUIRED TO ACCESS</div><div class=\"flex flex-row items-center justify-between\"></div></div><div class=\"flex flex-row items-center justify-end gap-[1vh]\"><div><h1>Attemps per day</h1><p>Resets every 24h</p></div><div>");
const X = _0x26193e("<div>");
const Ee = () => {
  const {
    setMinigameResult: _0x322029,
    setShowPlans: _0x2c22e4,
    data: _0x16515a,
    fetchData: _0x5b6a6f
  } = F();
  const _0x220e93 = () => {
    const _0x53e638 = [..."QWERTYUIOPASDFGHJKLZXCVBNM1234567890"];
    const _0x16b3b2 = [];
    for (let _0x47fb8d = 0; _0x47fb8d < 8; _0x47fb8d++) {
      let _0x371b04 = "";
      for (let _0x5dbf9 = 0; _0x5dbf9 < 2; _0x5dbf9++) {
        const _0x31fd8c = Math.floor(Math.random() * _0x53e638.length);
        _0x371b04 += _0x53e638[_0x31fd8c];
      }
      _0x16b3b2.push(_0x371b04);
    }
    return _0x16b3b2;
  };
  const _0x11b491 = () => {
    const _0x137370 = [..."QWERTYUIOPASDFGHJKLZXCVBNM1234567890"];
    const _0x36ebfc = [];
    for (let _0x403cc0 = 0; _0x403cc0 < 17; _0x403cc0++) {
      let _0x26c0d5 = "";
      for (let _0x18359e = 0; _0x18359e < 2; _0x18359e++) {
        const _0x12a45c = Math.floor(Math.random() * _0x137370.length);
        _0x26c0d5 += _0x137370[_0x12a45c];
      }
      _0x36ebfc.push(_0x26c0d5);
    }
    return _0x36ebfc;
  };
  const [_0x47621b, _0x1d5c3e] = _0x4b9b68(_0x220e93());
  const [_0x48fcfe, _0x45a20b] = _0x4b9b68([]);
  const [_0x4894e4, _0x4248a4] = _0x4b9b68([]);
  const _0x70cbd = () => {
    const _0x1ac265 = [..._0x11b491(), ..._0x47621b].sort(() => Math.random() - 0.5);
    _0x4248a4(_0x1ac265);
  };
  let _0x2021d0;
  _0x1d89be(() => {
    _0x70cbd();
    _0x2021d0 = setInterval(() => {
      _0x70cbd();
    }, 1000);
  });
  _0x413127(() => {
    clearInterval(_0x2021d0);
  });
  const _0x15c4c4 = async () => {
    _0x45a20b([]);
    _0x322029("success");
    clearInterval(_0x2021d0);
    await _0x79718b.execute("noid:successMinigame");
    await _0x5b6a6f(true);
    setTimeout(() => {
      _0x322029(null);
      _0x1d5c3e(_0x220e93());
      _0x2c22e4(true);
    }, 2000);
  };
  const _0x15e51a = async () => {
    _0x45a20b([]);
    _0x322029("fail");
    clearInterval(_0x2021d0);
    await _0x79718b.execute("noid:failMinigame");
    await _0x5b6a6f();
    setTimeout(() => {
      _0x322029(null);
      _0x1d5c3e(_0x220e93());
    }, 2000);
  };
  return (() => {
    const _0x3b1876 = Pe();
    const _0xd1f6c = _0x3b1876.firstChild;
    const _0x2f20b2 = _0xd1f6c.firstChild;
    const _0x4d2bd4 = _0x2f20b2.nextSibling;
    const _0x150491 = _0x4d2bd4.nextSibling;
    const _0x313845 = _0xd1f6c.nextSibling;
    const _0x5b24f1 = _0x313845.nextSibling;
    const _0x57c7ad = _0x5b24f1.firstChild;
    const _0x3b1345 = _0x57c7ad.firstChild;
    const _0x49090c = _0x3b1345.nextSibling;
    const _0xbc7c7a = _0x57c7ad.nextSibling;
    const _0x52afda = _0xbc7c7a.firstChild;
    const _0x2130ea = _0x52afda.nextSibling;
    _0x19eec2(_0x313845, a(_0x5bfab, {
      each: _0x4894e4,
      children: (_0x2fc487, _0x1ce279) => (() => {
        const _0x5c42c4 = X();
        _0x5c42c4.$$click = () => {
          if (_0x47621b[_0x48fcfe.length] !== _0x2fc487) {
            _0x15e51a();
            return;
          } else if (_0x48fcfe.length === _0x47621b.length - 1) {
            _0x15c4c4();
            return;
          }
          _0x45a20b([..._0x48fcfe, _0x2fc487]);
        };
        _0x19eec2(_0x5c42c4, _0x2fc487);
        _0x1cfc2f(_0x367603 => {
          const _0x1d6109 = x.button;
          const _0x459876 = {
            [x.active]: _0x48fcfe.includes(_0x2fc487)
          };
          if (_0x1d6109 !== _0x367603._v$8) {
            _0xe92bd1(_0x5c42c4, _0x367603._v$8 = _0x1d6109);
          }
          _0x367603._v$9 = _0x83025c(_0x5c42c4, _0x459876, _0x367603._v$9);
          return _0x367603;
        }, {
          _v$8: undefined,
          _v$9: undefined
        });
        return _0x5c42c4;
      })()
    }));
    _0x19eec2(_0x49090c, a(_0x5bfab, {
      each: _0x47621b,
      children: _0x37aaaf => (() => {
        const _0xf824d6 = X();
        _0x19eec2(_0xf824d6, _0x37aaaf);
        _0x1cfc2f(_0x32206e => {
          const _0x5d96f4 = x.sequenceText;
          const _0x334005 = {
            [x.active]: _0x48fcfe.includes(_0x37aaaf)
          };
          if (_0x5d96f4 !== _0x32206e._v$10) {
            _0xe92bd1(_0xf824d6, _0x32206e._v$10 = _0x5d96f4);
          }
          _0x32206e._v$11 = _0x83025c(_0xf824d6, _0x334005, _0x32206e._v$11);
          return _0x32206e;
        }, {
          _v$10: undefined,
          _v$11: undefined
        });
        return _0xf824d6;
      })()
    }));
    _0x19eec2(_0x2130ea, () => _0x16515a.attempts);
    _0x1cfc2f(_0x2d710e => {
      const _0x14088d = x.container;
      const _0x374e4d = x.divider;
      const _0x6395c4 = x.divider;
      const _0x36c703 = x.buttons;
      const _0x4ecba6 = x.sequenceTitle;
      const _0x591896 = x.attempts;
      const _0x59660f = x.attemptBox;
      if (_0x14088d !== _0x2d710e._v$) {
        _0xe92bd1(_0x3b1876, _0x2d710e._v$ = _0x14088d);
      }
      if (_0x374e4d !== _0x2d710e._v$2) {
        _0xe92bd1(_0x2f20b2, _0x2d710e._v$2 = _0x374e4d);
      }
      if (_0x6395c4 !== _0x2d710e._v$3) {
        _0xe92bd1(_0x150491, _0x2d710e._v$3 = _0x6395c4);
      }
      if (_0x36c703 !== _0x2d710e._v$4) {
        _0xe92bd1(_0x313845, _0x2d710e._v$4 = _0x36c703);
      }
      if (_0x4ecba6 !== _0x2d710e._v$5) {
        _0xe92bd1(_0x3b1345, _0x2d710e._v$5 = _0x4ecba6);
      }
      if (_0x591896 !== _0x2d710e._v$6) {
        _0xe92bd1(_0x52afda, _0x2d710e._v$6 = _0x591896);
      }
      if (_0x59660f !== _0x2d710e._v$7) {
        _0xe92bd1(_0x2130ea, _0x2d710e._v$7 = _0x59660f);
      }
      return _0x2d710e;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined
    });
    return _0x3b1876;
  })();
};
_0x4c3a6e(["click"]);
const Be = "_container_153ys_1";
const De = "_bar_153ys_11";
const Re = "_error_153ys_31";
const Z = {
  container: Be,
  bar: De,
  error: Re
};
const Ie = _0x26193e("<svg class=\"mb-[1vh]\" width=\"3.14vh\" height=\"3.14vh\" viewBox=\"0 0 34 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.74979 0.0361716C6.37953 0.213697 4.98256 0.744215 3.79618 1.53763C3.15494 1.96643 1.98405 3.13716 1.55494 3.77843C0.914371 4.73589 0.448912 5.81413 0.164546 6.99974C0.068317 7.4007 0.0493105 8.00749 0.0264496 11.4013L0 15.3379H2.12673H4.25353L4.27819 11.7335C4.30583 7.68911 4.2934 7.80385 4.81269 6.80374C5.13394 6.18506 5.87666 5.39795 6.46592 5.05167C7.1683 4.63895 7.72075 4.48833 8.64695 4.45711C9.63542 4.42382 10.1586 4.52421 10.9065 4.89089C11.5698 5.21604 12.3674 6.00288 12.7209 6.68083C13.1748 7.55125 13.2324 7.92896 13.2324 10.0334V11.883H15.399H17.5657L17.5337 9.74036C17.5064 7.89946 17.4827 7.51351 17.3661 6.99974C16.9458 5.14808 16.1135 3.65844 14.785 2.38022C13.1399 0.797366 11.0621 -0.0260155 8.77986 0.000626629C8.32298 0.00594177 7.85944 0.0219536 7.74979 0.0361716ZM11.9365 15.032C11.2807 15.2409 10.727 15.6909 10.4545 16.2365C10.1725 16.8011 10.1675 16.9577 10.1885 24.739C10.2082 32.0156 10.2116 32.1871 10.3419 32.4909C10.5485 32.9725 10.854 33.3621 11.21 33.5978C11.8702 34.035 11.1885 34.0108 22.2738 33.9916L32.3386 33.9741L32.7125 33.7904C33.1535 33.5738 33.6461 33.0722 33.8526 32.6293L34 32.3131V24.5397V16.7663L33.7752 16.3519C33.4987 15.8421 33.0219 15.386 32.5192 15.1505L32.1392 14.9724L22.1708 14.9598C14.2473 14.9498 12.1478 14.9646 11.9365 15.032ZM23.3019 20.4784C23.8175 20.7137 24.2082 21.1019 24.4393 21.6086C24.5946 21.9492 24.625 22.1065 24.6271 22.5797C24.6293 23.0708 24.6053 23.1922 24.4428 23.5099C24.34 23.7109 24.0792 24.0547 23.8632 24.2739L23.4706 24.6726L23.7999 26.6325C23.9811 27.7105 24.1297 28.6149 24.1303 28.6423C24.1308 28.6698 23.2647 28.6922 22.2057 28.6922H20.2801L20.317 28.5094C20.3373 28.409 20.5275 27.5046 20.7395 26.4997L21.1252 24.6726L20.985 24.5729C20.603 24.3013 20.3934 24.0579 20.1951 23.6551C19.9957 23.2502 19.9777 23.1614 19.9778 22.5811C19.9779 21.8383 20.098 21.5084 20.5447 21.0238C21.0749 20.4488 21.5885 20.2424 22.4047 20.2763C22.7756 20.2917 23.0069 20.3438 23.3019 20.4784Z\" fill=\"#00F8B9\">");
const Ne = _0x26193e("<svg class=\"mb-[1vh]\" width=\"2.4vh\" height=\"3.14vh\" viewBox=\"0 0 26 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.3073 0.128694C7.64028 0.763766 4.60681 3.29582 3.43132 6.70291C2.97849 8.01543 2.84795 9.06188 2.84531 11.4019L2.84375 12.7468H1.65208H0.460417L0.230208 12.9726L0 13.1984V22.3978C0 31.1128 0.00649987 31.6176 0.123432 31.985C0.414781 32.9006 1.12078 33.5931 2.0542 33.8789C2.42965 33.9939 2.98133 34 13 34C23.0187 34 23.5704 33.9939 23.9458 33.8789C24.8792 33.5931 25.5852 32.9006 25.8766 31.985C25.9935 31.6176 26 31.1128 26 22.3978V13.1984L25.7698 12.9726L25.5396 12.7468H24.3479H23.1562L23.1547 11.4019C23.1521 9.06188 23.0215 8.01543 22.5687 6.70291C22.0749 5.27184 21.3397 4.10809 20.2245 2.99276C18.6786 1.44639 16.8137 0.489069 14.6366 0.123978C13.6407 -0.0430587 12.2879 -0.0411326 11.3073 0.128694ZM14.4179 4.44927C14.6994 4.51821 15.2496 4.73074 15.6406 4.92149C16.2704 5.22873 16.4288 5.3445 17.0286 5.9358C17.7767 6.67322 18.1565 7.25403 18.4427 8.09765C18.7061 8.87439 18.7541 9.33758 18.7547 11.103L18.7552 12.7468H13H7.24479L7.24533 11.103C7.24587 9.33758 7.29395 8.87439 7.55733 8.09765C7.84435 7.25131 8.22304 6.67322 8.97135 5.93879C9.5244 5.39604 9.76009 5.21764 10.2578 4.96486C11.6241 4.27101 12.9963 4.10092 14.4179 4.44927ZM13.8416 18.5669C14.3395 18.7333 14.6968 18.953 15.0373 19.3022C15.5935 19.8725 15.8438 20.466 15.8438 21.2147C15.8438 22.0396 15.6073 22.6126 15.0203 23.2101L14.6914 23.5449L14.9191 25.5398C15.0442 26.637 15.1324 27.6297 15.1151 27.7458C15.0961 27.8723 15.0029 28.0236 14.8829 28.1227L14.6823 28.2882H13H11.3177L11.1171 28.1227C10.9971 28.0236 10.9039 27.8723 10.8849 27.7458C10.8676 27.6297 10.9558 26.637 11.0809 25.5398L11.3086 23.5449L10.9797 23.2101C10.3927 22.6126 10.1562 22.0396 10.1562 21.2147C10.1562 20.0149 10.8905 19.0298 12.1198 18.5803C12.5267 18.4315 13.4159 18.4246 13.8416 18.5669Z\" fill=\"#F86969\">");
const Ae = _0x26193e("<div><div><h1>ACCESS </h1><p>");
const je = () => {
  const {
    minigameResult: _0x509437,
    data: _0x2522db
  } = F();
  return (() => {
    const _0x17ec2c = Ae();
    const _0x54b676 = _0x17ec2c.firstChild;
    const _0x1cc254 = _0x54b676.firstChild;
    _0x1cc254.firstChild;
    const _0x2625e4 = _0x1cc254.nextSibling;
    _0x19eec2(_0x54b676, a(_0x2f11d8, {
      get children() {
        return [a(_0x15a609, {
          get when() {
            return _0x509437() === "success";
          },
          get children() {
            return Ie();
          }
        }), a(_0x15a609, {
          get when() {
            return _0x509437() === "fail" || _0x2522db.attempts <= 0;
          },
          get children() {
            return Ne();
          }
        })];
      }
    }), _0x1cc254);
    _0x19eec2(_0x1cc254, () => _0x509437() === "success" ? "GRANTED" : "DENIED", null);
    _0x19eec2(_0x2625e4, (() => {
      const _0x1c8eed = _0xac0c0e(() => _0x2522db.attempts <= 0);
      return () => _0x1c8eed() ? "You have no more attempts left. Wait for the next day." : "Access to the system has been " + (_0x509437() === "success" ? "granted" : "denied") + ".";
    })());
    _0x1cfc2f(_0x4298df => {
      const _0x2638cd = Z.container;
      const _0x1bbd74 = Z.bar;
      const _0x1a52cf = {
        [Z.error]: _0x509437() === "fail" || _0x2522db.attempts <= 0
      };
      if (_0x2638cd !== _0x4298df._v$) {
        _0xe92bd1(_0x17ec2c, _0x4298df._v$ = _0x2638cd);
      }
      if (_0x1bbd74 !== _0x4298df._v$2) {
        _0xe92bd1(_0x54b676, _0x4298df._v$2 = _0x1bbd74);
      }
      _0x4298df._v$3 = _0x83025c(_0x1cc254, _0x1a52cf, _0x4298df._v$3);
      return _0x4298df;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined
    });
    return _0x17ec2c;
  })();
};
const ke = _0x26193e("<div><div></div><div>Tier </div><h1>Security Brand</h1><p>Forem ipsum dolor sit amet, consectetur adipiscing elit.</p><div class=\"flex w-full flex-row items-center justify-center gap-[1vh]\"><div></div><div> BUTC");
const z = _0x26193e("<div class=\"items-between flex w-full flex-row justify-center gap-[1vh]\">");
const Fe = _0x26193e("<div>");
const ee = _0x56e3cb => {
  const _0x4ea046 = (160 - _0x56e3cb * 37.508) % 360;
  const _0x27964e = 100;
  const _0x59f0a8 = 50;
  const _0x5340c5 = "hsla(" + _0x4ea046 + ", " + _0x27964e + "%, " + _0x59f0a8 + "%, 1)";
  const _0x28b0cc = "hsla(" + _0x4ea046 + ", " + _0x27964e + "%, " + _0x59f0a8 + "%, 0.15)";
  return {
    textColor: _0x5340c5,
    backgroundColor: _0x28b0cc
  };
};
const te = _0x29c1af => {
  const {
    data: _0x266598,
    prices: _0x157474,
    fetchData: _0x1d75b2
  } = F();
  return (() => {
    const _0xe2e8d4 = ke();
    const _0x184349 = _0xe2e8d4.firstChild;
    const _0x1c01e2 = _0x184349.nextSibling;
    _0x1c01e2.firstChild;
    const _0x431661 = _0x1c01e2.nextSibling;
    const _0x317826 = _0x431661.nextSibling;
    const _0x3c5c29 = _0x317826.nextSibling;
    const _0x2746d9 = _0x3c5c29.firstChild;
    const _0x1783d3 = _0x2746d9.nextSibling;
    const _0x39888f = _0x1783d3.firstChild;
    _0x19eec2(_0x1c01e2, () => _0x29c1af.index + 1, null);
    _0x2746d9.$$click = async () => {
      if (await _0x79718b.execute("noid:buyPlan", _0x29c1af.index)) {
        _0x32c761("noid", "You've successfully purchased a plan!");
        await _0x1d75b2();
      } else {
        _0x32c761("noid", "You don't have enough BUTCOIN to purchase this plan.");
      }
    };
    _0x19eec2(_0x2746d9, () => _0x266598.tier >= _0x29c1af.index + 1 ? "Purchased" : "Purchase");
    _0x19eec2(_0x1783d3, () => _0x157474[_0x29c1af.index], _0x39888f);
    _0x1cfc2f(_0x126597 => {
      const _0x4130b9 = q.box;
      const _0x35cb26 = q.image;
      const _0x1e0665 = {
        [q["image" + (_0x29c1af.index + 1)]]: true
      };
      const _0xab3516 = q.tag;
      const _0x43ab02 = ee(_0x29c1af.index).textColor;
      const _0x2258c4 = ee(_0x29c1af.index).backgroundColor;
      const _0x5137bd = q.button;
      const _0x40cd5c = {
        [q.purchased]: _0x266598.tier >= _0x29c1af.index + 1
      };
      const _0x15c919 = q.button;
      const _0x142f70 = {
        [q.price]: true
      };
      if (_0x4130b9 !== _0x126597._v$) {
        _0xe92bd1(_0xe2e8d4, _0x126597._v$ = _0x4130b9);
      }
      if (_0x35cb26 !== _0x126597._v$2) {
        _0xe92bd1(_0x184349, _0x126597._v$2 = _0x35cb26);
      }
      _0x126597._v$3 = _0x83025c(_0x184349, _0x1e0665, _0x126597._v$3);
      if (_0xab3516 !== _0x126597._v$4) {
        _0xe92bd1(_0x1c01e2, _0x126597._v$4 = _0xab3516);
      }
      if (_0x43ab02 !== _0x126597._v$5) {
        if ((_0x126597._v$5 = _0x43ab02) != null) {
          _0x1c01e2.style.setProperty("color", _0x43ab02);
        } else {
          _0x1c01e2.style.removeProperty("color");
        }
      }
      if (_0x2258c4 !== _0x126597._v$6) {
        if ((_0x126597._v$6 = _0x2258c4) != null) {
          _0x1c01e2.style.setProperty("background-color", _0x2258c4);
        } else {
          _0x1c01e2.style.removeProperty("background-color");
        }
      }
      if (_0x5137bd !== _0x126597._v$7) {
        _0xe92bd1(_0x2746d9, _0x126597._v$7 = _0x5137bd);
      }
      _0x126597._v$8 = _0x83025c(_0x2746d9, _0x40cd5c, _0x126597._v$8);
      if (_0x15c919 !== _0x126597._v$9) {
        _0xe92bd1(_0x1783d3, _0x126597._v$9 = _0x15c919);
      }
      _0x126597._v$10 = _0x83025c(_0x1783d3, _0x142f70, _0x126597._v$10);
      return _0x126597;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined,
      _v$8: undefined,
      _v$9: undefined,
      _v$10: undefined
    });
    return _0xe2e8d4;
  })();
};
const Ue = () => {
  const {
    minigameResult: _0x5df0e1,
    showPlans: _0x3960bd,
    data: _0x5ad373,
    fetchData: _0x5b0f52
  } = F();
  _0x1d89be(async () => {
    await _0x5b0f52();
  });
  return (() => {
    const _0x30759f = Fe();
    _0x19eec2(_0x30759f, a(_0x36f359, {
      get name() {
        return Qe.name;
      }
    }), null);
    _0x19eec2(_0x30759f, a(_0x472e17, {
      get when() {
        return _0x3960bd();
      },
      get children() {
        return [(() => {
          const _0x59bbd4 = z();
          _0x19eec2(_0x59bbd4, a(_0x5bfab, {
            get each() {
              return Array(3);
            },
            children: (_0x20fba1, _0x383d5a) => a(te, {
              get index() {
                return _0x383d5a();
              }
            })
          }));
          return _0x59bbd4;
        })(), (() => {
          const _0x1d2c6f = z();
          _0x19eec2(_0x1d2c6f, a(_0x5bfab, {
            get each() {
              return Array(2);
            },
            children: (_0x4647ed, _0x266f80) => a(te, {
              get index() {
                return _0x266f80() + 3;
              }
            })
          }));
          return _0x1d2c6f;
        })()];
      }
    }), null);
    _0x19eec2(_0x30759f, a(_0x472e17, {
      get when() {
        return !_0x3960bd();
      },
      get children() {
        return [a(Ee, {}), a(_0x472e17, {
          get when() {
            return _0x5df0e1() !== null || _0x5ad373.attempts <= 0;
          },
          get children() {
            return a(je, {});
          }
        })];
      }
    }), null);
    _0x1cfc2f(() => _0xe92bd1(_0x30759f, q.container));
    return _0x30759f;
  })();
};
_0x4c3a6e(["click"]);
const [Ze, Ve] = _0xcb3d2e(() => {
  const [_0x5190, _0x2e1e51] = _0x14d79c(null);
  const [_0x35a219, _0x2df3d4] = _0x14d79c(false);
  const [_0x2f179f, _0x4e1cbf] = _0x4b9b68({});
  const [_0xf3cc30, _0x3a6546] = _0x4b9b68([]);
  return {
    minigameResult: _0x5190,
    setMinigameResult: _0x2e1e51,
    showPlans: _0x35a219,
    setShowPlans: _0x2df3d4,
    data: _0x2f179f,
    setData: _0x4e1cbf,
    prices: _0xf3cc30,
    setPrices: _0x3a6546,
    fetchData: async _0x111330 => {
      const _0x59516a = await _0x79718b.execute("noid:getData");
      _0x4e1cbf(_0x59516a);
      if (_0x59516a.has_access && !_0x111330) {
        _0x2df3d4(true);
      }
      const _0x50c087 = await _0x79718b.execute("noid:getPrices");
      _0x3a6546(_0x50c087);
    }
  };
});
const F = () => Ve();
const Ye = () => a(Ze, {
  get children() {
    return a(Ue, {});
  }
});
const Oe = "" + new URL("noid-icon-49f9ca69.png", import.meta.url).href;
const Qe = {
  icon: Oe,
  enabled: true,
  onDock: false,
  name: "noid",
  label: "Noid",
  description: "? ? ? ? ? ? ? ? ? ? ? ?",
  isEnabled: false,
  isLaptop: true,
  render: () => a(Ye, {})
};
export { Qe as default };