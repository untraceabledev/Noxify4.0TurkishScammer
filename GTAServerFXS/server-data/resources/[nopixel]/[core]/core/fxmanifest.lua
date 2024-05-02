fx_version "cerulean"

games { "gta5" }

description "NoPixel Core"

version "0.1.0"

server_script { "@npx/server/lib.js" }
client_script { "@npx/client/lib.js" }
server_scripts { "build/sv_*.js" }
shared_scripts { "build/sh_*.js" }
client_scripts { "build/cl_*.js" }
