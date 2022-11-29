// let singer = {
//   name: 'Milton',
//   lastName: 'Nascimento',
//   // last-name: 'Nascimento',  // acessando com padrão 'kebab-case'
//   nickname: 'Bituca',
//   age: 77,
//   bestAlbuns: ['Travessia', 'Clube da Esquina', 'Minas'],
//   bornInfo: {
//     city: 'Rio de Janeiro',
//     state: 'Rio de Janeiro'
//   }
// };

// console.log('O cantor ' + singer.name + ' ' + singer.lastName + ' tem ' + singer.age + ' anos.');
// // console.log('O cantor ' + singer.name + ' ' + singer.'last-name' + ' tem ' + singer.age + ' anos.'); // acessando com padrão 'kebab-case'

// ATENÇÃO: NÃO USE O ESTILO DE ESCRITA KEBAB-CASE NO JAVASCRIPT, ISSO NÃO É UMA BOA PRÁTICA PORQUE O TRAÇO PODE SER INTERPRETADO COMO UM SINAL DE SUBTRAÇÃO. USE O ESTILO CAMELCASE.

// console.log('O cantor ' + singer['name'] + ' ' + singer['lastName'] + ' tem ' + singer['age'] + ' anos.')

// singer['fullName'] = singer.name + ' ' + singer.lastName;
// // singer['fullName'] = singer.['name'] + ' ' + singer.['lastName'];

// console.table(singer);

// console.log('O cantor ' + singer.fullName + ' nasceu no estado do ' + singer.bornInfo.state + '.');

// let car = {
//   type: 'Fiat',
//   model: '500',
//   color: 'white',
// };

// console.log(car.type);
// console.table(car);
// car['type'] = 'Audi';
// console.log(car.type);
// console.table(car);
// car['type'] = 'Lamborghini';
// console.log(car.type);
// console.table(car);


// let diasDaSemana = {
//   1: 'domingo',
//   2: 'segunda',
//   3: 'terça',
//   4: 'quarta',
//   5: 'quinta',
//   6: 'sexta',
//   7: 'sábado',
// };
  
// //diasDaSemana.1; // SyntaxError: Unexpected number
// //diasDaSemana.2; // SyntaxError: Unexpected number
// //diasDaSemana.5; // SyntaxError: Unexpected number
// //diasDaSemana.3; // SyntaxError: Unexpected number
// //diasDaSemana.6; // SyntaxError: Unexpected number
// console.log(diasDaSemana['1']); // domingo
// console.log(diasDaSemana['2']); // segunda
// console.log(diasDaSemana['5']); // quinta
// console.log(diasDaSemana['3']); // terça
// console.log(diasDaSemana['6']); // sexta
//
//
// let conta = {
//   agencia: '0000',
//   banco: {
//     cod: '012',
//     id: 4,
//     nome: 'TrybeBank',
//   },
// };

// let infoDoBanco = 'banco';
// console.log(conta.banco); // Traz todo o valor da chave 'banco' em forma de objeto
// console.log(conta[infoDoBanco]); // Traz todo o valor da chave 'banco' como objeto em uma única linha. { cod: '012', id: 4, nome: 'TrybeBank' }
// //  A variável 'infoDoBanco' tem como valor a string 'banco', e com isso armazena todas as informações da chaves 'banco'. Usar variáveis possibilita mudar as informações das chaves de forma dinâmica. 
// console.log(conta.infoDoBanco); // Usando "dot notation" ocorre erro!

// console.log(conta[infoDoBanco]['nome']); // TrybeBank
// console.log(conta[infoDoBanco].nome); // TrybeBank

// console.log(conta[infoDoBanco].cod); // 012
// console.log(conta[infoDoBanco]['cod']); // 012
// console.log(conta.banco['cod']); // 012
// console.log(conta.banco.cod); // 012

// console.log(conta.agencia); // 0000
// console.log(conta['agencia']); // 0000

// console.log(conta['banco']['id']); // 4
//
//
// let usuario = {
//   id: 99,
//   email: 'jakeperalta@gmail.com',
//   infoPessoal: {
//     nome: 'Jake',
//     sobrenome: 'Peralta',
//     endereco: {
//       rua: 'Smith Street',
//       bairro: 'Brooklyn',
//       cidade: 'Nova Iorque',
//       estado: 'Nova Iorque',
//     },
//   },
// };

// console.log(usuario['id']); // 99
// console.log(usuario.email); // jakeperalta@gmail.com
// console.log(usuario.infoPessoal.endereco.rua); // Smith Street
// console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque
// console.log(usuario.infoPessoal); // Traz todo o conteúdo da chave 'inforPessoal' em forma de objeto
//
//
// ACESSANDO OBJETOS DENTRO DE ARRAYS
//
// let moradores = [
//   {
//     nome: 'Luiza',
//     sobrenome: 'Guimarães',
//     andar: 10,
//     apartamento: 1005,
//   },
//   {
//     nome: 'William',
//     sobrenome: 'Albuquerque',
//     andar: 5,
//     apartamento: 502,
//   },
//   {
//     nome: 'Murilo',
//     sobrenome: 'Ferraz',
//     andar: 8,
//     apartamento: 804,
//   },
//   {
//     nome: 'Zoey',
//     sobrenome: 'Brooks',
//     andar: 1,
//     apartamento: 101,
//   },
// ];

// let primeiroMorador = moradores[0];
// console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
// console.log(primeiroMorador['andar']); // 10

// let ultimoMorador = moradores[moradores.length - 1];
// console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
// console.log(ultimoMorador.nome); // Zoey
//
//
// EXERCÍCIOS - Para fixar
//
//  1 - Crie um objeto "player" contendo as variáveis listadas abaixo.
//
//    let name = 'Marta';
//    let lastName = 'Silva';
//    let age = 34;
//    let medals = { golden: 2, silver: 3 };
//
let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3
  },
};
//
//  2 - Acesse as chaves "name" , "lastName" e "age" e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
//
console.log('A jogadora ' + player.name + ' ' +  player.lastName + ' tem ' + player.age + ' anos de idade.');
//
//  3 - Adicione ao objeto a chave "bestInTheWorld" e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
//
//  [2006, 2007, 2008, 2009, 2010, 2018]
//
player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
//
//  4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
//
console.log('A jogadora ' + player['name'] + ' ' + player['lastName'] + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');
//
//  5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
//
console.log('A jogadora possui ' + player['medals']['golden'] + ' medalhas de ouro e ' + player['medals']['silver'] + ' medalhas de prata.');
