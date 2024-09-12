// Iteration 1 | Count Repetition
function howManyTimes(wordsArray, wordToSearch) {
  let count = 0;
  wordsArray.forEach((word) => {
    if (word === wordToSearch) {
      count++;
    }
  });
  return count;
}

// Test case
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
  if (n <= 0) {
    return []; // Return an empty array if n is 0 or negative
  }
  let sequence = [];
  for (let i = 0; i <= n; i++) {
    sequence.push(i);
  }
  return sequence;
}

// Test cases
console.log(createSequence(7));  // Output: [0, 1, 2, 3, 4, 5, 6, 7]
console.log(createSequence(0));  // Output: []
console.log(createSequence(-1)); // Output: []

// Iteration 3 | Multiply for Each
function multiplyBy(numbersArray, multiplier) {
  let result = [];
  numbersArray.forEach((number) => {
    result.push(number * multiplier);
  });
  return result;
}

// Test case
const numbers = [1, 2, 5, 10, 13, 50];
console.log(multiplyBy(numbers, 3)); // Output: [3, 6, 15, 30, 39, 150]

// Iteration 4 | Filter Out
function filterOut(originalArray, toRemoveArray) {
  if (originalArray.length === 0) {
    return null; // Return null for empty array
  }
  return originalArray.filter((item) => !toRemoveArray.includes(item));
}

// Test cases
const original = ["cat", "dog", "fish", "bird", "cat", "fish"];
const toRemove = ["cat", "dog"];
console.log(filterOut(original, toRemove)); // Output: ["fish", "bird", "fish"]
console.log(filterOut([], toRemove));       // Output: null


// Iteration 5 | Unique Arrays
function uniquifyArray(wordsArray) {
  if (wordsArray.length === 0) {
    return null; // Return null for empty array
  }
  let uniqueArray = [];
  wordsArray.forEach((word) => {
    if (!uniqueArray.includes(word)) {
      uniqueArray.push(word);
    }
  });
  return uniqueArray;
}

// Test cases
const duplicateWords = [
  "crab",
  "poison",
  "contagious",
  "poison",
  "simple",
  "sharp",
  "simple"
];
console.log(uniquifyArray(duplicateWords)); // Output: ["crab", "poison", "contagious", "simple", "sharp"]
console.log(uniquifyArray([]));             // Output: null

// Bonus: Iteration 6 | Product of Adjacent Numbers
function greatestProduct(matrix) {
  let maxProduct = 0;

  // Dimensions of the matrix
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Helper function to compute product of four numbers
  const productOfFour = (a, b, c, d) => a * b * c * d;

  // Traverse the matrix
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // Check horizontal product (rightwards)
      if (j + 3 < cols) {
        const horizontalProduct = productOfFour(matrix[i][j], matrix[i][j + 1], matrix[i][j + 2], matrix[i][j + 3]);
        maxProduct = Math.max(maxProduct, horizontalProduct);
      }

      // Check vertical product (downwards)
      if (i + 3 < rows) {
        const verticalProduct = productOfFour(matrix[i][j], matrix[i + 1][j], matrix[i + 2][j], matrix[i + 3][j]);
        maxProduct = Math.max(maxProduct, verticalProduct);
      }

      // Check diagonal product (down-right)
      if (i + 3 < rows && j + 3 < cols) {
        const diagonalRightProduct = productOfFour(matrix[i][j], matrix[i + 1][j + 1], matrix[i + 2][j + 2], matrix[i + 3][j + 3]);
        maxProduct = Math.max(maxProduct, diagonalRightProduct);
      }

      // Check diagonal product (down-left)
      if (i + 3 < rows && j - 3 >= 0) {
        const diagonalLeftProduct = productOfFour(matrix[i][j], matrix[i + 1][j - 1], matrix[i + 2][j - 2], matrix[i + 3][j - 3]);
        maxProduct = Math.max(maxProduct, diagonalLeftProduct);
      }
    }
  }

  return maxProduct;
}

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91, 08],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63, 94, 39, 63, 08, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 14, 00, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92],
  [16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40],
  [04, 52, 08, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54],
  [01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48]
];

console.log(greatestProduct(matrix));  // Output the greatest product
