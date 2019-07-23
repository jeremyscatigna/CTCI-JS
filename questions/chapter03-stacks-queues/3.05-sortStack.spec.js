import { sortStack } from "./3.05-sortStack";

describe("ch3-q5: sortStack", () => {
  const context = [3, 2, 1, 4, 8, 6, 7, 5, 9];

  it("does not crash on an empty list", () => {
    let stack = [];
    expect(() => sortStack(stack)).not.toThrow(Error);
    expect(sortStack(stack)).toEqual(stack);
  });

  it("works with a single element stack", () => {
    expect(sortStack([4])).toEqual([4]);
  });

  it(`correctly sorts ${context}`, () => {
    let expected = context
      .slice(0)
      .sort((a, b) => (a < b ? 1 : a > b ? -1 : 0));

    expect(sortStack(context)).toEqual(expected);
  });

  it("correctly sorts with 100 random numbers", () => {
    let stack = [];
    for (let i = 0; i < 100; ++i) {
      stack.push(Math.trunc(Math.random() * 9999999));
    }
    let expected = stack.slice(0).sort((a, b) => (a < b ? 1 : a > b ? -1 : 0));
    expect(sortStack(stack)).toEqual(expected);
  });
});
