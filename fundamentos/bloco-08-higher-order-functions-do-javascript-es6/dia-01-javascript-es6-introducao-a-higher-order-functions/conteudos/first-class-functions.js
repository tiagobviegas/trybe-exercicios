// ATRIBUINDO FUNÇÕES ÀS VARIÁVEIS

// function sum (number1, number2) {
//   return number1 + number2;
// }

// const sumVariable = sum;

// console.log(sumVariable);
//  [Function: sum]


// RETORNANDO FUNÇÃO DE OUTRA FUNÇÃO
const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

const initialSum = sumFixAmount(15)
console.log(initialSum(5));