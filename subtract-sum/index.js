const FRUITS = [
  'kiwi',
  'pear',
  'kiwi',
  'banana',
  'melon',
  'banana',
  'melon',
  'pineapple',
  'apple',
  'pineapple',
  'cucumber',
  'pineapple',
  'cucumber',
  'orange',
  'grape',
  'orange',
  'grape',
  'apple',
  'grape',
  'cherry',
  'pear',
  'cherry',
  'pear',
  'kiwi',
  'banana',
  'kiwi',
  'apple',
  'melon',
  'banana',
  'melon',
  'pineapple',
  'melon',
  'pineapple',
  'cucumber',
  'orange',
  'apple',
  'orange',
  'grape',
  'orange',
  'grape',
  'cherry',
  'pear',
  'cherry',
  'pear',
  'apple',
  'pear',
  'kiwi',
  'banana',
  'kiwi',
  'banana',
  'melon',
  'pineapple',
  'melon',
  'apple',
  'cucumber',
  'pineapple',
  'cucumber',
  'orange',
  'cucumber',
  'orange',
  'grape',
  'cherry',
  'apple',
  'cherry',
  'pear',
  'cherry',
  'pear',
  'kiwi',
  'pear',
  'kiwi',
  'banana',
  'apple',
  'banana',
  'melon',
  'pineapple',
  'melon',
  'pineapple',
  'cucumber',
  'pineapple',
  'cucumber',
  'apple',
  'grape',
  'orange',
  'grape',
  'cherry',
  'grape',
  'cherry',
  'pear',
  'cherry',
  'apple',
  'kiwi',
  'banana',
  'kiwi',
  'banana',
  'melon',
  'banana',
  'melon',
  'pineapple',
  'apple',
  'pineapple',
];

/**
 * sum off all digins in number
 * @param {number} num
 * @returns {number}
 */
const digitSum = (num) => String(num).split('').map(e => Number(e)).reduce((acc, item) => acc + item);
/**
 * function which get an input number n such that n >= 10 and n < 10000, then:
 * Sum all the digits of n.
 * Subtract the sum from n, and it is your new n.
 * If the new n is in the list below return the associated fruit, otherwise return back to task 1.
 * @param {number} num
 * @param {boolean} [notFirstIteration]
 * @returns {string}
 */
const subtractSum = (num, notFirstIteration) => {
  if (num < 100 && notFirstIteration) {
    return FRUITS[num - 1];
  }
  return subtractSum(num - digitSum(num), true);
}

/**
 * bsc with such order in fruits arrau result always will be "apple" 🤷‍♂️
 * @param {number} num - unused param
 * @returns {string}
 */
const subtractSumAlternative = (num) => 'apple';

module.exports = {
  subtractSum: subtractSumAlternative,
};
