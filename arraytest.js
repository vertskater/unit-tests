"use strict";

const analyse = (numbers) => {
  let divNums = {
    avarage: numbers.reduce((a, b) => a + b, 0) / numbers.length,
    min: min(numbers),
    max: max(numbers),
    length: numbers.length,
  };
  return divNums;
};

function min(numbers) {
  let minNumber = numbers.reduce((a, b) => {
    return a < b ? a : b;
  });
  return minNumber;
}
function max(numbers) {
  let maxNumber = numbers.reduce((a, b) => {
    return a < b ? b : a;
  });
  return maxNumber;
}

module.exports = analyse;
