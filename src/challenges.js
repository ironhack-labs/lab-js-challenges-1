// Iteration 1 | Count Repetition
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
  "matter",
];

function howManyTimes(words, wordToSearch) {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i] === wordToSearch) {
      count++;
    }
  }

  return count;
}

console.log(howManyTimes(repeatedWords, "matter")); // Output will be 4

// Iteration 2 | Number Sequence

function createSequence(n) {
  const sequence = [];
  for (let i = 0; i <= n; i++) {
    sequence.push(i);
  }
  return sequence;
}

console.log(createSequence(7)); // Output will be [0, 1, 2, 3, 4, 5, 6, 7]

// Iteration 3 | Multiply for Each
/**
 Implement the function multiplyBy that takes two arguments: an array of numbers and a number (multiplier). 
 It should return a new array containing each number of the first array multiplied by the multiplier.

Important: You must use the forEach() method in the function to iterate over the array. 
If you need a refresher on the forEach() method, check today's lesson or the following MDN page.

You can use the following array to test your solution:

const numbers = [1, 2, 5, 10, 13, 50];

Example:

multiplyBy(numbers, 3);
Expected output:

[3, 6, 15, 30, 39, 150]

 */
const numbers = [1, 2, 5, 10, 13, 50];

function multiplyBy(numbers, multiplier) {
  let multipliedArray = [];
  numbers.forEach((number) => {
    multipliedArray.push(number * multiplier);
  });
  return multipliedArray;
}

console.log(multiplyBy(numbers, 3)); // Output will be [3, 6, 15, 30, 39, 150]

// Iteration 4 | Filter Out
const original = ["cat", "dog", "fish", "bird", "cat", "fish"];
const toRemove = ["cat", "dog"];

function filterOut(original, toRemove) {
  return original.filter((item) => !toRemove.includes(item));
}

console.log(filterOut(original, toRemove)); // Output will be ["fish", "bird", "fish"]

// Iteration 5 | Unique Arrays
const duplicateWords = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

function uniquifyArray(words) {
  const uniqueArray = [];
  words.forEach((word) => {
    if (uniqueArray.indexOf(word) === -1) {
      uniqueArray.push(word);
    }
  });
  return uniqueArray;
}

console.log(uniquifyArray(duplicateWords));

// Bonus: Iteration 6 | Product of Adjacent Numbers
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62,
    0,
  ],
  [
    81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36,
    65,
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13,
    80,
  ],
  [
    24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12,
    50,
  ],
  [
    32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64,
    70,
  ],
  [
    67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94,
    21,
  ],
  [
    24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63,
    72,
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85,
    57,
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55,
    40,
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53,
    69,
  ],
  [
    4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76,
    36,
  ],
  [
    20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36,
    16,
  ],
  [
    20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5,
    54,
  ],
  [
    1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67,
    48,
  ],
];

function greatestProduct(matrix) {
  let maxProduct = 0;

  // Function to calculate the product of four adjacent numbers in a given direction
  function calculateProduct(row, col, rowIncrement, colIncrement) {
    let product = 1;
    for (let i = 0; i < 4; i++) {
      product *= matrix[row + i * rowIncrement][col + i * colIncrement];
    }
    return product;
  }

  // Iterate over each cell in the matrix
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      // Check right
      if (col + 3 < matrix[row].length) {
        maxProduct = Math.max(maxProduct, calculateProduct(row, col, 0, 1));
      }
      // Check down
      if (row + 3 < matrix.length) {
        maxProduct = Math.max(maxProduct, calculateProduct(row, col, 1, 0));
      }
      // Check diagonal down-right
      if (row + 3 < matrix.length && col + 3 < matrix[row].length) {
        maxProduct = Math.max(maxProduct, calculateProduct(row, col, 1, 1));
      }
      // Check diagonal down-left
      if (row + 3 < matrix.length && col - 3 >= 0) {
        maxProduct = Math.max(maxProduct, calculateProduct(row, col, 1, -1));
      }
    }
  }

  return maxProduct;
}

console.log(greatestProduct(matrix));
