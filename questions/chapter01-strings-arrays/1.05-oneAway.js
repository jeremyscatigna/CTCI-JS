"use strict";

/*
There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away.
EXAMPLE
pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bake -> false 
*/
export function oneAway(str1, str2) {
  // Given two strings we need to find if more than 1 letter differ
  // 1rst solution:
  // We could an array for each string
  // sort arrays
  // go throught the array and use a counter for differences
  // if more than one => false
  // => true

  // O(n log n)

  if (!str1 || !str2 || Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  // test case: str1 = pale, str2 = pales
  const str1toArray = str1.split("");
  // [p,a,l,e]
  const str2toArray = str2.split("");
  // [p,a,l,e, s]

  str1toArray.sort();
  // [a, e, l, p]
  str2toArray.sort();
  // [a, e, l, p, s]

  let differences = 0;
  for (let i = 0; i < str1toArray.length; i++) {
    if (str1toArray[i] !== str2toArray[i]) {
      differences++;
    }
  }
  if (differences > 1) {
    return false;
  }

  return true;
}
