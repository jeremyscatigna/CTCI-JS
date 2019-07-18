import { KthToLast } from "./2.02-KthToLast";

describe("ch2-q2: KthToLast", () => {
  const context = {
    list: [8, 8, 9, 9, 9, 6, 6, 4, 4, 6, 6, 4, 4, 6, 9, 4, 8, 2, 3, 1],
    k: 8
  };

  it("throws an error if list is not an array", () => {
    expect(() => KthToLast(null)).toThrow("invalid list");
    expect(() => KthToLast(undefined)).toThrow("invalid list");
  });

  it("throws an error if list is shorter than k", () => {
    expect(() => KthToLast(arrayToLinkedList([1]), 1)).toThrow(
      "list is not long enough"
    );
    expect(() => KthToLast(arrayToLinkedList([1, 2, 3]), 3)).toThrow(
      "list is not long enough"
    );
    expect(() => KthToLast(arrayToLinkedList([1, 2, 3]), 4)).toThrow(
      "list is not long enough"
    );
  });

  it(`can get the ${context.k}th to last element in ${context.list}`, () => {
    let list = arrayToLinkedList(context.list),
      expected = context.list[context.list.length - 1 - context.k];
    expect(KthToLast(list, context.k)).toEqual(expected);
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
