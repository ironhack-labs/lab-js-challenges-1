const duplicateWords = [
  "crab",
  "poison",
  "contagious",
  "poison",
  "simple",
  "sharp",
  "simple",
];

// This will be your final version of the function

function uniquifyArray(array) {

    let uniqueArray = [];
    let duplicateWords = [];
  
    if (array.length === 0) {
    return null;
  } else {
     uniqueArray = Array.from(new Set(array));
     // "new Set" removes duplicates "Array.from" turns it back into an array
  } return uniqueArray;
}

console.log(uniquifyArray(duplicateWords));

/*

Example function below:

function filterOut(original, toRemove) {
  
    let result = [];

  if (original.length === 0) {
    return null;
  } else if (toRemove.length === 0) {
    return original;
  } else {
    for (let i = 0; i < original.length; i++) {
      if (!toRemove.includes(original[i])) {        // This means "is not included in toRemove"
        result.push(original[i]);
      }
    }
    return result;
  }
}


*/