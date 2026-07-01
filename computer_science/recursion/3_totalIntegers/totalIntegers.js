const totalIntegers = function (variable) {
  let numberOfIntegers = 0;
  if (variable !== null && typeof variable === "object") {
    variable = Object.values(variable);
  }

  if (Array.isArray(variable)) {
    numberOfIntegers = variable.filter((value) => {
      return Number.isInteger(value);
    }).length;

    let arraysOnArray = variable.filter((item) => {
      return Array.isArray(item) || typeof item === "object";
    });

    if (arraysOnArray.length > 0) {
      const result =
        numberOfIntegers +
        arraysOnArray.reduce((accumulator, item) => {
          return accumulator + totalIntegers(item);
        }, 0);
      if (Number.isNaN(result)) {
        return 0;
      }
      return result;
    } else {
      return numberOfIntegers;
    }
  }
};

console.log(
  totalIntegers([
    NaN,
    [[{}], 555],
    "444",
    [],
    74.0,
    undefined,
    [[() => {}], [4], Infinity, [[[], -44.0], [null, "-4"], NaN[[]], 6]],
    () => {},
    [[], [-Infinity, ["4"], [4.7, -46.7], NaN]],
  ]),
);

// Do not edit below this line
module.exports = totalIntegers;
