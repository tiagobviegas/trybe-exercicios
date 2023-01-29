// new Promise((resolve, reject) => {}) // construtor

// Uma Promise retorna dois argumentos que são duas Funções. O primeiro parâmetro (que é uma função) é dedicado para uso de quando a promise é resolvida. E os segundo parâmetro (que é uma função!) para quando é rejeitada.

// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// // promise resolvida retornando o número aleatório
// const resolvedPromise = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNumber = generateRandomNumber();
//       resolve(randomNumber);
//     }, 1000);
//   });

const numberPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const number = generateRandomNumber()
      if (number % 2 === 0) {
        resolve(number)
      } else {
        reject(new Error(`${number} não é par`));
      }
    }, 1000)
  })

numberPromise()
  .then((response)=> console.log(`O número ${response} é par`))
  .catch((response) => console.log(`número inválido: ${response.message}`));