// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

const tail = array => {
  return array.slice(1) || [];
};

//tail(["Hello", "Lighthouse", "Labs"]);
// Test Case: Check the original array

/*assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");*/



module.exports = tail;