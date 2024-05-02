import { r as _0x805a3e, j as _0x26d17d, a4 as _0x287b5b, a5 as _0x8fd9fc, a6 as _0x41d163, a7 as _0x436914, a8 as _0xd88150, a9 as _0x440656, aa as _0x4983ca, ab as _0x2e293c, ac as _0x34e968, ad as _0x5ab1d2 } from "./vendor-6c45b22f.js";
import { T as _0x1728c8 } from "./text-f7ee3e03.js";
import { m as _0xccd8a1 } from "./styles-61014012.js";
import { I as _0x14cd71 } from "./icon-7f5cdae2.js";
import { F as _0x41d092 } from "./input-c6588ceb.js";
import { B as _0x5ce12e } from "./button-c47bff31.js";
import { u as _0x512440, n as _0x26c776 } from "./index-d5aaa08b.js";
import { appName } from "./store-0bcf49be.js";
const useStyles = _0xccd8a1({
  root: () => ({
    display: "flex",
    justifyContent: "start",
    width: "100%",
    paddingLeft: 0
  }),
  cardWrapper: _0x1a5536 => ({
    backgroundColor: "#fff",
    backgroundImage: "url('https://gta-assets.nopixel.net/images/polaroid.png')",
    color: "black",
    width: _0x1a5536.cardSize ?? "20vw"
  }),
  photoDateWrapper: () => ({
    padding: "0.2rem 1.5rem"
  }),
  photoDate: () => ({
    fontSize: "0.5em",
    fontFamily: "Quantico",
    fontWeight: "bold",
    textAlign: "right",
    margin: 0,
    padding: 0,
    color: "#9f9f9f"
  }),
  photoWrapper: () => ({
    width: "100%",
    padding: "0 1.5rem"
  }),
  photo: () => ({
    backgroundColor: "black",
    paddingTop: "100%",
    boxShadow: "0px 0px 1px #000 inset",
    maxHeight: "100%"
  }),
  photoDescription: _0x5633ff => ({
    color: "#000",
    fontSize: "1.4rem",
    textAlign: "center",
    marginTop: "0.25rem",
    fontFamily: "Caveat",
    fontWeight: "bold",
    lineHeight: "1.5rem",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: _0x5633ff.lineLimit ?? "3",
    WebkitBoxOrient: "vertical",
    minHeight: "4.5rem",
    wordBreak: "break-word"
  }),
  photoDescriptionButton: () => ({
    display: "flex",
    justifyContent: "center"
  })
});
const UpdatePhotoModal = ({
  open: _0x48f97d,
  handleClose: _0x159318,
  currDesc: _0x59e766
}) => {
  const [_0x1f48fb, _0x356932] = _0x805a3e.useState("");
  _0x805a3e.useEffect(() => {
    _0x356932(_0x59e766);
  }, [_0x59e766]);
  return _0x26d17d.jsxs(_0x287b5b, {
    open: _0x48f97d,
    onClose: () => _0x159318(false),
    "aria-labelledby": "form-dialog-title",
    children: [_0x26d17d.jsx(_0x8fd9fc, {
      id: "form-dialog-title",
      style: {
        backgroundColor: "#1c2028"
      },
      children: "Photo Description"
    }), _0x26d17d.jsxs(_0x41d163, {
      style: {
        backgroundColor: "#1c2028"
      },
      children: [_0x26d17d.jsx(_0x436914, {
        children: "This is permanent and can't be changed."
      }), _0x26d17d.jsx("section", {
        children: _0x26d17d.jsx("div", {
          children: _0x26d17d.jsx(_0x41d092.TextArea, {
            onChange: _0x330b2c => _0x356932(_0x330b2c),
            label: "Description",
            icon: "share",
            value: _0x1f48fb,
            autoFocus: true,
            maxLength: 256
          })
        })
      }), _0x26d17d.jsxs(_0xd88150, {
        style: {
          backgroundColor: "#1c2028"
        },
        children: [_0x26d17d.jsx(_0x5ce12e.Secondary, {
          onClick: () => _0x159318(false),
          children: "Cancel"
        }), _0x26d17d.jsx(_0x5ce12e.Primary, {
          onClick: () => {
            _0x159318(true, _0x1f48fb);
          },
          children: "Set Description"
        })]
      })]
    })]
  });
};
const LazyCardMedia = _0x1cc47f => {
  const [_0x587f24, _0x6e827d] = _0x805a3e.useState(false);
  const _0x18b5ad = _0x805a3e.useRef(null);
  _0x805a3e.useEffect(() => {
    if (!_0x587f24 && _0x18b5ad.current) {
      const _0x8776 = new IntersectionObserver(([{
        intersectionRatio: _0x1ffdd5
      }]) => {
        if (_0x1ffdd5 > 0) {
          _0x6e827d(true);
        }
      });
      _0x8776.observe(_0x18b5ad.current);
      return () => _0x8776.disconnect();
    }
  }, [_0x587f24, _0x18b5ad]);
  if (_0x587f24) {
    return _0x26d17d.jsx(_0x440656, {
      className: _0x1cc47f.className,
      image: _0x1cc47f.image
    });
  } else {
    return _0x26d17d.jsx("div", {
      style: {
        backgroundColor: "#EEE"
      },
      ref: _0x18b5ad
    });
  }
};
const ConvertTime = _0x16305f => {
  return new Date(_0x16305f * 1000).toISOString().substring(0, 10);
};
const IMAGE_EXTENSION = ".jpg";
const Photo = ({
  uuid: _0xbffead,
  data: {
    id: _0x34ca68,
    description: _0x590a95,
    created: _0x18d9b2,
    photobookId: _0x257589,
    options: {
      cardSize: _0x3331c0,
      lineLimit: _0x3ff8ea,
      showingOther = false,
      showingInBook = false,
      rotation = ""
    }
  }
}) => {
  const _0xe112f = useStyles({
    cardSize: _0x3331c0,
    lineLimit: _0x3ff8ea
  });
  const [_0x103823, _0x53feaf] = _0x805a3e.useState(false);
  const [_0x2a10e9, _0x6e548f] = _0x805a3e.useState(_0x590a95);
  const [_0x1b7c3d, _0x4b8e32] = _0x512440(appName);
  _0x805a3e.useEffect(() => {
    _0x6e548f(_0x590a95);
  }, [_0x590a95]);
  if (_0xbffead && _0x18d9b2) {
    return _0x26d17d.jsxs("div", {
      className: _0xe112f.root,
      children: [_0x26d17d.jsxs(_0x4983ca, {
        className: _0xe112f.cardWrapper,
        children: [_0x26d17d.jsx(_0x2e293c, {
          className: _0xe112f.photoDateWrapper,
          title: _0x26d17d.jsx(_0x1728c8, {
            variant: "h6",
            className: _0xe112f.photoDate,
            children: ConvertTime(_0x18d9b2)
          })
        }), _0x26d17d.jsx("div", {
          className: _0xe112f.photoWrapper,
          children: showingInBook ? _0x26d17d.jsx(_0x440656, {
            className: _0xe112f.photo,
            image: _0x1b7c3d.BASE_URL ? _0x1b7c3d.BASE_URL + _0xbffead + IMAGE_EXTENSION : "https://i.imgur.com/5G2zYum.png"
          }) : _0x26d17d.jsx(LazyCardMedia, {
            className: _0xe112f.photo,
            image: _0x1b7c3d.BASE_URL ? _0x1b7c3d.BASE_URL + _0xbffead + IMAGE_EXTENSION : "https://i.imgur.com/5G2zYum.png"
          })
        }), _0x26d17d.jsx(_0x34e968, {
          children: !_0x2a10e9 && showingInBook ? _0x26d17d.jsx("div", {
            className: _0xe112f.photoDescriptionButton,
            children: _0x26d17d.jsxs(_0x5ab1d2, {
              variant: "extended",
              size: "small",
              color: "secondary",
              "aria-label": "add",
              className: _0xe112f.photoActionButton,
              onClick: () => {
                _0x53feaf(true);
              },
              children: [_0x26d17d.jsx(_0x14cd71, {
                icon: "marker"
              }), " Add description"]
            })
          }) : _0x26d17d.jsx(_0x1728c8, {
            variant: "body2",
            className: _0xe112f.photoDescription,
            style: {
              transform: rotation
            },
            children: _0x2a10e9
          })
        })]
      }), _0x26d17d.jsx(UpdatePhotoModal, {
        open: _0x103823,
        handleClose: async (_0x146967, _0x1c5108) => {
          if (_0x146967) {
            const _0x394a4b = _0x1b7c3d.photoBook;
            _0x394a4b.photos[_0xbffead].description = _0x1c5108;
            _0x4b8e32({
              photoBook: {
                ..._0x394a4b
              }
            });
            _0x6e548f(_0x1c5108);
            _0x26c776("np-polaroid:setDescription", {
              photobookId: _0x257589,
              id: _0x34ca68,
              uuid: _0xbffead,
              description: _0x1c5108
            });
          }
          _0x53feaf(false);
        },
        currDesc: ""
      })]
    });
  } else {
    return null;
  }
};
export { Photo as P };