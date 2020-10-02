function mixedNumbers(arr) {
  // Only change code below this line
  let firstThree = ["I", 2, "three"];
  let lastThree = [7, "VIII", 9];

  arr.unshift(...firstThree);
  arr.push(...lastThree);
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
