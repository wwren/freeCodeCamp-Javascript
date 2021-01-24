function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  const keys = Object.keys(source);
  for (let obj of collection) 
  {
    let temp = {};
    keys.forEach(k => temp[k] = obj[k]);
    keys.every(k => temp[k] == source[k]) ? arr.push(obj) : "";
  } 

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });