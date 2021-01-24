function sumFibs(num) {
  var i;
  var fib = []; // Initialize array!

fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= num; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
}

return fib.filter(ele => (ele <= num && ele % 2 == 1)).reduce((a, b) => a+b, 0);
}

sumFibs(75025);