"use strict";

// Given two strings, write a function to decide if one is a permutation of the other.

const sort = str => [...str].sort().join("");

export function checkPermutations(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  return sort(str1) === sort(str2);
}
