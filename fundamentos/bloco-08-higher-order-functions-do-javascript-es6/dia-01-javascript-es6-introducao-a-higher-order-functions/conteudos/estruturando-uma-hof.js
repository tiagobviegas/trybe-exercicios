// PARA FIXAR:

// Vamos praticar com os seguintes exercícios:

// 1 - Crie uma função que retorne a string 'Acordando!!';
const wakeUp = () => 'Acordando!!';

// 2 - Crie outra função que retorne a string 'Bora tomar café!!';
const breakfast = () => 'Bora tomar café!!';

// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!';
const sleep = () => 'Partiu dormir!!'

// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:
const doingThings = (callback) => console.log(callback());

doingThings(wakeUp);
doingThings(breakfast);
doingThings(sleep);

  // Ao chamar a função doingThings:

  // doingThings(wakeUp);

  // Ela deve retornar o valor do respectivo parâmetro, neste caso:
  // Acordando!!
