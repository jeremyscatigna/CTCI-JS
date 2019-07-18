import { palindromePermutation } from "./1.04-palindromePermutation";

describe("ch1-q4: palindromePermutation", () => {
  const palindrome = "sasadfgsadfghjk;hjk;sadfghjk;dfghjk;";
  const nonPalindrome = "abcadef";

  it("returns false with null/undefined as input", () => {
    expect(palindromePermutation(undefined)).toEqual(false);
    expect(palindromePermutation(null)).toEqual(false);
  });

  it("returns true for an empty array", () => {
    expect(palindromePermutation([])).toEqual(true);
  });

  it(`returns true for palindromic string: '${palindrome}'`, () => {
    expect(palindromePermutation(palindrome)).toEqual(true);
  });

  it(`returns false for non-palindromic string: '${nonPalindrome}'`, () => {
    expect(palindromePermutation(nonPalindrome)).toEqual(false);
  });
});
