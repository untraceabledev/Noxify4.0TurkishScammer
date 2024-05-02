fx_version "cerulean"

game "gta5"

client_script "@np-sync/client/lib.lua"
client_script "@np-lib/client/cl_ui.lua"
client_script "@npx/client/lib.js"
server_script "@npx/server/lib.js"
shared_script "@npx/shared/lib.lua"
client_script "@np-errorlog/client/cl_errorlog.lua"
server_script "@np-lib/server/sv_asyncExports.lua"
client_script "@np-lib/client/cl_ui.lua"

client_scripts {
    "client/cl_main.lua",
    "client/cl_sliders.lua",
    "client/cl_sets.lua"
}

server_scripts {
    "server/sv_main.lua",
    "server/sv_sliders.lua",
    "server/sv_sets.lua"
}
