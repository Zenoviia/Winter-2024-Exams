// Sum all number values in dict

// Step 5
// Iterate directly over values using Object.values(obj)

'use strict';

const sumNumbers = (obj) => {
  let sum = 0;

  Object.values(obj).forEach(value => {
    if (typeof value === 'number') {
      sum += value;
    }
  });

  return sum;
};

module.exports = sumNumbers;
