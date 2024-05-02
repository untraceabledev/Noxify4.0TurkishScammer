import { j as _0xc77dc0, R as _0x48e3c5, az as _0x4e3006, k as _0x9f886b } from "./vendor-6c45b22f.js";
import { n as _0x4b0863, d as _0xdc12c } from "./index-d5aaa08b.js";
import { M as _0xec6a25 } from "./multi-pager-4b2260b4.js";
import { b as _0x18f98b, c as _0x5ef0da, m as _0x237c70, d as _0x28cc8a, a as _0x2e80e8 } from "./actions-c0279434.js";
import { A as _0x594092 } from "./app-container-77eaf0ff.js";
import { F as _0x1a58a4 } from "./input-c6588ceb.js";
import { P as _0x515901 } from "./paper-22e478e9.js";
import { T as _0x58a37e } from "./text-f7ee3e03.js";
import { u as _0x3b21db } from "./misc-13f33aa2.js";
import { m as _0x1c6fee, b as _0x12a614 } from "./styles-61014012.js";
import { C as _0x2f1457 } from "./tooltip-cb871d8a.js";
import { I as _0x5983a5 } from "./icon-7f5cdae2.js";
import { S as _0x306782 } from "./simple-form-6b6335d8.js";
import { g as _0x50773a } from "./character-8ebc09ae.js";
import _0x22bad1 from "./store-c488cfa3.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
import "./store-779dab40.js";
import "./store-50ddf3e0.js";
import "./translations-7705db3f.js";
import "./format-10690d6f.js";
import "./index-ae383549.js";
const LifeInvaderHeader = "" + new URL("lifeinvader-header-c1064f94.png", import.meta.url).href + "";
const LifeInvaderAd = "" + new URL("lifeinvader-ad-72f45a2e.png", import.meta.url).href + "";
const useStyles$1 = _0x1c6fee({
  emailList: () => ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "calc(100% - 8rem)",
    overflowY: "auto",
    "& > div": {
      marginBottom: "0.7rem"
    }
  }),
  adContainer: () => ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    overflowY: "hidden"
  }),
  adImage: () => ({
    height: "3.75rem",
    marginBottom: "0.25rem",
    aspectRatio: "25/6",
    objectFit: "contain"
  })
});
const lifeinvader = "";
const EmailItem = ({
  email: _0x531918,
  onClick: _0x26ad8f
}) => _0xc77dc0.jsxs(_0x515901, {
  onClick: _0x26ad8f,
  style: {
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 10,
    padding: 10
  },
  children: [_0xc77dc0.jsx(_0x515901.Details, {
    title: _0x531918.title,
    description: _0xc77dc0.jsx("div", {
      children: _0xc77dc0.jsx(_0x58a37e, {
        variant: "body2",
        style: {
          fontSize: "0.8rem"
        },
        children: _0x531918.category === "draft" ? null : _0x531918.category === "sent" ? _0x531918.to : _0x531918.sender
      })
    })
  }), _0xc77dc0.jsx(_0x515901.DetailsAux, {
    icon: "eye"
  })]
});
const getEmailContent = async _0x5616de => {
  _0x18f98b();
  const _0x13f006 = await _0x4b0863("phone/getEmailContent", {
    email: _0x5616de
  }, {
    returnData: {
      body: "hello world"
    },
    extApi: true
  });
  if (!_0x13f006.meta.ok) {
    _0x5ef0da(_0x13f006.meta.message, true);
    return;
  }
  _0x237c70(false);
  return _0x13f006.data.body;
};
const Emails = _0x337c08 => {
  const _0x354f69 = useStyles$1();
  const [_0x39c867, _0x3c818b] = _0x48e3c5.useState(_0x337c08.emails);
  _0x48e3c5.useEffect(() => {
    _0x3c818b(_0x337c08.emails);
  }, [_0x337c08.emails]);
  const [_0x59053d, _0x59c598] = _0x48e3c5.useState(_0x337c08.category.id);
  _0x3b21db(() => {
    _0x337c08.getEmails(_0x59053d);
  }, [_0x59053d]);
  return _0xc77dc0.jsxs(_0x594092, {
    search: {
      filter: ["title"],
      list: _0x337c08.emails,
      onChange: _0x3c818b
    },
    style: {
      backgroundImage: "url(" + LifeInvaderHeader + ")",
      backgroundRepeat: "no-repeat",
      paddingTop: 80,
      backgroundPosition: "8px 20px",
      backgroundColor: "rgb(100 1 1)"
    },
    primaryActions: [{
      title: "New",
      icon: "plus",
      color: "orange",
      onClick: () => {
        _0x337c08.updateState({
          page: "editing",
          email: {
            id: -1,
            title: "",
            body: "",
            category: "draft",
            sender: _0x337c08.character.email,
            to: "",
            cc: []
          }
        });
      }
    }, {
      title: "Contacts",
      icon: "address-book",
      color: "blue",
      onClick: () => {
        _0x337c08.updateState({
          page: "contacts"
        });
      }
    }],
    children: [_0xc77dc0.jsx("div", {
      style: {
        marginBottom: 16
      },
      children: _0xc77dc0.jsx(_0x1a58a4.Select, {
        i18n: true,
        i18nChildren: true,
        items: _0x337c08.categories,
        label: "Category",
        onChange: _0xa79af9 => _0x59c598(_0xa79af9),
        value: _0x59053d
      })
    }), _0xc77dc0.jsx("div", {
      className: _0x354f69.emailList,
      children: _0x39c867.map(_0x4bb7b0 => _0xc77dc0.jsx(EmailItem, {
        email: _0x4bb7b0,
        onClick: async () => {
          const _0x24994e = await getEmailContent(_0x4bb7b0);
          _0x337c08.updateState({
            page: "editing",
            email: {
              ..._0x4bb7b0,
              body: _0x24994e
            }
          });
        }
      }, _0x4bb7b0.id))
    }), _0xc77dc0.jsx("div", {
      className: _0x354f69.adContainer,
      children: _0xc77dc0.jsx("img", {
        className: _0x354f69.adImage,
        src: _0x337c08.adUrl ?? LifeInvaderAd,
        alt: "LifeInvader advertisement"
      })
    })]
  });
};
const useStyles = _0x1c6fee({
  markdownWrapper: () => ({
    backgroundColor: "#fff",
    padding: "0.5rem",
    borderRadius: "0.25rem",
    flex: 1,
    minHeight: "calc(100% - 15rem)",
    "> textarea": {
      height: "100%",
      borderBottom: 0
    },
    "& > div, > div div": {
      minHeight: "100%",
      height: "100%",
      maxHeight: "100%",
      overflowY: "scroll",
      backgroundColor: "#fff",
      color: "#000"
    },
    "& .heading-name": {
      color: "#000 !important"
    }
  }),
  searchContainer: () => ({
    width: "100%",
    display: "flex",
    marginBottom: "1rem"
  }),
  backButton: () => ({
    display: "flex",
    width: _0x12a614.responsiveWidth(40),
    alignItems: "center"
  }),
  inputs: () => ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    "& > div": {
      marginBottom: "0.25rem"
    },
    marginBottom: "0.75rem"
  })
});
const Editing = _0x2b08ac => {
  const _0x287f6c = useStyles();
  const _0x9b9e0e = _0x323382 => _0x2b08ac.updateState({
    email: {
      ..._0x2b08ac.email,
      ..._0x323382
    }
  });
  const _0x360246 = !_0x2b08ac.email || _0x2b08ac.email.category === "draft";
  const _0x10abc7 = !_0x2b08ac.email || _0x2b08ac.email.id === -1;
  const _0xef8fe3 = [];
  const _0x26cb76 = [];
  switch (_0x2b08ac.email?.category) {
    case "inbox":
      _0x26cb76.push({
        title: "Reply",
        icon: "reply",
        onClick: () => {
          const _0x1d368e = "Reply to\n" + _0x2b08ac.email.body.split("\n").map(_0x11123a => "> " + _0x11123a).join("\n");
          _0x9b9e0e({
            id: -1,
            title: "RE: " + _0x2b08ac.email.title,
            category: "draft",
            sender: _0x2b08ac.character.email,
            to: _0x2b08ac.email.sender,
            cc: [],
            body: _0x1d368e
          });
        }
      });
      if (_0x2b08ac.email.cc?.length > 0) {
        _0x26cb76.push({
          title: "Reply all",
          icon: "reply-all",
          onClick: () => {
            const _0x4e0c52 = "Reply to\n" + _0x2b08ac.email.body.split("\n").map(_0x2547ce => "> " + _0x2547ce).join("\n");
            _0x9b9e0e({
              id: -1,
              title: "RE: " + _0x2b08ac.email.title,
              category: "draft",
              to: _0x2b08ac.email.sender,
              sender: _0x2b08ac.character.email,
              cc: _0x2b08ac.email.cc.filter(_0x24218a => _0x24218a !== _0x2b08ac.character.email),
              body: _0x4e0c52
            });
          }
        });
      }
      break;
    case "sent":
      break;
    case "draft":
      _0x26cb76.push({
        title: "Send",
        icon: "paper-plane",
        onClick: () => {
          _0x28cc8a(async () => {
            _0x18f98b();
            if (_0x2b08ac.email.id === -1) {
              const _0x498bfd = await _0x4b0863("phone/createEmail", {
                email: _0x2b08ac.email
              }, {
                extApi: true
              });
              if (!_0x498bfd.meta.ok) {
                _0x5ef0da(_0x498bfd.meta.message, true);
                return;
              }
              _0x2b08ac.email.id = _0x498bfd.data.insertId;
            }
            _0x9b9e0e({
              category: "sent"
            });
            const _0x1a55e5 = await _0x4b0863("phone/sendEmail", {
              email: _0x2b08ac.email
            }, {
              extApi: true
            });
            if (!_0x1a55e5.meta.ok) {
              _0x5ef0da(_0x1a55e5.meta.message, true);
              return;
            }
            _0x4b0863("np-ui:li:sentEmail", {
              to: _0x2b08ac.email.to,
              cc: _0x2b08ac.email.cc,
              title: _0x2b08ac.email.title
            });
            _0x237c70();
            _0x2b08ac.getEmails(_0x2b08ac.category.id);
          }, "Are you sure? This cannot be undone");
        }
      });
      if (!_0x10abc7) {
        _0x26cb76.push({
          title: "Save",
          icon: "save",
          onClick: async () => {
            _0x18f98b();
            const _0x56c67b = await _0x4b0863("phone/updateEmail", {
              email: _0x2b08ac.email
            }, {
              extApi: true
            });
            if (!_0x56c67b.meta.ok) {
              _0x5ef0da(_0x56c67b.meta.message, true);
              return;
            }
            _0x237c70();
            _0x2b08ac.getEmails("draft");
            _0x2b08ac.updateState({
              page: "home",
              category: {
                id: "draft"
              }
            });
          }
        });
      }
      break;
    case "trash":
      break;
  }
  if (!_0x10abc7 && _0x2b08ac.email.category !== "trash") {
    _0xef8fe3.push({
      icon: "trash",
      onClick: () => _0x28cc8a(async () => {
        _0x18f98b();
        await _0x4b0863(_0x2b08ac.email.category === "draft" ? "phone/discardDraft" : "phone/deleteEmail", {
          email: _0x2b08ac.email
        }, {
          extApi: true
        });
        _0x2b08ac.getEmails(_0x2b08ac.email.category);
        _0x2b08ac.updateState({
          page: "home",
          category: {
            id: _0x2b08ac.email.category
          }
        });
        _0x237c70();
      }, "Are you sure?"),
      title: "Delete"
    });
  }
  if (_0x10abc7) {
    _0x26cb76.push({
      title: "Save As Draft",
      icon: "save",
      onClick: async () => {
        _0x18f98b();
        const _0x50c3f6 = await _0x4b0863("phone/createEmail", {
          email: _0x2b08ac.email
        }, {
          extApi: true
        });
        if (!_0x50c3f6.meta.ok) {
          _0x5ef0da(_0x50c3f6.meta.message, true);
          return;
        }
        _0x237c70();
        _0x2b08ac.getEmails("draft");
        _0x9b9e0e({
          id: _0x50c3f6.data.insertId
        });
      }
    });
  }
  return _0xc77dc0.jsxs(_0x594092, {
    fadeIn: false,
    auxActions: _0xef8fe3,
    primaryActions: _0x26cb76,
    style: {
      backgroundColor: "rgb(100 1 1)"
    },
    children: [_0xc77dc0.jsxs(_0xc77dc0.Fragment, {
      children: [_0xc77dc0.jsx("div", {
        className: _0x287f6c.searchContainer,
        children: _0xc77dc0.jsx(_0x2f1457, {
          title: "Go Back",
          placement: "right",
          children: _0xc77dc0.jsx("div", {
            className: _0x287f6c.backButton,
            onClick: () => {
              _0x2b08ac.updateState({
                page: "home"
              });
            },
            children: _0xc77dc0.jsx(_0x5983a5, {
              icon: "chevron-left",
              size: "lg",
              style: {
                color: "white"
              }
            })
          })
        })
      }), _0xc77dc0.jsxs("div", {
        className: _0x287f6c.inputs,
        children: [(_0x360246 || _0x2b08ac.email?.category === "sent") && _0xc77dc0.jsx(_0x1a58a4.Email, {
          i18n: true,
          label: "To",
          readOnly: !_0x360246,
          onChange: _0x57260a => _0x9b9e0e({
            to: _0x57260a
          }),
          value: _0x2b08ac.email.to
        }), !_0x360246 && _0x2b08ac.email?.category !== "sent" && _0xc77dc0.jsx(_0x1a58a4.Email, {
          i18n: true,
          label: "From",
          onChange: () => {},
          readOnly: true,
          value: _0x2b08ac.email.sender
        }), (_0x2b08ac.email.cc?.length > 0 || _0x360246) && _0xc77dc0.jsx(_0x1a58a4.MultiEmail, {
          i18n: true,
          label: "CC",
          readOnly: !_0x360246,
          onChange: _0x626a1c => {
            _0x9b9e0e({
              cc: _0x626a1c.map(_0x3431d1 => _0x3431d1.email).filter(_0x559108 => _0x559108 !== _0x2b08ac.email.to)
            });
          },
          value: _0x2b08ac.email.cc?.map(_0x4a6243 => ({
            email: _0x4a6243,
            title: _0x4a6243
          }))
        }), _0xc77dc0.jsx(_0x1a58a4.Text, {
          i18n: true,
          icon: "tags",
          label: "Title",
          maxLength: 50,
          placeholder: "Something catchy...",
          InputProps: {
            readOnly: !_0x360246
          },
          onChange: _0x9522a => _0x9b9e0e({
            title: _0x9522a
          }),
          value: _0x2b08ac.email.title
        })]
      })]
    }), _0xc77dc0.jsx("div", {
      className: _0x287f6c.markdownWrapper,
      children: _0xc77dc0.jsx(_0x4e3006, {
        dark: true,
        readOnly: !_0x360246,
        onChange: _0x5e389d => _0x9b9e0e({
          body: _0x5e389d()
        }),
        placeholder: "Email content goes here...",
        defaultValue: _0x2b08ac.email.body
      }, _0x2b08ac.email.id)
    })]
  });
};
const getContacts = async () => {
  const _0x3f1608 = await _0x4b0863("np-ui:li:getContacts", {
    id: _0x50773a().id
  }, {
    returnData: [{
      name: "Test",
      email: "test@test.com"
    }, {
      name: "Batman",
      email: "bat@man.com"
    }]
  });
  return _0x3f1608.data;
};
const Contact = ({
  contact: _0x396c92,
  onClick: _0x4350e0
}) => _0xc77dc0.jsxs(_0x515901, {
  style: {
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 10,
    padding: 10
  },
  children: [_0xc77dc0.jsx(_0x515901.Details, {
    title: _0x396c92.name,
    description: _0xc77dc0.jsx("div", {
      children: _0xc77dc0.jsx(_0x58a37e, {
        variant: "body2",
        style: {
          fontSize: "0.8rem"
        },
        children: _0x396c92.email
      })
    })
  }), _0xc77dc0.jsx(_0x515901.DetailsAux, {
    icon: "trash",
    onClick: _0x4350e0
  })]
});
const Contacts = _0x1b1e07 => {
  const [_0x776d79, _0x3bafdc] = _0x48e3c5.useState(_0x1b1e07.list);
  _0x48e3c5.useEffect(() => {
    _0x3bafdc(_0x1b1e07.list);
  }, [_0x1b1e07.list]);
  return _0xc77dc0.jsxs(_0x594092, {
    search: {
      filter: ["name"],
      list: _0x1b1e07.list,
      onChange: _0x3bafdc
    },
    fadeIn: false,
    onClickBack: () => {
      _0x1b1e07.updateState({
        page: "home"
      });
    },
    style: {
      backgroundColor: "rgb(100 1 1)"
    },
    primaryActions: [{
      title: "Add",
      icon: "user-plus",
      onClick: () => {
        _0x2e80e8(_0xc77dc0.jsx(_0x306782, {
          elements: [{
            name: "name",
            render: ({
              onChange: _0x8946ee,
              value: _0x54e7d0
            }) => _0xc77dc0.jsx(_0x1a58a4.Text, {
              label: "Name",
              icon: "user",
              i18n: true,
              onChange: _0x8946ee,
              value: _0x54e7d0
            }),
            validate: ["text", "Name"]
          }, {
            name: "email",
            render: ({
              onChange: _0x4b6dc7,
              value: _0x550d99
            }) => _0xc77dc0.jsx(_0x1a58a4.Text, {
              label: "Email",
              icon: "at",
              i18n: true,
              onChange: _0x4b6dc7,
              value: _0x550d99
            }),
            validate: ["text", "Email"]
          }],
          onCancel: () => _0x237c70(false),
          onSubmit: async ({
            name: _0x39f2c4,
            email: _0x217dcd
          }) => {
            _0x18f98b();
            const _0x5e19f9 = await _0x4b0863("np-ui:li:addContact", {
              name: _0x39f2c4,
              email: _0x217dcd
            });
            if (!_0x5e19f9.meta.ok) {
              _0x5ef0da(_0x5e19f9.meta.message, true);
              return;
            }
            _0x1b1e07.updateState({
              list: await getContacts()
            });
            _0x237c70();
          }
        }));
      }
    }],
    children: [_0xc77dc0.jsxs("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      },
      children: [_0xc77dc0.jsx(_0x58a37e, {
        variant: "body2",
        style: {
          color: "darkgray"
        },
        i18n: true,
        children: "Signed in as"
      }), _0xc77dc0.jsx(_0x58a37e, {
        variant: "body2",
        style: {
          color: "darkgray"
        },
        children: _0x1b1e07.character.email
      })]
    }), _0x776d79.map(_0x384439 => _0xc77dc0.jsx(Contact, {
      contact: _0x384439,
      onClick: async () => {
        _0x28cc8a(async () => {
          _0x18f98b();
          await _0x4b0863("np-ui:li:deleteContact", {
            ..._0x384439
          });
          _0x1b1e07.updateState({
            list: await getContacts()
          });
          _0x237c70();
        }, "Are you sure you want to delete this contact?");
      }
    }, _0x384439.name))]
  });
};
const {
  mapStateToProps,
  mapDispatchToProps
} = _0xdc12c(_0x22bad1, {
  mapStateToProps: _0x2fd995 => ({
    character: _0x2fd995.character
  })
});
class Container extends _0x48e3c5.Component {
  async componentDidMount() {
    this.getEmails();
    const {
      data: _0xfdf631
    } = await _0x4b0863("np-ui:li:getAdURL", {}, {
      returnData: {
        url: "https://assets.primagames.com/media/images/news/gtav_Grand_Theft_Auto_5_How_to_Use_LifeInvader.jpg/PRIMA/resize/1200x500/format/jpg"
      }
    });
    this.props.updateState({
      adUrl: _0xfdf631?.url
    });
  }
  async getEmails(_0x533841 = "inbox") {
    const _0xc4f28a = await _0x4b0863("phone/getEmails", {
      category: _0x533841
    }, {
      returnData: {
        emails: [{
          id: 1,
          sender: "me@lifeinvader.com",
          to: "mine@lifeinvader.com",
          title: "hello world",
          category: "inbox",
          timestamp: 1671045680,
          cc: ["someone@lifeinvader.com", "other@lifeinvader.com"]
        }, {
          id: 2,
          sender: "me@lifeinvader.com",
          to: "mine@lifeinvader.com",
          title: "hello",
          category: "draft",
          timestamp: 1671045680,
          cc: ["someone@lifeinvader.com"]
        }, {
          id: 3,
          sender: "you@lifeinvader.com",
          to: "mine@lifeinvader.com",
          title: "world",
          category: "sent",
          timestamp: 1671045680,
          cc: ["someone@lifeinvader.com"]
        }, {
          id: 4,
          sender: "they@lifeinvader.com",
          to: "mine@lifeinvader.com",
          title: "test",
          category: "trash",
          timestamp: 1671045680,
          cc: ["someone@lifeinvader.com"]
        }].filter(_0x38e04f => _0x38e04f.category === _0x533841)
      },
      extApi: true
    });
    _0xc4f28a.data.forEach(_0x39c837 => {
      _0x39c837.category = _0x533841;
      _0x39c837.cc = _0x39c837.cc?.split(",");
      if (_0x39c837.sender === "system@lifeinvader.net") {
        _0x39c837.sender = "Unknown";
      }
    });
    _0xc4f28a.data.sort((_0x372b84, _0x446757) => _0x446757.timestamp - _0x372b84.timestamp);
    this.props.updateState({
      emails: _0xc4f28a.data
    });
  }
  render() {
    const _0x2f67c3 = {
      home: 0,
      editing: 1,
      contacts: 2
    };
    return _0xc77dc0.jsx(_0xec6a25, {
      activeIndex: _0x2f67c3[this.props.page],
      landscapeOptions: {},
      pages: [{
        index: 0,
        content: _0xc77dc0.jsx(Emails, {
          ...this.props,
          getEmails: this.getEmails.bind(this)
        })
      }, {
        index: 1,
        content: this.props.page !== "editing" ? null : _0xc77dc0.jsx(Editing, {
          ...this.props,
          getEmails: this.getEmails.bind(this)
        })
      }, {
        index: 2,
        content: this.props.page !== "contacts" ? null : _0xc77dc0.jsx(Contacts, {
          ...this.props
        })
      }]
    });
  }
}
const Container$1 = _0x9f886b(mapStateToProps, mapDispatchToProps)(Container);
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/lifeinvader.svg";
const config = _0x1c953a => {
  return {
    ..._0x1c953a,
    hidden: () => true,
    init: async () => {
      const _0x27d953 = await getContacts();
      return {
        key: _0x22bad1.key,
        data: {
          ...[_0x22bad1.key],
          ..._0x22bad1.initialState,
          list: _0x27d953
        }
      };
    },
    iconPng: myIcon,
    label: "LifeInvader Mail",
    name: "lifeinvader",
    position: 400,
    render: () => _0xc77dc0.jsx(Container$1, {})
  };
};
export { config as default };