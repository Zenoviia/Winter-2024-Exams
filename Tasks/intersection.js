// Find an intersection of two dictionaries

// Step 4
// Change object_1 to object1
// Change object_2 on object2
// Change first_keys on firstKeys
// Change attribute_name on attributeName

const intersection = function intersection(object1, object2) {
  const firstKeys = Object.keys(object1);

  for (const attributeName of firstKeys) {
    if (object1[attributeName] !== object2[attributeName]) {
      delete object1[attributeName];
    }
  }

  return object1;
};

module.exports = intersection;
