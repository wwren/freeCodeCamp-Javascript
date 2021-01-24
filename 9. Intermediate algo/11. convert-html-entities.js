function convertHTML(str) {
  return str.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("'", "&apos;").replaceAll('"', "&quot;");
}

convertHTML("Dolce & Gabbana");