function uniteUnique(arr) {
  let args = [].slice.call(arguments);
  let result = args[0];
  args.slice(1).forEach(array => array.forEach(ele => !args[0].includes(ele) ? result.push(ele) : ""));
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);