const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const checkNumber = (prevNum, currNum) => currNum % 2 === 0 ? prevNum += currNum : prevNum;

console.log(numbers.reduce(checkNumber, 0));

// Em apenas uma linha:
// console.log(numbers.reduce((prevNum, currNum) => currNum % 2 === 0 ? prevNum += currNum : prevNum));