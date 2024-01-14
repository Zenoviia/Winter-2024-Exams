// Return an array without duplicates

// Step 3
// Simplify the if-else construct that checks if numberOfElements is less than zero by using a ternary operator

'use strict';

const duplicate = (value, numberOfElements) => {
  const result = numberOfElements <= 0 ? [] : [];
  for (let index = 0; index < numberOfElements; index++) {
    result[index] = value;
  }
  return result;
};

module.exports = duplicate;
