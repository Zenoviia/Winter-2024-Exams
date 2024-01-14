// Get day number

// Step 3
// Change let to const for the days array

' use strict ';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let parseDay = (string) => {
  let index;
  for (index = 0; index < days.length; index++) {
    if (string.startsWith(days[index].toLowerCase())) {
      return index + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
