const getProp = require('./acpi-prop');
const {batteriesVerbose} = require('../../fixtures/battery');

describe('Status of batteries', () => {
	it('Gets a prop from the acpitool output', () => {
		const expected = 23510000 + 26060000;
		const actual = getProp(batteriesVerbose)('Designcapacity');

		expect(actual).toEqual(expected);
	});
});
