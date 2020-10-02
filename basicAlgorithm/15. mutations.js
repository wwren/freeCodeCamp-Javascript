function mutation(arr) {
  let varA = arr[0].toLowerCase().split('').sort();
  let varB = arr[1].toLowerCase().split('').sort();
  let count =0;
  for (let i=0; i< varB.length; i++){
    if (varA.includes(varB[i])){      
      count++
    }
  }
  if (count == varB.length){
    return true
  }
  return false;
}

mutation(["hello", "hey"]);

console.log("floor".toLowerCase().split('').sort().join(''));
console.log("for".toLowerCase().split('').sort().join(''))

