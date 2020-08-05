/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const descending = (a, b) => b - a;
/**
 * coins with denominations: [1, 5, 10, 25] 
 * If I were to ask you to make 75 cents you would 
 * just return 3 since 75 cents can be made with 3 quarters
 * @param {Array<number>} coinsArr
 * @returns {function():number}
 */
const coins = (coinsArr) => {
  coinsArr.sort(descending);
  /**
   * @param {number} num
   * @returns {number}
   */
  return (num) => {
    let count = 0;
    let left = num;
    let index = 0;

    while(left > 0 && index < coinsArr.length) {
      if (left >= coinsArr[index]) {
        left -= coinsArr[index];
        count++;
      } else {
        index++;
      }
    };
    
    return count;
  }
}

module.exports = {
  coins,
};
