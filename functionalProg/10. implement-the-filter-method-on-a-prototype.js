// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  // Only change code below this line
  var newArray = [];
  // Only change code above this line
  for(let i = 0; i< s.length; i++){
    if (s[i]%2 ===1){
      newArray.push(s[i]);
    }
  }

  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
console.log(new_s);