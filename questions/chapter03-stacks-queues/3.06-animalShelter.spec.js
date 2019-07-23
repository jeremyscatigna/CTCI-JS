import { AnimalShelter } from "./3.06-animalShelter";

describe("ch3-q6: animalShelter", () => {
  let obj;
  beforeEach(() => {
    obj = new AnimalShelter();
  });

  it("any returns whichever animal is in queue", () => {
    obj.enqueueCat("cat");
    expect(obj.dequeueAny()).toEqual("cat");
    expect(obj.dequeueAny()).toEqual(undefined);

    obj.enqueueDog("dog");
    expect(obj.dequeueAny()).toEqual("dog");
    expect(obj.dequeueAny()).toEqual(undefined);
  });

  it("returns animals in the right order", () => {
    for (let i = 0; i < 4; ++i) {
      obj.enqueueCat("cat" + i);
    }

    for (let i = 0; i < 4; ++i) {
      expect(obj.dequeueAny()).toEqual("cat" + i);
    }
  });

  it("returns animals in alternating order when enqueued that way", () => {
    for (let i = 20; i > 0; --i) {
      if (i & 1) {
        obj.enqueueCat(i);
      } else {
        obj.enqueueDog(i);
      }
    }

    for (let i = 20; i > 0; --i) {
      expect(obj.dequeueAny()).toEqual(i);
    }
  });

  it("correctly returns animals when enqueued alternating but dequeued one at a time", () => {
    for (let i = 20; i > 0; --i) {
      if (i & 1) {
        obj.enqueueCat(i);
      } else {
        obj.enqueueDog(i);
      }
    }

    for (let i = 20; i > 10; i -= 2) {
      expect(obj.dequeueDog()).toEqual(i);
    }

    for (let i = 19; i > 10; i -= 2) {
      expect(obj.dequeueCat()).toEqual(i);
    }

    for (let i = 10; i > 0; --i) {
      expect(obj.dequeueAny()).toEqual(i);
    }
  });
});
