/**
 * Calculate the superfactorial of a number
 * @param {number} num to calculate
 * @returns {number} calculated value
 */
const superfactorial = (num) => {
	if (!Number.isInteger(num))
		throw new TypeError('I need a number!');

	if (num < 0)
		throw new RangeError('Factorials must be positive whole numbers');

	if (num === 0)
		return 1;

	let superFact = 1;
	for (let i = num; i > 1; i--) {
		let fact = 1;
		for (let j = i; j > 1; j--) {
			fact *= j;
		}
		superFact *= fact;
	}

	return superFact;
};

module.exports = superfactorial;
