const capitalize = require("./capitalized");

describe("capitalized string", () => {
  test("string with first character captalized", () => {
    expect(capitalize("capitalized")).toEqual("Capitalized");
  });
});
