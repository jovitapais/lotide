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


const assertArraysEqual = (arOne, arTwo) => {
  if (eqArrays(arOne, arTwo)) {
    console.log(`✅✅✅Assertion Passed`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed`);
  }
};

const middle = (array) => {
  let emptyArray = [];
  let midPoint = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return emptyArray;
  } else if (array.length % 2 === 0) {
    emptyArray.push(array[midPoint-1]);
    emptyArray.push(array[midPoint]);
    return emptyArray;
  } else {
    emptyArray.push(midPoint);
    return emptyArray;
  }
}

console.log(middle([1,2,2,5,9,10]))
console.log(middle([1,2,2,5,9]))
console.log(middle([]))