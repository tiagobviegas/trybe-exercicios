// AGORA A PRÁTICA

// 1 - Crie uma função que retorne um objeto no formato "{ nomeCompleto, email }" representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF "newEmployees" para criar cada pessoa contratada em seu respectivo "id". A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato "nome_da_pessoa@trybe.com".

const newEntry = (nome) => {
  const email = `${nome.toLowerCase().replaceAll(" ", "_")}@trybe.com`;
  return ({ nome, email });
} 

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    id4: callback('Lana Del Rey'), // Nome: Lana Del Rey -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};


console.log(newEmployees(newEntry));


// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const checkNumber = (number, drawNumber) => number === drawNumber ? `Parabéns, você ganhou!` : `Tente novamente`;

const draw = (number, callback) => callback(number, (Math.ceil(Math.random() * 5)));

console.log(draw(3, checkNumber));



// 3 - Crie uma HOF que receberá três parâmetros:

  // > O primeiro será um array de respostas corretas (Gabarito);
  // > O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
  // > O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso essa função usará os seguintes critérios:

    // >> Uma resposta correta adiciona 1 ponto à pontuação final;
    // >> A ausência de uma resposta não altera a pontuação (quando for "N.A");
    // >> Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
  
  // Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


const answerCheck = (rightAnswers, studenAnswer) => {
  let mark = 0;
  for (let i = 0; i < rightAnswers.length; i += 1) {
    if (rightAnswers[i] === studenAnswer[i]) {
      mark += 1;
    } else if(studenAnswer[i] !== 'N.A') {
      mark -= 0.5
    }
  }
  return mark;
}

const evaluation = (rightAnswers, answers, callback) => {
  return callback(rightAnswers, answers)
}

console.log(evaluation(RIGHT_ANSWERS, STUDENT_ANSWERS, answerCheck));
