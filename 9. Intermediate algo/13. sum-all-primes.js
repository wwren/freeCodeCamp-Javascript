function sumPrimes(num) {
  let prime = [];
  for (let i = 2; i <= num; i++) 
  {
    let temp = [];

    for (let j = 2; j < i; j++)
    {
      if (i%j == 0)
      {
        temp.push(j);
      }
    }

    temp.length == 0 ? prime.push(i) : "";
  }
 
  return prime.reduce((a, b) => a+b);
}

sumPrimes(10);