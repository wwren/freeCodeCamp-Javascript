function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
  let array = [...arr];
  newArr.push(array);
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
