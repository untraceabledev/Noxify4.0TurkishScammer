;(() => {
  'use strict'
  var _0xb7155f = {}
  function _0x2eea45(_0x4a1135) {
    return (
      typeof _0x4a1135 === 'string' &&
      /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
        _0x4a1135
      )
    )
  }
  const _0x2e3414 = _0x2eea45
  var _0x16bc90 = []
  for (var _0x101075 = 0; _0x101075 < 256; ++_0x101075) {
    _0x16bc90.push((_0x101075 + 256).toString(16).substr(1))
  }
  function _0x3a5d9f(_0x2db951) {
    var _0x361a19 =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0,
      _0x2871ed = (
        _0x16bc90[_0x2db951[_0x361a19 + 0]] +
        _0x16bc90[_0x2db951[_0x361a19 + 1]] +
        _0x16bc90[_0x2db951[_0x361a19 + 2]] +
        _0x16bc90[_0x2db951[_0x361a19 + 3]] +
        '-' +
        _0x16bc90[_0x2db951[_0x361a19 + 4]] +
        _0x16bc90[_0x2db951[_0x361a19 + 5]] +
        '-' +
        _0x16bc90[_0x2db951[_0x361a19 + 6]] +
        _0x16bc90[_0x2db951[_0x361a19 + 7]] +
        '-' +
        _0x16bc90[_0x2db951[_0x361a19 + 8]] +
        _0x16bc90[_0x2db951[_0x361a19 + 9]] +
        '-' +
        _0x16bc90[_0x2db951[_0x361a19 + 10]] +
        _0x16bc90[_0x2db951[_0x361a19 + 11]] +
        _0x16bc90[_0x2db951[_0x361a19 + 12]] +
        _0x16bc90[_0x2db951[_0x361a19 + 13]] +
        _0x16bc90[_0x2db951[_0x361a19 + 14]] +
        _0x16bc90[_0x2db951[_0x361a19 + 15]]
      ).toLowerCase()
    if (!_0x2e3414(_0x2871ed)) {
      throw TypeError('Stringified UUID is invalid')
    }
    return _0x2871ed
  }
  const _0x5db99a = _0x3a5d9f
  const _0x1a6c1a = globalThis.NPX,
    _0x12d73f = _0x1a6c1a.Hud,
    _0x5929bc = _0x1a6c1a.Utils,
    _0x2d372d = _0x1a6c1a.Zones,
    _0x31b9dc = _0x1a6c1a.Events,
    _0x504b6c = _0x1a6c1a.Streaming,
    _0x27578d = _0x1a6c1a.Procedures,
    _0x197353 = _0x1a6c1a.Interface,
    _0x189686 = null && _0x1a6c1a
  const _0x59d070 = (_0x21e02f, _0x3b0bf5, _0xeeb1a6) =>
      _0x21e02f + '/' + _0x3b0bf5 + '/' + _0xeeb1a6,
    _0x357193 = new Map(),
    _0x4ffb32 = new Map()
  let _0x3e44cc = new Set()
  const _0x32dff9 = (_0x4408ed) => {
    return (
      !_0x4ffb32.has(_0x4408ed) && _0x4ffb32.set(_0x4408ed, new Set()),
      _0x4ffb32.get(_0x4408ed)
    )
  }
  _0x31b9dc.on('np-datagrid:rawupdates', async ([
      _0x46e160,
      _0x44b704,
      _0x391ba2,
      _0xf78d29,
      _0x3aa98a,
      _0x49e454,
    ]) => {
      const _0x4d8d53 = _0x46e160
          ? _0x46e160.map((_0x1645cb) =>
              Object.assign(Object.assign({}, _0x1645cb), {
                id: _0x5db99a(_0x1645cb.id),
              })
            )
          : [],
        _0x5a77f1 = _0x44b704
          ? _0x44b704.map((_0x5ef245) => _0x5db99a(_0x5ef245))
          : [],
        _0x4109fc = _0x391ba2
          ? _0x391ba2.map((_0x65e29f) =>
              Object.assign(Object.assign({}, _0x65e29f), {
                id: _0x5db99a(_0x65e29f.id),
              })
            )
          : [],
        _0x19c7cd = new Set()
      _0x4d8d53.forEach((_0x5f599f) => {
        _0x357193.set(_0x5f599f.id, _0x5f599f)
        _0x32dff9(
          _0x59d070(_0x5f599f.cellX, _0x5f599f.cellY, _0x5f599f.worldId)
        ).add(_0x5f599f.id)
        _0x19c7cd.add(_0x5f599f.ns)
      })
      _0x5a77f1.forEach((_0x39e551) => {
        if (!_0x357193.has(_0x39e551)) {
          return
        }
        const _0x2bc07f = _0x357193.get(_0x39e551)
        _0x32dff9(
          _0x59d070(_0x2bc07f.cellX, _0x2bc07f.cellY, _0x2bc07f.worldId)
        ).delete(_0x39e551)
        if (_0x2bc07f.ns) {
          _0x19c7cd.add(_0x2bc07f.ns)
        }
      })
      _0x4109fc.forEach(({ id: _0x53ba8a }) => {
        if (!_0x357193.has(_0x53ba8a)) {
          return
        }
        const _0x39db79 = _0x357193.get(_0x53ba8a)
        if (_0x39db79.ns) {
          _0x19c7cd.add(_0x39db79.ns)
        }
      })
      const _0x3f140c = new Set(),
        _0x3027b9 = new Set(),
        _0x34b03f = new Set()
      for (
        let _0x2fd998 = _0x3aa98a - 1;
        _0x2fd998 <= _0x3aa98a + 1;
        _0x2fd998++
      ) {
        for (
          let _0x564229 = _0xf78d29 - 1;
          _0x564229 <= _0xf78d29 + 1;
          _0x564229++
        ) {
          const _0xe0d9e6 = _0x32dff9(
            _0x59d070(_0x564229, _0x2fd998, _0x49e454)
          )
          if (
            (_0xe0d9e6 === null || _0xe0d9e6 === void 0
              ? void 0
              : _0xe0d9e6.size) > 0
          ) {
            _0xe0d9e6.forEach((_0xcb43c1) => {
              !_0x3e44cc.has(_0xcb43c1) && _0x3f140c.add(_0xcb43c1)
              _0x34b03f.add(_0xcb43c1)
            })
          }
        }
      }
      _0x3e44cc.forEach((_0x17ffe9) => {
        !_0x34b03f.has(_0x17ffe9) && _0x3027b9.add(_0x17ffe9)
      })
      _0x3e44cc = _0x34b03f
      new Set([..._0x3f140c, ..._0x3027b9]).forEach((_0x1ebd9e) => {
        if (!_0x357193.has(_0x1ebd9e)) {
          return
        }
        const _0x188f4a = _0x357193.get(_0x1ebd9e)
        if (_0x188f4a.ns) {
          _0x19c7cd.add(_0x188f4a.ns)
        }
      })
      _0x19c7cd.forEach((_0x465a17) => {
        emit('np-datagrid:updates',
          _0x465a17,
          _0x4d8d53.filter((_0x47d024) => _0x47d024.ns === _0x465a17),
          _0x5a77f1.filter((_0x30d638) => {
            var _0x296625
            return (
              ((_0x296625 = _0x357193.get(_0x30d638)) === null ||
              _0x296625 === void 0
                ? void 0
                : _0x296625.ns) === _0x465a17
            )
          }),
          _0x4109fc.filter(({ id: _0x225741 }) => {
            var _0x3817c8
            return (
              ((_0x3817c8 = _0x357193.get(_0x225741)) === null ||
              _0x3817c8 === void 0
                ? void 0
                : _0x3817c8.ns) === _0x465a17
            )
          }),
          Array.from(_0x34b03f).filter((_0x185ffa) => {
            var _0x533032
            return (
              ((_0x533032 = _0x357193.get(_0x185ffa)) === null ||
              _0x533032 === void 0
                ? void 0
                : _0x533032.ns) === _0x465a17
            )
          }),
          Array.from(_0x3f140c).filter((_0xf2d626) => {
            var _0x310eef
            return (
              ((_0x310eef = _0x357193.get(_0xf2d626)) === null ||
              _0x310eef === void 0
                ? void 0
                : _0x310eef.ns) === _0x465a17
            )
          }),
          Array.from(_0x3027b9).filter((_0x148953) => {
            var _0x42a50e
            return (
              ((_0x42a50e = _0x357193.get(_0x148953)) === null ||
              _0x42a50e === void 0
                ? void 0
                : _0x42a50e.ns) === _0x465a17
            )
          })
        )
      })
    }
  )
})()
