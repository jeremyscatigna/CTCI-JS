import { zeroMatrix } from "./1.08-zeroMatrix";

describe("ch1-q8: zeroMatrix", () => {
  const context = {
    matrix: [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]],
    expected: [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
  };

  it("throws an error when null/undefined/empty matrix", () => {
    expect(() => zeroMatrix(null)).toThrow("invalid matrix");
    expect(() => zeroMatrix(undefined)).toThrow("invalid matrix");
  });

  it("returns matrix unchanged with 1,1 matrix", () => {
    let matrix = [[0]];
    expect(zeroMatrix(matrix)).toEqual(matrix);
  });

  it(`zeros a ${context.matrix.length}x${
    context.matrix[0].length
  } matrix correctly`, () => {
    expect(zeroMatrix(context.matrix)).toEqual(context.expected);
  });
});
