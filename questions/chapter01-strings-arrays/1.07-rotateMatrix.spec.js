import { rotateMatrix } from "./1.07-rotateMatrix";

function copyMatrix(matrix) {
  let newMatrix = [];
  matrix.forEach(m => newMatrix.push(m.slice(0)));
  return newMatrix;
}

describe("ch1-q7: rotateMatrix", () => {
  const context = [
    [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]],
    [[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]],
    [[16, 15, 14, 13], [12, 11, 10, 9], [8, 7, 6, 5], [4, 3, 2, 1]],
    [[4, 8, 12, 16], [3, 7, 11, 15], [2, 6, 10, 14], [1, 5, 9, 13]]
  ];

  it("throws an error when null/undefined/empty matrix", () => {
    expect(() => rotateMatrix(null)).toThrow("invalid matrix");
    expect(() => rotateMatrix(undefined)).toThrow("invalid matrix");
    expect(() => rotateMatrix([])).toThrow("invalid matrix");
  });

  it("returns matrix unchanged with 1,1 matrix", () => {
    let matrix = [[0]];
    expect(rotateMatrix(matrix)).toEqual(matrix);
  });

  it(`can rotate a ${context[0].length}x${
    context[0].length
  } matrix back to original positions`, () => {
    let matrix = copyMatrix(context[context.length - 1]);
    for (let i = 0; i < context.length; ++i) {
      expect(rotateMatrix(matrix)).toEqual(context[i]);
    }
  });
});
