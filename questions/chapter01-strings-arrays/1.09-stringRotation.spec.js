import { stringRotation } from "./1.09-stringRotation";

describe("ch1-q9: stringRotation", () => {
  it("throws an error when either string is null/undefined/empty", () => {
    expect(() => stringRotation(null, "abc")).toThrow("invalid input");
    expect(() => stringRotation("abc", undefined)).toThrow("invalid input");
    expect(() => stringRotation("", "abc")).toThrow("invalid input");
  });

  it("returns false when strings are different lengths", () => {
    expect(stringRotation("abc", "defg")).toEqual(false);
    expect(stringRotation("abcd", "def")).toEqual(false);
  });

  describe("rotations of a long string", () => {
    let str =
        "a b c d e f g h i j k l m n o p q r s t u v x y z 0 1 2 3 4 5 6 7 8 9 A B C D E F G H I J K L M N O P Q R S T U V W X Y Z",
      reverseStr = str
        .split("")
        .reverse()
        .join("");

    for (let i = 1; i < str.length; i += 12) {
      let rStr = str.substring(i) + str.substring(0, i);

      it(`returns true for rotated string ${rStr}`, () => {
        expect(stringRotation(rStr, str)).toEqual(true);
      });
    }

    for (let i = 1; i < str.length; i += 12) {
      let rStr = str.substring(i) + reverseStr.substring(0, i);

      it(`returns false for non-rotated string ${rStr}`, () => {
        expect(stringRotation(rStr, str)).toEqual(false);
      });
    }
  });
});
