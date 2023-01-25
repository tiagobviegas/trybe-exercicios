// Não consegui fazer o exercícios, então recorri ao gabarito para estudar o código e entender melhor sua dinâmcia e a do exercício proposto

// Vamos importar nossa biblioteca
import validator from 'validator';
import './style.css';

// Aqui, vamos selecionar, pelos ids, os campos em nossa página
const campoDeTexto = document.querySelector('#value');
const botao = document.querySelector('#button');
const seletor = document.querySelector('#option');
const textoDeSaida = document.querySelector('#answer');

const UUID_VERSION = 4;

botao.addEventListener('click', (event) => {
  // Vamos usar o preventDefault() para evitar que, ao
  // clicar no botão, ele recarregue a página
  event.preventDefault();

  // Aqui, criamos um objeto cujas chaves são os tipos a
  // serem validados. Por exemplo, a chave CPF valida se
  // o campoDeTexto.value é um CPF.
  const campos = {
    CPF: validator.isTaxID(campoDeTexto.value, 'pt-BR'), // retorna um booleano
    hexColor: validator.isHexColor(campoDeTexto.value), // retorna um booleano
    email: validator.isEmail(campoDeTexto.value), // retorna um booleano
    uuid: validator.isUUID(campoDeTexto.value, UUID_VERSION), // retorna um booleano
    url: validator.isURL(campoDeTexto.value), // retorna um booleano
  };

  const check = () => (campos[seletor.value] ? 'válido' : 'inválido');

  // O objeto 'campos' possui as chaves com o mesmo nome
  // das opções do seletor em nossa página. Assim, podemos
  // selecionar a chave de acordo com o selecionado no HTML
  textoDeSaida.innerHTML = `O ${seletor.value} é ${check()}`;
});