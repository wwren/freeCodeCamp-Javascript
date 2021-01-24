function destroyer(arr) {
  let args = [].slice.call(arguments, 1);

  return arr.filter(e => !args.includes(e));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);