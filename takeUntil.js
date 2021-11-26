const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
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

const takeUntil = function(array, callBack) {
  let sliceOfData2 = [];
  for (const i of array) {
   
   if (callBack(i)) {
     return sliceOfData2;
   }
   sliceOfData2.push(i);
 } 
};

  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  const results2 = takeUntil(data2, x => x === ',');
  assertEqual(eqArrays(results2,["I've", "been", "to", "Hollywood"]), true);
  
  console.log(results2);