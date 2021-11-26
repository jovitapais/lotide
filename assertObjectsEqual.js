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

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length)
    return false;

  for (let o1name in object1) {
    for (let o2name in object2) {
      // console.log(o1name,o2name);
      // console.log('check',typeof object1[o1name], typeof object2[o2name]);
      if (o1name === o2name && (typeof object1[o1name] === "object" && typeof object2[o2name] === "object")) {
        if (!eqArrays(object1[o1name], object2[o2name])) {
          return false;
        }
      }
    }
  }
  return true;
};
const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const obj1 = {
  name: "Dave",
  location: "Canada"
};

const obj2 = {
  name: "James",
  location: "Canada"
};

const obj3 = {
  location: "Canada",
  name: "John"
};

assertObjectsEqual(eqObjects(obj1, obj1), true); //true
assertObjectsEqual(eqObjects(obj1, obj2), false); //false
assertObjectsEqual(eqObjects(obj1, obj3), true); //true

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2), false); // => false
