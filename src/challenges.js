// Iteration 1 | Count Repetition

function howManyTimes(wordCount, searchWord) {
  if (wordCount === 0){
    return null
  }

  let count = 0;
  for(let i = 0; i < wordCount.length ; i++){

    if (wordCount[i] === searchWord){
      count++
    }
  }
  return count;
}

let emptyArray = []
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

//console.log(howManyTimes(repeatedWords , "machine"))

// Iteration 2 | Number Sequence
function createSequence(n) {
  if(n === 0){
    return []
  }

  let count = []

  for (let i = 0; i <= n ; i++){

    count.push(i)

  }
  return count
}

//console.log(createSequence(15))


// Iteration 3 | Multiply for Each
const numbers = [1, 2, 5, 10, 13, 50];

function multiplyBy(arrayNumber , num) {
  let result = []

  if(arrayNumber.length === 0){
    return result
  }
  arrayNumber.forEach((number) => {

    result.push(number * num);

  });
  return console.log(result)
}


//multiplyBy([5] , 10)

// Iteration 4 | Filter Out
const original = ["cat", "dog", "fish", "bird", "cat", "fish"];
const toRemove = ["cat", "dog"];

function filterOut(original , toRemove) {
  if(original.length === 0){
    return null;
  }
  if(toRemove.length === 0){
    return original;
  }
  let result = original.filter(function(word) {
    return toRemove.includes(word);
  });

  return console.log(result);
}

filterOut(original , toRemove)

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

function uniquifyArray(Words) {
  if(words.length === 0){
    return null;
  }
  let result = [];

  for (let i = 0; i < array.length; i++){
    if(result.indexOf(words[i] === -1 )){
      result.push(word[i])
    }
  }
  return result; 
}


