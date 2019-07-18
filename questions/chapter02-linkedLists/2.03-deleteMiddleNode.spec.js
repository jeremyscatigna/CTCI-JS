import { deleteMiddleNode } from "./2.03-deleteMiddleNode";

describe("ch2-q3: deleteMiddleNode", () => {
  const context = {
    list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
    node: 2,
    expected: [5, 8, 2, 7, 1, 4, 9, 15, 30]
  };

  it("throws an error if node is invalid", () => {
    expect(() => deleteMiddleNode(null)).toThrow("invalid node");
    expect(() => deleteMiddleNode(undefined)).toThrow("invalid node");
    expect(() => deleteMiddleNode(arrayToLinkedList([11]))).toThrow(
      "invalid node"
    );
  });

  it("can delete multiple in long list", () => {
    let list = arrayToLinkedList([8, 6, 4, 2, 1]);
    deleteMiddleNode(list);
    deleteMiddleNode(list);
    deleteMiddleNode(list);
    deleteMiddleNode(list);
    expect(list.val).toEqual(1);
    expect(list.next).toEqual(null);
  });

  it(`removing node ${context.node} from list ${context.list}`, () => {
    let list = arrayToLinkedList(context.list),
      node = list;
    for (let i = 0; i < context.node; ++i) {
      node = node.next;
    }
    deleteMiddleNode(node);
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
