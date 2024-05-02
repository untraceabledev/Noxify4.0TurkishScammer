const appName = "vehiclemenu";
const settings = {
  isDriver: false,
  isFrontPassenger: false,
  seats: [[{
    name: "SEAT_PSIDE_F",
    coord: {
      x: -0.369265615940094,
      y: -0.06696900725364685,
      z: 0.4225427508354187
    },
    access: false,
    index: 0,
    type: "seat"
  }, {
    name: "SEAT_DSIDE_R",
    coord: {
      x: -0.36079999804496765,
      y: -0.8153276443481445,
      z: 0.4107881188392639
    },
    access: false,
    index: 1,
    type: "seat"
  }], [{
    name: false,
    coord: {
      x: 0,
      y: -0.06696900725364685,
      z: 0
    },
    occupied: false,
    index: false,
    open: false,
    access: false,
    type: false
  }, {
    name: "SEAT_DSIDE_R2",
    coord: {
      x: 0,
      y: -0.8153276443481445,
      z: 0.4107881188392639
    },
    access: false,
    index: 3,
    type: "seat"
  }], [{
    name: "SEAT_DSIDE_F",
    coord: {
      x: 0.3530834913253784,
      y: -0.05055789649486542,
      z: 0.431350976228714
    },
    access: -1,
    index: -1,
    type: "seat"
  }, {
    name: "SEAT_PSIDE_R",
    coord: {
      x: 0.3607999384403229,
      y: -0.7989165782928467,
      z: 0.4195963740348816
    },
    access: false,
    index: 2,
    type: "seat"
  }]],
  engine: true,
  doors: [[{
    open: false,
    access: true,
    index: 0,
    coord: {
      x: -0.8295220136642456,
      y: 0.6376338005065918,
      z: 0.5686646699905396
    },
    name: "DOOR_DSIDE_F",
    type: "door"
  }], [{
    open: false,
    access: true,
    index: 4,
    coord: {
      x: 0,
      y: 0.6634003520011902,
      z: 0.835605263710022
    },
    name: "BONNET",
    type: "bonnet"
  }, {
    open: false,
    access: true,
    index: 5,
    coord: {
      x: 0,
      y: -1.573060154914856,
      z: 0.929348886013031
    },
    name: "BOOT",
    type: "boot"
  }], [{
    open: false,
    access: true,
    index: 1,
    coord: {
      x: 0.8295220136642456,
      y: 0.6376338005065918,
      z: 0.5686646699905396
    },
    name: "DOOR_PSIDE_F",
    type: "door"
  }]],
  windows: [],
  neons: {
    active: false,
    enabled: false
  },
  nitrous: {
    enabled: true,
    mode: "Boost"
  },
  nitrousFlowrate: 10,
  hazard: {
    enabled: false,
    state: false
  },
  indicatorLeft: {
    enabled: false,
    state: false
  },
  indicatorRight: {
    enabled: false,
    state: false
  },
  extLights: {
    enabled: false,
    state: false
  },
  intLights: {
    enabled: false,
    state: false
  },
  convertible: {
    enabled: false,
    state: 0
  }
};
const store = {
  key: appName,
  initialState: {
    settings: settings,
    show: false
  }
};
export { appName, store as default };