import { R as _0x1abcd4, j as _0x14443e, k as _0x151665 } from "./vendor-6c45b22f.js";
import { T as _0x1d2022 } from "./text-f7ee3e03.js";
import _0x2cfb5f, { appName } from "./store-c60d25a9.js";
import { d as _0x1b9331, C as _0x124bad } from "./index-d5aaa08b.js";
import { A as _0x21b273 } from "./ui-app-6ee97cab.js";
import { D as _0x1ff34f } from "./duration-timer-2aea312f.js";
import "./commonjsHelpers-c5dac66b.js";
import "./translations-7705db3f.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
const container = "_container_1huf5_1";
const status_box = "_status_box_1huf5_9";
const divider = "_divider_1huf5_27";
const line = "_line_1huf5_38";
const content = "_content_1huf5_45";
const styles = {
  container: container,
  status_box: status_box,
  divider: divider,
  line: line,
  content: content
};
const {
  mapStateToProps,
  mapDispatchToProps
} = _0x1b9331(_0x2cfb5f);
class Container extends _0x1abcd4.Component {
  onEvent = _0x3a984b => {
    this.props.updateState(_0x3a984b);
  };
  render() {
    return _0x14443e.jsx(_0x21b273, {
      center: true,
      store: true,
      name: appName,
      onEvent: this.onEvent,
      children: this.props.show && _0x14443e.jsx("div", {
        className: styles.container,
        children: _0x14443e.jsxs("div", {
          className: styles.status_box,
          children: [_0x14443e.jsx(_0x1d2022, {
            i18n: this.props.i18nTitle || false,
            i18nSource: "ui:status-hud:title",
            variant: "h6",
            children: this.props.title
          }), _0x14443e.jsx("div", {
            className: styles.divider,
            children: _0x14443e.jsx("div", {
              className: styles.line
            })
          }), this.props.values.length > 0 && _0x14443e.jsx("div", {
            className: styles.content,
            children: this.props.values.map((_0x49c76b, _0x110c56) => {
              if (typeof _0x49c76b !== "string") {
                if (_0x49c76b.type === "countdown") {
                  return _0x14443e.jsx(_0x1ff34f, {
                    countdown: true,
                    startTime: _0x49c76b.seconds,
                    prefix: _0x49c76b?.prefix
                  });
                }
                return _0x14443e.jsx("p", {
                  className: styles.value,
                  children: _0x49c76b.text
                }, _0x110c56);
              }
              return _0x14443e.jsx("p", {
                className: styles.value,
                children: _0x49c76b
              }, _0x110c56);
            })
          })]
        })
      })
    });
  }
}
const Container$1 = _0x151665(mapStateToProps, mapDispatchToProps)(Container);
const config = () => {
  return {
    store: _0x2cfb5f,
    name: appName,
    render: Container$1,
    type: _0x124bad.Application
  };
};
export { config as default };