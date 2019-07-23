import { MinStack } from "./3.02-stackMin";

describe("ch3-q2: stackMin", () => {
  let stack;
  beforeEach(() => {
    stack = new MinStack();
  });

  it("min is undefined when stack is empty", () => {
    expect(stack.isEmpty()).toEqual(true);
    expect(stack.min()).toEqual(undefined);
  });

  it("can push values in ascending order and min stays the same", () => {
    let values = [2, 4, 6, 8, 10, 12];

    values.forEach(v => {
      stack.push(v);
      expect(stack.min()).toEqual(2);
    });

    values.reverse().forEach(v => {
      expect(stack.min()).toEqual(2);
      expect(stack.pop()).toEqual(v);
    });

    expect(stack.min()).toEqual(undefined);
  });

  it("can push values in descending order and min is updated", () => {
    let values = [12, 10, 8, 6, 4, 2];

    values.forEach(v => {
      stack.push(v);
      expect(stack.min()).toEqual(v);
    });

    values.reverse().forEach(v => {
      expect(stack.min()).toEqual(v);
      expect(stack.pop()).toEqual(v);
    });

    expect(stack.min()).toEqual(undefined);
  });
});
