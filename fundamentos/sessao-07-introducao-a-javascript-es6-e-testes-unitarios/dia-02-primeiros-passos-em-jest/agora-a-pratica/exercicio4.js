const techList = (array, name) => {
  const result = [];
  array.sort();
  for(let i = 0; i < array.length; i += 1) {
    result.push({
      tech: array[i],
      name: name,
    })
  }
  return result
}

module.exports = techList;
