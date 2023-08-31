function largestOfFour(arr) {
  const result = [];

  for (const subArray of arr) {
    let largestNumber = subArray[0];
    
    for (const number of subArray) {
      if (number > largestNumber) {
        largestNumber = number;
      }
    }
    
    result.push(largestNumber);
  }

  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);