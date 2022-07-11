// ARRAY FOREACH();

// PARA FIXAR:

// 1 - Use o método forEach chamando a callback showEmailList para apresentar os emails

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui
emailListInData.forEach(showEmailList);


//___________________________________________________________________________________________

// TESTE:

// const pilotos = ['Charles Leclerc', 'Max Verstappen', 'Lewis Hamilton', 'George Russel', 'Esteban Ocon', 'Mick Schumacher', 'Fernando Alonso', 'Kevin Magnussen', 'Lando Noris', 'Lance Stroll'];

// const constructors = ['Ferrari', 'RedBull', 'Mercedes', 'Mercedes', 'Alpine', 'Haas', 'Alpine', 'Haas', 'McLaren', 'Aston Martin'];

// const finishTable = (driver, index) => console.log(`${index + 1}º - ${driver}`);

// pilotos.forEach(finishTable);
// console.log('-------------------------');
// constructors.forEach(finishTable);

//___________________________________________________________________________________________

// Multiplicar cada elemento do array por 3, retornando um novo array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// RESOLUÇÃO

const newArr = [];

// Construção "tradicional":

// const timesThree = (number) => {
//   return newArr.push(number * 3)
// };
// numbers.forEach(timesThree);


// Construção "alternativa":

// const timesThree = (number) => newArr.push(number * 3);
// numbers.forEach(timesThree);


// Construção reduzida:

numbers.forEach((number) => newArr.push(number * 3));


console.log(newArr);
