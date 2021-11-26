// EXERCÍCIOS | Variáveis
/*
Vamos praticar o que aprendemos no vídeo? 💪
Abra o seu VS Code e faça os exercícios a seguir.

Dica: Com o plugin code runner que vimos no vídeo você pode executar o seu código no VS
Code com o atalho ctrl + alt + n.

1) Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
  
  var myName = "Tiago Viegas";

2) Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
  
  const birthCity = "Brasília-DF";

3) Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.
  
  var birthYear = 1981;

4) Utilize o console.log() para imprimir as constantes e variáveis que você criou.
  
  console.log(myName, birthCity, birthYear)

5) Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
var birthYear = 2030;

  console.log(myName, birthCity, birthYear)
  o ano de nascimento impresso na tela foi o valor da variável birthYear atualizada;

6) Altere o valor atribuído à constante birthCity . Faça um console.log(birthCity) novamente!
Você saberia explicar por que recebemos uma mensagem de erro?

  const birthCity = "Vancouver";
  console.log(birthCity);

  Ocorre erro pois "const" é um tipo de variável que não pode ser redeclarada, porém seus valores podem ser alterados
  de outras formas de acordo com o tipo de valor atribuído a ela, por exemplo, no caso de ser atribuído como valor um array
  poderá ser alterado o valor de dentro da array por meio do comando "push".


// EXERCÍCIOS | Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas
/*
Agora é a hora da mão na massa no código! No exemplo abaixo, temos as informações de um paciente. Utilize o operador
typeof para imprimir qual o tipo das variáveis patientId , isEnrolled , patientInfo e patientEmail . Esse operador retorna
qual o tipo de uma variável, objeto, função ou expressão. Exemplo: console.log(typeof patientId) retornará number


let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId); // resultado: number
console.log(typeof isEnrolled); // resultado: boolean
console.log(typeof patientInfo); // resultado: object
console.log(typeof patientEmail); // resultado: string
console.log(typeof patientAge); // resultado: undefined

let patientId = '50';
console.log(typeof patientId); // resultado: string

Agora que você já conhece os operadores aritméticos básicos do JavaScript, vamos praticá-los? Você pode consultar a lista
de operadores na tabela JavaScript Arithmetic Operators disponível nesse link se tiver dúvidas. Vamos fazer algumas operações
simples para encontrarmos a área e o perímetro de um retângulo de base 5 e altura 8.

1) Crie uma costante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.

  const base = 5;
  let height = 8;
  
 console.log(base, height)

2) Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar
sempre o console.log() para imprimir as variáveis e checar os resultados das operações!

  const area = base * height

  console.log(area)

3) Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.

  let perimeter = base + area + height
  console.log(perimeter);




// EXERCÍCIOS | If e Else
/*
Criar estruturas condicionais com operadores if/else e operadores lógicos será algo muito comum na sua carreira de pessoa 
desenvolvedora. Então vamos praticar o que aprendemos no vídeo?

1) Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
2) Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso,
  considere as seguintes informações:
3) Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
4) Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
5) Se a nota for menor que 60, imprima "Você foi reprovada(o)"
6) Crie uma estrutura condicional utilizando o if , else if e else para criar o seu algoritmo, e os operadores lógicos que 
se aplicam a cada situação.
7) Altere o valor da nota para verificar se as condições que você implementou funcionam;

const nota = 80;

if (nota >= 80){
  console.log("Parabéns, você foi aprovada(o)!")
} else if (nota < 80 && nota >= 60){
  console.log("Você está na nossa lista de espera")
} else {
  console.log("Você foi reprovada(o)")
}

*/