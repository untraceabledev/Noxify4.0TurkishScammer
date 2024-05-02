const appName = "voice-url";
const store = {
  key: appName,
  initialState: {
    copied: false,
    url: "invalid url"
  }
};
export { appName, store as default };