fx_version 'cerulean'

games { 'gta5' }

description 'NoPixel Police Script'

version '0.1.0'

client_script '@np-lib/client/cl_ui.js'
client_script '@np-locales/client/lib.js'

server_script "@npx/server/lib.js"
client_script "@npx/client/lib.js"

server_scripts { 'build/sv_*.js' }
client_scripts { 'build/cl_*.js' }