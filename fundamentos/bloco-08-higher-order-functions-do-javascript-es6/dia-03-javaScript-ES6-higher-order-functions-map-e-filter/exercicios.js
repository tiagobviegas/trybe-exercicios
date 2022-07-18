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

// ------------------------------------------------------------------

// Adicione o código do exercício aqui:

console.log(`
Questão 1 ------------------------------------------------------------------
`)
// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

//    > Dica: Use a função map

function formatedBookNames(book) {
  // escreva seu código aqui
  return `${book.name} - ${book.genre} - ${book.author.name}`;
}

console.log(books.map(formatedBookNames));

console.log(`
Questão 2 ------------------------------------------------------------------
`)

// ------------------------------------------------------------------

// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

//    > Dica: use as funções map, sort

function nameAndAge() {
  // escreva seu código aqui
  const author = books.map((book) => {
    const age = book.releaseYear - book.author.birthYear;
    return { ['age']: age, ['name']: book.author.name }
  });
  return (author.sort((a, b) => a.age - b.age));
}
// 
console.log(nameAndAge())


console.log(`
Questão 3 ------------------------------------------------------------------
`)

// ------------------------------------------------------------------

// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
//    > Dica: use a função filter;

function fantasyOrScienceFiction() {
  // escreva seu código aqui
  return (books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia'));
}
console.log(fantasyOrScienceFiction())

console.log(`
Questão 4 ------------------------------------------------------------------
`)

// ------------------------------------------------------------------

// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
//    > Dica: use as funções filter e sort


function oldBooksOrdered() {
  // escreva seu código aqui
  const oldestBooks = books.filter((book) => 2022 - book.releaseYear > 60);
  return oldestBooks.sort((a, b) => a.releaseYear - b.releaseYear);
}

console.log(oldBooksOrdered())

console.log(`
Questão 5 ------------------------------------------------------------------
`)

// ------------------------------------------------------------------

// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.


function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
  const genreArr = books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia')
  const arrange = genreArr.map((book) => book.author.name);
  arrange.sort();
  return arrange
};

console.log(fantasyOrScienceFictionAuthors());
console.log(`
Questão 6 ------------------------------------------------------------------
`)

// ------------------------------------------------------------------

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

function oldBooks() {
  // escreva seu código aqui
}
