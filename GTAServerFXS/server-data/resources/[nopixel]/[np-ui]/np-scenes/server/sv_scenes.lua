RegisterServerEvent("np-scenes:addScene")
AddEventHandler("np-scenes:addScene", function(pData)
    local src = source

    exports["np-db"]:execute("INSERT INTO scenes (coords, text, color, distance, font, caret, solid, background) VALUES (@coords, @text, @color, @distance, @font, @caret, @solid, @background)", {
        ["@coords"] = json.encode(pData.coords),
        ["@text"] = pData.text,
        ["@color"] = pData.color,
        ["@distance"] = pData.distance,
        ["@font"] = pData.font,
        ["@caret"] = pData.caret,
        ["@solid"] = pData.solid,
        ["@background"] = json.encode(pData.background),
    }, function(result)
        local rData = {
            ["id"] = result.insertId,
            ["coords"] = pData.coords,
            ["text"] = pData.text,
            ["color"] = pData.color,
            ["distance"] = pData.distance,
            ["font"] = pData.font,
            ["caret"] = pData.caret,
            ["solid"] = pData.solid,
            ["background"] = pData.background
        }

        TriggerClientEvent("np-scenes:refreshScenes", src, result.insertId, rData)
    end)    
end)

RegisterServerEvent("np-scenes:deleteScene")
AddEventHandler("np-scenes:deleteScene", function(pCoords)
    local src = source
    local rData = {}
    local removeId = nil

    exports["np-db"]:execute("SELECT * FROM scenes", {}, function(result)
        for k, v in pairs(result) do
            local coords = json.decode(v.coords)
            v.coords = vector3(coords.x, coords.y, coords.z)

            if #(v.coords - pCoords) < 2 then
                removeId = v.id
            end
        end

        if removeId > 0 and removeId ~= nil then
            exports["np-db"]:execute("DELETE FROM scenes WHERE id = @id",{
                ["@id"] = removeId
            })
        end

        TriggerClientEvent("np-scenes:deleteScene", src, removeId)
    end)     
end)

RegisterServerEvent("np-scenes:getScenes")
AddEventHandler("np-scenes:getScenes", function()
    local src = source 
    local rData = {}

    exports["np-db"]:execute("SELECT * FROM scenes", {}, function(result)
        for k, v in pairs(result) do
            local coords = json.decode(v.coords)
            v.coords = vector3(coords.x, coords.y, coords.z)
            v.background = json.decode(v.background)
            table.insert(rData, v)
        end

        TriggerClientEvent("np-scenes:allScenes", src, rData)
    end)    
end)    