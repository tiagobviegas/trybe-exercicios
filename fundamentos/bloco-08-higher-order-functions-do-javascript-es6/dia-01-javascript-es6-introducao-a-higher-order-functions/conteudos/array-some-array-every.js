// O exemplo abaixo usa o some para verificar se possui algum nome que começa com a letra desejada:

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false


// O exemplo abaixo usará o every para verificar se o estudante passou em todas as matérias:

const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => (
  Object.values(studentGrades).every((grade) => grade === 'Aprovado')
);

console.log(verifyGrades(grades)); // false

// CONTEÚDO DO COURSE

const pessoas = [
  { nome: 'Robert', sobreNome: 'De Niro', dirige: false },
  { nome: 'Michelle', sobreNome: 'Pfeiffer', dirige: true },
  { nome: 'Will', sobreNome: 'Smith', dirige: true },
  { nome: 'Mariah', sobreNome: 'Carey', dirige: false },
  { nome: 'Lady', sobreNome: 'Gaga', dirige: true },
  { nome: 'Justin', sobreNome: 'Bieber', dirige: true },
];

// Usando o SOME
let temPessoaQueSabeDirigir = pessoas.some((pessoa) => pessoa.dirige === true);
console.log(temPessoaQueSabeDirigir) // true


// Usando o EVERY para verificar se todas as pessoas sabem dirigir
let todasAsPessoasSabemDirigir = pessoas.every((pessoa) => pessoa.dirige === true);
let resposta2 = todasAsPessoasSabemDirigir
  ? 'Todas as pessoas dirigem'
  : 'Nem todas as pessoas dirigem';
console.log(resposta2);

// Pegar as informações da 'primeira' pessoa que não sabe dirigir
// Usando o FIND
let pessoa = pessoas.find((pessoa) => pessoa.dirige === true);
console.log(pessoa.nome);


// PARA FIXAR
// 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false, use some;

