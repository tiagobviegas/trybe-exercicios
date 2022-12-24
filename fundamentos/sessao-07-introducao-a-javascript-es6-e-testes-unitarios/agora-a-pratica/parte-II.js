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
  const deliveryPerson = Object.values(order.order.delivery)[0]
  const address = Object.values(order.address)
  return console.log(`Olá ${deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${address[0]}, Nº: ${address[1]}, AP: ${address[2]}`)
};

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const food = Object.keys(order.order.pizza);
  const drink = order.order.drinks.coke.type;
  const payment = order.payment;
  Object.assign(order, { name: 'Luiz Silva' });
  Object.assign(payment, { total: 50 })
  return console.log(`Olá ${order.name}, o total do seu pedido de ${food[0]}, ${food[1]} e ${drink} é R$ ${payment.total}`)
};

orderModifier(order);