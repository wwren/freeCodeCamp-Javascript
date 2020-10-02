function bouncer(arr) {
  let returnArray = [];
  const notArray = [false, null, 0, "", undefined, 'NaN'];
  for (const element of arr) {

    if (notArray.indexOf(element) == -1){
      returnArray.push(element);
    }
  }
  // console.log(returnArray);
  for (let i = 0; i< returnArray.length; i++){
    if (Number.isNaN(returnArray[i])){
      returnArray.splice(i, 1);
    }
  }
  return returnArray;
}

bouncer([7, "ate", "", false, 9]);
console.log(bouncer([null, NaN, 1, 2, undefined]));