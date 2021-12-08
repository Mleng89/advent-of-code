// forward x increases horizontal position by x units
// down x increases depth by x units
// up x decreases depth by x units
let fs = require('fs');

const submarine = fs
	.readFileSync('day2data.txt', { encoding: 'utf-8' })
	.split('\n')
	.filter((x) => Boolean(x));
// .map((x) => parseInt(x));

// there is horizontal position
// there is depth number

let horizontal = 0;
let depth = 0;

for (let i = 0; i < submarine.length; i++) {
	if (submarine[i].includes('forward')) {
		let newSub = submarine[i].slice(8);
		let numSub = parseInt(newSub);
		horizontal += numSub;
	}
	if (submarine[i].includes('down')) {
		let newDown = submarine[i].slice(5);
		let numDown = parseInt(newDown);
		depth += numDown;
	} else if (submarine[i].includes('up')) {
		let newUp = submarine[i].slice(3);
		let numUp = parseInt(newUp);
		depth -= numUp;
	}
	console.log('my horizontal is:', horizontal);
	console.log('my depth is:', depth);

	let result = depth * horizontal;
	// console.log(result);
}

// ******PART 2***********
// Down x increases
