
// Uma High Order Function é uma função que recebe como parâmetro outra função ou retorna um função. Este parâmetro em forma de função tem o nome técnico de "callback".

// EXEMPLO CLÁSSICO DE HIGHER ORDER FUNCION: ADD EVENT LISTENER

const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log('Registrado com sucesso!');
};

button.addEventListener('click', registerUser);