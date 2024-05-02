function GetPayphoneId(pCoords) 
    return string.format("%.0f_%.0f_%.0f", pCoords.x * 100, pCoords.y * 100, pCoords.z * 100)
end

function string.split(inputstr, sep)
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
