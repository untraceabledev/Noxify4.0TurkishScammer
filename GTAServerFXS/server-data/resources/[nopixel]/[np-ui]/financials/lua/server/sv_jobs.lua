-- TODO: Create proper accounts, replace hardcoded account values with a better solution
local jobAccounts = {
    ["unemployed"] = { id = 1, name = "Unemployed" },
    ["ems"] = { id = 1, name = "EMS" },
    ["police"] = { id = 1, name = "Police" },
    ["towtruck"] = { id = 1, name = "Towtruck" },
    ["foodtruck"] = { id = 1, name = "Foodtruck" },
    ["taxi"] = { id = 1, name = "Taxi" },
    ["entertainer"] = { id = 1, name = "Entertainer" },
    ["news"] = { id = 1, name = "News" },
    ["defender"] = { id = 1, name = "Defender" },
    ["district attorney"] = { id = 1, name = "District Attorney" },
    ["judge"] = { id = 1, name = "Judge" },
    ["broadcaster"] = { id = 1, name = "Broadcaster" },
    ["doctor"] = { id = 1, name = "Doctor" },
    ["mayor"] = { id = 1, name = "Mayor" },
    ["deputy_mayor"] = { id = 1, name = "Deputy Mayor" },
    ["county_clerk"] = { id = 1, name = "County Clerk" },
    ["doc"] = { id = 1, name = "Department of Corrections officer"},
    ["therapist"] = { id = 1, name = "Therapist" },
    ["driving instructor"] = { id = 1, name = "Driving Instructor" },
    ["foodtruckvendor"] = { id = 1, name = "Foodtruck Vendor" },
    ["fishing"] = { id = 1, name = "Fishing" },
    ["sanitation_worker"] = { id = 1, name = "Sanitation Worker" },
    ["247_deliveries"] = { id = 1, name = "24/7 Deliveries Worker" },
    ["robbery"] = { id = 1, name = "House Robbery" }, -- TODO Needs an account for server crim funds?
}

function addJobAccount(pJob, pName, pAccount)
    jobAccounts[pJob] = { id = pAccount, name = pName}
end

exports('addJobAccount', addJobAccount)

function giveJobPay(serverId, jobName, payAmount)
    if not jobAccounts[jobName] then
        return false, "Invalid Job Name"
    end

    local jobAccount = jobAccounts[jobName]
    local targetAccountId, targetCharacterId = getAccountId(serverId, 1)

    local isValid, reason = isTransactionValid(jobAccount.id, targetAccountId, payAmount)

    if not isValid then
        return isValid, reason
    end

    local transactionMessage = ("Job: %s"):format(jobAccount.name)
    local success, message = prepareTransaction(targetCharacterId, jobAccount.id, targetAccountId, payAmount, transactionMessage, 1, "payslip")

    return success, message
end

exports("giveJobPay", giveJobPay)