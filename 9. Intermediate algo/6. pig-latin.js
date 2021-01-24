function translatePigLatin(str) {

  let re1 = /^[^aeiou]+/;
  let re2 = /[aeiou][a-z]+/;
  return str.search(re1) == -1 ? str + "way" : (str.match(re2) || "") + (str.match(re1) || "") + "ay";

}

translatePigLatin("consonant");