"use strict";

/* 

Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
cannot use additional data structures? 

*/

export function isUnique(str) {
  const uniqueChars = new Set();

  for (let i = 0; i < str.length; i++) {
    if (!uniqueChars.has(str.charAt(i))) {
      uniqueChars.add(str.charAt(i));
    } else {
      return false;
    }
  }

  return true;
}
