function fearNotLetter(str) {
  let begin = str[0];
  let end = str[str.length -1];
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  let expected = alpha.substring(alpha.indexOf(begin), alpha.indexOf(end) + 1).split("");
  return expected.find(ele => !str.split("").includes(ele));
}

fearNotLetter("abce");