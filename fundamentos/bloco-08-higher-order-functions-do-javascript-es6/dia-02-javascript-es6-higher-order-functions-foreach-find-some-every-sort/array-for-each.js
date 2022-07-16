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

const pilotos = ['Charles Leclerc', 'Max Verstappen', 'Lewis Hamilton', 'George Russel', 'Esteban Ocon', 'Mick Schumacher', 'Lando Noris', 'Kevin Magnussen', 'Daniel Riccardo', 'Fernando Alonso'];

const constructors = ['Ferrari', 'RedBull RBPT', 'Mercedes', 'Mercedes', 'Alpine', 'Haas', 'McLaren', 'Haas', 'McLaren', 'Alpine'];

const finishTable = (driver, index) => console.log(`${index + 1}º - ${driver}`);

console.log(`
British GP - Standings
`)
pilotos.forEach(finishTable);
console.log('-------------------------');
constructors.forEach(finishTable);

//___________________________________________________________________________________________
