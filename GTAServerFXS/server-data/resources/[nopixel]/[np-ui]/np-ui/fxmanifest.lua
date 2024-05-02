fx_version 'cerulean'

games { 'rdr3', 'gta5' }

version '1.0.0'

ui_page 'build/index.html'

files {
  'build/index.html',
  'build/assets/*.js',
  'build/assets/*.css',
  'build/assets/*.ttf',
  'build/assets/*.png',
  'build/assets/*.jpg',
  'build/assets/*.gif',
  'build/assets/*.ogg',
  'build/assets/*.svg',
  -- 'build/static/js/*.js',
  -- 'build/static/css/*.css',
  -- 'build/static/media/*.ttf',
  -- 'build/static/media/*.png',
  -- 'build/static/media/*.jpg',
  -- 'build/static/media/*.gif',
  -- 'build/static/media/*.ogg',
  -- 'build/static/media/*.svg',
}

client_script "@npx/client/lib.js"
server_script "@npx/server/lib.js"
shared_script "@npx/shared/lib.lua"

client_scripts {
  '@np-lib/client/cl_rpc.lua',
  'client/cl_exports.lua',
  'client/cl_lib.lua',
  'client/model/cl_*.lua',
  'client/cl_*.js'
}

server_scripts {
  '@np-lib/server/sv_rpc.lua',
  'server/sv_*.lua',
  'server/sv_*.js'
}
