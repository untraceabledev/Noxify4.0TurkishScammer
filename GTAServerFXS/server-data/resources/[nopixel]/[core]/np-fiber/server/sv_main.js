NPX.Procedures.register("np:fiber:player:init", function () {
  return {
    token: "npx123hawk4984316",
    rest_api: "https://api.nopixel.net/ui",
    socket_api: "https://socket.nopixel.net/ui",
    server_hash: "haw1k3c3d4e7f99",
  };
});

NPX.Procedures.register("np-fiber:verify:userRank", function (pSrc, pRank) {
  let rank = exports['np-lib'].getUserRank(pSrc)

  if (rank == pRank) {
    return true
  } else {
    return false
  }
});