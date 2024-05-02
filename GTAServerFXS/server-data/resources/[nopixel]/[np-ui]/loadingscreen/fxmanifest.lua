fx_version "cerulean"

games { "gta5" }

description "NoPixel Loading Screen"

version "0.1.0"

-- Load NUI project
--loadscreen 'http://localhost:3000'
loadscreen 'nui/dist/index.html'
loadscreen_manual_shutdown "yes"
loadscreen_cursor 'yes'

files {
    "nui/dist/**/*",
}

server_scripts { "build/sv_*.js" }
client_scripts { "build/cl_*.js" }
