const pUrl = {};

NPX.Procedures.register("police:setWhiteboardUrl", function(pSource, pDepartments, pUrl) {
  emitNet('np-objects:objectUpdated', pSource, pDepartments, pUrl);
});

NPX.Procedures.register("police:toggleProjector", function(pSource, pDepartments) {
  return true
});