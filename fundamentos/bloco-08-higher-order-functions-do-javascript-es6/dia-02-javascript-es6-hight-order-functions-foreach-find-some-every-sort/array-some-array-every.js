// ARRAY.SOME e ARRAY.EVERY

// As funções some e every são parecidas. A primeira retorna true se ao menos um elemento de um array satisfaz a uma condição. A segunda retorna true se todos os elementos de um array satisfazem a uma condição.

// EXEMPLO DE ARRAY.SOME

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => {
  const result = names.some((name) => name[0] === letter);
  return result ? 
  `Há pelo menos um nome com a letra "${letter}".` : 
  `Não há nomes com a letra "${letter}".`
}

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('X', listNames)); // false


// EXEMPLO DE ARRAY EVERY