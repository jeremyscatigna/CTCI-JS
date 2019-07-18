import { stringCompression } from "./1.06-stringCompression";

describe("ch1-q6: stringCompression", () => {
  const stringCompressionNotUsingLessSpace = "aabbcc";
  const context = { arg: "hhellllllllooooo!", out: "2h1e8l5o1!" };

  it("returns input where null/undefined", () => {
    expect(stringCompression(null)).toEqual(null);
    expect(stringCompression(undefined)).toEqual(undefined);
  });

  it("returns input where empty string", () => {
    expect(stringCompression("")).toEqual("");
  });

  it(`returns input string where compression doesn't use less space: '${stringCompressionNotUsingLessSpace}'`, () => {
    expect(stringCompression(stringCompressionNotUsingLessSpace)).toEqual(
      stringCompressionNotUsingLessSpace
    );
  });

  it(`returns ${context.out} with string ${context.arg}`, () => {
    expect(stringCompression(context.arg)).toEqual(context.out);
  });
});
