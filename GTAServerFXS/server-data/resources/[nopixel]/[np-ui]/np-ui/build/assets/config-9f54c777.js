import { j as _0x57c9f1, R as _0x116a2d, k as _0x591942 } from "./vendor-6c45b22f.js";
import { h as _0x5296c0 } from "./character-8ebc09ae.js";
import { n as _0x11a8b5, d as _0x3ad10c } from "./index-d5aaa08b.js";
import { m as _0x157168, b as _0x3308a9, c as _0x14e19d, d as _0x4dae21, a as _0x3a6b0a } from "./actions-c0279434.js";
import { A as _0x30c027 } from "./app-container-77eaf0ff.js";
import { B as _0x3847fc } from "./button-c47bff31.js";
import { I as _0x191bc3 } from "./icon-7f5cdae2.js";
import { F as _0x10a21c } from "./input-c6588ceb.js";
import { P as _0x2bd78f } from "./paper-22e478e9.js";
import { T as _0x4f5a84 } from "./text-f7ee3e03.js";
import { m as _0x1ef846 } from "./styles-61014012.js";
import { S as _0x2f4884 } from "./simple-form-6b6335d8.js";
import _0x4ae910 from "./store-6eb0fb42.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
import "./store-779dab40.js";
import "./store-50ddf3e0.js";
import "./tooltip-cb871d8a.js";
import "./translations-7705db3f.js";
import "./format-10690d6f.js";
import "./index-ae383549.js";
const useStyles = _0x1ef846({
  container: () => ({}),
  actions: () => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }),
  actionsLeft: () => ({
    justifySelf: "flex-start"
  }),
  actionsRight: () => ({
    justifySelf: "flex-end"
  })
});
const GroupMember = ({
  leaderIsMe: _0x479c6e,
  member: _0x105035,
  getGroup: _0x3e5755
}) => {
  const _0x5a4242 = [];
  const _0x2ca5c1 = async (_0xdc0a2a, _0x301679) => {
    await _0x11a8b5("np-ui:heists:groupAction", {
      action: _0xdc0a2a,
      data: _0x301679
    });
    await _0x3e5755();
  };
  if (!_0x105035.isLeader && _0x479c6e) {
    _0x5a4242.push({
      icon: "user-minus",
      onClick: () => _0x2ca5c1("remove", {
        member_id: _0x105035.characterId
      }),
      title: "Remove from Group"
    });
    _0x5a4242.push({
      icon: "user-graduate",
      onClick: () => _0x2ca5c1("promote", {
        member_id: _0x105035.characterId
      }),
      title: "Promote to Leader"
    });
  }
  return _0x57c9f1.jsxs(_0x2bd78f, {
    actions: _0x5a4242,
    notifications: true,
    notificationsColor: _0x105035.isOnline ? "#4CAF50" : "#f44336",
    children: [_0x57c9f1.jsx(_0x2bd78f.Image, {
      children: _0x57c9f1.jsx(_0x191bc3, {
        icon: _0x105035.isLeader ? "user-graduate" : "user",
        size: "3x"
      })
    }), _0x57c9f1.jsx(_0x2bd78f.Details, {
      description: "",
      title: _0x105035.firstName + " " + _0x105035.lastName
    })]
  });
};
const InviteMemberForm = ({
  groupId: _0x3c726d
}) => {
  return _0x57c9f1.jsx(_0x2f4884, {
    elements: [{
      name: "stateId",
      render: ({
        onChange: _0xa98e42,
        value: _0x2284bf
      }) => _0x57c9f1.jsx(_0x10a21c.CityID, {
        onChange: _0xa98e42,
        value: _0x2284bf
      })
    }],
    onCancel: () => _0x157168(false),
    onSubmit: async ({
      stateId: _0x403b57
    }) => {
      _0x3308a9();
      const _0x25aa6c = await _0x11a8b5("np-ui:heists:invite", {
        groupId: _0x3c726d,
        text: _0x403b57
      });
      if (!_0x25aa6c.meta.ok) {
        _0x14e19d(_0x25aa6c.meta.message);
        return;
      }
      _0x157168();
    }
  });
};
const Group = _0x1a6123 => {
  const _0x5379a5 = useStyles();
  const _0x243809 = _0x1a6123.character.id === _0x1a6123.group.members.find(_0x57c3cd => _0x57c3cd.isLeader).characterId;
  return _0x57c9f1.jsxs("div", {
    className: _0x5379a5.container,
    children: [_0x57c9f1.jsx("div", {
      className: _0x5379a5.memberList,
      children: _0x1a6123.group.members.length > 0 && _0x57c9f1.jsxs("div", {
        className: "member-list",
        children: [_0x57c9f1.jsx("div", {
          className: "text-wrapper",
          children: _0x57c9f1.jsx(_0x4f5a84, {
            i18n: true,
            i18nSource: "ui:text:phone-apps-jobs",
            variant: "body1",
            children: "Members"
          })
        }), _0x1a6123.group.members.map(_0x5b48eb => _0x57c9f1.jsx(GroupMember, {
          leaderIsMe: _0x243809,
          member: _0x5b48eb,
          getGroup: _0x1a6123.getGroup
        }, _0x5b48eb.id))]
      })
    }), _0x57c9f1.jsxs("div", {
      className: _0x5379a5.actions,
      children: [_0x243809 && _0x1a6123.group.heistActive && _0x57c9f1.jsx("div", {
        className: _0x5379a5.actionsLeft,
        children: _0x57c9f1.jsx(_0x3847fc.Secondary, {
          i18n: ["Stop Heist"],
          onClick: () => _0x4dae21(async () => {
            _0x3308a9();
            await _0x11a8b5("np-ui:heists:stop");
            await _0x1a6123.getGroup();
            _0x157168();
          }),
          children: "Stop Heist"
        })
      }), _0x1a6123.group.members.length < 6 && _0x57c9f1.jsx("div", {
        className: _0x5379a5.actionsRight,
        children: _0x57c9f1.jsx(_0x3847fc.Primary, {
          i18n: ["Invite"],
          onClick: () => _0x3a6b0a(_0x57c9f1.jsx(InviteMemberForm, {
            groupId: _0x1a6123.group.id
          })),
          children: "Invite"
        })
      })]
    }), _0x57c9f1.jsx("br", {})]
  });
};
const MemberForm = ({
  member: _0x3db80f,
  ..._0x14aa5f
}) => {
  const [_0x372112, _0x2e9911] = _0x116a2d.useState(_0x3db80f.heistWeight);
  return _0x57c9f1.jsx(_0x2bd78f, {
    actions: [],
    children: _0x57c9f1.jsx(_0x2bd78f.Details, {
      description: _0x57c9f1.jsxs("div", {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        },
        children: [_0x57c9f1.jsx(_0x10a21c.Text, {
          onChange: _0x146724 => _0x2e9911(Number(_0x146724)),
          label: "Current",
          value: _0x372112
        }), _0x57c9f1.jsx(_0x3847fc.Primary, {
          onClick: () => _0x4dae21(async () => {
            _0x3308a9();
            const _0xf1afce = await _0x11a8b5("np-ui:heists:queue:alterWeight", {
              heistWeight: _0x372112,
              type: "member",
              id: _0x3db80f.cid
            });
            if (!_0xf1afce.meta.ok) {
              _0x14e19d(_0xf1afce.meta.message, true);
              return;
            }
            _0x14aa5f.getGangs();
            _0x157168();
          }),
          children: "Save"
        })]
      }),
      title: ">> " + _0x3db80f.name
    })
  }, _0x3db80f.cid);
};
const GangForm = ({
  gang: _0x407e92,
  ..._0x79d7a9
}) => {
  const [_0x4f00a8, _0x306205] = _0x116a2d.useState(_0x407e92.heistWeight);
  const [_0x509b40, _0x241eaa] = _0x116a2d.useState(false);
  return _0x57c9f1.jsxs(_0x116a2d.Fragment, {
    children: [_0x57c9f1.jsx(_0x2bd78f, {
      actions: [],
      children: _0x57c9f1.jsx(_0x2bd78f.Details, {
        description: _0x57c9f1.jsxs("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          },
          children: [_0x57c9f1.jsx(_0x10a21c.Text, {
            onChange: _0x12360d => _0x306205(Number(_0x12360d)),
            label: "Current",
            value: _0x4f00a8
          }), _0x57c9f1.jsx(_0x3847fc.Primary, {
            onClick: () => _0x4dae21(async () => {
              _0x3308a9();
              const _0xb286c0 = await _0x11a8b5("np-ui:heists:queue:alterWeight", {
                heistWeight: _0x4f00a8,
                type: "gang",
                id: _0x407e92.id
              });
              if (!_0xb286c0.meta.ok) {
                _0x14e19d(_0xb286c0.meta.message, true);
                return;
              }
              _0x79d7a9.getGangs();
              _0x157168();
            }),
            children: "Save"
          }), _0x57c9f1.jsx(_0x3847fc.Secondary, {
            onClick: () => _0x241eaa(!_0x509b40),
            children: "Kids"
          })]
        }),
        title: _0x407e92.gangName
      })
    }, _0x407e92.id), _0x509b40 && _0x407e92.members.map(_0x58cf3f => _0x57c9f1.jsx(MemberForm, {
      ..._0x79d7a9,
      member: _0x58cf3f
    }, _0x58cf3f.cid))]
  });
};
const ClaimForm = _0x503690 => {
  return _0x57c9f1.jsx(_0x2f4884, {
    elements: [{
      name: "claim",
      render: ({
        onChange: _0x28c946,
        value: _0x194a7f
      }) => _0x57c9f1.jsx(_0x10a21c.Text, {
        label: "Type 'CLAIM' to confirm",
        i18n: ["Type", "to confirm"],
        onChange: _0x28c946,
        value: _0x194a7f
      })
    }],
    onCancel: () => _0x157168(false),
    onSubmit: async ({
      claim: _0x190a3f
    }) => {
      if (_0x190a3f.toLocaleLowerCase().trim() !== "claim") {
        _0x14e19d("Invalid response", true);
        return;
      }
      const _0xaa46b0 = await _0x11a8b5("np-ui:heists:queue:claimHeist", {
        id: _0x503690.id,
        useInstant: true
      });
      if (!_0xaa46b0.meta.ok) {
        _0x14e19d(_0xaa46b0.meta.message, true);
        return;
      }
      _0x503690.getQueue();
      _0x157168();
    }
  });
};
const Signups = _0x12b925 => {
  const _0x3eaf53 = [];
  const _0x1d2c07 = _0x12b925.group && _0x12b925.group.members.length > 0;
  if (!_0x1d2c07) {
    _0x3eaf53.push({
      icon: "users",
      onClick: async () => {
        await _0x11a8b5("np-ui:heists:createGroup");
        _0x12b925.getGroup();
      },
      title: "Create Group"
    });
  } else {
    _0x3eaf53.push({
      icon: "sign-out-alt",
      onClick: async () => {
        await _0x11a8b5("np-ui:heists:leaveGroup");
        _0x12b925.getGroup();
      },
      title: "Leave Group"
    });
  }
  return _0x57c9f1.jsxs(_0x30c027, {
    primaryActions: _0x3eaf53,
    children: [_0x57c9f1.jsx("div", {
      style: {
        display: "flex",
        padding: 16,
        paddingTop: 0,
        alignItems: "center",
        justifyContent: "center"
      },
      children: _0x57c9f1.jsx(_0x191bc3, {
        size: "3x",
        style: {
          color: "gold"
        },
        icon: "piggy-bank"
      })
    }), _0x1d2c07 && _0x57c9f1.jsx(Group, {
      ..._0x12b925
    }), _0x12b925.isManager && _0x57c9f1.jsx("div", {
      style: {
        display: "flex",
        padding: 16,
        paddingTop: 0,
        alignItems: "center",
        justifyContent: "center"
      },
      children: _0x57c9f1.jsx(_0x3847fc.Primary, {
        onClick: () => _0x12b925.manageWeights(),
        children: "Manage"
      })
    }), _0x12b925.isManager && _0x12b925.managing && _0x12b925.gangs.map(_0x2d93e9 => _0x57c9f1.jsx(GangForm, {
      ..._0x12b925,
      gang: _0x2d93e9
    }, _0x2d93e9.id)), !_0x12b925.managing && _0x12b925.heists.map(_0xa3100d => {
      if (_0xa3100d.hidden && _0x12b925.heistLevel < _0xa3100d.level) {
        return null;
      }
      let _0x37a5d6 = "";
      const _0x22f651 = Math.floor((Date.now() + _0xa3100d.expires - Date.now()) / 1000 / 60 / 60);
      const _0x30e83a = _0x22f651 > 0 ? Math.floor((Date.now() + _0xa3100d.expires - Date.now()) / 1000 / 60) % 60 : Math.floor((Date.now() + _0xa3100d.expires - Date.now()) / 1000 / 60);
      const _0x1d751a = "Expires in: " + (_0x22f651 > 0 ? _0x22f651 + "h " : "") + _0x30e83a + "m";
      let _0x3ab983 = false;
      if (_0xa3100d.status === "Available") {
        _0x37a5d6 = "Available";
        _0x3ab983 = true;
      } else if (_0xa3100d.status === "Claimed") {
        _0x37a5d6 = "Claimed";
      } else if (_0xa3100d.status === "Expired") {
        _0x37a5d6 = "Expired";
      }
      if (_0xa3100d.queued && _0xa3100d.status === "Available") {
        _0x37a5d6 = "Queued";
        _0x3ab983 = true;
      }
      const _0x97fa22 = [];
      if (_0x37a5d6 === "Available" && _0x12b925.heistLevel >= _0xa3100d.level) {
        _0x97fa22.push({
          icon: "hand-holding",
          title: "Claim",
          onClick: () => _0x4dae21(async () => {
            _0x3308a9();
            const _0x2f516e = await _0x11a8b5("np-ui:heists:queue:claimHeist", {
              id: _0xa3100d.id,
              useInstant: false
            });
            if (!_0x2f516e.meta.ok) {
              _0x14e19d(_0x2f516e.meta.message, true);
              return;
            }
            _0x12b925.getQueue();
            _0x157168();
          })
        });
      }
      if (_0x37a5d6 === "Available" && _0x12b925.heistLevel >= _0xa3100d.level && _0x12b925.claimAvailable) {
        _0x97fa22.push({
          icon: "hand-holding-usd",
          title: "Claim (Prio)",
          onClick: () => _0x3a6b0a(_0x57c9f1.jsx(ClaimForm, {
            id: _0xa3100d.id,
            getQueue: _0x12b925.getQueue
          }))
        });
      }
      return _0x57c9f1.jsx(_0x2bd78f, {
        actions: _0x97fa22,
        children: _0x57c9f1.jsx(_0x2bd78f.Details, {
          description: _0x57c9f1.jsxs("div", {
            style: {
              display: "flex",
              justifyContent: "space-between"
            },
            children: [_0x57c9f1.jsx("div", {
              children: _0x57c9f1.jsx(_0x4f5a84, {
                variant: "body2",
                children: _0x3ab983 ? _0x1d751a : ""
              })
            }), _0x57c9f1.jsx("div", {
              children: _0x57c9f1.jsx(_0x4f5a84, {
                variant: "body2",
                children: _0x37a5d6
              })
            })]
          }),
          title: _0xa3100d.name
        })
      }, _0xa3100d.expires);
    })]
  });
};
const {
  mapStateToProps,
  mapDispatchToProps
} = _0x3ad10c(_0x4ae910);
class Container extends _0x116a2d.Component {
  getQueue = async () => {
    const _0x316501 = await _0x11a8b5("np-ui:heists:getQueue", {}, {
      returnData: {
        queue: [{
          code: "fleeca_go",
          expires: Date.now() - 2700000,
          name: "Fleeca: Greact Ocean",
          id: "id_1",
          queued: false,
          status: "Expired",
          level: 1
        }, {
          code: "fleeca_go",
          expires: Date.now() + 2700000,
          name: "Fleeca: Greact Ocean",
          id: "id_2",
          queued: false,
          status: "Available",
          level: 1
        }, {
          code: "fleeca_go",
          expires: Date.now() + 5400000,
          name: "Fleeca: Greact Ocean",
          id: "id_3",
          queued: true,
          status: "Available",
          level: 1
        }, {
          code: "fleeca_go",
          expires: Date.now() + 8100000,
          name: "Fleeca: Greact Ocean",
          id: "id_4",
          queued: false,
          status: "Claimed",
          level: 1
        }],
        isManager: true,
        heistLevel: 2,
        claimAvailable: true
      }
    });
    this.props.updateState({
      heists: _0x316501.data.queue,
      heistLevel: _0x316501.data.heistLevel,
      claimAvailable: _0x316501.data.claimAvailable,
      isManager: _0x316501.data.isManager
    });
  };
  getGroup = async () => {
    const _0x504b2e = await _0x11a8b5("np-ui:heists:getGroup", {}, {
      returnData: {
        id: "1234",
        heistActive: true,
        members: [{
          characterId: 1,
          isLeader: true,
          isOnline: true,
          firstName: "monka",
          lastName: "S"
        }, {
          characterId: 2,
          isLeader: false,
          isOnline: true,
          firstName: "pepe",
          lastName: "Ga"
        }]
      }
    });
    this.props.updateState({
      group: _0x504b2e.data
    });
  };
  componentDidMount() {
    this.getQueue();
    this.getGroup();
  }
  getGangs = async () => {
    this.props.updateState({
      gangs: []
    });
    const _0x6e1a85 = await _0x11a8b5("np-ui:heists:getGangs", {}, {
      returnData: [{
        id: "gsf",
        gangName: "GSF",
        members: [{
          cid: 1,
          heistWeight: 4,
          name: "GSF Miles"
        }],
        heistWeight: 1
      }, {
        id: "vagos",
        gangName: "Vagos",
        members: [{
          cid: 5,
          heistWeight: 10,
          name: "Speedy"
        }],
        heistWeight: 5
      }]
    });
    const _0x189f53 = _0x6e1a85.data;
    _0x189f53.sort((_0x7d05aa, _0x119ee3) => {
      if (_0x7d05aa.heistWeight > _0x119ee3.heistWeight) {
        return -1;
      } else if (_0x7d05aa.heistWeight < _0x119ee3.heistWeight) {
        return 1;
      }
      return 0;
    });
    this.props.updateState({
      gangs: _0x189f53
    });
  };
  manageWeights = () => {
    this.props.updateState({
      managing: !this.props.managing
    });
    if (this.props.managing) {
      return;
    }
    this.getGangs();
  };
  render() {
    return _0x57c9f1.jsx(Signups, {
      ...this.props,
      getGangs: this.getGangs,
      getQueue: this.getQueue,
      getGroup: this.getGroup,
      manageWeights: this.manageWeights
    });
  }
}
const Container$1 = _0x591942(mapStateToProps, mapDispatchToProps)(Container);
const icon = {
  background: "gold",
  color: "black",
  name: "piggy-bank"
};
const config = _0x5e6b06 => {
  return {
    ..._0x5e6b06,
    hidden: () => !_0x5296c0(),
    icon: icon,
    label: "Bank Busters",
    name: "heist-signups",
    position: 151,
    render: () => _0x57c9f1.jsx(Container$1, {})
  };
};
export { config as default, icon };