const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';

const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
  objeto[novaPropriedade] = valor;
};

adicionaPropriedade(customer, 'adress', 'Vancouver CA')
console.log(customer)
adicionaPropriedade(customer, 'status', 'single')
console.log(customer)
