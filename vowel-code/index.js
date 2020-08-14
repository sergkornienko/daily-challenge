const codeMap = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};

const reverseCodeMap = Object.keys(codeMap).reduce((acc, key) => ({...acc, [codeMap[key]]: key }), {});


/**
 * replace all charecters in string with values in object
 * @param {string} words
 * @param {Object<string, any>} map
 * @returns {string}
 */
const transformString = (words, map) => words.split('').map((e) => map[e] || e).join('');
/**
 *  replace all the lowercase vowels in a given string
 * with numbers according to the following pattern:
 * a -> 1
 * e -> 2
 * i -> 3
 * o -> 4
 * u -> 5
 * @param {string} words
 * @returns {string}
 */
const encode = (words) => transformString(words, codeMap);

/**
 * turn the numbers back into vowels according to the same pattern shown above
 * @param {string} words
 * @returns {string}
 */
const decode = (words) => transformString(words, reverseCodeMap);
module.exports = {
  encode,
  decode,
};