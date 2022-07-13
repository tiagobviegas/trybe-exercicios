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

//--------------------------------------------------------------------

// EXEMPLO DE ARRAY.EVERY

const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => (
  Object.values(studentGrades).every((grade) => grade === 'Aprovado')
);

console.log(verifyGrades(grades)); // retorna "false" pois houve reprovação em matemática
console.log(Object.values(grades));

//--------------------------------------------------------------------

// PARA FIXAR:

// 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false, use some;

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((nome) => nome === name)

console.log(hasName(names, 'Tiago'));