"use strict";

// Given a string, write a function to check if it is a permutation of a palindrome.

export function palindromePermutation(str) {
  if (str === null || str === undefined) {
    return false;
  }

  if (str.length === 0) {
    return true;
  }

  const lowerCaseStr = str.toLowerCase();

  const letterMap = new Set();
  for (const letter of lowerCaseStr) {
    if (letterMap.has(letter)) {
      letterMap.delete(letter);
    } else {
      letterMap.add(letter);
    }
  }

  return letterMap.size <= 1;
}
