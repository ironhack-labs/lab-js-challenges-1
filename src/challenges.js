// Iteration 1 | Count Repetition

function howManyTimes(words, word) {
  let count = 0; // Initialize a counter to keep track of the number of occurrences

  // Loop through the array to count the occurrences of the word
  for (let i = 0; i < words.length; i++) {
      if (words[i] === word) {
          count++; // Increment the counter if the word is found
      }
  }

  return count; // Return the number of occurrences
}

// Test the function with the provided array
const repeatedWords = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter"
];

console.log(howManyTimes(repeatedWords, "matter")); // Output: 4


// Iteration 2 | Number Sequence

function createSequence(n) {
  // Initialize an empty array to store the sequence
  const sequence = [];

  // Loop from 0 to n and push each number to the sequence array
  for (let i = 0; i <= n; i++) {
      sequence.push();
  }

  return sequence; // Return the sequence array
}

// Test the function with an example
console.log(createSequence(7)); // Output: [0, 1, 2, 3, 4, 5, 6, 7]


// Iteration 3 | Multiply for Each

function multiplyBy(arr, multiplier) {
  const result = [];
  
  arr.forEach(function(num) {
      result.push(num * multiplier);
  });
  
  return result;
}

// Test
const numbers = [1, 2, 5, 10, 13, 50];
console.log(multiplyBy(numbers, 3)); // Output: [3, 6, 15, 30, 39, 150]


// Iteration 4 | Filter Out

function filterOut(original, toRemove) {
  if (original.length === 0) {
      return null;
  }
  return original.filter(item => !toRemove.includes(item));
}

// Test
const original = [];
const toRemove = ["cat", "dog"];
console.log(filterOut(original, toRemove)); // Output: null

// Iteration 5 | Unique Arrays
function uniquifyArray(words) {
  if (words.length === 0) {
      return null;
  }

  const uniqueArray = [];
  
  words.forEach(word => {
      if (!uniqueArray.includes(word)) {
          uniqueArray.push(word);
      }
  });
  
  return uniqueArray;
}

// Test
const emptyArray = [];
console.log(uniquifyArray(emptyArray)); // Output: null






// Bonus: Iteration 6 | Product of Adjacent Numbers
function greatestProduct(matrix) {
  let maxProduct = 0;

  // Check horizontal products
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j <= matrix[i].length - 4; j++) {
          const product = matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
          if (product > maxProduct) {
              maxProduct = product;
          }
      }
  }

  // Check vertical products
  for (let i = 0; i <= matrix.length - 4; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
          const product = matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];
          if (product > maxProduct) {
              maxProduct = product;
          }
      }
  }

  return maxProduct;
}
