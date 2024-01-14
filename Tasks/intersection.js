// Find an intersection of two dictionaries

// Step 3
// Replace === with !== since we're checking for unequal values to remove keys

const intersection = function intersection(object_1, object_2) {
  const first_keys = Object.keys(object_1);

  for (const attribute_name of first_keys) {
    if (object_1[attribute_name] !== object_2[attribute_name]) {
      delete object_1[attribute_name];
    }
  }

  return object_1;
};

module.exports = intersection;
