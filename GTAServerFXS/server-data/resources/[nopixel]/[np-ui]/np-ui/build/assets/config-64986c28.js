import { j as _0x17d660, az as _0x4f7228 } from "./vendor-6c45b22f.js";
import _0x1e7759 from "./store-2e12b715.js";
import { u as _0x56e768 } from "./index-d5aaa08b.js";
import { b as _0x46f686 } from "./date-1e39c206.js";
import { I as _0x1d775b } from "./icon-7f5cdae2.js";
import { G as _0x198291 } from "./index-984d77ed.js";
import { t as _0x478221 } from "./notifications-c44d34f0.js";
import { g as _0x397428 } from "./actions-6c142f68.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
import "./translations-7705db3f.js";
import "./tooltip-cb871d8a.js";
import "./actions-d7dccfad.js";
import "./store-75fb65a1.js";
const index$2 = "";
const EmailsAppItem = _0x3fbebc => {
  return _0x17d660.jsxs("div", {
    className: "emails-app-item",
    children: [_0x17d660.jsxs("h1", {
      children: ["From: ", _0x3fbebc.from]
    }), _0x17d660.jsxs("h1", {
      children: ["Subject: ", _0x3fbebc.subject]
    }), _0x17d660.jsx("p", {
      className: "email-content",
      children: _0x17d660.jsx(_0x4f7228, {
        className: "emails-app-markdown",
        id: "emails-app-" + _0x3fbebc.timestamp,
        dark: true,
        readOnly: true,
        defaultValue: _0x3fbebc.content
      }, _0x3fbebc.timestamp)
    }), _0x17d660.jsx("p", {
      className: "timestamp",
      children: _0x46f686(_0x3fbebc.timestamp)
    })]
  });
};
const index$1 = "";
const EmailsAppHeader = _0x2ae28c => {
  return _0x17d660.jsxs("div", {
    className: "emails-app-header",
    children: [_0x17d660.jsxs("div", {
      className: "content",
      children: [_0x17d660.jsx("h1", {
        children: "E-Mail"
      }), _0x17d660.jsxs("p", {
        children: ["Total Emails: ", _0x2ae28c.emails]
      })]
    }), _0x17d660.jsx(_0x1d775b, {
      className: "icon",
      icon: "comment-alt",
      size: "2x"
    })]
  });
};
const index = "";
const EmailsApp = () => {
  const [_0x1e063a] = _0x56e768(_0x1e7759.key);
  return _0x17d660.jsxs("div", {
    className: "app emails-app",
    children: [_0x17d660.jsx(EmailsAppHeader, {
      emails: _0x1e063a.list.length
    }), _0x1e063a.list.length <= 0 ? _0x17d660.jsx("div", {
      className: "empty-container",
      children: _0x17d660.jsx(_0x198291, {
        text: "No Emails"
      })
    }) : _0x17d660.jsxs("div", {
      className: "main-container",
      children: [_0x17d660.jsx("h1", {
        className: "heading",
        children: "Emails"
      }), _0x17d660.jsx("ul", {
        className: "emails-list",
        children: _0x1e063a.list?.map((_0x47001a, _0x2a5a81) => _0x17d660.jsx(EmailsAppItem, {
          subject: _0x47001a.subject,
          from: _0x47001a.sender,
          content: _0x47001a.body,
          timestamp: _0x47001a.timestamp
        }, _0x2a5a81))
      })]
    })]
  });
};
const events = _0x55cdb1 => {
  _0x55cdb1("email-receive", ({
    data: _0x5daba3,
    state: _0x44ec19
  }) => {
    if (_0x397428("email_notifications")) {
      _0x478221({
        apps: ["emails", "email"],
        icon: icon,
        state: _0x44ec19,
        title: "Email",
        text: _0x5daba3.body
      });
    }
    return {
      ..._0x44ec19,
      [_0x1e7759.key]: {
        list: [{
          ..._0x5daba3,
          timestamp: new Date().toISOString()
        }, ...(_0x44ec19[_0x1e7759.key] ? _0x44ec19[_0x1e7759.key].list : [])]
      }
    };
  });
};
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/emails.svg";
const icon = {
  background: "#26C6DA",
  color: "white",
  name: "envelope-open"
};
const config = _0x1821a2 => {
  return {
    ..._0x1821a2,
    events: () => events,
    iconPng: myIcon,
    label: "System Mail",
    name: "emails",
    position: 15,
    render: () => _0x17d660.jsx(EmailsApp, {})
  };
};
export { config as default, icon };