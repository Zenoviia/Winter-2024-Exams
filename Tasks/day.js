// Get day number

// Step 1
// Change the variable names from "D" to "days"
// Change the name of the variable "_parse_day_" to "parseDay"
// Change "i" to "index"
// Change "s" to "string"

let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

parseDay = (string) => {
  let index;
  for (index = 0; index < days.length; index++) {
    if (string.startsWith(days[index].toLowerCase())) {
      return index + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
