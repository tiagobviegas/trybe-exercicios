// new Promise((resolve, reject) => {}) // construtor

// Uma Promise retorna dois argumentos que são duas Funções. O primeiro parâmetro (que é uma função) é dedicado para uso de quando a promise é resolvida. E os segundo parâmetro (que é uma função!) para quando é rejeitada.

// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });

console.log(resolvedPromise())