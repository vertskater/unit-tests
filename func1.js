"use strict";

const capitalizeString = (text) => {
  let firstLetter = text[0];
  firstLetter = firstLetter.toUpperCase();
  let newString = firstLetter;
  for (let i = 1; i < text.length; i++) {
    newString += text[i];
  }
  return newString;
};

module.exports = capitalizeString;
