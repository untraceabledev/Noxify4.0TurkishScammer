import { j as _0x2d369f, I as _0x389866, H as _0x624c8b, J as _0x7bd32, K as _0x4afccc, L as _0x3715ee, N as _0x4c790f, O as _0x4f3a57, r as _0x35bd09, Q as _0x5a734c, V as _0x55ab1e, R as _0x2f2fdb, W as _0x31ae01, E as _0x16dc87, X as _0x4d5312, Y as _0x4b48b1, Z as _0xb3671c, _ as _0x66fcfe, C as _0xfdcf38 } from "./vendor-6c45b22f.js";
import { T as _0x1171bb } from "./text-f7ee3e03.js";
import { a as _0x579570, r as _0x1db474 } from "./translations-7705db3f.js";
import { I as _0xa65281 } from "./icon-7f5cdae2.js";
import { p as _0x4771eb, m as _0x45ce44 } from "./format-10690d6f.js";
import { s as _0x5b668f } from "./index-d5aaa08b.js";
import { m as _0x361dc7, b as _0x1bafc1 } from "./styles-61014012.js";
import { B as _0x3df6e4 } from "./index-ae383549.js";
const useStyles = _0x361dc7(_0x4fbd8f => ({
  root: {
    "& .Mui-focused, .MuiFormControlLabel-root, .MuiInput-underline:after, .MuiInputAdornment-root": {
      color: _0x4fbd8f.palette.text.secondary + " !important",
      borderColor: _0x4fbd8f.palette.text.secondary + " !important"
    }
  },
  imageListContainer: () => ({
    display: "flex",
    flexDirection: "column",
    maxHeight: _0x1bafc1.responsiveHeight(384),
    overflowY: "scroll",
    marginTop: 16,
    gap: _0x1bafc1.responsiveHeight(8)
  }),
  pageImageContainer: () => ({
    display: "flex",
    justifyContent: "space-between",
    alignContent: "flex-start"
  }),
  pageImage: () => ({
    width: _0x1bafc1.responsiveWidth(200)
  }),
  pageUrlInputContainer: () => ({
    display: "flex",
    gap: _0x1bafc1.responsiveWidth(8)
  }),
  addButton: () => ({
    minWidth: _0x1bafc1.responsiveWidth(32),
    height: "auto"
  }),
  removeButton: () => ({
    minWidth: _0x1bafc1.responsiveWidth(32),
    marginTop: _0x1bafc1.responsiveWidth(14)
  }),
  pageUrlInput: () => ({
    flexGrow: "1"
  })
}));
const useEmailStyles = _0x361dc7(_0x5dcb59 => ({
  root: _0x188a5d => ({
    "& .Mui-focused, .MuiFormControlLabel-root, .MuiInput-underline:after, .MuiInputAdornment-root": {
      color: _0x5dcb59.palette.text.secondary + " !important",
      borderColor: _0x5dcb59.palette.text.secondary + " !important"
    },
    "& .MuiChip-root.MuiAutocomplete-tag.MuiChip-outlined.MuiChip-deletable": {
      height: "24px",
      width: "100%",
      display: "flex",
      justifyContent: "space-between"
    },
    "& .MuiAutocomplete-inputRoot[class*=\"MuiInput-root\"]": {
      overflowY: "auto",
      maxHeight: !_0x188a5d.isEditingCC ? "36px" : "initial"
    }
  })
}));
function FormInput({
  adornment = null,
  autoFocus = false,
  error = false,
  iconAdornment = null,
  i18n = false,
  i18nPlaceholder = false,
  i18nSource = "ui:input",
  label = "",
  helperText = "",
  multiline = false,
  onChange = _0x58b422 => {},
  placeholder = "",
  rows = 1,
  maxRows = 0,
  minRows = 0,
  style = {},
  type = "",
  value = "",
  onPaste = () => {},
  disabled = false,
  onKeyUp = () => {},
  maxLength = -1,
  InputProps = {}
}) {
  let _0x37399e = _0x2d369f.jsx(_0x389866, {
    position: "start",
    children: adornment
  });
  if (iconAdornment) {
    _0x37399e = _0x2d369f.jsx(_0x389866, {
      position: "start",
      children: _0x2d369f.jsx(_0xa65281, {
        icon: iconAdornment
      })
    });
  }
  _0x579570(i18n, label, i18nSource);
  const _0x5c921a = _0x1db474(label, i18n);
  _0x579570(i18nPlaceholder, placeholder, i18nSource);
  const _0x5c389a = _0x1db474(placeholder, i18nPlaceholder);
  return _0x2d369f.jsx("div", {
    className: "input-wrapper",
    style: style,
    children: multiline === true ? _0x2d369f.jsxs(_0x624c8b, {
      style: {
        width: "100%"
      },
      children: [_0x2d369f.jsx("div", {
        style: {
          height: 50
        },
        children: _0x2d369f.jsx(_0x7bd32, {
          style: {
            width: "100%"
          },
          children: _0x5c921a
        })
      }), _0x2d369f.jsx("div", {
        children: _0x2d369f.jsx(_0x4afccc, {
          autoFocus: autoFocus,
          onChange: onChange,
          maxRows: maxRows,
          minRows: minRows,
          value: value,
          style: {
            width: "100%"
          },
          maxLength: maxLength
        })
      }), helperText && _0x2d369f.jsx(_0x3715ee, {
        children: helperText
      })]
    }) : _0x2d369f.jsx(_0x4c790f, {
      autoFocus: autoFocus,
      error: error,
      helperText: helperText,
      label: _0x5c921a,
      multiline: multiline,
      onChange: onChange,
      placeholder: _0x5c389a,
      inputProps: {
        maxLength: maxLength
      },
      InputProps: {
        startAdornment: _0x37399e,
        ...InputProps
      },
      minRows: rows,
      type: type,
      value: value,
      style: {
        width: "100%"
      },
      disabled: disabled,
      onPaste: onPaste,
      onKeyUp: onKeyUp
    })
  });
}
FormInput.Name = ({
  autoFocus = false,
  onChange: _0xf9d1f0,
  value: _0x5e6507,
  label = "Name",
  disabled = false,
  i18n = true,
  i18nSource = "ui:input:name"
}) => _0x2d369f.jsx(FormInput, {
  autoFocus: autoFocus,
  iconAdornment: "user",
  label: label,
  onChange: _0x4dd0a4 => _0xf9d1f0(_0x4dd0a4.target.value, _0x4dd0a4),
  value: _0x5e6507,
  disabled: disabled,
  i18n: i18n,
  i18nSource: i18nSource
});
FormInput.Search = ({
  autoFocus = false,
  onChange: _0x238b0c,
  value: _0x1fe205,
  style = {}
}) => _0x2d369f.jsx(FormInput, {
  i18n: true,
  autoFocus: autoFocus,
  iconAdornment: "search",
  placeholder: "Search",
  style: style,
  onChange: _0x15c47d => _0x238b0c(_0x15c47d.target.value, _0x15c47d),
  value: _0x1fe205
});
FormInput.Phone = ({
  autoFocus = false,
  onChange: _0x20d3bd,
  useNormalInput = false,
  value = ""
}) => {
  if (useNormalInput) {
    return _0x2d369f.jsx(FormInput, {
      i18n: true,
      autoFocus: autoFocus,
      iconAdornment: "phone",
      helperText: _0x4771eb(value),
      label: "Phone Number",
      onChange: _0x596eee => _0x20d3bd(_0x596eee.target.value.replace(/[^0-9]+/g, "").substring(0, 10), _0x596eee),
      value: value
    });
  }
  const _0x5bf0b5 = _0x5b668f.getState()["phone.apps.contacts"].list;
  return _0x2d369f.jsx(_0x4f3a57, {
    freeSolo: true,
    value: value,
    onChange: (_0x2a3cb9, _0x420928) => {
      if (typeof _0x420928 === "string") {
        _0x20d3bd(_0x420928);
      } else if (_0x420928 && _0x420928.inputValue) {
        _0x20d3bd(_0x420928.inputValue);
      } else if (_0x420928 && _0x420928.number) {
        _0x20d3bd(_0x420928.number);
      } else {
        _0x20d3bd("");
      }
    },
    defaultValue: value,
    id: "autocomplete-" + Math.random(),
    filterOptions: _0xa493b1 => _0xa493b1.filter(_0x47f993 => !value || ("" + _0x47f993.title + _0x47f993.number).toLowerCase().indexOf(value.toLowerCase()) !== -1),
    options: _0x5bf0b5.map(_0x504126 => ({
      title: _0x504126.name,
      number: _0x504126.number
    })),
    getOptionLabel: _0x5ef0ef => _0x5ef0ef.number || _0x5ef0ef,
    style: {
      width: "100%"
    },
    renderInput: _0x55d888 => _0x2d369f.jsx(_0x4c790f, {
      ..._0x55d888,
      autoFocus: autoFocus,
      label: "Phone Number",
      style: {
        width: "100%"
      },
      onChange: _0x27958e => _0x20d3bd(_0x27958e.target.value, _0x27958e)
    }),
    renderOption: _0x148892 => _0x2d369f.jsx(_0x1171bb, {
      children: _0x148892.title
    })
  });
};
FormInput.Password = ({
  autoFocus = false,
  onChange: _0x1c4ff2,
  value: _0x58d7d6,
  label = "Password"
}) => _0x2d369f.jsx(FormInput, {
  i18n: true,
  autoFocus: autoFocus,
  iconAdornment: "user-lock",
  label: label,
  onChange: _0x47f52c => _0x1c4ff2(_0x47f52c.target.value, _0x47f52c),
  type: "password",
  value: _0x58d7d6
});
FormInput.CityID = ({
  autoFocus = false,
  onChange: _0x19630f,
  value: _0x1542ac
}) => _0x2d369f.jsx(FormInput, {
  i18n: true,
  autoFocus: autoFocus,
  iconAdornment: "id-card",
  label: "State ID",
  onChange: _0x553bd => _0x19630f(_0x553bd.target.value, _0x553bd),
  value: _0x1542ac
});
FormInput.AccountID = ({
  autoFocus = false,
  label = "ID",
  onChange: _0x4a1917,
  value: _0x4c2cba
}) => _0x2d369f.jsx(FormInput, {
  i18n: "Account",
  autoFocus: autoFocus,
  iconAdornment: "passport",
  label: "Account " + label,
  onChange: _0x15b70a => _0x4a1917(_0x15b70a.target.value, _0x15b70a),
  value: _0x4c2cba
});
FormInput.Business = ({
  autoFocus = false,
  onChange: _0x2f3b71,
  value: _0x564bf8
}) => _0x2d369f.jsx(FormInput, {
  i18n: true,
  autoFocus: autoFocus,
  iconAdornment: "briefcase",
  label: "Business Name",
  onChange: _0x5192c1 => _0x2f3b71(_0x5192c1.target.value, _0x5192c1),
  value: _0x564bf8
});
FormInput.PaypalID = ({
  autoFocus = false,
  onChange: _0x1d4db5,
  value: _0x287363
}) => _0x2d369f.jsx(FormInput, {
  i18n: true,
  autoFocus: autoFocus,
  iconAdornment: "id-card-alt",
  placeholder: "Paypal ID",
  onChange: _0x1ace9c => _0x1d4db5(_0x1ace9c.target.value, _0x1ace9c),
  value: _0x287363
});
FormInput.Currency = ({
  autoFocus = false,
  onChange: _0x11788b,
  style = {},
  value: _0x4c5f9a,
  label = "",
  disabled = false,
  i18n = true
}) => _0x2d369f.jsx(FormInput, {
  i18n: i18n,
  autoFocus: autoFocus,
  iconAdornment: "dollar-sign",
  helperText: _0x45ce44(_0x4c5f9a || 0),
  label: label || "Amount",
  onChange: _0x96ba2a => _0x11788b(_0x96ba2a.target.value, _0x96ba2a),
  style: style,
  value: _0x4c5f9a,
  disabled: disabled
});
FormInput.Comment = ({
  autoFocus = false,
  onChange: _0x5ec96c,
  value: _0x4a9b40,
  i18n = false,
  i18nSource = "ui:input:comment"
}) => _0x2d369f.jsx(FormInput, {
  autoFocus: autoFocus,
  iconAdornment: "comment",
  label: "Comment",
  onChange: _0x4e0a7e => _0x5ec96c(_0x4e0a7e.target.value, _0x4e0a7e),
  value: _0x4a9b40,
  i18n: i18n,
  i18nSource: i18nSource
});
FormInput.Text = ({
  autoFocus = false,
  icon: _0x4edc8d,
  label: _0x48dad5,
  onChange: _0x91d243,
  placeholder = "",
  value: _0x2cc183,
  helperText = "",
  onPaste = () => {},
  onKeyUp = () => {},
  i18n = false,
  i18nPlaceholder = false,
  i18nSource = "ui:input:text",
  maxLength = -1,
  onClick = () => {},
  InputProps = {}
}) => _0x2d369f.jsx(FormInput, {
  i18n: i18n,
  i18nPlaceholder: i18nPlaceholder,
  i18nSource: i18nSource,
  autoFocus: autoFocus,
  iconAdornment: _0x4edc8d,
  label: _0x48dad5,
  onChange: _0x460598 => _0x91d243(_0x460598.target.value, _0x460598),
  placeholder: placeholder,
  value: _0x2cc183,
  helperText: helperText,
  onPaste: onPaste,
  onKeyUp: onKeyUp,
  maxLength: maxLength,
  onClick: onClick,
  InputProps: InputProps
});
FormInput.TextArea = ({
  autoFocus = false,
  icon: _0x43a52a,
  label = null,
  helperText = "",
  onChange: _0x183317,
  value: _0x3c8949,
  i18n = false,
  i18nSource = "ui:input:textarea",
  maxLength = -1,
  placeholder = ""
}) => _0x2d369f.jsx(FormInput, {
  i18n: i18n,
  i18nSource: i18nSource,
  autoFocus: autoFocus,
  iconAdornment: _0x43a52a,
  label: label,
  helperText: helperText,
  onChange: _0x51361a => _0x183317(_0x51361a.target.value, _0x51361a),
  value: _0x3c8949,
  multiline: true,
  minRows: 2,
  maxRows: 20,
  placeholder: placeholder,
  maxLength: maxLength
});
const CImageList = ({
  autoFocus = false,
  icon: _0x489b30,
  label: _0x51658a,
  minWidth: _0x380549,
  minHeight: _0x55deb7,
  onChange: _0x19eac4,
  placeholder = "",
  value: _0xc8894c,
  onPaste = () => {},
  onKeyUp = () => {},
  i18n = false,
  i18nPlaceholder = false,
  i18nSource = "ui:input:text",
  maxLength = -1,
  InputProps = {}
}) => {
  const [_0x32a0c9, _0x4aa278] = _0x35bd09.useState(_0xc8894c ?? []);
  const [_0x33b01f, _0x252645] = _0x35bd09.useState("");
  const [_0x4d421c, _0x3eaaf3] = _0x35bd09.useState("");
  const _0x158351 = _0x35bd09.useRef(null);
  _0x35bd09.useEffect(() => {
    _0x158351.current?.scroll({
      top: _0x158351.current?.scrollHeight,
      behavior: "smooth"
    });
  }, [_0x32a0c9]);
  const _0x415691 = (_0x101462, _0x264754) => {
    const _0x30f7eb = Math.abs(_0x101462.naturalWidth / _0x264754.naturalWidth);
    const _0x306701 = Math.abs(_0x101462.naturalHeight / _0x264754.naturalHeight);
    return _0x30f7eb < 1.1 && _0x30f7eb > 0.9 && _0x306701 < 1.1 && _0x306701 > 0.9;
  };
  const _0x167b5b = _0x47211e => {
    return new Promise((_0x3a03eb, _0x562bd9) => {
      let _0x47579c = new Image();
      _0x47579c.onload = () => _0x3a03eb(_0x47579c);
      _0x47579c.onerror = _0x446810 => _0x562bd9(_0x446810);
      _0x47579c.src = _0x47211e;
    });
  };
  const _0x2e5a5b = async () => {
    if (_0x33b01f.length === 0) {
      return;
    }
    const _0x473c75 = await _0x167b5b(_0x33b01f);
    if (_0x380549 && _0x473c75.naturalWidth < _0x380549) {
      return _0x3eaaf3("Your pages must be at least " + _0x380549 + "x" + _0x55deb7 + ".");
    }
    if (_0x55deb7 && _0x473c75.naturalHeight < _0x55deb7) {
      return _0x3eaaf3("Your pages must be at least " + _0x380549 + "x" + _0x55deb7 + ".");
    }
    if (_0x32a0c9.length > 0 && !_0x415691(_0x32a0c9[0], _0x473c75)) {
      return _0x3eaaf3("Your pages must all be approximately the same size.");
    }
    _0x3eaaf3("");
    const _0x25182e = [..._0x32a0c9, _0x473c75];
    _0x4aa278(_0x25182e);
    _0x252645("");
    _0x19eac4({
      pagesUrls: _0x25182e.map(_0x501a77 => _0x501a77.src),
      width: _0x25182e[0]?.naturalWidth ?? 0,
      height: _0x25182e[0]?.naturalHeight ?? 0
    });
  };
  const _0x48a042 = _0x2907a3 => {
    if (_0x32a0c9.length === 0) {
      return;
    }
    _0x3eaaf3("");
    const _0x2232ca = [..._0x32a0c9];
    _0x2232ca.splice(_0x2907a3, 1);
    _0x4aa278(_0x2232ca);
    _0x19eac4({
      pagesUrls: _0x2232ca.map(_0x657e38 => _0x657e38.src),
      width: _0x2232ca[0]?.naturalWidth ?? 0,
      height: _0x2232ca[0]?.naturalHeight ?? 0
    });
  };
  _0x579570(i18n, _0x51658a, i18nSource);
  const _0x3b8d22 = _0x1db474(_0x51658a, i18n);
  const _0x44e405 = useStyles();
  return _0x2d369f.jsxs("div", {
    children: [_0x2d369f.jsx(_0x7bd32, {
      className: "MuiInputLabel-shrink",
      style: {
        width: "100%"
      },
      children: _0x3b8d22
    }), _0x2d369f.jsx("div", {
      className: _0x44e405.imageListContainer,
      ref: _0x158351,
      children: _0x32a0c9.map((_0x24b31e, _0x15ba47) => _0x2d369f.jsxs("div", {
        className: _0x44e405.pageImageContainer,
        children: [_0x2d369f.jsx("img", {
          src: _0x24b31e.src,
          className: _0x44e405.pageImage
        }), _0x2d369f.jsx(_0x3df6e4, {
          className: _0x44e405.removeButton,
          onClick: () => _0x48a042(_0x15ba47),
          type: "primary",
          children: "-"
        })]
      }))
    }), _0x2d369f.jsxs("div", {
      className: _0x44e405.pageUrlInputContainer,
      children: [_0x2d369f.jsx("div", {
        className: _0x44e405.pageUrlInput,
        children: _0x2d369f.jsx(FormInput, {
          i18n: i18n,
          i18nPlaceholder: i18nPlaceholder,
          i18nSource: i18nSource,
          autoFocus: autoFocus,
          iconAdornment: _0x489b30,
          onChange: _0x167802 => _0x252645(_0x167802.target.value),
          placeholder: placeholder,
          value: _0x33b01f,
          error: _0x4d421c.length > 0,
          helperText: _0x4d421c,
          onPaste: onPaste,
          onKeyUp: onKeyUp,
          maxLength: maxLength,
          InputProps: InputProps
        })
      }), _0x2d369f.jsx(_0x3df6e4, {
        className: _0x44e405.addButton,
        onClick: () => _0x2e5a5b(),
        type: "primary",
        children: "+"
      })]
    })]
  });
};
FormInput.ImageList = CImageList;
const CCheckbox = ({
  checked: _0x4aee40,
  label: _0x3049e1,
  labelPlacement: _0x37e537,
  onChange: _0x851c3a,
  i18n = false,
  i18nSource = "ui:input:checkbox"
}) => {
  _0x579570(i18n, _0x3049e1, i18nSource);
  const _0x320c17 = _0x1db474(_0x3049e1, i18n);
  return _0x2d369f.jsx(_0x624c8b, {
    children: _0x2d369f.jsx(_0x5a734c, {
      control: _0x2d369f.jsx(_0x55ab1e, {
        checked: _0x4aee40,
        onChange: _0x2c4e8c => _0x851c3a(_0x2c4e8c.target.checked)
      }),
      label: _0x320c17,
      labelPlacement: _0x37e537
    })
  });
};
FormInput.Checkbox = CCheckbox;
const CSelect = ({
  items: _0x5b4773,
  label: _0x866997,
  onChange: _0x2e91a4,
  value: _0x239280,
  i18n = false,
  i18nChildren = false,
  i18nSource = "ui:input:cselect"
}) => {
  _0x2f2fdb.useEffect(() => {
    if (!!_0x239280) {
      _0x2e91a4(_0x239280);
    }
  }, [_0x239280]);
  _0x579570(i18n, _0x866997, i18nSource);
  const _0x2fe682 = _0x1db474(_0x866997, i18n);
  let _0xee6d2d = _0x5b4773;
  if (i18nChildren) {
    _0xee6d2d = _0x5b4773.map(_0x325514 => {
      _0x579570(true, _0x325514.name, "ui:input:cselect:item:" + _0x866997);
      return {
        ..._0x325514,
        name: _0x1db474(_0x325514.name, true)
      };
    });
  }
  return _0x2d369f.jsxs(_0x624c8b, {
    children: [_0x2d369f.jsx(_0x7bd32, {
      children: _0x2fe682
    }), _0x2d369f.jsx(_0x31ae01, {
      value: _0x239280,
      onChange: _0x22ca06 => _0x2e91a4(_0x22ca06.target.value, _0x22ca06),
      children: _0xee6d2d.map(({
        id: _0x1b57b1,
        name: _0x38346d
      }) => _0x2d369f.jsx(_0x16dc87, {
        value: _0x1b57b1,
        children: _0x38346d
      }, _0x1b57b1))
    })]
  });
};
FormInput.Select = CSelect;
FormInput.DatePicker = ({
  label: _0x385f60,
  onChange: _0x1bc7be,
  value: _0xcf691b,
  i18n = false,
  i18nSource = "ui:input:cselect"
}) => {
  _0x579570(i18n, _0x385f60, i18nSource);
  const _0x2a055d = _0x1db474(_0x385f60, i18n);
  return _0x2d369f.jsx(_0x4d5312, {
    utils: _0x4b48b1,
    children: _0x2d369f.jsx(_0xb3671c, {
      autoOk: true,
      disableToolbar: true,
      className: "mui-datepicker",
      variant: "inline",
      format: "MM/dd/yyyy",
      margin: "normal",
      label: _0x2a055d,
      value: new Date(_0xcf691b),
      onChange: _0x1bc7be
    })
  });
};
FormInput.DateTimePicker = ({
  label: _0x3ef461,
  onChange: _0x5a4663,
  value: _0x4692b2,
  i18n = false,
  i18nSource = "ui:input:cselect"
}) => {
  _0x579570(i18n, _0x3ef461, i18nSource);
  const _0x455a7b = _0x1db474(_0x3ef461, i18n);
  return _0x2d369f.jsx(_0x4d5312, {
    utils: _0x4b48b1,
    children: _0x2d369f.jsx(_0x66fcfe, {
      autoOk: true,
      className: "mui-datepicker",
      variant: "inline",
      format: "MM/dd/yyyy HH:mm",
      margin: "normal",
      label: _0x455a7b,
      value: _0x4692b2,
      onChange: _0x5a4663
    })
  });
};
const ChipSelect = ({
  label: _0x2789b5,
  onChange: _0x5d6692,
  value: _0x1e2d78,
  items: _0x4756ac,
  disabled = false,
  i18n = false,
  i18nChildren = false,
  i18nSource = "ui:input:cselect"
}) => {
  _0x579570(i18n, _0x2789b5, i18nSource);
  const _0x24517c = _0x1db474(_0x2789b5, i18n);
  let _0x394a02 = _0x4756ac;
  if (i18nChildren) {
    _0x394a02 = _0x4756ac.map(_0x4ccdce => {
      _0x579570(true, _0x4ccdce.name, "ui:input:cselect:item:" + _0x2789b5);
      return {
        ..._0x4ccdce,
        name: _0x1db474(_0x4ccdce.name, true)
      };
    });
  }
  return _0x2d369f.jsxs(_0x624c8b, {
    children: [_0x2d369f.jsx(_0x7bd32, {
      id: "chip-select",
      children: _0x24517c
    }), _0x2d369f.jsx(_0x31ae01, {
      labelId: "chip-select",
      multiple: true,
      value: _0x1e2d78,
      onChange: _0x5d6692,
      disabled: disabled,
      renderValue: _0xf92f99 => _0x2d369f.jsx("div", {
        children: _0xf92f99.map(_0xf3abe3 => _0x2d369f.jsx(_0xfdcf38, {
          label: _0xf3abe3
        }, _0xf3abe3))
      }),
      children: _0x394a02.map(({
        id: _0x4458ce,
        name: _0x50ca73
      }) => _0x2d369f.jsx(_0x16dc87, {
        value: _0x4458ce,
        children: _0x50ca73
      }, _0x4458ce))
    })]
  });
};
FormInput.ChipSelect = ChipSelect;
const Email = ({
  autoFocus = false,
  onChange: _0x29afd6,
  label = "Email",
  readOnly = false,
  i18n = false,
  useNormalInput = false,
  value = ""
}) => {
  const _0x5e2226 = useEmailStyles();
  if (useNormalInput) {
    return _0x2d369f.jsx(FormInput, {
      i18n: true,
      autoFocus: autoFocus,
      iconAdornment: "at",
      helperText: _0x4771eb(value),
      label: "Email",
      onChange: _0x29afd6,
      value: value
    });
  }
  _0x579570(i18n, label, "ui:input:email");
  const _0x4c78d4 = _0x1db474(label, i18n);
  const _0x164b49 = _0x5b668f.getState()["phone.apps.lifeinvader"].list;
  return _0x2d369f.jsx(_0x624c8b, {
    classes: _0x5e2226,
    children: _0x2d369f.jsx(_0x4f3a57, {
      freeSolo: true,
      value: value,
      onChange: (_0x21e730, _0x9278bb) => {
        if (typeof _0x9278bb === "string") {
          _0x29afd6(_0x9278bb);
        } else if (_0x9278bb && _0x9278bb.inputValue) {
          _0x29afd6(_0x9278bb.inputValue);
        } else if (_0x9278bb && _0x9278bb.email) {
          _0x29afd6(_0x9278bb.email);
        } else {
          _0x29afd6("");
        }
      },
      defaultValue: value,
      id: "autocomplete-" + Math.random(),
      filterOptions: _0x50af2a => _0x50af2a.filter(_0x1e40ec => !value || ("" + _0x1e40ec.title + _0x1e40ec.email).toLowerCase().indexOf(value.toLowerCase()) !== -1),
      options: _0x164b49.map(_0x2fceae => ({
        title: _0x2fceae.name,
        email: _0x2fceae.email
      })),
      getOptionLabel: _0x454ed4 => _0x454ed4.email || _0x454ed4,
      style: {
        width: "100%"
      },
      disabled: readOnly,
      renderInput: _0x5e88c3 => _0x2d369f.jsx(_0x4c790f, {
        ..._0x5e88c3,
        autoFocus: autoFocus,
        label: _0x4c78d4,
        style: {
          width: "100%"
        },
        onChange: _0x2565fc => _0x29afd6(_0x2565fc.target.value, _0x2565fc)
      }),
      renderOption: _0x276a8c => _0x2d369f.jsx(_0x1171bb, {
        children: _0x276a8c.title
      })
    })
  });
};
FormInput.Email = Email;
const MultiEmail = ({
  label = "Emails",
  onChange: _0x3905c9,
  value = [],
  readOnly = false,
  i18n = false
}) => {
  const [_0x327918, _0x3ac641] = _0x35bd09.useState(false);
  const _0xab8cee = useEmailStyles({
    isEditingCC: _0x327918
  });
  _0x579570(i18n, label, "ui:input:email");
  const _0x505302 = _0x1db474(label, i18n);
  const _0x342396 = _0x5b668f.getState()["phone.apps.lifeinvader"].list;
  return _0x2d369f.jsx(_0x624c8b, {
    classes: _0xab8cee,
    children: _0x2d369f.jsx(_0x4f3a57, {
      multiple: true,
      id: "tags-filled",
      options: _0x342396.map(_0x3fdd90 => ({
        title: _0x3fdd90.name,
        email: _0x3fdd90.email
      })),
      defaultValue: value,
      value: value,
      freeSolo: true,
      onChange: (_0x356b6a, _0x5d1853) => {
        if (readOnly) {
          return;
        }
        const _0x458d86 = _0x5d1853.map(_0x4b25fe => typeof _0x4b25fe === "string" ? {
          title: _0x4b25fe,
          email: _0x4b25fe
        } : _0x4b25fe);
        const _0x437f47 = _0x458d86.filter((_0x2e7621, _0x133319, _0x40038d) => _0x40038d.findIndex(_0x3ba990 => _0x3ba990.email === _0x2e7621.email) === _0x133319);
        _0x3905c9(_0x437f47);
      },
      onFocus: () => _0x3ac641(true),
      onBlur: () => _0x3ac641(false),
      getOptionLabel: _0x12ed87 => _0x12ed87.title || _0x12ed87,
      renderTags: (_0x427c43, _0x53f53e) => _0x427c43.map((_0x233424, _0x1c6226) => _0x2d369f.jsx(_0xfdcf38, {
        variant: "outlined",
        label: _0x233424.title,
        ..._0x53f53e({
          index: _0x1c6226
        })
      })),
      renderInput: _0xbc1460 => _0x2d369f.jsx(_0x4c790f, {
        ..._0xbc1460,
        InputProps: {
          ..._0xbc1460.InputProps,
          readOnly: readOnly
        },
        label: _0x505302,
        placeholder: "Enter address..."
      })
    })
  });
};
FormInput.MultiEmail = MultiEmail;
export { FormInput as F };