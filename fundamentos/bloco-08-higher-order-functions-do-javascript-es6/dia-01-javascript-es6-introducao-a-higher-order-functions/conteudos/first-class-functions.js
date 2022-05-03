//  MODELO DE FIRST CLASS FUNCTIONS USANDO CALLBACK
//  
//  const sayHello = () => {
//    return ('hello trybers');
//  }
//  
//  const printGreeting = (callback) => {
//      console.log(callback());
//  }
//  
//  printGreeting(sayHello);


const sayHello = (name) => {
  return (`Hello, ${name}`);
}

const printGreeting = (greetings) => {
    console.log(`${greetings}! Welcome to Canada!`);
}

printGreeting(sayHello('Tiago'));
