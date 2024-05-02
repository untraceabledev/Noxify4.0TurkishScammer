const appName = "newscam";
const store = {
  key: appName,
  initialState: {
    show: false,
    recording: false,
    text: ""
  }
};
export { appName, store as default };