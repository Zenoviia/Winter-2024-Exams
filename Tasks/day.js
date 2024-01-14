// Get day number

// Step 5
// Add an if-else block to improve readability

'use strict';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let parseDay = (string) => {
  const index = days.findIndex(day => string.startsWith(day.toLowerCase()));
  if (index !== -1) {
    return index + 1;
  } else {
    return -1;
  }
};

module.exports = parseDay;
