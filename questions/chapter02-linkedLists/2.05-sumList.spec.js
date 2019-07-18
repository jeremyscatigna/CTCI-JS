import { sumLists } from "./2.05-sumList";

describe("ch2-q5: sumLists", () => {
  const context = {
    one: [2, 9],
    two: [4, 9, 9, 9, 9, 9],
    expected: [6, 8, 0, 0, 0, 0, 1]
  };

  it(`correctly adds ${context.one} and ${context.two}`, () => {
    let result = sumLists(
      arrayToLinkedList(context.one),
      arrayToLinkedList(context.two)
    );
    expect(linkedListToArray(result)).toEqual(context.expected);
  });
});

function createNode(value, next = null) {
  return {
    value,
    next
  };
}

function arrayToLinkedList(arr) {
  if (arr.length === 0) {
    return null;
  }

  let list = null;
  for (let i = arr.length - 1; i >= 0; --i) {
    list = createNode(arr[i], list);
  }

  return list;
}

function linkedListToArray(list) {
  let arr = [],
    node = list;
  while (node !== null) {
    arr.push(node.value);
    node = node.next;
  }

  return arr;
}
