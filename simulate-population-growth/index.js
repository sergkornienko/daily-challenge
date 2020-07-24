const nbYear = (initialPopulation, percent, aug, expectedPopulation) => {
  let population = initialPopulation;
  let years = 0;
  while (expectedPopulation > population) {
    population += population * percent / 100 + aug;
    years++;
  }
  return years;
};

module.exports = {
  nbYear,
};