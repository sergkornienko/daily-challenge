const nbYear = (initialPopulation, percent, aug, expectedPopulation) => {
  let population = initialPopulation;
  let years = 0;
  while (expectedPopulation > population) {
    population += population * percent / 100 + aug;
    years++;
  }
  return years;
};

const nbYearRecursively = (initialPopulation, percent, aug, expectedPopulation) => 
  initialPopulation < expectedPopulation
    ? 1 + nbYearRecursively(initialPopulation + initialPopulation * percent / 100 + aug, percent, aug, expectedPopulation)
    : 0;

module.exports = {
  nbYear: nbYearRecursively,
};