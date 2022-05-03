// EXEMPLO CLÁSSICO DE HIGHER ORDER FUNCION: ADD EVENT LISTENER

const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log('Registrado com sucesso!');
};

button.addEventListener('click', registerUser);
