import { isUnique } from "./1.01-isUnique";

describe("ch1-q1: isUnique", () => {
  const uniqueString = "abcdefghi";
  const stringWithDupes = "abcadef";

  it(`returns true for unique string: '${uniqueString}'`, () => {
    expect(isUnique(uniqueString)).toEqual(true);
  });

  it(`returns false for string with dupes: '${stringWithDupes}'`, () => {
    expect(isUnique(stringWithDupes)).toEqual(false);
  });
});
