const printer_error = (colors) => {
  const mCode = 'm'.charCodeAt(0);
  const errors = Array.from(colors.toLowerCase())
    .reduce((acc, _, index) => colors.charCodeAt(index) <= mCode ? acc : acc + 1, 0);

  return `${errors}/${colors.length}`;
};

const printer_error_reg_exp = (colors) => {
  let errors = colors.toLowerCase().replace(/[a-m]/g, '').length;

  return `${errors}/${colors.length}`;
};

const printer_error_reg_exp_0 = (colors) => {
  let errors = (colors.toLowerCase().match(/[n-z]/g) || []).length;

  return `${errors}/${colors.length}`;
};

module.exports = {
  printer_error: printer_error_reg_exp,
};