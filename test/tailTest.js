const assertEqual = require('../assertEqual');
const tail = require('../tail');


//Test code:

const words = ["Yo Yo", "Lighthouse", "Labs"];
(tail(words)); // no need to capture the return value since we are not checking it
(assertEqual(words.length, 3)); // original array should still have 3 elements!

const wordsOne = ["Yo Yo"];
tail(wordsOne);
assertEqual(wordsOne.length, 1);

const words2 = [];
let words3 = tail(words2);
assertEqual(words3.length, 0);