function addTogether() {
  let args = Array.prototype.slice.call(arguments);

  if (!args.every(e => Number.isFinite(e)))
  {
    return undefined;
  }

  if (args.length > 1) {
    return args.reduce((a, b) => a+b);
  } else {
    return n => Number.isFinite(n) ? n + args[0] : undefined;
  }
}

addTogether(2, 3);