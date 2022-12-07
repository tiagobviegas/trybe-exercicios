const expectedResult = true;

const someBookWasReleaseOnThe80s = () => {
  // escreva seu código aqui
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear < 1990)
}

console.log(someBookWasReleaseOnThe80s());