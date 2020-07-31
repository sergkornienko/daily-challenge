/**
 * simple function that converts a string representing a number into the number itself
 * @param {string} str
 * @returns {number}
 */
const moneyValue = (str) => {
  return Number(str.replace('$', '').replace(' ', ''))
};

module.exports = {
  moneyValue,
}