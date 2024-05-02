(() => {
    'use strict';
  
    var _0x32889a = {};
    (() => {
      _0x32889a.g = function () {
        if (typeof globalThis === "object") {
          return globalThis;
        }
        try {
          return this || new Function("return this")();
        } catch (_0x3defc8) {
          if (typeof window === "object") {
            return window;
          }
        }
      }();
    })();
    var _0x2e86df = {};
    ;
    const _0x4bcb6d = globalThis.NPX;
    const _0x1a0ae3 = _0x4bcb6d.Hud;
    const _0x549714 = _0x4bcb6d.Utils;
    const _0x23a4e8 = _0x4bcb6d.Zones;
    const _0x427f0f = _0x4bcb6d.Events;
    const _0x34cf45 = _0x4bcb6d.Streaming;
    const _0x53cb50 = _0x4bcb6d.Procedures;
    const _0x547081 = _0x4bcb6d.Interface;
    const _0x1674b9 = null && _0x4bcb6d;
    ;
    let _0x2df3a0;
    const _0x17f826 = new Map();
    const _0x70260c = GetCurrentResourceName();
    async function _0x46fd49() {
      while (!globalThis.exports.config.IsConfigReady()) {
        await new Promise(_0x570725 => setTimeout(_0x570725, 100));
      }
      _0x2df3a0 = globalThis.exports.config.GetModuleConfig("main");
    }
    on("np-config:configLoaded", (_0x2144c7, _0x500ac2) => {
      if (_0x2144c7 === "main") {
        _0x2df3a0 = _0x500ac2;
      } else if (_0x17f826.has(_0x2144c7)) {
        _0x17f826.set(_0x2144c7, _0x500ac2);
      }
    });
    function _0x1565ed(_0xbdc12d) {
      return _0x2df3a0[_0xbdc12d];
    }
    function _0x12e53a(_0x4b5386, _0x59e69c) {
      if (!_0x17f826.has(_0x4b5386)) {
        const _0x24c44c = _0x32889a.g.exports.config.GetModuleConfig(_0x4b5386);
        if (_0x24c44c === undefined) {
          return;
        }
        _0x17f826.set(_0x4b5386, _0x24c44c);
      }
      const _0x47cc35 = _0x17f826.get(_0x4b5386);
      if (_0x59e69c) {
        return _0x47cc35?.[_0x59e69c];
      } else {
        return _0x47cc35;
      }
    }
    function _0x4acb65(_0x269d87) {
      return _0x12e53a(_0x70260c, _0x269d87);
    }
    ;
    async function _0x4ba15f(_0x24ba7f) {
      return new Promise(_0x536d06 => setTimeout(() => _0x536d06(), _0x24ba7f));
    }
    ;
    const _0x186fe3 = _0x552fee => {
      let _0x36e446 = _0x552fee;
      let _0x52381a = false;
      if (_0x552fee.includes("youtube.com/watch?v=")) {
        _0x52381a = true;
        _0x36e446 = _0x552fee.split("v=")[1];
      } else if (_0x552fee.includes("youtu.be/")) {
        _0x52381a = true;
        _0x36e446 = _0x552fee.split("youtu.be/")[1];
      } else if (_0x552fee.includes("youtube.com/shorts/")) {
        _0x52381a = true;
        _0x36e446 = _0x552fee.split("shorts/")[1];
      }
      if (_0x36e446.includes("&")) {
        _0x36e446 = _0x36e446.split("&")[0];
      }
      if (_0x36e446.includes("?")) {
        _0x36e446 = _0x36e446.split("?")[0];
      }
      if (_0x36e446.includes("#")) {
        _0x36e446 = _0x36e446.split("#")[0];
      }
      return [_0x36e446, _0x52381a];
    };
    function _0x4a6328(_0x124ca4) {
      try {
        return JSON.parse(_0x124ca4);
      } catch (_0x480d50) {
        throw new Error("Error while parsing json string");
      }
    }
    ;
    let _0x1effad = null;
    let _0x182a14 = null;
    let _0x575107 = null;
    let _0xa571c7 = null;
    let _0x5ab875 = null;
    let _0x34a09d = null;
    let _0x25baca = false;
    const _0x5a2d68 = () => {};
    _0x427f0f.on("np-cinema:setCinemaSet", _0x11ef27 => {
      if (!_0x1effad || !_0x182a14) {
        return;
      }
      const _0x2654a8 = exports.isPed.isPed("cid");
      const _0x1ce0f1 = _0x182a14.type === "public" || _0x182a14.type === "private" && _0x182a14.source === _0x2654a8;
      if (!_0x1ce0f1) {
        return emit("DoLongHudText", "You are not permitted to do this.", 2);
      }
      _0x427f0f.emitNet("np-cinema:setCinemaSet", _0x1effad, _0x182a14.name, _0x11ef27.set);
    });
    _0x427f0f.onNet("np-cinema:cinemaSet", _0x432698 => {
      _0x67995e(_0x1effad, _0x432698);
    });
    _0x427f0f.on("np-cinema:changeCinemaMode", async () => {
      if (!_0x1effad || !_0x182a14) {
        return;
      }
      const _0x307cfc = exports.isPed.isPed("cid");
      const _0x2da7bc = _0x182a14.type === "public" || _0x182a14.type === "private" && _0x182a14.source === _0x307cfc;
      if (!_0x2da7bc) {
        return emit("DoLongHudText", "You are not permitted to do this.", 2);
      }
      let _0x1b3110 = null;
      if (_0x182a14.mode === "youtube") {
        const _0x1914bf = await _0x32889a.g.exports["np-ui"].OpenInputMenu([{
          name: "url",
          icon: "clock",
          label: "URL"
        }], _0x30b856 => {
          return _0x30b856 && _0x30b856.url;
        });
        if (!_0x1914bf || !_0x1914bf.url) {
          return;
        }
        _0x1b3110 = _0x1914bf.url;
        _0x182a14.mode = "direct";
      } else {
        _0x182a14.mode = "youtube";
      }
      _0x427f0f.emitNet("np-cinema:changeCinemaMode", _0x1effad, _0x182a14.name, _0x182a14.mode, _0x1b3110);
    });
    _0x427f0f.onNet("np-cinema:cinemaModeChanged", async (_0x5534d8, _0x3dcd46) => {
      if (_0x5ab875) {
        _0x254a8a();
      }
      _0x182a14.mode = _0x5534d8;
      const _0x422bc3 = {
        mode: _0x182a14.mode
      };
      exports["np-ui"].sendAppEvent("cinema-control", _0x422bc3);
      exports["np-ui"].SetUIFocus(false, false);
      RemoveReplaceTexture("xee_news_cinema_txd", "xee_news_cinema_bigscreen");
      exports["np-lib"].releaseDui(_0xa571c7.id);
      if (_0x5534d8 === "direct") {
        _0x182a14.currentVideo = _0x3dcd46;
        _0xa571c7 = exports["np-lib"].getDui(_0x3dcd46, 1920, 1080);
        AddReplaceTexture("xee_news_cinema_txd", "xee_news_cinema_bigscreen", _0xa571c7.dictionary, _0xa571c7.texture);
        return;
      }
      _0xa571c7 = exports["np-lib"].getDui("nui://np-cinema/html/index.html", 1920, 1080);
      AddReplaceTexture("xee_news_cinema_txd", "xee_news_cinema_bigscreen", _0xa571c7.dictionary, _0xa571c7.texture);
      await _0x4ba15f(200);
      _0x352319("reloaded", null);
      await _0x4ba15f(500);
      _0x352319("set-video", {
        url: "gp5KGYvd-sw"
      });
    });
    _0x427f0f.onNet("np-cinema:changeCinemaUrl", async () => {
      if (!_0x1effad || !_0x182a14) {
        return;
      }
      const _0x127f21 = exports.isPed.isPed("cid");
      const _0x382c87 = _0x182a14.type === "public" || _0x182a14.type === "private" && _0x182a14.source === _0x127f21;
      if (!_0x382c87) {
        return emit("DoLongHudText", "You are not permitted to do this.", 2);
      }
      const _0x11d60a = await _0x32889a.g.exports["np-ui"].OpenInputMenu([{
        name: "url",
        icon: "clock",
        label: "URL"
      }], _0x584338 => {
        return _0x584338 && _0x584338.url;
      });
      if (!_0x11d60a || !_0x11d60a.url) {
        return;
      }
      _0x427f0f.emitNet("np-cinema:changeCinemaUrl", _0x1effad, _0x182a14.name, _0x11d60a.url);
    });
    _0x427f0f.onNet("np-cinema:cinemaUrlChanged", _0x4e0fd7 => {
      _0x182a14.currentVideo = _0x4e0fd7;
      exports["np-lib"].changeDuiUrl(_0xa571c7.id, _0x4e0fd7);
    });
    _0x427f0f.onNet("np-cinema:joinedCinema", async (_0x215760, _0x269e05, _0x5ba41c) => {
      _0x1effad = _0x215760;
      _0x182a14 = Object.assign({
        playlist: [],
        pastVideos: [],
        time: 0,
        volume: 50
      }, _0x5ba41c);
      await _0x53cb50.execute("np-datagrid:subscribe", "cinema");
      emit("DoLongHudText", "You have joined the cinema");
      const _0x556bdc = exports.isPed.isPed("cid");
      const _0x1659be = _0x182a14.type === "public" ? true : _0x182a14.source === _0x556bdc;
      const _0x5e21d9 = {
        isAllowed: _0x1659be,
        show: true,
        volume: _0x182a14.volume,
        playlist: [],
        type: _0x182a14.type,
        mode: _0x182a14.mode,
        canMap: _0x182a14.roomId !== null && _0x1659be,
        currentVideo: null
      };
      _0x32889a.g.exports["np-ui"].openApplication("cinema-control", _0x5e21d9);
      _0x32889a.g.exports["np-ui"].SetUIFocus(false, false);
      _0x44fd8f();
      _0x575107 = setTick(async () => {
        DisableControlAction(0, 25, true);
        if (IsDisabledControlJustPressed(0, 25)) {
          _0x32889a.g.exports["np-ui"].SetUIFocus(true, true);
        }
      });
      if (_0x182a14.candidate === GetPlayerServerId(PlayerId())) {
        _0x238c6a();
      }
      _0x67995e(_0x1effad, _0x182a14.activeSet ?? "Idle");
      await _0x4ba15f(1000);
      const _0x575608 = _0x182a14.mode === "youtube" ? "nui://np-cinema/html/index.html" : _0x182a14.currentVideo;
      _0xa571c7 = _0x32889a.g.exports["np-lib"].getDui(_0x575608, 1920, 1080);
      AddReplaceTexture("xee_news_cinema_txd", "xee_news_cinema_bigscreen", _0xa571c7.dictionary, _0xa571c7.texture);
      await _0x4ba15f(200);
      if (_0x182a14.mode !== "youtube") {
        return;
      }
      const _0x27ddb2 = {
        url: _0x182a14.currentVideo ?? "gp5KGYvd-sw"
      };
      _0x352319("set-video", _0x27ddb2);
      if (_0x182a14.paused) {
        _0x352319("set-paused", {
          paused: true
        });
      }
      _0x427f0f.emitNet("np-cinema:loadTimeFromCandidate", _0x1effad, _0x182a14.name);
    });
    _0x427f0f.onNet("np-cinema:getTime", _0x581bde => {
      if (!_0x1effad || !_0x182a14) {
        return;
      }
      _0x427f0f.emitNet("np-cinema:getTimeForCandidate", _0x1effad, _0x182a14.name, _0x182a14.time, _0x581bde);
    });
    const _0x238c6a = () => {
      _0x34a09d = setTick(async () => {
        if (_0x182a14 && !_0x182a14.paused && _0x182a14.mode === "youtube" && !_0x25baca) {
          _0x427f0f.emitNet("np-cinema:syncTime", _0x1effad, _0x182a14.currentVideo, _0x182a14.name, _0x182a14.time);
        }
        await _0x4ba15f(5000);
      });
    };
    _0x427f0f.onNet("np-cinema:resyncTime", (_0x4c3b9f, _0x1a338c) => {
      if (!_0x1effad || !_0x182a14) {
        return;
      }
      const _0xd10eff = _0x4c3b9f - _0x182a14.time;
      if (Math.abs(_0xd10eff) < 5 && !_0x1a338c) {
        return;
      }
      _0x182a14.time = _0x4c3b9f;
      const _0x3fdbdf = {
        time: _0x4c3b9f
      };
      _0x352319("set-time", _0x3fdbdf);
    });
    _0x427f0f.on("np-cinema:leaveCinema", _0x14a3ae => {
      _0x1effad = null;
      _0x182a14 = null;
      _0x32889a.g.exports["np-ui"].closeApplication("cinema-control", {
        show: false
      });
      _0x44fd8f();
      RemoveReplaceTexture("xee_news_cinema_txd", "xee_news_cinema_bigscreen");
      if (_0xa571c7) {
        exports["np-lib"].releaseDui(_0xa571c7.id);
      }
      _0x427f0f.emitNet("np-cinema:leftCinema", _0x14a3ae.cinema);
    });
    RegisterUICallback("np-cinema:changeVolume", (_0x507c65, _0x226df9) => {
      if (!_0x1effad || !_0x182a14 || _0x182a14.mode !== "youtube") {
        return;
      }
      _0x182a14.volume = _0x507c65.volume;
      const _0x1e7caf = {
        volume: _0x507c65.volume
      };
      _0x352319("set-volume", _0x1e7caf);
      _0x226df9({
        data: [],
        meta: {
          ok: true,
          message: ""
        }
      });
    });
    RegisterUICallback("np-cinema:add", async (_0x1dead5, _0x5252b8) => {
      _0x5252b8({
        data: [],
        meta: {
          ok: true,
          message: ""
        }
      });
      if (!_0x182a14 || !_0x1effad || _0x182a14.mode !== "youtube") {
        return;
      }
      const _0x4e43e4 = await _0x32889a.g.exports["np-ui"].OpenInputMenu([{
        name: "url",
        icon: "link",
        label: "YouTube URL"
      }], _0xd8b73 => {
        return _0xd8b73 && _0xd8b73.url;
      });
      if (!_0x4e43e4 || !_0x4e43e4.url) {
        return;
      }
      const [_0xa7cd77, _0x685e43] = _0x186fe3(_0x4e43e4.url);
      if (!_0xa7cd77) {
        return;
      }
      if (!_0x685e43) {
        return emit("DoLongHudText", "Youtube not found in URL, you can only put youtube links in. For other links, switch to direct mode in the back room.", 2);
      }
      _0x427f0f.emitNet("np-cinema:queueVideo", _0x1effad, _0x182a14.name, _0xa7cd77);
    });
    _0x427f0f.onNet("np-cinema:queuedVideo", (_0x1f93cc, _0x29a97e, _0x53c052, _0xac3c16) => {
      emit("DoLongHudText", _0x29a97e + " added a video to the queue.");
      _0x1ee0f3(_0x53c052, _0xac3c16);
      if (_0x182a14.paused && _0x182a14.playlist.length == 1) {
        _0x544eea(_0x1f93cc.video);
      }
    });
    RegisterUICallback("np-cinema:next", (_0x1593d0, _0x56af91) => {
      _0x56af91({
        data: [],
        meta: {
          ok: true,
          message: ""
        }
      });
      if (!_0x1effad || !_0x182a14 || _0x182a14.mode !== "youtube") {
        return;
      }
      if (_0x182a14.playlist.length > 0) {
        return _0x427f0f.emitNet("np-cinema:nextVideoQueued", _0x1effad, _0x182a14.name);
      }
      emit("DoLongHudText", "No more videos in the queue.");
    });
    _0x427f0f.onNet("np-cinema:nextVideo", (_0x2d6ec8, _0x5263a8, _0x7277b7, _0xc3c557) => {
      if (_0xc3c557) {
        emit("DoLongHudText", _0xc3c557 + " skipped the video.");
      }
      _0x1ee0f3(_0x5263a8, _0x7277b7);
      if (_0x182a14.playlist.length == 0) {
        return;
      }
      _0x544eea(_0x182a14.playlist[0].video);
    });
    _0x427f0f.onNet("np-cinema:resetPlaylists", (_0x169d4e, _0x8f8afe) => {
      _0x182a14.playlist = _0x169d4e;
      _0x182a14.pastVideos = _0x8f8afe;
      const _0x5e6ff7 = {
        playlist: _0x182a14.pastVideos
      };
      exports["np-ui"].sendAppEvent("cinema-control", _0x5e6ff7);
    });
    RegisterUICallback("np-cinema:playVideo", (_0x24bb75, _0x15e640) => {
      _0x15e640({
        data: [],
        meta: {
          ok: true,
          message: ""
        }
      });
      if (!_0x1effad || !_0x182a14 || _0x182a14.mode !== "youtube") {
        return;
      }
      _0x427f0f.emitNet("np-cinema:addVideo", _0x1effad, _0x182a14.name, _0x24bb75.video);
    });
    RegisterUICallback("np-cinema:removeVideo", (_0x16b072, _0xffc2f0) => {
      _0xffc2f0({
        data: [],
        meta: {
          ok: true,
          message: ""
        }
      });
      if (!_0x1effad || !_0x182a14 || _0x182a14.mode !== "youtube") {
        return;
      }
      _0x427f0f.emitNet("np-cinema:removeVideo", _0x1effad, _0x182a14.name, _0x16b072.video);
    });
    RegisterUICallback("np-cinema:pause", (_0x49e440, _0x59a317) => {
      _0x59a317({
        data: [],
        meta: {
          ok: true,
          message: ""
        }
      });
      if (!_0x1effad || !_0x182a14 || _0x182a14.mode !== "youtube") {
        return;
      }
      _0x182a14.paused = true;
      _0x352319("set-paused", {
        paused: true
      });
      _0x427f0f.emitNet("np-cinema:paused", _0x1effad, _0x182a14.name, true);
    });
    RegisterUICallback("np-cinema:play", (_0x3068d4, _0x29d34b) => {
      _0x29d34b({
        data: [],
        meta: {
          ok: true,
          message: ""
        }
      });
      if (!_0x1effad || !_0x182a14 || _0x182a14.mode !== "youtube") {
        return;
      }
      _0x182a14.paused = false;
      _0x352319("set-paused", {
        paused: false
      });
      _0x427f0f.emitNet("np-cinema:paused", _0x1effad, _0x182a14.name, false);
    });
    _0x427f0f.onNet("np-cinema:paused", (_0x4a5129, _0x364847) => {
      if (!_0x1effad || !_0x182a14) {
        return;
      }
      emit("DoLongHudText", _0x364847 + " " + (_0x4a5129 ? "paused" : "unpaused") + " the video.");
      _0x182a14.paused = _0x4a5129;
      const _0x4ee54d = {
        paused: _0x4a5129
      };
      _0x352319("set-paused", _0x4ee54d);
      const _0x3424a9 = {
        paused: _0x4a5129
      };
      exports["np-ui"].sendAppEvent("cinema-control", _0x3424a9);
    });
    _0x427f0f.onNet("np-cinema:removeVideo", (_0x6ced17, _0xb36cae, _0x51b4eb, _0x46afcc) => {
      if (!_0x1effad || !_0x182a14) {
        return;
      }
      _0x182a14.playlist = _0x51b4eb;
      _0x182a14.pastVideos = _0x46afcc;
      emit("DoLongHudText", _0xb36cae + " removed a video from the queue.");
      const _0x52b6bd = {
        playlist: _0x182a14.pastVideos
      };
      exports["np-ui"].sendAppEvent("cinema-control", _0x52b6bd);
    });
    RegisterNuiCallbackType("time");
    on("__cfx_nui:time", (_0x1b3028, _0x3ac48b) => {
      var _0x2956de;
      _0x3ac48b({
        data: [],
        meta: {
          ok: true,
          message: ""
        }
      });
      if (!_0x1effad || !_0x182a14) {
        return;
      }
      _0x182a14.time = _0x1b3028.time;
      exports["np-ui"].sendAppEvent("cinema-control", {
        percentage: ((_0x2956de = _0x1b3028.percentage) === null || _0x2956de === undefined ? undefined : _0x2956de.toFixed(2)) ?? 0
      });
    });
    RegisterUICallback("np-cinema:advance", (_0x62aee7, _0x351853) => {
      _0x351853({
        data: [],
        meta: {
          ok: true,
          message: ""
        }
      });
      if (!_0x1effad || !_0x182a14 || _0x182a14.mode !== "youtube") {
        return;
      }
      _0x25baca = true;
      _0x427f0f.emitNet("np-cinema:setTime", _0x1effad, _0x182a14.name, _0x182a14.currentVideo, _0x182a14.time + _0x62aee7.seconds);
    });
    RegisterUICallback("np-cinema:seek", async (_0x38cdf8, _0x48bd8d) => {
      var _0x4dcf7c;
      _0x48bd8d({
        data: [],
        meta: {
          ok: true,
          message: ""
        }
      });
      if (!_0x1effad || !_0x182a14 || _0x182a14.mode !== "youtube") {
        return;
      }
      await _0x4ba15f(200);
      const _0x5cea2 = await _0x32889a.g.exports["np-ui"].OpenInputMenu([{
        name: "time",
        icon: "clock",
        label: "Time",
        _defaultValue: ((_0x4dcf7c = _0x182a14.time) === null || _0x4dcf7c === undefined ? undefined : _0x4dcf7c.toFixed(0)) ?? 0
      }], _0x5db6ab => {
        return _0x5db6ab && _0x5db6ab.time;
      });
      if (!_0x5cea2 || !_0x5cea2.time) {
        return;
      }
      const _0x5b479a = parseInt(_0x5cea2.time);
      if (!_0x5b479a) {
        return;
      }
      _0x25baca = true;
      _0x427f0f.emitNet("np-cinema:setTime", _0x1effad, _0x182a14.name, _0x182a14.currentVideo, _0x5b479a);
    });
    _0x427f0f.onNet("np-cinema:timeSet", (_0x362e44, _0x460510) => {
      emit("DoLongHudText", _0x460510 + " advanced the video to " + _0x362e44.toFixed(0) + " seconds.");
      _0x25baca = false;
      _0x182a14.time = _0x362e44;
      const _0x4643ed = {
        time: _0x362e44
      };
      _0x352319("set-time", _0x4643ed);
    });
    _0x427f0f.onNet("np-cinema:candidateChanged", (_0x1027b7, _0x32e461) => {
      if (!_0x1effad || !_0x182a14) {
        return;
      }
      _0x182a14.candidate = _0x1027b7;
      if (_0x32e461 === GetPlayerServerId(PlayerId())) {
        if (_0x34a09d) {
          clearTick(_0x34a09d);
          _0x34a09d = null;
        }
        return;
      }
      if (_0x1027b7 === GetPlayerServerId(PlayerId())) {
        _0x238c6a();
      }
    });
    RegisterUICallback("np-cinema:viewPlaylist", (_0x5aef3a, _0x503351) => {
      if (!_0x1effad || !_0x182a14 || _0x182a14.mode !== "youtube") {
        return _0x503351({
          data: {
            playlist: [],
            currentVideo: null
          },
          meta: {
            ok: true,
            message: ""
          }
        });
      }
      const _0x31b160 = {
        playlist: _0x182a14.pastVideos,
        currentVideo: _0x182a14.currentVideo
      };
      const _0xa37d02 = {
        data: _0x31b160,
        meta: {
          ok: true,
          message: ""
        }
      };
      _0x503351(_0xa37d02);
    });
    RegisterUICallback("np-cinema:camera", (_0x30b1c3, _0x261b12) => {
      _0x261b12({
        data: [],
        meta: {
          ok: true,
          message: ""
        }
      });
      if (!_0x1effad || !_0x182a14 || _0x182a14.mode !== "youtube") {
        return;
      }
      _0x254a8a();
    });
    const _0x254a8a = () => {
      if (_0x5ab875) {
        SetCamActive(_0x5ab875, false);
        DestroyCam(_0x5ab875, false);
        RenderScriptCams(false, false, 0, true, false);
        _0x5ab875 = null;
        return;
      }
      const _0x3dfee7 = _0x5949a4();
      const _0x4938d1 = _0x3dfee7.locations.find(_0x1fbf3f => _0x1fbf3f.id == _0x1effad);
      if (!_0x4938d1) {
        return;
      }
      _0x5ab875 = CreateCamWithParams("DEFAULT_SCRIPTED_CAMERA", _0x4938d1.camera.x, _0x4938d1.camera.y, _0x4938d1.camera.z, _0x4938d1.camera.rotation[0], _0x4938d1.camera.rotation[1], _0x4938d1.camera.rotation[2], _0x4938d1.camera.fov, false, 0);
      SetCamActive(_0x5ab875, true);
      RenderScriptCams(true, false, 0, true, true);
    };
    RegisterNuiCallbackType("end");
    on("__cfx_nui:end", (_0x2e2a76, _0x247ff3) => {
      _0x247ff3({
        data: [],
        meta: {
          ok: true,
          message: ""
        }
      });
      if (!_0x1effad || !_0x182a14) {
        return;
      }
      _0x182a14.paused = true;
      if (_0x2e2a76.currentVideo !== _0x182a14.currentVideo) {
        return;
      }
      _0x427f0f.emitNet("np-cinema:videoEnded", _0x1effad, _0x182a14.name, _0x182a14.currentVideo);
    });
    on("np-ui:restarted", () => {
      if (!_0x1effad || !_0x182a14) {
        return;
      }
      const _0x50915f = exports.isPed.isPed("cid");
      const _0x114da0 = _0x182a14.type === "public" ? true : _0x182a14.source === _0x50915f;
      const _0x3f8570 = {
        isAllowed: _0x114da0,
        show: true,
        volume: _0x182a14.volume,
        playlist: [],
        type: _0x182a14.type,
        mode: _0x182a14.mode,
        canMap: _0x182a14.roomId !== null && _0x114da0,
        currentVideo: null
      };
      _0x32889a.g.exports["np-ui"].openApplication("cinema-control", _0x3f8570);
    });
    const _0x544eea = _0x3a6ca7 => {
      _0x182a14.paused = false;
      _0x182a14.currentVideo = _0x3a6ca7;
      const _0x462b3c = {
        url: _0x3a6ca7
      };
      _0x352319("set-video", _0x462b3c);
      const _0x658173 = {
        volume: _0x182a14.volume
      };
      _0x352319("set-volume", _0x658173);
      const _0x365a20 = {
        paused: false,
        currentVideo: _0x3a6ca7,
        percentage: 0
      };
      exports["np-ui"].sendAppEvent("cinema-control", _0x365a20);
    };
    const _0x1ee0f3 = (_0x173d72, _0x1b63db) => {
      _0x182a14.playlist = _0x173d72;
      _0x182a14.pastVideos = _0x1b63db;
      const _0x40ebe2 = {
        playlist: _0x1b63db
      };
      exports["np-ui"].sendAppEvent("cinema-control", _0x40ebe2);
    };
    const _0x352319 = (_0x3bc7c9, _0x5f50ff) => {
      const _0x167e5a = {
        resource: "np-cinema",
        type: _0x3bc7c9,
        data: _0x5f50ff
      };
      exports["np-lib"].sendDuiMessage(_0xa571c7.id, _0x167e5a);
    };
    const _0x44fd8f = () => {
      if (_0x575107) {
        clearInterval(_0x575107);
      }
      if (_0x34a09d) {
        clearInterval(_0x34a09d);
      }
    };
    on("onResourceStop", _0x2171b7 => {
      if (_0x2171b7 !== "np-cinema") {
        return;
      }
      _0x44fd8f();
      RemoveReplaceTexture("xee_news_cinema_txd", "xee_news_cinema_bigscreen");
      if (_0xa571c7) {
        exports["np-lib"].releaseDui(_0xa571c7.id);
      }
    });
    ;
    let _0x4b2020 = true;
    const _0x4a1eca = () => {
      for (const _0x1ea71c of _0x5949a4().locations) {
        if (!_0x1ea71c.enabled) {
          continue;
        }
        _0x1b32d2(_0x1ea71c);
      }
      const _0x52faff = {
        x: -593.54,
        y: -920.54,
        z: 23.78
      };
      exports["np-polyzone"].AddBoxZone("lsbn_entry", _0x52faff, 4, 5, {
        heading: 0,
        minZ: 22.83,
        maxZ: 25.83
      });
    };
    on("np-polyzone:enter", async _0xa11443 => {
      if (_0xa11443 !== "lsbn_entry") {
        return;
      }
      const _0x3984f7 = await _0x53cb50.execute("np-cinema:isCreationOpen");
      _0x4b2020 = _0x3984f7;
    });
    _0x427f0f.onNet("np-cinema:creationToggled", _0x1219e8 => {
      _0x4b2020 = _0x1219e8;
    });
    const _0x5949a4 = () => {
      return _0x12e53a("np-cinema:main");
    };
    const _0x1b32d2 = _0x23a066 => {
      const _0x3fcf2f = {
        cinema: _0x23a066.id
      };
      const _0x4545df = {
        NPXEvent: "np-cinema:getActiveCinemas",
        id: "cinema_getactive",
        icon: "box-open",
        label: "go to cinema",
        parameters: _0x3fcf2f
      };
      const _0x547638 = {
        cinema: _0x23a066.id
      };
      const _0x3ab1f8 = {
        NPXEvent: "np-cinema:manageRooms",
        id: "cinema_manage",
        icon: "cog",
        label: "manage created rooms",
        parameters: _0x547638
      };
      const _0x359ea6 = [_0x4545df, _0x3ab1f8];
      const _0x46ff69 = {
        cinema: _0x23a066.id
      };
      const _0x3fe0e7 = {
        NPXEvent: "np-cinema:openCinema",
        id: "cinema_open",
        icon: "box-open",
        label: "start your own room ($10000)",
        parameters: _0x46ff69
      };
      const _0x578013 = [_0x3fe0e7];
      const _0x5f3cff = [{
        NPXEvent: "np-cinema:toggleCinemaCreation",
        id: "cinema_togglecreation",
        icon: "times-circle",
        label: "toggle cinema creation"
      }];
      if (_0x23a066.id === "cinema") {
        globalThis.exports["np-interact"].AddPeekEntryByPolyTarget("np-doors:elevator", _0x359ea6, {
          distance: {
            radius: 1.5
          },
          isEnabled: () => {
            const _0x36f647 = GetEntityCoords(PlayerPedId(), false);
            const _0x5026d7 = _0x23a066.exitPosition;
            return GetDistanceBetweenCoords(_0x36f647[0], _0x36f647[1], _0x36f647[2], _0x5026d7.x, _0x5026d7.y, _0x5026d7.z, true) < 3;
          }
        });
        globalThis.exports["np-interact"].AddPeekEntryByPolyTarget("np-doors:elevator", _0x578013, {
          distance: {
            radius: 1.5
          },
          isEnabled: () => {
            const _0x31813d = GetEntityCoords(PlayerPedId(), false);
            const _0x334293 = _0x23a066.exitPosition;
            return _0x4b2020 && GetDistanceBetweenCoords(_0x31813d[0], _0x31813d[1], _0x31813d[2], _0x334293.x, _0x334293.y, _0x334293.z, true) < 3;
          }
        });
        globalThis.exports["np-interact"].AddPeekEntryByPolyTarget("np-doors:elevator", _0x5f3cff, {
          distance: {
            radius: 1.5
          },
          isEnabled: async () => {
            const _0x5b905c = GetEntityCoords(PlayerPedId(), false);
            const _0x3f74f8 = _0x23a066.exitPosition;
            const _0x52f8da = await _0x32889a.g.exports["np-business"].IsEmployedAt("lsbn");
            return _0x52f8da && GetDistanceBetweenCoords(_0x5b905c[0], _0x5b905c[1], _0x5b905c[2], _0x3f74f8.x, _0x3f74f8.y, _0x3f74f8.z, true) < 3;
          }
        });
      } else {
        globalThis.exports["np-polytarget"].AddBoxZone(_0x23a066.prefix + "_" + _0x23a066.id, _0x23a066.polytarget.position, _0x23a066.polytarget.width, _0x23a066.polytarget.length, {
          heading: _0x23a066.polytarget.heading,
          minZ: _0x23a066.polytarget.minZ,
          maxZ: _0x23a066.polytarget.maxZ
        });
        const _0x37e3d5 = {
          distance: {
            radius: 2
          },
          isEnabled: () => true
        };
        globalThis.exports["np-interact"].AddPeekEntryByPolyTarget(_0x23a066.prefix + "_" + _0x23a066.id, _0x359ea6, _0x37e3d5);
      }
      globalThis.exports["np-polytarget"].AddBoxZone(_0x23a066.prefix + "_" + _0x23a066.id + "_exit", _0x23a066.exit.position, _0x23a066.exit.width, _0x23a066.exit.length, {
        heading: _0x23a066.exit.heading,
        minZ: _0x23a066.exit.minZ,
        maxZ: _0x23a066.exit.maxZ
      });
      const _0x1515cc = {
        distance: {
          radius: 2
        },
        isEnabled: () => true
      };
      globalThis.exports["np-interact"].AddPeekEntryByPolyTarget(_0x23a066.prefix + "_" + _0x23a066.id + "_exit", [{
        NPXEvent: "np-cinema:leaveCinema",
        id: "cinema_leave",
        icon: "box-open",
        label: "leave cinema",
        parameters: {
          cinema: _0x23a066.id
        }
      }], _0x1515cc);
      if (_0x23a066.sets) {
        globalThis.exports["np-polytarget"].AddBoxZone(_0x23a066.prefix + "_" + _0x23a066.id + "-sets", _0x23a066.sets.polytarget.position, _0x23a066.sets.polytarget.width, _0x23a066.sets.polytarget.length, {
          heading: _0x23a066.sets.polytarget.heading,
          minZ: _0x23a066.sets.polytarget.minZ,
          maxZ: _0x23a066.sets.polytarget.maxZ
        });
        const _0xc895f1 = {
          NPXEvent: "np-cinema:changeCinemaMode",
          id: _0x23a066.prefix + "_" + _0x23a066.id + "-mode",
          icon: "box-open",
          label: "Change cinema mode",
          parameters: {}
        };
        _0xc895f1.parameters.cinema = _0x23a066.id;
        _0xc895f1.parameters.set = null;
        const _0x5963fe = {
          NPXEvent: "np-cinema:changeCinemaUrl",
          id: _0x23a066.prefix + "_" + _0x23a066.id + "-modeurl",
          icon: "box-open",
          label: "Change cinema URL (if mode is direct)",
          parameters: {}
        };
        _0x5963fe.parameters.cinema = _0x23a066.id;
        _0x5963fe.parameters.set = null;
        const _0x5aec8d = [_0xc895f1, _0x5963fe];
        for (const _0xffe7f7 of Object.keys(_0x23a066.sets.variants)) {
          const _0x741fd0 = {
            NPXEvent: "np-cinema:setCinemaSet",
            id: _0x23a066.prefix + "_" + _0x23a066.id + "-set_" + _0xffe7f7,
            icon: "box-open",
            label: _0x23a066.sets.variants[_0xffe7f7],
            parameters: {}
          };
          _0x741fd0.parameters.cinema = _0x23a066.id;
          _0x741fd0.parameters.set = _0xffe7f7;
          _0x5aec8d.push(_0x741fd0);
        }
        const _0x3fe36d = {
          distance: {
            radius: 2
          },
          isEnabled: () => _0x1effad
        };
        globalThis.exports["np-interact"].AddPeekEntryByPolyTarget(_0x23a066.prefix + "_" + _0x23a066.id + "-sets", _0x5aec8d, _0x3fe36d);
      }
    };
    const _0x67995e = (_0x1680fb, _0x2b6b78) => {
      const _0x19c5b3 = _0x5949a4();
      const _0x1def44 = _0x19c5b3.locations.find(_0x4d9259 => _0x4d9259.id === _0x1680fb);
      if (!_0x1def44) {
        return;
      }
      const _0x21ae5e = GetInteriorAtCoords(-592.36, -940.03, -7.22);
      if (_0x1def44.sets) {
        for (const _0x4337c8 of Object.keys(_0x1def44.sets.variants)) {
          DeactivateInteriorEntitySet(_0x21ae5e, _0x4337c8);
        }
        ActivateInteriorEntitySet(_0x21ae5e, _0x2b6b78);
      }
      RefreshInterior(_0x21ae5e);
    };
    _0x427f0f.on("np-cinema:getActiveCinemas", async _0x537a33 => {
      if (!_0x537a33.cinema) {
        return;
      }
      const _0x4f7314 = await _0x53cb50.execute("np-cinema:getActiveCinemas", _0x537a33.cinema);
      if (!_0x4f7314) {
        return;
      }
      const _0x37469a = _0x4f7314.map(_0xbe31dd => {
        return {
          icon: "door-open",
          title: _0xbe31dd.name,
          titleRight: _0xbe31dd.members.toString(),
          action: "np-cinema:joinCinema",
          key: {
            cinema: _0x537a33.cinema,
            room: _0xbe31dd.name,
            has_password: _0xbe31dd.has_password
          },
          disabled: false
        };
      });
      if (_0x37469a.length === 0) {
        _0x37469a.push({
          icon: "door-open",
          title: "No active rooms",
          action: "",
          key: {}
        });
      }
      _0x32889a.g.exports["np-ui"].showContextMenu(_0x37469a);
    });
    RegisterUICallback("np-cinema:joinCinema", async (_0x5e1632, _0x160b4e) => {
      _0x160b4e({
        data: [],
        meta: {
          ok: true,
          message: ""
        }
      });
      if (!_0x5e1632.key.cinema || !_0x5e1632.key.room) {
        return;
      }
      let _0x10a5ea = null;
      const _0x4b3e44 = await _0x32889a.g.exports["np-business"].IsEmployedAt("lsbn");
      if (_0x5e1632.key.has_password && !_0x4b3e44) {
        await _0x4ba15f(100);
        const _0x3cda20 = await _0x32889a.g.exports["np-ui"].OpenInputMenu([{
          name: "password",
          icon: "password",
          label: "Cinema password",
          type: "password",
          _type: "password"
        }], _0x272824 => {
          return _0x272824 && _0x272824.password;
        });
        if (!_0x3cda20 || !_0x3cda20.password) {
          return;
        }
        _0x10a5ea = _0x3cda20.password;
      }
      const _0x3d1be9 = await _0x53cb50.execute("np-cinema:joinCinema", _0x5e1632.key.cinema, _0x4b3e44, _0x5e1632.key.room, _0x10a5ea);
      if (!_0x3d1be9) {
        return emit("DoLongHudText", "Could not join room, make sure the password is correct if there is one.", 2);
      }
      emit("DoLongHudText", "Joined room...Please wait");
    });
    _0x427f0f.on("np-cinema:openCinema", async _0x412bd2 => {
      if (!_0x412bd2.cinema) {
        return;
      }
      const _0x131904 = await _0x53cb50.execute("np-cinema:getUserRooms", _0x412bd2.cinema);
      const _0x1139d6 = [{
        id: "ignore",
        name: "Skip setup creation"
      }, {
        id: "new",
        name: "Create new room setup"
      }];
      for (const _0x375378 of _0x131904) {
        _0x1139d6.push({
          id: _0x375378.id.toString(),
          name: _0x375378.name
        });
      }
      const _0x535e42 = {
        name: "setup",
        icon: "list",
        label: "Cinema setup",
        type: "select",
        _type: "select",
        options: _0x1139d6
      };
      const _0x333dc3 = await _0x32889a.g.exports["np-ui"].OpenInputMenu([{
        name: "name",
        icon: "pencil-alt",
        label: "Cinema Name"
      }, {
        name: "password",
        icon: "password",
        label: "Cinema password (leave blank if open)",
        type: "password",
        _type: "password"
      }, {
        name: "type",
        icon: "list",
        label: "Cinema type",
        type: "select",
        _type: "select",
        options: [{
          id: "public",
          name: "Public (everybody can queue)"
        }, {
          id: "private",
          name: "Private (only creator can queue)"
        }]
      }, _0x535e42], _0x3ef28f => {
        return _0x3ef28f && _0x3ef28f.name && _0x3ef28f.type && _0x3ef28f.setup;
      });
      if (!_0x333dc3 || !_0x333dc3.name || !_0x333dc3.type || !_0x333dc3.setup) {
        return;
      }
      const _0x3fca0b = await _0x32889a.g.exports["np-business"].IsEmployedAt("lsbn");
      const _0x3557e1 = await _0x53cb50.execute("np-cinema:openCinema", _0x412bd2.cinema, _0x333dc3.type, _0x333dc3.setup, _0x3fca0b, _0x333dc3.name, _0x333dc3.password);
      if (!_0x3557e1) {
        return;
      }
      emit("DoLongHudText", "Cinema opened. You can join it now.");
    });
    _0x427f0f.on("np-cinema:manageRooms", async _0x3d9ee9 => {
      if (!_0x3d9ee9.cinema) {
        return;
      }
      const _0x63b9ff = await _0x53cb50.execute("np-cinema:getUserRooms", _0x3d9ee9.cinema);
      const _0x2ed904 = _0x63b9ff.map(_0x437500 => {
        const _0xc71e5f = {
          icon: "projector",
          title: _0x437500.name,
          disabled: false,
          children: [{
            icon: "trash",
            title: "Delete room",
            action: "np-cinema:deleteRoom",
            key: {
              cinema: _0x3d9ee9.cinema,
              room: _0x437500.id
            }
          }, {
            icon: "times-circle",
            title: "Cancel"
          }]
        };
        return _0xc71e5f;
      });
      if (_0x2ed904.length === 0) {
        _0x2ed904.push({
          icon: "projector",
          title: "No created rooms",
          action: "",
          disabled: true,
          key: {}
        });
      }
      _0x32889a.g.exports["np-ui"].showContextMenu(_0x2ed904);
    });
    RegisterUICallback("np-cinema:deleteRoom", async _0x3e8a1b => {
      if (!_0x3e8a1b.key.cinema || !_0x3e8a1b.key.room) {
        return;
      }
      const _0x51543f = await _0x53cb50.execute("np-cinema:deleteRoom", _0x3e8a1b.key.cinema, _0x3e8a1b.key.room);
      if (!_0x51543f) {
        return emit("DoLongHudText", "Could not delete room", 2);
      }
      emit("DoLongHudText", "Room deleted");
    });
    _0x427f0f.on("np-cinema:toggleCinemaCreation", async () => {
      const _0x3ddc71 = await _0x32889a.g.exports["np-business"].IsEmployedAt("lsbn");
      if (!_0x3ddc71) {
        return emit("DoLongHudText", "You are not employed at the cinema", 2);
      }
      _0x53cb50.execute("np-cinema:toggleCreation");
    });
    ;
    async function _0x33a7ed() {}
    ;
    const _0x39694b = () => {};
    RegisterUICallback("np-cinema:map", async (_0x1a4f65, _0x3867be) => {
      _0x3867be({
        data: [],
        meta: {
          ok: true,
          message: ""
        }
      });
      if (!_0x1effad || !_0x182a14) {
        return;
      }
      await _0x4ba15f(100);
      const _0x184bc4 = _0x4a6328(LoadResourceFile(GetCurrentResourceName(), "client/hashes.json"));
      const _0x27c6af = [{
        icon: "times-circle",
        title: "Remove Objects",
        action: "np-cinema:removeObjects"
      }];
      for (const _0x31926b of Object.keys(_0x184bc4)) {
        const _0xf5744e = {
          icon: "pencil-alt",
          title: _0x31926b,
          action: "np-cinema:openMapCategory",
          key: {}
        };
        _0xf5744e.key.name = _0x31926b;
        _0x27c6af.push(_0xf5744e);
      }
      exports["np-ui"].showContextMenu(_0x27c6af);
    });
    RegisterUICallback("np-cinema:removeObjects", async (_0x5ba743, _0xee7087) => {
      _0xee7087({
        data: [],
        meta: {
          ok: true,
          message: ""
        }
      });
      if (!_0x1effad || !_0x182a14) {
        return;
      }
      _0x32889a.g.exports["np-selector"].startSelecting(-1, PlayerPedId(), () => true);
      const _0x7d0ecc = setTick(async () => {
        if (IsControlJustReleased(0, 38)) {
          const {
            selectedEntity: _0x3ea0e7
          } = _0x32889a.g.exports["np-selector"].getCurrentSelection();
          _0x423f5d(_0x3ea0e7);
          _0x32889a.g.exports["np-selector"].stopSelecting();
          _0x32889a.g.exports["np-selector"].deselect();
          clearTick(_0x7d0ecc);
        }
        if (IsControlJustPressed(0, 202)) {
          _0x32889a.g.exports["np-selector"].stopSelecting();
          _0x32889a.g.exports["np-selector"].deselect();
          clearTick(_0x7d0ecc);
        }
        await _0x4ba15f(1);
      });
    });
    const _0x423f5d = _0x4a0be9 => {
      if (!_0x4a0be9) {
        return;
      }
      const _0x4d04a1 = exports["np-objects"].GetObjectByEntity(_0x4a0be9);
      if (!_0x4d04a1) {
        return;
      }
      if (_0x4d04a1.ns !== "cinema") {
        return;
      }
      exports["np-objects"].DeleteObject(_0x4d04a1.id);
    };
    RegisterUICallback("np-cinema:openMapCategory", async (_0x3f1aaf, _0x50d9f7) => {
      _0x50d9f7({
        data: [],
        meta: {
          ok: true,
          message: ""
        }
      });
      if (!_0x1effad || !_0x182a14) {
        return;
      }
      await _0x4ba15f(100);
      const _0x3b5476 = _0x4a6328(LoadResourceFile(GetCurrentResourceName(), "client/hashes.json"));
      const _0x56e558 = [];
      for (const _0x446714 of _0x3b5476[_0x3f1aaf.key.name]) {
        const _0x1ac956 = {
          icon: "pencil-alt",
          title: _0x446714,
          action: "np-cinema:placeObject",
          key: {}
        };
        _0x1ac956.key.hash = _0x446714;
        _0x56e558.push(_0x1ac956);
      }
      exports["np-ui"].showContextMenu(_0x56e558);
    });
    RegisterUICallback("np-cinema:placeObject", async (_0x409432, _0x1c54a8) => {
      _0x1c54a8({
        data: [],
        meta: {
          ok: true,
          message: ""
        }
      });
      if (!_0x1effad || !_0x182a14) {
        return;
      }
      const _0x130e6e = GetHashKey(_0x409432.key.hash);
      const _0x19e2a5 = {
        cinema: _0x1effad,
        roomId: _0x182a14.roomId
      };
      const _0x101032 = await _0x32889a.g.exports["np-objects"].PlaceAndSaveObject(_0x130e6e, _0x19e2a5, {
        collision: false,
        groundSnap: true,
        adjustZ: false,
        distance: 3,
        surfaceOffset: 0.1
      }, () => true, "cinema");
      if (!_0x101032) {
        return;
      }
    });
    _0x427f0f.on("np-cinema:removeCinemaObject", (_0x18ae5e, _0x544049, _0x315ff4) => {
      if (_0x315ff4?.meta?.ns !== "cinema") {
        return;
      }
      if (_0x315ff4?.meta?.data?.metadata?.cinema !== _0x1effad) {
        return;
      }
      exports["np-objects"].DeleteObject(_0x315ff4.meta.id);
    });
    ;
    async function _0x3ba81e() {
      await _0x46fd49();
      await _0x33a7ed();
      await _0x549714.waitForCondition(() => _0x32889a.g.exports.config.IsConfigReady(), 5000);
      _0x4a1eca();
      _0x5a2d68();
      _0x39694b();
    }
    ;
    on("onClientResourceStart", async _0x4f82a0 => {
      if (_0x4f82a0 !== GetCurrentResourceName()) {
        return;
      }
      setImmediate(async () => {
        await _0x3ba81e();
      });
    });
  })();