function diffArray(arr1, arr2) {
  
  var arr2Filter = arr2.filter(ele => !arr1.includes(ele));
  var arr1Filter = arr1.filter(ele => !arr2.includes(ele));
  var newArr = arr1Filter.concat(arr2Filter);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);




