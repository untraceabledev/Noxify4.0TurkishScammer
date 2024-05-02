fx_version 'cerulean'
games { 'gta5' }

client_scripts {
  "@np-lib/shared/sh_util.lua"
}

shared_scripts {
  "shared/sh_*.lua"
}

client_scripts {
  "@np-locales/client/lib.lua",
  "client/cl_*.lua",
  "client/entries/cl_*.lua"
}
ui_page "nui/dist/index.html"
files {
  "nui/dist/*",
  "nui/dist/index.html",
	"nui/dist/assets/*",
}