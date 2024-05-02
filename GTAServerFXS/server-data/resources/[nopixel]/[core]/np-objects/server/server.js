! function() {
	onNet('np-objects:requestObjects', async () => {
		let _0x5794d6 = source,
			_0x27455e = await SQL.execute('SELECT * FROM objects', {}),
			_0x24d63d = [];

		for (let _0xe38241 = 0; _0xe38241 < _0x27455e.length; _0xe38241++) {
			let _0x4197fa = JSON.parse(_0x27455e[Number(_0xe38241)].coordinates),
				_0x2ff2ff = {
					'x': _0x4197fa.x,
					'y': _0x4197fa.y,
					'z': _0x4197fa.z,
					'h': _0x4197fa.h
				};

			_0x24d63d.push({
				'id': _0x27455e[Number(_0xe38241)].id,
				'model': _0x27455e[Number(_0xe38241)].model,
				'coordinates': _0x2ff2ff,
				'metaData': JSON.parse(_0x27455e[Number(_0xe38241)].metaData)
			});
		}

		emitNet('np-objects:loadObjects', _0x5794d6, _0x24d63d);
	}), 
	onNet('np-objects:prepareObject', async (_0x22d447, _0x281017, _0x495c93, _0x56a363, _0x210483, _0x2fc667) => {
		let _0x36c5c9 = {
				'x': _0x281017,
				'y': _0x495c93,
				'z': _0x56a363,
				'h': _0x210483
			},
			_0x24aa46 = Math.floor(10 * Math.random()).toString() + Math.floor(10 * Math.random()).toString() + Math.floor(10 * Math.random()).toString() + Math.floor(10 * Math.random()).toString();

		if (!(await SQL.execute('INSERT INTO objects (model, coordinates, metaData, randomId) VALUES (@model, @coordinates, @metaData, @randomId)', {
				'model': _0x22d447,
				'coordinates': JSON.stringify(_0x36c5c9),
				'metaData': JSON.stringify(_0x2fc667),
				'randomId': _0x24aa46
			}))) return;

		let _0x398ffa = await SQL.execute('SELECT * FROM objects WHERE randomId = @randomId', {
			'randomId': _0x24aa46
		});

		if (!_0x398ffa[0]) return;
		let _0x590114 = {
			'id': _0x398ffa[0].id,
			'model': _0x22d447,
			'coordinates': _0x36c5c9,
			'metaData': _0x2fc667
		};
		emitNet('np:objects:prepareNewObject', -1, _0x590114);
	}), 
	onNet('np-objects:DeleteObject', async (_0x51b12d) => {
		let _0x2fb105 = await SQL.execute('SELECT * FROM objects WHERE id = @id', {
			'id': _0x51b12d
		});

		if (!_0x2fb105[0]) return false;
		let _0x1225f7 = {
			'id': _0x2fb105[0].id,
			'model': _0x2fb105[0].model,
			'coordinates': JSON.parse(_0x2fb105[0].coordinates),
			'metaData': JSON.parse(_0x2fb105[0].metaData),
			'randomId': _0x2fb105[0].randomId
		};
		return !!(await SQL.execute('DELETE FROM objects WHERE id = @id', {
			'id': _0x51b12d
		})) && (emitNet('np-objects:clearObjects', -1, _0x1225f7), true);
	}), 
	NPX.Procedures.register('np-objects:SaveObject', async (pSrc, _0x201f43, _0xb11f82, _0x33f68d, _0x4159b7, _0x215819) => {
		let _0x5eecf6 = {
				'x': _0x33f68d.x,
				'y': _0x33f68d.y,
				'z': _0x33f68d.z,
				'h': _0x4159b7
			},
			_0x3ba958 = Math.floor(10 * Math.random()).toString() + Math.floor(10 * Math.random()).toString() + Math.floor(10 * Math.random()).toString() + Math.floor(10 * Math.random()).toString();

		if (!(await SQL.execute('INSERT INTO objects (model, coordinates, metaData, randomId) VALUES (@model, @coordinates, @metaData, @randomId)', {
				'model': _0xb11f82,
				'coordinates': JSON.stringify(_0x5eecf6),
				'metaData': JSON.stringify(_0x215819),
				'randomId': _0x3ba958
			}))) return false;

		let _0x4a1b16 = await SQL.execute('SELECT * FROM objects WHERE randomId = @randomId', {
			'randomId': _0x3ba958
		});

		if (!_0x4a1b16[0]) return false;
		let _0x1f8112 = {
			'id': _0x4a1b16[0].id,
			'model': _0xb11f82,
			'coordinates': _0x5eecf6,
			'metaData': _0x215819
		};
		return emitNet('np:objects:prepareNewObject', -1, _0x1f8112), true;
	}), 
	NPX.Procedures.register('np-objects:DeleteObject', async (pSrc, _0x51b12d) => {
		let _0x2fb105 = await SQL.execute('SELECT * FROM objects WHERE id = @id', {
			'id': _0x51b12d
		});

		if (!_0x2fb105[0]) return false;
		let _0x1225f7 = {
			'id': _0x2fb105[0].id,
			'model': _0x2fb105[0].model,
			'coordinates': JSON.parse(_0x2fb105[0].coordinates),
			'metaData': JSON.parse(_0x2fb105[0].metaData),
			'randomId': _0x2fb105[0].randomId
		};
		return !!(await SQL.execute('DELETE FROM objects WHERE id = @id', {
			'id': _0x51b12d
		})) && (emitNet('np-objects:clearObjects', -1, _0x1225f7), true);
	}), 
	NPX.Procedures.register('np-objects:UpdateObject', async (pSrc, _0xf79e9b, _0x43c89e) => {
		if (!(await SQL.execute('UPDATE objects SET model = @model WHERE id = @id', {
				'model': _0x43c89e,
				'id': _0xf79e9b
			}))) return false;

		let _0x3d7bfe = await SQL.execute('SELECT * FROM objects WHERE id = @id', {
			'id': _0xf79e9b
		});

		if (!_0x3d7bfe[0]) return false;
		let _0x31af33 = {
			'id': _0x3d7bfe[0].id,
			'model': _0x3d7bfe[0].model,
			'coordinates': JSON.parse(_0x3d7bfe[0].coordinates),
			'metaData': JSON.parse(_0x3d7bfe[0].metaData),
			'randomId': _0x3d7bfe[0].randomId
		};
		return emitNet('np-objects:updateObjects', -1, _0x31af33), true;
	});
}();


