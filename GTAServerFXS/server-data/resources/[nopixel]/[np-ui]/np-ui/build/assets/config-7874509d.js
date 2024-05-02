import { r as _0x355f57, j as _0xf0226d, f as _0x2f0ff1, a0 as _0xfaa295, x as _0x445771, ax as _0x155bcf, ay as _0x3e2c7b, R as _0x3c40b7, aE as _0x4719da, aF as _0x216d53, A as _0x435241 } from "./vendor-6c45b22f.js";
import _0x5d1a26 from "./store-3b8071d7.js";
import { f as _0x19564e, n as _0x5e6904, s as _0x579287, u as _0x4b2a61 } from "./index-d5aaa08b.js";
import { d as _0x56ffbc } from "./date-1e39c206.js";
import { I as _0x246ee4 } from "./icon-7f5cdae2.js";
import { t as _0x8a7e7d } from "./notifications-c44d34f0.js";
import { D as _0x478924 } from "./duration-timer-2aea312f.js";
import { h as _0x31298c } from "./game-7f8fe59d.js";
import { d as _0x276799 } from "./dev-data-afd59de4.js";
import { T as _0x43ede7 } from "./text-f7ee3e03.js";
import { g as _0x521dfc } from "./character-8ebc09ae.js";
import { C as _0xd63e4f } from "./tooltip-cb871d8a.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
import "./translations-7705db3f.js";
import "./store-6adab5c7.js";
import "./format-10690d6f.js";
const VIEW_TRANSITIONS = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
};
const SvgArrowRight = _0x18e5e4 => _0x355f57.createElement("svg", {
  width: 11,
  height: 20,
  viewBox: "0 0 11 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ..._0x18e5e4
}, _0x355f57.createElement("path", {
  d: "M1 1L10 10L1 19",
  stroke: "url(#paint0_linear_105_603)"
}), _0x355f57.createElement("defs", null, _0x355f57.createElement("linearGradient", {
  id: "paint0_linear_105_603",
  x1: -5.5,
  y1: 10,
  x2: 121.5,
  y2: 10,
  gradientUnits: "userSpaceOnUse"
}, _0x355f57.createElement("stop", {
  stopColor: "#2C3145"
}), _0x355f57.createElement("stop", {
  offset: 1,
  stopColor: "#2C3145",
  stopOpacity: 0
}))));
const arrowRight = "" + new URL("arrow-right-23ee3494.svg", import.meta.url).href + "";
const index$7 = "";
const JobsHeader = ({
  title: _0x204b2f,
  customText: _0xc1afbd
}) => {
  return _0xf0226d.jsxs("div", {
    className: "jobs-header",
    children: [_0xf0226d.jsx("h1", {
      className: "title",
      children: "Job"
    }), _0xf0226d.jsxs("div", {
      className: "status-bar",
      children: [_0xf0226d.jsx("h1", {
        className: "status",
        children: _0x204b2f
      }), _0xc1afbd ? _0xf0226d.jsx("h1", {
        className: "custom-text",
        children: _0xc1afbd
      }) : _0xf0226d.jsxs("div", {
        className: "arrows",
        children: [_0xf0226d.jsx(SvgArrowRight, {
          className: "arrow"
        }), _0xf0226d.jsx(SvgArrowRight, {
          className: "arrow"
        }), _0xf0226d.jsx(SvgArrowRight, {
          className: "arrow"
        }), _0xf0226d.jsx(SvgArrowRight, {
          className: "arrow"
        }), _0xf0226d.jsx(SvgArrowRight, {
          className: "arrow"
        }), _0xf0226d.jsx(SvgArrowRight, {
          className: "arrow"
        })]
      })]
    })]
  });
};
const SvgTrophyIcon = _0x104499 => _0x355f57.createElement("svg", {
  width: 31,
  height: 33,
  viewBox: "0 0 31 33",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ..._0x104499
}, _0x355f57.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M5.46712 0.311685C5.10428 0.684585 4.91528 1.25186 4.84932 2.16563L4.80317 2.805H2.82714C0.61002 2.805 0.442368 2.84163 0.157464 3.38761C-0.05481 3.79442 -0.0517606 6.15376 0.162359 7.22024C0.471179 8.75853 1.16314 10.0172 2.31993 11.1452C3.48667 12.2827 4.81577 12.9299 6.41067 13.137L7.17839 13.2366L7.42244 13.8164C8.68758 16.8225 10.5651 19.4523 12.4973 20.9248C13.2352 21.4871 14.358 22.1046 15.0385 22.3224C15.4819 22.4643 15.5181 22.4643 15.9615 22.3224C16.635 22.1069 17.7625 21.4889 18.4797 20.9422C20.4318 19.4543 22.3092 16.8301 23.5776 13.8164L23.8216 13.2366L24.5893 13.137C26.1842 12.9299 27.5133 12.2827 28.6801 11.1452C29.8369 10.0172 30.5288 8.75853 30.8376 7.22024C31.0518 6.15376 31.0548 3.79442 30.8425 3.38761C30.5576 2.84163 30.39 2.805 28.1729 2.805H26.1968L26.1507 2.16563C26.0858 1.26753 25.9052 0.723525 25.5412 0.330165L25.2357 0H15.503H5.77032L5.46712 0.311685ZM16.1882 5.21813L16.827 6.55875L18.2543 6.77614C19.0392 6.89568 19.6988 7.01126 19.72 7.03296C19.7411 7.05474 19.2845 7.5419 18.7053 8.11553L17.6523 9.15841L17.8974 10.6597C18.0322 11.4855 18.1348 12.1674 18.1254 12.1753C18.116 12.1831 17.5485 11.8805 16.8643 11.5028C16.1802 11.1251 15.5662 10.8161 15.5 10.8161C15.4338 10.8161 14.8198 11.1251 14.1357 11.5028C13.4515 11.8805 12.8826 12.1816 12.8713 12.172C12.8601 12.1622 12.9639 11.4778 13.1019 10.651L13.3528 9.1476L12.2963 8.11099C11.7153 7.54083 11.256 7.05763 11.2759 7.03725C11.2957 7.01696 11.9202 6.90995 12.6636 6.79957C13.407 6.68927 14.0546 6.58408 14.1026 6.56593C14.1507 6.54778 14.4731 5.93546 14.8191 5.20517C15.1652 4.47497 15.471 3.8775 15.4988 3.8775C15.5266 3.8775 15.8368 4.48082 16.1882 5.21813ZM5.01785 5.42438C5.1164 6.3002 5.99126 9.89315 6.31356 10.7456C6.39173 10.9525 6.14703 10.9339 5.50122 10.684C3.52327 9.91865 2.26054 8.09993 2.12491 5.82079L2.07306 4.95H3.51877H4.96456L5.01785 5.42438ZM28.8773 5.75438C28.8501 6.19682 28.7708 6.78018 28.7012 7.05086C28.3246 8.51441 27.2999 9.80018 25.9767 10.4695C25.4749 10.7234 24.7636 10.9528 24.6956 10.8829C24.6742 10.8609 24.7644 10.4915 24.8959 10.0621C25.2401 8.93838 25.8375 6.42593 25.9496 5.63063L26.0456 4.95H27.4861H28.9268L28.8773 5.75438ZM13.636 23.2822C13.5598 23.6131 13.3306 24.2309 13.1269 24.6552C12.8273 25.2788 12.631 25.5559 12.1018 26.1016C11.7417 26.4728 11.3388 26.8568 11.2064 26.955L10.9656 27.1333H15.5H20.0344L19.7936 26.955C19.6612 26.8568 19.2583 26.4728 18.8982 26.1016C18.369 25.5559 18.1727 25.2788 17.8731 24.6552C17.6694 24.2309 17.4402 23.6131 17.364 23.2822C17.2573 22.8191 17.1978 22.6906 17.1051 22.7236C17.0389 22.7471 16.6506 22.8849 16.2424 23.0296L15.5 23.2928L14.7576 23.0296C14.3493 22.8849 13.9611 22.7471 13.8949 22.7236C13.8022 22.6906 13.7427 22.8191 13.636 23.2822ZM5.18727 28.1234C4.79811 28.3081 4.32694 28.7842 4.12919 29.1926C4.00488 29.4494 3.97984 29.7519 3.95897 31.2469L3.93449 33H15.5H27.0655L27.041 31.2469C27.0201 29.7468 26.9954 29.4499 26.8697 29.1902C26.6663 28.77 26.2093 28.3062 25.8192 28.124C25.506 27.9778 25.057 27.9711 15.5 27.9711C5.95498 27.9711 5.49392 27.9779 5.18727 28.1234Z",
  fill: "url(#paint0_radial_105_852)"
}), _0x355f57.createElement("defs", null, _0x355f57.createElement("radialGradient", {
  id: "paint0_radial_105_852",
  cx: 0,
  cy: 0,
  r: 1,
  gradientUnits: "userSpaceOnUse",
  gradientTransform: "translate(15.5 16.5) rotate(90) scale(28.7692 27.0256)"
}, _0x355f57.createElement("stop", {
  stopColor: "#FCFCFC"
}), _0x355f57.createElement("stop", {
  offset: 1,
  stopColor: "#FCFCFC",
  stopOpacity: 0
}))));
const trophyIcon = "" + new URL("trophy-icon-2127ed62.svg", import.meta.url).href + "";
const index$6 = "";
const ActivityItem = ({
  info: _0x209389
}) => {
  const _0x59bb11 = _0x209389.count >= _0x209389.wanted;
  return _0xf0226d.jsxs("div", {
    className: _0x2f0ff1("activity-item", {
      "activity-completed": _0x59bb11
    }),
    children: [_0xf0226d.jsx(SvgTrophyIcon, {
      className: "icon"
    }), _0xf0226d.jsx("div", {
      className: "info-container",
      children: _0xf0226d.jsx("p", {
        className: "description",
        children: _0x209389.description
      })
    }), _0xf0226d.jsxs("div", {
      className: "requirements",
      children: [_0x209389.count, "/", _0x209389.wanted]
    })]
  });
};
const index$5 = "";
let inFlight = 0;
const updateState = _0x320fd5 => _0x19564e(_0x5d3bb5 => ({
  ..._0x5d3bb5,
  [_0x5d1a26.key]: {
    ..._0x5d3bb5[_0x5d1a26.key],
    ..._0x320fd5
  }
}))();
const jobsCheckout = async () => {
  const _0x37ff64 = await _0x5e6904("np-ui:jobCenterCheckout");
  // if (_0x37ff64.meta.ok) {
  //   return;
  // }
  return _0x19564e(_0x5baecf => ({
    ..._0x5baecf,
    [_0x5d1a26.key]: {
      ..._0x5d1a26.initialState
    }
  }))();
};
const jobsCreateGroup = async () => {
  const _0x20dc8e = _0x579287.getState()[_0x5d1a26.key];
  const _0x21edd3 = _0x20dc8e.requestId + 1;
  if (inFlight === _0x21edd3) {
    return;
  }
  inFlight = _0x21edd3;
  _0x8a7e7d({
    apps: [],
    appName: "jobs",
    icon: icon,
    id: "groups_" + _0x21edd3,
    state: _0x579287.getState(),
    timeout: -1,
    title: "Creating Group",
    text: "Please wait..."
  });
  const _0x8d37d8 = await _0x5e6904("np-ui:createJobCenterGroup", {
    requestId: _0x21edd3
  }, {
    returnData: {
      group_id: 1
    }
  });
  inFlight = 0;
  if (!_0x8d37d8.data.ok) {
    return;
  }
  return _0x19564e(_0x334622 => ({
    ..._0x334622,
    [_0x5d1a26.key]: {
      ..._0x334622[_0x5d1a26.key],
      requestId: _0x21edd3
    }
  }))();
};
const jobsRequestToJoin = async _0x43b0f2 => {
  const _0x2874c8 = _0x579287.getState()[_0x5d1a26.key];
  const _0x2f3b09 = _0x2874c8.requestId + 1;
  if (inFlight === _0x2f3b09) {
    return;
  }
  inFlight = _0x2f3b09;
  const _0x27b46d = await _0x5e6904("np-ui:requestToJoinJobCenterGroup", {
    group: _0x43b0f2,
    requestId: _0x2f3b09
  });
  inFlight = 0;
  _0x8a7e7d({
    apps: [],
    appName: "jobs",
    icon: icon,
    id: "groups_" + _0x2f3b09,
    onReject: async () => {
      await _0x5e6904("np-ui:requestToJoinJobCenterGroupCancel", {
        group: _0x43b0f2,
        requestId: _0x2f3b09
      });
    },
    onRejectText: "Cancel",
    state: _0x579287.getState(),
    timeout: 30000,
    title: "Requesting to Join",
    text: _0xf0226d.jsx(_0x478924, {
      countdown: true,
      startTime: 30
    })
  });
  setTimeout(() => {
    updateState({
      requestId: _0x2f3b09
    });
  }, 1000);
};
const jobsLeaveGroup = async _0x3e6ff7 => {
  const _0x2e992c = await _0x5e6904("np-ui:jobCenterGroupLeave", {
    group_id: _0x3e6ff7
  });
  return _0x2e992c;
};
const jobsDisbandGroup = async _0xcae18f => {
  const _0x9bb3da = await _0x5e6904("np-ui:jobCenterGroupDisband", {
    group_id: _0xcae18f
  });
  return _0x9bb3da;
};
const jobsUpdateReadyStatus = async (_0x965a4a, _0xb56de8) => {
  const _0x1d8816 = {
    ready: "np-ui:jobCenterGroupReady",
    unready: "np-ui:jobCenterGroupNotReady"
  };
  const _0x24a0a8 = await _0x5e6904(_0x1d8816[_0xb56de8], {
    group_id: _0x965a4a
  });
  return _0x24a0a8;
};
const jobsRemoveFromGroup = async (_0x899bfc, _0x713161) => {
  const _0x1668b1 = await _0x5e6904("np-ui:jobCenterGroupRemove", {
    group_id: _0x899bfc,
    member_id: _0x713161
  });
  return _0x1668b1;
};
const jobsPromoteToLeader = async (_0x281a5b, _0x44be65) => {
  const _0x4e6527 = await _0x5e6904("np-ui:jobCenterGroupPromote", {
    group_id: _0x281a5b,
    member_id: _0x44be65
  });
  return _0x4e6527;
};
const jobsAbandonActivity = async _0x1d0e2c => {
  const _0x4102bd = await _0x5e6904("np-ui:jobCenterActivityAbandon", {
    activity: _0x1d0e2c
  });
  return _0x4102bd;
};
const Activity = () => {
  const [_0x398d9f] = _0x4b2a61(_0x5d1a26.key);
  const _0x4fdfc3 = _0x355f57.useMemo(() => {
    if (!_0x398d9f.activity) {
      return [];
    }
    return _0x398d9f.activity.tasks;
  }, [_0x398d9f.activity]);
  const _0x248208 = () => {
    const _0x3392f3 = _0x56ffbc(_0x398d9f.activity.deadline) / 1000;
    return _0xfaa295.utc(_0x3392f3 * 1000).format("HH:mm:ss");
  };
  return _0xf0226d.jsxs(_0x445771.div, {
    className: "jobs-activity",
    initial: VIEW_TRANSITIONS.initial,
    animate: VIEW_TRANSITIONS.animate,
    exit: VIEW_TRANSITIONS.exit,
    children: [_0xf0226d.jsx(JobsHeader, {
      title: _0x398d9f?.activity.name ?? "N/A",
      customText: _0x248208()
    }), _0xf0226d.jsxs("div", {
      className: "activity-container",
      children: [_0xf0226d.jsx("h1", {
        className: "heading",
        children: "Task List"
      }), _0xf0226d.jsx("li", {
        className: "task-list",
        children: _0x4fdfc3.map((_0x31c018, _0x4e89f1) => _0xf0226d.jsx(ActivityItem, {
          info: _0x31c018
        }, _0x4e89f1))
      })]
    }), _0xf0226d.jsx("div", {
      className: "actions",
      children: _0xf0226d.jsxs("div", {
        className: "btn",
        onClick: () => jobsAbandonActivity(_0x398d9f.activity),
        children: ["Abandon Job ", _0xf0226d.jsx(_0x246ee4, {
          icon: "chevron-right"
        })]
      })
    })]
  });
};
const SvgUserRadial = _0x2d5c7b => _0x355f57.createElement("svg", {
  width: 34,
  height: 39,
  viewBox: "0 0 34 39",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ..._0x2d5c7b
}, _0x355f57.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M14.9506 0.107899C12.5115 0.530874 10.3075 1.86722 8.76651 3.85763C7.52058 5.46686 6.9127 7.27286 6.91406 9.36127C6.91565 11.9588 7.78147 14.0469 9.61871 15.884C11.0901 17.3553 12.7392 18.2368 14.7976 18.6526C15.7425 18.8434 17.7642 18.8423 18.6998 18.6505C20.7381 18.2325 22.4896 17.2904 23.9027 15.8519C26.0124 13.7042 26.928 10.8772 26.4668 7.93592C26.1611 5.98692 25.3031 4.3481 23.8209 2.8818C22.2552 1.33297 20.4987 0.424177 18.4587 0.107289C17.536 -0.0360167 15.7786 -0.0357117 14.9506 0.107899ZM7.46244 18.9461C5.58698 19.2713 3.91005 20.2623 2.77115 21.7185C0.945772 24.0524 -0.088005 27.9756 0.00588781 32.2123C0.03838 33.679 0.0595637 33.8717 0.257384 34.5003C0.938843 36.666 2.65145 38.2272 5.00467 38.8279L5.67904 39H16.9876H28.2961L28.9731 38.8275C31.1818 38.2647 32.837 36.8606 33.5745 34.924C33.9236 34.0074 34.0063 33.3941 33.9996 31.7714C33.9747 25.7387 31.998 21.2478 28.6545 19.6278C27.6775 19.1545 26.2819 18.8274 25.2396 18.8275C24.5811 18.8276 24.1828 18.9997 22.6419 19.9501C21.2786 20.7909 20.9588 20.9473 19.8944 21.2944C17.8847 21.9495 16.1363 21.9616 14.2003 21.3337C13.1847 21.0044 12.5237 20.684 11.2935 19.9248C9.74351 18.9683 9.40059 18.826 8.66545 18.8344C8.33695 18.838 7.79557 18.8884 7.46244 18.9461Z",
  fill: "url(#paint0_radial_105_555)"
}), _0x355f57.createElement("defs", null, _0x355f57.createElement("radialGradient", {
  id: "paint0_radial_105_555",
  cx: 0,
  cy: 0,
  r: 1,
  gradientUnits: "userSpaceOnUse",
  gradientTransform: "translate(17 19.5) rotate(90) scale(34 29.641)"
}, _0x355f57.createElement("stop", {
  stopColor: "#FCFCFC"
}), _0x355f57.createElement("stop", {
  offset: 1,
  stopColor: "#FCFCFC",
  stopOpacity: 0
}))));
const userRadial = "" + new URL("user-radial-5a90b6dd.svg", import.meta.url).href + "";
const index$4 = "";
const Groups = () => {
  const [_0x544230] = _0x4b2a61(_0x5d1a26.key);
  const [_0x56a1fb, _0x48fba4] = _0x155bcf();
  _0x355f57.useEffect(() => {
    if (!_0x544230.groups) {
      return;
    }
    (async () => {
      await _0x48fba4("li", {
        opacity: 1
      }, {
        delay: _0x3e2c7b(0.1)
      });
    })();
  }, [_0x544230.groups]);
  return _0xf0226d.jsxs(_0x445771.div, {
    className: "job-groups",
    initial: VIEW_TRANSITIONS.initial,
    animate: VIEW_TRANSITIONS.animate,
    exit: VIEW_TRANSITIONS.exit,
    children: [_0xf0226d.jsx(JobsHeader, {
      title: _0x544230.job.name
    }), _0xf0226d.jsxs("div", {
      className: "group-options",
      children: [_0xf0226d.jsx(GroupsActionItem, {
        title: "Create Group",
        description: "Create your own group and begin your journey.",
        onClick: jobsCreateGroup,
        icon: "user-plus"
      }), _0xf0226d.jsx(GroupsActionItem, {
        title: "Check Out",
        description: "Sign out of this job, and explore other opportunities.",
        onClick: jobsCheckout,
        icon: "door-open"
      })]
    }), _0x544230.groups.length > 0 && _0xf0226d.jsxs("div", {
      className: "available-groups",
      children: [_0xf0226d.jsx("h1", {
        className: "heading",
        children: "Available Groups"
      }), _0xf0226d.jsx("div", {
        className: "groups-list",
        ref: _0x56a1fb,
        children: _0x544230.groups && _0x544230.groups.map(_0xd58e9a => _0xf0226d.jsx(GroupItem, {
          info: _0xd58e9a
        }, _0xd58e9a.id))
      })]
    })]
  });
};
const GroupsActionItem = _0x22de7d => {
  return _0xf0226d.jsxs("div", {
    className: "group-action",
    children: [_0xf0226d.jsxs("div", {
      className: "info",
      children: [_0xf0226d.jsx(_0x246ee4, {
        className: "icon",
        icon: _0x22de7d.icon
      }), _0xf0226d.jsx("h1", {
        className: "title",
        children: _0x22de7d.title
      }), _0xf0226d.jsx("p", {
        className: "description",
        children: _0x22de7d.description
      }), _0xf0226d.jsx(_0x246ee4, {
        className: "bg-icon",
        icon: _0x22de7d.icon
      })]
    }), _0xf0226d.jsxs("button", {
      className: "btn",
      onClick: _0x22de7d.onClick,
      children: [_0x22de7d.title, " ", _0xf0226d.jsx(_0x246ee4, {
        icon: "chevron-right"
      })]
    })]
  });
};
const GroupItem = ({
  info: _0x18f5d6
}) => {
  const _0x241fff = _0x18f5d6.status !== "idle" || _0x18f5d6.size >= _0x18f5d6.capacity;
  const _0x185f31 = async () => {
    if (_0x241fff) {
      return;
    }
    await jobsRequestToJoin(_0x18f5d6);
  };
  return _0xf0226d.jsxs("li", {
    className: _0x2f0ff1("group-item", {
      "group-busy": _0x241fff
    }),
    onClick: _0x185f31,
    children: [_0xf0226d.jsx(SvgUserRadial, {
      className: "icon"
    }), _0xf0226d.jsxs("div", {
      className: "info-container",
      children: [_0xf0226d.jsxs("h1", {
        className: "title",
        children: [_0x18f5d6.leader.first_name, " ", _0x18f5d6.leader.last_name]
      }), _0xf0226d.jsxs("div", {
        className: "group-value",
        children: ["Members: ", _0x18f5d6.size, "/", _0x18f5d6.capacity]
      })]
    })]
  });
};
const index$3 = "";
const JobsListingsItem = ({
  info: _0x4622b0
}) => {
  const [_0x2e09fe, _0x3fe309] = _0x355f57.useState(false);
  const _0x4ccc6c = () => {
    _0x5e6904("np-ui:setGPSMarker", {
      coords: _0x4622b0.headquarters,
      job: _0x4622b0
    });
  };
  const _0x3c07b3 = () => {
    _0x3fe309(true);
  };
  const _0x4cd685 = () => {
    _0x3fe309(false);
  };
  const _0x35ddd5 = {
    opacity: 1
  };
  const _0xb49ee2 = {
    opacity: 0
  };
  return _0xf0226d.jsx("li", {
    className: "jobs-item",
    children: _0xf0226d.jsxs("div", {
      className: _0x2f0ff1("header-info", {
        "hovering-header": _0x2e09fe
      }),
      onMouseEnter: _0x3c07b3,
      onMouseLeave: _0x4cd685,
      children: [_0x2e09fe && _0xf0226d.jsxs(_0x445771.div, {
        className: "hover-container",
        initial: _0xb49ee2,
        animate: _0x35ddd5,
        exit: _0xb49ee2,
        transition: {
          ease: "linear"
        },
        onClick: _0x4ccc6c,
        children: [_0xf0226d.jsx(_0x246ee4, {
          className: "icon",
          icon: "map-marker-alt"
        }), _0xf0226d.jsx("h1", {
          className: "hover-text",
          children: "Set GPS Location"
        }), _0xf0226d.jsx(_0x246ee4, {
          className: "icon",
          icon: "map-marker-alt"
        })]
      }), !_0x2e09fe && _0xf0226d.jsxs(_0x3c40b7.Fragment, {
        children: [_0xf0226d.jsx("div", {
          className: "icon-container",
          children: _0xf0226d.jsx(_0x246ee4, {
            className: "icon",
            icon: _0x4622b0.icon
          })
        }), _0xf0226d.jsx(_0x43ede7, {
          className: "item-name",
          i18n: _0x4622b0.name,
          i18nSource: "ui:text:phone-apps-jobs",
          variant: "body2",
          children: _0x4622b0.name
        })]
      })]
    })
  });
};
const StyledRating = _0x4719da(_0x216d53)({
  "& .MuiRating-iconFilled": {
    color: "#2bc2d1"
  }
});
const index$2 = "";
const JobsListings = () => {
  const [_0x39041f, _0x29e5fe] = _0x355f57.useState([]);
  const [_0x1e5181, _0x5e2962] = _0x355f57.useState("");
  const [_0x5ae074, _0x2e99c0] = _0x155bcf();
  const _0xd1692c = _0x5bbfbb => {
    _0x5e2962(_0x5bbfbb.target.value);
  };
  const _0x4df017 = _0x355f57.useMemo(() => {
    return _0x39041f.filter(_0x539ecb => (!_0x539ecb.vpn || _0x31298c()) && !_0x539ecb.hidden).filter(_0x2d3285 => _0x2d3285.name.toLocaleLowerCase().includes(_0x1e5181.toLocaleLowerCase()));
  }, [_0x39041f, _0x1e5181]);
  const _0x482e15 = async () => {
    const _0x5a8859 = await _0x5e6904("np-ui:getJobCenterJobs", {}, {
      returnData: _0x276799.getJobCenterJobs()
    });
    _0x29e5fe(_0x5a8859.data);
  };
  _0x355f57.useEffect(() => {
    _0x482e15();
  }, []);
  _0x355f57.useEffect(() => {
    if (!_0x4df017) {
      return;
    }
    (async () => {
      await _0x2e99c0("li", {
        opacity: 1
      }, {
        delay: _0x3e2c7b(0.1)
      });
    })();
  }, [_0x4df017]);
  return _0xf0226d.jsxs(_0x445771.div, {
    className: "jobs-container",
    initial: VIEW_TRANSITIONS.initial,
    animate: VIEW_TRANSITIONS.animate,
    exit: VIEW_TRANSITIONS.exit,
    children: [_0xf0226d.jsxs("div", {
      className: "search-container",
      children: [_0xf0226d.jsx("input", {
        placeholder: "Search Job",
        onChange: _0xd1692c,
        value: _0x1e5181
      }), _0xf0226d.jsx(_0x246ee4, {
        className: "icon",
        icon: "search"
      })]
    }), _0xf0226d.jsxs("div", {
      className: "jobs-offerings",
      children: [_0xf0226d.jsx("h1", {
        className: "jobs-heading",
        children: "Available Jobs"
      }), _0xf0226d.jsx("ul", {
        className: "jobs-list",
        ref: _0x5ae074,
        children: _0x4df017.map(_0x2f531b => _0xf0226d.jsx(JobsListingsItem, {
          info: _0x2f531b
        }, _0x2f531b.name))
      })]
    })]
  });
};
const index$1 = "";
const MyGroupMember = ({
  info: _0x45edf,
  isLeader: _0x2b7ca2,
  groupId: _0x65c428
}) => {
  return _0xf0226d.jsxs("li", {
    className: _0x2f0ff1("member-item", {
      "member-red": !_0x45edf.is_online
    }),
    children: [_0xf0226d.jsx(SvgUserRadial, {
      className: "icon"
    }), _0xf0226d.jsxs("div", {
      className: "info-container",
      children: [_0xf0226d.jsxs("h1", {
        className: "title",
        children: [_0x45edf.first_name, " ", _0x45edf.last_name]
      }), _0xf0226d.jsx("div", {
        className: "group-value",
        children: _0x45edf.is_online ? "Online" : "Offline"
      }), _0x2b7ca2 && !_0x45edf.is_leader && _0xf0226d.jsxs(_0x3c40b7.Fragment, {
        children: [_0xf0226d.jsx(_0xd63e4f, {
          title: "Remove from group",
          placement: "left",
          children: _0xf0226d.jsx("div", {
            className: "group-value action",
            onClick: () => jobsRemoveFromGroup(_0x65c428, _0x45edf.id),
            children: _0xf0226d.jsx(_0x246ee4, {
              className: "icon",
              icon: "user-minus"
            })
          })
        }), _0xf0226d.jsx(_0xd63e4f, {
          title: "Promote to leader",
          placement: "left",
          children: _0xf0226d.jsx("div", {
            className: "group-value action",
            onClick: () => jobsPromoteToLeader(_0x65c428, _0x45edf.id),
            children: _0xf0226d.jsx(_0x246ee4, {
              className: "icon",
              icon: "user-graduate"
            })
          })
        })]
      })]
    })]
  });
};
const index = "";
const MyGroup = () => {
  const [_0x454380] = _0x4b2a61(_0x5d1a26.key);
  const [_0x1477c4, _0x478652] = _0x155bcf();
  const _0x2b1fe1 = _0x355f57.useMemo(() => {
    if (!_0x454380.group) {
      return false;
    }
    const _0x55da29 = _0x521dfc();
    return _0x55da29.id === _0x454380.group.members.find(_0x3d521d => _0x3d521d.is_leader)?.id;
  }, [_0x454380.group]);
  const _0x321233 = _0x355f57.useMemo(() => {
    return _0x454380.group?.ready ?? false;
  }, [_0x454380.group]);
  const _0x4317a4 = () => {
    if (!_0x454380.group) {
      return;
    }
    jobsDisbandGroup(_0x454380.group.id);
  };
  const _0x5a6cd6 = () => {
    if (!_0x454380.group) {
      return;
    }
    jobsLeaveGroup(_0x454380.group.id);
  };
  const _0x109990 = () => {
    if (!_0x454380.group) {
      return;
    }
    const _0x306712 = _0x321233 ? "unready" : "ready";
    jobsUpdateReadyStatus(_0x454380.group.id, _0x306712);
  };
  _0x355f57.useEffect(() => {
    if (!_0x454380.group) {
      return;
    }
    (async () => {
      await _0x478652("li", {
        opacity: 1
      }, {
        delay: _0x3e2c7b(0.1)
      });
    })();
  }, [_0x454380.group]);
  return _0xf0226d.jsxs(_0x445771.div, {
    className: "jobs-mygroup",
    initial: VIEW_TRANSITIONS.initial,
    animate: VIEW_TRANSITIONS.animate,
    exit: VIEW_TRANSITIONS.exit,
    children: [_0xf0226d.jsx(JobsHeader, {
      title: _0x321233 ? "Searching" : "Waiting"
    }), _0xf0226d.jsx("ul", {
      className: "group-members",
      ref: _0x1477c4,
      children: _0x454380.group && _0x454380.group.members.map(_0x5399fd => _0xf0226d.jsx(MyGroupMember, {
        info: _0x5399fd,
        isLeader: _0x2b1fe1,
        groupId: _0x454380.group?.id ?? 0
      }, _0x5399fd.id))
    }), !_0x2b1fe1 && _0xf0226d.jsx("div", {
      className: "group-actions",
      children: _0xf0226d.jsxs("div", {
        className: "btn",
        onClick: _0x5a6cd6,
        children: ["Leave Group ", _0xf0226d.jsx(_0x246ee4, {
          icon: "chevron-right"
        })]
      })
    }), _0x2b1fe1 && _0xf0226d.jsxs("div", {
      className: "group-actions",
      children: [_0xf0226d.jsxs("div", {
        className: "btn",
        children: [_0x321233 ? "Unready" : "Ready", " for jobs ", _0xf0226d.jsx(SwitchButton, {
          value: _0x321233,
          onClick: _0x109990
        })]
      }), _0xf0226d.jsxs("div", {
        className: "btn",
        onClick: _0x4317a4,
        children: ["Disband Group ", _0xf0226d.jsx(_0x246ee4, {
          icon: "chevron-right"
        })]
      })]
    })]
  });
};
const SwitchButton = _0x398703 => {
  return _0xf0226d.jsx("div", {
    className: "switch",
    "data-isOn": _0x398703.value,
    onClick: _0x398703.onClick,
    children: _0xf0226d.jsx(_0x445771.div, {
      className: "handle",
      layout: true,
      transition: {
        type: "spring",
        stiffness: 700,
        damping: 30
      }
    })
  });
};
const SvgBlob1 = _0x1548cc => _0x355f57.createElement("svg", {
  width: 337,
  height: 483,
  viewBox: "0 0 337 483",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ..._0x1548cc
}, _0x355f57.createElement("g", null, _0x355f57.createElement("path", {
  d: "M121 145.882C121 167.486 103.539 185 82 185C60.4609 185 43 167.486 43 145.882C43 124.277 82 36.528 82 106.763C82 176.999 121 124.277 121 145.882Z",
  fill: "#00F8B9"
}), _0x355f57.createElement("path", {
  d: "M166.12 243.895C166.12 265.462 103.498 307 81.9734 307C60.449 307 43 289.516 43 267.95C43 246.383 127.147 134.731 127.147 204.845C127.147 274.958 191.365 103.668 166.12 243.895Z",
  fill: "#0032E5"
}), _0x355f57.createElement("path", {
  d: "M294 288.823C294 310.207 248.817 301.052 209.881 301.052C170.945 301.052 153 310.207 153 288.823C153 267.44 197.864 278.173 209.881 239.015C221.898 199.857 294 210.857 294 288.823Z",
  fill: "#F87700"
}), _0x355f57.createElement("path", {
  d: "M280.318 161.239C166.475 276.796 235.353 173.564 196.606 173.564C157.858 173.564 140 182.79 140 161.239C140 139.687 154.516 132.297 166.475 92.8308C178.434 53.3649 335.406 105.322 280.318 161.239Z",
  fill: "#F86969"
})));
const blob1 = "" + new URL("blob-1-bc650f50.svg", import.meta.url).href + "";
const SvgBlob2 = _0x49fa1b => _0x355f57.createElement("svg", {
  width: 337,
  height: 416,
  viewBox: "0 0 337 416",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ..._0x49fa1b
}, _0x355f57.createElement("g", null, _0x355f57.createElement("circle", {
  cx: 108,
  cy: 518,
  r: 155,
  fill: "#00F8B9"
}), _0x355f57.createElement("circle", {
  cx: 36,
  cy: 435,
  r: 155,
  fill: "#D300E5"
}), _0x355f57.createElement("circle", {
  cx: -74,
  cy: 363,
  r: 155,
  fill: "#F87700"
})));
const blob2 = "" + new URL("blob-2-de85803b.svg", import.meta.url).href + "";
const container = "";
const JobsContainer = () => {
  const [_0x435f74] = _0x4b2a61(_0x5d1a26.key);
  return _0xf0226d.jsxs("div", {
    className: "app jobs-center-app",
    children: [_0xf0226d.jsxs(_0x435241, {
      mode: "wait",
      initial: false,
      children: [!_0x435f74.job && _0xf0226d.jsx(JobsListings, {}), !!_0x435f74.job && !_0x435f74.group && _0xf0226d.jsx(Groups, {}), !_0x435f74.activity && !!_0x435f74.group && _0xf0226d.jsx(MyGroup, {}), !!_0x435f74.activity && _0xf0226d.jsx(Activity, {})]
    }), _0xf0226d.jsx(SvgBlob1, {
      className: "blob-1"
    }), _0xf0226d.jsx(SvgBlob2, {
      className: "blob-2"
    })]
  });
};
const groupResponse = _0x403071 => ({
  data: _0x3bc7c0,
  state: _0x2204e1
}) => {
  _0x8a7e7d({
    apps: [],
    appName: "jobs",
    icon: icon,
    id: "groups_" + _0x3bc7c0.requestId,
    state: _0x2204e1,
    title: "Requesting to Join",
    text: _0x403071 === "deny" ? "Request Denied" : "Joined Group!",
    i18nTitle: true,
    i18nText: true
  });
  return _0x2204e1;
};
const events = _0x1b57e0 => {
  let _0x21c752 = false;
  _0x1b57e0("jobs-update", ({
    data: _0x4b8d49,
    state: _0xaa0670
  }) => {
    if (_0x4b8d49.state.activity && _0x4b8d49.state.activity.tasks && _0x4b8d49.state.activity.tasks.length > 0) {
      const _0x1ec0a3 = _0x4b8d49.state.activity.tasks.find(_0x9e58e => _0x9e58e.count < _0x9e58e.wanted);
      if (!_0x1ec0a3 && !_0x21c752) {
        _0x21c752 = true;
        _0x8a7e7d({
          apps: [],
          appName: "jobs",
          icon: icon,
          id: "current-job",
          state: _0xaa0670,
          timeout: 1500,
          title: "complete",
          text: "All tasks complete!",
          i18nTitle: true,
          i18nText: true
        });
      } else if (_0x1ec0a3) {
        _0x21c752 = false;
        const _0x1f9278 = _0x1ec0a3.wanted > 1 ? "(" + _0x1ec0a3.count + " / " + _0x1ec0a3.wanted + ") Current" : "Current";
        _0x8a7e7d({
          apps: [],
          appName: "jobs",
          icon: icon,
          id: "current-job",
          state: _0xaa0670,
          timeout: -1,
          title: _0x1f9278,
          text: _0x1ec0a3.description,
          i18nTitle: ["Current"],
          i18nText: true
        });
      }
    }
    return {
      ..._0xaa0670,
      [_0x5d1a26.key]: {
        ..._0xaa0670[_0x5d1a26.key],
        ..._0x4b8d49.state
      }
    };
  });
  _0x1b57e0("job-group-join-deny", groupResponse("deny"));
  _0x1b57e0("job-group-join-accept", groupResponse("accept"));
  _0x1b57e0("job-group-join-request", ({
    data: _0x56c911,
    state: _0x527deb
  }) => {
    _0x8a7e7d({
      apps: [],
      appName: "jobs",
      icon: icon,
      onAccept: () => _0x5e6904("np-ui:requestToJoinJobCenterGroupAccept", {
        group_id: _0x56c911.group_id,
        member_id: _0x56c911.member.id,
        request_id: _0x56c911.request_id,
        character: _0x527deb.character
      }),
      onAcceptText: "Accept",
      onReject: () => _0x5e6904("np-ui:requestToJoinJobCenterGroupReject", {
        group_id: _0x56c911.group_id,
        member_id: _0x56c911.member.id,
        request_id: _0x56c911.request_id,
        character: _0x527deb.character
      }),
      onRejectText: "Reject",
      state: _0x527deb,
      text: _0x56c911.member.first_name + " " + _0x56c911.member.last_name,
      title: "Request to Join",
      i18nTitle: true,
      timeout: -1
    });
    return _0x527deb;
  });
  _0x1b57e0("job-group-offer-activity", ({
    data: _0xb90926,
    state: _0x14d525
  }) => {
    _0x8a7e7d({
      apps: [],
      appName: "jobs",
      icon: icon,
      id: "activity_" + _0xb90926.activity_id,
      onAccept: async () => {
        const _0x2e65c2 = await _0x5e6904("np-ui:jobCenterActivityAccept", {
          activity_id: _0xb90926.activity_id,
          character: _0x14d525.character,
          group_id: _0xb90926.group_id
        });
        setTimeout(() => {
          _0x8a7e7d({
            apps: [],
            appName: "jobs",
            icon: icon,
            id: "activity_" + _0xb90926.activity_id,
            state: _0x14d525,
            text: _0x2e65c2.meta.ok ? "Job pending..." : "Job was unavailable.",
            title: "Job Offer",
            i18nTitle: true,
            i18nText: true,
            timeout: 5000
          });
        }, 0);
      },
      onAcceptOptions: {
        onAccept: null,
        onReject: null,
        dismiss: false,
        blockDismissOnClick: true,
        id: "activity_" + _0xb90926.activity_id,
        text: "Accepting...",
        i18nText: true,
        timeout: -1
      },
      onAcceptText: "Accept",
      onReject: () => _0x5e6904("np-ui:jobCenterActivityReject", {
        activity_id: _0xb90926.activity_id,
        character: _0x14d525.character,
        group_id: _0xb90926.group_id
      }),
      onRejectText: "Reject",
      state: _0x14d525,
      text: _0xb90926.message,
      title: "Job Offer",
      i18nTitle: true,
      i18nText: true,
      timeout: 30000
    });
    return _0x14d525;
  });
  _0x1b57e0("jobs-pending-selection", ({
    data: _0xb61f3e,
    state: _0x3d8eea
  }) => {
    _0x8a7e7d({
      apps: [],
      appName: "jobs",
      icon: icon,
      id: "activity_" + _0xb61f3e.activity_id,
      state: _0x3d8eea,
      text: _0xb61f3e.got_job ? "Job starting!" : "Didn't get the job this time.",
      title: "Job Update",
      i18nTitle: true,
      i18nText: true,
      timeout: 5000
    });
    return _0x3d8eea;
  });
};
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/jobs.svg";
const icon = {
  background: "#90CAF9",
  color: "white",
  name: "people-carry"
};
const config = _0x222afe => {
  return {
    ..._0x222afe,
    events: () => events,
    iconPng: myIcon,
    label: "Job Center",
    name: "jobs",
    position: 60,
    render: () => _0xf0226d.jsx(JobsContainer, {})
  };
};
export { config as default, icon };