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

/**
 * @param {string} loverCaseString
 * @param {string} item
 * @returns {boolean}
 */
const isOnlyInString = (loverCaseString, item) => loverCaseString.indexOf(item) === loverCaseString.lastIndexOf(item);
/**
 * convert a string to a new string where each character in the new string is "(" 
 * if that character appears only once in the original string,
 * or ")" if that character appears more than once in the original string
 * @param {string} initialString
 * @returns {string}
 */
const duplicateEncoderStr = (initialString) => {
  const loverCaseString = initialString.toLowerCase();
  return initialString
    .split('')
    .map((item) => isOnlyInString(loverCaseString, item.toLowerCase()) ? '(' : ')')
    .join('');
}

module.exports = {
  duplicateEncoder: duplicateEncoderStr,
};
