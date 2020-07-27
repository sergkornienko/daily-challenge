/**
 * find an index N
 * where the sum of the integers to the left of N
 * is equal to the sum of the integers to the right of N.
 * If there is no index that would make this happen, return -1
 * @param {Array<number>} nums
 * @returns {number}
 */
const equalSides = (nums) => {
  let equalIndex = -1;
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < Math.floor(nums.length / 2); i++) {
    leftSum += nums[i];
    rightSum += nums[nums.length - 1 - i];
    if (leftSum === rightSum) {
      equalIndex = i + 1;
    }
  }
  
  return equalIndex;
};

module.exports = {
  equalSides,
}