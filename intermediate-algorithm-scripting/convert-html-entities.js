function convertHTML(str) {
  // Create an object to map special characters to their HTML entities
  const htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };

  // Use a regular expression to replace special characters with their HTML entities
  return str.replace(/[&<>"']/g, char => htmlEntities[char]);
}

convertHTML("Dolce & Gabbana");