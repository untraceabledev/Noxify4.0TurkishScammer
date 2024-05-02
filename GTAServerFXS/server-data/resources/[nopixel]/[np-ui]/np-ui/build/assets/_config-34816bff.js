import { j as _0x2aadd9, r as _0x5d079d, l as _0x3e9ac5, Q as _0x1f13b7, V as _0x80b736, ai as _0x51d16f, R as _0x5875cb } from "./vendor-6c45b22f.js";
import { A as _0x18e372 } from "./ui-app-6ee97cab.js";
import { n as _0x1c6aef, C as _0x3a6a83 } from "./index-d5aaa08b.js";
import { F as _0x5a0342 } from "./input-c6588ceb.js";
import { C as _0x3a6439 } from "./card-6e835304.js";
import { T as _0x10477f } from "./text-f7ee3e03.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
import "./translations-7705db3f.js";
import "./icon-7f5cdae2.js";
import "./format-10690d6f.js";
import "./styles-61014012.js";
import "./index-ae383549.js";
const spread = "";
const Spread = _0x5d0bdb => {
  const _0x4b0826 = {
    common: 3,
    uncommon: 2,
    rare: 1
  };
  const _0x521eb7 = {
    none: 3,
    reverse: 2,
    holo: 1
  };
  const _0x391383 = Object.entries(_0x5d0bdb.cards).map(_0x14b772 => {
    return {
      id: Number(_0x14b772[0]),
      ..._0x14b772[1]
    };
  });
  _0x391383.sort((_0x2cacb1, _0x1bda3a) => {
    return _0x4b0826[_0x2cacb1.rarity] - _0x4b0826[_0x1bda3a.rarity] || _0x521eb7[_0x2cacb1.holo] - _0x521eb7[_0x1bda3a.holo];
  });
  return _0x2aadd9.jsx("div", {
    className: "card-spread",
    children: _0x2aadd9.jsx("div", {
      className: "card-spread__wrapper",
      children: Object.values(_0x391383).map(_0xac3fde => _0x5d079d.createElement(_0x3a6439, {
        inSpread: true,
        cardId: _0xac3fde.id,
        isMarkedForSale: _0x5d0bdb.markedForSaleCardIds.includes(_0xac3fde.id),
        ..._0xac3fde,
        flipped: true,
        print: _0x5d0bdb.print,
        printSet: _0x5d0bdb.printSet,
        onHoverEnterHolo: _0x5d0bdb.onHoverEnterHolo,
        onHoverLeaveHolo: _0x5d0bdb.onHoverLeaveHolo,
        markCardForSale: _0x5d0bdb.markCardForSale,
        showCard: _0x5d0bdb.showCard,
        withdrawCard: _0x5d0bdb.withdrawCard,
        key: _0xac3fde.id
      }))
    })
  });
};
const Settings = _0x221b37 => {
  const _0x2ac4d1 = _0x221b37.sfxPacks.filter(_0x4f3ed5 => _0x221b37.enabledSfxPacks[_0x4f3ed5.id]).length <= 1;
  return _0x2aadd9.jsxs("div", {
    children: [_0x2aadd9.jsxs("div", {
      children: [_0x2aadd9.jsxs(_0x10477f, {
        i18n: "Binder Settings",
        i18nSource: "ui:text:tcg",
        variant: "h4",
        children: [_0x221b37.binderName || "Trading Card", " Binder Settings"]
      }), _0x2aadd9.jsx(_0x10477f, {
        i18n: true,
        i18nSource: "ui:text:tcg",
        variant: "h5",
        children: "Name"
      }), _0x2aadd9.jsx(_0x5a0342, {
        iconAdornment: "none",
        label: "",
        onChange: _0x42587b => {
          _0x221b37.updateBinderName(_0x42587b.target.value);
        },
        value: _0x221b37.binderName
      })]
    }), _0x2aadd9.jsxs("div", {
      children: [_0x2aadd9.jsx(_0x10477f, {
        i18n: true,
        i18nSource: "ui:text:tcg",
        variant: "h4",
        children: "Global Settings"
      }), _0x2aadd9.jsx(_0x10477f, {
        i18n: true,
        i18nSource: "ui:text:tcg",
        variant: "h5",
        children: "Volume"
      }), _0x2aadd9.jsx(_0x3e9ac5, {
        "aria-labelledby": "continuous-slider",
        onChange: (_0x2d532c, _0x9b3367) => _0x221b37.updateSettings({
          volume: Number(_0x9b3367)
        }),
        min: 0,
        max: 1,
        step: 0.05,
        value: _0x221b37.volume
      }), _0x2aadd9.jsxs(_0x10477f, {
        variant: "body1",
        children: [Math.round(_0x221b37.volume * 100), "%"]
      }), _0x2aadd9.jsx("br", {}), _0x2aadd9.jsx("br", {}), _0x2aadd9.jsx(_0x1f13b7, {
        label: "Show card to self",
        name: "cardSelf",
        control: _0x2aadd9.jsx(_0x80b736, {
          checked: _0x221b37.showCardSelf,
          onChange: _0x396826 => _0x221b37.updateSettings({
            showCardSelf: _0x396826.target.checked
          })
        })
      }), _0x2aadd9.jsx(_0x10477f, {
        i18n: true,
        i18nSource: "ui:text:tcg",
        variant: "body2",
        children: "Also view card when shown to others."
      }), _0x2aadd9.jsx("br", {}), _0x2aadd9.jsx("br", {}), _0x2aadd9.jsx(_0x1f13b7, {
        label: "Holo Sparkles In Binder",
        name: "sparkles",
        control: _0x2aadd9.jsx(_0x80b736, {
          checked: _0x221b37.holoSparkles,
          onChange: _0x54a53d => _0x221b37.updateSettings({
            holoSparkles: _0x54a53d.target.checked
          })
        })
      }), _0x2aadd9.jsx(_0x10477f, {
        i18n: true,
        i18nSource: "ui:text:tcg",
        variant: "body2",
        children: "This setting can help with binder performance if it feels a little slow and you have a lot of holos."
      }), _0x2aadd9.jsx("br", {}), _0x2aadd9.jsx("br", {}), _0x2aadd9.jsx("br", {}), _0x2aadd9.jsx(_0x10477f, {
        i18n: true,
        i18nSource: "ui:text:tcg",
        variant: "h5",
        children: "Pack Opening Voices"
      }), _0x2aadd9.jsx(_0x1f13b7, {
        label: "Character Specific SFX",
        name: "specific",
        control: _0x2aadd9.jsx(_0x80b736, {
          checked: _0x221b37.specificVoices,
          onChange: _0x4c95bc => _0x221b37.updateSettings({
            specificVoices: _0x4c95bc.target.checked
          })
        })
      }), _0x2aadd9.jsx("hr", {}), _0x2aadd9.jsx(_0x10477f, {
        i18n: true,
        i18nSource: "ui:text:tcg",
        variant: "body2",
        children: "A random sound pack will be picked from the selected packs below when opening a booster."
      }), _0x2aadd9.jsx(_0x51d16f, {
        children: _0x221b37.sfxPacks.map(_0x2ff916 => _0x2aadd9.jsx(_0x1f13b7, {
          label: _0x2ff916.name,
          name: _0x2ff916.id,
          disabled: _0x2ac4d1 && _0x221b37.enabledSfxPacks[_0x2ff916.id],
          control: _0x2aadd9.jsx(_0x80b736, {
            checked: _0x221b37.enabledSfxPacks[_0x2ff916.id],
            onChange: _0x54aded => _0x221b37.updateSettings({
              enabledSfxPacks: {
                ..._0x221b37.enabledSfxPacks,
                [_0x54aded.target.name]: _0x54aded.target.checked
              }
            })
          })
        }))
      })]
    })]
  });
};
const tutorial = "";
const Tutorial = _0x25fb67 => {
  const _0x54f3bc = [{
    description: "Use these tabs to swap between the different sets.",
    style: {
      left: "75%",
      top: "15%",
      width: "14%"
    },
    buttonText: "Next"
  }, {
    description: "The settings tab can change the voice pack volume and enable or disable voice packs. You can also name your binder.",
    style: {
      left: "73%",
      top: "75%",
      width: "15%"
    },
    buttonText: "Next"
  }, {
    description: "Click a filter to toggle it off. All filters are on by default.",
    style: {
      left: "28.75%",
      top: "82%"
    },
    buttonText: "Finish"
  }];
  return _0x2aadd9.jsx("div", {
    children: _0x54f3bc[_0x25fb67.activeStep] && _0x2aadd9.jsx("div", {
      className: "tutorial",
      children: _0x2aadd9.jsxs("div", {
        className: "tutorial__bubble",
        style: _0x54f3bc[_0x25fb67.activeStep].style,
        children: [_0x2aadd9.jsx("p", {
          children: _0x54f3bc[_0x25fb67.activeStep].description
        }), _0x2aadd9.jsx("button", {
          onClick: () => _0x25fb67.updateSettings({
            tutorialStep: _0x25fb67.activeStep + 1
          }),
          children: _0x54f3bc[_0x25fb67.activeStep].buttonText
        })]
      })
    })
  });
};
const tcgBinder = "";
const debounce = (_0x122a1d, _0x363808) => {
  let _0x5770b5;
  return (..._0x3e2891) => {
    clearTimeout(_0x5770b5);
    _0x5770b5 = setTimeout(() => _0x363808(..._0x3e2891), _0x122a1d);
  };
};
class TCGPackOpening extends _0x5875cb.Component {
  constructor(_0x361bbb) {
    super(_0x361bbb);
    this.state = {
      setsLastModified: "",
      show: false,
      spreadPrint: null,
      spreadPrintId: null,
      printSets: {},
      activeTab: "civs",
      cards: {},
      sfx: {
        baseUrl: ""
      },
      audioHover: new Audio(),
      audioHoverTimeout: null,
      settings: {
        showCardSelf: true,
        specificVoices: true,
        holoSparkles: true,
        enabledSfxPacks: {
          "_no-vo": true,
          cronus: true,
          ott: true,
          cathfawr: true,
          "leslie-lingberg": true
        },
        volume: 0.65,
        tutorialStep: 0
      },
      binderId: null,
      binderSlotId: null,
      binderName: "",
      filter: {
        rarity: new Set(["common", "uncommon", "rare", "secret", "promo"]),
        holo: new Set(["none", "reverse", "holo"]),
        query: ""
      },
      binderNewCards: new Set(),
      cardsMarkedForSale: new Set()
    };
  }
  randomFromArray = _0x27e9a3 => {
    return _0x27e9a3[Math.floor(Math.random() * _0x27e9a3.length)];
  };
  onEvent = (_0x5467a7 = {}) => {
    if (_0x5467a7.binderNewCards) {
      for (const _0x342710 of _0x5467a7.binderNewCards) {
        this.state.binderNewCards.add(_0x342710);
      }
      _0x5467a7.binderNewCards = this.state.binderNewCards;
    }
    if (_0x5467a7.cardsMarkedForSale) {
      for (const _0x37ce5c of _0x5467a7.cardsMarkedForSale) {
        this.state.cardsMarkedForSale.add(_0x37ce5c);
      }
      _0x5467a7.cardsMarkedForSale = this.state.cardsMarkedForSale;
    }
    if (_0x5467a7.loadSets) {
      this.loadSets(_0x5467a7.ignoreLastModified);
    }
    this.setState({
      ..._0x5467a7
    });
  };
  loadSets = async _0x23ba78 => {
    const _0xe1d7b0 = "https://npgtav.b-cdn.net";
    const _0xad0482 = await fetch(_0xe1d7b0 + "/sets.json?t=" + Date.now());
    if (!_0x23ba78 && _0xad0482.headers.get("last-modified") === this.state.setsLastModified) {
      return;
    }
    this.setState({
      setsLastModified: _0xad0482.headers.get("last-modified")
    });
    const _0x3ca803 = await _0xad0482.json();
    const _0x33a31d = {};
    for (const _0x37984a of _0x3ca803) {
      try {
        const _0x2e4384 = await fetch(_0xe1d7b0 + "/set." + _0x37984a + ".json?t=" + Date.now());
        const _0x5d1844 = await _0x2e4384.json();
        _0x33a31d[_0x5d1844.id] = _0x5d1844;
      } catch (_0xd94917) {
        console.error("[NP-TCG] Missing set data for " + _0x37984a + ".");
      }
    }
    _0x1c6aef("np-ui:tcgCardSets", {
      printSets: _0x33a31d
    });
  };
  updateSettings = async (_0x3e3580 = {}) => {
    const _0x3c9144 = {
      settings: {
        ...this.state.settings,
        ..._0x3e3580
      }
    };
    this.onEvent(_0x3c9144);
    await _0x1c6aef("np-ui:tcgUpdateSettings", _0x3c9144);
  };
  insertInventoryCards = async () => {
    await _0x1c6aef("np-ui:tcgInsertInventoryCards", {
      binderId: this.state.binderId
    });
  };
  toggleRarity = (_0xd36a80, _0x300692) => {
    const _0x31e28f = this.state.filter;
    if (_0x31e28f.rarity.has(_0x300692)) {
      _0x31e28f.rarity.delete(_0x300692);
    } else {
      _0x31e28f.rarity.add(_0x300692);
    }
    this.setState({
      filter: _0x31e28f
    });
  };
  toggleHolo = (_0x89faff, _0x1af3ce) => {
    const _0x353a71 = this.state.filter;
    if (_0x353a71.holo.has(_0x1af3ce)) {
      _0x353a71.holo.delete(_0x1af3ce);
    } else {
      _0x353a71.holo.add(_0x1af3ce);
    }
    this.setState({
      filter: _0x353a71
    });
  };
  updateSearch = _0x5ebbe7 => {
    const _0x10d2a8 = this.state.filter;
    _0x10d2a8.query = _0x5ebbe7;
    this.setState({
      filter: _0x10d2a8
    });
  };
  updateBinderName = async _0x5a8cab => {
    _0x5a8cab = _0x5a8cab.replace(/[^a-zA-Z\d\s:]/gi, "").substr(0, 27);
    await _0x1c6aef("np-ui:tcgUpdateBinderName", {
      binderName: _0x5a8cab,
      binderId: this.state.binderId,
      binderSlotId: this.state.binderSlotId
    });
    this.setState({
      binderName: _0x5a8cab
    });
  };
  onShow = (_0x4da77c = {}) => {
    const _0x45b76e = this.state.audioHover;
    _0x45b76e.autoplay = false;
    _0x45b76e.controls = false;
    _0x45b76e.volume = 0;
    _0x45b76e.loop = true;
    let _0x59719e = "";
    if (_0x4da77c.sfx && _0x4da77c.sfx.baseUrl) {
      _0x59719e = _0x4da77c.sfx.baseUrl;
    } else if (this.state.sfx && this.state.sfx.baseUrl) {
      _0x59719e = this.state.sfx.baseUrl;
    }
    if (_0x59719e && _0x45b76e.src !== _0x59719e + "holo-hover.ogg") {
      _0x45b76e.pause();
      _0x45b76e.src = _0x59719e + "holo-hover.ogg";
    }
    _0x45b76e.play();
    this.setState({
      ..._0x4da77c,
      show: true
    });
  };
  onHide = () => {
    if (!this.state.show) {
      return;
    }
    this.state.audioHover.pause();
    this.setState({
      show: false,
      spreadPrint: null,
      spreadPrintId: null,
      binderId: null,
      binderSlotId: null
    });
  };
  onHoverEnterHolo = () => {
    const _0x5a3553 = this.state.audioHover;
    _0x5a3553.volume = this.state.settings.volume * 0.333;
    if (this.state.audioHoverTimeout) {
      clearTimeout(this.state.audioHoverTimeout);
    }
    this.setState({
      audioHover: _0x5a3553
    });
  };
  onHoverLeaveHolo = () => {
    const _0x3e13f8 = this.state.audioHover;
    _0x3e13f8.volume = Math.max(0, this.state.audioHover.volume - 0.025);
    if (this.state.audioHover.volume > 0) {
      const _0x569d9b = setTimeout(() => {
        this.onHoverLeaveHolo();
      }, 50);
      this.setState({
        audioHoverTimeout: _0x569d9b
      });
    } else {
      this.setState({
        audioHoverTimeout: null
      });
    }
    this.setState({
      audioHover: _0x3e13f8
    });
  };
  chooseTab = _0x16a794 => {
    this.setState({
      activeTab: _0x16a794,
      spreadPrint: null,
      spreadPrintId: null
    });
  };
  printKeywords = _0x548b85 => {
    if (this.state.printSets[this.state.activeTab]) {
      for (const _0x21530f of this.state.printSets[this.state.activeTab].prints) {
        if (_0x21530f.id === _0x548b85) {
          return _0x21530f.keywords || "";
        }
      }
    }
    return "";
  };
  filterCard = (_0x4d7eb2, _0x26c0f6) => {
    return this.state.filter.rarity.has(_0x4d7eb2.rarity) && this.state.filter.holo.has(_0x4d7eb2.holo) && (!this.state.filter.query || _0x26c0f6.includes(this.state.filter.query.toLowerCase()) || this.printKeywords(_0x26c0f6).includes(this.state.filter.query.toLowerCase()));
  };
  getBestRarityHolo = _0x528bbd => {
    const _0x41649b = {
      id: 0,
      rarity: "none",
      holo: "none",
      qualityGeneral: 0,
      qualityCentering: 0,
      qualitySurface: 0,
      qualityEdge: 0,
      qualityCorners: 0,
      burnt: null
    };
    let _0x53f1e4 = 0;
    let _0x45d96d = 0;
    if (this.state.cards[_0x528bbd]) {
      const _0x8a1a4 = Object.fromEntries(Object.entries(this.state.cards[_0x528bbd]).filter(([_0x16e578, _0x2208cc]) => this.filterCard(_0x2208cc, _0x528bbd)));
      for (const _0x85f621 of Object.values(_0x8a1a4)) {
        let _0x2baa38 = 0;
        let _0x523b6f = 0;
        switch (_0x85f621.rarity) {
          case "rare":
            _0x2baa38 = 3;
            _0x523b6f += 3;
            break;
          case "uncommon":
            _0x2baa38 = 2;
            _0x523b6f += 2;
            break;
          case "common":
          default:
            _0x2baa38 = 1;
            _0x523b6f++;
        }
        switch (_0x85f621.holo) {
          case "holo":
            _0x523b6f += 3;
            break;
          case "reverse":
            _0x523b6f += 2;
            break;
          case "none":
          default:
            _0x523b6f++;
        }
        if ((_0x523b6f > _0x45d96d || _0x523b6f === _0x45d96d && _0x2baa38 > _0x53f1e4 || _0x41649b.burnt === true && _0x85f621.burnt === false) && (_0x41649b.burnt === null || _0x85f621.burnt === false)) {
          _0x53f1e4 = _0x2baa38;
          _0x45d96d = _0x523b6f;
          _0x41649b.id = _0x85f621.id;
          _0x41649b.rarity = _0x85f621.rarity;
          _0x41649b.holo = _0x85f621.holo;
          _0x41649b.qualityGeneral = _0x85f621.qualityGeneral;
          _0x41649b.qualityCentering = _0x85f621.qualityCentering;
          _0x41649b.qualitySurface = _0x85f621.qualitySurface;
          _0x41649b.qualityEdge = _0x85f621.qualityEdge;
          _0x41649b.qualityCorners = _0x85f621.qualityCorners;
          _0x41649b.burnt = _0x85f621.burnt;
        }
      }
    }
    return _0x41649b;
  };
  spreadOutCards = _0x12707c => {
    this.setState({
      spreadPrint: _0x12707c,
      spreadPrintId: _0x12707c.id
    });
  };
  closeSpread = _0x136328 => {
    if (!_0x136328.target.classList.contains("card")) {
      this.setState({
        spreadPrint: null,
        spreadPrintId: null
      });
    }
  };
  updateMarkedForSaleCards = debounce(1000, async () => {
    await _0x1c6aef("np-ui:tcgUpdateMarkedCards", {
      cardsMarkedForSale: [...this.state.cardsMarkedForSale]
    });
  });
  markCardForSale = async _0x3fc460 => {
    const _0x4421b8 = this.state.cardsMarkedForSale;
    if (_0x4421b8.has(_0x3fc460)) {
      _0x4421b8.delete(_0x3fc460);
    } else {
      _0x4421b8.add(_0x3fc460);
    }
    this.setState({
      cardsMarkedForSale: _0x4421b8
    });
    this.updateMarkedForSaleCards();
  };
  showCard = async _0x27fc04 => {
    await _0x1c6aef("np-ui:tcgShowCard", {
      itemInfo: _0x27fc04
    });
  };
  withdrawCard = async (_0x36f1f2, _0x354eb6) => {
    const _0x52d876 = {
      ...this.state.cards
    };
    let _0x38dbc1 = this.state.spreadPrint;
    delete _0x52d876[_0x36f1f2][_0x354eb6];
    if (Object.values(_0x52d876[_0x36f1f2]).length === 0) {
      delete _0x52d876[_0x36f1f2];
      _0x38dbc1 = null;
    }
    this.setState({
      cards: _0x52d876,
      spreadPrint: _0x38dbc1
    });
    await _0x1c6aef("np-ui:tcgWithdrawCard", {
      cardId: _0x354eb6
    });
  };
  containsNewCard = _0x257a2e => {
    if (_0x257a2e) {
      for (const _0x36c3b8 of Object.keys(_0x257a2e)) {
        if (this.state.binderNewCards.has(Number(_0x36c3b8))) {
          return true;
        }
      }
    }
    return false;
  };
  getNewCardIds = _0x4217b7 => {
    const _0xba79b2 = [];
    if (_0x4217b7) {
      for (const _0x57f14b of Object.keys(_0x4217b7)) {
        if (this.state.binderNewCards.has(Number(_0x57f14b))) {
          _0xba79b2.push(Number(_0x57f14b));
        }
      }
    }
    return _0xba79b2;
  };
  containsCardMarkedForSale = _0x1d61ef => {
    if (_0x1d61ef) {
      for (const _0x3b6222 of Object.keys(_0x1d61ef)) {
        if (this.state.cardsMarkedForSale.has(Number(_0x3b6222))) {
          return true;
        }
      }
    }
    return false;
  };
  getMarkedForSaleCardIds = _0x2a6d6f => {
    const _0x14da32 = [];
    if (_0x2a6d6f) {
      for (const _0x3253c4 of Object.keys(_0x2a6d6f)) {
        if (this.state.cardsMarkedForSale.has(Number(_0x3253c4))) {
          _0x14da32.push(Number(_0x3253c4));
        }
      }
    }
    return _0x14da32;
  };
  onHoverEnterNew = _0x5a2a0f => {
    if (_0x5a2a0f) {
      for (const _0x1aaddc of _0x5a2a0f) {
        this.state.binderNewCards.delete(_0x1aaddc);
      }
    }
  };
  isFiltered = () => {
    if (this.state.filter.rarity.size !== 5 || this.state.filter.holo.size !== 3 || this.state.filter.query) {
      return true;
    }
    return false;
  };
  printSetLength = () => {
    return this.state.printSets[this.state.activeTab].prints.map(this.outputCard).filter(_0x13f469 => _0x13f469).length + this.state.printSets[this.state.activeTab].secretPrints.map(_0x153897 => this.state.cards[_0x153897.id] && this.outputCard(_0x153897)).filter(_0x1c36dd => _0x1c36dd).length;
  };
  outputCard = _0x420a2b => {
    const _0x845ba7 = this.getBestRarityHolo(_0x420a2b.id);
    if (!this.isFiltered() || this.state.cards[_0x420a2b.id] && Object.values(this.state.cards[_0x420a2b.id]).filter(_0x1cae55 => this.filterCard(_0x1cae55, _0x420a2b.id)).length) {
      return _0x5d079d.createElement(_0x3a6439, {
        inBinder: true,
        fade: !this.state.cards[_0x420a2b.id] || Object.values(this.state.cards[_0x420a2b.id]).filter(_0x4725c2 => this.filterCard(_0x4725c2, _0x420a2b.id)).length === 0,
        count: this.state.cards[_0x420a2b.id] ? Object.values(this.state.cards[_0x420a2b.id]).filter(_0xa975b5 => this.filterCard(_0xa975b5, _0x420a2b.id)).length : 0,
        isNew: this.containsNewCard(this.state.cards[_0x420a2b.id]),
        isMarkedForSale: this.containsCardMarkedForSale(this.state.cards[_0x420a2b.id]),
        newCardIds: this.getNewCardIds(this.state.cards[_0x420a2b.id]),
        onHoverEnterNew: this.onHoverEnterNew,
        ..._0x845ba7,
        flipped: true,
        print: _0x420a2b,
        printSet: this.state.printSets[this.state.activeTab],
        onHoverEnterHolo: this.onHoverEnterHolo,
        onHoverLeaveHolo: this.onHoverLeaveHolo,
        spreadOutCards: this.spreadOutCards,
        key: _0x420a2b.id
      });
    }
    return false;
  };
  mouseDownHandler = _0x294517 => {
    if (_0x294517.button === 1) {
      _0x294517.preventDefault();
      _0x294517.stopPropagation();
    }
  };
  render() {
    return _0x2aadd9.jsx(_0x18e372, {
      center: true,
      closeOnError: true,
      name: "tcg-binder",
      style: {
        pointerEvents: this.state.show ? "all" : "none"
      },
      onError: this.onHide,
      onEscape: this.onHide,
      onHide: this.onHide,
      onShow: this.onShow,
      onEvent: this.onEvent,
      children: this.state.show && _0x2aadd9.jsxs("div", {
        children: [_0x2aadd9.jsx("div", {
          className: "binder-hider"
        }), _0x2aadd9.jsxs("div", {
          className: "tcg-binder-wrapper binder" + (this.state.spreadPrint ? " binder--spread" : "") + (this.state.settings.holoSparkles ? "" : " binder--no-sparkles"),
          onMouseDown: this.mouseDownHandler,
          children: [this.state.binderName && _0x2aadd9.jsxs("div", {
            className: "binder__name",
            children: [this.state.binderName, " Binder"]
          }), this.state.binderId && _0x2aadd9.jsx("div", {
            className: "binder__id",
            children: this.state.binderId
          }), _0x2aadd9.jsxs("div", {
            className: "binder__tabs",
            children: [Object.keys(this.state.printSets).sort().map(_0x141e7f => _0x2aadd9.jsx("div", {
              className: "binder__tab" + (_0x141e7f === this.state.activeTab ? " active" : ""),
              onClick: () => this.chooseTab(_0x141e7f),
              "data-tooltip": _0x141e7f,
              children: _0x2aadd9.jsx("i", {
                className: "fa fa-" + this.state.printSets[_0x141e7f].tabIcon
              })
            })), _0x2aadd9.jsx("div", {
              className: "binder__tab",
              onClick: this.insertInventoryCards,
              "data-tooltip": "Insert Inventory Cards",
              style: {
                marginTop: "auto"
              },
              children: _0x2aadd9.jsx("i", {
                className: "fa fa-sign-in-alt fa-rotate-180"
              })
            }), _0x2aadd9.jsx("div", {
              className: "binder__tab" + (this.state.activeTab === "settings" ? " active" : ""),
              onClick: () => this.chooseTab("settings"),
              "data-tooltip": "settings",
              children: _0x2aadd9.jsx("i", {
                className: "fa fa-cog"
              })
            })]
          }), _0x2aadd9.jsxs("div", {
            className: "binder__wrapper",
            children: [this.state.printSets[this.state.activeTab] && _0x2aadd9.jsxs("div", {
              className: "binder__page",
              children: [this.state.printSets[this.state.activeTab].prints.map(this.outputCard), this.state.printSets[this.state.activeTab].secretPrints.map(_0x2090cb => this.state.cards[_0x2090cb.id] && this.outputCard(_0x2090cb)), this.printSetLength() % 6 !== 0 && new Array(6 - this.printSetLength() % 6).fill("").map(() => _0x2aadd9.jsx("div", {
                className: "card-sleeve",
                children: _0x2aadd9.jsx("div", {
                  className: "card"
                })
              }))]
            }), this.state.activeTab === "settings" && _0x2aadd9.jsx("div", {
              className: "binder__page binder__page--settings",
              children: _0x2aadd9.jsx(Settings, {
                updateSettings: this.updateSettings,
                updateBinderName: this.updateBinderName,
                binderName: this.state.binderName,
                ...this.state.settings,
                sfxPacks: Object.keys(this.state.sfx.pack).sort().map(_0x23ada6 => ({
                  id: _0x23ada6,
                  name: this.state.sfx.pack[_0x23ada6]._name
                }))
              })
            })]
          }), this.state.spreadPrint && this.state.spreadPrintId && _0x2aadd9.jsxs("div", {
            className: "binder__spread",
            onClick: this.closeSpread,
            children: [_0x2aadd9.jsx(Spread, {
              print: this.state.spreadPrint,
              printSet: this.state.printSets[this.state.activeTab],
              cards: this.state.cards[this.state.spreadPrintId],
              onHoverEnterHolo: this.onHoverEnterHolo,
              onHoverLeaveHolo: this.onHoverLeaveHolo,
              markCardForSale: this.markCardForSale,
              markedForSaleCardIds: this.getMarkedForSaleCardIds(this.state.cards[this.state.spreadPrintId]),
              showCard: this.showCard,
              withdrawCard: this.withdrawCard
            }), _0x2aadd9.jsxs("div", {
              className: "binder__info",
              children: [_0x2aadd9.jsxs("div", {
                className: "binder__info-control",
                children: [_0x2aadd9.jsxs("svg", {
                  viewBox: "0 0 387 512",
                  xmlns: "http://www.w3.org/2000/svg",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  "stroke-linejoin": "round",
                  "stroke-miterlimit": "2",
                  children: [_0x2aadd9.jsx("path", {
                    d: "M193.8,24.9v178.7l-166.7,1.3l0.9-82.5L47.5,75l33.3-29.7l58.5-28.8L193.8,24.9L193.8,24.9z",
                    fill: "#ff487c"
                  }), _0x2aadd9.jsx("path", {
                    d: "M225.796 0h-63.578C74.227 0 3.02 71.208 3.02 158.69v190.733c0 87.99 71.207 159.198 159.198 159.198h63.578c87.483 0 158.69-71.207 158.69-159.198V158.69C384.486 71.207 313.279 0 225.796 0zM35.063 158.69c0-69.68 56.966-126.646 127.155-127.155h15.768v159.198H35.063V158.69zm317.888 190.733c-.508 70.19-57.474 127.155-127.155 127.663h-63.578c-70.19-.508-127.155-57.474-127.155-127.663V222.268h317.888v127.155zm0-158.69h-143.43V31.535h16.275c69.681.509 126.647 57.474 127.155 127.155v32.043z",
                    fill: "#fff",
                    fillRule: "nonzero"
                  })]
                }), "Mark for Sale"]
              }), _0x2aadd9.jsxs("div", {
                className: "binder__info-control",
                children: [_0x2aadd9.jsxs("svg", {
                  viewBox: "0 0 387 512",
                  xmlns: "http://www.w3.org/2000/svg",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  "stroke-linejoin": "round",
                  "stroke-miterlimit": "2",
                  children: [_0x2aadd9.jsx("path", {
                    d: "M225.796 0h-63.578C74.227 0 3.02 71.207 3.02 158.69v190.732c0 87.992 71.207 159.198 159.198 159.198h63.578c87.482 0 158.69-71.206 158.69-159.198V158.69C384.485 71.207 313.277 0 225.795 0zM35.063 158.69c0-69.681 56.966-126.646 127.155-127.155h15.767v159.198H35.063V158.69zm317.888 190.732c-.509 70.19-57.474 127.155-127.155 127.664h-63.578c-70.19-.509-127.155-57.474-127.155-127.664V222.267h317.888v127.155zm0-158.689H209.52V31.535h16.276c69.68.509 126.646 57.474 127.155 127.155v32.043z",
                    fill: "#fff",
                    fillRule: "nonzero"
                  }), _0x2aadd9.jsx("path", {
                    d: "M222.093 77.492c0-15.781-12.812-28.593-28.593-28.593-15.78 0-28.594 12.812-28.594 28.593v68.915c0 15.78 12.813 28.593 28.594 28.593s28.593-12.813 28.593-28.593V77.492z",
                    fill: "#ff487c"
                  })]
                }), "Show to Others"]
              }), _0x2aadd9.jsxs("div", {
                className: "binder__info-control",
                children: [_0x2aadd9.jsxs("svg", {
                  viewBox: "0 0 387 512",
                  xmlns: "http://www.w3.org/2000/svg",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  "stroke-linejoin": "round",
                  "stroke-miterlimit": "2",
                  children: [_0x2aadd9.jsx("path", {
                    d: "M193.753 24.906V203.61l166.688 1.33-.887-82.478-19.512-47.448-33.258-29.71-58.533-28.824-54.498 8.426z",
                    fill: "#ff487c"
                  }), _0x2aadd9.jsx("path", {
                    d: "M225.796 0h-63.578C74.227 0 3.02 71.208 3.02 158.69v190.733c0 87.99 71.207 159.198 159.198 159.198h63.578c87.483 0 158.69-71.207 158.69-159.198V158.69C384.486 71.207 313.279 0 225.796 0zM35.063 158.69c0-69.68 56.966-126.646 127.155-127.155h15.768v159.198H35.063V158.69zm317.888 190.733c-.508 70.19-57.474 127.155-127.155 127.663h-63.578c-70.19-.508-127.155-57.474-127.155-127.663V222.268h317.888v127.155zm0-158.69h-143.43V31.535h16.275c69.681.509 126.647 57.474 127.155 127.155v32.043z",
                    fill: "#fff",
                    fillRule: "nonzero"
                  })]
                }), "Move to Inventory"]
              })]
            })]
          }), _0x2aadd9.jsxs("div", {
            className: "binder__filter",
            children: [_0x2aadd9.jsxs("div", {
              className: "filter filter--rarity",
              children: [_0x2aadd9.jsx("div", {
                className: "filter__tab " + (this.state.filter.rarity.has("common") ? "active" : ""),
                onClick: () => this.toggleRarity("rarity", "common"),
                "data-tooltip": "common",
                children: _0x2aadd9.jsx("i", {
                  className: "fa fa-circle"
                })
              }), _0x2aadd9.jsx("div", {
                className: "filter__tab " + (this.state.filter.rarity.has("uncommon") ? "active" : ""),
                onClick: () => this.toggleRarity("rarity", "uncommon"),
                "data-tooltip": "uncommon",
                children: _0x2aadd9.jsx("i", {
                  className: "fa fa-square-full",
                  style: {
                    transform: "rotateZ(45deg) scale(0.75)"
                  }
                })
              }), _0x2aadd9.jsx("div", {
                className: "filter__tab " + (this.state.filter.rarity.has("rare") ? "active" : ""),
                onClick: () => this.toggleRarity("rarity", "rare"),
                "data-tooltip": "rare",
                children: _0x2aadd9.jsx("i", {
                  className: "fa fa-star"
                })
              })]
            }), _0x2aadd9.jsxs("div", {
              className: "filter filter--holo",
              children: [_0x2aadd9.jsx("div", {
                className: "filter__tab " + (this.state.filter.holo.has("none") ? "active" : ""),
                onClick: () => this.toggleHolo("holo", "none"),
                children: "Non Holo"
              }), _0x2aadd9.jsx("div", {
                className: "filter__tab " + (this.state.filter.holo.has("reverse") ? "active" : ""),
                onClick: () => this.toggleHolo("holo", "reverse"),
                children: "Reverse"
              }), _0x2aadd9.jsx("div", {
                className: "filter__tab " + (this.state.filter.holo.has("holo") ? "active" : ""),
                onClick: () => this.toggleHolo("holo", "holo"),
                children: "Holo"
              })]
            }), _0x2aadd9.jsx("div", {
              className: "filter filter--search",
              children: _0x2aadd9.jsxs("div", {
                className: "filter__tab",
                children: [_0x2aadd9.jsx("i", {
                  className: "fa fa-search"
                }), _0x2aadd9.jsx(_0x5a0342, {
                  iconAdornment: "none",
                  label: "",
                  onChange: _0x18953b => {
                    this.updateSearch(_0x18953b.target.value);
                  },
                  value: this.state.filter.query
                })]
              })
            })]
          })]
        }), _0x2aadd9.jsx(Tutorial, {
          activeStep: this.state.settings.tutorialStep,
          updateSettings: this.updateSettings
        })]
      })
    });
  }
}
const config = () => {
  return {
    name: "tcg-binder",
    render: TCGPackOpening,
    type: _0x3a6a83.Application
  };
};
export { config as default };