local VenmoTransactions = {}

function isTransactionValid(pAccount, pTargetAccount, pAmount)
    local pAccountExist, pReasonExists = checkAccountExist(pAccount)

    if tonumber(pAmount) < 0 then
        return false, "Amount must be positive"
    end

    if tonumber(pAmount) > 9999999 then
        return false, "Amount can't be more than $9,999,999.00"
    end

    if not pAccountExist then
        return false, pReasonExists
    end

    local pTargetAccountExist, pTargetReasonExists = checkAccountExist(pTargetAccount)

    if not pTargetReasonExists then
        return false, pTargetReasonExists
    end

    local success, accountBalance = getAccountBalance(pAccount)

    if not success then
        return false, "Account does not exist or has no transactions"
    end

    if pAccount == 1 then
        return true
    end

    local hasEnoughBalance = (accountBalance - tonumber(pAmount)) >= 0

    if not hasEnoughBalance then
        return false, ("Not enough money, you only have $%s"):format(accountBalance)
    end

    return true
end

function addTransactionLog(pSourceAccountId, pTargetAccountId, pAmount, pComment, pTaxCategory, pSourceId, pTransactionType)
    local taxLevel = (type(pTaxCategory) == "number" and getTaxLevelById(pTaxCategory)) or (type(pTaxCategory) == "string" and getTaxLevelByName(pTaxCategory))
    local taxCategoryId = (type(pTaxCategory) == "number" and pTaxCategory) or getTaxCategoryIdByName(pTaxCategory)
    local query = [[
        INSERT INTO transaction_log (transaction_id, payee_account_id, receiver_account_id, transaction_log.change, comment, triggered_by, tax_level, tax_category, transaction_type, updated_at)
        VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ]]

    local pResult = Await(SQL.execute(query, uuid(), pSourceAccountId, pTargetAccountId, pAmount, pComment, pSourceId, taxLevel, taxCategoryId, pTransactionType, os.time()))

    return pResult and pResult.affectedRows > 0
end

function doTransAction(pSourceAccountId, pTargetAccountId, pAmount, pComment, pTaxCategory, pSourceId, pTransactionType)
    local pLogSuccess = addTransactionLog(pSourceAccountId, pTargetAccountId, pAmount, pComment, pTaxCategory, pSourceId, pTransactionType)

    if not pLogSuccess then
        return false, "Couldn't insert the transaction into the logs."
    end

    local pSourceBalanceChanged = adjustAccountBalance(pSourceAccountId, "reduce", pAmount)

    if not pSourceBalanceChanged then
        return false, "Couldn't update the source account balance."
    end

    local pTargetBalanceChanged = adjustAccountBalance(pTargetAccountId, "increase", pAmount)

    if not pTargetBalanceChanged then
        return false, "Couldn't update the target account balance."
    end

    return true
end

function prepareTransaction(src, pSourceAccountId, pTargetAccountId, pAmount, pComment, pTaxCategory, pTransactionType)
    local sourceAccount = -1

    -- TODO: Add check for AccountType (if exists)
    if (type(pTaxCategory) == "number" and not getTaxLevelById(pTaxCategory)) or (type(pTaxCategory) == "string" and not getTaxLevelByName(pTaxCategory)) then
        return false, "Could not find a tax category."
    end

    if tonumber(pSourceAccountId) == tonumber(pTargetBalanceChanged) and pTransactionType ~= "withdraw" then
        return false, "You can't transfer money to the same account"
    end

    local isValid, message = isTransactionValid(pSourceAccountId, pTargetAccountId, pAmount)

    if not isValid then
        return false, message
    end

    local pTransaction, pReason = doTransAction(pSourceAccountId, pTargetAccountId, pAmount, pComment, pTaxCategory, src, pTransactionType)

    if pTransaction then
        return true, "Transaction completed"
    else
        return false, pReason
    end
end

RPC.register("DoTransaction", function(src, pSourceAccountId, pTargetAccountId, pAmount, pComment, pTaxCategory, pTransactionType)
    return prepareTransaction(src, pSourceAccountId, pTargetAccountId, pAmount, pComment, pTaxCategory, pTransactionType)
end)

