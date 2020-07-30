/**
 * You are given three piles of casino chips:
 * white, green and black chips in the form of an array.
 * Each day you need exactly two chips of different colors to play at the casino.
 * You can chose any color, but you are not allowed to use two chips of the same color in a single day.
 * You will be given an array representing the number of chips 
 * of each color and your task is to return the maximum number of days you can play.
 * @param {Array<number>} piles
 * @returns {number}
 */
const solve = (piles) => {
  const max = Math.max.apply(null, piles);
  const sum = piles.reduce((a, b) => a + b);
  const remain = sum - max;
  return max > remain ? remain : max;
}

module.exports = {
  solve,
};
