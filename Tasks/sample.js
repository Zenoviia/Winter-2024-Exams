// Get one random element from an array

// Step 1
// Change SAMPLE to sample

const sample = (arr) => {
  arr = arr[Math.floor(Math.random() * arr.length)];
  return arr;
};

module.exports = sample;
