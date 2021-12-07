// EXERCÍCIOS | VARIÁVEIS
//
// Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
//  1) Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
//  const birthCity = 'Brasília';
//  2) Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.
//  let birthYear = 1981;
//  3) Utilize o console.log() para imprimir as constantes e variáveis que você criou.
//  console.log(birthCity, birthYear);
//  4) Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
//  birthYear = 2030;
//  console.log(birthYear);
//  5) Altere o valor atribuído à constante birthCity . Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 
//  birthCity = 'Distrito Federal';
//  console.log(birthCity);
//  O erro ocorre porque não é possível alterar um valor atribuído a uma constante de forma direta ou por redeclarção.
//
//
// EXERCÍCIOS | TIPOS PRIMITIVOS, TIPAGEM DINÂMICA E OPERAÇÕES ARITMÉTICAS
//
// No exemplo abaixo, temos as informações de um paciente. Utilize o operador typeof para imprimir qual o tipo das variáveis patientId , isEnrolled , patientInfo e patientEmail . Esse operador retorna qual o tipo de uma variável, objeto, função ou expressão. Exemplo: console.log(typeof patientId) retornará number .
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

//  Vamos fazer algumas operações simples para encontrarmos a área e o perímetro de um retângulo de base 5 e altura 8.
//  1) Crie uma costante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.
//  const base = 5;
// const height = 8;
//  2) Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
//  const area = console.log(base * height);
//  3) Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.
//  const perimeter = 5 + 8 + 5 + 8;
//  console.log(perimeter);
//
//
// EXERCÍCIOS | CONDICIONAIS IF E ELSE
//
//  Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
    const nota = 85;
//  Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:
//  > Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
//  > Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
//  > Se a nota for menor que 60, imprima "Você foi reprovada(o)"
//  > Crie uma estrutura condicional utilizando o if , else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.
//  > Altere o valor da nota para verificar se as condições que você implementou funcionam;

    if (nota >= 80){
      console.log('Parabéns, você foi aprovada(o)');
    } else if (nota >= 60 ) {
      console.log('Você está na lista de espera');
    } else {
      console.log('Você foi reprovada(o)')
    }