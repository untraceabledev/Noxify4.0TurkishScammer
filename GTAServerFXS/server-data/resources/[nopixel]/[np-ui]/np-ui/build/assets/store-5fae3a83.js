const store = {
    key: "game",
    initialState: {
      isAlive: true,
      location: "world",
      modeDev: false,
      modeDebug: false,
      modeGod: false,
      time: "00:01",
      token: null,
      endpoint: null,
      vehicle: null,
      taxLevels: [15, 15, 15, 15, 15, 15, 15, 15, 15],
      weather: "CLEAR",
      weatherIcon: "sun",
      showWatermark: false,
      watermarkPosition: {
        right: "1vh",
        top: "2vh"
      },
      serverCode: "wl",
      showroomPurchaseBtn: false,
      skipMdwProfileCheck: false,
      isHardcore: false,
      radioChannel: ""
    }
  };
  export { store as default };