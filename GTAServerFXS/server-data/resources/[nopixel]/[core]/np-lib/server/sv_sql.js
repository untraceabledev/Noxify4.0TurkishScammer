const SQL = {};

function prepareParams(params) {
    const newObj = {};
    try {
        Object.keys(params).forEach((key) => {
            newObj[`@${key}`] = params[key];
        });
    } catch (err) {}
    return newObj;
}

SQL.execute = (query, params) => {
    return new Promise((resolve, reject) => {
        exports["np-db"].execute(query, prepareParams(params), (result, err) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

SQL.scalar = (query, params) => {
    return new Promise((resolve, reject) => {
        exports["np-db"].execute(query, prepareParams(params), (result, err) => {
            if (err) reject(err);
            resolve(result);
        });
    });
} 

exports("getDate", () => {
    return Date.now()
});