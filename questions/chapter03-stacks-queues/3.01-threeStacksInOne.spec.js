import { threeStacksInOnes } from "./3.01-threeStacksInOne";

describe("ch3-q1: threeStacksInOnes", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it("can push and pop values from middle stack correctly", () => {
    let stack = [];
    for (let i = 1; i < 100; i += 4) {
      let val = Math.trunc(Math.random() * 999999);
      stack.push(2, val);
      stack.push(val);
    }

    stack.reverse().forEach(v => expect(stack.pop(2)).toEqual(v));
  });

  it("can push, peek and pop values from all 3 stacks correctly", () => {
    let stacks = [[], [], []];
    for (let j = 9; j > 0; --j) {
      for (let i = 1; i <= 3; ++i) {
        let val = i * 10 + j;
        stack.push(i, val);
        stacks[i - 1].push(val);
        expect(stack.peek(i)).toEqual(val);
      }
    }

    for (let i = 1; i <= 3; ++i) {
      stacks[i - 1].reverse().forEach(v => expect(stack.pop(i)).toEqual(v));
      expect(stack.isEmpty(i)).toEqual(true);
    }
  });
});
