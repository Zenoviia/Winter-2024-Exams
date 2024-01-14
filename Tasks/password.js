// Generate random password

// Step 1
// Rename GeneratePassword to generatePassword
// Change Index to index
// Changing MAX to alphabetLength and removing the variable key

let generatePassword = (alphabet, length) => {
  const alphabetLength = alphabet.length;
  for (let i = 0; i < length; i++) {
    index = Math.floor(Math.random() * alphabetLength);
    key = key + alphabet[index];
  }
  return key;
};

module.exports = generatePassword;
