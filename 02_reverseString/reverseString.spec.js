const reverse = require("./reverseString");

describe("reversed string", () => {
  test("The string should be returned in a reversed order", () => {
    expect(reverse("fidelis")).toEqual("siledif");
  });
});
