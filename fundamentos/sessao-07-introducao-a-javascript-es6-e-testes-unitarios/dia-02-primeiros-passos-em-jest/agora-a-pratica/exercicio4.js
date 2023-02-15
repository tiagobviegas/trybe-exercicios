const techList = (array, name) => {
  if (array.length === 0) {
    return 'Vazio!'
  }
  array.sort();
  const result = [];
  for(let i = 0; i < array.length; i += 1) {
    result.push({
      tech: array[i],
      name: name,
    })
  }
  return result
}

module.exports = techList;
