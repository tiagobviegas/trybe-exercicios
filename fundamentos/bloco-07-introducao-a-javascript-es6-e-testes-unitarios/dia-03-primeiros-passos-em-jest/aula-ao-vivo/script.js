// EXEMPLO 1

function sum(a, b) {
  return a + b
}


// EXEMPLO 2

// Implemente uma função 'summationOff(number)' que recebe um numero interio e retorna o seu somatório:
//   Exemplo: 1 3-6 5-15
// - 'summationOf(1) retorna 1 
// - 'summationOf(3) retorna 3 | 1 + 2 + 3 = 6
// - 'summationOf(5) retorna 15 | 1 + 2 + 3 + 4 + 5 = 15

function summationOf(number) {
  let summation = 0;
  for (let i = 1; i <= number; i += 1) {
    summation += i;
  }
  return summation
}

module.exports = { sum, summationOf };
