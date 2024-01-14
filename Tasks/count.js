// Sum all number values in dict

// Step 3
// Remove unnecessary brackets (), {} and []

'use strict';

const sumNumbers = (obj) => {
  sum = 0;
  
  const keys = Object.keys(obj);
  keys.forEach((key) => {
   
    const value = obj[key];
    if (typeof value === 'number') sum += value;
  });
 
  return sum;
};

module.exports = sumNumbers;
