/* Iteration 1 | Count Repetition
/*
Declare a function named howManyTimes that will take in an array of words as the first argument and a word to search for as the second argument. 
The function should return the number of times the word appears in the array.

You can use the following array to test your solution:
Example:

howManyTimes(repeatedWords, "matter");
Expected output:

4

*/
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

function howManyTimes(arrayWords, wordSearch) {
  let count = 0;

  for (let i = 0; i < arrayWords.length; i++) {
    if (arrayWords[i] === wordSearch) {
      count++;
    }
  }
  return count;
}




// Iteration 2 | Number Sequence

/* Declare a function named createSequence. The function should take one argument: a number (n). 
The function should return an array of numbers in the range from 0 to n. */


function createSequence(n) {

  const resArray = [];

  if (n === 0) {
    return [];
  }

  for (let i = 0; i <= n; i++) {
    resArray.push(i);
  }

  return resArray;
}




// Iteration 3 | Multiply for Each

/* Implement the function multiplyBy that takes two arguments: an array of numbers and a number (multiplier). 
It should return a new array containing each number of the first array multiplied by the multiplier.

Important: You must use the forEach() method in the function to iterate over the array. If you need a refresher 
on the forEach() method, check today's lesson or the following MDN page. */

const numbers = [1, 2, 5, 10, 13, 50];

function multiplyBy(oldArray, multiplier) {
  const newArray = [];

  oldArray.forEach(
    function (el, i, arr) {

      const oldVal = el; /* arr[i] */
      const newVal = oldVal * multiplier;
      newArray.push(newVal);

    }
  )

  return newArray;
}




// Iteration 4 | Filter Out
/*  Declare a function filterOut. The function should take two arguments: an array of strings (original), and an array of strings
 to filter out.

The function should return a new array that only includes the strings from the original array that are not present
 in the second array. In other words, you should remove all the strings listed in the second array.

You can use the following array to test your solution:*/

const original = ["cat", "dog", "fish", "bird", "cat", "fish"];
const toRemove = ["cat", "dog"];

function filterOut(original, toRemove) {
  if (original.length === 0) {
    return null;
  }

  let newArray = [];

  original.forEach(
    function (el, i, arr) {

      if (!toRemove.includes(el)) {
        newArray.push(el);
      }

    }
  )

  return newArray;
}



// Iteration 5 | Unique Arrays
/* Take the following array, remove the duplicates, and return a new array. You are more than likely going to 
want to check out the Array methods indexOf and includes.

Do this in the form of a function uniquifyArray that receives an array of words as an argument.

You can use the following array to test your solution: */
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
  "bring"
];

function uniquifyArray(arrayWords) {

  if (arrayWords.length === 0) {
    return null;
  }

  return Object.keys(doCount(arrayWords));
}


function doCount(arrayWords) {
  counting = {};
  for (const word of arrayWords) {

    if (Object.keys(counting).includes(word)) {
      counting[word] += 1;
    } else {
      counting[word] = 1;
    }
  }
  return counting;
}









// Bonus: Iteration 6 | Product of Adjacent Numbers
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct(inputArray) { 

  var products = [];
  for(var i = 0; i <= inputArray.length; i = i + 2) {
      products.push(inputArray[i] * inputArray[i + 1]);

  }
}