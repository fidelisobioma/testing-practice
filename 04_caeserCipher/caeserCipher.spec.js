const caeserCipher = require("./caeserCipher");

describe("caeser cipher", () => {
  test("xyz is decrypted to abc", () => {
    expect(caeserCipher("xyz", 3)).toBe("abc");
  });
  test("hello is encrypted to khoor", () => {
    expect(caeserCipher("hello", 3)).toBe("khoor");
  });
  test("hello, world! is encrypted to khoor, zruog! with punctuation and space unchanged", () => {
    expect(caeserCipher("hello, world!", 3)).toBe("khoor, zruog!");
  });
});
