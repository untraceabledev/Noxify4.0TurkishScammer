NPX = {}
PDX = {}

exports("open", function(pStoreId)
    if pStoreId == "247" then
        for i, pos in ipairs(Pos) do
            if NPX[i] and
                (NPX[i].job == nil or NPX[i].job == "" or NPX[i].job == " ") then
                Wait(300)
                SendNUIMessage({
                    action = "OPEN",
                    data = {
                        marketName = NPX[i].name,
                        marketCategory = NPX[i].category,
                        marketItemList = NPX[i].itemList,
                        marketCategoryList = NPX[i].categoryList,
                        marketJob = NPX[i].job or ""
                    }
                })
                SetNuiFocus(true, true)
            end
        end
    end

 if pStoreId == "pd_armory" then
    for i, pos in ipairs(PD) do
        if PDX[i] and
            (NPX[i].job == nil or PDX[i].job == "" or PDX[i].job == " ") then
            Wait(300)
            SendNUIMessage({
                action = "OPEN",
                data = {
                    marketName = PDX[i].name,
                    marketCategory = PDX[i].category,
                    marketItemList = PDX[i].itemList,
                    marketCategoryList = PDX[i].categoryList,
                    marketJob = PDX[i].job or ""
                }
            })
            SetNuiFocus(true, true)
        end
    end
 end
end)

RegisterNetEvent("stores:close")
AddEventHandler("stores:close", function()
    Wait(300)
    SetNuiFocus(false, false)
    SendNUIMessage({action = "CLOSE"})
end)

RegisterNUICallback("close", function() SetNuiFocus(false, false) end)

RegisterNUICallback("pay",
                    function(data) TriggerServerEvent("stores:pay", data) end)

