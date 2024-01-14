// Return an array without duplicates

// Step 4
// Replace the for loop with Array.fill()

'use strict';

const duplicate = (value, numberOfElements) => {
  const result = numberOfElements <= 0 ? [] : Array(numberOfElements).fill(value);
  return result;
};

module.exports = duplicate;
