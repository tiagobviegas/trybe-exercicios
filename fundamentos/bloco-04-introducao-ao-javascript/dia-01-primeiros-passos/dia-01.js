// EXERCÍCIOS | Variáveis
/*
Vamos praticar o que aprendemos no vídeo?
Abra o seu VS Code e faça os exercícios a seguir.

Dica: Com o plugin code runner que vimos no vídeo você pode executar o seu código no VS
Code com o atalho ctrl + alt + n.

1) Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
  
  let myName = "Tiago Viegas";

2) Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
  
  const birthCity = "Brasília-DF";

3) Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.
  
  let birthYear = 1981;

4) Utilize o console.log() para imprimir as constantes e variáveis que você criou.
  
  console.log(myName, birthCity, birthYear)

5) Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
let birthYear = 2030;

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

console.log(typeof(patientId)); // resultado: number
console.log(typeof(isEnrolled)); // resultado: boolean
console.log(typeof(patientInfo)); // resultado: object
console.log(typeof(patientEmail)); // resultado: string
console.log(typeof(patientAge)); // resultado: undefined

let patientId = '50';
console.log(typeof patientId); // resultado: string

Agora que você já conhece os operadores aritméticos básicos do JavaScript, vamos praticá-los? Você pode consultar a lista
de operadores na tabela JavaScript Arithmetic Operators disponível nesse link se tiver dúvidas. Vamos fazer algumas operações
simples para encontrarmos a área e o perímetro de um retângulo de base 5 e altura 8.

1) Crie uma costante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.

  const base = 5;
  let height = 8;
  
 console.log(base, height);

2) Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar
sempre o console.log() para imprimir as variáveis e checar os resultados das operações!

  const area = base * height

  console.log(area);

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
  console.log("Parabéns, você foi aprovada(o)!");
} else if (nota < 80 && nota >= 60){
  console.log("Você está na nossa lista de espera");
} else {
  console.log("Você foi reprovada(o)");
}

// EXERCÍCIOS 4.1
1) Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo
com os valores que serão operados. Faça programas para:

Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)

  let a = 20;
  let b = 15;

  let sum = a + b
  let sub = a - b
  let mult = a * b
  let div = a / b
  let mod = a % b


2) Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão
comparados.

const a = 25;
const b = 20;

if(a > b){
  console.log("a é maior");
} else if(a < b) {
  console.log("b é maior")
} else {
  console.log("os números são iguais")
}


3) Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão
comparados.

const a = 55;
const b = 30;
const c = 15;

if (a > b && a > c){
  console.log("a é o maior numero")
} else if (b > a && b > c){
  console.log("b é o maior numero")
} else if (c > a && c > b){
  console.log("c é o maior numero")
}


4) Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for 
negativo e "zero" caso contrário. 

const numero = 20;

if (numero > 0){
  console.log("positive");
} else if (numero < 0){
  console.log("negative");
} else {
  console.log("zero");
}


5) Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos
representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma 
mensagem de erro.

  > Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
  > Um ângulo será considerado inválido se não tiver um valor positivo.
prompt()
const ladoA = 60;
const ladoB = 90;
const ladoC = 60;
let soma = ladoA+ladoB+ladoC;
if (ladoA < 0 || ladoB < 0 || ladoC < 0){
  console.log("ângulo inválido")
} else if (soma === 180){
  let triangulo = true;
  console.log(triangulo)
} else {
  let triangulo = true;
  console.log(!triangulo)
}


6) Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
  > Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas,
    sem aumentar a quantidade de condicionais.
  > Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
  > Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

  Exemplo: bishop (bispo) -> diagonals (diagonais)

  let nome = prompt("digite o nome de uma peça de xadrez");
let peca = nome.toLowerCase()
  switch (peca){
    case "rei":
      console.log("Se move em qualquer direção, uma casa por vez");
      break
    case "rainha":
      console.log("Se move em qualquer direção porém quantas casas livres quiser");
      break
    case "bispo":
      console.log("Se move na diagonal quantas casas quiser. O Bispo que iniciar a partida em uma casa branca somente poderá transitar pelas brancas, enquanto o Bispo que inicia em uma casa preta somente poderá transitar pelas casas pretas.")
      break
    case "cavalo":
      console.log("É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante. Quando a casa de saída do Cavalo for escura, a casa de chegada será clara, e vice-versa.");
      break
    case "torre":
      console.log("Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser")
      break
    case "peão":
      console.log("Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua.");
      break
    default:
      console.log("Erro! Não é uma peça de xadrez")
  }


7) Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

  Porcentagem >= 90 -> A
  Porcentagem >= 80 -> B
  Porcentagem >= 70 -> C
  Porcentagem >= 60 -> D
  Porcentagem >= 50 -> E
  Porcentagem < 50 -> F
  
  > O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

  let nota = prompt("digite sua nota de 0 a 100 para saber o conceito de A a F");
  if (nota >= 90 && nota <= 100){
    console.log("A");
  } else if (nota >= 80 && nota < 90) {
    console.log("B")
  } else if (nota >= 70 && nota < 80){
    console.log("C")
  } else if (nota >= 60 && nota < 70){
    console.log("D")
  } else if (nota >= 50 && nota < 60){
    console.log("E")
  } else if (nota >= 0 && nota < 50){
    console.log("F")
  } else {
    console.log("Erro - nota inválida")
  }

  // ou

  let nota = prompt("digite sua nota de 0 a 100 para saber o conceito de A a F");
  if (nota < 0 || nota > 100) {
    console.log("Erro - nota inválida")
  } else if (nota < 50){
    console.log("F");
  } else if (nota < 60) {
    console.log("E")
  } else if (nota < 70){
    console.log("D")
  } else if (nota < 80){
    console.log("C")
  } else if (nota < 90){
    console.log("B")
  } else {
    console.log("A")
  }


8) Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário,
ele retorna false
 ig
  > Bonus: use somente um if.

  const 

9) Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário,
ele retorna false .

  > Bonus: use somente um if .

10) Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda.
A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses
produtos.

  > Atente que, sobre o custo do produto, incide um imposto de 20%.
  > Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
  > O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz
    parte do valor de custo.
  > valorCustoTotal = valorCusto + impostoSobreOCusto
  > lucro = valorVenda - valorCustoTotal (lucro de um produto)

11) Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

  > INSS (Instituto Nacional do Seguro Social):
  >> Salário bruto até R$ 1.556,94: alíquota de 8%
  >> Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
  >> Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
  >> Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

  > IR (Imposto de Renda)
  >> Até R$ 1.903,98: isento de imposto de renda
  >> De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
  >> De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
  >> De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
  >> Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

  Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
  
  > O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000,
  ou seja, R$ 330,00.
  > Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
  > Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então,
  de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:

    >> R$ 2.670,00: salário com INSS já deduzido;
    >> 7.5%: alíquota de imposto de renda;
    >> R$ 142,80 parcela a se deduzir do imposto.

  > Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
  > O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

  > Resultado: R$ 2.612,55.

  Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?

  */
