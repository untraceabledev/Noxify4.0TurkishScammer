-- Config
Default = {}
Default.Database = {}

Default.BankAccountType = 1
Default.VenmoLimit = 50

Default.StateAccountId = 1
Default.MayorAccountId = 2
Default.DOJAccountId = 3

Default.JobMapping = {
    ["mayor"] = Default.MayorAccountId,
    ["judge"] = Default.DOJAccountId
}

Default.Database.Schemas = {
    {
        name = "account_type",
        rows = {
            {
                ["id"] = 1, ["name"] = "Default", ["public_permission"] = 0
            },
            {
                ["id"] = 2, ["name"] = "Savings Account", ["public_permission"] = 1
            },
            {
                ["id"] = 3, ["name"] = "State Account", ["public_permission"] = 0
            },
            {
                ["id"] = 4, ["name"] = "Business Account", ["public_permission"] = 0
            },
            {
                ["id"] = 5, ["name"] = "State Entity Account", ["public_permission"] = 0
            }
        }
    },
    {
        name = "tax_category",
        rows = {
            {
                ["id"] = 1,
                ["name"] = "No Tax"
            },
            {
                ["id"] = 2,
                ["name"] = "Services"
            },
            {
                ["id"] = 3,
                ["name"] = "Vehicle Sales"
            },
            {
                ["id"] = 4,
                ["name"] = "Goods"
            },
            {
                ["id"] = 5,
                ["name"] = "Gas"
            },
            {
                ["id"] = 6,
                ["name"] = "Personal Income"
            },
            {
                ["id"] = 7,
                ["name"] = "Vehicle Registration Tax"
            },
            {
                ["id"] = 8,
                ["name"] = "Property Tax"
            }
        }
    },
    {
        name = "tax_level",
        rows = {
            {
                ["tax_category_id"] = 1,
                ["tax_level"] = 0,
                ["is_editable"] = 0
            },
            {
                ["tax_category_id"] = 2,
                ["tax_level"] = 15,
                ["is_editable"] = 1
            },
            {
                ["tax_category_id"] = 3,
                ["tax_level"] = 15,
                ["is_editable"] = 1
            },
            {
                ["tax_category_id"] = 4,
                ["tax_level"] = 15,
                ["is_editable"] = 1
            },
            {
                ["tax_category_id"] = 5,
                ["tax_level"] = 15,
                ["is_editable"] = 1
            },
            {
                ["tax_category_id"] = 6,
                ["tax_level"] = 20,
                ["is_editable"] = 1
            },
            {
                ["tax_category_id"] = 7,
                ["tax_level"] = 20,
                ["is_editable"] = 1
            },
            {
                ["tax_category_id"] = 8,
                ["tax_level"] = 20,
                ["is_editable"] = 1
            }
        }
    },
    {
        name = "account",
        rows = {
            {
                ["id"] = Default.StateAccountId, ["name"] = "State Account", ["account_balance"] = 1000000, ["account_type"] = 3,
            },
            {
                ["id"] = Default.MayorAccountId, ["name"] = "Mayor Account", ["account_balance"] = 20000, ["account_type"] = 3
            },
            {
                ["id"] = Default.DOJAccountId, ["name"] = "DOJ Account", ["account_balance"] = 50000, ["account_type"] = 3
            }
        }
    }
}
