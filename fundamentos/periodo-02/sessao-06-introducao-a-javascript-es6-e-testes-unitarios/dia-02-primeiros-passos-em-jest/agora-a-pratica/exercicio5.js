function hydrate(drinks) {
  let sum = 0;
  const range = /[0-9]/g;
  for (let i = 0; i < drinks.length; i += 1) {
    if(drinks[i].match(range)) {
      sum += Number(drinks[i])
    }
  }
  if (sum <= 1) {
    return `${sum} copo de água`;
  } else {
    return `${sum} copos de água`;
  }
}

module.exports = hydrate;
