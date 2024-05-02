const CAR_CLASSES = [
    {
        model: "emsnexp",
        class: "A",
    },
    {
        model: "chillybin",
        class: "C",
    },
    {
        model: "npzproto",
        class: "S",
    },
    {
        model: "npmdls",
        class: "S",
    },
    {
        model: "seashark3",
        class: "D",
    },
    {
        model: "defiler",
        class: "M",
    },
    {
        model: "carbonrs",
        class: "M",
    },
    {
        model: "diablous",
        class: "M",
    },
    {
        model: "bcat",
        class: "D",
    },
    {
        model: "bfinjection",
        class: "C",
    },
    {
        model: "jb7002",
        class: "X",
    },
    {
        model: "zion2",
        class: "A",
    },
    {
        model: "tampa5",
        class: "X",
    },
    {
        model: "boss429",
        class: "X",
    },
    {
        model: "dilettante3",
        class: "D",
    },
    {
        model: "deathbike",
        class: "M",
    },
    {
        model: "fixter",
        class: "C",
    },
    {
        model: "sentinel2",
        class: "A",
    },
    {
        model: "schwarzer",
        class: "A",
    },
    {
        model: "jetmax",
        class: "D",
    },
    {
        model: "ratloader2",
        class: "B",
    },
    {
        model: "ratloader",
        class: "C",
    },
    {
        model: "tailgater",
        class: "A",
    },
    {
        model: "asbo2",
        class: "C",
    },
    {
        model: "lectro",
        class: "M",
    },
    {
        model: "faction2",
        class: "B",
    },
    {
        model: "suntrap",
        class: "D",
    },
    {
        model: "frogger",
        class: "B",
    },
    {
        model: "thrust",
        class: "M",
    },
    {
        model: "emperor2",
        class: "D",
    },
    {
        model: "banshee2",
        class: "S",
    },
    {
        model: "blazer2",
        class: "D",
    },
    {
        model: "ruffian",
        class: "M",
    },
    {
        model: "npolstang",
        class: "A",
    },
    {
        model: "rentalbus",
        class: "D",
    },
    {
        model: "tug",
        class: "D",
    },
    {
        model: "crusader",
        class: "D",
    },
    {
        model: "gargoyle",
        class: "M",
    },
    {
        model: "pcj",
        class: "M",
    },
    {
        model: "carbonizzare",
        class: "A",
    },
    {
        model: "npolvette",
        class: "S",
    },
    {
        model: "riot",
        class: "D",
    },
    {
        model: "a6",
        class: "S",
    },
    {
        model: "manchez",
        class: "M",
    },
    {
        model: "titan",
        class: "D",
    },
    {
        model: "toro2",
        class: "D",
    },
    {
        model: "avisa",
        class: "S",
    },
    {
        model: "bmx",
        class: "C",
    },
    {
        model: "rhapsody",
        class: "C",
    },
    {
        model: "faggio2",
        class: "M",
    },
    {
        model: "penumbra3",
        class: "A",
    },
    {
        model: "tractor2",
        class: "D",
    },
    {
        model: "speeder2",
        class: "D",
    },
    {
        model: "taxirooster",
        class: "C",
    },
    {
        model: "emsnspeedo",
        class: "D",
    },
    {
        model: "deluxo6str",
        class: "S",
    },
    {
        model: "tornado3",
        class: "D",
    },
    {
        model: "ucbanshee",
        class: "A",
    },
    {
        model: "innovation",
        class: "M",
    },
    {
        model: "marquis",
        class: "A",
    },
    {
        model: "bulldozer",
        class: "D",
    },
    {
        model: "npolmm",
        class: "M",
    },
    {
        model: "utillitruck2",
        class: "D",
    },
    {
        model: "ratbike",
        class: "M",
    },
    {
        model: "tornado2",
        class: "D",
    },
    {
        model: "enduro",
        class: "M",
    },
    {
        model: "ucrancher",
        class: "C",
    },
    {
        model: "npolvic",
        class: "A",
    },
    {
        model: "uccomet",
        class: "A",
    },
    {
        model: "vader",
        class: "M",
    },
    {
        model: "daemon2",
        class: "M",
    },
    {
        model: "boxville7",
        class: "D",
    },
    {
        model: "vustretch",
        class: "C",
    },
    {
        model: "buccaneer",
        class: "B",
    },
    {
        model: "moonbeam2",
        class: "C",
    },
    {
        model: "submersible2",
        class: "D",
    },
    {
        model: "tropic2",
        class: "D",
    },
    {
        model: "handler",
        class: "D",
    },
    {
        model: "npolexp",
        class: "A",
    },
    {
        model: "akuma",
        class: "M",
    },
    {
        model: "ucbuffalo",
        class: "A",
    },
    {
        model: "yosemite6str",
        class: "X",
    },
    {
        model: "double",
        class: "M",
    },
    {
        model: "dilettante2",
        class: "D",
    },
    {
        model: "ucprimo",
        class: "B",
    },
    {
        model: "utillitruck3",
        class: "D",
    },
    {
        model: "burrito3",
        class: "D",
    },
    {
        model: "npolchar",
        class: "A",
    },
    {
        model: "npoltau",
        class: "A",
    },
    {
        model: "rebel2",
        class: "B",
    },
    {
        model: "pony2",
        class: "D",
    },
    {
        model: "newsmav",
        class: "B",
    },
    {
        model: "emsv",
        class: "D",
    },
    {
        model: "mesa3",
        class: "C",
    },
    {
        model: "scorcher",
        class: "C",
    },
    {
        model: "hydra2",
        class: "D",
    },
    {
        model: "hoabrawler",
        class: "C",
    },
    {
        model: "bimx",
        class: "M",
    },
    {
        model: "peanut",
        class: "D",
    },
    {
        model: "nemesis",
        class: "M",
    },
    {
        model: "raiden",
        class: "B",
    },
    {
        model: "dubsta2",
        class: "B",
    },
    {
        model: "feltzer2",
        class: "A",
    },
    {
        model: "polas350",
        class: "B",
    },
    {
        model: "tractorc",
        class: "D",
    },
    {
        model: "cliffhanger",
        class: "M",
    },
    {
        model: "bagger",
        class: "M",
    },
    {
        model: "dump",
        class: "D",
    },
    {
        model: "hakuchou",
        class: "M",
    },
    {
        model: "emsaw139",
        class: "B",
    },
    {
        model: "sanchez2",
        class: "M",
    },
    {
        model: "novak",
        class: "B",
    },
    {
        model: "zombiea",
        class: "M",
    },
    {
        model: "zombieb",
        class: "M",
    },
    {
        model: "neon",
        class: "A",
    },
    {
        model: "ucballer",
        class: "B",
    },
    {
        model: "faggio3",
        class: "M",
    },
    {
        model: "sandking2",
        class: "C",
    },
    {
        model: "npolblazer",
        class: "D",
    },
    {
        model: "bati",
        class: "M",
    },
    {
        model: "uccoquette",
        class: "A",
    },
    {
        model: "cavalcade2",
        class: "C",
    },
    {
        model: "issi6",
        class: "A",
    },
    {
        model: "tornado4",
        class: "D",
    },
    {
        model: "volatus",
        class: "B",
    },
    {
        model: "tribike2",
        class: "C",
    },
    {
        model: "daemon",
        class: "M",
    },
    {
        model: "firetruk",
        class: "D",
    },
    {
        model: "faggio",
        class: "M",
    },
    {
        model: "terbyte",
        class: "D",
    },
    {
        model: "cavalcade",
        class: "C",
    },
    {
        model: "velum2",
        class: "D",
    },
    {
        model: "sanchez",
        class: "M",
    },
    {
        model: "draftgpr",
        class: "A",
    },
    {
        model: "ladybird6str",
        class: "S",
    },
    {
        model: "landstalker2",
        class: "B",
    },
    {
        model: "hakuchou2",
        class: "M",
    },
    {
        model: "cruiser",
        class: "C",
    },
    {
        model: "hexer",
        class: "M",
    },
    {
        model: "nightshark",
        class: "B",
    },
    {
        model: "vindicator",
        class: "M",
    },
    {
        model: "wolfsbane",
        class: "M",
    },
    {
        model: "trophytruck2",
        class: "B",
    },
    {
        model: "squalo",
        class: "D",
    },
    {
        model: "vortex",
        class: "M",
    },
    {
        model: "tractor",
        class: "D",
    },
    {
        model: "esskey",
        class: "M",
    },
    {
        model: "npolcoach",
        class: "D",
    },
    {
        model: "tribike3",
        class: "C",
    },
    {
        model: "nightblade",
        class: "M",
    },
    {
        model: "bf400",
        class: "M",
    },
    {
        model: "blazer",
        class: "D",
    },
    {
        model: "avarus",
        class: "M",
    },
    {
        model: "sovereign",
        class: "M",
    },
    {
        model: "taxi",
        class: "C",
    },
    {
        model: "cargobob2",
        class: "B",
    },
    {
        model: "fcr",
        class: "M",
    },
    {
        model: "tribike",
        class: "C",
    },
    {
        model: "btype3",
        class: "C",
    },
    {
        model: "nightshade",
        class: "B",
    },
    {
        model: "npolchal",
        class: "A",
    },
    {
        model: "ucwashington",
        class: "B",
    },
    {
        model: "buccaneer2",
        class: "B",
    },
    {
        model: "blazer4",
        class: "C",
    },
    {
        model: "surfer2",
        class: "D",
    },
    {
        model: "voltic",
        class: "B",
    },
    {
        model: "formula",
        class: "X",
    },
    {
        model: "openwheel1",
        class: "X",
    },
    {
        model: "formula2",
        class: "X",
    },
    {
        model: "s80",
        class: "X",
    },
    {
        model: "calico",
        class: "S",
    },
    {
        model: "comet6",
        class: "S",
    },
    {
        model: "cypher",
        class: "S",
    },
    {
        model: "dominator7",
        class: "S",
    },
    {
        model: "dominator8",
        class: "S",
    },
    {
        model: "euros",
        class: "S",
    },
    {
        model: "futo2",
        class: "S",
    },
    {
        model: "growler",
        class: "S",
    },
    {
        model: "jester4",
        class: "S",
    },
    {
        model: "previon",
        class: "S",
    },
    {
        model: "remus",
        class: "S",
    },
    {
        model: "rt3000",
        class: "S",
    },
    {
        model: "sultan3",
        class: "S",
    },
    {
        model: "tailgater2",
        class: "S",
    },
    {
        model: "vectre",
        class: "S",
    },
    {
        model: "warrener2",
        class: "A",
    },
    {
        model: "zr350",
        class: "S",
    },
    {
        model: "futo3",
        class: "S",
    },
    {
        model: "ruiner6str",
        class: "S",
    },
    {
        model: "sultanrsv8",
        class: "S",
    },
    {
        model: "sentinel6str",
        class: "S",
    },
    {
        model: "stratumc",
        class: "S",
    },
    {
        model: "revolution6str2",
        class: "S",
    },
    {
        model: "lp700",
        class: "S",
    },
    {
        model: "gt17",
        class: "S",
    },
    {
        model: "italirsx",
        class: "S",
    },
    {
        model: "gauntlet5",
        class: "S",
    },
    {
        model: "dukes3",
        class: "A",
    },
    {
        model: "coquette4",
        class: "S",
    },
    {
        model: "tigon",
        class: "S",
    },
    {
        model: "rmodmustang",
        class: "S",
    },
    {
        model: "ellie6str",
        class: "S",
    },
    {
        model: "gauntlet6str",
        class: "S",
    },
    {
        model: "gauntlet3",
        class: "A",
    },
    {
        model: "gauntlet4",
        class: "S",
    },
    {
        model: "hustler6str",
        class: "S",
    },
    {
        model: "schwarzer2",
        class: "S",
    },
    {
        model: "sentinel6str2",
        class: "S",
    },
    {
        model: "zr3806str",
        class: "S",
    },
    {
        model: "elegy",
        class: "S",
    },
    {
        model: "hotring",
        class: "S",
    },
    {
        model: "cheetah2",
        class: "S",
    },
    {
        model: "furia",
        class: "S",
    },
    {
        model: "italigto",
        class: "A",
    },
    {
        model: "turismo2",
        class: "A",
    },
    {
        model: "lp700r",
        class: "S",
    },
    {
        model: "gt63",
        class: "A",
    },
    {
        model: "gtrc",
        class: "S",
    },
    {
        model: "r35",
        class: "S",
    },
    {
        model: "gtr",
        class: "S",
    },
    {
        model: "fnf4r34",
        class: "S",
    },
    {
        model: "infernus2",
        class: "A",
    },
    {
        model: "torero",
        class: "A",
    },
    {
        model: "deviant",
        class: "S",
    },
    {
        model: "sultanrs",
        class: "S",
    },
    {
        model: "peyote2",
        class: "S",
    },
    {
        model: "66fastback",
        class: "S",
    },
    {
        model: "zentorno",
        class: "A",
    },
    {
        model: "adder",
        class: "A",
    },
    {
        model: "turismor",
        class: "A",
    },
    {
        model: "penumbra2",
        class: "A",
    },
    {
        model: "furoregt",
        class: "A",
    },
    {
        model: "jester",
        class: "A",
    },
    {
        model: "penumbra",
        class: "A",
    },
    {
        model: "kanjo",
        class: "A",
    },
    {
        model: "elegy2",
        class: "A",
    },
    {
        model: "z190",
        class: "A",
    },
    {
        model: "banshee",
        class: "A",
    },
    {
        model: "sentinelsg4",
        class: "A",
    },
    {
        model: "ninef",
        class: "A",
    },
    {
        model: "drafter",
        class: "A",
    },
    {
        model: "alpha",
        class: "A",
    },
    {
        model: "bestiagts",
        class: "A",
    },
    {
        model: "comet3",
        class: "A",
    },
    {
        model: "comet5",
        class: "A",
    },
    {
        model: "coquette",
        class: "A",
    },
    {
        model: "pariah",
        class: "A",
    },
    {
        model: "rapidgt",
        class: "A",
    },
    {
        model: "surano",
        class: "A",
    },
    {
        model: "cogcabrio",
        class: "A",
    },
    {
        model: "f620",
        class: "A",
    },
    {
        model: "felon2",
        class: "A",
    },
    {
        model: "zion",
        class: "A",
    },
    {
        model: "paragon",
        class: "A",
    },
    {
        model: "windsor",
        class: "A",
    },
    {
        model: "brioso",
        class: "A",
    },
    {
        model: "toros",
        class: "A",
    },
    {
        model: "primoard",
        class: "A",
    },
    {
        model: "dominator",
        class: "A",
    },
    {
        model: "gauntlet",
        class: "A",
    },
    {
        model: "dominator3",
        class: "A",
    },
    {
        model: "jester3",
        class: "A",
    },
    {
        model: "specter",
        class: "A",
    },
    {
        model: "specter2",
        class: "A",
    },
    {
        model: "ruston",
        class: "A",
    },
    {
        model: "jugular",
        class: "A",
    },
    {
        model: "lynx",
        class: "A",
    },
    {
        model: "locust",
        class: "A",
    },
    {
        model: "massacro",
        class: "A",
    },
    {
        model: "seven70",
        class: "A",
    },
    {
        model: "stafford",
        class: "A",
    },
    {
        model: "slamvan",
        class: "A",
    },
    {
        model: "yosemite",
        class: "B",
    },
    {
        model: "vamos",
        class: "B",
    },
    {
        model: "dukes",
        class: "A",
    },
    {
        model: "blade",
        class: "A",
    },
    {
        model: "tampa",
        class: "A",
    },
    {
        model: "tornado6",
        class: "A",
    },
    {
        model: "ruiner",
        class: "A",
    },
    {
        model: "sabregt",
        class: "A",
    },
    {
        model: "slamvan3",
        class: "A",
    },
    {
        model: "ellie",
        class: "A",
    },
    {
        model: "nebula",
        class: "S",
    },
    {
        model: "club",
        class: "C",
    },
    {
        model: "komoda",
        class: "A",
    },
    {
        model: "vstr",
        class: "A",
    },
    {
        model: "blista",
        class: "B",
    },
    {
        model: "sugoi",
        class: "B",
    },
    {
        model: "prairie",
        class: "B",
    },
    {
        model: "sentinel",
        class: "A",
    },
    {
        model: "zion3",
        class: "B",
    },
    {
        model: "buffalo",
        class: "A",
    },
    {
        model: "fusilade",
        class: "B",
    },
    {
        model: "futo",
        class: "A",
    },
    {
        model: "kuruma",
        class: "A",
    },
    {
        model: "schafter2",
        class: "A",
    },
    {
        model: "felon",
        class: "A",
    },
    {
        model: "sentinel3",
        class: "B",
    },
    {
        model: "cog55",
        class: "B",
    },
    {
        model: "savestra",
        class: "A",
    },
    {
        model: "revolter",
        class: "B",
    },
    {
        model: "jackal",
        class: "B",
    },
    {
        model: "sultan",
        class: "A",
    },
    {
        model: "sultan2",
        class: "A",
    },
    {
        model: "schafter3",
        class: "A",
    },
    {
        model: "schafter4",
        class: "A",
    },
    {
        model: "buffalo2",
        class: "A",
    },
    {
        model: "fugitive",
        class: "A",
    },
    {
        model: "premier",
        class: "B",
    },
    {
        model: "stratum",
        class: "A",
    },
    {
        model: "superd",
        class: "A",
    },
    {
        model: "oracle",
        class: "B",
    },
    {
        model: "oracle2",
        class: "A",
    },
    {
        model: "exemplar",
        class: "A",
    },
    {
        model: "rebla",
        class: "A",
    },
    {
        model: "baller3",
        class: "B",
    },
    {
        model: "xls",
        class: "B",
    },
    {
        model: "minivan2",
        class: "B",
    },
    {
        model: "windsor2",
        class: "B",
    },
    {
        model: "huntley",
        class: "B",
    },
    {
        model: "surge",
        class: "C",
    },
    {
        model: "22g63",
        class: "A",
    },
    {
        model: "dubsta",
        class: "B",
    },
    {
        model: "mwgranger",
        class: "B",
    },
    {
        model: "gresley",
        class: "B",
    },
    {
        model: "rocoto",
        class: "A",
    },
    {
        model: "serrano",
        class: "A",
    },
    {
        model: "intruder",
        class: "A",
    },
    {
        model: "stinger",
        class: "B",
    },
    {
        model: "stingergt",
        class: "B",
    },
    {
        model: "vigero",
        class: "B",
    },
    {
        model: "picador",
        class: "B",
    },
    {
        model: "phoenix",
        class: "B",
    },
    {
        model: "stalion",
        class: "B",
    },
    {
        model: "stalion2",
        class: "A",
    },
    {
        model: "rapidgt3",
        class: "B",
    },
    {
        model: "virgo",
        class: "B",
    },
    {
        model: "feltzer3",
        class: "B",
    },
    {
        model: "sabregt2",
        class: "B",
    },
    {
        model: "faction",
        class: "B",
    },
    {
        model: "slamvan2",
        class: "B",
    },
    {
        model: "casco",
        class: "B",
    },
    {
        model: "tulip",
        class: "B",
    },
    {
        model: "impaler",
        class: "B",
    },
    {
        model: "clique",
        class: "B",
    },
    {
        model: "swinger",
        class: "B",
    },
    {
        model: "cheburek",
        class: "B",
    },
    {
        model: "viseris",
        class: "B",
    },
    {
        model: "coquette2",
        class: "B",
    },
    {
        model: "coquette3",
        class: "B",
    },
    {
        model: "gt500",
        class: "B",
    },
    {
        model: "mamba",
        class: "B",
    },
    {
        model: "squaddie",
        class: "B",
    },
    {
        model: "outlaw",
        class: "B",
    },
    {
        model: "vagrant",
        class: "B",
    },
    {
        model: "everon",
        class: "B",
    },
    {
        model: "hellion6str",
        class: "B",
    },
    {
        model: "tropos",
        class: "B",
    },
    {
        model: "omnis",
        class: "B",
    },
    {
        model: "retinue",
        class: "B",
    },
    {
        model: "michelli",
        class: "B",
    },
    {
        model: "gb200",
        class: "B",
    },
    {
        model: "retinue2",
        class: "B",
    },
    {
        model: "flashgt",
        class: "B",
    },
    {
        model: "weevil",
        class: "C",
    },
    {
        model: "winky",
        class: "C",
    },
    {
        model: "brioso2",
        class: "B",
    },
    {
        model: "deluxo2",
        class: "B",
    },
    {
        model: "yosemite3",
        class: "C",
    },
    {
        model: "seminole2",
        class: "C",
    },
    {
        model: "glendale2",
        class: "C",
    },
    {
        model: "blista2",
        class: "C",
    },
    {
        model: "asbo",
        class: "C",
    },
    {
        model: "patriot2",
        class: "C",
    },
    {
        model: "primo",
        class: "B",
    },
    {
        model: "primo2",
        class: "C",
    },
    {
        model: "warrener",
        class: "B",
    },
    {
        model: "panto",
        class: "C",
    },
    {
        model: "ingot",
        class: "C",
    },
    {
        model: "asterope",
        class: "B",
    },
    {
        model: "stanier",
        class: "B",
    },
    {
        model: "stretch",
        class: "C",
    },
    {
        model: "washington",
        class: "B",
    },
    {
        model: "issi7",
        class: "A",
    },
    {
        model: "baller",
        class: "B",
    },
    {
        model: "baller2",
        class: "B",
    },
    {
        model: "bjxl",
        class: "B",
    },
    {
        model: "fq2",
        class: "C",
    },
    {
        model: "granger",
        class: "C",
    },
    {
        model: "lguard",
        class: "C",
    },
    {
        model: "habanero",
        class: "C",
    },
    {
        model: "landstalker",
        class: "C",
    },
    {
        model: "patriot",
        class: "C",
    },
    {
        model: "radi",
        class: "C",
    },
    {
        model: "seminole",
        class: "B",
    },
    {
        model: "youga",
        class: "C",
    },
    {
        model: "ztype",
        class: "B",
    },
    {
        model: "hotknife",
        class: "C",
    },
    {
        model: "glendale",
        class: "C",
    },
    {
        model: "chino",
        class: "C",
    },
    {
        model: "moonbeam",
        class: "C",
    },
    {
        model: "faction3",
        class: "C",
    },
    {
        model: "chino2",
        class: "C",
    },
    {
        model: "issi3",
        class: "C",
    },
    {
        model: "fagaloa",
        class: "C",
    },
    {
        model: "caracara2",
        class: "B",
    },
    {
        model: "bobcatxl",
        class: "C",
    },
    {
        model: "rebel",
        class: "B",
    },
    {
        model: "bison",
        class: "C",
    },
    {
        model: "dune",
        class: "C",
    },
    {
        model: "dubsta3",
        class: "B",
    },
    {
        model: "bifta",
        class: "C",
    },
    {
        model: "contender",
        class: "C",
    },
    {
        model: "brawler",
        class: "C",
    },
    {
        model: "guardian",
        class: "B",
    },
    {
        model: "rumpo3",
        class: "C",
    },
    {
        model: "freecrawler",
        class: "C",
    },
    {
        model: "streiter",
        class: "B",
    },
    {
        model: "riata",
        class: "C",
    },
    {
        model: "kamacho",
        class: "B",
    },
    {
        model: "mesa",
        class: "C",
    },
    {
        model: "comet4",
        class: "C",
    },
    {
        model: "rallytruck",
        class: "B",
    },
    {
        model: "slamtruck",
        class: "C",
    },
    {
        model: "youga3",
        class: "D",
    },
    {
        model: "manana2",
        class: "D",
    },
    {
        model: "peyote3",
        class: "D",
    },
    {
        model: "veto",
        class: "B",
    },
    {
        model: "veto2",
        class: "B",
    },
    {
        model: "gburrito2",
        class: "C",
    },
    {
        model: "paradise",
        class: "C",
    },
    {
        model: "asea",
        class: "C",
    },
    {
        model: "emperor",
        class: "D",
    },
    {
        model: "regina",
        class: "D",
    },
    {
        model: "romero",
        class: "D",
    },
    {
        model: "minivan",
        class: "D",
    },
    {
        model: "pony",
        class: "D",
    },
    {
        model: "rumpo",
        class: "D",
    },
    {
        model: "newsvan",
        class: "D",
    },
    {
        model: "speedo",
        class: "D",
    },
    {
        model: "taco",
        class: "D",
    },
    {
        model: "camper",
        class: "D",
    },
    {
        model: "dilettante",
        class: "D",
    },
    {
        model: "burrito",
        class: "D",
    },
    {
        model: "gburrito",
        class: "C",
    },
    {
        model: "journey",
        class: "D",
    },
    {
        model: "dynasty",
        class: "D",
    },
    {
        model: "surfer",
        class: "D",
    },
    {
        model: "manana",
        class: "D",
    },
    {
        model: "peyote",
        class: "D",
    },
    {
        model: "tornado",
        class: "D",
    },
    {
        model: "pigalle",
        class: "D",
    },
    {
        model: "virgo2",
        class: "C",
    },
    {
        model: "virgo3",
        class: "C",
    },
    {
        model: "tornado5",
        class: "D",
    },
    {
        model: "voodoo2",
        class: "C",
    },
    {
        model: "voodoo",
        class: "C",
    },
    {
        model: "youga2",
        class: "D",
    },
    {
        model: "hermes",
        class: "D",
    },
    {
        model: "hustler",
        class: "C",
    },
    {
        model: "bodhi2",
        class: "D",
    },
    {
        model: "rancherxl",
        class: "C",
    },
    {
        model: "sadler",
        class: "C",
    },
    {
        model: "dloader",
        class: "D",
    },
    {
        model: "sandking",
        class: "C",
    },
    {
        model: "kalahari",
        class: "D",
    },
    {
        model: "coach",
        class: "D",
    },
    {
        model: "flatbed",
        class: "D",
    },
    {
        model: "mixer",
        class: "D",
    },
    {
        model: "mixer2",
        class: "D",
    },
    {
        model: "rubble",
        class: "D",
    },
    {
        model: "tiptruck",
        class: "D",
    },
    {
        model: "tiptruck2",
        class: "D",
    },
    {
        model: "bus",
        class: "D",
    },
    {
        model: "tourbus",
        class: "D",
    },
    {
        model: "trash",
        class: "D",
    },
    {
        model: "trash2",
        class: "D",
    },
    {
        model: "airtug",
        class: "D",
    },
    {
        model: "caddy",
        class: "D",
    },
    {
        model: "caddy2",
        class: "D",
    },
    {
        model: "docktug",
        class: "D",
    },
    {
        model: "forklift",
        class: "D",
    },
    {
        model: "mower",
        class: "D",
    },
    {
        model: "ripley",
        class: "D",
    },
    {
        model: "scrap",
        class: "D",
    },
    {
        model: "boxville",
        class: "D",
    },
    {
        model: "benson",
        class: "D",
    },
    {
        model: "biff",
        class: "D",
    },
    {
        model: "hauler",
        class: "D",
    },
    {
        model: "mule",
        class: "D",
    },
    {
        model: "packer",
        class: "D",
    },
    {
        model: "phantom",
        class: "D",
    },
    {
        model: "pounder",
        class: "D",
    },
    {
        model: "wastelander",
        class: "A",
    },
    {
        model: "savanna",
        class: "B",
    },
    {
        model: "monster",
        class: "A",
    },
    {
        model: "btype",
        class: "B",
    },
    {
        model: "nptaco",
        class: "D",
    },
    {
        model: "ninef2",
        class: "A",
    },
    {
        model: "comet2",
        class: "A",
    },
    {
        model: "rapidgt2",
        class: "A",
    },
    {
        model: "cognoscenti",
        class: "B",
    },
    {
        model: "trophytruck",
        class: "B",
    },
    {
        model: "valkyrietp",
        class: "S",
    },
    {
        model: "payneschaf",
        class: "A",
    },
    {
        model: "tessaoracle",
        class: "A",
    },
    {
        model: "vuwashington",
        class: "B",
    },
    {
        model: "rumpo2",
        class: "D",
    },
    {
        model: "chimera",
        class: "M",
    },
    {
        model: "diablous2",
        class: "M",
    },
    {
        model: "fcr2",
        class: "M",
    },
    {
        model: "sanctus",
        class: "M",
    },
    {
        model: "shotaro",
        class: "M",
    },
    {
        model: "npolretinue",
        class: "S",
    },
    {
        model: "npgt4",
        class: "S",
    },
    {
        model: "a45amg",
        class: "S",
    },
    {
        model: "s14",
        class: "S",
    },
    {
        model: "s14boss",
        class: "S",
    },
    {
        model: "22b",
        class: "S",
    },
    {
        model: "22m5",
        class: "S",
    },
    {
        model: "cgt",
        class: "S",
    },
    {
        model: "68dart",
        class: "S",
    },
    {
        model: "pigalle6str",
        class: "S",
    },
    {
        model: "banshee2fix",
        class: "S",
    },
    {
        model: "imperator",
        class: "A",
    },
    {
        model: "burrito7",
        class: "D",
    },
    {
        model: "tourbus6str",
        class: "D",
    },
    {
        model: "mrtasty",
        class: "D",
    },
    {
        model: "btype2",
        class: "A",
    },
    {
        model: "deathbike2",
        class: "M",
    },
    {
        model: "npbfs",
        class: "S",
    },
    {
        model: "npcul",
        class: "S",
    },
    {
        model: "rmod4ringer7",
        class: "S",
    },
    {
        model: "npphantom",
        class: "B",
    },
    {
        model: "nanablazer",
        class: "D",
    },
    {
        model: "npclub",
        class: "S",
    },
];

for (const entry of CAR_CLASSES) {
    entry.hash = GetHashKey(entry.model);
}

global.exports("GetVehiclesRatingClasses", () => CAR_CLASSES);