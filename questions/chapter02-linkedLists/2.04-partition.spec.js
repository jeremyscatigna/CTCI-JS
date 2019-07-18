import { partition } from "./2.04-partition";

describe("ch2-q4: partition", () => {
  const context = {
    list: [4, 9, 15, 30, 5, 8, 3, 2, 2, 3, 7, 1, 15, 5, 6, 7],
    value: 6,
    expected: [4, 5, 3, 2, 2, 3, 1, 5, 9, 15, 30, 8, 7, 15, 6, 7]
  };

  it(`partitioning list ${context.list} around ${context.value}`, () => {
    let list = arrayToLinkedList(context.list);
    expect(linkedListToArray(partition(list, context.value))).toEqual(
      context.expected
    );
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
