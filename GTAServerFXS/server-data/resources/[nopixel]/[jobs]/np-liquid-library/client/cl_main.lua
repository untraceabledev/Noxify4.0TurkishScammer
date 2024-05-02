local urls = {
    ["chalkboard"] = nil,
    ["meeting"] = nil,
}

local duis = {
    ["chalkboard"] = nil,
    ["meeting"] = nil,
}

local isInside = {
    ["chalkboard"] = false,
    ["meeting"] = false,
}

local allowedForChalk = {
    ["dev"] = {
        [1001] = true,
    },
    ["wl"] = {}
}

local textures = {
    ["chalkboard"] = {
        ["dictionary"] = "liquidlibrary",
        ["texture"] = "ll_barmenu_blank",
        ["width"] = 512,
        ["height"] = 1024
    },
    ["meeting"] = {
        ["dictionary"] = "liquidlibrary",
        ["texture"] = "ll_blk_screen",
        ["width"] = 1024,
        ["height"] = 512
    }
}

CreateThread(function ()
    exports["np-polyzone"]:AddPolyZone("liquidlibrary:bar", {
        vector2(1175.29,-405.09),
        vector2(1151.97,-398.74),
        vector2(1148.08,-414.13),
        vector2(1162.57,-417.72),
        vector2(1160.33,-426.15),
        vector2(1168.9,-428.7)
    }, {
        minZ = 72.14,
        maxZ = 76.39,
    })

    exports["np-polyzone"]:AddPolyZone("liquidlibrary:meeting", {
        vector2(1151.33,-415.93),
        vector2(1149.44,-423.13),
        vector2(1159.4,-425.89),
        vector2(1161.47,-418.7),
    }, {
        minZ = 71.74,
        maxZ = 75.32,
    })

    exports["np-polytarget"]:AddBoxZone("liquidlibrary:chalkboard", vector3(1156.89, -399.79, 72.24), 1.6, 0.4, {
        heading=255,
        minZ=72.44,
        maxZ=74.44
    })
    exports["np-interact"]:AddPeekEntryByPolyTarget('liquidlibrary:chalkboard', {{
        event = "np-liquidlibrary:attemptChangeUrl",
        id = "liquidlibrary:chalkboard:changeurl",
        icon = "pencil-alt",
        label = "Write on Chalkboard",
        parameters = {
            board = "chalkboard"
        }
    }}, { distance = { radius = 1.5 }})


    exports["np-polytarget"]:AddBoxZone("liquidlibrary:remote", vector3(1155.23, -417.49, 72.24), 0.3, 0.3, {
        heading=0,
        minZ=72.64,
        maxZ=73.04
    })
    exports["np-interact"]:AddPeekEntryByPolyTarget('liquidlibrary:remote', {{
        event = "np-liquidlibrary:attemptChangeUrl",
        id = "liquidlibrary:remote:changeurl",
        icon = "cogs",
        label = "Change TV Channel",
        parameters = {
            board = "meeting"
        }
    }}, { distance = { radius = 1.5 }})
end)

function loadUrl (board)
    local currentUrl = NPX.Procedures.execute("np-liquidlibrary:geturl", board)


    if currentUrl ~= urls[board] then
        urls[board] = currentUrl
    end

    if duis[board] == nil then
        createDui(board)
    end
end

function createDui(board)
    if duis[board] ~= nil then
        return
    end

    local def = textures[board]
    duis[board] = exports["np-lib"]:getDui(urls[board], def.width, def.height)

    AddReplaceTexture(def.dictionary, def.texture, duis[board].dictionary, duis[board].texture)
end

function destroyDui(board)
    if duis[board] == nil then
        return
    end

    local def = textures[board]
    RemoveReplaceTexture(def.dictionary, def.texture)

    exports["np-lib"]:releaseDui(duis[board].id)
    duis[board] = nil
end

AddEventHandler("np-polyzone:enter", function (name)
    if name == "liquidlibrary:bar" then
        isInside.chalkboard = true
        loadUrl("chalkboard")
    end
    if name == "liquidlibrary:meeting" then
        isInside.meeting = true
        loadUrl("meeting")
    end
end)

AddEventHandler("np-polyzone:exit", function (name)
    if name == "liquidlibrary:bar" then
        isInside.chalkboard = false
        if duis.chalkboard ~= nil then
            destroyDui("chalkboard")
        end
    end
    if name == "liquidlibrary:meeting" then
        isInside.meeting = false
        if duis.meeting ~= nil then
            destroyDui("meeting")
        end
    end
end)

AddEventHandler("np-liquidlibrary:attemptChangeUrl", function (data)
    if data.board == "chalkboard" then
        local cid = exports["isPed"]:isPed("cid")
        local serverCode = GetConvar("sv_serverCode", "wl")

        if not allowedForChalk[serverCode] or not allowedForChalk[serverCode][cid] then
            return
        end
    end
    if isInside[data.board] then
        setUrl(data.board)
    end
end)

function setUrl (board)
    local input = exports['np-ui']:OpenInputMenu(
        {
            {
                ["name"] = "url",
                ["icon"] = "clock",
                ["label"] = "URL"
            },
        },
        function (values)
            return values and values.url ~= nil
        end
    )
    if not input or not input.url then return end
    NPX.Events.emitNet('np-liquidlibrary:changeBoardUrl', board, input.url)
end

NPX.Events.onNet("np-liquidlibrary:boardUrlChanged", function (board, url)
    urls[board] = url
    if isInside[board] then
        urls[board] = url

        if duis[board] == nil then
            createDui(board)
        else
            exports["np-lib"]:changeDuiUrl(duis[board].id, url)
        end
    end
end)

AddEventHandler("onResourceStop", function (resourceName)
    if resourceName == GetCurrentResourceName() then
        for board, _ in pairs(duis) do
            destroyDui(board)
        end
    end
end)
