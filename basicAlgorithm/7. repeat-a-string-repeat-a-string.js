function repeatStringNumTimes(str, num) {
 let addOn = str;

 if (num <=0 ){
   return "";
 }
 
 while (num > 1){
   str += addOn;
   num--;
 }

 return str;
}


console.log(repeatStringNumTimes("abc", 3));