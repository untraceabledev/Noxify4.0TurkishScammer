fx_version "cerulean"

games { "gta5" }

description "nopixel Skill Checks"

version "0.1.0"

ui_page 'nui/dist/index.html'

files {
    "nui/dist/**/*",
}

server_scripts { "build/sv_*.js" }
client_scripts { "build/cl_*.js" }
