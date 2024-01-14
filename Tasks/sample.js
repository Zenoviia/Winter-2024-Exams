// Get one random element from an array

// Step 2
// Add 'use strict';

'use strict';

const sample = (arr) => {
  arr = arr[Math.floor(Math.random() * arr.length)];
  return arr;
};

module.exports = sample;
