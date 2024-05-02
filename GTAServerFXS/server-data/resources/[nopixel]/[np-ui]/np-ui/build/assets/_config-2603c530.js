import { R as _0x48b99e, j as _0x43b906, y as _0x405bbf, D as _0x4614e4, E as _0x5a3c00, r as _0x21382c, k as _0x5c2b5d } from "./vendor-6c45b22f.js";
import { n as _0x25a55, d as _0x4afadd, s as _0x1e96ad, i as _0x1c29bf, C as _0x2a3cd9 } from "./index-d5aaa08b.js";
import { A as _0x433849 } from "./ui-app-6ee97cab.js";
import { G as _0x21a066 } from "./general-manager-96fdf49f.js";
import { a as _0x30cec8 } from "./date-1e39c206.js";
import { I as _0x2fb6f2 } from "./icon-7f5cdae2.js";
import { T as _0x101976 } from "./text-f7ee3e03.js";
import { B as _0x42d8e3 } from "./button-c47bff31.js";
import { C as _0xab9b37 } from "./checkmark-036a14b0.js";
import { F as _0x5de0a2 } from "./input-c6588ceb.js";
import { S as _0x215e39 } from "./spinner-1649f31d.js";
import { m as _0x55b6c7, b as _0xec1168 } from "./styles-61014012.js";
import { m as _0x1aa437 } from "./format-10690d6f.js";
import { P as _0x3ea46a } from "./paper-22e478e9.js";
import { c as _0x3f7bc6 } from "./misc-13f33aa2.js";
import _0x177c58, { appName } from "./store-2240da27.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
import "./translations-7705db3f.js";
import "./index-ae383549.js";
import "./tooltip-cb871d8a.js";
const useStyles$4 = _0x55b6c7({
  wrapper: () => ({
    padding: 8
  }),
  modalWrapper: () => ({
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    ..._0xec1168.flexCenter,
    zIndex: 100
  }),
  formWrapper: () => ({
    pointerEvents: "all",
    display: "flex",
    flexDirection: "column",
    width: "50%",
    maxHeight: "90%",
    overflowY: "scroll",
    backgroundColor: _0xec1168.bgSecondary()
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
    ..._0xec1168.flexCenter
  }),
  itemWrapper: () => ({
    padding: 8,
    marginTop: 8,
    width: "100%",
    backgroundColor: _0xec1168.bgSecondary()
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
    ..._0xec1168.flexCenter,
    height: 24,
    width: "auto"
  })
});
const SectionForm = _0x935462 => {
  const [_0x319bcb, _0x10cd4a] = _0x48b99e.useState(false);
  const [_0x31f752, _0x3ab48a] = _0x48b99e.useState("");
  const [_0x30d146, _0x285333] = _0x48b99e.useState(false);
  const [_0x1baa9c, _0x5d5b18] = _0x48b99e.useState((_0x935462.fields || []).reduce((_0xcb7a30, _0x1ce550) => ({
    ..._0xcb7a30,
    [_0x1ce550.name]: _0x1ce550.default
  }), {}));
  const _0x297259 = useStyles$4();
  const _0x351bc1 = async () => {
    if (_0x31f752) {
      _0x3ab48a("");
      return;
    }
    _0x10cd4a(true);
    _0x3ab48a("");
    _0x285333(false);
    let _0x124e6b;
    if (_0x935462.isConfirm) {
      _0x124e6b = await _0x935462.onSubmit();
    } else {
      const _0x345526 = {};
      _0x935462.fields.forEach(_0x57f54d => {
        _0x345526[_0x57f54d.name] = _0x1baa9c[_0x57f54d.name];
        if (_0x57f54d.type === "date") {
          _0x345526[_0x57f54d.name] = Math.round(_0x1baa9c[_0x57f54d.name].getTime() / 1000);
        }
      });
      _0x124e6b = await _0x935462.onSubmit(_0x345526);
    }
    if (!_0x124e6b.ok) {
      _0x10cd4a(false);
      _0x3ab48a(_0x124e6b.message);
      return;
    }
    _0x10cd4a(false);
    _0x3ab48a("");
    _0x285333(true);
    setTimeout(() => {
      _0x935462.onCancel();
    }, 1500);
  };
  const _0x2c0b1e = !_0x935462.isConfirm && !_0x319bcb && !_0x30d146 && !_0x31f752;
  return _0x43b906.jsxs("div", {
    className: _0x297259.formWrapper,
    children: [_0x43b906.jsxs("div", {
      className: _0x297259.inputWrapper,
      children: [_0x319bcb && _0x43b906.jsx("div", {
        className: _0x297259.loading,
        children: _0x43b906.jsx(_0x215e39, {})
      }), _0x31f752 && _0x43b906.jsx("div", {
        className: _0x297259.loading,
        children: _0x43b906.jsx(_0x101976, {
          variant: "body1",
          children: _0x31f752
        })
      }), _0x30d146 && _0x43b906.jsx("div", {
        className: _0x297259.loading,
        children: _0x43b906.jsx(_0xab9b37, {})
      }), _0x2c0b1e && _0x935462.fields.map(_0x54a5c5 => _0x43b906.jsxs("div", {
        className: _0x297259.inputFieldWrapper,
        children: [(!_0x54a5c5.type || _0x54a5c5.type === "text") && _0x43b906.jsx(_0x5de0a2.Text, {
          i18n: true,
          icon: "pen",
          label: _0x54a5c5.label,
          onChange: _0x580422 => _0x5d5b18(_0xcccb3 => ({
            ..._0xcccb3,
            [_0x54a5c5.name]: _0x580422
          })),
          value: _0x1baa9c[_0x54a5c5.name] || ""
        }), _0x54a5c5.type === "checkbox" && _0x43b906.jsx(_0x5de0a2.Checkbox, {
          i18n: true,
          label: _0x54a5c5.label,
          onChange: _0x41a0fd => _0x5d5b18(_0x59c1fa => ({
            ..._0x59c1fa,
            [_0x54a5c5.name]: _0x41a0fd
          })),
          checked: _0x1baa9c[_0x54a5c5.name] || false
        }), _0x54a5c5.type === "date" && _0x43b906.jsx(_0x5de0a2.DatePicker, {
          i18n: true,
          label: _0x54a5c5.label,
          onChange: _0x40d1b1 => _0x5d5b18(_0x22051e => ({
            ..._0x22051e,
            [_0x54a5c5.name]: _0x40d1b1
          })),
          value: _0x1baa9c[_0x54a5c5.name] || new Date()
        }), _0x54a5c5.type === "select" && _0x43b906.jsx(_0x5de0a2.Select, {
          i18n: true,
          items: _0x54a5c5.options,
          label: _0x54a5c5.label,
          onChange: _0x44fc68 => _0x5d5b18(_0x3f27be => ({
            ..._0x3f27be,
            [_0x54a5c5.name]: _0x44fc68
          })),
          value: _0x1baa9c[_0x54a5c5.name] || _0x54a5c5.options[0].id
        })]
      }, _0x54a5c5.label)), !_0x319bcb && !_0x31f752 && !_0x30d146 && _0x935462.isConfirm && _0x43b906.jsx("div", {
        className: _0x297259.loading,
        children: _0x43b906.jsx(_0x101976, {
          i18n: true,
          i18nSource: "ui:text:san-andreas-state",
          variant: "body1",
          children: "Are you sure? This action cannot be undone"
        })
      })]
    }), !_0x319bcb && !_0x30d146 && _0x43b906.jsxs("div", {
      className: _0x297259.actionsWrapper,
      children: [_0x43b906.jsx(_0x42d8e3.Secondary, {
        onClick: _0x935462.onCancel,
        size: "small",
        children: "Cancel"
      }), _0x43b906.jsx(_0x42d8e3.Primary, {
        onClick: _0x351bc1,
        size: "small",
        children: !!_0x31f752 ? "Ok Pal" : "Submit"
      })]
    })]
  });
};
const Section = _0x286e14 => {
  const [_0x426a3b, _0x3a6312] = _0x48b99e.useState({
    show: false,
    fields: []
  });
  const [_0x1194aa, _0x3ecd5c] = _0x48b99e.useState(null);
  const _0x596923 = Boolean(_0x1194aa);
  const _0x114785 = _0x594ff7 => {
    _0x3ecd5c(_0x594ff7.currentTarget);
  };
  const _0x4f8320 = () => {
    _0x3ecd5c(null);
  };
  const _0x2c1571 = useStyles$4();
  const _0x7b310d = Math.random();
  return _0x43b906.jsxs("div", {
    className: _0x2c1571.wrapper,
    children: [_0x426a3b.show && _0x43b906.jsx("div", {
      className: _0x2c1571.modalWrapper,
      children: _0x43b906.jsx(SectionForm, {
        fields: _0x426a3b.fields,
        onCancel: () => _0x3a6312({
          show: false
        }),
        onSubmit: _0x5804c1 => _0x426a3b.onSubmit(_0x5804c1)
      })
    }), _0x43b906.jsxs("div", {
      className: _0x2c1571.itemHeadingInner,
      children: [_0x43b906.jsx(_0x101976, {
        variant: "h6",
        children: _0x286e14.heading
      }), _0x43b906.jsxs("div", {
        className: _0x2c1571.burgerWrapper,
        children: [_0x286e14.action && _0x43b906.jsx("div", {
          children: _0x43b906.jsx(_0x42d8e3.Primary, {
            onClick: () => _0x3a6312({
              show: true,
              fields: _0x286e14.action.fields,
              onSubmit: _0x286e14.action.onSubmit
            }),
            size: "small",
            children: _0x286e14.action.label
          })
        }), _0x286e14.burger && _0x43b906.jsxs("div", {
          className: _0x2c1571.itemHeadingActions,
          children: [_0x43b906.jsx("div", {
            "aria-controls": "fade-menu-" + _0x7b310d,
            "aria-haspopup": "true",
            onClick: _0x114785,
            children: _0x43b906.jsx(_0x2fb6f2, {
              icon: "ellipsis-v"
            })
          }), _0x43b906.jsx(_0x405bbf, {
            id: "fade-menu-" + _0x7b310d,
            anchorEl: _0x1194aa,
            keepMounted: true,
            open: _0x596923,
            onClose: _0x4f8320,
            TransitionComponent: _0x4614e4,
            children: _0x286e14.burger.map(({
              label: _0x29def2,
              onClick: _0x28e90f,
              ..._0x3f381a
            }) => _0x43b906.jsx(_0x5a3c00, {
              onClick: () => {
                _0x4f8320();
                if (_0x28e90f) {
                  _0x28e90f();
                }
                if (_0x3f381a.isForm) {
                  _0x3a6312({
                    show: true,
                    fields: _0x3f381a.fields,
                    onSubmit: _0x3f381a.onSubmit
                  });
                }
              },
              children: _0x29def2
            }, _0x29def2))
          })]
        })]
      })]
    }), _0x286e14.children]
  });
};
const Item = ({
  includeConfirm = true,
  ..._0x477d5f
}) => {
  const [_0x2c1dc5, _0x3502ec] = _0x48b99e.useState(false);
  const [_0x141f73, _0x219b7a] = _0x48b99e.useState({
    show: false,
    fields: []
  });
  const [_0x395dff, _0x16a4ad] = _0x48b99e.useState(null);
  const _0x3d93c8 = Boolean(_0x395dff);
  const _0xbf6121 = _0x3e07a2 => {
    _0x16a4ad(_0x3e07a2.currentTarget);
  };
  const _0x19d011 = () => {
    _0x16a4ad(null);
  };
  const _0x4fcbba = useStyles$4();
  const _0x51519c = Math.random();
  return _0x43b906.jsxs("div", {
    className: _0x4fcbba.itemWrapper,
    children: [_0x141f73.show && _0x43b906.jsx("div", {
      className: _0x4fcbba.modalWrapper,
      children: _0x43b906.jsx(SectionForm, {
        fields: _0x141f73.fields,
        isConfirm: _0x141f73.isConfirm,
        onCancel: () => _0x219b7a({
          show: false
        }),
        onSubmit: _0x3c73e6 => _0x141f73.onSubmit(_0x3c73e6)
      })
    }), _0x2c1dc5 && _0x43b906.jsx("div", {
      className: _0x4fcbba.modalWrapper,
      children: _0x43b906.jsx(_0x215e39, {})
    }), _0x43b906.jsxs("div", {
      className: _0x4fcbba.itemHeading,
      children: [_0x43b906.jsxs("div", {
        className: _0x4fcbba.itemHeadingInner,
        children: [_0x43b906.jsx(_0x101976, {
          variant: "body1",
          children: _0x477d5f.heading
        }), _0x477d5f.headingExtra && _0x43b906.jsx(_0x101976, {
          variant: "body1",
          children: _0x477d5f.headingExtra
        })]
      }), _0x477d5f.actions && _0x477d5f.actions.length > 0 && _0x43b906.jsxs("div", {
        className: _0x4fcbba.itemHeadingActions,
        children: [_0x43b906.jsx("div", {
          "aria-controls": "fade-menu-" + _0x51519c,
          "aria-haspopup": "true",
          onClick: _0xbf6121,
          children: _0x43b906.jsx(_0x2fb6f2, {
            icon: "ellipsis-v"
          })
        }), _0x43b906.jsx(_0x405bbf, {
          id: "fade-menu-" + _0x51519c,
          anchorEl: _0x395dff,
          keepMounted: true,
          open: _0x3d93c8,
          onClose: _0x19d011,
          TransitionComponent: _0x4614e4,
          children: _0x477d5f.actions.map(({
            label: _0x2a46c5,
            onClick: _0xb0fac5,
            ..._0x34a3b9
          }) => _0x43b906.jsx(_0x5a3c00, {
            onClick: () => {
              _0x19d011();
              if (_0xb0fac5) {
                _0xb0fac5({
                  loading: _0x3502ec
                });
              }
              if (_0x34a3b9.isForm) {
                _0x219b7a({
                  show: true,
                  fields: _0x34a3b9.fields,
                  onSubmit: _0x34a3b9.onSubmit
                });
              }
              if (_0x34a3b9.isConfirm) {
                _0x219b7a({
                  isConfirm: true,
                  show: true,
                  onSubmit: _0x34a3b9.onConfirm
                });
              }
            },
            children: _0x2a46c5
          }, _0x2a46c5))
        })]
      })]
    }), _0x48b99e.Children.map(_0x477d5f.children, _0x28bbe7 => {
      const _0x42bdae = {
        confirm: _0xbcaa28 => _0x219b7a({
          isConfirm: true,
          show: true,
          onSubmit: _0xbcaa28
        })
      };
      if (_0x48b99e.isValidElement(_0x28bbe7)) {
        return _0x48b99e.cloneElement(_0x28bbe7, includeConfirm ? _0x42bdae : {});
      }
      return _0x28bbe7;
    })]
  });
};
const useStyles$3 = _0x55b6c7({
  ballotItem: () => ({
    borderTop: "1px solid white",
    margin: "8px 0",
    padding: "8px 0 0"
  }),
  ballotTop: () => ({
    display: "flex"
  }),
  nameDescription: () => ({
    display: "flex",
    alignItems: "center",
    flex: 1
  }),
  meta: () => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 36,
    minWidth: 200
  }),
  action: () => ({
    ..._0xec1168.flexCenter,
    alignItems: "center",
    justifyContent: "flex-end",
    height: 36,
    width: 40
  })
});
const BallotOption = ({
  confirm: _0xe187d,
  active: _0x13ddd4,
  option: _0x5b9e1c,
  ..._0x21ef85
} = {}) => {
  const _0x5930d0 = useStyles$3();
  const _0xfb2625 = () => {
    _0xe187d(async () => {
      const _0x3d2205 = await _0x21ef85.deleteBallot({}, _0x5b9e1c.id);
      return _0x3d2205.meta;
    });
  };
  return _0x43b906.jsxs("div", {
    className: _0x5930d0.ballotItem,
    children: [_0x43b906.jsxs("div", {
      className: _0x5930d0.ballotTop,
      children: [_0x43b906.jsx("div", {
        className: _0x5930d0.nameDescription,
        children: _0x43b906.jsx(_0x101976, {
          variant: "body2",
          children: _0x5b9e1c.name
        })
      }), _0x43b906.jsxs("div", {
        className: _0x5930d0.meta,
        children: [_0x5b9e1c.icon && _0x43b906.jsx(_0x2fb6f2, {
          icon: _0x5b9e1c.icon
        }), _0x43b906.jsx(_0x101976, {
          variant: "body2",
          children: _0x5b9e1c.party
        }), !_0x13ddd4 && _0x43b906.jsx(_0x101976, {
          variant: "body2",
          children: "0 vote(s)"
        })]
      }), _0x13ddd4 && _0x43b906.jsx("div", {
        className: _0x5930d0.action,
        onClick: _0xfb2625,
        children: _0x43b906.jsx(_0x2fb6f2, {
          icon: "minus-circle",
          style: {
            color: "#f44336"
          }
        })
      })]
    }), _0x43b906.jsx("div", {
      className: _0x5930d0.ballotTop,
      children: _0x43b906.jsx(_0x101976, {
        variant: "body2",
        children: _0x5b9e1c.description
      })
    })]
  }, _0x5b9e1c.id);
};
const Ballot = _0x3b1267 => {
  return _0x43b906.jsx(Section, {
    action: !_0x3b1267.active ? null : {
      label: "Create Ballot",
      fields: [{
        label: "Name",
        name: "name",
        default: ""
      }, {
        label: "Description",
        name: "description",
        default: ""
      }, {
        label: "Multiple Choice",
        name: "multi",
        type: "checkbox",
        default: false
      }, {
        label: "Start Date",
        name: "start_date",
        type: "date",
        default: new Date()
      }, {
        label: "End Date",
        name: "end_date",
        type: "date",
        default: new Date()
      }, {
        label: "Police Only",
        name: "police",
        type: "checkbox",
        default: false
      }, {
        label: "Medical Only",
        name: "ems,doctor,therapist",
        type: "checkbox",
        default: false
      }, {
        label: "DOJ Only",
        name: "judge,defender",
        type: "checkbox",
        default: false
      }],
      onSubmit: async _0x1fabd8 => {
        const _0x4e7c05 = await _0x3b1267.saveBallot({}, _0x1fabd8);
        return _0x4e7c05.meta;
      }
    },
    heading: _0x3b1267.active ? "Active / Upcoming" : "Expired",
    children: _0x3b1267.ballots.map(_0x1f467d => _0x43b906.jsx(Item, {
      actions: !_0x3b1267.active ? null : [{
        isForm: true,
        fields: [{
          label: "Name",
          name: "name",
          default: ""
        }, {
          label: "Description",
          name: "description",
          default: ""
        }, {
          label: "Icon",
          name: "icon",
          default: "Choose from: https://fontawesome.com/icons?d=gallery&m=free"
        }, {
          label: "Affiliated Party",
          name: "party",
          default: ""
        }],
        onSubmit: async _0x19efe2 => {
          const _0x5a4caa = await _0x3b1267.addBallotOption(_0x1f467d, _0x19efe2);
          return _0x5a4caa.meta;
        },
        label: "Add Option"
      }, {
        isForm: true,
        fields: [{
          label: "Name",
          name: "name",
          default: _0x1f467d.name
        }, {
          label: "Description",
          name: "description",
          default: _0x1f467d.description
        }, {
          label: "Multiple Choice",
          name: "multi",
          type: "checkbox",
          default: _0x1f467d.multi
        }, {
          label: "Start Date",
          name: "start_date",
          type: "date",
          default: new Date(_0x1f467d.start_date * 1000)
        }, {
          label: "End Date",
          name: "end_date",
          type: "date",
          default: new Date(_0x1f467d.end_date * 1000)
        }, {
          label: "Police Only",
          name: "police",
          type: "checkbox",
          default: _0x1f467d.valid_jobs.includes("police")
        }, {
          label: "Medical Only",
          name: "ems,doctor,therapist",
          type: "checkbox",
          default: _0x1f467d.valid_jobs.includes("ems")
        }, {
          label: "DOJ Only",
          name: "judge,defender",
          type: "checkbox",
          default: _0x1f467d.valid_jobs.includes("judge")
        }],
        onSubmit: async _0x3764c2 => {
          const _0x524ca9 = await _0x3b1267.saveBallot(_0x1f467d, _0x3764c2);
          return _0x524ca9.meta;
        },
        label: "Edit Ballot"
      }, {
        isConfirm: true,
        label: "Delete Ballot",
        onConfirm: async () => {
          const _0x4c65f6 = await _0x3b1267.deleteBallot(_0x1f467d);
          return _0x4c65f6.meta;
        }
      }],
      heading: _0x1f467d.name + " (" + (_0x1f467d.multi ? "Multiple Choice" : "Single Choice") + ")",
      headingExtra: _0x30cec8(_0x1f467d.start_date) + " / " + _0x30cec8(_0x1f467d.end_date),
      children: _0x1f467d.options.map(_0x48aff2 => _0x43b906.jsx(BallotOption, {
        ..._0x3b1267,
        option: _0x48aff2,
        active: _0x3b1267.active
      }, _0x48aff2.id))
    }, _0x1f467d.id))
  });
};
const Ballots = _0x410583 => {
  return _0x43b906.jsxs("div", {
    children: [_0x43b906.jsx(Ballot, {
      active: true,
      ballots: _0x410583.activeBallots,
      ..._0x410583
    }), _0x43b906.jsx(Ballot, {
      active: false,
      ballots: _0x410583.expiredBallots,
      ..._0x410583
    })]
  });
};
let Container$7 = class Container extends _0x48b99e.Component {
  getBallots = async () => {
    const _0x240299 = (await _0x25a55("np-ui:getBallots", {}, {
      returnData: "getBallots"
    })).data;
    const _0x242677 = _0x240299.filter(_0x40c416 => new Date(_0x40c416.end_date * 1000) > new Date());
    const _0x17797b = _0x240299.filter(_0x192fca => new Date(_0x192fca.end_date * 1000) < new Date());
    return {
      activeBallots: _0x242677,
      expiredBallots: _0x17797b
    };
  };
  updateBallots = async () => {
    const {
      activeBallots: _0x289283,
      expiredBallots: _0x2ccee5
    } = await this.getBallots();
    this.props.updateState({
      activeBallots: _0x289283,
      expiredBallots: _0x2ccee5
    });
  };
  saveBallot = async (_0x31c785, _0x3e5df5) => {
    const _0x52e8ed = !!_0x31c785.id ? "np-ui:editBallot" : "np-ui:createBallot";
    let _0x58806c = {
      ..._0x3e5df5
    };
    if (_0x31c785.id) {
      _0x58806c.id = _0x31c785.id;
    }
    const _0x33607d = await _0x25a55(_0x52e8ed, _0x58806c);
    if (_0x33607d.meta.ok) {
      this.updateBallots();
    }
    return _0x33607d;
  };
  addBallotOption = async (_0x2b8a87, _0x1ebbba) => {
    const _0x486e59 = "np-ui:addBallotOption";
    const _0x3f3eef = await _0x25a55(_0x486e59, {
      ..._0x1ebbba,
      ballot_id: _0x2b8a87.id
    });
    if (_0x3f3eef.meta.ok) {
      this.updateBallots();
    }
    return _0x3f3eef;
  };
  deleteBallot = async (_0xc0fbe9, _0x4d9c0e = null) => {
    let _0x159b5d = "np-ui:deleteBallot";
    if (_0x4d9c0e) {
      _0x159b5d = _0x159b5d + "Option";
    }
    const _0x4fa7e6 = await _0x25a55(_0x159b5d, {
      id: _0x4d9c0e || _0xc0fbe9.id
    });
    if (_0x4fa7e6.meta.ok) {
      this.updateBallots();
    }
    return _0x4fa7e6;
  };
  async componentDidMount() {
    this.updateBallots();
  }
  render() {
    return _0x43b906.jsx(Ballots, {
      ...this.props,
      addBallotOption: this.addBallotOption,
      deleteBallot: this.deleteBallot,
      saveBallot: this.saveBallot
    });
  }
};
const useStyles$2 = _0x55b6c7({
  accountCharacters: () => ({
    borderTop: "1px solid white",
    margin: "8px 0"
  }),
  accessList: () => ({
    display: "flex",
    "& p": {
      textTransform: "capitalize",
      marginRight: 8
    }
  }),
  detailsWrapper: () => ({
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between"
  })
});
const Accounts = _0x551d6e => {
  const _0x1c4972 = useStyles$2();
  const _0x371dcc = _0x39a680 => async _0x4136e1 => {
    const _0x2a352e = _0x39a680 === "name" ? _0x4136e1[_0x39a680] : Number(_0x4136e1[_0x39a680]);
    const _0x52aadf = {
      is_atm: false,
      [_0x39a680]: _0x2a352e
    };
    const _0x532463 = await _0x25a55("np-ui:getAccounts", _0x52aadf, {
      returnData: "getAccounts"
    });
    if (_0x532463.meta.ok) {
      _0x551d6e.updateState({
        accounts: _0x532463.data.accounts,
        accountsSearch: _0x52aadf
      });
    }
    return _0x532463.meta;
  };
  const _0x2ad874 = (_0x290dbc = null) => {
    const _0x456714 = _0x551d6e.accountTypes.filter(_0x5ddbf7 => !!_0x5ddbf7.public);
    let _0x150e45 = _0x456714;
    if (_0x290dbc) {
      const _0x353969 = _0x551d6e.accountTypes.find(_0x212883 => _0x212883.id === _0x290dbc.type_id);
      if (!_0x353969.public) {
        _0x150e45 = [_0x353969];
      }
    }
    const _0x3d5d10 = _0x150e45[0].id;
    const _0x468c34 = [{
      label: "Name",
      name: "name",
      default: _0x290dbc ? _0x290dbc.name : ""
    }, {
      label: "Type",
      name: "type",
      type: "select",
      options: _0x150e45,
      default: _0x3d5d10
    }];
    if (!_0x290dbc) {
      _0x468c34.push({
        label: "State ID",
        name: "cid",
        default: ""
      });
    } else {
      _0x468c34.push({
        label: "Frozen",
        name: "is_frozen",
        type: "checkbox",
        default: _0x290dbc.is_frozen
      });
      _0x468c34.push({
        label: "Monitored",
        name: "is_monitored",
        type: "checkbox",
        default: _0x290dbc.is_monitored
      });
    }
    return _0x468c34;
  };
  const _0x39f0e5 = (_0x25887b, _0x4e04f6) => {
    const _0x284faf = {
      name: _0x4e04f6.name,
      type_id: Number(_0x4e04f6.type)
    };
    if (!_0x25887b.id) {
      _0x284faf.access = ["balance", "deposit", "transfer", "transactions", "withdraw"];
      _0x284faf.is_frozen = false;
      _0x284faf.is_monitored = false;
      _0x284faf.cid = Number(_0x4e04f6.cid);
    } else {
      _0x284faf.id = _0x25887b.id;
      _0x284faf.is_frozen = _0x4e04f6.is_frozen;
      _0x284faf.is_monitored = _0x4e04f6.is_monitored;
    }
    return _0x284faf;
  };
  return _0x43b906.jsx("div", {
    children: _0x43b906.jsx(Section, {
      action: {
        label: "Create Account",
        fields: _0x2ad874(),
        onSubmit: async _0x363e5f => {
          const _0x3a432f = _0x39f0e5({}, _0x363e5f);
          const _0x34c37b = await _0x25a55("np-ui:createAccount", _0x3a432f);
          return _0x34c37b.meta;
        }
      },
      burger: [{
        isForm: true,
        fields: [{
          label: "ID",
          name: "id",
          default: ""
        }],
        onSubmit: _0x371dcc("id"),
        label: "Search by Account ID"
      }, {
        isForm: true,
        fields: [{
          label: "ID",
          name: "cid",
          default: ""
        }],
        onSubmit: _0x371dcc("cid"),
        label: "Search by State ID"
      }, {
        isForm: true,
        fields: [{
          label: "Name",
          name: "name",
          default: ""
        }],
        onSubmit: _0x371dcc("name"),
        label: "Search by Business Name"
      }],
      heading: "Banking",
      children: _0x551d6e.accounts.map(_0x4256dc => {
        return _0x43b906.jsxs(_0x48b99e.Fragment, {
          children: [_0x43b906.jsx("hr", {}), _0x43b906.jsx(Item, {
            actions: [{
              isForm: true,
              fields: _0x2ad874(_0x4256dc),
              onSubmit: async _0x4e68a7 => {
                const _0x1fa0f1 = _0x39f0e5(_0x4256dc, _0x4e68a7);
                const _0x4305f1 = await _0x25a55("np-ui:editAccount", _0x1fa0f1);
                const _0x15841e = await _0x25a55("np-ui:getAccounts", _0x551d6e.accountsSearch, {
                  returnData: "getAccounts"
                });
                if (_0x15841e.meta.ok) {
                  _0x551d6e.updateState({
                    accounts: _0x15841e.data.accounts,
                    accountsSearch: _0x551d6e.accountSearch
                  });
                }
                return _0x4305f1.meta;
              },
              label: "Edit Account"
            }, {
              label: "View People",
              onClick: async ({
                loading: _0x13752c
              }) => {
                _0x13752c(true);
                const _0x46c54c = await _0x25a55("np-ui:getAccountCharacters", {
                  account_id: _0x4256dc.id
                }, {
                  returnData: "getAccountCharacters"
                });
                _0x551d6e.updateState({
                  accountCharacters: _0x46c54c.data,
                  accountCharactersFor: _0x4256dc.id
                });
                _0x13752c(false);
              }
            }, {
              isForm: true,
              fields: [{
                label: "State ID",
                name: "state_id",
                default: ""
              }, ...["balance", "transfer", "deposit", "withdraw", "transactions"].map(_0x59a632 => ({
                label: _0x59a632,
                type: "checkbox",
                name: _0x59a632,
                default: false
              }))],
              onSubmit: async _0x458c9f => {
                const _0xce7fed = await _0x25a55("np-ui:addAccountCharacterPermissions", {
                  account: _0x4256dc,
                  character: {
                    id: Number(_0x458c9f.state_id),
                    access: ["balance", "transfer", "deposit", "withdraw", "transactions"].filter(_0x12762b => !!_0x458c9f[_0x12762b])
                  }
                });
                if (_0xce7fed.meta.ok) {
                  const _0x25fa59 = await _0x25a55("np-ui:getAccountCharacters", {
                    account_id: _0x4256dc.id
                  }, {
                    returnData: "getAccountCharacters"
                  });
                  _0x551d6e.updateState({
                    accountCharacters: _0x25fa59.data,
                    accountCharactersFor: _0x4256dc.id
                  });
                }
                return _0xce7fed.meta;
              },
              label: "Add Person"
            }],
            heading: _0x4256dc.name + " (" + _0x1aa437(_0x4256dc.balance) + ")",
            headingExtra: (_0x4256dc.is_frozen ? "(Frozen)" : "") + " " + (_0x4256dc.is_monitored ? "(Monitored)" : "") + " " + _0x4256dc.type + " / " + _0x4256dc.id,
            includeConfirm: false
          }), _0x551d6e.accountCharactersFor === _0x4256dc.id && _0x551d6e.accountCharacters.map(_0x51a265 => _0x43b906.jsx(Item, {
            actions: _0x51a265.is_owner ? null : [{
              isForm: true,
              fields: [...["balance", "transfer", "deposit", "withdraw", "transactions"].map(_0x5b4118 => ({
                label: _0x5b4118,
                type: "checkbox",
                name: _0x5b4118,
                default: _0x51a265.access.includes(_0x5b4118)
              }))],
              onSubmit: async _0x1be287 => {
                const _0x4b2238 = await _0x25a55("np-ui:editAccountCharacterPermissions", {
                  account: _0x4256dc,
                  character: {
                    id: _0x51a265.id,
                    access: ["balance", "transfer", "deposit", "withdraw", "transactions"].filter(_0x11c786 => !!_0x1be287[_0x11c786])
                  }
                });
                if (_0x4b2238.meta.ok) {
                  const _0x409933 = await _0x25a55("np-ui:getAccountCharacters", {
                    account_id: _0x4256dc.id
                  }, {
                    returnData: "getAccountCharacters"
                  });
                  _0x551d6e.updateState({
                    accountCharacters: _0x409933.data,
                    accountCharactersFor: _0x4256dc.id
                  });
                }
                return _0x4b2238.meta;
              },
              label: "Edit Permissions"
            }, {
              isConfirm: true,
              onConfirm: async () => {
                const _0x9f3201 = await _0x25a55("np-ui:removeCharacterFromAccount", {
                  account: _0x4256dc,
                  character: _0x51a265
                });
                if (_0x9f3201.meta.ok) {
                  const _0x30883e = await _0x25a55("np-ui:getAccountCharacters", {
                    account_id: _0x4256dc.id
                  }, {
                    returnData: "getAccountCharacters"
                  });
                  _0x551d6e.updateState({
                    accountCharacters: _0x30883e.data,
                    accountCharactersFor: _0x4256dc.id
                  });
                }
                return _0x9f3201.meta;
              },
              label: "Remove From Account"
            }],
            heading: _0x51a265.name,
            includeConfirm: false,
            children: _0x51a265.is_owner ? _0x43b906.jsx("div", {
              children: _0x43b906.jsx(_0x101976, {
                i18n: true,
                i18nSource: "ui:text:san-andreas-state",
                variant: "body2",
                children: "Owner"
              })
            }) : _0x43b906.jsx("div", {
              className: _0x1c4972.accessList,
              children: _0x51a265.access.map(_0x22f00a => _0x43b906.jsx(_0x101976, {
                variant: "body2",
                children: _0x22f00a
              }, _0x22f00a))
            })
          }, _0x51a265.id))]
        }, _0x4256dc.id);
      })
    })
  });
};
let Container$6 = class Container extends _0x48b99e.Component {
  async componentDidMount() {
    const _0x217019 = await _0x25a55("np-ui:getAccountTypes", {}, {
      returnData: "getAccountTypes"
    });
    this.props.updateState({
      accountTypes: _0x217019.data
    });
  }
  render() {
    if (this.props.accountTypes.length === 0) {
      return null;
    }
    return _0x43b906.jsx(Accounts, {
      ...this.props
    });
  }
};
const useStyles$1 = _0x55b6c7({
  detailsWrapper: () => ({
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between"
  }),
  btnContainer: () => ({
    display: "flex",
    flexDirection: "flex-end",
    marginBottom: "0.5rem"
  })
});
const useStyles = _0x55b6c7({
  modalWrapper: () => ({
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(252, 252, 252, 0.3)",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }),
  modalContainer: () => ({
    backgroundColor: _0xec1168.bgSecondary(),
    border: "1px solid #1e3a56",
    borderRadius: "4px",
    width: "600px",
    minHeight: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }),
  modalInner: () => ({
    width: "300px",
    margin: "16px 0",
    textAlign: "center"
  }),
  modalActions: () => ({
    display: "flex",
    justifyContent: "space-between",
    margin: "16px 0",
    width: "300px"
  })
});
const Modal = ({
  closeModal: _0x3c9771,
  handleExport: _0x2ea906
}) => {
  const [_0x2f946c, _0x13b433] = _0x21382c.useState(null);
  const [_0x5b3886, _0x312b05] = _0x21382c.useState(null);
  const [_0x3b5277, _0x5e215d] = _0x21382c.useState(false);
  const [_0x19dbb6, _0xba9991] = _0x21382c.useState(new Date());
  const [_0x15e8ec, _0x123e04] = _0x21382c.useState(new Date());
  const _0x2abe05 = useStyles();
  const _0xaddc75 = async () => {
    _0x5e215d(true);
    const _0x1a3c26 = Math.floor(_0x19dbb6.getTime() / 1000);
    const _0xab5de3 = Math.floor(_0x15e8ec.getTime() / 1000);
    const _0x1daf0d = await _0x2ea906(_0x1a3c26, _0xab5de3);
    if (!_0x1daf0d.meta.ok) {
      _0x312b05(_0x1daf0d.meta.message);
    }
    if (_0x1daf0d.meta.ok) {
      _0x312b05(null);
      _0x13b433(_0x1daf0d.data.url);
    }
    _0x5e215d(false);
  };
  return _0x43b906.jsxs(_0x48b99e.Fragment, {
    children: [_0x3b5277 && _0x43b906.jsx("div", {
      className: _0x2abe05.modalWrapper,
      children: _0x43b906.jsx("div", {
        className: _0x2abe05.modalContainer,
        children: _0x43b906.jsx(_0x215e39, {})
      })
    }), _0x5b3886 && !_0x3b5277 && _0x43b906.jsx("div", {
      className: _0x2abe05.modalWrapper,
      children: _0x43b906.jsxs("div", {
        className: _0x2abe05.modalContainer,
        children: [_0x43b906.jsx("div", {
          children: _0x43b906.jsx(_0x101976, {
            variant: "h5",
            children: _0x5b3886
          })
        }), _0x43b906.jsx("div", {
          style: {
            marginTop: 32
          },
          children: _0x43b906.jsx(_0x42d8e3.Secondary, {
            onClick: _0x3c9771,
            children: "Close"
          })
        })]
      })
    }), !_0x5b3886 && !_0x3b5277 && _0x2f946c && _0x43b906.jsx("div", {
      className: _0x2abe05.modalWrapper,
      children: _0x43b906.jsxs("div", {
        className: _0x2abe05.modalContainer,
        children: [_0x43b906.jsxs("div", {
          className: _0x2abe05.modalInner,
          children: [_0x43b906.jsx(_0x101976, {
            i18n: true,
            i18nSource: "ui:text:san-andreas-state",
            variant: "h5",
            children: "Data Exported"
          }), _0x43b906.jsx(_0x101976, {
            i18n: true,
            i18nSource: "ui:text:san-andreas-state",
            variant: "body2",
            children: "This may take a few minutes to respond..."
          })]
        }), _0x43b906.jsx("div", {
          className: _0x2abe05.modalInner,
          children: _0x43b906.jsx(_0x42d8e3.Primary, {
            onClick: () => _0x3f7bc6(_0x2f946c),
            children: "Copy URL"
          })
        }), _0x43b906.jsx("div", {
          className: _0x2abe05.modalInner,
          children: _0x43b906.jsx(_0x42d8e3.Secondary, {
            onClick: _0x3c9771,
            children: "Close"
          })
        })]
      })
    }), !_0x5b3886 && !_0x3b5277 && !_0x2f946c && _0x43b906.jsx("div", {
      className: _0x2abe05.modalWrapper,
      children: _0x43b906.jsxs("div", {
        className: _0x2abe05.modalContainer,
        children: [_0x43b906.jsx("div", {
          className: _0x2abe05.modalInner,
          children: _0x43b906.jsx(_0x101976, {
            i18n: true,
            i18nSource: "ui:text:san-andreas-state",
            variant: "h5",
            children: "Export Data"
          })
        }), _0x43b906.jsx("div", {
          className: _0x2abe05.modalInner,
          children: _0x43b906.jsx(_0x5de0a2.DatePicker, {
            i18n: true,
            value: _0x19dbb6,
            onChange: _0x7b569d => _0xba9991(_0x7b569d),
            label: "Start Date"
          })
        }), _0x43b906.jsx("div", {
          className: _0x2abe05.modalInner,
          children: _0x43b906.jsx(_0x5de0a2.DatePicker, {
            i18n: true,
            value: _0x15e8ec,
            onChange: _0x2cca68 => _0x123e04(_0x2cca68),
            label: "End Date"
          })
        }), _0x43b906.jsxs("div", {
          className: _0x2abe05.modalActions,
          children: [_0x43b906.jsx(_0x42d8e3.Secondary, {
            onClick: _0x3c9771,
            children: "Cancel"
          }), _0x43b906.jsx(_0x42d8e3.Primary, {
            onClick: _0xaddc75,
            children: "Export"
          })]
        })]
      })
    })]
  });
};
var ExportType = (_0x5c4902 => {
  _0x5c4902.PHONE_MESSAGE_LOGS = "phoneMessageLogs";
  _0x5c4902.PHONE_CALL_LOGS = "phoneCallLogs";
  return _0x5c4902;
})(ExportType || {});
const PhoneConversations = _0x2ba7e3 => {
  const [_0x5e96d1, _0x44a39c] = _0x21382c.useState("");
  const [_0x675b78, _0xe7686f] = _0x21382c.useState("phoneMessageLogs");
  const [_0x138cf6, _0x6eb72f] = _0x21382c.useState(false);
  const [_0x575545, _0x52aac2] = _0x21382c.useState({});
  const _0xd87f66 = useStyles$1();
  const _0x480151 = _0xca2c42 => async _0x190091 => {
    _0xe7686f(_0xca2c42);
    const _0x13c64b = _0x190091.phoneNumber;
    const _0x31f081 = await _0x25a55("phone/getConversationsNumbers", {
      phoneNumber: _0x13c64b,
      type: _0xca2c42
    }, {
      returnData: {},
      extApi: true
    });
    const _0x2c0fd4 = {};
    for (const _0x214776 of _0x31f081.data) {
      if (!_0x2c0fd4[_0x214776.number_to]) {
        _0x2c0fd4[_0x214776.number_to] = {
          from: _0x214776.number_from,
          to: _0x214776.number_to
        };
      }
    }
    _0x44a39c(_0x13c64b);
    _0x52aac2(_0x2c0fd4);
    return _0x31f081.meta;
  };
  const _0x4e9f1e = async (_0x253f90, _0x51495a) => {
    return await _0x25a55("phone/uploadPhoneRecords", {
      selectedNumber: _0x5e96d1,
      startDate: _0x253f90,
      endDate: _0x51495a,
      selectedType: _0x675b78
    }, {
      returnData: {},
      extApi: true
    });
  };
  const _0x41654d = [{
    isForm: true,
    onSubmit: _0x480151("phoneMessageLogs"),
    label: "Phone Message Logs",
    fields: [{
      label: "Phone Number",
      name: "phoneNumber",
      default: ""
    }]
  }, {
    isForm: true,
    onSubmit: _0x480151("phoneCallLogs"),
    label: "Phone Call Logs",
    fields: [{
      label: "Phone Number",
      name: "phoneNumber",
      default: ""
    }]
  }];
  return _0x43b906.jsxs(Section, {
    burger: _0x41654d,
    heading: "Phone Conversations",
    children: [_0x43b906.jsx("div", {
      className: _0xd87f66.btnContainer,
      children: Object.keys(_0x575545).length > 0 && _0x43b906.jsx(_0x42d8e3.Primary, {
        onClick: () => _0x6eb72f(true),
        children: "Export All"
      })
    }), Object.keys(_0x575545).map((_0xa0b93f, _0x3a9c93) => _0x43b906.jsx(_0x3ea46a, {
      style: {
        width: "100%"
      },
      children: _0x43b906.jsxs("div", {
        className: _0xd87f66.detailsWrapper,
        children: [_0x43b906.jsxs(_0x101976, {
          children: ["From: ", _0x575545[_0xa0b93f].from]
        }), _0x43b906.jsxs(_0x101976, {
          children: ["To: ", _0x575545[_0xa0b93f].to]
        })]
      })
    }, _0x3a9c93)), _0x138cf6 && _0x43b906.jsx(Modal, {
      closeModal: () => _0x6eb72f(false),
      handleExport: _0x4e9f1e
    })]
  });
};
let searchValueTimeout = 0;
const Farmers = _0x9f5801 => {
  const [_0x444e9c, _0x1a3835] = _0x48b99e.useState("");
  const _0x524639 = _0x53e174 => {
    _0x1a3835(_0x53e174);
    clearTimeout(searchValueTimeout);
    searchValueTimeout = setTimeout(() => {
      _0x9f5801.changeSearchValue(_0x53e174);
    }, 1000);
  };
  return _0x43b906.jsxs(Section, {
    heading: "Farmers Items / Banners",
    children: [_0x43b906.jsx("div", {
      style: {
        marginBottom: 8
      },
      children: _0x43b906.jsx(_0x5de0a2.Search, {
        onChange: _0x524639,
        value: _0x444e9c
      })
    }), _0x9f5801.farmersItems.map(_0x2f3d47 => _0x43b906.jsxs("div", {
      children: [_0x43b906.jsxs("div", {
        style: {
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: 8
        },
        children: [_0x43b906.jsx(_0x42d8e3.Secondary, {
          onClick: () => _0x9f5801.performAction("reject", _0x2f3d47.id),
          children: "Reject"
        }), _0x43b906.jsx(_0x42d8e3.Primary, {
          onClick: () => _0x9f5801.performAction("approve", _0x2f3d47.id),
          style: {
            marginLeft: 16
          },
          children: "Approve"
        })]
      }), _0x43b906.jsxs(_0x3ea46a, {
        style: {
          width: "100%"
        },
        children: [_0x43b906.jsx(_0x3ea46a.Image, {
          children: _0x43b906.jsx("img", {
            src: _0x2f3d47.image,
            alt: "logo",
            style: {
              maxWidth: 100,
              maxHeight: 100
            }
          })
        }), _0x43b906.jsx(_0x3ea46a.Details, {
          description: _0x2f3d47.type + " - " + _0x2f3d47.item_type + " - " + _0x2f3d47.description,
          title: "Important ID: " + _0x2f3d47.id + " - " + _0x2f3d47.name
        })]
      })]
    }, _0x2f3d47.id))]
  });
};
let Container$5 = class Container extends _0x48b99e.Component {
  getFarmersItems = async (_0x24d0bd = "") => {
    const _0x41d52a = await _0x25a55("np-ui:getFarmersItems", {
      search: _0x24d0bd
    }, {
      returnData: [{
        id: 1,
        image: "https://i.imgur.com/0Clrfuz.jpg",
        name: "bacon",
        description: "bacons",
        type: "item",
        item_type: "food"
      }, {
        id: 2,
        image: "https://i.imgur.com/0Clrfuz.jpg",
        name: null,
        description: null,
        type: "banner",
        item_type: null
      }]
    });
    this.props.updateState({
      farmersItems: _0x41d52a.data
    });
  };
  changeSearchValue = _0x440dd0 => {
    this.getFarmersItems(_0x440dd0);
  };
  async componentDidMount() {
    this.getFarmersItems();
  }
  performAction = async (_0x1de191, _0x284567) => {
    await _0x25a55("np-ui:farmersItemAction", {
      action: _0x1de191,
      id: _0x284567
    });
    this.getFarmersItems();
  };
  render() {
    return _0x43b906.jsx(Farmers, {
      ...this.props,
      changeSearchValue: this.changeSearchValue,
      performAction: this.performAction
    });
  }
};
const Licenses = _0x1421c6 => {
  return _0x43b906.jsx(Section, {
    action: {
      label: "Create License",
      fields: [{
        label: "Name",
        name: "name",
        default: ""
      }, {
        label: "Code",
        name: "code",
        default: ""
      }],
      onSubmit: async _0x4a87f8 => {
        const _0x4a1b1e = await _0x25a55("np-ui:createLicense", _0x4a87f8);
        if (_0x4a1b1e.meta.ok) {
          _0x1421c6.getLicenses();
        }
        return _0x4a1b1e.meta;
      }
    },
    heading: "Licenses",
    children: _0x1421c6.licenses.map(_0x58eadf => _0x43b906.jsx(Item, {
      heading: _0x58eadf.name,
      headingExtra: _0x58eadf.description
    }, _0x58eadf.id))
  });
};
let Container$4 = class Container extends _0x48b99e.Component {
  getLicenses = async () => {
    const _0x24302d = await _0x25a55("np-ui:getAllLicenses", {}, {
      returnData: "getLicenses"
    });
    this.props.updateState({
      licenses: _0x24302d.data
    });
  };
  async componentDidMount() {
    this.getLicenses();
  }
  render() {
    return _0x43b906.jsx(Licenses, {
      ...this.props,
      getLicenses: this.getLicenses
    });
  }
};
const People = _0x5ed5df => {
  const _0x95d995 = [];
  _0x5ed5df.licenses.forEach(_0x214708 => {
    if (_0x5ed5df.permissions.includes("grant_license") || _0x214708.name === "Drivers License" && _0x5ed5df.permissions.includes("grant_drivers_license") || _0x214708.name === "Weapons License" && _0x5ed5df.permissions.includes("grant_weapons_license")) {
      _0x95d995.push(_0x214708);
    }
  });
  return _0x43b906.jsx(Section, {
    burger: [{
      isForm: true,
      fields: [{
        label: "Name",
        name: "name",
        default: ""
      }],
      onSubmit: async _0x20f5bf => {
        const _0x32e5b9 = await _0x5ed5df.search("name", _0x20f5bf);
        return _0x32e5b9.meta;
      },
      label: "Search by Name"
    }, {
      isForm: true,
      fields: [{
        label: "ID",
        name: "id",
        default: ""
      }],
      onSubmit: async _0x287a60 => {
        const _0x9a23e5 = await _0x5ed5df.search("id", _0x287a60);
        return _0x9a23e5.meta;
      },
      label: "Search by State ID"
    }],
    heading: "People",
    children: _0x5ed5df.characters.map(_0xcbad04 => {
      const _0x5d4e2e = [{
        label: "View Licenses",
        onClick: () => _0x5ed5df.getLicenses(_0xcbad04)
      }];
      if (_0x95d995.length > 0) {
        _0x5d4e2e.push({
          fields: [{
            label: "License",
            name: "id",
            type: "select",
            options: _0x95d995,
            default: _0x95d995[0].id
          }],
          label: "Grant License",
          isForm: true,
          onSubmit: async _0x121123 => {
            const _0x1522d8 = await _0x25a55("np-ui:grantLicense", {
              license: _0x121123,
              target_id: _0xcbad04.id
            });
            _0x5ed5df.updateState({
              characterLicensesFor: 0
            });
            return _0x1522d8.meta;
          }
        });
      }
      return _0x43b906.jsxs(_0x48b99e.Fragment, {
        children: [_0x43b906.jsx("hr", {}), _0x43b906.jsx(Item, {
          actions: _0x5d4e2e,
          heading: _0xcbad04.first_name + " " + _0xcbad04.last_name
        }, _0xcbad04.id), _0x5ed5df.characterLicensesFor === _0xcbad04.id && _0x43b906.jsx(_0x48b99e.Fragment, {
          children: _0x5ed5df.characterLicenses.map(_0x8b79ec => {
            const _0x459faf = _0x8b79ec.name;
            const _0x5d6382 = [];
            if (_0x5ed5df.permissions.includes("revoke_license") || _0x459faf === "Drivers License" && _0x5ed5df.permissions.includes("revoke_drivers_license") || _0x459faf === "Weapons License" && _0x5ed5df.permissions.includes("revoke_weapons_license")) {
              _0x5d6382.push({
                label: "Revoke",
                isConfirm: true,
                onConfirm: async () => {
                  const _0x269458 = await _0x25a55("np-ui:revokeLicense", {
                    license: _0x8b79ec,
                    target_id: _0xcbad04.id
                  });
                  _0x5ed5df.updateState({
                    characterLicensesFor: 0
                  });
                  return _0x269458.meta;
                }
              });
            }
            return _0x43b906.jsx(Item, {
              actions: _0x5d6382,
              heading: _0x459faf
            }, _0x8b79ec.id);
          })
        })]
      }, _0xcbad04.id);
    })
  });
};
let Container$3 = class Container extends _0x48b99e.Component {
  search = async (_0x44efe5, _0x315443) => {
    const _0x10aaf8 = await _0x25a55("np-ui:getStateCharacterDetails", {
      type: _0x44efe5,
      ..._0x315443
    }, {
      returnData: [{
        id: 1,
        first_name: "Dw",
        last_name: "Winner"
      }]
    });
    if (_0x10aaf8.meta.ok) {
      this.props.updateState({
        characters: _0x10aaf8.data
      });
      if (this.props.licenses.length === 0) {
        const _0x42f4b5 = await _0x25a55("np-ui:getAllLicenses", {}, {
          returnData: "getLicenses"
        });
        this.props.updateState({
          licenses: _0x42f4b5.data
        });
      }
    }
    return _0x10aaf8;
  };
  getLicenses = async _0x21a1d8 => {
    const _0x48c7b8 = await _0x25a55("np-ui:getLicenses", {
      character: _0x21a1d8
    }, {
      returnData: [{
        id: 1,
        name: "Drivers License"
      }, {
        id: 2,
        name: "Weapons License"
      }, {
        id: 3,
        name: "Bar License"
      }]
    });
    if (_0x48c7b8.meta.ok) {
      this.props.updateState({
        characterLicenses: _0x48c7b8.data,
        characterLicensesFor: _0x21a1d8.id
      });
    }
    return _0x48c7b8;
  };
  render() {
    return _0x43b906.jsx(People, {
      ...this.props,
      getLicenses: this.getLicenses,
      search: this.search
    });
  }
};
const Taxes = _0x3ddbdb => {
  return _0x43b906.jsx(Section, {
    heading: "Taxes",
    children: _0x3ddbdb.taxes.map(_0x1da7fe => _0x43b906.jsx(Item, {
      actions: [{
        isForm: true,
        fields: [{
          label: "Tax Level Next Cycle",
          name: "new_level",
          default: _0x1da7fe.new_level || ""
        }],
        onSubmit: async _0x1689e5 => {
          const _0xecbfd4 = await _0x25a55("np-ui:saveTaxOptions", {
            options: [{
              id: _0x1da7fe.id,
              new_level: Number(_0x1689e5.new_level)
            }]
          });
          if (_0xecbfd4.meta.ok) {
            _0x3ddbdb.getTaxes();
          }
          return _0xecbfd4.meta;
        },
        label: "Change Tax"
      }],
      heading: _0x1da7fe.name + " (" + _0x1da7fe.level + "%)",
      headingExtra: "" + (_0x1da7fe.new_level ? "Value Next Cycle: " + _0x1da7fe.new_level + "%" : "")
    }, _0x1da7fe.id))
  });
};
let Container$2 = class Container extends _0x48b99e.Component {
  getTaxes = async () => {
    const _0x2a2cbd = await _0x25a55("np-ui:getTaxOptions", {}, {
      returnData: "getTaxOptions"
    });
    this.props.updateState({
      taxes: _0x2a2cbd.data
    });
  };
  async componentDidMount() {
    this.getTaxes();
  }
  render() {
    return _0x43b906.jsx(Taxes, {
      ...this.props,
      getTaxes: this.getTaxes
    });
  }
};
const {
  mapDispatchToProps,
  mapStateToProps
} = _0x4afadd(_0x177c58);
const returnData = {};
class Container extends _0x48b99e.Component {
  state = {
    activeId: -1,
    show: false
  };
  _snackbar = () => {
    const _0x13b8f8 = _0x43d5ed => ({
      ..._0x43d5ed,
      snackbar: {
        message: "You cannot do that",
        open: true,
        timeout: 5000,
        type: "error"
      }
    });
    _0x1e96ad.dispatch({
      cb: _0x13b8f8,
      type: "np-ui-action"
    });
    _0x25a55("np-ui:closeApp");
  };
  onHide = () => {
    this.setState({
      show: false
    });
  };
  onShow = async () => {
    const _0x235c6c = await _0x25a55("np-ui:getCharacterPermissions", {}, {
      returnData: returnData
    });
    const _0x2bc771 = _0x235c6c.data;
    if (!_0x235c6c.meta.ok || !_0x2bc771.systems && !_0x2bc771.modules) {
      this._snackbar();
      return;
    }
    let _0x3fb117 = [];
    let _0xedf744 = [];
    const _0x2efc0c = _0x213972 => Object.keys(_0x213972).filter(_0x51f2ec => !!_0x213972[_0x51f2ec]).map(_0x4ca795 => _0x4ca795.replace(/[A-Z]/g, _0x30868c => "_" + _0x30868c.toLowerCase()));
    if (_0x2bc771.modules) {
      _0x3fb117 = _0x2efc0c(_0x2bc771.modules);
    }
    if (_0x2bc771.systems) {
      _0xedf744 = _0x2efc0c(_0x2bc771.systems);
    }
    const _0x191248 = [..._0x3fb117, ..._0xedf744];
    this.setState({
      show: true
    }, () => this.props.updateState({
      permissions: _0x191248
    }));
  };
  hasPermission = _0x4652f9 => {
    return this.props.permissions.includes(_0x4652f9);
  };
  createModules = () => {
    const _0x350ad6 = [["bank", {
      id: 2,
      label: "Bank Accounts"
    }], ["tax", {
      id: 5,
      label: "Taxes"
    }], ["ballot", {
      id: 6,
      label: "Ballots"
    }], ["farmers", {
      id: 8,
      label: "Farmers Market"
    }], ["phonelogs", {
      id: 9,
      label: "Phone Conversations"
    }]];
    if (_0x1c29bf()) {
      return _0x350ad6.map(([_0xdf9d7f, _0x542cfc]) => _0x542cfc);
    }
    return _0x350ad6.filter(([_0x5ba5ab]) => this.hasPermission(_0x5ba5ab + "_management")).map(([_0x4c5810, _0x36ed17]) => _0x36ed17);
  };
  render() {
    return _0x43b906.jsx(_0x433849, {
      center: true,
      name: appName,
      onEscape: this.onHide,
      onHide: this.onHide,
      onShow: this.onShow,
      children: this.state.show && _0x43b906.jsxs(_0x21a066, {
        activeItem: this.state.activeId,
        items: this.createModules(),
        onMenuItemClick: ({
          id: _0x45150c
        }) => this.setState({
          activeId: _0x45150c
        }),
        children: [this.state.activeId === -1 && _0x43b906.jsx("div", {}), this.state.activeId === 1 && _0x43b906.jsx(Container$3, {
          ...this.props
        }), this.state.activeId === 2 && _0x43b906.jsx(Container$6, {
          ...this.props
        }), this.state.activeId === 5 && _0x43b906.jsx(Container$2, {
          ...this.props
        }), this.state.activeId === 6 && _0x43b906.jsx(Container$7, {
          ...this.props
        }), this.state.activeId === 7 && _0x43b906.jsx(Container$4, {
          ...this.props
        }), this.state.activeId === 8 && _0x43b906.jsx(Container$5, {
          ...this.props
        }), this.state.activeId === 9 && _0x43b906.jsx(PhoneConversations, {
          ...this.props
        })]
      })
    });
  }
}
const Container$1 = _0x5c2b5d(mapStateToProps, mapDispatchToProps)(Container);
const config = () => {
  return {
    store: _0x177c58,
    name: appName,
    render: Container$1,
    type: _0x2a3cd9.Application
  };
};
export { config as default };