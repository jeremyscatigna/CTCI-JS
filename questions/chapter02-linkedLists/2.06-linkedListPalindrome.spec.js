import { linkedListPalindrome } from "./2.06-linkedListPalindrome";

describe("ch2-q6: linkedListPalindrome", () => {
  const listPalindrome = [2, 1, 3, 3, 1, 2];
  const listNotPalindrome = [2, 1, 5, 4, 3, 2];

  it(`returns true for list ${listPalindrome}`, () => {
    let list = arrayToLinkedList(listPalindrome);
    expect(linkedListPalindrome(list)).toEqual(true);
    // verify list is umodified
    expect(linkedListToArray(list)).toEqual(listPalindrome);
  });

  it(`returns false for list ${listNotPalindrome}`, () => {
    let list = arrayToLinkedList(listNotPalindrome);
    expect(linkedListPalindrome(list)).toEqual(false);
    // verify list is umodified
    expect(linkedListToArray(list)).toEqual(listNotPalindrome);
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
