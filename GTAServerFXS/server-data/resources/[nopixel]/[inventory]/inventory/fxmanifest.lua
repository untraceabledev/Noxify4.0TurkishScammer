fx_version 'cerulean'
games {'gta5'}


--[[ dependencies {
    "PolyZone"
} ]]--

lua54 'yes'

client_script "@np-errorlog/client/cl_errorlog.lua"
client_script "@PolyZone/client.lua"

ui_page 'nui/ui.html'

files {
	"nui/ui.html",
	"nui/pricedown.ttf",
	'nui/fonts/*.ttf',
    'nui/fonts/*.otf',
	"nui/default.png",
	"nui/background.png",
	"nui/weight-hanging-solid.png",
	"nui/hand-holding-solid.png",
	"nui/hand-give.png",
	"nui/search-solid.png",
	"nui/invbg.png",
	"nui/i18n.js",
	"nui/purify.min.js",
	"nui/styles.css",
	"nui/scripts.js",
	"nui/debounce.min.js",
	"nui/loading.gif",
	"nui/loading.svg",
	"nui/icons/*"
}

shared_script 'shared_list.js'
shared_script '@np-lib/shared/sh_cacheable.js'

client_scripts {
  "@np-sync/client/lib.lua",
  "@np-lib/client/cl_ui.lua",
  "@np-locales/client/lib.lua",
  "@np-lib/client/cl_rpc.js",
  "@np-lib/client/cl_rpc.lua",
  'client.js',
  'functions.lua',
  'actionbar.lua',
  'cl_vehicleweights.js',
  'cl_craftingspots.js',
  'cl_attach.lua',
}

server_scripts {
  '@np-lib/server/sv_asyncExports.js',
  "@np-lib/server/sv_npx.js",
  "@np-lib/server/sv_rpc.js",
  "@np-lib/server/sv_sql.lua",
  "sv_config.js",
  "sv_clean.js",
  'server_degradation.js',
  'server_shops.js',
  'server.js',
  "sv_functions.js",
  'sv_craftingspots.js',
  'server.lua',
}
client_script "@npx/client/lib.js"
server_script "@npx/server/lib.js"
shared_script "@npx/shared/lib.lua"

exports{
  'getFreeSpace',
  'hasEnoughOfItem',
  'getQuantity',
  'GetCurrentWeapons',
  'GetItemInfo',
  'GetInfoForFirstItemOfName',
  'getFullItemList',
}

-- dependency 'np-lib'
