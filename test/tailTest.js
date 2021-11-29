const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

describe("tail", () => {
  it('returns 1 for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns ['yoyo'] for ['yoyo', 'yoyo']", () => {
    assert.deepEqual(tail(['yoyo', 'yoyo']), ['yoyo']); 
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []); 
  });
});

//Test code:

/*
const wordsOne = ["Yo Yo"];
tail(wordsOne);
assertEqual(wordsOne.length, 1);

const words2 = [];
let words3 = tail(words2);
assertEqual(words3.length, 0);*/