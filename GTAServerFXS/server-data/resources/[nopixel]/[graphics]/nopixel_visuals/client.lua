function stringsplit(inputstr, sep)
    if sep == nil then
        sep = "%s"
    end

    local t={} ; i=1

    for str in string.gmatch(inputstr, "([^"..sep.."]+)") do
        t[i] = str
        i = i + 1
    end

    return t
end

local function starts_with(str, start)
   return str:sub(1, #start) == start
end

-- NOTE(cherry): taken from https://github.com/Jarrrk/FiveM-VisualSettings
local function load_visualsettings()
    local settingsFile = LoadResourceFile(GetCurrentResourceName(), "visualsettings.dat")

    local lines = stringsplit(settingsFile, "\n")

    for k,v in ipairs(lines) do
        if not starts_with(v, '#') and not starts_with(v, '//') and (v ~= "" or v ~= " ") and #v > 1 then
            v = v:gsub("%s+", " ")

            local setting = stringsplit(v, " ")

            if setting[1] ~= nil and setting[2] ~= nil and tonumber(setting[2]) ~= nil then
                if setting[1] ~= 'weather.CycleDuration' then    
                    Citizen.InvokeNative(GetHashKey('SET_VISUAL_SETTING_FLOAT') & 0xFFFFFFFF, setting[1], tonumber(setting[2])+.0)
                end
            end
        end
    end
end

local function wait_for_texture_dict(name)
	if not HasStreamedTextureDictLoaded(name) then
		RequestStreamedTextureDict(name)

		while not HasStreamedTextureDictLoaded(name) do
			Wait(50)
		end
	end
end

local function replace_ytd_contents(vanilla_ytd, custom_ytd, file_list)
    print("[NVE] Waiting for texture dictionary " .. custom_ytd)
    wait_for_texture_dict(custom_ytd)
    print("[NVE] Got " .. custom_ytd)

    for _, value in ipairs(file_list) do
        AddReplaceTexture(vanilla_ytd, value, custom_ytd, value)
        print("[NVE] Replacing texture (" .. vanilla_ytd .. " -> " .. custom_ytd .. "): " .. value)
    end
end

Citizen.CreateThread(function()
    print("[NVE] Hi from NVE!")

    load_visualsettings()

    -- NOTE(cherry): graphics.ytd is special.
    replace_ytd_contents("platform:/textures/fxdecal", "nve_fxdecal_1", nve_fxdecal_files_1)
    replace_ytd_contents("platform:/textures/fxdecal", "nve_fxdecal_2", nve_fxdecal_files_2)
    replace_ytd_contents("platform:/textures/fxdecal", "nve_fxdecal_3", nve_fxdecal_files_3)
    replace_ytd_contents("platform:/textures/fxweather", "nve_fxweather", nve_fxweather_files)
    replace_ytd_contents("platform:/textures/graphics", "nve_graphics", nve_graphics_files)
	replace_ytd_contents("platform:/textures/mapdetail", "nve_mapdetail", nve_mapdetail_files)
	replace_ytd_contents("platform:/textures/peddamagedecals", "nve_peddamagedecals", nve_peddamagedecals_files)
    replace_ytd_contents("skydome", "nve_skydome", nve_skydome_files)
	replace_ytd_contents("vehshare", "nve_vehshare", nve_vehshare_files)
	replace_ytd_contents("platform:/textures/water", "nve_water", nve_water_files)
end)