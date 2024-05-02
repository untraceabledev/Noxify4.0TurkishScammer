const appName = "tcg-card";
const store = {
  key: appName,
  initialState: {
    flipped: true,
    print: {},
    printSet: {},
    rarity: "common",
    holo: "none"
  }
};
export { appName, store as default };