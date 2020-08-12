
/**
 * Given a positive integer n, calculate the following sum:
 * n + n/2 + n/4 + n/8 + ...
 * All elements of the sum are the results of integer division.
 * Continue dividing the number until you reach a decimal
 * @param {number} num
 * @returns {number}
 */
const halvingSum = (num) => num === 1 ? num : halvingSum(Math.floor(num / 2)) + num;

module.exports = {
  halvingSum,
};
