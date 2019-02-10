const dischargingBat0 = `
Battery 0: Discharging, 11%, 00:17:14 remaining
Battery 1: Unknown, 66%
`;

const dischargingBat1 = `
Battery 0: Unknown, 5%
Battery 1: Discharging, 73%, 01:34:40 remaining
`;

const charginBat0 = `
Battery 0: Charging, 5%, 00:59:20 until charged
Battery 1: Unknown, 66%
`;
const charginBat1 = `
Battery 0: Unknown, 78%
Battery 1: Charging, 5%, 00:59:20 until charged
`;

const unknownCharge = `
Battery 0: Unknown, 77%
Battery 1: Unknown, 78%
`;

const batteriesVerbose = `
	Battery #1     : present
    Remaining capacity : 12870000, 57.87%, 02:21:50
    Design capacity    : 23510000
    Last full capacity : 22240000, 94.60% of design capacity
    Capacity loss      : 5.402%
    Present rate       : 5444000
    Charging state     : Discharging
    Battery type       : Li-poly
    Serial number      : 00HW022
  Battery #2     : present
    Remaining capacity : 16000000, 79.01%
    Design capacity    : 26060000
    Last full capacity : 20250000, 77.71% of design capacity
    Capacity loss      : 22.29%
    Present rate       : 0
    Charging state     : Unknown
    Battery type       : Li-poly
    Serial number      : 01AV406
`;

const unknownChargeVerbose = `
	Battery #1     : present
    Remaining capacity : 12870000, 57.87%, 02:21:50
    Design capacity    : 23510000
    Last full capacity : 22240000, 94.60% of design capacity
    Capacity loss      : 5.402%
    Present rate       : 0
    Charging state     : Unknown
    Battery type       : Li-poly
    Serial number      : 00HW022
  Battery #2     : present
    Remaining capacity : 16000000, 79.01%
    Design capacity    : 26060000
    Last full capacity : 20250000, 77.71% of design capacity
    Capacity loss      : 22.29%
    Present rate       : 0
    Charging state     : Unknown
    Battery type       : Li-poly
    Serial number      : 01AV406
`;
module.exports = {
  dischargingBat0,
  dischargingBat1,
  charginBat0,
  charginBat1,
  unknownCharge,
  unknownChargeVerbose,
  batteriesVerbose
};
