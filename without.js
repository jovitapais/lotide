// FUNCTION IMPLEMENTATION
const assertArraysEqual = (arOne, arTwo) => {
  if (eqArrays(arOne, arTwo)) {
    console.log(`✅✅✅Assertion Passed`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed`);
  }
};

const eqArrays = function(arr1,arr2) {
  
  if (arr1.length !== arr2.length) { //to check the length of both arrays are same,if not return false
                                      //and exit.
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
     
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

const without = function(source, itemsToRemove) {
  const newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i])
    }
  }
  return newArray;
}

// TEST CODE


console.log(without([1, 2, 3], [1])) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
let words2 = without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words2, ["hello", "world"]);
assertArraysEqual (words, ["hello","world", "lighthouse"]);