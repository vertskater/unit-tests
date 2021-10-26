"use strict";

const reverseString = (text) => {
  let newString = "";
  for (let i = text.length - 1; i >= 0; i--) {
    newString += text[i];
  }
  return newString;
};

module.exports = reverseString;
