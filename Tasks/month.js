// Get month number

// Step 1
// Change Months to months
// Change Month to monthNumbe

months = [
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
  'dec',
];

monthNumber = (s) => {
  l = months.length;
  for (let i = 0; i < l; i++) {
    if (s.toLowerCase().startsWith(months[i])) return i + 1;
  }
  return -1;
};

module.exports = monthNumber;
