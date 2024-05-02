const InitialData = {
    ["stations"]: {
        [1]: {
            ["radioNameHash"]: "RADIO_NIKEZ_RAP", // hash
            ["name"]: "name", // string
        },
        [2]: {
            ["radioNameHash"]: "RADIO_NIKEZ_ELECTRONIC", // hash
            ["name"]: "name", // string
        },
        [3]: {
            ["radioNameHash"]: "RADIO_NIKEZ_POP", // hash
            ["name"]: "name", // string
        },
        [4]: {
            ["radioNameHash"]: "RADIO_NIKEZ_MIX", // hash
            ["name"]: "name", // string
        },
        [5]: {
            ["radioNameHash"]: "RADIO_NIKEZ_ALTERNATIVE", // hash
            ["name"]: "name", // string
        },
        [6]: {
            ["radioNameHash"]: "RADIO_NIKEZ_ROCK", // hash
            ["name"]: "name", // string
        },
        [7]: {
            ["radioNameHash"]: "RADIO_NIKEZ_RAP", // hash
            ["name"]: "name", // string
        },
        [8]: {
            ["radioNameHash"]: "RADIO_NIKEZ_RAP", // hash
            ["name"]: "name", // string
        },
        [9]: {
            ["radioNameHash"]: "RADIO_NIKEZ_RAP", // hash
            ["name"]: "name", // string
        },
        [10]: {
            ["radioNameHash"]: "RADIO_NIKEZ_RAP", // hash
            ["name"]: "name", // string
        },
        [11]: {
            ["radioNameHash"]: "RADIO_NIKEZ_RAP", // hash
            ["name"]: "name", // string
        },
        [12]: {
            ["radioNameHash"]: "RADIO_NIKEZ_RAP", // hash
            ["name"]: "name", // string
        },
        [13]: {
            ["radioNameHash"]: "RADIO_NIKEZ_RAP", // hash
            ["name"]: "name", // string
        },
    },
    ["tracks"]: {
        [1]: {
            ["artistNameHash"]: "name", // hash
            ["artistName"]: "name", // string
            ["trackNameHash"]: "name", // hash
            ["trackName"]: "name", // string
        },
    },
}

isOn = true

onNet("nikez-radio:changeStation", async (zoneName, stationId) => {
    emitNet("nikez-radio:changeStation", -1, zoneName, stationId)
})

onNet("nikez-radio:togglePower", async (zoneName) => {
    isOn = !isOn
    emitNet("nikez-radio:togglePower", -1, zoneName, isOn)
})

NPX.Procedures.register("nikez-radio:getInitialData", async () => {
    return InitialData
})

NPX.Procedures.register("nikez-radio:getZoneStates", async () => {
    const simulatedData = [
        { zoneName: "tunershop", isOn: true, currentStation: "RADIO_NIKEZ_RAP" },
        { zoneName: "harmony", isOn: false, currentStation: "RADIO_NIKEZ_MIX" },
        { zoneName: "ironhog", isOn: false, currentStation: "RADIO_NIKEZ_ELECTRONIC" },
        { zoneName: "uwucafe", isOn: false, currentStation: "RADIO_NIKEZ_POP" },
        { zoneName: "pawnhub", isOn: false, currentStation: "RADIO_NIKEZ_ELECTRONIC" },
        { zoneName: "driftschool", isOn: false, currentStation: "RADIO_NIKEZ_ALTERNATIVE" },
        { zoneName: "ottosmechanic", isOn: false, currentStation: "RADIO_NIKEZ_ELECTRONIC" },
        { zoneName: "paleto", isOn: false, currentStation: "RADIO_NIKEZ_ELECTRONIC" },
        { zoneName: "splitsides", isOn: true, currentStation: "RADIO_NIKEZ_RAP" },
        { zoneName: "nmansion_beach", isOn: false, currentStation: "RADIO_NIKEZ_ELECTRONIC" },
        { zoneName: "prison", isOn: false, currentStation: "RADIO_NIKEZ_RAP" },
        // ...
    ];

    // Simüle edilen veriyi bir değişkene ekleyip döndür
    const zoneStates = simulatedData;

    return zoneStates;
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