local businessSpawn = {
    [1] = {
      ["pos"] = vector4(1002.93, 58.11, 75.06, 108.81),
      ['info'] = 'Diamond Casino',
      ['id'] = 'casino_hotel',
    },
    [2] = {
      ["pos"] = vector4(-1204.46, -842.72, 14.07, 216.33),
      ['info'] = 'Burger Shot',
      ['id'] = 'burger_shot',
    },
    [3] = {
      ["pos"] = vector4(-172.83, 331.17, 93.76, 266.08),
      ['info'] = 'Rooster Cab',
      ['id'] = 'rooster',
    },
    [4] = {
      ["pos"] = vector4(-1805.12, 431.66, 128.66, 359.87),
      ['info'] = 'Clean Manor',
      ['id'] = 'clean_manor',
    },
    [5] = {
      ["pos"] = vector4(148.14, -3007.88, 7.04, 265.18),
      ['info'] = 'Tuner Shop',
      ['id'] = 'tuner_shop',
    },
    [6] = {
      ["pos"] = vector4(997.64, 59.87, 75.06, 241.3),
      ['info'] = 'Diamond Casino',
      ['id'] = 'casino',
    },
    [7] = {
      ["pos"] = vector4(-572.45, -1064.82, 26.61, 355.94),
      ['info'] = 'UwU Cafe',
      ['id'] = 'uwu_cafe',
    },
    [8] = {
      ["pos"] = vector4(347.86, -991.08, 29.29, 180.17),
      ['info'] = 'Little Moscow',
      ['id'] = 'little_moscow',
    },
    [9] = {
      ["pos"] = vector4(147.30, -3007.91, 7.04, 271.41),
      ['info'] = 'Tuner Shop',
      ['id'] = 'tuner',
    },
  }
  
  RPC.register("IsEmployedAtBusiness", function(pSource, pData)
    local data = pData
    if pData == nil then return false end
  
    local getData = Await(SQL.execute([[
          SELECT *
          FROM businesses
          WHERE business_id = ?
      ]], { data.business.id }))
  
    for k, v in pairs(getData) do
      if data.business.id == v.business_id then
        local employees = json.decode(v.employees) or {}
        for i, u in pairs(employees) do
          if tonumber(u.cid) == tonumber(data.character.id) then
            return true
          end
        end
      end
    end
  
    return false
  end)
  
  RPC.register("np-business:GetEmploymentInformation", function(pSource, pCid)
    local data = Await(SQL.execute("SELECT * FROM businesses"))
    local employment = {}
    for k, v in pairs(data) do
      local employees = json.decode(data[k].employees) or {}
      for i, u in pairs(employees) do
        if tonumber(u.cid) == tonumber(pCid) then
          local business_id = data[k].business_id
          local business_name = data[k].business_name
  
          local bankAccess
          local roles = json.decode(data[k].roles) or {}
          for l, p in pairs(roles) do
            if tostring(p.name) == tostring(u.role) then
              bankAccess = p.bank_access
            end
          end
  
          employment[#employment + 1] = {
            id = tonumber(i),
            businessid = business_id,
            businessname = business_name,
            businessrole = u.role,
            businessicon = "fa-business-time",
            bankAccess = bankAccess,
            rank = u.rank
          }
        end
      end
    end
  
    return employment
  end)
  
  RPC.register("GetEmploymentInformation", function(pSource, pCid)
    local data = Await(SQL.execute("SELECT * FROM businesses"))
  
    if not data then return false end
  
    local employment = {}
  
    for k, v in pairs(data) do
      local employees = json.decode(data[k].employees) or {}
      local permissions = json.decode(data[k].roles) or {}
      local tempPerms = {}
      for i, u in pairs(employees) do
        if tonumber(u.cid) == tonumber(pCid) then
          local code = data[k].business_id
          local business_name = data[k].business_name
  
          for s, v in pairs(permissions) do
            if u.role == v.name then
              tempPerms = permissions[s]
            end
          end
  
          employment[#employment + 1] = {
            id = tonumber(i),
            code = code,
            business_name = business_name,
            business_role = u.role,
            rank = u.rank,
            permissions = tempPerms
          }
        end
      end
    end
  
    return true, employment
  end)
  
  RPC.register("np-spawn:getBusinessSpawns", function(src, pCid)
    local spawnBus = {}
    local bType = GetBusinessId(src, pCid)
  
    for k, v in pairs(businessSpawn) do
      for f = 1, #bType do
        if v.id == bType[f] then
          spawnBus[#spawnBus + 1] = {
            ["pos"] = v.pos,
            ['info'] = "Business - " .. v.info,
          }
        end
      end
    end
  
    return spawnBus
  end)
  
  -- RegisterCommand("addemployee", function(source, args, raw)
  --     local user = exports["np-base"]:getModule("Player"):GetUser(source)
  --     local rank = user:getRank()
  --     if rank ~= "dev" then return end
  --     if not args then return end
  
  --     local emp = Await(SQL.execute("SELECT * FROM businesses WHERE business_id = @business_id", {
  --         ["business_id"] = args[1]
  --     }))
  
  --     local emp = json.decode(emp[1].employees)
  
  --     tbl = {
  --         cid = args[2],
  --         role = args[3],
  --         rank = args[4]
  --     }
  
  --     table.insert(emp, tbl)
  
  --     local data = Await(SQL.execute([[
  --         UPDATE businesses
  --         SET employees = ?
  --         WHERE business_id = ?
  --     ]],
  --     { json.encode(emp), args[1] })
  -- end)
  
  -- RegisterCommand("addrole", function(source, args, raw)
  --     local user = exports["np-base"]:getModule("Player"):GetUser(source)
  --     local rank = user:getRank()
  --     if rank ~= "dev" then return end
  --     if not args then return end
  
  --     roles = {}
  
  --     tbl = {
  --         name = args[2],
  --         charge_access = args[3],
  --         bank_access = args[4],
  --         role_manage = args[5],
  --         role_create = args[6],
  --         key_access = args[7],
  --         stash_access = args[8],
  --         craft_access = args[9],
  --         can_hire = args[10],
  --         can_fire = args[11],
  --     }
  
  --     table.insert(roles, tbl)
  
  --     local data = Await(SQL.execute([[
  --         UPDATE businesses
  --         SET roles = ?
  --         WHERE business_id = ?
  --     ]],
  --     { json.encode(roles), args[1] })
  -- end)
  
  RPC.register("np-business:hasPermission", function(pSource, pBusinessId, pType, pCid)
    local hasPermission
    local pAccessType = pType
    local user = exports["np-base"]:getModule("Player"):GetUser(pSource)
    local char = user:getCurrentCharacter()
  
    if pCid == nil then
      pCid = char.id
    end
  
    local data = Await(SQL.execute([[
          SELECT *
          FROM businesses
          WHERE business_id = ?
      ]], { pBusinessId }))
  
    if not data[1] then return false end
  
    local charge_access = false
    local bank_access = false
    local role_manage = false
    local role_create = false
    local key_access = false
    local stash_access = false
    local craft_access = false
    local can_hire = false
    local can_fire = false
    local employees = json.decode(data[1].employees) or {}
    for i, u in pairs(employees) do
      if tonumber(u.cid) == tonumber(pCid) then
        local roles = json.decode(data[1].roles) or {}
        for l, p in pairs(roles) do
          if tostring(p.name) == tostring(u.role) then
            charge_access = p.charge_access
            bank_access = p.bank_access
            role_manage = p.role_manage
            role_create = p.role_create
            key_access = p.key_access
            stash_access = p.stash_access
            craft_access = p.craft_access
            can_hire = p.can_hire
            can_fire = p.can_fire
          end
        end
  
        function hasAccess(pAccessType)
          if pAccessType == "charge_access" then
            return charge_access
          elseif pAccessType == "bank_access" then
            return bank_access
          elseif pAccessType == "role_manage" then
            return role_manage
          elseif pAccessType == "role_create" then
            return role_create
          elseif pAccessType == "key_access" then
            return key_access
          elseif pAccessType == "stash_access" then
            return stash_access
          elseif pAccessType == "craft_access" then
            return craft_access
          elseif pAccessType == "hire" then
            return can_hire
          elseif pAccessType == "fire" then
            return can_fire
          end
        end
  
        if hasAccess(pType) == true then
          hasPermission = true
        else
          hasPermission = false
        end
  
        return hasPermission
      end
    end
  end)
  
  function firstToUpper(str)
    return (str:gsub("^%l", string.upper))
  end
  
  RPC.register("np-business:createRole",
    function(pSource, pBusinessId, pRoleName, pPermHire, pPermFire, pPermChangeRoles, pPermKeys, pPermStash, pPermCraft, pPermCharge, pPermBank)
      local data = Await(SQL.execute([[
          SELECT *
          FROM businesses
          WHERE business_id = ?
      ]], { pBusinessId }))
  
      if not data[1] then return false end
  
      local roles = json.decode(data[1].roles)
  
      tbl = {
        name = pRoleName,
        charge_access = pPermCharge,
        bank_access = pPermBank,
        role_manage = pPermChangeRoles,
        role_create = false,
        property_keys = pPermKeys,
        stash_access = pPermStash,
        craft_access = pPermCraft,
        can_hire = pPermHire,
        can_fire = pPermFire
      }
  
      table.insert(roles, tbl)
  
      local update = Await(SQL.execute([[
          UPDATE businesses
          SET roles = ?
          WHERE business_id = ?
      ]],
        { json.encode(roles), pBusinessId }))
  
      if not update then return false end
  
      return true
    end)
  
  RPC.register("np-business:checkRoleExistance", function(pSource, pBusinessId, pCurRole)
    local data = Await(SQL.execute([[
          SELECT *
          FROM businesses
          WHERE business_id = ?
      ]], { pBusinessId }))
  
    local bool = false
    local currole = tostring(pCurRole)
    local roles = json.decode(data[1].roles) or {}
    for i, u in pairs(roles) do
      if tostring(u.name) == currole then
        bool = true
      end
    end
  
    return bool
  end)
  
  RPC.register("np-business:editRole",
    function(pSource, pBusinessId, pCurRole, pRoleName, pPermFire, pPermHire, pPermChangeRoles, pPermKeys, pPermStash, pPermCraft, pPermCharge, pPermBank)
      local role = firstToUpper(pRoleName)
      local currole = firstToUpper(pCurRole)
  
      local data = Await(SQL.execute([[
          SELECT *
          FROM businesses
          WHERE business_id = ?
      ]], { pBusinessId }))
  
      local roles = json.decode(data[1].roles)
      local employee = json.decode(data[1].employees)
      local found = false
      for k, v in pairs(employee) do
        if tostring(v.role) == tostring(currole) then
          found = true
        end
      end
      for i, u in pairs(roles) do
        if tostring(firstToUpper(u.name)) == tostring(currole) then
          roles[i].name = role
          roles[i].role_manage = pPermChangeRoles
          roles[i].key_access = pPermKeys
          roles[i].stash_access = pPermStash
          roles[i].craft_access = pPermCraft
          roles[i].charge_access = pPermCharge
          roles[i].bank_access = pPermBank
          roles[i].can_hire = pPermHire
          roles[i].can_fire = pPermFire
  
          local update = Await(SQL.execute([[
                  UPDATE businesses
                  SET roles = ?
                  WHERE business_id = ?
              ]],
            { json.encode(roles), pBusinessId }))
  
          if not update then return false end
        end
      end
      if found == true then
        local employees = json.decode(data[1].employees)
        for l, p in pairs(employees) do
          if tostring(p.role) == tostring(currole) then
            employees[l].role = role
  
            local update = Await(SQL.execute([[
                      UPDATE businesses
                      SET employees = ?
                      WHERE business_id = ?
                  ]],
              { json.encode(employees), pBusinessId }))
          end
        end
      end
  
      return true
    end)
  
  RPC.register("np-business:deleteRole", function(pSource, pBusinessId, pRole)
    local role = firstToUpper(pRole)
    local data = Await(SQL.execute([[
          SELECT *
          FROM businesses
          WHERE business_id = ?
      ]], { pBusinessId }))
  
    local roles = json.decode(data[1].roles) or {}
    for k, v in pairs(roles) do
      if tostring(v.name) == tostring(role) then
        table.remove(roles, k)
  
        local update = Await(SQL.execute([[
                  UPDATE businesses
                  SET roles = ?
                  WHERE business_id = ?
              ]],
          { json.encode(roles), pBusinessId }))
  
        if not update then return false end
      end
    end
  
    return true
  end)
  
  RPC.register("np-business:updateEmployee", function(pSource, pCid, pBusinessId, pNewRole)
    local data = Await(SQL.execute([[
          SELECT *
          FROM businesses
          WHERE business_id = ?
      ]], { pBusinessId }))
  
    local employees = json.decode(data[1].employees)
  
    for k, v in pairs(employees) do
      if tonumber(v.cid) == tonumber(pCid) then
        employees[k].role = pNewRole
  
        local update = Await(SQL.execute([[
                  UPDATE businesses
                  SET employees = ?
                  WHERE business_id = ?
              ]],
          { json.encode(employees), pBusinessId }))
  
        if not update then return false end
      end
    end
  
    return true
  end)
  
  RPC.register("np-business:hireEmployee", function(pSource, pCid, pRole, pBusinessId)
    local data = Await(SQL.execute([[
          SELECT *
          FROM businesses
          WHERE business_id = ?
      ]], { pBusinessId }))
  
    if not data[1] then return false end
  
    local employees = nil
    employees = json.decode(data[1].employees) or {}
    for i, u in pairs(employees) do
      if tonumber(u.cid) == tonumber(pCid) then
        return false
      end
    end
  
    if employees ~= nil then
      local calcedRank
  
      if tostring(pRole) == "Owner" then
        calcedRank = 5
      elseif tostring(pRole) == "Co-Owner" then
        calcedRank = 4
      elseif tostring(pRole) == 'Manager' then
        calcedRank = 3
      elseif tostring(pRole) == 'Supervisor' then
        calcedRank = 2
      else
        calcedRank = 0
      end
  
      tbl = {
        cid = pCid,
        role = pRole,
        rank = calcedRank
      }
      table.insert(employees, tbl)
  
      local update = Await(SQL.execute([[
              UPDATE businesses
              SET employees = ?
              WHERE business_id = ?
          ]],
        { json.encode(employees), pBusinessId }))
  
      if not update then return false end
  
      return true
    end
  end)
  
  RPC.register("np-business:fireEmployee", function(pSource, pCid, pBusinessId)
    local data = Await(SQL.execute([[
          SELECT *
          FROM businesses
          WHERE business_id = ?
      ]], { pBusinessId }))
  
  
    local employees = json.decode(data[1].employees)
    for k, v in pairs(employees) do
      if tonumber(v.cid) == tonumber(pCid) then
        table.remove(employees, k)
  
        local update = Await(SQL.execute([[
                  UPDATE businesses
                  SET employees = ?
                  WHERE business_id = ?
              ]],
          { json.encode(employees), pBusinessId }))
  
        if not update then return false end
      end
    end
  
    return true
  end)
  
  RPC.register("np-business:GetEmploymentInformationBusinessID", function(pSource, pCid, pBusinessId)
    local userInfo = Await(SQL.execute([[
          SELECT *
          FROM characters
          WHERE id = ?
      ]], { pCid }))
  
    local data = Await(SQL.execute([[
          SELECT *
          FROM businesses
          WHERE business_id = ?
      ]], { pBusinessId }))
  
    if not data[1] then
      return false, false, false, 0
    end
  
    local employees = json.decode(data[1].employees) or {}
    for i, u in pairs(employees) do
      if tonumber(u.cid) == tonumber(pCid) then
        return u.role, userInfo[1].first_name, userInfo[1].last_name, u.rank
      elseif tostring(u.role) == "Owner" then
        return u.role, userInfo[1].first_name, userInfo[1].last_name, u.rank
      end
    end
  
    return false, false, false, 0
  end)
  
  RPC.register("np-business:GetBusiness", function(pSource, pBusinessId)
    local data = Await(SQL.execute([[
          SELECT *
          FROM businesses
          WHERE business_id = ?
      ]], { pBusinessId }))
  
    local employment = {}
    local pEmployees = json.decode(data[1].employees) or {}
  
    for i, u in pairs(pEmployees) do
      local business_id = data[1].business_id
      local business_name = data[1].business_name
  
      local myIcon = "fa-user-tie"
      if tostring(u.role) == "Owner" then
        myIcon = "fa-user-secret"
      end
  
      local userInfo = Await(SQL.execute([[
              SELECT *
              FROM characters
              WHERE id = ?
          ]], { u.cid }))
  
      local name
      if userInfo[1] ~= nil then
        name = userInfo[1].first_name .. " " .. userInfo[1].last_name
      else
        name = "Invalid Employee"
      end
  
      employment[#employment + 1] = {
        id = tonumber(i),
        businessid = business_id,
        businessname = business_name,
        businessrole = u.role,
        name = name,
        icon = myIcon,
        cid = u.cid,
        rank = u.rank,
        bank_id = u.bank_id
      }
    end
  
    return employment
  end)
  
  RPC.register("np-business:GetOwner", function(pSource, pBusinessId)
    local data = Await(SQL.execute([[
          SELECT *
          FROM businesses
          WHERE business_id = ? AND role = ?
      ]],
      { pBusinessId, "Owner" }))
  
    return data[1].cid
  end)
  
  RPC.register("np-business:GetBusinessRoles", function(pSource, pBusinessId)
    local data = Await(SQL.execute([[
          SELECT *
          FROM businesses
          WHERE business_id = ?
      ]],
      { pBusinessId }))
  
    if not data[1] then return false end
  
    local allroles = {}
    local roles = json.decode(data[1].roles) or {}
    for k, v in pairs(roles) do
      allroles[#allroles + 1] = {
        label = v.name,
        value = v.name
      }
    end
  
    return allroles
  end)
  
  RPC.register("np-business:GetRole", function(pSource, pBusinessId, pRoleName)
    local data = Await(SQL.execute([[
          SELECT *
          FROM businesses
          WHERE business_id = ?
      ]],
      { pBusinessId }))
  
  
    local roles = json.decode(data[1].roles)
    for k, v in pairs(roles) do
      if tostring(v.name) == tostring(pRoleName) then
        return v.can_hire, v.can_fire, v.role_manage, v.key_access, v.stash_access, v.craft_access
      end
    end
  end)
  
  RPC.register("np-business:addEmployee", function(pSource, pCid, pRole, pBusinessId)
    local data = Await(SQL.execute([[
          SELECT *
          FROM businesses
          WHERE business_id = ?
      ]],
      { pBusinessId }))
  
    local t
    local add
  
    if data[1].business_employees ~= nil then
      string = data[1].business_employees .. "," .. pCid
    else
      t = {
        {
          cid = pCid,
          role = pRole
        },
      }
  
      t[#t + 1] = {
        cid = 13,
        role = "noob",
      }
  
      local encoded = json.encode(t)
      add = Await(SQL.execute([[
              UPDATE businesses
              SET bank = bank + @amount
              WHERE business_employees = ?
          ]],
        { encoded }))
    end
  
    if add then
      return true
    end
  end)
  
  RPC.register("np-business:isBizOwner", function(pSource, pBusinessId)
    local user = exports["np-base"]:getModule("Player"):GetUser(pSource)
    local char = user:getCurrentCharacter()
  
    local data = Await(SQL.execute([[
          SELECT *
          FROM businesses
          WHERE business_id = ?
      ]],
      { pBusinessId }))
  
    local employees = json.decode(data[1].employees) or {}
    for i, u in pairs(employees) do
      if tonumber(u.cid) == tonumber(char.id) then
        if tostring(u.role) == "Owner" then
          return true
        else
          return false
        end
      end
    end
  end)
  
  RPC.register("np-business:GetUserRole", function(pSource, pBusinessId, pCid)
    local data = Await(SQL.execute([[
          SELECT *
          FROM businesses
          WHERE business_id = ?
      ]],
      { pBusinessId }))
  
    local employees = json.decode(data[1].employees) or {}
    for i, u in pairs(employees) do
      if tonumber(u.cid) == tonumber(pCid) then
        return u.role or nil
      end
    end
  end)
  
  RPC.register("np-business:GetRolePermission", function(pSource, pBusinessId, pRole)
    local data = Await(SQL.execute([[
          SELECT *
          FROM businesses
          WHERE business_id = ?
      ]],
      { pBusinessId }))
  
    local roles = json.decode(data[1].roles) or {}
    for i, u in pairs(roles) do
      if tostring(u.name) == tostring(pRole) then
        return u.role_manage, u.role_create, u.can_hire, u.can_fire, u.bank_access, u.charge_access, u.key_access, u.stash_access, u.craft_access
      end
    end
  end)
  
  RPC.register("np-business:getBizBank", function(pSource, pBusinessId)
    local data = Await(SQL.execute([[
          SELECT *
          FROM businesses
          WHERE business_id = ?
      ]],
      { pBusinessId }))
  
    return data[1].bank
  end)
  
  RPC.register("np-business:role:test", function(pSource, pData)
    --[[     roles = {}
  
      tbl = {
          name = "Owner",
          charge_access = true,
          bank_access = true,
          role_manage = true,
          role_create = true,
          key_access = true,
          stash_access = true,
          craft_access = true,
          can_hire = true,
          can_fire = true,
      }
  
      table.insert(roles, tbl)
  
      tbl2 = {
          name = "Employee",
          charge_access = false,
          bank_access = false,
          role_manage = false,
          role_create = false,
          key_access = true,
          stash_access = false,
          craft_access = true,
          can_hire = false,
          can_fire = false,
      }
  
      table.insert(roles, tbl2) ]]
    employees = {}
  
    tbl = {
      cid = 2,
      role = "Owner",
      rank = 5
    }
  
    table.insert(employees, tbl)
  
    local data = Await(SQL.execute("UPDATE businesses SET employees = @employees WHERE business_id = @business_id", {
      ["employees"] = json.encode(employees),
      ["business_id"] = "burger_shot"
    }))
  
  
    return true
  end)
  
  RPC.register("np-business:hasGarageAccess", function(pSource, pCid, pBusinessId)
    if IsEmployedAt(pSource, pCid, pBusinessId) then
      return true
    end
  
    return false
  end)
  
  RPC.register("np-business:charge", function(pSource, pBusinessId, pCid, pCharger, pAmount, pComment)
    TriggerClientEvent("showPaymentNotify", -1, pBusinessId, pCid, pCharger, pAmount, pComment)
  end)
  
  local random = math.random
  local function uuid()
    local template = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    return string.gsub(template, '[xy]', function(c)
      local v = (c == 'x') and random(0, 0xf) or random(8, 0xb)
      return string.format('%x', v)
    end)
  end
  
  RPC.register("chargeCustomer", function(pSource, pBusinessId, pCid, pComment, pCharger, pAmount, pSrc, pDate)
    local user = exports["np-base"]:getModule("Player"):GetUser(tonumber(pSrc))
    if not user then return false end
  
    local char = user:getCurrentCharacter()
    local BizAccountId = exports["np-business"]:GetBizBank(pBusinessId)
    local AccountId = user:getBankId()
    local result = exports["financials"]:DoBusinessTransaction(pSource, AccountId, BizAccountId, tonumber(pAmount), "Services", pComment, pCid, pSource, "purchase")
    local bank = exports["financials"]:getAccountBalance(AccountId)
  
    if bank >= tonumber(pAmount) then
      if not result then
        TriggerClientEvent("DoLongHudText", pSrc, result, 2)
      else
        return TriggerClientEvent("showPaymentReceivedNotify", -1, pCharger)
      end
    else
      TriggerClientEvent("DoLongHudText", pSrc, "The purchase has been failed. (Not enough cash)", 2)
      TriggerClientEvent("DoLongHudText", pSource, "The purchase has been failed. (Not enough cash)", 2)
      return false
    end
  end)
  
  RPC.register("np-business:transferBank", function(pSource, pBusinessId, pAmount)
    local update = Await(SQL.execute([[
          UPDATE businesses
          SET bank = bank + @amount
          WHERE business_id = ?
      ]],
      { tonumber(pAmount), pBusinessId }))
  
    if not update then return false end
  
    return true
  end)
  
RPC.register("np-business:CreateNewBiz", function(pSource, pCid, pBusinessId, pBusinessName)
  local user = exports["np-base"]:getModule("Player"):GetUser(pSource)
  local rank = user:getRank()
  if rank ~= "dev" then return print("np-buisness | rank is low") end

  local roles = {
    {
      name = "Owner",
      charge_access = true,
      bank_access = true,
      role_manage = true,
      role_create = true,
      key_access = true,
      stash_access = true,
      craft_access = true,
      can_hire = true,
      can_fire = true,
    },
    {
      name = "Employee",
      charge_access = false,
      bank_access = false,
      role_manage = false,
      role_create = false,
      key_access = true,
      stash_access = true,
      craft_access = false,
      can_hire = false,
      can_fire = false,
    }
  }

  local employees = {
    {
      cid = pCid,
      role = "Owner",
      rank = 5
    }
  }

  local bankid = exports["financials"]:BankAccountCreation(pCid, pBusinessName, 4, 0, 1, false, false, 1, true)

  local insertId = Await(SQL.insert([[
        INSERT INTO businesses (business_id, business_name, employees, roles, bank_id)
        VALUES (?, ?, ?, ?, ?)
    ]], { pBusinessId, pBusinessName, json.encode(employees), json.encode(roles), bankid }))

  if not insertId or insertId < 1 then
    TriggerClientEvent('DoLongHudText', src, 'Error while trying to create business.', 2)
    return false
  end
  TriggerClientEvent('DoLongHudText', src, 'Successfully created business!', 1)
end)
  
RPC.register("GetBusinesses", function(pSource)
  return GetBusinesses(pSource)
end)

function GetBusinesses(src)
  local query = [[ SELECT * FROM businesses ]]
  local data = Await(SQL.execute(query))

  if not data then return false, {} end

  return data
end
  
function GetBusinessOwner(pBusinessId)
  local data = Await(SQL.execute([[
        SELECT *
        FROM businesses
        WHERE business_id = ? AND role = ?
    ]], { pBusinessId, "Owner" }))

  return data[1]
end
  
function GetPermissions(biz, pCid, pRole)
  local data = Await(SQL.execute([[
        SELECT *
        FROM businesses
        WHERE business_id = ?
    ]], { biz }))

  if not data[1] then return false end

  -- (existing logic for permissions)
end
  
  function GetBusinessId(src, cid)
    local biz = GetBusinesses(src)
    local temp = {}
  
    if not biz then return false end
    for k, v in ipairs(biz) do
      local employeeList = json.decode(v.employees)
      if employeeList ~= nil then
        for s, x in pairs(employeeList) do
          if tonumber(x.cid) == tonumber(cid) then
            temp[#temp + 1] = v.business_id
          end
        end
      end
    end
  
    return temp
  end
  
  function IsEmployedAt(src, cid, biz)
    local bId = ""
  
    if not biz then
      bId = GetBusinessId(src, cid)
    else
      bId = biz
    end
  
    local data = Await(SQL.execute([[
          SELECT *
          FROM businesses
          WHERE business_id = ?
      ]], { bId }))
  
    if not data[1] then return false end
  
    local employees = json.decode(data[1].employees) or {}
    for i, u in pairs(employees) do
      if tonumber(u.cid) == tonumber(cid) then
        return true
      end
    end
  
    return false
  end
  
  function GetBizBank(bizId)
    local data = Await(SQL.execute([[
          SELECT bank_id
          FROM businesses
          WHERE business_id = ?
      ]],
      { bizId }))
  
    return data
  end
  
  function GetBizName(bizId)
    local data = Await(SQL.execute([[
          SELECT business_name
          FROM businesses
          WHERE business_id = ?
      ]],
      { bizId }))
  
    return data
  end
  
  function GetPLayerName(cid)
    local name = "Invalid Employee"
    local data = Await(SQL.execute([[
          SELECT *
          FROM characters
          WHERE id = ?
      ]], { cid }))
  
    if not data[1] then return false end
  
    name = data[1].first_name .. " " .. data[1].last_name
  
    return name
  end
  
  function IsEmployedAtBusiness(src, pData)
    if not pData then return false end
  
    local getData = Await(SQL.execute([[
          SELECT *
          FROM businesses
          WHERE business_id = ?
      ]], { pData.business.id }))
  
    if not getData[1] then return false end
  
    local employees = json.decode(getData[1].employees) or {}
    for i, u in pairs(employees) do
      if tonumber(u.cid) == tonumber(pData.character.id) then
        return true
      end
    end
  
    return false
  end
  
  function getEmployeeRole(pBusinessId, pCid)
    local data = Await(SQL.execute([[
          SELECT *
          FROM businesses
          WHERE business_id = ?
      ]],
      { pBusinessId }))
  
    local employees = json.decode(data[1].employees) or {}
    for i, u in pairs(employees) do
      if tonumber(u.cid) == tonumber(pCid) then
        return u.role or nil
      end
    end
  end
  
  --[[
      Exports
  ]]
  exports("GetBusinessId", GetBusinessId)
  exports("GetBusinesses", GetBusinesses)
  exports("GetBizName", GetBizName)
  exports("IsEmployedAt", IsEmployedAt)
  exports("IsEmployedAtBusiness", IsEmployedAtBusiness)
  exports("GetBizBank", GetBizBank)
  exports("getEmployeeRole", getEmployeeRole)
  