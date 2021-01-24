function myReplace(str, before, after) {
  return str.replace(before, before[0].match(/[A-Z]/) ? after[0].toUpperCase() + after.slice(1) : after.toLowerCase());
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");