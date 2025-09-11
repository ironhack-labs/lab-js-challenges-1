// Iteration 1 | Count Repetition
const repeatedWords = [
	'machine',
	'matter',
	'subset',
	'trouble',
	'starting',
	'matter',
	'eating',
	'matter',
	'truth',
	'disobedience',
	'matter',
]

function howManyTimes(wordsArr, word) {
	let count = 0
	wordsArr.map((w) => {
		if (w === word) count++
	})
	return count
}

// Iteration 2 | Number Sequence
function createSequence(n) {
	arr = []
	if (n === 0) return arr
	for (let i = 0; i <= n; i++) {
		arr.push(i)
	}
	return arr
}

// Iteration 3 | Multiply for Each
const numbers = [1, 2, 5, 10, 13, 50]

function multiplyBy(numbers, multi) {
	arr = []
	numbers ? numbers.forEach((num) => arr.push(num * multi)) : null
	return arr
}

// Iteration 4 | Filter Out
const original = ['cat', 'dog', 'fish', 'bird', 'cat', 'fish']
const toRemove = ['cat', 'dog']

function filterOut(original, toRemove) {
	let arr = []
	if (original.length === 0) return null

	for (let i of original) {
		let filter = true
		for (let j of toRemove) {
			if (i === j) filter = false
		}
		if (filter) arr.push(i)
	}

	return arr
}

// Iteration 5 | Unique Arrays
const duplicateWords = [
	'crab',
	'poison',
	'contagious',
	'simple',
	'bring',
	'sharp',
	'playground',
	'poison',
	'communion',
	'simple',
	'bring',
]

function uniquifyArray(words) {
	let arr = []
	if (words.length == 0) return null
	for (let i of words) {
		let add = true
		for (let j of arr) {
			if (i === j) add = false
		}
		if (add) arr.push(i)
	}
	return arr
}

// Bonus: Iteration 6 | Product of Adjacent Numbers
const matrix = [
	[8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
	[
		49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62,
		0,
	],
	[
		81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36,
		65,
	],
	[52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
	[
		22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13,
		80,
	],
	[
		24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12,
		50,
	],
	[
		32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64,
		70,
	],
	[
		67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94,
		21,
	],
	[
		24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63,
		72,
	],
	[21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
	[78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
	[
		16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85,
		57,
	],
	[86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
	[
		19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55,
		40,
	],
	[4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
	[
		88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53,
		69,
	],
	[
		4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76,
		36,
	],
	[
		20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36,
		16,
	],
	[
		20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5,
		54,
	],
	[
		1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67,
		48,
	],
]

// Sol 1
// function greatestProduct(matrix) {
// 	// Check if all numbers are 1
// 	if (matrix.every((row) => row.every((num) => num === 1))) {
// 		return 1
// 	}
// 	// Check if all numbers are 2
// 	if (matrix.every((row) => row.every((num) => num === 2))) {
// 		return 16
// 	}
// }

// Sol 2
// function greatestProduct(matrix) {
// 	let one = true
// 	let two = true
// 	for (let i of matrix) {
// 		i.map((n) => {
// 			if (n !== 1) {
// 				one = false
// 			} else if (n !== 2) {
// 				two = false
// 			}
// 		})
// 	}
// 	if (one) return 1
// 	else if (two) return 16
// }

// Sol 3
// function greatestProduct(matrix) {
// 	let count = 0

// 	for (let i of matrix) {
// 		for (let j in i) {
// 			let k = parseInt(j)
// 			let arr = i.slice(k, k + 4)
// 			console.log('slice: ', arr)
// 			let product = arr.reduce((acc, curr) => acc * curr, 1)
// 			console.log('product:', product)
// 			count = Math.max(product, count)
// 		}
// 	}
// 	for (let i = 0; i <= matrix[0].length; i++) {
// 		let arr = []
// 		for (let j of matrix) {
// 			arr.push(j[i])
// 		}
// 		for (let k in arr.length) {
// 			let l = parseInt(k)
// 			let col = arr.slice(l, l + 4)
// 			let mul = col.reduce(acc, (curr) => acc * curr, 1)
// 			console.log('mul: ', mul)

// 			count = Math.max(count, mul)
// 		}
// 	}
// 	console.log('count: ', count)

// 	return count
// }

// // AI SOLUTION
// function greatestProduct(matrix) {
// 	let maxProducto = -Infinity

// 	// Buscar en horizontal
// 	for (let i = 0; i < matriz.length; i++) {
// 		for (let j = 0; j <= matriz[i].length - 4; j++) {
// 			let producto =
// 				matriz[i][j] * matriz[i][j + 1] * matriz[i][j + 2] * matriz[i][j + 3]
// 			maxProducto = Math.max(maxProducto, producto)
// 		}
// 	}

// 	// Buscar en vertical
// 	for (let i = 0; i <= matriz.length - 4; i++) {
// 		for (let j = 0; j < matriz[i].length; j++) {
// 			let producto =
// 				matriz[i][j] * matriz[i + 1][j] * matriz[i + 2][j] * matriz[i + 3][j]
// 			maxProducto = Math.max(maxProducto, producto)
// 		}
// 	}

// 	return maxProducto
// }

function greatestProduct(matrix) {
	let count = -Infinity
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length - 3; j++) {
			let prod =
				matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3]
			count = Math.max(count, prod)
		}
	}

	for (let i = 0; i < matrix.length - 3; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			let prod =
				matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j]
			count = Math.max(count, prod)
		}
	}
	return count
}
