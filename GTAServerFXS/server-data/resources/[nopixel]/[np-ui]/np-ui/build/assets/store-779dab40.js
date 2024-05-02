const store = {
    key: "phone.modal",
    initialState: {
      closeOnErrorOkay: false,
      confirmText: "",
      content: "",
      error: null,
      hideOnOkay: true,
      isConfirm: false,
      loading: false,
      onConfirm: () => {},
      show: false,
      slowHide: false
    }
  };
  export { store as default };