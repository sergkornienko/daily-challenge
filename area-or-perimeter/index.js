/**
 * @param {number} length
 * @returns {number}
 */
const squareArea = (length) => length * length;

/**
 * @param {number} length
 * @param {number} width
 * @returns {number}
 */
const rectanglePerimeter = (length, width) => (length * 2) + (width * 2);

/**
 * Given the length and width of a 4-sided polygon. 
 * The polygon can either be a rectangle or a square.
 * If it is a square, return its area. 
 * If it is a rectangle, return its perimeter
 * @param {number} length
 * @param {number} width
 * @returns {number}
 */
const areaOrPerimeter = (length, width) => (length === width) 
  ? squareArea(length) 
  : rectanglePerimeter(length, width);


module.exports = {
  areaOrPerimeter
};
