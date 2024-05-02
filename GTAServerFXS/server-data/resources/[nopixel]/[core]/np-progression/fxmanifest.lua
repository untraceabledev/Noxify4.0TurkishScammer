fx_version "cerulean"

games { "gta5" }

description "NoPixel Boilerplate"

version "0.1.0"

server_script "@np-lib/server/sv_sql.lua"
server_script "@np-lib/server/sv_rpc.js"
server_script "@np-lib/server/sv_npx.js"
server_script "@np-lib/server/sv_asyncExports.js"

server_scripts {
    "@np-lib/server/sv_rpc.lua",
    "server/*.js",
    "server/sv_*.lua",
}

client_scripts {
    "@np-lib/client/cl_rpc.lua",
    "client/classes/*.lua",
    "client/cl_*.lua",
}
