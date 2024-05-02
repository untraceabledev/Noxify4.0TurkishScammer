fx_version 'cerulean'

games { 'gta5' }

description 'NoPixel Character Types'

version '0.1.0'

server_script '@npx/server/lib.js'
server_script '@np-lib/server/sv_asyncExports.js'
server_script '@np-db/server/lib.js'

client_script '@npx/client/lib.js'
client_script '@np-lib/client/cl_ui.js'
client_script '@np-locales/client/lib.js'

-- Load NUI project
-- ui_page 'http://localhost:3000'
ui_page 'nui/dist/index.html'

files {
    'nui/dist/**/*',
    'data/*.json'
}

server_scripts {
    'server/sv_*.js',
}

client_scripts {
    'client/cl_*.js',
}
