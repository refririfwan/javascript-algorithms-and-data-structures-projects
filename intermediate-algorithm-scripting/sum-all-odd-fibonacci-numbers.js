function sumFibs(num) {
  let prev = 0;
  let current = 1;
  let sum = 0;

  while (current <= num) {
    if (current % 2 !== 0) {
      sum += current;
    }

    const next = prev + current;
    prev = current;
    current = next;
  }

  return sum;
}

sumFibs(4);