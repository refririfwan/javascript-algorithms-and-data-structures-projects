function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    // Check if the next character is not the expected next character in the sequence
    if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {
      // Return the missing character
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
  
  // If no missing character is found, return undefined
  return undefined;
}

fearNotLetter("abce");