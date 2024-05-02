fx_version "cerulean"

description "NoPixel - Config"
author "hawkrox"
version '0.0.1'

game "gta5"

server_script '@np-lib/server/sv_sql.js'
server_script '@np-lib/server/sv_rpc.js'
server_script 'server/*.js'

client_script '@np-lib/client/cl_rpc.js'
client_script 'client/*.js'