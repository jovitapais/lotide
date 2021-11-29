const assertEqual = require('../assertEqual');
const middle = require('../middle');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

/*console.log(middle([1,2,2,5,9,10]))
console.log(middle([1,2,2,5,9]))
console.log(middle([]))*/

assertArraysEqual(middle([]),[]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2, 3]),[2]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[4,5]);