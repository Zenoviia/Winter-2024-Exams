// Filter array by type name

// Step 2
// Add 'use strict';
// Declare constants using const

'use strict';

const FilterByType = (array, filterType) => {
  const remove = [];
  for (const currentElement of array) {
    const currentIndex = array.indexOf(currentElement);
    if (typeof array[currentIndex] !== filterType) {
      remove.unshift(currentIndex);
    }
  }
  for (const currentIndex of remove) {
    array.splice(currentIndex, 1);
  }
  return array;
};

module.exports = FilterByType;
