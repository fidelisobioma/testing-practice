const caeserCipher = function (str, key) {
  const plainText = "abcdefghijklmnopqrstuvwxyz";
  const arr = plainText.split("");
  const slice = arr.slice(0, 3);
  arr.push(slice.join(""));
  const cipherText = arr.join("");
  let result = "";
  for (i = 0; i < str.length; i++) {
    const index = cipherText.indexOf(str[i]) + key;
    if (!cipherText.includes(str[i])) {
      result += cipherText.charAt(index - 3) + str[i];
    } else {
      result += cipherText.charAt(index);
    }
  }
  return result;
};

module.exports = caeserCipher;
