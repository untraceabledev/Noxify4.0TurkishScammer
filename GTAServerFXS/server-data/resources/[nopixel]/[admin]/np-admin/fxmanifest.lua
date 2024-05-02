fx_version "cerulean"
games { "gta5" }

-- Load NUI project
--ui_page 'http://localhost:3000'
ui_page 'nui/dist/index.html'

files {
    "nui/dist/**/*",
}


shared_script {
    "@np-lib/shared/sh_util.lua",
    "@np-lib/shared/sh_cacheable.js",
}

server_scripts {
    "@np-lib/server/sv_npx.js",
    "@np-lib/server/sv_rpc.js",
    "@np-lib/server/sv_rpc.lua",
    "@np-lib/server/sv_sql.js",
    "@np-lib/server/sv_sql.lua",
    "@npx/server/lib.js",
    "server/*",
}

client_scripts {
    "@npx/client/lib.js",
    "@np-lib/client/cl_rpc.js",
    "client/*",
}
