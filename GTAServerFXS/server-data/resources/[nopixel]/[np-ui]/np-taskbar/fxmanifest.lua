fx_version 'cerulean'
games { 'rdr3', 'gta5' }

ui_page "nui/dist/index.html"
files {
  "nui/dist/*",
  "nui/dist/index.html",
  "nui/dist/assets/*",

}

client_script "@np-lib/client/cl_ui.lua"

client_scripts {
  '@np-errorlog/client/cl_errorlog.lua',
  '@np-lib/client/cl_rpc.lua',
  'client/cl_*.lua',
}

export "taskBar"
export "closeGuiFail"
