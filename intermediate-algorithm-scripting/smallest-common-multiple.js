function smallestCommons(arr) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Function to calculate the greatest common divisor (GCD)
  function gcd(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  // Function to calculate the least common multiple (LCM)
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  let lcmResult = arr[0];

  // Calculate the LCM for the entire range
  for (let i = arr[0] + 1; i <= arr[1]; i++) {
    lcmResult = lcm(lcmResult, i);
  }

  return lcmResult;
}

smallestCommons([1,5]);