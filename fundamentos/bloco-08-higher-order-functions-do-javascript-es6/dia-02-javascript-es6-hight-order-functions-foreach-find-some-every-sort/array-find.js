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
