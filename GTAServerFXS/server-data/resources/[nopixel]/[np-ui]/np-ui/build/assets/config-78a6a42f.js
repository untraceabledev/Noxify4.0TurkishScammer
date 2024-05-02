import { j as _0x4a8706, R as _0x2255cc, aG as _0x361105, aH as _0x5d789f, w as _0x1dff75, s as _0x569f67, r as _0x4cf073, aI as _0x37fd14, G as _0x57132b, az as _0x3ac666, k as _0x3b6916 } from "./vendor-6c45b22f.js";
import { s as _0x72b5, f as _0xdda9c, n as _0x36f8f1, d as _0x31a4f8 } from "./index-d5aaa08b.js";
import { b as _0x114e24, c as _0x504e74, m as _0xb2b092, a as _0x2d25d0, d as _0x405133 } from "./actions-c0279434.js";
import _0x3e5a1c from "./store-555b9636.js";
import { d as _0x2432c7 } from "./dev-data-afd59de4.js";
import { e as _0x3a0bf5 } from "./game-7f8fe59d.js";
import { A as _0x44bcff } from "./app-container-77eaf0ff.js";
import { I as _0x1b7724 } from "./icon-7f5cdae2.js";
import { F as _0x4377c1 } from "./input-c6588ceb.js";
import { P as _0x169106 } from "./paper-22e478e9.js";
import { T as _0x1bc7b1 } from "./text-f7ee3e03.js";
import { f as _0x5f24a3 } from "./date-1e39c206.js";
import { S as _0x4f421a } from "./simple-form-6b6335d8.js";
import { B as _0x5d8107 } from "./button-c47bff31.js";
import { m as _0x460cb1, b as _0xf48fb9 } from "./styles-61014012.js";
import { M as _0x825d35 } from "./multi-pager-4b2260b4.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
import "./store-779dab40.js";
import "./store-50ddf3e0.js";
import "./store-6adab5c7.js";
import "./format-10690d6f.js";
import "./tooltip-cb871d8a.js";
import "./translations-7705db3f.js";
import "./index-ae383549.js";
const getState = () => _0x72b5.getState()[_0x3e5a1c.key];
const updateState = _0x3f94c0 => _0xdda9c(_0x5b55f7 => ({
  ..._0x5b55f7,
  [_0x3e5a1c.key]: {
    ..._0x5b55f7[_0x3e5a1c.key],
    ..._0x3f94c0
  }
}))();
const getArticles = async (_0x1577ab, _0x1e3ced = true, _0x5afe4f = 1, _0x47189e = 2, _0x15aaf7 = 3, _0x1b6bf7 = 4) => {
  const _0x47838e = _0x1577ab === -1 ? 1 : _0x1577ab;
  const _0x6a2f45 = getState().articleTypes.find(_0x1b3633 => _0x1b3633.id === _0x47838e);
  updateState({
    selectedArticleType: _0x6a2f45
  });
  const _0x36da85 = await _0x36f8f1("np-ui:getArticles", {
    type_id: _0x47838e
  }, {
    returnData: _0x2432c7.getArticles(_0x47838e)
  });
  const _0x2c8d44 = {
    list: _0x36da85.data
  };
  if (_0x1e3ced) {
    _0x2c8d44.page = "home";
  }
  updateState(_0x2c8d44);
};
const getMusicCharts = async () => {
  const _0xf371d3 = await _0x36f8f1("np-ui:getMusicCharts", {}, {
    returnData: _0x2432c7.getMusicCharts()
  });
  updateState({
    music: _0xf371d3.data
  });
};
const getEmployment = () => {
  updateState({
    isEditor: _0x3a0bf5(getState().business)
  });
};
const createArticle = () => {
  updateState({
    article: _0x3e5a1c.initialState.article,
    page: "editing"
  });
};
const saveArticle = async (_0xba988b = false) => {
  const _0x2fb4fb = getState();
  _0x114e24();
  const _0x14383c = _0x2fb4fb.article.id === -1;
  const _0x48d87b = "np-ui:" + (!_0x14383c ? "edit" : "create") + "Article";
  const _0x4f79c1 = await _0x36f8f1(_0x48d87b, {
    article: _0x2fb4fb.article
  });
  if (!_0x4f79c1.meta.ok) {
    _0x504e74(_0x4f79c1.meta.message, true);
    return;
  }
  if (!_0x14383c) {
    startEditArticle(false);
  }
  getArticles(_0x2fb4fb.selectedArticleType.id, _0x14383c || _0xba988b);
  _0xb2b092();
};
const viewArticle = async _0x2b1ede => {
  _0x114e24();
  const _0x3245f6 = await _0x36f8f1("np-ui:getArticleContent", {
    article: _0x2b1ede
  }, {
    returnData: _0x2432c7.getArticleContent(),
    timeout: 400
  });
  if (!_0x3245f6.meta.ok) {
    _0x504e74(_0x3245f6.meta.message, true);
    return;
  }
  const _0xf1e445 = {
    article: _0x3245f6.data,
    page: "editing"
  };
  updateState(_0xf1e445);
  _0xb2b092(false);
};
const startEditArticle = async (_0x46aef8 = true) => {
  const _0x1a1eb3 = getState();
  if (!_0x46aef8 && !_0x1a1eb3.unlocked) {
    return;
  }
  if (_0x46aef8) {
    _0x114e24();
  }
  const _0x436393 = _0x1a1eb3.article;
  const _0x4198d8 = await _0x36f8f1("np-ui:startEditArticle", {
    article: _0x436393,
    unlock: _0x46aef8
  }, {
    returnData: _0x436393
  });
  if (!_0x4198d8.meta.ok) {
    _0x504e74("Article is being edited by someone else", true);
    return;
  }
  updateState({
    article: _0x4198d8.data,
    unlocked: _0x46aef8
  });
  _0xb2b092(false);
};
const publishArticle = async () => {
  const _0x2995f8 = getState().article;
  await _0x36f8f1("np-ui:publishArticle", {
    article: _0x2995f8
  });
  await saveArticle(true);
};
const unpublishArticle = async () => {
  const _0x4d29ad = getState().article;
  await _0x36f8f1("np-ui:unpublishArticle", {
    article: _0x4d29ad
  });
  await saveArticle(true);
};
const articles = "";
const lsbnHeader = "'https://gta-assets.nopixel.net/images/lsbn-header.png'";
const ArticleItem = ({
  article: _0x4efcd9,
  onClick: _0x34086f
}) => _0x4a8706.jsx(_0x169106, {
  onClick: _0x34086f,
  children: _0x4a8706.jsxs("div", {
    style: {
      width: "100%"
    },
    children: [_0x4a8706.jsx("div", {
      style: {
        overflow: "hidden"
      },
      children: _0x4a8706.jsx("img", {
        src: _0x4efcd9.header_image,
        alt: _0x4efcd9.header_image,
        style: {
          maxWidth: "100%"
        }
      })
    }), _0x4a8706.jsxs("div", {
      className: "article-details",
      children: [_0x4a8706.jsx(_0x1bc7b1, {
        variant: "body1",
        children: _0x4efcd9.title
      }), _0x4a8706.jsxs(_0x1bc7b1, {
        variant: "body2",
        children: [_0x4efcd9.author, " - ", _0x5f24a3(_0x4efcd9.modified_at)]
      })]
    })]
  })
});
const Articles = _0x5f0f91 => {
  const [_0x4427e5, _0x300ca0] = _0x2255cc.useState(_0x5f0f91.list);
  const [_0x217ac1, _0x28a48b] = _0x2255cc.useState(0);
  _0x2255cc.useEffect(() => {
    _0x300ca0(_0x5f0f91.list);
  }, [_0x5f0f91.list]);
  const _0x198a0b = _0x5f0f91.isEditor;
  const _0x568eda = [];
  if (_0x198a0b) {
    _0x568eda.push({
      icon: "edit",
      title: "Create New",
      color: "orange",
      onClick: () => createArticle()
    });
  }
  return _0x4a8706.jsxs(_0x2255cc.Fragment, {
    children: [_0x4a8706.jsxs(_0x44bcff, {
      primaryActions: _0x568eda,
      search: {
        filter: ["title"],
        list: _0x5f0f91.list,
        onChange: _0x300ca0
      },
      style: {
        backgroundImage: "url(" + lsbnHeader + ")"
      },
      fadeIn: false,
      hasTabs: true,
      hideSearch: _0x217ac1 === 1,
      children: [_0x217ac1 === 0 && _0x4a8706.jsxs("div", {
        children: [_0x198a0b && _0x4a8706.jsx("div", {
          style: {
            marginBottom: 16
          },
          children: _0x4a8706.jsx(_0x4377c1.Select, {
            i18n: true,
            items: _0x5f0f91.articleTypes,
            label: "Type",
            onChange: _0xe87b44 => getArticles(_0xe87b44),
            value: _0x5f0f91.selectedArticleType.id
          })
        }), _0x4a8706.jsx("div", {
          className: "paper-group",
          children: _0x4427e5.map(_0x10d8d0 => _0x4a8706.jsx(ArticleItem, {
            article: _0x10d8d0,
            onClick: () => viewArticle(_0x10d8d0)
          }, _0x10d8d0.id))
        })]
      }), _0x217ac1 === 1 && _0x4a8706.jsxs("div", {
        children: [_0x4a8706.jsx("div", {
          children: _0x4a8706.jsx(_0x1bc7b1, {
            i18n: true,
            i18nSource: "ui:text:phone-apps-news",
            variant: "body1",
            style: {
              textAlign: "center",
              marginBottom: 8
            },
            children: "Music (Last 7 Days)"
          })
        }), _0x4a8706.jsx("div", {
          children: _0x5f0f91.music.map((_0x2530e7, _0x531e7d) => {
            return _0x4a8706.jsxs("div", {
              style: {
                paddingTop: 8,
                paddingBottom: 8,
                marginBottom: 8,
                borderTop: "1px solid #f3cb05"
              },
              children: [_0x4a8706.jsxs(_0x1bc7b1, {
                i18n: "plays",
                i18nSource: "ui:text:phone-apps-news",
                variant: "body1",
                children: [(Number(_0x2530e7.plays) / 1000).toFixed(1), "k plays - ", _0x2530e7.title]
              }), _0x4a8706.jsx(_0x1bc7b1, {
                variant: "body2",
                children: _0x2530e7.artist
              })]
            }, _0x2530e7.title);
          })
        })]
      })]
    }), _0x4a8706.jsxs(_0x361105, {
      value: _0x217ac1,
      onChange: (_0x566643, _0x5a8001) => _0x28a48b(_0x5a8001),
      indicatorColor: "primary",
      textColor: "primary",
      variant: "fullWidth",
      "aria-label": "housing tabs",
      children: [_0x4a8706.jsx(_0x5d789f, {
        icon: _0x4a8706.jsx(_0x1b7724, {
          icon: "newspaper",
          size: "lg"
        }),
        style: {
          minWidth: 0
        }
      }, "articles"), _0x4a8706.jsx(_0x5d789f, {
        icon: _0x4a8706.jsx(_0x1b7724, {
          icon: "music",
          size: "lg"
        }),
        style: {
          minWidth: 0
        }
      }, "music")]
    })]
  });
};
const useStyles = _0x460cb1({
  markdownWrapper: () => ({
    height: "calc(100% - " + _0xf48fb9.responsiveHeight(72) + ")",
    marginBottom: "" + _0xf48fb9.responsiveHeight(72),
    flex: 1,
    "> textarea": {
      height: "100%",
      borderBottom: 0
    },
    "& > div, > div div": {
      minHeight: "100%",
      height: "100%",
      maxHeight: "100%",
      overflowY: "scroll"
    }
  })
});
const editor = "";
const HtmlTooltip = _0x1dff75(_0x4a59fb => ({
  tooltip: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: "none",
    fontSize: _0x4a59fb.typography.pxToRem(12),
    position: "relative"
  }
}))(_0x569f67);
const Editor = _0x2998f0 => {
  const _0x1fe55d = useStyles();
  const _0xeff69b = _0x29a9d7 => _0x2998f0.updateState({
    article: {
      ..._0x2998f0.article,
      ..._0x29a9d7
    }
  });
  const _0x2c83ae = _0x53e7fd => {
    _0x2998f0.updateState({
      article: {
        ..._0x2998f0.article,
        images: [..._0x2998f0.article.images, _0x53e7fd]
      }
    });
  };
  const _0x405603 = _0x3cf041 => {
    const _0x35c223 = _0x2998f0.article.images.filter((_0x139619, _0x28c68f) => _0x28c68f !== _0x3cf041);
    _0x2998f0.updateState({
      article: {
        ..._0x2998f0.article,
        images: _0x35c223
      }
    });
  };
  const _0x386c57 = _0x1fe51c => {
    const _0x356386 = [_0x2998f0.article.images[_0x1fe51c], ..._0x2998f0.article.images.filter((_0x2f5fb4, _0x5bcef1) => _0x5bcef1 !== _0x1fe51c)];
    _0x2998f0.updateState({
      article: {
        ..._0x2998f0.article,
        images: _0x356386
      }
    });
  };
  const _0x3ad473 = _0x2998f0.isEditor;
  const _0x3468b7 = _0x2998f0.selectedArticleType.id === 2;
  const _0x3fb96a = !_0x2998f0.article || _0x2998f0.article.id === -1;
  const _0x264ae2 = !_0x3fb96a && (!_0x3ad473 || !_0x2998f0.unlocked);
  const [_0xfab73a, _0x14ddd8] = _0x4cf073.useState(false);
  const _0x27e70c = [];
  const _0x6a31f9 = [];
  if (!_0x264ae2) {
    _0x6a31f9.push({
      icon: "cloud-upload-alt",
      onClick: () => saveArticle(),
      title: "Save",
      color: "green"
    });
  }
  if (_0x264ae2 && _0x3ad473) {
    _0x6a31f9.push({
      icon: "pencil-alt",
      onClick: () => startEditArticle(),
      title: "Edit Article",
      color: "orange"
    });
  }
  if (!_0x264ae2 && _0x3ad473) {
    _0x27e70c.push({
      icon: "images",
      onClick: () => _0x2d25d0(_0x4a8706.jsx("div", {
        children: _0x4a8706.jsx(_0x4f421a, {
          defaultValues: {},
          elements: [{
            name: "url",
            render: ({
              onChange: _0x14495c,
              value: _0x26c86f
            }) => _0x4a8706.jsx(_0x4377c1.Text, {
              i18n: true,
              label: "Image URL",
              icon: "image",
              onChange: _0x14495c,
              value: _0x26c86f
            })
          }],
          onCancel: () => _0xb2b092(false),
          onSubmit: async _0x2fa451 => {
            _0x114e24();
            _0x2c83ae(_0x2fa451.url);
            _0xb2b092();
          }
        })
      })),
      title: "Add Images"
    });
    if (_0x3468b7) {
      _0x27e70c.push({
        icon: "share-alt",
        onClick: () => publishArticle(),
        title: "Publish"
      });
    } else {
      _0x27e70c.push({
        icon: "share-alt",
        onClick: () => unpublishArticle(),
        title: "Unpublish"
      });
    }
    _0x27e70c.push({
      icon: "trash",
      onClick: () => _0x405133(async () => {
        _0x114e24();
        await _0x36f8f1("np-ui:deleteArticle", {
          article: _0x2998f0.article
        });
        _0xb2b092();
        getArticles(_0x2998f0.selectedArticleType.id);
      }, "Are you sure? This cannot be undone"),
      title: "Delete"
    });
  }
  return _0x4a8706.jsxs(_0x44bcff, {
    fadeIn: false,
    onClickBack: () => {
      _0x2998f0.updateState({
        page: "home"
      });
      if (!_0x3fb96a) {
        startEditArticle(false);
      }
    },
    auxActions: _0x27e70c,
    primaryActions: _0x6a31f9,
    titularInput: _0x4a8706.jsx(_0x4377c1.Text, {
      i18n: true,
      icon: "asd",
      placeholder: "Title",
      onChange: _0x5c3fa4 => _0xeff69b({
        title: _0x5c3fa4
      }),
      value: _0x2998f0.article.title
    }),
    children: [_0x4a8706.jsx(_0x37fd14.Carousel, {
      autoPlay: false,
      children: _0x2998f0.article.images?.map((_0xd88e2, _0xf455b1) => {
        if (!_0xd88e2.match(/.mp4/g)) {
          return _0x4a8706.jsxs("div", {
            children: [_0x4a8706.jsx(_0x57132b, {
              onClickAway: () => _0x14ddd8(false),
              children: _0x4a8706.jsx(HtmlTooltip, {
                disableFocusListener: true,
                disableHoverListener: true,
                disableTouchListener: true,
                title: _0x4a8706.jsx(_0x2255cc.Fragment, {
                  children: _0x4a8706.jsx("div", {
                    onClick: () => _0x14ddd8(false),
                    children: _0x4a8706.jsx("img", {
                      src: _0xd88e2,
                      alt: _0xd88e2,
                      style: {
                        maxHeight: 600,
                        maxWidth: 800
                      }
                    })
                  })
                }),
                placement: "left",
                open: _0xfab73a,
                onClose: () => _0x14ddd8(false),
                children: _0x4a8706.jsx("div", {
                  className: "editor-image",
                  onClick: () => _0x14ddd8(_0x467714 => !_0x467714),
                  style: {
                    backgroundImage: "url(" + _0xd88e2 + ")"
                  }
                })
              })
            }, Math.random()), !_0x264ae2 && _0x3ad473 && _0x4a8706.jsxs("div", {
              style: {
                marginTop: "20px",
                textAlign: "center"
              },
              children: [_0x4a8706.jsx(_0x5d8107.Secondary, {
                size: "small",
                onClick: () => _0x405603(_0xf455b1),
                children: "Remove"
              }), _0xf455b1 !== 0 && _0x4a8706.jsx("div", {
                style: {
                  marginTop: 8
                },
                children: _0x4a8706.jsx(_0x5d8107.Primary, {
                  size: "small",
                  onClick: () => _0x386c57(_0xf455b1),
                  children: "Make Header"
                })
              })]
            })]
          }, _0xf455b1);
        } else {
          return _0x4a8706.jsxs("div", {
            children: [_0x4a8706.jsx("div", {
              className: "editor-image",
              style: {
                backgroundImage: "url(" + _0xd88e2 + ")"
              },
              children: _0x4a8706.jsx("video", {
                autoPlay: false,
                controls: true,
                controlsList: "nodownload",
                loop: true,
                id: "myVideo",
                children: _0x4a8706.jsx("source", {
                  src: _0xd88e2,
                  type: "video/mp4"
                })
              })
            }, Math.random()), !_0x264ae2 && _0x3ad473 && _0x4a8706.jsx("div", {
              style: {
                marginTop: "20px",
                textAlign: "center"
              },
              children: _0x4a8706.jsx(_0x5d8107.Secondary, {
                size: "small",
                onClick: () => _0x405603(_0xf455b1),
                children: "Remove"
              })
            })]
          }, _0xf455b1);
        }
      })
    }), _0x4a8706.jsx("div", {
      className: _0x1fe55d.markdownWrapper,
      children: _0x4a8706.jsx(_0x3ac666, {
        dark: true,
        readOnly: _0x264ae2,
        onChange: _0x1dd100 => _0xeff69b({
          content: _0x1dd100()
        }),
        placeholder: "Article content goes here...",
        defaultValue: _0x2998f0.article.content
      }, _0x2998f0.article.id)
    })]
  });
};
const {
  mapDispatchToProps,
  mapStateToProps
} = _0x31a4f8(_0x3e5a1c);
class Container extends _0x2255cc.Component {
  componentDidMount() {
    getArticles(-1);
    getEmployment();
    getMusicCharts();
  }
  render() {
    const _0x28eaca = {
      home: 0,
      editing: 1
    };
    return _0x4a8706.jsx(_0x825d35, {
      activeIndex: _0x28eaca[this.props.page],
      landscapeOptions: {},
      pages: [{
        index: 0,
        content: _0x4a8706.jsx(Articles, {
          ...this.props
        })
      }, {
        index: 1,
        content: this.props.page !== "editing" ? null : _0x4a8706.jsx(Editor, {
          ...this.props
        })
      }]
    });
  }
}
const Container$1 = _0x3b6916(mapStateToProps, mapDispatchToProps)(Container);
const icon = {
  background: "#FFF9C4",
  color: "white",
  name: "folder"
};
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/news.svg";
const config = _0x5ec169 => {
  return {
    ..._0x5ec169,
    iconPng: myIcon,
    init: async () => {
      const _0x3b9be0 = [{
        id: 1,
        name: "Published"
      }, {
        id: 2,
        name: "Drafts"
      }];
      const _0xc5c86e = "lsbn";
      return {
        key: _0x3e5a1c.key,
        data: {
          ..._0x3e5a1c.initialState,
          business: _0xc5c86e,
          articleTypes: _0x3b9be0,
          selectedArticleType: _0x3b9be0[0]
        }
      };
    },
    label: "LSBN",
    name: "news",
    position: 75,
    hidden: () => true,
    render: () => _0x4a8706.jsx(Container$1, {})
  };
};
export { config as default, icon };