function getTransactions(pSourceAccountId, pTransactionType, pStartDate, pEndDate)
    local query = [[
        SELECT `transaction_id` AS 'id',
        comment,
        transaction_type as 'type',
        IF(payee_account_id != ? or transaction_type = 'deposit', 'in', 'out') as 'direction',
        payee_account_id as 'from_account_id',
        IF(transaction_type = 'payslip', 'Government Pay', CONCAT(c.first_name, ' ', c.last_name)) as 'from_civ_name',
        acc.name AS 'from_account_name',
        receiver_account_id as 'to_account_id',
        CONCAT(c.first_name, ' ', c.last_name) as 'to_civ_name',
        acc2.name AS 'to_account_name',
        receiver_account_id as 'to_account_id',
        `change` as 'amount',
        updated_at as 'date',
        tax_level as 'tax_percentage'
        FROM transaction_log
        LEFT JOIN account_access a ON transaction_log.receiver_account_id = a.account_id
        LEFT JOIN account_access a2 ON transaction_log.payee_account_id = a2.account_id
        LEFT JOIN account acc ON acc.id = a2.account_id
        LEFT JOIN account acc2 ON acc2.id = a.account_id
        LEFT JOIN characters c ON a.character_id = c.id
        WHERE (payee_account_id = ? or receiver_account_id = ?)
        AND updated_at > ? AND updated_at < ?
    ]]

    if pTransactionType then
        query = query .. [[
            AND transaction_type = ?
        ]]
    end

    query = query .. [[
        GROUP BY transaction_id
        ORDER BY updated_at desc
        LIMIT 0, 50
    ]]

    local pResult = Await(SQL.execute(query, pSourceAccountId, pSourceAccountId, pSourceAccountId, pStartDate, pEndDate, pTransactionType))

    return pResult
end

function bankDeposit(src, pTargetAccountId, pAmount, pComment)
    local isValid, isValidReason = checkAccountExist(pTargetAccountId)

    if not isValid then
        return false, isValidReason
    end

    local user = exports["np-base"]:getModule("Player"):GetUser(src)
    local char = user:getCurrentCharacter()
    local cash = user:getCash()
    
    if (cash - pAmount) < 0 then
        return false, ("There is not enough money, you only have $%s"):format(cash)
    end

    -- TODO: Add Transaction log

    local success = adjustAccountBalance(pTargetAccountId, "increase", pAmount)

    if success then
        user:removeMoney(tonumber(pAmount))
        local pLogSuccess = addTransactionLog(pTargetAccountId, pTargetAccountId, pAmount, pComment, 1, (char.id), "deposit")

        if not pLogSuccess then
            return false, "Couldn't insert the transaction into the logs."
        end
    end

    TriggerClientEvent("np-banking:updateBalance", src, getAccountId(src))
    TriggerClientEvent("np-base:removedMoney", src, pAmount, cash)
    return success
end

RPC.register("BankDeposit", function(src, pTargetAccountId, pAmount, pComment)
    return bankDeposit(src, pTargetAccountId, pAmount, pComment)
end)

function bankWithdraw(src, pTargetAccountId, pAmount, pComment)
    local isValid, message = isTransactionValid(pTargetAccountId, pTargetAccountId, pAmount)
    local user = exports["np-base"]:getModule("Player"):GetUser(src)
    local char = user:getCurrentCharacter()
    local getCash = user:getCash()

    if not isValid then
        return isValid, message
    end

    -- TODO: Add Transaction log

    local success = adjustAccountBalance(pTargetAccountId, "reduce", pAmount)

    if success then
        local pLogSuccess = addTransactionLog(pTargetAccountId, pTargetAccountId, pAmount, pComment, 1, (char.id), "withdraw")
        user:addMoney(tonumber(pAmount))

        if not pLogSuccess then
            return false, "Couldn't insert the transaction into the logs"
        end
    end

    TriggerClientEvent("np-banking:updateBalance", src, getAccountId(src))
    TriggerClientEvent("np-base:addedMoney", src, pAmount, getCash)
    return success
