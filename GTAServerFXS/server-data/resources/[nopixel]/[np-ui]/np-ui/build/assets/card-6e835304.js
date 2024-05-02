import { R as _0xbf0bb6, j as _0x21f05e } from "./vendor-6c45b22f.js";
import { m as _0x307d5b } from "./styles-61014012.js";
const useStyles = _0x307d5b({});
const card = "";
const Card = _0x3fe841 => {
  const [_0x406c9b, _0x347a8f] = _0xbf0bb6.useState(_0x3fe841.flipped);
  const _0x365ab4 = _0xbf0bb6.useRef(null);
  const [_0x1c79e3, _0x5aed0b] = _0xbf0bb6.useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  const [_0x527b3b, _0x52972f] = _0xbf0bb6.useState({});
  const [_0x1754c7, _0x245646] = _0xbf0bb6.useState({});
  const _0x3edb3a = ["SHIT", "PR", "GOOD", "VG", "VG-EX", "EX", "EX-MT", "NM", "NM-MT", "MINT", "GEM-MT"];
  const _0x2730ae = useStyles();
  const _0x5760e6 = (_0x39a762 = null) => {
    if (!_0x406c9b) {
      _0x347a8f(_0x3fe841.flipped);
      if (!_0x39a762) {
        _0x3fe841.playSound(_0x3fe841.print.id, _0x3fe841.rarity, _0x3fe841.holo);
      } else if (_0x3fe841.onFlipped) {
        _0x3fe841.onFlipped(_0x3fe841.id);
      }
      if (_0x39a762) {
        _0x2fbd66(_0x39a762);
      }
    }
  };
  const _0x11f75b = () => {
    _0x5760e6();
  };
  _0xbf0bb6.useEffect(() => {
    if (_0x406c9b !== _0x3fe841.flipped) {
      _0x11f75b();
    }
  });
  const _0x38e39e = _0x609b79 => {
    if (_0x3fe841.inBinder) {
      _0x3fe841.spreadOutCards(_0x3fe841.print);
    } else {
      _0x5760e6(_0x609b79);
    }
  };
  const _0x4c56c8 = () => {
    if (!_0x3fe841.inBinder) {
      _0x5aed0b(_0x365ab4.current.getBoundingClientRect());
    }
    if (_0x3fe841.holo !== "none") {
      _0x3fe841.onHoverEnterHolo();
    }
  };
  const _0x4ffe08 = () => {
    if (!_0x3fe841.inBinder) {
      _0x52972f({
        transform: ""
      });
      _0x245646({
        opacity: "",
        backgroundImage: "",
        backgroundPosition: ""
      });
    }
    _0x3fe841.onHoverLeaveHolo();
  };
  let _0x22d829 = new Date().getTime();
  const _0x2fbd66 = _0x155858 => {
    if (_0x3fe841.inBinder) {
      return;
    }
    let _0x1d9529 = new Date().getTime();
    if (_0x1d9529 - _0x22d829 >= 25) {
      const _0x34eab1 = _0x155858.clientX - _0x1c79e3.x;
      const _0x4ceb23 = _0x155858.clientY - _0x1c79e3.y;
      const _0x4036c3 = {
        x: _0x34eab1 - _0x1c79e3.width / 2,
        y: _0x4ceb23 - _0x1c79e3.height / 2
      };
      const _0x292a1e = Math.sqrt(_0x4036c3.x ** 2 + _0x4036c3.y ** 2);
      let _0x3f2d10 = "scale3d(1.05, 1.05, 1.05)";
      if (_0x3fe841.flipped) {
        _0x3f2d10 = "scale3d(1.75, 1.75, 1.75)";
      }
      _0x52972f({
        ..._0x527b3b,
        transform: "\n      " + _0x3f2d10 + "\n      rotate3d(\n          " + _0x4036c3.y / 100 + ",\n          " + -_0x4036c3.x / 100 + ",\n          0,\n          " + Math.log(_0x292a1e) * 2 + "deg\n      )\n      "
      });
      let _0x373cf8 = _0x4036c3.x / _0x1c79e3.width * 90 + _0x4036c3.y / _0x1c79e3.height * 90 + 45;
      if (_0x3fe841.holo !== "none") {
        let _0x55cec2 = 2;
        if (_0x3fe841.holo === "holo") {
          _0x55cec2 = 3;
        }
        _0x245646({
          ..._0x1754c7,
          opacity: 0.666,
          backgroundImage: "linear-gradient(" + _0x373cf8 + "deg, transparent 0%, rgb(0, 231, 255) 15%, rgb(255, 0, 231) 35%,\n          transparent 50%, rgb(0, 231, 255) 65%, rgb(255, 0, 231) 85%, transparent 100%)",
          backgroundPosition: _0x4036c3.x / _0x55cec2 - _0x1c79e3.width / _0x55cec2 + "px " + (_0x4036c3.y / _0x55cec2 - _0x1c79e3.height / _0x55cec2) + "px"
        });
      }
    }
  };
  const _0x3db8f5 = _0x33c9ee => {
    if (_0x3fe841.flipped && _0x3fe841.markCardForSale && _0x33c9ee.button === 0) {
      if (_0x3fe841.holo === "none") {
        _0x3fe841.markCardForSale(_0x3fe841.id);
      }
    }
    if (_0x3fe841.flipped && _0x3fe841.showCard && _0x33c9ee.button === 1) {
      _0x3fe841.showCard({
        id: _0x3fe841.id,
        printId: _0x3fe841.print.id,
        printSetId: _0x3fe841.printSet.id,
        protection: _0x3fe841.protection,
        graded: _0x3fe841.graded,
        rarity: _0x3fe841.rarity,
        holo: _0x3fe841.holo,
        qualityGeneral: _0x3fe841.qualityGeneral,
        qualityCentering: _0x3fe841.qualityCentering,
        qualitySurface: _0x3fe841.qualitySurface,
        qualityEdge: _0x3fe841.qualityEdge,
        qualityCorners: _0x3fe841.qualityCorners,
        burnt: _0x3fe841.burnt
      });
    } else if (_0x3fe841.withdrawCard && _0x33c9ee.button === 2) {
      _0x3fe841.withdrawCard(_0x3fe841.print.id, _0x3fe841.cardId);
    }
  };
  const _0x5bf627 = () => {
    if (_0x3fe841.isNew) {
      _0x3fe841.onHoverEnterNew(_0x3fe841.newCardIds);
    }
  };
  const _0x17b46a = () => {
    if (_0x3fe841.burnt) {
      return 0;
    }
    return Math.round((_0x3fe841.qualityCentering + _0x3fe841.qualitySurface + _0x3fe841.qualityEdge + _0x3fe841.qualityCorners) / 4);
  };
  const _0x27b1e4 = () => {
    if (_0x3fe841.print.hiddenUnlessFound && _0x3fe841.count < 1) {
      return "https://npgtav.b-cdn.net/tcg-sets/999_mystery.webp";
    }
    return _0x3fe841.printSet.baseUrl + _0x3fe841.print.image;
  };
  return _0x21f05e.jsxs("div", {
    className: "card-sleeve" + (_0x3fe841.fade ? " card-sleeve--fade" : "") + (_0x3fe841.graded ? " card-sleeve--graded" : ""),
    onClick: _0x38e39e,
    onMouseEnter: _0x5bf627,
    children: [_0x3fe841.isNew && _0x21f05e.jsx("div", {
      className: "card-sleeve__new"
    }), _0x21f05e.jsxs("div", {
      ref: _0x365ab4,
      className: "card card--" + _0x3fe841.rarity + (_0x3fe841.holo !== "none" ? " card--holo" : "") + (_0x3fe841.flipped ? " active" : "") + (_0x3fe841.burn ? " card--burn" : "") + (_0x3fe841.burnt ? " card--burnt-" + (_0x3fe841.id % 4 + 1) : "") + (_0x3fe841.print.fullArt ? " card--full-art" : "") + (_0x3fe841.print.classModifier ? " card--" + _0x3fe841.print.classModifier : ""),
      onMouseEnter: _0x4c56c8,
      onMouseLeave: _0x4ffe08,
      onMouseMove: _0x2fbd66,
      onMouseUp: _0x3db8f5,
      style: _0x527b3b,
      children: [_0x21f05e.jsx("div", {
        className: "card__back",
        children: _0x21f05e.jsx("img", {
          src: _0x3fe841.printSet.baseUrl + _0x3fe841.printSet.backImage,
          alt: "back-img"
        })
      }), _0x3fe841.burnt && _0x21f05e.jsx("div", {
        className: "card__front-burnt",
        children: _0x21f05e.jsx("div", {
          className: "card__burn",
          children: _0x21f05e.jsxs("div", {
            className: "card__front-wrapper",
            "data-number": _0x3fe841.print.numbering,
            children: [_0x3fe841.holo !== "none" && _0x21f05e.jsx("div", {
              className: _0x2730ae.holo + " card__holo card__holo--" + _0x3fe841.holo,
              style: _0x1754c7
            }), _0x21f05e.jsx("img", {
              src: _0x27b1e4(),
              alt: "card-img"
            }), _0x3fe841.qualitySurface && _0x3fe841.qualitySurface < 10 && _0x21f05e.jsx("div", {
              className: "card__surface card__surface--" + _0x3fe841.qualitySurface
            }), _0x3fe841.qualityEdge && _0x3fe841.qualityEdge < 10 && _0x21f05e.jsx("div", {
              className: "card__edge card__edge--" + _0x3fe841.qualityEdge
            }), _0x3fe841.qualityCorners && _0x3fe841.qualityCorners < 10 && _0x21f05e.jsx("div", {
              className: "card__corners card__corners--" + _0x3fe841.qualityCorners
            }), _0x3fe841.qualityCentering && _0x3fe841.qualityCentering < 10 && _0x21f05e.jsx("div", {
              className: "card__centering card__centering--" + _0x3fe841.qualityCentering
            })]
          })
        })
      }), (!_0x3fe841.burnt || _0x3fe841.burn && _0x3fe841.burnt) && _0x21f05e.jsxs("div", {
        className: "card__front",
        "data-number": _0x3fe841.print.numbering,
        children: [_0x3fe841.holo !== "none" && _0x21f05e.jsx("div", {
          className: _0x2730ae.holo + " card__holo card__holo--" + _0x3fe841.holo,
          style: _0x1754c7
        }), _0x21f05e.jsx("img", {
          src: _0x27b1e4(),
          alt: "card-img"
        }), _0x3fe841.qualitySurface && _0x3fe841.qualitySurface < 10 && _0x21f05e.jsx("div", {
          className: "card__surface card__surface--" + _0x3fe841.qualitySurface
        }), _0x3fe841.qualityEdge && _0x3fe841.qualityEdge < 10 && _0x21f05e.jsx("div", {
          className: "card__edge card__edge--" + _0x3fe841.qualityEdge
        }), _0x3fe841.qualityCorners && _0x3fe841.qualityCorners < 10 && _0x21f05e.jsx("div", {
          className: "card__corners card__corners--" + _0x3fe841.qualityCorners
        }), _0x3fe841.qualityCentering && _0x3fe841.qualityCentering < 10 && _0x21f05e.jsx("div", {
          className: "card__centering card__centering--" + _0x3fe841.qualityCentering
        })]
      }), _0x3fe841.isMarkedForSale && _0x21f05e.jsx("div", {
        className: "card__marked-for-sale",
        children: _0x21f05e.jsx("i", {
          className: "fa fa-dollar-sign"
        })
      }), _0x3fe841.protection === "case" && _0x21f05e.jsx("div", {
        className: "card__case" + (_0x3fe841.graded && _0x17b46a() === 10 ? " card__case--perfect" : ""),
        children: _0x3fe841.graded && _0x21f05e.jsxs("div", {
          children: [_0x21f05e.jsxs("p", {
            className: "card__case-details left",
            children: ["2021 NPC - ", _0x3fe841.printSet.name, _0x21f05e.jsx("br", {}), _0x3fe841.print.name, _0x21f05e.jsx("br", {}), _0x3fe841.rarity.toUpperCase(), _0x3fe841.holo !== "none" && " - " + _0x3fe841.holo.toUpperCase()]
          }), _0x21f05e.jsxs("p", {
            className: "card__case-details right",
            children: ["#", _0x3fe841.print.numbering, _0x21f05e.jsx("br", {}), _0x3edb3a[_0x17b46a()], _0x21f05e.jsx("br", {}), _0x17b46a(), _0x21f05e.jsx("br", {}), _0x3fe841.id.toString().padStart(8, "0")]
          })]
        })
      }), _0x3fe841.burn && _0x21f05e.jsxs("div", {
        className: "fire",
        children: [_0x21f05e.jsx("audio", {
          autoPlay: true,
          src: "nui://np-tcg/public/common/burn-card.ogg"
        }), _0x21f05e.jsx("video", {
          autoPlay: true,
          muted: true,
          playsInline: true,
          children: _0x21f05e.jsx("source", {
            src: "nui://np-tcg/public/common/burn-card.webm",
            type: "video/webm"
          })
        })]
      })]
    }), _0x3fe841.count > 1 && _0x21f05e.jsx("div", {
      className: "card-sleeve__count",
      children: _0x3fe841.count > 99 ? "99+" : _0x3fe841.count
    })]
  });
};
export { Card as C };