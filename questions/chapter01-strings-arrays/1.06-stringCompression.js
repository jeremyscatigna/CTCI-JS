"use strict";

/*
 Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
"compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z). 
*/

export function stringCompression(str) {
  // Seing the problem I firstly think about using a HashMap to store letters as key
  // and it's count as value
  // then construct the string with the hashmap entries
  //if not smaller return the original string

  if (!str || str.length <= 2) return str;

  const charMap = new Map();
  let compressedString = "";

  for (const letter of str) {
    if (!charMap.has(letter)) {
      charMap.set(letter, 1);
    } else {
      charMap.set(letter, charMap.get(letter) + 1);
    }
  }

  for (const [key, value] of charMap.entries()) {
    compressedString += value + key;
  }

  return str.length <= compressedString.length ? str : compressedString;
}
