 const numbers = [19, 21, 30, 3, 45, 22, 15];
//
// const verifyEven = (number) => number % 2 === 0;
// 
// const isEven = numbers.find(verifyEven);
// 
// console.log(isEven); // 30
// 
// console.log(verifyEven(9)); // False
// console.log(verifyEven(14)); // True
// 
// // Outra forma de ser realizada sem a necessidade de criar uma nova função.
// const isEven2 = numbers.find((number) => number % 2 === 0);
// 
// console.log(isEven2); // 30

// A HOF "numbers.find" devolve apenas um valor booleano sobre o que foi passado.


// PARA FIXAR

// 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:

const findDivisibleBy3And5 = () => {
  return numbers.find((number) => {
    return number % 3 === 0 && number % 5 === 0
  });
}

console.log(findDivisibleBy3And5());


// 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const names = ['João', 'Irene', 'Fernando', 'Maria'];
 
const findNameWithFiveLetters = () => {
  return names.find((name) => name.length === 5)
}
 
console.log(findNameWithFiveLetters());