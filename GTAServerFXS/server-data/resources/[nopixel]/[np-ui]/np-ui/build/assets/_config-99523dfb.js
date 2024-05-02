import { R as _0x2eceb9, j as _0x2b0f99 } from "./vendor-6c45b22f.js";
import { A as _0x1de969 } from "./ui-app-6ee97cab.js";
import { C as _0x10bdfb } from "./card-6e835304.js";
import { C as _0x21ded0 } from "./index-d5aaa08b.js";
import "./commonjsHelpers-c5dac66b.js";
import "./styles-61014012.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
const tcgCard = "";
class TCGCard extends _0x2eceb9.Component {
  constructor(_0x4b99ad) {
    super(_0x4b99ad);
    this.state = {
      show: false,
      sfx: {
        baseUrl: ""
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
      displayTimeout: null,
      audioHover: new Audio(),
      audioHoverTimeout: null,
      cards: [],
      displayCase: false,
      bountyBoard: false
    };
  }
  onEvent = (_0x3bedec = {}) => {
    if (_0x3bedec.hide) {
      this.onHide();
    }
    if (_0x3bedec.cards && _0x3bedec.cards.length) {
      this.onShow(_0x3bedec);
    }
  };
  onShow = (_0x4571de = {}) => {
    const _0x2329af = this.state.audioHover;
    _0x2329af.autoplay = false;
    _0x2329af.controls = false;
    _0x2329af.volume = 0;
    _0x2329af.loop = true;
    let _0x1c0220 = "";
    if (_0x4571de.sfx && _0x4571de.sfx.baseUrl) {
      _0x1c0220 = _0x4571de.sfx.baseUrl;
    } else if (this.state.sfx && this.state.sfx.baseUrl) {
      _0x1c0220 = this.state.sfx.baseUrl;
    }
    if (_0x1c0220 && _0x2329af.src !== _0x1c0220 + "holo-hover.ogg") {
      _0x2329af.pause();
      _0x2329af.src = _0x1c0220 + "holo-hover.ogg";
    }
    _0x2329af.play();
    this.setState({
      ..._0x4571de,
      show: true
    });
    if (this.state.displayTimeout) {
      clearTimeout(this.state.displayTimeout);
    }
    if (_0x4571de.displayCase) {
      return;
    }
    let _0x358364 = 3500;
    if (_0x4571de.cards && _0x4571de.cards.length && _0x4571de.cards[0].burn) {
      _0x358364 = 10000;
    }
    const _0x3f6ced = setTimeout(() => this.setState({
      show: false
    }), _0x358364);
    this.setState({
      displayTimeout: _0x3f6ced
    });
  };
  onHide = () => {
    if (!this.state.show) {
      return;
    }
    this.state.audioHover.pause();
    this.setState({
      show: false,
      burn: false,
      burnt: false,
      cards: []
    });
  };
  onHoverEnterHolo = () => {
    this.state.audioHover.volume = this.state.settings.volume * 0.333;
    if (this.state.audioHoverTimeout) {
      clearTimeout(this.state.audioHoverTimeout);
    }
  };
  onHoverLeaveHolo = () => {
    this.state.audioHover.volume = Math.max(0, this.state.audioHover.volume - 0.025);
    if (this.state.audioHover.volume > 0) {
      const _0x471c3a = setTimeout(() => {
        this.onHoverLeaveHolo();
      }, 50);
      this.setState({
        audioHoverTimeout: _0x471c3a
      });
    } else {
      this.setState({
        audioHoverTimeout: null
      });
    }
  };
  render() {
    return _0x2b0f99.jsx(_0x1de969, {
      name: "tcg-card",
      style: {
        pointerEvents: this.state.show && this.state.displayCase ? "all" : "none"
      },
      onError: this.onHide,
      onEscape: this.onHide,
      onHide: this.onHide,
      onShow: this.onShow,
      onEvent: this.onEvent,
      children: this.state.show && _0x2b0f99.jsxs("div", {
        className: "tcg-card tcg-card--" + (this.state.displayCase ? "display-case" : "show"),
        children: [this.state.bountyBoard && _0x2b0f99.jsx("div", {
          className: "tcg-card__headline",
          children: "$ Bounty Board $"
        }), this.state.cards.map(_0x57f707 => _0x2b0f99.jsx(_0x10bdfb, {
          ..._0x57f707,
          onHoverEnterHolo: this.onHoverEnterHolo,
          onHoverLeaveHolo: this.onHoverLeaveHolo
        })), this.state.bountyBoard && _0x2b0f99.jsx("div", {
          className: "tcg-card__tip",
          children: "Bounty cards must be holographic and are worth extra $$$."
        })]
      })
    });
  }
}
const config = () => {
  return {
    name: "tcg-card",
    render: TCGCard,
    type: _0x21ded0.Application
  };
};
export { config as default };