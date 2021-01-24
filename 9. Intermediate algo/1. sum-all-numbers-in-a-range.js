function sumAll(arr) {
  const big = arr[1] - arr[0] > 0? arr[1] : arr[0];
   const small = arr[1] - arr[0] < 0? arr[1] : arr[0];
  return (big+small)*(big-small+1)/2;
}

sumAll([1, 4]);