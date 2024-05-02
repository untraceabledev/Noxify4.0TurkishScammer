import { j as _0x115d8a, A as _0x44b50a, x as _0xb3d0bb, r as _0x2cafbe, az as _0x310276, ax as _0x314781, ay as _0x18b67f, R as _0x2fcc47, f as _0x3c867f } from "./vendor-6c45b22f.js";
import { s as _0x54738e, f as _0x4b069e, n as _0xfe8976, u as _0x4f347d } from "./index-d5aaa08b.js";
import _0x56b6f2 from "./store-52786cd5.js";
import { b as _0x1d910e, c as _0x578a1f, m as _0x847acf, a as _0x1cec72, d as _0x2d7fcd } from "./actions-c0279434.js";
import { d as _0x56bc4c } from "./dev-data-afd59de4.js";
import { F as _0x2cacb6 } from "./input-c6588ceb.js";
import { S as _0x78a7dc } from "./simple-form-6b6335d8.js";
import { I as _0x116215 } from "./icon-7f5cdae2.js";
import { u as _0x13cd32 } from "./useOutsideClick-e98795c9.js";
import { D as _0x287b1a } from "./datetime-2c501277.js";
import { g as _0x351089 } from "./character-8ebc09ae.js";
import { G as _0x4527f9 } from "./index-c0da55ad.js";
import { G as _0x4f3d1e } from "./index-eac3b5ce.js";
import { t as _0x56738b } from "./notifications-c44d34f0.js";
import { D as _0x42a73b } from "./duration-timer-2aea312f.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-e94787e2.js";
import "./store-779dab40.js";
import "./store-50ddf3e0.js";
import "./text-f7ee3e03.js";
import "./translations-7705db3f.js";
import "./format-10690d6f.js";
import "./styles-61014012.js";
import "./index-ae383549.js";
import "./preferences-c03a2c0b.js";
import "./date-1e39c206.js";
import "./tooltip-cb871d8a.js";
const getState = () => _0x54738e.getState()[_0x56b6f2.key];
const updateState = _0x8820f1 => _0x4b069e(_0x72d5a1 => ({
  ..._0x72d5a1,
  [_0x56b6f2.key]: {
    ..._0x72d5a1[_0x56b6f2.key],
    ..._0x8820f1
  }
}))();
const getDocuments = async (_0x233394, _0x3f4fad = true, _0x37e898 = 1, _0x140fd6 = 2, _0x1e10d3 = 3, _0x53926b = 4) => {
  const _0x3ab85b = getState();
  const _0x12e35e = _0x233394 === -1 ? _0x3ab85b.documentTypes.find(_0x53200f => _0x53200f.name === "Notes").id : _0x3ab85b.notesTypeId;
  const _0x40c7d9 = _0x233394 !== -1 ? _0x233394 : _0x12e35e;
  const _0x10dfeb = _0x3ab85b.documentTypes.find(_0x3e7316 => _0x3e7316.id === _0x40c7d9);
  updateState({
    notesTypeId: _0x12e35e,
    selectedDocumentType: _0x10dfeb
  });
  const _0x355b69 = await ([2, 4].includes(_0x40c7d9) ? _0xfe8976("np-ui:getDocuments", {
    type_id: _0x40c7d9
  }, {
    returnData: _0x56bc4c.getDocuments(_0x40c7d9)
  }) : _0xfe8976("phone/getDocuments", {
    type_id: _0x40c7d9
  }, {
    returnData: _0x56bc4c.getDocuments(_0x40c7d9),
    extApi: true
  }));
  const _0x5dca20 = {
    fromShare: false,
    list: _0x355b69.data
  };
  updateState(_0x5dca20);
};
const createDocument = () => {
  updateState({
    document: _0x56b6f2.initialState.document,
    page: "editing"
  });
};
const saveDocument = async () => {
  const _0x5356fa = getState();
  _0x1d910e();
  const _0x3b675c = _0x5356fa.document.id === -1;
  const _0x30582e = "np-ui:" + (!_0x3b675c ? "edit" : "create") + "Document";
  const _0x37db54 = await _0xfe8976(_0x30582e, {
    type_id: _0x5356fa.selectedDocumentType.id,
    document: _0x5356fa.document
  });
  if (!_0x37db54.meta.ok) {
    _0x578a1f(_0x37db54.meta.message, true);
    return;
  }
  if (!_0x3b675c) {
    startEditDocument(false);
  } else {
    getDocuments(_0x5356fa.selectedDocumentType.id, _0x3b675c);
  }
  _0x847acf();
};
const viewDocument = async (_0x248f60, _0x365cd4 = false) => {
  _0x1d910e();
  const _0x3b5ea5 = await ([2, 4].includes(_0x248f60.type_id) ? _0xfe8976("np-ui:getDocumentContent", {
    document: _0x248f60
  }, {
    returnData: _0x56bc4c.getDocumentContent(),
    timeout: 400
  }) : _0xfe8976("phone/getDocumentContent", {
    document: _0x248f60
  }, {
    returnData: _0x56bc4c.getDocumentContent(),
    timeout: 400,
    extApi: true
  }));
  if (!_0x3b5ea5.meta.ok) {
    _0x578a1f(_0x3b5ea5.meta.message, true);
    return;
  }
  await startEditDocument(false);
  const _0x23ac8b = {
    fromShare: _0x365cd4,
    document: _0x3b5ea5.data,
    page: "editing"
  };
  if (_0x365cd4) {
    const _0x23ecb2 = getState().documentTypes.find(_0x3a8051 => _0x3a8051.id === _0x248f60.type_id) || getState().documentTypes[0];
    _0x23ac8b.selectedDocumentType = _0x23ecb2;
  }
  updateState(_0x23ac8b);
  _0x847acf(false);
};
const startEditDocument = async (_0x687f90 = true) => {
  const _0x31d2ef = getState();
  if (!_0x687f90 && !_0x31d2ef.unlocked) {
    return;
  }
  if (_0x687f90) {
    _0x1d910e();
  }
  const _0x509732 = _0x31d2ef.document;
  const _0x4ba268 = await _0xfe8976("np-ui:startEditDocument", {
    document: _0x509732,
    unlock: _0x687f90
  }, {
    returnData: _0x509732
  });
  if (!_0x4ba268.meta.ok) {
    _0x578a1f("Document is being edited by someone else", true);
    return;
  }
  updateState({
    unlocked: _0x687f90
  });
  _0x847acf(false);
};
const dropDocument = () => {
  const _0x46f276 = getState().document;
  _0xfe8976("np-ui:dropDocument", {
    document: _0x46f276
  });
};
const shareLocal = () => {
  const _0x1f7d90 = getState().document;
  _0xfe8976("np-ui:shareDocumentLocal", {
    document: _0x1f7d90
  });
};
const document_actions = "_document_actions_10qo1_1";
const btn = "_btn_10qo1_15";
const active = "_active_10qo1_32";
const styles$1 = {
  document_actions: document_actions,
  btn: btn,
  active: active
};
const AppActions = _0x110ab6 => {
  const _0x7fac06 = _0x13cd32(_0x110ab6.onClose);
  const _0x422138 = {
    opacity: 1
  };
  const _0x5ca71d = {
    opacity: 0
  };
  return _0x115d8a.jsx(_0x44b50a, {
    children: _0x115d8a.jsx("div", {
      style: {
        zIndex: 1000
      },
      children: _0x110ab6.show && _0x115d8a.jsx(_0xb3d0bb.div, {
        className: styles$1.document_actions_container,
        initial: _0x5ca71d,
        animate: _0x422138,
        exit: _0x5ca71d,
        children: _0x115d8a.jsx("div", {
          className: styles$1.document_actions,
          ref: _0x7fac06,
          children: _0x110ab6.options.map(_0x286b01 => _0x115d8a.jsxs(_0xb3d0bb.button, {
            className: styles$1.btn,
            onClick: () => {
              _0x286b01.onClick();
              _0x110ab6.onClose();
            },
            children: [_0x115d8a.jsx(_0x116215, {
              className: styles$1.icon,
              icon: _0x286b01.icon
            }), _0x115d8a.jsx("p", {
              children: _0x286b01.label
            })]
          }, _0x286b01.label))
        })
      })
    })
  });
};
const index$5 = "";
const ShareForm = ({
  document: _0x1e6ec5
}) => _0x115d8a.jsx(_0x78a7dc, {
  elements: [{
    name: "id",
    render: ({
      onChange: _0xa15829,
      value: _0x56d632
    }) => _0x115d8a.jsx(_0x2cacb6.CityID, {
      onChange: _0xa15829,
      value: _0x56d632
    })
  }],
  onCancel: () => _0x847acf(false),
  onSubmit: ({
    id: _0x31268a
  }) => {
    _0xfe8976("np-ui:shareDocumentPermanent", {
      document: _0x1e6ec5,
      sharee_id: Number(_0x31268a)
    });
    _0x847acf();
  }
});
const DocumentEditor = () => {
  const [_0x547cb7, _0x3ead77] = _0x4f347d(_0x56b6f2.key);
  const _0x440052 = _0x547cb7.document.editable && _0x547cb7.selectedDocumentType.editable && !_0x547cb7.fromShare;
  const _0x9708d4 = _0x547cb7.selectedDocumentType.shareable && !_0x547cb7.fromShare;
  const _0x4a653b = !_0x547cb7.document || _0x547cb7.document.id === -1;
  const _0x19efad = !_0x4a653b && (!_0x440052 || _0x9708d4 && !_0x547cb7.unlocked && !_0x547cb7.fromShare);
  const _0x5320e3 = _0x547cb7.selectedDocumentType.name === "Notes";
  const _0x5cd05d = _0x547cb7.selectedDocumentType.can_sign;
  const _0x2d024e = () => {
    _0x3ead77({
      fromShare: false,
      page: "home"
    });
    if (!_0x4a653b) {
      startEditDocument(false);
    }
  };
  const _0x55bc51 = [];
  if (!_0x19efad && !_0x547cb7.fromShare) {
    _0x55bc51.push({
      icon: "cloud-upload-alt",
      onClick: () => saveDocument(),
      label: "Save",
      color: "green"
    });
  }
  if (_0x19efad && _0x440052) {
    _0x55bc51.push({
      icon: "pencil-alt",
      onClick: () => startEditDocument(),
      label: "Edit Document",
      color: "orange"
    });
  }
  if (!_0x4a653b && !_0x547cb7.fromShare) {
    if (_0x5320e3) {
      _0x55bc51.push({
        icon: "qrcode",
        onClick: () => dropDocument(),
        label: "Drop QR Code"
      });
    }
    _0x55bc51.push({
      icon: "share-alt",
      onClick: () => shareLocal(),
      label: "Share (Local)"
    });
    if (_0x9708d4) {
      _0x55bc51.push({
        icon: "share",
        onClick: () => _0x1cec72(_0x115d8a.jsx(ShareForm, {
          document: _0x547cb7.document
        })),
        label: "Share (Permanent)"
      });
    }
    if (!!_0x440052 && !_0x5320e3 && !_0x547cb7.unlocked) {
      _0x55bc51.push({
        icon: "stamp",
        onClick: () => _0x2d7fcd(async () => {
          _0x1d910e();
          const _0x154e18 = await _0xfe8976("np-ui:finalizeDocument", {
            document: _0x547cb7.document
          });
          if (!_0x154e18.meta.ok) {
            _0x578a1f(_0x154e18.meta.message, true);
            return;
          }
          _0x3ead77({
            document: {
              ..._0x547cb7.document,
              editable: false
            }
          });
          _0x847acf();
          getDocuments(_0x547cb7.selectedDocumentType.id, false);
        }, "Are you sure? This cannot be undone"),
        label: "Finalize"
      });
    }
    if (!_0x440052 && !!_0x5cd05d) {
      _0x55bc51.push({
        icon: "pen-nib",
        onClick: () => _0x3ead77({
          page: "signatures"
        }),
        label: "Signatures"
      });
    }
    _0x55bc51.push({
      icon: "trash",
      onClick: () => _0x2d7fcd(async () => {
        _0x1d910e();
        await _0xfe8976("np-ui:deleteDocument", {
          document: _0x547cb7.document
        });
        _0x847acf();
        getDocuments(_0x547cb7.selectedDocumentType.id);
      }, "Are you sure? This cannot be undone"),
      label: "Delete"
    });
  }
  if (!_0x4a653b && _0x547cb7.fromShare && !_0x440052 && !!_0x5cd05d) {
    _0x55bc51.push({
      icon: "pen-nib",
      onClick: () => _0x3ead77({
        page: "signatures"
      }),
      label: "Signatures"
    });
  }
  const _0x7d93f6 = _0x4cf407 => {
    const _0x20bb0b = {
      ..._0x547cb7.document,
      ..._0x4cf407
    };
    _0x3ead77({
      document: _0x20bb0b
    });
  };
  const [_0x2a8f65, _0x26d382] = _0x2cafbe.useState(false);
  return _0x115d8a.jsxs("div", {
    className: "document-view",
    children: [_0x115d8a.jsxs("div", {
      className: "header",
      children: [_0x115d8a.jsxs("div", {
        className: "main-container",
        children: [_0x115d8a.jsx(_0x116215, {
          className: "icon",
          icon: "angle-left",
          onClick: _0x2d024e
        }), _0x115d8a.jsx("div", {
          className: "info",
          children: _0x19efad ? _0x115d8a.jsx("h1", {
            className: "title",
            children: _0x547cb7.document.title
          }) : _0x115d8a.jsx(_0x2cacb6.Text, {
            i18n: true,
            icon: null,
            onChange: _0x452faf => _0x7d93f6({
              title: _0x452faf
            }),
            value: _0x547cb7.document.title,
            placeholder: "Title"
          })
        })]
      }), _0x115d8a.jsxs("button", {
        className: "view-btn",
        onClick: () => _0x26d382(!_0x2a8f65),
        children: [_0x115d8a.jsx(_0x116215, {
          icon: "ellipsis-v"
        }), _0x115d8a.jsx(AppActions, {
          show: _0x2a8f65,
          options: _0x55bc51,
          onClose: () => _0x26d382(false)
        })]
      })]
    }), _0x115d8a.jsx("div", {
      className: "markdown-container",
      children: _0x115d8a.jsx(_0x310276, {
        id: "document-editor",
        dark: true,
        readOnly: _0x19efad,
        onChange: _0x43433d => {
          _0x7d93f6({
            content: _0x43433d()
          });
        },
        placeholder: "Document content goes here...",
        defaultValue: _0x547cb7.document.content
      }, _0x547cb7.document.id)
    })]
  });
};
const index$4 = "";
const DocumentSignatures = () => {
  const [_0x404151, _0x445102] = _0x4f347d(_0x56b6f2.key);
  const [_0x3f887e, _0x420cb] = _0x2cafbe.useState("");
  const _0x381784 = _0x351089();
  const _0x5419c0 = _0x404151.selectedDocumentType.max_signatures;
  const _0x151de4 = _0x404151.signatures.find(_0x2cc8f2 => _0x2cc8f2.id === _0x381784?.id);
  const _0x112919 = _0x151de4 && !_0x151de4.timestamp;
  const _0xe90a08 = !_0x404151.signaturesToRender[_0x5419c0 - 1];
  const _0x451395 = async () => {
    const _0x13fb65 = await _0xfe8976("np-ui:getDocumentSignatures", {
      document: _0x404151.document
    }, {
      returnData: _0x56bc4c.getDocumentSignatures()
    });
    const _0x114709 = _0x13fb65.data;
    const _0x17e652 = [];
    const _0x48373e = _0x404151.selectedDocumentType.max_signatures;
    for (let _0x5bfa4c = 0; _0x5bfa4c < _0x48373e; _0x5bfa4c += 1) {
      _0x17e652.push(_0x114709[_0x5bfa4c] || null);
    }
    _0x445102({
      signatures: _0x114709,
      signaturesToRender: _0x17e652
    });
  };
  const _0x4826ef = async () => {
    _0x2d7fcd(async () => {
      _0x847acf();
      await _0xfe8976("np-ui:signDocument", {
        document: _0x404151.document
      });
      _0x451395();
    });
  };
  const _0x24ee89 = async () => {
    _0x1cec72(_0x115d8a.jsx(RequestSignatureForm, {
      onCancel: () => _0x847acf(false),
      onSubmit: async ({
        id: _0x461864
      }) => {
        _0x1d910e();
        const _0x159990 = await _0xfe8976("np-ui:requestDocumentSignature", {
          signee_id: Number(_0x461864),
          document: _0x404151.document
        });
        if (!_0x159990.meta.ok) {
          _0x578a1f(_0x159990.meta.message);
          return;
        }
        _0x847acf();
        _0x451395();
      }
    }));
  };
  _0x2cafbe.useEffect(() => {
    _0x451395();
  }, []);
  return _0x115d8a.jsxs("div", {
    className: "document-signatures",
    children: [_0x115d8a.jsxs("div", {
      className: "actions-container",
      children: [_0x115d8a.jsx(DocumentBtn, {
        icon: "chevron-left",
        title: "Go back",
        onClick: () => _0x445102({
          page: "editing"
        })
      }), _0x112919 && _0x115d8a.jsx(DocumentBtn, {
        icon: "pen-fancy",
        title: "Sign Document",
        onClick: _0x4826ef
      }), _0xe90a08 && _0x115d8a.jsx(DocumentBtn, {
        icon: "pen-fancy",
        title: "Request Signature",
        onClick: _0x24ee89
      })]
    }), _0x115d8a.jsxs("div", {
      className: "signed-container",
      children: [_0x115d8a.jsx("h1", {
        className: "header",
        children: "Signatures"
      }), _0x115d8a.jsx("ul", {
        className: "signed-list",
        children: _0x404151.signaturesToRender.map((_0x451498, _0x29515d) => {
          const _0x42c781 = !_0x451498 ? "Unsigned" : _0x451498.first_name + " " + _0x451498.last_name;
          const _0x529288 = !_0x451498 ? "" : !_0x451498?.timestamp ? "Requested" : _0x115d8a.jsx(_0x287b1a, {
            timestamp: _0x451498.timestamp,
            typeface: "body2"
          });
          return _0x115d8a.jsx(DocumentBtn, {
            icon: "user",
            title: _0x42c781,
            description: _0x529288
          });
        })
      })]
    })]
  });
};
const DocumentBtn = _0xf8dccd => {
  return _0x115d8a.jsx("li", {
    className: "document-btn",
    onClick: _0xf8dccd.onClick,
    children: _0x115d8a.jsxs("div", {
      className: "main-container",
      children: [_0x115d8a.jsx("div", {
        className: "icon-container",
        children: _0x115d8a.jsx(_0x116215, {
          className: "icon",
          icon: _0xf8dccd.icon
        })
      }), _0x115d8a.jsxs("div", {
        className: "info",
        children: [_0x115d8a.jsx("h1", {
          className: "title",
          children: _0xf8dccd.title
        }), _0xf8dccd.description && _0x115d8a.jsx("p", {
          className: "description",
          children: _0xf8dccd.description
        })]
      })]
    })
  });
};
const RequestSignatureForm = ({
  onCancel: _0x4a49de,
  onSubmit: _0x3ba9d2
}) => _0x115d8a.jsx(_0x78a7dc, {
  elements: [{
    name: "id",
    render: ({
      onChange: _0x4ad250,
      value: _0x49680d
    }) => _0x115d8a.jsx(_0x2cacb6.CityID, {
      onChange: _0x4ad250,
      value: _0x49680d
    })
  }],
  onCancel: _0x4a49de,
  onSubmit: _0x3ba9d2
});
const DOCUMENT_PREVIEW_INFO = {
  1: {
    icon: "clipboard",
    title: "Notes",
    description: "Capture thoughts and ideas."
  },
  2: {
    icon: "id-card",
    title: "Licenses",
    description: "Personal identification cards."
  },
  3: {
    icon: "passport",
    title: "Documents",
    description: "Misc paperwork."
  },
  4: {
    icon: "car-alt",
    title: "Vehicle Registration",
    description: "Car ownership records."
  },
  5: {
    icon: "home",
    title: "Housing Documents",
    description: "House paperwork."
  },
  6: {
    icon: "pen-fancy",
    title: "Contracts",
    description: "Legal agreements."
  }
};
const index$3 = "";
const ListItem = ({
  info: _0x124e7e,
  onClick: _0x4b1a35
}) => {
  return _0x115d8a.jsxs("li", {
    className: "document-type-item",
    children: [_0x115d8a.jsxs("div", {
      className: "main-container",
      children: [_0x115d8a.jsx("div", {
        className: "icon-container",
        children: _0x115d8a.jsx(_0x116215, {
          className: "icon",
          icon: _0x124e7e.icon
        })
      }), _0x115d8a.jsxs("div", {
        className: "info",
        children: [_0x115d8a.jsx("h1", {
          className: "title",
          children: _0x124e7e.title
        }), _0x115d8a.jsx("p", {
          className: "description",
          children: _0x124e7e.description
        })]
      })]
    }), _0x115d8a.jsx("div", {
      className: "view-btn",
      onClick: () => _0x4b1a35(_0x124e7e.id),
      children: _0x115d8a.jsx(_0x116215, {
        icon: "chevron-right"
      })
    })]
  });
};
const index$2 = "";
const DocumentTypeView = () => {
  const [_0x7263f2, _0xfaaa3] = _0x4f347d(_0x56b6f2.key);
  const [_0xc84d31, _0x72933a] = _0x2cafbe.useState("");
  const _0x5c2b46 = _0x541ccd => {
    _0xfaaa3({
      list: [],
      page: "documents_list",
      selectedDocumentViewType: _0x541ccd
    });
  };
  const _0x2f7f41 = _0x2cafbe.useMemo(() => {
    const _0x4a7779 = _0x7263f2.documentTypes.map(_0x15233c => ({
      ..._0x15233c,
      ...DOCUMENT_PREVIEW_INFO[_0x15233c.id]
    }));
    return _0x4a7779.filter(_0x2db226 => {
      return _0x2db226.title.toLocaleLowerCase().includes(_0xc84d31.toLocaleLowerCase());
    });
  }, [_0xc84d31, _0x7263f2.documentTypes]);
  const [_0xf1907c, _0x100498] = _0x314781();
  _0x2cafbe.useEffect(() => {
    (async () => {
      await _0x100498("li", {
        opacity: 1,
        transform: "translateX(0)",
        filter: "blur(0)"
      }, {
        delay: _0x18b67f(0.1)
      });
    })();
  }, [_0xc84d31]);
  return _0x115d8a.jsxs("div", {
    className: "documents-type-view",
    children: [_0x115d8a.jsx(_0x4527f9, {
      placeholder: "Search",
      onChange: _0x3cc8d6 => _0x72933a(_0x3cc8d6),
      value: _0xc84d31,
      icon: "search"
    }), _0x115d8a.jsx("ul", {
      className: "document-list",
      ref: _0xf1907c,
      children: _0x2f7f41.map(_0xe38661 => _0x115d8a.jsx(ListItem, {
        info: _0xe38661,
        onClick: _0x5c2b46
      }, _0xe38661.id))
    })]
  });
};
const index$1 = "";
const DocumentListItem = ({
  info: _0x1e2257
}) => {
  const _0x28e981 = () => {
    viewDocument(_0x1e2257);
  };
  return _0x115d8a.jsxs("li", {
    className: "document-list-item",
    children: [_0x115d8a.jsxs("div", {
      className: "main-container",
      children: [_0x115d8a.jsx(_0x116215, {
        className: "icon",
        icon: "file-alt"
      }), _0x115d8a.jsx("div", {
        className: "info",
        children: _0x115d8a.jsx("h1", {
          className: "title",
          children: _0x1e2257.title
        })
      })]
    }), _0x115d8a.jsx("div", {
      className: "view-btn",
      onClick: _0x28e981,
      children: _0x115d8a.jsx(_0x116215, {
        icon: _0x1e2257.signature_requested ? "pen-nib" : _0x1e2257.editable ? "edit" : "eye"
      })
    })]
  });
};
const SvgNoDocuments = _0x3e4f9d => _0x2cafbe.createElement("svg", {
  width: 89,
  height: 108,
  viewBox: "0 0 89 108",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ..._0x3e4f9d
}, _0x2cafbe.createElement("path", {
  d: "M6.85535 85.9H8.35035V95H7.18035L2.89035 88.825V95H1.39535V85.9H2.56535L6.85535 92.075V85.9ZM13.1448 95.169C12.1915 95.169 11.3811 94.8397 10.7138 94.181C10.0465 93.5223 9.71281 92.712 9.71281 91.75C9.71281 90.788 10.0465 89.9777 10.7138 89.319C11.3811 88.6603 12.1915 88.331 13.1448 88.331C14.1068 88.331 14.9171 88.6603 15.5758 89.319C16.2431 89.9777 16.5768 90.788 16.5768 91.75C16.5768 92.712 16.2431 93.5223 15.5758 94.181C14.9171 94.8397 14.1068 95.169 13.1448 95.169ZM11.7018 93.219C12.0918 93.609 12.5728 93.804 13.1448 93.804C13.7168 93.804 14.1978 93.609 14.5878 93.219C14.9778 92.829 15.1728 92.3393 15.1728 91.75C15.1728 91.1607 14.9778 90.671 14.5878 90.281C14.1978 89.891 13.7168 89.696 13.1448 89.696C12.5728 89.696 12.0918 89.891 11.7018 90.281C11.3118 90.671 11.1168 91.1607 11.1168 91.75C11.1168 92.3393 11.3118 92.829 11.7018 93.219ZM24.7623 85.9C26.0103 85.9 27.046 86.3377 27.8693 87.213C28.7013 88.0883 29.1173 89.1673 29.1173 90.45C29.1173 91.724 28.7013 92.803 27.8693 93.687C27.046 94.5623 26.0103 95 24.7623 95H21.1873V85.9H24.7623ZM24.7623 93.57C25.6203 93.57 26.318 93.2753 26.8553 92.686C27.4013 92.0967 27.6743 91.3513 27.6743 90.45C27.6743 89.54 27.4013 88.7947 26.8553 88.214C26.318 87.6247 25.6203 87.33 24.7623 87.33H22.6823V93.57H24.7623ZM33.4573 95.169C32.504 95.169 31.6936 94.8397 31.0263 94.181C30.359 93.5223 30.0253 92.712 30.0253 91.75C30.0253 90.788 30.359 89.9777 31.0263 89.319C31.6936 88.6603 32.504 88.331 33.4573 88.331C34.4193 88.331 35.2296 88.6603 35.8883 89.319C36.5556 89.9777 36.8893 90.788 36.8893 91.75C36.8893 92.712 36.5556 93.5223 35.8883 94.181C35.2296 94.8397 34.4193 95.169 33.4573 95.169ZM32.0143 93.219C32.4043 93.609 32.8853 93.804 33.4573 93.804C34.0293 93.804 34.5103 93.609 34.9003 93.219C35.2903 92.829 35.4853 92.3393 35.4853 91.75C35.4853 91.1607 35.2903 90.671 34.9003 90.281C34.5103 89.891 34.0293 89.696 33.4573 89.696C32.8853 89.696 32.4043 89.891 32.0143 90.281C31.6243 90.671 31.4293 91.1607 31.4293 91.75C31.4293 92.3393 31.6243 92.829 32.0143 93.219ZM41.2268 95.169C40.2475 95.169 39.4285 94.8397 38.7698 94.181C38.1198 93.5223 37.7948 92.712 37.7948 91.75C37.7948 90.7793 38.1198 89.969 38.7698 89.319C39.4285 88.6603 40.2475 88.331 41.2268 88.331C41.8595 88.331 42.4358 88.4827 42.9558 88.786C43.4758 89.0893 43.8658 89.4967 44.1258 90.008L42.9168 90.71C42.7695 90.398 42.5442 90.1553 42.2408 89.982C41.9462 89.8 41.6038 89.709 41.2138 89.709C40.6418 89.709 40.1608 89.904 39.7708 90.294C39.3895 90.684 39.1988 91.1693 39.1988 91.75C39.1988 92.3307 39.3895 92.816 39.7708 93.206C40.1608 93.596 40.6418 93.791 41.2138 93.791C41.5952 93.791 41.9375 93.7 42.2408 93.518C42.5528 93.336 42.7868 93.0933 42.9428 92.79L44.1518 93.479C43.8745 93.999 43.4758 94.4107 42.9558 94.714C42.4358 95.0173 41.8595 95.169 41.2268 95.169ZM49.5857 88.5H50.9897V95H49.5857V94.168C49.1611 94.8353 48.4894 95.169 47.5707 95.169C46.8254 95.169 46.2231 94.9307 45.7637 94.454C45.3044 93.9773 45.0747 93.323 45.0747 92.491V88.5H46.4787V92.348C46.4787 92.8333 46.6087 93.206 46.8687 93.466C47.1287 93.726 47.4841 93.856 47.9347 93.856C48.4287 93.856 48.8274 93.7043 49.1307 93.401C49.4341 93.089 49.5857 92.6167 49.5857 91.984V88.5ZM59.7295 88.331C60.4662 88.331 61.0598 88.5693 61.5105 89.046C61.9612 89.5227 62.1865 90.164 62.1865 90.97V95H60.7825V91.061C60.7825 90.6103 60.6698 90.2637 60.4445 90.021C60.2192 89.7697 59.9115 89.644 59.5215 89.644C59.0882 89.644 58.7415 89.787 58.4815 90.073C58.2302 90.359 58.1045 90.788 58.1045 91.36V95H56.7005V91.061C56.7005 90.6103 56.5922 90.2637 56.3755 90.021C56.1675 89.7697 55.8685 89.644 55.4785 89.644C55.0538 89.644 54.7072 89.7913 54.4385 90.086C54.1698 90.372 54.0355 90.7967 54.0355 91.36V95H52.6315V88.5H54.0355V89.28C54.4515 88.6473 55.0712 88.331 55.8945 88.331C56.7265 88.331 57.3418 88.6733 57.7405 89.358C58.1738 88.6733 58.8368 88.331 59.7295 88.331ZM64.7941 92.348C64.8981 92.842 65.1365 93.2233 65.5091 93.492C65.8818 93.752 66.3368 93.882 66.8741 93.882C67.6195 93.882 68.1785 93.6133 68.5511 93.076L69.7081 93.752C69.0668 94.6967 68.1178 95.169 66.8611 95.169C65.8038 95.169 64.9501 94.8483 64.3001 94.207C63.6501 93.557 63.3251 92.738 63.3251 91.75C63.3251 90.7793 63.6458 89.969 64.2871 89.319C64.9285 88.6603 65.7518 88.331 66.7571 88.331C67.7105 88.331 68.4905 88.6647 69.0971 89.332C69.7125 89.9993 70.0201 90.8097 70.0201 91.763C70.0201 91.9103 70.0028 92.1053 69.9681 92.348H64.7941ZM64.7811 91.204H68.6031C68.5078 90.6753 68.2868 90.2767 67.9401 90.008C67.6021 89.7393 67.2035 89.605 66.7441 89.605C66.2241 89.605 65.7908 89.748 65.4441 90.034C65.0975 90.32 64.8765 90.71 64.7811 91.204ZM74.6745 88.331C75.4199 88.331 76.0222 88.5693 76.4815 89.046C76.9409 89.5227 77.1705 90.177 77.1705 91.009V95H75.7665V91.152C75.7665 90.6667 75.6365 90.294 75.3765 90.034C75.1165 89.774 74.7612 89.644 74.3105 89.644C73.8165 89.644 73.4179 89.8 73.1145 90.112C72.8112 90.4153 72.6595 90.8833 72.6595 91.516V95H71.2555V88.5H72.6595V89.332C73.0842 88.6647 73.7559 88.331 74.6745 88.331ZM82.3093 89.852H80.6973V92.972C80.6973 93.2407 80.7579 93.4357 80.8793 93.557C81.0006 93.6697 81.1783 93.7347 81.4123 93.752C81.6549 93.7607 81.9539 93.7563 82.3093 93.739V95C81.2346 95.13 80.4633 95.039 79.9953 94.727C79.5273 94.4063 79.2933 93.8213 79.2933 92.972V89.852H78.0973V88.5H79.2933V87.096L80.6973 86.68V88.5H82.3093V89.852ZM84.6025 90.294C84.6025 90.5107 84.7195 90.684 84.9535 90.814C85.1961 90.9353 85.4865 91.0437 85.8245 91.139C86.1711 91.2257 86.5178 91.3297 86.8645 91.451C87.2111 91.5723 87.5015 91.7803 87.7355 92.075C87.9781 92.361 88.0995 92.725 88.0995 93.167C88.0995 93.791 87.8568 94.2807 87.3715 94.636C86.8948 94.9913 86.2925 95.169 85.5645 95.169C84.9231 95.169 84.3728 95.0347 83.9135 94.766C83.4541 94.4973 83.1205 94.1247 82.9125 93.648L84.1215 92.946C84.3468 93.57 84.8278 93.882 85.5645 93.882C86.3011 93.882 86.6695 93.6393 86.6695 93.154C86.6695 92.946 86.5481 92.777 86.3055 92.647C86.0715 92.517 85.7811 92.4087 85.4345 92.322C85.0965 92.2267 84.7541 92.1183 84.4075 91.997C84.0608 91.8757 83.7661 91.6763 83.5235 91.399C83.2895 91.113 83.1725 90.7533 83.1725 90.32C83.1725 89.722 83.3978 89.241 83.8485 88.877C84.3078 88.513 84.8755 88.331 85.5515 88.331C86.0888 88.331 86.5655 88.4523 86.9815 88.695C87.4061 88.929 87.7311 89.2583 87.9565 89.683L86.7735 90.346C86.5481 89.852 86.1408 89.605 85.5515 89.605C85.2828 89.605 85.0575 89.6657 84.8755 89.787C84.6935 89.8997 84.6025 90.0687 84.6025 90.294Z",
  fill: "white",
  fillOpacity: 0.55
}), _0x2cafbe.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M30.3279 0.344289C29.7152 0.636294 27.7054 2.56819 20.5804 9.71375C15.6438 14.6646 11.4954 18.9336 11.3617 19.2004C10.7791 20.3638 10.9042 21.6429 11.709 22.7533C12.4762 23.8114 13.9582 24.2651 15.3934 23.881C16.0749 23.6985 16.7723 23.0412 25.2767 14.5671C31.3752 8.4902 34.5283 5.24019 34.7313 4.82216C35.1356 3.98965 35.1379 2.62896 34.7363 1.84211C33.8882 0.181088 32.0093 -0.457375 30.3279 0.344289ZM51.5525 0.165816C51.1313 0.291534 46.685 4.64385 31.3591 19.9333C20.5499 30.7168 11.5776 39.786 11.4208 40.0869C10.6933 41.4826 10.9517 43.0039 12.0952 44.0571C13.1628 45.0405 14.4659 45.2694 15.7407 44.6974C16.7547 44.2424 55.255 5.76852 55.7104 4.75522C56.9395 2.0195 54.4718 -0.704491 51.5525 0.165816ZM70.0758 3.05471C69.7787 3.11117 69.3272 3.26943 69.0725 3.40625C68.8178 3.54308 56.3774 15.894 41.4272 30.8527C12.5736 59.7228 13.8884 58.3452 13.8884 59.7071C13.8884 61.0124 14.9876 62.4451 16.3085 62.8611C17.0047 63.0805 17.2404 63.089 18.0108 62.9219L18.9051 62.728L46.1215 35.5541C61.0905 20.6085 73.4491 8.17197 73.5852 7.91745C74.4544 6.2916 73.7965 4.14174 72.2025 3.39962C71.3868 3.01985 70.7779 2.92112 70.0758 3.05471ZM72.2369 21.2704C71.2229 21.7254 32.7226 60.1993 32.2673 61.2126C31.2621 63.4498 32.8586 65.9945 35.2674 65.9945C36.6673 65.9945 35.716 66.8844 56.6852 45.9571C68.0006 34.6641 76.511 26.0529 76.6539 25.752C78.0115 22.893 75.1319 19.9714 72.2369 21.2704ZM72.2369 42.2499C71.324 42.6603 53.7159 60.181 53.2468 61.1457C52.8419 61.978 52.8396 63.3384 53.2414 64.1257C53.8327 65.284 55.01 65.9938 56.3377 65.9922C57.6491 65.9905 57.9678 65.7104 67.4068 56.2541C73.8589 49.7902 76.4621 47.0835 76.6408 46.6526C77.8138 43.8257 74.9962 41.009 72.2369 42.2499Z",
  fill: "url(#paint0_radial_52_43)",
  fillOpacity: 0.55
}), _0x2cafbe.createElement("defs", null, _0x2cafbe.createElement("radialGradient", {
  id: "paint0_radial_52_43",
  cx: 0,
  cy: 0,
  r: 1,
  gradientUnits: "userSpaceOnUse",
  gradientTransform: "translate(44 33) rotate(90) scale(49)"
}, _0x2cafbe.createElement("stop", {
  stopColor: "white"
}), _0x2cafbe.createElement("stop", {
  offset: 1,
  stopColor: "white",
  stopOpacity: 0
}))));
const noDocuments = "" + new URL("no-documents-b0e55f4b.svg", import.meta.url).href + "";
const index = "";
const DocumentListView = () => {
  const [_0xbc5db5, _0x4c3c30] = _0x2cafbe.useState(true);
  const [_0x5674cb] = _0x4f347d(_0x56b6f2.key);
  const [_0x461237, _0x51baac] = _0x2cafbe.useState("");
  const _0x29f1f2 = _0x2cafbe.useMemo(() => {
    return _0x5674cb.list.filter(_0xf7f8c9 => {
      return _0xf7f8c9.title.toLocaleLowerCase().includes(_0x461237.toLocaleLowerCase());
    });
  }, [_0x461237, _0x5674cb.list]);
  _0x2cafbe.useEffect(() => {
    if (!_0x5674cb.selectedDocumentViewType) {
      return;
    }
    (async () => {
      _0x4c3c30(true);
      await getDocuments(_0x5674cb.selectedDocumentViewType);
      _0x4c3c30(false);
    })();
  }, [_0x5674cb.selectedDocumentViewType]);
  const _0x2f1c55 = async () => {
    return await _0x51b9a9("li", {
      opacity: 1,
      transform: "translateX(0)",
      filter: "blur(0)"
    }, {
      delay: _0x18b67f(0.1)
    });
  };
  _0x2cafbe.useEffect(() => {
    if (_0x29f1f2.length <= 0) {
      return;
    }
    (async () => {
      await _0x2f1c55();
    })();
  }, [_0x461237, _0x29f1f2]);
  const [_0x32b863, _0x51b9a9] = _0x314781();
  return _0x115d8a.jsxs("div", {
    className: "documents-list-view",
    children: [_0x115d8a.jsx("div", {
      className: "search-container",
      children: _0x115d8a.jsx(_0x4527f9, {
        value: _0x461237,
        icon: "search",
        placeholder: "Search",
        onChange: _0x2c8291 => _0x51baac(_0x2c8291)
      })
    }), !_0xbc5db5 && _0x115d8a.jsxs(_0x2fcc47.Fragment, {
      children: [_0x29f1f2.length > 0 && _0x115d8a.jsx("ul", {
        className: "document-list",
        ref: _0x32b863,
        children: _0x29f1f2.map(_0x1258d4 => _0x115d8a.jsx(DocumentListItem, {
          info: _0x1258d4
        }, _0x1258d4.title))
      }), _0x29f1f2.length <= 0 && _0x115d8a.jsx(_0xb3d0bb.div, {
        className: "empty-container",
        animate: {
          opacity: [0, 1]
        },
        transition: {
          duration: 0.4
        },
        children: _0x115d8a.jsx(SvgNoDocuments, {
          className: "icon"
        })
      })]
    })]
  });
};
const container = "_container_1equj_1";
const styles = {
  container: container
};
const DocumentsApp = () => {
  const [_0x2b919e, _0x4d0536] = _0x4f347d(_0x56b6f2.key);
  return _0x115d8a.jsxs("div", {
    className: _0x3c867f("app", styles.container),
    children: [_0x115d8a.jsx(_0x4f3d1e, {
      title: "Documents",
      action: {
        onClick: () => createDocument(),
        tooltip: "New Document",
        icon: "plus"
      },
      onBack: _0x2b919e.page === "documents_list" ? () => {
        _0x4d0536({
          page: "home",
          list: []
        });
      } : undefined
    }), _0x2b919e.page === "editing" && _0x115d8a.jsx(DocumentEditor, {}), _0x2b919e.page === "signatures" && _0x115d8a.jsx(DocumentSignatures, {}), _0x2b919e.page === "home" && _0x115d8a.jsx(DocumentTypeView, {}), _0x2b919e.page === "documents_list" && _0x115d8a.jsx(DocumentListView, {})]
  });
};
let id = 0;
const getId = (_0x3f973c = false) => {
  if (_0x3f973c) {
    id = id + 1;
  }
  return id;
};
const events = _0x48b927 => {
  _0x48b927("note-qr-code", ({
    data: _0x508bc2,
    state: _0x2d5462
  }) => {
    setTimeout(() => viewDocument(_0x508bc2, true), 1000);
    return {
      ..._0x2d5462,
      phone: {
        ..._0x2d5462.phone,
        activeApp: "documents",
        status: "show"
      }
    };
  });
  _0x48b927("view-document", ({
    data: _0x3f8117,
    state: _0x3b82da
  }) => {
    _0x56738b({
      apps: [],
      icon: {
        name: "folder",
        color: "white"
      },
      id: getId(true),
      onAccept: () => {
        const _0x25701a = _0x33cc24 => {
          setTimeout(() => viewDocument(_0x3f8117, true), 0);
          return {
            ..._0x33cc24,
            phone: {
              ..._0x33cc24.phone,
              activeApp: "documents",
              status: "show"
            }
          };
        };
        _0x54738e.dispatch({
          cb: _0x25701a,
          type: "np-ui-action"
        });
      },
      onAcceptOptions: {
        onAccept: null,
        onReject: null,
        dismiss: false,
        blockDismissOnClick: true,
        id: getId(),
        text: "Viewing...",
        timeout: 2500
      },
      onReject: () => {},
      state: _0x3b82da,
      timeout: 30000,
      title: "view document",
      text: _0x115d8a.jsx(_0x42a73b, {
        countdown: true,
        extra: "a document is being shared with you",
        startTime: 30
      })
    });
    return {
      ..._0x3b82da
    };
  });
};
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/documents.svg";
const icon = {
  background: "#FFF9C4",
  color: "white",
  name: "folder"
};
const config = _0x525200 => {
  return {
    ..._0x525200,
    events: () => events,
    iconPng: myIcon,
    init: async () => {
      const _0x32b59c = (await _0xfe8976("np-ui:getDocumentTypes", {}, {
        returnData: _0x56bc4c.getDocumentTypes()
      })).data;
      return {
        key: _0x56b6f2.key,
        data: {
          ..._0x56b6f2.initialState,
          documentTypes: _0x32b59c
        }
      };
    },
    label: "Documents",
    name: "documents",
    position: 45,
    render: () => _0x115d8a.jsx(DocumentsApp, {})
  };
};
export { config as default, icon };