// AGORA A PRÁTICA

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

console.log(`
Questão 1 --------------------------------------------------------------
`)

//  1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
//    > Dica: use a função find.

const findNameByBirthYear = (year) => {
  const authorName = books.find((book) => book.author.birthYear === year)
  return authorName.author.name
};

console.log(findNameByBirthYear(1947));

console.log(`
Questão 2 --------------------------------------------------------------
`)

//  2 - Retorne o nome do livro de menor nome.
//    > Dica: use a função forEach.

function smallerName(arr) {
  let nameBook;
  nameBook = arr[0].name;
  arr.forEach((book) => nameBook.split('').length < book.name.split('').length ? nameBook : nameBook = book.name)
  return nameBook;
}

console.log(smallerName(books));

console.log(`
Questão 3 --------------------------------------------------------------
`)

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

// const expectedResult = {
//   author: {
//     birthYear: 1948,
//     name: 'George R. R. Martin',
//   },
//   genre: 'Fantasia',
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   releaseYear: 1991,
// };

function getNamedBook(arr) {
  // escreva seu código aqui
  return arr.find((book) => book.name.split('').length === 26)
}

console.log(getNamedBook(books));

console.log(`
Questão 4 --------------------------------------------------------------
`)

// 4 - Ordene os livros por data de lançamento em ordem decrescente.

// const expectedResult = [
//   {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: { name: 'George R. R. Martin', birthYear: 1948 },
//     releaseYear: 1991,
//   },
//   {
//     id: 5,
//     name: 'A Coisa',
//     genre: 'Terror',
//     author: { name: 'Stephen King', birthYear: 1947 },
//     releaseYear: 1986,
//   },
//   {
//     id: 4,
//     name: 'Duna',
//     genre: 'Ficção Científica',
//     author: { name: 'Frank Herbert', birthYear: 1920 },
//     releaseYear: 1965,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//     releaseYear: 1954,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: { name: 'Isaac Asimov', birthYear: 1920 },
//     releaseYear: 1951,
//   },
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//     releaseYear: 1928,
//   },
// ];

function booksOrderedByReleaseYearDesc(arr) {
  // escreva aqui seu código
  return arr.sort((a, b) => b.releaseYear - a.releaseYear)
}

console.log(booksOrderedByReleaseYearDesc(books));

console.log(`
Questão 5 --------------------------------------------------------------
`)

// 5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

// const expectedResult = false;

function everyoneWasBornOnSecXX(arr) {
  // escreva seu código aqui
  return arr.every((book) => book.author.birthYear > 1900) 
}

console.log(everyoneWasBornOnSecXX(books));

console.log(`
Questão 6 --------------------------------------------------------------
`)

//  6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

// const expectedResult = true;

function someBookWasReleaseOnThe80s(arr) {
  // escreva seu código aqui
  return arr.some((book) => book.releaseYear >= 1980)
}

console.log(someBookWasReleaseOnThe80s(books));

console.log(`
Questão 7 --------------------------------------------------------------
`)

// 7 - Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.

// const expectedResult = false;

const expectedResult = false;

// function authorUnique() {
//   // escreva seu código aqui
// }

// Recorri ao gabarito pois tive dificuldade de entender a lógica por trás do código.
// source: https://app.betrybe.com/course/fundamentals/higher-order-functions-do-javascript-es6/javascript-es6-higher-order-functions-foreach-find-some-every-sort-gabarito/solutions/9d72cb46-f95e-41c5-8f6b-67dd39642f78/conteudo/d2f1d7c1-9abf-4878-bc94-c0ea31cc0cc7?use_case=calendar

function authorUnique() {
  return books.every((book) => {
    return !books.some((bookSome) => {
      return (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)
    })
  })
}

console.log(authorUnique())
