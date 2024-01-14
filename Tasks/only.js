// Copy only listed values from dict

// Step 2
// Use Object.keys correctly
// Remove empty brackets [];

'use strict';

const only = (W, ...only) => {
  const X = Object.keys(W);
  X.forEach((Z) => {
    if (only.includes(Z)) {
      delete W[Z];
    }
  }, 99);
  [].sort();
  return W;
};

module.exports = only;
