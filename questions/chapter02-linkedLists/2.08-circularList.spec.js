import { circularList } from "./2.08-circularList";

describe("ch2-q8: circularList", () => {
  let list;
  beforeEach(() => {
    list = createLinkedList();
  });

  it("returns null with empty list", () => {
    expect(circularList(list.head)).toEqual(null);
  });

  it("returns null when there is no loop", () => {
    push(list, 1, 2, 3, 4, 5, 6);
    expect(circularList(list.head)).toEqual(null);
  });

  it("returns node when there is a loop 1", () => {
    push(list, 1, 2, 3, 4, 5, 6);
    let node = list.head;
    list.tail.next = node;
    expect(circularList(list.head)).toEqual(node);
  });

  it("returns node when there is a loop 2", () => {
    push(list, 1, 2, 3, 4, 5, 6);
    let node = list.head.next.next.next;
    list.tail.next = node;
    expect(circularList(list.head)).toEqual(node);
  });

  it("returns node when there is a loop 3", () => {
    push(list, 1, 2, 3, 4, 5, 6);
    let node = list.tail;
    list.tail.next = node;
    expect(circularList(list.head)).toEqual(node);
  });
});

function createLinkedList() {
  return {
    head: null,
    tail: null
  };
}

function push(list) {
  for (let i = 1; i < arguments.length; ++i) {
    pushSingle(list, arguments[i]);
  }
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

export function createNode(value, next = null) {
  return {
    value,
    next
  };
}
