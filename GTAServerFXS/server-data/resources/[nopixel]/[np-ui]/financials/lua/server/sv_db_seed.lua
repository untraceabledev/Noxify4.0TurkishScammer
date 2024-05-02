local function seed()
    for _, databaseSchema in pairs(Default.Database.Schema) do
        for _, row in pairs(databaseSchema.rows) do
            local insertedData = Await(SQL.dynamicInsert(databaseSchema.name, row, true))
        end
    end
    if Default.Database.Queries then
        for _, query in pairs(Default.Database.Queries) do
            Await(SQL.execute(query))
        end
    end
    print(("[%s] Initial seeding done."):format(GetCurrentResourceName()))
end

RegisterCommand(("db:seed:%s"):format(GetCurrentResourceName()), function(src, args)
    if src ~= 0 then return end
    seed()
end, false)

AddEventHandler(("db:seed:%s"):format(GetCurrentResourceName()), function()
    if src ~= 0 and src ~= nil then return end
    seed()
end)

TriggerEvent("db:seed:register", GetCurrentResourceName())
