import { QueueViaStacks } from "./3.04-queueViaStacks";

describe("ch3-q4: queueViaStacks", () => {
  let queue;
  beforeEach(() => {
    queue = new QueueViaStacks();
  });

  it("dequeue throws error when queue is empty", () => {
    expect(() => queue.dequeue()).toThrow("Queue is empty");
  });

  it("can enqueue and dequeue items", () => {
    for (let i = 0; i < 10; ++i) {
      let j;
      for (j = 1; j <= 100; ++j) {
        queue.enqueue(j);
      }
      for (j = 1; j <= 100; ++j) {
        expect(queue.dequeue()).toEqual(j);
      }
    }
  });

  it("can do alternating enqueue and dequeues", () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    expect(queue.dequeue()).toEqual(10);
    queue.enqueue(40);
    expect(queue.dequeue()).toEqual(20);
    expect(queue.dequeue()).toEqual(30);
    expect(queue.dequeue()).toEqual(40);
    queue.enqueue(50);
    queue.enqueue(60);
    queue.enqueue(70);
    expect(queue.dequeue()).toEqual(50);
    expect(queue.dequeue()).toEqual(60);
    queue.enqueue(80);
    expect(queue.dequeue()).toEqual(70);
    queue.enqueue(90);
    expect(queue.dequeue()).toEqual(80);
    expect(queue.dequeue()).toEqual(90);
  });
});
