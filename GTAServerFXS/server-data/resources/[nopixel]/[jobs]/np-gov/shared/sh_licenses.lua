LICENSES = {
    ["driver"] = {
        ["name"] = "Drivers License",
        ["default"] = 1,
    },
    ["weapon"] = {
        ["name"] = "Guns License",
        ["default"] = 0,
    },
    ["weaponClass2"] = {
        ["name"] = "Class 2 License",
        ["default"] = 0,
    },
    ["hunting"] = {
        ["name"] = "Hunting License",
        ["default"] = 0,
    },
    ["fishing"] = {
        ["name"] = "Fishing License",
        ["default"] = 0,
    },
    ["pilot"] = {
        ["name"] = "Pilot License",
        ["default"] = 0,
    },
    ["bar"] = {
        ["name"] = "Lawyer License",
        ["default"] = 0,
    },
    ["business"] = {
        ["name"] = "Business License",
        ["default"] = 0,
    },
}

function licenseName(license)
    if LICENSES[license] then
        return LICENSES[license]["name"]
    else
        return "ERROR"
    end
end

exports("licenseName", licenseName)