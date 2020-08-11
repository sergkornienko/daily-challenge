/**
 * @param {string} item
 * @returns {function(): boolean}
 */
const isEqual = (item) => (c) => c.toLowerCase() === item.toLowerCase();
/**
 * @param {Array<string>} characters
 * @param {string} item
 * @returns {boolean}
 */
const isOnlyInArray = (characters, item) => characters.filter(isEqual(item)).length === 1;

/**
 * convert a string to a new string where each character in the new string is "(" 
 * if that character appears only once in the original string,
 * or ")" if that character appears more than once in the original string
 * @param {string} initialString
 * @returns {string}
 */
const duplicateEncoder = (initialString) => {
  return initialString
    .split('')
    .map((item, _, characters) => isOnlyInArray(characters, item) ? '(' : ')')
    .join('');
}

module.exports = {
  duplicateEncoder,
};
