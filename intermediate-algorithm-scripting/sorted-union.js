function uniteUnique(arr) {
  // Concatenate all the arrays into one array
  const combinedArray = [].concat(...arguments);

  // Use a Set to store unique values while maintaining order
  const uniqueArray = [...new Set(combinedArray)];

  return uniqueArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);