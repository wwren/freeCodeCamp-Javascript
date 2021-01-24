var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly

let f = firstAndLast.split(" ")[0];
let l = firstAndLast.split(" ")[1];

this.getFirstName = function() { return f};

this.getLastName = function() {
   return l};

this.getFullName = function() {
    return f + " " + l;
  };

this.setFirstName = function(first) {
  f = first;
}

this.setLastName = function(last) {
  l = last;
}

this.setFullName = function(firstAndLast) {
  f = firstAndLast.split(" ")[0];
  l = firstAndLast.split(" ")[1];
};
};

var bob = new Person('Bob Ross');
bob.setFirstName("Haskell");
console.log(bob.getFirstName());