// Requiring the lodash library
const modula = require('underscore-contrib');

// Original array
let array1 = [1, 3, 4, 5, 5, 6]

const menorQ = (num) => num < 5;

// Using _.dropWhile() method
let resultado = modula.dropWhile(array1, menorQ);

// Original Array
console.log("original Array: ", array1)

// Printing the nueva Array
console.log("nuevo resultado ", resultado);


