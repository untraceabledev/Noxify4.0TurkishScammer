import { j as _0x301878, f as _0x3016e8, r as _0x59e2b9, R as _0x33181b, A as _0x4735e7 } from "./vendor-6c45b22f.js";
import _0x4396d5 from "./store-bdd3f58b.js";
import { u as _0x4ce721 } from "./index-d5aaa08b.js";
import { s as _0xa75b3e, g as _0x4c2afc, a as _0x2bc77b, c as _0x194bb5, b as _0x32d671 } from "./actions-a6d0bfed.js";
import { g as _0x53f7ea, F as _0x65db69, c as _0x48738d, O as _0xe069cd } from "./config-4d8e163f.js";
import { a as _0xcebb2b } from "./actions-c0279434.js";
import { C as _0x34625e } from "./tooltip-cb871d8a.js";
import { p as _0x164121 } from "./format-10690d6f.js";
import { I as _0xf9c481 } from "./icon-7f5cdae2.js";
import { c as _0x43e8f5, g as _0x49fe62 } from "./lib-fc905d4c.js";
import { G as _0x302128 } from "./index-c0da55ad.js";
import { g as _0x55b1c9, a as _0x3d8247 } from "./misc-13f33aa2.js";
import { b as _0x206fae } from "./date-1e39c206.js";
import { p as _0x4f8154, I as _0x46adae } from "./image-container-d39217d7.js";
import { t as _0x80faf5 } from "./notifications-c44d34f0.js";
import { g as _0xcfa9b2 } from "./actions-6c142f68.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
import "./dev-data-afd59de4.js";
import "./store-df6117ab.js";
import "./duration-timer-2aea312f.js";
import "./translations-7705db3f.js";
import "./store-1436e66f.js";
import "./store-7ddff63f.js";
import "./input-c6588ceb.js";
import "./text-f7ee3e03.js";
import "./styles-61014012.js";
import "./index-ae383549.js";
import "./simple-form-6b6335d8.js";
import "./index-eac3b5ce.js";
import "./index-984d77ed.js";
import "./store-779dab40.js";
import "./store-50ddf3e0.js";
import "./actions-d7dccfad.js";
import "./store-75fb65a1.js";
const index$1 = "";
const PreviewItem = _0x4f94aa => {
  return _0x301878.jsxs("li", {
    className: "preview-item",
    onClick: () => _0x4f94aa.onClick(_0x4f94aa.number),
    children: [_0x301878.jsx("div", {
      className: "preview-icon",
      children: _0x301878.jsx("div", {
        className: "inner-container",
        children: _0x301878.jsx("div", {
          className: _0x3016e8("inner", {
            "unread-inner": _0x4f94aa.unread
          }),
          children: _0x301878.jsx(_0xf9c481, {
            className: "icon",
            icon: "envelope"
          })
        })
      })
    }), _0x301878.jsx("div", {
      className: "preview-container",
      children: _0x301878.jsxs("div", {
        className: "preview-information",
        children: [_0x301878.jsx("h1", {
          className: "preview-name",
          children: _0x4f94aa.name
        }), _0x301878.jsx("p", {
          className: "preview-message",
          children: _0x4f94aa.message.message
        })]
      })
    }), _0x4f94aa.unread && _0x301878.jsx("div", {
      className: "unread-notification"
    })]
  });
};
const container$2 = "_container_1c7c0_1";
const list$1 = "_list_1c7c0_6";
const styles$2 = {
  container: container$2,
  list: list$1
};
const LIST_INITIAL_LIMIT = 30;
const ConversationsPreviewView = () => {
  const [_0xe7245, _0x48ccda] = _0x4ce721(_0x4396d5.key);
  const [_0x58a386, _0x1c7c4f] = _0x59e2b9.useState("");
  const [_0x2372b2, _0x3fa4a4] = _0x59e2b9.useState(LIST_INITIAL_LIMIT);
  const _0xfa0880 = _0x59e2b9.useMemo(() => {
    const _0x3aeb6b = [];
    _0xe7245.order.forEach(_0x176f7a => {
      const {
        hasName: _0x18dbe6,
        name: _0x5ec070
      } = _0x43e8f5(_0x176f7a);
      _0x3aeb6b.push({
        number: _0x176f7a,
        name: _0x18dbe6 ? _0x5ec070 : _0x164121(_0x176f7a),
        messages: _0xe7245.conversations[_0x176f7a].messages
      });
    });
    return _0x3aeb6b.slice(0, _0x2372b2);
  }, [_0xe7245.conversations, _0xe7245.order, _0x2372b2]);
  const _0x231c9e = _0x5642ff => {
    const _0x85932e = _0x55b1c9(_0x5642ff.target);
    const _0x54f3ad = _0x3d8247(_0x5642ff.target);
    if (_0xfa0880.length >= LIST_INITIAL_LIMIT && _0x2372b2 <= _0xfa0880.length && Math.abs(_0x85932e / _0x54f3ad) > 0.5) {
      _0x3fa4a4(_0x45b9b3 => _0x45b9b3 + LIST_INITIAL_LIMIT);
    }
  };
  const _0x1c5d9a = _0x569f24 => {
    _0x48ccda({
      activeConversation: _0x569f24,
      view: "messages"
    });
  };
  return _0x301878.jsxs("div", {
    className: styles$2.container,
    children: [_0x301878.jsx(_0x302128, {
      value: _0x58a386,
      icon: "search",
      placeholder: "Search",
      onChange: _0x3a87f5 => _0x1c7c4f(_0x3a87f5)
    }), _0x301878.jsx("ul", {
      className: styles$2.list,
      onScroll: _0x231c9e,
      children: _0xfa0880 && _0xfa0880.filter(_0x46f802 => _0x46f802.name.toLocaleLowerCase().includes(_0x58a386.toLocaleLowerCase())).map((_0x20c66a, _0x2e09b2) => _0x301878.jsx(PreviewItem, {
        unread: _0xe7245.notifications.includes(_0x20c66a.number),
        name: _0x20c66a.name,
        message: _0x20c66a.messages[0],
        number: _0x20c66a.number,
        onClick: _0x1c5d9a
      }, _0x2e09b2))
    })]
  });
};
const index = "";
const MessageItem = _0x52d177 => {
  const {
    message: _0xabac98,
    images: _0x3ad06a
  } = _0x4f8154(_0x52d177.text);
  return _0x301878.jsxs("li", {
    className: _0x3016e8("message-item", {
      "sender-item": _0x52d177.isSender
    }),
    children: [_0x301878.jsxs("h1", {
      className: "message-name",
      children: [_0x52d177.name, " ", _0x301878.jsx("span", {
        children: _0x206fae(_0x52d177.timestamp)
      })]
    }), _0x3ad06a.length > 0 && _0x301878.jsx(_0x46adae, {
      images: _0x3ad06a
    }, _0x52d177.timestamp), _0x301878.jsx("p", {
      className: "message-text",
      children: _0xabac98
    })]
  });
};
const container$1 = "_container_nfetb_1";
const reply_container = "_reply_container_nfetb_1";
const list = "_list_nfetb_19";
const loading_icon = "_loading_icon_nfetb_43";
const rotation = "_rotation_nfetb_1";
const btn = "_btn_nfetb_46";
const styles$1 = {
  container: container$1,
  reply_container: reply_container,
  list: list,
  loading_icon: loading_icon,
  rotation: rotation,
  btn: btn
};
const ConversationsMessagesView = () => {
  const [_0x31ceed, _0x279fb5] = _0x4ce721(_0x4396d5.key);
  const [_0x2fe477, _0x15186b] = _0x59e2b9.useState("");
  const [_0x3f87c3, _0x2e93c0] = _0x59e2b9.useState("");
  const [_0x26d61e, _0x497200] = _0x59e2b9.useState(false);
  const [_0x2d6c16, _0x2d2893] = _0x59e2b9.useState([]);
  const _0x4179df = _0x33181b.useRef(null);
  const _0xe60692 = async () => {
    if (_0x3f87c3.length <= 0) {
      return;
    }
    _0x497200(true);
    const [_0x1b7ee3, _0x3f9ad1] = await _0xa75b3e(String(_0x31ceed.activeConversation), _0x3f87c3);
    _0x497200(false);
    await _0x98e1d1();
    _0x2e93c0("");
  };
  const _0x4fa2c5 = _0xf061ae => {
    if (_0xf061ae.key === "Enter") {
      _0xe60692();
    }
  };
  const _0x98e1d1 = async () => {
    const _0x439e85 = _0x31ceed.activeConversation;
    if (!_0x439e85) {
      return;
    }
    const _0x529a3e = [..._0x31ceed.notifications];
    const _0x3c5f38 = _0x529a3e.indexOf(_0x439e85);
    if (_0x3c5f38 !== -1) {
      _0x529a3e.splice(_0x3c5f38, 1);
      _0x279fb5({
        notifications: _0x529a3e
      });
    }
    const _0x20880a = {
      target_number: _0x439e85
    };
    const _0x48cc8e = await _0x4c2afc(_0x20880a);
    const _0xe379bf = [..._0x48cc8e];
    _0xe379bf.sort((_0x138ada, _0x4cd850) => {
      if (_0x138ada.timestamp > _0x4cd850.timestamp) {
        return -1;
      } else if (_0x138ada.timestamp < _0x4cd850.timestamp) {
        return 1;
      }
      return 0;
    });
    const _0x32c65c = _0xe379bf.map(_0x12b075 => {
      const {
        hasName: _0x3cdab0,
        name: _0x32dad2
      } = _0x43e8f5(_0x439e85);
      const _0xb29c1 = _0x3cdab0 ? _0x32dad2 : _0x164121(_0x439e85);
      const _0x3c4985 = String(_0x12b075.number_from);
      return {
        direction: _0x3c4985 === _0x439e85 ? "in" : "out",
        name: _0x3c4985 !== _0x439e85 ? "Me" : _0xb29c1,
        message: String(_0x12b075.message),
        timestamp: String(_0x12b075.timestamp)
      };
    });
    _0x2d2893(_0x32c65c);
  };
  _0x59e2b9.useEffect(() => {
    _0x4179df.current?.scroll({
      top: _0x4179df.current?.scrollHeight,
      behavior: "instant"
    });
  }, [_0x2d6c16]);
  _0x59e2b9.useEffect(() => {
    _0x98e1d1();
  }, [_0x31ceed.activeConversation, _0x31ceed.conversations]);
  return _0x301878.jsxs("div", {
    className: styles$1.container,
    children: [_0x301878.jsx(_0x302128, {
      value: _0x2fe477,
      icon: "search",
      placeholder: "Search",
      onChange: _0x527657 => _0x15186b(_0x527657)
    }), _0x301878.jsx("ul", {
      className: styles$1.list,
      ref: _0x4179df,
      children: _0x2d6c16.filter(_0x67ec1a => _0x67ec1a.message.toLocaleLowerCase().includes(_0x2fe477.toLocaleLowerCase())).map((_0x1ac7c4, _0x1dca60) => _0x301878.jsx(MessageItem, {
        isSender: _0x1ac7c4.direction === "out",
        name: _0x1ac7c4.name,
        text: _0x1ac7c4.message,
        timestamp: _0x1ac7c4.timestamp
      }, _0x1dca60))
    }), _0x301878.jsxs("div", {
      className: styles$1.reply_container,
      children: [_0x301878.jsx("input", {
        placeholder: "Type your message",
        value: _0x3f87c3,
        onChange: _0x264d17 => _0x2e93c0(_0x264d17.target.value),
        onKeyUp: _0x4fa2c5
      }), _0x301878.jsx("button", {
        className: styles$1.btn,
        onClick: _0xe60692,
        children: _0x26d61e ? _0x301878.jsx(_0xf9c481, {
          icon: "spinner",
          className: styles$1.loading_icon
        }) : _0x301878.jsx(_0xf9c481, {
          icon: "chevron-right"
        })
      })]
    })]
  });
};
const container = "_container_10nv6_1";
const title = "_title_10nv6_9";
const name = "_name_10nv6_18";
const icon$1 = "_icon_10nv6_26";
const actions = "_actions_10nv6_31";
const styles = {
  container: container,
  title: title,
  name: name,
  icon: icon$1,
  actions: actions
};
const ConversationsApp = () => {
  const [_0xfe5986, _0x3a8890] = _0x4ce721(_0x4396d5.key);
  const [_0x1451bb, _0x24fa34] = _0x4ce721("phone.apps.contacts");
  const _0x687cbc = async () => {
    const _0x3a15ff = _0x49fe62();
    const _0xb21e28 = _0x3a15ff ? _0x3a15ff.areaCode + _0x3a15ff.number : null;
    if (!_0xb21e28) {
      return;
    }
    const _0x10a148 = await _0x2bc77b();
    const {
      order: _0x4cda52,
      conversations: _0x3fe140
    } = _0x194bb5(_0xb21e28, _0x10a148);
    _0x3a8890({
      order: _0x4cda52,
      conversations: _0x3fe140
    });
  };
  const _0xcef44 = async () => {
    await _0x53f7ea();
  };
  _0x59e2b9.useEffect(() => {
    _0x687cbc();
    _0xcef44();
    return () => {
      _0x3a8890({
        conversations: {},
        order: []
      });
    };
  }, []);
  const _0x5d927d = () => {
    if (_0xfe5986.view === "messages") {
      _0x24fa34({
        showNewContactModal: false,
        number: ""
      });
      _0x3a8890({
        view: "preview"
      });
    }
  };
  const {
    hasName: _0x1eba12,
    name: _0x1d4d28
  } = _0x43e8f5(_0xfe5986.activeConversation);
  const _0x37581c = _0xc05ab0 => {
    _0xcebb2b(_0x301878.jsx(_0x65db69, {
      number: _0xc05ab0
    }));
  };
  const _0x1aaf42 = _0x1508a6 => {
    _0x48738d({
      number: _0x1508a6
    });
  };
  return _0x301878.jsxs("div", {
    className: _0x3016e8("app", styles.container),
    children: [_0x301878.jsxs("div", {
      className: "generic-app-header",
      children: [_0xfe5986.view === "messages" && typeof _0x5d927d === "function" && _0x301878.jsxs("h1", {
        className: _0x3016e8(styles.name),
        children: [_0x301878.jsx(_0xf9c481, {
          className: "icon",
          icon: "angle-left",
          onClick: _0x5d927d
        }), _0x1eba12 ? _0x1d4d28 : _0x164121(_0xfe5986.activeConversation)]
      }), _0xfe5986.view === "preview" && _0x301878.jsx("h1", {
        className: _0x3016e8(styles.title),
        children: "Messages"
      }), _0x301878.jsxs("div", {
        className: _0x3016e8(styles.actions),
        children: [_0xfe5986.view === "messages" && _0x301878.jsxs(_0x301878.Fragment, {
          children: [!_0x1eba12 && _0x301878.jsx(_0x34625e, {
            title: "Add Contact",
            children: _0x301878.jsx("button", {
              className: "action-button btn-blue",
              onClick: () => _0x37581c(_0xfe5986.activeConversation),
              children: _0x301878.jsx(_0xf9c481, {
                className: "icon",
                icon: "user-plus"
              })
            })
          }), _0x301878.jsx(_0x34625e, {
            title: "Call Contact",
            children: _0x301878.jsx("button", {
              className: "action-button",
              onClick: () => {
                if (_0xfe5986.activeConversation !== undefined) {
                  _0x1aaf42(_0xfe5986.activeConversation);
                }
              },
              children: _0x301878.jsx(_0xf9c481, {
                className: "icon",
                icon: "phone"
              })
            })
          })]
        }), _0xfe5986.view === "preview" && _0x301878.jsx(_0x34625e, {
          title: "Text",
          children: _0x301878.jsx("button", {
            className: "action-button",
            onClick: () => _0xe069cd(),
            children: _0x301878.jsx(_0xf9c481, {
              className: "icon",
              icon: "comment-alt"
            })
          })
        })]
      })]
    }), _0x301878.jsxs(_0x4735e7, {
      mode: "wait",
      initial: false,
      children: [_0xfe5986.view === "preview" && _0x301878.jsx(ConversationsPreviewView, {}, "preview"), _0xfe5986.view === "messages" && _0x301878.jsx(ConversationsMessagesView, {}, "messages")]
    })]
  });
};
const events = _0x46473a => {
  _0x46473a("sms-receive", ({
    data: _0xa40ec0,
    state: _0x428c6d
  }) => {
    const {
      conversations: _0x478203,
      notifications: _0x56bed7,
      order: _0x43abad
    } = _0x32d671({
      activeConversation: _0x428c6d[_0x4396d5.key].activeConversation,
      conversations: _0x428c6d[_0x4396d5.key].conversations,
      direction: "in",
      message: _0xa40ec0.message,
      notifications: _0x428c6d[_0x4396d5.key].notifications,
      number: _0xa40ec0.number,
      order: _0x428c6d[_0x4396d5.key].order
    });
    if (_0xcfa9b2("sms_notifications")) {
      const {
        hasName: _0x224e90,
        name: _0x12b5f
      } = _0x43e8f5(_0xa40ec0.number, _0x428c6d);
      _0x80faf5({
        apps: ["conversations", "messages"],
        icon: icon,
        state: _0x428c6d,
        title: _0x12b5f,
        text: _0x224e90 ? _0xa40ec0.message : "Text Message"
      });
    }
    return {
      ..._0x428c6d,
      [_0x4396d5.key]: {
        ..._0x428c6d[_0x4396d5.key],
        conversations: _0x478203,
        notifications: _0x56bed7,
        order: _0x43abad
      }
    };
  });
};
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/messages.svg";
const icon = {
  background: "#8BC34A",
  color: "white",
  name: "comment"
};
const config = _0x1b1a31 => {
  return {
    ..._0x1b1a31,
    events: () => events,
    iconPng: myIcon,
    label: "Messages",
    name: "conversations",
    position: 2,
    render: () => _0x301878.jsx(ConversationsApp, {}),
    favourite: true
  };
};
export { config as default, icon };