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

//const results1 = map(words, word => word[0]);
const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const callBack =function(item){
  return item[0]
};



//console.log(map(words,word => word[0]));

const result1 = map(words, callBack)
console.log(assertArraysEqual(words, result1)); 

