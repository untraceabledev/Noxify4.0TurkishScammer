import { f as _0x1ab357 } from "./index-d5aaa08b.js";
import _0x4b26f6 from "./store-779dab40.js";
import _0x4104f0 from "./store-50ddf3e0.js";
const openBrowser = _0x1ab357(_0x378b69 => ({
  ..._0x378b69,
  [_0x4104f0.key]: {
    ..._0x378b69[_0x4104f0.key],
    activeApp: "browser",
    style: {}
  }
}));
const selectApp = _0x3ce900 => {
  const _0xeb2b23 = _0x3ce900.name;
  _0x1ab357(_0x2bc74a => {
    const _0x28d2dd = [..._0x2bc74a.phone.appsWithNotifications];
    if (_0x28d2dd.includes(_0xeb2b23)) {
      _0x28d2dd.splice(_0x28d2dd.indexOf(_0xeb2b23), 1);
    }
    return {
      ..._0x2bc74a,
      phone: {
        ..._0x2bc74a.phone,
        appsWithNotifications: _0x28d2dd,
        activeApp: _0xeb2b23
      }
    };
  })();
};
const goHome = _0x1ab357(_0x2ee1ca => ({
  ..._0x2ee1ca,
  [_0x4104f0.key]: {
    ..._0x2ee1ca[_0x4104f0.key],
    activeApp: "home-screen",
    style: {}
  }
}));
const modalKey = _0x4b26f6.key;
const modalOpen = _0x2d4a03 => {
  _0x1ab357(_0x3a5d53 => ({
    ..._0x3a5d53,
    [modalKey]: {
      ..._0x4b26f6.initialState,
      content: _0x2d4a03,
      show: true
    }
  }))();
};
const modalClose = (_0x5d5a90 = true) => {
  _0x1ab357(_0x4bde19 => ({
    ..._0x4bde19,
    [modalKey]: {
      ..._0x4b26f6.initialState,
      slowHide: _0x5d5a90
    }
  }))();
};
const modalLoading = (_0x57fdda = true) => {
  _0x1ab357(_0x1b16dc => ({
    ..._0x1b16dc,
    [modalKey]: {
      ..._0x4b26f6.initialState,
      loading: _0x57fdda,
      content: _0x1b16dc[modalKey].content,
      show: true
    }
  }))();
};
const modalError = (_0xd2b019, _0x34d253 = false) => {
  _0x1ab357(_0x176887 => ({
    ..._0x176887,
    [modalKey]: {
      ..._0x176887[modalKey],
      closeOnErrorOkay: _0x34d253,
      error: _0xd2b019,
      loading: false
    }
  }))();
};
const modalConfirm = (_0x463b38, _0x208fd1 = "Are you sure?") => {
  _0x1ab357(_0x5112f6 => ({
    ..._0x5112f6,
    [modalKey]: {
      ..._0x4b26f6.initialState,
      confirmText: _0x208fd1,
      onConfirm: _0x463b38,
      isConfirm: true,
      show: true
    }
  }))();
};
export { modalOpen as a, modalLoading as b, modalError as c, modalConfirm as d, goHome as g, modalClose as m, selectApp as s };