const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const evenNumbers = (number, nextNumber) => 
  number % 2 === 0 && nextNumber % 2 === 0 ?
  number + nextNumber :
  number + 0;

const sumEven = numbers.reduce(evenNumbers, 0)
console.log(sumEven);

// resolvido em uma linha

// console.log(numbers.reduce((number, nextNumber) => number % 2 === 0 && nextNumber % 2 === 0 ? number + nextNumber : number + 0, 0));
