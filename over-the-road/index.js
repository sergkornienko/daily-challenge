/**
 * Given your house number address and length of street n, give the house number on the opposite side of the street
 * 1|   |6
 * 3|   |4
 * 5|   |2
 * @param {number} address
 * @param {number} streetLength
 * @returns {number}
 */
const overTheRoad = (address, streetLength) => {
  return streetLength * 2 - (address - 1) * 2;
}

module.exports = {
  overTheRoad,
};
