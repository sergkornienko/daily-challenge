/**
 * reverses each word in the string
 * @param {string} str
 * @returns {string}
 */
const reverseWords = (str) => {
  return str
    .split(' ') // .match(/\S+/g)
    .map((word) => Array.from(word).reverse().join(''))
    .join(' ');
};

module.exports = {
  reverseWords,
}