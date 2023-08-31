function rot13(str) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === ' ') {
      result += ' ';
      continue;
    }

    const upperChar = char.toUpperCase();
    const index = alphabet.indexOf(upperChar);
    
    if (index !== -1) {
      const newIndex = (index + 13) % 26;
      const decodedChar = alphabet[newIndex];
      
      if (char === char.toUpperCase()) {
        result += decodedChar;
      } else {
        result += decodedChar.toLowerCase();
      }
    } else {
      result += char;
    }
  }

  return result;
}

rot13("SERR PBQR PNZC");