// ARRAY.SORT

// Ela permite ordenar um array de acordo com algum critério estabelecido. Caso queira ordenar de forma alfabética, basta chamar sort, sem parâmetros algum na função.

const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];

food.sort();

console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]
// food.sort().reverse();  ----> [ 'feijão', 'farofa', 'doce de leite', 'chocolate', 'arroz' ]
// food.sort((a, b) => a < b ? 1 : -1);  ----> [ 'feijão', 'farofa', 'doce de leite', 'chocolate', 'arroz' ]

// -------------------------------------------------------------------------------

// Quando há elementos como números, a sort coloca de acordo com a ordem alfabética dos códigos desse elemento na tabela de caracteres unicode! Para ordenar de forma numérica crescente, é necessário passar a função a seguir:

const points = [40, 100, 1, 5, 25, 10];

points.sort((a, b) => a - b);

console.log(points);
// [1, 5, 10, 25, 40, 100]

// points.sort((a, b) => b - a);  ----> [ 100, 40, 25, 10, 5, 1 ]

// -------------------------------------------------------------------------------

// O método sort também é capaz de ordenar objetos, como demonstra o exemplo a seguir:

const gamers = [
  {
    name: 'Eduardo',
    points: [20, 22, 100, 10, 0]
  },
  {
    name: 'Ana',
    points: [0, 20, 10, 100, 100]
  },
  {
    name: 'Bob',
    points: [0, 100, 10, 10, 5, 20]
  },
  {
    name: 'Carlo',
    points: [3, 20, 10, 10, 10]
  }
];

  // O sort ordena os elementos com base em números. Assim, ao ordenar valores em forma de strings nas chaves de objetos é preciso fazer uma associação numérica por meio do operador ternário, associando um valor crescente a verdadeiro e decrescente a falso:

  gamers.sort((a, b) => a.name > b.name ? 1 : -1);

  console.log(gamers);
  /*
  [
    { name: 'Ana', points: [ 0, 20, 10, 100, 100 ] },
    { name: 'Bob', points: [ 0, 100, 10, 10, 5, 20 ] },
    { name: 'Carlo', points: [ 3, 20, 10, 10, 10 ] },
    { name: 'Eduardo', points: [ 20, 22, 100, 10, 0 ] }
  ]
  */

  // No caso a seguir, a ordenação é feita pelo valor total de pontos de cada gamer. Nessa situação fazermos a soma dos valores de cada array e os comparamos com a função de callback do sort.

  gamers.sort((a, b) => {
    let pointsA = 0;
    let pointsB = 0;
    a.points.forEach((element) => pointsA += element);
    b.points.forEach((element) => pointsB += element);
    return pointsA - pointsB
  });

  console.log(gamers);
  /*
  [
    { name: 'Carlo', points: [ 3, 20, 10, 10, 10 ] },  ----> total de pontos: 53
    { name: 'Bob', points: [ 0, 100, 10, 10, 5, 20 ] },  ----> total de pontos: 145
    { name: 'Eduardo', points: [ 20, 22, 100, 10, 0 ] }, ----> total de pontos: 152
    { name: 'Ana', points: [ 0, 20, 10, 100, 100 ] } ----> total de pontos: 230
  ]
  */

  // Essa operação será melhor codificada com uso da função reduce().


// -------------------------------------------------------------------------------


// PARA FIXAR

// 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente.

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione se código aqui
people.sort((a, b) => a.age - b.age)

console.log(people);