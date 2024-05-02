fx_version "cerulean"
games { "gta5" }

shared_scripts {
    '@np-lib/shared/sh_cacheable.lua',
    '@np-lib/shared/sh_util.lua',
}

server_scripts {
    "@np-lib/server/sv_rpc.lua",
    "@np-lib/server/sv_sql.lua",
    "server/sv_*.lua",
}
