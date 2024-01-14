// Find longest string

// Step 5
// Remove unnecessary blocks {}
// Remove the unnecessary else block
// Remove the assignments i = 0 and i = -1 inside the loop

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

Object.assign(line, { length: longestStr.length });
  return longestStr;
};

module.exports = longest;
