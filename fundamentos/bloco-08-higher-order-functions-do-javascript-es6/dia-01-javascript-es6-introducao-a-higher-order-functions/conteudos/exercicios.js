// Agora a prática

// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

const createEmail = (name) => {
  `${name}, ${name.replaceAll(" ", "_").toLowerCase()}@trybe.com`;
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


// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const checkNumber = (bet, draw) => bet === draw ? true : false;

const result = (bet, draw) => {
  const randomizer = Math.ceil(Math.random() * 5);
  return draw(bet, randomizer) ? 'Parabéns você ganhou!' : 'Tente novamente';
};

result(3, checkNumber);

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

// > Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const rank = (answers, marks, checkGrade) => {
  let finalGrade = 0;
  let check;
  for (let i = 0; i < answers.length; i ++) {
    check = checkGrade(answers[i], marks[i]);
    if (check === true) {
      finalGrade ++;
    } else if (check === false && marks[i] === 'N.A') {
      finalGrade -= 0.5;
    };
  };
  return finalGrade;
};

const checkGrades = (answers, marks) => answers === marks;

console.log(rank(RIGHT_ANSWERS, STUDENT_ANSWERS, checkGrades));
