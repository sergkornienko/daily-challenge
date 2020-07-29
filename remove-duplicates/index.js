/**
 * remove the left-most duplicates from a list of integers and return the result
 * @param {Array<number>} list
 * @returns {Array<number>}
 */
const solve = (list) => {
  const unique = new Set(list);
  let index = list.length - 1;
  const res = [];

  while (unique.size && index >= 0) {
    if (unique.has(list[index])) {
      res.unshift(list[index]);
      unique.delete(list[index]);
    }
    index--;
  }
  return res;
};
/**
 * @param {Array<number>} list
 * @returns {Array<number>}
 */
const solve_0 = (list) => {
  const res = [];

  for (let index = list.length - 1; index >= 0; index--) {
    if (!res.includes(list[index])) {
      res.unshift(list[index]);
    }
  }
  return res;
};

/**
 * @param {Array<number>} list
 * @returns {Array<number>}
 */
const solve_1 = (list) => {
  // return list.reduceRight((acc, item) => (!acc.includes(item) ? acc.unshift(item) : acc) && acc, []);
  return list.reduceRight((acc, item) => {
    if (!acc.includes(item)) {
      acc.unshift(item);
    }
    return acc;
  }, []);
};

module.exports = {
  solve: solve_1,
}