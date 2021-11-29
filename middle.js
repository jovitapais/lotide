const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');


const middle = function(arr) {
  let middleIndex = Math.floor(arr.length / 2);

  if (arr.length < 3) {
    return [];
  } else if (arr.length % 2 === 1) { // odd
    return [arr[middleIndex]];
  } else {
    return [arr[middleIndex], arr[middleIndex + 1]];
  }
};

module.exports = middle;