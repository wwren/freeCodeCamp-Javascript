function smallestCommons(arr) {

  let biggestCommonDivisor = {};

  if (arr[0] > arr[1])
  {
    let temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
  }

  for (let i = arr[0]; i <= arr[1]; i++) 
  {
    let num = i;
    let divisor = {};
    let tryDivisor = 2;

    while (num > 1 && tryDivisor <= i) 
    {
      if (num % tryDivisor == 0)
      {
        divisor[tryDivisor] = (divisor[tryDivisor] || 0 ) + 1;  
        num /= tryDivisor;
      }
      else 
      {
        tryDivisor++;
      }
    }

Object.keys(divisor).forEach(k => (biggestCommonDivisor[k] || 0) < divisor[k] ? biggestCommonDivisor[k] = divisor[k] : "");
}

return  Object.entries(biggestCommonDivisor).map(arr => Math.pow(parseInt(arr[0]), arr[1])).reduce((a, b) => a*b);

}


smallestCommons([23, 18]);