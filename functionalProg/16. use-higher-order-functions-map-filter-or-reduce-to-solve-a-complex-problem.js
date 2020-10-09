const squareList = (arr) => {
  // Only change code below this line
const filter = arr.filter(a => a > 0 && Number.isInteger(a) );

const square = filter.map(a => a**2);
  return square;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
