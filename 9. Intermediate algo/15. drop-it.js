function dropElements(arr, func) {

  let firstIndex = arr.findIndex(func);

  if (firstIndex < 0)
  {
    return [];
  }

  return arr.slice(firstIndex);
}

dropElements([1, 2, 3], function(n) {return n < 3; });