fx_version "cerulean"

games { "gta5" }

description "NoPixel Bennys"

version "0.1.0"

-- Load NUI project
ui_page "nui/dist/index.html"
--ui_page 'http://localhost:3000'

files {
    "nui/dist/**/*",
}

server_script "@npx/server/lib.js"
client_script "@npx/client/lib.js"

server_scripts { "build/sv_*.js" }
client_scripts { "build/cl_*.js" }

server_script "@np-lib/server/sv_asyncExports.js"
