const expectedResult = false;

const authorUnique = () => {
  // escreva seu código aqui
  return books.every((book) => book.author.birthYear === !books.some((book2) => book2.author.birthYear));
}


console.log(authorUnique());