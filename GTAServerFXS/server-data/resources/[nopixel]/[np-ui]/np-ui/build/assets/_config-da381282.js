import { R as _0x215dab, j as _0x57fdc1 } from "./vendor-6c45b22f.js";
import { n as _0x20182d, C as _0x3399e9 } from "./index-d5aaa08b.js";
import { A as _0x24affc } from "./ui-app-6ee97cab.js";
import { D as _0x5d737a } from "./datetime-2c501277.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
import "./preferences-c03a2c0b.js";
import "./date-1e39c206.js";
import "./translations-7705db3f.js";
import "./text-f7ee3e03.js";
import "./tooltip-cb871d8a.js";
const newspaper = "";
class NewsPaper extends _0x215dab.Component {
  constructor(_0x1c39f9) {
    super(_0x1c39f9);
    this.state = {
      drugs: "",
      lockups: [],
      recentElections: [],
      show: false,
      stonks: "",
      taxes: [],
      upcomingElections: []
    };
  }
  onShow = async () => {
    const _0x384415 = (await _0x20182d("np-ui:getNewspaperContent", {}, {
      returnData: "getNewspaperContent"
    })).data;
    this.setState({
      ..._0x384415,
      show: true
    });
  };
  onHide = () => {
    this.setState({
      show: false
    });
  };
  render() {
    return _0x57fdc1.jsx(_0x24affc, {
      center: true,
      closeOnError: true,
      name: "newspaper",
      onError: this.onHide,
      onEscape: this.onHide,
      onHide: this.onHide,
      onShow: this.onShow,
      children: this.state.show && _0x57fdc1.jsx("div", {
        className: "newspaper-wrapper",
        children: _0x57fdc1.jsx("div", {
          className: "newspaper",
          children: _0x57fdc1.jsxs("div", {
            className: "content",
            children: [_0x57fdc1.jsxs("div", {
              className: "header",
              children: [_0x57fdc1.jsx("div", {
                className: "alert-box",
                children: "City Alert: We have had multiple reports of injuries from spinning newspapers. Be careful!"
              }), _0x57fdc1.jsx("div", {
                className: "title",
                children: "Los Santos Post"
              })]
            }), _0x57fdc1.jsxs("div", {
              className: "subhead",
              children: [_0x57fdc1.jsx("span", {
                children: "Edition: 49,726"
              }), _0x57fdc1.jsx("span", {
                children: "The Second Best Selling Newspaper in the World"
              }), _0x57fdc1.jsx("span", {
                children: "Current News"
              })]
            }), _0x57fdc1.jsxs("div", {
              className: "columns",
              children: [_0x57fdc1.jsxs("div", {
                className: "column",
                children: [_0x57fdc1.jsx("div", {
                  className: "headline",
                  children: "Upcoming Elections"
                }), _0x57fdc1.jsx("div", {
                  className: "subheadline",
                  children: "GIVE THEM HOPE"
                }), _0x57fdc1.jsx("div", {
                  className: "column-content",
                  children: this.state.upcomingElections.map((_0x2f1541, _0x26f499) => _0x57fdc1.jsxs("div", {
                    className: "election",
                    children: [_0x57fdc1.jsx("span", {
                      children: _0x2f1541.title
                    }), _0x57fdc1.jsx("span", {
                      children: _0x57fdc1.jsx(_0x5d737a, {
                        textStyle: {
                          color: "black"
                        },
                        timestamp: new Date(_0x2f1541.date).getTime(),
                        typeface: "body2"
                      })
                    }), _0x57fdc1.jsx("span", {
                      children: _0x2f1541.description
                    })]
                  }, _0x26f499))
                })]
              }), _0x57fdc1.jsxs("div", {
                className: "column",
                children: [_0x57fdc1.jsx("div", {
                  className: "headline",
                  children: "Recent Elections"
                }), _0x57fdc1.jsx("div", {
                  className: "subheadline",
                  children: "DESTROY THEIR HOPE"
                }), _0x57fdc1.jsx("div", {
                  className: "column-content",
                  children: this.state.recentElections.map((_0x15314f, _0x42d463) => _0x57fdc1.jsxs("div", {
                    className: "election",
                    children: [_0x57fdc1.jsx("span", {
                      children: _0x15314f.title
                    }), _0x57fdc1.jsx("span", {
                      children: _0x57fdc1.jsx(_0x5d737a, {
                        textStyle: {
                          color: "black"
                        },
                        timestamp: new Date(_0x15314f.date).getTime(),
                        typeface: "body2"
                      })
                    }), _0x57fdc1.jsx("span", {
                      children: _0x15314f.description
                    })]
                  }, _0x42d463))
                })]
              }), _0x57fdc1.jsxs("div", {
                className: "column",
                children: [_0x57fdc1.jsx("div", {
                  className: "headline",
                  children: "Lockups"
                }), _0x57fdc1.jsx("div", {
                  className: "subheadline",
                  children: "PD Gang W's"
                }), _0x57fdc1.jsx("div", {
                  className: "column-content",
                  children: this.state.lockups.map((_0x355880, _0x4fd1de) => _0x57fdc1.jsxs("div", {
                    className: "lockup",
                    children: [_0x57fdc1.jsx("span", {
                      children: _0x355880.name
                    }), " was sentenced to ", _0x57fdc1.jsx("span", {
                      children: _0x355880.duration
                    }), " month(s)."]
                  }, _0x4fd1de))
                })]
              }), _0x57fdc1.jsxs("div", {
                className: "column column-dbl",
                children: [_0x57fdc1.jsxs("div", {
                  className: "dbl",
                  children: [_0x57fdc1.jsx("div", {
                    className: "headline",
                    children: "Drugs"
                  }), _0x57fdc1.jsx("div", {
                    className: "subheadline",
                    children: "by Chips Ahoy"
                  }), _0x57fdc1.jsx("div", {
                    className: "column-content",
                    children: this.state.drugs
                  })]
                }), _0x57fdc1.jsxs("div", {
                  className: "dbl",
                  children: [_0x57fdc1.jsx("div", {
                    className: "headline",
                    children: "Stonks"
                  }), _0x57fdc1.jsx("div", {
                    className: "subheadline",
                    children: "On The Rise?"
                  }), _0x57fdc1.jsx("div", {
                    className: "column-content",
                    children: this.state.stonks
                  })]
                })]
              })]
            }), _0x57fdc1.jsx("div", {
              className: "subhead",
              children: _0x57fdc1.jsxs("div", {
                className: "taxes",
                children: ["Recent Tax Changes:", this.state.taxes.map((_0x34aabf, _0x5a62ea) => _0x57fdc1.jsxs("span", {
                  children: [_0x34aabf.type, " - ", _0x34aabf.level, "%"]
                }, _0x5a62ea))]
              })
            })]
          })
        })
      })
    });
  }
}
const config = () => {
  return {
    name: "newspaper",
    render: NewsPaper,
    type: _0x3399e9.Application
  };
};
export { config as default };