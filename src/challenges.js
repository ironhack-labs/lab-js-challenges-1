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

function howManyTimes(array, searchWord) {
  let count = 0
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (array[i] === searchWord) {
      count++
    }
  }
  return count
}





// Iteration 2 | Number Sequence
function createSequence(number) {
  const array = []
  if (!number) {
    return array
  }
  for (let i = 0; i <= number; i++) {
    array.push(i)
  }
  return array
}




// Iteration 3 | Multiply for Each
const numbers = [1, 2, 5, 10, 13, 50];

function multiplyBy(numbers, number) {
  const resultArray = []
  // for (let i = 0; i < numbers.length; i++) {
  //   resultArray.push(numbers[i]*number)
  // }
  // return resultArray
  numbers.forEach(num => {
    resultArray.push(num * number)
  });
  return resultArray
}




// Iteration 4 | Filter Out
const original = ["cat", "dog", "fish", "bird", "cat", "fish"];
const toRemove = ["cat", "dog"];

function filterOut(original, toRemove) {
  if (original.length === 0) {
    return null
  } else {
    const filteredArray = [];
    for (let i = 0; i < original.length; i++) {
      let flag = false;
      for (let j = 0; j < toRemove.length; j++) {
        if (original[i] === toRemove[j]) {
          flag = true;
          continue;
        }
      }
      if (flag) {
        continue;
      }
      filteredArray.push(original[i])
    }
    return filteredArray;
  }
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

function uniquifyArray(duplicateWords) {
  if (duplicateWords.length===0) {
    return null
  } else {
    const arrayCopy= duplicateWords
    const result = []
    const indexes = []
    for (let i = 0; i < duplicateWords.length; i++) {
      const duplicateWord = duplicateWords[i];
      let count = 0
      for (let j = 0; j < arrayCopy.length; j++) {
        const copy = arrayCopy[j];
        if (duplicateWord===copy) {
          // console.log(duplicateWord, copy);
          count++
        }
        if (count > 1 && duplicateWord === copy) {
          // console.log(count);
          // console.log("j", j);
          indexes.push(j)
        }
      }
    }
    // console.log("indexes: ", indexes);
    
    for (let i = 0; i < duplicateWords.length; i++) {
      const word = duplicateWords[i];
      let flag = false;
      for (let j = 0; j < indexes.length; j++) {
        const number = indexes[j];
          if (i === number) {
            flag = true;
          }
      }
      if (flag) {
        continue;
      }
      result.push(word)
    }
    if (duplicateWords.length === result.length) {
      return duplicateWords
    }
    return result
  }
 }
// console.log(uniquifyArray([
//   "iPhone",
//   "Samsung",
//   "Android",
//   "iOS",
//   "iPhone",
//   "Samsung",
//   "Nokia",
//   "Blackberry",
//   "Android",
// ]));
 



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

function greatestProduct(array) { 
  //Multiplicación de filas
  const productFilaMatrix =[[]]
  let string =""
  for (let i = 0; i < array.length; i++) {
    const fila = array[i];
    const aux  = [];
    // string += "\nFila\n"
    // let string = ""
    //  console.log("typeof(fila)");
    //console.log("Columna");
    for (let j = 0; j < fila.length; j++) {
      const columna = fila[j];
      // console.log(columna);
      // string += columna + ", ";
      // string += `\n${columna}\n`
      let result= 1;
      if (j < fila.length - 3) {
        for (let k = 0; k < 4; k++) {
          const number = fila[k+j];
          // string += `${number} `;
          result *= number;
        }
        aux.push(result);
        // string += `${result} `;
      }
      // console.log(string);
    }
    productFilaMatrix.push(aux);
    // console.log(string);
    
  }
  // console.log(string);
  // for (let i = 0; i < productFilaMatrix.length; i++) {
  //    console.log(productilaMatrix[i]);
  // }
  //Multiplicacion de columnas
  const productColumnMatrix =[[]]
  for (let i = 0; i < array.length; i++) {
    const fila = array[i];
    const aux = [];
    for (let j = 0; j < fila.length; j++) {
      const columna = fila[j];
      // string += `${array[j][i]} `;
      // let number = 1;
      if (j < array.length - 3) {
        let number = 1;
        for (let k = 0; k < 4; k++) {
          if (j+k < array.length) {
            // console.log(array[j+k][i]);          
            number *= array[j+k][i];  
          }
        }
        aux.push(number);
        // string += `${number} `;
        // string += " | ";
        // string += `${j} `;
      }
      // string += `${number} `;
      // string += `${j} `;
    }
    productColumnMatrix.push(aux)
    // string += `\n`; 
    // string += `${j}\n`;
    
    // if (i < array.length - 3) {
    //   let result = 1;
    //   for (let j = 0; j < 4; j++) {
    //     const number = fila[i+j][i];
    //     console.log(fila[i+j][i]);
        
    //   }
    // }
  }
  // console.log(string);
  // for (let i = 0; i < productColumnMatrix.length; i++) {
  //   console.log(productColumnMatrix[i]);
  // }

  //Mayor del array fila
  let maxOfRow= -1;
  for (let i = 0; i < productFilaMatrix.length; i++) {
    const fila = productFilaMatrix[i];
    for (let j = 0; j < fila.length; j++) {
      const columna = fila[j];
      // console.log("columna: ", columna);
      if (maxOfRow < columna) {
        maxOfRow =  columna;       
      }
    }
  }
  console.log("maxOfRow: ", maxOfRow);

  //Mayor del array columna
  let maxOfColum= -1;
  for (let i = 0; i < productColumnMatrix.length; i++) {
    const fila = productColumnMatrix[i];
    for (let j = 0; j < fila.length; j++) {
      const columna = fila[j];
      // console.log("columna: ", columna);
      if (maxOfColum < columna) {
        maxOfColum =  columna;       
      }
    }
  }
  console.log("maxOfColum: ", maxOfColum);
  if (maxOfColum < maxOfRow) {
    return maxOfRow;
  } else {
    return maxOfColum
  }
}
greatestProduct(matrix);