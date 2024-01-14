// Generate random password

// Step 2
// Add 'use strict';
// Declare the key variable using let
// Declare index using const

'use strict';

let generatePassword = (alphabet, length) => {
  const alphabetLength = alphabet.length;
  let key = '';
  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * alphabetLength);
    key = key + alphabet[index];
  }
  return key;
};

module.exports = generatePassword;
