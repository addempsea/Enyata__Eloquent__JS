function primitiveMultiply(a, b) {
  if (Math.random() < 0.5) {
    return a * b;
  } else {
    throw new Failure("Try again");
  }
}

function times(a, b) {
  for (;;) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (!(e instanceof Failure)) throw e;
    }
  }
}

console.log(time(4,5));