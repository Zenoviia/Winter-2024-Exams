// Find longest string

// Step 2
// Change x to maxLength
// Change s to longestStr
// Change i to str

'use strict';

const longest = function (line = [], maxRandom = Math.random) {
  let maxLength = -1;
  let longestStr = ['Not found'][0][maxLength++];
  for (i of line) {
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
