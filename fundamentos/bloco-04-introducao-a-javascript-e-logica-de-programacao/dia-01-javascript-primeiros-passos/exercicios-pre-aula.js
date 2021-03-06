//  EXERCÍCIOS | VARIÁVEIS
//
//  Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
//  1) Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
//
//  const birthCity = 'Brasília';
//
//  2) Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.
//
//  let birthYear = 1981;
//
//  3) Utilize o console.log() para imprimir as constantes e variáveis que você criou.
//
//   console.log(birthCity, birthYear);
//
//  4) Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
//
//  birthYear = 2030;
//  console.log(birthYear);
//
//  5) Altere o valor atribuído à constante birthCity . Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro?
//
//   birthCity = 'Distrito Federal';
//   console.log(birthCity);
//  O erro ocorre porque não é possível alterar um valor atribuído a uma constante de forma direta ou por redeclarção.
//
//
//  EXERCÍCIOS | TIPOS PRIMITIVOS, TIPAGEM DINÂMICA E OPERAÇÕES ARITMÉTICAS
//
//  No exemplo abaixo, temos as informações de um paciente. Utilize o operador typeof para imprimir qual o tipo das variáveis patientId , isEnrolled , patientInfo e patientEmail . Esse operador retorna qual o tipo de uma variável, objeto, função ou expressão. Exemplo: console.log(typeof patientId) retornará number .
//
//  let patientId = 50;
//  let isEnrolled = true;
//  const patientInfo = {
//    firstName: 'Ana',
//    lastName: 'Santos',
//  };
//  const patientEmail = 'ana@email.com';
//  
//  console.log(typeof(patientId));
//  console.log(typeof(isEnrolled));
//  console.log(typeof(patientInfo));
//  console.log(typeof(patientEmail));
//  
//  Vamos fazer algumas operações simples para encontrarmos a área e o perímetro de um retângulo de base 5 e altura 8.
//  1) Crie uma costante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.
//
//  const base = 5;
//  const height = 8;
//
//  2) Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
//
//  const area = console.log(base * height);
//
//  3) Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.
//
//  const perimeter = 5 + 8 + 5 + 8;
//  console.log(perimeter);
//
//
// EXERCÍCIOS | CONDICIONAIS IF E ELSE
//
//  Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
//  const grade = 85;
//
//  Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:
//  > Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
//  > Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
//  > Se a nota for menor que 60, imprima "Você foi reprovada(o)"
//  > Crie uma estrutura condicional utilizando o if , else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.
//  > Altere o valor da nota para verificar se as condições que você implementou funcionam;
//
//   if (grade >= 80){
//    console.log('Parabéns, você foi aprovada(o)');
//  } else if (grade >= 60 ) {
//    console.log('Você está na lista de espera');
//  } else {
//    console.log('Você foi reprovada(o)')
//  }
//
//
//  EXERCÍCIOS | OPERADORES LÓGICOS
//
//  1) Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.
//
//  const currentHour = 15;
//
//  2) Crie uma variável chamada "message" que, inicialmente, é uma string vazia.
//
//  let message = '';
//
//  3) Implemente condicionais para que:
//    > Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message".
//    > Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".
//    > Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".
//    > Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".
//    > Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".
//  Agora imprima a variável message fora das suas condições.
//
//  if (currentHour >= 22) {
//    message = 'Não deveriíamos comer nada, é hora de dormir';
//  } else if (currentHour >= 18) {
//    message = 'Rango da noite, vamos jantar :D';
//  } else if (currentHour >= 14) {
//    message = 'Vamos fazer um bolo pro café da tarde?';
//  } else if (currentHour >= 11) {
//    message = 'Hora do almoço!!!';
//  } else {
//    message = 'Hmmm, cheiro de café recém passado'
//  }
//  console.log(message);
//
//
//  1) Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".
//  2) Implemente condicionais para que:
//    > Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".
//    > Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU".
//    Experimente trocar o valor da string ou até mesmo montar seu próprio algoritmo. Esse assunto é muito importante para seu aprendizado :).
//
//   let weekDay = 'domingo';
//   if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
//     console.log('Oba, mais um dia de aprendizado na Trybe >:D');
//   } else if (weekDay === 'sábado' || weekDay === 'domingo') {
//     console.log('FINALMENTE, descanso merecido UwU');
//   } else {
//     weekDay = 'Dia inexistente!'
//   }
//   console.log(weekDay);
//
//
//  EXERCÍCIOS | SWITCH CASE
//
//  1) Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;
//
//  let result = 'lista';
//
//
//  2) Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica' .//
//  switch (result) {
//    case 'aprovada':
//      console.log('Parabéns, você foi aprovada(o)');
//      break;
//    case 'lista':
//      console.log('Você está na lista de espera');
//      break;
//    case 'reprovada':
//      console.log('Você foi reprovada(o)');
//      break;
//    default:
//      console.log('não se aplica');
//      break;
//  }
//
//  A estrutura switch/case é utilizada quando queremos executar diferentes ações. A expressão que passamos para o switch é avaliada apenas uma vez, e o seu valor é comparado em cada caso. Se essa comparação for verdadeira, o código do caso avaliado é executado. Se nenhum valor satisfizer os casos listados, é executado o código em default .