local obj = nil

local ItemToProp = {
  ["francis_bush"] = "prop_bush_med_03",
  ["boris_bush"] = "prop_bush_lrg_03",
}

local PropToOffset = {
  ["prop_bush_med_03"] = {
    x = 0.0,
    y = 0.0,
    z = -0.90,
    zRot = 0.0,
  },

  ["prop_bush_lrg_03"] = {
    x = -0.2,
    y = 0.5,
    z = -0.50,
    zRot = 90.0,
  },
}

function ToggleBush(pProp)
  local ped = PlayerPedId()

  if obj == nil then
    obj = CreateObject(GetHashKey(pProp), GetEntityCoords(ped), true, true, false)

    SetEntityCollision(obj, false, false)

    local position = PropToOffset[pProp]

    AttachEntityToEntity(obj, ped, 23553, position.x, position.y, position.z, 0.0, 0.0, position.zRot, 0, 1, 0, 1, 0, 1)
    return
  end

  DeleteEntity(obj)
  ClearPedTasksImmediately(PlayerPedId())
  DetachEntity(PlayerPedId(), true, true)
  obj = nil
end

AddEventHandler("np-inventory:itemUsed", function(item)
  if ItemToProp[item] == nil then return end

  ToggleBush(ItemToProp[item])
end)

AddEventHandler('onResourceStop', function (resource)
  if (resource ~= GetCurrentResourceName()) then return end
  
  DeleteEntity(obj)
  ClearPedTasksImmediately(PlayerPedId())
  DetachEntity(PlayerPedId(), true, true)
end)
