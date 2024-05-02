fx_version 'cerulean'

games { 'gta5' }

description 'NoPixel Financials'

version '0.1.0'

lua54 'yes'

-- Load NUI project
-- ui_page 'http://localhost:3000'
ui_page 'nui/dist/index.html'

files {
  'nui/dist/**/*',
}

server_script '@npx/server/lib.js'
client_script '@npx/client/lib.js'
shared_script '@npx/shared/lib.lua'

client_script '@np-lib/client/cl_ui.lua'
client_script '@np-lib/client/cl_ui.js'

client_scripts {
  '@np-errorlog/client/cl_errorlog.lua',
  '@np-lib/client/cl_rpc.lua',
  '@PolyZone/client.lua',
  '@PolyZone/BoxZone.lua',
  '@PolyZone/ComboZone.lua',
  'lua/client/cl_*.lua',
  'build/cl_*.js',
}

shared_script {
  '@np-lib/shared/sh_util.lua',
  'lua/shared/sh_*.*',
}

server_scripts {
  'lua/config.lua',
  '@np-lib/server/sv_asyncExports.lua',
  '@np-lib/server/sv_rpc.lua',
  '@np-lib/server/sv_sql.lua',
  'lua/server/sv_*.lua',
  'build/sv_*.js'
}
