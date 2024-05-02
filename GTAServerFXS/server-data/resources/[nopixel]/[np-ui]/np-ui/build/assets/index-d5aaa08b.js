import { _ as _0x10ca93 } from "./vite-a4975f27.js";
import { c as _0x32df5d, b as _0xadb348, j as _0x3a9672, S as _0x3e766f, M as _0x33fae8, u as _0x4d9b48, r as _0x8cdf9d, $ as _0x43edcd, e as _0x5c4c09, P as _0xbaeaca, T as _0x10487e } from "./vendor-6c45b22f.js";
import { R as _0x45ddef } from "./bundle-e94787e2.js";
import "./commonjsHelpers-c5dac66b.js";
const type = "np-ui-action";
const compose = (_0x2d65f6, {
  mapStateToProps: _0x2cbd30 = _0x329aba => ({}),
  mapDispatchToProps: _0x1ae53d = {}
} = {}) => {
  const _0x35b4e0 = (_0x5ee4fd, _0x46ca33) => {
    return {
      character: _0x5ee4fd.character,
      ..._0x46ca33,
      ..._0x5ee4fd[_0x2d65f6.key],
      ..._0x2cbd30(_0x5ee4fd)
    };
  };
  const _0xd0eb15 = _0x5ea7f4 => {
    if (typeof _0x5ea7f4 === "function") {
      return {
        cb: _0x5ea7f4,
        type: type
      };
    }
    const _0x570cb1 = _0x5622db => ({
      ..._0x5622db,
      [_0x2d65f6.key]: {
        ..._0x5622db[_0x2d65f6.key],
        ..._0x5ea7f4
      }
    });
    return {
      cb: _0x570cb1,
      type: type
    };
  };
  const _0x43e3de = () => {
    const _0x3cce8e = _0x23908d => ({
      ..._0x23908d,
      [_0x2d65f6.key]: {
        ..._0x2d65f6.initialState
      }
    });
    return {
      cb: _0x3cce8e,
      type: type
    };
  };
  const _0x5195fa = {
    ..._0x1ae53d,
    resetState: _0x43e3de,
    updateState: _0xd0eb15
  };
  return {
    mapDispatchToProps: _0x5195fa,
    mapStateToProps: _0x35b4e0
  };
};
let store = null;
let initialState = {};
const getInitialState = () => initialState;
const reducer = (_0xd5619f = initialState, _0x1ae179) => {
  if (_0x1ae179.type !== "np-ui-action") {
    return _0xd5619f;
  }
  return _0x1ae179.cb(_0xd5619f);
};
const fetchInitialState = async () => {
  const _0x25cdbd = Object.assign({
    "../main/badge/store.ts": () => _0x10ca93(() => import("./store-f085383a.js"), true ? [] : undefined, import.meta.url),
    "../main/blackbars/store.ts": () => _0x10ca93(() => import("./store-133bfa2e.js"), true ? [] : undefined, import.meta.url),
    "../main/character/store.ts": () => _0x10ca93(() => import("./store-37db9883.js"), true ? [] : undefined, import.meta.url),
    "../main/cinema-control/store.ts": () => _0x10ca93(() => import("./store-839cab78.js"), true ? [] : undefined, import.meta.url),
    "../main/contextmenu/store.ts": () => _0x10ca93(() => import("./store-ff8c219b.js"), true ? [] : undefined, import.meta.url),
    "../main/debug-logs/store.ts": () => _0x10ca93(() => import("./store-40d0d83b.js"), true ? ["./store-40d0d83b.js", "./vite-a4975f27.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "../main/eye/store.ts": () => _0x10ca93(() => import("./store-3f887053.js"), true ? [] : undefined, import.meta.url),
    "../main/game/store.ts": () => _0x10ca93(() => import("./store-5fae3a83.js"), true ? [] : undefined, import.meta.url),
    "../main/interactions/store.ts": () => _0x10ca93(() => import("./store-6e4dd9d5.js"), true ? [] : undefined, import.meta.url),
    "../main/newsarchive/store.ts": () => _0x10ca93(() => import("./store-15ac9707.js"), true ? [] : undefined, import.meta.url),
    "../main/newscam/store.ts": () => _0x10ca93(() => import("./store-b854a9b8.js"), true ? [] : undefined, import.meta.url),
    "../main/notepad/store.ts": () => _0x10ca93(() => import("./store-e1833528.js"), true ? ["./store-e1833528.js", "./_config-15a95544.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-6ee97cab.js", "./button-c47bff31.js", "./translations-7705db3f.js", "./styles-61014012.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "../main/npolaroid-photo/store.ts": () => _0x10ca93(() => import("./store-0bcf49be.js"), true ? [] : undefined, import.meta.url),
    "../main/npolaroid-photobook/store.ts": () => _0x10ca93(() => import("./store-82bb5a08.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/calendar/store.ts": () => _0x10ca93(() => import("./store-52c39051.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/call-history/store.ts": () => _0x10ca93(() => import("./store-df6117ab.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/cars/store.ts": () => _0x10ca93(() => import("./store-8bc94b42.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/contacts/store.ts": () => _0x10ca93(() => import("./store-7ddff63f.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/conversations/store.ts": () => _0x10ca93(() => import("./store-bdd3f58b.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/crypto/store.ts": () => _0x10ca93(() => import("./store-8da1623c.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/documents/store.ts": () => _0x10ca93(() => import("./store-52786cd5.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/doj/store.ts": () => _0x10ca93(() => import("./store-dc12fbaf.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/emails/store.ts": () => _0x10ca93(() => import("./store-2e12b715.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/employment/store.ts": () => _0x10ca93(() => import("./store-6adab5c7.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/erpinger/store.ts": () => _0x10ca93(() => import("./store-536c9c98.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/guber/store.ts": () => _0x10ca93(() => import("./store-26508309.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/heist-signups/store.ts": () => _0x10ca93(() => import("./store-6eb0fb42.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/home-screen/store.ts": () => _0x10ca93(() => import("./store-8ea8dcbb.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/jobs/store.ts": () => _0x10ca93(() => import("./store-3b8071d7.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/lifeinvader/store.ts": () => _0x10ca93(() => import("./store-c488cfa3.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/metro/store.ts": () => _0x10ca93(() => import("./store-7a63ff69.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/news/store.ts": () => _0x10ca93(() => import("./store-555b9636.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/showroom-manager/store.ts": () => _0x10ca93(() => import("./store-84c2d143.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/twatter/store.ts": () => _0x10ca93(() => import("./store-cb919828.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/yellow-pages/store.ts": () => _0x10ca93(() => import("./store-e4284424.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/components/content-bottom/store.ts": () => _0x10ca93(() => import("./store-cf7996ad.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/components/content-top/store.ts": () => _0x10ca93(() => import("./store-1b3966b7.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/components/modal/store.ts": () => _0x10ca93(() => import("./store-779dab40.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/components/send-message-modal/store.ts": () => _0x10ca93(() => import("./store-1436e66f.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/store.ts": () => _0x10ca93(() => import("./store-50ddf3e0.js"), true ? ["./store-50ddf3e0.js", "./vite-a4975f27.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "../main/preferences/store.ts": () => _0x10ca93(() => import("./store-75fb65a1.js"), true ? [] : undefined, import.meta.url),
    "../main/range-picker/store.ts": () => _0x10ca93(() => import("./store-2cc7018c.js"), true ? [] : undefined, import.meta.url),
    "../main/san-andreas-state/store.ts": () => _0x10ca93(() => import("./store-2240da27.js"), true ? [] : undefined, import.meta.url),
    "../main/snackbar/store.ts": () => _0x10ca93(() => import("./store-77e28808.js"), true ? [] : undefined, import.meta.url),
    "../main/sniper-scope/store.ts": () => _0x10ca93(() => import("./store-90d66427.js"), true ? [] : undefined, import.meta.url),
    "../main/status-hud/store.ts": () => _0x10ca93(() => import("./store-c60d25a9.js"), true ? [] : undefined, import.meta.url),
    "../main/store.ts": () => _0x10ca93(() => import("./store-d0372f5a.js"), true ? [] : undefined, import.meta.url),
    "../main/system/store.ts": () => _0x10ca93(() => import("./store-933fe49f.js"), true ? [] : undefined, import.meta.url),
    "../main/tcg-card/store.ts": () => _0x10ca93(() => import("./store-6297fa62.js"), true ? [] : undefined, import.meta.url),
    "../main/textbox/store.ts": () => _0x10ca93(() => import("./store-1dfb7a2a.js"), true ? [] : undefined, import.meta.url),
    "../main/textpopup/store.ts": () => _0x10ca93(() => import("./store-00dec3e1.js"), true ? [] : undefined, import.meta.url),
    "../main/towtruck-controls/store.ts": () => _0x10ca93(() => import("./store-af4a36bf.js"), true ? [] : undefined, import.meta.url),
    "../main/vehiclemenu/store.ts": () => _0x10ca93(() => import("./store-4494f59b.js"), true ? [] : undefined, import.meta.url),
    "../main/voice-url/store.ts": () => _0x10ca93(() => import("./store-282cdf20.js"), true ? [] : undefined, import.meta.url)
  });
  const _0x38892f = [];
  try {
    const _0x35e55a = await Promise.all(Object.keys(_0x25cdbd).map(_0x49f010 => _0x25cdbd[_0x49f010]).map(_0x3e5776 => _0x3e5776()));
    for (const _0x228ff8 of _0x35e55a) {
      const _0x105e6c = _0x228ff8.default;
      if (_0x38892f.includes(_0x105e6c.key)) {
        throw new Error("duplicate store key found: " + _0x105e6c.key);
      }
      _0x38892f.push(_0x105e6c.key);
      initialState[_0x105e6c.key] = _0x105e6c.initialState;
      if (_0x105e6c.auxiliaryInitialState) {
        initialState = {
          ...initialState,
          ..._0x105e6c.auxiliaryInitialState
        };
      }
    }
  } catch (_0x3cb3c5) {
    console.error("One or more store modules failed to load...", _0x3cb3c5);
  }
  return;
};
const createStore = async () => {
  await fetchInitialState();
  store = _0x32df5d(reducer);
  return store;
};
const reset = () => {
  store.dispatch({
    cb: () => initialState,
    type: type
  });
};
const action = _0x14df87 => () => {
  store.dispatch({
    cb: _0x1ebc67 => _0x14df87(_0x1ebc67),
    type: type
  });
};
const dark = _0xadb348({
  palette: {
    type: "dark",
    primary: {
      main: "#95ef77"
    },
    secondary: {
      main: "#f2a365"
    }
  }
});
const getTheme = _0x3058d1 => {
  if (_0x3058d1 === "dark") {
    return dark;
  }
  return dark;
};
var ConfigTypes = (_0xe79a3c => {
  _0xe79a3c[_0xe79a3c.Application = 0] = "Application";
  _0xe79a3c[_0xe79a3c.Passive = 1] = "Passive";
  return _0xe79a3c;
})(ConfigTypes || {});
const defaultConfigObject$1 = {
  closeOnEscape: true,
  closeOnEscapeTimeout: 0
};
const config$2 = [];
async function getAppsConfig() {
  if (config$2.length > 0) {
    return config$2;
  }
  const _0x1974ce = Object.assign({
    "./main/badge/_config.tsx": () => _0x10ca93(() => import("./_config-f7f654fb.js"), true ? ["./_config-f7f654fb.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-6ee97cab.js", "./text-f7ee3e03.js", "./translations-7705db3f.js", "./store-f085383a.js", "./character-8ebc09ae.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./main/blackbars/_config.tsx": () => _0x10ca93(() => import("./_config-c0fbed73.js"), true ? ["./_config-c0fbed73.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-6ee97cab.js", "./store-133bfa2e.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./main/character/_config.tsx": () => _0x10ca93(() => import("./_config-07767e8d.js"), true ? ["./_config-07767e8d.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-6ee97cab.js", "./store-37db9883.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./main/cinema-control/_config.tsx": () => _0x10ca93(() => import("./_config-5e2a9728.js"), true ? ["./_config-5e2a9728.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-6ee97cab.js", "./icon-7f5cdae2.js", "./tooltip-cb871d8a.js", "./translations-7705db3f.js", "./styles-61014012.js", "./text-f7ee3e03.js", "./store-839cab78.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./main/contextmenu/_config.tsx": () => _0x10ca93(() => import("./_config-3143f5d1.js"), true ? ["./_config-3143f5d1.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-6ee97cab.js", "./icon-7f5cdae2.js", "./text-f7ee3e03.js", "./translations-7705db3f.js", "./store-ff8c219b.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./main/debug-logs/_config.tsx": () => _0x10ca93(() => import("./_config-457ec31d.js"), true ? ["./_config-457ec31d.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-6ee97cab.js", "./icon-7f5cdae2.js", "./text-f7ee3e03.js", "./translations-7705db3f.js", "./tooltip-cb871d8a.js", "./store-40d0d83b.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./main/dr-pager/_config.tsx": () => _0x10ca93(() => import("./_config-7ed9eb67.js"), true ? ["./_config-7ed9eb67.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-6ee97cab.js", "./styles-61014012.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./main/eye/_config.tsx": () => _0x10ca93(() => import("./_config-784690f5.js"), true ? ["./_config-784690f5.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-6ee97cab.js", "./icon-7f5cdae2.js", "./text-f7ee3e03.js", "./translations-7705db3f.js", "./store-3f887053.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./main/game/_config.tsx": () => _0x10ca93(() => import("./_config-7b598954.js"), true ? ["./_config-7b598954.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./misc-13f33aa2.js", "./ui-app-6ee97cab.js", "./store-5fae3a83.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./main/interactions/_config.tsx": () => _0x10ca93(() => import("./_config-0b6eec91.js"), true ? ["./_config-0b6eec91.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-6ee97cab.js", "./translations-7705db3f.js", "./store-6e4dd9d5.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./main/newsarchive/_config.tsx": () => _0x10ca93(() => import("./_config-31e0cbe0.js"), true ? ["./_config-31e0cbe0.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-6ee97cab.js", "./button-c47bff31.js", "./translations-7705db3f.js", "./checkmark-036a14b0.js", "./icon-7f5cdae2.js", "./input-c6588ceb.js", "./text-f7ee3e03.js", "./format-10690d6f.js", "./styles-61014012.js", "./index-ae383549.js", "./spinner-1649f31d.js", "./paper-22e478e9.js", "./tooltip-cb871d8a.js", "./store-15ac9707.js", "./general-manager-96fdf49f.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./main/newscam/_config.tsx": () => _0x10ca93(() => import("./_config-ea677e00.js"), true ? ["./_config-ea677e00.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-6ee97cab.js", "./store-b854a9b8.js", "./text-f7ee3e03.js", "./translations-7705db3f.js", "./styles-61014012.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./main/newspaper/_config.tsx": () => _0x10ca93(() => import("./_config-da381282.js"), true ? ["./_config-da381282.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-6ee97cab.js", "./datetime-2c501277.js", "./preferences-c03a2c0b.js", "./date-1e39c206.js", "./translations-7705db3f.js", "./text-f7ee3e03.js", "./tooltip-cb871d8a.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./main/notepad/_config.tsx": () => _0x10ca93(() => import("./_config-15a95544.js"), true ? ["./_config-15a95544.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-6ee97cab.js", "./button-c47bff31.js", "./translations-7705db3f.js", "./styles-61014012.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./main/npolaroid-photo/_config.tsx": () => _0x10ca93(() => import("./_config-d162024d.js"), true ? ["./_config-d162024d.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-6ee97cab.js", "./index-ee9f21b8.js", "./text-f7ee3e03.js", "./translations-7705db3f.js", "./styles-61014012.js", "./icon-7f5cdae2.js", "./input-c6588ceb.js", "./format-10690d6f.js", "./index-ae383549.js", "./button-c47bff31.js", "./store-0bcf49be.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./main/npolaroid-photobook/_config.tsx": () => _0x10ca93(() => import("./_config-396f4be1.js"), true ? ["./_config-396f4be1.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-6ee97cab.js", "./store-82bb5a08.js", "./styles-61014012.js", "./index-ee9f21b8.js", "./text-f7ee3e03.js", "./translations-7705db3f.js", "./icon-7f5cdae2.js", "./input-c6588ceb.js", "./format-10690d6f.js", "./index-ae383549.js", "./button-c47bff31.js", "./store-0bcf49be.js", "./misc-13f33aa2.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./main/phone/_config.tsx": () => _0x10ca93(() => import("./_config-0536d9d5.js"), true ? ["./_config-0536d9d5.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-6ee97cab.js", "./preferences-c03a2c0b.js", "./icon-7f5cdae2.js", "./tooltip-cb871d8a.js", "./translations-7705db3f.js", "./styles-61014012.js", "./actions-c0279434.js", "./store-779dab40.js", "./store-50ddf3e0.js", "./vite-a4975f27.js", "./bundle-e94787e2.js", "./store-cf7996ad.js", "./index-191f7df1.js", "./input-c6588ceb.js", "./text-f7ee3e03.js", "./format-10690d6f.js", "./index-ae383549.js", "./simple-form-6b6335d8.js", "./store-1b3966b7.js", "./spinner-1649f31d.js", "./checkmark-036a14b0.js", "./notifications-c44d34f0.js", "./actions-6c142f68.js", "./actions-d7dccfad.js", "./store-75fb65a1.js", "./store-1436e66f.js", "./actions-a6d0bfed.js", "./store-bdd3f58b.js", "./lib-fc905d4c.js", "./dev-data-afd59de4.js", "./index-e9ff94e9.js"] : undefined, import.meta.url),
    "./main/preferences/_config.tsx": () => _0x10ca93(() => import("./_config-f14869f0.js"), true ? ["./_config-f14869f0.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./store-75fb65a1.js", "./ui-app-6ee97cab.js", "./actions-d7dccfad.js", "./index-ae383549.js", "./translations-7705db3f.js", "./useOutsideClick-e98795c9.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./main/range-picker/_config.tsx": () => _0x10ca93(() => import("./_config-64d9658e.js"), true ? ["./_config-64d9658e.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-6ee97cab.js", "./button-c47bff31.js", "./translations-7705db3f.js", "./styles-61014012.js", "./store-2cc7018c.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./main/san-andreas-state/_config.tsx": () => _0x10ca93(() => import("./_config-2603c530.js"), true ? ["./_config-2603c530.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-6ee97cab.js", "./general-manager-96fdf49f.js", "./text-f7ee3e03.js", "./translations-7705db3f.js", "./styles-61014012.js", "./date-1e39c206.js", "./icon-7f5cdae2.js", "./button-c47bff31.js", "./checkmark-036a14b0.js", "./input-c6588ceb.js", "./format-10690d6f.js", "./index-ae383549.js", "./spinner-1649f31d.js", "./paper-22e478e9.js", "./tooltip-cb871d8a.js", "./misc-13f33aa2.js", "./store-2240da27.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./main/snackbar/_config.tsx": () => _0x10ca93(() => import("./_config-644bc99b.js"), true ? ["./_config-644bc99b.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./store-77e28808.js", "./ui-app-6ee97cab.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./main/sniper-scope/_config.tsx": () => _0x10ca93(() => import("./_config-ec180da9.js"), true ? ["./_config-ec180da9.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-6ee97cab.js", "./styles-61014012.js", "./store-90d66427.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./main/sounds/_config.tsx": () => _0x10ca93(() => import("./_config-81ed95be.js"), true ? ["./_config-81ed95be.js", "./vite-a4975f27.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-6ee97cab.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./main/status-hud/_config.tsx": () => _0x10ca93(() => import("./_config-9ab24345.js"), true ? ["./_config-9ab24345.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./text-f7ee3e03.js", "./translations-7705db3f.js", "./store-c60d25a9.js", "./ui-app-6ee97cab.js", "./duration-timer-2aea312f.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./main/system/_config.tsx": () => _0x10ca93(() => import("./_config-a0f1e5f9.js"), true ? ["./_config-a0f1e5f9.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-6ee97cab.js", "./store-933fe49f.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./main/tcg-binder/_config.tsx": () => _0x10ca93(() => import("./_config-34816bff.js"), true ? ["./_config-34816bff.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-6ee97cab.js", "./input-c6588ceb.js", "./text-f7ee3e03.js", "./translations-7705db3f.js", "./icon-7f5cdae2.js", "./format-10690d6f.js", "./styles-61014012.js", "./index-ae383549.js", "./card-6e835304.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./main/tcg-card/_config.tsx": () => _0x10ca93(() => import("./_config-99523dfb.js"), true ? ["./_config-99523dfb.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-6ee97cab.js", "./card-6e835304.js", "./styles-61014012.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./main/tcg-packopening/_config.tsx": () => _0x10ca93(() => import("./_config-63eb4e43.js"), true ? ["./_config-63eb4e43.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-6ee97cab.js", "./card-6e835304.js", "./styles-61014012.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./main/textbox/_config.tsx": () => _0x10ca93(() => import("./_config-5be21afc.js"), true ? ["./_config-5be21afc.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-6ee97cab.js", "./input-c6588ceb.js", "./text-f7ee3e03.js", "./translations-7705db3f.js", "./icon-7f5cdae2.js", "./format-10690d6f.js", "./styles-61014012.js", "./index-ae383549.js", "./useOutsideClick-e98795c9.js", "./store-1dfb7a2a.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./main/textpopup/_config.tsx": () => _0x10ca93(() => import("./_config-bbc9a8e9.js"), true ? ["./_config-bbc9a8e9.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-6ee97cab.js", "./styles-61014012.js", "./button-c47bff31.js", "./translations-7705db3f.js", "./store-00dec3e1.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./main/towtruck-controls/_config.tsx": () => _0x10ca93(() => import("./_config-ecda5c5d.js"), true ? ["./_config-ecda5c5d.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./store-af4a36bf.js", "./ui-app-6ee97cab.js", "./icon-7f5cdae2.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./main/vehiclemenu/_config.tsx": () => _0x10ca93(() => import("./_config-de0ca1bc.js"), true ? ["./_config-de0ca1bc.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./store-4494f59b.js", "./ui-app-6ee97cab.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./main/voice-url/_config.tsx": () => _0x10ca93(() => import("./_config-a046fefd.js"), true ? ["./_config-a046fefd.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./misc-13f33aa2.js", "./ui-app-6ee97cab.js", "./icon-7f5cdae2.js", "./text-f7ee3e03.js", "./translations-7705db3f.js", "./styles-61014012.js", "./store-282cdf20.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url)
  });
  try {
    const _0x5a07e1 = await Promise.all(Object.keys(_0x1974ce).map(_0x4a8ab2 => _0x1974ce[_0x4a8ab2]).map(_0x2f8313 => _0x2f8313()));
    for (const _0x2ebf68 of _0x5a07e1) {
      const _0x23d3e5 = _0x2ebf68.default(_0x2ebf68);
      const _0x2659a8 = _0x23d3e5.render;
      config$2.push({
        ...defaultConfigObject$1,
        ..._0x23d3e5,
        render: _0x2659a8
      });
    }
  } catch (_0xa0ad69) {
    console.error("one or more modules failed??", _0xa0ad69);
  }
  return config$2;
}
const baseApp = "";
const ErrorUI = () => {
  return _0x3a9672.jsx("div", {
    id: "main-app-container",
    children: _0x3a9672.jsx(_0x3e766f, {
      open: true,
      children: _0x3a9672.jsx(_0x33fae8, {
        elevation: 6,
        variant: "filled",
        severity: "error",
        children: "Catastrophic UI Error Occurred (F8) - Restarting..."
      })
    })
  });
};
const useUIState = _0x947d55 => {
  const _0x38809f = _0x4d9b48(_0x14bebc => _0x14bebc[_0x947d55]);
  const _0x111a65 = _0x34a608 => {
    return action(_0x489647 => ({
      ..._0x489647,
      [_0x947d55]: {
        ..._0x489647[_0x947d55],
        ..._0x34a608
      }
    }))();
  };
  return [_0x38809f, _0x111a65];
};
function isDevel() {
  return false;
}
function isDebug() {
  return false;
}
class UIEvent extends Event {
  data;
  constructor(_0x2488ff, _0x22d88c = {}) {
    super(_0x2488ff);
    this.data = _0x22d88c;
  }
}
const relaySource = "np-ui:relay-message";
const source = "np-nui";
function dispatch(_0x20b46c, {
  type = "message",
  ref = window
} = {}) {
  ref.dispatchEvent(new UIEvent(type, {
    ..._0x20b46c,
    source: source
  }));
}
function dispatchRelayEvent(_0x4e1e6b, {
  type = "message",
  ref = window
} = {}) {
  ref.dispatchEvent(new UIEvent(type, {
    ..._0x4e1e6b,
    source: relaySource
  }));
}
function processRelayEvent(_0x50e584, _0x67cf3f) {
  return function _0x47aaec(_0x1de3ce) {
    if (!_0x1de3ce || !_0x1de3ce.data || _0x1de3ce.data.source !== relaySource) {
      return;
    }
    if (_0x1de3ce.data.app !== _0x50e584) {
      return;
    }
    _0x67cf3f(_0x1de3ce.data.data);
  };
}
const data = {
  init: () => {
    return {
      character: {
        id: 1,
        first_name: "monka",
        last_name: "S",
        number: "1231234321",
        bank_account_id: 1,
        roles: ["ballot-manager", "bank-manager", "business-manager", "management", "judge", "mayor", "tax-manager"],
        email: "example@lifeinvader.com",
        server_id: 33
      }
    };
  },
  showroomGetCarConfig: function () {
    return [{
      model: "primoard",
      active: true,
      group: "Sports",
      brand: "Ford",
      name: "Primo ARD",
      import_price: -1,
      retail_price: -1,
      pdm: true,
      fastlane: false,
      tuner: true,
      showroom_image_url: "",
      hd_image_url: ""
    }, {
      model: "primoard",
      active: true,
      group: "Sports",
      brand: "Ford",
      name: "Sports 1",
      import_price: -1,
      retail_price: -1,
      pdm: true,
      fastlane: true,
      tuner: false,
      showroom_image_url: "https://i.imgur.com/hgUhGkq.png",
      hd_image_url: ""
    }, {
      model: "wot",
      active: true,
      group: "Sports",
      brand: "Ford",
      name: "Sports 2",
      import_price: -1,
      retail_price: -1,
      pdm: false,
      fastlane: true,
      tuner: false,
      showroom_image_url: "https://i.imgur.com/hgUhGkq.png",
      hd_image_url: ""
    }, {
      model: "wot",
      active: true,
      group: "Cycle",
      brand: "Ford",
      name: "Cycle",
      import_price: -1,
      retail_price: -1,
      pdm: false,
      fastlane: true,
      tuner: false,
      showroom_image_url: "https://i.imgur.com/hgUhGkq.png",
      hd_image_url: ""
    }, {
      model: "gtr",
      active: true,
      group: "Coupe",
      brand: "Ford",
      name: "Coupe",
      import_price: -1,
      retail_price: -1,
      pdm: true,
      fastlane: true,
      tuner: false,
      showroom_image_url: "https://i.imgur.com/hgUhGkq.png",
      hd_image_url: ""
    }];
  },
  showroomChangeCar: function () {
    return {
      info: [{
        name: "Acceleration",
        value: 9.8
      }, {
        name: "Speed",
        value: 9.8
      }, {
        name: "Handling",
        value: 9.8
      }, {
        name: "Braking",
        value: 9.8
      }],
      vehClass: "S"
    };
  }
};
data.getCharacterPreferences = () => {
  return {
    value: JSON.stringify({
      phone: "ios"
    })
  };
};
data.getAccountTypes = () => {
  return [{
    id: 1,
    name: "Default"
  }, {
    id: 2,
    name: "Personal",
    public: true
  }, {
    id: 3,
    name: "Business"
  }, {
    id: 4,
    name: "Savings",
    public: true
  }];
};
data.getCharacterDetails = function () {
  return {
    bank: 1333337,
    cash: 1337,
    jobs: {
      primary: "unemployed",
      secondary: "none"
    },
    licenses: [{
      name: "drivers",
      status: true
    }, {
      name: "nusiness",
      status: false
    }, {
      name: "nusiness",
      status: false
    }, {
      name: "nusiness",
      status: false
    }, {
      name: "nusiness",
      status: false
    }]
  };
};
data.getAccountCharacters = () => {
  return [{
    id: 1111,
    name: "Siz Fulker",
    is_owner: true,
    access: ["deposit", "withdraw", "transfer", "transactions"]
  }, {
    id: 3333,
    name: "Siz Fulker",
    is_owner: false,
    access: ["deposit", "withdraw", "transfer", "transactions"]
  }, {
    id: 2222,
    name: "Uchiha Jones",
    is_owner: false,
    access: ["transfer", "transactions"]
  }];
};
data.getAccounts = () => {
  return {
    is_atm: false,
    accounts: [{
      owner_first_name: "D",
      owner_last_name: "W",
      name: "Personal",
      type: "Default",
      type_id: 1,
      id: 1,
      balance: 15000,
      is_frozen: false,
      is_monitored: false,
      cid: 1111,
      access: ["deposit", "withdraw", "transfer", "transactions", "balance"]
    }, {
      owner_first_name: "D",
      owner_last_name: "W",
      name: "The Tavern",
      type: "Business",
      type_id: 3,
      id: 22222,
      balance: 150000,
      is_frozen: true,
      is_monitored: false,
      cid: 1111,
      access: []
    }, {
      owner_first_name: "D",
      owner_last_name: "W",
      name: "Not Drugs",
      type: "Personal",
      type_id: 2,
      id: 33333,
      balance: 150000000,
      is_frozen: false,
      is_monitored: true,
      cid: 1111,
      access: ["deposit"]
    }, {
      owner_first_name: "D",
      owner_last_name: "W",
      name: "A Test",
      type: "Business",
      type_id: 3,
      id: 22222,
      balance: 150000,
      is_frozen: true,
      is_monitored: false,
      cid: 1111,
      access: []
    }]
  };
};
data.getTransactions = () => {
  return [{
    id: "bfad16b2-b1a3-491b-820d-06a08192e426",
    direction: "in",
    amount: 1500,
    type: "income",
    date: 1598450656,
    comment: "comment",
    from_account_id: 33333,
    from_account_name: "Not Drugs",
    from_civ_name: "Siz Fulker",
    to_account_id: 11111,
    to_account_name: "Personal",
    to_civ_name: "Siz Fulker",
    tax_type: "Personal Income",
    tax_id: 6,
    tax_percentage: 20
  }, {
    id: "bfad16b2-b1a3-491b-820f-06a08192e426",
    direction: "out",
    amount: 1500,
    type: "purchase",
    date: 1598450656,
    comment: "comment",
    from_account_id: 33333,
    from_account_name: "Not Drugs",
    from_civ_name: "Siz Fulker",
    to_account_id: 11111,
    to_account_name: "Personal",
    to_civ_name: "Siz Fulker",
    tax_type: "Services",
    tax_id: 2,
    tax_percentage: 15
  }, {
    id: "bfad16b2-b1a3-491b-820f-06a08092e426",
    direction: "in",
    amount: 1500,
    type: "deposit",
    date: 1598450656,
    comment: "comment",
    from_account_id: 33333,
    from_account_name: "Not Drugs",
    from_civ_name: "Siz Fulker",
    to_account_id: 11111,
    to_account_name: "Personal",
    to_civ_name: "Siz Fulker",
    tax_type: "No Tax",
    tax_id: 1,
    tax_percentage: 15
  }, {
    id: "bfad16b2-b1a3-491b-820f-06a08092e427",
    direction: "out",
    amount: 1500,
    type: "withdraw",
    date: 1598450656,
    comment: "comment",
    from_account_id: 33333,
    from_account_name: "Not Drugs",
    from_civ_name: "Siz Fulker",
    to_account_id: 11111,
    to_account_name: "Personal",
    to_civ_name: "Siz Fulker",
    tax_type: "No Tax",
    tax_id: 1,
    tax_percentage: 15
  }, {
    id: "bfad16b2-b1a3-491b-820f-06a08092e447",
    direction: "in",
    amount: 1500,
    type: "transfer",
    date: 1598450656,
    comment: "comment",
    from_account_id: 33333,
    from_account_name: "Not Drugs",
    from_civ_name: "Siz Fulker",
    to_account_id: 11111,
    to_account_name: "Personal",
    to_civ_name: "Siz Fulker",
    tax_type: "No Tax",
    tax_id: 1,
    tax_percentage: 15
  }, {
    id: "bfad16b2-b1a3-491b-820f-06a08092e437",
    direction: "out",
    amount: 1500,
    type: "transfer",
    date: 1598450656,
    comment: "comment",
    from_account_id: 33333,
    from_account_name: "Not Drugs",
    from_civ_name: "Siz Fulker",
    to_account_id: 11111,
    to_account_name: "Personal",
    to_civ_name: "Siz Fulker",
    tax_type: "No Tax",
    tax_id: 1,
    tax_percentage: 15
  }];
};
data.getTaxOptions = () => {
  return [{
    id: 1,
    name: "Vehicle",
    level: 10,
    new_level: 15,
    date: ""
  }, {
    id: 2,
    name: "Groceries",
    level: 15,
    new_level: 10,
    date: "2020-06-03T12:55:37Z"
  }];
};
data.getBusinesses = function () {
  return [{
    id: 1,
    code: "pdm",
    name: "Premium Deluxe Motorsports",
    business_type_id: 1,
    business_type_name: "showroom"
  }];
};
data.getBusinessTypes = function () {
  return [{
    id: 1,
    name: "Showroom"
  }, {
    id: 2,
    name: "Generic"
  }];
};
data.getTaxHistory = () => {
  return [{
    id: 1,
    name: "Vehicle",
    civ_name: "Coop Holligay",
    date: "2020-06-03T12:55:37Z",
    level: 10
  }, {
    id: 2,
    name: "Groceries",
    civ_name: "Mehdi",
    date: "2020-06-03T12:55:37Z",
    level: 15
  }];
};
data.getLicenses = () => {
  return [{
    id: 1,
    name: "Drivers License"
  }];
};
data.getBallots = () => {
  return [{
    id: 1,
    end_date: 1699555815,
    start_date: 1599305815,
    multi: false,
    name: "Mayor of Los Santos",
    description: "Vote for the Mayor!",
    options: [{
      id: 1,
      name: "HOLLIDAY, Coop",
      description: "Some fluff about Coop",
      icon: "birthday-cake",
      party: "Affiliated Party"
    }, {
      id: 2,
      name: "HOLLIDAY, Coop",
      description: "Some fluff about Coop",
      icon: "birthday-cake",
      party: "Affiliated Party"
    }]
  }, {
    id: 2,
    end_date: 1595005815,
    start_date: 1595005815,
    name: "Mayor of Los Santoss",
    description: "Vote for the Mayor!",
    multi: true,
    options: [{
      id: 1,
      name: "HOLLIDAY, Coop, HOLLIDAY, Coop",
      description: "Some fluff about Coop",
      icon: "birthday-cake",
      party: "Affiliated Party"
    }, {
      id: 2,
      name: "HOLLIDAY, Coop",
      description: "Some fluff about Coop",
      icon: "birthday-cake",
      party: "Affiliated Party"
    }]
  }];
};
data.getCurrentBallotOptions = () => {
  return [{
    id: 1,
    name: "Mayor of Los Santos",
    multi: false,
    options: [{
      id: 1,
      name: "HOLLIDAY, Coop",
      description: "Some fluff about Coop",
      icon: "birthday-cake",
      party: "Affiliated Party"
    }, {
      id: 2,
      name: "CHAVEZ, Nino",
      description: "Some fluff about Nino",
      icon: "birthday-cake",
      party: "Sahara International"
    }]
  }, {
    id: 2,
    name: "Governor of San Andreas",
    selected: [],
    multi: true,
    options: [{
      id: 1,
      name: "HOLLIDAY, Coop",
      description: "Some fluff about Coop",
      icon: "birthday-cake",
      party: "Affiliated Party"
    }, {
      id: 2,
      name: "CHAVEZ, Nino",
      description: "Some fluff about Nino",
      icon: "birthday-cake",
      party: "Sahara International"
    }, {
      id: 3,
      name: "PAYNE, Matthew",
      description: "Some fluff about Payne",
      icon: "birthday-cake",
      party: "Payne Enterprises"
    }]
  }, {
    id: 3,
    name: "Governor of Your Mom",
    selected: [],
    multi: true,
    options: [{
      id: 1,
      name: "HOLLIDAY, Coop",
      description: "Some fluff about Coop",
      icon: "birthday-cake",
      party: "Affiliated Party"
    }, {
      id: 2,
      name: "CHAVEZ, Nino",
      description: "Some fluff about Nino",
      icon: "birthday-cake",
      party: "Sahara International"
    }, {
      id: 3,
      name: "PAYNE, Matthew",
      description: "Some fluff about Payne",
      icon: "birthday-cake",
      party: "Payne Enterprises"
    }]
  }];
};
data.getNewspaperContent = () => {
  return {
    drugs: "Meth! MEth! METH!!!!",
    lockups: [{
      name: "Mel Rickenbacker",
      duration: 123
    }, {
      name: "Mel Rickenbacker",
      duration: 123
    }, {
      name: "Mel Rickenbacker",
      duration: 123
    }, {
      name: "Mel Rickenbacker",
      duration: 123
    }, {
      name: "Mel Rickenbacker",
      duration: 123
    }, {
      name: "Mel Rickenbacker",
      duration: 123
    }, {
      name: "Mel Rickenbacker",
      duration: 123
    }, {
      name: "Mel Rickenbacker",
      duration: 123
    }, {
      name: "Mel Rickenbacker",
      duration: 123
    }, {
      name: "Mel Rickenbacker",
      duration: 123
    }, {
      name: "Mel Rickenbacker",
      duration: 123
    }, {
      name: "Mel Rickenbacker",
      duration: 123
    }, {
      name: "Mel Rickenbacker",
      duration: 123
    }, {
      name: "Mel Rickenbacker",
      duration: 123
    }],
    taxes: [{
      type: "Vehicle",
      level: 15
    }, {
      type: "Groceries",
      level: 10
    }, {
      type: "Vehicle",
      level: 15
    }, {
      type: "Groceries",
      level: 10
    }, {
      type: "Vehicle",
      level: 15
    }, {
      type: "Groceries",
      level: 10
    }, {
      type: "Vehicle",
      level: 15
    }, {
      type: "Groceries",
      level: 10
    }, {
      type: "Vehicle",
      level: 15
    }, {
      type: "Groceries",
      level: 10
    }, {
      type: "Vehicle",
      level: 15
    }, {
      type: "Groceries",
      level: 10
    }, {
      type: "Vehicle",
      level: 15
    }, {
      type: "Groceries",
      level: 10
    }, {
      type: "Vehicle",
      level: 15
    }, {
      type: "Groceries",
      level: 10
    }, {
      type: "Vehicle",
      level: 15
    }, {
      type: "Groceries",
      level: 10
    }, {
      type: "Vehicle",
      level: 15
    }, {
      type: "Groceries",
      level: 10
    }, {
      type: "Vehicle",
      level: 15
    }, {
      type: "Groceries",
      level: 10
    }, {
      type: "Vehicle",
      level: 15
    }, {
      type: "Groceries",
      level: 10
    }, {
      type: "Vehicle",
      level: 15
    }, {
      type: "Groceries",
      level: 10
    }, {
      type: "Vehicle",
      level: 15
    }, {
      type: "Groceries",
      level: 10
    }, {
      type: "Vehicle",
      level: 15
    }, {
      type: "Groceries",
      level: 10
    }, {
      type: "Vehicle",
      level: 15
    }, {
      type: "Groceries",
      level: 10
    }],
    recentElections: [{
      date: "2020-06-03T12:55:37Z",
      title: "Mayor of Los Santos",
      description: "Coop Chavez won!"
    }, {
      date: "2020-06-03T12:55:37Z",
      title: "Mayor of Los Santos",
      description: "Coop Chavez won!"
    }, {
      date: "2020-06-03T12:55:37Z",
      title: "Mayor of Los Santos",
      description: "Vote for the Mayor! Candidates include Coop Holliday and Nino Chavez!"
    }, {
      date: "2020-06-03T12:55:37Z",
      title: "Mayor of Los Santos",
      description: "Vote for the Mayor! Candidates include Coop Holliday and Nino Chavez!"
    }, {
      date: "2020-06-03T12:55:37Z",
      title: "Mayor of Los Santos",
      description: "Vote for the Mayor! Candidates include Coop Holliday and Nino Chavez!"
    }, {
      date: "2020-06-03T12:55:37Z",
      title: "Mayor of Los Santos",
      description: "Vote for the Mayor! Candidates include Coop Holliday and Nino Chavez!"
    }, {
      date: "2020-06-03T12:55:37Z",
      title: "Mayor of Los Santos",
      description: "Vote for the Mayor! Candidates include Coop Holliday and Nino Chavez!"
    }],
    stonks: "The market has been in turmoil since the global catastrophe that was...",
    upcomingElections: [{
      date: "2020-06-03T12:55:37Z",
      title: "Mayor of Los Santos",
      description: "Vote for the Mayor! Candidates include Coop Holliday and Nino Chavez!"
    }, {
      date: "2020-06-03T12:55:37Z",
      title: "Mayor of Los Santos",
      description: "Vote for the Mayor! Candidates include Coop Holliday and Nino Chavez!"
    }, {
      date: "2020-06-03T12:55:37Z",
      title: "Mayor of Los Santos",
      description: "Vote for the Mayor! Candidates include Coop Holliday and Nino Chavez!"
    }, {
      date: "2020-06-03T12:55:37Z",
      title: "Mayor of Los Santos",
      description: "Vote for the Mayor! Candidates include Coop Holliday and Nino Chavez!"
    }, {
      date: "2020-06-03T12:55:37Z",
      title: "Mayor of Los Santos",
      description: "Vote for the Mayor! Candidates include Coop Holliday and Nino Chavez!"
    }, {
      date: "2020-06-03T12:55:37Z",
      title: "Mayor of Los Santos",
      description: "Vote for the Mayor! Candidates include Coop Holliday and Nino Chavez!"
    }, {
      date: "2020-06-03T12:55:37Z",
      title: "Mayor of Los Santos",
      description: "Vote for the Mayor! Candidates include Coop Holliday and Nino Chavez!"
    }]
  };
};
data.getNewsArchives = function () {
  return [{
    id: 1,
    information: {
      location: "Little Seoul - Palomino Ave ",
      coords: {
        x: -580.950439453125,
        y: -916.6008911132812,
        z: 29.73028564453125
      },
      clips: [{
        title: "Test Clip",
        type: "clip",
        url: "TangibleAmorphousTigerTebowing-W4G08Seoy_weNnvH"
      }],
      camera_id: "750210",
      timestamp: 1622428757,
      ingested: 0,
      id: "750210-0",
      duration: 4993,
      dateString: "5/31/2021 02:39:28 UTC"
    },
    createdAt: 1631231231,
    character_id: 1026,
    author: "Test Milli",
    approved: 0
  }, {
    id: 2,
    information: {
      location: "Little Seoul - Palomino Ave ",
      coords: {
        x: -580.950439453125,
        y: -916.6008911132812,
        z: 29.73028564453125
      },
      clips: [{
        title: "Test Clip 2",
        type: "clip",
        url: "SleepyPlausibleMetalSSSsss-7rRfuHv_SbHEHET6"
      }, {
        title: "Test Clip",
        type: "clip",
        url: "TangibleAmorphousTigerTebowing-W4G08Seoy_weNnvH"
      }],
      camera_id: "750210",
      timestamp: 1622428757,
      ingested: 0,
      id: "750210-1",
      duration: 11,
      dateString: "5/31/2021 02:39:23 UTC"
    },
    createdAt: 1631131231,
    character_id: 1026,
    author: "Test Billington",
    approved: 0
  }, {
    id: 3,
    information: {
      location: "Little Seoul - Palomino Ave ",
      coords: {
        x: -580.950439453125,
        y: -916.6008911132812,
        z: 29.73028564453125
      },
      clips: [{
        title: "Test Clip 3",
        type: "youtube",
        url: "dQw4w9WgXcQ"
      }],
      camera_id: "750210",
      timestamp: 1622418757,
      ingested: 1,
      id: "750210-2",
      duration: 50,
      dateString: "5/31/2021 02:39:23 UTC"
    },
    createdAt: 1631231131,
    character_id: 1026,
    author: "Test Dillington",
    approved: 1
  }, {
    id: 4,
    information: {
      location: "Little Seoul - Palomino Ave ",
      coords: {
        x: -580.950439453125,
        y: -916.6008911132812,
        z: 29.73028564453125
      },
      clips: [{
        title: "Test Clip 4",
        type: "streamable",
        url: "yuho7v"
      }],
      camera_id: "750210",
      timestamp: 1622418757,
      ingested: 1,
      id: "750210-3",
      duration: 50,
      dateString: "5/31/2021 02:39:23 UTC"
    },
    createdAt: 1631231131,
    character_id: 1026,
    author: "Test Sillington",
    approved: 1
  }];
};
const lastTenNuiCallsArray = [];
let isCommsDisabled = false;
const recoilSync = () => {
  isCommsDisabled = true;
};
const doRequest = async (_0x7f0da3, _0xf668ad = {}) => {
  const _0x5ddaa8 = store.getState().character || {};
  const _0x55d21f = await fetch("https://" + GetParentResourceName() + "/" + _0x7f0da3, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({
      character: _0x5ddaa8,
      ..._0xf668ad
    })
  });
  try {
    const _0x355d92 = await _0x55d21f.json();
    lastTenNuiCallsArray.unshift(JSON.stringify({
      action: _0x7f0da3,
      body: {
        character: _0x5ddaa8,
        ..._0xf668ad
      },
      result: _0x355d92
    }));
    while (lastTenNuiCallsArray.length > 10) {
      lastTenNuiCallsArray.pop();
    }
    if (isCommsDisabled) {
      if (Array.isArray(_0x355d92.body)) {
        return [];
      } else {
        return {};
      }
    }
    return _0x355d92;
  } catch (_0x57ff1b) {
    return {
      body: {},
      meta: {
        ok: false,
        message: "failed to do request for: " + _0x7f0da3 + " - " + (_0x57ff1b instanceof Error && _0x57ff1b.message)
      }
    };
  }
};
const doExternalRequest = async (_0x5226f2, _0xa33e3c = {}) => {
  const _0x5edf91 = store.getState().character || {};
  const _0x361e81 = {
    Authorization: "Bearer " + store.getState().game.token,
    "Content-Type": "application/json; charset=UTF-8"
  };
  const _0x4ea58e = isDevel() ? "http://localhost:30422/fivem/" : store.getState().game.endpoint;
  const _0x1440d8 = "" + _0x4ea58e + _0x5226f2;
  if (isDevel() || isDebug()) {
    console.log("request to: ", _0x1440d8);
  }
  const _0x34edf8 = await fetch(_0x1440d8, {
    method: "POST",
    headers: _0x361e81,
    body: JSON.stringify({
      character: _0x5edf91,
      ..._0xa33e3c
    })
  });
  try {
    const _0x4ffa62 = await _0x34edf8.json();
    lastTenNuiCallsArray.unshift(JSON.stringify({
      action: _0x5226f2,
      body: {
        character: _0x5edf91,
        ..._0xa33e3c
      },
      result: _0x4ffa62
    }));
    while (lastTenNuiCallsArray.length > 10) {
      lastTenNuiCallsArray.pop();
    }
    if (isCommsDisabled) {
      if (Array.isArray(_0x4ffa62.body)) {
        return [];
      } else {
        return {};
      }
    }
    return _0x4ffa62;
  } catch (_0x482ea4) {
    return {
      body: {},
      meta: {
        ok: false,
        message: "failed to do request for: " + _0x5226f2 + " - " + (_0x482ea4 instanceof Error && _0x482ea4.message)
      }
    };
  }
};
const defaultOptions = {
  ok: true,
  message: "",
  returnData: {},
  timeout: 250,
  extApi: false
};
const getResult = async (_0xf7f0dd, _0x55f78c, _0x223380) => {
  if (!isDevel() || _0x223380.useRealServer) {
    if (!_0x223380.extApi) {
      return doRequest(_0xf7f0dd, _0x55f78c);
    } else {
      return doExternalRequest(_0xf7f0dd, _0x55f78c);
    }
  }
  const _0x393da3 = {
    ...defaultOptions,
    ..._0x223380
  };
  let _0x29c065 = _0x393da3.returnData;
  if (typeof _0x29c065 === "string") {
    _0x29c065 = data[_0x29c065]();
  }
  return new Promise(_0x52b383 => {
    setTimeout(() => _0x52b383({
      data: _0x29c065,
      meta: {
        ok: _0x393da3.ok,
        message: _0x393da3.message
      }
    }), _0x393da3.timeout);
  });
};
async function nuiAction(_0x3ee5e4, _0x251663 = {}, _0x3dc44 = defaultOptions) {
  const _0x57e102 = store.getState().character || {};
  const _0x4aa1b5 = {
    character: _0x57e102,
    ..._0x251663
  };
  if (!isDebug()) {
    return getResult(_0x3ee5e4, _0x4aa1b5, _0x3dc44);
  }
  try {
    const _0xa8fb8d = Math.random();
    const _0xa85b9e = Date.now();
    const _0x39069 = _0x40e699 => {
      const _0x45efc7 = [{
        action: _0x3ee5e4,
        id: _0xa8fb8d,
        arrow: true,
        data: "waiting for response...",
        options: _0x3dc44,
        result: "",
        type: "Action"
      }, ..._0x40e699["debug-log"].log.slice(0, 20)];
      return {
        ..._0x40e699,
        "debug-log": {
          ..._0x40e699["debug-log"],
          log: _0x45efc7
        }
      };
    };
    store.dispatch({
      cb: _0x39069,
      type: "np-ui-action"
    });
    const _0x318174 = await getResult(_0x3ee5e4, _0x4aa1b5, _0x3dc44);
    const _0xf3f8f2 = _0x13600e => {
      const _0x1e5c57 = [..._0x13600e["debug-log"].log];
      const _0x2a7120 = _0x1e5c57.findIndex(_0x477715 => _0x477715.id === _0xa8fb8d);
      const _0x3ff69d = {
        action: _0x3ee5e4,
        arrow: !_0x318174.meta.ok,
        data: _0x4aa1b5,
        ms: Date.now() - _0xa85b9e,
        options: _0x3dc44,
        result: _0x318174,
        type: "Action"
      };
      if (_0x2a7120 !== -1) {
        _0x1e5c57[_0x2a7120] = _0x3ff69d;
      } else {
        _0x1e5c57.unshift(_0x3ff69d);
      }
      return {
        ..._0x13600e,
        "debug-log": {
          ..._0x13600e["debug-log"],
          log: _0x1e5c57
        }
      };
    };
    store.dispatch({
      cb: _0xf3f8f2,
      type: "np-ui-action"
    });
    return _0x318174;
  } catch (_0x4ee7bc) {
    console.error("nui error", _0x4ee7bc);
    const _0x40353d = _0x27a452 => {
      const _0x2655f6 = [{
        action: _0x3ee5e4,
        arrow: true,
        data: _0x4aa1b5,
        options: _0x3dc44,
        result: {
          requestFailed: _0x4ee7bc.message
        },
        type: "Action"
      }, ..._0x27a452["debug-log"].log.slice(0, 20)];
      return {
        ..._0x27a452,
        "debug-log": {
          ..._0x27a452["debug-log"],
          log: _0x2655f6
        }
      };
    };
    store.dispatch({
      cb: _0x40353d,
      type: "np-ui-action"
    });
    const _0x37b102 = {
      data: {},
      meta: {
        ok: false,
        message: _0x4ee7bc.message
      }
    };
    return _0x37b102;
  }
}
const nuiEvent = _0x284e06 => {
  if (!isDebug()) {
    return;
  }
  try {
    const _0x2a30e1 = _0x4bedc3 => {
      const _0x33b7ea = [{
        action: "" + _0x284e06.app,
        arrow: false,
        data: {
          ..._0x284e06
        },
        options: {},
        result: "",
        type: "Event"
      }, ..._0x4bedc3["debug-log"].log.slice(0, 20)];
      return {
        ..._0x4bedc3,
        "debug-log": {
          ..._0x4bedc3["debug-log"],
          log: _0x33b7ea
        }
      };
    };
    store.dispatch({
      cb: _0x2a30e1,
      type: "np-ui-action"
    });
  } catch (_0x51a8b3) {
    console.error("error logging incoming event: ", _0x51a8b3 instanceof Error && _0x51a8b3.message);
  }
};
const lastTenNuiCalls = () => {
  return lastTenNuiCallsArray.map(_0x24991f => JSON.stringify(_0x24991f, null, 4)).join("\n");
};
const config = [];
const defaultStoreState = {};
const defaultConfigObject = {
  background: "#222831",
  events: null,
  hidden: () => false,
  init: null,
  position: 1000,
  stateConfig: null
};
const getDefaultStoreState = () => {
  return defaultStoreState;
};
async function getPhoneAppsConfig() {
  if (config.length > 0) {
    return config;
  }
  const _0x581a1e = Object.assign({
    "./apps/calculator/config.tsx": () => _0x10ca93(() => import("./config-b1fc5428.js"), true ? ["./config-b1fc5428.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js"] : undefined, import.meta.url),
    "./apps/calendar/config.tsx": () => _0x10ca93(() => import("./config-0d554204.js"), true ? ["./config-0d554204.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./store-52c39051.js", "./index-eac3b5ce.js", "./icon-7f5cdae2.js", "./tooltip-cb871d8a.js", "./translations-7705db3f.js", "./actions-354e5926.js", "./dev-data-afd59de4.js", "./actions-c0279434.js", "./store-779dab40.js", "./store-50ddf3e0.js", "./vite-a4975f27.js", "./bundle-e94787e2.js", "./index-e9ff94e9.js", "./text-f7ee3e03.js", "./paper-22e478e9.js", "./button-c47bff31.js", "./datetime-2c501277.js", "./preferences-c03a2c0b.js", "./date-1e39c206.js", "./input-c6588ceb.js", "./format-10690d6f.js", "./styles-61014012.js", "./index-ae383549.js", "./simple-form-6b6335d8.js", "./character-8ebc09ae.js"] : undefined, import.meta.url),
    "./apps/call-history/config.tsx": () => _0x10ca93(() => import("./config-4d8e163f.js").then(_0x463ac8 => _0x463ac8.b), true ? ["./config-4d8e163f.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./store-df6117ab.js", "./date-1e39c206.js", "./translations-7705db3f.js", "./notifications-c44d34f0.js", "./icon-7f5cdae2.js", "./tooltip-cb871d8a.js", "./lib-fc905d4c.js", "./format-10690d6f.js", "./duration-timer-2aea312f.js", "./actions-c0279434.js", "./store-779dab40.js", "./store-50ddf3e0.js", "./vite-a4975f27.js", "./bundle-e94787e2.js", "./store-1436e66f.js", "./store-7ddff63f.js", "./input-c6588ceb.js", "./text-f7ee3e03.js", "./styles-61014012.js", "./index-ae383549.js", "./simple-form-6b6335d8.js", "./index-c0da55ad.js", "./index-eac3b5ce.js", "./index-984d77ed.js"] : undefined, import.meta.url),
    "./apps/cars/config.tsx": () => _0x10ca93(() => import("./config-6edf9b63.js"), true ? ["./config-6edf9b63.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./store-8bc94b42.js", "./dev-data-afd59de4.js", "./character-8ebc09ae.js", "./icon-7f5cdae2.js", "./actions-c0279434.js", "./store-779dab40.js", "./store-50ddf3e0.js", "./vite-a4975f27.js", "./bundle-e94787e2.js", "./input-c6588ceb.js", "./text-f7ee3e03.js", "./translations-7705db3f.js", "./format-10690d6f.js", "./styles-61014012.js", "./index-ae383549.js", "./simple-form-6b6335d8.js"] : undefined, import.meta.url),
    "./apps/contacts/config.tsx": () => _0x10ca93(() => import("./config-c24fa5d2.js"), true ? ["./config-c24fa5d2.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./store-7ddff63f.js", "./config-4d8e163f.js", "./store-df6117ab.js", "./date-1e39c206.js", "./translations-7705db3f.js", "./notifications-c44d34f0.js", "./icon-7f5cdae2.js", "./tooltip-cb871d8a.js", "./lib-fc905d4c.js", "./format-10690d6f.js", "./duration-timer-2aea312f.js", "./actions-c0279434.js", "./store-779dab40.js", "./store-50ddf3e0.js", "./vite-a4975f27.js", "./bundle-e94787e2.js", "./store-1436e66f.js", "./input-c6588ceb.js", "./text-f7ee3e03.js", "./styles-61014012.js", "./index-ae383549.js", "./simple-form-6b6335d8.js", "./index-c0da55ad.js", "./index-eac3b5ce.js", "./index-984d77ed.js"] : undefined, import.meta.url),
    "./apps/conversations/config.tsx": () => _0x10ca93(() => import("./config-e7b2a5bd.js"), true ? ["./config-e7b2a5bd.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./store-bdd3f58b.js", "./actions-a6d0bfed.js", "./lib-fc905d4c.js", "./format-10690d6f.js", "./dev-data-afd59de4.js", "./config-4d8e163f.js", "./store-df6117ab.js", "./date-1e39c206.js", "./translations-7705db3f.js", "./notifications-c44d34f0.js", "./icon-7f5cdae2.js", "./tooltip-cb871d8a.js", "./duration-timer-2aea312f.js", "./actions-c0279434.js", "./store-779dab40.js", "./store-50ddf3e0.js", "./vite-a4975f27.js", "./bundle-e94787e2.js", "./store-1436e66f.js", "./store-7ddff63f.js", "./input-c6588ceb.js", "./text-f7ee3e03.js", "./styles-61014012.js", "./index-ae383549.js", "./simple-form-6b6335d8.js", "./index-c0da55ad.js", "./index-eac3b5ce.js", "./index-984d77ed.js", "./misc-13f33aa2.js", "./image-container-d39217d7.js", "./actions-6c142f68.js", "./actions-d7dccfad.js", "./store-75fb65a1.js"] : undefined, import.meta.url),
    "./apps/crypto/config.tsx": () => _0x10ca93(() => import("./config-96fd38df.js"), true ? ["./config-96fd38df.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./notifications-c44d34f0.js", "./icon-7f5cdae2.js", "./tooltip-cb871d8a.js", "./translations-7705db3f.js", "./lib-fc905d4c.js", "./format-10690d6f.js", "./store-8da1623c.js", "./dev-data-afd59de4.js", "./useOutsideClick-e98795c9.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./apps/details/config.tsx": () => _0x10ca93(() => import("./config-9f2786fe.js"), true ? ["./config-9f2786fe.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./dev-data-afd59de4.js", "./character-8ebc09ae.js", "./format-10690d6f.js", "./text-f7ee3e03.js", "./translations-7705db3f.js", "./spinner-1649f31d.js", "./index-eac3b5ce.js", "./icon-7f5cdae2.js", "./tooltip-cb871d8a.js", "./lib-fc905d4c.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./apps/documents/config.tsx": () => _0x10ca93(() => import("./config-b372c5d1.js"), true ? ["./config-b372c5d1.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./store-52786cd5.js", "./actions-c0279434.js", "./store-779dab40.js", "./store-50ddf3e0.js", "./vite-a4975f27.js", "./bundle-e94787e2.js", "./dev-data-afd59de4.js", "./input-c6588ceb.js", "./text-f7ee3e03.js", "./translations-7705db3f.js", "./icon-7f5cdae2.js", "./format-10690d6f.js", "./styles-61014012.js", "./index-ae383549.js", "./simple-form-6b6335d8.js", "./useOutsideClick-e98795c9.js", "./datetime-2c501277.js", "./preferences-c03a2c0b.js", "./date-1e39c206.js", "./tooltip-cb871d8a.js", "./character-8ebc09ae.js", "./index-c0da55ad.js", "./index-eac3b5ce.js", "./notifications-c44d34f0.js", "./duration-timer-2aea312f.js"] : undefined, import.meta.url),
    "./apps/doj/config.tsx": () => _0x10ca93(() => import("./config-de2cc5b4.js"), true ? ["./config-de2cc5b4.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./dev-data-afd59de4.js", "./config-4d8e163f.js", "./store-df6117ab.js", "./date-1e39c206.js", "./translations-7705db3f.js", "./notifications-c44d34f0.js", "./icon-7f5cdae2.js", "./tooltip-cb871d8a.js", "./lib-fc905d4c.js", "./format-10690d6f.js", "./duration-timer-2aea312f.js", "./actions-c0279434.js", "./store-779dab40.js", "./store-50ddf3e0.js", "./vite-a4975f27.js", "./bundle-e94787e2.js", "./store-1436e66f.js", "./store-7ddff63f.js", "./input-c6588ceb.js", "./text-f7ee3e03.js", "./styles-61014012.js", "./index-ae383549.js", "./simple-form-6b6335d8.js", "./index-c0da55ad.js", "./index-eac3b5ce.js", "./index-984d77ed.js", "./app-container-77eaf0ff.js", "./character-8ebc09ae.js", "./store-dc12fbaf.js"] : undefined, import.meta.url),
    "./apps/emails/config.tsx": () => _0x10ca93(() => import("./config-64986c28.js"), true ? ["./config-64986c28.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./store-2e12b715.js", "./date-1e39c206.js", "./translations-7705db3f.js", "./icon-7f5cdae2.js", "./index-984d77ed.js", "./notifications-c44d34f0.js", "./tooltip-cb871d8a.js", "./actions-6c142f68.js", "./actions-d7dccfad.js", "./store-75fb65a1.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./apps/employment/config.tsx": () => _0x10ca93(() => import("./config-0510d03b.js"), true ? ["./config-0510d03b.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./app-container-77eaf0ff.js", "./icon-7f5cdae2.js", "./input-c6588ceb.js", "./text-f7ee3e03.js", "./translations-7705db3f.js", "./format-10690d6f.js", "./styles-61014012.js", "./index-ae383549.js", "./tooltip-cb871d8a.js", "./actions-c0279434.js", "./store-779dab40.js", "./store-50ddf3e0.js", "./vite-a4975f27.js", "./bundle-e94787e2.js", "./paper-22e478e9.js", "./simple-form-6b6335d8.js", "./button-c47bff31.js", "./multi-pager-4b2260b4.js", "./date-1e39c206.js", "./dev-data-afd59de4.js", "./store-6adab5c7.js", "./notifications-c44d34f0.js", "./duration-timer-2aea312f.js"] : undefined, import.meta.url),
    "./apps/erpinger/config.tsx": () => _0x10ca93(() => import("./config-9d11f468.js"), true ? ["./config-9d11f468.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./character-8ebc09ae.js", "./icon-7f5cdae2.js", "./notifications-c44d34f0.js", "./tooltip-cb871d8a.js", "./translations-7705db3f.js", "./duration-timer-2aea312f.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./apps/guber/config.tsx": () => _0x10ca93(() => import("./config-3df692c2.js"), true ? ["./config-3df692c2.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./store-26508309.js", "./index-ae383549.js", "./translations-7705db3f.js", "./character-8ebc09ae.js", "./icon-7f5cdae2.js", "./tooltip-cb871d8a.js", "./misc-13f33aa2.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./apps/heist-signups/config.tsx": () => _0x10ca93(() => import("./config-9f54c777.js"), true ? ["./config-9f54c777.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./character-8ebc09ae.js", "./actions-c0279434.js", "./store-779dab40.js", "./store-50ddf3e0.js", "./vite-a4975f27.js", "./bundle-e94787e2.js", "./app-container-77eaf0ff.js", "./icon-7f5cdae2.js", "./input-c6588ceb.js", "./text-f7ee3e03.js", "./translations-7705db3f.js", "./format-10690d6f.js", "./styles-61014012.js", "./index-ae383549.js", "./tooltip-cb871d8a.js", "./button-c47bff31.js", "./paper-22e478e9.js", "./simple-form-6b6335d8.js", "./store-6eb0fb42.js"] : undefined, import.meta.url),
    "./apps/home-screen/config.tsx": () => _0x10ca93(() => import("./config-9a17a1f6.js"), true ? ["./config-9a17a1f6.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./actions-c0279434.js", "./store-779dab40.js", "./store-50ddf3e0.js", "./vite-a4975f27.js", "./bundle-e94787e2.js", "./icon-7f5cdae2.js", "./tooltip-cb871d8a.js", "./translations-7705db3f.js", "./app-container-77eaf0ff.js", "./input-c6588ceb.js", "./text-f7ee3e03.js", "./format-10690d6f.js", "./styles-61014012.js", "./index-ae383549.js", "./store-8ea8dcbb.js", "./notifications-c44d34f0.js", "./duration-timer-2aea312f.js"] : undefined, import.meta.url),
    "./apps/jobs/config.tsx": () => _0x10ca93(() => import("./config-7874509d.js"), true ? ["./config-7874509d.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./store-3b8071d7.js", "./date-1e39c206.js", "./translations-7705db3f.js", "./icon-7f5cdae2.js", "./notifications-c44d34f0.js", "./tooltip-cb871d8a.js", "./duration-timer-2aea312f.js", "./game-7f8fe59d.js", "./store-6adab5c7.js", "./format-10690d6f.js", "./dev-data-afd59de4.js", "./text-f7ee3e03.js", "./character-8ebc09ae.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./apps/lifeinvader/config.tsx": () => _0x10ca93(() => import("./config-da27a95b.js"), true ? ["./config-da27a95b.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./multi-pager-4b2260b4.js", "./styles-61014012.js", "./actions-c0279434.js", "./store-779dab40.js", "./store-50ddf3e0.js", "./vite-a4975f27.js", "./bundle-e94787e2.js", "./app-container-77eaf0ff.js", "./icon-7f5cdae2.js", "./input-c6588ceb.js", "./text-f7ee3e03.js", "./translations-7705db3f.js", "./format-10690d6f.js", "./index-ae383549.js", "./tooltip-cb871d8a.js", "./paper-22e478e9.js", "./misc-13f33aa2.js", "./simple-form-6b6335d8.js", "./character-8ebc09ae.js", "./store-c488cfa3.js"] : undefined, import.meta.url),
    "./apps/metro/config.tsx": () => _0x10ca93(() => import("./config-64bd13b8.js"), true ? ["./config-64bd13b8.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./store-7a63ff69.js", "./dev-data-afd59de4.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./apps/news/config.tsx": () => _0x10ca93(() => import("./config-78a6a42f.js"), true ? ["./config-78a6a42f.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./actions-c0279434.js", "./store-779dab40.js", "./store-50ddf3e0.js", "./vite-a4975f27.js", "./bundle-e94787e2.js", "./store-555b9636.js", "./dev-data-afd59de4.js", "./game-7f8fe59d.js", "./store-6adab5c7.js", "./format-10690d6f.js", "./app-container-77eaf0ff.js", "./icon-7f5cdae2.js", "./input-c6588ceb.js", "./text-f7ee3e03.js", "./translations-7705db3f.js", "./styles-61014012.js", "./index-ae383549.js", "./tooltip-cb871d8a.js", "./paper-22e478e9.js", "./date-1e39c206.js", "./simple-form-6b6335d8.js", "./button-c47bff31.js", "./multi-pager-4b2260b4.js"] : undefined, import.meta.url),
    "./apps/selfieApp/config.tsx": () => _0x10ca93(() => import("./config-2ce49a68.js"), true ? ["./config-2ce49a68.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./apps/settings/config.tsx": () => _0x10ca93(() => import("./config-8da2ee01.js"), true ? ["./config-8da2ee01.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./index-eac3b5ce.js", "./icon-7f5cdae2.js", "./tooltip-cb871d8a.js", "./translations-7705db3f.js", "./actions-6c142f68.js", "./actions-d7dccfad.js", "./store-75fb65a1.js", "./vite-a4975f27.js", "./bundle-e94787e2.js"] : undefined, import.meta.url),
    "./apps/showroom-manager/config.tsx": () => _0x10ca93(() => import("./config-adbf3e3a.js"), true ? ["./config-adbf3e3a.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./game-7f8fe59d.js", "./store-6adab5c7.js", "./format-10690d6f.js", "./dev-data-afd59de4.js", "./actions-c0279434.js", "./store-779dab40.js", "./store-50ddf3e0.js", "./vite-a4975f27.js", "./bundle-e94787e2.js", "./app-container-77eaf0ff.js", "./icon-7f5cdae2.js", "./input-c6588ceb.js", "./text-f7ee3e03.js", "./translations-7705db3f.js", "./styles-61014012.js", "./index-ae383549.js", "./tooltip-cb871d8a.js", "./paper-22e478e9.js", "./simple-form-6b6335d8.js", "./store-84c2d143.js", "./notifications-c44d34f0.js", "./duration-timer-2aea312f.js"] : undefined, import.meta.url),
    "./apps/twatter/config.tsx": () => _0x10ca93(() => import("./config-dc49c102.js"), true ? ["./config-dc49c102.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./store-cb919828.js", "./actions-c0279434.js", "./store-779dab40.js", "./store-50ddf3e0.js", "./vite-a4975f27.js", "./bundle-e94787e2.js", "./tooltip-cb871d8a.js", "./translations-7705db3f.js", "./dev-data-afd59de4.js", "./input-c6588ceb.js", "./text-f7ee3e03.js", "./icon-7f5cdae2.js", "./format-10690d6f.js", "./styles-61014012.js", "./index-ae383549.js", "./simple-form-6b6335d8.js", "./date-1e39c206.js", "./actions-354e5926.js", "./store-52c39051.js", "./image-container-d39217d7.js", "./misc-13f33aa2.js", "./actions-6c142f68.js", "./actions-d7dccfad.js", "./store-75fb65a1.js", "./notifications-c44d34f0.js"] : undefined, import.meta.url),
    "./apps/yellow-pages/config.tsx": () => _0x10ca93(() => import("./config-3caca055.js"), true ? ["./config-3caca055.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./store-e4284424.js", "./dev-data-afd59de4.js", "./icon-7f5cdae2.js", "./misc-13f33aa2.js", "./format-10690d6f.js", "./config-4d8e163f.js", "./store-df6117ab.js", "./date-1e39c206.js", "./translations-7705db3f.js", "./notifications-c44d34f0.js", "./tooltip-cb871d8a.js", "./lib-fc905d4c.js", "./duration-timer-2aea312f.js", "./actions-c0279434.js", "./store-779dab40.js", "./store-50ddf3e0.js", "./vite-a4975f27.js", "./bundle-e94787e2.js", "./store-1436e66f.js", "./store-7ddff63f.js", "./input-c6588ceb.js", "./text-f7ee3e03.js", "./styles-61014012.js", "./index-ae383549.js", "./simple-form-6b6335d8.js", "./index-c0da55ad.js", "./index-eac3b5ce.js", "./index-984d77ed.js"] : undefined, import.meta.url),
    "./components/content-top/config.tsx": () => _0x10ca93(() => import("./config-c30b7635.js"), true ? ["./config-c30b7635.js", "./vendor-6c45b22f.js", "./commonjsHelpers-c5dac66b.js", "./index-191f7df1.js", "./actions-c0279434.js", "./store-779dab40.js", "./store-50ddf3e0.js", "./vite-a4975f27.js", "./bundle-e94787e2.js", "./icon-7f5cdae2.js", "./input-c6588ceb.js", "./text-f7ee3e03.js", "./translations-7705db3f.js", "./format-10690d6f.js", "./styles-61014012.js", "./index-ae383549.js", "./simple-form-6b6335d8.js", "./store-1b3966b7.js"] : undefined, import.meta.url)
  });
  const _0x6dbedd = Object.values(_0x581a1e).map(_0x7997d3 => {
    return _0x7997d3().then(_0xb0624a => {
      config.push(_0xb0624a.default(defaultConfigObject));
    });
  });
  const _0x54c235 = Object.assign({
    "./apps/calendar/store.ts": () => _0x10ca93(() => import("./store-52c39051.js"), true ? [] : undefined, import.meta.url),
    "./apps/call-history/store.ts": () => _0x10ca93(() => import("./store-df6117ab.js"), true ? [] : undefined, import.meta.url),
    "./apps/cars/store.ts": () => _0x10ca93(() => import("./store-8bc94b42.js"), true ? [] : undefined, import.meta.url),
    "./apps/contacts/store.ts": () => _0x10ca93(() => import("./store-7ddff63f.js"), true ? [] : undefined, import.meta.url),
    "./apps/conversations/store.ts": () => _0x10ca93(() => import("./store-bdd3f58b.js"), true ? [] : undefined, import.meta.url),
    "./apps/crypto/store.ts": () => _0x10ca93(() => import("./store-8da1623c.js"), true ? [] : undefined, import.meta.url),
    "./apps/documents/store.ts": () => _0x10ca93(() => import("./store-52786cd5.js"), true ? [] : undefined, import.meta.url),
    "./apps/doj/store.ts": () => _0x10ca93(() => import("./store-dc12fbaf.js"), true ? [] : undefined, import.meta.url),
    "./apps/emails/store.ts": () => _0x10ca93(() => import("./store-2e12b715.js"), true ? [] : undefined, import.meta.url),
    "./apps/employment/store.ts": () => _0x10ca93(() => import("./store-6adab5c7.js"), true ? [] : undefined, import.meta.url),
    "./apps/erpinger/store.ts": () => _0x10ca93(() => import("./store-536c9c98.js"), true ? [] : undefined, import.meta.url),
    "./apps/guber/store.ts": () => _0x10ca93(() => import("./store-26508309.js"), true ? [] : undefined, import.meta.url),
    "./apps/heist-signups/store.ts": () => _0x10ca93(() => import("./store-6eb0fb42.js"), true ? [] : undefined, import.meta.url),
    "./apps/home-screen/store.ts": () => _0x10ca93(() => import("./store-8ea8dcbb.js"), true ? [] : undefined, import.meta.url),
    "./apps/jobs/store.ts": () => _0x10ca93(() => import("./store-3b8071d7.js"), true ? [] : undefined, import.meta.url),
    "./apps/lifeinvader/store.ts": () => _0x10ca93(() => import("./store-c488cfa3.js"), true ? [] : undefined, import.meta.url),
    "./apps/metro/store.ts": () => _0x10ca93(() => import("./store-7a63ff69.js"), true ? [] : undefined, import.meta.url),
    "./apps/news/store.ts": () => _0x10ca93(() => import("./store-555b9636.js"), true ? [] : undefined, import.meta.url),
    "./apps/showroom-manager/store.ts": () => _0x10ca93(() => import("./store-84c2d143.js"), true ? [] : undefined, import.meta.url),
    "./apps/twatter/store.ts": () => _0x10ca93(() => import("./store-cb919828.js"), true ? [] : undefined, import.meta.url),
    "./apps/yellow-pages/store.ts": () => _0x10ca93(() => import("./store-e4284424.js"), true ? [] : undefined, import.meta.url),
    "./components/content-bottom/store.ts": () => _0x10ca93(() => import("./store-cf7996ad.js"), true ? [] : undefined, import.meta.url),
    "./components/content-top/store.ts": () => _0x10ca93(() => import("./store-1b3966b7.js"), true ? [] : undefined, import.meta.url),
    "./components/modal/store.ts": () => _0x10ca93(() => import("./store-779dab40.js"), true ? [] : undefined, import.meta.url),
    "./components/send-message-modal/store.ts": () => _0x10ca93(() => import("./store-1436e66f.js"), true ? [] : undefined, import.meta.url)
  });
  const _0x3aee1e = Object.values(_0x54c235).map(_0x5e14a2 => {
    return _0x5e14a2().then(_0x529eda => {
      return _0x529eda.default;
    });
  });
  const _0x3f94c6 = await Promise.all(_0x6dbedd).then(() => config);
  const _0x4aaf77 = await Promise.all(_0x3aee1e);
  for (let _0xf5175a = 0; _0xf5175a < _0x4aaf77.length; _0xf5175a++) {
    defaultStoreState[_0x4aaf77[_0xf5175a].key] = _0x4aaf77[_0xf5175a].initialState;
  }
  config.sort((_0x1a584c, _0x508b9e) => {
    if (_0x1a584c.position < _0x508b9e.position) {
      return -1;
    } else if (_0x1a584c.position > _0x508b9e.position) {
      return 1;
    }
    return 0;
  });
  return config;
}
async function getEvents(_0x508bc2) {
  const _0x3c1718 = {};
  const _0x594650 = (_0x316c38, _0x494048) => {
    const _0x480de7 = [...(Array.isArray(_0x3c1718[_0x316c38]) ? _0x3c1718[_0x316c38] : [])];
    _0x480de7.push(_0x494048);
    _0x3c1718[_0x316c38] = _0x480de7;
  };
  _0x508bc2.forEach(({
    events: _0x5772b3
  }) => {
    if (!_0x5772b3) {
      return;
    }
    _0x5772b3()(_0x594650, {
      config: _0x508bc2
    });
  });
  return _0x3c1718;
}
const config$1 = {};
const SDK = new _0x45ddef({
  codename: "np-ui",
  version: "4.0.0"
});
const lastTenEvents = [];
let printEvents = false;
const BaseApp = () => {
  const [_0x5d813c, _0x5f589d] = useUIState("main");
  const [_0x66bd2a, _0x2c12f5] = useUIState("phone");
  const [_0x14b7c2, _0x4ea2ca] = _0x8cdf9d.useState([]);
  const _0x51a30d = _0x8cdf9d.useCallback(async () => {
    const _0x546f55 = await getAppsConfig();
    _0x4ea2ca(_0x546f55);
  }, []);
  const _0x5eca17 = _0x8cdf9d.useCallback(async () => {
    const _0x335976 = await getPhoneAppsConfig();
    const _0x9f7cc4 = await getEvents(_0x335976);
    _0x2c12f5({
      phoneConfig: _0x335976,
      phoneEvents: _0x9f7cc4
    });
  }, []);
  const _0x14cde2 = _0xf50c08 => {
    if (!_0xf50c08 || !_0xf50c08.data || _0xf50c08.data.source !== "np-nui") {
      return;
    }
    lastTenEvents.unshift(JSON.stringify(_0xf50c08.data));
    while (lastTenEvents.length > 10) {
      lastTenEvents.pop();
    }
    if (printEvents) {
      console.log(Math.floor(Date.now() / 1000), JSON.stringify(_0xf50c08.data));
    }
    if (_0xf50c08.data.app !== "main") {
      return;
    }
    if (_0xf50c08.data.action === "enable-prints") {
      printEvents = true;
    }
    if (_0xf50c08.data.action === "restart") {
      _0x5579f2();
    }
    if (_0xf50c08.data.action === "openUrl") {
      window.invokeNative("openUrl", _0xf50c08.data.url);
    }
  };
  const _0x4da6bb = _0x48b75c => {
    const _0x134166 = _0x48b75c || window.event;
    if (_0x134166.keyCode === 27) {
      nuiAction("np-ui:closeApp");
    }
  };
  const _0x4f4c96 = () => {
    document.removeEventListener("keyup", _0x4da6bb);
    window.removeEventListener("message", _0x14cde2);
  };
  const _0x2ac47f = () => {
    document.addEventListener("keyup", _0x4da6bb);
    window.addEventListener("message", _0x14cde2);
    if (isDevel()) {
      dispatch({
        app: "character",
        data: data.init().character
      });
    }
  };
  const _0x5579f2 = () => {
    nuiAction("np-ui:closeApp");
    _0x5f589d({
      restarting: true
    });
    setTimeout(async () => {
      _0x4ea2ca([]);
      reset();
      _0x4f4c96();
      nuiAction("np-ui:resetApp");
      await _0x3e83dc();
    }, 2500);
  };
  const _0x4fe6bd = (_0x5037d2, _0x287d7f) => {
    console.log("---- NP UI CATASTROPHIC ERROR -----");
    console.log("Message: ", _0x5037d2);
    console.log("Stack: ", _0x287d7f.componentStack);
    console.log("----- ----- ----- ----- ----- -----");
    setTimeout(async () => {
      const _0x5b2359 = {
        title: "Catastrophic UI Error: " + _0x5037d2.message,
        stack: _0x287d7f.componentStack,
        json: ("\n          Redux State: " + JSON.stringify(store.getState()) + "\n          --\n          Last 10 Events: " + lastTenEvents.join("\n") + "\n          --\n          Last 10 NUI Events: " + lastTenNuiCalls() + "\n        ").trim()
      };
      _0x5579f2();
    }, 1500);
  };
  const _0x3e83dc = async () => {
    await _0x51a30d();
    await _0x5eca17();
    await _0x2ac47f();
  };
  _0x8cdf9d.useEffect(() => {
    _0x3e83dc();
    return () => _0x4f4c96();
  }, [_0x51a30d, _0x5eca17]);
  return _0x3a9672.jsx(_0x3a9672.Fragment, {
    children: _0x5d813c.restarting ? _0x3a9672.jsx(_0x3e766f, {
      open: true,
      children: _0x3a9672.jsx(_0x33fae8, {
        elevation: 6,
        variant: "filled",
        severity: "info",
        children: "Full restart in progress..."
      })
    }) : _0x3a9672.jsx(_0x43edcd, {
      fallback: _0x3a9672.jsx(ErrorUI, {}),
      onError: _0x4fe6bd,
      children: _0x3a9672.jsx("div", {
        id: "main-app-container",
        style: isDevel() ? {
          backgroundColor: "#aaa"
        } : {},
        children: _0x14b7c2.map(_0x772a52 => _0x3a9672.jsx(_0x772a52.render, {}, _0x772a52.name))
      })
    })
  });
};
const fonts = "";
const index = "";
if (typeof window.global === "undefined") {
  window.global = window;
}
(async () => {
  const _0x4d985e = await createStore();
  const _0x5db830 = _0x5c4c09.createRoot(document.getElementById("root"));
  _0x5db830.render(_0x3a9672.jsx(_0xbaeaca, {
    store: _0x4d985e,
    children: _0x3a9672.jsx(_0x10487e, {
      theme: getTheme("dark"),
      children: _0x3a9672.jsx(BaseApp, {})
    })
  }));
})();
export { ConfigTypes as C, ErrorUI as E, recoilSync as a, nuiEvent as b, isDebug as c, compose as d, data as e, action as f, getDefaultStoreState as g, isDevel as i, lastTenNuiCalls as l, nuiAction as n, reset as r, store as s, useUIState as u };