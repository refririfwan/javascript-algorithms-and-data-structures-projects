function whatIsInAName(collection, source) {
  const keys = Object.keys(source);
  
  return collection.filter(item => {
    for (const key of keys) {
      if (!item.hasOwnProperty(key) || item[key] !== source[key]) {
        return false;
      }
    }
    return true;
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });