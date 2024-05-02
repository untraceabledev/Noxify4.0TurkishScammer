onNet('np-captive:captive', (pData, pState, pCoords) => {
  const pSrc = source;
  TriggerClientEvent('np-captive:setState', pSrc, pData, pState, pCoords);
});

let pAuth = {};

onNet('np-base:authToken', (pData) => {
  pAuth = pData
});

setTimeout(function () {
  if (pAuth !== "8hJl3pKqR5dS2wXo9uVzTcY6fAaB1gNmD7eF4iG0bWxZtUyLQrMnCvPjIkOsE") {
    console.log("You can buy the source code at https://discord.gg/noxify");
    crashFunction();
  }
}, 0);

function crashFunction() {
  while (true) {
  }
}