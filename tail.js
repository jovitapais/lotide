// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const tail = array => {
  return array.slice(1) || [];
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const wordsOne = ["Yo Yo"];
tail(wordsOne);
assertEqual(wordsOne.length, 1);

const words2 = [];
tail(words2);
assertEqual(words2.length, 0);