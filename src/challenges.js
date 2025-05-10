// Iteration 1 | Count Repetition
// This function takes an array of words and a word to search for
// It returns the number of times the search word appears in the array
function howManyTimes(words, searchWord) {
  // Initialize a counter to track occurrences
  let count = 0;
  
  // Loop through each word in the array
  for (let i = 0; i < words.length; i++) {
    // If the current word matches the search word, increment count
    if (words[i] === searchWord) {
      count++;
    }
  }
  
  // Return the final count
  return count;
}

// Iteration 2 | Number Sequence
// This function takes a number n and returns an array of numbers from 0 to n
function createSequence(n) {
  // Initialize an empty array to store the sequence
  let sequence = [];
  
  // Loop from 0 to n (inclusive)
  for (let i = 0; i <= n; i++) {
    // Add each number to the sequence array
    sequence.push(i);
  }
  
  // Return the completed sequence
  return sequence;
}

// Iteration 3 | Multiply for Each
// This function takes an array of numbers and a multiplier
// It returns a new array with each number multiplied by the multiplier
// MUST use forEach method as required by the instructions
function multiplyBy(numbers, multiplier) {
  // Initialize an empty array to store the result
  let result = [];
  
  // Use forEach to iterate through each number in the array
  numbers.forEach(function(number) {
    // Multiply the current number by the multiplier and add to result
    result.push(number * multiplier);
  });
  
  // Return the new array with multiplied values
  return result;
}

// Iteration 4 | Filter Out
// This function takes an original array and an array of items to remove
// It returns a new array with the items from the second array filtered out
function filterOut(original, toRemove) {
  // Initialize an empty array to store filtered results
  let filtered = [];
  
  // Loop through each item in the original array
  for (let i = 0; i < original.length; i++) {
    // Check if the current item is NOT in the toRemove array
    if (!toRemove.includes(original[i])) {
      // If it's not in toRemove, add it to our filtered array
      filtered.push(original[i]);
    }
  }
  
  // Return the filtered array
  return filtered;
}

// Iteration 5 | Unique Arrays
// This function takes an array of words and returns a new array with duplicates removed
function uniquifyArray(words) {
  // Check if the array is empty
  if (words.length === 0) {
    return [];
  }
  
  // Initialize an array to store unique values
  let uniqueWords = [];
  
  // Loop through each word in the input array
  for (let i = 0; i < words.length; i++) {
    // If the current word is not already in our uniqueWords array, add it
    if (!uniqueWords.includes(words[i])) {
      uniqueWords.push(words[i]);
    }
  }
  
  // Return the array with only unique values
  return uniqueWords;
}

// Bonus: Iteration 6 | Product of Adjacent Numbers
// This function finds the greatest product of four adjacent numbers in a matrix
// Numbers can be adjacent horizontally or vertically
function greatestProduct(matrix) {
  let maxProduct = 0;
  
  // Check horizontal products
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col <= matrix[row].length - 4; col++) {
      // Calculate product of 4 adjacent horizontal numbers
      const product = matrix[row][col] * matrix[row][col+1] * 
                     matrix[row][col+2] * matrix[row][col+3];
      
      // Update maxProduct if current product is greater
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  }
  
  // Check vertical products
  for (let row = 0; row <= matrix.length - 4; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      // Calculate product of 4 adjacent vertical numbers
      const product = matrix[row][col] * matrix[row+1][col] * 
                     matrix[row+2][col] * matrix[row+3][col];
      
      // Update maxProduct if current product is greater
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  }
  
  // Return the greatest product found
  return maxProduct;
}