const FIRST_PERIOD_PRICE = 30;
const FIRST_PERIOD_TIME = 60;
const REGULAR_PERIOD_TIME = 30;
const REGULAR_PERIOD_PRICE = 10;
const FREE_PERIOD_TIME = 5;
/**
 * charge driving students based on the amount of time they spent in their lesson
 * @param {number} time
 * @returns {number}
 */
const cost = (time) => {
  if (time <= 5) {
    return 0;
  }

  if (time <= FIRST_PERIOD_TIME) {
    return FIRST_PERIOD_PRICE;
  }

  let price = FIRST_PERIOD_PRICE;
  const timeWithoutFirst = time - FIRST_PERIOD_TIME;
  const fullHalfHours = Math.floor(timeWithoutFirst / REGULAR_PERIOD_TIME);
  const leftCost = fullHalfHours * REGULAR_PERIOD_PRICE;
  const freePrice = (timeWithoutFirst - fullHalfHours * REGULAR_PERIOD_TIME) > FREE_PERIOD_TIME
    ? REGULAR_PERIOD_PRICE
    : 0;
  return leftCost + price + freePrice;
};

module.exports = {
  cost,  
};