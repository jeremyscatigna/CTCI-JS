function createQueue() {
  const queue = [];

  return {
    enqueue(item) {
      queue.unshift(item);
    },
    dequeue() {
      return queue.pop();
    },
    peek() {
      return queue[queue.length - 1];
    },
    isEmpty() {
      return queue.length === 0;
    },
    get length() {
      return queue.length;
    }
  };
}

const q = createQueue();
console.log(q.isEmpty());
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
console.log(q.dequeue());

exports.createQueue = createQueue;
