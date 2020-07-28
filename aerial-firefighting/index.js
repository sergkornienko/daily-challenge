/**
 * x representing fire
 * Y representing buildings
 * Water that you drop cannot go through buildings and therefore 
 * individual sections of fire must be addressed separately. 
 * Your water bombs can only extinguish contiguous sections of fire up to a width. 
 * You must return the minimum number of waterbombs it would take to extinguish the fire in the string.
 * @param {string} plane - is a 2D plane of random length consisting of x,Y
 * @param {number} width - width which covered by watterbombs
 * @returns {number}
 */
const waterbombs = (plane, width) => {
  if (width === 1) {
    return plane.replace('Y', '').length;
  }
  const planeArr = Array.from(plane);
  const { count } = planeArr.reduce((acc, item) => {
    if (item === 'Y' || acc.currenItem + 1 === width) {
      acc.count++;
      acc.currenItem = 0;
    } else {
      acc.currenItem++;
    }
    return acc;
  }, { count: 0, currenItem: 0 });
  
  return planeArr.pop() === 'x' ? count + 1 : count;
};

module.exports = {
  waterbombs,
}