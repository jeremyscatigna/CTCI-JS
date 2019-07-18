import { removeDupes } from "./2.01-removeDupes";

describe("ch2-q1: removeDupes", () => {
  const context = {
    list: [8, 8, 9, 9, 9, 6, 6, 4, 4, 6, 6, 4, 4, 6, 9, 4, 8, 2, 3, 1],
    expected: [8, 9, 6, 4, 2, 3, 1]
  };

  it("returns input if falsy", () => {
    expect(removeDupes(null)).toEqual(null);
    expect(removeDupes(undefined)).toEqual(undefined);
  });

  it(`list ${context.list} correctly updated to ${context.expected}`, () => {
    let list = arrayToLinkedList(context.list);
    removeDupes(list);
    expect(linkedListToArray(list)).toEqual(context.expected);
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
