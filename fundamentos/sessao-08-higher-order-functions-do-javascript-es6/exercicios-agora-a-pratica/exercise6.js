const expectedResult = false;

const authorUnique = () => {
  // escreva seu código aqui
  return books.every((bookEvery) => books.some((bookSome) => bookSome.author.birthYear === bookEvery.author.birthYear));
}

console.log(authorUnique());