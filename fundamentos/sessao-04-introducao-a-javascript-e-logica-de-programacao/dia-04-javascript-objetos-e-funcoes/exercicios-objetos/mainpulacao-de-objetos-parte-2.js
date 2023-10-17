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

const customerInfo = (fullOrder) => {
  // Adicione abaixo as informações necessárias.
  const entregador = fullOrder['order']['delivery']['deliveryPerson'];
  const clienteNome = fullOrder['name'];
  const clienteFone = fullOrder['phoneNumber'];
  const clienteRua = fullOrder['address']['street'];
  const clienteNumero = fullOrder['address']['number'];
  const clienteApto = fullOrder['address']['apartment'];
  
  return `Olá, ${entregador}, entrega para: ${clienteNome}, Telefone: ${clienteFone}, ${clienteRua}, Número: ${clienteNumero}, AP: ${clienteApto}.`
}

console.log(customerInfo(order));

const orderModifier = (fullOrder) => {
  // Adicione abaixo as informações necessárias.
  fullOrder['name'] = 'Luiz Silva';
  fullOrder['payment']['total'] = 50;
  
  const novoClienteNome = fullOrder['name'];
  const total = fullOrder['payment']['total'];


  return `Olá, ${novoClienteNome}, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ ${total}.`
}

console.log(orderModifier(order));