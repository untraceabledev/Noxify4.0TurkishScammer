import { s as _0x463128, n as _0xefaaca } from "./index-d5aaa08b.js";
import _0x40eb3d, { getDefaultHudPresets } from "./store-75fb65a1.js";
const changeHud = (_0x43f92a, _0x3073e0 = false) => {
  const _0x4de1b2 = _0x463128.getState()[_0x40eb3d.key];
  if (_0x3073e0 && _0x4de1b2["hud.presets"].length < Number(_0x43f92a)) {
    return;
  }
  if (_0x4de1b2["hud.presets"].length < Number(_0x43f92a)) {
    const _0x1a2eef = _0x5016a1 => {
      return {
        ..._0x5016a1,
        [_0x40eb3d.key]: {
          ..._0x5016a1[_0x40eb3d.key],
          ...getDefaultHudPresets(),
          "hud.presetSelected": _0x43f92a
        }
      };
    };
    _0x463128.dispatch({
      cb: _0x1a2eef,
      type: "np-ui-action"
    });
    _0xefaaca("np-ui:hudSetPreferences", getDefaultHudPresets());
    return;
  }
  const _0x296a70 = Number(_0x43f92a) - 1;
  const _0x5a5afc = _0x424934 => {
    return {
      ..._0x424934,
      [_0x40eb3d.key]: {
        ..._0x424934[_0x40eb3d.key],
        ..._0x4de1b2["hud.presets"][_0x296a70],
        "hud.presetSelected": _0x43f92a
      }
    };
  };
  _0x463128.dispatch({
    cb: _0x5a5afc,
    type: "np-ui-action"
  });
  _0xefaaca("np-ui:hudSetPreferences", _0x4de1b2["hud.presets"][_0x296a70]);
};
const savePreset = () => {
  const _0x3529a8 = _0x463128.getState()[_0x40eb3d.key];
  const _0x20ec84 = _0x3529a8["hud.presets"];
  const _0x524b5b = _0x3529a8["hud.presetSelected"] - 1;
  if (!_0x20ec84[_0x524b5b]) {
    _0x20ec84[_0x524b5b] = getDefaultHudPresets();
  }
  Object.keys(getDefaultHudPresets()).forEach(_0x5cc1e0 => {
    _0x20ec84[_0x524b5b][_0x5cc1e0] = _0x3529a8[_0x5cc1e0];
  });
  let _0x56aafe = {};
  const _0x4fb8cf = _0x15a150 => {
    _0x56aafe = {
      ..._0x15a150[_0x40eb3d.key],
      "hud.presets": _0x20ec84
    };
    return {
      ..._0x15a150,
      [_0x40eb3d.key]: _0x56aafe
    };
  };
  _0x463128.dispatch({
    cb: _0x4fb8cf,
    type: "np-ui-action"
  });
  _0xefaaca("np-ui:setKVPValue", {
    key: "np-preferences",
    value: _0x56aafe
  });
  _0xefaaca("np-ui:hudSetPreferences", _0x56aafe);
};
const balancedValue = _0x5a532d => {
  const _0x194b37 = _0x5a532d > 1 ? 2 - _0x5a532d : 1;
  const _0x20a303 = _0x5a532d > 1 ? 1 : _0x5a532d;
  return "Left " + Math.round(_0x194b37 * 100) + "% | Right " + Math.round(_0x20a303 * 100) + "%";
};
const savePreferences = _0x59a5b3 => {
  const _0x1726b5 = {
    ..._0x463128.getState()[_0x40eb3d.key],
    ..._0x59a5b3
  };
  _0xefaaca("np-ui:setKVPValue", {
    key: "np-preferences",
    value: _0x1726b5
  });
  _0xefaaca("np-ui:hudSetPreferences", _0x1726b5);
  _0xefaaca("np-ui:hudUpdateRadioSettings", {
    settings: {
      stereoAudio: _0x1726b5["radio.stereo.enabled"],
      localClickOn: _0x1726b5["radio.clicks.outgoing.enabled"],
      localClickOff: _0x1726b5["radio.clicks.outgoing.enabled"],
      remoteClickOn: _0x1726b5["radio.clicks.incoming.enabled"],
      remoteClickOff: _0x1726b5["radio.clicks.incoming.enabled"],
      clickVolume: _0x1726b5["radio.clicks.volume"],
      radioVolume: _0x1726b5["radio.volume"],
      phoneVolume: _0x1726b5["phone.volume"],
      radioBalance: _0x1726b5["radio.balance"],
      phoneBalance: _0x1726b5["phone.balance"],
      releaseDelay: 200
    }
  });
  savePreset();
};
export { balancedValue as b, changeHud as c, savePreferences as s };