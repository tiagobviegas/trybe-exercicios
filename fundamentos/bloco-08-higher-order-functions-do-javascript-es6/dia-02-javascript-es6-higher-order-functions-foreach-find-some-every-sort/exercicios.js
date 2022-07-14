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

//  1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
//    > Dica: use a função find.

const findNameByBirthYear = (year) => {
  const authorName = books.find((book) => book.author.birthYear === year)
  return authorName.author.name
};

console.log(findNameByBirthYear(1947));


//  2 - Retorne o nome do livro de menor nome.
//    > Dica: use a função forEach.

function smallerName(arr) {
  let nameBook;
  nameBook = arr[0].name;
  arr.forEach((book) => nameBook.split('').length < book.name.split('').length ? nameBook : nameBook = book.name)
  return nameBook;
}

console.log(smallerName(books));


// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook(arr) {
  // escreva seu código aqui
  return arr.find((book) => book.name.split('').length === expectedResult.name.split('').length ? book.name : null)
}

console.log(getNamedBook(books))
