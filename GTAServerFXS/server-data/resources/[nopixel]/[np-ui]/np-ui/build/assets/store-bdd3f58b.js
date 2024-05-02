const store = {
    key: "phone.apps.conversations",
    initialState: {
      view: "preview",
      activeConversation: -1,
      conversations: {},
      loaded: [],
      notifications: [],
      order: [],
      page: 0
    }
  };
  export { store as default };