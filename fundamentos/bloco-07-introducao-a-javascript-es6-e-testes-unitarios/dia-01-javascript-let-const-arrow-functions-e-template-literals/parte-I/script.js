function userInfo() {
  let userEmail = 'maria@email.com';

  // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
  console.log(userEmail);
}
// console.log(userEmail); // dá erro por "userEmail" estar fora do escopo da função

userInfo();

///////////////////////

if (true) {
  // inicio do escopo do if
  var userAge = '20';
  console.log(userAge); // 20
  // fim do escopo do if
}
console.log(userAge); // 20

// vazamento de escopo (hoisting) devido ao uso de "var", que permite que a informação guardada na variável possa ser acessada previamente ou posteriormente e também extrapolando escopos.

// Abaixo, "userName" é sobrescrito ao ser redeclarada sem que nenhuma notificação de erro seja emitida.

var userName = 'Isabella';
var userName = 'Lucas';
console.log(userName); // Resultado: Lucas

const favoriteLanguage = 'Javascript';
favoriteLanguage = 'Python';
console.log(favoriteLanguage); // Erro (const não pode ser redeclarada)

let favoriteTechnology = 'Machine learning';
favoriteTechnology = 'Facial recognition';
console.log(favoriteTechnology); // Facial recognition

// Apesar de "const" não permitir que seja redeclarada, seu valor pode ser alterado indiretamente
const userInfo = {
  name: 'Cláudio',
  id: '5489-2',
  email: 'claudio@email.com',
};

userInfo.name = 'João';

console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }