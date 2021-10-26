const testFunc1 = require("./func1");
const testFunc2 = require("./func2");
const calc = require("./calc");
const caesar = require("./caesar");
const analyse = require("./arraytest");

test("first letter to Capital", () => {
  expect(testFunc1("hello")).toMatch(/Hello/);
});
test("reverse a string", () => {
  expect(testFunc2("hello")).toMatch(/olleh/);
});
test("calc methods add, sub, mult, div", () => {
  expect(calc.add(2, 2)).toEqual(4);
  expect(calc.subtract(2, 2)).toEqual(0);
  expect(calc.multiply(2, 2)).toEqual(4);
  expect(calc.divide(2, 2)).toEqual(1);
});

test("ceasar encryption", () => {
  expect(caesar("a", 2)).toMatch(/c/);
  expect(caesar("a", 2)).not.toMatch(/C/);
  expect(caesar("A", 2)).toMatch(/C/);
  expect(caesar("z", 2)).toMatch(/b/);
  expect(caesar("Z", 2)).toMatch(/B/);
  expect(caesar("!", 2)).toMatch(/!/);
  expect(caesar("a", 30)).toMatch(/e/);
  expect(caesar("a", -2)).toMatch(/y/);
  expect(caesar("A", -2)).toMatch(/Y/);
  expect(caesar("a", 52)).toMatch(/a/);
});
test("testing avarage, min, max and length", () => {
  expect(analyse([5, 10])).toEqual({
    avarage: 7.5,
    max: 10,
    min: 5,
    length: 2,
  });
});
