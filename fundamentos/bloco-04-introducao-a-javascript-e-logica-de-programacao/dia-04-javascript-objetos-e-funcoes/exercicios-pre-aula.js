//  Para fixar | OBJETOS
//
//  Agora vamos fazer alguns exercícios de fixação para consolidar os conhecimentos adquiridos no video anterior!
//  
//  1 - Crie um objeto player contendo as variáveis listadas abaixo.
//
//  let name = 'Marta';
//  let lastName = 'Silva';
//  let age = 34;
//  let medals = { golden: 2, silver: 3 };
//
//  let player = {
//    name: 'Marta',
//    lastName: 'Silva',
//    age: 34,
//    medals: { golden: 2, silver: 3 }
//  };
//
//
//  2 - Acesse as chaves "name" , "lastName" e "age" e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
//
//  console.log('A jogadora', player.name, player.lastName, 'tem', player.age, 'anos de idade');
//
//
//  3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
//
//  [2006, 2007, 2008, 2009, 2010, 2018]
//
//  player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
//
//
//  4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
//
//  console.log('A jogadora', player.name, player.lastName, 'foi eleita a melhor do mundo por', player.bestInTheWorld.length, 'vezes');
//
//
//  5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
//
//  console.log('A jogadora possui', player.medals.golden, 'medalhas de ouro e', player.medals.silver, 'medalhas de prata');
//
//
//  Para fixar | FOR/IN
//
//  No exemplo acima, utilizamos o For/of para percorrer o nosso iterável e nos retornar o valor dos índices.
//  Agora que você já sabe a diferença entre eles e como usá-los, vamos praticar?
//
//  1 - Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
//
//  let names = {
//    person1: 'João',
//    person2: 'Maria',
//    person3: 'Jorge' 
//  };
//  
//  for(let nomes in names) {
//    console.log('Olá', names[nomes])
//  }
//
//
//  2 - Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.
//
//  let car = {
//    model: 'A3 Sedan',
//    manufacturer: 'Audi',
//    year: 2020
//  };
//  
//  for(let models in car) {
//    console.log(models, car[models])
//  }
//
//
//  Para fixar | FUNÇÕES
//
//  Pegue cada um dos exercícios de 1 a 5 do final do dia 4.1 e faça com que todos eles sejam funções de um mesmo arquivo.
//
//  As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções.
//
//  Após refatorar o seu código , verifique se ele ainda está funcionando conforme especificado. Teste cada função com algumas entradas diferentes.
//
//
//  DIA 4.1 | Exercícios 1 a 5:
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