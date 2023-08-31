function confirmEnding(str, target) {
  const startPos = str.length - target.length;
  const endPart = str.slice(startPos);

  return endPart === target;
}

confirmEnding("Bastian", "n");