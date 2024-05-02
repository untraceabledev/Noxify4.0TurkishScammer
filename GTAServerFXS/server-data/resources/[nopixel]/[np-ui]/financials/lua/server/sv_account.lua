-- @param serverId The server id.
-- serverId: int

-- returns
-- characterid: int
function getCharacterId(serverId)
    local user = exports["np-base"]:getModule("Player"):GetUser(serverId)
    local cid = user:getCurrentCharacter().id

    if not cid then
        return false, "Couldn't find a character"
    end

    return true, cid
end

-- @params
-- serverId: int

-- returns
-- characterJob: string
function getCharacterJob(serverId)
    local user = exports["np-base"]:getModule("Player"):GetUser(serverId)
    local job = user:getVar("job")

    if not user then
        return false, "Couldn't find a job or a character"
    end

    return true, job
end

-- @params
-- pPhoneNumber: any

-- returns
-- characterId: int
function getCharacterIdByPhoneNumber(pPhoneNumber)
    if not pPhoneNumber then return false, "Phone number required." end

    local characterId = Await(SQL.execute([[
        SELECT cid
        FROM characters
        WHERE phone_number = ? AND is_burner = false
    ]], {pPhoneNumber}))

    return character ~= nil and true or false, characterId or 'No phone number'
end

-- TODO: Load/Ensure certain accounts exist and have an enum to store known accountTypes
function getDefaultBankAccount(pCharacterId, singleReturn, pIgnoreFrozenCheck)
    local query = [[
        SELECT `account_id`, IFNULL(a.is_frozen, 0) as 'is_frozen'
        FROM `account_access` aa
        INNER JOIN `account` a on a.id = aa.`account_id`
        WHERE character_id = ? and a.account_type = ?
    ]]

    local result = Await(SQL.execute(query, pCharacterId, Default.BankAccountType))

    local account = result[1]

    if account == nil then
        if singleReturn then
            return "Account does not exist"
        else
            return false, "Account does not exist"
        end
    end

    if not pIgnoreFrozenCheck and account.account_id ~= nil and account.is_frozen == 1 then
        if singleReturn then
            return "Account is frozen"
        else
            return false, "Account is frozen"
        end
    end

    if singleReturn then
        return account.account_id
    else
        return true, account.account_id
    end
end

function generateAccountId(type)
    for i = 1, 100 do
        local accountId = tonumber(6 .. type .. math.random(100000, 999999))

        local exist = Await(SQL.execute([[
            SELECT *
            FROM account_access
            WHERE account_id = ?
        ]],
        { accountId }))

        if not next(exist) then
            return accountId
        end

        Citizen.Wait(100)
    end

    return false
end


function getAccountId(pTarget, pAccountType)
    local user = exports["np-base"]:getModule("Player"):GetUser(tonumber(pTarget))
    local characterId = user:getCurrentCharacter().id

    local accountId = Await(SQL.execute([[
        SELECT account_id
        FROM account_access
        WHERE character_id = ?
    ]], { characterId }))
    -- { characterId, (not pAccountType and 1 or pAccountType) })
    return accountId
end

function getAccountTypes()
    local query = [[
        SELECT `id`, `name`, `public_permission` as public FROM account_type
    ]]
    return true, Await(SQL.execute(query))
end

function getAccounts(pAccountId, pCharacterId, pAccountName, pJob)
    local query = [[
            SELECT a.id as 'id', a.name, at.name as 'type', at.id as 'type_id', a.`account_balance` AS balance, access_level as 'access', c.first_name as 'owner_first_name', c.last_name as 'owner_last_name', is_owner, is_frozen, is_monitored
            FROM account_access aa
            INNER JOIN account a ON a.id = aa.account_id
            INNER JOIN account_type at ON at.id = a.account_type
            INNER JOIN characters c ON c.id = (SELECT character_id FROM account_access aa2 WHERE aa.account_id = aa2.account_id)
            WHERE a.id = ? or character_id = ? or (a.name LIKE ? and at.id = 2)
        UNION
            SELECT a.id as 'id', a.name, at.name as 'type', at.id as 'type_id', a.`account_balance` AS balance, 28 as 'access', c.first_name as 'owner_first_name', c.last_name as 'owner_last_name', 0 as 'is_owner', 0 as 'is_frozen', 0 as 'is_monitored'
            FROM account a
            INNER JOIN account_type at ON at.id = a.account_type
            INNER JOIN characters c ON c.id = 1
            WHERE a.id = ?
        GROUP by a.id
    ]]

    local accounts = Await(SQL.execute(query,  pAccountId or 'NULL', pCharacterId or 'NULL', not pAccountName and 'NULL' or '%' .. pAccountName .. '%', Default.JobMapping[pJob] or 'NULL'))

    if accounts then
        for idx, account in pairs(accounts) do
            accounts[idx]["access"] = buildPermissions(account.access, account.is_frozen, account.is_owner)
        end
    end

    Wait(100)

    return accounts
