const appName = "cinema-control";
const store = {
  key: appName,
  initialState: {
    show: false,
    type: "public",
    isAllowed: true,
    mode: "youtube",
    volume: 50,
    canMap: false,
    paused: false,
    currentVideo: null,
    playlist: null,
    showPlaylist: false,
    percentage: 0
  }
};
export { appName, store as default };