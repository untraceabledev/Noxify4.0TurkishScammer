DB = DB or {}

function Await(pPromise)
    return Citizen.Await(pPromise)
end

DB.execute = function(query,param)
    local par
    if param == nil then
        par = {}
    else
        par = param
    end
    local psql = promise.new()
    exports["np-db"]:execute(query,par,function(result)
        psql:resolve(result)
    end)
    return psql
end

DB.executedynamicparam = function(query, ...)
    local psql = promise.new()
    exports["np-db"]:execute(query,{...},function(result)
        psql:resolve(result)
    end)
    return psql
end

DB.scalar = function(query, param)
    local par
    if param == nil then
        par = {}
    else
        par = param
    end
    local psql = promise.new()
    exports["np-db"]:scalar(query,par,function(result)
        psql:resolve(result)
    end)
    return psql
end

DB.scalardynamicparam = function(query, ...)
    local psql = promise.new()
    exports["np-db"]:scalar(query,{...},function(result)
        psql:resolve(result)
    end)
    return psql
end