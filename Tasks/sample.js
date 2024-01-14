// Get one random element from an array

// Step 3
// Directly return the element within the array

'use strict';

const sample = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
  return arr;
};

module.exports = sample;
