import { j as _0x328e9e, a4 as _0x1f1748, a5 as _0x36258a, a8 as _0x48426d, r as _0x14d7d0, ae as _0x5d2b7a, af as _0x20b08a, u as _0x49056b } from "./vendor-6c45b22f.js";
import { A as _0x4b5ccd } from "./ui-app-6ee97cab.js";
import { f as _0x375055, u as _0x493cee, n as _0x33f080, i as _0x421adc, C as _0x31cc23 } from "./index-d5aaa08b.js";
import _0x3cd468 from "./store-82bb5a08.js";
import { m as _0x396dd0 } from "./styles-61014012.js";
import { P as _0x48c7e4 } from "./index-ee9f21b8.js";
import { I as _0x3f8568 } from "./icon-7f5cdae2.js";
import { B as _0x1b6236 } from "./button-c47bff31.js";
import { appName } from "./store-0bcf49be.js";
import { D as _0x3b62c9 } from "./misc-13f33aa2.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
import "./text-f7ee3e03.js";
import "./translations-7705db3f.js";
import "./input-c6588ceb.js";
import "./format-10690d6f.js";
import "./index-ae383549.js";
const updatePhotoState = _0xa8a045 => _0x375055(_0x3f27ad => ({
  ..._0x3f27ad,
  [_0x3cd468.key]: {
    ..._0x3f27ad[_0x3cd468.key],
    ..._0xa8a045
  }
}))();
const useStyles$1 = _0x396dd0({
  photoBookBacking: () => ({
    backgroundColor: "rgb(200,200,200, 0.3)",
    padding: "3rem",
    borderRadius: "0.5rem",
    position: "relative",
    height: "90vh",
    width: "75vw"
  }),
  photobookPlastic: () => ({
    padding: "3rem",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr 1fr",
    rowGap: "5rem",
    columnGap: "5rem",
    overflowY: "scroll",
    pointerEvents: "all",
    userSelect: "none",
    animation: "fadeIn 2s"
  }),
  tapeSection: () => ({
    position: "absolute",
    width: "100%",
    "&:first-of-type": {
      top: "0"
    },
    "&:last-of-type": {
      bottom: "0"
    },
    "&:before, &:after": {
      content: "''",
      width: "5vmin",
      height: "2vmin",
      position: "absolute",
      backgroundColor: "#dbd8be",
      opacity: "0.6",
      borderRight: "1px dotted #b7b49d",
      borderLeft: "1px dotted #b7b49d"
    },
    "&:last-of-type:after": {
      transform: "rotate(-55deg)",
      right: "-2vmin",
      top: "-2vmin"
    },
    "&:first-of-type:before": {
      transform: "rotate(-55deg)",
      left: "-2vmin"
    },
    "&:first-of-type:after": {
      transform: "rotate(55deg)",
      right: "-2vmin",
      opacity: 0,
      top: 0
    },
    "&:last-of-type:before": {
      transform: "rotate(55deg)",
      left: "-2vmin",
      bottom: "0",
      opacity: 0
    }
  }),
  photoAction: () => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "space-between",
    flexWrap: "wrap",
    alignItems: "center",
    padding: "1rem",
    gap: "1.5rem"
  })
});
const useStyles = _0x396dd0({
  modalContainer: () => ({
    background: "#31394d"
  }),
  modalTitle: () => ({
    color: "#fff",
    textAlign: "center",
    background: "#31394d"
  }),
  listingBtn: () => ({
    fontSize: 11,
    color: "#fff",
    fontWeight: 500,
    textTransform: "none",
    backgroundColor: "#3787FF"
  }),
  listingRedBtn: () => ({
    fontSize: 11,
    color: "#fff",
    fontWeight: 500,
    textTransform: "none",
    backgroundColor: "#c74242"
  })
});
const ConfirmationModal = _0x4ccfc0 => {
  const _0xd707ae = useStyles();
  const _0x4ee8c0 = () => {
    _0x4ccfc0.confirm();
    _0x4ccfc0.close();
  };
  return _0x328e9e.jsxs(_0x1f1748, {
    open: _0x4ccfc0.show,
    onClose: _0x4ccfc0.close,
    "aria-labelledby": "form-dialog-title",
    children: [_0x328e9e.jsx(_0x36258a, {
      id: "form-dialog-title",
      className: _0xd707ae.modalTitle,
      children: _0x4ccfc0.children
    }), _0x328e9e.jsxs(_0x48426d, {
      className: _0xd707ae.modalContainer,
      children: [_0x328e9e.jsx(_0x1b6236.Primary, {
        className: _0xd707ae.listingBtn,
        onClick: _0x4ee8c0,
        children: "Confirm"
      }), _0x328e9e.jsx(_0x1b6236.Primary, {
        className: _0xd707ae.listingRedBtn,
        onClick: _0x4ccfc0.close,
        children: "Cancel"
      })]
    })]
  });
};
const DisplayPhotoModal = ({
  photo: _0x17154c,
  setCurrentPhoto: _0x93a2b1
}) => {
  const [_0x5020c6, _0x205989] = _0x493cee(appName);
  const [_0x4b2244, _0xb8d0ab] = _0x14d7d0.useState(false);
  const _0x11db82 = async _0x2cf6c1 => {
    const _0x51747b = _0x5020c6.photoBook.photos[_0x17154c.uuid];
    await _0x33f080("np-polaroid:showOthers", {
      photoInfo: {
        uuid: _0x17154c.uuid,
        description: _0x51747b.description,
        created: _0x17154c.created
      },
      fromBinder: true
    });
    _0x93a2b1(undefined);
  };
  const _0x5a4dcf = () => {
    const _0x114517 = {
      ..._0x5020c6.photoBook
    };
    delete _0x114517.photos[_0x17154c.uuid];
    _0x93a2b1(undefined);
    _0x205989({
      photoBook: _0x114517
    });
  };
  const _0xd841a0 = async _0x51ccd3 => {
    await _0x33f080("np-polaroid:moveToInventory", {
      id: _0x17154c.id,
      uuid: _0x17154c.uuid,
      photoBookId: _0x5020c6.photoBook.id
    });
    _0x5a4dcf();
  };
  const _0x87c88d = async () => {
    await _0x33f080("np-polaroid:deletePhoto", {
      id: _0x17154c.id,
      uuid: _0x17154c.uuid,
      photoBookId: _0x5020c6.photoBook.id
    });
    _0x5a4dcf();
  };
  const _0x2806c9 = useStyles$1(true);
  return _0x328e9e.jsxs("div", {
    children: [_0x328e9e.jsx(_0x5d2b7a, {
      disableEnforceFocus: true,
      open: _0x17154c ? true : false,
      onClose: () => _0x93a2b1(undefined),
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      children: _0x328e9e.jsxs("div", {
        children: [_0x328e9e.jsx(_0x48c7e4, {
          uuid: _0x17154c.uuid,
          data: {
            ..._0x5020c6.photoBook.photos[_0x17154c.uuid],
            photobookId: _0x5020c6.photoBook.id,
            options: {
              rotation: _0x17154c.rotation,
              cardSize: "40vw",
              lineLimit: 10,
              showingInBook: true
            }
          }
        }), _0x328e9e.jsxs("div", {
          className: _0x2806c9.photoAction,
          children: [_0x328e9e.jsxs(_0x20b08a, {
            variant: "extended",
            size: "small",
            color: "primary",
            "aria-label": "add",
            className: _0x2806c9.photoActionButton,
            onMouseUp: _0x11db82,
            children: [_0x328e9e.jsx(_0x3f8568, {
              icon: "share"
            }), " Show others"]
          }), _0x328e9e.jsxs(_0x20b08a, {
            variant: "extended",
            size: "small",
            color: "secondary",
            "aria-label": "add",
            className: _0x2806c9.photoActionButton,
            onMouseUp: _0xd841a0,
            children: [_0x328e9e.jsx(_0x3f8568, {
              icon: "archive"
            }), " Move to Inventory"]
          }), _0x328e9e.jsxs(_0x20b08a, {
            variant: "extended",
            size: "small",
            color: "default",
            "aria-label": "add",
            className: _0x2806c9.photoActionButton,
            onClick: () => _0xb8d0ab(true),
            style: {
              backgroundColor: "rgb(199, 66, 66)",
              color: "white"
            },
            children: [_0x328e9e.jsx(_0x3f8568, {
              icon: "trash"
            }), " Delete"]
          })]
        })]
      })
    }), _0x328e9e.jsx(ConfirmationModal, {
      show: _0x4b2244,
      close: () => _0xb8d0ab(false),
      confirm: _0x87c88d,
      children: "Are you sure you want to delete this photo?"
    })]
  });
};
function flattenAndSortPhotos(_0xb6894e) {
  const _0x1d85b5 = Object.entries(_0xb6894e).map(([_0x3b30f8, _0x19d00d]) => ({
    ..._0x19d00d,
    rotation: "rotate(" + (Math.random() > 0.5 ? "-" : "") + "0.9deg)",
    uuid: _0x3b30f8
  }));
  return _0x1d85b5.sort((_0x572e2f, _0x315701) => _0x315701.created - _0x572e2f.created);
}
const Photobook = () => {
  const _0x40b32a = useStyles$1(true);
  const _0x1e7961 = _0x49056b(_0x1bb5e5 => _0x1bb5e5[_0x3cd468.key]);
  const [_0x2c46c8, _0x31be8d] = _0x14d7d0.useState();
  const _0xd2692 = _0x14d7d0.useMemo(() => flattenAndSortPhotos(_0x1e7961.photoBook.photos), [_0x1e7961.photoBook]);
  return _0x1e7961.photoBook.photos && _0x328e9e.jsxs("div", {
    className: _0x40b32a.photoBookBacking,
    children: [_0x328e9e.jsx("div", {
      className: _0x40b32a.photobookPlastic,
      children: _0xd2692.map((_0x3ea46a, _0x50013a) => _0x328e9e.jsxs("div", {
        style: {
          transform: _0x3ea46a.rotation
        },
        onClick: _0x1e1ae9 => _0x31be8d(_0x3ea46a),
        className: _0x40b32a.photoWrapper,
        children: [_0x328e9e.jsx("div", {
          className: _0x40b32a.tapeSection
        }), _0x328e9e.jsx(_0x48c7e4, {
          uuid: _0x3ea46a.uuid,
          data: {
            ..._0x1e7961.photoBook.photos[_0x3ea46a.uuid],
            photobookId: _0x1e7961.photoBook.id,
            options: {
              cardSize: "100%",
              rotation: _0x3ea46a.rotation
            }
          }
        }), _0x328e9e.jsx("div", {
          className: _0x40b32a.tapeSection
        })]
      }, "photo_" + _0x50013a))
    }), _0x328e9e.jsx("div", {
      children: _0x2c46c8 && _0x328e9e.jsx(DisplayPhotoModal, {
        photo: _0x2c46c8,
        setCurrentPhoto: _0x31be8d
      })
    })]
  });
};
const App = () => {
  const _0x51f307 = _0x49056b(_0x252313 => _0x252313[_0x3cd468.key].showPhotoBook);
  const _0x7789d9 = _0x14d7d0.useCallback(async () => {
    if (_0x421adc()) {
      return;
    }
    let _0x146313 = null;
    let _0x1ebfb2 = 0;
    while (_0x146313 === null || _0x1ebfb2 < 10) {
      await new Promise(_0x1f809c => setTimeout(_0x1f809c, 5000));
      _0x146313 = await _0x33f080("np-polaroid:getConfig", {});
      if (_0x146313?.meta?.ok && _0x146313.data.POLAROID_BASE_URL) {
        updatePhotoState({
          baseURL: _0x146313.data.POLAROID_BASE_URL
        });
        return;
      }
      _0x1ebfb2++;
      await _0x3b62c9(1000);
    }
  }, []);
  _0x14d7d0.useEffect(() => {
    _0x7789d9();
  }, [_0x7789d9]);
  const _0x4f59fa = _0x2c5b7a => {
    updatePhotoState({
      showPhotoBook: true,
      photoBook: _0x2c5b7a
    });
  };
  const _0xfca59c = () => {
    updatePhotoState({
      showPhotoBook: false,
      photoBook: {}
    });
  };
  return _0x328e9e.jsx(_0x4b5ccd, {
    center: true,
    name: "npolaroid-photobook",
    onError: _0xfca59c,
    onEscape: _0xfca59c,
    onHide: _0xfca59c,
    onShow: _0x4f59fa,
    children: _0x51f307 && _0x328e9e.jsx(Photobook, {})
  });
};
const config = () => {
  return {
    name: "npolaroid-photobook",
    render: App,
    type: _0x31cc23.Application
  };
};
export { config as default };