const reader = {
  name: 'Julia',
  lastName: 'Pessoa',
  age: 21,
  favoriteBooks: [
    {
      title: 'O Senhor dos Anéis - a Sociedade do Anel',
      author: 'J. R. R. Tolkien',
      publisher: 'Martins Fontes',
    },
  ],
};

const nome = reader['name'];
const sobrenome = reader['lastName'];
const titulo = reader['favoriteBooks'][0]['title'];

console.log(
  'O livro favorito de ' +
  nome +
  ' ' +
  sobrenome +
  ' se chama ' +
  titulo
);
  
const livros = reader['favoriteBooks'];
const novoLivro = {
  title: 'Harry Potter e o Prisioneiro de Azkaban',
  author: 'JK Rowling',
  publisher: 'Rocco',
};

livros.push(novoLivro);

console.log(reader);

const quantidade = livros.length

quantidade > 1 ? 
  (console.log('Julia tem ' + quantidade + ' livros favoritos')) :
  (console.log('Julia tem ' + quantidade + ' livro favorito'));

