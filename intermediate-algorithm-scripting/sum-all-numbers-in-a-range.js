function sumAll(arr) {
  const [start, end] = arr.sort((a, b) => a - b);
  let sum = 0;
  
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  
  return sum;
}

sumAll([1, 4]);