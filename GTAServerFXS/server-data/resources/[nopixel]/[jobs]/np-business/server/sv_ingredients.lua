local stockAvailable = math.random(100, 150)
local ReserveStock = math.random(100, 350)
local ingredients = {
    ["docks"] = {
        ["Stock"] = {
            ["stockAvailable"] = stockAvailable,
            ["stockPrice"] =  math.ceil(stockAvailable * 3),
        },
        ["Reserve"] = {
            ["ReserveStock"] = ReserveStock,
            ["ReservePrice"] =  math.ceil(ReserveStock * 0.5),
            ["ReserveAmount"] = math.ceil(ReserveStock / 10),
        },
    },
    ["milk"] = {
        ["Stock"] = {
            ["stockAvailable"] = stockAvailable,
            ["stockPrice"] =  math.ceil(stockAvailable * 3),
        },
        ["Reserve"] = {
            ["ReserveStock"] = ReserveStock,
            ["ReservePrice"] =  math.ceil(ReserveStock * 0.5),
            ["ReserveAmount"] = math.ceil(ReserveStock / 10),
        },
    },
    ["meat"] = {
        ["Stock"] = {
            ["stockAvailable"] = stockAvailable,
            ["stockPrice"] =  math.ceil(stockAvailable * 3),
        },
        ["Reserve"] = {
            ["ReserveStock"] = ReserveStock,
            ["ReservePrice"] =  math.ceil(ReserveStock * 0.5),
            ["ReserveAmount"] = math.ceil(ReserveStock / 10),
        },
    },
    ["vegetable"] = {
        ["Stock"] = {
            ["stockAvailable"] = stockAvailable,
            ["stockPrice"] =  math.ceil(stockAvailable * 3),
        },
        ["Reserve"] = {
            ["ReserveStock"] = ReserveStock,
            ["ReservePrice"] =  math.ceil(ReserveStock * 0.5),
            ["ReserveAmount"] = math.ceil(ReserveStock / 10),
        },
    },
    ["grain"] = {
        ["Stock"] = {
            ["stockAvailable"] = stockAvailable,
            ["stockPrice"] =  math.ceil(stockAvailable * 3),
        },
        ["Reserve"] = {
            ["ReserveStock"] = ReserveStock,
            ["ReservePrice"] =  math.ceil(ReserveStock * 0.5),
            ["ReserveAmount"] = math.ceil(ReserveStock / 10),
        },
    },
    ["season"] = {
        ["Stock"] = {
            ["stockAvailable"] = stockAvailable,
            ["stockPrice"] =  math.ceil(stockAvailable * 3),
        },
        ["Reserve"] = {
            ["ReserveStock"] = ReserveStock,
            ["ReservePrice"] =  math.ceil(ReserveStock * 0.5),
            ["ReserveAmount"] = math.ceil(ReserveStock / 10),
        },
    },
    ["leaven"] = {
        ["Stock"] = {
            ["stockAvailable"] = stockAvailable,
            ["stockPrice"] =  math.ceil(stockAvailable * 3),
        },
        ["Reserve"] = {
            ["ReserveStock"] = ReserveStock,
            ["ReservePrice"] =  math.ceil(ReserveStock * 0.5),
            ["ReserveAmount"] = math.ceil(ReserveStock / 10),
        },
    },
    ["oil"] = {
        ["Stock"] = {
            ["stockAvailable"] = stockAvailable,
            ["stockPrice"] =  math.ceil(stockAvailable * 3),
        },
        ["Reserve"] = {
            ["ReserveStock"] = ReserveStock,
            ["ReservePrice"] =  math.ceil(ReserveStock * 0.5),
            ["ReserveAmount"] = math.ceil(ReserveStock / 10),
        },
    },
}
local Abuse = {}
local shops = {
    ["docks"] = {
        menu = {
            {
                title = 'Dock Worker',
                description = 'Sugar',
                icon = 'anchor',
            },
            {
                title = 'Purchase Stock',
                description = 'Currently Available: ' .. ingredients["docks"]["Stock"]["stockAvailable"],
                icon = "hand-holding",
                children = {
                    {
                        title = 'Total Cost: $' .. ingredients["docks"]["Stock"]["stockPrice"],
                        description = "You will receive all goods immediately.",
                        icon = "dollar-sign",
                    },
                    {
                        title = 'Accept',
                        icon = "check",
                        action = 'np-business:ingredients:collectIngredients',
                        key = {
                            price = ingredients["docks"]["Stock"]["stockPrice"],
                            amount = ingredients["docks"]["Stock"]["stockAvailable"],
                            shop = "docks",
                            item = "lqsugar",
                            type = "Stock",
                        },
                    },
                },
                disabled = false,
            },
            {
                title = 'Purchase Reserve Stock',
                description = 'In Reserve: ' .. ingredients["docks"]["Reserve"]["ReserveStock"],
                icon = "dollar-sign",
                children = {
                    {
                        title = 'Total Cost: $' .. ingredients["docks"]["Reserve"]["ReservePrice"],
                        description = "Sugar x" .. ingredients["docks"]["Reserve"]["ReserveAmount"],
                        icon = "dollar-sign",
                    },
                    {
                        title = 'Accept',
                        icon = "check",
                        action = 'np-business:ingredients:purchaseIngredients',
                        key = {
                            price = ingredients["docks"]["Reserve"]["ReservePrice"],
                            amount = ingredients["docks"]["Reserve"]["ReserveAmount"],
                            shop = "docks",
                            item = "lqsugar",
                            type = "Reserve",
                        },
                    },
                },
                disabled = false,
            },
        },
    },
    ["milk"] = {
        menu = {
            {
                title = 'Dairy Farmer',
                description = 'Milk',
                icon = 'blender',
            },
            {
                title = 'Purchase Stock',
                description = 'Currently Available: ' .. ingredients["milk"]["Stock"]["stockAvailable"],
                icon = "hand-holding",
                children = {
                    {
                        title = 'Total Cost: $' .. ingredients["milk"]["Stock"]["stockPrice"],
                        description = "You will receive all goods immediately.",
                        icon = "dollar-sign",
                    },
                    {
                        title = 'Accept',
                        icon = "check",
                        action = 'np-business:ingredients:collectIngredients',
                        key = {
                            price = ingredients["milk"]["Stock"]["stockPrice"],
                            amount = ingredients["milk"]["Stock"]["stockAvailable"],
                            shop = "milk",
                            item = "lqdairy",
                            type = "Stock",
                        },
                    },
                },
                disabled = false,
            },
            {
                title = 'Purchase Reserve Stock',
                description = 'In Reserve: ' .. ingredients["milk"]["Reserve"]["ReserveStock"],
                icon = "dollar-sign",
                children = {
                    {
                        title = 'Total Cost: $' .. ingredients["milk"]["Reserve"]["ReservePrice"],
                        description = "Dairy x" .. ingredients["milk"]["Reserve"]["ReserveAmount"],
                        icon = "dollar-sign",
                    },
                    {
                        title = 'Accept',
                        icon = "check",
                        action = 'np-business:ingredients:purchaseIngredients',
                        key = {
                            price = ingredients["milk"]["Reserve"]["ReservePrice"],
                            amount = ingredients["milk"]["Reserve"]["ReserveAmount"],
                            shop = "milk",
                            item = "lqdairy",
                            type = "Reserve",
                        },
                    },
                },
                disabled = false,
            },
        },
    },
    ["meat"] = {
        menu = {
            {
                title = 'Meat Processor',
                description = 'Protein',
                icon = 'drumstick-bite',
            },
            {
                title = 'Purchase Stock',
                description = 'Currently Available: ' .. ingredients["meat"]["Stock"]["stockAvailable"],
                icon = "hand-holding",
                children = {
                    {
                        title = 'Total Cost: $' .. ingredients["meat"]["Stock"]["stockPrice"],
                        description = "You will receive all goods immediately.",
                        icon = "dollar-sign",
                    },
                    {
                        title = 'Accept',
                        icon = "check",
                        action = 'np-business:ingredients:collectIngredients',
                        key = {
                            price = ingredients["meat"]["Stock"]["stockPrice"],
                            amount = ingredients["meat"]["Stock"]["stockAvailable"],
                            shop = "meat",
                            item = "lqprotein",
                            type = "Stock",
                        },
                    },
                },
                disabled = false,
            },
            {
                title = 'Purchase Reserve Stock',
                description = 'In Reserve: ' .. ingredients["meat"]["Reserve"]["ReserveStock"],
                icon = "dollar-sign",
                children = {
                    {
                        title = 'Total Cost: $' .. ingredients["meat"]["Reserve"]["ReservePrice"],
                        description = "Protein x" .. ingredients["meat"]["Reserve"]["ReserveAmount"],
                        icon = "dollar-sign",
                    },
                    {
                        title = 'Accept',
                        icon = "check",
                        action = 'np-business:ingredients:purchaseIngredients',
                        key = {
                            price = ingredients["meat"]["Reserve"]["ReservePrice"],
                            amount = ingredients["meat"]["Reserve"]["ReserveAmount"],
                            shop = "meat",
                            item = "lqprotein",
                            type = "Reserve",
                        },
                    },
                },
                disabled = false,
            },
        },
    },
    ["vegetable"] = {
        menu = {
            {
                title = 'Vegetable Farmer',
                description = 'Vegetables', 
                icon = 'carrot',
            },
            {
                title = 'Purchase Stock',
                description = 'Currently Available: ' .. ingredients["vegetable"]["Stock"]["stockAvailable"],
                icon = "hand-holding",
                children = {
                    {
                        title = 'Total Cost: $' .. ingredients["vegetable"]["Stock"]["stockPrice"],
                        description = "You will receive all goods immediately.",
                        icon = "dollar-sign",
                    },
                    {
                        title = 'Accept',
                        icon = "check",
                        action = 'np-business:ingredients:collectIngredients',
                        key = {
                            price = ingredients["vegetable"]["Stock"]["stockPrice"],
                            amount = ingredients["vegetable"]["Stock"]["stockAvailable"],
                            shop = "vegetable",
                            item = "lqvegetables",
                            type = "Stock",
                        },
                    },
                },
                disabled = false,
            },
            {
                title = 'Purchase Reserve Stock',
                description = 'In Reserve: ' .. ingredients["vegetable"]["Reserve"]["ReserveStock"],
                icon = "dollar-sign",
                children = {
                    {
                        title = 'Total Cost: $' .. ingredients["vegetable"]["Reserve"]["ReservePrice"],
                        description = "Vegetables x" .. ingredients["vegetable"]["Reserve"]["ReserveAmount"],
                        icon = "dollar-sign",
                    },
                    {
                        title = 'Accept',
                        icon = "check",
                        action = 'np-business:ingredients:purchaseIngredients',
                        key = {
                            price = ingredients["vegetable"]["Reserve"]["ReservePrice"],
                            amount = ingredients["vegetable"]["Reserve"]["ReserveAmount"],
                            shop = "vegetable",
                            item = "lqvegetables",
                            type = "Reserve",
                        },
                    },
                },
                disabled = false,
            },
        },
    },
    ["grain"] = {
        menu = {
            {
                title = 'Grain Farmer',
                description = 'Grains',
                icon = 'bread-slice',
            },
            {
                title = 'Purchase Stock',
                description = 'Currently Available: ' .. ingredients["grain"]["Stock"]["stockAvailable"],
                icon = "hand-holding",
                children = {
                    {
                        title = 'Total Cost: $' .. ingredients["grain"]["Stock"]["stockPrice"],
                        description = "You will receive all goods immediately.",
                        icon = "dollar-sign",
                    },
                    {
                        title = 'Accept',
                        icon = "check",
                        action = 'np-business:ingredients:collectIngredients',
                        key = {
                            price = ingredients["grain"]["Stock"]["stockPrice"],
                            amount = ingredients["grain"]["Stock"]["stockAvailable"],
                            shop = "grain",
                            item = "lqgrain",
                            type = "Stock",
                        },
                    },
                },
                disabled = false,
            },
            {
                title = 'Purchase Reserve Stock',
                description = 'In Reserve: ' .. ingredients["grain"]["Reserve"]["ReserveStock"],
                icon = "dollar-sign",
                children = {
                    {
                        title = 'Total Cost: $' .. ingredients["grain"]["Reserve"]["ReservePrice"],
                        description = "Garin x" .. ingredients["grain"]["Reserve"]["ReserveAmount"],
                        icon = "dollar-sign",
                    },
                    {
                        title = 'Accept',
                        icon = "check",
                        action = 'np-business:ingredients:purchaseIngredients',
                        key = {
                            price = ingredients["grain"]["Reserve"]["ReservePrice"],
                            amount = ingredients["grain"]["Reserve"]["ReserveAmount"],
                            shop = "grain",
                            item = "lqgrain",
                            type = "Reserve",
                        },
                    },
                },
                disabled = false,
            },
        },
    },
    ["season"] = {
        menu = {
            {
                title = 'Chef',
                description = 'Seasoning',
                icon = 'tree',
            },
            {
                title = 'Purchase Stock',
                description = 'Currently Available: ' .. ingredients["season"]["Stock"]["stockAvailable"],
                icon = "hand-holding",
                children = {
                    {
                        title = 'Total Cost: $' .. ingredients["season"]["Stock"]["stockPrice"],
                        description = "You will receive all goods immediately.",
                        icon = "dollar-sign",
                    },
                    {
                        title = 'Accept',
                        icon = "check",
                        action = 'np-business:ingredients:collectIngredients',
                        key = {
                            price = ingredients["season"]["Stock"]["stockPrice"],
                            amount = ingredients["season"]["Stock"]["stockAvailable"],
                            shop = "season",
                            item = "lqseasoning",
                            type = "Stock",
                        },
                    },
                },
                disabled = false,
            },
            {
                title = 'Purchase Reserve Stock',
                description = 'In Reserve: ' .. ingredients["season"]["Reserve"]["ReserveStock"],
                icon = "dollar-sign",
                children = {
                    {
                        title = 'Total Cost: $' .. ingredients["season"]["Reserve"]["ReservePrice"],
                        description = "Seasoning x" .. ingredients["season"]["Reserve"]["ReserveAmount"],
                        icon = "dollar-sign",
                    },
                    {
                        title = 'Accept',
                        icon = "check",
                        action = 'np-business:ingredients:purchaseIngredients',
                        key = {
                            price = ingredients["season"]["Reserve"]["ReservePrice"],
                            amount = ingredients["season"]["Reserve"]["ReserveAmount"],
                            shop = "season",
                            item = "lqseasoning",
                            type = "Reserve",
                        },
                    },
                },
                disabled = false,
            },
        },
    },
    ["leaven"] = {
        menu = {
            {
                title = 'Factory Worker',
                description = 'leavening',
                icon = 'fan',
            },
            {
                title = 'Purchase Stock',
                description = 'Currently Available: ' .. ingredients["leaven"]["Stock"]["stockAvailable"],
                icon = "hand-holding",
                children = {
                    {
                        title = 'Total Cost: $' .. ingredients["leaven"]["Stock"]["stockPrice"],
                        description = "You will receive all goods immediately.",
                        icon = "dollar-sign",
                    },
                    {
                        title = 'Accept',
                        icon = "check",
                        action = 'np-business:ingredients:collectIngredients',
                        key = {
                            price = ingredients["leaven"]["Stock"]["stockPrice"],
                            amount = ingredients["leaven"]["Stock"]["stockAvailable"],
                            shop = "leaven",
                            item = "lqleavening",
                            type = "Stock",
                        },
                    },
                },
                disabled = false,
            },
            {
                title = 'Purchase Reserve Stock',
                description = 'In Reserve: ' .. ingredients["leaven"]["Reserve"]["ReserveStock"],
                icon = "dollar-sign",
                children = {
                    {
                        title = 'Total Cost: $' .. ingredients["leaven"]["Reserve"]["ReservePrice"],
                        description = "Leavening x" .. ingredients["leaven"]["Reserve"]["ReserveAmount"],
                        icon = "dollar-sign",
                    },
                    {
                        title = 'Accept',
                        icon = "check",
                        action = 'np-business:ingredients:purchaseIngredients',
                        key = {
                            price = ingredients["leaven"]["Reserve"]["ReservePrice"],
                            amount = ingredients["leaven"]["Reserve"]["ReserveAmount"],
                            shop = "leaven",
                            item = "lqleavening",
                            type = "Reserve",
                        },
                    },
                },
                disabled = false,
            },
        },
    },
    ["oil"] = {
        menu = {
            {
                title = 'Fish Extracts',
                description = 'Oil',
                icon = 'bottle-droplet',
            },
            {
                title = 'Purchase Stock',
                description = 'Currently Available: ' .. ingredients["oil"]["Stock"]["stockAvailable"],
                icon = "hand-holding",
                children = {
                    {
                        title = 'Total Cost: $' .. ingredients["oil"]["Stock"]["stockPrice"],
                        description = "You will receive all goods immediately.",
                        icon = "dollar-sign",
                    },
                    {
                        title = 'Accept',
                        icon = "check",
                        action = 'np-business:ingredients:collectIngredients',
                        key = {
                            price = ingredients["oil"]["Stock"]["stockPrice"],
                            amount = ingredients["oil"]["Stock"]["stockAvailable"],
                            shop = "oil",
                            item = "lqoil",
                            type = "Stock",
                        },
                    },
                },
                disabled = false,
            },
            {
                title = 'Purchase Reserve Stock',
                description = 'In Reserve: ' .. ingredients["oil"]["Reserve"]["ReserveStock"],
                icon = "dollar-sign",
                children = {
                    {
                        title = 'Total Cost: $' .. ingredients["oil"]["Reserve"]["ReservePrice"],
                        description = "Cooking Oil x" .. ingredients["oil"]["Reserve"]["ReserveAmount"],
                        icon = "dollar-sign",
                    },
                    {
                        title = 'Accept',
                        icon = "check",
                        action = 'np-business:ingredients:purchaseIngredients',
                        key = {
                            price = ingredients["oil"]["Reserve"]["ReservePrice"],
                            amount = ingredients["oil"]["Reserve"]["ReserveAmount"],
                            shop = "oil",
                            item = "lqoil",
                            type = "Reserve",
                        },
                    },
                },
                disabled = false,
            },
        },
    },
}

