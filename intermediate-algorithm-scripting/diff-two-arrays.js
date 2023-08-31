function diffArray(arr1, arr2) {
  const diff1 = arr1.filter(item => !arr2.includes(item));
  const diff2 = arr2.filter(item => !arr1.includes(item));
  return diff1.concat(diff2);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);