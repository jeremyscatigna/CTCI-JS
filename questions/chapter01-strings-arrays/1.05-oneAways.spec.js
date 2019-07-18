import { oneAway } from "./1.05-oneAway";

describe("ch1-q5: oneAway", () => {
  const oneEditString = ["pales", "pale"];
  const multiEditString = ["paless", "pale"];

  it("returns true for the same string", () => {
    let str = "abcdef";
    expect(oneAway(str, str)).toEqual(true);
    str = "a1b2c3d4";
    expect(oneAway(str, str)).toEqual(true);
  });

  it(`returns true for strings that are one edit: '${oneEditString[0]}' & '${
    oneEditString[1]
  }'`, () => {
    expect(oneAway(oneEditString[0], oneEditString[1])).toEqual(true);
  });

  it(`returns false for strings that are more than one edit: '${
    multiEditString[0]
  }' & '${multiEditString[1]}'`, () => {
    expect(oneAway(multiEditString[0], multiEditString[1])).toEqual(false);
  });
});
