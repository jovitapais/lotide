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


const letterPositions = function(sentence) {
  const results = {};
  let newSentence = sentence.split(" ").join('');
  for (let i = 0; i < newSentence.length; i++) {
    let character = newSentence[i];
    //console.log(character);
    if (results[character]) {
      results[character].push(i);
    } else {
      results[character] = [i];
    }
  }
  return results;
};


console.log(letterPositions("hello").h, [0]);
/*letterPositions("hello").e, [1];
letterPositions("hello").l, [2,3];
letterPositions("hello").o, [4];
letterPositions("hello").o, [3];*/