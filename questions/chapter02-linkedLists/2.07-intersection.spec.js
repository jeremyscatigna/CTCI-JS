import { intersection } from "./2.07-intersection";

describe("ch2-q7: intersection", () => {
  const context = {
    len1: 6,
    len2: 4,
    lenCommon: 11
  };

  it("correctly identifies first node when both lists are the same", () => {
    let list = generateList(10);
    expect(intersection(list.head, list.head)).toEqual(list.head);
  });

  let one = generateList(context.len1),
    two = generateList(context.len2),
    common = generateList(context.lenCommon);

  it(`returns undefined with list1:${context.len1} & list2:${
    context.len2
  } that do not intersect`, () => {
    expect(intersection(one.head, two.head)).toEqual(undefined);
  });

  it(`returns correct node with list1:${context.len1} & list2:${
    context.len2
  } that intersect`, () => {
    one.tail.next = two.tail.next = common.head;
    expect(intersection(one.head, two.head)).toEqual(common.head);
  });
});

function generateList(length) {
  let list = createLinkedList();
  for (let i = length; i > 0; --i) {
    pushSingle(list, 100 + Math.random() * 999999);
  }
  return list;
}

function createLinkedList() {
  return {
    head: null,
    tail: null
  };
}

function pushSingle(list, value) {
  const node = createNode(value);
  if (list.head) {
    list.tail.next = node;
    list.tail = node;
  } else {
    list.head = node;
    list.tail = node;
  }
}

function createNode(value, next = null) {
  return {
    value,
    next
  };
}
