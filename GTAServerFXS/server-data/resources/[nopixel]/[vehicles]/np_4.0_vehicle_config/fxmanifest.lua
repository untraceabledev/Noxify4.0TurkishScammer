fx_version 'adamant'
games { 'gta5' }

author 'NoPixel'
description 'NoPixel 4.0 - Addon Vehicle Configs'
version '1.0.0'


client_scripts {
	-- "general/vehicle_names.lua",
	"emergency/vehicle_names.lua"
}


files {
	-- 'general/*.meta',
	-- 'general/vehicle_names.lua',
	'emergency/*.meta',
	'emergency/vehicle_names.lua',
	'sfx/**/*.awc',
	'audioconfig/*.*.rel'
}

-- data_file 'CARCOLS_FILE' 'general/carcols.meta'
-- data_file 'VEHICLE_VARIATION_FILE' 'general/carvariations.meta'
-- data_file 'HANDLING_FILE' 'general/handling.meta'
-- data_file 'VEHICLE_METADATA_FILE' 'general/vehicles.meta'

data_file 'CARCOLS_FILE' 'emergency/carcols.meta'
data_file 'VEHICLE_VARIATION_FILE' 'emergency/carvariations.meta'
data_file 'HANDLING_FILE' 'emergency/handling.meta'
data_file 'VEHICLE_METADATA_FILE' 'emergency/vehicles.meta'

data_file 'VEHICLE_LAYOUTS_FILE' 'emergency/vehiclelayouts_police.meta'
data_file 'VEHICLE_LAYOUTS_FILE' 'emergency/vehiclelayouts_v450.meta'

data_file 'AUDIO_GAMEDATA' 'audioconfig/polbuffalo4_game.dat'
data_file 'AUDIO_GAMEDATA' 'audioconfig/polcaracara_game.dat'
data_file 'AUDIO_GAMEDATA' 'audioconfig/polcomet_game.dat'
data_file 'AUDIO_GAMEDATA' 'audioconfig/polcoq4_game.dat'
data_file 'AUDIO_GAMEDATA' 'audioconfig/polvigero2_game.dat'
data_file 'AUDIO_GAMEDATA' 'audioconfig/polvstr_game.dat'
data_file 'AUDIO_GAMEDATA' 'audioconfig/tamustanggt50p_game.dat'

data_file 'AUDIO_SOUNDDATA' 'audioconfig/tamustanggt50p_sounds.dat'

data_file 'AUDIO_WAVEPACK' 'sfx/dlc_tamustanggt50p'
