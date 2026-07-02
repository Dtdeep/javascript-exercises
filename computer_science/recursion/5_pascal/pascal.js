const pascal = function (coordinate, resultArray = [1]) {
  if (coordinate == 1) {
    return resultArray;
  }
  resultArray.push(0);
  resultArray.unshift(0);

  let finalArray = [];

  for (let i = 0; i < resultArray.length - 1; i++) {
    const result = resultArray[i] + resultArray[i + 1];
    finalArray.push(result);
  }
  return pascal(coordinate - 1, finalArray);
};

// Do not edit below this line
module.exports = pascal;
