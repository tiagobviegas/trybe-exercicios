const numbers = [50, 85, -30, 300, 15, 120];

const checkBigger = (acc, currentNumber) => acc < currentNumber ? currentNumber : acc;

console.log(numbers.reduce(checkBigger));
