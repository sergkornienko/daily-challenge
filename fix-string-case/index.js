/**
 * Convert string to either lowercase only or uppercase only based on:
 *    making as few changes as possible
 *    if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
 * @param {string} word - string that may have mixed uppercase and lowercase letters
 * @returns {string}
 */
const fixStringCase = (word) => 
  word.match(/[a-z]/g).length >= word.match(/[A-Z]/g).length
    ? word.toLowerCase()
    : word.toUpperCase();

module.exports = {
  fixStringCase,
};