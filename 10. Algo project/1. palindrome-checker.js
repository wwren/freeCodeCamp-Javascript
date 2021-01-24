function palindrome(str) {

  const re = /[^A-Za-z0-9]/g;
  let modifiedStr = str.replace(re, '').toLowerCase();

  let reversedStr = [];
  for (let letter of modifiedStr)
  {
    reversedStr.unshift(letter);
  }

  return reversedStr.join('') == modifiedStr;
}
