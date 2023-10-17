const player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
};

console.log(player);

const nome = player.name;
const sobrenome = player.lastName;
const idade = player.age;
const message =
  'A jogadora ' +
  nome +
  ' ' +
  sobrenome +
  ' ' +
  'tem ' +
  idade +
  ' ' +
  'anos de idade';
console.log(message);

const titulos = player['bestInTheWorld'].length;
const achievements =
  'A jogadora ' +
  nome +
  ' ' +
  sobrenome +
  ' foi eleita a melhor do mundo por ' +
  titulos +
  ' vezes';

console.log(achievements);
