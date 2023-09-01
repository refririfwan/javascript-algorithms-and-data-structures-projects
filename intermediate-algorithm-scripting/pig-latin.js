function translatePigLatin(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  str = str.toLowerCase();
  const words = str.split(" ");
  
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let pigLatinWord = "";
    
    if (vowels.includes(word[0])) {
      pigLatinWord = word + "way";
    } else {
      let consonantCluster = "";
      let j = 0;
      
      while (!vowels.includes(word[j]) && j < word.length) {
        consonantCluster += word[j];
        j++;
      }
      
      pigLatinWord = word.slice(j) + consonantCluster + "ay";
    }
    
    words[i] = pigLatinWord;
  }
  
  return words.join(" ");
}

translatePigLatin("consonant");