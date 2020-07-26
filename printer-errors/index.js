/** 
 * The colors used by the printer are recorded in a control string
 * [a-m] - good collors
 * [n-z] - error
 * given a string will output the error rate of the printer
 * as a string representing a rational whose numerator is the number of errors 
 * and the denominator the length of the control string
 * @param {string} colors
 * @returns {string}
 */
const printer_error = (colors) => {
  const mCode = 'm'.charCodeAt(0);
  const errors = Array.from(colors.toLowerCase())
    .reduce((acc, _, index) => colors.charCodeAt(index) <= mCode ? acc : acc + 1, 0);

  return `${errors}/${colors.length}`;
};
/**
 * @param {string} colors
 * @returns {string}
 */
const printer_error_reg_exp = (colors) => {
  let errors = colors.toLowerCase().replace(/[a-m]/g, '').length;

  return `${errors}/${colors.length}`;
};
/**
 * @param {string} colors
 * @returns {string}
 */
const printer_error_reg_exp_0 = (colors) => {
  let errors = (colors.toLowerCase().match(/[n-z]/g) || []).length;

  return `${errors}/${colors.length}`;
};

module.exports = {
  printer_error: printer_error_reg_exp,
};