RPC.register("np-business:ingredients:getShop", function(src, npcType) 
    return shops[npcType].menu
end)

RPC.register("np-business:ingredients:collectionHandler", function(src, data)
    local user = exports["np-base"]:getModule("Player"):GetUser(src)
    local cash = user:getCash()
    local shop = data.key.shop
    local type = data.key.type
    local amount = data.key.amount
    local price = data.key.price
    local item = data.key.item

    if cash > price then
        user:removeMoney(price)
        ingredients[shop][type]["stockAvailable"] = 0
        shops[shop]["menu"][2].disabled = true
        shops[shop]["menu"][2].description = 'Currently Available: ' .. ingredients[shop][type]["stockAvailable"],
        TriggerClientEvent('player:receiveItem', src, item, amount)
    else
        TriggerClientEvent("DoLongHudText", src, "You don't have enough money.", 2)
    end
end)

RPC.register("np-business:ingredients:purchaseHandler", function(src, data)
    local user = exports["np-base"]:getModule("Player"):GetUser(src)
    local cash = user:getCash()
    local price = data.key.price
    local amount = data.key.amount
    local shop = data.key.shop
    local type = data.key.type
    local item = data.key.item

    if cash > price then
        user:removeMoney(price)
        ingredients[shop][type]["ReserveStock"] = ingredients[shop][type]["ReserveStock"] - amount
        if ingredients[shop][type]["ReserveStock"] < 0 then
            ingredients[shop][type]["ReserveStock"] = 0 
        end
        shops[shop]["menu"][3].description = 'Currently Available: ' .. ingredients[shop][type]["ReserveStock"]
        if ingredients[shop][type]["ReserveStock"] == 0 then
            shops[shop]["menu"][3].disabled = true
        end
        TriggerClientEvent('player:receiveItem', src, item, amount)
    else
        TriggerClientEvent("DoLongHudText", src, "You don't have enough money.", 2)
    end
end)
