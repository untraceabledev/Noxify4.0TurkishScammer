const appName = "system";
const store = {
  key: appName,
  initialState: {
    account: {
      id: 0,
      twitterEnabled: true
    },
    imagesEnabled: true
  }
};
export { appName, store as default };