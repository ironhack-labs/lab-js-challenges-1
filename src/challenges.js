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
  "matter"
];

function howManyTimes(wordCount, wordToFind) {

  if (wordCount.length === 0 || wordToFind.length === 0){
    return 0
  }

  let currentWordCount = 0;

  for (let i = 0; i <wordCount.length;i++){
    if (wordCount[i] === wordToFind){
      currentWordCount++;
    }
  }
  return currentWordCount
}
console.log(howManyTimes(repeatedWords, "matter"));




// Iteration 2 | Number Sequence
function createSequence(n) {

  if (n === 0){
    return [];
  }

let result = []
  for (let i = 0; i<= n;i++){
  result[i]=i;
    }
    return result
}
console.log(createSequence(10
));



// Iteration 3 | Multiply for Each





// Iteration 4 | Filter Out
const original = ["cat", "dog", "fish", "bird", "cat", "fish"];
const toRemove = ["cat", "dog"];

function filterOut(original, toRemove) {
  if (original.length === 0){
    return null;
  }
  else if (toRemove.length === 0){
  return original;
  }
  
  let results = [];
  for (let i = 0; i<original.length;i++){
if (!toRemove.includes(original[i])) {
  results.push(original[i]);
}
  }
return results
}
console.log(filterOut(original, toRemove));



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
  "bring"
];

function uniquifyArray(array, newArray) {

  if(!newArray) {
    newArray = [];
  }
  if (array.length === 0) {
  return null;
  }
  for (let i = 0;i <array.length; i++){
    if (!newArray.includes(array[i])) {
      newArray.push(array[i])
    }

  }
  return newArray;

}
uniquifyArray(duplicateWords);







