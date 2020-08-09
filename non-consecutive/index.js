
/**
 * find all the elements of an array that are non consecutive
 * @param {Array<number>} numbers
 * @returns {Array<{
 * i: number,
 * n: number
 * }>}
 */
const nonConsecutive = (numbers) => {
  return numbers.reduce((acc, item, i) => {
    if (acc.previous && acc.previous + 1 !== item) {
      acc.res.push({ i, n: item });
    }
    acc.previous = item;
    return acc;
  }, { res: [], previous: null }).res;
}

module.exports = {
  nonConsecutive,
};
