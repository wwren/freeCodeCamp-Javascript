function rot13(str) {
  let lookup = {};
  let inverseLookup = {};
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let index =  1;
  for (let a of alpha)
  {
    lookup[a] = index;
    inverseLookup[index] = a;
    index++;
  }

  let result = [];

  str.split("").forEach(e => lookup[e] == undefined ? result.push(e) : result.push(inverseLookup[(lookup[e] + 13) % 26] || "Z"));

  return result.join("");
}

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");