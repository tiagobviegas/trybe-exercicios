//  AGORA A PRÁTICA

//  Todos os exercícios devem ser realizados utilizando reduce, e se necessário outra HOF, a informação será citada no enunciado.

//  1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  const newArray = arrays[0].concat(arrays[1]).concat(arrays[2])
  const elements = (acc, curr) => (acc += curr)
  // return arrays.reduce(elements, []);
  return newArray
  
}

console.log(flatten())