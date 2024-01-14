// Find longest string

// Step 3
// Declare variable "i" using let
// Simplify longestStr initialization by using ' ' instead of ['Not found'][0][maxLength++]

'use strict';

const longest = function (line = [], maxRandom = Math.random) {
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
