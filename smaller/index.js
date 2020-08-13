
/**
 * return the amount of numbers that are smaller to the right of that number in the index
 * @param {Array<number>} nums
 * @returns {Array<number>}
 */
const smaller = (nums) => nums.map((num, index) => nums.slice(index).filter((n) => num > n).length);

module.exports = {
  smaller,
};
