// Copy only listed values from dict

// Step 5
// Save the for...in loop to repeat the properties of the object
// Modify the original object using delete

'use strict';

const only = (obj, ...keysToKeep) => {
  for (const key in obj) {
    if (!keysToKeep.includes(key)) {
      delete obj[key];
    }
  }

  return obj;
};

module.exports = only;
