const eqArrays = (ar1, ar2) => {
  if ((ar1.join("")) === (ar2.join(""))) {
    return true;
  } else {
    return false;
  }
};

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length)
    return false;

  for (let keys in object1) {
    for (let keys2 in object2) {
      if (keys === keys2 && (typeof(object1[keys]) === "object" && typeof(object1[keys2] === "object"))) {
        if (!eqArrays(object1[keys], object2[keys])) {
          return false;
        }
      }
    }
  }
  return true;
};
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    if (actual === expected) {
      console.log(`😊😊😊 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      console.log(`😥😥😥 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  }
};

const obj1 = {
  name: "Bryan",
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
