function pairElement(str) {
  return str.split("").map(e => e == "G" ? [e, "C"] : e == "C" ? [e, "G"] : e == "A"? [e, "T"] : [e, "A"]);
}

pairElement("GCG");