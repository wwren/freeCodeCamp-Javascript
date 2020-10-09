function sentensify(str) {
  // Only change code below this line
 let arr = str.split(/[,-.]+/);
console.log(arr);
  let joinStr = arr.join(" ");
console.log(joinStr);
return joinStr;
  // Only change code above this line
}
sentensify("May-the-force-be-with-you");
