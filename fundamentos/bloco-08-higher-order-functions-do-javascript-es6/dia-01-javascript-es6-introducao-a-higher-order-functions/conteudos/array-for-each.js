const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);

// 0 * 2: 0
// 1 * 2: 2
// 2 * 2: 4
// 3 * 2: 6
// 4 * 2: 8
// 5 * 2: 10
// 6 * 2: 12
// 7 * 2: 14
// 8 * 2: 16
// 9 * 2: 18

// A função "multipliesFor2" está ao mesmo tempo servindo de nome para o parâmetro da função "numbers.forEach", que por sua vez retorna cada elemento do array "numbers" no sua chamada, que é função "multipliesFor2". Desta forma a informação devolvida por "number.forEach" para o seu parâmetro é recebida pela função "multipliesFor2" também como parâmetro da função "multipliesFor2". Assim, o retorno da função "numbers.forEach" pode ser usado dentro do escopo de "multipliesFor2" como parâmetro de "multipliesFor2". LEMBRE-SE QUE O PRIMEIRO PARÂMETRO DE UMA FUNÇÃO "forEach" é sempre os VALORES do array, neste caso, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]. Também podemos adicionar à função recebedora de "forEach", na sequência dos VALORES, os INDEX e o próprio ARRAY como parâmetro. Esses parâmetros devem ser escritos na função receptora da HOFs.


const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]

// Neste caso usamos os VALORES e os INDEX do array "names" para montar o retorno de "names" em caixa alta. 


// PARA FIXAR
// 1 - Use o método forEach chamando a callback showEmailList para apresentar os emails

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach((email) => {
  showEmailList(email)
});

showEmailList()


// CONTEÚDO DO COURSE

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// Fazer o log de cada numero do array abaixo multiplicado por 3

const numeros = [12, 3, 5, 7, 123, 55, 90, 0, 13];

// RESPOSTA:
// numeros.forEach((number) => console.log(number * 2))


// Array de estados para os próximos exemplos
const estados = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goías',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraíma',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins',
];

// Fazer o log de todos os estados do array abaixo no formato
// 1 - Acre
// 2 - Alagoas

// Imprimir na tela todos os elementos do Array estados em caixa alta

estados.forEach((estado, i) => console.log(`${i + 1} - ${estado.toUpperCase()}`));


// Apresentar o nome e a nota final de todas as pessoas estudantes que tiverem média final das notas
// das avaliações (avaliacao, projeto e trabalho em grupo) maior ou igual a 7
// mediaFinal = (avaliacao + projeto + trabalhoGrupo) / 3

const pessoasEstudantes = [
  { nome: 'Alexandre', avaliacao: 7, projeto: 5.5, trabalhoGrupo: 8 },
  { nome: 'Marcondes', avaliacao: 6, projeto: 7.5, trabalhoGrupo: 5 },
  { nome: 'Rodrigo', avaliacao: 8.5, projeto: 9, trabalhoGrupo: 7 },
  { nome: 'Marcella', avaliacao: 8, projeto: 7, trabalhoGrupo: 4 },
  { nome: 'Adriana', avaliacao: 9, projeto: 7, trabalhoGrupo: 7 },
  { nome: 'Marlene', avaliacao: 7.5, projeto: 8, trabalhoGrupo: 7 },
];

pessoasEstudantes.forEach((estudante) => {
  let media = (estudante.avaliacao + estudante.projeto + estudante.trabalhoGrupo) / 3;
  if (media >= 7) {
    return console.log(`${estudante.nome} foi aprovado com média ${media.toFixed(1)}`);
  }
});