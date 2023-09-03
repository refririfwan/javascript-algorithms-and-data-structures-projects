function addTogether() {
  // Check if all arguments are numbers
  const areNumbers = (...args) => args.every(arg => typeof arg === 'number');

  if (arguments.length === 1 && typeof arguments[0] === 'number') {
    const x = arguments[0];

    return function(y) {
      if (typeof y === 'number') {
        return x + y;
      } else {
        return undefined;
      }
    };
  } else if (areNumbers(...arguments)) {
    return arguments[0] + arguments[1];
  } else {
    return undefined;
  }
}

addTogether(2,3);