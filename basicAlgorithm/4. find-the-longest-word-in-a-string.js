function findLongestWordLength(str) {
  let arr = str.split(" ");
  let max = arr[0].length;
  for (let i =1; i< arr.length; i++){
    if (arr[i].length > max){
      max = arr[i].length;
    }
  }
  return  max;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
