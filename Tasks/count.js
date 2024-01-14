// Sum all number values in dict

// Step 4
// Change the global variable "sum" to a local variable by adding "let"

'use strict';

const sumNumbers = (obj) => {
  let sum = 0;
  
  const keys = Object.keys(obj);
  keys.forEach((key) => {
   
    const value = obj[key];
    if (typeof value === 'number') sum += value;
  });
 
  return sum;
};

module.exports = sumNumbers;
