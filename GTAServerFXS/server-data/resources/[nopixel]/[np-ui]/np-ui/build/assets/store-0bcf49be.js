const appName = "npolaroid-photo";
const store = {
  key: appName,
  initialState: {
    showPhoto: false,
    devMode: false,
    photo: {},
    displayTimeout: undefined
  }
};
export { appName, store as default };