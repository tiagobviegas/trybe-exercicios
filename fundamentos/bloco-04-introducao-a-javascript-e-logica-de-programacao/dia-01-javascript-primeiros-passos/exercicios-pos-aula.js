//  Agora a prática
//
//  Nos exercícios de hoje, você vai fazer quinze pequenos programas. Todos trabalham a lógica condicional ( if/else e switch/case ), operadores aritméticos ( + , - , * , / , % ) e operadores lógicos ( > , < , && , || ). Para que consiga executar seus códigos recomendamos que utilize a extensão Code Runner , você pode ver mais sobre ela no conteúdo que fizemos sobre o uso do VS Code .
//
//  1) Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
//
//  > Adição (a + b)
//  > Subtração (a - b)
//  > Multiplicação (a * b)
//  > Divisão (a / b)
//  > Módulo (a % b)
//
//  *Dica: Neste link você encontra mais detalhes sobre operadores matemáticos 
//
//  const a = 5;
//  const b = 3;
//
//  console.log(a + b);
//  console.log(a - b);
//  console.log(a * b);
//  console.log(a / b);
//  console.log(a % b);
//
//    
//  2) Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
//
//  const a = 6;
//  const b = 5;
//  if (a > b) {
//    console.log(a);
//  } else if (b > a) {
//    console.log(b);
//  } else {
//    console.log('os números são iguais');
//  }
//
//
//  3) Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
//
//  const a = 9;
//  const b = 6;
//  const c = 3;
//  if (a > b && a > c) {
//    console.log(a);
//  } else if (b > a && b > c) {
//    console.log(b);
//  } else if (c > a && c > b) {
//    console.log(c);
//  } else {
//    console.log('os números são iguais')
//  }
//
//
//  4) Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
//
//  const a = 10;
//  if (a > 0) {
//    console.log('positive');
//  } else if (a < 0) {
//    console.log('negative');
//  } else {
//    console.log('zero');
//  }
//
//
//  5) Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
//
//  > Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
//  > Um ângulo será considerado inválido se não tiver um valor positivo.
//
//  const a = 60;
//  const b = 60;
//  const c = 60;
//  const soma = (a + b + c);
//  const triangulo = true;
//  if (soma == 180) {
//    console.log(triangulo);
//  } else {
//    console.log(!triangulo);
//  }
//
//
//  6) Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//  
//  > Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//  > Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
//  > Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
//    Exemplo: bishop (bispo) -> diagonals (diagonais)
//
//  let peca = 'BIG';
//  let convertPeca = peca.toLocaleLowerCase();
//  console.log(convertPeca);
//  switch (convertPeca) {
//    case 'peão':
//      console.log('O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.');
//      break;
//    case 'torre':
//      console.log('A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.');
//      break;
//    case 'cavalo':
//      console.log('É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.');
//      break;
//    case 'bispo':
//      console.log('O bispo move-se ao longo da diagonal. Não pode pular outras peças.');
//      break;
//    case 'rainha':
//      console.log('A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.');
//      break;
//    case 'rei':
//      console.log('O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.');
//      break;
//    default:
//      console.log(`Erro! Digite 'peão' ou 'torre' ou 'cavalo' ou 'bispo' ou 'rainha' ou 'rei'!`);
//      break;
//  }
//
//
//  7) Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
//
//  > Porcentagem >= 90 -> A
//  > Porcentagem >= 80 -> B
//  > Porcentagem >= 70 -> C
//  > Porcentagem >= 60 -> D
//  > Porcentagem >= 50 -> E
//  > Porcentagem < 50 -> F
//  
//  > O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
//
//  const grade = 149;
//  if (grade < 0 || grade > 100) {
//    console.log('Erro! Nota inválida!');
//  } else if (grade >= 90) {
//    console.log('A');
//  } else if (grade >= 80) {
//    console.log('B');
//  } else if (grade >= 70) {
//    console.log('C');
//  } else if (grade >= 60) {
//    console.log('D');
//  } else if (grade >= 50) {
//    console.log('E');
//  } else {
//    console.log('F');
//  }
//
//
//  8) Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
//
//  Bonus: use somente um if.
//
//  const a = 4;
//  const b = 1;
//  const c = 5;
//  const even = true;
//  if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
//    console.log(even);
//  } else {
//    console.log(!even);
//  }
//
//
// 9) Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
//
//  Bonus: use somente um if .
//
//  const a = 7;
//  const b = 6;
//  const c = 2;
//  const odd = true;
//  if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
//    console.log(odd);
//  } else {
//    console.log(!odd);
//  }
//
//
//  10) Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
//
//  > Atente que, sobre o custo do produto, incide um imposto de 20%.
//  > Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
//  > O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
//    > valorCustoTotal = valorCusto + impostoSobreOCusto
//    > lucro = valorVenda - valorCustoTotal (lucro de um produto)
//  
//  const valorCusto = -2;
//  const valorVenda = 0;
//  const impostoSobreOCusto = valorCusto * 0.20;
//  let valorCustoTotal;
//  let lucro;
//  
//  if (valorCusto < 0 || valorVenda < 0) {
//    console.log('Erro! Valor inválido');
//  } else {
//    valorCustoTotal = valorCusto + impostoSobreOCusto;
//    lucro = (valorVenda - valorCustoTotal) * 1000;
//    console.log(lucro);
//  }
//
//
//  11) Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
//
//  > A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
//
//    > INSS (Instituto Nacional do Seguro Social)
//
//      > Salário bruto até R$ 1.556,94: alíquota de 8%
//      > Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
//      > Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
//      > Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
//
//    > IR (Imposto de Renda)
//
//      > Até R$ 1.903,98: isento de imposto de renda
//      > De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
//      > De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
//      > De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
//      > Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
//  
//  Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
//    
//    > O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
//    
//    > Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
//
//    > Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
//
//      > R$ 2.670,00: salário com INSS já deduzido;
//      > 7.5%: alíquota de imposto de renda;
//      > R$ 142,80 parcela a se deduzir do imposto.
//
//    > Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
//
//  > O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
//
//  > Resultado: R$ 2.612,55.
//
//  Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?
//  
//  let salarioBruto;
//  let salarioComInss; 
//  let irAliquota;
//  let inssAliquota;
//  
//  salarioBruto = prompt('Digite seu salário bruto, utilizando "." no lugar da vírgula que separa os centavos');
//  
//  if (salarioBruto < 0) {
//    alert('Erro! Valor inválido');
//  } else if (salarioBruto < 1556.94) {
//    inssAliquota = salarioBruto * 0.08;
//  } else if (salarioBruto <= 2594.92) {
//    inssAliquota = salarioBruto * 0.09;
//  } else if (salarioBruto <= 5189.82) {
//    inssAliquota = salarioBruto * 0.11;
//  } else {
//    inssAliquota = 570.88;
//  }
//  
//  salarioComInss = (salarioBruto - inssAliquota);
//  
//  if (salarioComInss <= 1903.98) {
//    irAliquota = 0
//  } else if (salarioComInss <= 2826.65) {
//    irAliquota = salarioComInss * 0.075 - 142.80;
//  } else if (salarioComInss <= 3751.05) {
//    irAliquota = salarioComInss * 0.15 - 354.80;  
//  } else if (salarioComInss <= 4664.68) {
//    irAliquota = salarioComInss * 0.225 - 636.13;
//  } else if (salarioComInss > 4664.68) {
//    irAliquota = salarioComInss * 0.227 - 869.36;
//  }
//  
//  salarioLiquido = (salarioComInss - irAliquota);
//  salarioLiquido.toFixed(2);
//  alert(`Seu salário líquido é de R$ ${salarioLiquido}`);
