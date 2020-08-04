/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const sum = (a, b) => a + b;

/**
 * @param {any} item
 * @returns {number}
 */
const toNumber = (item) => Number(item);

/**
 * simple function that converts a string representing a number into the number itself
 * @param {number} initialNum
 * @returns {number}
 */
const digitalRoot = (initialNum) => {
  // const val = String(initialNum).split('').map(toNumber).reduce(sum);
  const val = Array.from(String(initialNum), toNumber).reduce(sum);

  return val > 9
    ? digitalRoot(val)
    : val;
};

module.exports = {
  digitalRoot,
}
