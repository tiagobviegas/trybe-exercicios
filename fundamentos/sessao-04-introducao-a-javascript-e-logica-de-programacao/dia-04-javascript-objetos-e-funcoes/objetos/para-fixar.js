const player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
}

console.log(player);

const nome = player.name;
const sobrenome = player.lastName;
const idade = player.age;

console.log('A jogadora ' + nome + ' ' + sobrenome + ' ' + 'tem ' + idade + ' ' + 'anos de idade');

const achievements = player['bestInTheWorld'].length;

console.log('A jogadora ' + nome + ' ' + sobrenome + ' foi eleita a melhor do mundo por ' + achievements + ' vezes');