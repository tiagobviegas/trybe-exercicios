// Agora a prática

// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.


const names =  ['Pedro Guerra', 'Luiza Drumond', 'Carla Paiva'];


const newEmployees = (callback) => {
  const employees = {
    id1: callback, // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback, // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback, // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// const createEmail = () => {
//   for (let i = 0; i < names.length; i += 1) {
//     console.log(`${names[i]}, ${names[i].replace(" ", "_").toLowerCase()}@trybe.com`);
//   }
// };

newEmployees(createEmail());
