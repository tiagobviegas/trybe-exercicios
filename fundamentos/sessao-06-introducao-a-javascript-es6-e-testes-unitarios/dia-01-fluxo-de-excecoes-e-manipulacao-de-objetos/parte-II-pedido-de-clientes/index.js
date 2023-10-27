const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const orderName = order.name;
  const orderPhone = order.phoneNumber;
  const orderStreet = order.address.street;
  const orderNumber = order.address.number;
  const orderAp = order.address.apartment

  console.log(`Olá Ana Silveira, entrega para: ${orderName}, Telefone: ${orderPhone}, R. ${orderStreet}, Nº: ${orderNumber}, AP: ${orderAp}.`)

  // Complete a função customerInfo() para que seu retorno seja similar a 'Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'.
};

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  let value = 'Luiz Silva'
  let newKey = 'name'
  order[newKey] = value;
  newKey = 'payment';
  value = {};
  order[newKey] = value;
  const newObj = order.payment;
  newKey = 'total';
  value = 50
  newObj[newKey] = value;

  const name = order.name
  const food = Object.keys(order.order.pizza);
  const beverage = Object.values(order.order.drinks.coke);
  const total = order.payment.total

  console.log(`Olá ${name}, o total do seu pedido de ${food[0]}, ${food[1]} e ${beverage[0]} é R$ ${total}.`)

};

orderModifier(order);