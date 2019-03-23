#!/usr/bin/env node
const shell = require('shelljs');
const {
	getChargingStatus,
	getRemainingTime,
	getStatusOfBatteries
} = require('./reporters');

const batteryInfo = shell.exec('acpi -b', {silent: true});
const batteryInfoVerbose = shell.exec('acpitool -B', {silent: true});

const title = getChargingStatus(batteryInfo);
const time = getRemainingTime(batteryInfoVerbose);
const percentages = getStatusOfBatteries(batteryInfo);

module.exports = () => {
	shell.exec(
		`notify-send -i xfce4-battery-plugin "${title}" "${time}\n${percentages}"`
	);
	shell.exit(0);
};
