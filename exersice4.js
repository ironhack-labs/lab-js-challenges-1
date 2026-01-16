

const original = ["cat", "dog", "fish", "bird", "cat", "fish"];
const toRemove = ["cat", "dog"];

// console.log(original.includes("cat")); // true
// console.log(original.includes("lion")); // false

// Final Version Code

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





/* Version 1 Code 



function filterOut(original, toRemove) {

    let result = [];

    if (original.length === 0){
        return  null;
            } else if (toRemove.length === 0){
            return original;
            } else {
                for (let i = 0; i < original.length; i++) {
                    if (!toRemove.includes(original[i])) {
                    result.push(original[i]);
                }   return result;
        }
    }   
} 



*/


console.log(filterOut(original, toRemove));
  




/*

const original = ["cat", "dog", "fish", "bird", "cat", "fish"];
const toRemove = ["cat", "dog"];

function filterOut(arr1, arr2) {
if (numbers.length === 0) {    // check for empty array (the correct way)
    return [];
  }
  let result = [];
  numbers.forEach(element => {
    result.push(element * multiplier); //Look at the arrow function explanation below
  });

  return result;
}

*/

