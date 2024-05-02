import { r as _0x37e23a, j as _0x57794f, R as _0x3095d4 } from "./vendor-6c45b22f.js";
import { I as _0x38928a } from "./icon-7f5cdae2.js";
import { T as _0x2114b0 } from "./text-f7ee3e03.js";
import { C as _0x3e09c3 } from "./tooltip-cb871d8a.js";
const paper = "";
function Paper({
  actions = [],
  children: _0x29b923,
  className = "",
  drawer = null,
  notifications = false,
  notificationsColor = "#4DD0E1",
  onClick = null,
  expandDrawerOnActionClick = true,
  style = {}
}) {
  const [_0x519165, _0x34e0f7] = _0x37e23a.useState(false);
  const [_0x28e9d7, _0x4d1912] = _0x37e23a.useState(false);
  return _0x57794f.jsxs("div", {
    className: "component-paper " + className,
    onClick: onClick ? () => onClick() : () => {},
    style: style,
    children: [notifications && _0x57794f.jsx("div", {
      className: "notification",
      style: {
        backgroundColor: notificationsColor
      }
    }), _0x57794f.jsxs("div", {
      className: "main-container",
      onClick: () => drawer ? _0x4d1912(_0x1efca2 => !_0x1efca2) : null,
      onMouseEnter: () => _0x34e0f7(true),
      onMouseLeave: () => _0x34e0f7(false),
      children: [_0x29b923, _0x519165 && actions.length > 0 && _0x57794f.jsx("div", {
        className: "actions " + (_0x519165 && "actions-show"),
        children: [...actions].map(_0x37de6f => _0x57794f.jsx(_0x3e09c3, {
          title: _0x37de6f.title,
          className: _0x37de6f.class?.toLowerCase(),
          children: _0x57794f.jsx("div", {
            onClick: _0x37de6f.onClick ? _0x22f731 => {
              _0x37de6f.onClick();
              if (!expandDrawerOnActionClick) {
                _0x22f731.stopPropagation();
              }
            } : () => {},
            children: _0x57794f.jsx(_0x38928a, {
              icon: _0x37de6f.icon,
              size: "lg"
            })
          })
        }, "" + _0x37de6f.icon + _0x37de6f.title))
      })]
    }), drawer && _0x28e9d7 && _0x57794f.jsx("div", {
      className: "drawer",
      children: drawer
    })]
  });
}
Paper.Image = ({
  children: _0x21adee
}) => _0x57794f.jsx("div", {
  className: "image",
  children: _0x21adee
});
Paper.Details = ({
  className = "",
  description: _0x1c89f8,
  descriptionClass = "",
  title: _0x47526b,
  titleClass = "",
  i18nTitle = false
}) => _0x57794f.jsxs("div", {
  className: "details " + className,
  children: [_0x57794f.jsx("div", {
    className: "title " + titleClass,
    children: _0x3095d4.isValidElement(_0x47526b) ? _0x47526b : _0x57794f.jsx(_0x2114b0, {
      i18n: i18nTitle,
      i18nSource: "ui:paper:title",
      variant: "body2",
      children: _0x47526b
    })
  }), _0x57794f.jsx("div", {
    className: "description " + descriptionClass,
    children: _0x3095d4.isValidElement(_0x1c89f8) ? _0x1c89f8 : _0x57794f.jsx(_0x2114b0, {
      variant: "body2",
      children: _0x1c89f8
    })
  })]
});
Paper.DetailsAux = ({
  children = null,
  icon = null,
  text = null,
  auxClass = "",
  onClick = () => {}
}) => _0x57794f.jsxs("div", {
  className: "details-aux " + auxClass,
  children: [!!children && children, !children && _0x57794f.jsxs("div", {
    className: "text",
    onClick: onClick,
    children: [!!text && _0x57794f.jsx(_0x2114b0, {
      variant: "body2",
      children: text
    }), !!icon && _0x57794f.jsx(_0x38928a, {
      icon: icon
    })]
  })]
});
const DrawerItemContents = ({
  item: _0x3351f6,
  showActions: _0x5409d2
}) => _0x57794f.jsxs(_0x3095d4.Fragment, {
  children: [_0x57794f.jsx("div", {
    className: "icon label",
    children: _0x3351f6.title != null ? _0x57794f.jsxs("p", {
      children: [_0x3351f6.title, ":"]
    }) : _0x57794f.jsx(_0x38928a, {
      icon: _0x3351f6.icon
    })
  }), _0x57794f.jsx("div", {
    className: "text",
    children: _0x57794f.jsx(_0x2114b0, {
      variant: "body2",
      children: _0x3351f6.text
    })
  }), _0x5409d2 && _0x3351f6.actions?.length > 0 && _0x57794f.jsx("div", {
    className: "actions",
    children: [..._0x3351f6.actions].map(_0x24f5d1 => _0x57794f.jsx(_0x3e09c3, {
      title: _0x24f5d1.title,
      children: _0x57794f.jsx("div", {
        onClick: _0x24f5d1.onClick ? _0x472056 => {
          _0x24f5d1.onClick();
          _0x472056.stopPropagation();
        } : () => {},
        children: _0x57794f.jsx(_0x38928a, {
          icon: _0x24f5d1.icon,
          size: "md"
        })
      })
    }, "" + _0x24f5d1.icon + _0x24f5d1.title))
  })]
});
const DrawerItem = ({
  item: _0x1eb7a5,
  key: _0x9c4906
}) => {
  const [_0x2a10e9, _0x142574] = _0x37e23a.useState(false);
  if (_0x1eb7a5.tooltip) {
    return _0x57794f.jsx(_0x3e09c3, {
      title: _0x1eb7a5.tooltip,
      placement: "left",
      children: _0x57794f.jsx("div", {
        className: "item",
        onMouseEnter: () => _0x142574(true),
        onMouseLeave: () => _0x142574(false),
        children: _0x57794f.jsx(DrawerItemContents, {
          item: _0x1eb7a5,
          showActions: _0x2a10e9
        })
      }, _0x9c4906)
    }, _0x9c4906);
  } else {
    return _0x57794f.jsx("div", {
      className: "item",
      onMouseEnter: () => _0x142574(true),
      onMouseLeave: () => _0x142574(false),
      children: _0x57794f.jsx(DrawerItemContents, {
        item: _0x1eb7a5,
        showActions: _0x2a10e9
      })
    }, _0x9c4906);
  }
};
Paper.Drawer = ({
  children = null,
  items: _0x2902bc
}) => _0x57794f.jsxs(_0x3095d4.Fragment, {
  children: [_0x2902bc.map((_0x2d0c9f, _0x1770ad) => _0x57794f.jsx(DrawerItem, {
    item: _0x2d0c9f
  }, _0x1770ad)), children]
});
Paper.Icon = ({
  icon: _0x55bce6
}) => _0x57794f.jsx(Paper.Image, {
  children: _0x57794f.jsx(_0x38928a, {
    icon: _0x55bce6,
    size: "2x"
  })
});
export { Paper as P };