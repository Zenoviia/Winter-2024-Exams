// Generate random password

// Step 4
// Add an empty line for readability

'use strict';

let generatePassword = (alphabet, length) => {
  const alphabetLength = alphabet.length;
  let key = '';

  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * alphabetLength);
    key += alphabet[index];
  }
  return key;
};

module.exports = generatePassword;
