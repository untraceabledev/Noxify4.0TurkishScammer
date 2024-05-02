import { R as _0x238af9, j as _0x5cd058, r as _0x226ae2 } from "./vendor-6c45b22f.js";
import { A as _0x315e79 } from "./ui-app-6ee97cab.js";
import { n as _0x2eee59, C as _0x22c36a } from "./index-d5aaa08b.js";
import { C as _0x480f7e } from "./card-6e835304.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
import "./styles-61014012.js";
const tcgPackopening = "";
class TCGPackOpening extends _0x238af9.Component {
  constructor(_0x3ff1fa) {
    super(_0x3ff1fa);
    this.state = {
      show: false,
      printSetId: "",
      printSets: {},
      prints: {},
      cards: [],
      cardsFlipped: {},
      sfx: {
        baseUrl: "",
        specific: {},
        pack: {},
        sfxPack: "cronus"
      },
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
      audioChannels: [],
      audioHover: new Audio(),
      audioHoverTimeout: null,
      audio7CardPack: new Audio(),
      currentAudioChannel: 0,
      binderId: null,
      binderSlotId: null,
      binderName: null,
      canOpenAnother: false,
      showActions: false,
      rr: false,
      autoFlip: false
    };
    for (let _0x3bbdc8 = 6; _0x3bbdc8--;) {
      const _0x5273dd = new Audio();
      _0x5273dd.autoplay = false;
      _0x5273dd.controls = false;
      _0x5273dd.volume = this.state.settings.volume * 1;
      _0x5273dd.loop = false;
      this.state.audioChannels.push(_0x5273dd);
    }
  }
  componentDidMount() {
    window.addEventListener("keyup", this.keyUpHandler);
  }
  componentWillUnmount() {
    window.removeEventListener("keyup", this.keyUpHandler);
  }
  keyUpHandler = _0x1c7710 => {
    if (_0x1c7710.code === "Space" && !this.state.rr) {
      for (const _0x6410fc of this.state.cards) {
        if (!this.state.cardsFlipped[_0x6410fc.id]) {
          this.flipCard(_0x6410fc.id);
          return;
        }
      }
    }
  };
  randomFromArray = _0x34b7ce => {
    return _0x34b7ce[Math.floor(Math.random() * _0x34b7ce.length)];
  };
  onEvent = (_0x518cdc = {}) => {
    _0x518cdc.showActions = true;
    this.setState({
      ..._0x518cdc
    });
  };
  onShow = (_0x263f2f = {}) => {
    if (_0x263f2f.cards) {
      _0x263f2f.cardsFlipped = {};
      for (const _0x3e5dd4 of _0x263f2f.cards) {
        _0x263f2f.cardsFlipped[_0x3e5dd4.id] = false;
        if (_0x263f2f.prints[_0x3e5dd4.printId]) {
          this.playSound(_0x3e5dd4.printId, _0x3e5dd4.rarity, _0x3e5dd4.holo, false);
        }
      }
    }
    const _0x4b009a = this.state.audioHover;
    _0x4b009a.autoplay = false;
    _0x4b009a.controls = false;
    _0x4b009a.volume = 0;
    _0x4b009a.loop = true;
    let _0x306a9a = "";
    if (_0x263f2f.sfx && _0x263f2f.sfx.baseUrl) {
      _0x306a9a = _0x263f2f.sfx.baseUrl;
    } else if (this.state.sfx && this.state.sfx.baseUrl) {
      _0x306a9a = this.state.sfx.baseUrl;
    }
    if (_0x306a9a && _0x4b009a.src !== _0x306a9a + "holo-hover.ogg") {
      _0x4b009a.pause();
      _0x4b009a.src = _0x306a9a + "holo-hover.ogg";
    }
    _0x4b009a.play();
    const _0x403375 = this.state.audio7CardPack;
    _0x403375.autoplay = false;
    _0x403375.controls = false;
    _0x403375.volume = (_0x263f2f.settings.volume || this.state.settings.volume) * 1;
    _0x403375.loop = false;
    if (_0x263f2f.cards.length === 7) {
      if (_0x403375.src !== _0x306a9a + "7-card-pack.ogg") {
        _0x403375.pause();
        _0x403375.src = _0x306a9a + "7-card-pack.ogg";
      }
      setTimeout(() => {
        _0x403375.play();
      }, 750);
    }
    for (const _0x28d2a7 of this.state.audioChannels) {
      _0x28d2a7.volume = (_0x263f2f.settings.volume || this.state.settings.volume) * 1;
    }
    const _0x16f81f = Object.entries(_0x263f2f.settings.enabledSfxPacks).filter(([_0x1e1cad, _0x22f22b]) => _0x22f22b).map(([_0x3aff86]) => _0x3aff86);
    _0x263f2f.sfx.sfxPack = _0x16f81f[Math.floor(Math.random() * _0x16f81f.length)];
    _0x263f2f.rr = _0x263f2f.cards.length < 7 && Math.random() < 1 / 1000;
    this.setState({
      ..._0x263f2f,
      show: true
    });
    if (_0x263f2f.rr) {
      setTimeout(this.setupRRAudio, 15);
    }
    if (_0x263f2f.rr || _0x263f2f.autoFlip) {
      setTimeout(this.autoFlip, 2500);
    }
  };
  autoFlip = () => {
    if (this.state.rr || this.state.autoFlip) {
      const _0x1eca47 = this.flippedCardCount();
      if (_0x1eca47 < this.state.cards.length) {
        this.flipCard(this.state.cards[_0x1eca47].id);
        setTimeout(this.autoFlip, 4000);
      } else {
        this.setState({
          rr: false
        });
      }
    }
  };
  onHide = () => {
    if (!this.state.show) {
      return;
    }
    this.state.audioHover.pause();
    this.setState({
      show: false,
      binderId: null,
      binderSlotId: null,
      binderName: null
    });
  };
  onHideClose = () => {
    _0x2eee59("np-ui:close-pack-opening");
    _0x2eee59("np-ui:closeApp");
    this.onHide();
  };
  onHideOpenInventory = () => {
    this.setState({
      showActions: false
    });
    _0x2eee59("np-ui:tcgOpenInventory");
    this.onHideClose();
  };
  onHideOpenBinder = () => {
    this.setState({
      showActions: false
    });
    const _0x4d2dd1 = this.state.binderId;
    const _0x402ee6 = this.state.binderSlotId;
    const _0x3569ed = this.state.binderName;
    this.onHideClose();
    _0x2eee59("np-ui:tcgOpenBinder", {
      printSetId: this.state.printSetId,
      binderId: _0x4d2dd1,
      binderSlotId: _0x402ee6,
      binderName: _0x3569ed
    });
  };
  openAnother = () => {
    this.setState({
      showActions: false
    });
    _0x2eee59("np-ui:tcgOpenAnother", {
      printSetId: this.state.printSetId,
      binderId: this.state.binderId,
      binderSlotId: this.state.binderSlotId,
      binderName: this.state.binderName
    });
  };
  setupRRAudio = () => {
    for (let _0x5a080c = 0; _0x5a080c < 6; _0x5a080c++) {
      const _0x3dbb1c = this.state.audioChannels[_0x5a080c];
      _0x3dbb1c.pause();
      _0x3dbb1c.src = this.state.sfx.baseUrl + ("special-rr/rr-" + (_0x5a080c + 1) + ".ogg");
    }
  };
  flippedCardCount = () => {
    return Object.values(this.state.cardsFlipped).reduce((_0xd8820c, _0x87373) => _0xd8820c + _0x87373);
  };
  playSound = (_0x5b6061, _0x324da6, _0x5cba10, _0x236aa7 = true) => {
    let _0x4589d6 = "";
    if (this.state.sfx) {
      const _0x5492d5 = this.state.sfx;
      if (this.state.rr && _0x236aa7) {
        const _0x12d398 = this.flippedCardCount();
        _0x4589d6 = "special-rr/rr-" + _0x12d398 + ".ogg";
      } else if (this.state.settings.specificVoices && _0x5492d5.specific && _0x5492d5.specific[_0x5b6061]) {
        const _0x4355e2 = this.randomFromArray(_0x5492d5.specific[_0x5b6061]);
        _0x4589d6 = "specific-card/" + _0x5b6061.replace(/:/g, "-") + "/" + _0x4355e2;
      } else if (_0x5492d5.pack && _0x5492d5.pack[_0x5492d5.sfxPack]) {
        const _0x137eaa = _0x5492d5.pack[_0x5492d5.sfxPack];
        if (_0x137eaa[_0x324da6 + "-" + _0x5cba10]) {
          const _0x4b1299 = this.randomFromArray(_0x137eaa[_0x324da6 + "-" + _0x5cba10]);
          _0x4589d6 = "pack-" + _0x5492d5.sfxPack + "/" + _0x324da6 + "-" + _0x5cba10 + "/" + _0x4b1299;
        } else if (_0x137eaa[_0x5cba10] && _0x324da6 !== "secret") {
          const _0x293f56 = this.randomFromArray(_0x137eaa[_0x5cba10]);
          _0x4589d6 = "pack-" + _0x5492d5.sfxPack + "/" + _0x5cba10 + "/" + _0x293f56;
        } else if (_0x137eaa[_0x324da6]) {
          const _0x5189b0 = this.randomFromArray(_0x137eaa[_0x324da6]);
          _0x4589d6 = "pack-" + _0x5492d5.sfxPack + "/" + _0x324da6 + "/" + _0x5189b0;
        }
      }
      if (!_0x4589d6 && _0x5492d5.specific && _0x5492d5.specific._default) {
        _0x4589d6 = this.randomFromArray(_0x5492d5.specific._default);
      }
    }
    if (_0x4589d6) {
      let _0x2423f5 = this.state.currentAudioChannel;
      const _0x2ce774 = this.state.audioChannels[_0x2423f5];
      _0x2ce774.pause();
      _0x2ce774.src = this.state.sfx.baseUrl + _0x4589d6;
      const _0x3b4f2b = this.state.audioChannels;
      for (const _0x1fdb37 in _0x3b4f2b) {
        if (_0x2423f5 === Number(_0x1fdb37)) {
          _0x3b4f2b[_0x1fdb37].volume = this.state.settings.volume * 1;
        } else if (!_0x4589d6.includes("generic-flip")) {
          _0x3b4f2b[_0x1fdb37].volume = this.state.settings.volume * 0.5;
        }
        this.setState({
          audioChannels: _0x3b4f2b
        });
      }
      if (_0x236aa7) {
        _0x2ce774.play();
      }
      _0x2423f5++;
      if (_0x2423f5 >= 6) {
        _0x2423f5 = 0;
      }
      this.setState({
        currentAudioChannel: _0x2423f5
      });
    }
  };
  onHoverEnterHolo = () => {
    const _0x2ecdf1 = this.state.audioHover;
    _0x2ecdf1.volume = this.state.settings.volume * 0.333;
    this.setState({
      audioHover: _0x2ecdf1
    });
    if (this.state.audioHoverTimeout) {
      clearTimeout(this.state.audioHoverTimeout);
    }
  };
  onHoverLeaveHolo = () => {
    const _0x13bdda = this.state.audioHover;
    _0x13bdda.volume = Math.max(0, this.state.audioHover.volume - 0.025);
    this.setState({
      audioHover: _0x13bdda
    });
    if (this.state.audioHover.volume > 0) {
      const _0x543c3c = setTimeout(() => {
        this.onHoverLeaveHolo();
      }, 50);
      this.setState({
        audioHoverTimeout: _0x543c3c
      });
    } else {
      this.setState({
        audioHoverTimeout: null
      });
    }
  };
  flipCard = _0x57db64 => {
    const _0x281407 = this.state.cardsFlipped;
    _0x281407[_0x57db64] = true;
    this.setState({
      cardsFlipped: _0x281407
    });
  };
  showCard = async _0x2fbc15 => {
    await _0x2eee59("np-ui:tcgShowCard", {
      itemInfo: _0x2fbc15
    });
  };
  render() {
    return _0x5cd058.jsx(_0x315e79, {
      center: true,
      closeOnError: true,
      name: "tcg-packopening",
      style: {
        pointerEvents: this.state.show && !this.state.rr ? "all" : "none"
      },
      onError: this.onHide,
      onEscape: this.onHide,
      onHide: this.onHide,
      onShow: this.onShow,
      onEvent: this.onEvent,
      children: this.state.show && _0x5cd058.jsxs("div", {
        className: "tcg-packopening-wrapper",
        children: [this.state.cards.map(_0x35a92b => _0x226ae2.createElement(_0x480f7e, {
          ..._0x35a92b,
          flipped: this.state.cardsFlipped[_0x35a92b.id],
          print: this.state.prints[_0x35a92b.printId],
          printSet: this.state.printSets[_0x35a92b.printSetId],
          playSound: this.playSound,
          onHoverEnterHolo: this.onHoverEnterHolo,
          onHoverLeaveHolo: this.onHoverLeaveHolo,
          onFlipped: this.flipCard,
          key: _0x35a92b.id,
          showCard: this.showCard
        })), this.state.showActions && Object.values(this.state.cardsFlipped).reduce((_0x4a2c6c, _0x35723e) => _0x4a2c6c && _0x35723e) && _0x5cd058.jsxs("div", {
          className: "tcg-pack-actions",
          children: [_0x5cd058.jsxs("div", {
            className: "tcg-pack-actions__buttons",
            children: [this.state.printSetId !== "promo" && this.state.canOpenAnother && _0x5cd058.jsx("button", {
              onClick: this.openAnother,
              className: "green",
              children: "Open Another"
            }), this.state.binderId && _0x5cd058.jsx("button", {
              onClick: this.onHideOpenBinder,
              children: "Open Binder"
            }), _0x5cd058.jsx("button", {
              onClick: this.onHideOpenInventory,
              children: "Open Inventory"
            }), _0x5cd058.jsx("button", {
              onClick: this.onHideClose,
              className: "red",
              children: "Close"
            })]
          }), !this.state.binderId && _0x5cd058.jsx("div", {
            className: "tcg-pack-actions__tip",
            children: "You can drag and drop booster packs onto the binder to store them in the binder while opening."
          })]
        })]
      })
    });
  }
}
const config = () => {
  return {
    name: "tcg-packopening",
    render: TCGPackOpening,
    type: _0x22c36a.Application
  };
};
export { config as default };