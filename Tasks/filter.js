// Filter array by type name

// Step 1
// Change Filter to FilterByType
// Change T to array
// Change t to filterType
// Change C to currentElement
// Change x to currentIndex

FilterByType = (array, filterType) => {
  remove = [];
  for (currentElement of array) {
    currentIndex = array.indexOf(currentElement);
    if (typeof array[currentIndex] !== filterType) {
      remove.unshift(currentIndex);
    }
  }
  for (currentIndex of remove) array.splice(currentIndex, 1);
  return array;
};

module.exports = FilterByType;
