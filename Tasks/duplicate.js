// Return an array without duplicates

// Step 1
// Change variable's name from "res" to "result"
// Change "i" to "index"
// Change "N" to "numberOfElements"

duplicate = (value, numberOfElements) => {
  if (numberOfElements <= 0) return [];
  else {
    result = [];
    for (let index = 0; index < numberOfElements; index++) {
      result[index] = value;
    }
    return result;
  }
};

module.exports = duplicate;
