function getDocumentTypes()
    local query = [[
        SELECT `id`, `name`, `editable`, `shareable`, `max_signatures` FROM document_type
    ]]
    local pResult = Await(SQL.execute(query))

    if pResult and #pResult > 0 then
        local documentTypesTable = {}

        for i, documentType in ipairs(pResult) do
            documentTypesTable[i] = {
                id = documentType.id,
                name = documentType.name,
                editable = documentType.editable,
                can_sign = documentType.can_sign,
                shareable = documentType.shareable,
                max_signatures = documentType.max_signatures,
            }
        end

        return true, documentTypesTable
    else
        return false, {}
    end
end

function createDocument(pSrc, pCharacterId, pDocumentContent, pDocumentTitle, pDocumentTypeId)
    print(pCharacterId, pDocumentContent, pDocumentTitle, pDocumentTypeId)
    local query = "INSERT INTO document(cid, content, title, type_id) VALUES(?, ?, ?, ?)"

    local insertedData = exports["np-db"]:execute(query, {pCharacterId, pDocumentContent, pDocumentTitle, pDocumentTypeId})
    return true
end

function getDocumentContent(pSource, pDocumentId)
    print("pDocumentId", pDocumentId)
    exports["np-db"]:execute('SELECT * FROM characters WHERE `cid`= ?', {cid}, function(data)
    end)
end

function getDocuments(pCharacterId, pDocumentTypeId)
    if not pCharacterId then return false, "No Character Id specified." end
    if not pDocumentTypeId then return false, "No Document Type Id specified" end

    local query = [[
        SELECT d.`id`, d.`editable`, `title`, t.`name` as 'type', type_id, a.`can_sign`, a.`signed` FROM document d
        INNER JOIN document_type t on t.id = d.type_id
        INNER JOIN document_access a ON a.`document_id` = d.`id` AND a.`character_id` = ?
        WHERE d.type = ? AND a.is_deleted = 0
    ]]
    local pResult = Await(SQL.execute(query, pCharacterId, pDocumentTypeId))

    if pResult and #pResult > 0 then
        local documentsTable = {}

        for i, document in ipairs(pResult) do
            documentsTable[i] = {
                id = document.id,
                editable = document.editable,
                title = document.title,
                type = document.type,
                type_id = document.type_id,
                can_sign = document.can_sign,
                signed = document.signed,
            }
        end

        return true, documentsTable
    else
        return false, {}
    end
end


function getDocumentContent(pDocumentId)
    if not pDocumentId then return false, "No document Id specified." end

    local query = [[
        SELECT id, title, content, type_id, editable FROM document d
        WHERE d.`id` = ?
    ]]
    local pResult = Await(SQL.execute(query, pDocumentId))

    return true, pResult
end

function signDocument(pDocumentId, pCharacterId)
    local query = [[
        UPDATE document_access SET signed = unix_timestamp() WHERE document_id = ? AND character_id = ?
    ]]

    local pResult = Await(SQL.execute(query, pDocumentId, pCharacterId))
    local success = pResult and pResult.affectedRows > 0
    return success, success and "done" or "Could not sign document"
end

function shareDocumentPermanent(pData)
    local insertedData = Await(SQL.dynamicInsert('document_access', {
        ['document_id'] = pData.document.id,
        ['character_id'] = Pdata.sharee_id,
    }))
    return true, "done"
end

function shareDocumentLocal(pTriggerSource, pId, pTypeId)
    local coords = GetEntityCoords(GetPlayerPed(pTriggerSource))
    if not coords then return false end
    exports["np-sync"]:TriggerAreaEvent("np-phone:showDocumentLocal", coords, 5.0, pTriggerSource, pId, pTypeId)
    return true
end

exports("CreateDocument", createDocument)