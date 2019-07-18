import { checkPermutations } from "./1.02-checkPermutations";

describe("ch1-q2: checkPermutations", () => {
  const stringPermutation = ["abcdefghi", "ihgfedcba"];
  const stringWithoutPermutation = ["abcdefghiz", "ihgfedcbaa"];

  it(`returns true for strings that are permutations: '${
    stringPermutation[0]
  }' & '${stringPermutation[1]}'`, () => {
    expect(
      checkPermutations(stringPermutation[0], stringPermutation[1])
    ).toEqual(true);
  });

  it(`returns false for strings that are not permutations: '${
    stringWithoutPermutation[0]
  }' & '${stringWithoutPermutation[1]}'`, () => {
    expect(
      checkPermutations(
        stringWithoutPermutation[0],
        stringWithoutPermutation[1]
      )
    ).toEqual(false);
  });
});
