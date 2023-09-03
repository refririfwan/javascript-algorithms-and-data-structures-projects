function truthCheck(collection, pre) {
  return collection.every(obj => obj.hasOwnProperty(pre) && Boolean(obj[pre]));
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");