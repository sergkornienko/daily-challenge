const fixStringCase = (word) => 
  word.match(/[a-z]/g).length >= word.match(/[A-Z]/g).length
    ? word.toLowerCase()
    : word.toUpperCase();

module.exports = {
  fixStringCase,
};