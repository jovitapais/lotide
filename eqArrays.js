const assertEqual = require('./assertEqual');


// FUNCTION IMPLEMENTATION


const eqArrays = (ar1, ar2) => {
  if ((ar1.join("")) === (ar2.join(""))) {
    return true;
  } else {
    return false;
  }
};

module.exports = eqArrays;
