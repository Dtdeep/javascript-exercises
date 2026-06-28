const factorial = function (number) {
  if (number < 0 || !Number.isInteger(number)) {
    return undefined;
  }
  if (number == 0) {
    return 1;
  }
  return number * factorial(number - 1);
};

// Do not edit below this line
module.exports = factorial;
