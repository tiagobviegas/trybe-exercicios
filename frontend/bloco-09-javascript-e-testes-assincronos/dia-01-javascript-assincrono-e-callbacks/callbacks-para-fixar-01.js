// PARA FIXAR

// Faça os seguintes exercícios de fixação:
// Copie o código abaixo para realizar o exercício 01:

// 1 - Adicione uma callback como parâmetro da função getUser para realizar as operações abaixo:
//    A função getUser, ao ser chamada com o parâmetro userFullName, deve retornar: "Olá! Meu nome é Ivan Ivanovich"
//    A função getUser, ao ser chamada com o parâmetro userNationality, deve retornar: "Ivan é Russo"

const userFullName = ({ firstName, lastName }) => `Olá! Meu nome é ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} é ${nationality}`;

const getUser = (/* callback */) => {
  const user = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russo',
  };
  // Insira o retorno da função `getUser`
};

console.log(getUser()); // Retorno esperado: "Olá! Meu nome é Ivan Ivanovich"
console.log(getUser()); // Retorno esperado: "Ivan é Russo"