end

function getCharactersWithAccess(pAccountId)
    local query = [[
        SELECT c.id, CONCAT(c.first_name, ' ', c.last_name) as 'name', aa.access_level as 'access', aa.is_owner
        FROM account_access aa
        INNER JOIN characters c ON c.id = aa.character_id
        WHERE account_id = ?
    ]]

    local accounts = Await(SQL.execute(query, pAccountId))
    for _, account in pairs(accounts) do
        account.access = buildPermissions(account.access, false, account.is_owner)
    end
    return accounts
end

function checkAccountExist(pAccountId, pIgnoreFrozenCheck)
    local query = "SELECT count(id) as 'exists', IFNULL(is_frozen, 0) as 'is_frozen' FROM account WHERE id = ?"

    local result = Await(SQL.execute(query, pAccountId))

    local account = result[1]
    if account == nil then return false, "Something went wrong" end
    if not pIgnoreFrozenCheck and account.exists == 1 and account.is_frozen == 1 then return false, "Account is frozen" end

    return account.exists == 1, account.exists == 1 and "Account exist" or "Account does not exist"
end

function getAccountBalance(pAccountId)
    if not pAccountId then return false, "Account id required." end

    local query = [[
        SELECT `account_balance` FROM `account` a
        WHERE id = ?
    ]]

    local accountBalance = Await(SQL.execute(query, pAccountId))

    return accountBalance ~= nil and true or false, accountBalance[1].account_balance or 0
end

function getCharacterCasinoBalance(pCharacterId)
    local accountBalance = Await(SQL.execute([[
        SELECT casino_chip_count
        FROM characters
        WHERE id = ?
    ]], { pCharacterId }))

    return accountBalance or 0
end

function adjustAccountBalance(pAccount, pAction, pAmount)
    local query = "UPDATE account SET account_balance = account_balance %s ? WHERE id = ?"

    if pAmount < 0 then
        return false
    end

    local operator = ""

    if pAction == "increase" or pAction == "add" then
        operator = "+"
    elseif pAction == "reduce" or pAction == "remove" then
        operator = "-"
    end

    query = (query):format(operator)

    local pResult = Await(SQL.execute(query, pAmount, pAccount))
    
    if pResult.affectedRows > 0 then
        return true
    else
        return false
    end
end

function createNewAccount(pCharacterId, accountName, accountType, accountBalance, pAccess, pAccountIsFrozen, pAccountIsMonitored, pIsOwner, pReturnAccountId)
    if not pCharacterId then return false, "Citizen ID needs to be specified" end

    local createAccountQ = "INSERT INTO account(`id`, `name`, `account_type`, `account_balance`, `is_frozen`, `is_monitored`) VALUES(?, ?, ?, ?, ?, ?)"
    local createAccountAccessQ = "INSERT INTO account_access(`account_id`, `character_id`, `access_level`, `is_owner`) VALUES(?, ?, ?, ?)"

    local accountId = generateAccountId(accountType)
    local accountData = Await(SQL.execute(createAccountQ, accountId, accountName, accountType, accountBalance, pAccountIsFrozen, pAccountIsMonitored))

    if not accountId then return false, "Failed to create account" end
    local accessData = Await(SQL.execute(createAccountAccessQ, accountId, pCharacterId, pAccess, pIsOwner))  
    exports["np-db"]:execute("UPDATE characters SET `bankid` = ? WHERE `id` = ?", {accountId, pCharacterId})
    if (pReturnAccountId) then 
        return accountId 
    end
end

function editCharacterPermission(pAccountId, pCharacterId, pAccess)
    local query = [[
        UPDATE account_access SET access_level = ? WHERE account_id = ?  AND character_id = ?;
    ]]

    local editAccount = Await(SQL.execute(query, pAccess, pAccountId, pCharacterId))
    if editAccount and editAccount.affectedRows > 0 then
        return true
    end
    return false, "Couldn't edit persons access."
end

function removeCharacterFromAccount(pAccountId, pCharacterId)
    local query = "DELETE FROM account_access WHERE account_id = ? and character_id = ?"

    local removeAccount = Await(SQL.execute(query, pAccountId, pCharacterId))
    if removeAccount and removeAccount.affectedRows > 0 then
        return true
    end

    return false, "Couldn't remove persons access from the account."
end

exports("getAccountBalance", function(pAccountId)
    local success, balance = getAccountBalance(pAccountId)
    return success and balance or 0
end)

exports("BankAccountCreation", createNewAccount)
exports("getAccountId", getAccountId)
exports("checkAccountExist", checkAccountExist)
exports("CasinoBalance", getCharacterCasinoBalance)
exports("adjustAccountBalance", adjustAccountBalance)
exports("getDefaultBankAccount", getDefaultBankAccount)
