function steamrollArray(arr) {
  const flattenedArray = [];

  function flatten(arr) {
    arr.forEach(function(element) {
      if (Array.isArray(element)) {
        // Recursively flatten nested arrays
        flatten(element);
      } else {
        // Push non-array elements to the flattenedArray
        flattenedArray.push(element);
      }
    });
  }

  flatten(arr);
  return flattenedArray;
}

steamrollArray([1, [2], [3, [[4]]]]);