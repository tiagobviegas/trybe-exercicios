const numbers = [50, 85, -30, 3, 15];

const bigger = (acc, curr) => acc > curr ? acc : curr
const result = numbers.reduce(bigger, 0)
console.log(result)

// resolvido em uma linha:
// console.log(numbers.reduce((acc, curr) => acc > curr ? acc : curr, 0))
