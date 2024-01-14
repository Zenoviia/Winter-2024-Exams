// Return an array without duplicates

// Step 2
// Add 'use strict';
// Add const

'use strict' ;

const duplicate = (value, numberOfElements) => {
  if (numberOfElements <= 0) return [];
  else {
    const result = [];
    for (let index = 0; index < numberOfElements; index++) {
      result[index] = value;
    }
    return result;
  }
};

module.exports = duplicate;
