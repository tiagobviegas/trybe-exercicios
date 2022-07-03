// ATRIBUINDO FUNÇÕES ÀS VARIÁVEIS

// function sum (number1, number2) {
//   return number1 + number2;
// }

// const sumVariable = sum;

// console.log(sumVariable);
//  [Function: sum]


// const sum = (number1, number2) => {
//   return number1 + number2;
// };



// const sumFixAmount = (amount) => {
//   return (number) => amount + number;
// }
// // 15 + number;

// const initialSum = sumFixAmount(15);
// // 15 + number;

// console.log(initialSum(5));
// // 15 + 5;
// // 20


// TESTE: compondo nome de membro da família;
// const familyName = (lastName) => {
//   return (firstName) => `${firstName} ${lastName}`;
// }

// const newMember = familyName('Viegas');
// console.log(newMember('Aaron'));

// REFATORANDO:

// const familyName = (lastName) => (firstName) => `${firstName} ${lastName}`;
// const newMember = familyName('Viegas');
// console.log(newMember('Aaron'));


// RETORNANDO FUNÇÃO DE OUTRA FUNÇÃO

const sayHello = () => {
  return ('hello trybers');
}
// const sayHello = () => ('hello trybers');

const printGreeting = (callback) => {
  console.log(callback());
}
// const printGreeting = (callback) => console.log(callback());

printGreeting(sayHello);
