// Faça uma lista com as suas frutas favoritas
const specialFruit = ['kiwi', 'abacaxi', 'morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'granola', 'ninho'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  const minhaSaladaDeFrutas = [...fruit, ...additional]
  return minhaSaladaDeFrutas
};

console.log(fruitSalad(specialFruit, additionalItens));