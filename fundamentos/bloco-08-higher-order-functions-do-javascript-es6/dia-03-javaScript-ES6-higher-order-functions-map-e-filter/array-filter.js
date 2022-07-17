// ARRAY.FILTER

// O array.filter retorna um novo array com os elementos relativos à condição estabelecida na função. O array.filter recebe três parâmetro, sendo um deles obrigatório, que é uma função. Os outros dois, opcionais, são o index do array e o próprio array.

const arr = ['Tiago', 'Ianny', 'Lis', 'Lia', 'Noah', 'Alex', 'Aaron', 'Sheik'];

console.log(arr.filter((name) => name.split('').length < 5));
// [ 'Lis', 'Lia', 'Noah', 'Alex' ]


// EXPERIMENTO: DISCRIMINANDO OS ELEMENTOS DO ARRAY USANDO FILTER:

const newArrayOfNames = (name, index, array) => {
  if(name.split('').length < 5) {
    return console.log(`"${name}" é o ${index + 1}º nome do array [${array}] com menos de 5 letras`);
  }
};

arr.filter(newArrayOfNames);
// "Lis" é o 3º nome do array [Tiago,Ianny,Lis,Lia,Noah,Alex,Aaron,Sheik] com menos de 5 letras
// "Lia" é o 4º nome do array [Tiago,Ianny,Lis,Lia,Noah,Alex,Aaron,Sheik] com menos de 5 letras
// "Noah" é o 5º nome do array [Tiago,Ianny,Lis,Lia,Noah,Alex,Aaron,Sheik] com menos de 5 letras
// "Alex" é o 6º nome do array [Tiago,Ianny,Lis,Lia,Noah,Alex,Aaron,Sheik] com menos de 5 letras



// ARRAY.MAP

// O array.map mapeia todos os elementos do array e devolve em um novo array o valor booleano dos elementos conforme o critério estabelecido na função. A exemplo do arary.filter, o array.map também recebe uma função como parâmetro obrigatório, além do index e do array original como opcionais.

const newNames = (name) => {
  return name.split('')[0] === 'L';
};

console.log(arr.map(newNames));
// [
//   false, false,
//   true,  true,
//   false, false,
//   false, false
// ]


// EXPERIMENTO: RETORNANDO A AVALIAÇÃO SE NOMES COMEÇAM COM A LETRA "L" OU NÃO USANDO ARRAY.MAP:

const namesStartsWithL = (name, i, arr) => (name.split('')[0] === 'L') ? (`O nome "${arr[i]}" começa com a letra "L"`) : 
  (`O nome "${arr[i]}" não começa com a letra "L"`);

console.log(arr.map(namesStartsWithL));
// [
//   'O nome "Tiago" não começa com a letra "L"',
//   'O nome "Ianny" não começa com a letra "L"',
//   'O nome "Lis" começa com a letra "L"',
//   'O nome "Lia" começa com a letra "L"',
//   'O nome "Noah" não começa com a letra "L"',
//   'O nome "Alex" não começa com a letra "L"',
//   'O nome "Aaron" não começa com a letra "L"',
//   'O nome "Sheik" não começa com a letra "L"'
// ]

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

// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
//    > Dica: Use a função map
