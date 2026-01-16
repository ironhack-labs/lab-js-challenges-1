
//	number of times word appears in array
	
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

  function howManyTimes(array, word) {
    if (array.length === 0) {
      return 0;
    }
    return array.filter(item => item === word).length;
  }

console.log(howManyTimes(repeatedWords,"matter"));



describe(function howManyTimes(array, word) {
    if (array.length === 0) {
      return 0;
    }
    return array.filter(item => item === word).length;
  });






/*

This arrow funtion:

    item => item === word  

means the same as this regular:

    function (item) {
      return item === word;
    }


console.log(howManyTimes(repeatedWords, "matter")); // 4

//const myArray = [1, 2, 3, 2, 4, 2, 5];
const elementToFind = 2;

const count = myArray.filter(item => item === elementToFind).length;

console.log(count); // Output: 3

*/