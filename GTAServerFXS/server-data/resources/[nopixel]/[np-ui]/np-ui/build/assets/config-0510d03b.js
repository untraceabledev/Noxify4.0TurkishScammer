import { j as _0x3bacce, R as _0x3bb39d, r as _0x357a47, s as _0x412613, k as _0x2818da } from "./vendor-6c45b22f.js";
import { n as _0x56a5a6, d as _0xe2f66b } from "./index-d5aaa08b.js";
import { A as _0x432618 } from "./app-container-77eaf0ff.js";
import { a as _0x51d900, m as _0x1bd160, b as _0x41ddfb, c as _0x3608d9, d as _0x3e1fa6 } from "./actions-c0279434.js";
import { P as _0x463b14 } from "./paper-22e478e9.js";
import { S as _0x173b0a } from "./simple-form-6b6335d8.js";
import { B as _0x273345 } from "./button-c47bff31.js";
import { F as _0x144859 } from "./input-c6588ceb.js";
import { M as _0x32d74b } from "./multi-pager-4b2260b4.js";
import { b as _0x14c128 } from "./date-1e39c206.js";
import { T as _0x210256 } from "./text-f7ee3e03.js";
import { I as _0x3a23cc } from "./icon-7f5cdae2.js";
import { m as _0x3986bc, b as _0xffc88 } from "./styles-61014012.js";
import { d as _0x7812f6 } from "./dev-data-afd59de4.js";
import _0x37ff8a from "./store-6adab5c7.js";
import { t as _0x180e8f } from "./notifications-c44d34f0.js";
import { D as _0x5773fd } from "./duration-timer-2aea312f.js";
import { m as _0x1a0238 } from "./format-10690d6f.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
import "./tooltip-cb871d8a.js";
import "./translations-7705db3f.js";
import "./store-779dab40.js";
import "./store-50ddf3e0.js";
import "./index-ae383549.js";
const hasPermission = (_0x18c50a, _0x45462a) => {
  return _0x18c50a.includes(_0x45462a);
};
const permissions = ["Hire", "Fire", "Change Role", "Pay Employee", "Pay External", "Charge External", "Property Keys", "Stash Access", "Craft Access", "View Logs"];
const customPermissions = {
  tuner: ["Buy Car"]
};
const generatePermissions = _0x5306a5 => {
  if (customPermissions[_0x5306a5]) {
    return permissions.concat(customPermissions[_0x5306a5]);
  } else {
    return permissions;
  }
};
const makePermString = _0x3b9ec0 => _0x3b9ec0.toLowerCase().replace(" ", "_");
const makePermissionsList = (_0xde2c2a, _0x41a3de) => {
  generatePermissions(_0x41a3de).forEach(_0x45d4db => {
    _0xde2c2a.push({
      name: _0x45d4db,
      render: ({
        onChange: _0x3a9761,
        value: _0x40d75f
      }) => _0x3bacce.jsx(_0x144859.Checkbox, {
        i18n: true,
        checked: _0x40d75f,
        onChange: _0x3a9761,
        label: _0x45d4db
      })
    });
  });
};
const manageRollForm = _0x5d4382 => {
  const _0x5184bc = [{
    name: "name",
    render: ({
      onChange: _0x522818,
      value: _0xd9a1d6
    }) => _0x3bacce.jsx(_0x144859.Name, {
      onChange: _0x522818,
      value: _0xd9a1d6
    }),
    validate: ["text", "Name"]
  }];
  makePermissionsList(_0x5184bc, _0x5d4382.activeBusiness.code);
  _0x51d900(_0x3bacce.jsx(_0x173b0a, {
    elements: _0x5184bc,
    onCancel: () => _0x1bd160(false),
    onSubmit: async _0x1d4439 => {
      _0x41ddfb();
      const _0x1b40a6 = [];
      generatePermissions(_0x5d4382.activeBusiness.code).forEach(_0x2e36d3 => {
        if (_0x1d4439[_0x2e36d3]) {
          _0x1b40a6.push(makePermString(_0x2e36d3));
        }
      });
      const _0x496501 = await _0x56a5a6("np-ui:createBusinessRole", {
        permissions: _0x1b40a6,
        name: _0x1d4439.name,
        business: _0x5d4382.activeBusiness
      });
      if (!_0x496501.meta.ok) {
        _0x3608d9(_0x496501.meta.message);
        return;
      }
      _0x5d4382.manageBusiness(_0x5d4382.activeBusiness);
      _0x1bd160();
    }
  }));
};
const changeRoleForm = ({
  employee: _0x4006f4,
  p: _0x14e2f2
}) => {
  _0x51d900(_0x3bacce.jsx(_0x173b0a, {
    defaultValues: {
      role: _0x14e2f2.roles[0].id
    },
    elements: [{
      name: "role",
      render: ({
        onChange: _0x49f345,
        value: _0x322e63
      }) => _0x3bacce.jsx(_0x144859.Select, {
        i18n: true,
        onChange: _0x49f345,
        value: _0x322e63,
        label: "Role",
        items: _0x14e2f2.roles
      })
    }],
    onCancel: () => _0x1bd160(false),
    onSubmit: async _0x5cb6e9 => {
      _0x41ddfb();
      const _0x500856 = await _0x56a5a6("np-ui:changeBusinessRole", {
        role_id: _0x5cb6e9.role,
        employee: _0x4006f4,
        business: _0x14e2f2.activeBusiness
      });
      if (!_0x500856.meta.ok) {
        _0x3608d9(_0x500856.meta.message);
        return;
      }
      _0x14e2f2.manageBusiness(_0x14e2f2.activeBusiness);
      _0x1bd160();
    }
  }));
};
const deleteRoleForm = _0x4a1d1f => {
  _0x51d900(_0x3bacce.jsx(_0x173b0a, {
    defaultValues: {
      role: _0x4a1d1f.roles[0].id
    },
    elements: [{
      name: "role",
      render: ({
        onChange: _0x13a9fb,
        value: _0x39bbf8
      }) => _0x3bacce.jsx(_0x144859.Select, {
        i18n: true,
        onChange: _0x13a9fb,
        value: _0x39bbf8,
        label: "Role",
        items: _0x4a1d1f.roles
      })
    }],
    onCancel: () => _0x1bd160(false),
    onSubmit: async _0x4dfdc8 => {
      _0x41ddfb();
      const _0x115996 = await _0x56a5a6("np-ui:deleteBusinessRole", {
        role_id: _0x4dfdc8.role,
        business: _0x4a1d1f.activeBusiness
      });
      if (!_0x115996.meta.ok) {
        _0x3608d9(_0x115996.meta.message);
        return;
      }
      _0x4a1d1f.manageBusiness(_0x4a1d1f.activeBusiness);
      _0x1bd160();
    }
  }));
};
const editRoleForm = _0x76d04b => {
  const _0xece809 = () => {
    const [_0x4fc1dd, _0x3a1663] = _0x3bb39d.useState(_0x76d04b.roles[0].id);
    const [_0x36ddf4, _0x56292e] = _0x3bb39d.useState(_0x76d04b.roles[0].permissions);
    const _0x47a3d7 = _0x76d04b.roles.find(_0x13937a => _0x13937a.id === _0x4fc1dd);
    _0x3bb39d.useEffect(() => {
      _0x56292e(_0x47a3d7.permissions);
    }, [_0x4fc1dd, _0x47a3d7.permissions]);
    const _0x570298 = (_0x27f2ce, _0x350073) => {
      const _0x184d1e = [..._0x36ddf4];
      if (_0x27f2ce) {
        _0x184d1e.push(_0x350073);
      } else {
        const _0x1ef87e = _0x184d1e.indexOf(_0x350073);
        _0x184d1e.splice(_0x1ef87e, 1);
      }
      _0x56292e(_0x184d1e);
    };
    return _0x3bacce.jsxs("div", {
      style: {
        width: "100%"
      },
      children: [_0x3bacce.jsx("div", {
        children: _0x3bacce.jsx(_0x144859.Select, {
          i18n: true,
          onChange: _0x3a1663,
          value: _0x4fc1dd,
          label: "Role",
          items: _0x76d04b.roles
        })
      }), generatePermissions(_0x76d04b.activeBusiness.code).map(_0x511564 => {
        return _0x3bacce.jsx(_0x144859.Checkbox, {
          i18n: true,
          checked: _0x36ddf4.includes(makePermString(_0x511564)),
          onChange: _0xce38e8 => _0x570298(_0xce38e8, makePermString(_0x511564)),
          label: _0x511564
        });
      }), _0x3bacce.jsxs("div", {
        style: {
          display: "flex",
          justifyContent: "space-between"
        },
        children: [_0x3bacce.jsx(_0x273345.Secondary, {
          onClick: () => _0x1bd160(false),
          children: "Cancel"
        }), _0x3bacce.jsx(_0x273345.Primary, {
          onClick: async () => {
            _0x41ddfb();
            const _0x21452a = await _0x56a5a6("np-ui:editBusinessRole", {
              role_id: _0x4fc1dd,
              permissions: _0x36ddf4,
              business: _0x76d04b.activeBusiness
            });
            if (!_0x21452a.meta.ok) {
              _0x3608d9(_0x21452a.meta.message);
              return;
            }
            _0x76d04b.manageBusiness(_0x76d04b.activeBusiness);
            _0x1bd160();
          },
          children: "Save"
        })]
      })]
    });
  };
  _0x51d900(_0x3bacce.jsx(_0xece809, {}));
};
const hireForm = _0x100760 => {
  _0x51d900(_0x3bacce.jsx(_0x173b0a, {
    defaultValues: {
      role: _0x100760.roles[0].id
    },
    elements: [{
      name: "stateId",
      render: ({
        onChange: _0xd862f2,
        value: _0x288259
      }) => _0x3bacce.jsx(_0x144859.CityID, {
        onChange: _0xd862f2,
        value: _0x288259
      }),
      validate: ["number", "State ID"]
    }, {
      name: "role",
      render: ({
        onChange: _0x3a6354,
        value: _0x40f62a
      }) => _0x3bacce.jsx(_0x144859.Select, {
        i18n: true,
        onChange: _0x3a6354,
        value: _0x40f62a,
        label: "Role",
        items: _0x100760.roles
      })
    }],
    onCancel: () => _0x1bd160(false),
    onSubmit: async _0x296674 => {
      _0x41ddfb();
      const _0x29491b = await _0x56a5a6("np-ui:hireBusinessEmployee", {
        role_id: _0x296674.role,
        state_id: Number(_0x296674.stateId),
        business: _0x100760.activeBusiness
      });
      if (!_0x29491b.meta.ok) {
        _0x3608d9(_0x29491b.meta.message);
        return;
      }
      _0x100760.manageBusiness(_0x100760.activeBusiness);
      _0x1bd160();
    }
  }));
};
const payEmployeeForm = (_0x1e31e0, _0xd77f4e) => {
  _0x51d900(_0x3bacce.jsx("div", {
    style: {
      width: "100%"
    },
    children: _0x3bacce.jsx(_0x173b0a, {
      elements: [{
        name: "amount",
        render: ({
          onChange: _0x1fa062,
          value: _0x23ffd1
        }) => _0x3bacce.jsx(_0x144859.Currency, {
          onChange: _0x1fa062,
          value: _0x23ffd1
        })
      }, {
        name: "comment",
        render: ({
          onChange: _0x3182d3,
          value: _0x13d502
        }) => _0x3bacce.jsx(_0x144859.TextArea, {
          i18n: true,
          maxLength: 254,
          label: "Comment",
          icon: "comment-o",
          onChange: _0x3182d3,
          value: _0x13d502
        })
      }],
      onCancel: () => _0x1bd160(false),
      onSubmit: async _0x3d7e43 => {
        _0x41ddfb();
        const _0x4ce3b9 = await _0x56a5a6("np-ui:businessPayEmployee", {
          employee_id: Number(_0x1e31e0.id),
          amount: Number(_0x3d7e43.amount),
          comment: _0x3d7e43.comment,
          business: _0xd77f4e.activeBusiness,
          character: _0xd77f4e.character
        });
        if (!_0x4ce3b9.meta.ok) {
          _0x3608d9(_0x4ce3b9.meta.message || "unknown error");
          return;
        }
        _0x1bd160();
      }
    })
  }));
};
const payExternalForm = _0x4a7233 => {
  _0x51d900(_0x3bacce.jsx(_0x173b0a, {
    elements: [{
      name: "accountId",
      render: ({
        onChange: _0x19d49e,
        value: _0x20456b
      }) => _0x3bacce.jsx(_0x144859.AccountID, {
        onChange: _0x19d49e,
        value: _0x20456b
      }),
      validate: ["number", "Account ID"]
    }, {
      name: "amount",
      render: ({
        onChange: _0x3a4abf,
        value: _0x20db86
      }) => _0x3bacce.jsx(_0x144859.Currency, {
        onChange: _0x3a4abf,
        value: _0x20db86
      })
    }, {
      name: "comment",
      render: ({
        onChange: _0x483b83,
        value: _0x50eb94
      }) => _0x3bacce.jsx(_0x144859.TextArea, {
        i18n: true,
        label: "Comment",
        icon: "comment-o",
        onChange: _0x483b83,
        value: _0x50eb94
      })
    }],
    onCancel: () => _0x1bd160(false),
    onSubmit: async _0x2f5074 => {
      _0x41ddfb();
      const _0x386676 = await _0x56a5a6("np-ui:businessPayExternal", {
        target_account_id: Number(_0x2f5074.accountId),
        amount: Number(_0x2f5074.amount),
        comment: _0x2f5074.comment,
        business: _0x4a7233.activeBusiness,
        character: _0x4a7233.character
      });
      if (!_0x386676.meta.ok) {
        _0x3608d9(_0x386676.meta.message);
        return;
      }
      _0x1bd160();
    }
  }));
};
const chargeExternalForm = _0x2e817e => {
  _0x51d900(_0x3bacce.jsx(_0x173b0a, {
    elements: [{
      name: "stateId",
      render: ({
        onChange: _0x3a0a9f,
        value: _0x47a7cd
      }) => _0x3bacce.jsx(_0x144859.CityID, {
        onChange: _0x3a0a9f,
        value: _0x47a7cd
      }),
      validate: ["number", "State ID"]
    }, {
      name: "amount",
      render: ({
        onChange: _0x5ab734,
        value: _0x2edd5a
      }) => _0x3bacce.jsx(_0x144859.Currency, {
        onChange: _0x5ab734,
        value: _0x2edd5a
      })
    }, {
      name: "comment",
      render: ({
        onChange: _0x2a8b7a,
        value: _0x3431c1
      }) => _0x3bacce.jsx(_0x144859.TextArea, {
        i18n: true,
        label: "Comment",
        icon: "comment-o",
        onChange: _0x2a8b7a,
        value: _0x3431c1
      })
    }],
    onCancel: () => _0x1bd160(false),
    onSubmit: async _0x436598 => {
      _0x41ddfb();
      const _0x105830 = await _0x56a5a6("np-ui:businessChargeExternal", {
        state_id: Number(_0x436598.stateId),
        amount: Number(_0x436598.amount),
        comment: _0x436598.comment,
        business: _0x2e817e.activeBusiness,
        character: _0x2e817e.character
      });
      if (!_0x105830.meta.ok) {
        _0x3608d9(_0x105830.meta.message);
        return;
      }
      _0x1bd160();
    }
  }));
};
const EmployeeItem = ({
  business: _0x54c03c,
  employee: _0x565fc5,
  p: _0x345eef
}) => {
  const _0x595a0e = [];
  if (_0x565fc5.role !== "Owner" && hasPermission(_0x54c03c.permissions, "change_role")) {
    _0x595a0e.push({
      icon: "user-tag",
      onClick: () => changeRoleForm({
        employee: _0x565fc5,
        p: _0x345eef
      }),
      title: "Change Role"
    });
  }
  if (hasPermission(_0x54c03c.permissions, "pay_employee")) {
    _0x595a0e.push({
      icon: "hand-holding-usd",
      onClick: () => payEmployeeForm(_0x565fc5, {
        ..._0x345eef
      }),
      title: "Pay"
    });
  }
  if (_0x54c03c.access_level === -1 && _0x565fc5.role !== "Owner") {
    _0x595a0e.push({
      icon: "university",
      onClick: async () => {
        _0x41ddfb();
        const _0x3da835 = (await _0x56a5a6("np-ui:getAccountCharacters", {
          account_id: _0x54c03c.bank_account_id
        }, {
          returnData: "getAccountCharacters"
        })).data;
        const _0x3499ae = _0x3da835.find(_0x5725e9 => _0x5725e9.id === _0x565fc5.id);
        const _0x429606 = [];
        const _0x39d8a1 = {};
        ["balance", "deposit", "transfer", "transactions", "withdraw"].forEach(_0x32e1b7 => {
          _0x39d8a1[_0x32e1b7] = _0x3499ae && _0x3499ae.access.includes(_0x32e1b7);
          _0x429606.push({
            name: _0x32e1b7,
            render: ({
              onChange: _0x1d7b80,
              value: _0x594f2c
            }) => _0x3bacce.jsx(_0x144859.Checkbox, {
              i18n: true,
              checked: _0x594f2c || false,
              onChange: _0x1d7b80,
              label: _0x32e1b7
            })
          });
        });
        _0x51d900(_0x3bacce.jsx(_0x173b0a, {
          defaultValues: _0x39d8a1,
          elements: _0x429606,
          onCancel: () => _0x1bd160(false),
          onSubmit: async _0x525308 => {
            _0x41ddfb();
            const _0xd7d1c = Object.keys(_0x525308).filter(_0x12f5f2 => !!_0x525308[_0x12f5f2]);
            if (_0xd7d1c.length === 0) {
              await _0x56a5a6("np-ui:removeCharacterFromAccount", {
                character: {
                  id: _0x565fc5.id
                },
                account: {
                  id: _0x54c03c.bank_account_id
                }
              });
            } else {
              const _0x411ecb = {
                character: {
                  id: _0x565fc5.id,
                  access: _0xd7d1c
                },
                account: {
                  id: _0x54c03c.bank_account_id
                }
              };
              const _0x434686 = await _0x56a5a6("np-ui:addAccountCharacterPermissions", _0x411ecb);
              if (!_0x434686.meta.ok) {
                await _0x56a5a6("np-ui:editAccountCharacterPermissions", _0x411ecb);
              }
            }
            _0x1bd160();
          }
        }));
      },
      title: "Bank Access"
    });
  }
  if (_0x565fc5.role !== "Owner" && hasPermission(_0x54c03c.permissions, "fire")) {
    _0x595a0e.push({
      icon: "user-slash",
      onClick: () => _0x3e1fa6(async () => {
        _0x41ddfb();
        const _0x53b548 = await _0x56a5a6("np-ui:removeBusinessEmployee", {
          business: _0x54c03c,
          employee: _0x565fc5
        });
        if (!_0x53b548.meta.ok) {
          _0x3608d9(_0x53b548.meta.message);
          return;
        }
        _0x56a5a6("np-ui:removeCharacterFromAccount", {
          character: {
            id: _0x565fc5.id
          },
          account: {
            id: _0x54c03c.bank_account_id
          }
        });
        _0x345eef.manageBusiness(_0x345eef.activeBusiness);
        _0x1bd160();
      }),
      title: "Remove Employee"
    });
  }
  return _0x3bacce.jsx("div", {
    className: "paper-group",
    children: _0x3bacce.jsxs(_0x463b14, {
      actions: _0x595a0e,
      children: [_0x3bacce.jsx(_0x463b14.Icon, {
        icon: _0x565fc5.role === "Owner" ? "user-secret" : "user-tie"
      }), _0x3bacce.jsx(_0x463b14.Details, {
        description: _0x565fc5.role,
        title: _0x565fc5.first_name + " " + _0x565fc5.last_name
      })]
    })
  });
};
const Business = _0x483e18 => {
  const [_0x1fd859, _0x358d73] = _0x3bb39d.useState(_0x483e18.employees);
  _0x3bb39d.useEffect(() => {
    _0x358d73(_0x483e18.employees);
  }, [_0x483e18.employees]);
  const _0x249cca = [];
  const _0x53934b = [];
  if (_0x483e18.activeBusiness !== -1) {
    if (_0x483e18.roles.length > 0 && hasPermission(_0x483e18.activeBusiness.permissions, "hire")) {
      _0x249cca.push({
        icon: "user-plus",
        title: "Hire",
        onClick: () => hireForm(_0x483e18)
      });
    }
    if (hasPermission(_0x483e18.activeBusiness.permissions, "pay_external")) {
      _0x249cca.push({
        icon: "hand-holding-usd",
        title: "Pay External",
        onClick: () => payExternalForm(_0x483e18)
      });
    }
    if (hasPermission(_0x483e18.activeBusiness.permissions, "charge_external")) {
      _0x249cca.push({
        icon: "credit-card",
        title: "Charge Customer",
        onClick: () => chargeExternalForm(_0x483e18)
      });
    }
    if (hasPermission(_0x483e18.activeBusiness.permissions, "change_role")) {
      _0x249cca.push({
        icon: "user-tag",
        title: "Create Role",
        onClick: () => manageRollForm(_0x483e18)
      });
    }
    if (hasPermission(_0x483e18.activeBusiness.permissions, "change_role") && _0x483e18.roles.length > 0) {
      _0x249cca.push({
        icon: "user-tag",
        title: "Edit Role",
        onClick: () => editRoleForm(_0x483e18)
      });
    }
    if (hasPermission(_0x483e18.activeBusiness.permissions, "change_role") && _0x483e18.roles.length > 0) {
      _0x249cca.push({
        icon: "user-tag",
        title: "Delete Role",
        onClick: () => deleteRoleForm(_0x483e18)
      });
    }
    if (hasPermission(_0x483e18.activeBusiness.permissions, "view_logs")) {
      _0x249cca.push({
        icon: "list",
        title: "Logs",
        onClick: () => _0x483e18.viewLogs()
      });
    }
    if (_0x483e18.activeBusiness.role !== "Owner") {
      _0x249cca.push({
        icon: "sign-out-alt",
        title: "Quit",
        onClick: () => _0x3e1fa6(async () => {
          _0x41ddfb();
          const _0x23e70d = await _0x56a5a6("np-ui:removeBusinessEmployee", {
            business: _0x483e18.activeBusiness,
            employee: {
              id: _0x483e18.character.id,
              role: _0x483e18.activeBusiness.role
            }
          });
          if (!_0x23e70d.meta.ok) {
            _0x3608d9(_0x23e70d.meta.message);
            return;
          }
          _0x56a5a6("np-ui:removeCharacterFromAccount", {
            character: {
              id: _0x483e18.character.id
            },
            account: {
              id: _0x483e18.activeBusiness.bank_account_id
            }
          });
          _0x483e18.updateState({
            activeBusiness: -1,
            page: 0
          });
          _0x1bd160();
        })
      });
    }
  }
  return _0x3bacce.jsx(_0x432618, {
    auxActions: _0x249cca,
    heading: _0x483e18.activeBusiness.name,
    emptyMessage: _0x1fd859.length === 0,
    onClickBack: () => _0x483e18.updateState({
      activeBusiness: -1,
      page: 0
    }),
    primaryActions: _0x53934b,
    search: {
      filter: ["first_name", "last_name", "role"],
      list: _0x483e18.employees,
      onChange: _0x358d73
    },
    children: _0x483e18.activeBusiness !== -1 && _0x1fd859.map((_0x46febe, _0x4beae5) => _0x3bacce.jsx(EmployeeItem, {
      business: _0x483e18.activeBusiness,
      employee: _0x46febe,
      p: _0x483e18
    }, _0x4beae5))
  });
};
const useStyles = _0x3986bc({
  searchContainer: () => ({
    width: "100%",
    display: "flex",
    marginBottom: "1rem"
  }),
  backButton: () => ({
    display: "flex",
    width: _0xffc88.responsiveWidth(40),
    alignItems: "center"
  })
});
const LogEvents = {
  hire: "Hired",
  fire: "Fired",
  create_role: "Created Role",
  delete_role: "Deleted Role",
  edit_role: "Edited Role",
  pay_employee: "Paid Employee",
  charge_external: "Charged External"
};
const buildLogText = _0x5abbdc => {
  const _0xbe1dcb = LogEvents[_0x5abbdc.event];
  switch (_0xbe1dcb) {
    case LogEvents.create_role:
    case LogEvents.delete_role:
    case LogEvents.edit_role:
      return ["users", _0x3bacce.jsxs("div", {
        children: [_0x3bacce.jsx(_0x210256, {
          variant: "body2",
          style: {
            fontWeight: "bold"
          },
          children: _0x5abbdc.invoker
        }), _0x3bacce.jsxs(_0x210256, {
          variant: "body2",
          children: [_0xbe1dcb, " \"", _0x3bacce.jsx(_0x210256, {
            variant: "body2",
            style: {
              display: "inline-block",
              fontWeight: "bold"
            },
            children: _0x5abbdc.role
          }), "\""]
        })]
      })];
    case LogEvents.pay_employee:
    case LogEvents.charge_external:
      return ["dollar-sign", _0x3bacce.jsxs("div", {
        children: [_0x3bacce.jsx(_0x210256, {
          variant: "body2",
          style: {
            fontWeight: "bold"
          },
          children: _0x5abbdc.invoker
        }), _0x3bacce.jsxs(_0x210256, {
          variant: "body2",
          children: [_0xbe1dcb, " ", _0x3bacce.jsxs(_0x210256, {
            variant: "body2",
            style: {
              display: "inline-block",
              fontWeight: "bold"
            },
            children: [_0x5abbdc.target, " "]
          }), " "]
        }), _0x3bacce.jsxs(_0x210256, {
          variant: "body2",
          style: {
            fontWeight: "bold",
            color: "green"
          },
          children: ["$", _0x5abbdc.amount]
        })]
      })];
    case LogEvents.hire:
    case LogEvents.fire:
      return [_0xbe1dcb === LogEvents.hire ? "user-plus" : "user-minus", _0x3bacce.jsxs("div", {
        children: [_0x3bacce.jsx(_0x210256, {
          variant: "body2",
          style: {
            fontWeight: "bold"
          },
          children: _0x5abbdc.invoker
        }), _0x3bacce.jsxs(_0x210256, {
          variant: "body2",
          children: [_0xbe1dcb, " ", _0x3bacce.jsxs(_0x210256, {
            style: {
              display: "inline-block",
              fontWeight: "bold"
            },
            children: [_0x5abbdc.target, " as ", _0x5abbdc.role]
          })]
        })]
      })];
    default:
      return ["book-open", _0x3bacce.jsxs("div", {
        children: [_0x3bacce.jsx(_0x210256, {
          variant: "body2",
          style: {
            fontWeight: "bold"
          },
          children: _0x5abbdc.invoker
        }), _0x3bacce.jsxs(_0x210256, {
          variant: "body2",
          children: [_0xbe1dcb, " ", _0x3bacce.jsx(_0x210256, {
            style: {
              display: "inline-block",
              fontWeight: "bold"
            },
            children: _0x5abbdc.target
          })]
        })]
      })];
  }
};
const BusinessLogs = _0x1c5f97 => {
  const [_0x2c0477, _0x32769e] = _0x357a47.useState("");
  const [_0x3b95b9, _0x5cc3cd] = _0x357a47.useState([]);
  const _0x55ae81 = useStyles(_0x1c5f97);
  const _0x6c154f = _0x357a47.useCallback((_0x4311d5, _0x29014b, _0x363fe7) => {
    return _0x4311d5.filter(_0x613907 => {
      for (const _0x386826 of _0x363fe7) {
        let _0x592169 = _0x613907[_0x386826];
        if (_0x386826 === "event") {
          _0x592169 = LogEvents[_0x592169];
        }
        if (_0x592169 && _0x592169.toString().toLowerCase().includes(_0x29014b.toLowerCase())) {
          return true;
        }
      }
      return false;
    });
  }, []);
  const _0xa619fa = _0x357a47.useCallback(async () => {
    if (_0x1c5f97.activeBusiness === -1) {
      return;
    }
    const _0x13fb52 = _0x1c5f97.activeBusiness?.id;
    const _0x308c71 = await _0x56a5a6("np-ui:businessGetLogs", {
      businessId: _0x13fb52
    });
    if (_0x308c71.meta.ok) {
      _0x5cc3cd(_0x308c71.data);
    }
  }, [_0x1c5f97.activeBusiness]);
  _0x357a47.useEffect(() => {
    if (_0x1c5f97.showingLogs) {
      _0xa619fa();
    }
  }, [_0xa619fa, _0x1c5f97.activeBusiness, _0x1c5f97.showingLogs]);
  return _0x3bacce.jsxs(_0x432618, {
    emptyMessage: _0x3b95b9.length === 0,
    children: [_0x3bacce.jsxs("div", {
      className: _0x55ae81.searchContainer,
      children: [_0x3bacce.jsx(_0x412613, {
        title: "Go Back",
        placement: "right",
        children: _0x3bacce.jsx("div", {
          className: _0x55ae81.backButton,
          onClick: () => _0x1c5f97.updateState({
            page: 1,
            showingLogs: false
          }),
          children: _0x3bacce.jsx(_0x3a23cc, {
            icon: "chevron-left",
            size: "lg",
            style: {
              color: "white"
            }
          })
        })
      }), _0x3bacce.jsx(_0x144859.Search, {
        onChange: _0xf2f947 => _0x32769e(_0xf2f947),
        value: _0x2c0477,
        style: {
          width: "100%"
        }
      })]
    }), _0x3b95b9 && _0x6c154f(_0x3b95b9, _0x2c0477, ["event", "invoker", "target"]).map((_0x4126f6, _0x2a6432) => {
      const [_0x27d44d, _0x4e7874] = buildLogText(_0x4126f6);
      return _0x3bacce.jsxs(_0x463b14, {
        children: [_0x3bacce.jsx(_0x463b14.Icon, {
          icon: _0x27d44d
        }), _0x3bacce.jsx(_0x463b14.Details, {
          title: _0x4e7874,
          description: _0x3bacce.jsx(_0x210256, {
            variant: "subtitle2",
            children: _0x14c128(_0x4126f6.event_time)
          })
        })]
      }, _0x2a6432);
    })]
  });
};
const employment = "";
const EmploymentItem = ({
  business: _0x18fb91,
  onClick: _0x424ce7
}) => {
  let _0x15860c = "business-time";
  if (_0x18fb91.business_type === "Showroom") {
    _0x15860c = "car";
  }
  return _0x3bacce.jsxs(_0x463b14, {
    onClick: () => _0x424ce7(_0x18fb91),
    children: [_0x3bacce.jsx(_0x463b14.Icon, {
      icon: _0x15860c
    }), _0x3bacce.jsx(_0x463b14.Details, {
      description: _0x18fb91.role,
      title: _0x18fb91.name
    })]
  });
};
const Employment$1 = _0x5846b8 => {
  const [_0x1d334b, _0x242041] = _0x3bb39d.useState(_0x5846b8.list);
  _0x3bb39d.useEffect(() => {
    _0x242041(_0x5846b8.list);
  }, [_0x5846b8.list]);
  return _0x3bacce.jsx(_0x32d74b, {
    activeIndex: _0x5846b8.page,
    landscapeOptions: {},
    pages: [{
      index: 0,
      content: _0x3bacce.jsx(_0x432618, {
        heading: "Employment",
        emptyMessage: _0x1d334b.length === 0,
        emptyMessageText: "You are unemployed.",
        search: {
          filter: ["name"],
          list: _0x5846b8.list,
          onChange: _0x242041
        },
        children: _0x3bacce.jsx("div", {
          className: "paper-group",
          children: _0x1d334b.map((_0x445139, _0x30f744) => _0x3bacce.jsx(EmploymentItem, {
            business: _0x445139,
            onClick: _0x4249db => _0x5846b8.manageBusiness(_0x4249db)
          }, _0x30f744))
        })
      })
    }, {
      index: 1,
      content: _0x3bacce.jsx(Business, {
        ..._0x5846b8
      })
    }, {
      index: 2,
      content: _0x3bacce.jsx(BusinessLogs, {
        ..._0x5846b8
      })
    }]
  });
};
const {
  mapStateToProps,
  mapDispatchToProps
} = _0xe2f66b(_0x37ff8a, {
  mapStateToProps: _0x5e5ea7 => ({
    character: _0x5e5ea7.character
  })
});
class Employment extends _0x3bb39d.Component {
  getEmployment = async () => {
    const _0x27a93e = await _0x56a5a6("np-ui:getEmploymentInformation", {}, {
      returnData: _0x7812f6.getEmploymentInformation()
    });
    this.props.updateState({
      list: _0x27a93e.data
    });
  };
  manageBusiness = async _0x1a918e => {
    this.props.updateState({
      activeBusiness: _0x1a918e,
      page: 1
    });
    const [_0x146018, _0x32e392] = await Promise.all([_0x56a5a6("np-ui:getBusinessEmployees", {
      id: _0x1a918e.id
    }, {
      returnData: _0x7812f6.getBusinessEmployees()
    }), _0x56a5a6("np-ui:getBusinessRoles", {
      id: _0x1a918e.id
    }, {
      returnData: _0x7812f6.getBusinessRoles()
    })]);
    const _0x4372e5 = _0x146018.data;
    _0x4372e5.sort((_0x3c8960, _0x4c99f8) => {
      if (_0x3c8960.role === "Founder") {
        return -1;
      } else if (_0x4c99f8.role === "Founder") {
        return 1;
      } else if (_0x3c8960.role === "Owner") {
        return -1;
      } else if (_0x4c99f8.role === "Owner") {
        return 1;
      } else if (_0x3c8960.role === "CEO") {
        return -1;
      } else if (_0x4c99f8.role === "CEO") {
        return 1;
      } else if (_0x3c8960.permissions.length > _0x4c99f8.permissions.length) {
        return -1;
      } else if (_0x3c8960.permissions.length < _0x4c99f8.permissions.length) {
        return 1;
      } else if (_0x3c8960.permissions.length === _0x4c99f8.permissions.length) {
        if (_0x3c8960.role > _0x4c99f8.role) {
          return 1;
        } else if (_0x3c8960.role < _0x4c99f8.role) {
          return -1;
        }
        return 0;
      }
      return 0;
    });
    this.props.updateState({
      employees: _0x4372e5,
      roles: _0x32e392.data
    });
  };
  viewLogs = async () => {
    this.props.updateState({
      showingLogs: true,
      page: 3
    });
  };
  componentDidMount() {
    this.getEmployment();
    this.props.updateState({
      search: null,
      selectedLoanType: 1
    });
  }
  render() {
    return _0x3bacce.jsx(Employment$1, {
      ...this.props,
      manageBusiness: this.manageBusiness,
      viewLogs: this.viewLogs
    });
  }
}
const Container = _0x2818da(mapStateToProps, mapDispatchToProps)(Employment);
let id = 0;
const getId = (_0x13d4e2 = false) => {
  if (_0x13d4e2) {
    id = id + 1;
  }
  return id;
};
const events = _0x261cb0 => {
  _0x261cb0("loan-offer", ({
    data: {
      data: _0x9521e5
    },
    state: _0x4fa897
  }) => {
    _0x180e8f({
      apps: [],
      icon: {
        name: "donate",
        color: "white"
      },
      id: getId(true),
      onAccept: async () => {
        setTimeout(async () => {
          const _0xc23061 = await _0x56a5a6("np-ui:loanAccept", {
            ..._0x9521e5,
            loanee: _0x9521e5.character,
            character: _0x4fa897.character
          });
          _0x180e8f({
            apps: [],
            icon: {
              name: "donate",
              color: "white"
            },
            id: getId(),
            state: _0x4fa897,
            text: _0xc23061.meta.ok ? "Loan Received!" : _0xc23061.meta.message,
            title: "loan offer - " + Number(_0x9521e5.interest) + "%",
            timeout: 2500
          });
        });
      },
      onAcceptOptions: {
        onAccept: null,
        onReject: null,
        dismiss: false,
        blockDismissOnClick: true,
        id: getId(),
        text: "Accepting...",
        timeout: -1
      },
      onReject: () => {},
      state: _0x4fa897,
      timeout: 30000,
      title: "loan offer - " + Number(_0x9521e5.interest) + "%",
      text: _0x3bacce.jsx(_0x5773fd, {
        countdown: true,
        extra: _0x1a0238(_0x9521e5.amount) + " - " + _0x9521e5.business.name,
        startTime: 30
      })
    });
    return {
      ..._0x4fa897
    };
  });
  _0x261cb0("charge-accept", ({
    data: {
      data: _0x4aa2c3
    },
    state: _0x12f461
  }) => {
    _0x180e8f({
      apps: [],
      icon: {
        name: "donate",
        color: "white"
      },
      id: getId(true),
      onAccept: async () => {
        setTimeout(async () => {
          const _0xe06fbf = await _0x56a5a6("np-ui:businessChargeAccept", {
            ..._0x4aa2c3,
            charger: _0x4aa2c3.character,
            character: _0x12f461.character
          });
          _0x180e8f({
            apps: [],
            icon: {
              name: "donate",
              color: "white"
            },
            id: getId(),
            state: _0x12f461,
            text: _0xe06fbf.meta.ok ? "Charge Accepted!" : _0xe06fbf.meta.message,
            title: "services charge",
            timeout: 2500
          });
        });
      },
      onAcceptOptions: {
        onAccept: null,
        onReject: null,
        dismiss: false,
        blockDismissOnClick: true,
        id: getId(),
        text: "Accepting...",
        timeout: -1
      },
      onReject: () => {
        setTimeout(() => {
          _0x56a5a6("np-ui:businessChargeReject", {
            ..._0x4aa2c3,
            charger: _0x4aa2c3.character,
            character: _0x12f461.character
          });
        });
      },
      state: _0x12f461,
      timeout: 30000,
      title: "services charge",
      text: _0x3bacce.jsx(_0x5773fd, {
        countdown: true,
        extra: _0x1a0238(_0x4aa2c3.amount + _0x4aa2c3.tax) + " incl tax - " + _0x4aa2c3.business.name,
        startTime: 30
      })
    });
    return {
      ..._0x12f461
    };
  });
};
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/employment.svg";
const config = _0x2f2400 => {
  return {
    ..._0x2f2400,
    events: () => events,
    iconPng: myIcon,
    init: async () => {
      const _0x1d203e = await _0x56a5a6("np-ui:getEmploymentInformation", {}, {
        returnData: _0x7812f6.getEmploymentInformation()
      });
      const _0x3140ed = _0x37ff8a.key;
      return {
        key: _0x3140ed,
        data: {
          ..._0x37ff8a.initialState,
          list: _0x1d203e.data
        }
      };
    },
    label: "Employment",
    name: "employment",
    position: 65,
    hidden: () => true,
    render: () => _0x3bacce.jsx(Container, {})
  };
};
export { config as default };