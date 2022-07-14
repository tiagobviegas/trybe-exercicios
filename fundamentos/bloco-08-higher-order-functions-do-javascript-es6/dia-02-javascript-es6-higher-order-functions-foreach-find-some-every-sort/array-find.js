// ARRAY FIND
// Acha o primeiro elemento que satisfaça a condição passada e o retorna.

// const numbers = [12, 4, 9, 43, 63, 54, 123, 54, 90, 0]

// console.log(numbers.find((number)=> number > 30));

//------------------------------------------------------------------

// PARA FIXAR:
// 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
  return numbers.find((number) => number % 3 === 0 && number % 5 === 0);
}

// Construção reduzida:
// const findDivisibleBy3And5 = () => numbers.find((number) => number % 3 === 0 && number % 5 === 0);

console.log(findDivisibleBy3And5())

//------------------------------------------------------------------

// 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const names = ['João', 'Irene', 'Fernando', 'Maria'];

  // Construção tradicional:
  const findNameWithFiveLetters = () => {
    // Adicione seu código aqui:
    return names.find((name) => {
      return name.split('').length === 5 ? name : null;
    })
  }

  // Construção alternativa:

  // const findNameWithFiveLetters = () => {
  //  return names.find((name) => name.split('').length === 5 ? name : null);
  // }

  // Construção reduzida:

  // const findNameWithFiveLetters = () => names.find((name) => name.split('').length === 5 ? name : null);

console.log(findNameWithFiveLetters());

//------------------------------------------------------------------

// 3 - Utilize o find para encontrar a música com id igual a 31031685, caso ela exista:

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

// Construção tradicional:
function findMusic(id) {
  // Adicione seu código aqui
  return musicas.find((musica) => {
  // return musica.id  === id ? musica : null;  ----> não é necessário operador ternário. 
    return musica.id  === id  // ----> Basta escrever a condição
  });
}

// Construção alternativa:

// function findMusic(id) {
//   return musicas.find((musica) => musica.id === id);
// }

// Construção reduzida:
// const findMusic = (id) => musicas.find((musica) => musica.id === id);


console.log(findMusic('31031685'));
