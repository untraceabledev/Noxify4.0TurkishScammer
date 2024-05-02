import { r as _0x53222f, j as _0x1e5116, av as _0x382d60, X as _0xbeeea1, Y as _0x181205, Z as _0x22cd9f, aw as _0x609b1b } from "./vendor-6c45b22f.js";
import _0x42620d from "./store-52c39051.js";
import { G as _0x12c82e } from "./index-eac3b5ce.js";
import { n as _0x5378a4, u as _0x34d067 } from "./index-d5aaa08b.js";
import { g as _0x48cb77, l as _0xe759b7, s as _0x2a5bb1 } from "./actions-354e5926.js";
import { I as _0x33eb96 } from "./icon-7f5cdae2.js";
import { G as _0x39b3dd } from "./index-e9ff94e9.js";
import { a as _0x451c2b, m as _0x621581, b as _0x4818d3, c as _0x284792 } from "./actions-c0279434.js";
import { T as _0x21010d } from "./text-f7ee3e03.js";
import { P as _0x8ed30d } from "./paper-22e478e9.js";
import { B as _0xd3119a } from "./button-c47bff31.js";
import { D as _0x359ab2 } from "./datetime-2c501277.js";
import { F as _0xa5357e } from "./input-c6588ceb.js";
import { S as _0x354073 } from "./simple-form-6b6335d8.js";
import { g as _0x306516 } from "./character-8ebc09ae.js";
import "./commonjsHelpers-c5dac66b.js";
import "./tooltip-cb871d8a.js";
import "./translations-7705db3f.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
import "./dev-data-afd59de4.js";
import "./store-779dab40.js";
import "./store-50ddf3e0.js";
import "./preferences-c03a2c0b.js";
import "./date-1e39c206.js";
import "./format-10690d6f.js";
import "./styles-61014012.js";
import "./index-ae383549.js";
const index$4 = "";
const CalendarContainer = _0x2091d2 => {
  const [_0x195db7, _0x22ed8a] = _0x53222f.useState();
  const _0xe78117 = _0x25fd24 => {
    _0x22ed8a(_0x25fd24);
    _0x2091d2.changeSelectedDate(_0x25fd24);
  };
  return _0x1e5116.jsx("div", {
    className: "calendar-container",
    children: _0x1e5116.jsx(_0x382d60, {
      pagedNavigation: true,
      mode: "single",
      selected: _0x195db7,
      onSelect: _0xe78117,
      modifiersClassNames: {
        selected: "calendar-selected"
      }
    })
  });
};
const index$3 = "";
const CalendarCheckBox = ({
  checked: _0x151b19,
  onChange: _0x217362
}) => {
  return _0x1e5116.jsx("div", {
    className: "checkbox",
    onClick: () => _0x217362(!_0x151b19),
    children: _0x151b19 && _0x1e5116.jsx("div", {
      className: "checked"
    })
  });
};
const index$2 = "";
const INPUT_LIMITS = {
  name: 45,
  location: 45,
  description: 100
};
const CreateEventForm = _0x311f7f => {
  const [_0x391ac8, _0x1a3fcb] = _0x53222f.useState("");
  const [_0x3ac40d, _0x4de8d0] = _0x53222f.useState(false);
  const [_0x2eb266, _0x1e385f] = _0x53222f.useState({
    name: _0x311f7f.info?.name ?? "",
    location: _0x311f7f.info?.location ?? "",
    date: _0x311f7f.info?.timestamp ?? new Date(),
    shareable: _0x311f7f.info?.shareable ?? false,
    description: _0x311f7f.info?.description ?? ""
  });
  const _0x5c7a23 = _0x4fdfce => {
    const _0x573303 = _0x4fdfce.target.name;
    const _0x552ff6 = _0x4fdfce.target.type;
    const _0x361991 = _0x552ff6 === "checkbox" ? _0x4fdfce.target.checked : _0x4fdfce.target.value;
    if (INPUT_LIMITS[_0x573303] && _0x361991.length >= INPUT_LIMITS[_0x573303]) {
      return;
    }
    _0x1e385f(_0x661aa7 => ({
      ..._0x661aa7,
      [_0x573303]: _0x361991
    }));
  };
  const _0x1fea70 = (_0x5ef351, _0x1573ae) => {
    _0x1e385f(_0x297d81 => ({
      ..._0x297d81,
      [_0x5ef351]: _0x1573ae
    }));
  };
  const _0xa64df2 = async () => {
    _0x4de8d0(true);
    const _0x3999ec = _0x2eb266.date ? new Date(_0x2eb266.date) : new Date();
    const _0x3ce4ee = _0x311f7f.edit ? "np-ui:calendar:editEvent" : "np-ui:calendar:createEvent";
    const _0x5f4fdf = await _0x5378a4(_0x3ce4ee, {
      ..._0x2eb266,
      id: _0x311f7f.info?.id,
      date: _0x3999ec.getTime()
    });
    _0x4de8d0(false);
    if (!_0x5f4fdf.meta.ok) {
      _0x1a3fcb(_0x5f4fdf.meta.message);
    } else {
      _0x48cb77();
      _0x311f7f.onClose();
    }
  };
  return _0x1e5116.jsxs(_0x39b3dd, {
    loading: _0x3ac40d,
    title: _0x311f7f.edit ? "Edit Event" : "Event Creating",
    error: _0x391ac8,
    className: "create-event-modal",
    show: _0x311f7f.show,
    onCancel: _0x311f7f.onClose,
    onSubmit: _0xa64df2,
    children: [_0x1e5116.jsxs("div", {
      className: "input-container",
      children: [_0x1e5116.jsx("div", {
        className: "icon-container",
        children: _0x1e5116.jsx(_0x33eb96, {
          className: "icon",
          icon: "pencil-alt"
        })
      }), _0x1e5116.jsx("input", {
        className: "text-input",
        value: _0x2eb266.name,
        type: "text",
        placeholder: "Event name",
        name: "name",
        onChange: _0x5c7a23
      })]
    }), _0x1e5116.jsxs("div", {
      className: "input-container",
      children: [_0x1e5116.jsx("div", {
        className: "icon-container",
        children: _0x1e5116.jsx(_0x33eb96, {
          className: "icon",
          icon: "map-marker-alt"
        })
      }), _0x1e5116.jsx("input", {
        className: "text-input",
        value: _0x2eb266.location,
        type: "text",
        placeholder: "Location",
        name: "location",
        onChange: _0x5c7a23
      })]
    }), _0x1e5116.jsxs("div", {
      className: "input-container",
      children: [_0x1e5116.jsx("div", {
        className: "icon-container",
        children: _0x1e5116.jsx(_0x33eb96, {
          className: "icon",
          icon: "clock"
        })
      }), _0x1e5116.jsx(_0xbeeea1, {
        utils: _0x181205,
        children: _0x1e5116.jsx(_0x22cd9f, {
          autoOk: true,
          disableToolbar: true,
          className: "date-input",
          variant: "inline",
          format: "MM/dd/yyyy",
          margin: "normal",
          value: _0x2eb266.date,
          onChange: _0x4a2edd => _0x1fea70("date", _0x4a2edd)
        })
      })]
    }), _0x1e5116.jsxs("div", {
      className: "input-container",
      children: [_0x1e5116.jsx("div", {
        className: "icon-container",
        children: _0x1e5116.jsx(_0x33eb96, {
          className: "icon",
          icon: "share-square"
        })
      }), _0x1e5116.jsxs("div", {
        className: "checkbox-input",
        children: ["Shareable", _0x1e5116.jsx(CalendarCheckBox, {
          checked: _0x2eb266.shareable,
          onChange: _0x126edd => _0x1fea70("shareable", _0x126edd)
        })]
      })]
    }), _0x1e5116.jsx("textarea", {
      className: "text-area-input",
      value: _0x2eb266.description,
      placeholder: "Event Description",
      name: "description",
      onChange: _0x5c7a23
    })]
  });
};
const index$1 = "";
const EventItem = _0x5a7904 => {
  const _0x1a55fa = [{
    icon: "paragraph",
    text: _0x5a7904.info.description,
    tooltip: "Description"
  }, {
    icon: "map-marker",
    text: _0x5a7904.info.location,
    tooltip: "Location"
  }, {
    icon: "user-cog",
    text: _0x5a7904.info.host,
    tooltip: "Host"
  }, {
    icon: "users",
    text: _0x5a7904.info.attendees,
    tooltip: "Attendees"
  }];
  if (_0x5a7904.info.code) {
    _0x1a55fa.push({
      icon: "file-signature",
      text: _0x5a7904.info.code,
      tooltip: "Join Code"
    });
  }
  const _0x3b4b72 = _0x1c700d => {
    _0x451c2b(_0x1e5116.jsx(_0x354073, {
      elements: [{
        name: "stateId",
        render: ({
          onChange: _0x365f80,
          value: _0xc86d35
        }) => _0x1e5116.jsx(_0xa5357e.CityID, {
          onChange: _0x365f80,
          value: _0xc86d35
        })
      }],
      onCancel: () => _0x621581(false),
      onSubmit: async ({
        stateId: _0x5d4cee
      }) => {
        _0x4818d3();
        const _0x342aaa = await _0x5378a4(_0x1c700d.force ? "np-ui:calendar:forceAddEvent" : "np-ui:calendar:sendInvite", {
          id: _0x1c700d.id,
          text: _0x5d4cee
        });
        if (!_0x342aaa.meta.ok) {
          _0x284792(_0x342aaa.meta.message);
          return;
        }
        _0x621581();
      }
    }));
  };
  const _0x504201 = _0x1cfea1 => {
    const _0x7f32e0 = "Check out this event! " + _0x1cfea1.name + " " + (_0x1cfea1.shareable ? "{{c:" + _0x1cfea1.code + "}}" : "") + " via Calendar";
    _0x451c2b(_0x1e5116.jsx(_0x354073, {
      defaultValues: {
        twat: _0x7f32e0
      },
      elements: [{
        name: "twat",
        render: ({
          onChange: _0x1d2ced,
          value: _0x6a0587
        }) => _0x1e5116.jsx(_0xa5357e.TextArea, {
          i18n: true,
          helperText: (_0x6a0587 ? _0x6a0587.length : _0x7f32e0 ? _0x7f32e0.length : 0) + " / 255",
          label: "Twat",
          icon: "twitter",
          onChange: _0x196eb1 => _0x196eb1.length < 256 ? _0x1d2ced(_0x196eb1) : () => {},
          value: _0x6a0587
        }),
        validate: ["text", "Twat"]
      }],
      onCancel: () => _0x621581(false),
      onSubmit: async ({
        twat: _0x1cc749
      }) => {
        _0x4818d3();
        await _0x5378a4("np-ui:twatSend", {
          text: _0x1cc749
        });
        _0x621581();
      }
    }));
  };
  return _0x1e5116.jsx(_0x8ed30d, {
    className: "event-item",
    drawer: _0x1e5116.jsx(_0x8ed30d.Drawer, {
      items: _0x1a55fa,
      children: _0x1e5116.jsxs("div", {
        className: "event-actions",
        children: [_0x1e5116.jsx(_0xd3119a.Secondary, {
          className: "btn",
          onClick: _0xe759b7,
          children: "Leave"
        }), _0x5a7904.info.host === _0x5a7904.characterName && _0x1e5116.jsxs(_0x1e5116.Fragment, {
          children: [_0x1e5116.jsx(_0xd3119a.Secondary, {
            className: "btn",
            onClick: () => _0x3b4b72({
              ..._0x5a7904.info,
              force: false
            }),
            children: "Invite"
          }), _0x1e5116.jsx(_0xd3119a.Secondary, {
            className: "btn",
            onClick: () => _0x2a5bb1(_0x5a7904.info),
            children: "Edit"
          }), _0x5a7904.characterJob === "judge" && _0x1e5116.jsxs(_0x1e5116.Fragment, {
            children: [_0x1e5116.jsx("hr", {}), _0x1e5116.jsx(_0xd3119a.Secondary, {
              className: "btn",
              onClick: () => _0x3b4b72({
                ..._0x5a7904.info,
                force: true
              }),
              children: "Force Add"
            })]
          }), _0x1e5116.jsx("hr", {})]
        }), !!_0x5a7904.info.shareable && _0x1e5116.jsx(_0xd3119a.Secondary, {
          className: "btn",
          onClick: () => _0x504201(_0x5a7904.info),
          children: "Share"
        })]
      })
    }),
    children: _0x1e5116.jsx(_0x8ed30d.Details, {
      title: _0x1e5116.jsxs(_0x1e5116.Fragment, {
        children: [_0x1e5116.jsx(_0x21010d, {
          variant: "body2",
          children: _0x5a7904.info.name
        }), _0x1e5116.jsx(_0x359ab2, {
          timestamp: _0x5a7904.info.timestamp / 1000,
          typeface: "body2",
          timezone: new window.Intl.DateTimeFormat().resolvedOptions().timeZone
        })]
      })
    })
  });
};
const index = "";
const CalendarApp = () => {
  const [_0x32e157, _0x5e265d] = _0x34d067(_0x42620d.key);
  const [_0xeea60e, _0x123cc5] = _0x53222f.useState(new Date());
  const _0x1d13a3 = _0x306516();
  const _0x204cae = _0x477f31 => {
    _0x123cc5(_0x477f31);
  };
  const _0xb4ce17 = _0x53222f.useMemo(() => {
    const _0x3da585 = _0x32e157.list.filter(_0x5d88f0 => _0x609b1b(new Date(_0x5d88f0.timestamp), _0xeea60e));
    return _0x3da585;
  }, [_0xeea60e]);
  const _0x420bf1 = _0x53222f.useMemo(() => {
    const _0x5ee7d9 = new Date();
    const _0x393101 = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    };
    return {
      day: _0x5ee7d9.toLocaleString("en-us", {
        weekday: "long"
      }),
      date: _0x5ee7d9.toLocaleString("en-US", _0x393101)
    };
  }, []);
  _0x53222f.useEffect(() => {
    _0x48cb77();
  }, []);
  return _0x1e5116.jsxs("div", {
    className: "app calendar-app",
    children: [_0x1e5116.jsxs("div", {
      className: "calendar-wrapper",
      children: [_0x1e5116.jsx(_0x12c82e, {
        title: "Calendar"
      }), _0x1e5116.jsxs("div", {
        className: "hero-container",
        children: [_0x1e5116.jsxs("div", {
          className: "hero-wrapper",
          children: [_0x1e5116.jsx("h1", {
            className: "title",
            children: _0x420bf1.day
          }), _0x1e5116.jsx("p", {
            className: "date",
            children: _0x420bf1.date
          }), _0x1e5116.jsx("p", {
            className: "holiday",
            children: "Schedule your business/personal events"
          })]
        }), _0x1e5116.jsx("div", {
          className: "create-btn",
          onClick: () => _0x5e265d({
            showCreateEventModal: true
          }),
          children: _0x1e5116.jsx("div", {
            className: "inner",
            children: _0x1e5116.jsx(_0x33eb96, {
              icon: "plus"
            })
          })
        })]
      }), _0x1e5116.jsx(CalendarContainer, {
        list: _0xb4ce17,
        changeSelectedDate: _0x204cae
      }), _0x32e157.list.length > 0 && _0x1e5116.jsxs("div", {
        className: "events-list-container",
        children: [_0x1e5116.jsx("h1", {
          className: "header",
          children: "Upcoming Events"
        }), _0x1e5116.jsx("ul", {
          className: "event-list",
          children: _0x32e157.list.map(_0x4a4fa1 => _0x1e5116.jsx(EventItem, {
            info: _0x4a4fa1,
            characterName: _0x1d13a3?.first_name + " " + _0x1d13a3?.last_name,
            characterJob: _0x1d13a3?.job
          }, _0x4a4fa1.id))
        })]
      })]
    }), _0x1e5116.jsx(CreateEventForm, {
      edit: false,
      show: _0x32e157.showCreateEventModal,
      onClose: () => _0x5e265d({
        showCreateEventModal: false
      })
    }), _0x32e157.editEventInfo && _0x1e5116.jsx(CreateEventForm, {
      edit: true,
      show: _0x32e157.showEditEventModal,
      info: _0x32e157.editEventInfo,
      onClose: () => _0x5e265d({
        showEditEventModal: false,
        editEventInfo: undefined
      })
    })]
  });
};
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/calendar.svg";
const icon = {
  background: "#171717",
  color: "white",
  name: "calendar-alt"
};
const config = _0x99f0d9 => {
  return {
    ..._0x99f0d9,
    iconPng: myIcon,
    label: "Calendar",
    name: "calendar",
    position: 66,
    hidden: () => false,
    render: () => _0x1e5116.jsx(CalendarApp, {})
  };
};
export { config as default, icon };