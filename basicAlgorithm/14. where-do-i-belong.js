function getIndexToIns(arr, num) {
  arr.sort((a,b)=>a-b);
  console.log(arr);
  
  for (let i = 0; i< arr.length-1; i++){
    if (num <= arr[i]){
      return i;
    } else if (num > arr[i] && num < arr[i+1]){
      return i+1;
    } 
  }

      return arr.length;
 

}

// getIndexToIns([40, 60], 50);
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));


