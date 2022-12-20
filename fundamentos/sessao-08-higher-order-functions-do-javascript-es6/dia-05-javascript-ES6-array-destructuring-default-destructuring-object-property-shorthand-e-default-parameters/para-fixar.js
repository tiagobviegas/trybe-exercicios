const primeNumbers = [17, 23, 37]

const sum = (a, b) => {
  console.log(a + b);
}

sum(primeNumbers[0], primeNumbers[2]) // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [firstNumber, , thirdNumber] = primeNumbers;
sum(firstNumber, thirdNumber);

// =======================================

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = ['arroz', 'gato', 'água']

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

// =======================================
