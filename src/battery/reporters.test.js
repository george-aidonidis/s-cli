const {
	batteriesVerbose,
	charginBat0,
	charginBat1,
	dischargingBat0,
	dischargingBat1,
	unknownCharge,
	unknownChargeVerbose
} = require('../../fixtures/battery');
const {
	prettyHours,
	getStatusOfBatteries,
	getChargingStatus,
	getRemainingTime
} = require('./reporters');

const normalize = text => text.replace(/\s/g, '');

describe('Status of batteries', () => {
	it('🔋 gets the status of batteries when Bat0 is discharging', () => {
		const expected = normalize(`Bat1: 11% Bat2: 66%`);
		const actual = normalize(getStatusOfBatteries(dischargingBat0));

		expect(actual).toEqual(expected);
	});
	it('🔋 gets the status of batteries when Bat1 is discharging', () => {
		const expected = normalize(`Bat1: 5% Bat2: 73%`);
		const actual = normalize(getStatusOfBatteries(dischargingBat1));

		expect(actual).toEqual(expected);
	});
	it('🔌 gets the status of batteries when Bat0 is charging', () => {
		const expected = normalize(`Bat1: 5% Bat2: 66%`);
		const actual = normalize(getStatusOfBatteries(charginBat0));

		expect(actual).toEqual(expected);
	});
	it('🔌 gets the status of batteries when Bat1 is discharging', () => {
		const expected = normalize(`Bat1: 78% Bat2: 5%`);
		const actual = normalize(getStatusOfBatteries(charginBat1));

		expect(actual).toEqual(expected);
	});
	it('🔌 gets the status of batteries when states are unknown', () => {
		const expected = normalize(`Bat1: 77% Bat2: 78%`);
		const actual = normalize(getStatusOfBatteries(unknownCharge));

		expect(actual).toEqual(expected);
	});
});

describe('Charging status', () => {
	it('🔋 gets the charging status when discharging', () => {
		const expected = normalize(`Discharging`);
		const actual = normalize(getChargingStatus(dischargingBat0));
		const actual1 = normalize(getChargingStatus(dischargingBat1));

		expect(actual).toEqual(expected);
		expect(actual1).toEqual(expected);
	});

	it('🔌 gets the charging status when charging', () => {
		const expected = normalize(`Charging`);
		const actual = normalize(getChargingStatus(charginBat0));
		const actual1 = normalize(getChargingStatus(charginBat1));
		const actualFromUnkown = normalize(getChargingStatus(unknownCharge));

		expect(actual).toEqual(expected);
		expect(actual1).toEqual(expected);
		expect(actualFromUnkown).toEqual(expected);
	});
});

describe('Remaining time', () => {
	it('🔋 gets the remaing time until full discharge', () => {
		const expected = normalize(`5 hours 18 minutes`);
		const actual = normalize(getRemainingTime(batteriesVerbose));

		expect(actual).toEqual(expected);
	});

	it('🔌 handles the charging state (division by zero)', () => {
		const expected = normalize(``);
		const actual = normalize(getRemainingTime(unknownChargeVerbose));

		expect(actual).toEqual(expected);
	});
});

describe('Pretty text of hours', () => {
	it('return hours if input is less that 1', () => {
		const expected = 'hour';
		const actual = prettyHours(1);

		expect(actual).toEqual(expected);
	});

	it('return hours if input is more that 1', () => {
		const expected = 'hours';
		const actual = prettyHours(3);

		expect(actual).toEqual(expected);
	});
});
