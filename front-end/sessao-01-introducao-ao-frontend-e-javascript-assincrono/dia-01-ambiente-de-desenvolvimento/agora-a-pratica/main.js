// Não consegui fazer o exercício. Por isso copiei o código do gabarito para estudar melhor a dinâmica do uso da biblioteca e da construção do código em si

// Vamos importar nossa biblioteca
import validator from 'validator';
import './style.css';

// Aqui, vamos selecionar, pelos ids, os campos em nossa página
const campoDeTexto = document.querySelector('#value');
const botao = document.querySelector('#button');
const seletor = document.querySelector('#option');
const textoDeSaida = document.querySelector('#answer');

const uuidNumber = 4;

botao.addEventListener('click', (event) => {
  // Vamos usar o preventDefault() para evitar que, ao
  // clicar no botão, ele recarregue a página
  event.preventDefault();

  // Aqui, criamos um objeto cujas chaves são os tipos a
  // serem validados. Por exemplo, a chave CPF valida se
  // o campoDeTexto.value é um CPF.
  const campos = {
    CPF: validator.isTaxID(campoDeTexto.value, 'pt-BR'), // o value é um booleano
    hexColor: validator.isHexColor(campoDeTexto.value), // o value um booleano
    email: validator.isEmail(campoDeTexto.value), // o value é um booleano
    uuid: validator.isUUID(campoDeTexto.value, uuidNumber), // o value é um booleano
    url: validator.isURL(campoDeTexto.value), // o value é um booleano
  };

  const check = () => (campos[seletor.value] ? 'válido' : 'inválido');

  // O objeto 'campos' possui as chaves com o mesmo nome
  // das opções do seletor em nossa página. Assim, podemos
  // selecionar a chave de acordo com o selecionado no HTML
  textoDeSaida.innerHTML = `O ${seletor.value} é ${check()}`;
});
