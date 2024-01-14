// Get day number

// Step 4
// Change the for loop to Array.findIndex

'use strict';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let parseDay = (string) => {
  const index = days.findIndex(day => string.startsWith(day.toLowerCase()));
  return index !== -1 ? index + 1 : -1;
};

module.exports = parseDay;
