const {
	add,
	filter,
	head,
	identity,
	ifElse,
	isNil,
	map,
	pipe,
	prop,
	reduce,
	split
} = require('ramda');

const normalize = text => text.replace(/\s/g, '');

const getNum = ifElse(
	isNil,
	identity,
	pipe(
		split(','),
		head,
		Number
	)
);

module.exports = info => property =>
	pipe(
		split('\n'),
		map(normalize),
		map(x => {
			const [key, label] = x.split(':');

			return {[key]: label};
		}),
		filter(prop(property)),
		map(x => getNum(x[property])),
		reduce(add, 0)
	)(info);
