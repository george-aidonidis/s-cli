const {ifElse, pipe, split, filter, isEmpty} = require('ramda');
const getProp = require('./acpi-prop');

const getNums = /\d+(%)/g;
const prettyHours = hours => (hours > 1 ? 'hours' : 'hour');

const getStatusOfBatteries = input => {
	const arr = input.split(',');
	const filtered = arr.filter(x => x.match(getNums));
	const bat1 = filtered[0].match(getNums).join('');
	const bat2 = filtered[1].match(getNums).join('');

	return `Bat1: ${bat1} \nBat2: ${bat2}`;
};

const getChargingStatus = pipe(
	split(' '),
	filter(x => x.includes('Discharging')),
	ifElse(isEmpty, () => 'Charging', () => 'Discharging')
);

const getRemainingTime = info => {
	const remainingCharge = getProp(info)('Remainingcapacity');
	const presentRate = getProp(info)('Presentrate');

	if (presentRate === 0) {
		return '';
	}

	const totalSeconds = (remainingCharge / presentRate) * 3600;
	const hours = Math.floor(totalSeconds / 3600);
	const hoursText = prettyHours(hours);
	const minutes = Math.floor((totalSeconds % 3600) / 60);

	return `${hours} ${hoursText} ${minutes} minutes`;
};

module.exports = {
	prettyHours,
	getStatusOfBatteries,
	getChargingStatus,
	getRemainingTime
};
