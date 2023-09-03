function binaryAgent(str) {
  // Split the binary string into an array of binary code words
  const binaryArray = str.split(" ");

  // Convert each binary code word to its ASCII character and join them
  const text = binaryArray
    .map(binary => String.fromCharCode(parseInt(binary, 2)))
    .join("");

  return text;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");