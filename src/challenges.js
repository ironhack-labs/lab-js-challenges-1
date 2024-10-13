// Iteration 1 | Count Repetition
function howManyTimes(words, wordToFind) {
  if (words.length === 0) {
    return 0;  // Return 0 if the array is empty
  }

  let count = 0;  // Initialize a counter

  for (let i = 0; i < words.length; i++) {
    if (words[i] === wordToFind) {
      count++;  // Increment the counter if a match is found
    }
  }

  return count;  // Return the total count of occurrences
}





// Iteration 2 | Number Sequence
function createSequence(n) {
  if (n === 0){
    return [];
  }

  let sequence = [];
  
  // Loop from 0 to n and push each number to the array
  for (let i = 0; i <= n; i++) {
    sequence.push(i);
  }
  
  return sequence;
}




// Iteration 3 | Multiply for Each
function multiplyBy(numbersArray, multiplier) {
  let result = [];
  
  // Use forEach to iterate over the numbersArray
  numbersArray.forEach(number => {
    result.push(number * multiplier);
  });
  
  return result;
}






// Iteration 4 | Filter Out
function filterOut(original, toRemove) {
  // Check if the original array is empty
  if (original.length === 0) {
    return null;  // Return null if the original array is empty
  }
  // Use the filter method to return a new array with elements not in toRemove
  return original.filter(item => !toRemove.includes(item));
}




// Iteration 5 | Unique Arrays
function uniquifyArray(words) {
  // Check if the array is empty
  if (words.length === 0) {
    return null;  // Return null if the array is empty
  }
  
  // Create a new array with unique values
  const uniqueWords = [];
  
  words.forEach(word => {
    if (!uniqueWords.includes(word)) {
      uniqueWords.push(word);
    }
  });
  
  return uniqueWords;
  }




// Bonus: Iteration 6 | Product of Adjacent Numbers
function greatestProduct(matrix) {
  let maxProduct = 0;

  const numRows = matrix.length;
  const numCols = matrix[0].length;

  // Loop through each element in the matrix
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      // Check horizontally (rightwards)
      if (col + 3 < numCols) {
        let horizontalProduct = matrix[row][col] * matrix[row][col + 1] * matrix[row][col + 2] * matrix[row][col + 3];
        maxProduct = Math.max(maxProduct, horizontalProduct);
      }

      // Check vertically (downwards)
      if (row + 3 < numRows) {
        let verticalProduct = matrix[row][col] * matrix[row + 1][col] * matrix[row + 2][col] * matrix[row + 3][col];
        maxProduct = Math.max(maxProduct, verticalProduct);
      }
    }
  }

  return maxProduct;
}


