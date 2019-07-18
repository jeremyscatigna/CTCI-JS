function createStack() {
  const array = [];

  return {
    push(item) {
      array.push(item);
    },
    pop() {
      return array.pop();
    },
    get length() {
      return array.length;
    },
    peek() {
      return array[array.length - 1];
    },
    isEmpty() {
      return array.length === 0;
    }
  };
}

const s = createStack();
s.push("a");
s.push("b");
s.push("c");

console.log(s.peek());
console.log(s.pop());
console.log(s.isEmpty());
