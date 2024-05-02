import { i as _0x257c86 } from "./index-d5aaa08b.js";
import "./vite-a4975f27.js";
import "./vendor-6c45b22f.js";
import "./commonjsHelpers-c5dac66b.js";
import "./bundle-e94787e2.js";
const appName = "phone";
const DEFAULT_PHONE_STATUS = _0x257c86() ? "show" : "hide";
const store = {
  key: appName,
  initialState: {
    activeApp: "home-screen",
    simcard: null,
    appsWithNotifications: [],
    callActive: false,
    callMeta: {},
    devOverride: _0x257c86(),
    initialized: false,
    hasPhone: true,
    hasNotification: false,
    hasEmergencyJob: false,
    hasVpn: false,
    hasUsbFleeca: false,
    hasUsbPaleto: false,
    hasUsbUpper: false,
    hasUsbLower: false,
    hasUsbRacing: false,
    hasUsbPDRacing: false,
    status: DEFAULT_PHONE_STATUS,
    style: {},
    wifiConnected: [],
    orientation: "vertical",
    orientationForced: false,
    phoneConfig: [],
    phoneEvents: {}
  }
};
export { appName, store as default };