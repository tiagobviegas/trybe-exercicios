const numbers = [50, 85, -30, 300, 15, 120];

const checkBigger = (prevNum, currNum) => prevNum < currNum ? currNum : prevNum;

console.log(numbers.reduce(checkBigger));
