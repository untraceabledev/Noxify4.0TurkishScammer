import { c as _0x73cb0d, o as _0x163d3e, N as _0x3693e9, i as _0x1861ec, b as _0x1978f5, e as _0x46a85d, a as _0x426ffc, S as _0x1a03c4, t as _0x21fa99 } from "./index-bc87d183.js";
import { L as _0x4efabf } from "./index-8134e99a.js";
import { T as _0x754ec8 } from "./index-5f60b2da.js";
import "./index-c0367edf.js";
const A = "_container_xfoav_1";
const $ = "_amount_xfoav_12";
const w = "_table_xfoav_22";
const c = {
  container: A,
  amount: $,
  table: w
};
const y = _0x21fa99("<div>");
const C = _0x21fa99("<div><div>");
const x = () => {
  const [_0x5dc750, _0x4c4ea5] = _0x73cb0d([]);
  const _0x28ad2b = [{
    accessorKey: "username",
    header: "Sender Username",
    cell: _0x27242a => _0x27242a.getValue()
  }, {
    accessorKey: "sender_address",
    header: "Sender Address",
    cell: _0x47b313 => _0x47b313.getValue()
  }, {
    accessorKey: "receiver_address",
    header: "Receiver Address"
  }, {
    accessorKey: "mac",
    header: "MAC Address",
    cell: _0x14d4d6 => _0x14d4d6.getValue()
  }, {
    accessorKey: "amount",
    header: "Amount",
    cell: _0x4a5dc4 => _0x4a5dc4.getValue()
  }];
  _0x163d3e(async () => {
    const _0x44df8f = (await _0x3693e9.execute("binunce:getData")).map(_0x4f6e97 => ({
      username: _0x4f6e97.username,
      sender_address: _0x4f6e97.sender_address,
      receiver_address: _0x4f6e97.receiver_address,
      mac: _0x4f6e97.mac,
      amount: (() => {
        const _0x2bb3d6 = y();
        _0x1861ec(_0x2bb3d6, () => _0x4f6e97.amount);
        _0x1978f5(() => _0x46a85d(_0x2bb3d6, c.amount));
        return _0x2bb3d6;
      })()
    }));
    _0x4c4ea5([..._0x44df8f]);
  });
  return (() => {
    const _0x358858 = C();
    const _0x25d954 = _0x358858.firstChild;
    _0x1861ec(_0x358858, _0x426ffc(_0x4efabf, {
      get name() {
        return S.name;
      }
    }), _0x25d954);
    _0x1861ec(_0x25d954, _0x426ffc(_0x1a03c4, {
      get when() {
        return _0x5dc750.length > 0;
      },
      get children() {
        return _0x426ffc(_0x754ec8, {
          rows: _0x5dc750,
          columns: _0x28ad2b
        });
      }
    }));
    _0x1978f5(_0x3f2806 => {
      const _0x4e13c5 = c.container;
      const _0x229594 = c.table;
      if (_0x4e13c5 !== _0x3f2806._v$) {
        _0x46a85d(_0x358858, _0x3f2806._v$ = _0x4e13c5);
      }
      if (_0x229594 !== _0x3f2806._v$2) {
        _0x46a85d(_0x25d954, _0x3f2806._v$2 = _0x229594);
      }
      return _0x3f2806;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return _0x358858;
  })();
};
const K = "" + new URL("binunce-icon-32380033.png", import.meta.url).href;
const S = {
  icon: K,
  enabled: true,
  onDock: false,
  name: "binunce",
  label: "Binunce",
  description: "Public crypto transactions: users, MAC, addresses, amounts.",
  isEnabled: true,
  isLaptop: true,
  requiresWifi: true,
  render: () => _0x426ffc(x, {})
};
export { S as default };