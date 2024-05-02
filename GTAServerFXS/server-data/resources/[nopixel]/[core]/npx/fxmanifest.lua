fx_version "cerulean"

games { "gta5" }

description "Atlas Library"

author "cool#1337"

version "0.1.0"

server_scripts {
    "server/*.js",
}

client_scripts {
    "client/*.js",
}

shared_scripts {
    "shared/*.*",
}

exports {
    'GetLibrary',
}