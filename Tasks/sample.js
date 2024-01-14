// Get one random element from an array

// Step 4
// Remove the second return array as it becomes unreadable after the previous step

'use strict';

const sample = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

module.exports = sample;
