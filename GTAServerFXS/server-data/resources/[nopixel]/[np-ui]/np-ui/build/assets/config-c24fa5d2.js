import { r as _0x54aea2, j as _0x3eec1c, ax as _0x49981e, ay as _0x1f2979, A as _0x531c86, x as _0x3b9f6f, R as _0x1b0e83, f as _0x4f8d31 } from "./vendor-6c45b22f.js";
import _0x607f4c from "./store-7ddff63f.js";
import { c as _0x243ee4, O as _0x197458, g as _0x42bc98, a as _0x7153f7, d as _0x2d556a } from "./config-4d8e163f.js";
import { u as _0x3b634d } from "./index-d5aaa08b.js";
import { p as _0x452603 } from "./format-10690d6f.js";
import { d as _0x186c94, b as _0x31bb91, c as _0x4fb106, m as _0x3ca1ff } from "./actions-c0279434.js";
import { I as _0x49ce28 } from "./icon-7f5cdae2.js";
import { C as _0x279e72 } from "./tooltip-cb871d8a.js";
import { G as _0x29c46c } from "./index-eac3b5ce.js";
import { G as _0x4f447a } from "./index-c0da55ad.js";
import "./commonjsHelpers-c5dac66b.js";
import "./store-df6117ab.js";
import "./date-1e39c206.js";
import "./translations-7705db3f.js";
import "./notifications-c44d34f0.js";
import "./lib-fc905d4c.js";
import "./duration-timer-2aea312f.js";
import "./store-1436e66f.js";
import "./bundle-e94787e2.js";
import "./input-c6588ceb.js";
import "./text-f7ee3e03.js";
import "./styles-61014012.js";
import "./index-ae383549.js";
import "./simple-form-6b6335d8.js";
import "./index-984d77ed.js";
import "./vite-a4975f27.js";
import "./store-779dab40.js";
import "./store-50ddf3e0.js";
const index$2 = "";
const ContactsItem = _0x1f6973 => {
  const [_0x1e7018, _0x52d1ad] = _0x54aea2.useState(false);
  const _0x2e5a93 = _0x54aea2.useContext(ContactsActionsContext);
  const _0x51989d = _0x52ad32 => {
    _0x243ee4({
      number: _0x52ad32
    });
  };
  const _0x2e7fce = _0x55c86b => {
    _0x197458(_0x55c86b);
  };
  const _0x484b4b = () => {
    _0x186c94(async () => {
      _0x31bb91();
      const [_0x36045b, _0x201e96] = await _0x2e5a93.deleteContact(_0x1f6973.id);
      if (!_0x36045b) {
        return _0x4fb106(_0x201e96);
      }
      _0x3ca1ff();
    }, "Remove contact?");
  };
  const _0x8fd560 = _0x4f6529 => {
    const _0xb9f658 = _0x4f6529.toLocaleUpperCase().split(" ");
    let _0x49f256 = _0xb9f658[0][0];
    if (_0xb9f658[1]) {
      _0x49f256 += _0xb9f658[1][0];
    }
    return _0x49f256;
  };
  const _0x1be50a = () => {
    _0x52d1ad(false);
  };
  const _0x4d0b9c = () => {
    _0x52d1ad(true);
  };
  return _0x3eec1c.jsxs("li", {
    className: "contacts-item",
    children: [_0x3eec1c.jsx("div", {
      className: "contact-icon",
      children: _0x3eec1c.jsx("div", {
        className: "inner-container",
        children: _0x3eec1c.jsx(_0x279e72, {
          title: "Remove Contact",
          children: _0x3eec1c.jsx("div", {
            className: "inner",
            onMouseLeave: _0x1be50a,
            onMouseEnter: _0x4d0b9c,
            onClick: _0x484b4b,
            children: _0x1e7018 ? _0x3eec1c.jsx(_0x49ce28, {
              className: "icon",
              icon: "user-slash"
            }) : _0x8fd560(_0x1f6973.name)
          })
        })
      })
    }), _0x3eec1c.jsxs("div", {
      className: "contact-container",
      children: [_0x3eec1c.jsxs("div", {
        className: "contact-information",
        children: [_0x3eec1c.jsx("h1", {
          className: "contact-name",
          children: _0x1f6973.name
        }), _0x3eec1c.jsx("p", {
          className: "contact-number",
          children: _0x452603(_0x1f6973.number)
        })]
      }), _0x3eec1c.jsxs("div", {
        className: "actions",
        children: [_0x3eec1c.jsx(_0x279e72, {
          title: "Call",
          children: _0x3eec1c.jsx("button", {
            className: "btn",
            onClick: () => _0x51989d(_0x1f6973.number),
            children: _0x3eec1c.jsx(_0x49ce28, {
              className: "icon",
              icon: "phone"
            })
          })
        }), _0x3eec1c.jsx(_0x279e72, {
          title: "Text",
          children: _0x3eec1c.jsx("button", {
            className: "btn",
            onClick: () => _0x2e7fce(_0x1f6973.number),
            children: _0x3eec1c.jsx(_0x49ce28, {
              className: "icon",
              icon: "comment"
            })
          })
        })]
      })]
    })]
  });
};
const index$1 = "";
const ContactsList = ({
  contacts: _0x216e26,
  search: _0xcda220
}) => {
  const [_0x1a3882, _0x11e7ef] = _0x49981e();
  const _0x1e363a = _0x54aea2.useMemo(() => {
    if (!_0xcda220) {
      return _0x216e26;
    }
    return _0x216e26.filter(_0x183472 => {
      const _0x5a6676 = _0x183472.name.toLocaleLowerCase().includes(_0xcda220.toLocaleLowerCase());
      return _0x5a6676;
    });
  }, [_0xcda220, _0x216e26]);
  _0x54aea2.useEffect(() => {
    if (_0x1e363a.length <= 0) {
      return;
    }
    _0x11e7ef("li", {
      opacity: 1,
      transform: "translateX(0)",
      filter: "blur(0)"
    }, {
      delay: _0x1f2979(0.1)
    });
  }, [_0x1e363a]);
  return _0x3eec1c.jsx("div", {
    className: "history-list",
    ref: _0x1a3882,
    children: _0x1e363a && _0x1e363a.map(_0x555d02 => _0x3eec1c.jsx(ContactsItem, {
      id: _0x555d02.id,
      name: _0x555d02.name,
      number: _0x555d02.number
    }, _0x555d02.id))
  });
};
const index = "";
const ContactsAddModal = () => {
  const [_0xc45aa0, _0x4a2959] = _0x54aea2.useState("");
  const [_0x2307d8, _0x3a10cb] = _0x54aea2.useState("");
  const [_0x5d423b, _0x2779a7] = _0x54aea2.useState("");
  const _0x297b42 = _0x54aea2.useContext(ContactsActionsContext);
  const [_0x4fdb5c, _0x2d1da4] = _0x54aea2.useState(false);
  const [_0x23fe09, _0x556f18] = _0x3b634d(_0x607f4c.key);
  const _0x2319b0 = () => {
    _0x4a2959("");
    _0x3a10cb("");
    _0x2779a7("");
    _0x556f18({
      showNewContactModal: false
    });
  };
  const _0x553a80 = async () => {
    if (!_0x5d423b) {
      return _0x4a2959("Please enter valid name.");
    }
    if (!_0x2307d8) {
      return _0x4a2959("Please enter valid number.");
    }
    _0x2d1da4(true);
    const [_0x18eb16, _0x3c56a1] = await _0x297b42.saveContact({
      name: _0x5d423b,
      number: _0x2307d8
    });
    _0x2d1da4(false);
    if (!_0x18eb16) {
      return _0x4a2959(_0x3c56a1);
    }
    _0x2319b0();
  };
  _0x54aea2.useEffect(() => {
    _0x3a10cb(_0x23fe09.number || "");
  }, [_0x23fe09.number]);
  const _0x49f357 = {
    transform: "translateY(0%)"
  };
  const _0x37e57f = {
    transform: "translateY(200%)"
  };
  return _0x3eec1c.jsx(_0x531c86, {
    children: _0x23fe09.showNewContactModal && _0x3eec1c.jsxs(_0x3b9f6f.div, {
      className: "new-contact-modal",
      initial: _0x37e57f,
      animate: _0x49f357,
      exit: _0x37e57f,
      children: [_0x3eec1c.jsx("h1", {
        children: "New Contact"
      }), _0xc45aa0 && _0x3eec1c.jsx("p", {
        className: "error",
        children: _0xc45aa0
      }), _0x3eec1c.jsx("input", {
        placeholder: "(000) 000-0000",
        value: _0x2307d8,
        onChange: _0x1438db => _0x3a10cb(_0x1438db.target.value)
      }), _0x3eec1c.jsx("input", {
        placeholder: "Name of contact",
        value: _0x5d423b,
        onChange: _0x44fb50 => _0x2779a7(_0x44fb50.target.value)
      }), _0x3eec1c.jsxs("div", {
        className: "actions",
        children: [_0x3eec1c.jsx("button", {
          className: "btn add-btn",
          onClick: _0x553a80,
          children: _0x4fdb5c ? "Saving..." : _0x3eec1c.jsxs(_0x1b0e83.Fragment, {
            children: ["Submit ", _0x3eec1c.jsx(_0x49ce28, {
              icon: "fas fa-angle-right"
            })]
          })
        }), _0x3eec1c.jsxs("button", {
          className: "btn cancel-btn",
          onClick: _0x2319b0,
          children: ["Cancel ", _0x3eec1c.jsx(_0x49ce28, {
            icon: "fas fa-times"
          })]
        })]
      })]
    })
  });
};
const container = "_container_1j00h_1";
const search_container = "_search_container_1j00h_5";
const styles = {
  container: container,
  search_container: search_container
};
const ContactsActionsContext = _0x54aea2.createContext({
  fetchContacts: async () => undefined,
  saveContact: async _0x46e3a7 => [false, "Not implemented"],
  deleteContact: async _0x45f1b2 => [false, "Not implemented"]
});
const ContactsApp = () => {
  const [_0x374f6b, _0x315822] = _0x54aea2.useState([]);
  const [_0x2c6252, _0x247e55] = _0x3b634d(_0x607f4c.key);
  const _0x2ce0be = _0x54aea2.useCallback(async () => {
    const _0x3f8b0d = await _0x42bc98();
    _0x315822(_0x3f8b0d);
  }, []);
  const _0x135327 = _0x54aea2.useCallback(async _0x495321 => {
    const [_0x1eba38, _0x2333d6] = await _0x7153f7(_0x495321);
    if (!_0x1eba38) {
      return [false, _0x2333d6];
    }
    _0x315822(_0x41797b => [..._0x41797b, _0x2333d6]);
    return [true, null];
  }, []);
  const _0x5c2f3c = _0x54aea2.useCallback(async _0x58df57 => {
    const [_0x35e7d9, _0x2ac15c] = await _0x2d556a(_0x58df57);
    if (!_0x35e7d9) {
      return [false, _0x2ac15c];
    }
    _0x315822(_0x32842c => _0x32842c.filter(_0x2247c3 => _0x2247c3.id !== _0x58df57));
    return [true, null];
  }, []);
  const _0x195904 = _0x54aea2.useCallback(() => {
    _0x247e55({
      showNewContactModal: true
    });
  }, []);
  _0x54aea2.useEffect(() => {
    _0x2ce0be();
    return () => _0x315822([]);
  }, [_0x2ce0be]);
  return _0x3eec1c.jsx(ContactsActionsContext.Provider, {
    value: {
      fetchContacts: _0x2ce0be,
      saveContact: _0x135327,
      deleteContact: _0x5c2f3c
    },
    children: _0x3eec1c.jsxs("div", {
      className: _0x4f8d31("app", styles.container),
      children: [_0x3eec1c.jsx(_0x29c46c, {
        title: "Contacts",
        action: {
          onClick: _0x195904,
          tooltip: "Add Contact",
          icon: "user-plus"
        }
      }), _0x3eec1c.jsx("div", {
        className: styles.search_container,
        children: _0x3eec1c.jsx(_0x4f447a, {
          value: _0x2c6252.filterText,
          icon: "search",
          placeholder: "Search",
          onChange: _0x25aaae => _0x247e55({
            filterText: _0x25aaae
          })
        })
      }), _0x3eec1c.jsx(ContactsList, {
        contacts: _0x374f6b,
        search: _0x2c6252.filterText
      }), _0x3eec1c.jsx(ContactsAddModal, {})]
    })
  });
};
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/contacts.svg";
const config = _0x5eafa5 => {
  return {
    ..._0x5eafa5,
    iconPng: myIcon,
    label: "Contacts",
    name: "contacts",
    position: 3,
    render: () => _0x3eec1c.jsx(ContactsApp, {}),
    favourite: true
  };
};
export { config as default };