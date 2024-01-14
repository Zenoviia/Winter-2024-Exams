// Sum all number values in dict

// Step 6
// Accumulate the sum using reduce() and eliminating the explicit loop and “sum” variable

'use strict';

const sumNumbers = (obj) => {
  return Object.values(obj).reduce((acc, value) => acc + (typeof value === 'number' ? value : 0), 0);
};

module.exports = sumNumbers;
