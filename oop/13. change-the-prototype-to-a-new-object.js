function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 4,
  eat: function(){
    console.log("Doggy biscuits");
  },

  describe: function(){
    console.log("very cute doggy!");
  }
};
