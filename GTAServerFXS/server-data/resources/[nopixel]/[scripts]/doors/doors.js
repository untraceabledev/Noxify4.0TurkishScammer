const MEDICAL = {
    ems: true,
    doctor: true,
    therapist: true,
};

const COPS = {
    police: true,
};

const COPS_JUDGE = {
    ...COPS,
    judge: true,
};

const EMERGENCY = {
    ...MEDICAL,
    ...COPS,
};

const DOJ = {
    judge: true,
    mayor: true,
    deputy_mayor: true,
};

const DOJ_EMERGENCY = {
    ...DOJ,
    ...EMERGENCY,
};

const PD_DOC = {
    ...COPS,
    doctor: true,
};

globalThis.DOORS = [
    [
        {
            id: 'central-med-pcu',
            coords: [362.8, -1391.43, 33.09, 49.99999237060547],
            model: -1026546088,
            locked: false,
            access: {
                jobs: EMERGENCY,
            },
        },
        {
            id: 'central-med-pcu',
            coords: [364.35, -1389.74, 33.09, 230],
            model: -1026546088,
            locked: false,
            access: {
                jobs: EMERGENCY,
            },
        },
    ],
    [
        {
            id: 'central-med-operating',
            coords: [369.64, -1394.17, 33.09, 230.00001525878906],
            model: -1026546088,
            locked: false,
            access: {
                jobs: EMERGENCY,
            },
        },
        {
            id: 'central-med-operating',
            coords: [368.08, -1395.87, 33.09, 49.999977111816406],
            model: -1026546088,
            locked: false,
            access: {
                jobs: EMERGENCY,
            },
        },
    ],
    {
        id: 'central-med-operating-1',
        coords: [375.85, -1402.82, 31.94, 320],
        model: 916619038,
        locked: false,
        access: {
            jobs: EMERGENCY,
        },
    },
    {
        id: 'central-med-staff',
        coords: [381.66, -1407.84, 33.09, 139.6],
        model: -1298168329,
        locked: false,
        access: {
            jobs: EMERGENCY,
        },
    },
    {
        id: 'central-med-mri',
        coords: [377.1, -1399.85, 33.09, 27.077129364013672],
        model: 'hospital_door6',
        locked: false,
        access: {
            jobs: EMERGENCY,
        },
    },
    [
        {
            id: 'central-med-doctors',
            coords: [346.07, -1421.69, 32.58, 45.98460388183594],
            model: -1026546088,
            locked: false,
            access: {
                jobs: EMERGENCY,
            },
        },
        {
            id: 'central-med-doctors',
            coords: [347.62, -1419.99, 32.58, 229.75209045410156],
            model: -1026546088,
            locked: false,
            access: {
                jobs: EMERGENCY,
            },
        },
    ],
    {
        id: 'central-med-exam',
        coords: [354.99, -1426.95, 32.58, 230.00001525878906],
        model: 'hospital_door6',
        locked: false,
        access: {
            jobs: EMERGENCY,
        },
    },
    [
        {
            id: 'central-med-cafeteria',
            coords: [341.29, -1422.43, 32.45, 140.0],
            model: 'hospital_door',
            locked: true,
            access: {
                jobs: EMERGENCY,
            },
        },
        {
            id: 'central-med-cafeteria',
            coords: [343.06, -1423.91, 32.45, 320.0],
            model: 'hospital_door',
            locked: true,
            access: {
                jobs: EMERGENCY,
            },
        },
    ],
    {
        id: 'central-med-wc',
        coords: [340.56, -1421.81, 32.45, 318.71],
        model: 'hospital_door',
        locked: true,
        access: {
            jobs: EMERGENCY,
        },
    },
    {
        id: 'central-med-patient-1',
        coords: [338.65, -1415.9, 32.58, 320.0],
        model: 'hospital_door6',
        locked: false,
        access: {
            jobs: EMERGENCY,
        },
    },
    {
        id: 'central-med-patient-2',
        coords: [336.28, -1413.91, 32.58, 320.0],
        model: 'hospital_door6',
        locked: false,
        access: {
            jobs: EMERGENCY,
        },
    },
    {
        id: 'central-med-emergency-right',
        coords: [341.8, -1414.68, 32.58, 139.99998474121094],
        model: -1026546088,
        locked: false,
        access: {
            jobs: EMERGENCY,
        },
    },
    {
        id: 'central-med-emergency-left',
        coords: [336.7, -1410.26, 32.58, 319.87493896484375],
        model: -1026546088,
        locked: false,
        access: {
            jobs: EMERGENCY,
        },
    },
    [
        {
            id: 'central-med-large-emergency',
            coords: [333.57, -1411.21, 32.58, 49.745540618896484],
            model: -1026546088,
            locked: false,
            access: {
                jobs: EMERGENCY,
            },
        },
        {
            id: 'central-med-large-emergency',
            coords: [335.13, -1409.51, 32.58, 229.70225524902344],
            model: -1026546088,
            locked: false,
            access: {
                jobs: EMERGENCY,
            },
        },
    ],
    {
        id: 'central-med-emergency-2-right',
        coords: [332.51, -1413.21, 32.58, 230.1800079345703],
        model: -1026546088,
        locked: false,
        access: {
            jobs: EMERGENCY,
        },
    },
    {
        id: 'central-med-emergency-2-left',
        coords: [328.1, -1418.32, 32.58, 49.999977111816406],
        model: -1026546088,
        locked: false,
        access: {
            jobs: EMERGENCY,
        },
    },
    {
        id: 'central-med-patient-3',
        coords: [329.65, -1421.24, 32.58, 50.0],
        model: 'hospital_door6',
        locked: false,
        access: {
            jobs: EMERGENCY,
        },
    },
    {
        id: 'central-med-patient-4',
        coords: [326.24, -1423.21, 32.58, 320.4060363769531],
        model: 'hospital_door6',
        locked: false,
        access: {
            jobs: EMERGENCY,
        },
    },
    [
        {
            id: 'central-med-large-2-left',
            coords: [320.49, -1417.95, 32.58, 49.737945556640625],
            model: -1026546088,
            locked: false,
            access: {
                jobs: EMERGENCY,
            },
        },
        {
            id: 'central-med-large-2-right',
            coords: [322.04, -1416.25, 32.58, 230.23585510253906],
            model: -1026546088,
            locked: false,
            access: {
                jobs: EMERGENCY,
            },
        },
    ],

    [
        {
            id: 'mrpd-entrance1-right',
            coords: [434.7, -979.63, 30.84, 90.0],
            model: 'sm_op_prop_pd_door_ent_01_r',
            locked: false,
            access: {
                jobs: COPS,
            },
        },
        {
            id: 'mrpd-entrance1-left',
            coords: [434.7, -982.23, 30.84, 270.0],
            model: 'sm_op_prop_pd_door_ent_01_l',
            locked: false,
            access: {
                jobs: COPS,
            },
        },
    ],
    [
        {
            id: 'mrpd-entrance2-right',
            coords: [434.7, -983.02, 30.84, 90.0],
            model: 'sm_op_prop_pd_door_ent_01_r',
            locked: false,
            access: {
                jobs: COPS,
            },
        },
        {
            id: 'mrpd-entrance2-left',
            coords: [434.7, -985.62, 30.84, 270.0],
            model: 'sm_op_prop_pd_door_ent_01_l',
            locked: false,
            access: {
                jobs: COPS,
            },
        },
    ],
    [
        {
            id: 'mrpd-briefing-left',
            coords: [440.38, -989.82, 30.84, 270.0],
            model: 'sm_op_prop_int_door_001_01b',
            locked: true,
            access: {
                jobs: COPS,
            },
        },
        {
            id: 'mrpd-briefing-right',
            coords: [440.38, -987.22, 30.84, 90.0],
            model: 'sm_op_prop_int_door_001_01b',
            locked: true,
            access: {
                jobs: COPS,
            },
        },
    ],
    {
        id: 'mrpd-briefing-emergency',
        coords: [425.75, -998.76, 30.84, 0.0],
        model: 'sm_op_prop_utility_door_01a_r',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-briefing-exit',
        coords: [439.07, -997.62, 30.84, 270.99],
        model: 'sm_op_prop_int_door_001_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    [
        {
            id: 'mrpd-sideentrance-left',
            coords: [440.59, -998.82, 30.84, 180.0],
            model: 'sm_op_prop_pd_door_ent_01_l',
            locked: true,
            access: {
                jobs: COPS,
            },
        },
        {
            id: 'mrpd-sideentrance-right',
            coords: [443.19, -998.82, 30.84, 0.0],
            model: 'sm_op_prop_pd_door_ent_01_r',
            locked: true,
            access: {
                jobs: COPS,
            },
        },
    ],
    {
        id: 'mrpd-hall-right',
        coords: [450.01, -990.75, 30.84, 359.68],
        model: 'sm_op_prop_int_door_001_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-hall-left',
        coords: [450.12, -978.02, 30.84, 270.0],
        model: 'sm_op_prop_int_door_001_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-records-enter',
        coords: [441.28, -978.02, 30.84, 270.0],
        model: 'sm_op_prop_int_door_001_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    [
        {
            id: 'mrpd-sideleftentrance-left',
            coords: [467.42, -972.03, 30.84, 180.0],
            model: 'sm_op_prop_pd_door_ent_01_l',
            locked: true,
            access: {
                jobs: COPS,
            },
        },
        {
            id: 'mrpd-sideleftentrance-right',
            coords: [470.02, -972.03, 30.84, 0.0],
            model: 'sm_op_prop_pd_door_ent_01_r',
            locked: true,
            access: {
                jobs: COPS,
            },
        },
    ],
    {
        id: 'mrpd-stairs-under',
        coords: [471.29, -978.95, 26.54, 269.64],
        model: 'sm_op_prop_int_door_001_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    [
        {
            id: 'mrpd-garagetoint1-left',
            coords: [457.6, -991.67, 26.54, 90.0],
            model: 'sm_op_prop_int_door_001_01b',
            locked: true,
            access: {
                jobs: COPS,
            },
        },
        {
            id: 'mrpd-garagetoint1-right',
            coords: [457.6, -994.27, 26.54, 270.0],
            model: 'sm_op_prop_int_door_001_01b',
            locked: true,
            access: {
                jobs: COPS,
            },
        },
    ],
    [
        {
            id: 'mrpd-garagetoint2-left',
            coords: [457.6, -979.61, 26.54, 90.37],
            model: 'sm_op_prop_int_door_001_01b',
            locked: true,
            access: {
                jobs: COPS,
            },
        },
        {
            id: 'mrpd-garagetoint2-right',
            coords: [457.6, -982.21, 26.54, 269.65],
            model: 'sm_op_prop_int_door_001_01b',
            locked: true,
            access: {
                jobs: COPS,
            },
        },
    ],
    {
        id: 'mrpd-garagecontrol-1',
        coords: [461.43, -991.14, 26.54, 0.35],
        model: 'sm_op_prop_int_door_001_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-garagecontrol-2',
        coords: [461.43, -982.74, 26.54, 359.65],
        model: 'sm_op_prop_int_door_001_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-stairs2-under',
        coords: [466.8, -1001.69, 26.54, 90.41],
        model: 'sm_op_prop_int_door_001_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    [
        {
            id: 'mrpd-side-under-entrance-left',
            coords: [467.42, -1014.5, 26.54, 0.35],
            model: 'sm_op_prop_utility_door_01a_r',
            locked: true,
            access: {
                jobs: COPS,
            },
        },
        {
            id: 'mrpd-garagetoint2-right',
            coords: [470.02, -1014.5, 26.54, 179.67],
            model: 'sm_op_prop_utility_door_01a_l',
            locked: true,
            access: {
                jobs: COPS,
            },
        },
    ],
    {
        id: 'mrpd-interrogation-1',
        coords: [474.11, -1008.54, 26.54, 359.64],
        model: 'sm_op_prop_int_door_001_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-interrogation-2',
        coords: [475.06, -1016.13, 26.54, 270.0],
        model: 'sm_op_prop_int_door_001_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-interrogation-3',
        coords: [476.77, -1008.54, 26.54, 179.65],
        model: 'sm_op_prop_int_door_001_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-interrogation-4',
        coords: [482.97, -1008.54, 26.54, 0.0],
        model: 'sm_op_prop_int_door_001_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-interrogation-5',
        coords: [484.68, -1016.13, 26.54, 270.0],
        model: 'sm_op_prop_int_door_001_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-interrogation-6',
        coords: [485.64, -1008.54, 26.54, 180.0],
        model: 'sm_op_prop_int_door_001_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-cells-enter',
        coords: [480.77, -1004.62, 26.48, 0.0],
        model: 'sm_op_prop_pd_prisoncell_door_01',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-cells-enter2',
        coords: [480.77, -1000.52, 26.48, 0.0],
        model: 'sm_op_prop_pd_prisoncell_door_01',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-cells-section1-enter',
        coords: [482.28, -996.72, 26.46, 180.0],
        model: 'sm_op_prop_pd_prisoncell_door_01',
        locked: true,

        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-cells-section1-1',
        coords: [484.35, -998.3, 26.57, 90.0],
        model: 'sm_op_prop_pr_door_cell_01',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-cells-section1-2',
        coords: [484.35, -1002.88, 26.57, 90.0],
        model: 'sm_op_prop_pr_door_cell_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-bigcell',
        coords: [485.43, -986.94, 25.42, 0.0],
        model: 'sm_op_prop_pd_prisoncell_door_02',
        locked: true,
        automatic: {
            distance: 1.5,
            rate: 10,
        },
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-cells-section2-enter',
        coords: [478.99, -987.7, 26.46, 90.0],
        model: 'sm_op_prop_pd_prisoncell_door_01',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-cells-section2-1',
        coords: [477.41, -989.75, 26.57, 0.0],
        model: 'sm_op_prop_pr_door_cell_01',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-cells-section2-2',
        coords: [472.68, -989.75, 26.57, 0.0],
        model: 'sm_op_prop_pr_door_cell_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-cells-section2-3',
        coords: [472.68, -986.96, 26.57, 180.0],
        model: 'sm_op_prop_pr_door_cell_01',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-cells-section2-4',
        coords: [477.41, -986.96, 26.57, 180.0],
        model: 'sm_op_prop_pr_door_cell_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-cells-shortcut',
        coords: [481.12, -986.88, 26.54, 359.65],
        model: 'sm_op_prop_int_door_001_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-garage-1',
        coords: [432.54, -1001.23, 26.7, 360.0],
        model: 'sm_op_prop_lspd_garagedoor_01a',
        locked: true,
        automatic: {
            distance: 8,
            rate: 2,
        },
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-garage-2',
        coords: [451.39, -1001.22, 26.67, 0.0],
        model: 'sm_op_prop_lspd_garagedoor_01a',
        locked: true,
        automatic: {
            distance: 8,
            rate: 2,
        },
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-stairs-mid',
        coords: [466.8, -1004.4, 30.84, 90.31],
        model: 'sm_op_prop_int_door_001_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-stairs-top',
        coords: [466.8, -1004.4, 40.36, 89.69],
        model: 'sm_op_prop_int_door_001_01b',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-top-exit1',
        coords: [469.67, -983.34, 45.36, 179.52],
        model: 'sm_op_prop_utility_door_01a_r',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'mrpd-top-exit2',
        coords: [469.67, -990.54, 45.36, 179.58],
        model: 'sm_op_prop_utility_door_01a_l',
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'cityhall-mayor',
        coords: [337.44, -1621.37, 54.75, 139.94998168945312],
        model: 979561841,
        locked: true,
        access: {
            jobs: DOJ,
        },
    },
    {
        id: 'cityhall-chief-of-staff',
        coords: [327.38, -1627.43, 54.74, 229.9500274658203],
        model: 979561841,
        locked: true,
        access: {
            jobs: DOJ,
        },
    },
    {
        id: 'cityhall-leo',
        coords: [319.32, -1645.14, 54.74, 319.95001220703125],
        model: 979561841,
        locked: true,
        access: {
            jobs: DOJ_EMERGENCY,
        },
    },
    {
        id: 'cityhall-med',
        coords: [326.48, -1651.16, 54.73, 319.95001220703125],
        model: 979561841,
        locked: true,
        access: {
            jobs: DOJ_EMERGENCY,
        },
    },
    [
        {
            id: 'cityhall-meeting-left',
            coords: [340.31, -1640.46, 54.74, 139.95001220703125],
            model: 979561841,
            locked: true,
            access: {
                jobs: DOJ,
            },
        },
        {
            id: 'cityhall-meeting-right',
            coords: [342.31, -1642.14, 54.74, 319.95001220703125],
            model: 979561841,
            locked: true,
            access: {
                jobs: DOJ,
            },
        },
    ],
    {
        id: 'cityhall-deputy_mayor',
        coords: [330.68, -1659.3, 47.4, 319.95001220703125],
        model: 1730900584,
        locked: true,
        access: {
            jobs: DOJ,
        },
    },
    {
        id: 'cityhall-head-of-bar',
        coords: [336.76, -1660.71, 47.4, 49.949974060058594],
        model: 1730900584,
        locked: true,
        access: {
            jobs: {
                ...DOJ,
                defender: true,
            },
        },
    },
    [
        {
            id: 'cityhall-doj-meeting-left',
            coords: [346.83, -1650.29, 38.66, 49.949974060058594],
            model: 1730900584,
            locked: true,
            access: {
                jobs: DOJ,
            },
        },
        {
            id: 'cityhall-doj-meeting-right',
            coords: [345.16, -1652.28, 38.66, 229.95004272460938],
            model: 1730900584,
            locked: true,
            access: {
                jobs: DOJ,
            },
        },
    ],
    {
        id: 'cityhall-courtlower-judge-outer',
        coords: [351.99, -1636.94, 38.65, 229.9500274658203],
        model: 1730900584,
        locked: true,
        access: {
            jobs: {
                judge: true,
            },
        },
    },
    {
        id: 'cityhall-courtlower-judge-inner',
        coords: [348.8, -1636.93, 38.64, 139.94998168945312],
        model: 431155231,
        locked: true,
        access: {
            jobs: {
                judge: true,
            },
        },
    },
    [
        {
            id: 'gallery-entrance-left',
            coords: [120.55, -152.87, 54.92, 250.0000457763672],
            model: -1506340036,
            locked: true,
            access: {
                jobs: COPS,
            },
        },
        {
            id: 'gallery-entrance-right',
            coords: [119.69, -155.21, 54.92, 70.00005340576172],
            model: -1506340036,
            locked: true,
            access: {
                jobs: COPS,
            },
        },
    ],
    {
        id: 'gallery-entrance-staff',
        coords: [115.5, -145.04, 54.92, 70.0001220703125],
        model: -1506340036,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'gallery-side-left',
        coords: [111.56, -138.24, 54.92, 250.0000762939453],
        model: -1151729846,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    [
        {
            id: 'gallery-left-back-left',
            coords: [127.88, -125.3, 54.92, 69.33181762695312],
            model: -428323923,
            locked: true,
            access: {
                jobs: COPS,
            },
        },
        {
            id: 'gallery-left-back-right',
            coords: [127.02, -127.65, 54.92, 69.93219757080078],
            model: 1333601429,
            locked: true,
            access: {
                jobs: COPS,
            },
        },
    ],
    {
        id: 'gallery-back',
        coords: [141.52, -131.41, 54.92, 160.00001525878906],
        model: -1151729846,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'gallery-gate',
        coords: [147.34, -133.51, 55.17, 340],
        model: 1109400112,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'gallery-balcony',
        coords: [132.26, -124.67, 60.52, 340],
        model: -1516005479,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'gallery-roof',
        coords: [132.33, -155.52, 65.16, 233.9476318359375],
        model: -1589731034,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'gallery-sewers',
        coords: [176.67, -137.64, 49.52, 250.00006103515625],
        model: -1606154118,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'maze-sewers',
        coords: [-1293.55, -830.26, 4.26, 217.0010223388672],
        model: 1972704169,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'maze-servers',
        coords: [-1295.21, -826.56, 12.15, 37.07651138305664],
        model: -1038046021,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'maze-back',
        coords: [-1291.2, -820.02, 13.28, 313.4110107421875],
        model: 1573431937,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'maze-ground-to-backservers',
        coords: [-1297.33, -823.75, 12.15, 37.29841613769531],
        model: -1858563744,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'maze-vault-1',
        coords: [-1302.55, -821.25, 12.24, 307.0010070800781],
        model: -541242305,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'maze-vault-2',
        coords: [-1305.91, -823.79, 12.24, 307.0010070800781],
        model: -541242305,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'maze-vault-3-left',
        coords: [-1305.59, -828.8, 12.24, 217.0010223388672],
        model: -541242305,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'maze-vault-3-center',
        coords: [-1309.28, -826.33, 12.24, 307.2444152832031],
        model: -541242305,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'maze-vault-3-right',
        coords: [-1311.42, -821.06, 12.24, 217.0010223388672],
        model: -541242305,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'maze-vault-4',
        coords: [-1312.37, -828.88, 12.3, 125.93073272705078],
        model: -2050208642,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'maze-vault-4-left',
        coords: [-1320.09, -828.71, 12.24, 217.0010223388672],
        model: -541242305,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'maze-vault-4-right',
        coords: [-1317.56, -826.81, 12.24, 217.0010223388672],
        model: -541242305,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'maze-archive',
        coords: [-1312.05, -825.23, 21.96, 337.9361572265625],
        model: -1038046021,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'maze-office-right',
        coords: [-1299.86, -829.01, 17.06, 307.0010070800781],
        model: -1411481545,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'maze-office-left',
        coords: [-1297.33, -832.38, 17.06, 307.0010070800781],
        model: -1411481545,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'maze-cashier',
        coords: [-1306.67, -816.57, 17.06, 307.0010070800781],
        model: -1038046021,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'maze-cashier-exit',
        coords: [-1313.36, -820.08, 17.05, 37.00102996826172],
        model: 1869172162,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    [
        {
            id: 'maze-group6-left',
            coords: [-1318.74, -816.62, 17.24, 37.001007080078125],
            model: -1262069637,
            locked: true,
            access: {
                jobs: COPS,
            },
        },
        {
            id: 'maze-group6-right',
            coords: [-1316.82, -815.17, 17.24, 217.3136749267578],
            model: 1573431937,
            locked: true,
            access: {
                jobs: COPS,
            },
        },
    ],
    {
        id: 'maze-group6-gate',
        coords: [-1308.82, -799.32, 18.04, 126.99],
        model: 774764467,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'maze-group6-security',
        coords: [-1319.58, -808.27, 17.68, 217.01956176757812],
        model: -1038046021,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    {
        id: 'maze-group6-exit',
        coords: [-1306.66, -802.22, 17.68, 307.0010070800781],
        model: 1573431937,
        locked: true,
        access: {
            jobs: COPS,
        },
    },
    [
        {
            id: 'maze-group6-garage-left',
            coords: [-1304.34, -813.3, 17.06, 217.1903533935547],
            model: -1858563744,
            locked: true,
            access: {
                jobs: COPS,
            },
        },
        {
            id: 'maze-group6-garage-right',
            coords: [-1306.25, -814.75, 17.06, 37.33864974975586],
            model: -1560267537,
            locked: true,
            access: {
                jobs: COPS,
            },
        },
    ],
    {
        id: 'sewers-1',
        coords: [218.6, -1278.67, 28.35, 270.0],
        model: '3dp_uc_prop_door_sewer_lid',
        locked: true,
        automatic: {
            distance: 1.5,
            rate: 10,
        },
        access: {
            jobs: COPS,
        },
        disableInteraction: true,
    },
    {
        id: 'sewers-2',
        coords: [515.08, -1473.88, 28.3, 270.0],
        model: '3dp_uc_prop_door_sewer_lid',
        locked: true,
        automatic: {
            distance: 1.5,
            rate: 10,
        },
        access: {
            jobs: COPS,
        },
        disableInteraction: true,
    },
    {
        id: 'sewers-3',
        coords: [470.88, -1698.23, 28.15, 90.0],
        model: '3dp_uc_prop_door_sewer_lid',
        locked: true,
        automatic: {
            distance: 1.5,
            rate: 10,
        },
        access: {
            jobs: COPS,
        },
        disableInteraction: true,
    },
    {
        id: 'sewers-4',
        coords: [203.08, -2023.24, 17.26, 90.0],
        model: '3dp_uc_prop_door_sewer_lid',
        locked: true,
        automatic: {
            distance: 1.5,
            rate: 10,
        },
        access: {
            jobs: COPS,
        },
        disableInteraction: true,
    },
    {
        id: 'sewers-5',
        coords: [-5.1, -1847.13, 23.79, 270.0],
        model: '3dp_uc_prop_door_sewer_lid',
        locked: true,
        automatic: {
            distance: 1.5,
            rate: 10,
        },
        access: {
            jobs: COPS,
        },
        disableInteraction: true,
    },
    {
        id: 'sewers-6',
        coords: [-108.68, -1590.33, 30.92, 90.0],
        model: '3dp_uc_prop_door_sewer_lid',
        locked: true,
        automatic: {
            distance: 1.5,
            rate: 10,
        },
        access: {
            jobs: COPS,
        },
        disableInteraction: true,
    },
    {
        id: 'jewelry-1',
        coords: [-631.96, -236.33, 38.21, 305.70245361328125],
        model: 1425919976,
        locked: true,
        access: {
            jobs: COPS,
        },
        disableInteraction: true,
    },
    {
        id: 'jewelry-2',
        coords: [-630.43, -238.44, 38.21, 306.0000305175781],
        model: 9467943,
        locked: true,
        access: {
            jobs: COPS,
        },
        disableInteraction: true,
    },
    {
        id: 'jewelry-3',
        coords: [-629.13, -230.15, 38.21, 36.000022888183594],
        model: 1335309163,
        locked: true,
        access: {
            jobs: COPS,
        },
        disableInteraction: true,
    },
    {
        id: "prison-front-gate",
        coords: [
            1845.00,
            2604.81,
            44.64,
            90.00
        ],
        model: 741314661,
        locked: true,
        access: {
            jobs: PD_DOC
        }
    },
    {
        id: "prison-second-gate",
        coords: [
            1818.54,
            2604.81,
            44.61,
            90.00
        ],
        model: 741314661,
        locked: true,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-front-staff-left",
        coords: [
            1843.12,
            2577,
            46.04,
            179.99998474121094
        ],
        model: 463723735,
        locked: true,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-front-staff-right",
        coords: [
            1836.35,
            2576.99,
            46.04,
            179.99998474121094
        ],
        model: 463723735,
        locked: true,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-front-exit-outer",
        coords: [
            1837.91,
            2590.25,
            46.2,
            0.1754738688468933
        ],
        model: 539686410,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-front-exit-inner",
        coords: [
            1837.74,
            2592.16,
            46.04,
            0.2316722720861435
        ],
        model: -684929024,
        locked: true,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-front-questioning",
        coords: [
            1838.62,
            2593.71,
            46.04,
            272.85687255859375
        ],
        model: -684929024,
        locked: true,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-front-exit-outer-2",
        coords: [
            1831.34,
            2594.99,
            46.04,
            87.13077545166016
        ],
        model: -684929024,
        locked: true,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-driveway",
        coords: [
            1797.76,
            2596.56,
            46.39,
            179.9998779296875
        ],
        model: -1156020871,
        locked: true,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-infirmary-staff",
        coords: [
            1772.81,
            2570.3,
            45.74,
            358.6668701171875
        ],
        model: 2074175368,
        locked: true,
        access: {
            jobs: PD_DOC,
        }
    },
    [
        {
            id: "prison-infirmary-surgery-left",
            coords: [
                1767.32,
                2584.61,
                45.75,
                88.31095886230469
            ],
            model: -1624297821,
            locked: true,
            access: {
                jobs: PD_DOC,
            }
        },
        {
            id: "prison-infirmary-surgery-right",
            coords: [
                1767.32,
                2582.31,
                45.75,
                270.1683654785156
            ],
            model: -1624297821,
            locked: true,
            access: {
                jobs: PD_DOC,
            }
        }
    ],
    [
        {
            id: "prison-infirmary-icu-left",
            coords: [
                1764.03,
                2589.56,
                45.75,
                179.11647033691406
            ],
            model: -1624297821,
            locked: true,
            access: {
                jobs: PD_DOC,
            }
        },
        {
            id: "prison-infirmary-icu-right",
            coords: [
                1766.33,
                2589.56,
                45.75,
                0.8811312913894653
            ],
            model: -1624297821,
            locked: true,
            access: {
                jobs: PD_DOC,
            }
        }
    ],
    [
        {
            id: "prison-lobby-left",
            coords: [
                1771.93,
                2494.18,
                50.51,
                299.93487548828125
            ],
            model: -2109504629,
            locked: true,
            access: {
                jobs: PD_DOC,
            }
        },
        {
            id: "prison-lobby-right",
            coords: [
                1773.23,
                2491.92,
                50.51,
                119.93480682373047
            ],
            model: -2109504629,
            locked: true,
            access: {
                jobs: PD_DOC,
            }
        }
    ],
    {
        id: "prison-lower-right-1",
        coords: [
            1751.54,
            2472.23,
            44.76,
            29.934831619262695
        ],
        model: -1167410167,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-lower-right-2",
        coords: [
            1754.56,
            2473.97,
            44.75,
            29.934831619262695
        ],
        model: -1167410167,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-lower-right-3",
        coords: [
            1757.57,
            2475.7,
            44.75,
            29.934831619262695
        ],
        model: -1167410167,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-lower-right-4",
        coords: [
            1760.58,
            2477.43,
            44.75,
            29.934831619262695
        ],
        model: -1167410167,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-lower-right-5",
        coords: [
            1763.59,
            2479.17,
            44.75,
            29.934831619262695
        ],
        model: -1167410167,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-lower-right-6",
        coords: [
            1766.6,
            2480.9,
            44.75,
            29.934831619262695
        ],
        model: -1167410167,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-lower-right-7",
        coords: [
            1769.61,
            2482.64,
            44.75,
            29.934831619262695
        ],
        model: -1167410167,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-lower-right-8",
        coords: [
            1772.62,
            2484.37,
            44.75,
            29.934831619262695
        ],
        model: -1167410167,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-lower-left-1",
        coords: [
            1743.68,
            2485.15,
            44.75,
            209.93484497070312
        ],
        model: -1167410167,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-lower-left-2",
        coords: [
            1746.69,
            2486.88,
            44.75,
            209.93484497070312
        ],
        model: -1167410167,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-lower-left-3",
        coords: [
            1749.7,
            2488.61,
            44.75,
            209.93484497070312
        ],
        model: -1167410167,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-lower-left-4",
        coords: [
            1752.72,
            2490.35,
            44.75,
            209.93484497070312
        ],
        model: -1167410167,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-lower-left-5",
        coords: [
            1755.73,
            2492.08,
            44.76,
            209.93484497070312
        ],
        model: -1167410167,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-lower-left-6",
        coords: [
            1761.75,
            2495.55,
            44.76,
            209.93484497070312
        ],
        model: -1167410167,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-lower-left-7",
        coords: [
            1764.76,
            2497.29,
            44.76,
            209.93484497070312
        ],
        model: -1167410167,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-upper-right-1",
        coords: [
            1751.54,
            2472.23,
            49.36,
            29.934831619262695
        ],
        model: -1167410167,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-upper-right-2",
        coords: [
            1754.56,
            2473.96,
            49.36,
            29.934831619262695
        ],
        model: -1167410167,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-upper-right-3",
        coords: [
            1757.57,
            2475.7,
            49.36,
            29.934831619262695
        ],
        model: -1167410167,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-upper-right-4",
        coords: [
            1760.58,
            2477.43,
            49.36,
            29.934831619262695
        ],
        model: -1167410167,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-upper-right-5",
        coords: [
            1763.59,
            2479.17,
            49.36,
            29.934831619262695
        ],
        model: -1167410167,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-upper-right-6",
        coords: [
            1766.6,
            2480.9,
            49.36,
            29.93483543395996
        ],
        model: -1167410167,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-upper-right-7",
        coords: [
            1769.61,
            2482.64,
            49.36,
            29.93483543395996
        ],
        model: -1167410167,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-upper-right-8",
        coords: [
            1772.63,
            2484.37,
            49.36,
            29.93483543395996
        ],
        model: -1167410167,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-upper-left-1",
        coords: [
            1764.76,
            2497.29,
            49.36,
            209.93484497070312
        ],
        model: -1167410167,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-upper-left-2",
        coords: [
            1761.75,
            2495.55,
            49.36,
            209.93484497070312
        ],
        model: -1167410167,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-upper-left-3",
        coords: [
            1758.73,
            2493.83,
            49.36,
            209.93484497070312
        ],
        model: -1167410167,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-upper-left-4",
        coords: [
            1755.73,
            2492.08,
            49.36,
            209.93484497070312
        ],
        model: -1167410167,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-upper-left-5",
        coords: [
            1752.72,
            2490.35,
            49.36,
            209.93484497070312
        ],
        model: -1167410167,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-upper-left-6",
        coords: [
            1749.7,
            2488.61,
            49.36,
            209.93484497070312
        ],
        model: -1167410167,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-upper-left-7",
        coords: [
            1746.69,
            2486.88,
            49.36,
            209.93484497070312
        ],
        model: -1167410167,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "prison-upper-left-8",
        coords: [
            1743.68,
            2485.15,
            49.36,
            209.93484497070312
        ],
        model: -1167410167,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "police-four-cell-1",
        coords: [
            1597.37,
            2553.19,
            45.84,
            89.99996185302734
        ],
        model: 705715602,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "police-four-cell-2",
        coords: [
            1587.82,
            2542.86,
            45.95,
            89.99996185302734
        ],
        model: 913760512,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "police-four-cell-3",
        coords: [
            1587.82,
            2546.49,
            45.95,
            89.99996185302734
        ],
        model: 913760512,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "police-four-cell-4",
        coords: [
            1587.82,
            2550.12,
            45.95,
            89.99996185302734
        ],
        model: 913760512,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "police-four-cell-5",
        coords: [
            1587.82,
            2557.39,
            45.95,
            89.99996185302734
        ],
        model: 913760512,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "police-four-cell-6",
        coords: [
            1587.82,
            2561.02,
            45.95,
            89.99996185302734
        ],
        model: 913760512,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "police-four-cell-7",
        coords: [
            1587.82,
            2542.86,
            49.90,
            90.00
        ],
        model: 913760512,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "police-four-cell-8",
        coords: [
            1587.82,
            2546.49,
            49.9,
            89.99996185302734
        ],
        model: 913760512,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "police-four-cell-9",
        coords: [
            1587.82,
            2550.12,
            49.9,
            89.99996185302734
        ],
        model: 913760512,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "police-four-cell-10",
        coords: [
            1587.82,
            2553.76,
            49.9,
            89.99996185302734
        ],
        model: 913760512,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "police-four-cell-11",
        coords: [
            1587.82,
            2557.39,
            49.9,
            89.99996185302734
        ],
        model: 913760512,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "police-four-cell-12",
        coords: [
            1587.82,
            2561.02,
            49.9,
            89.99996185302734
        ],
        model: 913760512,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "police-four-cell-13",
        coords: [
            1587.82,
            2564.65,
            49.9,
            89.99996185302734
        ],
        model: 913760512,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "police-two-cell-14",
        coords: [
            1573.12,
            2563.43,
            45.95,
            270
        ],
        model: 913760512,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "police-two-cell-15",
        coords: [
            1573.12,
            2559.8,
            45.95,
            270
        ],
        model: 913760512,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "police-two-cell-16",
        coords: [
            1573.12,
            2556.17,
            45.95,
            270
        ],
        model: 913760512,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "police-two-cell-17",
        coords: [
            1573.12,
            2552.54,
            45.95,
            270
        ],
        model: 913760512,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "police-two-cell-18",
        coords: [
            1573.12,
            2548.9,
            45.95,
            270
        ],
        model: 913760512,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "police-two-cell-19",
        coords: [
            1573.12,
            2545.27,
            45.95,
            270
        ],
        model: 913760512,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "police-two-cell-20",
        coords: [
            1573.12,
            2541.64,
            45.95,
            270
        ],
        model: 913760512,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "police-two-cell-21",
        coords: [
            1573.12,
            2563.43,
            49.9,
            270
        ],
        model: -38586192,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "police-two-cell-22",
        coords: [
            1573.12,
            2559.8,
            49.9,
            270
        ],
        model: 913760512,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "police-two-cell-23",
        coords: [
            1573.12,
            2556.17,
            49.9,
            270
        ],
        model: 913760512,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "police-two-cell-24",
        coords: [
            1573.12,
            2552.54,
            49.9,
            270
        ],
        model: 913760512,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "police-two-cell-25",
        coords: [
            1573.12,
            2548.9,
            49.9,
            270
        ],
        model: 913760512,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "police-two-cell-26",
        coords: [
            1573.12,
            2545.27,
            49.9,
            270
        ],
        model: 913760512,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    {
        id: "police-two-cell-27",
        coords: [
            1573.12,
            2541.64,
            49.9,
            270
        ],
        model: 913760512,
        locked: false,
        access: {
            jobs: PD_DOC,
        }
    },
    [
        {
            id: "rr-entrance-right",
            coords: [
                -150.45, 295.14, 98.99, 0.00
            ],
            model: "school_upper_door_r",
            locked: true,
            access: {
                none: true
            }
        },
        {
            id: "rr-entrance-left",
            coords: [
                -152.83, 295.14, 98.99, 0.00
            ],
            model: "school_upper_door_l",
            locked: true,
            access: {
                none: true
            }
        }
    ],
    [
        {
            id: "rr-entrance2-left",
            coords: [
                -178.32, 315.57, 98.21, 269.98
            ],
            model: "ss1_13_door_l_01",
            locked: true,
            access: {
                none: true
            }
        },
        {
            id: "rr-entrance2-right",
            coords: [
                -178.32, 313.13, 98.21, 269.98
            ],
            model: "ss1_13_door_r_01",
            locked: true,
            access: {
                none: true
            }
        }
    ],
    {
        id: "sandy-pd-front-desk",
        coords: [
            1858.08,
            3688.17,
            34.39,
            29.999996185302734
        ],
        model: 385070503,
        locked: true,
        access: {
            jobs: COPS,
        }
    },
    [
        {
            id: "-906299485-1854-3687-34",
            coords: [
                1854.32,
                3687.36,
                34.4,
                119.7354736328125
            ],
            model: -906299485,
            locked: true,
            access: {
                jobs: COPS,
            }
        },
        {
            id: "sandy-pd-front-right",
            coords: [
                1853.38,
                3688.99,
                34.4,
                299.9999694824219
            ],
            model: -906299485,
            locked: true,
            access: {
                jobs: COPS,
            }
        }
    ],
    {
        id: "sandy-pd-meeting-room",
        coords: [
            1853.29,
            3686.32,
            34.4,
            238.5016632080078
        ],
        model: 385070503,
        locked: true,
        access: {
            jobs: COPS,
        }
    },
    {
        id: "sandy-pd-lockers",
        coords: [
            1847.51,
            3690.67,
            34.39,
            170.29202270507812
        ],
        model: 385070503,
        locked: true,
        access: {
            jobs: COPS,
        }
    },
    {
        id: "sandy-pd-armory",
        coords: [
            1848.6,
            3697.46,
            34.39,
            210.00001525878906
        ],
        model: 385070503,
        locked: true,
        access: {
            jobs: COPS,
        }
    },
    {
        id: "sandy-pd-cells",
        coords: [
            1855.34,
            3699.84,
            34.39,
            300.0000305175781
        ],
        model: 385070503,
        locked: true,
        access: {
            jobs: COPS,
        }
    },
    {
        id: "sandy-pd-backentry",
        coords: [
            1853.43,
            3705.6,
            34.31,
            208.05270385742188
        ],
        model: -1385904007,
        locked: true,
        access: {
            jobs: COPS,
        }
    },
    {
        id: "sandy-pd-backentry-inner",
        coords: [
            1856.82,
            3702.31,
            34.4,
            29.857481002807617
        ],
        model: -1919309060,
        locked: true,
        access: {
            jobs: COPS,
        }
    },
    {
        id: "sandy-pd-cells-inner",
        coords: [
            1861.99,
            3702.18,
            34.39,
            299
        ],
        model: -1919309060,
        locked: true,
        access: {
            jobs: COPS,
        }
    },
    {
        id: "sandy-pd-observation",
        coords: [
            1861.9,
            3705.24,
            34.4,
            29.999996185302734
        ],
        model: 385070503,
        locked: true,
        access: {
            jobs: COPS,
        }
    },
    {
        id: "sandy-pd-interrogation",
        coords: [
            1865.03,
            3707.04,
            34.39,
            29.999996185302734
        ],
        model: 385070503,
        locked: true,
        access: {
            jobs: COPS,
        }
    },
    {
        id: "sandy-pd-drunktank",
        coords: [
            1871.79,
            3710.73,
            34.39,
            120.00000762939453
        ],
        model: -1919309060,
        locked: true,
        access: {
            jobs: COPS,
        }
    },
    [
        {
            id: "sandy-pd-offices-right",
            coords: [
                1870.59,
                3695.08,
                34.4,
                299.9999694824219
            ],
            model: 841810412,
            locked: true,
            access: {
                jobs: COPS,
            }
        },
        {
            id: "sandy-pd-offices-left",
            coords: [
                1869.51,
                3696.95,
                34.4,
                299.9999694824219
            ],
            model: 1209636955,
            locked: true,
            access: {
                jobs: COPS,
            }
        }
    ],
    {
        id: "sandy-pd-deputy-sheriff",
        coords: [
            1869.37,
            3698.69,
            34.4,
            210
        ],
        model: 508173611,
        locked: true,
        access: {
            jobs: COPS,
        }
    },
    {
        id: "sandy-pd-sheriff",
        coords: [
            1875.9,
            3702.43,
            34.4,
            210.00001525878906
        ],
        model: 508173611,
        locked: true,
        access: {
            jobs: COPS,
        }
    },
    {
        id: "vault-door-1",
        coords: [256.31, 220.66, 106.43, 340.07],
        model: -1246222793,
        locked: true,
        access: {
            none: true
        }
    },
    {
        id: "vault-door-2",
        coords: [262.20, 222.52, 106.43, 250.00],
        model: 1289409051,
        locked: true,
        access: {
            none: true
        }
    },
    {
        id: "vault-door-main",
        coords: [255.23, 223.98, 102.39, 160.00],
        model: 961976194,
        locked: true,
        access: {
            none: true
        }
    },
    {
        id: "vault-front-1",
        coords: [231.51, 216.51, 106.40, 295.00],
        model: -2041685008,
        locked: true,
        access: {
            none: true
        }
    },
    {
        id: "vault-front-2",
        coords: [232.61, 214.16, 106.40, 115.00],
        model: -2041685008,
        locked: true,
        access: {
            none: true
        }
    },
    {
        id: "vault-front-3",
        coords: [260.65, 203.23, 106.43, 160.00],
        model: 1335309163,
        locked: true,
        access: {
            none: true
        }
    },
    {
        id: "vault-front-4",
        coords: [258.21, 204.12, 106.43, 340.00],
        model: 1335309163,
        locked: true,
        access: {
            none: true
        }
    }
];
