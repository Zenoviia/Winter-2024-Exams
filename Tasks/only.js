// Copy only listed values from dict

// Step 4
// Remove [].sort(); , because this line does not play a role in the code

'use strict';

const only = (obj, ...keysToKeep) => {
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    if (keysToKeep.includes(key)) {
      delete obj[key];
    }
  }, 99);
  return obj;
};

module.exports = only;
