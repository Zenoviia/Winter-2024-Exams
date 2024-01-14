// Find longest string

// Step 4
// Remove dead code (maxRandom = Math.random)

'use strict';

const longest = function (line = []) {
  let maxLength = -1;
  let longestStr = ' ';
  for (let i of line) {
    {
      {
        if (i.length > maxLength) {
          maxLength = i.length;
        } else {
          i = 0;
        }
      }
      {
        if (i.length >= maxLength) {
          longestStr = i;
        } else {
          i = -1;
        }
      }
    }
  }
  Object.assign(line, { length: longestStr.length });
  return longestStr;
};

module.exports = longest;
