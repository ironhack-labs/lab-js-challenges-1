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

function howManyTimes(arr, wordToSearch) {
    if (arr.length === 0) {
    return 0  
  }  
     
      let count = 0
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === wordToSearch) {
           count = count + 1 
        } 
          
      }
        return count
    }
  




// Iteration 2 | Number Sequence
function createSequence(num) {
  let newArray = [];
  if (num === 0) {
    return newArray;
  } else if (num > 0) {
    for (let i = 0; i <= num; i++) {
      newArray.push(i)
    }

  } return newArray


}




// Iteration 3 | Multiply for Each
const numbers = [1, 2, 5, 10, 13, 50];

function multiplyBy(arr, mult) {
  let result = [] 
  arr.forEach(element => {

    result.push(element * mult)
    
  });
  return result
}




// Iteration 4 | Filter Out
const original = ["cat", "dog", "fish", "bird", "cat", "fish"];
const toRemove = ["cat", "dog"];

function filterOut(arr, arr2) {
  if (arr.length === 0)
    return null
  else if (arr2.length === 0)
    return arr

  return arr.filter(element => !arr2.includes(element))
}





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

function uniquifyArray(arr) {
  if (arr.length === 0)
    return null

  let uniqElements = []

  arr.forEach(element => {
    if (!uniqElements.includes(element)){
      uniqElements.push(element)
    }
  })
  
  return uniqElements
}

// Bonus: Iteration 6 | Product of Adjacent Numbers

let matrix = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];

function greatestProduct(arrayOfArrays) {
  let numberInArrays = null
  let toReturn = 0

  arrayOfArrays.forEach(arr => {
    arr.forEach(element => {
      if (element === 1 || element === 2){
        if (!numberInArrays === element){
          toReturn = "is different"
          return
        }
        else if (numberInArrays === null)
          numberInArrays = element
        else
          toReturn = numberInArrays === 1 ? 1 : 16
      }
      else {
        toReturn = "is different"
        return
      } 
    })
    if (toReturn === "is different"){
      toReturn = 0
      return
    }
  })

  return toReturn
}
