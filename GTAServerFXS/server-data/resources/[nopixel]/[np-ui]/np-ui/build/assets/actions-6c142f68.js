import { b as _0x526a41 } from "./actions-d7dccfad.js";
const PHONE_SETTINGS = {
  Appearance: {
    icon: "cog",
    items: [{
      label: "Phone Wallpaper (1:2.33 Ratio)",
      type: "text",
      key: "phone_wallpaper",
      default: null
    }, {
      label: "Embedded Images",
      type: "switch",
      key: "embedded_images",
      default: true
    }]
  },
  Notifications: {
    icon: "bell",
    items: [{
      label: "SMS Notifications",
      type: "switch",
      key: "sms_notifications",
      default: true
    }, {
      label: "Email Notifications",
      type: "switch",
      key: "email_notifications",
      default: true
    }, {
      label: "Twatter Notifications",
      type: "switch",
      key: "twatter_notifications",
      default: true
    }]
  },
  Sounds: {
    icon: "bell",
    items: [{
      label: "Volume",
      type: "slider",
      key: "phone_volume",
      default: 1
    }, {
      label: _0x2f8e4c => "Balance (" + _0x526a41(_0x2f8e4c) + ")",
      type: "slider",
      key: "phone_balance",
      default: 1
    }]
  }
};
const getPhoneSettings = () => {
  return JSON.parse(localStorage.getItem("phone-settings") ?? "{}");
};
const getSettingByKey = _0x18c062 => {
  for (const _0x386396 of Object.values(PHONE_SETTINGS)) {
    const _0x1dce40 = _0x386396.items.find(_0x52780a => _0x52780a.key === _0x18c062);
    if (_0x1dce40) {
      return _0x1dce40;
    }
  }
  return null;
};
const getPhoneSetting = _0x12deba => {
  const _0x525c8c = getPhoneSettings();
  const _0x44ca76 = getSettingByKey(_0x12deba);
  return _0x525c8c[_0x12deba] ?? _0x44ca76?.default;
};
export { PHONE_SETTINGS as P, getPhoneSettings as a, getPhoneSetting as g };