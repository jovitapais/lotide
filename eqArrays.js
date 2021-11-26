// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😁 😁 😁 Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`😑 😑 😑 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

const eqArrays = (ar1, ar2) => {
  if ((ar1.join("")) === (ar2.join(""))) {
    return true;
  } else {
    return false;
  }
};


// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);