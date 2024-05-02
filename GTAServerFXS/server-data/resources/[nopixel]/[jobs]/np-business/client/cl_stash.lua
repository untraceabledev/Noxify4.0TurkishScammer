local isCop = false
local isJudge = false

-- New Business Stash Stuff
-- @FIND ME
local validStorageProp = {
  ["prop_cabinet_02b"] = true,
  ["prop_toolchest_05"] = true,
  ["prop_container_ld_pu"] = true,
  ["p_cs_locker_01_s"] = true,
  ["p_v_43_safe_s"] = true,
  ["p_pharm_unit_01"] = true,
  ["prop_devin_box_closed"] = true,
  ["prop_tool_box_07"] = true,
  ["ba_prop_battle_crate_art_02_bc"] = true,
  ["v_med_cooler"] = true,
  ["h4_prop_h4_chest_01a2"] = true,
  ["np_prop_small_mail_a"] = true,
}
local businessStashProps = {}
Citizen.CreateThread(function()
  for k, _ in pairs(validStorageProp) do
    businessStashProps[#businessStashProps + 1] = GetHashKey(k)
  end
end)

local _isTrusted = nil
function IsTrusted()
  if _isTrusted == nil then
    _isTrusted = NPX.Procedures.execute("np-deployables:isTrustedCharacter")
  end
  return _isTrusted
end

AddEventHandler("np-spawn:characterSpawned", function()
  _isTrusted = nil
end)

RegisterNetEvent("jobmanager:playerBecameJob")
AddEventHandler("jobmanager:playerBecameJob", function(job)
    if isCop and job ~= "police" then isCop = false end
    if job == "police" then isCop = true end
end)

RegisterNetEvent("isJudge")
AddEventHandler("isJudge", function()
    isJudge = true
end)

RegisterNetEvent("isJudgeOff")
AddEventHandler("isJudgeOff", function()
    isJudge = false
end)

local hasPdAuthCode = nil
RegisterUICallback("np-business:stash:enteredAuthCode", function(data, cb)
  cb({ data = {}, meta = { ok = true, message = "done" } })
  exports["np-ui"]:closeApplication("textbox")
  hasPdAuthCode = true
end)
AddEventHandler("np-ui:application-closed", function(name)
  if name ~= "textbox" then return end
  hasPdAuthCode = false
end)
function getPDAuthCode()
  hasPdAuthCode = nil
  exports["np-ui"]:openApplication("textbox", {
    callbackUrl = "np-business:stash:enteredAuthCode",
    key = "",
    items = {
      { label = "Auth Code", name = "password", type = "password" },
    },
    show = true,
  })
  while hasPdAuthCode == nil do
    Wait(1000)
  end
  return hasPdAuthCode
end


function openInventory(type, data)
  local biz = data.biz and data.biz or data.id
  if type == "stash" then
    local success = RPC.execute("np-business:hasPermission", biz, "stash_access")
    if not success and isPD() then
      success = getPDAuthCode()
    end
    if (not success) and data.cids then
      local cid = exports["isPed"]:isPed("cid")
      success = data.cids[cid]
    end
    if success then
      local prefix = "biz"
      if data.isLarge then
        prefix = "bizlarge"
      end
      TriggerEvent("server-inventory-open", "1", string.format("%s-%s", prefix, data.id), data.invSize, data.invSlots)
    else
      TriggerEvent("DoLongHudText", "Not allowed", 2)
    end
  elseif type == "storage" then
    OpenSelfStorageMenu(data)
  else
    TriggerEvent("DoLongHudText", "Nothing found", 2)
  end
end

function isPD()
  local job = exports["np-base"]:getModule("LocalPlayer"):getVar("job")

  return isCop or isJudge or job == "district attorney"
end

AddEventHandler("np-business:openInventory", function(pParameters, pEntity, pContext)
  local serverCode = exports["config"]:GetServerCode()
  TriggerEvent("server-inventory-open", "1", pParameters.invName .. "-" .. serverCode)
end)

AddEventHandler("np-business:openCrafting", function(pParameters, pEntity, pContext)
  TriggerEvent("server-inventory-open", pParameters.invName, "Craft")
end)

--
local creationMenu = {
  key = 1,
  show = true,
  callbackUrl = "np-business:client:createStash",
  items = { }
}
local whiteListed = {
  [4] = true,
  [17691] = true,
  [1022] = true,
}

Citizen.CreateThread(function()
  exports["np-interact"]:AddPeekEntryByModel(businessStashProps, {
    {
      id = "business_stash",
      event = "np-business:client:openStash",
      icon = "archive",
      label = "Open Storage",
    },
  },
  {
    distance = { radius = 2.5 },
    isEnabled = function(pEntity)
      local objInfo = exports["np-objects"]:GetObjectByEntity(pEntity)
      return objInfo ~= nil
    end
  })
  exports["np-interact"]:AddPeekEntryByModel(businessStashProps, {
    {
      id = "business_stash_manage",
      event = "np-business:client:manageStash",
      icon = "wrench",
      label = "Manage Stash",
    }
  },
  {
    distance = { radius = 2.5 },
    isEnabled = function(pEntity, pContext)
      local objInfo = exports["np-objects"]:GetObjectByEntity(pEntity)
      local cid = exports["isPed"]:isPed("cid")
      return objInfo ~= nil and ((IsEmployedAt("statecontracting") and HasPermission("statecontracting", "craft_access")) or whiteListed[cid])
    end
  })
end)

RegisterNetEvent("np-business:stash:creationMenu")
AddEventHandler("np-business:stash:creationMenu", function ()
  local success, businesses = RPC.execute("GetBusinesses")

  if not success then
    return TriggerEvent("DoLongHudText", "Error while fetching businesses", 2)
  end

  local businessOptions = {}
  for _, business in pairs(businesses) do
    businessOptions[#businessOptions+1] = {
      name = business.name,
      id = business.code
    }
  end

  local stashOptions = {}
  for k, _ in pairs(validStorageProp) do
    stashOptions[#stashOptions+1] = { name = k, id = k }
  end
  creationMenu.items = {
    { icon = "id-card", _type = "select", name = "businessCode", label = "Select Business", options = businessOptions },
    { icon = "boxes", label = "Storage Size (biz, bizLarge)", name = "storageSize" },
    {
      icon = "object-ungroup",
      label = "Unit Model (optional)",
      name = "stashProp",
      _type = "select",
      options = stashOptions,
    },
    { icon = "weight", label = "Storage Weight (optional)", name = "storageWeight" },
    { icon = "th", label = "Storage Slots (optional)", name = "storageSlots" }
  }

  exports["np-ui"]:openApplication("textbox", creationMenu)
end)

RegisterUICallback("np-business:client:removeStash", function (pData, cb)
  cb({ data = {}, meta = { ok = true, message = 'OK' } })

  local objInfo = exports["np-objects"]:GetObjectByEntity(pData.key.entity)
  if objInfo == nil then return end

	TriggerEvent("animation:PlayAnimation", "hammering")

  local finished = exports["np-taskbar"]:taskBar(15000, "Destroying Storage")
  ClearPedTasks(PlayerPedId())
  if finished ~= 100 then return end

  local deleted = NPX.Procedures.execute("np-objects:DeleteObject", objInfo.id)
  if not deleted then
    TriggerEvent("DoLongHudText", "Error while deleting object", 2)
  else
    TriggerEvent("DoLongHudText", "Storage removed", 1)
  end
end)

AddEventHandler("np-business:client:openStash", function (pData, pEntity)
  local objInfo = exports["np-objects"]:GetObjectByEntity(pEntity)
  if objInfo == nil then return end

  local storageSize = objInfo.data.metadata.storageSize
  local businessCode = objInfo.data.metadata.businessCode
  local storageWeight = objInfo.data.metadata.storageWeight
  local storageSlots = objInfo.data.metadata.storageSlots
  local randomId = objInfo.data.metadata.randomId

  -- Are they employed at this business with stash access or a cop with an auth code?
  local success = RPC.execute("np-business:hasPermission", businessCode, "stash_access")
  if not success and isPD() then
    success = getPDAuthCode()
  end

  if not success then
    return TriggerEvent("DoLongHudText", "Not allowed", 2)
  end

  local inventoryName = string.format("%s-%s-%s", storageSize, businessCode, randomId)
  TriggerEvent("server-inventory-open", "1", inventoryName, tonumber(storageWeight), tonumber(storageSlots))
end)

RegisterUICallback("np-business:client:changeStashModel", function (pData, cb)
  cb({ data = {}, meta = { ok = true, message = 'OK' } })

  local objInfo = exports["np-objects"]:GetObjectByEntity(pData.key.entity)
  if objInfo == nil then return end

  local menuData = {
    key = { id = objInfo.id },
    show = true,
    callbackUrl = "np-business:client:updateStashModel",
    items = {
      { icon = "object-ungroup", label = "New Unit Model", name = "stashProp" },
    }
  }

  Wait(250)

  SetNuiFocus(true)

  exports["np-ui"]:openApplication("textbox", menuData)
end)

RegisterUICallback("np-business:client:updateStashModel", function(pData, pCb)
  pCb({ data = {}, meta = { ok = true, message = "done" } })

  local stashProp = pData.values.stashProp
  if stashProp == nil or stashProp == "" or not validStorageProp[stashProp] then
    return TriggerEvent("DoLongHudText", "Invalid unit model", 2)
  end

  if pData.key.id == nil then return end

  TriggerEvent("animation:PlayAnimation", "hammering")

  exports["np-ui"]:closeApplication("textbox")

  local finished = exports["np-taskbar"]:taskBar(15000, "Changing Storage")
  ClearPedTasks(PlayerPedId())
  if finished ~= 100 then return end

  local updated = exports["np-objects"]:UpdateObject(pData.key.id, nil, stashProp)
end)

RegisterUICallback("np-business:client:createStash", function(pData, pCb)
  pCb({ data = {}, meta = { ok = true, message = "done" } })
  exports["np-ui"]:closeApplication("textbox")

  local businessCode = pData.values.businessCode
  if businessCode == nil or businessCode == "" then
    return TriggerEvent("DoLongHudText", "Invalid/No business code", 2)
  end

  local stashProp = pData.values.stashProp
  if stashProp == nil or stashProp == "" then
    stashProp = "prop_cabinet_02b"
  end

  if not validStorageProp[stashProp] then
    return TriggerEvent("DoLongHudText", "Invalid unit model", 2)
  end


  local storageSize = pData.values.storageSize
  if not validStorageSize(storageSize) then
    return TriggerEvent("DoLongHudText", "Invalid storage size", 2)
  end

  local storageWeight = pData.values.storageWeight
  local storageSlots = pData.values.storageSlots

  local metaData = {
    businessCode = businessCode,
    storageSize = storageSize,
    storageWeight = storageWeight,
    storageSlots = storageSlots,
    randomId = math.random(1, 9999999),
  }

  local isTrusted = IsTrusted()
  local id = exports["np-objects"]:PlaceAndSaveObject(stashProp, metaData, { adjustZ = true, allowGizmo = isTrusted })
  if not id then
    return TriggerEvent("DoLongHudText", "Failed to create stash!", 2)
  else
    return TriggerEvent("DoLongHudText", "Successfully created stash!", 1)
  end
end)

function validStorageSize(pSize)
  local valid = false
  if (pSize == "biz" or pSize == "bizLarge") then
    valid = true
  end
  return valid
end

AddEventHandler('np-business:client:manageStash', function (pData, pEntity)
  local objInfo = exports["np-objects"]:GetObjectByEntity(pEntity)
  if objInfo == nil then return end

  local businessCode = objInfo.data.metadata.businessCode
  if not businessCode then return end

  local businessInfo = RPC.execute('np-business:getBusinessByCode', businessCode)
  if not businessInfo then return end

  if not IsEmployedAt("statecontracting") and not HasPermission("statecontracting", "craft_access") then
    return TriggerEvent("DoLongHudText", "Not allowed", 2)
  end

  local context = {
    {
      title = "Manage " .. businessInfo.name .. "'s Stash",
      description = "Business code - " .. businessInfo.code,
      key = { },
      icon = "info-circle",
      action = "np-ui:apartmentsContext"
    },
    {
      title = "Remove Stash",
      description = "",
      key = { entity = pEntity },
      icon = "hammer",
      action = "np-business:client:removeStash"
    },
    {
      title = "Change Stash",
      description = "",
      key = { entity = pEntity },
      icon = "exchange-alt",
      action = "np-business:client:changeStashModel"
    }
  }

  exports["np-ui"]:showContextMenu(context)
end)