end

NPX.Procedures.register("BankWithdraw", function(src, pTargetAccountId, pAmount, pComment)
    return bankWithdraw(src, pTargetAccountId, pAmount, pComment)
end)

function getTransactionLogs(pSourceAccountId, pTransactionType, pStartDate, pEndDate)
    local startDate = pStartDate ~= nil and pStartDate or (os.time(os.date("!*t")) - (30 * 24 * 60 * 60))
    local endDate = pEndDate ~= nil and pEndDate or (os.time(os.date("!*t")) + (2 * 24 * 60 * 60))
    local pExists, pExistsReason = checkAccountExist(pSourceAccountId, true)

    if pExists ~= nil and pExist ~= false then
        return true, getTransactions(pSourceAccountId, pTransactionType, startDate, endDate)
    else
        return false, pExistsReason
    end
end

function DoVenmoTransaction(pCharacterId, pAmount)
    if pAmount >= Default.VenmoLimit then
        return false, "This exceeds the daily limit."
    end
    local venmoTxAmount = VenmoTransactions[pCharacterId]

    if not venmoTxAmount and pAmount <= Default.VenmoLimit then
        VenmoTransactions[pCharacterId] = pAmount
        return true, "Success"
    end

    if venmoTxAmount and (venmoTxAmount + pAmount) <= Default.VenmoLimit then
        VenmoTransactions[pCharacterId] = venmoTxAmount + pAmount
        return true, "Success"
    end

    return false, "This exceeds the daily limit."
end

function DoCashTransaction(pSource, pTargetAccountId, pTaxCategory, pAmount, pTransactionType, pLogType, pCallback)
    local user = exports["np-base"]:getModule("Player"):GetUser(pSource)
    local totalAmount = pAmount + taxOfSale(pAmount, pTaxCategory)

    if (user:getCash() - pAmount) < 0 then
        return false
    end

    local success = adjustAccountBalance(pTargetAccountId, "increase", totalAmount) 

    if success then
        user:removeMoney(totalAmount)
    end

    if pCallback then
        pCallback(success)
    end

    return success
end

-- pMinusAmount = import price and shit like that for business goods/transactions
function DoBusinessTransaction(pSource, pSourceAccountId, pTargetAccountId, pAmount, pTaxCategory, pComment, pSourceId, pMinusAmount, pTransactionType)
    local transactionType = "purchase"
    local taxAmount = pTaxCategory == 1 and 0 or (calculateTax(pAmount, pTaxCategory) - pAmount)
    local MinusAmount = pAmount
    local isValid, message = isTransactionValid(pSourceAccountId, pTargetAccountId, pAmount + taxAmount)

    if not isValid then
        return message
    end

    local _, sourceBalance = getAccountBalance(pSourceAccountId)
    if sourceBalance < pAmount + taxAmount then
        return false
    end

    local totalRemove = MinusAmount + taxAmount
  
    if totalRemove > 0 then
        local success = adjustAccountBalance(pSourceAccountId, "remove", totalRemove)
        if not success then
            return false
        end

        if (taxAmount > 0) then
            local addTaxToGovAccount = adjustAccountBalance(Default.StateAccountId, "add", taxAmount)
            if not addTaxToGovAccount then
                return false
            end
        end

        local addMoneyToTarget = adjustAccountBalance(pTargetAccountId, "add", totalRemove)
        if not addMoneyToTarget then
            return false
        end
    end

    local logAdded = addTransactionLog(pSourceAccountId, pTargetAccountId, pAmount, pComment, pTaxCategory, pSourceId, pTransactionType)
    if not logAdded then
        return false
    end
    return true
end

