import { SetOfStacks } from "./3.03-setOfStacks";

describe("ch3-q3: setOfStacks", () => {
  let stack;
  beforeEach(() => {
    stack = new SetOfStacks(4);
  });

  it("constructor throws error when maxSize isnt passed in", () => {
    expect(() => new SetOfStacks()).toThrow("maxSize argument is required");
  });

  it("can push 100 items and pop them in order", () => {
    let i;
    for (i = 1; i <= 100; ++i) {
      stack.push(i);
    }

    for (i = 100; i > 0; --i) {
      expect(stack.pop()).toEqual(i);
    }
  });

  it("pop works correctly after using popAt to remove one from each stack", () => {
    let i;
    for (i = 1; i <= 16; ++i) {
      stack.push(i);
    }
    for (i = 4; i >= 1; --i) {
      expect(stack.popAt(i)).toEqual(i * 4);
    }
    for (i = 16; i > 0; --i) {
      if (i % 4) {
        expect(stack.pop()).toEqual(i);
      }
    }
  });

  it("can push 20 items and popAt to remove whole stacks worth of items from middle", () => {
    let i;
    for (i = 1; i <= 20; ++i) {
      stack.push(i);
    }

    for (i = 0; i < 9; ++i) {
      expect(stack.popAt(2)).toEqual(8 + i);
    }

    [20, 19, 18, 17, 7, 6, 5, 4, 3, 2, 1].forEach(v =>
      expect(stack.pop()).toEqual(v)
    );
  });
});
