// Find an intersection of two dictionaries

// Step 6
// Use forEach to iterate  the keys
// Use the arrow function

'use strict';

'use strict';

const intersection = function intersection(object1, object2) {
  const firstKeys = Object.keys(object1);

  firstKeys.forEach((key) => {
    if (object1[key] !== object2[key]) {
      delete object1[key];
    }
  });

  return object1;
};

module.exports = intersection;
