

  function createSequence(number) {
    
    if (number === 0) {
        return [];
    } let newArray = []; 
    for (let i = 0 ; i <= number ; i++) {
        newArray.push(i);
    }
    return newArray;

    }

    console.log(createSequence([]));




// describe("Iteration 2 | Number Sequence", () => {
//   describe("function createSequence()", () => {
//     it("should be defined as a function", () => {
//       expect(typeof createSequence).toBe("function");
//     });

//     it("should return an empty array if receives 0 (zero) as argument", () => {
//       expect(createSequence(0)).toEqual([]);
//     });

//     it("should return an array with the numbers in range from 0 to n", () => {
//       expect(createSequence(5)).toEqual([0, 1, 2, 3, 4, 5]);
//       expect(createSequence(11)).toEqual([
//         0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
//       ]);
//     });
//   });
// });