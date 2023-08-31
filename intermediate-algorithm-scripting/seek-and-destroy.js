function destroyer(arr, ...args) {
  return arr.filter(item => !args.includes(item));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);