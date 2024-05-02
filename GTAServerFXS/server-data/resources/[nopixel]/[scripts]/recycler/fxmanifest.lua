fx_version 'cerulean'

games { 'gta5' }

description 'NoPixel Recycler'

version '0.1.0'

-- Load NUI project
-- ui_page 'http://localhost:3000'
-- ui_page 'nui/dist/index.html'

-- files {
--     'nui/dist/**/*',
-- }
client_script '@np-lib/client/cl_ui.js'

server_script "@npx/server/lib.js"
client_script "@npx/client/lib.js"
server_scripts { 'build/sv_*.js' }
client_scripts { 'build/cl_*.js' }
