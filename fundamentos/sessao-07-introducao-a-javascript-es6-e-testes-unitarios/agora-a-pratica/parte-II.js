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
  const deliveryPerson = Object.values(order.order.delivery)[0];
  const name = order.name;
  const phone = order.phoneNumber;
  const rua = Object.values(order.address)[0]
  const numero = Object.values(order.address)[1]
  const apto = Object.values(order.address)[2]
  return console.log(`Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phone}, R. ${rua}, Nº: ${numero}, AP: ${apto}`)
};

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const marguerita = Object.keys(order.order.pizza)[0];
  const pepperoni = Object.keys(order.order.pizza)[1];
  const drink = order.order.drinks.coke.type;
  Object.assign(order, { name: 'Luiz Silva' });
  Object.assign(order.payment, { total: 50 });
  const newName = order.name;
  const newPrice = order.payment.total;
  return console.log(`Olá ${newName}, o total do seu pedido de ${marguerita}, ${pepperoni} e ${drink} é R$ ${newPrice}`);
};

orderModifier(order);