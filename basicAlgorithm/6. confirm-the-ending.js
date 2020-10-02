function confirmEnding(str, target) {
  let length = target.length;
  let subStr = str.slice(-length, );
  if (subStr == target){
    return true
  }

  return false;
}

confirmEnding("Bastian", "n");