import { URLify } from "./1.03-URLify";

describe("ch1-q3: URLify", () => {
  const url = "http://www.google.com/search?q=something really really funny";

  it("works with null/undefined as input", () => {
    expect(URLify(undefined)).toEqual(undefined);
    expect(URLify(null)).toEqual(null);
  });

  it("returns true for an empty array", () => {
    expect(URLify([])).toEqual([]);
  });

  it(`returns true for unique string: '${url}'`, () => {
    let expected = url.replace(/ /g, "%20");
    expect(URLify(url)).toEqual(expected);
  });
});
