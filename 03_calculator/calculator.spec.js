const calculator = require("./calculator");

describe("add", () => {
  test("2 + 2 eqauls 4", () => {
    expect(calculator.add(2, 2)).toBe(4);
  });
});

describe("substract", () => {
  test("5 - 2 equal 3", () => {
    expect(calculator.substract(5, 2)).toBe(3);
  });
});

describe("divide", () => {
  test("10 / 2  equal 5", () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });
});

describe("multiply", () => {
  test("5 * 2 equal 10", () => {
    expect(calculator.multiply(5, 2)).toBe(10);
  });
});
