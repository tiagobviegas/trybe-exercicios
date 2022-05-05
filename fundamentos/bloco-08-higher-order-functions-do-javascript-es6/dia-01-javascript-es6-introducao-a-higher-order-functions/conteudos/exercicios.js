// Agora a prática

// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

const createEmail = (name) => {
  console.log(`${name}, ${name.replaceAll(" ", "_").toLowerCase()}@trybe.com`);
};
// ao introduzir o sobrenome "Álvares" no primeiro registro e testar a funcionalidade descobri que a função "replace()" altera apenas o primeiro elemento encontrado. Dessa forma, experimentei usar "All" junto ao replace e assim consegui fazer com que os demais elementos também fossem substituídos. Posteriormente encontrei a documentação referente a função "replaceAll()" em https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll

const newEmployees = (newEntries) => {
  const employees = {
    id1: newEntries('Pedro Guerra Alvares de Alcantara'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: newEntries('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: newEntries('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
newEmployees(createEmail);
