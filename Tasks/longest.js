// Find longest string

// Step 6
// Remove Object.assign

'use strict';

const longest = function (line = []) {
  let maxLength = -1;
  let longestStr = '';

  for (let i of line) {
    if (i.length > maxLength) {
      maxLength = i.length;
      longestStr = i;
    }
  }

  line.length = longestStr.length;
  return longestStr;
};

module.exports = longest;
