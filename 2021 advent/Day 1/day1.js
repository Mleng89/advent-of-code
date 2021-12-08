const fs = require('fs');

const lines = fs
	.readFileSync('day1data.txt', { encoding: 'utf-8' })
	.split('\n')
	.filter((x) => Boolean(x))
	.map((x) => parseInt(x));

let increment = 0;
for (let i = 0; i < lines.length; i++) {
	if (lines[i] < lines[i + 1]) {
		increment++;
	}
}
// console.log(increment);

let increment2 = 0;

for (let i = 3; i < lines.length; i++) {
	const last = lines[i - 1] + lines[i - 2] + lines[i - 3];
	const first = lines[i] + lines[i - 1] + lines[i - 2];
	if (last < first) {
		increment2++;
	}
}

console.log(increment2);
