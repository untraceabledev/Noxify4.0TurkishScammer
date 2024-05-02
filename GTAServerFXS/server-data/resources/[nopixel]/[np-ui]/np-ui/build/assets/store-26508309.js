const appName = "phone.apps.guber";
const store = {
  key: appName,
  initialState: {
    clockedIn: false,
    viewType: null,
    loading: false,
    markers: [],
    bookingInfo: null,
    rating: 0
  }
};
export { appName, store as default };