function DoPersonalIncomeTransaction(pSource, pSourceAccountId, pTargetAccountId, pAmount, pComment, pTransactionType)
    local transactionType = pTransactionType or "transfer"
    local taxCategory = "Personal Income"
    local taxAmount = calculateTax(pAmount, taxCategory) - pAmount
    local totalRemove = pAmount + taxAmount

    -- Await(SQL.execute("CALL PersonalIncome(?, ?, ?, ?, ?)"), pSourceAccountId, pTargetAccountId, pAmount, pComment, taxCategory, pSource, pTransactionType)
    if (pAmount > 0) then
        local success = adjustAccountBalance(pSourceAccountId, "remove", totalRemove)
        if not success then
            return false
        end

        if (taxAmount > 0) then
            local addTaxToGovAccount = adjustAccountBalance(Default.StateAccountId, "add", taxAmount)
            if not addTaxToGovAccount then
                return false
            end
        end

        local addMoneyToTarget = adjustAccountBalance(pTargetAccountId, "add", totalRemove)
        if not addMoneyToTarget then
            return false
        end
    end

    addTransactionLog(pSourceAccountId, pTargetAccountId, pAmount, pComment, taxCategory, pSource, pTransactionType)
    return true
end

function doStateForfeiture(pSource, pAmount)
    local validCharacter, characterId = getCharacterId(pSource)
    if not validCharacter then
        return false, "Could not get a character id"
    end

    local success, accountId = getDefaultBankAccount(characterId)

    local withdraw = adjustAccountBalance(accountId, "remove", pAmount)

    if withdraw then
        addTransactionLog(accountId, Default.StateAccountId, pAmount, "Fine", "No Tax", characterId, 'forfeiture')
    else
        return false, "Could not withdraw."
    end

    local deposit = adjustAccountBalance(Default.StateAccountId, "add", pAmount)
    if not deposit then
        return false, "Could not deposit into state account."
    end

    return true, "Successfully billed."
end

-- function undoStateForfeiture(pSource, pAmount)
--     local validCharacter, characterId = getCharacterId(pSource)
--     if not validCharacter then return false, "Could not get a character id" end

--     local withdraw = adjustAccountBalance(Default.StateAccountId, "remove", pAmount)

--     if withdraw then
--         addTransactionLog(Default.StateAccountId, accountId, pAmount, "Fine", "No Tax", characterId, 'forfeiture')
--     else
--         return false, "Could not withdraw."
--     end

--     local deposit = adjustAccountBalance(accountId, "add", pAmount)
--     if not deposit then
--         return false, "Could not deposit into state account."
--     end

--     return true, "Successfully un-billed."
-- end

function doStateGrantGetDefaultAccount(pSource, pAmount, pComment)
    local validCharacter, characterId = getCharacterId(pSource)
    if not validCharacter then
        return false, "Could not get a character id"
    end

    local success, accountId = getDefaultBankAccount(characterId)

    return doStateGrant(accountId, pAmount, pComment, Default.StateAccountId)
end

function doStateGrant(pAccountId, pAmount, pComment, pGranteeCharacterId)
    local pAccountExists, pAccountExistsReason = checkAccountExist(pAccountId)
    if not pAccountExists then
        return false, pAccountExistsReason
    end

    local withdraw = adjustAccountBalance(Default.StateAccountId, "remove", pAmount)

    if withdraw then
        addTransActionLog(Default.StateAccountId, pAccountId, pAmount, pComment, "No tax", pGranteeCharacterId or Default.StateAccountId, 'grant')
    else
        return false, "Could not withdraw from state account."
    end

    local deposit = adjustAccountBalance(pAccountId, "add", pAmount)
    if not deposit then
        return false, "Could not deposit into account."
    end

    return true, "Successfully Given State Funds."
end

exports("DoBusinessTransaction", DoBusinessTransaction)
exports("DoPersonalIncomeTransaction", DoPersonalIncomeTransaction)
exports("DoCashTransaction", DoCashTransaction)
exports("DoStateGrantGetDefaultAccount", doStateGrantGetDefaultAccount)
exports("DoStateGrant", doStateGrant)
exports("DoTransaction", function(...)
    local success, message = prepareTransaction(...)
    return {
        success = success,
        message = message
    }
end)
