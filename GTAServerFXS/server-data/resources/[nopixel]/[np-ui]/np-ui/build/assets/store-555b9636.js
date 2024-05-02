const store = {
    key: "phone.apps.news",
    initialState: {
      article: {
        id: -1,
        content: "",
        images: [],
        title: "",
        author: "",
        header_image: ""
      },
      list: [],
      music: [],
      page: "home",
      unlocked: false,
      selectedArticleType: {}
    }
  };
  export { store as default };