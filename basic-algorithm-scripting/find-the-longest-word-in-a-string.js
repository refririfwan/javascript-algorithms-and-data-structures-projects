function findLongestWordLength(str) {
  const words = str.split(' ');
  let longestWord = '';

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");