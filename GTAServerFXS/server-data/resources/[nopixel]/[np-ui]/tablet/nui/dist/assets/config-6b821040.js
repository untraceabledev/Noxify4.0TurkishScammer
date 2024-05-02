import { l as _0x13696c, c as _0x36299c, N as _0x405246, d as _0x161141, i as _0x4df1dd, a as _0x2c30e9, b as _0x2dcf48, e, S as _0x34f66b, z as _0x434107, t as _0x2f073b, F as _0x3b53e8, o as _0x39e158, j as _0x268e8d, s as _0x401b0a, W as _0xbd047, h as _0x288eb6, M as _0x5d6d27 } from "./index-bc87d183.js";
import { A as _0x4fa70e } from "./index-e954302e.js";
import { c as _0x198370 } from "./index-f70f3234.js";
const [I1, A1] = _0x198370(() => {
  const [_0x2af10d, _0x10992e] = _0x13696c(false);
  const [_0x2b4908, _0x4ee2c2] = _0x13696c("");
  const [_0x30d181, _0x5af683] = _0x36299c({});
  const [_0x149751, _0x76df9b] = _0x36299c({});
  return {
    loading: _0x2af10d,
    setLoading: _0x10992e,
    page: _0x2b4908,
    setPage: _0x4ee2c2,
    myGang: _0x30d181,
    setMyGang: _0x5af683,
    input: _0x149751,
    setInput: _0x76df9b,
    fetchGang: async _0x494602 => {
      _0x10992e(true);
      if (_0x494602) {
        await _0x494602();
      }
      const _0x3a13c8 = await _0x405246.execute("gangs:getMyGang");
      _0x5af683(_0x3a13c8);
      setTimeout(() => {
        _0x10992e(false);
      }, 100);
      return _0x3a13c8;
    }
  };
});
const J = () => A1();
const T1 = "_container_rd1gc_1";
const V1 = "_start_rd1gc_10";
const C1 = {
  container: T1,
  start: V1
};
const q1 = "_header_1a7qr_1";
const U1 = "_column_1a7qr_11";
const H1 = "_text_1a7qr_17";
const F1 = "_big_1a7qr_25";
const O1 = "_grey_1a7qr_29";
const N1 = "_main_1a7qr_32";
const z1 = "_left_1a7qr_43";
const R1 = "_logo_1a7qr_53";
const D1 = "_right_1a7qr_60";
const E1 = "_stats_1a7qr_74";
const X1 = "_exp_1a7qr_85";
const Y1 = "_nickname_1a7qr_101";
const D = {
  header: q1,
  column: U1,
  text: H1,
  big: F1,
  grey: O1,
  main: N1,
  left: z1,
  logo: R1,
  right: D1,
  stats: E1,
  exp: X1,
  nickname: Y1
};
const K1 = _0x2f073b("<div><div>");
const W1 = _0x2f073b("<div><svg width=\"3.98vh\" height=\"3.98vh\" viewBox=\"0 0 43 43\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M43 21.5C43 33.3741 33.3741 43 21.5 43C9.62588 43 0 33.3741 0 21.5C0 9.62588 9.62588 0 21.5 0C33.3741 0 43 9.62588 43 21.5ZM4.36528 21.5C4.36528 30.9632 12.0368 38.6347 21.5 38.6347C30.9632 38.6347 38.6347 30.9632 38.6347 21.5C38.6347 12.0368 30.9632 4.36528 21.5 4.36528C12.0368 4.36528 4.36528 12.0368 4.36528 21.5Z\" fill=\"white\" fill-opacity=\"0.15\"></path><path d=\"M43 21.5C43 25.7523 41.739 29.9091 39.3766 33.4448C37.0141 36.9804 33.6563 39.7361 29.7277 41.3634C25.7991 42.9907 21.4762 43.4165 17.3056 42.5869C13.135 41.7573 9.30403 39.7096 6.2972 36.7028C3.29038 33.696 1.2427 29.865 0.413116 25.6944C-0.416466 21.5238 0.00930597 17.2009 1.63659 13.2723C3.26387 9.34369 6.01958 5.98585 9.55524 3.6234C13.0909 1.26095 17.2477 -5.07082e-08 21.5 0V4.36528C18.1111 4.36528 14.7983 5.37022 11.9805 7.253C9.16267 9.13579 6.96647 11.8119 5.66959 14.9428C4.3727 18.0738 4.03338 21.519 4.69452 24.8428C5.35567 28.1666 6.98759 31.2197 9.38393 33.6161C11.7803 36.0124 14.8334 37.6443 18.1572 38.3055C21.481 38.9666 24.9262 38.6273 28.0572 37.3304C31.1881 36.0335 33.8642 33.8373 35.747 31.0195C37.6298 28.2017 38.6347 24.8889 38.6347 21.5H43Z\" fill=\"#00F8B9\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.2735 11.0106C20.8928 11.0822 20.5847 11.2723 18.2064 12.904C16.8166 13.8574 15.5917 14.7211 15.4844 14.8232C15.3724 14.9298 15.2278 15.1402 15.1447 15.3175L15 15.6261V21.5066V27.3871L15.1447 27.6957C15.2278 27.873 15.3724 28.0834 15.4844 28.19C15.8133 28.5031 20.7095 31.8346 20.9719 31.9238C21.2707 32.0254 21.7293 32.0254 22.0281 31.9238C22.2878 31.8355 27.1805 28.5042 27.516 28.1873C27.6293 28.0802 27.772 27.8734 27.8557 27.6949L28 27.3871V21.5066V15.6261L27.8557 15.3183C27.7719 15.1397 27.6294 14.9331 27.516 14.826C27.1947 14.5226 22.2907 11.1783 22.0523 11.1C21.8122 11.0212 21.4428 10.9788 21.2735 11.0106ZM22.1803 15.2475C22.3169 15.3126 22.9891 15.7539 23.6742 16.2282C24.8176 17.0197 24.9286 17.1082 25.026 17.3066C25.1549 17.569 25.1303 17.822 24.9555 18.0319C24.7349 18.2967 24.3659 18.3829 24.0838 18.2356C24.0125 18.1983 23.4479 17.8203 22.829 17.3954C22.2102 16.9706 21.658 16.5988 21.6019 16.5691C21.4693 16.499 21.5165 16.4718 20.1802 17.3907C19.5664 17.8128 18.9975 18.1931 18.9159 18.2357C18.8096 18.2913 18.6966 18.3074 18.5184 18.2924C18.2985 18.274 18.2497 18.2502 18.1007 18.0889C17.8687 17.8376 17.8301 17.5995 17.974 17.3066C18.0711 17.1088 18.18 17.0215 19.2578 16.2762C20.6493 15.3142 20.7727 15.2371 21.0438 15.1597C21.3683 15.0671 21.8857 15.1071 22.1803 15.2475ZM22.1587 19.1451C22.5385 19.3203 24.9358 20.9941 25.0046 21.1322C25.108 21.3397 25.1284 21.5019 25.076 21.6986C24.9728 22.0858 24.5559 22.3159 24.1951 22.1847C24.0955 22.1485 23.4705 21.7442 22.8063 21.2864C22.1422 20.8286 21.5543 20.454 21.5 20.454C21.4457 20.454 20.8578 20.8285 20.1937 21.2862C19.5295 21.7438 18.9052 22.1469 18.8063 22.1817C18.4662 22.3019 18.1094 22.1402 17.9597 21.7981C17.8614 21.5738 17.8715 21.3711 17.9928 21.1342C18.0332 21.0551 18.5139 20.6958 19.3235 20.1393C20.0205 19.6602 20.6578 19.2328 20.7397 19.1894C21.1514 18.9712 21.7417 18.9528 22.1587 19.1451Z\" fill=\"url(#paint0_radial_0_1)\"></path><defs><radialGradient id=\"paint0_radial_0_1\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(21.5 21.5) rotate(90) scale(19.6875 12.1875)\"><stop stop-color=\"white\"></stop><stop offset=\"1\" stop-color=\"white\" stop-opacity=\"0\"></stop></radialGradient></defs></svg><div><div>Current Level</div><div>1337</div></div><div><div><div>Exp needs to level up</div><div>1367/9781 EXP");
const J1 = _0x2f073b("<div>Change Nickname");
const Q1 = _0x2f073b("<div><div><div><div><div></div><div></div></div></div><div>");
function e2() {
  const {
    myGang: _0x1b7526,
    setInput: _0x4c367c,
    setLoading: _0x482beb,
    input: _0x1e6543,
    setMyGang: _0x4c41db,
    fetchGang: _0x28e777
  } = J();
  return (() => {
    const _0x325b12 = Q1();
    const _0x50176d = _0x325b12.firstChild;
    const _0x557b2c = _0x50176d.firstChild;
    const _0x5a9bf3 = _0x557b2c.firstChild;
    const _0x5d9a08 = _0x5a9bf3.firstChild;
    const _0x3fe4d8 = _0x5d9a08.nextSibling;
    const _0x29361e = _0x557b2c.nextSibling;
    _0x4df1dd(_0x557b2c, _0x2c30e9(_0x34f66b, {
      get when() {
        return Object.entries(_0x1b7526).length > 0;
      },
      get children() {
        const _0x33945f = K1();
        const _0x42d462 = _0x33945f.firstChild;
        _0x2dcf48(_0x521be4 => {
          const _0x388a15 = D.column;
          const _0x23c1c1 = D.logo;
          const _0x4af347 = "url(" + _0x1b7526?.info?.image + ")";
          if (_0x388a15 !== _0x521be4._v$) {
            e(_0x33945f, _0x521be4._v$ = _0x388a15);
          }
          if (_0x23c1c1 !== _0x521be4._v$2) {
            e(_0x42d462, _0x521be4._v$2 = _0x23c1c1);
          }
          if (_0x4af347 !== _0x521be4._v$3) {
            if ((_0x521be4._v$3 = _0x4af347) != null) {
              _0x42d462.style.setProperty("background-image", _0x4af347);
            } else {
              _0x42d462.style.removeProperty("background-image");
            }
          }
          return _0x521be4;
        }, {
          _v$: undefined,
          _v$2: undefined,
          _v$3: undefined
        });
        return _0x33945f;
      }
    }), _0x5a9bf3);
    _0x4df1dd(_0x5d9a08, () => Object.entries(_0x1b7526).length > 0 ? "Los Santos" : "Your Own");
    _0x4df1dd(_0x3fe4d8, () => _0x1b7526?.info?.name || "Gang is REAL");
    _0x4df1dd(_0x29361e, () => _0x1b7526?.info?.description || "In this gang management interface, you have the power to create and customize your own gang, recruit members, and strategize your way to dominance in the world of underground operations.");
    _0x4df1dd(_0x325b12, _0x2c30e9(_0x34f66b, {
      get when() {
        return Object.entries(_0x1b7526).length > 0;
      },
      get children() {
        return [(() => {
          const _0x10abb4 = W1();
          const _0x4c04b0 = _0x10abb4.firstChild;
          const _0x544e87 = _0x4c04b0.nextSibling;
          const _0x1c4164 = _0x544e87.firstChild;
          const _0x6fe434 = _0x1c4164.nextSibling;
          const _0x3a013d = _0x544e87.nextSibling;
          const _0x366824 = _0x3a013d.firstChild;
          const _0x4ded1e = _0x366824.firstChild;
          const _0x2b15f7 = _0x4ded1e.nextSibling;
          _0x4c04b0.style.setProperty("filter", "drop-shadow(0px 0px 1vh rgba(0, 248, 185, 0.55))");
          _0x366824.style.setProperty("gap", "0.35vh");
          _0x2dcf48(_0x3e1a0d => {
            const _0x1482ec = D.stats;
            const _0x299eda = D.column;
            const _0x45a275 = D.text;
            const _0x2878da = {
              [D.grey]: true
            };
            const _0x56a6d9 = D.text;
            const _0x396710 = {
              [D.big]: true
            };
            const _0x2a5158 = D.column;
            const _0x5bfb1b = D.column;
            const _0x3ced1e = D.text;
            const _0x53a91d = {
              [D.grey]: true
            };
            const _0x4cf33a = D.exp;
            if (_0x1482ec !== _0x3e1a0d._v$4) {
              e(_0x10abb4, _0x3e1a0d._v$4 = _0x1482ec);
            }
            if (_0x299eda !== _0x3e1a0d._v$5) {
              e(_0x544e87, _0x3e1a0d._v$5 = _0x299eda);
            }
            if (_0x45a275 !== _0x3e1a0d._v$6) {
              e(_0x1c4164, _0x3e1a0d._v$6 = _0x45a275);
            }
            _0x3e1a0d._v$7 = _0x434107(_0x1c4164, _0x2878da, _0x3e1a0d._v$7);
            if (_0x56a6d9 !== _0x3e1a0d._v$8) {
              e(_0x6fe434, _0x3e1a0d._v$8 = _0x56a6d9);
            }
            _0x3e1a0d._v$9 = _0x434107(_0x6fe434, _0x396710, _0x3e1a0d._v$9);
            if (_0x2a5158 !== _0x3e1a0d._v$10) {
              e(_0x3a013d, _0x3e1a0d._v$10 = _0x2a5158);
            }
            if (_0x5bfb1b !== _0x3e1a0d._v$11) {
              e(_0x366824, _0x3e1a0d._v$11 = _0x5bfb1b);
            }
            if (_0x3ced1e !== _0x3e1a0d._v$12) {
              e(_0x4ded1e, _0x3e1a0d._v$12 = _0x3ced1e);
            }
            _0x3e1a0d._v$13 = _0x434107(_0x4ded1e, _0x53a91d, _0x3e1a0d._v$13);
            if (_0x4cf33a !== _0x3e1a0d._v$14) {
              e(_0x2b15f7, _0x3e1a0d._v$14 = _0x4cf33a);
            }
            return _0x3e1a0d;
          }, {
            _v$4: undefined,
            _v$5: undefined,
            _v$6: undefined,
            _v$7: undefined,
            _v$8: undefined,
            _v$9: undefined,
            _v$10: undefined,
            _v$11: undefined,
            _v$12: undefined,
            _v$13: undefined,
            _v$14: undefined
          });
          return _0x10abb4;
        })(), (() => {
          const _0x5e9a04 = J1();
          _0x5e9a04.$$click = () => {
            _0x4c367c({
              title: "Change Nickname",
              description: "Change your gang's nickname.",
              inputs: {
                text: {
                  placeholder: "Nickname",
                  value: ""
                }
              },
              onConfirm: async () => {
                await _0x28e777(async () => {
                  await _0x405246.execute("gangs:changeNickname", _0x1e6543.inputs.text.value);
                });
              }
            });
          };
          _0x2dcf48(() => e(_0x5e9a04, D.nickname));
          return _0x5e9a04;
        })()];
      }
    }), null);
    _0x2dcf48(_0x19fb88 => {
      const _0x1c18fd = D.header;
      const _0x457315 = D.main;
      const _0x493166 = D.left;
      const _0x3058c9 = D.column;
      const _0x1ed88e = D.text;
      const _0x32c7b3 = D.text;
      const _0x62a7e4 = {
        [D.big]: true
      };
      const _0x48dd25 = D.right;
      if (_0x1c18fd !== _0x19fb88._v$15) {
        e(_0x325b12, _0x19fb88._v$15 = _0x1c18fd);
      }
      if (_0x457315 !== _0x19fb88._v$16) {
        e(_0x50176d, _0x19fb88._v$16 = _0x457315);
      }
      if (_0x493166 !== _0x19fb88._v$17) {
        e(_0x557b2c, _0x19fb88._v$17 = _0x493166);
      }
      if (_0x3058c9 !== _0x19fb88._v$18) {
        e(_0x5a9bf3, _0x19fb88._v$18 = _0x3058c9);
      }
      if (_0x1ed88e !== _0x19fb88._v$19) {
        e(_0x5d9a08, _0x19fb88._v$19 = _0x1ed88e);
      }
      if (_0x32c7b3 !== _0x19fb88._v$20) {
        e(_0x3fe4d8, _0x19fb88._v$20 = _0x32c7b3);
      }
      _0x19fb88._v$21 = _0x434107(_0x3fe4d8, _0x62a7e4, _0x19fb88._v$21);
      if (_0x48dd25 !== _0x19fb88._v$22) {
        e(_0x29361e, _0x19fb88._v$22 = _0x48dd25);
      }
      return _0x19fb88;
    }, {
      _v$15: undefined,
      _v$16: undefined,
      _v$17: undefined,
      _v$18: undefined,
      _v$19: undefined,
      _v$20: undefined,
      _v$21: undefined,
      _v$22: undefined
    });
    return _0x325b12;
  })();
}
_0x161141(["click"]);
const t2 = "_loading_b365d_1";
const n2 = "_circle_b365d_11";
const i2 = "_rotation_b365d_1";
const r2 = "_text_b365d_22";
const d2 = "_big_b365d_38";
const c1 = {
  loading: t2,
  circle: n2,
  rotation: i2,
  text: r2,
  big: d2
};
const l2 = _0x2f073b("<div><svg width=\"103.51vh\" height=\"67.22vh\" viewBox=\"0 0 1118 726\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 725L280 544L419.5 453.5M1117 1L838 182L698.5 272.5\" stroke=\"url(#paint0_radial_0_1)\"></path><path d=\"M1117 725L838 544L698.5 453.5M1 1L280 182L419.5 272.5\" stroke=\"url(#paint1_radial_0_1)\"></path><path d=\"M609 363C609 390.614 586.614 413 559 413C531.386 413 509 390.614 509 363C509 335.386 531.386 313 559 313C586.614 313 609 335.386 609 363ZM526.948 363C526.948 380.702 541.298 395.052 559 395.052C576.702 395.052 591.052 380.702 591.052 363C591.052 345.298 576.702 330.948 559 330.948C541.298 330.948 526.948 345.298 526.948 363Z\" fill=\"#01F9BA\" fill-opacity=\"0.08\"></path><path d=\"M420.721 453.479C404.018 426.475 395.116 395.376 395.001 363.624C394.886 331.873 403.562 300.709 420.068 273.585L435.567 283.017C420.802 307.28 413.042 335.156 413.145 363.558C413.248 391.96 421.211 419.78 436.151 443.935L420.721 453.479Z\" fill=\"url(#paint2_radial_0_1)\" fill-opacity=\"0.08\"></path><path d=\"M699.279 453.479C715.982 426.475 724.884 395.376 724.999 363.624C725.114 331.873 716.438 300.709 699.932 273.585L684.433 283.017C699.198 307.28 706.958 335.156 706.855 363.558C706.752 391.96 698.789 419.78 683.849 443.935L699.279 453.479Z\" fill=\"url(#paint3_radial_0_1)\" fill-opacity=\"0.08\"></path><path d=\"M713.936 528.03C739.151 508.654 759.574 483.741 773.63 455.217C787.685 426.692 794.997 395.319 795 363.52C795.003 331.72 787.697 300.345 773.647 271.818C759.597 243.291 739.178 218.375 713.967 198.994L711.416 202.312C736.119 221.302 756.126 245.716 769.892 273.668C783.659 301.619 790.818 332.361 790.815 363.519C790.812 394.677 783.648 425.418 769.875 453.367C756.103 481.316 736.092 505.726 711.386 524.711L713.936 528.03Z\" fill=\"url(#paint4_radial_0_1)\" fill-opacity=\"0.08\"></path><path d=\"M407.064 528.03C381.849 508.654 361.426 483.741 347.37 455.217C333.315 426.692 326.003 395.319 326 363.52C325.997 331.72 333.303 300.345 347.353 271.818C361.403 243.291 381.822 218.375 407.033 198.994L409.584 202.312C384.881 221.302 364.874 245.716 351.108 273.668C337.341 301.619 330.182 332.361 330.185 363.519C330.188 394.677 337.352 425.418 351.125 453.367C364.897 481.316 384.908 505.726 409.614 524.711L407.064 528.03Z\" fill=\"url(#paint5_radial_0_1)\" fill-opacity=\"0.08\"></path><g filter=\"url(#filter0_d_0_1)\"><rect x=\"327.07\" y=\"356\" width=\"10\" height=\"10\" transform=\"rotate(45 327.07 356)\" fill=\"#00F8B9\"></rect></g><g filter=\"url(#filter1_d_0_1)\"><rect x=\"793.07\" y=\"356\" width=\"10\" height=\"10\" transform=\"rotate(45 793.07 356)\" fill=\"#00F8B9\"></rect></g><defs><filter id=\"filter0_d_0_1\" x=\"295\" y=\"331\" width=\"64.1406\" height=\"64.1422\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood><feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation=\"12.5\"></feGaussianBlur><feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite><feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0.972549 0 0 0 0 0.72549 0 0 0 1 0\"></feColorMatrix><feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_0_1\"></feBlend><feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_0_1\" result=\"shape\"></feBlend></filter><filter id=\"filter1_d_0_1\" x=\"761\" y=\"331\" width=\"64.1406\" height=\"64.1422\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood><feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation=\"12.5\"></feGaussianBlur><feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite><feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0.972549 0 0 0 0 0.72549 0 0 0 1 0\"></feColorMatrix><feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_0_1\"></feBlend><feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_0_1\" result=\"shape\"></feBlend></filter><radialGradient id=\"paint0_radial_0_1\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(559 363) rotate(90) scale(362 558)\"><stop stop-color=\"#00F8B9\"></stop><stop offset=\"1\" stop-color=\"#00F8B9\" stop-opacity=\"0\"></stop></radialGradient><radialGradient id=\"paint1_radial_0_1\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(559 363) rotate(90) scale(362 558)\"><stop stop-color=\"#00F8B9\"></stop><stop offset=\"1\" stop-color=\"#00F8B9\" stop-opacity=\"0\"></stop></radialGradient><radialGradient id=\"paint2_radial_0_1\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(395 369) scale(90.5)\"><stop stop-color=\"#01F9BA\"></stop><stop offset=\"1\" stop-color=\"#01F9BA\" stop-opacity=\"0\"></stop></radialGradient><radialGradient id=\"paint3_radial_0_1\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(725 369) rotate(-180) scale(90.5)\"><stop stop-color=\"#01F9BA\"></stop><stop offset=\"1\" stop-color=\"#01F9BA\" stop-opacity=\"0\"></stop></radialGradient><radialGradient id=\"paint4_radial_0_1\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(795 370.738) rotate(-180) scale(109.179)\"><stop stop-color=\"#01F9BA\"></stop><stop offset=\"1\" stop-color=\"#01F9BA\" stop-opacity=\"0\"></stop></radialGradient><radialGradient id=\"paint5_radial_0_1\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(326 370.738) scale(109.179)\"><stop stop-color=\"#01F9BA\"></stop><stop offset=\"1\" stop-color=\"#01F9BA\" stop-opacity=\"0\"></stop></radialGradient></defs></svg><div><svg width=\"7.96vh\" height=\"7.96vh\" viewBox=\"0 0 86 86\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M86 43C86 51.4221 83.5267 59.6588 78.8872 66.6878C74.2476 73.7168 67.646 79.2285 59.9017 82.539C52.1575 85.8494 43.6116 86.8128 35.3247 85.3095C27.0379 83.8062 19.3749 79.9024 13.2869 74.0827C7.19898 68.263 2.95408 60.7836 1.07911 52.5728C-0.795855 44.3621 -0.218339 35.7815 2.73998 27.896C5.6983 20.0105 10.9072 13.1674 17.7201 8.21601C24.533 3.2646 32.65 0.422907 41.0635 0.0436253L41.3033 5.36192C33.9314 5.69425 26.8193 8.18412 20.8499 12.5225C14.8805 16.8609 10.3165 22.8568 7.72445 29.766C5.13239 36.6752 4.62638 44.1934 6.26921 51.3877C7.91204 58.5819 11.6314 65.1353 16.9656 70.2344C22.2999 75.3336 29.0141 78.7541 36.275 80.0713C43.5359 81.3884 51.0237 80.5444 57.8092 77.6438C64.5946 74.7432 70.3789 69.9138 74.4441 63.7551C78.5092 57.5964 80.6763 50.3794 80.6763 43H86Z\" fill=\"url(#paint0_linear_2991_913)\"></path><defs><linearGradient id=\"paint0_linear_2991_913\" x1=\"43\" y1=\"0\" x2=\"86\" y2=\"29.1146\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#00F8B9\"></stop><stop offset=\"1\" stop-color=\"#00F8B9\" stop-opacity=\"0\"></stop></linearGradient></defs></svg></div><div>Page is<div>Loading");
function L1() {
  return (() => {
    const _0x2ae4ec = l2();
    const _0x411257 = _0x2ae4ec.firstChild;
    const _0x12b4ad = _0x411257.nextSibling;
    const _0x32a71a = _0x12b4ad.nextSibling;
    const _0x11377f = _0x32a71a.firstChild;
    const _0xb9face = _0x11377f.nextSibling;
    _0x2dcf48(_0x303449 => {
      const _0x5d668a = c1.loading;
      const _0x25e2bd = c1.circle;
      const _0x420075 = c1.text;
      const _0x52ff4c = c1.big;
      if (_0x5d668a !== _0x303449._v$) {
        e(_0x2ae4ec, _0x303449._v$ = _0x5d668a);
      }
      if (_0x25e2bd !== _0x303449._v$2) {
        e(_0x12b4ad, _0x303449._v$2 = _0x25e2bd);
      }
      if (_0x420075 !== _0x303449._v$3) {
        e(_0x32a71a, _0x303449._v$3 = _0x420075);
      }
      if (_0x52ff4c !== _0x303449._v$4) {
        e(_0xb9face, _0x303449._v$4 = _0x52ff4c);
      }
      return _0x303449;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined
    });
    return _0x2ae4ec;
  })();
}
const o2 = "_presentation_1i1gw_1";
const s2 = "_block_1i1gw_9";
const v2 = "_normal_1i1gw_21";
const _2 = "_small_1i1gw_24";
const a2 = "_small2_1i1gw_28";
const c2 = "_medium_1i1gw_32";
const u2 = "_medium2_1i1gw_36";
const $2 = "_big_1i1gw_40";
const C2 = "_text_1i1gw_47";
const f2 = "_iconBg_1i1gw_50";
const g2 = "_getStarted_1i1gw_54";
const h2 = "_indicator_1i1gw_69";
const m2 = "_icon_1i1gw_50";
const x2 = "_create_1i1gw_85";
const w2 = "_green_1i1gw_106";
const b2 = "_news_1i1gw_114";
const y2 = "_header_1i1gw_129";
const L2 = "_updates_1i1gw_143";
const p2 = "_update_1i1gw_143";
const k2 = "_square_1i1gw_161";
const M2 = "_grey_1i1gw_181";
const E = {
  presentation: o2,
  block: s2,
  normal: v2,
  small: _2,
  small2: a2,
  medium: c2,
  medium2: u2,
  big: $2,
  text: C2,
  iconBg: f2,
  getStarted: g2,
  indicator: h2,
  icon: m2,
  create: x2,
  green: w2,
  news: b2,
  header: y2,
  updates: L2,
  update: p2,
  square: k2,
  grey: M2
};
const S2 = _0x2f073b("<div class=\"w-full flex justify-center items-center pb-[2vh]\"><div>Create Gang");
const B2 = _0x2f073b("<div><div class=\"w-full flex flex-row justify-end items-center\"><div></div><div></div></div><div class=\"w-full h-full flex flex-col justify-start items-start pl-[1vh] pr-[1vh] pt-[0.3vh] pb-[1vh]\"><div><div></div></div><div class=\"flex flex-col justify-start items-start mt-2\"><div></div><div></div></div><div>");
const Z2 = _0x2f073b("<div><div class=\"w-full h-full flex flex-row justify-between items-between gap-[1.5vh]\"><div class=\"w-full h-full flex flex-col justify-between items-between\"><div class=\"flex flex-row flex-shrink-0 items-between justify-between\"></div><div class=\"flex flex-row flex-shrink-0 items-between justify-between\"></div><div class=\"flex flex-row flex-shrink-0 items-between justify-between\"><div><div class=\"w-full flex flex-row justify-end items-center\"><div></div></div><div class=\"w-full h-full flex flex-col justify-start items-center pl-[1vh] pr-[1vh] pt-[0.3vh] pb-[1vh]\"><div>News and Updates</div><div></div></div></div></div></div><div class=\"h-full flex flex-col justify-between items-center\">");
const G2 = _0x2f073b("<div><div></div><div>");
function t1(_0x4cd7c4) {
  const {
    input: _0x583a9a,
    setInput: _0x33bd1d,
    page: _0x3b00d1,
    setPage: _0x5696db,
    fetchGang: _0x2b6052
  } = J();
  return (() => {
    const _0x121cbb = B2();
    const _0x4108ff = _0x121cbb.firstChild;
    const _0x207b9b = _0x4108ff.firstChild;
    const _0x5f6c7f = _0x207b9b.nextSibling;
    const _0x8db93e = _0x4108ff.nextSibling;
    const _0x2b7d60 = _0x8db93e.firstChild;
    const _0x4301a6 = _0x2b7d60.firstChild;
    const _0x3afe66 = _0x2b7d60.nextSibling;
    const _0x18ba6f = _0x3afe66.firstChild;
    const _0x3ef9ce = _0x18ba6f.nextSibling;
    const _0x53dc2a = _0x3afe66.nextSibling;
    _0x4df1dd(_0x18ba6f, () => _0x4cd7c4.firstText);
    _0x4df1dd(_0x3ef9ce, () => _0x4cd7c4.secondText);
    _0x4df1dd(_0x53dc2a, () => _0x4cd7c4.description);
    _0x4df1dd(_0x121cbb, _0x2c30e9(_0x34f66b, {
      get when() {
        return _0x4cd7c4.button;
      },
      get children() {
        const _0x32619a = S2();
        const _0x4af5f8 = _0x32619a.firstChild;
        _0x4af5f8.$$click = () => {
          _0x33bd1d({
            title: "Create Gang",
            description: "Create a gang by giving it a name, description, and logo that defines its identity.",
            inputs: {
              name: {
                placeholder: "Gang Name",
                value: ""
              },
              description: {
                placeholder: "Gang Description",
                value: ""
              },
              logo: {
                placeholder: "Gang Logo (URL)",
                value: ""
              }
            },
            onConfirm: async () => {
              if (await _0x2b6052(async () => {
                await _0x405246.execute("gangs:createGang", {
                  name: _0x583a9a.inputs.name.value,
                  description: _0x583a9a.inputs.description.value,
                  logo: _0x583a9a.inputs.logo.value
                });
              })) {
                if (_0x3b00d1() === "presentation") {
                  _0x5696db("home");
                }
              } else {
                _0x5696db("presentation");
              }
            }
          });
        };
        _0x2dcf48(() => e(_0x4af5f8, E.create));
        return _0x32619a;
      }
    }), null);
    _0x2dcf48(_0x109a23 => {
      const _0xcefe7b = E.block;
      const _0x1aea42 = "url(presentation/" + _0x4cd7c4.bgIcon + ".png)";
      const _0x5c2e68 = {
        [E[_0x4cd7c4.type]]: true
      };
      const _0x36df5a = E.green;
      const _0x25d83e = E.iconBg;
      const _0x874b24 = "url(presentation/" + _0x4cd7c4.weapon + ".png)";
      const _0x2782fd = E.indicator;
      const _0x15f086 = E.icon;
      const _0x53a7a1 = "url(icons/" + _0x4cd7c4.icon + ".svg)";
      const _0x137bd8 = E.text;
      const _0x229a8a = E.text;
      const _0x259167 = {
        [E.big]: true
      };
      const _0x257c74 = E.text;
      const _0x461925 = {
        [E.grey]: true
      };
      if (_0xcefe7b !== _0x109a23._v$) {
        e(_0x121cbb, _0x109a23._v$ = _0xcefe7b);
      }
      if (_0x1aea42 !== _0x109a23._v$2) {
        if ((_0x109a23._v$2 = _0x1aea42) != null) {
          _0x121cbb.style.setProperty("background-image", _0x1aea42);
        } else {
          _0x121cbb.style.removeProperty("background-image");
        }
      }
      _0x109a23._v$3 = _0x434107(_0x121cbb, _0x5c2e68, _0x109a23._v$3);
      if (_0x36df5a !== _0x109a23._v$4) {
        e(_0x207b9b, _0x109a23._v$4 = _0x36df5a);
      }
      if (_0x25d83e !== _0x109a23._v$5) {
        e(_0x5f6c7f, _0x109a23._v$5 = _0x25d83e);
      }
      if (_0x874b24 !== _0x109a23._v$6) {
        if ((_0x109a23._v$6 = _0x874b24) != null) {
          _0x5f6c7f.style.setProperty("background-image", _0x874b24);
        } else {
          _0x5f6c7f.style.removeProperty("background-image");
        }
      }
      if (_0x2782fd !== _0x109a23._v$7) {
        e(_0x2b7d60, _0x109a23._v$7 = _0x2782fd);
      }
      if (_0x15f086 !== _0x109a23._v$8) {
        e(_0x4301a6, _0x109a23._v$8 = _0x15f086);
      }
      if (_0x53a7a1 !== _0x109a23._v$9) {
        if ((_0x109a23._v$9 = _0x53a7a1) != null) {
          _0x4301a6.style.setProperty("background-image", _0x53a7a1);
        } else {
          _0x4301a6.style.removeProperty("background-image");
        }
      }
      if (_0x137bd8 !== _0x109a23._v$10) {
        e(_0x18ba6f, _0x109a23._v$10 = _0x137bd8);
      }
      if (_0x229a8a !== _0x109a23._v$11) {
        e(_0x3ef9ce, _0x109a23._v$11 = _0x229a8a);
      }
      _0x109a23._v$12 = _0x434107(_0x3ef9ce, _0x259167, _0x109a23._v$12);
      if (_0x257c74 !== _0x109a23._v$13) {
        e(_0x53dc2a, _0x109a23._v$13 = _0x257c74);
      }
      _0x109a23._v$14 = _0x434107(_0x53dc2a, _0x461925, _0x109a23._v$14);
      return _0x109a23;
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
      _v$10: undefined,
      _v$11: undefined,
      _v$12: undefined,
      _v$13: undefined,
      _v$14: undefined
    });
    return _0x121cbb;
  })();
}
function P2() {
  const _0x138fe6 = ["Good update here as example", "Good update here as example", "Good update here as example", "Good update here as example"];
  return (() => {
    const _0x371d25 = Z2();
    const _0x50a139 = _0x371d25.firstChild;
    const _0x51a83d = _0x50a139.firstChild;
    const _0x1f4e9c = _0x51a83d.firstChild;
    const _0x28806e = _0x1f4e9c.nextSibling;
    const _0x5acef2 = _0x28806e.nextSibling;
    const _0x21bb78 = _0x5acef2.firstChild;
    const _0x40b8b0 = _0x21bb78.firstChild;
    const _0x1ae031 = _0x40b8b0.firstChild;
    const _0x19eade = _0x40b8b0.nextSibling;
    const _0x168ba2 = _0x19eade.firstChild;
    const _0xd97044 = _0x168ba2.nextSibling;
    const _0x3de74f = _0x51a83d.nextSibling;
    _0x4df1dd(_0x1f4e9c, _0x2c30e9(t1, {
      type: "normal",
      weapon: "pistol",
      firstText: "Create",
      secondText: "Your Own Gang",
      description: "Start by giving your gang a name, description, and logo that defines its identity.",
      icon: "members"
    }), null);
    _0x4df1dd(_0x1f4e9c, _0x2c30e9(t1, {
      type: "small",
      bgIcon: "ellipse",
      firstText: "Recruit",
      secondText: "Members",
      description: "Build your crew by selecting skilled individuals with unique roles.",
      icon: "members"
    }), null);
    _0x4df1dd(_0x1f4e9c, _0x2c30e9(t1, {
      type: "medium",
      bgIcon: "ellipse",
      firstText: "Manage",
      secondText: "Resources",
      description: "Manage your gang's resources and finances to ensure its survival and growth.",
      icon: "resources"
    }), null);
    _0x4df1dd(_0x28806e, _0x2c30e9(t1, {
      type: "normal",
      weapon: "smg",
      firstText: "Upgrade",
      secondText: "Your Hideout",
      description: "Expand and fortify your secret base to increase its capabilities and defenses.",
      icon: "grades"
    }), null);
    _0x4df1dd(_0x28806e, _0x2c30e9(t1, {
      type: "small2",
      bgIcon: "ellipse",
      firstText: "EXP",
      secondText: "System",
      description: "Track your gang's progress and growth with our EXP Advancement System.",
      icon: "exp"
    }), null);
    _0x4df1dd(_0x28806e, _0x2c30e9(t1, {
      type: "medium2",
      bgIcon: "ellipse",
      firstText: "Stay",
      secondText: "In Touch",
      description: "If you encounter any issues or have valuable information, reach out to your squad leaders.",
      icon: "intouch"
    }), null);
    _0x4df1dd(_0xd97044, _0x2c30e9(_0x3b53e8, {
      each: _0x138fe6,
      children: _0x46f26e => (() => {
        const _0x5161e8 = G2();
        const _0x3b70f1 = _0x5161e8.firstChild;
        const _0x1dd9c5 = _0x3b70f1.nextSibling;
        _0x4df1dd(_0x1dd9c5, _0x46f26e);
        _0x2dcf48(_0x4a6429 => {
          const _0x8db451 = E.update;
          const _0x23053a = E.square;
          const _0x511b9e = E.text;
          if (_0x8db451 !== _0x4a6429._v$20) {
            e(_0x5161e8, _0x4a6429._v$20 = _0x8db451);
          }
          if (_0x23053a !== _0x4a6429._v$21) {
            e(_0x3b70f1, _0x4a6429._v$21 = _0x23053a);
          }
          if (_0x511b9e !== _0x4a6429._v$22) {
            e(_0x1dd9c5, _0x4a6429._v$22 = _0x511b9e);
          }
          return _0x4a6429;
        }, {
          _v$20: undefined,
          _v$21: undefined,
          _v$22: undefined
        });
        return _0x5161e8;
      })()
    }));
    _0x4df1dd(_0x5acef2, _0x2c30e9(t1, {
      type: "getStarted",
      weapon: "vector",
      firstText: "Get",
      secondText: "Started",
      description: "Click the 'Create Gang' button to embark on your journey to criminal supremacy. Remember, the city's underworld is ruthless, so choose your actions wisely!.",
      icon: "rocket",
      button: "Create Gang"
    }), null);
    _0x4df1dd(_0x3de74f, _0x2c30e9(t1, {
      type: "big",
      weapon: "sniper",
      firstText: "Dark",
      secondText: "Net",
      description: "Gain access to a network of underground contacts who can provide rare and valuable items, weaponry, and information. Building and maintaining these connections can give our gang a significant advantage.",
      icon: "darknet"
    }), null);
    _0x4df1dd(_0x3de74f, _0x2c30e9(t1, {
      type: "big",
      bgIcon: "book",
      firstText: "Good",
      secondText: "Contacts",
      description: "Establish connections with influential contacts who can offer exclusive missions, rare rewards, and strategic advantages",
      icon: "contacts"
    }), null);
    _0x2dcf48(_0x28b2b5 => {
      const _0x31e1a4 = E.presentation;
      const _0x4ece8e = E.news;
      const _0x313d02 = E.green;
      const _0x2ef772 = E.header;
      const _0x459d6f = E.updates;
      if (_0x31e1a4 !== _0x28b2b5._v$15) {
        e(_0x371d25, _0x28b2b5._v$15 = _0x31e1a4);
      }
      if (_0x4ece8e !== _0x28b2b5._v$16) {
        e(_0x21bb78, _0x28b2b5._v$16 = _0x4ece8e);
      }
      if (_0x313d02 !== _0x28b2b5._v$17) {
        e(_0x1ae031, _0x28b2b5._v$17 = _0x313d02);
      }
      if (_0x2ef772 !== _0x28b2b5._v$18) {
        e(_0x168ba2, _0x28b2b5._v$18 = _0x2ef772);
      }
      if (_0x459d6f !== _0x28b2b5._v$19) {
        e(_0xd97044, _0x28b2b5._v$19 = _0x459d6f);
      }
      return _0x28b2b5;
    }, {
      _v$15: undefined,
      _v$16: undefined,
      _v$17: undefined,
      _v$18: undefined,
      _v$19: undefined
    });
    return _0x371d25;
  })();
}
_0x161141(["click"]);
const j2 = "_home_1sqpg_1";
const I2 = "_left_1sqpg_10";
const A2 = "_column_1sqpg_17";
const p1 = {
  home: j2,
  left: I2,
  column: A2
};
const T2 = "_right_q4xrp_1";
const V2 = "_header_q4xrp_13";
const q2 = "_title_q4xrp_23";
const U2 = "_icon_q4xrp_30";
const H2 = "_online_q4xrp_39";
const F2 = "_indicator_q4xrp_46";
const O2 = "_texts_q4xrp_54";
const N2 = "_divider_q4xrp_60";
const z2 = "_playerList_q4xrp_66";
const R2 = "_player_q4xrp_66";
const D2 = "_info_q4xrp_89";
const E2 = "_row_q4xrp_112";
const X2 = "_status_q4xrp_118";
const Y2 = "_offline_q4xrp_135";
const K2 = "_grade_q4xrp_140";
const W2 = "_text_q4xrp_54";
const J2 = "_big_q4xrp_153";
const Q2 = "_grey_q4xrp_161";
const F = {
  right: T2,
  header: V2,
  title: q2,
  icon: U2,
  online: H2,
  indicator: F2,
  texts: O2,
  divider: N2,
  playerList: z2,
  player: R2,
  info: D2,
  row: E2,
  status: X2,
  offline: Y2,
  grade: K2,
  text: W2,
  big: J2,
  grey: Q2
};
const Q = _0x5b82b0 => {
  const {
    myGang: _0x4f52a4
  } = J();
  if (!_0x4f52a4) {
    return false;
  }
  const _0x5ecd29 = _0x4f52a4.ranks.find(_0x5bd974 => _0x5bd974.id === _0x4f52a4.members.find(_0x4ad951 => _0x4ad951.chipId === _0x4f52a4.localChipId)?.rankId);
  const _0x33b35e = _0x4f52a4.members.find(_0x5c5130 => _0x5c5130.chipId === _0x4f52a4.localChipId)?.isLeader;
  return _0x5ecd29?.permissions.includes(_0x5b82b0) || _0x33b35e;
};
const S1 = _0x4ecc2d => {
  const {
    myGang: _0x4e0ab0
  } = J();
  return _0x4e0ab0?.ranks.find(_0x46aa58 => _0x46aa58.id === _0x4ecc2d)?.name;
};
const e3 = (_0x3a50f8, _0x228556) => {
  const {
    myGang: _0x87f57e
  } = J();
  const _0x57f031 = _0x87f57e?.ranks.find(_0x5f3db2 => _0x5f3db2.id === _0x3a50f8);
  if (_0x57f031) {
    return _0x57f031.permissions.includes(_0x228556);
  }
};
const t3 = _0x2f073b("<div><div><div><div></div><div><div>List of</div><div>Players</div></div></div><div><div></div><div><span></span><span>/</span></div></div></div><div></div><div>");
const n3 = _0x2f073b("<div><div><svg width=\"1.85vh\" height=\"2.31vh\" viewBox=\"0 0 20 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.04624 0.0282327C7.50315 0.254677 6.13172 1.11257 5.17147 2.45204C4.68227 3.13445 4.39679 3.76991 4.1911 4.63421C4.05256 5.21656 4.01749 6.34736 4.11815 6.98688C4.40748 8.82506 5.51317 10.4384 7.10702 11.3481C8.80548 12.3175 11.0982 12.2753 12.7456 11.2442C14.763 9.98156 15.8805 7.6367 15.5857 5.28505C15.4173 3.94266 14.9145 2.83443 14.0405 1.87945C12.8761 0.607362 11.4515 -0.0199386 9.77295 0.0004829C9.45062 0.00439132 9.1236 0.0168983 9.04624 0.0282327ZM4.55999 12.1129C2.327 12.4542 0.875533 14.2261 0.261152 17.361C0.0595932 18.3894 0.00323747 19.0225 0.000283714 20.2923C-0.0028107 21.6145 0.0152868 21.7619 0.264481 22.4419C0.748381 23.7628 1.86017 24.6767 3.29743 24.9352C3.65403 24.9993 4.57059 25.0073 10.1752 24.9953L16.6416 24.9814L17.0401 24.8664C18.6242 24.4092 19.6962 23.1988 19.9443 21.587C20.0682 20.7823 19.9766 18.8305 19.7575 17.6053C19.5517 16.4539 19.3391 15.7755 18.9021 14.875C18.1238 13.2711 17.0445 12.4015 15.4982 12.132C14.918 12.0309 14.5144 12.054 14.2314 12.2044C14.1193 12.264 13.7296 12.5126 13.3654 12.7567C12.0885 13.6126 11.1013 13.9656 9.98394 13.9656C8.86207 13.9656 7.87838 13.6124 6.59555 12.7493C5.53295 12.0343 5.38236 11.9872 4.55999 12.1129Z\" fill=\"url(#paint0_radial_2985_234)\"></path><defs><radialGradient id=\"paint0_radial_2985_234\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(10 12.5) rotate(90) scale(23.4375 18.75)\"><stop stop-color=\"white\"></stop><stop offset=\"1\" stop-color=\"white\" stop-opacity=\"0\"></stop></radialGradient></defs></svg></div><div><div></div><div><div></div><div>");
function i3() {
  const {
    myGang: _0x347e39,
    setMyGang: _0x55df7f
  } = J();
  _0x39e158(() => {
    let _0x132b86 = [..._0x347e39.members];
    _0x132b86 = _0x132b86.sort((_0x429fb4, _0x241c8b) => _0x429fb4.name.localeCompare(_0x241c8b.name));
    _0x132b86 = _0x132b86.sort((_0x465b07, _0x3b19a0) => _0x465b07.online && !_0x3b19a0.online ? -1 : !_0x465b07.online && _0x3b19a0.online ? 1 : 0);
    _0x55df7f({
      ..._0x347e39,
      members: _0x132b86
    });
  });
  return (() => {
    const _0x4f2891 = t3();
    const _0x4d2b51 = _0x4f2891.firstChild;
    const _0x50c734 = _0x4d2b51.firstChild;
    const _0x9d8f68 = _0x50c734.firstChild;
    const _0x3d0d47 = _0x9d8f68.nextSibling;
    const _0x38f8dd = _0x3d0d47.firstChild;
    const _0x3c5f6d = _0x38f8dd.nextSibling;
    const _0x574c7b = _0x50c734.nextSibling;
    const _0x249151 = _0x574c7b.firstChild;
    const _0x86116b = _0x249151.nextSibling;
    const _0x3b13c3 = _0x86116b.firstChild;
    const _0xfbb9e7 = _0x3b13c3.nextSibling;
    _0xfbb9e7.firstChild;
    const _0x5eb392 = _0x4d2b51.nextSibling;
    const _0x272734 = _0x5eb392.nextSibling;
    _0x4df1dd(_0x3b13c3, () => _0x347e39.members.length);
    _0x4df1dd(_0xfbb9e7, () => _0x347e39.info.max_members, null);
    _0x4df1dd(_0x272734, _0x2c30e9(_0x3b53e8, {
      get each() {
        return _0x347e39.members;
      },
      children: _0x796b0f => (() => {
        const _0x3f334e = n3();
        const _0x1fa702 = _0x3f334e.firstChild;
        const _0x447913 = _0x1fa702.nextSibling;
        const _0x77870f = _0x447913.firstChild;
        const _0x20d9e0 = _0x77870f.nextSibling;
        const _0x1858ab = _0x20d9e0.firstChild;
        const _0x4d28f4 = _0x1858ab.nextSibling;
        _0x4df1dd(_0x77870f, () => _0x796b0f.name);
        _0x4df1dd(_0x1858ab, () => _0x796b0f.online ? "online" : "offline");
        _0x4df1dd(_0x4d28f4, () => S1(_0x796b0f.rankId));
        _0x2dcf48(_0x1a891d => {
          const _0x131278 = F.player;
          const _0x92973b = F.icon;
          const _0x2a24df = F.info;
          const _0x4472ea = F.text;
          const _0x539fd5 = F.row;
          const _0x5a92ac = F.status;
          const _0x3accfe = {
            [F.online]: _0x796b0f.online,
            [F.offline]: !_0x796b0f.online
          };
          const _0x5d3be = F.status;
          const _0x2d4d30 = {
            [F.grade]: true
          };
          if (_0x131278 !== _0x1a891d._v$18) {
            e(_0x3f334e, _0x1a891d._v$18 = _0x131278);
          }
          if (_0x92973b !== _0x1a891d._v$19) {
            e(_0x1fa702, _0x1a891d._v$19 = _0x92973b);
          }
          if (_0x2a24df !== _0x1a891d._v$20) {
            e(_0x447913, _0x1a891d._v$20 = _0x2a24df);
          }
          if (_0x4472ea !== _0x1a891d._v$21) {
            e(_0x77870f, _0x1a891d._v$21 = _0x4472ea);
          }
          if (_0x539fd5 !== _0x1a891d._v$22) {
            e(_0x20d9e0, _0x1a891d._v$22 = _0x539fd5);
          }
          if (_0x5a92ac !== _0x1a891d._v$23) {
            e(_0x1858ab, _0x1a891d._v$23 = _0x5a92ac);
          }
          _0x1a891d._v$24 = _0x434107(_0x1858ab, _0x3accfe, _0x1a891d._v$24);
          if (_0x5d3be !== _0x1a891d._v$25) {
            e(_0x4d28f4, _0x1a891d._v$25 = _0x5d3be);
          }
          _0x1a891d._v$26 = _0x434107(_0x4d28f4, _0x2d4d30, _0x1a891d._v$26);
          return _0x1a891d;
        }, {
          _v$18: undefined,
          _v$19: undefined,
          _v$20: undefined,
          _v$21: undefined,
          _v$22: undefined,
          _v$23: undefined,
          _v$24: undefined,
          _v$25: undefined,
          _v$26: undefined
        });
        return _0x3f334e;
      })()
    }));
    _0x2dcf48(_0x42ece7 => {
      const _0x1372a5 = F.right;
      const _0x2a514c = F.header;
      const _0x48f127 = F.title;
      const _0x20f8a9 = F.icon;
      const _0x306fbc = F.column;
      const _0x118c96 = F.text;
      const _0x31af74 = F.text;
      const _0x4f87e6 = {
        [F.big]: true
      };
      const _0x1b95ca = F.online;
      const _0x1fde75 = F.indicator;
      const _0x43ca5d = F.texts;
      const _0x362dd1 = F.text;
      const _0x599c54 = {
        [F.player]: true
      };
      const _0x2797a3 = F.text;
      const _0x4fb7ca = {
        [F.grey]: true
      };
      const _0x187377 = F.divider;
      const _0x535334 = F.playerList;
      if (_0x1372a5 !== _0x42ece7._v$) {
        e(_0x4f2891, _0x42ece7._v$ = _0x1372a5);
      }
      if (_0x2a514c !== _0x42ece7._v$2) {
        e(_0x4d2b51, _0x42ece7._v$2 = _0x2a514c);
      }
      if (_0x48f127 !== _0x42ece7._v$3) {
        e(_0x50c734, _0x42ece7._v$3 = _0x48f127);
      }
      if (_0x20f8a9 !== _0x42ece7._v$4) {
        e(_0x9d8f68, _0x42ece7._v$4 = _0x20f8a9);
      }
      if (_0x306fbc !== _0x42ece7._v$5) {
        e(_0x3d0d47, _0x42ece7._v$5 = _0x306fbc);
      }
      if (_0x118c96 !== _0x42ece7._v$6) {
        e(_0x38f8dd, _0x42ece7._v$6 = _0x118c96);
      }
      if (_0x31af74 !== _0x42ece7._v$7) {
        e(_0x3c5f6d, _0x42ece7._v$7 = _0x31af74);
      }
      _0x42ece7._v$8 = _0x434107(_0x3c5f6d, _0x4f87e6, _0x42ece7._v$8);
      if (_0x1b95ca !== _0x42ece7._v$9) {
        e(_0x574c7b, _0x42ece7._v$9 = _0x1b95ca);
      }
      if (_0x1fde75 !== _0x42ece7._v$10) {
        e(_0x249151, _0x42ece7._v$10 = _0x1fde75);
      }
      if (_0x43ca5d !== _0x42ece7._v$11) {
        e(_0x86116b, _0x42ece7._v$11 = _0x43ca5d);
      }
      if (_0x362dd1 !== _0x42ece7._v$12) {
        e(_0x3b13c3, _0x42ece7._v$12 = _0x362dd1);
      }
      _0x42ece7._v$13 = _0x434107(_0x3b13c3, _0x599c54, _0x42ece7._v$13);
      if (_0x2797a3 !== _0x42ece7._v$14) {
        e(_0xfbb9e7, _0x42ece7._v$14 = _0x2797a3);
      }
      _0x42ece7._v$15 = _0x434107(_0xfbb9e7, _0x4fb7ca, _0x42ece7._v$15);
      if (_0x187377 !== _0x42ece7._v$16) {
        e(_0x5eb392, _0x42ece7._v$16 = _0x187377);
      }
      if (_0x535334 !== _0x42ece7._v$17) {
        e(_0x272734, _0x42ece7._v$17 = _0x535334);
      }
      return _0x42ece7;
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
      _v$10: undefined,
      _v$11: undefined,
      _v$12: undefined,
      _v$13: undefined,
      _v$14: undefined,
      _v$15: undefined,
      _v$16: undefined,
      _v$17: undefined
    });
    return _0x4f2891;
  })();
}
const r3 = "_nav_12jnd_1";
const d3 = "_column_12jnd_9";
const l3 = "_button_12jnd_17";
const o3 = "_background_12jnd_25";
const s3 = "_indicator_12jnd_37";
const v3 = "_bottom_12jnd_46";
const _3 = "_arrow_12jnd_53";
const a3 = "_management_12jnd_70";
const c3 = "_settings_12jnd_73";
const u3 = "_notes_12jnd_76";
const $3 = "_medium_12jnd_79";
const C3 = "_small_12jnd_83";
const f3 = "_large_12jnd_87";
const g3 = "_text_12jnd_91";
const h3 = "_big_12jnd_99";
const m3 = "_player_12jnd_103";
const x3 = "_grey_12jnd_107";
const X = {
  nav: r3,
  column: d3,
  button: l3,
  background: o3,
  indicator: s3,
  bottom: v3,
  arrow: _3,
  management: a3,
  settings: c3,
  notes: u3,
  medium: $3,
  small: C3,
  large: f3,
  text: g3,
  big: h3,
  player: m3,
  grey: x3
};
const w3 = _0x2f073b("<div><div><div></div><div><div><div>Menu</div><div></div></div><div><svg width=\"0.74vh\" height=\"1.29vh\" viewBox=\"0 0 8 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 1L7 7L1 13\" stroke=\"#00F8B9\">");
const b3 = _0x2f073b("<div><div><div></div></div><div><div>");
const y3 = _0x2f073b("<svg width=\"2.12vh\" height=\"1.85vh\" viewBox=\"0 0 23 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10.6911 0.056899C9.49352 0.331809 8.53928 1.071 7.97566 2.16036C7.18046 3.69727 7.40889 5.54726 8.55393 6.84388C9.04844 7.40385 9.78895 7.85969 10.5338 8.06267C11.0427 8.20137 11.9573 8.20137 12.4662 8.06267C14.9979 7.37277 16.2393 4.50853 15.0243 2.16036C14.5132 1.17235 13.6234 0.4315 12.5785 0.123805C12.136 -0.00650276 11.1237 -0.0423766 10.6911 0.056899ZM4.13001 3.81877C3.11155 3.94257 2.24877 4.57982 1.79349 5.5444C1.37385 6.4335 1.38365 7.31573 1.82347 8.23987C2.18576 9.00111 2.86682 9.5803 3.70308 9.83834C4.07594 9.95338 4.90264 9.95191 5.27595 9.83557C7.38422 9.17854 8.16894 6.6072 6.7815 4.90227C6.13384 4.1064 5.13192 3.69694 4.13001 3.81877ZM18.151 3.81766C16.9702 3.95668 15.9531 4.85786 15.6298 6.05161C15.5069 6.50483 15.4971 7.15444 15.6062 7.59631C15.8682 8.65717 16.673 9.508 17.7241 9.83557C18.0974 9.95191 18.9241 9.95338 19.2969 9.83834C20.1332 9.5803 20.8142 9.00111 21.1765 8.23987C21.6164 7.31559 21.6262 6.43299 21.2064 5.5444C20.6396 4.3447 19.4386 3.666 18.151 3.81766ZM8.64543 9.11574C7.65129 9.38327 6.82675 10.1078 6.40958 11.0803C6.14592 11.695 6.14965 11.6241 6.16273 15.8023L6.17473 19.6296L6.34402 19.8033L6.51326 19.9769H11.5H16.4867L16.656 19.8033L16.8253 19.6296L16.8373 15.8023C16.8477 12.4816 16.8401 11.9341 16.7797 11.6673C16.5433 10.6213 15.8172 9.72859 14.846 9.29008C14.274 9.03182 14.2112 9.02693 11.4775 9.02896C9.18088 9.03067 8.93336 9.03823 8.64543 9.11574ZM2.77118 10.8256C1.57415 11.0324 0.563152 11.928 0.144276 13.1526L0.0180875 13.5215L0.00456083 15.8879C-0.00707837 17.9319 0.000696075 18.2882 0.0617682 18.5038C0.248804 19.1639 0.73446 19.6847 1.37336 19.9103C1.60718 19.9928 1.75992 20 3.28407 20H4.94061L4.90606 19.8732C4.88705 19.8035 4.87204 17.91 4.87271 15.6656L4.87397 11.5849L4.98928 11.1814L5.1046 10.7779L4.04435 10.7834C3.46118 10.7863 2.8883 10.8053 2.77118 10.8256ZM18.0096 11.1771L18.126 11.5849L18.1273 15.6656C18.128 17.91 18.113 19.8035 18.0939 19.8732L18.0594 20H19.7159C21.2401 20 21.3928 19.9928 21.6266 19.9103C22.2655 19.6847 22.7512 19.1639 22.9382 18.5038C22.9993 18.2882 23.0071 17.9319 22.9954 15.8879L22.9819 13.5215L22.8557 13.1526C22.4795 12.0525 21.7049 11.2836 20.6001 10.9136C20.3124 10.8173 20.1836 10.8066 19.0893 10.7888L17.8931 10.7692L18.0096 11.1771Z\" fill=\"url(#paint0_radial_2987_522)\"></path><defs><radialGradient id=\"paint0_radial_2987_522\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(11.5 10) rotate(90) scale(18.75 21.5625)\"><stop stop-color=\"white\"></stop><stop offset=\"1\" stop-color=\"white\" stop-opacity=\"0\">");
const L3 = _0x2f073b("<svg width=\"1.57vh\" height=\"2.12vh\" viewBox=\"0 0 17 23\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.89426 0.0579618C3.82258 0.0927443 3.69601 0.193991 3.613 0.28297C3.39274 0.519033 3.33287 0.785115 3.33287 1.52759V2.14402L2.63066 2.16253C2.04194 2.17799 1.88825 2.19682 1.67977 2.27888C0.899415 2.58594 0.324903 3.24164 0.0771382 4.10793C0.00343769 4.36551 0 4.74345 0 12.5789C0 20.408 0.00347957 20.7923 0.0769286 21.0475C0.325448 21.9107 0.895348 22.5679 1.66191 22.8753L1.92846 22.9822L8.397 22.9941C15.5447 23.0073 15.0716 23.025 15.6582 22.7222C16.0318 22.5294 16.5564 21.9671 16.7363 21.5666C17.0182 20.939 16.9998 21.568 16.9998 12.5715C16.9998 4.48586 16.9991 4.418 16.9136 4.08456C16.7996 3.63993 16.5652 3.22565 16.2389 2.89198C15.6867 2.32741 15.2211 2.15309 14.2651 2.15309H13.6459V1.45511C13.6459 0.694069 13.6123 0.533323 13.4026 0.29371C13.0448 -0.115322 12.3914 -0.0929873 12.0587 0.339637C11.8803 0.571746 11.8432 0.77033 11.8432 1.49546V2.15309H10.6275H9.4117V1.49546C9.4117 1.13267 9.39024 0.761072 9.36387 0.666611C9.17811 0.0021479 8.36463 -0.223579 7.88671 0.256815C7.65039 0.494361 7.61094 0.663735 7.60994 1.44531L7.60901 2.15309H6.39694H5.18486L5.17069 1.44392C5.15765 0.791406 5.14814 0.717347 5.05171 0.517774C4.99114 0.39244 4.87065 0.241806 4.7663 0.161006C4.61417 0.0431769 4.54151 0.0190898 4.30515 0.00794499C4.12878 -0.000323726 3.97618 0.018236 3.89426 0.0579618ZM9.30689 7.76576C9.89545 8.05781 10.0086 8.87412 9.5238 9.33039C9.43983 9.40939 9.3001 9.4963 9.21328 9.52353C9.10399 9.55782 8.30464 9.56878 6.61691 9.55926L4.17846 9.54551L3.99672 9.40871C3.62541 9.12919 3.49876 8.60561 3.70159 8.18872C3.80149 7.98339 4.01421 7.78607 4.20005 7.72625C4.26495 7.70536 5.40282 7.68698 6.72863 7.6854C8.98991 7.68271 9.1496 7.6877 9.30689 7.76576ZM13.8649 11.6476C14.4749 12.0319 14.4297 12.9669 13.7843 13.3153C13.6632 13.3807 13.1895 13.3878 8.95055 13.3878C3.75726 13.3878 4.14643 13.4095 3.84471 13.1025C3.67706 12.9319 3.56312 12.5593 3.60449 12.3167C3.66574 11.9574 3.9203 11.6507 4.24529 11.5447C4.30838 11.5241 6.45404 11.5108 9.01343 11.515L13.6669 11.5228L13.8649 11.6476ZM13.7843 15.4375C14.0205 15.565 14.1902 15.7756 14.2578 16.0249C14.3735 16.4513 14.2161 16.8839 13.8649 17.1052L13.6669 17.23H8.95055H4.23422L4.03622 17.1052C3.81952 16.9687 3.65069 16.707 3.60449 16.4361C3.56312 16.1935 3.67706 15.8209 3.84471 15.6505C4.14358 15.3469 3.74913 15.3688 8.94216 15.3669C13.191 15.3652 13.6631 15.3721 13.7843 15.4375Z\" fill=\"url(#paint0_radial_2987_909)\"></path><defs><radialGradient id=\"paint0_radial_2987_909\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(8.5 11.5) rotate(90) scale(21.5625 15.9375)\"><stop stop-color=\"white\"></stop><stop offset=\"1\" stop-color=\"white\" stop-opacity=\"0\">");
const p3 = _0x2f073b("<svg width=\"2.03vh\" height=\"2.31vh\" viewBox=\"0 0 22 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10.3262 0.0647411C9.30698 0.311285 8.42678 1.21551 8.21773 2.23079C7.85288 4.0026 9.19673 5.65794 11 5.65794C12.8033 5.65794 14.1471 4.0026 13.7823 2.23079C13.6842 1.7547 13.3718 1.18791 13.0061 0.82259C12.6404 0.457218 12.0731 0.145132 11.5965 0.0472075C11.2583 -0.0222916 10.6514 -0.0138912 10.3262 0.0647411ZM4.24761 1.40569C3.48793 1.64842 2.87222 2.22996 2.58334 2.9776C2.4529 3.31518 2.40768 4.03113 2.49377 4.39567C2.72883 5.39103 3.59812 6.20221 4.59482 6.3563L4.94149 6.40992L5.24519 6.11464C5.74254 5.63107 6.28677 5.31537 6.91665 5.14507C7.21678 5.0639 7.23287 5.05159 7.32805 4.83059C7.7196 3.92129 7.53216 2.87953 6.84112 2.12417C6.5536 1.80989 6.06726 1.50371 5.67444 1.38972C5.31173 1.28442 4.60211 1.29238 4.24761 1.40569ZM16.2736 1.40584C15.8768 1.53267 15.4451 1.81126 15.1562 2.12705C14.4679 2.87943 14.281 3.9227 14.6719 4.83059C14.7671 5.05159 14.7832 5.0639 15.0833 5.14507C15.7132 5.31537 16.2575 5.63107 16.7548 6.11464L17.0585 6.40992L17.4052 6.3563C18.4019 6.20221 19.2712 5.39103 19.5062 4.39567C19.5923 4.03113 19.5471 3.31518 19.4167 2.9776C19.1228 2.21721 18.4721 1.61502 17.7011 1.39011C17.3384 1.28432 16.6296 1.29214 16.2736 1.40584ZM7.33881 6.51805C6.50452 6.74218 5.80277 7.43405 5.53461 8.29675C5.46162 8.53163 5.45111 8.817 5.45111 10.5678V12.5702H11H16.5489V10.5678C16.5489 8.817 16.5384 8.53163 16.4654 8.29675C16.1938 7.42281 15.491 6.737 14.6402 6.51561C14.2244 6.40743 7.74258 6.40958 7.33881 6.51805ZM1.72407 7.15107C0.858978 7.38379 0.18744 8.10906 0.0477155 8.96161C0.0217555 9.11976 0.000440025 10.0021 0.000293359 10.9224L0 12.5957L1.99222 12.583L3.98444 12.5702L4.01153 10.4213C4.04076 8.10325 4.04746 8.03971 4.32896 7.42394C4.39492 7.27966 4.44889 7.14233 4.44889 7.11869C4.44889 7.04372 2.01559 7.07263 1.72407 7.15107ZM17.5511 7.11869C17.5511 7.14233 17.6051 7.27966 17.671 7.42394C17.9525 8.03971 17.9592 8.10325 17.9885 10.4213L18.0156 12.5702L20.0078 12.583L22 12.5957L21.9997 10.9224C21.9996 10.0021 21.9782 9.11976 21.9523 8.96161C21.8108 8.09832 21.1364 7.37798 20.255 7.14863C20.0433 7.09353 19.6796 7.07576 18.7631 7.07576C18.0965 7.07576 17.5511 7.0951 17.5511 7.11869ZM0 14.8103V15.6101L0.232222 15.6393C0.35992 15.6554 1.02544 15.7253 1.71111 15.7947C2.39678 15.864 3.00393 15.9301 3.0603 15.9417C3.14321 15.9587 3.19704 16.0693 3.34146 16.5194C3.43972 16.8256 3.64926 17.3305 3.80712 17.6414L4.09415 18.2067L3.09564 19.4395L2.09719 20.6724L3.22104 21.7951L4.34485 22.9178L5.56825 21.932C6.24111 21.3899 6.80719 20.9463 6.82621 20.9463C6.84523 20.9463 7.09363 21.0652 7.37816 21.2106C7.66275 21.3559 8.14856 21.5573 8.45778 21.658C8.767 21.7588 9.03388 21.8542 9.0509 21.8699C9.06786 21.8857 9.15454 22.5965 9.24347 23.4493L9.4052 25H11H12.5948L12.7565 23.4493C12.8455 22.5964 12.9321 21.8857 12.9491 21.8699C12.9661 21.8542 13.233 21.7588 13.5422 21.658C13.8514 21.5573 14.3373 21.3559 14.6218 21.2106C14.9064 21.0652 15.1548 20.9463 15.1738 20.9463C15.1928 20.9463 15.7589 21.3899 16.4318 21.932L17.6551 22.9178L18.779 21.7951L19.9028 20.6724L18.9044 19.4395L17.9058 18.2067L18.1929 17.6414C18.3507 17.3305 18.5603 16.8256 18.6585 16.5194C18.803 16.0693 18.8568 15.9587 18.9397 15.9417C18.9961 15.9301 19.6032 15.864 20.2889 15.7947C20.9746 15.7253 21.64 15.6554 21.7678 15.6393L22 15.6101V14.8103V14.0104L18.3456 14.0229L14.6911 14.0354L14.6577 14.4017C14.5217 15.8917 13.4138 17.1902 11.9429 17.5836C11.415 17.7248 10.585 17.7248 10.0571 17.5836C8.58616 17.1902 7.47829 15.8917 7.34233 14.4017L7.30889 14.0354L3.65444 14.0229L0 14.0104V14.8103Z\" fill=\"url(#paint0_radial_2987_901)\"></path><defs><radialGradient id=\"paint0_radial_2987_901\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(11 12.5) rotate(90) scale(23.4375 20.625)\"><stop stop-color=\"white\"></stop><stop offset=\"1\" stop-color=\"white\" stop-opacity=\"0\">");
function f1(_0x180ac1) {
  const {
    setPage: _0x14d39b
  } = J();
  return (() => {
    const _0x5f01a7 = w3();
    const _0x2c15bd = _0x5f01a7.firstChild;
    const _0x2b35fc = _0x2c15bd.firstChild;
    const _0x299309 = _0x2b35fc.nextSibling;
    const _0x58ad37 = _0x299309.firstChild;
    const _0x5943ea = _0x58ad37.firstChild;
    const _0x378946 = _0x5943ea.nextSibling;
    const _0x18edbb = _0x58ad37.nextSibling;
    _0x4df1dd(_0x2b35fc, () => _0x180ac1.icon);
    _0x4df1dd(_0x378946, () => _0x180ac1.text);
    _0x18edbb.$$click = () => {
      _0x14d39b(_0x180ac1.id);
    };
    _0x2dcf48(_0x1a0e89 => {
      const _0x2f82f1 = X.button;
      const _0x4acf4f = {
        [X[_0x180ac1.style]]: true
      };
      const _0x8e2eaf = X.background;
      const _0x3739c3 = {
        [X[_0x180ac1.id]]: true
      };
      const _0x5556a7 = X.indicator;
      const _0x578f31 = X.bottom;
      const _0xe1d286 = X.column;
      const _0x465216 = X.text;
      const _0x42a705 = X.text;
      const _0x19c765 = {
        [X.big]: true
      };
      const _0x4976c0 = X.arrow;
      if (_0x2f82f1 !== _0x1a0e89._v$) {
        e(_0x5f01a7, _0x1a0e89._v$ = _0x2f82f1);
      }
      _0x1a0e89._v$2 = _0x434107(_0x5f01a7, _0x4acf4f, _0x1a0e89._v$2);
      if (_0x8e2eaf !== _0x1a0e89._v$3) {
        e(_0x2c15bd, _0x1a0e89._v$3 = _0x8e2eaf);
      }
      _0x1a0e89._v$4 = _0x434107(_0x2c15bd, _0x3739c3, _0x1a0e89._v$4);
      if (_0x5556a7 !== _0x1a0e89._v$5) {
        e(_0x2b35fc, _0x1a0e89._v$5 = _0x5556a7);
      }
      if (_0x578f31 !== _0x1a0e89._v$6) {
        e(_0x299309, _0x1a0e89._v$6 = _0x578f31);
      }
      if (_0xe1d286 !== _0x1a0e89._v$7) {
        e(_0x58ad37, _0x1a0e89._v$7 = _0xe1d286);
      }
      if (_0x465216 !== _0x1a0e89._v$8) {
        e(_0x5943ea, _0x1a0e89._v$8 = _0x465216);
      }
      if (_0x42a705 !== _0x1a0e89._v$9) {
        e(_0x378946, _0x1a0e89._v$9 = _0x42a705);
      }
      _0x1a0e89._v$10 = _0x434107(_0x378946, _0x19c765, _0x1a0e89._v$10);
      if (_0x4976c0 !== _0x1a0e89._v$11) {
        e(_0x18edbb, _0x1a0e89._v$11 = _0x4976c0);
      }
      return _0x1a0e89;
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
      _v$10: undefined,
      _v$11: undefined
    });
    return _0x5f01a7;
  })();
}
function k3() {
  return (() => {
    const _0x39c10a = b3();
    const _0x5ced8a = _0x39c10a.firstChild;
    const _0x22df71 = _0x5ced8a.firstChild;
    const _0x2f4241 = _0x5ced8a.nextSibling;
    const _0x3ce1a1 = _0x2f4241.firstChild;
    _0x4df1dd(_0x5ced8a, _0x2c30e9(f1, {
      style: "medium",
      id: "management",
      text: "Management",
      get icon() {
        return y3();
      }
    }), _0x22df71);
    _0x4df1dd(_0x2f4241, _0x2c30e9(f1, {
      style: "small",
      id: "notes",
      text: "Notes",
      get icon() {
        return L3();
      }
    }), null);
    _0x4df1dd(_0x39c10a, _0x2c30e9(f1, {
      style: "large",
      id: "settings",
      text: "Settings",
      get icon() {
        return p3();
      }
    }), null);
    _0x2dcf48(_0x369564 => {
      const _0x2a3302 = X.nav;
      const _0x5b83b9 = X.column;
      const _0x4f5883 = X.button;
      const _0x154c68 = {
        [X.medium]: true
      };
      const _0x24f9ac = X.column;
      const _0x25911c = X.button;
      const _0x2ef134 = {
        [X.small]: true
      };
      if (_0x2a3302 !== _0x369564._v$12) {
        e(_0x39c10a, _0x369564._v$12 = _0x2a3302);
      }
      if (_0x5b83b9 !== _0x369564._v$13) {
        e(_0x5ced8a, _0x369564._v$13 = _0x5b83b9);
      }
      if (_0x4f5883 !== _0x369564._v$14) {
        e(_0x22df71, _0x369564._v$14 = _0x4f5883);
      }
      _0x369564._v$15 = _0x434107(_0x22df71, _0x154c68, _0x369564._v$15);
      if (_0x24f9ac !== _0x369564._v$16) {
        e(_0x2f4241, _0x369564._v$16 = _0x24f9ac);
      }
      if (_0x25911c !== _0x369564._v$17) {
        e(_0x3ce1a1, _0x369564._v$17 = _0x25911c);
      }
      _0x369564._v$18 = _0x434107(_0x3ce1a1, _0x2ef134, _0x369564._v$18);
      return _0x369564;
    }, {
      _v$12: undefined,
      _v$13: undefined,
      _v$14: undefined,
      _v$15: undefined,
      _v$16: undefined,
      _v$17: undefined,
      _v$18: undefined
    });
    return _0x39c10a;
  })();
}
_0x161141(["click"]);
const M3 = "_announcements_1d1fi_1";
const S3 = "_row_1d1fi_12";
const B3 = "_full_1d1fi_20";
const Z3 = "_list_1d1fi_23";
const G3 = "_announcement_1d1fi_1";
const P3 = "_box_1d1fi_41";
const j3 = "_info_1d1fi_50";
const I3 = "_main_1d1fi_60";
const A3 = "_status_1d1fi_69";
const T3 = "_online_1d1fi_83";
const V3 = "_offline_1d1fi_88";
const q3 = "_grade_1d1fi_93";
const U3 = "_description_1d1fi_98";
const H3 = "_desc_1d1fi_98";
const F3 = "_text_1d1fi_121";
const O3 = "_big_1d1fi_129";
const N3 = "_player_1d1fi_133";
const z3 = "_grey_1d1fi_137";
const R3 = "_addButton_1d1fi_141";
const z = {
  announcements: M3,
  row: S3,
  full: B3,
  list: Z3,
  announcement: G3,
  box: P3,
  info: j3,
  main: I3,
  status: A3,
  online: T3,
  offline: V3,
  grade: q3,
  description: U3,
  desc: H3,
  text: F3,
  big: O3,
  player: N3,
  grey: z3,
  addButton: R3,
  delete: "_delete_1d1fi_161"
};
const D3 = _0x2f073b("<div>Create");
const E3 = _0x2f073b("<div><div><div><svg width=\"4.16vh\" height=\"4.07vh\" viewBox=\"0 0 45 44\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M34.5427 0.116623C34.3405 0.268943 30.7104 5.8784 30.6406 6.14664C30.5229 6.59852 31.2011 7.11145 31.6501 6.91013C31.9466 6.77719 35.6035 1.15478 35.653 0.755694C35.7207 0.210261 34.9826 -0.214549 34.5427 0.116623ZM19.0763 0.553477C18.7994 0.720467 18.6479 1.21664 18.6479 1.95596C18.6479 3.7357 19.6572 6.79875 21.5949 10.8999C22.2827 12.3556 22.3766 12.5084 22.55 12.456C23.4631 12.1805 23.8528 12.1108 24.4906 12.109C26.1436 12.1043 27.6108 12.8851 28.5515 14.2699C29.0223 14.963 29.2526 15.6872 29.2991 16.6209C29.3708 18.0602 28.9068 19.2461 27.872 20.2675C27.5558 20.5797 27.297 20.852 27.297 20.8723C27.297 20.9461 28.998 23.343 29.6783 24.2278C32.2922 27.6273 34.6634 29.7971 35.7644 29.7971C36.5514 29.7971 36.8624 29.0713 36.681 27.6579C36.0144 22.463 29.7144 10.6563 24.0991 4.07855C23.0765 2.88065 21.3768 1.28501 20.6788 0.867715C20.0539 0.494161 19.3904 0.364029 19.0763 0.553477ZM16.8573 2.58144C16.2325 3.52742 15.7521 4.67714 14.6182 7.94024C13.3257 11.6598 13.0071 12.4728 12.3217 13.7995C11.5032 15.3839 10.5463 16.7503 9.51167 17.8117C9.26168 18.0682 9.07241 18.3176 9.0909 18.366C9.10949 18.4143 10.5739 20.9264 12.3451 23.9484C15.1648 28.7592 15.5884 29.4364 15.7495 29.391C17.225 28.9748 19.2755 28.7983 21.3416 28.9097C22.892 28.9933 23.6375 29.107 27.1589 29.7977C28.6771 30.0955 30.3333 30.4004 30.8394 30.4752C31.7919 30.6159 33.9244 30.6638 33.9184 30.5442C33.9166 30.5068 33.7231 30.3564 33.4882 30.2099C33.2535 30.0633 32.6485 29.5539 32.1439 29.0779C26.235 23.5044 18.0124 8.89056 17.2881 2.6749L17.2143 2.04099L16.8573 2.58144ZM38.3844 8.52859C36.7144 9.48426 35.2976 10.3308 35.2359 10.4098C34.9115 10.8256 35.2938 11.5398 35.8327 11.5248C36.0993 11.5173 41.6941 8.40036 42.0878 8.03994C42.3491 7.80069 42.371 7.25344 42.1278 7.03683C41.6938 6.65023 41.6052 6.68555 38.3844 8.52859ZM39.9524 16.0851C38.4373 16.1571 37.3924 16.2449 37.2672 16.3108C36.8013 16.5562 36.7978 17.2237 37.2609 17.5223C37.4589 17.6501 37.794 17.6503 40.7844 17.5247C42.602 17.4483 44.218 17.3657 44.3755 17.3412C44.7627 17.2808 45 17.001 45 16.6047C45 16.3753 44.9379 16.231 44.7874 16.1111C44.5316 15.9073 43.7859 15.9033 39.9524 16.0851ZM5.46767 20.6018C2.49275 22.2918 2.34599 22.3893 1.64716 23.1399C0.397646 24.4821 -0.205858 26.3841 0.0629997 28.1326C0.661167 32.0221 4.60644 34.3935 8.34837 33.1128C8.89197 32.9267 14.0718 30.0716 14.1763 29.9005C14.2067 29.8507 8.40367 19.8815 8.05421 19.3833C7.93367 19.2113 7.82777 19.2612 5.46767 20.6018ZM11.839 32.8339C10.751 33.455 9.57093 34.0835 9.21668 34.2305L8.5726 34.498L8.58944 34.8589C8.61447 35.3939 9.29002 37.3092 9.85451 38.4455C10.692 40.1313 11.6789 41.4855 13.0456 42.8242C13.9215 43.6822 14.4296 43.9416 15.3355 43.9933C16.222 44.0437 16.8819 43.8135 17.5531 43.2196C18.2377 42.6139 18.556 41.9169 18.5548 41.0264C18.5538 40.1702 18.3235 39.6511 17.5402 38.7392C15.9759 36.9181 14.6071 34.2965 14.1361 32.2196C14.0711 31.9331 13.9729 31.7002 13.9176 31.7019C13.8624 31.7035 12.9271 32.2129 11.839 32.8339Z\" fill=\"white\" fill-opacity=\"0.12\"></path></svg><div><div>Recent</div><div>Announcements</div></div></div></div><div>");
const X3 = _0x2f073b("<div>Delete");
const Y3 = _0x2f073b("<div><div><svg width=\"2.03vh\" height=\"1.85vh\" viewBox=\"0 0 22 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.1108 0.046599C18.0206 0.0751893 15.7069 1.30009 12.9693 2.76859L7.99174 5.43863L7.99108 9.20959L7.99038 12.9806L12.9121 15.6424C15.619 17.1064 17.933 18.3332 18.0543 18.3685C18.3334 18.45 18.7646 18.4146 19.0994 18.2828C19.3912 18.1679 19.6819 17.8809 19.8513 17.5402L19.9617 17.3184L19.9739 9.31035C19.9876 0.410583 20.0114 1.08684 19.6669 0.607856C19.337 0.149327 18.612 -0.112126 18.1108 0.046599ZM1.21101 5.81035C0.75859 5.90455 0.335553 6.24793 0.130266 6.68768L0 6.96673V9.20959V11.4525L0.130266 11.7315C0.286492 12.0661 0.551148 12.3295 0.908115 12.5056L1.17146 12.6355L4.08839 12.6499L7.00532 12.6643V9.21171V5.75904L4.20554 5.76446C2.66568 5.76742 1.31813 5.78807 1.21101 5.81035ZM20.9691 9.20959C20.9691 10.6478 20.9799 10.9349 21.0341 10.9349C21.0699 10.9349 21.2001 10.8628 21.3236 10.7747C21.8129 10.4255 22 9.99262 22 9.20959C22 8.42656 21.8129 7.99372 21.3236 7.64452C21.2001 7.55643 21.0699 7.48432 21.0341 7.48432C20.9799 7.48432 20.9691 7.77135 20.9691 9.20959ZM3.24157 13.683C3.23023 13.7033 3.55055 14.9289 3.95339 16.4065C4.75889 19.3608 4.78349 19.4251 5.21824 19.7157C5.58992 19.9641 5.84924 20.016 6.62188 19.9962C7.41885 19.9758 7.59963 19.9153 7.97824 19.5428C8.33695 19.1898 8.53333 18.647 8.47091 18.181C8.44584 17.994 7.36032 13.939 7.28657 13.7569L7.24163 13.646H5.25188C4.15755 13.646 3.25291 13.6626 3.24157 13.683Z\" fill=\"white\" fill-opacity=\"0.12\"></path></svg></div><div><div><div></div><div><div></div><div></div></div></div><div><div>");
function K3() {
  const {
    myGang: _0x4a155e,
    input: _0x25f34d,
    setInput: _0x63a26,
    setMyGang: _0x702060,
    setLoading: _0x5b710a,
    fetchGang: _0x501b55
  } = J();
  return (() => {
    const _0x45f9cb = E3();
    const _0x342525 = _0x45f9cb.firstChild;
    const _0x5cbbb1 = _0x342525.firstChild;
    const _0x53c31b = _0x5cbbb1.firstChild;
    const _0x15a0b4 = _0x53c31b.nextSibling;
    const _0xcefa3d = _0x15a0b4.firstChild;
    const _0x3e38e4 = _0xcefa3d.nextSibling;
    const _0x3d1709 = _0x342525.nextSibling;
    _0x5cbbb1.style.setProperty("gap", "1.5vh");
    _0x4df1dd(_0x5cbbb1, _0x2c30e9(_0x34f66b, {
      get when() {
        return Q("add_announcements");
      },
      get children() {
        const _0xb61328 = D3();
        _0xb61328.$$click = () => {
          _0x63a26({
            title: "Create Announcement",
            description: "Create an announcement for your gang.",
            inputs: {
              text: {
                placeholder: "Announcement Text",
                value: ""
              }
            },
            onConfirm: async () => {
              await _0x501b55(async () => {
                await _0x405246.execute("gangs:addAnnouncement", _0x25f34d.inputs.text.value);
              });
            }
          });
        };
        _0x2dcf48(() => e(_0xb61328, z.addButton));
        return _0xb61328;
      }
    }), null);
    _0x4df1dd(_0x3d1709, _0x2c30e9(_0x3b53e8, {
      get each() {
        return _0x4a155e.announcements;
      },
      children: _0x3d2a3b => {
        const _0x1f853c = _0x4a155e.members.find(_0x458ec1 => _0x458ec1.chipId === _0x3d2a3b.author_chipId);
        if (_0x1f853c) {
          return (() => {
            const _0x194812 = Y3();
            const _0x28b4a3 = _0x194812.firstChild;
            const _0x6a810c = _0x28b4a3.nextSibling;
            const _0x8d3c0e = _0x6a810c.firstChild;
            const _0x444cc8 = _0x8d3c0e.firstChild;
            const _0x433be2 = _0x444cc8.nextSibling;
            const _0x4cf6bf = _0x433be2.firstChild;
            const _0x16d11a = _0x4cf6bf.nextSibling;
            const _0x26f22a = _0x8d3c0e.nextSibling;
            const _0x19b7f4 = _0x26f22a.firstChild;
            _0x4df1dd(_0x444cc8, () => _0x1f853c.name);
            _0x4df1dd(_0x4cf6bf, () => _0x1f853c.online ? "online" : "offline");
            _0x4df1dd(_0x16d11a, () => new Date(_0x3d2a3b.createdAt).toDateString());
            _0x4df1dd(_0x19b7f4, () => _0x3d2a3b.text);
            _0x4df1dd(_0x26f22a, _0x2c30e9(_0x34f66b, {
              get when() {
                return Q("delete_announcements");
              },
              get children() {
                const _0xcab2b8 = X3();
                _0xcab2b8.$$click = () => {
                  _0x63a26({
                    title: "Confirm",
                    description: "Are you sure you want to delete this announcement?",
                    inputs: {},
                    onConfirm: async () => {
                      await _0x501b55(async () => {
                        await _0x405246.execute("gangs:deleteAnnouncement", _0x3d2a3b.id);
                      });
                    }
                  });
                };
                _0x2dcf48(_0x5858a4 => {
                  const _0x3c16fc = z.addButton;
                  const _0x445ee1 = {
                    [z.delete]: true
                  };
                  if (_0x3c16fc !== _0x5858a4._v$10) {
                    e(_0xcab2b8, _0x5858a4._v$10 = _0x3c16fc);
                  }
                  _0x5858a4._v$11 = _0x434107(_0xcab2b8, _0x445ee1, _0x5858a4._v$11);
                  return _0x5858a4;
                }, {
                  _v$10: undefined,
                  _v$11: undefined
                });
                return _0xcab2b8;
              }
            }), null);
            _0x2dcf48(_0x303ffd => {
              const _0x17c5a5 = z.announcement;
              const _0x2d3207 = z.box;
              const _0xbb4b03 = z.info;
              const _0x5c0d23 = z.main;
              const _0xea1fc = z.text;
              const _0x414ea0 = z.row;
              const _0x442eb7 = z.status;
              const _0x5c865f = {
                [z.online]: true
              };
              const _0x2716a4 = z.status;
              const _0x42f802 = z.description;
              const _0xa5f8f2 = z.desc;
              if (_0x17c5a5 !== _0x303ffd._v$12) {
                e(_0x194812, _0x303ffd._v$12 = _0x17c5a5);
              }
              if (_0x2d3207 !== _0x303ffd._v$13) {
                e(_0x28b4a3, _0x303ffd._v$13 = _0x2d3207);
              }
              if (_0xbb4b03 !== _0x303ffd._v$14) {
                e(_0x6a810c, _0x303ffd._v$14 = _0xbb4b03);
              }
              if (_0x5c0d23 !== _0x303ffd._v$15) {
                e(_0x8d3c0e, _0x303ffd._v$15 = _0x5c0d23);
              }
              if (_0xea1fc !== _0x303ffd._v$16) {
                e(_0x444cc8, _0x303ffd._v$16 = _0xea1fc);
              }
              if (_0x414ea0 !== _0x303ffd._v$17) {
                e(_0x433be2, _0x303ffd._v$17 = _0x414ea0);
              }
              if (_0x442eb7 !== _0x303ffd._v$18) {
                e(_0x4cf6bf, _0x303ffd._v$18 = _0x442eb7);
              }
              _0x303ffd._v$19 = _0x434107(_0x4cf6bf, _0x5c865f, _0x303ffd._v$19);
              if (_0x2716a4 !== _0x303ffd._v$20) {
                e(_0x16d11a, _0x303ffd._v$20 = _0x2716a4);
              }
              if (_0x42f802 !== _0x303ffd._v$21) {
                e(_0x26f22a, _0x303ffd._v$21 = _0x42f802);
              }
              if (_0xa5f8f2 !== _0x303ffd._v$22) {
                e(_0x19b7f4, _0x303ffd._v$22 = _0xa5f8f2);
              }
              return _0x303ffd;
            }, {
              _v$12: undefined,
              _v$13: undefined,
              _v$14: undefined,
              _v$15: undefined,
              _v$16: undefined,
              _v$17: undefined,
              _v$18: undefined,
              _v$19: undefined,
              _v$20: undefined,
              _v$21: undefined,
              _v$22: undefined
            });
            return _0x194812;
          })();
        } else {
          return null;
        }
      }
    }));
    _0x2dcf48(_0x4171dd => {
      const _0x76258f = z.announcements;
      const _0x3b01fa = z.row;
      const _0xabd92a = {
        [z.full]: true
      };
      const _0x2e80ef = z.row;
      const _0x47cae3 = z.column;
      const _0x2dff7c = z.text;
      const _0x4f516a = z.text;
      const _0x1324c1 = {
        [z.big]: true
      };
      const _0x1e2b02 = z.list;
      if (_0x76258f !== _0x4171dd._v$) {
        e(_0x45f9cb, _0x4171dd._v$ = _0x76258f);
      }
      if (_0x3b01fa !== _0x4171dd._v$2) {
        e(_0x342525, _0x4171dd._v$2 = _0x3b01fa);
      }
      _0x4171dd._v$3 = _0x434107(_0x342525, _0xabd92a, _0x4171dd._v$3);
      if (_0x2e80ef !== _0x4171dd._v$4) {
        e(_0x5cbbb1, _0x4171dd._v$4 = _0x2e80ef);
      }
      if (_0x47cae3 !== _0x4171dd._v$5) {
        e(_0x15a0b4, _0x4171dd._v$5 = _0x47cae3);
      }
      if (_0x2dff7c !== _0x4171dd._v$6) {
        e(_0xcefa3d, _0x4171dd._v$6 = _0x2dff7c);
      }
      if (_0x4f516a !== _0x4171dd._v$7) {
        e(_0x3e38e4, _0x4171dd._v$7 = _0x4f516a);
      }
      _0x4171dd._v$8 = _0x434107(_0x3e38e4, _0x1324c1, _0x4171dd._v$8);
      if (_0x1e2b02 !== _0x4171dd._v$9) {
        e(_0x3d1709, _0x4171dd._v$9 = _0x1e2b02);
      }
      return _0x4171dd;
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
    return _0x45f9cb;
  })();
}
_0x161141(["click"]);
const W3 = _0x2f073b("<div><div>");
function J3() {
  return (() => {
    const _0x26e3ee = W3();
    const _0x3b0db0 = _0x26e3ee.firstChild;
    _0x4df1dd(_0x3b0db0, _0x2c30e9(k3, {}), null);
    _0x4df1dd(_0x3b0db0, _0x2c30e9(K3, {}), null);
    _0x4df1dd(_0x26e3ee, _0x2c30e9(i3, {}), null);
    _0x2dcf48(_0x1dd18e => {
      const _0x353928 = p1.home;
      const _0x5906ae = p1.left;
      if (_0x353928 !== _0x1dd18e._v$) {
        e(_0x26e3ee, _0x1dd18e._v$ = _0x353928);
      }
      if (_0x5906ae !== _0x1dd18e._v$2) {
        e(_0x3b0db0, _0x1dd18e._v$2 = _0x5906ae);
      }
      return _0x1dd18e;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return _0x26e3ee;
  })();
}
const Q3 = "_management_17rjl_1";
const ee = "_row_17rjl_11";
const te = "_column_17rjl_19";
const ne = "_header_17rjl_25";
const ie = "_icon_17rjl_34";
const re = "_text_17rjl_43";
const de = "_big_17rjl_51";
const le = "_player_17rjl_55";
const oe = "_grey_17rjl_59";
const se = "_button_17rjl_63";
const ve = "_members_17rjl_77";
const _e = "_permissions_17rjl_80";
const ae = "_money_17rjl_83";
const ce = "_indicator_17rjl_86";
const ue = "_bottom_17rjl_95";
const $e = "_arrow_17rjl_102";
const K = {
  management: Q3,
  row: ee,
  column: te,
  header: ne,
  icon: ie,
  text: re,
  big: de,
  player: le,
  grey: oe,
  button: se,
  members: ve,
  permissions: _e,
  money: ae,
  indicator: ce,
  bottom: ue,
  arrow: $e
};
const Ce = _0x2f073b("<div><div></div><div><div><div>Menu</div><div></div></div><div><svg width=\"0.74vh\" height=\"1.29vh\" viewBox=\"0 0 8 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 1L7 7L1 13\" stroke=\"#00F8B9\">");
const fe = _0x2f073b("<div><div><div></div><div><div>Menu</div><div>Management</div></div><div class=\"gang-backbutton ml-auto\">Back</div></div><div>");
const ge = _0x2f073b("<svg width=\"2.12vh\" height=\"1.85vh\" viewBox=\"0 0 23 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10.6911 0.056899C9.49352 0.331809 8.53928 1.071 7.97566 2.16036C7.18046 3.69727 7.40889 5.54726 8.55393 6.84388C9.04844 7.40385 9.78895 7.85969 10.5338 8.06267C11.0427 8.20137 11.9573 8.20137 12.4662 8.06267C14.9979 7.37277 16.2393 4.50853 15.0243 2.16036C14.5132 1.17235 13.6234 0.4315 12.5785 0.123805C12.136 -0.00650276 11.1237 -0.0423766 10.6911 0.056899ZM4.13001 3.81877C3.11155 3.94257 2.24877 4.57982 1.79349 5.5444C1.37385 6.4335 1.38365 7.31573 1.82347 8.23987C2.18576 9.00111 2.86682 9.5803 3.70308 9.83834C4.07594 9.95338 4.90264 9.95191 5.27595 9.83557C7.38422 9.17854 8.16894 6.6072 6.7815 4.90227C6.13384 4.1064 5.13192 3.69694 4.13001 3.81877ZM18.151 3.81766C16.9702 3.95668 15.9531 4.85786 15.6298 6.05161C15.5069 6.50483 15.4971 7.15444 15.6062 7.59631C15.8682 8.65717 16.673 9.508 17.7241 9.83557C18.0974 9.95191 18.9241 9.95338 19.2969 9.83834C20.1332 9.5803 20.8142 9.00111 21.1765 8.23987C21.6164 7.31559 21.6262 6.43299 21.2064 5.5444C20.6396 4.3447 19.4386 3.666 18.151 3.81766ZM8.64543 9.11574C7.65129 9.38327 6.82675 10.1078 6.40958 11.0803C6.14592 11.695 6.14965 11.6241 6.16273 15.8023L6.17473 19.6296L6.34402 19.8033L6.51326 19.9769H11.5H16.4867L16.656 19.8033L16.8253 19.6296L16.8373 15.8023C16.8477 12.4816 16.8401 11.9341 16.7797 11.6673C16.5433 10.6213 15.8172 9.72859 14.846 9.29008C14.274 9.03182 14.2112 9.02693 11.4775 9.02896C9.18088 9.03067 8.93336 9.03823 8.64543 9.11574ZM2.77118 10.8256C1.57415 11.0324 0.563152 11.928 0.144276 13.1526L0.0180875 13.5215L0.00456083 15.8879C-0.00707837 17.9319 0.000696075 18.2882 0.0617682 18.5038C0.248804 19.1639 0.73446 19.6847 1.37336 19.9103C1.60718 19.9928 1.75992 20 3.28407 20H4.94061L4.90606 19.8732C4.88705 19.8035 4.87204 17.91 4.87271 15.6656L4.87397 11.5849L4.98928 11.1814L5.1046 10.7779L4.04435 10.7834C3.46118 10.7863 2.8883 10.8053 2.77118 10.8256ZM18.0096 11.1771L18.126 11.5849L18.1273 15.6656C18.128 17.91 18.113 19.8035 18.0939 19.8732L18.0594 20H19.7159C21.2401 20 21.3928 19.9928 21.6266 19.9103C22.2655 19.6847 22.7512 19.1639 22.9382 18.5038C22.9993 18.2882 23.0071 17.9319 22.9954 15.8879L22.9819 13.5215L22.8557 13.1526C22.4795 12.0525 21.7049 11.2836 20.6001 10.9136C20.3124 10.8173 20.1836 10.8066 19.0893 10.7888L17.8931 10.7692L18.0096 11.1771Z\" fill=\"url(#paint0_radial_2987_522)\"></path><defs><radialGradient id=\"paint0_radial_2987_522\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(11.5 10) rotate(90) scale(18.75 21.5625)\"><stop stop-color=\"white\"></stop><stop offset=\"1\" stop-color=\"white\" stop-opacity=\"0\">");
const he = _0x2f073b("<svg width=\"1.85vh\" height=\"1.85vh\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.6072 0.0587924C10.7886 0.34275 9.21653 1.34172 8.1862 2.86813C7.94127 3.23093 7.57197 3.99314 7.42646 4.436C7.05438 5.56862 7.01481 6.93684 7.32157 8.06439L7.41724 8.41602L3.74936 12.0886C1.68261 14.158 0.0637127 15.8091 0.0406655 15.8711C0.0144541 15.9418 -0.000116488 16.6261 7.01461e-07 17.7855C0.000117891 19.5171 0.00328201 19.595 0.0777755 19.7173C0.120472 19.7873 0.212661 19.8795 0.282701 19.9222C0.404891 19.9968 0.482822 19.9999 2.21793 20C3.66292 20.0001 4.05109 19.9894 4.15156 19.9466C4.32234 19.8738 5.26138 18.9091 5.29607 18.7708C5.32162 18.669 5.30548 18.3514 5.24927 17.8495L5.22501 17.6328L5.88842 17.5716C6.89871 17.4784 6.9343 17.4434 7.02965 16.448L7.09176 15.8002L7.26657 15.8051C7.36271 15.8077 7.62595 15.8165 7.85154 15.8246C8.22628 15.838 8.27225 15.8317 8.38386 15.7521C8.59952 15.5982 8.63281 15.4694 8.63281 14.7882V14.1788L9.24805 14.1786C9.7781 14.1785 9.87974 14.1685 9.98197 14.1061C10.0473 14.0663 10.4433 13.6989 10.8621 13.2898L11.6234 12.5458L12.0577 12.6553C13.4841 13.0148 15.0201 12.8735 16.3171 12.2635C17.8367 11.5487 19.0273 10.2468 19.6135 8.65887C20.0518 7.47155 20.1207 6.07848 19.8028 4.83294C19.2199 2.54987 17.4091 0.757396 15.0978 0.175689C14.392 -0.00192182 13.3188 -0.0522825 12.6072 0.0587924ZM15.6668 3.10693C15.9982 3.20522 16.213 3.3304 16.4399 3.55736C17.1231 4.24073 17.1231 5.32436 16.4399 6.00773C15.7567 6.69105 14.6732 6.69105 13.99 6.00773C13.8749 5.89255 13.7406 5.71924 13.6916 5.62254C13.325 4.89885 13.4393 4.10804 13.99 3.55744C14.4325 3.11497 15.0946 2.93709 15.6668 3.10693Z\" fill=\"url(#paint0_radial_3002_1398)\"></path><defs><radialGradient id=\"paint0_radial_3002_1398\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(10 10) rotate(90) scale(18.75)\"><stop stop-color=\"white\"></stop><stop offset=\"1\" stop-color=\"white\" stop-opacity=\"0\">");
const me = _0x2f073b("<svg width=\"2.03vh\" height=\"2.03vh\" viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.8957 0.124609C13.6948 0.274055 0.170968 13.8111 0.0701662 13.9637C0.0315812 14.0221 0 14.1477 0 14.2427C0 14.4145 0.0219992 14.4375 3.79215 18.2078C7.48682 21.9025 7.58852 22 7.74733 22C7.83696 22 7.96251 21.9722 8.02636 21.9383C8.16695 21.8635 21.8848 8.13893 21.9521 8.00576C21.9781 7.95412 21.9994 7.83823 21.9994 7.74821C21.9994 7.5885 21.9075 7.49263 18.2073 3.79225L14.4151 0H14.2392C14.1123 0 14.0167 0.0346758 13.8957 0.124609ZM19.077 7.45456C19.1203 7.49371 19.1787 7.58123 19.2068 7.649C19.3057 7.88773 19.2211 8.00177 18.1622 9.05717L17.1614 10.0547H16.9675C16.7541 10.0547 16.6122 9.95852 16.5381 9.76379C16.447 9.52411 16.5175 9.42455 17.4394 8.49183C18.5011 7.41748 18.6068 7.33189 18.8339 7.36171C18.9244 7.37361 19.0338 7.41538 19.077 7.45456ZM10.5383 8.33869C11.3512 8.49574 12.3322 9.15965 12.9632 9.97975C13.2187 10.3119 13.5059 10.8641 13.6276 11.2578C13.769 11.715 13.7666 12.3731 13.6222 12.7402C13.483 13.0944 13.0941 13.4833 12.7399 13.6226C12.372 13.7673 11.7136 13.7694 11.2594 13.6275C9.90499 13.204 8.71084 11.9711 8.35713 10.6309C8.27794 10.3309 8.26814 9.74707 8.33792 9.48789C8.46592 9.01257 8.7792 8.63711 9.213 8.43911C9.59911 8.26289 9.992 8.23311 10.5383 8.33869ZM1.35348 10.6306C0.762676 10.8509 0.249255 11.044 0.212561 11.0599C0.115798 11.1016 0 11.3165 0 11.4544C0 11.5197 0.0705099 11.7651 0.15666 11.9997L0.313363 12.4263L1.40272 11.3375C2.00191 10.7386 2.49212 10.2437 2.49212 10.2376C2.49212 10.2096 2.36069 10.255 1.35348 10.6306ZM18.6265 12.6328C17.6341 13.6254 16.8347 14.4375 16.8499 14.4375C16.8652 14.4375 17.3001 14.2817 17.8165 14.0913C18.6928 13.768 18.7661 13.7482 18.9167 13.7922C19.0077 13.8189 19.1103 13.8887 19.1521 13.9526C19.259 14.1158 19.2414 14.3793 19.1153 14.5046C19.0492 14.5702 18.5778 14.7656 17.7799 15.0581C16.4265 15.5543 16.3721 15.5635 16.1732 15.3271L16.0632 15.1965L14.1562 17.1032C13.1074 18.1519 12.2559 19.0166 12.264 19.0248C12.2722 19.033 14.4129 18.2546 17.021 17.2951C22.1599 15.4047 21.9994 15.4736 21.9994 15.1565C21.9995 15.0239 20.5009 10.8281 20.4536 10.8281C20.441 10.8281 19.6188 11.6402 18.6265 12.6328ZM5.25946 11.9943C5.40662 12.0613 5.51387 12.2986 5.4761 12.4737C5.45393 12.5766 5.22259 12.8378 4.56007 13.5082C4.0726 14.0015 3.59833 14.4607 3.50616 14.5287C3.22455 14.7365 2.92184 14.6629 2.79453 14.3556C2.69351 14.1116 2.77399 14.0026 3.83723 12.9428C4.77715 12.006 4.84761 11.9453 4.99508 11.9453C5.08144 11.9453 5.20038 11.9673 5.25946 11.9943ZM2.41083 18.208C2.43584 18.273 2.7364 19.0996 3.07876 20.0449C3.75679 21.9172 3.79997 22 4.09774 22C4.17663 22 4.55818 21.8834 4.94571 21.7409C5.33319 21.5985 5.67826 21.4719 5.71255 21.4597C5.75389 21.445 5.21159 20.8741 4.10148 19.7637C3.18111 18.8431 2.41397 18.0898 2.39674 18.0898C2.37946 18.0898 2.38582 18.143 2.41083 18.208Z\" fill=\"url(#paint0_radial_3002_1406)\"></path><defs><radialGradient id=\"paint0_radial_3002_1406\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(11 11) rotate(90) scale(20.625)\"><stop stop-color=\"white\"></stop><stop offset=\"1\" stop-color=\"white\" stop-opacity=\"0\">");
function g1(_0x451974) {
  const {
    setPage: _0x4a39d3
  } = J();
  return (() => {
    const _0x449fdf = Ce();
    const _0x15d03a = _0x449fdf.firstChild;
    const _0xa3e1b1 = _0x15d03a.nextSibling;
    const _0x4e328e = _0xa3e1b1.firstChild;
    const _0x34f828 = _0x4e328e.firstChild;
    const _0x4115dd = _0x34f828.nextSibling;
    const _0x35fc3a = _0x4e328e.nextSibling;
    _0x4df1dd(_0x15d03a, () => _0x451974.icon);
    _0x4df1dd(_0x4115dd, () => _0x451974.text);
    _0x35fc3a.$$click = () => {
      _0x4a39d3(_0x451974.id);
    };
    _0x2dcf48(_0x339719 => {
      const _0x3dc225 = K.button;
      const _0x37719e = {
        [K[_0x451974.id]]: true
      };
      const _0x10b01e = K.indicator;
      const _0x199063 = K.bottom;
      const _0x2a7f35 = K.column;
      const _0x36561f = K.text;
      const _0x529c3f = K.text;
      const _0x37e933 = {
        [K.big]: true
      };
      const _0x1e2510 = K.arrow;
      if (_0x3dc225 !== _0x339719._v$) {
        e(_0x449fdf, _0x339719._v$ = _0x3dc225);
      }
      _0x339719._v$2 = _0x434107(_0x449fdf, _0x37719e, _0x339719._v$2);
      if (_0x10b01e !== _0x339719._v$3) {
        e(_0x15d03a, _0x339719._v$3 = _0x10b01e);
      }
      if (_0x199063 !== _0x339719._v$4) {
        e(_0xa3e1b1, _0x339719._v$4 = _0x199063);
      }
      if (_0x2a7f35 !== _0x339719._v$5) {
        e(_0x4e328e, _0x339719._v$5 = _0x2a7f35);
      }
      if (_0x36561f !== _0x339719._v$6) {
        e(_0x34f828, _0x339719._v$6 = _0x36561f);
      }
      if (_0x529c3f !== _0x339719._v$7) {
        e(_0x4115dd, _0x339719._v$7 = _0x529c3f);
      }
      _0x339719._v$8 = _0x434107(_0x4115dd, _0x37e933, _0x339719._v$8);
      if (_0x1e2510 !== _0x339719._v$9) {
        e(_0x35fc3a, _0x339719._v$9 = _0x1e2510);
      }
      return _0x339719;
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
    return _0x449fdf;
  })();
}
function xe() {
  const {
    setPage: _0x4bcbe5
  } = J();
  return (() => {
    const _0x30d57d = fe();
    const _0x4ed111 = _0x30d57d.firstChild;
    const _0x5036e6 = _0x4ed111.firstChild;
    const _0x37a8a4 = _0x5036e6.nextSibling;
    const _0x10d42e = _0x37a8a4.firstChild;
    const _0x3453da = _0x10d42e.nextSibling;
    const _0x461acc = _0x37a8a4.nextSibling;
    const _0x4f11ef = _0x4ed111.nextSibling;
    _0x461acc.$$click = () => {
      _0x4bcbe5("home");
    };
    _0x4df1dd(_0x4f11ef, _0x2c30e9(g1, {
      id: "members",
      text: "Members",
      get icon() {
        return ge();
      }
    }), null);
    _0x4df1dd(_0x4f11ef, _0x2c30e9(g1, {
      id: "permissions",
      text: "Permissions",
      get icon() {
        return he();
      }
    }), null);
    _0x4df1dd(_0x4f11ef, _0x2c30e9(g1, {
      id: "money",
      text: "Money",
      get icon() {
        return me();
      }
    }), null);
    _0x2dcf48(_0x5b6a09 => {
      const _0x40e8a8 = K.management;
      const _0xb65020 = K.header;
      const _0x28fa52 = K.icon;
      const _0x1ee421 = K.column;
      const _0x30c7fe = K.text;
      const _0x4aee47 = K.text;
      const _0x30565c = {
        [K.big]: true
      };
      const _0x1e58a9 = K.row;
      if (_0x40e8a8 !== _0x5b6a09._v$10) {
        e(_0x30d57d, _0x5b6a09._v$10 = _0x40e8a8);
      }
      if (_0xb65020 !== _0x5b6a09._v$11) {
        e(_0x4ed111, _0x5b6a09._v$11 = _0xb65020);
      }
      if (_0x28fa52 !== _0x5b6a09._v$12) {
        e(_0x5036e6, _0x5b6a09._v$12 = _0x28fa52);
      }
      if (_0x1ee421 !== _0x5b6a09._v$13) {
        e(_0x37a8a4, _0x5b6a09._v$13 = _0x1ee421);
      }
      if (_0x30c7fe !== _0x5b6a09._v$14) {
        e(_0x10d42e, _0x5b6a09._v$14 = _0x30c7fe);
      }
      if (_0x4aee47 !== _0x5b6a09._v$15) {
        e(_0x3453da, _0x5b6a09._v$15 = _0x4aee47);
      }
      _0x5b6a09._v$16 = _0x434107(_0x3453da, _0x30565c, _0x5b6a09._v$16);
      if (_0x1e58a9 !== _0x5b6a09._v$17) {
        e(_0x4f11ef, _0x5b6a09._v$17 = _0x1e58a9);
      }
      return _0x5b6a09;
    }, {
      _v$10: undefined,
      _v$11: undefined,
      _v$12: undefined,
      _v$13: undefined,
      _v$14: undefined,
      _v$15: undefined,
      _v$16: undefined,
      _v$17: undefined
    });
    return _0x30d57d;
  })();
}
_0x161141(["click"]);
const we = "_members_7tz58_1";
const be = "_row_7tz58_12";
const ye = "_column_7tz58_21";
const Le = "_header_7tz58_27";
const pe = "_icon_7tz58_37";
const ke = "_right_7tz58_46";
const Me = "_searchBar_7tz58_54";
const Se = "_input_7tz58_66";
const Be = "_searchButton_7tz58_76";
const Ze = "_list_7tz58_98";
const Ge = "_player_7tz58_109";
const Pe = "_status_7tz58_123";
const je = "_online_7tz58_136";
const Ie = "_offline_7tz58_141";
const Ae = "_grade_7tz58_146";
const Te = "_downrank_7tz58_151";
const Ve = "_promote_7tz58_172";
const qe = "_kick_7tz58_193";
const Ue = "_inviteBox_7tz58_207";
const He = "_description_7tz58_223";
const Fe = "_button_7tz58_235";
const Oe = "_text_7tz58_256";
const Ne = "_big_7tz58_265";
const ze = "_grey_7tz58_273";
const q = {
  members: we,
  row: be,
  column: ye,
  header: Le,
  icon: pe,
  right: ke,
  searchBar: Me,
  input: Se,
  searchButton: Be,
  list: Ze,
  player: Ge,
  status: Pe,
  online: je,
  offline: Ie,
  grade: Ae,
  downrank: Te,
  promote: Ve,
  kick: qe,
  inviteBox: Ue,
  description: He,
  button: Fe,
  text: Oe,
  big: Ne,
  grey: ze
};
const Re = _0x2f073b("<div><div><div>Invite</div><div>New member</div></div><div>Invite a new member to your gang. They will be able to see the gang's information and members.</div><div>Invite member");
const De = _0x2f073b("<div><div><div></div><div><div>Menu</div><div>Members</div></div><div><div><input type=\"text\" placeholder=\"Search member by name\"><svg width=\"1.66vh\" height=\"1.66vh\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.5389 0.0124361C4.26834 0.2841 2.41157 1.41153 1.18581 3.26276C-0.228181 5.39825 -0.389563 8.17603 0.765943 10.4898C1.66813 12.2963 3.28796 13.6383 5.25614 14.2099C5.97962 14.42 6.33542 14.4657 7.24179 14.4654C7.87871 14.4651 8.14408 14.4508 8.40155 14.4031C9.51449 14.1968 10.4473 13.8211 11.3157 13.2293L11.6875 12.976L14.1301 15.4177C16.0074 17.2944 16.6092 17.8759 16.7307 17.9306C16.915 18.0136 17.2106 18.0234 17.4073 17.9532C17.7426 17.8334 17.9577 17.5449 17.9873 17.1753C18.0229 16.7312 18.1572 16.8898 15.4279 14.1511L12.9736 11.6885L13.2465 11.2811C13.7367 10.5491 14.0639 9.81622 14.2668 8.99553C15.1423 5.45436 13.2778 1.83155 9.88783 0.48681C9.48764 0.328075 8.89725 0.163149 8.41912 0.0765349C8.11466 0.0213719 6.83014 -0.0223926 6.5389 0.0124361ZM8.43669 1.93705C9.49362 2.18937 10.3234 2.65016 11.0742 3.40176C12.2078 4.53647 12.7591 6.01715 12.6501 7.63394C12.5262 9.47173 11.4532 11.1315 9.80731 12.0311C8.32465 12.8416 6.37095 12.8722 4.84692 12.1087C3.95148 11.6601 3.24227 11.0334 2.6994 10.2109C1.65839 8.63369 1.52133 6.61054 2.33952 4.89865C3.08518 3.33854 4.57568 2.20115 6.28091 1.89104C6.84346 1.78873 7.91072 1.8115 8.43669 1.93705Z\" fill=\"#00F8B9\"></path></svg></div><div class=\"gang-backbutton\">Back</div></div></div><div><div>");
const Ee = _0x2f073b("<div>Downrank");
const Xe = _0x2f073b("<div>Promote");
const Ye = _0x2f073b("<div><svg width=\"1.48vh\" height=\"1.48vh\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.87866 0.0616689C9.82011 0.101886 9.74277 0.174533 9.70681 0.223101L9.64144 0.311416V8V15.6886L9.70681 15.7769C9.74277 15.8255 9.82011 15.8981 9.87866 15.9383C10.0822 16.0781 10.0721 16.0818 12.9691 14.8196C14.4385 14.1794 15.6955 13.6251 15.7626 13.5877C15.8296 13.5503 15.9104 13.4707 15.9422 13.4107C15.9978 13.306 16 13.0978 16 8C16 2.90224 15.9978 2.69405 15.9422 2.58925C15.9104 2.52934 15.8296 2.44971 15.7626 2.41231C15.6955 2.37491 14.4385 1.82056 12.9691 1.1804C10.0721 -0.0817809 10.0822 -0.0781218 9.87866 0.0616689ZM2.37629 3.81722C2.2124 3.90035 2.1236 4.03854 2.12116 4.21411C2.12023 4.28369 2.17297 4.77184 2.23843 5.29888C2.3367 6.09031 2.36876 6.27401 2.42253 6.35382C2.64903 6.69025 3.06676 6.66708 3.24483 6.30819L3.31616 6.16446L3.18968 5.15111C3.1201 4.59377 3.04832 4.10071 3.03017 4.05543C2.96493 3.89284 2.75405 3.74686 2.58445 3.74686C2.54623 3.74686 2.45256 3.77854 2.37629 3.81722ZM4.79369 4.71823C4.73958 4.73446 4.65352 4.79538 4.60244 4.85358C4.48214 4.99072 4.00154 6.19151 4.00154 6.35494C4.00154 6.66004 4.30107 6.88974 4.59631 6.811C4.79522 6.75799 4.87949 6.62508 5.15693 5.92678C5.38477 5.35336 5.41361 5.25876 5.40086 5.12628C5.37846 4.89267 5.23439 4.74091 5.00142 4.70541C4.94127 4.69625 4.84778 4.70203 4.79369 4.71823ZM0.335893 5.66881C0.0468362 5.77135 -0.077429 6.05594 0.0497421 6.32417C0.112265 6.45605 1.11682 7.45428 1.2305 7.49747C1.45122 7.58135 1.69253 7.50185 1.81633 7.30446C1.86663 7.22427 1.87779 7.16379 1.8686 7.0209L1.85695 6.83927L1.28102 6.26153C0.94119 5.92062 0.673068 5.6766 0.62698 5.66625C0.584017 5.65661 0.527774 5.6437 0.501996 5.6376C0.476218 5.6315 0.401478 5.64554 0.335893 5.66881ZM7.26672 8.28149L5.86087 9.68881L7.02437 10.8533L8.18788 12.0178L8.45378 11.7531L8.71969 11.4883V9.18125C8.71969 7.91234 8.7091 6.87417 8.69613 6.87417C8.68316 6.87417 8.03993 7.50748 7.26672 8.28149ZM11.9022 7.41466C11.9731 7.4617 12.07 7.55883 12.1174 7.63054C12.1926 7.74428 12.2036 7.79132 12.2036 8C12.2036 8.20869 12.1926 8.25572 12.1174 8.36946C11.9425 8.63409 11.5964 8.7555 11.2981 8.65695C10.727 8.46832 10.686 7.63138 11.235 7.3696C11.4221 7.28041 11.731 7.30127 11.9022 7.41466ZM1.6581 9.30528C1.56392 9.3384 1.44994 9.42277 1.31292 9.56081C1.09708 9.77825 1.03318 9.91229 1.03318 10.1475C1.03318 10.4001 1.13701 10.5302 2.11794 11.507C3.16472 12.5494 3.01936 12.4518 3.65159 12.5363C3.8965 12.5691 3.93912 12.583 3.92281 12.6253C3.84763 12.8195 3.83875 12.9651 3.89103 13.1451C3.94112 13.3175 3.97736 13.363 4.43399 13.8263C4.70311 14.0993 4.98239 14.3576 5.05463 14.4003C5.12884 14.4441 5.25845 14.4852 5.35271 14.495C5.6643 14.5272 5.73182 14.4779 6.68823 13.5202L7.54459 12.6627L6.32412 11.4404L5.10365 10.2183L3.65465 9.73459C2.35451 9.30062 2.18475 9.25117 2.00218 9.2534C1.89026 9.25474 1.73543 9.2781 1.6581 9.30528Z\" fill=\"#F86969\">");
const Ke = _0x2f073b("<div><div></div><div><div></div><div></div></div><div>");
function We() {
  const {
    myGang: _0x1e5be5,
    setMyGang: _0x24b49b,
    setPage: _0x4110c0
  } = J();
  const [_0x436415, _0x413180] = _0x13696c("");
  _0x39e158(() => {
    let _0x570225 = [..._0x1e5be5.members];
    _0x570225 = _0x570225.sort((_0x44aa43, _0x5a9706) => _0x44aa43.name.localeCompare(_0x5a9706.name));
    _0x570225 = _0x570225.sort((_0xe55cec, _0x24981e) => _0xe55cec.online && !_0x24981e.online ? -1 : !_0xe55cec.online && _0x24981e.online ? 1 : 0);
    _0x24b49b({
      ..._0x1e5be5,
      members: _0x570225
    });
  });
  return (() => {
    const _0x3614cc = De();
    const _0x564c24 = _0x3614cc.firstChild;
    const _0x114008 = _0x564c24.firstChild;
    const _0x5c69e5 = _0x114008.nextSibling;
    const _0x442762 = _0x5c69e5.firstChild;
    const _0x253379 = _0x442762.nextSibling;
    const _0x547ca8 = _0x5c69e5.nextSibling;
    const _0x2013b9 = _0x547ca8.firstChild;
    const _0x36a1dd = _0x2013b9.firstChild;
    const _0x1f15f2 = _0x36a1dd.nextSibling;
    const _0x252bc6 = _0x2013b9.nextSibling;
    const _0x1c65ba = _0x564c24.nextSibling;
    const _0x576205 = _0x1c65ba.firstChild;
    _0x36a1dd.$$input = _0x1d2de6 => {
      _0x413180(_0x1d2de6.currentTarget.value);
    };
    _0x1f15f2.style.setProperty("filter", "drop-shadow(0px 0.09259vh 2.22vh rgba(0, 248, 185, 0.55))");
    _0x252bc6.$$click = () => {
      _0x4110c0("management");
    };
    _0x4df1dd(_0x576205, _0x2c30e9(_0x3b53e8, {
      get each() {
        return _0x1e5be5.members.filter(_0x3c028d => _0x3c028d.name.includes(_0x436415()));
      },
      children: _0x5d86e5 => (() => {
        const _0x19026d = Ke();
        const _0xcaf6b6 = _0x19026d.firstChild;
        const _0x21261a = _0xcaf6b6.nextSibling;
        const _0x456b59 = _0x21261a.firstChild;
        const _0x2f53d7 = _0x456b59.nextSibling;
        const _0x3b7448 = _0x21261a.nextSibling;
        _0x4df1dd(_0xcaf6b6, () => _0x5d86e5.name);
        _0x21261a.style.setProperty("width", "0");
        _0x21261a.style.setProperty("gap", "0");
        _0x21261a.style.setProperty("margin-left", "auto");
        _0x4df1dd(_0x456b59, () => _0x5d86e5.online ? "online" : "offline");
        _0x4df1dd(_0x2f53d7, (() => {
          const _0x41d6e9 = _0x268e8d(() => !!_0x5d86e5.rankId);
          return () => _0x41d6e9() ? S1(_0x5d86e5.rankId) : "Rank not set";
        })());
        _0x3b7448.style.setProperty("width", "0");
        _0x3b7448.style.setProperty("gap", "0");
        _0x3b7448.style.setProperty("margin-left", "auto");
        _0x3b7448.style.setProperty("margin-right", "1.48vh");
        _0x4df1dd(_0x3b7448, _0x2c30e9(_0x34f66b, {
          get when() {
            return Q("demote_members");
          },
          get children() {
            const _0x2e7180 = Ee();
            _0x2e7180.$$click = async () => {
              await _0x405246.execute("gangs:demoteMember", _0x5d86e5.chipId);
              const _0x2ace00 = await _0x405246.execute("gangs:getMyGang");
              _0x24b49b(_0x2ace00);
            };
            _0x2dcf48(() => e(_0x2e7180, q.downrank));
            return _0x2e7180;
          }
        }), null);
        _0x4df1dd(_0x3b7448, _0x2c30e9(_0x34f66b, {
          get when() {
            return Q("promote_members");
          },
          get children() {
            const _0x11db62 = Xe();
            _0x11db62.$$click = async () => {
              await _0x405246.execute("gangs:promoteMember", _0x5d86e5.chipId);
              const _0x2f1b76 = await _0x405246.execute("gangs:getMyGang");
              _0x24b49b(_0x2f1b76);
            };
            _0x2dcf48(() => e(_0x11db62, q.promote));
            return _0x11db62;
          }
        }), null);
        _0x4df1dd(_0x19026d, _0x2c30e9(_0x34f66b, {
          get when() {
            return Q("kick_members");
          },
          get children() {
            const _0x5b03f3 = Ye();
            _0x5b03f3.$$click = async () => {
              await _0x405246.execute("gangs:kickMember", _0x5d86e5.chipId);
              const _0x48a55d = await _0x405246.execute("gangs:getMyGang");
              _0x24b49b(_0x48a55d);
            };
            _0x2dcf48(() => e(_0x5b03f3, q.kick));
            return _0x5b03f3;
          }
        }), null);
        _0x2dcf48(_0x55a271 => {
          const _0x3cd696 = q.player;
          const _0x470b50 = q.text;
          const _0x56d331 = q.row;
          const _0x7e6f9a = q.status;
          const _0x558401 = {
            [q.online]: _0x5d86e5.online,
            [q.offline]: !_0x5d86e5.online
          };
          const _0x4fafde = q.status;
          const _0x1cbbb6 = {
            [q.grade]: true
          };
          const _0x392136 = q.row;
          if (_0x3cd696 !== _0x55a271._v$20) {
            e(_0x19026d, _0x55a271._v$20 = _0x3cd696);
          }
          if (_0x470b50 !== _0x55a271._v$21) {
            e(_0xcaf6b6, _0x55a271._v$21 = _0x470b50);
          }
          if (_0x56d331 !== _0x55a271._v$22) {
            e(_0x21261a, _0x55a271._v$22 = _0x56d331);
          }
          if (_0x7e6f9a !== _0x55a271._v$23) {
            e(_0x456b59, _0x55a271._v$23 = _0x7e6f9a);
          }
          _0x55a271._v$24 = _0x434107(_0x456b59, _0x558401, _0x55a271._v$24);
          if (_0x4fafde !== _0x55a271._v$25) {
            e(_0x2f53d7, _0x55a271._v$25 = _0x4fafde);
          }
          _0x55a271._v$26 = _0x434107(_0x2f53d7, _0x1cbbb6, _0x55a271._v$26);
          if (_0x392136 !== _0x55a271._v$27) {
            e(_0x3b7448, _0x55a271._v$27 = _0x392136);
          }
          return _0x55a271;
        }, {
          _v$20: undefined,
          _v$21: undefined,
          _v$22: undefined,
          _v$23: undefined,
          _v$24: undefined,
          _v$25: undefined,
          _v$26: undefined,
          _v$27: undefined
        });
        return _0x19026d;
      })()
    }));
    _0x4df1dd(_0x1c65ba, _0x2c30e9(_0x34f66b, {
      get when() {
        return Q("invite_members");
      },
      get children() {
        const _0x33bf24 = Re();
        const _0x108df6 = _0x33bf24.firstChild;
        const _0x43a27b = _0x108df6.firstChild;
        const _0x5be9c1 = _0x43a27b.nextSibling;
        const _0x477fb5 = _0x108df6.nextSibling;
        const _0xcfb9f = _0x477fb5.nextSibling;
        _0x108df6.style.setProperty("align-items", "center");
        _0x2dcf48(_0x484409 => {
          const _0x584d11 = q.inviteBox;
          const _0x163cd3 = q.column;
          const _0xa5ed29 = q.text;
          const _0x22d63f = q.text;
          const _0x1080e9 = {
            [q.big]: true
          };
          const _0x50fb14 = q.description;
          const _0x13a669 = q.button;
          if (_0x584d11 !== _0x484409._v$) {
            e(_0x33bf24, _0x484409._v$ = _0x584d11);
          }
          if (_0x163cd3 !== _0x484409._v$2) {
            e(_0x108df6, _0x484409._v$2 = _0x163cd3);
          }
          if (_0xa5ed29 !== _0x484409._v$3) {
            e(_0x43a27b, _0x484409._v$3 = _0xa5ed29);
          }
          if (_0x22d63f !== _0x484409._v$4) {
            e(_0x5be9c1, _0x484409._v$4 = _0x22d63f);
          }
          _0x484409._v$5 = _0x434107(_0x5be9c1, _0x1080e9, _0x484409._v$5);
          if (_0x50fb14 !== _0x484409._v$6) {
            e(_0x477fb5, _0x484409._v$6 = _0x50fb14);
          }
          if (_0x13a669 !== _0x484409._v$7) {
            e(_0xcfb9f, _0x484409._v$7 = _0x13a669);
          }
          return _0x484409;
        }, {
          _v$: undefined,
          _v$2: undefined,
          _v$3: undefined,
          _v$4: undefined,
          _v$5: undefined,
          _v$6: undefined,
          _v$7: undefined
        });
        return _0x33bf24;
      }
    }), null);
    _0x2dcf48(_0x4dce24 => {
      const _0x285a6f = q.members;
      const _0x51b656 = q.header;
      const _0x504ea7 = q.icon;
      const _0x15371d = q.column;
      const _0x5eca84 = q.text;
      const _0x198759 = q.text;
      const _0x5bbb96 = {
        [q.big]: true
      };
      const _0x4a5caf = q.right;
      const _0x1bd9c2 = q.searchBar;
      const _0x2f554a = q.input;
      const _0x2bbdd9 = q.row;
      const _0x36f674 = q.list;
      if (_0x285a6f !== _0x4dce24._v$8) {
        e(_0x3614cc, _0x4dce24._v$8 = _0x285a6f);
      }
      if (_0x51b656 !== _0x4dce24._v$9) {
        e(_0x564c24, _0x4dce24._v$9 = _0x51b656);
      }
      if (_0x504ea7 !== _0x4dce24._v$10) {
        e(_0x114008, _0x4dce24._v$10 = _0x504ea7);
      }
      if (_0x15371d !== _0x4dce24._v$11) {
        e(_0x5c69e5, _0x4dce24._v$11 = _0x15371d);
      }
      if (_0x5eca84 !== _0x4dce24._v$12) {
        e(_0x442762, _0x4dce24._v$12 = _0x5eca84);
      }
      if (_0x198759 !== _0x4dce24._v$13) {
        e(_0x253379, _0x4dce24._v$13 = _0x198759);
      }
      _0x4dce24._v$14 = _0x434107(_0x253379, _0x5bbb96, _0x4dce24._v$14);
      if (_0x4a5caf !== _0x4dce24._v$15) {
        e(_0x547ca8, _0x4dce24._v$15 = _0x4a5caf);
      }
      if (_0x1bd9c2 !== _0x4dce24._v$16) {
        e(_0x2013b9, _0x4dce24._v$16 = _0x1bd9c2);
      }
      if (_0x2f554a !== _0x4dce24._v$17) {
        e(_0x36a1dd, _0x4dce24._v$17 = _0x2f554a);
      }
      if (_0x2bbdd9 !== _0x4dce24._v$18) {
        e(_0x1c65ba, _0x4dce24._v$18 = _0x2bbdd9);
      }
      if (_0x36f674 !== _0x4dce24._v$19) {
        e(_0x576205, _0x4dce24._v$19 = _0x36f674);
      }
      return _0x4dce24;
    }, {
      _v$8: undefined,
      _v$9: undefined,
      _v$10: undefined,
      _v$11: undefined,
      _v$12: undefined,
      _v$13: undefined,
      _v$14: undefined,
      _v$15: undefined,
      _v$16: undefined,
      _v$17: undefined,
      _v$18: undefined,
      _v$19: undefined
    });
    _0x2dcf48(() => _0x36a1dd.value = _0x436415());
    return _0x3614cc;
  })();
}
_0x161141(["input", "click"]);
const Je = "_members_bv4ra_1";
const Qe = "_row_bv4ra_12";
const e4 = "_column_bv4ra_21";
const t4 = "_content_bv4ra_27";
const n4 = "_list_bv4ra_34";
const i4 = "_rang_bv4ra_46";
const r4 = "_active_bv4ra_72";
const d4 = "_indicator_bv4ra_75";
const l4 = "_grade_bv4ra_100";
const o4 = "_permission_bv4ra_116";
const s4 = "_slider_bv4ra_144";
const v4 = "_text_bv4ra_178";
const _4 = "_big_bv4ra_186";
const a4 = "_grey_bv4ra_190";
const c4 = "_create_bv4ra_195";
const O = {
  members: Je,
  row: Qe,
  column: e4,
  content: t4,
  list: n4,
  rang: i4,
  active: r4,
  indicator: d4,
  delete: "_delete_bv4ra_85",
  grade: l4,
  permission: o4,
  switch: "_switch_bv4ra_133",
  slider: s4,
  text: v4,
  big: _4,
  grey: a4,
  create: c4
};
const u4 = _0x2f073b("<div>Create");
const $4 = _0x2f073b("<div><div><div><div><svg width=\"3.24vh\" height=\"3.24vh\" viewBox=\"0 0 35 35\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M22.0626 0.102887C18.8801 0.599813 16.1289 2.34801 14.3258 5.01923C13.8972 5.65413 13.2509 6.988 12.9963 7.76299C12.3452 9.74509 12.2759 12.1395 12.8128 14.1127L12.9802 14.728L6.56138 21.155C2.94456 24.7764 0.111497 27.666 0.0711646 27.7744C0.0252946 27.8981 -0.000203854 29.0957 1.22756e-06 31.1246C0.000206309 34.155 0.00574352 34.2913 0.136107 34.5052C0.210825 34.6278 0.372156 34.7891 0.494727 34.8639C0.708558 34.9943 0.844938 34.9998 3.88138 35C6.4101 35.0002 7.0894 34.9815 7.26522 34.9065C7.5641 34.7791 9.20742 33.0909 9.26812 32.8488C9.31283 32.6708 9.2846 32.115 9.18622 31.2366L9.14377 30.8573L10.3047 30.7503C12.0727 30.5871 12.135 30.5259 12.3019 28.784L12.4106 27.6503L12.7165 27.6588C12.8847 27.6635 13.3454 27.6789 13.7402 27.693C14.396 27.7165 14.4764 27.7055 14.6717 27.5662C15.0492 27.2969 15.1074 27.0714 15.1074 25.8794V24.8129L16.1841 24.8126C17.1117 24.8124 17.2895 24.7948 17.4684 24.6857C17.5827 24.616 18.2758 23.9731 19.0086 23.2571L20.341 21.9551L21.101 22.1467C23.5972 22.7759 26.2852 22.5287 28.5549 21.4611C31.2143 20.2101 33.2977 17.9319 34.3236 15.153C35.0907 13.0752 35.2113 10.6373 34.6548 8.45765C33.6349 4.46227 30.4659 1.32544 26.4211 0.307455C25.1861 -0.00336318 23.3079 -0.0914944 22.0626 0.102887ZM27.417 5.43712C27.9969 5.60914 28.3727 5.82821 28.7699 6.22538C29.9655 7.42127 29.9655 9.31763 28.7699 10.5135C27.5742 11.7093 25.6781 11.7093 24.4824 10.5135C24.281 10.312 24.046 10.0087 23.9603 9.83944C23.3188 8.57299 23.5188 7.18908 24.4824 6.22551C25.2569 5.4512 26.4155 5.13991 27.417 5.43712Z\" fill=\"white\" fill-opacity=\"0.12\"></path></svg><div><div>List</div><div>Of rangs</div></div></div><div></div></div><div><div><svg width=\"3.24vh\" height=\"3.24vh\" viewBox=\"0 0 35 35\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M22.0626 0.102887C18.8801 0.599813 16.1289 2.34801 14.3258 5.01923C13.8972 5.65413 13.2509 6.988 12.9963 7.76299C12.3452 9.74509 12.2759 12.1395 12.8128 14.1127L12.9802 14.728L6.56138 21.155C2.94456 24.7764 0.111497 27.666 0.0711646 27.7744C0.0252946 27.8981 -0.000203854 29.0957 1.22756e-06 31.1246C0.000206309 34.155 0.00574352 34.2913 0.136107 34.5052C0.210825 34.6278 0.372156 34.7891 0.494727 34.8639C0.708558 34.9943 0.844938 34.9998 3.88138 35C6.4101 35.0002 7.0894 34.9815 7.26522 34.9065C7.5641 34.7791 9.20742 33.0909 9.26812 32.8488C9.31283 32.6708 9.2846 32.115 9.18622 31.2366L9.14377 30.8573L10.3047 30.7503C12.0727 30.5871 12.135 30.5259 12.3019 28.784L12.4106 27.6503L12.7165 27.6588C12.8847 27.6635 13.3454 27.6789 13.7402 27.693C14.396 27.7165 14.4764 27.7055 14.6717 27.5662C15.0492 27.2969 15.1074 27.0714 15.1074 25.8794V24.8129L16.1841 24.8126C17.1117 24.8124 17.2895 24.7948 17.4684 24.6857C17.5827 24.616 18.2758 23.9731 19.0086 23.2571L20.341 21.9551L21.101 22.1467C23.5972 22.7759 26.2852 22.5287 28.5549 21.4611C31.2143 20.2101 33.2977 17.9319 34.3236 15.153C35.0907 13.0752 35.2113 10.6373 34.6548 8.45765C33.6349 4.46227 30.4659 1.32544 26.4211 0.307455C25.1861 -0.00336318 23.3079 -0.0914944 22.0626 0.102887ZM27.417 5.43712C27.9969 5.60914 28.3727 5.82821 28.7699 6.22538C29.9655 7.42127 29.9655 9.31763 28.7699 10.5135C27.5742 11.7093 25.6781 11.7093 24.4824 10.5135C24.281 10.312 24.046 10.0087 23.9603 9.83944C23.3188 8.57299 23.5188 7.18908 24.4824 6.22551C25.2569 5.4512 26.4155 5.13991 27.417 5.43712Z\" fill=\"white\" fill-opacity=\"0.12\"></path></svg><div><div>List</div><div>Permissions</div></div><div class=\"gang-backbutton ml-auto\">Back</div></div><div>");
const C4 = _0x2f073b("<div><svg width=\"1vh\" height=\"1.21vh\" viewBox=\"0 0 9 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.21429 0.343815V0.68763H1.60714H0V1.37526V2.06289H4.5H9V1.37526V0.68763H7.39286H5.78571V0.343815V0H4.5H3.21429V0.343815ZM0.642857 6.27862C0.642857 10.1667 0.635464 9.93082 0.766286 10.2155C0.921234 10.5526 1.16715 10.7898 1.5067 10.9294L1.65737 10.9913L4.44795 10.9971C7.564 11.0035 7.33614 11.0141 7.65402 10.8484C7.88946 10.7257 8.09697 10.5032 8.21373 10.2481C8.36815 9.91073 8.35714 10.2155 8.35714 6.28086V2.75052H4.5H0.642857V6.27862Z\" fill=\"#B94141\">");
const f4 = _0x2f073b("<div><div>");
const g4 = _0x2f073b("<div><div></div><label><input type=\"checkbox\"><span>");
function h4() {
  const {
    myGang: _0x147689,
    setMyGang: _0x321b76,
    setPage: _0x44b77a,
    input: _0x37ef1b,
    setInput: _0x1ecdc9,
    setLoading: _0x4783c5,
    fetchGang: _0x27d87e
  } = J();
  const [_0x42bceb, _0x41d5fd] = _0x13696c(_0x147689.ranks[0].id);
  const [_0x48b83d, _0x17e115] = _0x36299c([{
    label: "Invite Members",
    description: "Invite members to the gang",
    id: "invite_members"
  }, {
    label: "Kick Members",
    description: "Kick members from the gang",
    id: "kick_members"
  }, {
    label: "Promote Members",
    description: "Promote members in the gang",
    id: "promote_members"
  }, {
    label: "Demote Members",
    description: "Demote members in the gang",
    id: "demote_members"
  }, {
    label: "Manage Ranks",
    description: "Manage ranks and permissions in the gang",
    id: "manage_ranks"
  }, {
    label: "Add Announcements",
    description: "Add announcements to the gang",
    id: "add_announcements"
  }, {
    label: "Delete Announcements",
    description: "Delete announcements from the gang",
    id: "delete_announcements"
  }, {
    label: "Add Notes",
    description: "Add notes to the gang",
    id: "add_notes"
  }, {
    label: "Delete Notes",
    description: "Delete notes from the gang",
    id: "delete_notes"
  }]);
  return (() => {
    const _0x9084db = $4();
    const _0xf94161 = _0x9084db.firstChild;
    const _0x58b4a5 = _0xf94161.firstChild;
    const _0xbfbb09 = _0x58b4a5.firstChild;
    const _0x504746 = _0xbfbb09.firstChild;
    const _0x3376f0 = _0x504746.nextSibling;
    const _0x1fd63c = _0x3376f0.firstChild;
    const _0x27cd33 = _0x1fd63c.nextSibling;
    const _0x292695 = _0xbfbb09.nextSibling;
    const _0x5bdf66 = _0x58b4a5.nextSibling;
    const _0x5258ac = _0x5bdf66.firstChild;
    const _0x5227f0 = _0x5258ac.firstChild;
    const _0x22a9dd = _0x5227f0.nextSibling;
    const _0x373ed5 = _0x22a9dd.firstChild;
    const _0x311b45 = _0x373ed5.nextSibling;
    const _0x5abb0b = _0x22a9dd.nextSibling;
    const _0x11390c = _0x5258ac.nextSibling;
    _0x58b4a5.style.setProperty("width", "26.48vh");
    _0xbfbb09.style.setProperty("justify-content", "flex-start");
    _0x4df1dd(_0xbfbb09, _0x2c30e9(_0x34f66b, {
      get when() {
        return Q("manage_ranks");
      },
      get children() {
        const _0x37a235 = u4();
        _0x37a235.$$click = () => {
          _0x1ecdc9({
            title: "Create Rank",
            description: "Create a new rank for your gang",
            inputs: {
              name: {
                placeholder: "Rank Name",
                value: ""
              }
            },
            onConfirm: async () => {
              await _0x27d87e(async () => {
                await _0x405246.execute("gangs:createRank", _0x37ef1b.inputs.name.value);
              });
            }
          });
        };
        _0x2dcf48(() => e(_0x37a235, O.create));
        return _0x37a235;
      }
    }), null);
    _0x4df1dd(_0x292695, _0x2c30e9(_0x3b53e8, {
      get each() {
        return _0x147689.ranks;
      },
      children: (_0x52a4a8, _0x3668f1) => (() => {
        const _0x5b0980 = f4();
        const _0x4ffbb9 = _0x5b0980.firstChild;
        _0x5b0980.$$click = () => {
          _0x41d5fd(_0x52a4a8.id);
        };
        _0x4df1dd(_0x4ffbb9, () => _0x3668f1() + 1);
        _0x4df1dd(_0x5b0980, () => _0x52a4a8.name, null);
        _0x4df1dd(_0x5b0980, _0x2c30e9(_0x34f66b, {
          get when() {
            return _0x268e8d(() => _0x52a4a8.name !== "Leader")() && Q("manage_ranks");
          },
          get children() {
            const _0x32b04d = C4();
            _0x32b04d.$$click = async () => {
              await _0x27d87e(async () => {
                await _0x405246.execute("gangs:deleteRank", _0x52a4a8.id);
              });
            };
            _0x2dcf48(() => e(_0x32b04d, O.delete));
            return _0x32b04d;
          }
        }), null);
        _0x2dcf48(_0x1cdbe5 => {
          const _0x48be89 = O.rang;
          const _0x5adb4b = {
            [O.active]: _0x42bceb() === _0x52a4a8.id
          };
          const _0x5944ea = O.indicator;
          if (_0x48be89 !== _0x1cdbe5._v$17) {
            e(_0x5b0980, _0x1cdbe5._v$17 = _0x48be89);
          }
          _0x1cdbe5._v$18 = _0x434107(_0x5b0980, _0x5adb4b, _0x1cdbe5._v$18);
          if (_0x5944ea !== _0x1cdbe5._v$19) {
            e(_0x4ffbb9, _0x1cdbe5._v$19 = _0x5944ea);
          }
          return _0x1cdbe5;
        }, {
          _v$17: undefined,
          _v$18: undefined,
          _v$19: undefined
        });
        return _0x5b0980;
      })()
    }));
    _0x5bdf66.style.setProperty("width", "73.79vh");
    _0x5258ac.style.setProperty("justify-content", "flex-start");
    _0x5abb0b.$$click = () => {
      _0x44b77a("management");
    };
    _0x4df1dd(_0x11390c, _0x2c30e9(_0x3b53e8, {
      each: _0x48b83d,
      children: (_0x43603c, _0x3efc0b) => _0x2c30e9(_0x34f66b, {
        get when() {
          return Q("manage_ranks");
        },
        get children() {
          const _0x27fe30 = g4();
          const _0x433f65 = _0x27fe30.firstChild;
          const _0x29eb0e = _0x433f65.nextSibling;
          const _0x3c78b7 = _0x29eb0e.firstChild;
          const _0x36f603 = _0x3c78b7.nextSibling;
          _0x4df1dd(_0x27fe30, () => _0x43603c.label, _0x433f65);
          _0x4df1dd(_0x433f65, () => _0x43603c.description);
          _0x3c78b7.addEventListener("change", async _0x106cb1 => {
            await _0x405246.execute("gangs:setRolePermission", _0x42bceb(), _0x43603c.id, _0x106cb1.target.checked);
            const _0x168bd7 = await _0x405246.execute("gangs:getMyGang");
            _0x321b76(_0x168bd7);
          });
          _0x2dcf48(_0xd61383 => {
            const _0x5459c2 = O.permission;
            const _0x3456d2 = O.text;
            const _0x40c841 = {
              [O.grey]: true
            };
            const _0xa54706 = O.switch;
            const _0x19784f = O.slider;
            if (_0x5459c2 !== _0xd61383._v$20) {
              e(_0x27fe30, _0xd61383._v$20 = _0x5459c2);
            }
            if (_0x3456d2 !== _0xd61383._v$21) {
              e(_0x433f65, _0xd61383._v$21 = _0x3456d2);
            }
            _0xd61383._v$22 = _0x434107(_0x433f65, _0x40c841, _0xd61383._v$22);
            if (_0xa54706 !== _0xd61383._v$23) {
              e(_0x29eb0e, _0xd61383._v$23 = _0xa54706);
            }
            if (_0x19784f !== _0xd61383._v$24) {
              e(_0x36f603, _0xd61383._v$24 = _0x19784f);
            }
            return _0xd61383;
          }, {
            _v$20: undefined,
            _v$21: undefined,
            _v$22: undefined,
            _v$23: undefined,
            _v$24: undefined
          });
          _0x2dcf48(() => _0x3c78b7.checked = e3(_0x42bceb(), _0x43603c.id));
          return _0x27fe30;
        }
      })
    }));
    _0x2dcf48(_0x2630af => {
      const _0xc050ef = O.members;
      const _0x4ea3d7 = O.row;
      const _0x1b8854 = O.content;
      const _0x18e690 = O.row;
      const _0x5504e4 = O.column;
      const _0x5e9a69 = O.text;
      const _0x302c1b = O.text;
      const _0x39f8bb = {
        [O.big]: true
      };
      const _0xc20515 = O.list;
      const _0x12bab7 = O.content;
      const _0x5ca9b9 = O.row;
      const _0x3e364f = O.column;
      const _0x52074d = O.text;
      const _0x526c05 = O.text;
      const _0x4e696b = {
        [O.big]: true
      };
      const _0x2195b9 = O.list;
      if (_0xc050ef !== _0x2630af._v$) {
        e(_0x9084db, _0x2630af._v$ = _0xc050ef);
      }
      if (_0x4ea3d7 !== _0x2630af._v$2) {
        e(_0xf94161, _0x2630af._v$2 = _0x4ea3d7);
      }
      if (_0x1b8854 !== _0x2630af._v$3) {
        e(_0x58b4a5, _0x2630af._v$3 = _0x1b8854);
      }
      if (_0x18e690 !== _0x2630af._v$4) {
        e(_0xbfbb09, _0x2630af._v$4 = _0x18e690);
      }
      if (_0x5504e4 !== _0x2630af._v$5) {
        e(_0x3376f0, _0x2630af._v$5 = _0x5504e4);
      }
      if (_0x5e9a69 !== _0x2630af._v$6) {
        e(_0x1fd63c, _0x2630af._v$6 = _0x5e9a69);
      }
      if (_0x302c1b !== _0x2630af._v$7) {
        e(_0x27cd33, _0x2630af._v$7 = _0x302c1b);
      }
      _0x2630af._v$8 = _0x434107(_0x27cd33, _0x39f8bb, _0x2630af._v$8);
      if (_0xc20515 !== _0x2630af._v$9) {
        e(_0x292695, _0x2630af._v$9 = _0xc20515);
      }
      if (_0x12bab7 !== _0x2630af._v$10) {
        e(_0x5bdf66, _0x2630af._v$10 = _0x12bab7);
      }
      if (_0x5ca9b9 !== _0x2630af._v$11) {
        e(_0x5258ac, _0x2630af._v$11 = _0x5ca9b9);
      }
      if (_0x3e364f !== _0x2630af._v$12) {
        e(_0x22a9dd, _0x2630af._v$12 = _0x3e364f);
      }
      if (_0x52074d !== _0x2630af._v$13) {
        e(_0x373ed5, _0x2630af._v$13 = _0x52074d);
      }
      if (_0x526c05 !== _0x2630af._v$14) {
        e(_0x311b45, _0x2630af._v$14 = _0x526c05);
      }
      _0x2630af._v$15 = _0x434107(_0x311b45, _0x4e696b, _0x2630af._v$15);
      if (_0x2195b9 !== _0x2630af._v$16) {
        e(_0x11390c, _0x2630af._v$16 = _0x2195b9);
      }
      return _0x2630af;
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
      _v$10: undefined,
      _v$11: undefined,
      _v$12: undefined,
      _v$13: undefined,
      _v$14: undefined,
      _v$15: undefined,
      _v$16: undefined
    });
    return _0x9084db;
  })();
}
_0x161141(["click"]);
const m4 = "_input_45sso_1";
const x4 = "_title_45sso_16";
const w4 = "_description_45sso_26";
const b4 = "_inputContainer_45sso_36";
const y4 = "_buttons_45sso_55";
const L4 = "_confirm_45sso_61";
const p4 = "_cancel_45sso_82";
const l1 = {
  input: m4,
  title: x4,
  description: w4,
  inputContainer: b4,
  buttons: y4,
  confirm: L4,
  cancel: p4
};
const k4 = _0x2f073b("<div class=\"w-full h-full flex justify-center items-center\"><div><div></div><div></div><div><div></div><div>Cancel");
const M4 = _0x2f073b("<div><input type=\"text\">");
function S4() {
  const {
    input: _0x4e2b87,
    setInput: _0xcc12a4
  } = J();
  return (() => {
    const _0x596895 = k4();
    const _0x49e873 = _0x596895.firstChild;
    const _0x5bf44f = _0x49e873.firstChild;
    const _0x5aefdf = _0x5bf44f.nextSibling;
    const _0x48e705 = _0x5aefdf.nextSibling;
    const _0x7ffd6b = _0x48e705.firstChild;
    const _0x2d00c6 = _0x7ffd6b.nextSibling;
    _0x4df1dd(_0x5bf44f, () => _0x4e2b87.title);
    _0x4df1dd(_0x5aefdf, () => _0x4e2b87.description);
    _0x4df1dd(_0x49e873, _0x2c30e9(_0x3b53e8, {
      get each() {
        return Object.entries(_0x4e2b87.inputs);
      },
      children: ([_0x171811, _0x192f7d]) => (() => {
        const _0x1262b4 = M4();
        const _0x360ae1 = _0x1262b4.firstChild;
        _0x401b0a(_0x360ae1, "id", _0x171811);
        _0x2dcf48(_0x8e5878 => {
          const _0x27099e = l1.inputContainer;
          const _0x53b4b3 = _0x192f7d.placeholder;
          if (_0x27099e !== _0x8e5878._v$7) {
            e(_0x1262b4, _0x8e5878._v$7 = _0x27099e);
          }
          if (_0x53b4b3 !== _0x8e5878._v$8) {
            _0x401b0a(_0x360ae1, "placeholder", _0x8e5878._v$8 = _0x53b4b3);
          }
          return _0x8e5878;
        }, {
          _v$7: undefined,
          _v$8: undefined
        });
        return _0x1262b4;
      })()
    }), _0x48e705);
    _0x7ffd6b.$$click = async () => {
      const _0x545032 = {};
      document.querySelectorAll("input").forEach(_0x148d35 => {
        _0x545032[_0x148d35.id] = {
          ..._0x148d35,
          value: _0x148d35.value
        };
      });
      _0xcc12a4({
        ..._0x545032,
        inputs: _0x545032
      });
      await _0x4e2b87.onConfirm();
      _0xcc12a4(_0xbd047({}));
    };
    _0x4df1dd(_0x7ffd6b, () => _0x4e2b87.title);
    _0x2d00c6.$$click = async () => {
      if (_0x4e2b87.onCancel) {
        await _0x4e2b87.onCancel();
      }
      _0xcc12a4(_0xbd047({}));
    };
    _0x2dcf48(_0x1779c8 => {
      const _0x4a5b4d = l1.input;
      const _0x86d0d3 = l1.title;
      const _0x4fc3ea = l1.description;
      const _0x260c34 = l1.buttons;
      const _0x59274d = l1.confirm;
      const _0x135afa = l1.cancel;
      if (_0x4a5b4d !== _0x1779c8._v$) {
        e(_0x49e873, _0x1779c8._v$ = _0x4a5b4d);
      }
      if (_0x86d0d3 !== _0x1779c8._v$2) {
        e(_0x5bf44f, _0x1779c8._v$2 = _0x86d0d3);
      }
      if (_0x4fc3ea !== _0x1779c8._v$3) {
        e(_0x5aefdf, _0x1779c8._v$3 = _0x4fc3ea);
      }
      if (_0x260c34 !== _0x1779c8._v$4) {
        e(_0x48e705, _0x1779c8._v$4 = _0x260c34);
      }
      if (_0x59274d !== _0x1779c8._v$5) {
        e(_0x7ffd6b, _0x1779c8._v$5 = _0x59274d);
      }
      if (_0x135afa !== _0x1779c8._v$6) {
        e(_0x2d00c6, _0x1779c8._v$6 = _0x135afa);
      }
      return _0x1779c8;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined
    });
    return _0x596895;
  })();
}
_0x161141(["click"]);
const B4 = "_notes_14keb_1";
const Z4 = "_row_14keb_12";
const G4 = "_full_14keb_20";
const P4 = "_list_14keb_23";
const j4 = "_announcement_14keb_33";
const I4 = "_box_14keb_42";
const A4 = "_text_14keb_51";
const T4 = "_big_14keb_59";
const V4 = "_player_14keb_63";
const q4 = "_grey_14keb_67";
const U4 = "_addButton_14keb_71";
const H4 = "_info_14keb_102";
const F4 = "_main_14keb_111";
const O4 = "_status_14keb_120";
const N4 = "_online_14keb_134";
const z4 = "_offline_14keb_139";
const R4 = "_grade_14keb_144";
const D4 = "_description_14keb_149";
const E4 = "_desc_14keb_149";
const X4 = "_fullNote_14keb_173";
const Y4 = "_descContainer_14keb_178";
const T = {
  notes: B4,
  row: Z4,
  full: G4,
  list: P4,
  announcement: j4,
  box: I4,
  text: A4,
  big: T4,
  player: V4,
  grey: q4,
  addButton: U4,
  delete: "_delete_14keb_91",
  info: H4,
  main: F4,
  status: O4,
  online: N4,
  offline: z4,
  grade: R4,
  description: D4,
  desc: E4,
  fullNote: X4,
  descContainer: Y4
};
const K4 = _0x2f073b("<div>");
const W4 = _0x2f073b("<div>Delete");
const J4 = _0x2f073b("<div><div><svg width=\"2.03vh\" height=\"1.85vh\" viewBox=\"0 0 22 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.1108 0.046599C18.0206 0.0751893 15.7069 1.30009 12.9693 2.76859L7.99174 5.43863L7.99108 9.20959L7.99038 12.9806L12.9121 15.6424C15.619 17.1064 17.933 18.3332 18.0543 18.3685C18.3334 18.45 18.7646 18.4146 19.0994 18.2828C19.3912 18.1679 19.6819 17.8809 19.8513 17.5402L19.9617 17.3184L19.9739 9.31035C19.9876 0.410583 20.0114 1.08684 19.6669 0.607856C19.337 0.149327 18.612 -0.112126 18.1108 0.046599ZM1.21101 5.81035C0.75859 5.90455 0.335553 6.24793 0.130266 6.68768L0 6.96673V9.20959V11.4525L0.130266 11.7315C0.286492 12.0661 0.551148 12.3295 0.908115 12.5056L1.17146 12.6355L4.08839 12.6499L7.00532 12.6643V9.21171V5.75904L4.20554 5.76446C2.66568 5.76742 1.31813 5.78807 1.21101 5.81035ZM20.9691 9.20959C20.9691 10.6478 20.9799 10.9349 21.0341 10.9349C21.0699 10.9349 21.2001 10.8628 21.3236 10.7747C21.8129 10.4255 22 9.99262 22 9.20959C22 8.42656 21.8129 7.99372 21.3236 7.64452C21.2001 7.55643 21.0699 7.48432 21.0341 7.48432C20.9799 7.48432 20.9691 7.77135 20.9691 9.20959ZM3.24157 13.683C3.23023 13.7033 3.55055 14.9289 3.95339 16.4065C4.75889 19.3608 4.78349 19.4251 5.21824 19.7157C5.58992 19.9641 5.84924 20.016 6.62188 19.9962C7.41885 19.9758 7.59963 19.9153 7.97824 19.5428C8.33695 19.1898 8.53333 18.647 8.47091 18.181C8.44584 17.994 7.36032 13.939 7.28657 13.7569L7.24163 13.646H5.25188C4.15755 13.646 3.25291 13.6626 3.24157 13.683Z\" fill=\"white\" fill-opacity=\"0.12\"></path></svg></div><div><div><div></div><div><div></div><div></div></div></div><div><div></div><div>Open");
const Q4 = _0x2f073b("<div class=\"w-full h-full flex flex-col justify-start items-center\"><div><div><svg width=\"3.24vh\" height=\"3.14vh\" viewBox=\"0 0 35 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26.8665 0.090118C26.7092 0.207819 23.8859 4.5424 23.8316 4.74967C23.74 5.09886 24.2675 5.49521 24.6168 5.33965C24.8473 5.23692 27.6916 0.892334 27.7301 0.583945C27.7828 0.162474 27.2087 -0.165788 26.8665 0.090118ZM14.8371 0.427687C14.6218 0.556724 14.5039 0.940128 14.5039 1.51142C14.5039 2.88668 15.2889 5.25358 16.796 8.42262C17.331 9.5475 17.404 9.66556 17.5389 9.62511C18.2491 9.41217 18.5522 9.35836 19.0483 9.35696C20.3339 9.35332 21.4751 9.95666 22.2067 11.0267C22.5729 11.5623 22.752 12.122 22.7882 12.8434C22.844 13.9556 22.4831 14.872 21.6783 15.6613C21.4323 15.9025 21.231 16.1129 21.231 16.1286C21.231 16.1857 22.554 18.0377 23.0831 18.7215C25.1161 21.3483 26.9604 23.0251 27.8168 23.0251C28.4289 23.0251 28.6708 22.4642 28.5297 21.372C28.0112 17.3578 23.1112 8.23439 18.7437 3.15161C17.9484 2.22595 16.6264 0.992961 16.0835 0.670507C15.5975 0.381852 15.0814 0.281295 14.8371 0.427687ZM13.1113 1.99475C12.6253 2.72573 12.2516 3.61416 11.3697 6.13564C10.3645 9.00987 10.1166 9.63805 9.58355 10.6632C8.94691 11.8875 8.20264 12.9434 7.39797 13.7636C7.20353 13.9618 7.05632 14.1545 7.0707 14.1919C7.08516 14.2292 8.22411 16.1704 9.60173 18.5056C11.7948 22.223 12.1243 22.7463 12.2496 22.7112C13.3972 22.3896 14.992 22.2532 16.599 22.3393C17.8049 22.4039 18.3847 22.4918 21.1236 23.0255C22.3044 23.2556 23.5926 23.4912 23.9862 23.549C24.727 23.6577 26.3856 23.6947 26.381 23.6024C26.3795 23.5735 26.229 23.4572 26.0464 23.344C25.8638 23.2307 25.3933 22.8371 25.0008 22.4693C20.405 18.1625 14.0097 6.86998 13.4463 2.06697L13.3889 1.57713L13.1113 1.99475ZM29.8545 6.59028C28.5556 7.32874 27.4537 7.98289 27.4057 8.04391C27.1534 8.36524 27.4507 8.91715 27.8699 8.90553C28.0773 8.89973 32.4288 6.49119 32.735 6.21268C32.9382 6.0278 32.9552 5.60493 32.766 5.43755C32.4285 5.13882 32.3596 5.16611 29.8545 6.59028ZM31.0741 12.4294C29.8957 12.485 29.083 12.5529 28.9856 12.6038C28.6232 12.7935 28.6205 13.3093 28.9807 13.54C29.1347 13.6387 29.3953 13.6388 31.7212 13.5418C33.1349 13.4828 34.3918 13.419 34.5143 13.4C34.8154 13.3533 35 13.1371 35 12.8309C35 12.6536 34.9517 12.5422 34.8346 12.4495C34.6357 12.292 34.0557 12.2889 31.0741 12.4294ZM4.25263 15.9196C1.93881 17.2255 1.82466 17.3008 1.28113 17.8808C0.30928 18.918 -0.160112 20.3877 0.0489998 21.7388C0.514241 24.7443 3.58279 26.5768 6.49318 25.5871C6.91598 25.4433 10.9447 23.2372 11.026 23.1049C11.0496 23.0664 6.53619 15.363 6.26438 14.978C6.17063 14.8451 6.08826 14.8837 4.25263 15.9196ZM9.20812 25.3717C8.36187 25.8516 7.44405 26.3372 7.16853 26.4509L6.66758 26.6576L6.68068 26.9364C6.70014 27.3498 7.22557 28.8299 7.66462 29.7079C8.316 31.0106 9.0836 32.057 10.1465 33.0914C10.8278 33.7544 11.223 33.9549 11.9276 33.9948C12.6171 34.0338 13.1304 33.8559 13.6524 33.397C14.1849 32.9289 14.4324 32.3904 14.4315 31.7022C14.4308 31.0406 14.2516 30.6395 13.6424 29.9349C12.4257 28.5276 11.3611 26.5019 10.9947 24.8969C10.9442 24.6756 10.8678 24.4956 10.8248 24.4969C10.7819 24.4981 10.0544 24.8918 9.20812 25.3717Z\" fill=\"white\" fill-opacity=\"0.12\"></path></svg><div><div></div><div><div></div><div></div></div></div></div><div><div>");
const e5 = _0x2f073b("<div>Create");
const t5 = _0x2f073b("<div><div><div><svg width=\"4.16vh\" height=\"4.07vh\" viewBox=\"0 0 45 44\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M34.5427 0.116623C34.3405 0.268943 30.7104 5.8784 30.6406 6.14664C30.5229 6.59852 31.2011 7.11145 31.6501 6.91013C31.9466 6.77719 35.6035 1.15478 35.653 0.755694C35.7207 0.210261 34.9826 -0.214549 34.5427 0.116623ZM19.0763 0.553477C18.7994 0.720467 18.6479 1.21664 18.6479 1.95596C18.6479 3.7357 19.6572 6.79875 21.5949 10.8999C22.2827 12.3556 22.3766 12.5084 22.55 12.456C23.4631 12.1805 23.8528 12.1108 24.4906 12.109C26.1436 12.1043 27.6108 12.8851 28.5515 14.2699C29.0223 14.963 29.2526 15.6872 29.2991 16.6209C29.3708 18.0602 28.9068 19.2461 27.872 20.2675C27.5558 20.5797 27.297 20.852 27.297 20.8723C27.297 20.9461 28.998 23.343 29.6783 24.2278C32.2922 27.6273 34.6634 29.7971 35.7644 29.7971C36.5514 29.7971 36.8624 29.0713 36.681 27.6579C36.0144 22.463 29.7144 10.6563 24.0991 4.07855C23.0765 2.88065 21.3768 1.28501 20.6788 0.867715C20.0539 0.494161 19.3904 0.364029 19.0763 0.553477ZM16.8573 2.58144C16.2325 3.52742 15.7521 4.67714 14.6182 7.94024C13.3257 11.6598 13.0071 12.4728 12.3217 13.7995C11.5032 15.3839 10.5463 16.7503 9.51167 17.8117C9.26168 18.0682 9.07241 18.3176 9.0909 18.366C9.10949 18.4143 10.5739 20.9264 12.3451 23.9484C15.1648 28.7592 15.5884 29.4364 15.7495 29.391C17.225 28.9748 19.2755 28.7983 21.3416 28.9097C22.892 28.9933 23.6375 29.107 27.1589 29.7977C28.6771 30.0955 30.3333 30.4004 30.8394 30.4752C31.7919 30.6159 33.9244 30.6638 33.9184 30.5442C33.9166 30.5068 33.7231 30.3564 33.4882 30.2099C33.2535 30.0633 32.6485 29.5539 32.1439 29.0779C26.235 23.5044 18.0124 8.89056 17.2881 2.6749L17.2143 2.04099L16.8573 2.58144ZM38.3844 8.52859C36.7144 9.48426 35.2976 10.3308 35.2359 10.4098C34.9115 10.8256 35.2938 11.5398 35.8327 11.5248C36.0993 11.5173 41.6941 8.40036 42.0878 8.03994C42.3491 7.80069 42.371 7.25344 42.1278 7.03683C41.6938 6.65023 41.6052 6.68555 38.3844 8.52859ZM39.9524 16.0851C38.4373 16.1571 37.3924 16.2449 37.2672 16.3108C36.8013 16.5562 36.7978 17.2237 37.2609 17.5223C37.4589 17.6501 37.794 17.6503 40.7844 17.5247C42.602 17.4483 44.218 17.3657 44.3755 17.3412C44.7627 17.2808 45 17.001 45 16.6047C45 16.3753 44.9379 16.231 44.7874 16.1111C44.5316 15.9073 43.7859 15.9033 39.9524 16.0851ZM5.46767 20.6018C2.49275 22.2918 2.34599 22.3893 1.64716 23.1399C0.397646 24.4821 -0.205858 26.3841 0.0629997 28.1326C0.661167 32.0221 4.60644 34.3935 8.34837 33.1128C8.89197 32.9267 14.0718 30.0716 14.1763 29.9005C14.2067 29.8507 8.40367 19.8815 8.05421 19.3833C7.93367 19.2113 7.82777 19.2612 5.46767 20.6018ZM11.839 32.8339C10.751 33.455 9.57093 34.0835 9.21668 34.2305L8.5726 34.498L8.58944 34.8589C8.61447 35.3939 9.29002 37.3092 9.85451 38.4455C10.692 40.1313 11.6789 41.4855 13.0456 42.8242C13.9215 43.6822 14.4296 43.9416 15.3355 43.9933C16.222 44.0437 16.8819 43.8135 17.5531 43.2196C18.2377 42.6139 18.556 41.9169 18.5548 41.0264C18.5538 40.1702 18.3235 39.6511 17.5402 38.7392C15.9759 36.9181 14.6071 34.2965 14.1361 32.2196C14.0711 31.9331 13.9729 31.7002 13.9176 31.7019C13.8624 31.7035 12.9271 32.2129 11.839 32.8339Z\" fill=\"white\" fill-opacity=\"0.12\"></path></svg><div><div>Recent</div><div>Notes</div></div><div class=\"gang-backbutton\">Back");
const [s1, B1] = _0x36299c({});
function n5() {
  const {
    myGang: _0x49109b,
    setInput: _0x9be713,
    fetchGang: _0x43385f
  } = J();
  return (() => {
    const _0x5d33b2 = K4();
    _0x4df1dd(_0x5d33b2, _0x2c30e9(_0x3b53e8, {
      get each() {
        return _0x49109b.notes;
      },
      children: _0x23d252 => {
        const _0x5d1e54 = _0x49109b.members.find(_0x4e0d22 => _0x4e0d22.chipId === _0x23d252.author_chipId);
        if (_0x5d1e54) {
          return (() => {
            const _0x141736 = J4();
            const _0x4dfc13 = _0x141736.firstChild;
            const _0x4aad61 = _0x4dfc13.nextSibling;
            const _0x206253 = _0x4aad61.firstChild;
            const _0x422870 = _0x206253.firstChild;
            const _0x5e245f = _0x422870.nextSibling;
            const _0x44c428 = _0x5e245f.firstChild;
            const _0x1c840b = _0x44c428.nextSibling;
            const _0x94f576 = _0x206253.nextSibling;
            const _0x2e6a56 = _0x94f576.firstChild;
            const _0x2b7959 = _0x2e6a56.nextSibling;
            _0x4df1dd(_0x422870, () => _0x5d1e54.name);
            _0x4df1dd(_0x44c428, () => _0x5d1e54.online ? "online" : "offline");
            _0x4df1dd(_0x1c840b, () => new Date(_0x23d252.createdAt).toDateString());
            _0x4df1dd(_0x2e6a56, () => _0x23d252.text);
            _0x2b7959.$$click = () => {
              B1(_0x23d252);
            };
            _0x4df1dd(_0x94f576, _0x2c30e9(_0x34f66b, {
              get when() {
                return Q("delete_notes");
              },
              get children() {
                const _0x5f5409 = W4();
                _0x5f5409.$$click = () => {
                  _0x9be713({
                    title: "Confirm",
                    description: "Are you sure you want to delete this note?",
                    inputs: {},
                    onConfirm: async () => {
                      await _0x43385f(async () => {
                        await _0x405246.execute("gangs:deleteNote", _0x23d252.id);
                      });
                    }
                  });
                };
                _0x5f5409.style.setProperty("margin-left", "1vh");
                _0x2dcf48(_0xc6de80 => {
                  const _0x116326 = T.addButton;
                  const _0x54a4fc = {
                    [T.delete]: true
                  };
                  if (_0x116326 !== _0xc6de80._v$) {
                    e(_0x5f5409, _0xc6de80._v$ = _0x116326);
                  }
                  _0xc6de80._v$2 = _0x434107(_0x5f5409, _0x54a4fc, _0xc6de80._v$2);
                  return _0xc6de80;
                }, {
                  _v$: undefined,
                  _v$2: undefined
                });
                return _0x5f5409;
              }
            }), null);
            _0x2dcf48(_0x288365 => {
              const _0x694df8 = T.announcement;
              const _0x54a68c = T.box;
              const _0x53540f = T.info;
              const _0x20e507 = T.main;
              const _0x585512 = T.text;
              const _0x566b64 = T.row;
              const _0x52c98a = T.status;
              const _0x3b8644 = {
                [T.online]: true
              };
              const _0x569a9c = T.status;
              const _0x3d1e75 = T.description;
              const _0x1caecb = T.desc;
              const _0x425464 = T.addButton;
              if (_0x694df8 !== _0x288365._v$3) {
                e(_0x141736, _0x288365._v$3 = _0x694df8);
              }
              if (_0x54a68c !== _0x288365._v$4) {
                e(_0x4dfc13, _0x288365._v$4 = _0x54a68c);
              }
              if (_0x53540f !== _0x288365._v$5) {
                e(_0x4aad61, _0x288365._v$5 = _0x53540f);
              }
              if (_0x20e507 !== _0x288365._v$6) {
                e(_0x206253, _0x288365._v$6 = _0x20e507);
              }
              if (_0x585512 !== _0x288365._v$7) {
                e(_0x422870, _0x288365._v$7 = _0x585512);
              }
              if (_0x566b64 !== _0x288365._v$8) {
                e(_0x5e245f, _0x288365._v$8 = _0x566b64);
              }
              if (_0x52c98a !== _0x288365._v$9) {
                e(_0x44c428, _0x288365._v$9 = _0x52c98a);
              }
              _0x288365._v$10 = _0x434107(_0x44c428, _0x3b8644, _0x288365._v$10);
              if (_0x569a9c !== _0x288365._v$11) {
                e(_0x1c840b, _0x288365._v$11 = _0x569a9c);
              }
              if (_0x3d1e75 !== _0x288365._v$12) {
                e(_0x94f576, _0x288365._v$12 = _0x3d1e75);
              }
              if (_0x1caecb !== _0x288365._v$13) {
                e(_0x2e6a56, _0x288365._v$13 = _0x1caecb);
              }
              if (_0x425464 !== _0x288365._v$14) {
                e(_0x2b7959, _0x288365._v$14 = _0x425464);
              }
              return _0x288365;
            }, {
              _v$3: undefined,
              _v$4: undefined,
              _v$5: undefined,
              _v$6: undefined,
              _v$7: undefined,
              _v$8: undefined,
              _v$9: undefined,
              _v$10: undefined,
              _v$11: undefined,
              _v$12: undefined,
              _v$13: undefined,
              _v$14: undefined
            });
            return _0x141736;
          })();
        } else {
          return null;
        }
      }
    }));
    _0x2dcf48(() => e(_0x5d33b2, T.list));
    return _0x5d33b2;
  })();
}
function i5() {
  const {
    myGang: _0x20225f
  } = J();
  const _0x4ae535 = _0x20225f.members.find(_0x1f2963 => _0x1f2963.chipId === s1.author_chipId);
  if (_0x4ae535) {
    return (() => {
      const _0x2bb18e = Q4();
      const _0x126551 = _0x2bb18e.firstChild;
      const _0x4d671e = _0x126551.firstChild;
      const _0x4ddf54 = _0x4d671e.firstChild;
      const _0x1e8bab = _0x4ddf54.nextSibling;
      const _0x21b05b = _0x1e8bab.firstChild;
      const _0x22020e = _0x21b05b.nextSibling;
      const _0x75f68d = _0x22020e.firstChild;
      const _0x33cfad = _0x75f68d.nextSibling;
      const _0x42266b = _0x4d671e.nextSibling;
      const _0x4e90e0 = _0x42266b.firstChild;
      _0x4d671e.style.setProperty("padding", "1vh");
      _0x4df1dd(_0x21b05b, () => _0x4ae535.name);
      _0x4df1dd(_0x75f68d, () => _0x4ae535.online ? "online" : "offline");
      _0x4df1dd(_0x33cfad, () => new Date(s1.createdAt).toDateString());
      _0x4df1dd(_0x4e90e0, () => s1.text);
      _0x2dcf48(_0x423856 => {
        const _0x53b4f4 = T.fullNote;
        const _0x2675a5 = T.info;
        const _0x7c2654 = T.main;
        const _0x201fe6 = T.text;
        const _0x1ce14f = T.row;
        const _0x5ab7e6 = T.status;
        const _0x5c0f5e = {
          [T.online]: true
        };
        const _0x74dd6a = T.status;
        const _0x710dd9 = T.descContainer;
        const _0x2403f8 = T.description;
        if (_0x53b4f4 !== _0x423856._v$15) {
          e(_0x126551, _0x423856._v$15 = _0x53b4f4);
        }
        if (_0x2675a5 !== _0x423856._v$16) {
          e(_0x4d671e, _0x423856._v$16 = _0x2675a5);
        }
        if (_0x7c2654 !== _0x423856._v$17) {
          e(_0x1e8bab, _0x423856._v$17 = _0x7c2654);
        }
        if (_0x201fe6 !== _0x423856._v$18) {
          e(_0x21b05b, _0x423856._v$18 = _0x201fe6);
        }
        if (_0x1ce14f !== _0x423856._v$19) {
          e(_0x22020e, _0x423856._v$19 = _0x1ce14f);
        }
        if (_0x5ab7e6 !== _0x423856._v$20) {
          e(_0x75f68d, _0x423856._v$20 = _0x5ab7e6);
        }
        _0x423856._v$21 = _0x434107(_0x75f68d, _0x5c0f5e, _0x423856._v$21);
        if (_0x74dd6a !== _0x423856._v$22) {
          e(_0x33cfad, _0x423856._v$22 = _0x74dd6a);
        }
        if (_0x710dd9 !== _0x423856._v$23) {
          e(_0x42266b, _0x423856._v$23 = _0x710dd9);
        }
        if (_0x2403f8 !== _0x423856._v$24) {
          e(_0x4e90e0, _0x423856._v$24 = _0x2403f8);
        }
        return _0x423856;
      }, {
        _v$15: undefined,
        _v$16: undefined,
        _v$17: undefined,
        _v$18: undefined,
        _v$19: undefined,
        _v$20: undefined,
        _v$21: undefined,
        _v$22: undefined,
        _v$23: undefined,
        _v$24: undefined
      });
      return _0x2bb18e;
    })();
  } else {
    return null;
  }
}
function r5() {
  const {
    input: _0x32e6ed,
    setInput: _0x1b733e,
    fetchGang: _0x3f2cd8,
    setPage: _0x4f7274
  } = J();
  return (() => {
    const _0x43c062 = t5();
    const _0x3799a4 = _0x43c062.firstChild;
    const _0x590a3e = _0x3799a4.firstChild;
    const _0x136592 = _0x590a3e.firstChild;
    const _0x20fbd4 = _0x136592.nextSibling;
    const _0x49ecf1 = _0x20fbd4.firstChild;
    const _0x1851be = _0x49ecf1.nextSibling;
    const _0x68a86b = _0x20fbd4.nextSibling;
    _0x590a3e.style.setProperty("gap", "1.5vh");
    _0x4df1dd(_0x590a3e, _0x2c30e9(_0x34f66b, {
      get when() {
        return Q("add_notes");
      },
      get children() {
        const _0x2fb6a1 = e5();
        _0x2fb6a1.$$click = () => {
          _0x1b733e({
            title: "Create",
            description: "Create a anote for your gang.",
            inputs: {
              text: {
                placeholder: "Note Text",
                value: ""
              }
            },
            onConfirm: async () => {
              await _0x3f2cd8(async () => {
                await _0x405246.execute("gangs:addNote", _0x32e6ed.inputs.text.value);
              });
            }
          });
        };
        _0x2dcf48(() => e(_0x2fb6a1, T.addButton));
        return _0x2fb6a1;
      }
    }), _0x68a86b);
    _0x68a86b.$$click = () => {
      if (Object.entries(s1).length > 0) {
        B1(_0xbd047({}));
      } else {
        _0x4f7274("home");
      }
    };
    _0x4df1dd(_0x43c062, _0x2c30e9(_0x34f66b, {
      get when() {
        return Object.entries(s1).length === 0;
      },
      get children() {
        return _0x2c30e9(n5, {});
      }
    }), null);
    _0x4df1dd(_0x43c062, _0x2c30e9(_0x34f66b, {
      get when() {
        return Object.entries(s1).length > 0;
      },
      get children() {
        return _0x2c30e9(i5, {});
      }
    }), null);
    _0x2dcf48(_0x1b0c33 => {
      const _0x4b03d8 = T.notes;
      const _0x3b703a = T.row;
      const _0x17417c = {
        [T.full]: true
      };
      const _0x4e3381 = T.row;
      const _0x4432e4 = T.column;
      const _0x2f6344 = T.text;
      const _0x3b120d = T.text;
      const _0x4a8294 = {
        [T.big]: true
      };
      if (_0x4b03d8 !== _0x1b0c33._v$25) {
        e(_0x43c062, _0x1b0c33._v$25 = _0x4b03d8);
      }
      if (_0x3b703a !== _0x1b0c33._v$26) {
        e(_0x3799a4, _0x1b0c33._v$26 = _0x3b703a);
      }
      _0x1b0c33._v$27 = _0x434107(_0x3799a4, _0x17417c, _0x1b0c33._v$27);
      if (_0x4e3381 !== _0x1b0c33._v$28) {
        e(_0x590a3e, _0x1b0c33._v$28 = _0x4e3381);
      }
      if (_0x4432e4 !== _0x1b0c33._v$29) {
        e(_0x20fbd4, _0x1b0c33._v$29 = _0x4432e4);
      }
      if (_0x2f6344 !== _0x1b0c33._v$30) {
        e(_0x49ecf1, _0x1b0c33._v$30 = _0x2f6344);
      }
      if (_0x3b120d !== _0x1b0c33._v$31) {
        e(_0x1851be, _0x1b0c33._v$31 = _0x3b120d);
      }
      _0x1b0c33._v$32 = _0x434107(_0x1851be, _0x4a8294, _0x1b0c33._v$32);
      return _0x1b0c33;
    }, {
      _v$25: undefined,
      _v$26: undefined,
      _v$27: undefined,
      _v$28: undefined,
      _v$29: undefined,
      _v$30: undefined,
      _v$31: undefined,
      _v$32: undefined
    });
    return _0x43c062;
  })();
}
_0x161141(["click"]);
const k1 = _0x2f073b("<div>");
function d5() {
  const {
    page: _0x1fb8f8,
    setPage: _0x44e1bd,
    fetchGang: _0x1e2afd,
    input: _0x3c1fbe,
    loading: _0x36c5a1
  } = J();
  _0x39e158(async () => {
    _0x44e1bd("");
    const _0x114c8a = await _0x1e2afd();
    _0x44e1bd(_0x114c8a ? "home" : "presentation");
  });
  return [_0x2c30e9(_0x34f66b, {
    get when() {
      return _0x1fb8f8() !== "";
    },
    get children() {
      const _0x290a3a = k1();
      _0x4df1dd(_0x290a3a, _0x2c30e9(e2, {}), null);
      _0x4df1dd(_0x290a3a, _0x2c30e9(_0x288eb6, {
        get fallback() {
          return _0x2c30e9(L1, {});
        },
        get children() {
          return [_0x2c30e9(_0x5d6d27, {
            get when() {
              return _0x1fb8f8() === "presentation";
            },
            get children() {
              return _0x2c30e9(P2, {});
            }
          }), _0x2c30e9(_0x5d6d27, {
            get when() {
              return _0x1fb8f8() === "home";
            },
            get children() {
              return _0x2c30e9(J3, {});
            }
          }), _0x2c30e9(_0x5d6d27, {
            get when() {
              return _0x1fb8f8() === "management";
            },
            get children() {
              return _0x2c30e9(xe, {});
            }
          }), _0x2c30e9(_0x5d6d27, {
            get when() {
              return _0x1fb8f8() === "members";
            },
            get children() {
              return _0x2c30e9(We, {});
            }
          }), _0x2c30e9(_0x5d6d27, {
            get when() {
              return _0x1fb8f8() === "permissions";
            },
            get children() {
              return _0x2c30e9(h4, {});
            }
          }), _0x2c30e9(_0x5d6d27, {
            get when() {
              return _0x1fb8f8() === "notes";
            },
            get children() {
              return _0x2c30e9(r5, {});
            }
          })];
        }
      }), null);
      _0x2dcf48(_0x3b2987 => {
        const _0x3f895c = C1.container;
        const _0x38fa21 = {
          [C1.start]: true
        };
        if (_0x3f895c !== _0x3b2987._v$) {
          e(_0x290a3a, _0x3b2987._v$ = _0x3f895c);
        }
        _0x3b2987._v$2 = _0x434107(_0x290a3a, _0x38fa21, _0x3b2987._v$2);
        return _0x3b2987;
      }, {
        _v$: undefined,
        _v$2: undefined
      });
      return _0x290a3a;
    }
  }), _0x2c30e9(_0x34f66b, {
    get when() {
      return Object.entries(_0x3c1fbe).length > 0;
    },
    get children() {
      return _0x2c30e9(S4, {});
    }
  }), (() => {
    const _0x2632a2 = k1();
    _0x2632a2.style.setProperty("pointer-events", "none");
    _0x4df1dd(_0x2632a2, _0x2c30e9(L1, {}));
    _0x2dcf48(_0x3cd0a8 => {
      const _0x10ce7b = C1.container;
      const _0x3c868f = _0x36c5a1() ? 1 : 0;
      if (_0x10ce7b !== _0x3cd0a8._v$3) {
        e(_0x2632a2, _0x3cd0a8._v$3 = _0x10ce7b);
      }
      if (_0x3c868f !== _0x3cd0a8._v$4) {
        if ((_0x3cd0a8._v$4 = _0x3c868f) != null) {
          _0x2632a2.style.setProperty("opacity", _0x3c868f);
        } else {
          _0x2632a2.style.removeProperty("opacity");
        }
      }
      return _0x3cd0a8;
    }, {
      _v$3: undefined,
      _v$4: undefined
    });
    return _0x2632a2;
  })()];
}
const l5 = () => _0x2c30e9(_0x4fa70e, {
  get name() {
    return s5.name;
  },
  headerColor: "#02130F",
  get children() {
    return _0x2c30e9(I1, {
      get children() {
        return _0x2c30e9(d5, {});
      }
    });
  }
});
const o5 = "" + new URL("gangs-icon-7fcc1b65.png", import.meta.url).href;
const s5 = {
  icon: o5,
  enabled: true,
  onDock: false,
  name: "gangs",
  label: "Gangs",
  render: () => _0x2c30e9(l5, {})
};
export { s5 as default };