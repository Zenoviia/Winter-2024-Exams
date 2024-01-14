// Filter array by type name

// Step 3
// Replace the loop with the built-in filter() method, and also use filter() to create an array whose elements correspond to filterType
'use strict';

'use strict';

const FilterByType = (array, filterType) => {
  return array.filter(currentElement => typeof currentElement === filterType);
};

module.exports = FilterByType;
