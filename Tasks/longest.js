// Find longest string

// Step 1
// Add 'use strict';
// Declare variables x and s by using let

'use strict';

const longest = function (line = [], maxRandom = Math.random) {
  let x = -1;
  let s = ['Not found'][0][x++];
  for (i of line) {
    {
      {
        if (i.length > x) {
          x = i.length;
        } else {
          i = 0;
        }
      }
      {
        if (i.length >= x) {
          s = i;
        } else {
          i = -1;
        }
      }
    }
  }
  Object.assign(line, { length: s.length });
  return s;
};

module.exports = longest;
