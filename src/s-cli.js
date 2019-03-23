#!/usr/bin/env node

const program = require('commander');
const packageJson = require('../package.json');
const battery = require('./battery');

program
	.version(packageJson.version)
	.option('-b, --battery', 'show battery info')
	.parse(process.argv);

if (process.argv.slice(2).length === 0) {
	program.outputHelp();
}

if (program.battery) {
	battery();
}
