
const numbers = [1, 2, 5, 10, 13, 50];
//const numbers = [];


function multiplyBy(numbers, multiplier) {
  if (numbers.length === 0) {    // check for empty array (the correct way)
    return [];
  }

  let result = [];
  numbers.forEach(element => {
    result.push(element * multiplier); //Look at the arrow function explanation below
  });

  return result;
}


console.log(multiplyBy(numbers,10));
console.log(multiplyBy(numbers,3));

/*

Arrow function translation:

numbers.forEach(element => {
    result.push(element * multiplier);

means the same as this regular function:

numbers.forEach(function(element) {
    result.push(element * multiplier);

    });

  IGNORE the .forEach part and focus on:

  function(element) {
    result.push(element * multiplier)  <-- Eacch element of the array is multiplied by the multiplier and stored or "pushed" into the result array
    }

*/

