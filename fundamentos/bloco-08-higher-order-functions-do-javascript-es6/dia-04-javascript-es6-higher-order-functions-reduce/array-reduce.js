const numeros = [4, 6, 1, 3, -5, 8];

const comparaNumeros = (acc, curr) => acc < curr ? acc : curr

const menorDeTodos = numeros.reduce(comparaNumeros, 0);

console.log(menorDeTodos);



// ---------------------------------------------------------------------------

const nomes = ['Tiago', 'Ianny', 'Veralene', 'Ivanilde', 'Miguel', 'Maria'];

const comparaNomes = (nomeAnterior, nomeAtual) => nomeAnterior.length > nomeAtual.length ? nomeAnterior : nomeAtual;

const maiorNome = nomes.reduce(comparaNomes, 0);

console.log(maiorNome);



// ---------------------------------------------------------------------------

const numbers = [5, 34, 50, 54, 9, 20];

const numerosPares = numbers.filter((number) => number % 2 === 0);

// ----------------------------

const somatorio = (numeroAnterior, numeroAtual) => numeroAnterior + numeroAtual; 

const soma = numerosPares.reduce(somatorio, 0);

console.log(soma);



// ---------------------------------------------------------------------------

const numbers2 = [8, 98, 3, 34, 40];

const sumPair = (accumulator, number) => (
  (number % 2 === 0) ? accumulator + number : accumulator
);

const sumNumbers = (array) => array.reduce(sumPair, 0);

console.log(sumNumbers(numbers2)); // 152


// -------------------------------------------------------