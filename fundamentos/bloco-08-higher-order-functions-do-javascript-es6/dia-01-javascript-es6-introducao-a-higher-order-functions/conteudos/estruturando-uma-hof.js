// ESTRUTURANDO UMA HOF
// Também podemos usar os parâmetros para que nossos códigos façam ações de fato, como neste exemplo do course, onde um dos parâmetros recebidos executa a ação do console.log para visualizar a contagem do loop for:

// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(5, console.log);

// Já no seguinte bloco de código o parâmetro "action" recebe a função callback que verifica se o number é par a cada repetição, retornando o número em questão caso a condição se satisfaça. Nessa situação, chamamos a função "repeat" passando o número 3 para "number", o resultado será "0 is even" e "2 is even":

// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(3, (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// });

// SAÍDA:
// 0 is even
// 2 is even

// Por fim, temos funções independentes para verificar se um número é par ou ímpar. Dessa forma nós chamamos a função "repeat" e passamos "3" para "number" e a função "isEven" em "action" para verificar quais número são pares. Repetimos o código mudando "isEven" para "isOdd" para encontrarmos os números ímpares entre 0 e 3.  

// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// const isEven = (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// };

// const isOdd = (number) => {
//   if ((number % 2) > 0) {
//     console.log(number, 'is odd');
//   }
// };

// repeat(3, isEven); // Testa quais números serão pares;
// repeat(3, isOdd); // Testa quais números serão ímpares;

// IMPORTANTE:

const numberGenerator = () => {
  return Math.random() * 100;
}

console.log(numberGenerator); // apenas exibe o que é "numberGenerator", ou seja, [Function: numberGenerator]
console.log(numberGenerator()); // o uso dos "()" determina que a função "numberGenerator" deve ser executada neste momento e dessa forma o "console.log" exibe o que ela faz, ou seja, retorna um número aleatório entre 0 e 99;

// PARA FIXAR:

