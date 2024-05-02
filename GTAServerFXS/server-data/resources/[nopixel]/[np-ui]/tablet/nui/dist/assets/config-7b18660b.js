import { k as _0x3aab5d, l as _0x4e5f13, c as _0x57e055, r as _0x32962c, i as _0x13fff3, m as _0xbc81ad, t as _0x3bd8c2, N as _0x54fe30, f as _0x25bfb8, d as _0x11032e, n as _0x59db94, b as _0x374ddc, s as _0x14a359, a as _0x2fc05a, S as _0x413877, p as _0x482a41, F as _0x23cf45, q as _0x3dc171, u as _0x14df51, v as _0x351197, w as _0x1b4cb1, j as _0x220183, x as _0xfd6b45, y as _0x21e3ac, e as _0x13026e, o as _0x3b7568, z as _0x1db29b, A as _0x35e9cd, B as _0x42b1e2, C as _0x3a0675, D as _0x4de40a, E as _0x1e58e2, G as _0x126ffd, H as _0x380f4a, h as _0x4c79a1, M as _0x2bf154, I as _0x501d3f, J as _0x8be395, K as _0x19480e, O as _0x1a5c20, P as _0x31ff3f, Q as _0x78a189 } from "./index-bc87d183.js";
import { c as _0x30d880 } from "./index-f70f3234.js";
import { T as _0x5a6203 } from "./index-a27eaa46.js";
import { A as _0x12dddf } from "./index-e954302e.js";
import "./index-c0367edf.js";
const y = async (_0x76b402, _0x51112e = {}, _0x48f138) => {
  const _0x27a0da = {};
  const _0x3f2dd1 = typeof _0x51112e == "object" ? {
    character: _0x27a0da,
    ..._0x51112e
  } : {
    character: _0x27a0da,
    body: _0x51112e
  };
  const _0xb11b1e = await fetch("https://np-ui/" + _0x76b402, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(_0x3f2dd1)
  });
  try {
    return await _0xb11b1e.json();
  } catch (_0x104da4) {
    return {
      data: {},
      meta: {
        ok: false,
        message: "failed to do request for: " + _0x76b402 + " - " + (_0x104da4 instanceof Error && _0x104da4.message)
      }
    };
  }
};
const j = {
  className: "boosting-toast"
};
const $e = (_0x385f7b, _0x1ec9a1) => {
  switch (_0x1ec9a1) {
    case "success":
      return _0x3aab5d.success(_0x385f7b, j);
    case "error":
      return _0x3aab5d.error(_0x385f7b, j);
  }
};
const [Ct, St] = _0x30d880(() => {
  const [_0x17b1e8, _0x392922] = _0x4e5f13("home");
  const [_0x4fecc9, _0x4f7fb2] = _0x57e055({
    inQueue: false,
    contracts: [],
    auctionContracts: [],
    selectedContract: null,
    racingProfile: null,
    progression: {}
  });
  const [_0x29d8f8, _0x4509d2] = _0x57e055({
    isNightTime: false,
    pendingRaces: [],
    activeRaces: [],
    completedRaces: [],
    selectedTrack: null,
    raceTracks: [],
    racingAlias: "",
    selectedRaceInfo: null,
    selectedRaceCompleted: null
  });
  const [_0x361c19, _0x5f5d9e] = _0x4e5f13(null);
  const [_0x1e9a37, _0x38a57a] = _0x4e5f13(null);
  return {
    page: _0x17b1e8,
    setPage: _0x392922,
    setRacingState: _0x4509d2,
    racingState: _0x29d8f8,
    modalInfo: _0x361c19,
    setModalInfo: _0x5f5d9e,
    confirmModalInfo: _0x1e9a37,
    setConfirmModalInfo: _0x38a57a,
    boostingState: _0x4fecc9,
    setBoostingState: _0x4f7fb2
  };
});
const A = () => St();
const Tt = _0x3bd8c2("<span>Creating Race");
const U = _0x3bd8c2("<span>");
const yt = _0x3bd8c2("<span>Attempting to join race");
const et = _0x3bd8c2("<span>Attempting to remove <!> from race");
const wt = _0x3bd8c2("<span>Attempting to start race");
const Gt = _0x3bd8c2("<span>Attempting to end race");
const Ot = _0x3bd8c2("<span>Attempting to leave race");
const xt = async () => {
  const _0x1a34e2 = await y("np-ui:racingGetAllRaces", {});
  const _0x4c170e = Object.values(_0x1a34e2.data.races).sort((_0x4d22b7, _0x22e0c6) => _0x4d22b7.name.localeCompare(_0x22e0c6.name));
  const _0x2231c4 = Object.values(_0x1a34e2.data.pendingRaces).sort((_0x58a2fe, _0x46452a) => _0x58a2fe.createdAt === _0x46452a.createdAt ? 0 : _0x46452a.createdAt - _0x58a2fe.createdAt);
  const _0x4c7a36 = Object.values(_0x1a34e2.data.activeRaces).sort((_0x54b028, _0x140035) => _0x54b028.createdAt === _0x140035.createdAt ? 0 : _0x140035.createdAt - _0x54b028.createdAt);
  const _0x5417cc = Object.values(_0x1a34e2.data.completed).map(_0x28172c => ({
    ..._0x28172c,
    name: _0x28172c.track
  }));
  _0x5417cc.sort((_0x326235, _0x285930) => _0x326235.timestamp === _0x285930.timestamp ? 0 : _0x285930.timestamp - _0x326235.timestamp);
  return {
    pending: _0x2231c4,
    active: _0x4c7a36,
    maps: _0x4c170e,
    completed: _0x5417cc
  };
};
const Rt = async (_0x499515, _0x5c329f, _0x5d1153) => {
  _0x32962c(_0x5d1153, () => {
    if (!_0x5c329f) {
      return $e("Invalid track selected", "error");
    }
    if (!_0x499515.eventName || _0x499515.eventName === "") {
      return $e("Invalid event name provided", "error");
    }
    if (!_0x499515.alias || _0x499515.alias === "") {
      return $e("Invalid racing alias", "error");
    }
    const {
      setPage: _0x27d52b
    } = A();
    const _0x5d39e1 = {
      loading: Tt(),
      success: _0x53eafb => (() => {
        const _0x5f0f50 = U();
        _0x13fff3(_0x5f0f50, _0x53eafb);
        return _0x5f0f50;
      })(),
      error: _0x2dea32 => (() => {
        const _0x5decd6 = U();
        _0x13fff3(_0x5decd6, _0x2dea32);
        return _0x5decd6;
      })()
    };
    const _0x384008 = () => new Promise(async (_0x515955, _0x24a732) => {
      const _0x3c6958 = await y("np-ui:racingCreateRace", {
        trackInfo: _0x5c329f,
        id: _0x5c329f.id,
        options: {
          ..._0x499515,
          phasing: "none",
          prizeDistribution: [0.8, 0.2]
        }
      });
      if (_0x3c6958.meta.ok) {
        _0x27d52b("races");
        return _0x515955("Race created!");
      } else {
        return _0x24a732(_0x3c6958.meta.message);
      }
    });
    _0x3aab5d.promise(_0x384008(), _0x5d39e1, j);
  });
};
const zt = async (_0x3968c4, _0x4d43f8, _0x594690) => {
  const _0x5906b4 = {
    loading: yt(),
    success: _0x56b1a8 => (() => {
      const _0x4ea70e = U();
      _0x13fff3(_0x4ea70e, _0x56b1a8);
      return _0x4ea70e;
    })(),
    error: _0x5a02b4 => (() => {
      const _0x42a083 = U();
      _0x13fff3(_0x42a083, _0x5a02b4);
      return _0x42a083;
    })()
  };
  _0x32962c(_0x594690, () => {
    const {
      setModalInfo: _0x5c2d68
    } = A();
    const _0x2b486e = _0x3b28fd => new Promise(async (_0x1b7f89, _0x20b88a) => {
      const _0x4c2595 = await y("np-ui:racingJoinRace", {
        race: _0x3968c4,
        alias: _0x4d43f8,
        password: _0x3b28fd
      });
      if (_0x4c2595.meta.ok) {
        return _0x1b7f89("Joined race!");
      } else {
        return _0x20b88a(_0x4c2595.meta.message);
      }
    });
    if (_0x3968c4.password) {
      _0x5c2d68({
        inputs: [{
          type: "password",
          name: "password",
          label: "Password"
        }],
        title: "Joining race",
        description: "Please enter the password to join the race.",
        onSubmit: _0x3ac0e8 => {
          _0x3aab5d.promise(_0x2b486e(_0x3ac0e8.password), _0x5906b4, j);
        },
        onCancel: () => {}
      });
    } else {
      _0x3aab5d.promise(_0x2b486e(""), _0x5906b4, j);
    }
  });
};
const It = async () => {
  const _0x360612 = await y("np-ui:racing:getAlias", {});
  if (_0x360612.meta.ok) {
    return _0x360612.data.alias;
  }
};
const tt = (_0x551fa3, _0x28d7c7) => {
  if (!!_0x28d7c7 && !!_0x551fa3) {
    return _0x32962c(_0x551fa3, () => {
      const {
        setRacingState: _0x537cc4,
        setPage: _0x3fa1f8
      } = A();
      _0x537cc4({
        selectedRaceInfo: _0x28d7c7
      });
      _0x3fa1f8("race-info");
    });
  }
};
const Ue = _0x5afe90 => {
  const _0x3dc98e = _0xbc81ad()?.cid;
  return !!_0x5afe90.find(_0x2c29ee => Number(_0x2c29ee.characterId) === _0x3dc98e && !_0x2c29ee.leftRace);
};
const Bt = (_0x15ab64, _0x40e2e7, _0x2d8791) => _0x32962c(_0x15ab64, async () => {
  const {
    setConfirmModalInfo: _0x53df16
  } = A();
  const _0x2541c5 = async () => {
    const _0x1ef32f = () => new Promise(async (_0xb4a287, _0xf96f7d) => {
      const _0x56c6a2 = await y("np-ui:racingKickFromRace", {
        raceId: _0x2d8791,
        playerId: _0x40e2e7.id
      });
      if (_0x56c6a2.meta.ok) {
        return _0xb4a287("Kicked " + _0x40e2e7.alias + " from race!");
      } else {
        return _0xf96f7d(_0x56c6a2.meta.message);
      }
    });
    _0x3aab5d.promise(_0x1ef32f(), {
      loading: (() => {
        const _0x4ac511 = et();
        const _0x28c117 = _0x4ac511.firstChild;
        const _0x1691a5 = _0x28c117.nextSibling;
        _0x1691a5.nextSibling;
        _0x13fff3(_0x4ac511, () => _0x40e2e7.alias, _0x1691a5);
        return _0x4ac511;
      })(),
      success: _0x3766ec => (() => {
        const _0x55e9ff = U();
        _0x13fff3(_0x55e9ff, _0x3766ec);
        return _0x55e9ff;
      })(),
      error: _0x478573 => (() => {
        const _0x294c48 = U();
        _0x13fff3(_0x294c48, _0x478573);
        return _0x294c48;
      })()
    }, j);
  };
  _0x53df16({
    onConfirm: () => _0x2541c5(),
    onCancel: () => ({}),
    message: "Are you sure you want to kick " + _0x40e2e7.alias + " from this race?"
  });
});
const Lt = (_0x1a9df0, _0x389c29, _0x50d5e4) => _0x32962c(_0x1a9df0, async () => {
  const {
    setConfirmModalInfo: _0x428fce
  } = A();
  const _0x30420a = async () => {
    const _0x20d8c9 = () => new Promise(async (_0x1a1f85, _0x28a627) => {
      const _0x14298e = await y("np-ui:racingBanFromRace", {
        raceId: _0x50d5e4,
        playerId: _0x389c29.id
      });
      if (_0x14298e.meta.ok) {
        return _0x1a1f85("Banned " + _0x389c29.alias + " from race!");
      } else {
        return _0x28a627(_0x14298e.meta.message);
      }
    });
    _0x3aab5d.promise(_0x20d8c9(), {
      loading: (() => {
        const _0x4f9668 = et();
        const _0x439737 = _0x4f9668.firstChild;
        const _0x1ef78c = _0x439737.nextSibling;
        _0x1ef78c.nextSibling;
        _0x13fff3(_0x4f9668, () => _0x389c29.alias, _0x1ef78c);
        return _0x4f9668;
      })(),
      success: _0x315af8 => (() => {
        const _0x82efe9 = U();
        _0x13fff3(_0x82efe9, _0x315af8);
        return _0x82efe9;
      })(),
      error: _0x25778c => (() => {
        const _0x2bb5b6 = U();
        _0x13fff3(_0x2bb5b6, _0x25778c);
        return _0x2bb5b6;
      })()
    }, j);
  };
  _0x428fce({
    onConfirm: () => _0x30420a(),
    onCancel: () => ({}),
    message: "Are you sure you want to ban " + _0x389c29.alias + " from this race?"
  });
});
const Mt = _0x7ad454 => {
  $e("Marked race location", "success");
  y("np-ui:racingLocateRace", {
    race: _0x7ad454,
    id: _0x7ad454.id,
    eventId: _0x7ad454.eventId
  });
};
const Pt = _0x20c0f5 => {
  $e("Toggled race preview", "success");
  y("np-ui:racingPreviewRace", {
    race: _0x20c0f5,
    id: _0x20c0f5.id
  });
};
const Dt = (_0x4d352d, _0xe4a4fa) => _0x32962c(_0x4d352d, async () => {
  const {
    setConfirmModalInfo: _0x421529
  } = A();
  const _0x32c585 = async () => {
    const _0x47f610 = () => new Promise(async (_0x30a6ce, _0x58c292) => {
      const _0xfbbbe = await y("np-ui:racingStartRace", {
        race: _0xe4a4fa
      });
      if (_0xfbbbe.meta.ok) {
        return _0x30a6ce("Started race");
      } else {
        return _0x58c292(_0xfbbbe.meta.message);
      }
    });
    _0x3aab5d.promise(_0x47f610(), {
      loading: wt(),
      success: _0x3832b9 => (() => {
        const _0x2fc4f3 = U();
        _0x13fff3(_0x2fc4f3, _0x3832b9);
        return _0x2fc4f3;
      })(),
      error: _0xb3a2e9 => (() => {
        const _0x1977a3 = U();
        _0x13fff3(_0x1977a3, _0xb3a2e9);
        return _0x1977a3;
      })()
    }, j);
  };
  _0x421529({
    onConfirm: () => _0x32c585(),
    onCancel: () => ({}),
    message: "Are you sure you want to start race?"
  });
});
const Nt = (_0x5bafd3, _0x2413c1) => _0x32962c(_0x5bafd3, async () => {
  const {
    setConfirmModalInfo: _0x4fe1eb,
    setPage: _0x38e4ca
  } = A();
  const _0x2c3cfa = async () => {
    const _0x546698 = () => new Promise(async (_0x15a8f0, _0x2dfd9c) => {
      const _0x3230f9 = await y("np-ui:racingEndRace", {
        race: _0x2413c1
      });
      if (_0x3230f9.meta.ok) {
        _0x38e4ca("races");
        return _0x15a8f0("Ended race");
      } else {
        return _0x2dfd9c(_0x3230f9.meta.message);
      }
    });
    _0x3aab5d.promise(_0x546698(), {
      loading: Gt(),
      success: _0x41c441 => (() => {
        const _0x6873de = U();
        _0x13fff3(_0x6873de, _0x41c441);
        return _0x6873de;
      })(),
      error: _0x5c6eb9 => (() => {
        const _0x480c6f = U();
        _0x13fff3(_0x480c6f, _0x5c6eb9);
        return _0x480c6f;
      })()
    }, j);
  };
  _0x4fe1eb({
    onConfirm: () => _0x2c3cfa(),
    onCancel: () => ({}),
    message: "Are you sure you want to end the race?"
  });
});
const Et = (_0x5d3204, _0x44643f) => _0x32962c(_0x5d3204, async () => {
  const {
    setConfirmModalInfo: _0x231913,
    setPage: _0x1f247c
  } = A();
  const _0x53f8c2 = async () => {
    const _0x326a2b = () => new Promise(async (_0x326ef4, _0x302074) => {
      const _0x40e6f = await y("np-ui:racingLeaveRace", {
        race: _0x44643f
      });
      if (_0x40e6f.meta.ok) {
        _0x1f247c("races");
        return _0x326ef4("Left race");
      } else {
        return _0x302074(_0x40e6f.meta.message);
      }
    });
    _0x3aab5d.promise(_0x326a2b(), {
      loading: Ot(),
      success: _0x37a4fb => (() => {
        const _0x5479ca = U();
        _0x13fff3(_0x5479ca, _0x37a4fb);
        return _0x5479ca;
      })(),
      error: _0x2106be => (() => {
        const _0x28db2e = U();
        _0x13fff3(_0x28db2e, _0x2106be);
        return _0x28db2e;
      })()
    }, j);
  };
  _0x231913({
    onConfirm: () => _0x53f8c2(),
    onCancel: () => ({}),
    message: "Are you sure you want to leave the race?"
  });
});
const Vt = (_0x525d83, _0x44050e) => _0x32962c(_0x525d83, () => {
  const {
    setRacingState: _0xb07d3b
  } = A();
  const _0xa5769a = {};
  if (_0x44050e.maps) {
    _0xa5769a.raceTracks = Object.values(_0x44050e.maps).sort((_0x34e4fa, _0x401f71) => _0x34e4fa.name.localeCompare(_0x401f71.name));
  }
  if (_0x44050e.pending) {
    _0xa5769a.pendingRaces = Object.values(_0x44050e.pending).sort((_0x210e77, _0x576910) => _0x210e77.createdAt === _0x576910.createdAt ? 0 : _0x576910.createdAt - _0x210e77.createdAt);
  }
  if (_0x44050e.active) {
    _0xa5769a.activeRaces = Object.values(_0x44050e.active).sort((_0x349bae, _0x50917c) => _0x349bae.createdAt === _0x50917c.createdAt ? 0 : _0x50917c.createdAt - _0x349bae.createdAt);
  }
  if (_0x44050e.completed) {
    _0xa5769a.completedRaces = Object.values(_0x44050e.completed).map(_0x215c1a => ({
      ..._0x215c1a,
      name: _0x215c1a.track
    }));
    _0xa5769a.completedRaces.sort((_0x181364, _0x5b83de) => _0x181364.timestamp === _0x5b83de.timestamp ? 0 : _0x5b83de.timestamp - _0x181364.timestamp);
  }
  _0xb07d3b({
    ..._0xa5769a
  });
});
const Ht = (_0x320cf3, _0x33786c) => _0x32962c(_0x320cf3, () => {
  const {
    setRacingState: _0x4008bf
  } = A();
  _0x4008bf({
    isNightTime: _0x33786c.isNightTime
  });
});
const Ut = (_0x594a9f, _0xb00697) => _0x32962c(_0x594a9f, () => {
  const {
    setRacingState: _0x4380b7
  } = A();
  _0x4380b7({
    racingAlias: _0xb00697.racingAlias
  });
});
const qt = "" + new URL("outbid-53912fb0.ogg", import.meta.url).href;
const Ft = "" + new URL("placebid-92e18d88.ogg", import.meta.url).href;
const jt = "" + new URL("wonbid-327f54b4.ogg", import.meta.url).href;
const Jt = _0xeb4047 => {
  const _0x45aa3f = {
    outbid: qt,
    placedbid: Ft,
    wonbid: jt
  };
  if (!_0x45aa3f[_0xeb4047]) {
    return;
  }
  const _0x5f1de4 = new Audio(_0x45aa3f[_0xeb4047]);
  _0x5f1de4.volume = 0.05;
  _0x5f1de4.controls = false;
  _0x5f1de4.play();
  setTimeout(() => {
    _0x5f1de4.remove();
  }, 250);
};
const Kt = _0x1f1b8a => _0x32962c(_0x1f1b8a, async () => {
  const {
    setBoostingState: _0x5ca307
  } = A();
  const _0x5f3e95 = await y("np-boosting:ui:joinQueue", {});
  if (_0x5f3e95.meta.ok) {
    _0x5ca307({
      inQueue: _0x5f3e95.data
    });
  }
  _0x25bfb8("underground", _0x5f3e95.meta.message);
});
const Qt = async _0x84f9f5 => _0x32962c(_0x84f9f5, async () => {
  const {
    setBoostingState: _0x362533
  } = A();
  const _0x1b2063 = await y("np-boosting:ui:leaveQueue", {});
  if (_0x1b2063.meta.ok) {
    _0x362533({
      inQueue: _0x1b2063.data
    });
  }
  _0x25bfb8("underground", _0x1b2063.meta.message);
});
const Wt = async () => (await y("np-boosting:ui:isCharInQueue", {})).data;
const Ge = _0x31eecd => _0x32962c(_0x31eecd, async () => {
  const {
    setBoostingState: _0x26b1c3
  } = A();
  const _0x2e2269 = await y("np-boosting:getContracts", {});
  _0x26b1c3({
    contracts: _0x2e2269.data
  });
});
const Yt = async (_0x45b9a0, _0x3f4d6e, _0x4f8ca8, _0x34ee05) => _0x32962c(_0x45b9a0, async () => {
  const {
    setBoostingState: _0x3d900a
  } = A();
  const _0x247418 = await y("np-boosting:ui:startContract", {
    contractId: _0x3f4d6e,
    buyIn: _0x4f8ca8,
    contractType: _0x34ee05
  });
  if (_0x247418.meta.ok) {
    _0x3d900a({
      contracts: _0x247418.data
    });
    _0x25bfb8("Underground", "Contract started, you should be email/pinged instructions.");
  } else {
    _0x25bfb8("Underground", _0x247418.meta.message);
  }
});
const Zt = async (_0x5e5608, _0x3550f1) => _0x32962c(_0x5e5608, async () => {
  const {
    setBoostingState: _0x36901a
  } = A();
  const _0x2c70c9 = await y("np-boosting:ui:disbandContract", {
    contractId: _0x3550f1
  });
  if (_0x2c70c9.meta.ok) {
    _0x36901a({
      contracts: _0x2c70c9.data
    });
    _0x25bfb8("Underground", "Contract successfully deleted - " + _0x3550f1);
  } else {
    _0x25bfb8("Underground", _0x2c70c9.meta.message);
  }
});
const Xt = async _0x381814 => _0x32962c(_0x381814, async () => {
  const _0x4f8ba0 = await y("np-boosting:ui:cancelContract", {});
  if (_0x4f8ba0.meta.ok) {
    Ge(_0x381814);
    _0x25bfb8("Underground", "Successfully canceled contract!");
  } else {
    _0x25bfb8("Underground", _0x4f8ba0.meta.message);
  }
});
const ea = async (_0x1c97c3, _0xa8d32f) => {
  if (_0xa8d32f) {
    return _0x32962c(_0x1c97c3, async () => {
      const {
        setModalInfo: _0x263fe,
        setBoostingState: _0x43eb47
      } = A();
      const _0x2739c2 = async _0x225c7b => {
        const _0x1766e6 = await y("np-boosting:ui:tranferContract", {
          cid: _0x225c7b,
          contractId: _0xa8d32f
        });
        if (_0x1766e6.meta.ok) {
          _0x43eb47({
            contracts: _0x1766e6.data
          });
          _0x25bfb8("Underground", "Contract successfully transferred - " + _0xa8d32f);
        } else {
          _0x25bfb8("Underground", _0x1766e6.meta.message);
        }
      };
      _0x263fe({
        inputs: [{
          type: "text",
          name: "stateid",
          label: "State ID"
        }],
        title: "Transfering Contract",
        description: "Please provide state id you would like to transfer this to.",
        onSubmit: _0x5d8a59 => {
          _0x2739c2(Number(_0x5d8a59.stateid));
        },
        onCancel: () => {}
      });
    });
  }
};
const ta = async (_0x234dbc, _0x46536e) => {
  if (_0x46536e) {
    return _0x32962c(_0x234dbc, async () => {
      const {
        setModalInfo: _0x5d7659
      } = A();
      const _0x1d77d2 = async (_0x2ddde8, _0x350354) => {
        const _0xb26023 = await y("np-boosting:ui:createAuction", {
          startingBid: _0x2ddde8,
          contractId: _0x46536e,
          duration: _0x350354
        });
        _0x25bfb8("Underground", _0xb26023.meta.message);
      };
      _0x5d7659({
        inputs: [{
          type: "text",
          name: "bid",
          label: "Starting bid (GNE)"
        }, {
          type: "select",
          name: "duration",
          label: "Duration",
          options: [{
            value: "5min",
            name: "5 Minutes"
          }, {
            value: "10min",
            name: "10 Minutes"
          }, {
            value: "20min",
            name: "20 Minutes"
          }, {
            value: "30min",
            name: "30 Minutes"
          }]
        }],
        title: "Auction Contract",
        description: "Please supply duration and starting bid",
        onSubmit: _0x43c140 => {
          _0x1d77d2(Number(_0x43c140.bid), _0x43c140.duration);
        },
        onCancel: () => {}
      });
    });
  }
};
const at = async _0x5b9355 => _0x32962c(_0x5b9355, async () => {
  const {
    setBoostingState: _0x787594
  } = A();
  const _0x202b69 = await y("np-boosting:ui:getAuctionItems", {});
  if (_0x202b69.meta.ok) {
    const _0x49527c = [..._0x202b69.data.filter(_0x1f409c => _0x1f409c.topBidderId === _0xbc81ad()?.cid), ..._0x202b69.data.filter(_0x277127 => _0x277127.topBidderId !== _0xbc81ad()?.cid)];
    _0x787594({
      auctionContracts: _0x49527c
    });
  }
});
const aa = async (_0x507dcc, _0x5bddec) => _0x32962c(_0x507dcc, () => {
  const {
    setModalInfo: _0x5260f0
  } = A();
  _0x5260f0({
    inputs: [{
      type: "text",
      name: "amount",
      label: "Bid Amount"
    }],
    title: "Contract Auction",
    description: "Please supply bid amount for this vehicle",
    onSubmit: async _0x1a8542 => {
      const _0x1833a2 = Number(_0x1a8542.amount);
      if (isNaN(_0x1833a2)) {
        return _0x25bfb8("Underground", "Invalid bid amount");
      }
      const _0x1bacb9 = await y("np-boosting:ui:placeAuctionBid", {
        auctionId: _0x5bddec,
        bidAmount: _0x1833a2
      });
      _0x25bfb8("Underground", _0x1bacb9.meta.message);
    },
    onCancel: () => {}
  });
});
const na = async () => (await y("np-boosting:ui:getNextLevelProgression", {})).data;
const nt = async () => await _0x54fe30.execute("tablet:underground:getProfile", {
  mockupData: {
    id: "69_man",
    chip_id: "123123",
    character_id: 1234,
    alias: "Alias",
    avatar: "123",
    created_at: 123,
    updated_at: 123
  }
});
const sa = "" + new URL("home-icon-55cc40b6.svg", import.meta.url).href;
const ra = "" + new URL("auction-icon-cb6cbb23.svg", import.meta.url).href;
const ia = "" + new URL("races-icon-71f9dbfa.svg", import.meta.url).href;
const oa = _0x3bd8c2("<div class=\"boosting-btn\">");
const E = _0x5ebd6d => (() => {
  const _0x24d920 = oa();
  _0x59db94(_0x24d920, "click", _0x5ebd6d.onClick, true);
  _0x13fff3(_0x24d920, () => _0x5ebd6d.label);
  return _0x24d920;
})();
_0x11032e(["click"]);
const la = "" + new URL("race-flag-icon-aee32879.svg", import.meta.url).href;
const ca = "" + new URL("gavel-icon-a099b86a.svg", import.meta.url).href;
const da = _0x3bd8c2("<div class=\"heading-hero-container\"><img alt=\"\"><div class=\"table-info\"><p></p><h1>");
const Z = _0xd11e28 => (() => {
  const _0x5c5833 = da();
  const _0x349063 = _0x5c5833.firstChild;
  const _0x3bbd86 = _0x349063.nextSibling;
  const _0x2de741 = _0x3bbd86.firstChild;
  const _0x56f65b = _0x2de741.nextSibling;
  _0x13fff3(_0x2de741, () => _0xd11e28.title);
  _0x13fff3(_0x56f65b, () => _0xd11e28.subTitle);
  _0x374ddc(() => _0x14a359(_0x349063, "src", _0xd11e28.gavelIcon ? ca : la));
  return _0x5c5833;
})();
const ua = _0x3bd8c2("<div class=\"table-container\">");
const va = _0x3bd8c2("<div class=\"table-empty\">No pending races..");
const ga = _0x20b1d9 => {
  const _0x183790 = _0x482a41();
  const _0x1db481 = [{
    accessorKey: "eventName",
    header: "Event Name"
  }, {
    accessorKey: "name",
    header: "Track"
  }, {
    accessorKey: "vehicleClass",
    header: "Class"
  }, {
    accessorKey: "type",
    header: "Type"
  }, {
    accessorFn: _0x55b38d => "$" + _0x55b38d.buyIn.toFixed(2),
    header: "Buy In"
  }, {
    accessorKey: "laps",
    header: "Total Laps"
  }, {
    accessorFn: _0x46a886 => Number(_0x46a886.length / 1000 * 0.715).toFixed(2) + "mi",
    header: "Total Distance"
  }, {
    cell: _0x5388c6 => _0x2fc05a(E, {
      label: "View",
      onClick: () => tt(_0x183790, {
        ..._0x5388c6.row.original,
        viewType: "pending"
      })
    }),
    header: "‎"
  }];
  return (() => {
    const _0x15667c = ua();
    _0x13fff3(_0x15667c, _0x2fc05a(Z, {
      title: "List of",
      subTitle: "Pending Races"
    }), null);
    _0x13fff3(_0x15667c, _0x2fc05a(_0x413877, {
      get when() {
        return _0x20b1d9.items.length > 0;
      },
      get fallback() {
        return va();
      },
      get children() {
        return _0x2fc05a(_0x5a6203, {
          get rows() {
            return _0x20b1d9.items;
          },
          columns: _0x1db481
        });
      }
    }), null);
    return _0x15667c;
  })();
};
const Oe = _0xdb45a1 => Number(_0xdb45a1 / 1000 * 0.715).toFixed(2) + "mi";
const _a = _0x3bd8c2("<div class=\"table-container\">");
const ma = _0x3bd8c2("<div class=\"table-empty\">No active races..");
const pa = _0x203a25 => {
  const _0x5c13eb = _0x482a41();
  const _0xf67f6 = [{
    accessorKey: "eventName",
    header: "Event Name"
  }, {
    accessorKey: "name",
    header: "Track"
  }, {
    accessorKey: "vehicleClass",
    header: "Class"
  }, {
    accessorKey: "type",
    header: "Type"
  }, {
    accessorFn: _0x17cd97 => "$" + _0x17cd97.buyIn.toFixed(2),
    header: "Buy In"
  }, {
    accessorKey: "laps",
    header: "Total Laps"
  }, {
    accessorFn: _0x2cc54e => Oe(_0x2cc54e.length),
    header: "Total Distance"
  }, {
    cell: _0x49d454 => _0x2fc05a(E, {
      label: "View",
      onClick: () => tt(_0x5c13eb, {
        ..._0x49d454.row.original,
        viewType: "active"
      })
    }),
    header: "‎"
  }];
  return (() => {
    const _0x2b04b3 = _a();
    _0x13fff3(_0x2b04b3, _0x2fc05a(Z, {
      title: "List of",
      subTitle: "Active Races"
    }), null);
    _0x13fff3(_0x2b04b3, _0x2fc05a(_0x413877, {
      get when() {
        return _0x203a25.items.length > 0;
      },
      get fallback() {
        return ma();
      },
      get children() {
        return _0x2fc05a(_0x5a6203, {
          get rows() {
            return _0x203a25.items;
          },
          columns: _0xf67f6
        });
      }
    }), null);
    return _0x2b04b3;
  })();
};
const ha = _0x3bd8c2("<span class=\"text-[#00F8B9]\">$");
const fa = _0x3bd8c2("<div class=\"table-container\">");
const ba = _0x3bd8c2("<div class=\"table-empty\">No completed races..");
const $a = _0x98fb40 => {
  const {
    setPage: _0x3474db,
    setRacingState: _0x43c78e
  } = A();
  const _0x108b40 = _0x521b9c => {
    _0x43c78e({
      selectedRaceCompleted: _0x521b9c
    });
    _0x3474db("completed-race");
  };
  const _0x3d2cb6 = [{
    accessorKey: "eventName",
    header: "Event Name"
  }, {
    accessorKey: "track",
    header: "Track"
  }, {
    accessorKey: "type",
    header: "Type"
  }, {
    cell: _0x543b14 => (() => {
      const _0x4c92e5 = ha();
      _0x4c92e5.firstChild;
      _0x13fff3(_0x4c92e5, () => _0x543b14.row.original.buyIn, null);
      return _0x4c92e5;
    })(),
    header: "Buy In"
  }, {
    accessorKey: "laps",
    header: "Total Laps"
  }, {
    accessorFn: _0x43358b => Oe(_0x43358b.length),
    header: "Total Distance"
  }, {
    accessorFn: _0x19ba3b => "" + new Date(_0x19ba3b.timestamp).toLocaleTimeString(),
    header: "Time"
  }, {
    cell: _0x59717a => _0x2fc05a(E, {
      label: "View",
      onClick: () => _0x108b40(_0x59717a.row.original)
    }),
    header: "‎"
  }];
  return (() => {
    const _0x1ac473 = fa();
    _0x13fff3(_0x1ac473, _0x2fc05a(Z, {
      title: "List of",
      subTitle: "Completed Races"
    }), null);
    _0x13fff3(_0x1ac473, _0x2fc05a(_0x413877, {
      get when() {
        return _0x98fb40.items.length > 0;
      },
      get fallback() {
        return ba();
      },
      get children() {
        return _0x2fc05a(_0x5a6203, {
          get rows() {
            return _0x98fb40.items;
          },
          columns: _0x3d2cb6
        });
      }
    }), null);
    return _0x1ac473;
  })();
};
const Aa = _0x3bd8c2("<div class=\"races-page\"><div class=\"race-navigation\">");
const ka = () => {
  const {
    racingState: _0x142049,
    setPage: _0x1f70b2
  } = A();
  return (() => {
    const _0x1202c8 = Aa();
    const _0xe1e135 = _0x1202c8.firstChild;
    _0x13fff3(_0xe1e135, _0x2fc05a(E, {
      label: "View Tracks",
      onClick: () => _0x1f70b2("race-tracks")
    }));
    _0x13fff3(_0x1202c8, _0x2fc05a(ga, {
      get items() {
        return _0x142049.pendingRaces;
      }
    }), null);
    _0x13fff3(_0x1202c8, _0x2fc05a(pa, {
      get items() {
        return _0x142049.activeRaces;
      }
    }), null);
    _0x13fff3(_0x1202c8, _0x2fc05a($a, {
      get items() {
        return _0x142049.completedRaces;
      }
    }), null);
    return _0x1202c8;
  })();
};
const we = (_0x45454f, _0x4d1400) => {
  if (!_0x45454f) {
    return "DNF";
  }
  const _0x485e66 = Math.floor(_0x45454f / 60000);
  const _0x3b4a92 = (_0x45454f % 60000 / 1000).toFixed(3);
  return _0x485e66 + ":" + _0x3b4a92.padStart(6, "0");
};
const Ca = _0x3bd8c2("<div class=\"completed-race-view\"><ul class=\"players-list\">");
const Sa = _0x3bd8c2("<li class=\"player-item\"><h1 class=\"value position\">#</h1><h1 class=\"value\"></h1><h1 class=\"value cash-value\">$<!> / <span> GNE</span></h1><h1 class=\"value\"> / ");
const Ta = () => {
  const {
    racingState: _0x5c9739
  } = A();
  return (() => {
    const _0x5000ff = Ca();
    const _0x8d5a9b = _0x5000ff.firstChild;
    _0x13fff3(_0x5000ff, _0x2fc05a(Z, {
      title: "Completed",
      subTitle: "Race"
    }), _0x8d5a9b);
    _0x13fff3(_0x8d5a9b, _0x2fc05a(_0x23cf45, {
      get each() {
        return _0x5c9739.selectedRaceCompleted?.players;
      },
      children: _0xc011c7 => (() => {
        const _0x1ca1c0 = Sa();
        const _0x51fe18 = _0x1ca1c0.firstChild;
        _0x51fe18.firstChild;
        const _0x102ec9 = _0x51fe18.nextSibling;
        const _0x435ff7 = _0x102ec9.nextSibling;
        const _0x3d931f = _0x435ff7.firstChild;
        const _0x4a4290 = _0x3d931f.nextSibling;
        const _0x537d6a = _0x4a4290.nextSibling;
        const _0x3bfe20 = _0x537d6a.nextSibling;
        const _0x5cdc51 = _0x3bfe20.firstChild;
        const _0x330956 = _0x435ff7.nextSibling;
        const _0x18827f = _0x330956.firstChild;
        _0x13fff3(_0x51fe18, () => _0xc011c7.place, null);
        _0x13fff3(_0x102ec9, () => _0xc011c7.alias);
        _0x13fff3(_0x435ff7, () => _0xc011c7.prize, _0x4a4290);
        _0x13fff3(_0x3bfe20, () => _0xc011c7.cryptoReward, _0x5cdc51);
        _0x13fff3(_0x330956, () => we(_0xc011c7.finished), _0x18827f);
        _0x13fff3(_0x330956, () => we(_0xc011c7.bestLapTime), null);
        _0x374ddc(_0x255dbd => {
          const _0x265724 = _0xc011c7.place === 1;
          const _0x390320 = _0xc011c7.place === 2;
          const _0x384db2 = _0xc011c7.place === 3;
          if (_0x265724 !== _0x255dbd._v$) {
            _0x1ca1c0.classList.toggle("first-place", _0x255dbd._v$ = _0x265724);
          }
          if (_0x390320 !== _0x255dbd._v$2) {
            _0x1ca1c0.classList.toggle("second-place", _0x255dbd._v$2 = _0x390320);
          }
          if (_0x384db2 !== _0x255dbd._v$3) {
            _0x1ca1c0.classList.toggle("third-place", _0x255dbd._v$3 = _0x384db2);
          }
          return _0x255dbd;
        }, {
          _v$: undefined,
          _v$2: undefined,
          _v$3: undefined
        });
        return _0x1ca1c0;
      })()
    }));
    return _0x5000ff;
  })();
};
const ya = _0x13d6a3 => _0x13d6a3.type === "text" || _0x13d6a3.type === "password" ? _0x13d6a3 : null;
const wa = _0x325189 => _0x325189.type === "number" ? _0x325189 : null;
const Ga = _0x609848 => _0x609848.type === "select" ? _0x609848 : null;
const Oa = _0x1fc4a3 => {
  let _0x350f59 = [{
    type: "text",
    key: "eventName",
    label: "Event Name"
  }, {
    type: "select",
    key: "vehicleClass",
    label: "Vehicle Class",
    options: [{
      value: "Open",
      name: "Open"
    }, {
      value: "M",
      name: "M"
    }, {
      value: "S",
      name: "S"
    }, {
      value: "A",
      name: "A"
    }, {
      value: "B",
      name: "B"
    }]
  }, {
    type: "number",
    key: "buyIn",
    label: "Buy In"
  }, {
    type: "number",
    key: "laps",
    label: "Laps"
  }, {
    type: "number",
    key: "countdown",
    label: "Countdown Start"
  }, {
    type: "number",
    key: "dnfPosition",
    label: "DNF Position"
  }, {
    type: "number",
    key: "dnfCountdown",
    label: "DNF Countdown"
  }, {
    type: "number",
    key: "hitPenalty",
    label: "Checkpoint Hit Pentalty"
  }, {
    type: "password",
    key: "password",
    label: "Password"
  }, {
    type: "select",
    key: "sendNotification",
    label: "Send Notification",
    options: [{
      value: false,
      name: "No"
    }, {
      value: true,
      name: "Yes"
    }]
  }, {
    type: "select",
    key: "reverse",
    label: "Reverse",
    options: [{
      value: false,
      name: "No"
    }, {
      value: true,
      name: "Yes"
    }]
  }, {
    type: "select",
    key: "showPosition",
    label: "Show Position",
    options: [{
      value: false,
      name: "Hide"
    }, {
      value: true,
      name: "Show"
    }]
  }, {
    type: "select",
    key: "forcePerspective",
    label: "Force FPP",
    options: [{
      value: false,
      name: "No"
    }, {
      value: true,
      name: "Yes"
    }]
  }];
  if (_0x1fc4a3.type === "Sprint") {
    _0x350f59 = _0x350f59.filter(_0x3cc30c => _0x3cc30c.key !== "laps");
  }
  _0x350f59 = _0x350f59.filter(_0xae842c => !["hitPenalty"].includes(_0xae842c.key));
  if (_0x1fc4a3.id === "random") {
    _0x350f59 = _0x350f59.filter(_0x2b06e8 => !["showPosition", "reverse", "tournamentName"].includes(_0x2b06e8.key));
  }
  return _0x350f59;
};
const xa = _0x3bd8c2("<div class=\"create-race-view\"><div class=\"form-container\"><div class=\"form-header\"><div class=\"title\"><p>Creating</p><h1> Race</h1></div></div><button class=\"create-btn\">Create Race");
const Ra = _0x3bd8c2("<div class=\"form-inputs\">");
const za = _0x3bd8c2("<div class=\"form-item\"><label></label><div class=\"input-container\">");
const Ia = _0x3bd8c2("<input autocomplete=\"off\">");
const Ba = _0x3bd8c2("<div class=\"select-input\"><button></button><span></span><button>");
const La = () => {
  const {
    racingState: _0x544564
  } = A();
  const _0x5793f8 = _0x482a41();
  const [_0x3614f5, _0x2e1e7b] = _0x57e055({
    eventName: "",
    alias: "My Alias ",
    vehicleClass: ""
  });
  const _0x3cbd2a = (_0x3cd014, _0x58aa4f) => {
    _0x2e1e7b(_0x3cd014, _0x58aa4f);
  };
  return (() => {
    const _0x523726 = xa();
    const _0x48f78b = _0x523726.firstChild;
    const _0x5490c7 = _0x48f78b.firstChild;
    const _0x2315d0 = _0x5490c7.firstChild;
    const _0x434ab0 = _0x2315d0.firstChild;
    const _0x216891 = _0x434ab0.nextSibling;
    const _0x5e0ea2 = _0x216891.firstChild;
    const _0x4501ab = _0x5490c7.nextSibling;
    _0x13fff3(_0x216891, () => _0x544564.selectedTrack?.name, _0x5e0ea2);
    _0x13fff3(_0x48f78b, _0x2fc05a(_0x413877, {
      get when() {
        return _0x544564.selectedTrack;
      },
      children: _0x3d42dd => (() => {
        const _0x4cff2c = Ra();
        _0x13fff3(_0x4cff2c, _0x2fc05a(_0x23cf45, {
          get each() {
            return Oa(_0x3d42dd());
          },
          children: _0x16f4e6 => (() => {
            const _0x53f3ea = za();
            const _0x260c5a = _0x53f3ea.firstChild;
            const _0x4267fd = _0x260c5a.nextSibling;
            _0x13fff3(_0x260c5a, () => _0x16f4e6.label);
            _0x13fff3(_0x4267fd, _0x2fc05a(_0x413877, {
              get when() {
                return ya(_0x16f4e6) || wa(_0x16f4e6);
              },
              children: _0x585d42 => (() => {
                const _0x5cb418 = Ia();
                _0x5cb418.addEventListener("change", _0x358920 => {
                  const _0x458b27 = _0x358920?.target.value;
                  const _0x383120 = _0x585d42().type === "number" ? parseInt(_0x458b27) : _0x458b27;
                  _0x3cbd2a(_0x585d42().key, _0x383120);
                });
                _0x374ddc(_0x1871d4 => {
                  const _0x47d861 = _0x585d42().type;
                  const _0x193966 = "Enter " + _0x585d42().label;
                  if (_0x47d861 !== _0x1871d4._v$) {
                    _0x14a359(_0x5cb418, "type", _0x1871d4._v$ = _0x47d861);
                  }
                  if (_0x193966 !== _0x1871d4._v$2) {
                    _0x14a359(_0x5cb418, "placeholder", _0x1871d4._v$2 = _0x193966);
                  }
                  return _0x1871d4;
                }, {
                  _v$: undefined,
                  _v$2: undefined
                });
                _0x374ddc(() => _0x5cb418.value = _0x3614f5[_0x585d42().key] ?? "");
                return _0x5cb418;
              })()
            }), null);
            _0x13fff3(_0x4267fd, _0x2fc05a(_0x413877, {
              get when() {
                return Ga(_0x16f4e6);
              },
              children: _0x3442ae => _0x2fc05a(Ma, {
                get options() {
                  return _0x3442ae().options ?? [];
                },
                onChange: _0x41d9ca => {
                  _0x3cbd2a(_0x3442ae().key, _0x41d9ca);
                }
              })
            }), null);
            return _0x53f3ea;
          })()
        }));
        return _0x4cff2c;
      })()
    }), _0x4501ab);
    _0x4501ab.$$click = () => Rt(_0x3614f5, _0x544564.selectedTrack, _0x5793f8);
    return _0x523726;
  })();
};
const Ma = _0x669bf4 => {
  const [_0x490d84, _0x1186b2] = _0x4e5f13(0);
  const _0x52696c = () => {
    _0x1186b2(_0x32edc4 => (_0x32edc4 - 1 + _0x669bf4.options.length) % _0x669bf4.options.length);
  };
  const _0x181b33 = () => {
    _0x1186b2(_0x22e14d => (_0x22e14d + 1) % _0x669bf4.options.length);
  };
  _0x3dc171(() => {
    _0x669bf4.onChange(_0x669bf4.options[_0x490d84()].value);
  });
  return (() => {
    const _0x3b7585 = Ba();
    const _0x59ccec = _0x3b7585.firstChild;
    const _0x527772 = _0x59ccec.nextSibling;
    const _0x2fd256 = _0x527772.nextSibling;
    _0x59ccec.$$click = _0x52696c;
    _0x13fff3(_0x59ccec, _0x2fc05a(_0x351197, {
      icon: _0x14df51
    }));
    _0x13fff3(_0x527772, () => _0x669bf4.options[_0x490d84()].name);
    _0x2fd256.$$click = _0x181b33;
    _0x13fff3(_0x2fd256, _0x2fc05a(_0x351197, {
      class: "icon",
      icon: _0x1b4cb1
    }));
    return _0x3b7585;
  })();
};
_0x11032e(["click"]);
const Pa = _0x3bd8c2("<div class=\"track-actions\">");
const Da = _0x3bd8c2("<div class=\"tracks-view\">");
const Na = () => {
  const {
    racingState: _0x5e90ba,
    setPage: _0x45fc64,
    setRacingState: _0xeb0a13
  } = A();
  const _0x3c56d7 = [{
    accessorKey: "name",
    header: "Track Name"
  }, {
    accessorKey: "type",
    header: "Track Type"
  }, {
    accessorFn: _0x72e473 => Number(_0x72e473.length / 1000 * 0.715).toFixed(2) + "mi",
    header: "Track Distance"
  }, {
    accessorFn: _0x541324 => new Date(_0x541324.createdAt * 1000).toLocaleDateString(),
    header: "Date Created"
  }, {
    cell: _0x2967bc => (() => {
      const _0x1fb3dc = Pa();
      _0x13fff3(_0x1fb3dc, _0x2fc05a(E, {
        label: "Create",
        onClick: () => _0x22298f(_0x2967bc.row.original)
      }), null);
      _0x13fff3(_0x1fb3dc, _0x2fc05a(E, {
        label: "Leaderboard",
        onClick: () => _0x14e1ec(_0x2967bc.row.original)
      }), null);
      return _0x1fb3dc;
    })(),
    header: "‎"
  }];
  const _0x22298f = _0x512045 => {
    _0xeb0a13({
      selectedTrack: _0x512045
    });
    _0x45fc64("create-race");
  };
  const _0x14e1ec = _0x3602df => {
    _0xeb0a13({
      selectedTrack: _0x3602df
    });
    _0x45fc64("race-leaderboard");
  };
  return (() => {
    const _0x17508f = Da();
    _0x13fff3(_0x17508f, _0x2fc05a(Z, {
      title: "List of",
      subTitle: "Racing Tracks"
    }), null);
    _0x13fff3(_0x17508f, _0x2fc05a(_0x5a6203, {
      get rows() {
        return _0x5e90ba.raceTracks;
      },
      columns: _0x3c56d7,
      sortable: true
    }), null);
    return _0x17508f;
  })();
};
const Ea = _0x3bd8c2("<div class=\"race-actions\">");
const Va = _0x3bd8c2("<div class=\"race-info-view\"><div class=\"race-info-header\"><div class=\"race-actions\"></div></div><div class=\"info-container\"></div><div class=\"drivers-container\">");
const Ha = _0x3bd8c2("<div class=\"info-item\"><label></label><h1>");
const Ua = () => {
  const {
    racingState: _0x4114be
  } = A();
  const _0x23db1 = _0x482a41();
  const _0x4d67da = _0x220183(() => _0xbc81ad()?.cid === _0x4114be.selectedRaceInfo?.owner);
  const _0x63deff = _0x220183(() => _0x4114be.selectedRaceInfo ? _0x4114be.selectedRaceInfo.viewType === "pending" : false);
  const _0x3661aa = _0x220183(() => _0x4114be.selectedRaceInfo ? _0x4114be.selectedRaceInfo.viewType === "active" : false);
  const _0x332eea = _0x220183(() => {
    if (!_0x4114be.selectedRaceInfo) {
      return false;
    }
    const _0x33b233 = Object.values(_0x4114be.selectedRaceInfo.players);
    return Ue(_0x33b233);
  });
  const _0x200fae = _0x220183(() => {
    if (!_0x4114be.selectedRaceInfo) {
      return false;
    }
    const _0x340c2f = Object.values(_0x4114be.selectedRaceInfo.players);
    return !_0x4114be.selectedRaceInfo.password || Ue(_0x340c2f);
  });
  const _0x34a94a = () => {
    const _0x958615 = [{
      accessorKey: "alias",
      header: "Alias"
    }];
    if (_0x4d67da() && _0x63deff()) {
      _0x958615.push({
        cell: _0x375a24 => {
          if (_0x375a24.row.original.characterId !== _0xbc81ad()?.cid) {
            return (() => {
              const _0x3c47c5 = Ea();
              _0x13fff3(_0x3c47c5, _0x2fc05a(E, {
                label: "Kick",
                onClick: () => _0x23db1 && Bt(_0x23db1, _0x375a24.row.original, _0x4114be.selectedRaceInfo?.eventId ?? "")
              }), null);
              _0x13fff3(_0x3c47c5, _0x2fc05a(E, {
                label: "Ban",
                onClick: () => _0x23db1 && Lt(_0x23db1, _0x375a24.row.original, _0x4114be.selectedRaceInfo?.eventId ?? "")
              }), null);
              return _0x3c47c5;
            })();
          }
        },
        header: "Actions"
      });
    }
    return _0x958615;
  };
  return _0x2fc05a(_0x413877, {
    get when() {
      return _0x4114be?.selectedRaceInfo;
    },
    children: _0x12199a => (() => {
      const _0x37132b = Va();
      const _0x5b259f = _0x37132b.firstChild;
      const _0xfc9ec3 = _0x5b259f.firstChild;
      const _0x1e42c3 = _0x5b259f.nextSibling;
      const _0x31e62c = _0x1e42c3.nextSibling;
      _0x13fff3(_0x5b259f, _0x2fc05a(Z, {
        title: "Viewing",
        get subTitle() {
          return _0x12199a().name + " (" + _0x12199a().type + ")";
        }
      }), _0xfc9ec3);
      _0x13fff3(_0xfc9ec3, _0x2fc05a(_0x413877, {
        get when() {
          return _0x220183(() => !!_0x63deff())() && _0x200fae();
        },
        get children() {
          return _0x2fc05a(E, {
            label: "Set GPS",
            onClick: () => Mt(_0x12199a())
          });
        }
      }), null);
      _0x13fff3(_0xfc9ec3, _0x2fc05a(_0x413877, {
        get when() {
          return _0x220183(() => !!_0x63deff() && !!_0x200fae())() && _0x12199a().id !== "random";
        },
        get children() {
          return _0x2fc05a(E, {
            label: "Preview",
            onClick: () => Pt(_0x12199a())
          });
        }
      }), null);
      _0x13fff3(_0xfc9ec3, _0x2fc05a(_0x413877, {
        get when() {
          return _0x220183(() => !!_0x63deff() && !!!_0x332eea())() && !_0x4d67da();
        },
        get children() {
          return _0x2fc05a(E, {
            label: "Join Race",
            onClick: () => zt(_0x12199a(), _0x4114be.racingAlias, _0x23db1)
          });
        }
      }), null);
      _0x13fff3(_0xfc9ec3, _0x2fc05a(_0x413877, {
        get when() {
          return _0x220183(() => !!_0x63deff())() && _0x4d67da();
        },
        get children() {
          return _0x2fc05a(E, {
            label: "Start Race",
            onClick: () => _0x23db1 && Dt(_0x23db1, _0x12199a())
          });
        }
      }), null);
      _0x13fff3(_0xfc9ec3, _0x2fc05a(_0x413877, {
        get when() {
          return _0x220183(() => !!_0x332eea())() && (_0x3661aa() || _0x63deff() && !_0x4d67da());
        },
        get children() {
          return _0x2fc05a(E, {
            label: "Leave Race",
            onClick: () => _0x23db1 && Et(_0x23db1, _0x12199a())
          });
        }
      }), null);
      _0x13fff3(_0xfc9ec3, _0x2fc05a(_0x413877, {
        get when() {
          return _0x220183(() => !!_0x3661aa() || !!_0x63deff())() && _0x4d67da();
        },
        get children() {
          return _0x2fc05a(E, {
            label: "End Race",
            onClick: () => _0x23db1 && Nt(_0x23db1, _0x12199a())
          });
        }
      }), null);
      _0x13fff3(_0x1e42c3, _0x2fc05a(ve, {
        label: "Track",
        get value() {
          return _0x12199a().name;
        }
      }), null);
      _0x13fff3(_0x1e42c3, _0x2fc05a(ve, {
        label: "Type",
        get value() {
          return _0x12199a().type;
        }
      }), null);
      _0x13fff3(_0x1e42c3, _0x2fc05a(ve, {
        label: "Buy In",
        get value() {
          return "$" + _0x12199a().buyIn;
        }
      }), null);
      _0x13fff3(_0x1e42c3, _0x2fc05a(ve, {
        label: "Vehicle Class",
        get value() {
          return _0x12199a().vehicleClass;
        }
      }), null);
      _0x13fff3(_0x1e42c3, _0x2fc05a(ve, {
        label: "Distance",
        get value() {
          return Oe(_0x12199a().length);
        }
      }), null);
      _0x13fff3(_0x1e42c3, _0x2fc05a(_0x413877, {
        get when() {
          return _0x12199a().type === "Lap";
        },
        get children() {
          return _0x2fc05a(ve, {
            label: "Laps",
            get value() {
              return String(_0x12199a().laps);
            }
          });
        }
      }), null);
      _0x13fff3(_0x31e62c, _0x2fc05a(Z, {
        title: "List of",
        subTitle: "Drivers"
      }), null);
      _0x13fff3(_0x31e62c, _0x2fc05a(_0x5a6203, {
        get rows() {
          return Object.values(_0x12199a().players);
        },
        get columns() {
          return _0x34a94a();
        }
      }), null);
      return _0x37132b;
    })()
  });
};
const ve = _0xc596f2 => (() => {
  const _0x5b62e8 = Ha();
  const _0x21fbc3 = _0x5b62e8.firstChild;
  const _0x517f77 = _0x21fbc3.nextSibling;
  _0x13fff3(_0x21fbc3, () => _0xc596f2.label);
  _0x13fff3(_0x517f77, () => _0xc596f2.value);
  return _0x5b62e8;
})();
const qa = "_container_pa0sv_1";
const Fa = "_header_pa0sv_8";
const ja = "_select_pa0sv_13";
const Ja = "_label_pa0sv_25";
const Ka = "_icon_container_pa0sv_34";
const Qa = "_list_pa0sv_45";
const Wa = "_item_pa0sv_55";
const qe = {
  container: qa,
  header: Fa,
  select: ja,
  label: Ja,
  icon_container: Ka,
  list: Qa,
  item: Wa
};
const Ya = "_select_kca0y_1";
const Za = "_label_kca0y_13";
const Xa = "_icon_container_kca0y_22";
const en = "_list_kca0y_33";
const tn = "_item_kca0y_43";
const pe = {
  select: Ya,
  label: Za,
  icon_container: Xa,
  list: en,
  item: tn
};
const an = _0x3bd8c2("<ul>");
const nn = _0x3bd8c2("<div><h1></h1><div>");
const sn = _0x3bd8c2("<li>");
const rn = _0x3e004a => {
  const [_0x563865, _0x28a4f0] = _0x4e5f13(false);
  const _0x643f5c = _0x12f18e => {
    _0x3e004a.onChange(_0x12f18e);
    _0x28a4f0(false);
  };
  const _0x3992ff = _0x220183(() => _0x3e004a.items.find(_0x456c79 => _0x456c79.value === _0x3e004a.value)?.label ?? "Vehicle Class");
  return (() => {
    const _0x224251 = nn();
    const _0x525c21 = _0x224251.firstChild;
    const _0x144eed = _0x525c21.nextSibling;
    _0x224251.$$click = () => _0x28a4f0(_0x4ad847 => !_0x4ad847);
    _0x13fff3(_0x525c21, _0x3992ff);
    _0x13fff3(_0x144eed, _0x2fc05a(_0x351197, {
      get icon() {
        if (_0x563865()) {
          return _0xfd6b45;
        } else {
          return _0x21e3ac;
        }
      }
    }));
    _0x13fff3(_0x224251, _0x2fc05a(_0x413877, {
      get when() {
        return _0x563865();
      },
      get children() {
        const _0x5a8793 = an();
        _0x13fff3(_0x5a8793, _0x2fc05a(_0x23cf45, {
          get each() {
            return _0x3e004a.items;
          },
          children: _0x42d694 => (() => {
            const _0x2deb5a = sn();
            _0x2deb5a.$$click = () => _0x643f5c(_0x42d694.value);
            _0x13fff3(_0x2deb5a, () => _0x42d694.label);
            _0x374ddc(() => _0x13026e(_0x2deb5a, pe.item));
            return _0x2deb5a;
          })()
        }));
        _0x374ddc(() => _0x13026e(_0x5a8793, pe.list));
        return _0x5a8793;
      }
    }), null);
    _0x374ddc(_0x1bb770 => {
      const _0x381f8c = pe.select;
      const _0x2f8ca8 = pe.label;
      const _0x2d6c09 = pe.icon_container;
      if (_0x381f8c !== _0x1bb770._v$) {
        _0x13026e(_0x224251, _0x1bb770._v$ = _0x381f8c);
      }
      if (_0x2f8ca8 !== _0x1bb770._v$2) {
        _0x13026e(_0x525c21, _0x1bb770._v$2 = _0x2f8ca8);
      }
      if (_0x2d6c09 !== _0x1bb770._v$3) {
        _0x13026e(_0x144eed, _0x1bb770._v$3 = _0x2d6c09);
      }
      return _0x1bb770;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined
    });
    return _0x224251;
  })();
};
_0x11032e(["click"]);
const on = _0x3bd8c2("<div><div>");
const ln = () => {
  const {
    racingState: _0x204852
  } = A();
  const [_0x4c1a9a, _0x5344e9] = _0x4e5f13([]);
  const _0x571d6b = async _0x1cafcc => {
    if (!_0x204852.selectedTrack) {
      return;
    }
    const _0x3572f9 = await y("np-ui:racingBestLapTimes", {
      id: _0x204852.selectedTrack.id,
      alias: _0x204852.racingAlias,
      vehicleClass: _0x1cafcc
    });
    if (_0x3572f9.meta.ok) {
      _0x5344e9(_0x3572f9.data);
    }
  };
  const _0xb617a = [{
    accessorKey: "place",
    header: "Place"
  }, {
    accessorKey: "alias",
    header: "Alias"
  }, {
    accessorKey: "vehicle",
    header: "Vehicle"
  }, {
    accessorKey: "totalTime",
    header: "Total Time"
  }, {
    accessorKey: "bestLapTime",
    header: "Best Lap",
    accessorFn: _0x25a374 => we(_0x25a374.bestLapTime)
  }];
  const [_0x41e473, _0x472ec0] = _0x4e5f13("All");
  const _0x15a230 = _0x278880 => {
    _0x472ec0(_0x278880);
    _0x571d6b(_0x278880);
  };
  _0x3b7568(() => {
    _0x571d6b(_0x41e473());
  });
  return _0x2fc05a(_0x413877, {
    get when() {
      return _0x204852?.selectedTrack;
    },
    children: _0x552e02 => (() => {
      const _0x44f52d = on();
      const _0x27e7ab = _0x44f52d.firstChild;
      _0x13fff3(_0x27e7ab, _0x2fc05a(Z, {
        title: "Current",
        get subTitle() {
          return _0x552e02().name + " Leaderboard";
        }
      }), null);
      _0x13fff3(_0x27e7ab, _0x2fc05a(rn, {
        get value() {
          return _0x41e473();
        },
        items: [{
          value: "All",
          label: "All"
        }, {
          value: "M",
          label: "M"
        }, {
          value: "X",
          label: "X"
        }, {
          value: "S",
          label: "S"
        }, {
          value: "A",
          label: "A"
        }, {
          value: "B",
          label: "B"
        }],
        onChange: _0x51451b => _0x15a230(_0x51451b)
      }), null);
      _0x13fff3(_0x44f52d, _0x2fc05a(_0x5a6203, {
        columns: _0xb617a,
        get rows() {
          return _0x4c1a9a();
        }
      }), null);
      _0x374ddc(_0x4b5e7a => {
        const _0x33b597 = qe.container;
        const _0xdecb26 = qe.header;
        if (_0x33b597 !== _0x4b5e7a._v$) {
          _0x13026e(_0x44f52d, _0x4b5e7a._v$ = _0x33b597);
        }
        if (_0xdecb26 !== _0x4b5e7a._v$2) {
          _0x13026e(_0x27e7ab, _0x4b5e7a._v$2 = _0xdecb26);
        }
        return _0x4b5e7a;
      }, {
        _v$: undefined,
        _v$2: undefined
      });
      return _0x44f52d;
    })()
  });
};
const cn = "_container_1hpw7_1";
const dn = "_icon_container_1hpw7_16";
const un = "_icon_1hpw7_16";
const vn = "_iconBG_1hpw7_29";
const gn = "_label_container_1hpw7_36";
const _n = "_splitter_1hpw7_41";
const mn = "_label_1hpw7_36";
const pn = "_disabled_1hpw7_64";
const re = {
  container: cn,
  icon_container: dn,
  icon: un,
  iconBG: vn,
  label_container: gn,
  splitter: _n,
  label: mn,
  disabled: pn
};
const hn = _0x3bd8c2("<div><div></div><div><h1>///</h1><h1>");
const Fe = _0xc18ada => (() => {
  const _0x150ef5 = hn();
  const _0x5dfa32 = _0x150ef5.firstChild;
  const _0x3d0d30 = _0x5dfa32.nextSibling;
  const _0x2e84fb = _0x3d0d30.firstChild;
  const _0x272ec5 = _0x2e84fb.nextSibling;
  _0x59db94(_0x150ef5, "click", _0xc18ada.onClick, true);
  _0x13fff3(_0x5dfa32, _0x2fc05a(_0x351197, {
    get class() {
      return re.icon;
    },
    get icon() {
      return _0xc18ada.icon;
    }
  }), null);
  _0x13fff3(_0x5dfa32, _0x2fc05a(_0x351197, {
    get class() {
      return re.iconBG;
    },
    get icon() {
      return _0xc18ada.icon;
    }
  }), null);
  _0x13fff3(_0x272ec5, () => _0xc18ada.label);
  _0x374ddc(_0xab16c0 => {
    const _0x5610ea = re.container;
    const _0x3e1919 = {
      [re.disabled]: _0xc18ada.disabled
    };
    const _0x194096 = re.icon_container;
    const _0x4bad83 = re.label_container;
    const _0x19c7d5 = re.splitter;
    const _0x3e59e4 = re.label;
    if (_0x5610ea !== _0xab16c0._v$) {
      _0x13026e(_0x150ef5, _0xab16c0._v$ = _0x5610ea);
    }
    _0xab16c0._v$2 = _0x1db29b(_0x150ef5, _0x3e1919, _0xab16c0._v$2);
    if (_0x194096 !== _0xab16c0._v$3) {
      _0x13026e(_0x5dfa32, _0xab16c0._v$3 = _0x194096);
    }
    if (_0x4bad83 !== _0xab16c0._v$4) {
      _0x13026e(_0x3d0d30, _0xab16c0._v$4 = _0x4bad83);
    }
    if (_0x19c7d5 !== _0xab16c0._v$5) {
      _0x13026e(_0x2e84fb, _0xab16c0._v$5 = _0x19c7d5);
    }
    if (_0x3e59e4 !== _0xab16c0._v$6) {
      _0x13026e(_0x272ec5, _0xab16c0._v$6 = _0x3e59e4);
    }
    return _0xab16c0;
  }, {
    _v$: undefined,
    _v$2: undefined,
    _v$3: undefined,
    _v$4: undefined,
    _v$5: undefined,
    _v$6: undefined
  });
  return _0x150ef5;
})();
_0x11032e(["click"]);
const fn = "_container_1eoei_1";
const bn = "_active_1eoei_10";
const $n = "_confirmation_1eoei_14";
const An = "_fadeIn_1eoei_1";
const kn = "_info_1eoei_30";
const Cn = "_actions_1eoei_52";
const Sn = "_cta_1eoei_58";
const Tn = "_red_1eoei_71";
const yn = "_vehicle_class_1eoei_82";
const wn = "_mainBox_1eoei_89";
const Gn = "_label_1eoei_111";
const On = "_box_1eoei_120";
const xn = "_hovering_1eoei_1";
const Rn = "_values_1eoei_161";
const zn = "_value_container_1eoei_166";
const In = "_icon_1eoei_178";
const Bn = "_value_1eoei_161";
const Ln = "_btn_1eoei_209";
const T = {
  container: fn,
  active: bn,
  confirmation: $n,
  fadeIn: An,
  info: kn,
  actions: Cn,
  cta: Sn,
  red: Tn,
  vehicle_class: yn,
  mainBox: wn,
  label: Gn,
  box: On,
  hovering: xn,
  values: Rn,
  value_container: zn,
  icon: In,
  value: Bn,
  btn: Ln
};
const Mn = _0x3bd8c2("<div><div><h1>Select Type</h1><p>If you choose to vin scratch it will cost an additional <!> GNE</p></div><div><button>Normal Dropoff</button><button>Vin Scratch</button><button>Cancel");
const Pn = _0x3bd8c2("<button>Start Contract");
const Dn = _0x3bd8c2("<div><div><div><h1></h1><div></div><div></div><div></div><div></div></div></div><div><div></div><div><button>");
const Nn = _0x3bd8c2("<div><div><p></p></div><div><p>");
const En = _0x1a2feb => {
  const {
    setConfirmModalInfo: _0x3e2459
  } = A();
  const [_0x319e79, _0x38f6a6] = _0x4e5f13(false);
  const _0x465ea2 = _0x482a41();
  const _0x5b9646 = () => {
    if (!_0x465ea2) {
      return;
    }
    if (["D", "C", "B", "A", "A+", "S+", "S++"].includes(_0x1a2feb.info.contractVehicleClass)) {
      _0x38f6a6(true);
    } else {
      _0x40cd6f("normal");
    }
  };
  const _0x40cd6f = _0xf69698 => _0x465ea2 && Yt(_0x465ea2, _0x1a2feb.info.uuid, _0x1a2feb.info.contractBuyIn, _0xf69698);
  const _0x4d09d4 = _0x32c963 => {
    if (_0x465ea2) {
      _0x3e2459({
        onConfirm: () => _0x32c963 === "disband" ? Zt(_0x465ea2, _0x1a2feb.info.uuid) : Xt(_0x465ea2),
        onCancel: () => ({}),
        message: "Are you sure you want to " + (_0x32c963 === "disband" ? "decline" : "cancel") + " this contract?"
      });
    }
  };
  const _0x465f4b = _0x500ac7 => {
    const _0x254293 = _0x500ac7 - Date.now();
    const _0x527b2d = Math.floor(_0x254293 / 1000 / 3600 % 24);
    const _0x188bd4 = Math.floor(_0x254293 / 60000 % 60);
    const _0x3736a7 = _0x527b2d < 10 ? "0" + _0x527b2d + " Hours" : _0x527b2d + " Hours";
    const _0x298232 = _0x188bd4 < 10 ? "0" + _0x188bd4 + " Min" : _0x188bd4 + " Min";
    return _0x3736a7 + ", " + _0x298232;
  };
  return (() => {
    const _0x370cc6 = Dn();
    const _0x2d74e4 = _0x370cc6.firstChild;
    const _0x1aee95 = _0x2d74e4.firstChild;
    const _0x15db0e = _0x1aee95.firstChild;
    const _0x4ab669 = _0x15db0e.nextSibling;
    const _0x265457 = _0x4ab669.nextSibling;
    const _0x3b07f2 = _0x265457.nextSibling;
    const _0x4d87f9 = _0x3b07f2.nextSibling;
    const _0x5666c1 = _0x2d74e4.nextSibling;
    const _0x1ccfc9 = _0x5666c1.firstChild;
    const _0x3e874e = _0x1ccfc9.nextSibling;
    const _0x4b1db7 = _0x3e874e.firstChild;
    _0x370cc6.$$click = () => _0x1a2feb.onClick(_0x1a2feb.info);
    _0x13fff3(_0x370cc6, _0x2fc05a(_0x413877, {
      get when() {
        return _0x319e79();
      },
      get children() {
        const _0x2c8695 = Mn();
        const _0x53be22 = _0x2c8695.firstChild;
        const _0x4b7b97 = _0x53be22.firstChild;
        const _0x34888f = _0x4b7b97.nextSibling;
        const _0x443e7e = _0x34888f.firstChild;
        const _0xcdd261 = _0x443e7e.nextSibling;
        _0xcdd261.nextSibling;
        const _0x220057 = _0x53be22.nextSibling;
        const _0x452b47 = _0x220057.firstChild;
        const _0x1ccfbd = _0x452b47.nextSibling;
        const _0x1a8d15 = _0x1ccfbd.nextSibling;
        _0x13fff3(_0x34888f, () => _0x1a2feb.info.contractVehicleInfo.gnePurchaseCost, _0xcdd261);
        _0x452b47.$$click = () => _0x40cd6f("normal");
        _0x1ccfbd.$$click = () => _0x40cd6f("vinScratch");
        _0x1a8d15.$$click = () => _0x38f6a6(false);
        _0x374ddc(_0x2025c4 => {
          const _0x3cca9d = T.confirmation;
          const _0x4bb68a = T.info;
          const _0x2a99dc = T.actions;
          const _0x216181 = T.cta;
          const _0x59b84c = T.cta;
          const _0x3abfba = T.cta + " " + T.red;
          if (_0x3cca9d !== _0x2025c4._v$) {
            _0x13026e(_0x2c8695, _0x2025c4._v$ = _0x3cca9d);
          }
          if (_0x4bb68a !== _0x2025c4._v$2) {
            _0x13026e(_0x53be22, _0x2025c4._v$2 = _0x4bb68a);
          }
          if (_0x2a99dc !== _0x2025c4._v$3) {
            _0x13026e(_0x220057, _0x2025c4._v$3 = _0x2a99dc);
          }
          if (_0x216181 !== _0x2025c4._v$4) {
            _0x13026e(_0x452b47, _0x2025c4._v$4 = _0x216181);
          }
          if (_0x59b84c !== _0x2025c4._v$5) {
            _0x13026e(_0x1ccfbd, _0x2025c4._v$5 = _0x59b84c);
          }
          if (_0x3abfba !== _0x2025c4._v$6) {
            _0x13026e(_0x1a8d15, _0x2025c4._v$6 = _0x3abfba);
          }
          return _0x2025c4;
        }, {
          _v$: undefined,
          _v$2: undefined,
          _v$3: undefined,
          _v$4: undefined,
          _v$5: undefined,
          _v$6: undefined
        });
        return _0x2c8695;
      }
    }), _0x2d74e4);
    _0x13fff3(_0x15db0e, () => _0x1a2feb.info.contractVehicleClass);
    _0x13fff3(_0x1ccfc9, _0x2fc05a(ke, {
      icon: _0x35e9cd,
      label: "Expires in",
      get value() {
        return _0x465f4b(_0x1a2feb.info.expiresAt);
      }
    }), null);
    _0x13fff3(_0x1ccfc9, _0x2fc05a(ke, {
      icon: _0x42b1e2,
      label: "Buy In",
      get value() {
        return _0x1a2feb.info.contractBuyIn + " GNE";
      }
    }), null);
    _0x13fff3(_0x1ccfc9, _0x2fc05a(ke, {
      icon: _0x3a0675,
      label: "Vehicle",
      get value() {
        return _0x1a2feb.info.contractVehicleInfo.name ?? "Unknown";
      }
    }), null);
    _0x13fff3(_0x1ccfc9, _0x2fc05a(_0x413877, {
      get when() {
        return _0x1a2feb.info.vehiclePlate;
      },
      children: _0x24332c => _0x2fc05a(ke, {
        icon: _0x4de40a,
        label: "Plate",
        get value() {
          return _0x24332c();
        }
      })
    }), null);
    _0x13fff3(_0x3e874e, _0x2fc05a(_0x413877, {
      get when() {
        return !_0x1a2feb.info.contractActive;
      },
      get children() {
        const _0x578d63 = Pn();
        _0x578d63.$$click = _0x5b9646;
        _0x374ddc(() => _0x13026e(_0x578d63, T.btn));
        return _0x578d63;
      }
    }), _0x4b1db7);
    _0x4b1db7.$$click = () => _0x4d09d4(_0x1a2feb.info.contractActive ? "cancel" : "disband");
    _0x13fff3(_0x4b1db7, () => _0x1a2feb.info.contractActive ? "Cancel Contract" : "Decline Contract");
    _0x374ddc(_0x405beb => {
      const _0x16f4a5 = T.container;
      const _0x42eb73 = {
        [T.active]: _0x1a2feb.active
      };
      const _0x15f0aa = T.vehicle_class;
      const _0x2a682f = T.mainBox;
      const _0x85749f = T.label;
      const _0x22ae6e = T.box;
      const _0x2e2167 = T.box;
      const _0x4d2ce1 = T.box;
      const _0xc7ba91 = T.box;
      const _0x41c583 = T.info;
      const _0x5280c5 = T.values;
      const _0x177c2c = T.actions;
      const _0x3070ac = T.btn + " " + T.red;
      if (_0x16f4a5 !== _0x405beb._v$7) {
        _0x13026e(_0x370cc6, _0x405beb._v$7 = _0x16f4a5);
      }
      _0x405beb._v$8 = _0x1db29b(_0x370cc6, _0x42eb73, _0x405beb._v$8);
      if (_0x15f0aa !== _0x405beb._v$9) {
        _0x13026e(_0x2d74e4, _0x405beb._v$9 = _0x15f0aa);
      }
      if (_0x2a682f !== _0x405beb._v$10) {
        _0x13026e(_0x1aee95, _0x405beb._v$10 = _0x2a682f);
      }
      if (_0x85749f !== _0x405beb._v$11) {
        _0x13026e(_0x15db0e, _0x405beb._v$11 = _0x85749f);
      }
      if (_0x22ae6e !== _0x405beb._v$12) {
        _0x13026e(_0x4ab669, _0x405beb._v$12 = _0x22ae6e);
      }
      if (_0x2e2167 !== _0x405beb._v$13) {
        _0x13026e(_0x265457, _0x405beb._v$13 = _0x2e2167);
      }
      if (_0x4d2ce1 !== _0x405beb._v$14) {
        _0x13026e(_0x3b07f2, _0x405beb._v$14 = _0x4d2ce1);
      }
      if (_0xc7ba91 !== _0x405beb._v$15) {
        _0x13026e(_0x4d87f9, _0x405beb._v$15 = _0xc7ba91);
      }
      if (_0x41c583 !== _0x405beb._v$16) {
        _0x13026e(_0x5666c1, _0x405beb._v$16 = _0x41c583);
      }
      if (_0x5280c5 !== _0x405beb._v$17) {
        _0x13026e(_0x1ccfc9, _0x405beb._v$17 = _0x5280c5);
      }
      if (_0x177c2c !== _0x405beb._v$18) {
        _0x13026e(_0x3e874e, _0x405beb._v$18 = _0x177c2c);
      }
      if (_0x3070ac !== _0x405beb._v$19) {
        _0x13026e(_0x4b1db7, _0x405beb._v$19 = _0x3070ac);
      }
      return _0x405beb;
    }, {
      _v$7: undefined,
      _v$8: undefined,
      _v$9: undefined,
      _v$10: undefined,
      _v$11: undefined,
      _v$12: undefined,
      _v$13: undefined,
      _v$14: undefined,
      _v$15: undefined,
      _v$16: undefined,
      _v$17: undefined,
      _v$18: undefined,
      _v$19: undefined
    });
    return _0x370cc6;
  })();
};
const ke = _0x124da9 => (() => {
  const _0x2f3af = Nn();
  const _0x11b881 = _0x2f3af.firstChild;
  const _0x483924 = _0x11b881.firstChild;
  const _0x2bcb7a = _0x11b881.nextSibling;
  const _0x4498ec = _0x2bcb7a.firstChild;
  _0x13fff3(_0x11b881, _0x2fc05a(_0x351197, {
    get icon() {
      return _0x124da9.icon;
    },
    get class() {
      return T.icon;
    }
  }), _0x483924);
  _0x13fff3(_0x483924, () => _0x124da9.label);
  _0x13fff3(_0x4498ec, () => _0x124da9.value);
  _0x374ddc(_0x4410d5 => {
    const _0x8ae3b0 = T.value_container;
    const _0x3e7c68 = T.label;
    const _0x228dc0 = T.value;
    if (_0x8ae3b0 !== _0x4410d5._v$20) {
      _0x13026e(_0x2f3af, _0x4410d5._v$20 = _0x8ae3b0);
    }
    if (_0x3e7c68 !== _0x4410d5._v$21) {
      _0x13026e(_0x11b881, _0x4410d5._v$21 = _0x3e7c68);
    }
    if (_0x228dc0 !== _0x4410d5._v$22) {
      _0x13026e(_0x2bcb7a, _0x4410d5._v$22 = _0x228dc0);
    }
    return _0x4410d5;
  }, {
    _v$20: undefined,
    _v$21: undefined,
    _v$22: undefined
  });
  return _0x2f3af;
})();
_0x11032e(["click"]);
const Vn = "_container_5sldb_1";
const Hn = "_contracts_list_5sldb_8";
const Un = "_contract_actions_5sldb_14";
const qn = "_empty_5sldb_19";
const Fn = "_empty_container_5sldb_28";
const he = {
  container: Vn,
  contracts_list: Hn,
  contract_actions: Un,
  empty: qn,
  empty_container: Fn
};
const jn = _0x3bd8c2("<div>No pending contracts..");
const ye = _0x3bd8c2("<div>");
const Jn = () => {
  const _0x523393 = _0x482a41();
  const {
    setBoostingState: _0x349272,
    boostingState: _0xf8f9c2
  } = A();
  const _0x34fa7a = _0x5cd1d5 => {
    _0x349272({
      selectedContract: _0x5cd1d5
    });
  };
  _0x3b7568(async () => {
    if (_0x523393) {
      await Ge(_0x523393);
    }
  });
  const _0x3f6eb6 = _0x220183(() => _0xf8f9c2.selectedContract ? _0xf8f9c2.selectedContract.contractActive : true);
  const _0x1071b6 = _0x220183(() => _0xf8f9c2.contracts.length <= 0);
  return (() => {
    const _0x59bba2 = ye();
    _0x13fff3(_0x59bba2, _0x2fc05a(_0x413877, {
      get when() {
        return _0x1071b6();
      },
      get children() {
        const _0x52925f = jn();
        _0x374ddc(() => _0x13026e(_0x52925f, he.empty));
        return _0x52925f;
      }
    }), null);
    _0x13fff3(_0x59bba2, _0x2fc05a(_0x413877, {
      get when() {
        return !_0x1071b6();
      },
      get children() {
        return [(() => {
          const _0x3769a5 = ye();
          _0x13fff3(_0x3769a5, _0x2fc05a(_0x23cf45, {
            get each() {
              return _0xf8f9c2.contracts;
            },
            children: _0xc28057 => _0x2fc05a(En, {
              info: _0xc28057,
              onClick: _0x34fa7a,
              get active() {
                return _0xc28057.uuid === _0xf8f9c2?.selectedContract?.uuid;
              }
            })
          }));
          _0x374ddc(() => _0x13026e(_0x3769a5, he.contracts_list));
          return _0x3769a5;
        })(), (() => {
          const _0x209fe2 = ye();
          _0x13fff3(_0x209fe2, _0x2fc05a(Fe, {
            icon: _0x1e58e2,
            label: "Transfer Contract",
            get disabled() {
              return _0x3f6eb6();
            },
            onClick: () => _0x523393 && ea(_0x523393, _0xf8f9c2.selectedContract?.uuid)
          }), null);
          _0x13fff3(_0x209fe2, _0x2fc05a(Fe, {
            icon: _0x126ffd,
            label: "Auction Contract",
            get disabled() {
              return _0x3f6eb6();
            },
            onClick: () => _0x523393 && ta(_0x523393, _0xf8f9c2.selectedContract?.uuid)
          }), null);
          _0x374ddc(() => _0x13026e(_0x209fe2, he.contract_actions));
          return _0x209fe2;
        })()];
      }
    }), null);
    _0x374ddc(_0x2ee59b => _0x1db29b(_0x59bba2, {
      [he.container]: true,
      [he.empty_container]: _0x1071b6()
    }, _0x2ee59b));
    return _0x59bba2;
  })();
};
const Kn = "data:image/png;base64,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";
const Qn = "_container_1rgre_1";
const Wn = "_content_1rgre_8";
const Yn = "_heading_1rgre_12";
const Zn = "_empty_container_1rgre_16";
const Xn = "_empty_1rgre_16";
const es = "_timer_1rgre_31";
const ts = "_seller_1rgre_38";
const as = "_crownIcon_1rgre_41";
const ns = "_bounce_1rgre_1";
const oe = {
  container: Qn,
  content: Wn,
  heading: Yn,
  empty_container: Zn,
  empty: Xn,
  timer: es,
  seller: ts,
  crownIcon: as,
  bounce: ns
};
const ss = _0x3bd8c2("<img alt=\"Top Bidder Crown\">");
const st = _0x3bd8c2("<span>");
const rs = _0x3bd8c2("<div>No auctioned contracts..");
const is = _0x3bd8c2("<div><div></div><div>");
const os = () => {
  const _0x5dbc8c = _0x482a41();
  const {
    boostingState: _0x596301
  } = A();
  const _0x488c55 = _0x220183(() => [{
    accessorKey: "sellerAlias",
    header: "Seller",
    cell: ({
      row: _0x3fef20
    }) => (() => {
      const _0x59846a = st();
      _0x13fff3(_0x59846a, _0x2fc05a(_0x413877, {
        get when() {
          return _0x3fef20.original.topBidderId === _0xbc81ad()?.cid;
        },
        get children() {
          const _0x537b58 = ss();
          _0x14a359(_0x537b58, "src", Kn);
          _0x374ddc(() => _0x13026e(_0x537b58, oe.crownIcon));
          return _0x537b58;
        }
      }), null);
      _0x13fff3(_0x59846a, () => _0x3fef20.original.sellerAlias, null);
      _0x374ddc(() => _0x13026e(_0x59846a, oe.seller));
      return _0x59846a;
    })()
  }, {
    accessorKey: "vehicleClass",
    header: "Class"
  }, {
    accessorKey: "vehicleModel",
    header: "Vehicle"
  }, {
    header: "Current Bid",
    accessorFn: _0x2f6370 => _0x2f6370.currentBid + " GNE"
  }, {
    header: "Ends In",
    cell: ({
      row: _0xbf5df
    }) => _0x2fc05a(ls, {
      get time() {
        return _0xbf5df.original.endsAt;
      }
    })
  }, {
    cell: ({
      row: _0x51f2c8
    }) => _0x2fc05a(E, {
      label: "Bid",
      onClick: () => _0x5dbc8c && aa(_0x5dbc8c, _0x51f2c8.original.id)
    }),
    header: "Ends In"
  }]);
  const _0x4925cb = _0x220183(() => _0x596301.auctionContracts.length <= 0);
  _0x3b7568(() => {
    if (_0x5dbc8c) {
      at(_0x5dbc8c);
    }
  });
  return (() => {
    const _0x36bfa2 = is();
    const _0x5caf96 = _0x36bfa2.firstChild;
    const _0x2efe3d = _0x5caf96.nextSibling;
    _0x13fff3(_0x5caf96, _0x2fc05a(Z, {
      title: "List of",
      subTitle: "Auction",
      gavelIcon: true
    }));
    _0x13fff3(_0x2efe3d, _0x2fc05a(_0x413877, {
      get when() {
        return _0x4925cb();
      },
      get children() {
        const _0x48f642 = rs();
        _0x374ddc(() => _0x13026e(_0x48f642, oe.empty));
        return _0x48f642;
      }
    }), null);
    _0x13fff3(_0x2efe3d, _0x2fc05a(_0x413877, {
      get when() {
        return !_0x4925cb();
      },
      get children() {
        return _0x2fc05a(_0x5a6203, {
          get rows() {
            return _0x596301.auctionContracts;
          },
          get columns() {
            return _0x488c55();
          },
          sortable: true
        });
      }
    }), null);
    _0x374ddc(_0x5ee454 => {
      const _0x18c8df = oe.container;
      const _0x337f54 = oe.heading;
      const _0x39ea54 = {
        [oe.content]: true,
        [oe.empty_container]: _0x4925cb()
      };
      if (_0x18c8df !== _0x5ee454._v$) {
        _0x13026e(_0x36bfa2, _0x5ee454._v$ = _0x18c8df);
      }
      if (_0x337f54 !== _0x5ee454._v$2) {
        _0x13026e(_0x5caf96, _0x5ee454._v$2 = _0x337f54);
      }
      _0x5ee454._v$3 = _0x1db29b(_0x2efe3d, _0x39ea54, _0x5ee454._v$3);
      return _0x5ee454;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined
    });
    return _0x36bfa2;
  })();
};
const ls = _0x2c9a64 => {
  const [_0xb78c81, _0x4df5a1] = _0x4e5f13(0);
  const [_0x217bcc, _0x5ddbd7] = _0x4e5f13(_0x2e13c5(_0x2c9a64.time), {
    equals: false
  });
  function _0x2e13c5(_0x25dfc0, _0x644981 = "Ending") {
    const _0x10e406 = _0x25dfc0 - Date.now();
    const _0x548885 = Math.floor(_0x10e406 / 60000 % 60);
    const _0xd0b66b = Math.floor(_0x10e406 / 1000 % 60);
    let _0x479b7c = "#1ad61a";
    if (_0x548885 <= 10) {
      _0x479b7c = "#efca15";
    }
    if (_0x548885 <= 3) {
      _0x479b7c = "#ef4715";
    }
    const _0x1ed5a4 = _0x548885 < 10 ? "0" + _0x548885 : "" + _0x548885;
    const _0x2199a6 = _0xd0b66b < 10 ? "0" + _0xd0b66b : "" + _0xd0b66b;
    return {
      color: _0x479b7c,
      value: _0x25dfc0 < Date.now() ? _0x644981 : _0x1ed5a4 + ":" + _0x2199a6
    };
  }
  _0x3b7568(() => {
    const _0x4c0556 = +setInterval(() => {
      _0x5ddbd7(_0x2e13c5(_0x2c9a64.time));
      if (_0x2c9a64.time < Date.now()) {
        return clearInterval(_0xb78c81());
      }
    }, 1000);
    _0x4df5a1(_0x4c0556);
  });
  _0x380f4a(() => {
    clearInterval(_0xb78c81());
  });
  return (() => {
    const _0x3b8338 = st();
    _0x13fff3(_0x3b8338, () => _0x217bcc().value);
    _0x374ddc(_0x146c81 => {
      const _0x3b7f27 = oe.timer;
      const _0x4f48a7 = _0x217bcc().color;
      if (_0x3b7f27 !== _0x146c81._v$4) {
        _0x13026e(_0x3b8338, _0x146c81._v$4 = _0x3b7f27);
      }
      if (_0x4f48a7 !== _0x146c81._v$5) {
        if ((_0x146c81._v$5 = _0x4f48a7) != null) {
          _0x3b8338.style.setProperty("color", _0x4f48a7);
        } else {
          _0x3b8338.style.removeProperty("color");
        }
      }
      return _0x146c81;
    }, {
      _v$4: undefined,
      _v$5: undefined
    });
    return _0x3b8338;
  })();
};
const rt = [{
  label: "Homepage",
  page: "home",
  icon: sa,
  render: () => _0x2fc05a(Jn, {}),
  showNav: true
}, {
  label: "Auction",
  page: "auction",
  icon: ra,
  render: () => _0x2fc05a(os, {}),
  showNav: true
}, {
  label: "Races",
  page: "races",
  icon: ia,
  render: () => _0x2fc05a(ka, {}),
  showNav: true
}, {
  label: "Completed Race",
  page: "completed-race",
  icon: "",
  render: () => _0x2fc05a(Ta, {}),
  showNav: false
}, {
  label: "Crate Race",
  page: "create-race",
  icon: "",
  render: () => _0x2fc05a(La, {}),
  showNav: false
}, {
  label: "Race Tracks",
  page: "race-tracks",
  icon: "",
  render: () => _0x2fc05a(Na, {}),
  showNav: false
}, {
  label: "Race Info",
  page: "race-info",
  icon: "",
  render: () => _0x2fc05a(Ua, {}),
  showNav: false
}, {
  label: "Race Leaderboard",
  page: "race-leaderboard",
  icon: "",
  render: () => _0x2fc05a(ln, {}),
  showNav: false
}];
const je = "" + new URL("race-flags-79d8326e.svg", import.meta.url).href;
const cs = _0x3bd8c2("<img class=\"race-flags-1\">");
const ds = _0x3bd8c2("<img class=\"race-flags-2\">");
const us = () => {
  const {
    page: _0x3cf5c4
  } = A();
  const _0x3c2b72 = _0x220183(() => rt.find(_0x525508 => _0x525508.page === _0x3cf5c4()));
  return [_0x220183(() => _0x3c2b72()?.render()), _0x2fc05a(_0x413877, {
    get when() {
      return _0x3cf5c4() === "create-race";
    },
    get children() {
      return [(() => {
        const _0x1eea88 = cs();
        _0x14a359(_0x1eea88, "src", je);
        return _0x1eea88;
      })(), (() => {
        const _0x2e83fa = ds();
        _0x14a359(_0x2e83fa, "src", je);
        return _0x2e83fa;
      })()];
    }
  })];
};
const vs = "" + new URL("profile-icon-6cdf240d.png", import.meta.url).href;
const gs = "data:image/png;base64,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";
const _s = _0x3bd8c2("<div class=\"underground-header\"><div class=\"level-container\"><div class=\"title\"><div class=\"icon-container\"><img class=\"icon\" alt=\"\"></div><p class=\"text\">Your <span>Boosting Level</span></p></div><div class=\"content\"><h1> <span></span></h1><div class=\"bar-container\"><div class=\"bar-cover\"></div><div class=\"inner\"></div></div></div></div><div class=\"profile-btn\"><img class=\"icon\" alt=\"\"><p class=\"text\">My <span>Profile");
const ms = () => {
  const {
    boostingState: _0x2be8df
  } = A();
  return (() => {
    const _0x28cc74 = _s();
    const _0x1e0905 = _0x28cc74.firstChild;
    const _0x3eb693 = _0x1e0905.firstChild;
    const _0x570dbb = _0x3eb693.firstChild;
    const _0x2ab65b = _0x570dbb.firstChild;
    const _0x3b0970 = _0x3eb693.nextSibling;
    const _0x4b763d = _0x3b0970.firstChild;
    const _0x1d73cc = _0x4b763d.firstChild;
    const _0x5adda9 = _0x1d73cc.nextSibling;
    const _0x192406 = _0x4b763d.nextSibling;
    const _0x492ee2 = _0x192406.firstChild;
    const _0x440224 = _0x1e0905.nextSibling;
    const _0x2cda21 = _0x440224.firstChild;
    _0x14a359(_0x2ab65b, "src", gs);
    _0x13fff3(_0x4b763d, () => _0x2be8df.progression.currClass, _0x1d73cc);
    _0x13fff3(_0x5adda9, () => _0x2be8df.progression.nextClass);
    _0x14a359(_0x2cda21, "src", vs);
    _0x374ddc(() => 100 - _0x2be8df.progression.progress + "%" != null ? _0x492ee2.style.setProperty("width", 100 - _0x2be8df.progression.progress + "%") : _0x492ee2.style.removeProperty("width"));
    return _0x28cc74;
  })();
};
const ps = "_container_15wgf_1";
const hs = "_circle_15wgf_10";
const fs = "_rotation_15wgf_1";
const bs = "_text_15wgf_21";
const $s = "_big_15wgf_37";
const Ce = {
  container: ps,
  circle: hs,
  rotation: fs,
  text: bs,
  big: $s
};
const As = _0x3bd8c2("<div><svg width=\"103.51vh\" height=\"67.22vh\" viewBox=\"0 0 1118 726\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 725L280 544L419.5 453.5M1117 1L838 182L698.5 272.5\" stroke=\"url(#paint0_radial_0_1)\"></path><path d=\"M1117 725L838 544L698.5 453.5M1 1L280 182L419.5 272.5\" stroke=\"url(#paint1_radial_0_1)\"></path><path d=\"M609 363C609 390.614 586.614 413 559 413C531.386 413 509 390.614 509 363C509 335.386 531.386 313 559 313C586.614 313 609 335.386 609 363ZM526.948 363C526.948 380.702 541.298 395.052 559 395.052C576.702 395.052 591.052 380.702 591.052 363C591.052 345.298 576.702 330.948 559 330.948C541.298 330.948 526.948 345.298 526.948 363Z\" fill=\"#ffffff26\" fill-opacity=\"0.08\"></path><path d=\"M420.721 453.479C404.018 426.475 395.116 395.376 395.001 363.624C394.886 331.873 403.562 300.709 420.068 273.585L435.567 283.017C420.802 307.28 413.042 335.156 413.145 363.558C413.248 391.96 421.211 419.78 436.151 443.935L420.721 453.479Z\" fill=\"url(#paint2_radial_0_1)\" fill-opacity=\"0.08\"></path><path d=\"M699.279 453.479C715.982 426.475 724.884 395.376 724.999 363.624C725.114 331.873 716.438 300.709 699.932 273.585L684.433 283.017C699.198 307.28 706.958 335.156 706.855 363.558C706.752 391.96 698.789 419.78 683.849 443.935L699.279 453.479Z\" fill=\"url(#paint3_radial_0_1)\" fill-opacity=\"0.08\"></path><path d=\"M713.936 528.03C739.151 508.654 759.574 483.741 773.63 455.217C787.685 426.692 794.997 395.319 795 363.52C795.003 331.72 787.697 300.345 773.647 271.818C759.597 243.291 739.178 218.375 713.967 198.994L711.416 202.312C736.119 221.302 756.126 245.716 769.892 273.668C783.659 301.619 790.818 332.361 790.815 363.519C790.812 394.677 783.648 425.418 769.875 453.367C756.103 481.316 736.092 505.726 711.386 524.711L713.936 528.03Z\" fill=\"url(#paint4_radial_0_1)\" fill-opacity=\"0.08\"></path><path d=\"M407.064 528.03C381.849 508.654 361.426 483.741 347.37 455.217C333.315 426.692 326.003 395.319 326 363.52C325.997 331.72 333.303 300.345 347.353 271.818C361.403 243.291 381.822 218.375 407.033 198.994L409.584 202.312C384.881 221.302 364.874 245.716 351.108 273.668C337.341 301.619 330.182 332.361 330.185 363.519C330.188 394.677 337.352 425.418 351.125 453.367C364.897 481.316 384.908 505.726 409.614 524.711L407.064 528.03Z\" fill=\"url(#paint5_radial_0_1)\" fill-opacity=\"0.08\"></path><defs><radialGradient id=\"paint0_radial_0_1\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(559 363) rotate(90) scale(362 558)\"><stop stop-color=\"#ffffff\"></stop><stop offset=\"1\" stop-color=\"#ffffff\" stop-opacity=\"0\"></stop></radialGradient><radialGradient id=\"paint1_radial_0_1\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(559 363) rotate(90) scale(362 558)\"><stop stop-color=\"#ffffff\"></stop><stop offset=\"1\" stop-color=\"#ffffff\" stop-opacity=\"0\"></stop></radialGradient><radialGradient id=\"paint2_radial_0_1\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(395 369) scale(90.5)\"><stop stop-color=\"#ffffff26\"></stop><stop offset=\"1\" stop-color=\"#ffffff26\" stop-opacity=\"0\"></stop></radialGradient><radialGradient id=\"paint3_radial_0_1\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(725 369) rotate(-180) scale(90.5)\"><stop stop-color=\"#ffffff26\"></stop><stop offset=\"1\" stop-color=\"#ffffff26\" stop-opacity=\"0\"></stop></radialGradient><radialGradient id=\"paint4_radial_0_1\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(795 370.738) rotate(-180) scale(109.179)\"><stop stop-color=\"#ffffff26\"></stop><stop offset=\"1\" stop-color=\"#ffffff26\" stop-opacity=\"0\"></stop></radialGradient><radialGradient id=\"paint5_radial_0_1\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(326 370.738) scale(109.179)\"><stop stop-color=\"#ffffff26\"></stop><stop offset=\"1\" stop-color=\"#ffffff26\" stop-opacity=\"0\"></stop></radialGradient></defs></svg><div><svg width=\"7.96vh\" height=\"7.96vh\" viewBox=\"0 0 86 86\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M86 43C86 51.4221 83.5267 59.6588 78.8872 66.6878C74.2476 73.7168 67.646 79.2285 59.9017 82.539C52.1575 85.8494 43.6116 86.8128 35.3247 85.3095C27.0379 83.8062 19.3749 79.9024 13.2869 74.0827C7.19898 68.263 2.95408 60.7836 1.07911 52.5728C-0.795855 44.3621 -0.218339 35.7815 2.73998 27.896C5.6983 20.0105 10.9072 13.1674 17.7201 8.21601C24.533 3.2646 32.65 0.422907 41.0635 0.0436253L41.3033 5.36192C33.9314 5.69425 26.8193 8.18412 20.8499 12.5225C14.8805 16.8609 10.3165 22.8568 7.72445 29.766C5.13239 36.6752 4.62638 44.1934 6.26921 51.3877C7.91204 58.5819 11.6314 65.1353 16.9656 70.2344C22.2999 75.3336 29.0141 78.7541 36.275 80.0713C43.5359 81.3884 51.0237 80.5444 57.8092 77.6438C64.5946 74.7432 70.3789 69.9138 74.4441 63.7551C78.5092 57.5964 80.6763 50.3794 80.6763 43H86Z\" fill=\"url(#paint0_linear_2991_913)\"></path><defs><linearGradient id=\"paint0_linear_2991_913\" x1=\"43\" y1=\"0\" x2=\"86\" y2=\"29.1146\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#ffffff\"></stop><stop offset=\"1\" stop-color=\"#ffffff\" stop-opacity=\"0\"></stop></linearGradient></defs></svg></div><div><div>Loading");
const ks = () => (() => {
  const _0x49eaa9 = As();
  const _0x2a520d = _0x49eaa9.firstChild;
  const _0xf5ff07 = _0x2a520d.nextSibling;
  const _0x434c6b = _0xf5ff07.nextSibling;
  const _0x4a95ba = _0x434c6b.firstChild;
  _0x374ddc(_0x1507cd => {
    const _0x2a9a7c = Ce.container;
    const _0x1521c6 = Ce.circle;
    const _0x588319 = Ce.text;
    const _0x39290c = Ce.big;
    if (_0x2a9a7c !== _0x1507cd._v$) {
      _0x13026e(_0x49eaa9, _0x1507cd._v$ = _0x2a9a7c);
    }
    if (_0x1521c6 !== _0x1507cd._v$2) {
      _0x13026e(_0xf5ff07, _0x1507cd._v$2 = _0x1521c6);
    }
    if (_0x588319 !== _0x1507cd._v$3) {
      _0x13026e(_0x434c6b, _0x1507cd._v$3 = _0x588319);
    }
    if (_0x39290c !== _0x1507cd._v$4) {
      _0x13026e(_0x4a95ba, _0x1507cd._v$4 = _0x39290c);
    }
    return _0x1507cd;
  }, {
    _v$: undefined,
    _v$2: undefined,
    _v$3: undefined,
    _v$4: undefined
  });
  return _0x49eaa9;
})();
const Cs = "" + new URL("flag-icon-c079cd61.svg", import.meta.url).href;
const Ss = "" + new URL("wings-icon-7c71c270.svg", import.meta.url).href;
const Ts = _0x3bd8c2("<div class=\"navigation\"><div class=\"item queue-btn\"><div class=\"icon-container\"><img class=\"icon\"><img class=\"wings-icon\"></div><div class=\"label\"> queue");
const ys = _0x3bd8c2("<div class=\"item\"><div class=\"icon-container\"><img class=\"icon\"></div><div class=\"label\">");
const ws = () => {
  const {
    boostingState: _0x247314
  } = A();
  const _0x492909 = _0x482a41();
  const _0x4b82eb = () => {
    if (_0x492909) {
      if (_0x247314.inQueue) {
        Qt(_0x492909);
      } else {
        Kt(_0x492909);
      }
    }
  };
  return (() => {
    const _0x7a3944 = Ts();
    const _0x42dd24 = _0x7a3944.firstChild;
    const _0x49a48a = _0x42dd24.firstChild;
    const _0x36ce4b = _0x49a48a.firstChild;
    const _0x779a74 = _0x36ce4b.nextSibling;
    const _0x3061e3 = _0x49a48a.nextSibling;
    const _0xb2881a = _0x3061e3.firstChild;
    _0x13fff3(_0x7a3944, _0x2fc05a(_0x23cf45, {
      get each() {
        return rt.filter(_0x36b342 => _0x36b342.showNav);
      },
      children: _0x345b7e => _0x2fc05a(Gs, {
        item: _0x345b7e
      })
    }), _0x42dd24);
    _0x42dd24.$$click = _0x4b82eb;
    _0x14a359(_0x36ce4b, "src", Cs);
    _0x14a359(_0x779a74, "src", Ss);
    _0x13fff3(_0x3061e3, () => _0x247314.inQueue ? "Leave" : "Join", _0xb2881a);
    return _0x7a3944;
  })();
};
const Gs = ({
  item: _0x577026
}) => {
  const {
    page: _0x4051e6,
    setPage: _0x79d0ce
  } = A();
  const [_0x52f141, _0x3feaf0] = _0x4e5f13(false);
  const _0x5d120b = () => _0x3feaf0(true);
  const _0x59b5fa = () => _0x3feaf0(false);
  const _0x3ee9d0 = _0x4b6b66 => {
    _0x79d0ce(_0x4b6b66);
  };
  return (() => {
    const _0x228bef = ys();
    const _0x508c76 = _0x228bef.firstChild;
    const _0x49ae92 = _0x508c76.firstChild;
    const _0xd00270 = _0x508c76.nextSibling;
    _0x228bef.$$click = () => _0x3ee9d0(_0x577026.page);
    _0x228bef.addEventListener("mouseleave", _0x59b5fa);
    _0x228bef.addEventListener("mouseenter", _0x5d120b);
    _0x13fff3(_0xd00270, () => _0x577026.label);
    _0x374ddc(_0x8ed0ee => {
      const _0x15db7b = !!_0x52f141() || _0x4051e6() === _0x577026.page;
      const _0x2a44fb = _0x577026.icon;
      if (_0x15db7b !== _0x8ed0ee._v$) {
        _0x228bef.classList.toggle("item-active", _0x8ed0ee._v$ = _0x15db7b);
      }
      if (_0x2a44fb !== _0x8ed0ee._v$2) {
        _0x14a359(_0x49ae92, "src", _0x8ed0ee._v$2 = _0x2a44fb);
      }
      return _0x8ed0ee;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return _0x228bef;
  })();
};
_0x11032e(["click"]);
const Os = "_container_1pirv_1";
const xs = "_wrapper_1pirv_12";
const Rs = "_header_1pirv_26";
const zs = "_content_1pirv_51";
const Is = "_checkbox_container_1pirv_58";
const Bs = "_checkbox_1pirv_58";
const Ls = "_label_1pirv_80";
const Ms = "_actions_1pirv_88";
const Ps = "_btn_1pirv_95";
const Ds = "_cancel_1pirv_107";
const Ns = "_text_container_1pirv_118";
const Es = "_select_input_1pirv_151";
const N = {
  container: Os,
  wrapper: xs,
  header: Rs,
  content: zs,
  checkbox_container: Is,
  checkbox: Bs,
  label: Ls,
  actions: Ms,
  btn: Ps,
  cancel: Ds,
  text_container: Ns,
  select_input: Es
};
const Vs = _0x3bd8c2("<div><div><div><h1></h1><p></p></div><div></div><div><button>Submit</button><button>Cancel");
const Hs = _0x3bd8c2("<div><div></div><label>");
const Us = _0x3bd8c2("<div><label></label><input>");
const qs = _0x3bd8c2("<div><button></button><span></span><button>");
const Fs = _0x33ae83 => {
  const {
    setModalInfo: _0x201734
  } = A();
  const [_0x5dda70, _0xddd73a] = _0x57e055({});
  const _0xe9ab68 = (_0x5db033, _0x1ec740) => {
    _0xddd73a(_0x5db033, _0x1ec740);
    console.log(_0x5db033, _0x1ec740);
  };
  const _0x4ca3a3 = () => {
    _0x33ae83.onSubmit(_0x5dda70);
    return _0x201734(null);
  };
  const _0x42ee8d = () => {
    _0x33ae83.onCancel(_0x5dda70);
    return _0x201734(null);
  };
  return (() => {
    const _0x3d1e96 = Vs();
    const _0x510053 = _0x3d1e96.firstChild;
    const _0x2b3836 = _0x510053.firstChild;
    const _0x59c44d = _0x2b3836.firstChild;
    const _0x41de2b = _0x59c44d.nextSibling;
    const _0x4c18a8 = _0x2b3836.nextSibling;
    const _0x439fc4 = _0x4c18a8.nextSibling;
    const _0x3ea939 = _0x439fc4.firstChild;
    const _0x56bc71 = _0x3ea939.nextSibling;
    _0x13fff3(_0x59c44d, () => _0x33ae83.title);
    _0x13fff3(_0x41de2b, () => _0x33ae83.description);
    _0x13fff3(_0x4c18a8, _0x2fc05a(_0x23cf45, {
      get each() {
        return _0x33ae83.inputs;
      },
      children: _0x31bf20 => _0x2fc05a(_0x4c79a1, {
        get children() {
          return [_0x2fc05a(_0x2bf154, {
            get when() {
              return _0x31bf20.type === "checkbox";
            },
            get children() {
              return _0x2fc05a(js, {
                get label() {
                  return _0x31bf20.label;
                },
                onChange: _0x12903a => {
                  _0xe9ab68(_0x31bf20.name, _0x12903a);
                }
              });
            }
          }), _0x2fc05a(_0x2bf154, {
            get when() {
              return _0x31bf20.type === "text" || _0x31bf20.type === "password";
            },
            get children() {
              return _0x2fc05a(Js, {
                get type() {
                  return _0x31bf20.type;
                },
                get label() {
                  return _0x31bf20.label;
                },
                onChange: _0x373294 => {
                  _0xe9ab68(_0x31bf20.name, _0x373294);
                }
              });
            }
          }), _0x2fc05a(_0x2bf154, {
            get when() {
              return _0x31bf20.type === "select";
            },
            get children() {
              return _0x2fc05a(Ks, {
                get options() {
                  return _0x31bf20.options ?? [];
                },
                onChange: _0xdadf59 => {
                  _0xe9ab68(_0x31bf20.name, _0xdadf59);
                }
              });
            }
          })];
        }
      })
    }));
    _0x3ea939.$$click = _0x4ca3a3;
    _0x56bc71.$$click = _0x42ee8d;
    _0x374ddc(_0x5f192f => {
      const _0x14f430 = N.container;
      const _0x137e78 = N.wrapper;
      const _0x3da08b = N.header;
      const _0x2b5b64 = N.content;
      const _0x191c97 = N.actions;
      const _0x2989c2 = {
        [N.btn]: true,
        [N.success]: true
      };
      const _0x110f1a = {
        [N.btn]: true,
        [N.cancel]: true
      };
      if (_0x14f430 !== _0x5f192f._v$) {
        _0x13026e(_0x3d1e96, _0x5f192f._v$ = _0x14f430);
      }
      if (_0x137e78 !== _0x5f192f._v$2) {
        _0x13026e(_0x510053, _0x5f192f._v$2 = _0x137e78);
      }
      if (_0x3da08b !== _0x5f192f._v$3) {
        _0x13026e(_0x2b3836, _0x5f192f._v$3 = _0x3da08b);
      }
      if (_0x2b5b64 !== _0x5f192f._v$4) {
        _0x13026e(_0x4c18a8, _0x5f192f._v$4 = _0x2b5b64);
      }
      if (_0x191c97 !== _0x5f192f._v$5) {
        _0x13026e(_0x439fc4, _0x5f192f._v$5 = _0x191c97);
      }
      _0x5f192f._v$6 = _0x1db29b(_0x3ea939, _0x2989c2, _0x5f192f._v$6);
      _0x5f192f._v$7 = _0x1db29b(_0x56bc71, _0x110f1a, _0x5f192f._v$7);
      return _0x5f192f;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined
    });
    return _0x3d1e96;
  })();
};
const js = _0x50a944 => {
  const [_0x41565e, _0x566afd] = _0x4e5f13(false);
  _0x3dc171(() => {
    _0x50a944.onChange(_0x41565e());
  });
  return (() => {
    const _0x54babe = Hs();
    const _0x21943f = _0x54babe.firstChild;
    const _0xdb07d7 = _0x21943f.nextSibling;
    _0x21943f.$$click = () => _0x566afd(_0x132e14 => !_0x132e14);
    _0x13fff3(_0x21943f, _0x2fc05a(_0x413877, {
      get when() {
        return _0x41565e();
      },
      get children() {
        return _0x2fc05a(_0x351197, {
          icon: _0x501d3f
        });
      }
    }));
    _0x13fff3(_0xdb07d7, () => _0x50a944.label);
    _0x374ddc(_0x1952be => {
      const _0x1d2e89 = N.checkbox_container;
      const _0x45602d = N.checkbox;
      const _0x228b26 = N.label;
      if (_0x1d2e89 !== _0x1952be._v$8) {
        _0x13026e(_0x54babe, _0x1952be._v$8 = _0x1d2e89);
      }
      if (_0x45602d !== _0x1952be._v$9) {
        _0x13026e(_0x21943f, _0x1952be._v$9 = _0x45602d);
      }
      if (_0x228b26 !== _0x1952be._v$10) {
        _0x13026e(_0xdb07d7, _0x1952be._v$10 = _0x228b26);
      }
      return _0x1952be;
    }, {
      _v$8: undefined,
      _v$9: undefined,
      _v$10: undefined
    });
    return _0x54babe;
  })();
};
const Js = _0x10474b => {
  const [_0xc3722f, _0x5cc976] = _0x4e5f13("");
  _0x3dc171(() => {
    _0x10474b.onChange(_0xc3722f());
  });
  return (() => {
    const _0x3db8c8 = Us();
    const _0x32156b = _0x3db8c8.firstChild;
    const _0x16d4d4 = _0x32156b.nextSibling;
    _0x13fff3(_0x32156b, () => _0x10474b.label);
    _0x16d4d4.addEventListener("change", _0x16eefb => {
      _0x5cc976(_0x16eefb.target.value);
    });
    _0x374ddc(_0x2d6287 => {
      const _0x10b60a = N.text_container;
      const _0x270ff7 = N.label;
      const _0x464459 = _0x10474b.type;
      const _0x3642dd = "Enter " + _0x10474b.label?.toLowerCase() + "...";
      if (_0x10b60a !== _0x2d6287._v$11) {
        _0x13026e(_0x3db8c8, _0x2d6287._v$11 = _0x10b60a);
      }
      if (_0x270ff7 !== _0x2d6287._v$12) {
        _0x13026e(_0x32156b, _0x2d6287._v$12 = _0x270ff7);
      }
      if (_0x464459 !== _0x2d6287._v$13) {
        _0x14a359(_0x16d4d4, "type", _0x2d6287._v$13 = _0x464459);
      }
      if (_0x3642dd !== _0x2d6287._v$14) {
        _0x14a359(_0x16d4d4, "placeholder", _0x2d6287._v$14 = _0x3642dd);
      }
      return _0x2d6287;
    }, {
      _v$11: undefined,
      _v$12: undefined,
      _v$13: undefined,
      _v$14: undefined
    });
    return _0x3db8c8;
  })();
};
const Ks = _0x5b2d82 => {
  const [_0x3e178b, _0x1a6e2c] = _0x4e5f13(0);
  const _0x1741ea = () => {
    _0x1a6e2c(_0x439868 => (_0x439868 - 1 + _0x5b2d82.options.length) % _0x5b2d82.options.length);
  };
  const _0x533930 = () => {
    _0x1a6e2c(_0x3c03a0 => (_0x3c03a0 + 1) % _0x5b2d82.options.length);
  };
  _0x3dc171(() => {
    _0x5b2d82.onChange(_0x5b2d82.options[_0x3e178b()].value);
  });
  return (() => {
    const _0x301df1 = qs();
    const _0x5733bd = _0x301df1.firstChild;
    const _0x3eef18 = _0x5733bd.nextSibling;
    const _0x13dd8b = _0x3eef18.nextSibling;
    _0x5733bd.$$click = _0x1741ea;
    _0x13fff3(_0x5733bd, _0x2fc05a(_0x351197, {
      icon: _0x14df51
    }));
    _0x13fff3(_0x3eef18, () => _0x5b2d82.options[_0x3e178b()].name);
    _0x13dd8b.$$click = _0x533930;
    _0x13fff3(_0x13dd8b, _0x2fc05a(_0x351197, {
      get class() {
        return N.icon;
      },
      icon: _0x1b4cb1
    }));
    _0x374ddc(() => _0x13026e(_0x301df1, N.select_input));
    return _0x301df1;
  })();
};
_0x11032e(["click"]);
const it = [{
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao01.png",
  label: "Man on ATV"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao02.png",
  label: "Woman with Bat"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao03.png",
  label: "Drive-by 1"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao04.png",
  label: "Drive-by 2"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao05.png",
  label: "Gunman"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao06.png",
  label: "Parachute Jumper"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao07.png",
  label: "Lazer"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao08.png",
  label: "Grove Street Drive-by"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao09.png",
  label: "Man with SMG"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao10.png",
  label: "Sniper Scope Target"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao11.png",
  label: "Speedboat"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao12.png",
  label: "Stickup Woman"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao13.png",
  label: "Stickup Cashier"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAV/gtav46.png",
  label: "Beach Bum Girl"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAV/gtav47.png",
  label: "Beach Bum Buggy"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAV/gtav51.png",
  label: "Business Woman in Car"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAV/gtav52.png",
  label: "Capture man with contraband"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAV/gtav53.png",
  label: "Capture Buggy"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAV/gtav56.png",
  label: "Flight School Pilot"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAV/gtav59.png",
  label: "High Life Woman with Rifle"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAV/gtav60.png",
  label: "High Life Super Car"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAV/gtav61.png",
  label: "I'm Not a Hipster Girl"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAV/gtav62.png",
  label: "I'm Not a Hipster Guy"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAV/gtav63.png",
  label: "Independence Day"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAV/gtav75.png",
  label: "Valentine's Day Massacre Girl"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAV/gtav76.png",
  label: "Valentine's Day Massacre Guy"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao28.png",
  label: "GTAO Male Avatar 1"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao29.png",
  label: "GTAO Male Avatar 2"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao30.png",
  label: "GTAO Male Avatar 3"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao31.png",
  label: "Heists Balaclava"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao32.png",
  label: "Heists Chopper"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao33.png",
  label: "Heists Getaway van"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao34.png",
  label: "Heists Gimme the loot"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao35.png",
  label: "Heists Woman in Hockey Mask"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao36.png",
  label: "Heists Man in Hockey Mask"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao37.png",
  label: "Heists Lester"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao38.png",
  label: "Heists Police Car"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao39.png",
  label: "Heists Shotgun"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao42.png",
  label: "FME Chick"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao43.png",
  label: "FME Rider"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao44.png",
  label: "FME Wolfman"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao45.png",
  label: "Lowriders Lamar"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao46.png",
  label: "GTAO Slasher Girl"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao47.png",
  label: "GTAO Slasher Psycho Shadow"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao40.png",
  label: "Ill Gotten Gains Part 2"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao41.png",
  label: "Ill Gotten Gains Part 1"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao48.png",
  label: "Executives Chick"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao49.png",
  label: "Executives Man in Robe"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao50.png",
  label: "Mrs Claus"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao51.png",
  label: "Santa"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao52.png",
  label: "Lowriders Custom Classics"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao53.png",
  label: "Lowriders Girl Close up"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao54.png",
  label: "Cunning Stunts Guy Close Up"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao55.png",
  label: "Cunning Stunts Guy"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao56.png",
  label: "Cunning Stunts Estancia"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao57.png",
  label: "Cunning Stunts Lady"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao58.png",
  label: "Cunning Stunts Lady Alt"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao59.png",
  label: "Cunning Stunts Motorcycle"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao60.png",
  label: "Cunning Stunts Racecar"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao61.png",
  label: "Cunning Stunts Ring of Fire"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/biker1-256x256.png",
  label: "Biker Male with Gun"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/biker2-256x256.png",
  label: "Biker Male with Helmet"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/biker3-256x256.png",
  label: "Biker Male with Bandana"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/biker4-256x256.png",
  label: "Biker Male with Goggles "
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/biker5-256x256.png",
  label: "Biker Chick"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAOnline-Special-Vehicle-Circuit-2-256x256.png",
  label: "Special Vehicle Circuit Orange Voltic Rocket"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAOnline-Special-Vehicle-Circuit-3-256x256.png",
  label: "Special Vehicle Circuit White Voltic Rocket"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAOnline-Special-Vehicle-Circuit-256x256.png",
  label: "Special Vehicle Circuit Black Voltic Rocket"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/4-256x256.png",
  label: "Smuggler's Run Plane Cargo drop"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/3-256x256.png",
  label: "Smuggler's Run Plane and Car"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/SC_AVATARS_DOOMSDAY_256x256_F_V01.png",
  label: "Doomsday Heist Khanjai"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/SC_AVATARS_DOOMSDAY_256x256_E_V01.png",
  label: "Doomsday Heist Thruster"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/SC_AVATARS_DOOMSDAY_256x256_D_V01.png",
  label: "Doomsday Heist Stromberg"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/SC_AVATARS_DOOMSDAY_256x256_C_V01.png",
  label: "Doomsday Heist Akula"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/SC_AVATARS_DOOMSDAY_256x256_B_V01.png",
  label: "Doomsday Heist Soldier 1"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/SC_AVATARS_DOOMSDAY_256x256_A2_V01.png",
  label: "Doomsday Heist Soldier 2"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/SC_AVATARS_DOOMSDAY_256x256_A1_V01.png",
  label: "Doomsday Heist Soldier 3"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAOnline_Gunrunning_smallguy_256x256.png",
  label: "Gun Running Small guy"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAOnline_Gunrunning_girl_256x256.png",
  label: "Gun Running Girl"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAOnline_Gunrunning_256x256.png",
  label: "Gun Running mustache"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/ssasss-avatars-driver-256x256.png",
  label: "Southern San Andreas Super Sport Series Sprunk Driver"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/ssasss-avatars-jetpack-256x256.png",
  label: "Southern San Andreas Super Sport Series Thuster Race"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/ssasss-avatars-plane-256x256.png",
  label: "Southern San Andreas Super Sport Series Plane Race"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/ssasss-avatars-sabre-256x256.png",
  label: "Southern San Andreas Super Sport Series Car Race"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/ssasss-avatars-target-256x256.png",
  label: "Southern San Andreas Super Sport Series Targets"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO-After-Hours-The-Black-Madonna-256x256.png",
  label: "After Hours Black Madonna"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO-After-Hours-Dixon-256x256.png",
  label: "After Hours Dixon"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO-After-Hours-Tale-of-Us-2-256x256.png",
  label: "After hours Tales of Us 1"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO-After-Hours-Tale-of-Us-1-256x256.png",
  label: "After hours Tales of Us 2"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO-After-Hours-Solomun-256x256.png",
  label: "After Hours Solomun"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO-After-Hours-Tony-256x256.png",
  label: "After Hours Gay Tony"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao-arena-wars-monster-256x256.png",
  label: "Arena Wars Sasquatch Truck"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao-arena-wars-flying-truck-256x256.png",
  label: "Arena Wars Issi"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao-arena-wars-car-256x256.png",
  label: "Arena Wars Car"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao-arena-wars-biker-256x256.png",
  label: "Arena Wars Woman in Helmet"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao-arena-wars-announcer-256x256.png",
  label: "Arena Wars Announcer"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/CASINO_1.png",
  label: "Casino Agatha on Phone"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/CASINO_2.png",
  label: "Casino Avery Duggen"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/CASINO_3.png",
  label: "Casino Super Car and Bike"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/CASINO_4.png",
  label: "Casino Bikini Girl  "
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/CASINO_5.png",
  label: "Casino Roulette Table"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/CASINO_6.png",
  label: "Casino Tao Cheng"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/CASINO_7.png",
  label: "Casino Tom Connors"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/CASINO_8.png",
  label: "Casino Exploding Tanker"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/CASINO_9.png",
  label: "Casino Vincent"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/CASINO_HEIST_1-256x256.png",
  label: "Casino Heist Man in Red Mask"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/CASINO_HEIST_2-256x256.png",
  label: "Casino Heist Bugstars Girl "
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/CASINO_HEIST_3-256x256.png",
  label: "Casino Heist Sniper"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_IslandHeist_RSGSite_Avatar_DancingGirl_256x256.png",
  label: "The Cayo Perico Heist Dancing Girl"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_IslandHeist_RSGSite_Avatar_ElRubio_256x256.png",
  label: "The Cayo Perico Heist Juan Strickler"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_IslandHeist_RSGSite_Avatar_EnglishDave_256x256.png",
  label: "The Cayo Perico Heist English Dave"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_IslandHeist_RSGSite_Avatar_Guard1_256x256.png",
  label: "The Cayo Perico Heist Soldier 1"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_IslandHeist_RSGSite_Avatar_Guard2_256x256.png",
  label: "The Cayo Perico Heist Soldier 2"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_IslandHeist_RSGSite_Avatar_Keinemusik_&ME_256x256.png",
  label: "The Cayo Perico Heist Keinemusik 3"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_IslandHeist_RSGSite_Avatar_Keinemusik_AdamPort_256x256.png",
  label: "The Cayo Perico Heist Keinemusik 1"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_IslandHeist_RSGSite_Avatar_Keinemusik_Rampa_256x256.png",
  label: "The Cayo Perico Heist Keinemusik 2"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_IslandHeist_RSGSite_Avatar_Moodymann_256x256.png",
  label: "The Cayo Perico Heist Moodymann"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_IslandHeist_RSGSite_Avatar_PalmsTrax_256x256.png",
  label: "The Cayo Perico Heist Palms Trax"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_IslandHeist_RSGSite_Avatar_PantherStatue_256x256.png",
  label: "The Cayo Perico Heist Idol"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/Kenny.png",
  label: "Tuners Kenny"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/Mimi.png",
  label: "Tuners Mimi"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/Sessanta.png",
  label: "Tuners Sessanta"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/The_Contract_Chop.png",
  label: "The Contract Chop"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/The_Contract_Franklin.png",
  label: "The Contract Franklin"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/The_Contract_Dr_Dre.png",
  label: "The Contract Dr Dre"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/The_Contract_DJ_Pooh.png",
  label: "The Contract DJ Pooh"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/The_Contract_Jimmy_Iovine.png",
  label: "The Contract Jimmy Iovine"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/The_Contract_Lamar.png",
  label: "The Contract Lamar"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/The_Contract_Imani.png",
  label: "The Contract Imani"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/The_Contract_Johnny_Guns.png",
  label: "The Contract Johnny Guns"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_CE_Community_Avatar_GunRunner_256x256.png",
  label: "The Criminal Enterprises Gunrunner"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_CE_Community_Avatar_CEO_256x256.png",
  label: "The Criminal Enterprises CEO"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_CE_Community_Avatar_Biker_256x256.png",
  label: "The Criminal Enterprises Biker"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_CE_Community_Avatar_ClubOwner_256x256.png",
  label: "The Criminal Enterprises Nightclub Owner"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_LSDW_SC-Avatar_GirlWithGun_256x256_Deliv.png",
  label: "Los Santos Drug Wars Girl with gun"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_LSDW_SC-Avatar_Ron_256x256_Deliv.png",
  label: "Los Santos Drug Wars Ron"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_LSDW_SC-Avatar_DrugLab_256x256_Deliv.png",
  label: "Los Santos Drug Wars Labrat"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_LSDW_SC-Avatar_Luchador_256x256_Deliv.png",
  label: "Los Santos Drug Wars Luchadora"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_LSDW_SC-Avatar_Dax_256x256_Deliv.png",
  label: "Los Santos Drug Wars Dax"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_SA_Mercenaries_Community_Avatars_Charlie_256x256.png",
  label: "San Andreas Mercenaries Charlie"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_SA_Mercenaries_Community_Avatars_Rooster_256x256.png",
  label: "San Andreas Mercenaries Rooster"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_SA_Mercenaries_Community_Avatars_Juggernaut_256x256.png",
  label: "San Andreas Mercenaries Merryweather Juggernaut"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_SA_Mercenaries_Community_Avatars_MWPilot_256x256.png",
  label: "San Andreas Mercenaries Merryweather Pilot"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_SA_Mercenaries_Community_Avatars_PlayerFemale_256x256.png",
  label: "San Andreas Mercenaries Girl"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_SA_Mercenaries_Community_Avatars_PlayerMale_256x256.png",
  label: "San Andreas Mercenaries Man with gun"
}];
const Qs = "_container_16j7q_1";
const Ws = "_title_16j7q_16";
const Ys = "_header_16j7q_24";
const Zs = "_icon_16j7q_30";
const Xs = "_list_16j7q_40";
const fe = {
  container: Qs,
  title: Ws,
  header: Ys,
  icon: Zs,
  list: Xs
};
const er = _0x3bd8c2("<div><div><h1>Select Avatar</h1><div></div></div><div>");
const tr = _0x3bd8c2("<img>");
const ar = _0x33de97 => {
  const _0x138722 = _0x57c79c => {
    _0x33de97.onSubmit(_0x57c79c);
    _0x33de97.onClose();
  };
  return _0x2fc05a(_0x413877, {
    get when() {
      return _0x33de97.show;
    },
    get children() {
      const _0x5edcfd = er();
      const _0x125a27 = _0x5edcfd.firstChild;
      const _0x44ecb6 = _0x125a27.firstChild;
      const _0xd940be = _0x44ecb6.nextSibling;
      const _0x496cba = _0x125a27.nextSibling;
      _0x8be395(_0x19480e, _0x5edcfd, () => () => _0x33de97.onClose());
      _0xd940be.$$click = () => _0x33de97.onClose();
      _0x13fff3(_0xd940be, _0x2fc05a(_0x351197, {
        icon: _0x1a5c20
      }));
      _0x13fff3(_0x496cba, _0x2fc05a(_0x23cf45, {
        each: it,
        children: _0x58bcba => (() => {
          const _0x279be6 = tr();
          _0x279be6.$$click = () => _0x138722(_0x58bcba.image);
          _0x374ddc(() => _0x14a359(_0x279be6, "src", _0x58bcba.image));
          return _0x279be6;
        })()
      }));
      _0x374ddc(_0xb39605 => {
        const _0x26baf1 = fe.container;
        const _0x500f4b = fe.header;
        const _0x56e7c2 = fe.title;
        const _0x2ccff1 = fe.icon;
        const _0x5211a7 = fe.list;
        if (_0x26baf1 !== _0xb39605._v$) {
          _0x13026e(_0x5edcfd, _0xb39605._v$ = _0x26baf1);
        }
        if (_0x500f4b !== _0xb39605._v$2) {
          _0x13026e(_0x125a27, _0xb39605._v$2 = _0x500f4b);
        }
        if (_0x56e7c2 !== _0xb39605._v$3) {
          _0x13026e(_0x44ecb6, _0xb39605._v$3 = _0x56e7c2);
        }
        if (_0x2ccff1 !== _0xb39605._v$4) {
          _0x13026e(_0xd940be, _0xb39605._v$4 = _0x2ccff1);
        }
        if (_0x5211a7 !== _0xb39605._v$5) {
          _0x13026e(_0x496cba, _0xb39605._v$5 = _0x5211a7);
        }
        return _0xb39605;
      }, {
        _v$: undefined,
        _v$2: undefined,
        _v$3: undefined,
        _v$4: undefined,
        _v$5: undefined
      });
      return _0x5edcfd;
    }
  });
};
_0x11032e(["click"]);
const nr = "" + new URL("arrows-51cdd8e1.svg", import.meta.url).href;
const Je = "" + new URL("drift-illustration-fc475426.svg", import.meta.url).href;
const Ke = "" + new URL("wheels-c539fd4a.png", import.meta.url).href;
const sr = "" + new URL("evo-f53f1172.png", import.meta.url).href;
const rr = "" + new URL("silvia-ad1c8dbb.png", import.meta.url).href;
const ir = "_container_ggsim_1";
const or = "_driftCircles_ggsim_9";
const lr = "_wheel_1_ggsim_19";
const cr = "_wheel_2_ggsim_26";
const dr = "_car_1_ggsim_34";
const ur = "_car_2_ggsim_40";
const vr = "_content_ggsim_46";
const gr = "_arrows_ggsim_60";
const _r = "_title_ggsim_64";
const mr = "_description_ggsim_75";
const pr = "_avatar_container_ggsim_83";
const hr = "_avatar_hover_ggsim_91";
const fr = "_icon_ggsim_103";
const br = "_avatar_ggsim_83";
const $r = "_input_container_ggsim_120";
const Ar = "_label_ggsim_126";
const kr = "_input_ggsim_120";
const Cr = "_btn_ggsim_164";
const O = {
  container: ir,
  driftCircles: or,
  wheel_1: lr,
  wheel_2: cr,
  car_1: dr,
  car_2: ur,
  content: vr,
  arrows: gr,
  title: _r,
  description: mr,
  avatar_container: pr,
  avatar_hover: hr,
  icon: fr,
  avatar: br,
  input_container: $r,
  label: Ar,
  input: kr,
  btn: Cr
};
const Sr = _0x3bd8c2("<div>");
const Tr = _0x3bd8c2("<div><div><div><h1>SETUP</h1><p>Manage your underground profile</p></div><div><div></div></div><div><label>Alias</label><p>Your title in the underground. This is how you will be known to other racers.</p><input placeholder=\"Alias\"><button>Setup Profile</button></div><img></div><img><img><img><img><img><img>");
const yr = () => {
  const {
    setBoostingState: _0x3644c2
  } = A();
  const [_0x1a5a3c, _0x2b6fac] = _0x4e5f13("");
  const [_0x16caa9, _0x248035] = _0x4e5f13(false);
  const [_0x4572c4, _0x542daf] = _0x4e5f13(false);
  const [_0x3cfb19, _0x43a751] = _0x4e5f13(it[1].image);
  const _0x54640e = async () => {
    if (_0x1a5a3c() === "") {
      return;
    }
    const _0x1670f1 = await y("mkr_racing:createProfile", {
      avatar: _0x3cfb19(),
      alias: _0x1a5a3c()
    });
    if (_0x1670f1.data.success) {
      const _0x3e1bc4 = await nt();
      _0x3644c2({
        racingProfile: _0x3e1bc4
      });
    }
    _0x25bfb8("underground", _0x1670f1.data.message);
  };
  return (() => {
    const _0x4d7169 = Tr();
    const _0x2b11b1 = _0x4d7169.firstChild;
    const _0x39922b = _0x2b11b1.firstChild;
    const _0x26c5f4 = _0x39922b.firstChild;
    const _0x1ef86a = _0x26c5f4.nextSibling;
    const _0x2194af = _0x39922b.nextSibling;
    const _0x1249f4 = _0x2194af.firstChild;
    const _0x5d0355 = _0x2194af.nextSibling;
    const _0x4eae9c = _0x5d0355.firstChild;
    const _0x30750e = _0x4eae9c.nextSibling;
    const _0x2d0e89 = _0x30750e.nextSibling;
    const _0x7f8cf9 = _0x2d0e89.nextSibling;
    const _0x23890d = _0x5d0355.nextSibling;
    const _0x185d9e = _0x2b11b1.nextSibling;
    const _0x49f914 = _0x185d9e.nextSibling;
    const _0x1ab2ed = _0x49f914.nextSibling;
    const _0x520d81 = _0x1ab2ed.nextSibling;
    const _0x260866 = _0x520d81.nextSibling;
    const _0x2b6734 = _0x260866.nextSibling;
    _0x13fff3(_0x4d7169, _0x2fc05a(ar, {
      get show() {
        return _0x4572c4();
      },
      onSubmit: _0x5254a2 => _0x43a751(_0x5254a2),
      onClose: () => {
        _0x542daf(false);
      }
    }), _0x2b11b1);
    _0x2194af.addEventListener("mouseleave", () => _0x248035(false));
    _0x2194af.addEventListener("mouseenter", () => _0x248035(true));
    _0x13fff3(_0x2194af, _0x2fc05a(_0x413877, {
      get when() {
        return _0x16caa9();
      },
      get children() {
        const _0xb82744 = Sr();
        _0xb82744.$$click = () => _0x542daf(true);
        _0x13fff3(_0xb82744, _0x2fc05a(_0x351197, {
          icon: _0x31ff3f,
          get class() {
            return O.icon;
          }
        }));
        _0x374ddc(() => _0x13026e(_0xb82744, O.avatar_hover));
        return _0xb82744;
      }
    }), _0x1249f4);
    _0x2d0e89.addEventListener("change", _0x1c0942 => _0x2b6fac(_0x1c0942.target.value));
    _0x7f8cf9.$$click = _0x54640e;
    _0x14a359(_0x23890d, "src", nr);
    _0x14a359(_0x185d9e, "src", Je);
    _0x14a359(_0x49f914, "src", Je);
    _0x14a359(_0x1ab2ed, "src", Ke);
    _0x14a359(_0x520d81, "src", Ke);
    _0x14a359(_0x260866, "src", sr);
    _0x14a359(_0x2b6734, "src", rr);
    _0x374ddc(_0x482ea6 => {
      const _0x594f9f = O.container;
      const _0x1f5fcc = O.content;
      const _0x235db2 = O.heading;
      const _0xf2ae25 = O.title;
      const _0x55e742 = O.description;
      const _0xda454c = O.avatar_container;
      const _0x5029d6 = O.avatar;
      const _0xea8f77 = "url(" + _0x3cfb19() + ")";
      const _0x212c17 = O.input_container;
      const _0x3b50f5 = O.label;
      const _0x593761 = O.description;
      const _0x174e1c = O.input;
      const _0x2014d6 = O.btn;
      const _0x13b076 = O.arrows;
      const _0x28b473 = O.driftCircles;
      const _0xe6c449 = O.driftCircles;
      const _0x469575 = O.wheel_1;
      const _0x424248 = O.wheel_2;
      const _0x3d5bad = O.car_1;
      const _0x449911 = O.car_2;
      if (_0x594f9f !== _0x482ea6._v$) {
        _0x13026e(_0x4d7169, _0x482ea6._v$ = _0x594f9f);
      }
      if (_0x1f5fcc !== _0x482ea6._v$2) {
        _0x13026e(_0x2b11b1, _0x482ea6._v$2 = _0x1f5fcc);
      }
      if (_0x235db2 !== _0x482ea6._v$3) {
        _0x13026e(_0x39922b, _0x482ea6._v$3 = _0x235db2);
      }
      if (_0xf2ae25 !== _0x482ea6._v$4) {
        _0x13026e(_0x26c5f4, _0x482ea6._v$4 = _0xf2ae25);
      }
      if (_0x55e742 !== _0x482ea6._v$5) {
        _0x13026e(_0x1ef86a, _0x482ea6._v$5 = _0x55e742);
      }
      if (_0xda454c !== _0x482ea6._v$6) {
        _0x13026e(_0x2194af, _0x482ea6._v$6 = _0xda454c);
      }
      if (_0x5029d6 !== _0x482ea6._v$7) {
        _0x13026e(_0x1249f4, _0x482ea6._v$7 = _0x5029d6);
      }
      if (_0xea8f77 !== _0x482ea6._v$8) {
        if ((_0x482ea6._v$8 = _0xea8f77) != null) {
          _0x1249f4.style.setProperty("background-image", _0xea8f77);
        } else {
          _0x1249f4.style.removeProperty("background-image");
        }
      }
      if (_0x212c17 !== _0x482ea6._v$9) {
        _0x13026e(_0x5d0355, _0x482ea6._v$9 = _0x212c17);
      }
      if (_0x3b50f5 !== _0x482ea6._v$10) {
        _0x13026e(_0x4eae9c, _0x482ea6._v$10 = _0x3b50f5);
      }
      if (_0x593761 !== _0x482ea6._v$11) {
        _0x13026e(_0x30750e, _0x482ea6._v$11 = _0x593761);
      }
      if (_0x174e1c !== _0x482ea6._v$12) {
        _0x13026e(_0x2d0e89, _0x482ea6._v$12 = _0x174e1c);
      }
      if (_0x2014d6 !== _0x482ea6._v$13) {
        _0x13026e(_0x7f8cf9, _0x482ea6._v$13 = _0x2014d6);
      }
      if (_0x13b076 !== _0x482ea6._v$14) {
        _0x13026e(_0x23890d, _0x482ea6._v$14 = _0x13b076);
      }
      if (_0x28b473 !== _0x482ea6._v$15) {
        _0x13026e(_0x185d9e, _0x482ea6._v$15 = _0x28b473);
      }
      if (_0xe6c449 !== _0x482ea6._v$16) {
        _0x13026e(_0x49f914, _0x482ea6._v$16 = _0xe6c449);
      }
      if (_0x469575 !== _0x482ea6._v$17) {
        _0x13026e(_0x1ab2ed, _0x482ea6._v$17 = _0x469575);
      }
      if (_0x424248 !== _0x482ea6._v$18) {
        _0x13026e(_0x520d81, _0x482ea6._v$18 = _0x424248);
      }
      if (_0x3d5bad !== _0x482ea6._v$19) {
        _0x13026e(_0x260866, _0x482ea6._v$19 = _0x3d5bad);
      }
      if (_0x449911 !== _0x482ea6._v$20) {
        _0x13026e(_0x2b6734, _0x482ea6._v$20 = _0x449911);
      }
      return _0x482ea6;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined,
      _v$8: undefined,
      _v$9: undefined,
      _v$10: undefined,
      _v$11: undefined,
      _v$12: undefined,
      _v$13: undefined,
      _v$14: undefined,
      _v$15: undefined,
      _v$16: undefined,
      _v$17: undefined,
      _v$18: undefined,
      _v$19: undefined,
      _v$20: undefined
    });
    _0x374ddc(() => _0x2d0e89.value = _0x1a5a3c());
    return _0x4d7169;
  })();
};
_0x11032e(["click"]);
const wr = "_container_1tgxj_1";
const Gr = "_wrapper_1tgxj_12";
const Or = "_header_1tgxj_26";
const xr = "_content_1tgxj_53";
const Rr = "_checkbox_1tgxj_60";
const zr = "_label_1tgxj_82";
const Ir = "_actions_1tgxj_91";
const Br = "_btn_1tgxj_98";
const Lr = "_cancel_1tgxj_111";
const Mr = "_fadeIn_1tgxj_1";
const ie = {
  container: wr,
  wrapper: Gr,
  header: Or,
  content: xr,
  "checkbox-input-container": "_checkbox-input-container_1tgxj_60",
  checkbox: Rr,
  label: zr,
  actions: Ir,
  btn: Br,
  cancel: Lr,
  "text-input-container": "_text-input-container_1tgxj_122",
  fadeIn: Mr
};
const Pr = _0x3bd8c2("<div><div><div><h1>Confirmation</h1><p></p></div><div><button>Confirm</button><button>Cancel");
const Dr = _0x1c7e3c => {
  const {
    setConfirmModalInfo: _0x1de05a
  } = A();
  const _0x7d5409 = () => {
    _0x1c7e3c.onConfirm();
    return _0x1de05a(null);
  };
  const _0x59a0a0 = () => {
    _0x1c7e3c.onCancel();
    return _0x1de05a(null);
  };
  return (() => {
    const _0x46d8be = Pr();
    const _0x3a145c = _0x46d8be.firstChild;
    const _0x43defa = _0x3a145c.firstChild;
    const _0x5b130a = _0x43defa.firstChild;
    const _0x1c4b85 = _0x5b130a.nextSibling;
    const _0x1cbaaa = _0x43defa.nextSibling;
    const _0x115050 = _0x1cbaaa.firstChild;
    const _0x173fe2 = _0x115050.nextSibling;
    _0x13fff3(_0x1c4b85, () => _0x1c7e3c.message);
    _0x115050.$$click = _0x7d5409;
    _0x173fe2.$$click = _0x59a0a0;
    _0x374ddc(_0x17b6f3 => {
      const _0x39da8b = ie.container;
      const _0x3fb254 = ie.wrapper;
      const _0x31afe9 = ie.header;
      const _0x1fb747 = ie.actions;
      const _0x1080f7 = {
        [ie.btn]: true,
        [ie.success]: true
      };
      const _0x979028 = {
        [ie.btn]: true,
        [ie.cancel]: true
      };
      if (_0x39da8b !== _0x17b6f3._v$) {
        _0x13026e(_0x46d8be, _0x17b6f3._v$ = _0x39da8b);
      }
      if (_0x3fb254 !== _0x17b6f3._v$2) {
        _0x13026e(_0x3a145c, _0x17b6f3._v$2 = _0x3fb254);
      }
      if (_0x31afe9 !== _0x17b6f3._v$3) {
        _0x13026e(_0x43defa, _0x17b6f3._v$3 = _0x31afe9);
      }
      if (_0x1fb747 !== _0x17b6f3._v$4) {
        _0x13026e(_0x1cbaaa, _0x17b6f3._v$4 = _0x1fb747);
      }
      _0x17b6f3._v$5 = _0x1db29b(_0x115050, _0x1080f7, _0x17b6f3._v$5);
      _0x17b6f3._v$6 = _0x1db29b(_0x173fe2, _0x979028, _0x17b6f3._v$6);
      return _0x17b6f3;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined
    });
    return _0x46d8be;
  })();
};
_0x11032e(["click"]);
const Nr = _0x3bd8c2("<div class=\"main-container\">");
const Er = () => _0x2fc05a(_0x12dddf, {
  get name() {
    return Ur.name;
  },
  headerColor: "#030A10",
  get children() {
    return _0x2fc05a(Ct, {
      get children() {
        return _0x2fc05a(Vr, {});
      }
    });
  }
});
const Vr = () => {
  const [_0x12024b, _0x3c360f] = _0x4e5f13(true);
  const {
    boostingState: _0xe6e27a,
    modalInfo: _0x26743d,
    confirmModalInfo: _0x423a59,
    setRacingState: _0x166049,
    setBoostingState: _0x4c876a
  } = A();
  const _0xed99fa = _0x482a41();
  _0x3b7568(async () => {
    const [_0x587e04, _0x186640, _0x9745f7, _0x948857, _0x3d52dd] = await Promise.all([It(), xt(), Wt(), na(), nt()]);
    _0x166049({
      racingAlias: _0x587e04,
      pendingRaces: _0x186640.pending,
      completedRaces: _0x186640.completed,
      activeRaces: _0x186640.active,
      raceTracks: _0x186640.maps
    });
    _0x4c876a({
      inQueue: _0x9745f7,
      racingProfile: _0x3d52dd,
      progression: _0x948857
    });
    _0x3c360f(false);
    _0x54fe30.register("application-event-underground", async _0x4299d5 => {
      if (_0xed99fa) {
        switch (_0x4299d5.action) {
          case "racing-update":
            return Vt(_0xed99fa, _0x4299d5);
          case "racing-night-time":
            return Ht(_0xed99fa, _0x4299d5);
          case "racing-update-phone-state":
            return Ut(_0xed99fa, _0x4299d5);
          case "refresh-contracts":
            return Ge(_0xed99fa);
          case "boosting-auction-sound":
            return Jt(_0x4299d5.sound);
          case "refresh-auction-list":
            return at(_0xed99fa);
          default:
            return console.log(_0x4299d5.action + " not registered.");
        }
      }
    });
  });
  return _0x2fc05a(_0x4c79a1, {
    get fallback() {
      return _0x2fc05a(yr, {});
    },
    get children() {
      return [_0x2fc05a(_0x2bf154, {
        get when() {
          return _0x12024b();
        },
        get children() {
          return _0x2fc05a(ks, {});
        }
      }), _0x2fc05a(_0x2bf154, {
        get when() {
          return _0x220183(() => !!_0xe6e27a.racingProfile)() && !_0x12024b();
        },
        get children() {
          const _0x4b19a7 = Nr();
          _0x13fff3(_0x4b19a7, _0x2fc05a(ms, {}), null);
          _0x13fff3(_0x4b19a7, _0x2fc05a(ws, {}), null);
          _0x13fff3(_0x4b19a7, _0x2fc05a(us, {}), null);
          _0x13fff3(_0x4b19a7, _0x2fc05a(_0x413877, {
            get when() {
              return _0x26743d();
            },
            children: _0x49b5d1 => _0x2fc05a(Fs, _0x78a189(_0x49b5d1))
          }), null);
          _0x13fff3(_0x4b19a7, _0x2fc05a(_0x413877, {
            get when() {
              return _0x423a59();
            },
            children: _0x2c97d4 => _0x2fc05a(Dr, _0x78a189(_0x2c97d4))
          }), null);
          return _0x4b19a7;
        }
      })];
    }
  });
};
const Hr = "data:image/png;base64,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";
const Ur = {
  icon: Hr,
  enabled: true,
  onDock: false,
  name: "underground",
  label: "Underground",
  render: () => _0x2fc05a(Er, {})
};
export { Ur as default };