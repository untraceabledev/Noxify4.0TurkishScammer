import { R as _0x46840b, j as _0xe75b3a, y as _0x32a750, D as _0x22c705, E as _0x5dc4a3, w as _0xa4f406, s as _0x54a7ba, r as _0xb23e62, G as _0x9bf221, k as _0x5a5ce0 } from "./vendor-6c45b22f.js";
import { n as _0x1681be, e as _0x4852bf, d as _0x49c902, C as _0x35bdcc } from "./index-d5aaa08b.js";
import { A as _0x367cda } from "./ui-app-6ee97cab.js";
import { B as _0x31f241 } from "./button-c47bff31.js";
import { C as _0x5f15c8 } from "./checkmark-036a14b0.js";
import { I as _0x3fc3de } from "./icon-7f5cdae2.js";
import { F as _0x180387 } from "./input-c6588ceb.js";
import { S as _0x373238 } from "./spinner-1649f31d.js";
import { T as _0x29fffa } from "./text-f7ee3e03.js";
import { m as _0x57c762, b as _0x1517b8 } from "./styles-61014012.js";
import { P as _0x2ab256 } from "./paper-22e478e9.js";
import _0x33e17e, { appName } from "./store-15ac9707.js";
import { G as _0x132679 } from "./general-manager-96fdf49f.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
import "./translations-7705db3f.js";
import "./format-10690d6f.js";
import "./index-ae383549.js";
import "./tooltip-cb871d8a.js";
const useStyles = _0x57c762({
  wrapper: () => ({
    padding: 8
  }),
  modalWrapper: () => ({
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    ..._0x1517b8.flexCenter,
    zIndex: 100
  }),
  formWrapper: () => ({
    pointerEvents: "all",
    display: "flex",
    flexDirection: "column",
    width: "50%",
    maxHeight: "90%",
    overflowY: "scroll",
    backgroundColor: _0x1517b8.bgSecondary()
  }),
  inputWrapper: () => ({
    display: "flex",
    flexDirection: "column",
    flex: 1,
    padding: 16
  }),
  inputFieldWrapper: () => ({
    padding: 8
  }),
  actionsWrapper: () => ({
    display: "flex",
    justifyContent: "space-between",
    padding: 16
  }),
  burgerWrapper: () => ({
    display: "flex",
    justifyContent: "space-between"
  }),
  loading: () => ({
    flex: 1,
    ..._0x1517b8.flexCenter
  }),
  itemWrapper: () => ({
    padding: 8,
    marginTop: 8,
    width: "100%",
    backgroundColor: _0x1517b8.bgSecondary()
  }),
  itemHeading: () => ({
    display: "flex",
    justifyContent: "space-between",
    width: "100%"
  }),
  itemHeadingInner: () => ({
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  }),
  itemHeadingActions: () => ({
    marginLeft: 8,
    ..._0x1517b8.flexCenter,
    height: 24,
    width: "auto"
  })
});
const SectionForm = _0x5260b6 => {
  const [_0x21cf2a, _0x4efe03] = _0x46840b.useState(false);
  const [_0x299cc3, _0x16d056] = _0x46840b.useState("");
  const [_0x78289a, _0x215469] = _0x46840b.useState(false);
  const [_0x516d91, _0x915e04] = _0x46840b.useState((_0x5260b6.fields || []).reduce((_0x50343b, _0x3af279) => ({
    ..._0x50343b,
    [_0x3af279.name]: _0x3af279.default
  }), {}));
  const _0x322ec2 = useStyles();
  const _0x4590ad = async () => {
    if (_0x299cc3) {
      _0x16d056("");
      return;
    }
    _0x4efe03(true);
    _0x16d056("");
    _0x215469(false);
    let _0xc9b4f3;
    if (_0x5260b6.isConfirm) {
      _0xc9b4f3 = await _0x5260b6.onSubmit();
    } else {
      const _0x310484 = {};
      _0x5260b6.fields.forEach(_0x2669ef => {
        _0x310484[_0x2669ef.name] = _0x516d91[_0x2669ef.name];
        if (_0x2669ef.type === "date") {
          _0x310484[_0x2669ef.name] = Math.round(_0x516d91[_0x2669ef.name].getTime() / 1000);
        }
      });
      _0xc9b4f3 = await _0x5260b6.onSubmit(_0x310484);
    }
    if (!_0xc9b4f3.ok) {
      _0x4efe03(false);
      _0x16d056(_0xc9b4f3.message);
      return;
    }
    _0x4efe03(false);
    _0x16d056("");
    _0x215469(true);
    setTimeout(() => {
      _0x5260b6.onCancel();
    }, 1500);
  };
  const _0xce71f8 = !_0x5260b6.isConfirm && !_0x21cf2a && !_0x78289a && !_0x299cc3;
  return _0xe75b3a.jsxs("div", {
    className: _0x322ec2.formWrapper,
    children: [_0xe75b3a.jsxs("div", {
      className: _0x322ec2.inputWrapper,
      children: [_0x21cf2a && _0xe75b3a.jsx("div", {
        className: _0x322ec2.loading,
        children: _0xe75b3a.jsx(_0x373238, {})
      }), _0x299cc3 && _0xe75b3a.jsx("div", {
        className: _0x322ec2.loading,
        children: _0xe75b3a.jsx(_0x29fffa, {
          variant: "body1",
          children: _0x299cc3
        })
      }), _0x78289a && _0xe75b3a.jsx("div", {
        className: _0x322ec2.loading,
        children: _0xe75b3a.jsx(_0x5f15c8, {})
      }), _0xce71f8 && _0x5260b6.fields.map(_0x538cd2 => _0xe75b3a.jsxs("div", {
        className: _0x322ec2.inputFieldWrapper,
        children: [(!_0x538cd2.type || _0x538cd2.type === "text") && _0xe75b3a.jsx(_0x180387.Text, {
          icon: "pen",
          label: _0x538cd2.label,
          onChange: _0x365e5a => _0x915e04(_0xfc0672 => ({
            ..._0xfc0672,
            [_0x538cd2.name]: _0x365e5a
          })),
          value: _0x516d91[_0x538cd2.name] || ""
        }), _0x538cd2.type === "checkbox" && _0xe75b3a.jsx(_0x180387.Checkbox, {
          label: _0x538cd2.label,
          onChange: _0x564832 => _0x915e04(_0x4a5662 => ({
            ..._0x4a5662,
            [_0x538cd2.name]: _0x564832
          })),
          checked: _0x516d91[_0x538cd2.name] || false
        }), _0x538cd2.type === "date" && _0xe75b3a.jsx(_0x180387.DatePicker, {
          label: _0x538cd2.label,
          onChange: _0x22aa2b => _0x915e04(_0x3c4edf => ({
            ..._0x3c4edf,
            [_0x538cd2.name]: _0x22aa2b
          })),
          value: _0x516d91[_0x538cd2.name] || new Date()
        }), _0x538cd2.type === "select" && _0xe75b3a.jsx(_0x180387.Select, {
          items: _0x538cd2.options,
          label: _0x538cd2.label,
          onChange: _0x3a9572 => _0x915e04(_0x10fc18 => ({
            ..._0x10fc18,
            [_0x538cd2.name]: _0x3a9572
          })),
          value: _0x516d91[_0x538cd2.name] || _0x538cd2.options[0].id
        })]
      }, _0x538cd2.label)), !_0x21cf2a && !_0x299cc3 && !_0x78289a && _0x5260b6.isConfirm && _0xe75b3a.jsx("div", {
        className: _0x322ec2.loading,
        children: _0xe75b3a.jsx(_0x29fffa, {
          i18n: true,
          i18nSource: "ui:text:news-archive",
          variant: "body1",
          children: "Are you sure? This action cannot be undone"
        })
      })]
    }), !_0x21cf2a && !_0x78289a && _0xe75b3a.jsxs("div", {
      className: _0x322ec2.actionsWrapper,
      children: [_0xe75b3a.jsx(_0x31f241.Secondary, {
        onClick: _0x5260b6.onCancel,
        size: "small",
        children: "Cancel"
      }), _0xe75b3a.jsx(_0x31f241.Primary, {
        onClick: _0x4590ad,
        size: "small",
        children: !!_0x299cc3 ? "Ok Pal" : "Submit"
      })]
    })]
  });
};
const Section = _0x392406 => {
  const [_0x4401ff, _0x2a9ddd] = _0x46840b.useState({
    show: false,
    fields: []
  });
  const [_0x11cd33, _0x23218c] = _0x46840b.useState(null);
  const _0x17ab53 = Boolean(_0x11cd33);
  const _0x63b18e = _0xe44970 => {
    _0x23218c(_0xe44970.currentTarget);
  };
  const _0x21db68 = () => {
    _0x23218c(null);
  };
  const _0x71a1ec = useStyles();
  const _0x5b360a = Math.random();
  return _0xe75b3a.jsxs("div", {
    className: _0x71a1ec.wrapper,
    children: [_0x4401ff.show && _0xe75b3a.jsx("div", {
      className: _0x71a1ec.modalWrapper,
      children: _0xe75b3a.jsx(SectionForm, {
        fields: _0x4401ff.fields,
        onCancel: () => _0x2a9ddd({
          show: false
        }),
        onSubmit: _0x2c1dc6 => _0x4401ff.onSubmit(_0x2c1dc6)
      })
    }), _0xe75b3a.jsxs("div", {
      className: _0x71a1ec.itemHeadingInner,
      children: [_0xe75b3a.jsx(_0x29fffa, {
        variant: "h6",
        children: _0x392406.heading
      }), _0xe75b3a.jsxs("div", {
        className: _0x71a1ec.burgerWrapper,
        children: [_0x392406.action && _0xe75b3a.jsx("div", {
          children: _0xe75b3a.jsx(_0x31f241.Primary, {
            onClick: () => _0x2a9ddd({
              show: true,
              fields: _0x392406.action.fields,
              onSubmit: _0x392406.action.onSubmit
            }),
            size: "small",
            children: _0x392406.action.label
          })
        }), _0x392406.burger && _0xe75b3a.jsxs("div", {
          className: _0x71a1ec.itemHeadingActions,
          children: [_0xe75b3a.jsx("div", {
            "aria-controls": "fade-menu-" + _0x5b360a,
            "aria-haspopup": "true",
            onClick: _0x63b18e,
            children: _0xe75b3a.jsx(_0x3fc3de, {
              icon: "ellipsis-v"
            })
          }), _0xe75b3a.jsx(_0x32a750, {
            id: "fade-menu-" + _0x5b360a,
            anchorEl: _0x11cd33,
            keepMounted: true,
            open: _0x17ab53,
            onClose: _0x21db68,
            TransitionComponent: _0x22c705,
            children: _0x392406.burger.map(({
              label: _0x1e777b,
              onClick: _0x10d3a5,
              ..._0x5a0ea7
            }) => _0xe75b3a.jsx(_0x5dc4a3, {
              onClick: () => {
                _0x21db68();
                if (_0x10d3a5) {
                  _0x10d3a5();
                }
                if (_0x5a0ea7.isForm) {
                  _0x2a9ddd({
                    show: true,
                    fields: _0x5a0ea7.fields,
                    onSubmit: _0x5a0ea7.onSubmit
                  });
                }
              },
              children: _0x1e777b
            }, _0x1e777b))
          })]
        })]
      })]
    }), _0x392406.children]
  });
};
const Item = ({
  includeConfirm = true,
  ..._0x190c2e
}) => {
  const [_0x5e2804, _0x22abc9] = _0x46840b.useState(false);
  const [_0x1db9ed, _0x53271f] = _0x46840b.useState({
    show: false,
    fields: []
  });
  const [_0x176f17, _0x5ebe62] = _0x46840b.useState(null);
  const _0x2bd95c = Boolean(_0x176f17);
  const _0x5e9309 = _0x3e6f7e => {
    _0x5ebe62(_0x3e6f7e.currentTarget);
  };
  const _0x216023 = () => {
    _0x5ebe62(null);
  };
  const _0xa45a3a = useStyles();
  const _0x5d32c0 = Math.random();
  return _0xe75b3a.jsxs("div", {
    className: _0xa45a3a.itemWrapper,
    children: [_0x1db9ed.show && _0xe75b3a.jsx("div", {
      className: _0xa45a3a.modalWrapper,
      children: _0xe75b3a.jsx(SectionForm, {
        fields: _0x1db9ed.fields,
        isConfirm: _0x1db9ed.isConfirm,
        onCancel: () => _0x53271f({
          show: false
        }),
        onSubmit: _0x5744a0 => _0x1db9ed.onSubmit(_0x5744a0)
      })
    }), _0x5e2804 && _0xe75b3a.jsx("div", {
      className: _0xa45a3a.modalWrapper,
      children: _0xe75b3a.jsx(_0x373238, {})
    }), _0xe75b3a.jsxs("div", {
      className: _0xa45a3a.itemHeading,
      children: [_0xe75b3a.jsxs("div", {
        className: _0xa45a3a.itemHeadingInner,
        children: [_0xe75b3a.jsx(_0x29fffa, {
          variant: "body1",
          children: _0x190c2e.heading
        }), _0x190c2e.headingExtra && _0xe75b3a.jsx(_0x29fffa, {
          variant: "body1",
          children: _0x190c2e.headingExtra
        })]
      }), _0x190c2e.actions && _0x190c2e.actions.length > 0 && _0xe75b3a.jsxs("div", {
        className: _0xa45a3a.itemHeadingActions,
        children: [_0xe75b3a.jsx("div", {
          "aria-controls": "fade-menu-" + _0x5d32c0,
          "aria-haspopup": "true",
          onClick: _0x5e9309,
          children: _0xe75b3a.jsx(_0x3fc3de, {
            icon: "ellipsis-v"
          })
        }), _0xe75b3a.jsx(_0x32a750, {
          id: "fade-menu-" + _0x5d32c0,
          anchorEl: _0x176f17,
          keepMounted: true,
          open: _0x2bd95c,
          onClose: _0x216023,
          TransitionComponent: _0x22c705,
          children: _0x190c2e.actions.map(({
            label: _0x983714,
            onClick: _0x1f6d2c,
            ..._0x428818
          }) => _0xe75b3a.jsx(_0x5dc4a3, {
            onClick: () => {
              _0x216023();
              if (_0x1f6d2c) {
                _0x1f6d2c({
                  loading: _0x22abc9
                });
              }
              if (_0x428818.isForm) {
                _0x53271f({
                  show: true,
                  fields: _0x428818.fields,
                  onSubmit: _0x428818.onSubmit
                });
              }
              if (_0x428818.isConfirm) {
                _0x53271f({
                  isConfirm: true,
                  show: true,
                  onSubmit: _0x428818.onConfirm
                });
              }
            },
            children: _0x983714
          }, _0x983714))
        })]
      })]
    }), _0x46840b.Children.map(_0x190c2e.children, _0x29c4d6 => {
      const _0x5c291e = {
        confirm: _0x291130 => _0x53271f({
          isConfirm: true,
          show: true,
          onSubmit: _0x291130
        })
      };
      if (_0x46840b.isValidElement(_0x29c4d6)) {
        return _0x46840b.cloneElement(_0x29c4d6, includeConfirm ? _0x5c291e : {});
      }
      return _0x29c4d6;
    })]
  });
};
const HtmlTooltip = _0xa4f406(_0x5bf1f7 => ({
  tooltip: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: "none",
    fontSize: _0x5bf1f7.typography.pxToRem(12),
    position: "relative"
  }
}))(_0x54a7ba);
const FootageItem = _0x8e9764 => {
  const [_0x259210, _0x2a75a5] = _0xb23e62.useState(false);
  return _0xe75b3a.jsx(_0x2ab256, {
    style: {
      width: "100%"
    },
    children: _0xe75b3a.jsx(_0x2ab256.Details, {
      description: _0xe75b3a.jsxs("div", {
        children: [_0xe75b3a.jsxs(_0x29fffa, {
          i18n: "Submitted By",
          i18nSource: "ui:text:news-archive",
          variant: "body2",
          children: ["Submitted By: ", _0x8e9764.author, " - ", _0x8e9764.information.dateString]
        }), _0xe75b3a.jsxs(_0x29fffa, {
          i18n: ["Location", "Duration"],
          i18nSource: "ui:text:news-archive",
          variant: "body2",
          children: ["Location: ", _0x8e9764.information.location, " - Duration: ", _0x8e9764.information.duration, "s"]
        }), _0x8e9764.information.clips?.map(_0x421f18 => {
          let _0x4dc76b = "";
          let _0x4f706b;
          switch (_0x421f18.type) {
            case "clip":
              _0x4dc76b = "https://clips.twitch.tv/" + _0x421f18.url;
              break;
            case "vod":
              _0x4dc76b = "https://player.twitch.tv/?video=" + _0x421f18.url + "&volume=0.5&parent=twitch.tv";
              break;
            case "streamable":
              _0x4dc76b = "https://streamable.com/" + _0x421f18.url;
              _0x4f706b = _0xe75b3a.jsx("iframe", {
                title: "streamable",
                src: "https://streamable.com/o/" + _0x421f18.url,
                frameBorder: "0",
                scrolling: "no",
                width: "560",
                height: "315",
                allowFullScreen: false
              });
              break;
            case "youtube":
              _0x4dc76b = "https://youtu.be/" + _0x421f18.url;
              _0x4f706b = _0xe75b3a.jsx("iframe", {
                width: "560",
                height: "315",
                src: "https://www.youtube.com/embed/" + _0x421f18.url,
                title: "YouTube video player",
                frameBorder: "0",
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                allowFullScreen: false
              });
              break;
            case "imgur":
              _0x4dc76b = "https://i.imgur.com/" + _0x421f18.url;
              _0x4f706b = _0xe75b3a.jsx(_0x9bf221, {
                onClickAway: () => _0x2a75a5(false),
                children: _0xe75b3a.jsx(HtmlTooltip, {
                  disableFocusListener: true,
                  disableHoverListener: true,
                  disableTouchListener: true,
                  title: _0xe75b3a.jsx(_0x46840b.Fragment, {
                    children: _0xe75b3a.jsx("div", {
                      onClick: () => _0x2a75a5(false),
                      children: _0xe75b3a.jsx("img", {
                        src: _0x4dc76b,
                        alt: _0x4dc76b,
                        style: {
                          maxHeight: 600,
                          maxWidth: 800
                        }
                      })
                    })
                  }),
                  placement: "left",
                  open: _0x259210,
                  onClose: () => _0x2a75a5(false),
                  children: _0xe75b3a.jsx("div", {
                    className: "editor-image",
                    onClick: () => _0x2a75a5(_0x5f5b0c => !_0x5f5b0c),
                    style: {
                      backgroundImage: "url(" + _0x4dc76b + ")"
                    }
                  })
                })
              }, Math.random());
          }
          return _0xe75b3a.jsxs(_0x29fffa, {
            variant: "body1",
            style: {
              margin: "8px 0"
            },
            children: [_0x421f18.title, _0xe75b3a.jsx(_0x29fffa, {
              variant: "body2",
              style: {
                color: "orange",
                cursor: "pointer"
              },
              children: _0x4dc76b
            }), _0x4f706b]
          });
        }), _0xe75b3a.jsx(_0x31f241.Secondary, {
          onClick: () => _0x8e9764.performAction("export", _0x8e9764.information),
          children: "Copy to Tape"
        })]
      }),
      title: _0xe75b3a.jsxs(_0x29fffa, {
        variant: "body1",
        children: [_0x8e9764.information.title || "", " (Tape #", _0x8e9764.information.id, ")"]
      })
    })
  });
};
const Approvals = _0x246c55 => {
  return _0xe75b3a.jsx(Section, {
    heading: "Approve / Deny Footage",
    children: _0x246c55.archiveItems.filter(_0x4f02cc => _0x4f02cc.approved === 0).map(_0x3f3661 => _0xe75b3a.jsxs("div", {
      children: [_0xe75b3a.jsx(FootageItem, {
        performAction: (_0x3418f1, _0x8cbd61) => _0x246c55.performAction(_0x3418f1, _0x8cbd61),
        ..._0x3f3661
      }), _0xe75b3a.jsxs("div", {
        style: {
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: 8
        },
        children: [_0xe75b3a.jsx(_0x31f241.Secondary, {
          onClick: () => _0x246c55.performAction("reject", _0x3f3661),
          children: "Reject"
        }), _0xe75b3a.jsx(_0x31f241.Tertiary, {
          onClick: () => _0x246c55.performAction("archive", _0x3f3661),
          style: {
            marginLeft: 16
          },
          children: "Approve & Archive"
        }), _0xe75b3a.jsx(_0x31f241.Primary, {
          onClick: () => _0x246c55.performAction("approve", _0x3f3661),
          style: {
            marginLeft: 16
          },
          children: "Approve"
        })]
      })]
    }, _0x3f3661.id))
  });
};
let Container$3 = class Container extends _0x46840b.Component {
  getNewsArchives = async () => {
    const _0x431ab2 = await _0x1681be("np-ui:getNewsArchives", {
      approvals: true
    }, {
      returnData: _0x4852bf.getNewsArchives()
    });
    this.props.updateState({
      archiveItems: _0x431ab2.data
    });
  };
  async componentDidMount() {
    this.getNewsArchives();
  }
  performAction = async (_0x35f6e9, _0x3b1391) => {
    await _0x1681be("np-ui:newsArchiveAction", {
      action: _0x35f6e9,
      data: _0x3b1391
    });
    this.getNewsArchives();
  };
  render() {
    return _0xe75b3a.jsx(Approvals, {
      ...this.props,
      performAction: this.performAction
    });
  }
};
let searchValueTimeout = 0;
const Archives = _0x20243a => {
  const [_0x55508f, _0x7e7699] = _0x46840b.useState("");
  const _0x1735ca = _0x3c27ea => {
    _0x7e7699(_0x3c27ea);
    clearTimeout(searchValueTimeout);
    searchValueTimeout = setTimeout(() => {
      _0x20243a.changeSearchValue(_0x3c27ea);
    }, 1000);
  };
  return _0xe75b3a.jsxs(Section, {
    heading: "Historic Footage",
    children: [_0xe75b3a.jsx("div", {
      style: {
        marginBottom: 8
      },
      children: _0xe75b3a.jsx(_0x180387.Search, {
        onChange: _0x1735ca,
        value: _0x55508f
      })
    }), _0x20243a.archiveItems.filter(_0x54f2fc => _0x54f2fc.approved === 1).map(_0x423cd6 => _0xe75b3a.jsxs("div", {
      children: [_0xe75b3a.jsx(FootageItem, {
        performAction: (_0x42c95f, _0x1008f9) => _0x20243a.performAction(_0x42c95f, _0x1008f9),
        ..._0x423cd6
      }), _0xe75b3a.jsx("div", {
        style: {
          marginBottom: 32
        },
        children: _0xe75b3a.jsx(_0x2ab256, {
          drawer: _0xe75b3a.jsx(_0x2ab256.Drawer, {
            items: [],
            children: _0xe75b3a.jsx("div", {
              className: "flex-centered flex-space-between",
              children: _0xe75b3a.jsx(_0x31f241.Secondary, {
                onClick: () => _0x20243a.performAction("reject", _0x423cd6),
                children: "Delete"
              })
            })
          }),
          children: _0xe75b3a.jsx(_0x2ab256.Details, {
            title: "Delete Footage?"
          })
        })
      })]
    }, _0x423cd6.id))]
  });
};
let Container$2 = class Container extends _0x46840b.Component {
  getNewsArchives = async (_0x570276 = "") => {
    const _0x316da6 = await _0x1681be("np-ui:getNewsArchives", {
      search: _0x570276
    }, {
      returnData: _0x4852bf.getNewsArchives()
    });
    this.props.updateState({
      archiveItems: _0x316da6.data
    });
  };
  changeSearchValue = _0xbf2fe9 => {
    this.getNewsArchives(_0xbf2fe9);
  };
  async componentDidMount() {
    this.getNewsArchives();
  }
  performAction = async (_0x5f036d, _0xe41c9e) => {
    await _0x1681be("np-ui:newsArchiveAction", {
      action: _0x5f036d,
      data: _0xe41c9e
    });
    this.getNewsArchives();
  };
  render() {
    return _0xe75b3a.jsx(Archives, {
      ...this.props,
      changeSearchValue: this.changeSearchValue,
      performAction: this.performAction
    });
  }
};
const {
  mapDispatchToProps,
  mapStateToProps
} = _0x49c902(_0x33e17e);
class Container extends _0x46840b.Component {
  state = {
    activeId: -1,
    show: false
  };
  onHide = () => {
    this.setState({
      show: false
    });
  };
  onShow = async () => {
    this.setState({
      show: true
    });
  };
  createModules = () => {
    const _0x404732 = [["approvals", {
      id: 1,
      label: "Approvals"
    }], ["archives", {
      id: 2,
      label: "Archives"
    }]];
    return _0x404732.map(([_0x7d39d4, _0x19c857]) => _0x19c857);
  };
  render() {
    return _0xe75b3a.jsx(_0x367cda, {
      center: true,
      store: true,
      name: appName,
      onEscape: this.onHide,
      onHide: this.onHide,
      onShow: this.onShow,
      children: this.state.show && _0xe75b3a.jsxs(_0x132679, {
        activeItem: this.state.activeId,
        items: this.createModules(),
        onMenuItemClick: ({
          id: _0x246927
        }) => this.setState({
          activeId: _0x246927
        }),
        children: [this.state.activeId === -1 && _0xe75b3a.jsx("div", {}), this.state.activeId === 1 && _0xe75b3a.jsx(Container$3, {
          ...this.props
        }), this.state.activeId === 2 && _0xe75b3a.jsx(Container$2, {
          ...this.props
        })]
      })
    });
  }
}
const Container$1 = _0x5a5ce0(mapStateToProps, mapDispatchToProps)(Container);
const config = () => {
  return {
    name: appName,
    render: Container$1,
    type: _0x35bdcc.Application
  };
};
export { config as default };