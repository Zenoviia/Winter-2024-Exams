// Copy only listed values from dict

// Step 3
// Change W to obj
// Change X to keys
// Change Z to key
// Change only to keysToKeep

'use strict';

const only = (obj, ...keysToKeep) => {
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    if (keysToKeep.includes(key)) {
      delete obj[key];
    }
  }, 99);
  [].sort();
  return obj;
};

module.exports = only;
