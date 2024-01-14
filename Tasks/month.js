// Get month number

// Step 3
// Use findIndex to find the month index
// Save the string in lower case by creating the inputLowerCase variable
// use the ternary operator instead of if-else

'use strict';

const months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec'
];

const monthNumber = (input) => {
  const inputLowerCase = input.toLowerCase();
  const index = months.findIndex(month => inputLowerCase.startsWith(month));
  return index !== -1 ? index + 1 : -1;
};

module.exports = monthNumber;
