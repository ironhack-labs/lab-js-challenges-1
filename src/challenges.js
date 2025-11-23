// Iteration 1 | Count Repetition
function howManyTimes(arr, word) {
  let count = 0;
  arr.forEach(item => {
    if (item === word) count++;
  });
  return count;
}

// Iteration 2 | Number Sequence
function createSequence(n) {
  const result = [];
  for (let i = 0; i <= n; i++) {
    result.push(i);
  }
  return result;
}

// Iteration 3 | Multiply for Each
function multiplyBy(numbersArray, multiplier) {
  const result = [];
  numbersArray.forEach(num => {
    result.push(num * multiplier);
  });
  return result;
}

// Iteration 4 | Filter Out
function filterOut(original, toFilter) {
  const result = [];
  original.forEach(word => {
    if (!toFilter.includes(word)) {
      result.push(word);
    }
  });
  return result;
}

// Iteration 5 | Unique Arrays
function uniquifyArray(wordsArray) {
  const unique = [];
  wordsArray.forEach(word => {
    if (!unique.includes(word)) {
      unique.push(word);
    }
  });
  return unique;
}

// Bonus: Iteration 6 | Greatest Product
function greatestProduct(matrix) {
  let maxProduct = 0;

  // Horizontal & vertical check
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      
      // Horizontal (right)
      if (col + 3 < matrix[row].length) {
        const product =
          matrix[row][col] *
          matrix[row][col + 1] *
          matrix[row][col + 2] *
          matrix[row][col + 3];
        if (product > maxProduct) maxProduct = product;
      }

      // Vertical (down)
      if (row + 3 < matrix.length) {
        const product =
          matrix[row][col] *
          matrix[row + 1][col] *
          matrix[row + 2][col] *
          matrix[row + 3][col];
        if (product > maxProduct) maxProduct = product;
      }
    }
  }

  return maxProduct;
}
