// FUNCTION IMPLEMENTATION
const eqArrays = require('./eqArrays');

const assertArraysEqual = (arOne, arTwo) => {
  if (eqArrays(arOne, arTwo)) {
    console.log(`โโโAssertion Passed`);
  } else {
    console.log(`๐๐๐ Assertion Failed`);
  }
};

module.exports = assertArraysEqual;
