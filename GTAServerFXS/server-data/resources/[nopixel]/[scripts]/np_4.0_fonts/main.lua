local FontList = {
    ["A9eelsh"] = {dict = 'A9eelsh', name = 'A9eelsh', lang = 'ar'}
}

function RegisterCustomFont(dict, name, lang)
    if not FontList[name] then
        FontList[name] = { dict = dict, name = name, lang = lang or 'en' }
    end

    if FontList[name]['id'] then return end

    RegisterFontFile(dict)

    FontList[name]['id'] = RegisterFontId(name)

    TriggerEvent('np-fonts:fontLoaded', name, FontList[name]['id'])

    return FontList[name]['id']
end

exports('RegisterCustomFont', RegisterCustomFont)

function GetCustomFontId(name)
    return FontList[name]['id']
end

exports('GetCustomFontId', GetCustomFontId)

function GetAvailableFonts()
    return FontList
end

exports('GetAvailableFonts', GetAvailableFonts)

Citizen.CreateThread(function()
    for _, font in pairs(FontList) do
        RegisterCustomFont(font.dict, font.name, font.lang)
    end

    TriggerEvent('np-fonts:fontsLoaded', FontList)
end)