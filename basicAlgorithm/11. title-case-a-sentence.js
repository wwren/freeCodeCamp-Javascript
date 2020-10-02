function titleCase(str) {
  let arr = str.split(" ");
  let newString = "";
  for (let i =0; i< arr.length; i++){
    for (let j = 0; j < arr[i].length; j++){
      if (j==0){
        newString += arr[i][j].toUpperCase();    
      } else{
        newString += arr[i][j].toLowerCase();
      }
    }
    newString += " ";
  }

  return newString.trim(" ");
}

titleCase("I'm a little tea pot");
