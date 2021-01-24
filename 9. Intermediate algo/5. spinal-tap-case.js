function spinalCase(str) {
  const re = /[A-Z][a-z]+|[a-z]+(?=-|\s|$)|^[a-z]+/g;

  return str.match(re).join("-").toLowerCase();
}

spinalCase('This Is Spinal Tap');