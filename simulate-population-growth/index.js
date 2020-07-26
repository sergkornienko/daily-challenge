/**
 * the function nb_year should return n number of entire years
 * needed to get a population greater or equal to expectedPopulation
 * @param {number} initialPopulation
 * @param {number} percent - 0 - 100 percent of growth
 * @param {number} aug - inhabitants coming or leaving each year
 * @param {number} expectedPopulation - population to surpass
 * @returns {number}
 */
const nbYear = (initialPopulation, percent, aug, expectedPopulation) => {
  let population = initialPopulation;
  let years = 0;
  while (expectedPopulation > population) {
    population += population * percent / 100 + aug;
    years++;
  }
  return years;
};
/**
 * @param {number} initialPopulation
 * @param {number} percent - 0 - 100 percent of growth
 * @param {number} aug - inhabitants coming or leaving each year
 * @param {number} expectedPopulation - population to surpass
 * @returns {number}
 */
const nbYearRecursively = (initialPopulation, percent, aug, expectedPopulation) => 
  initialPopulation < expectedPopulation
    ? 1 + nbYearRecursively(initialPopulation + initialPopulation * percent / 100 + aug, percent, aug, expectedPopulation)
    : 0;

module.exports = {
  nbYear: nbYearRecursively,
};